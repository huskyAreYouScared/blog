# 项目初始化
[[toc]]
## 简介
* 开发husky-subtitle是基于electron-vue这个脚手架进行开发的，有些插件和配置比较老，所以会遇到一些坑在这里记录一下
* [electron-vue GitHub传送门](https://github.com/SimulatedGREG/electron-vue)

## 项目初始化

* 这里默认大家安装了[vue-cli](https://cli.vuejs.org/zh/)
```bash
  vue init simulatedgreg/electron-vue my-project
```
* 之后会问一些关于初始化项目配置的问题，按照个人需求选择即可

## 首先解决electron、node-sass下载慢
* 在项目/目录，新建 .npmrc文件
* :koala: 将仓库指定到国内的taobao源
```bash
  registry=https://registry.npm.taobao.org
  sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
  electron_mirror=https://npm.taobao.org/mirrors/electron/
```
## node-sass安装失败
* 很有可能是node对node-sass版本的最低限制导致的，在这里可以查看安装相应版本的[node-sass](https://www.npmjs.com/package/node-sass)

## electron版本升级到V7.1.9LTS <Badge text="可以选择更高版本的LTS版"/>
* 在package.json文件中将electron的版本 V2.x --> V7.1.9
```js
  "devDependencies": {
    ...
-    "electron": "^2.0.4",
+    "electron": "^7.1.9",
    "electron-debug": "^1.5.0",
    ...
```
* 但是通过上面的步骤配置完成要安装electron V7.1.9版本会报错，经过查资料发现居然要换一下electron 的镜像，可能后面会修复这个问题
* :koala: 修改electron_mirror镜像地址
```bash
  registry=https://registry.npm.taobao.org
  sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
  electron_mirror=https://npm.taobao.org/mirrors/electron

  // 时间：2020.1.19
```
* 接下来在node_modules文件夹中删除electron然后重新 npm install or yarn install

## electron手动配置path.txt和dist
* 完成了上面这个步骤，在运行`yarn run dev`的时候可能会遇到一下错误
```sh
  绝对路径/node_modules/electron/index.js:14
    throw new Error('Electron failed to install correctly, please delete node_modules/electron and try installing again')
```

* 如果遇到上面这个错误，就要去`node_modules`目录检查一下`electron`中是否有`path.txt`文件和`dist`文件夹
* 如果没有需要在`https://npm.taobao.org/mirrors/electron`这个网址中下载对应平台的electron
* 以64位操作系统举例，windows应该下载带有`win32-x64`，mac应该下载`darwin-x64`
* 然后在`node_modules/electron`中新建`dist`,将下载好的文件，解压缩后放入`dist`中
* mac系统，在`path.txt`中写入以下内容
```sh
Electron.app/Contents/MacOS/Electron
```
* windows系统，在`path.txt`中写入以下内容
```sh
electron.exe
```
* 此时就可以运行了，当然也可能别的错误，如果有请继续往下看

## process报错
:koala:
<img :src="$withBase('/image/electron-process-error.png')" alt="dock">

### 解决办法
* 分别在.electron-vue的webpack.renderer.config和webpack.web.config中的new HtmlWebpackPlugin的配置进行更改
```js
   // webpack.renderer.config
   // ...
    new MiniCssExtractPlugin({filename: 'styles.css'}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.ejs'),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
+     templateParameters(compilation, assets, options) {
+       return {
+         compilation: compilation,
+         webpack: compilation.getStats().toJson(),
+         webpackConfig: compilation.options,
+         htmlWebpackPlugin: {
+           files: assets,
+           options: options
+         },
+         process,
+       };
+     },
      nodeModules: process.env.NODE_ENV !== 'production'
        ? path.resolve(__dirname, '../node_modules')
        : false
    }),
    new webpack.HotModuleReplacementPlugin(),
    // ...

    // webpack.web.config
    // ...
    new MiniCssExtractPlugin({filename: 'styles.css'}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.ejs'),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
+    templateParameters(compilation, assets, options) {
+       return {
+         compilation: compilation,
+         webpack: compilation.getStats().toJson(),
+         webpackConfig: compilation.options,
+        htmlWebpackPlugin: {
+          files: assets,
+          options: options
+        },
+        process,
+      };
+     },
      nodeModules: false
    }),
    new webpack.DefinePlugin({
      'process.env.IS_WEB': 'true'
    }),
    // ...
```
## npm run dev eslint导致报错
* 只是代码格式的问题，不影响运行
## require报错

### 解决办法
* 在/src/main/index.js文件中加入代码
```js
// 在createWindow函数中新增
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
+   webPreferences: {
+    nodeIntegration: true
+   }
  })
```
* 默认集成node是false,所以我们改成true即可 
[相应文档](https://electronjs.org/docs/api/browser-window#new-browserwindowoptions)

 >到这里项目就可以正常通过 npm run dev 启动了

## 遇到HMR 不能正常工作
* 打开控制台发现renderer.js的请求一直是pending状态
### 解决办法
* 进入 .electron-vue目录中的dev-runner.js文件中[issue](https://github.com/SimulatedGREG/electron-vue/issues/437)
```js
const server = new WebpackDevServer(
      compiler,
      {
        contentBase: path.join(__dirname, '../'),
        quiet: true,
        before (app, ctx) {
          app.use(hotMiddleware)
          ctx.middleware.waitUntilValid(() => {
            resolve()
          })
        }
      }
    )
```
* 改写成
```js
const server = new WebpackDevServer(
      compiler, {
        contentBase: path.join(__dirname, '../'),
        quiet: true,
        hot: true, // <-- the fix!
        before(app, ctx) {
          // app.use(hotMiddleware) // <-- not necessary!
          ctx.middleware.waitUntilValid(() => {
            resolve()
          })
        }
      }
    )
```


## electron-builder打包遇到报错
### Fatal error：Unable to commit changes
* 这个报错是模板初始化的时候选择了electron-builder的情况
![electron-builder打包报错](https://imgkr.cn-bj.ufileos.com/5a36cd50-ab99-4adc-9f28-b0bf57ad9c6b.png)
* 解决办法，electron-builder github issue中已经有开发者回答了[传送门](https://github.com/electron-userland/electron-builder/issues/3122#issuecomment-509110200)
* 也就是说需要更新electron-builder的版本，这个时候只需要下载最新版本即可
```bash
yarn add electron-builder@latest -D
```
##### :koala: 考拉 因为澳大利亚大火很多动物遇难，希望大火早日熄灭 --2020.1.19