# 关于js的模块导入导出

## es6的模块导出
### 单个导出和倒入
* 导出
```js
// 导出属性
export let dogName = 'husky'
// 导出方法
export function showName () {
  console.log(dogName)
  return dogName
}
```
* 导入
```js
import {dogName, showName} from 'xxx'
```
* 这里需要注意的是变量的名字必须和导出的时候一样否则导入失败
### export default
* 默认导出,每个js文件只能有一个default导出
* 可以和 export 单个导出共存在一个文件中
```js
// 默认导出函数
export default ()=>{
  console.log('husky')
}
```
```js
// 导出一个值
export default 'husky'
export let dogName = 'small husky'
```
* 默认导出的引入方式，名字随一起，只要符合规范都可以

```js
// 只引入default导出的属性或者方法
import customHusky from 'xxx'
// 引入default导出的属性或者方法，和引入单个导出可以并存
import customHusky,{ dogName } from 'xxx'
```

## node中的模块

### require引入es6的模块导出
* 在`a.js`文件中分别用`es6`的单个导出和默认导出
* 在`index.js`中通过`node`的`require`方式引入
```js
// a.js 
export function show(){
  console.log('husky')
}
export function speak(){
  console.log('woof woof')
}
export default like(){
  console.log('food')
}
// index.js
let a = require('./a.js')
```
* 这个时候需要注意了使用`require`引入`es6`的模块，`export` 导出的属性或者函数会在`a`对象下
* `export default `导出的属性或者函数会在`a`对象的`default`属性下
