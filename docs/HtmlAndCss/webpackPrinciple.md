# webpack打包简易版

## 工程目录准备
```bash
#目录结构
└─bin
    └─index.js
    └─lib
      └─Compiler.js
      └─webpackTemplate.ejs
```
## npm link 
* [npm link 使用方式](/HtmlAndCss/CLI.html#link-到全局)
```bash
npm link
```
```bash
npm link [custom-webpack]
```
## 主文件
* 读取执行命令当前目录的webpack.config.js配置文件
* 在首行一定要标注执行脚本的解释器
```js
// 文件/bin/index.js

#! /usr/bin/env node

let path = require('path')
// 获取config文件
let config = require(path.resolve('webpack.config.js'))

let Compiler = require('./lib/Compiler.js')

let compiler = new Compiler(config)

compiler.run()
```

## Compiler逻辑编写
* 在`index`文件中引入了`compiler`，接下来编写一下内部逻辑
### 先把该有的结构准备好
```js
// 文件/bin/lib/Compiler.js
      
class Compiler {
  constructor(config) {
    this.config = config
  }
  run() {}
}
module.exports = Compiler
```
### 先在构造函数中准备需要用到的属性
```js
// 文件/bin/lib/Compiler.js

class Compiler {
  constructor(config) {
    this.config = config // webpack.config.js的配置文件
    this.entryId = null // 入口文件
    this.root = process.cwd() // 当前目录
    this.modules = {} // 收集到的全部模块
  }
  run() {}
}
module.exports = Compiler
```
### run方法内部逻辑编写
* 这里`moduleDependencies`，`saveFile`还没有实现，我们先调用后面实现，把基本传参先设定好
```js
// 文件/bin/lib/Compiler.js

    run() {
        // 模块依赖收集
        // 第一个参数：文件的入口
        // 第二个参数：是否为入口文件
        this.moduleDependencies(path.resolve(this.root, this.config.entry), true)
        // 生成最后的打包文件
        this.saveFile()
    }
```

### moduleDependencies模块依赖收集
* `parse`函数是用来解析的，在下一步实现
* `moduleDependencies`函数主要是将`parse`中解析得到的`dependencies`，进行递归遍历，对子模块的引用进行收集
* 将路径和源码进行一一绑定上，关系存储在`modules`变量中
```js
// 文件/bin/lib/Compiler.js

    let fs = require('fs')
    // .....省略很多代码.....
   moduleDependencies(modulePath, isEntry) {
    let source = this.getCode(modulePath)
    // 获取相对路径
    let moduleName = ('./' + path.relative(this.root, modulePath))
    if (isEntry) {
      this.entryId = moduleName // 保存入口名字
    }
    let { sourceCode, dependencies } = this.parse(source,path.dirname(moduleName))
    this.modules[moduleName] = sourceCode
    dependencies.forEach(subRequire=>{
      this.moduleDependencies(path.join(this.root, subRequire),false)
    })
  }
  // 获取源码
  getCode(modulePath) {
    return fs.readFileSync(modulePath, 'utf8')
  }
```

### parse解析，通过AST修改源码
* 这里需要借助babel提供的对AST操作的一些工具包
* [babylon](https://babeljs.io/docs/en/babylon) 将源码转化为AST
* [@babel/traverse](https://babeljs.io/docs/en/babel-traverse) 源码转换
* [@babel/generator](https://babeljs.io/docs/en/babel-generator) 将AST转换为源码
* [@babel/types](https://babeljs.io/docs/en/next/babel-types) AST中涉及到的type工具包
* [AST在线预览网站](https://astexplorer.net/)
```bash
npm i babylon @babel/traverse @babel/generator @babel/types
```
* 
```js
// 文件/bin/lib/Compiler.js

  const babylon = require('babylon')
  const traverse = require('@babel/traverse').default
  const generator = require('@babel/generator').default
  const types = require('@babel/types')

  // ...省略重复代码...

  // AST解析
  parse(source,parentPath){
    // 对源码进行解析
    let ast = babylon.parse(source)
    // 收集该模块中引用的其他模块
    let dependencies = []
    // 这里主要的任务就是将 模块中的require引用修改成 我们自定义的模块引用名称 __webpack_require__
   
    traverse(ast,{
      CallExpression(p){
        let node = p.node
        if(node.callee.name === 'require'){
          node.callee.name = '__webpack_require__'
          let moduleName = node.arguments[0].value // 获取到模块引用名
          moduleName = moduleName + (path.extname(moduleName)?'':'.js')
          // 将文件名拼成相对路径
          moduleName = './' + path.join(parentPath, moduleName)
          // 收集依赖的子模块
          dependencies.push(moduleName)
          node.arguments = [types.stringLiteral(moduleName)]
        }
      }
    })
    // 将修改后的AST转换成源码
    let sourceCode = generator(ast).code
    // 将源码和依赖返回
    return {
      sourceCode,
      dependencies
    }
  }
```

### saveFile 打包生成文件
* 这一步我们需要用到字符串模板 `ejs`
```bash
    npm i ejs
```
* 我们先准备一下webpackTemplate模板
```js
//文件 webpackTemplate.js

(function (modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  return __webpack_require__(__webpack_require__.s = "<%-entryId%>");
})
  ({
    <%for(let key in modules){%>
      "<%-key%>":
          (function (module, exports, __webpack_require__) {
              eval(`<%-modules[key]%>`);
          }),
      <%}%>
  });
```
* 到这步就很简单了，先读取模板文件
* 传入`entryId`，`modules`中已经保存的值
* `fs.writeFileSync`生成文件
```js
// 文件/bin/lib/Compiler.js
    saveFile() {
        let main = path.resolve(__dirname,'./webpackTemplate.ejs')
        let templateString = this.getSource(main)
        let code = ejs.render(templateString, {
            entryId: this.entryId,
            modules: this.modules
        })
        fs.writeFileSync(path.join(this.config.output.path, this.config.output.filename), code)
    }
```
* 到这里最简易版的就完成了，之后还会涉及到loader等等需要处理

### loader逻辑处理
* 在模块编写依赖收集逻辑的地方`moduleDependencies`用到了一个`getCode`方法
```js
// 文件/bin/lib/Compiler.js--getCode
getCode(modulePath) {
    // 先获取webpack中module.rules的配置
    let rules = this.config.module.rules
    let content = fs.readFileSync(modulePath, 'utf8')
  
    let rulesLength = rules.length
    // 遍历所有规则
    for (let index = 0; index < rulesLength; index++) {
      let { test, use } = rules[index]
      let loaderLength = use.length - 1
      // 对匹配成功的代码内容做修改
      if (test.test(modulePath)) {
       // 每个规则可能存在多个loader处理,递归调用，从最后一个 loader 一直处理到第一个 loader
        function normalLoader() {
          let loader = require(use[loaderLength--])
          content = loader(content)
          // 如果小于零代表全部loader处理完成
          if (loaderLength >= 0) {
            normalLoader()
          }
        }
        normalLoader()
      }
    }
    // 经过处理之后的代码，或者不需要处理的代码
    return content
  }
```

### loader简单原理
* loader一般都是一个函数，入参是需要处理的代码，返回值是处理之后的代码
```js
let tool = require('引入编译包')
function customLoader(source){
  // 伪代码 通过相应的编译包对源代码进行处理
  let content = tool.render(source)

  // 将处理好的结果返回
  return content
}
module.exports = customLoader
```
* 举例 less-loader
```bash
npm i less
```
```js
let less = require('less')
function lessLoader(source){
  let lessCode = ''
  less.render(source,function (err,code){
    lessCode = code.css
  })
  lessCode = lessCode.replace(/\n/g, '\\n')
  return lessCode
}
module.exports = lessLoader
```
