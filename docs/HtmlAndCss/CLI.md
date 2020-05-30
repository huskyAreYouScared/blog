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
```js
// /bin/index.js
#!/usr/bin/env node
console.log('husky are you scared')
```
* index.js文件第一行一定要声名使用那个执行器来执行这里写node
* deno现在也发布了1.0.0版本，说不定之后就用deno了
* 需要在`package.json`中加入`bin`字段
```json{5,6,7}
{
  "name": "chrome-plugin-basic-cli",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "bin": {
    "basic-chrome-plugin": "./bin/index.js"
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
* 在当前目录在连接一下，方便调试，如果后期发到`npm`上了，可以直接`npm install <package-name>`即可
* 开发阶段可以这样安装到本项目中
```bash
  npm link chrome-plugin-basic-cli # 这里是自己定义的名字，就是package中的bin对象的属性名
```
:::tip
注意这里npm link xxx 是package.json中的name字段，同样npm install 也是
当在命令行执行命令的时候才用bin中定义的名字来执行
:::

### 简化命令
* 可以看到为了语义化我们的命令行工具，名字很长这里我们给他取一个简短的名字
* 在`bin`对象下再新建一个属性，和`basic-chrome-plugin`指定的文件是同一个
```json
{
  "name": "chrome-plugin-basic-cli",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "bin": {
    "basic-chrome-plugin": "./bin/index.js",
    "chromeCli": "./bin/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```


## 命令行参数
### 用process.argv获取命令行参数
* 获取命令行的参数
```js
process.argv // 可以获取到我们输入的参数
```
* 举例：chromeCli -v
* process.argv会返回一个数组
* 数组第一个元素是node执行器的位置
* 第二个元素是当前命令的位置
* 第三个参数才是我们输入的参数，一次往后都是我们输入的参数，输入多个参数用空格隔开
```bash
chromeCli list init name ....
```

### 使用commander工具包
* 首先来安装一下[commander](https://github.com/tj/commander.js)
```bash
  yarn add commander
```
#### 完成-V --version 的参数功能
```js
// /bin/index.js

const { program } = require('commander')
const package = require('./package.json')

program.version(package.version)

program.parse(process.argv)
```
* 此时在命令行中 `chromeCli -V` 或 `chromeCli --version` 就会打印`package.json`中的`version`

#### 定义 init 命令
* 这里我们以初始化项目模板功能进行演示，首先需要介绍几个API
1. command 命令名称
  * <require> 代表必填参数
  * [option] 代表可选参数
2. description 命令描述
3. action 执行该命令的方法

```js
// /bin/index.js
program
  .command('init <template> <project-name>') // 定义init 命令和两个必填参数
  .description('init chrome plugin project') // 描述
  .action(function (template, projectName) { // 获取参数 并根据所输入的参数完成相应逻辑
    console.log('%s -- %s', template, projectName)
  })

program.parse(process.argv) // 解析参数 必须要执行 一定要放在所有命令的最后执行
```

#### 定义 list 命令
```js
const templates = {
  'basic': {
    repoUrl: 'https://github.com/huskyAreYouScared/husky-tools',
    description: '基础的chrome plugin 需要的文件模板'
  }
}

program
  .command('list')
  .action(()=>{
    for (let key in templates) {
      console.log(`${key} ${templates[key].description}`);
    }
  })


program.parse(process.argv)
```
* 在命令行输入 `chromeCli list` 就会打印`templates`中的模板信息

#### 下载github上的模板
* 在下载之前首先要在`GitHub`上面新建仓库，这个步骤就不在这里记录了
* 将`repo`的地址放在`templates`中即可
* 这里我们要借助`download-git-repo`的第三方包来下载模板
```bash
yarn add download-git-repo
```
* 需要在之前的templates对象中新增downloadUrl，这个属性是传给download-git-repo的第一个参数
* downloadUrl的路径应该遵循这样的规范
```
  https://github.com:账户/repositry#分支
```
```js
const templates = {
  'basic': {
    repoUrl: 'https://github.com/huskyAreYouScared/husky-tools',
    downloadUrl: 'https://github.com:huskyAreYouScared/husky-tools#master',
    description: '基础的chrome plugin 需要的文件模板'
  }
}

program
  .command('init <template> <project-name>')
  .description('init chrome plugin project')
  .action(function (template, projectName) {
    downloadGitRepo(templates[template].downloadUrl, projectName, { clone : true }, (err)=>{
      if (err) {
        console.log(err);
      } else {
        console.log('success');
      }
    })
  })

program.parse(process.argv)
```

* 此时执行 chromeCli init basic demo就会将github上面的模板下载下来