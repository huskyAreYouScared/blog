# webpack简易版

## 工程目录准备
```bash
#目录结构
└─bin
    └─index.js
└─package.json
```
## npm link 
* [npm link 使用方式](/HtmlAndCss/CLI.html#link-到全局)
```bash
npm link
```
```bash
npm link [custom-webpack]
```
## 读取webpack.config.js配置
```
└─bin
    └─index.js
```
* 在首行一定要标注执行脚本的解释器
```js
#! /usr/bin/env node

let path = require('path')
// 获取config文件
let config = require(path.resolve(__dirname))
```