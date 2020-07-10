# 项目初始化，升级electron

## 简介
* 开发husky-subtitle是基于electron-vue这个脚手架进行开发的，有些插件和配置比较老，所以会遇到一些坑在这里记录一下
* [electron-vue GitHub传送门](https://github.com/SimulatedGREG/electron-vue)

## 项目初始化

* 这里默认大家安装了[vue-cli](https://cli.vuejs.org/zh/)
```bash
  vue init simulatedgreg/electron-vue my-project
```
* 之后会问一些关于初始化项目配置的问题，按照个人需求选择即可

## 首先解决electron下载慢和node-sass失败的问题
* 在项目/目录，新建 .npmrc文件
* :koala: 将仓库指定到国内的taobao源
```bash
  registry=https://registry.npm.taobao.org
  sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
  electron_mirror=https://npm.taobao.org/mirrors/electron/
```

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

## 运行npm run dev,如果又遇到了process报错
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
## 以为什么都ok了，结果又发现require报错

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

## 到这里项目就可以正常通过 npm run dev 启动了

##### :koala: 考拉 因为澳大利亚大火很多动物遇难，希望大火早日熄灭 --2020.1.19