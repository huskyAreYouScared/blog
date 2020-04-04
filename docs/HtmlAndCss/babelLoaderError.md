# IE配置及报错SCRIPT1006: 缺少 ')'等错误
* 出现上面的错误最容易想到的就是，IE不认识这样的语法（es6+）
* 在项目开发中会使用大量的`ES6`及以上的`js`语法,为了兼容性问题，需要将`ES6+`语法转译为`ES5`
* 但是现在在开发中大部分用的都是已经配置好的各种脚手架，其实都已经将`Babel`转译的部分配置好了
* 我是用的是Vue-cli3脚手架搭建的项目

## 先来看一下错误
<img style="" :src="$withBase('/image/ie-error-babel.png')" alt="dock">

## 错误发现
* 在使用`Vue-cli3`脚手架默认情况下 `babel-loader` 会忽略所有 `node_modules` 中的文件
* 在项目里看一下引入了什么导致的
```js
import ECharts from 'vue-echarts/components/ECharts' 
Vue.component('v-chart', ECharts)
```
## 错误解决
* 在Vue-cli官网的配置参考中给出了解决办法
* [传送](https://cli.vuejs.org/zh/config/#transpiledependencies)
* 只需要在`vue.config.js`的`module.exports`对象中加入
```js
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
```
## 总结
* 官网文档还是要好好的研究一下，仔细的那种
