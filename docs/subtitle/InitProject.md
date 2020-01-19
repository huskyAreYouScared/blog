### 项目初始化

#### 开发husky-subtitle是基于electron-vue这个脚手架进行开发的，有些插件和配置比较老，所以会遇到一些坑在这里记录一下
* [electron-vue GitHub传送门](https://github.com/SimulatedGREG/electron-vue)

### 项目初始化

* 这里默认大家安装了[vue-cli](https://cli.vuejs.org/zh/)
```bash
  vue init simulatedgreg/electron-vue my-project
```
* 之后会问一些关于初始化项目配置的问题，按照个人需求选择即可

### 首先解决electron下载慢和node-sass失败的问题
* 在项目/目录，新建 .npmrc文件
* :koala: 将仓库指定到国内的taobao源
```bash
  registry=https://registry.npm.taobao.org
  sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
  electron_mirror=https://npm.taobao.org/mirrors/electron
```

### electron版本升级到V7.1.9LTS
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
  electron_mirror=https://cdn.npm.taobao.org/dist/electron/

  // 时间：2020.1.19
```
* 接下来在node_modules文件夹中删除electron然后重新 npm install or yarn install

### 安装好dependencies之后，运行npm run dev,如果又遇到了process报错，如下图
:koala:
<img :src="$withBase('/image/electron-process-error.png')" alt="dock">

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

#### 到这里项目就可以正常通过 npm run dev 启动了

##### :koala: 考拉 因为澳大利亚大火很多动物遇难，希望大火早日熄灭 --2020.1.19