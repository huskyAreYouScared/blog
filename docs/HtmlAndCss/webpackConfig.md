# webpack.config小记
## 常用
## 不常用

### loader类型

* `pre`前置`loader`
* `normal`普通的`loader`
* `inline`行内`loader`
* `post`后置`loader`
* 通过`enforce`来处理
``` js
// * 使用方式
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['customLoader],
        enforce:'pre'
      }
    ]
  }
```

### inline-loader 行内loader

* 在代码中使用的 `loader` 
``` js
let es6 = require('babel-loader!./es6.js')
```
* 在行内loader之前加入不同的符号可以分别限制pre,normal,inline,post四种类型loader的执行
* -! 不在执行pre和normal类型的loader
* ! 不执行normal类型的loader
* !! 只执行inline类型的loader
```js
let es6 = require('!!babel-loader!./es6.js')
// 表示只执行babel-loader一个inline类型的loader其他匹配到的loader全都不执行
// pitch normal
```

### resolveLoader

* 以下两种方式用的不多，一般在自己开发loader的时候需要用到，方便调试
* 配置 `loader` 的别名 `resolveLoader.alias` , 在 `rules` 中使用
* 配置 `loader` 的寻找目录，默认是 `node_modules` , 可以在 `resolveLoader.modules` 添加

``` js
let path = require('path')
module.export = {
// .......
resolveLoader: {
    // alias: {
    //     customLoader: path.resolve(__dirname, 'loaders', 'customLoader.js')
    // },
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
},
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['customLoader]
      }
    ]
  }
  // .......
}
```
