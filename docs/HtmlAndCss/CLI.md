# 做一个自己的CLI
::: tip
英语：command-line interface
缩写：CLI
:::

## 初始化
```bash
  npm init -y
```
* 在当前目录下初始化`package.json`文件
## 准备文件
```bash
#目录结构
└─bin
    └─index.js
└─package.json
```

* 在当前项目增加`bin`文件夹在`bin`中新建`index.js`文件
* 需要在`package.json`中加入`bin`字段
```json{5,6,7}
{
  "name": "twohaha",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "bin": {
    "twohaha": "./bin/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
## link 到全局
* 在当前项目目录下执行连接到全局
```bash
  npm link
```
* 在当前目录在连接一下，方便调试，如果后期发到`npm`上了，可以直接`npm install [cli]`即可
* 开发阶段可以这样简单调试使用
```bash
  npm link [twohaha] # 这里是自己定义的名字，就是package中的name字段
```