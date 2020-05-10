---
sidebarDepth: 3
---
# webpack.config小记
## 常用
### 打包分类
* 图片打包到image目录下
```js
module:{
  rules:[
    {
      test:/\.jpe?g|\.png|\.gif/ig,
      use:{
        loader:'url-loader',
        options:{
          outputPath:'/img/',
          // 如果图片要发布到cdn上面，可以在url-loader中加入publicPath
          publicPath:'http://cdn.com'
        }
      }
    }
  ]
}
```
* css打包到style目录下
* css单独打包需要插件[mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)
```bash
  npm i mini-css-extract-plugin
```
```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  plugins: [new MiniCssExtractPlugin({
    filename:'/style/main.css'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'css-loader',
        ],
      },
    ],
  },
};
```
### 多页应用配置
* 主要是用到`entry`和`html-webpack-plugin`
```bash
npm i html-webpack-plugin -D
```
```js
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:{
    index:'./src/index.js',
    main:'./main/main.js'
  },
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new htmlWebpackPlugin({
      template:'./public/index.html',
      filename:'index.html', // 要和entry的键名相同
      chunks:['index']
    }),
    new htmlWebpackPlugin({
      template:'./public/index.html',
      filename:'main.html', // 要和entry的键名相同
      chunks:['main']
    })
  ]
}
```
### 生成sourceMap
* 会定位到行和列 ，单独生成map文件
```js
module.exports={
  devtool:'source-map', 
}
```
* 会定位到行和列 ，不单独生成map文件
```js
module.exports={
  devtool:'eval-source-map', 
}
```
* 不会定位到列 ，单独生成map文件
```js
module.exports={
  devtool:'cheap-module-source-map', 
}
```
* 不会定位到列 ，不单独生成map文件
```js
module.exports={
  devtool:'cheap-module-eval-source-map', 
}
```
### 优化
#### noParse
* `webpack`不去解析其中的依赖关系,被忽略的文件不应该有`import`,`require`,`define`或者其他导入机制
```js
  module:{
    noParse:/lodash|jquery/
    //....
  }
```
#### webpack.IgnorePlugin()插件
* 可以在使用第三方js插件的时候，限制该插件引入一些文件
```js
  plugins:[
    new webpack.IgnorePlugin(/\.\/locale/,/moment/)
  ]
```
#### webpack 的 DllPlugin()和 DllReferencePlugin()
##### 第一步
* 可以将平时开发的框架提前打包好，不用每次都打包
* 这里先写一下提前打包的准备,需要项目下新建一个`webpack`配置文件
```js
// webpack.vue.build.js
let path = require('path')
let webpack = require('webpack')
module.exports ={
  entry:{
    // react:['react','react-dom'],
    vue: ['vue','vuex','vue-router'],
  },
  output:{
    filename: '_dll_[name].js', // 需要`_dll_[name]`名字一致
    path: path.resolve(__dirname,'dist'),
    library: '_dll_[name]' // 需要`_dll_[name]`名字一致
  },
  plugins:{
    new webpack.DllPlugin({
      name: '_dll_[name]', // 需要`_dll_[name]`名字一致
      path: path.resolve(__dirname,'dist','manifest.json') // 生成单独打包的清单
    })
  }
}
```
* 写好配置之后，运行一下
```bash
npx webpack --config webpack.vue.build.js
```
* 此时就会在`dist`目录下生成`_dll_vue.js`和`manifest`

##### 第二步
* 做完第一步之后，还需要在`HTML`模板中引入一下打包好的`js`文件
```html
<!-- ... -->
<div id="App"></div>
<script src="./_dll_vue.js"></script>
<!-- ... -->
```
##### 第三步
* 在主`webpack.config.js`文件下加入插件，引入单独打包`manifest`清单
* 如果可以找到就不重新打包`第一步`已经打包的js插件，如果没找到就需要打包
```js
  plugins:[
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname,'dist','manifest.json')
    })
  ]
```

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
