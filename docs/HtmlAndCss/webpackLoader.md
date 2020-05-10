# loader开发小记

## 开发loader的工具类
* loader-utils 提供很多辅助loader的方法
* schema-utils 参数校验
* mime 获取文件类型

## 在异步处理后返回代码
* 通过`this.async()`来返回代码
* `asyncReturn` 第一个参数 `error`，第二个参数 `source`
```js
function loader(source){
  let asyncReturn = this.async()
  setTimeout(()=>{
    // 第一个参数 如果有什么错误，传在第一个参数中，如果没有给 null
    // 第二个参数为 异步处理后的代码
    asyncReturn(null,source)
  },1000)
}
module.exports = loader
```

## 处理文件
* `loader`匹配到的文件，保持文件的源文件格式
* 给`loader`增加属性`raw`来处理
```js
function loader(source){
  // 此时source就是匹配到的文件的源文件形式
  // 如果匹配到的图片等，那这里就是图片的二进制
}
loader.raw = true
module.exports = loader
```

## 通过loader生成文件
* 通过loader的this.emitFile实现
```js
function loader(source){
  // 第一个参数文件名，第二个参数文件内容
  this.emitFile('generatorFile.js','生成一个JS文件')
  return source
}
module.exports = loader
```


## css-loader简单实现
* 下面会用到正则表达式的`exec`, 根据返回值就可以看出`exec`的功能
* 正则表达式`reg`有一个`lastIndex`，它代表匹配的字符串的后面一个字符串的索引，根据这个索引可以继续向下遍历查找
```js
let reg = /\"(.+?)\"/g
let str = 'this is a "husky" , "are" you scared'
let matches = reg.exec(str)
console.log(matches);
// [
//   '"husky"',
//   'husky',
//   index: 10,
//   input: 'this is a "husky" , "are" you scared',
//   groups: undefined
// ]
console.log(reg.lastIndex); // 17
```
* 主要是对引入的资源进行处理例如`url('资源路径')`
* 首先用正则匹配全部的`url('资源路径')`
* 我们声明一个`arr`数组，初始值为`let list = []`，后面向`arr`数`push`的模板为`arr.push(`list.push(${source})`)`
* 最后通过`arr.join('\r\n')`来连接，拼成一段代码
* `while`中主要就是将`url('路径')`转成`url(require('路径')`，因为`require`可以被`webpack`进行处理
```js
function loader(source){
  let reg =/url\((.+?)\)/
  let pos = 0
  let current;
  let arr = ['let list = []']
  while(current = reg.exec(source)){
    let [matchUrl, group, frontIndex] = current
    arr.push(`list.push(${JSON.stringify(source.slice(pos, frontIndex))})`)
    arr.push(`list.push('url('+require(${group})+')')`)
    pos = reg.lastIndex
  }
  arr.push(`list.push(${JSON.stringify(source.slice(pos, frontIndex))})`)
  arr.push(`module.exports = list`) 
  return arr.join('\r\n')
}
```