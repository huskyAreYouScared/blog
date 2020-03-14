# ffmpeg-static根据不同平台进行打包
[[toc]]
## 1.webpack.renderer.config修改
* path .electron-vue->webpack-renderer.config
* 其实就是对渲染进程打包的相应配置文件
* 在webpack配置的插件部分增加copy-webpack-plugin相应的配置，配置如下
```js
  // 用来指定最后打包进electron中不同平台的ffmpeg 
  var platform = os.platform()
  var arch = os.arch()
  var ffmpegPath = path.join(
    '../node_modules/ffmpeg-static/bin/',
    platform,
    arch,
    platform === 'win32' ? 'ffmpeg.exe' : 'ffmpeg'
  )

  // ...省略不相关代码
  rendererConfig.plugins.push(
    new MinifyPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '../static'),
        to: path.join(__dirname, '../dist/electron/static'),
        ignore: ['.*']
      },
      // **************新增部分start***********************
      {
        from: path.join(__dirname, ffmpegPath),
        to: path.join(__dirname, '../dist/electron/static/ffmpeg'),
        ignore: ['.*']
      }
      // **************新增部分end***********************
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  )
  // ...省略不相关代码
```
* 上边这个简单的配置其实，作用就相当于在node_modules/ffmpeg-static/***下不同平台版本的ffmpeg在渲染进程打包的时候，一并复制到根目录下的/dist/electron/中，这里我们给他放到了/dist/electron/static/ffmpeg，后面需要用到这个路径，这里如果不一样后面在package.json中的配置也要改变
## 2.package.json配置修改
> 因为我用的打包工具是electron-builder所以可以在package.json中配置
```json
    // ...
   "win": {
      "icon": "build/icons/icon.ico",
      "extraResources": {
        "from": "./dist/electron/static",  // 在上面我们通过copy-webpack-plugin将ffmpeg复制到了/dist/electron/static，所以这里这样写，如果是其他的自行更改
        "to": "./",
        "filter": [
          "**/*"
        ]
      }
    },
    // ...
```

## 3.ffmpeg路径配置
* 在开发环境中可以这样使用
```js
  const ffmpegPath = require('ffmpeg-static')
```
> 打包之后的路径需要借助插件 app-root-dir
> 简要说明一下 
```js
  const appRootDir = require('app-root-dir')
  appRootDir.get() // 可以获取到electron打包的二进制文件，安装完后项目的根目录下的resources/app.asar
```
> 因为我们在上一步操作中是将ffmpeg打包到了resources/ffmpeg目录下，所以我们这里要处理一下

```js
  // 结合开发环境和生产环境可以写成这样
  // main.js vue主入口文件
  const os = require('os')
  let ffmpegPath = ''
  const platform = os.platform()
  if (process.env.NODE_ENV == 'development') {
    ffmpegPath = require('ffmpeg-static')
  } else {
    ffmpegPath = `${appRootDir.get().split('app.asar')[0]}ffmpeg/${platform === 'win32' ? 'ffmpeg.exe' : 'ffmpeg'}`
  }
  Vue.prototype.$ffmpegPath = ffmpegPath // 直接挂在在Vue实例原型上通过 this.$ffmpegPath调用
```

#### 目前只在windows10下进行了测试，后续补充其他开发环境
