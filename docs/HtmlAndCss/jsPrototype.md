# js原型知识小记

:::tip
本篇文章作为复习原型知识使用
:::

## __proto__ 和 prototype
* 首先我们先写一个类来帮助我们理解
```js
class Husky{}
console.dir(Huksy)
```
![proto](https://imgkr.cn-bj.ufileos.com/8df552fb-df41-42db-a03a-d159e88bc3a3.png)
* 可以看到，这里类中有两个原型，这里我们将一下区别
* `__proto__`原型一般是直接通过`Husky`来调用的时候使用
* `prototype`原型一般是`Husky`的实例来使用,我们来看一下例子
```js
let twohaha = new Husky()
console.log(twohaha.__proto__ === Husky.prototype)
// true

console.log(twohaha.__proto__ === Husky.__proto__)
// false
```
* 这说明我们实例化的对象的`__proto__`原型指向的是`Husky`的`prototype`原型

## 原型链示意图
![原型链](https://imgkr.cn-bj.ufileos.com/2f7a645b-aeaf-4469-946f-364ada1f6676.png)

## Object.create创建没有原型的对象
* 通过Object.create创建对象husky并在控制台打印，里面没有__proto__
```js
let husky = Object.create(null,{
  name:{
    value:'twohaha'
  }
})
console.log(husky)
// {name: "twohaha"}
//  name: "twohaha"
```