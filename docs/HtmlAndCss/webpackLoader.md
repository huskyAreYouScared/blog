# loader开发小记

## 开发loader的工具类
* loader-utils 提供很多辅助loader的方法
* schema-utils 参数校验
* mime 获取文件类型

## 在异步处理后返回代码
* 通过`this.async()`来返回代码
* `asyncReturn` 第一个参数 `error`，第二个参数 `content`
```js
function loader(content){
  let asyncReturn = this.async()
  setTimeout(()=>{
    // 第一个参数 如果有什么错误，传在第一个参数中，如果没有给 null
    // 第二个参数为 异步处理后的代码
    asyncReturn(null,content)
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