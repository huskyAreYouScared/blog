# 剖析 new

## 开门见山
* 首先我们来手动实现一个`new`关键字
```js
function $new(fn,...args){

  let obj = Object.create(fn.prototype);

  let res = fn.apply(obj, args)

  return res instanceof Object ? res : obj
}
```
* 简单几行代码就实现了和`new`一样的作用，每次看到这几段代码，反正是感觉自己会了，但是总感觉哪里又解释不清楚的地方
* 并且过一阵子总是忘记，那就出问题了，说明之前根本没有理解整个过程，只是看了别人文章会了写法，而不了解本质

> 不知道是不是只有我有这种感觉，就算是只有我，我也要找到其的本质，争取下次是靠理解推理出来的，而不是背出来的
> 要拿出当初学化学方程式配平的过程是靠理论推理，而不是靠死记硬背

## 解惑

### 原理
* new 的过程，其实就是在执行构造函数，最终返回原型指向构造函数的对象
  1. 创建一个空对象，将这个空对象指向构造函数的原型
  2. 执行构造函数，对传入的参数进行赋值
  3. 判断在构造函数中是否有提前结束构造函数的逻辑,也就是 `return` 掉
* 当然这几句话只是思路，忽略了很多细节，接下来对每一步进行着重深入理解

#### 第一步创建空对象，处理原型链
* 这个实现方式有很多，需要前置知识就是[原型链](./jsPrototype)，如果还不太理解，可以先了解一下
* 首先实现一下创建对象和原型链指向逻辑分开的方式
```js
function $new (fn, ...args){

  let obj = {}
  obj.__proto__ =  fn.prototype;
  console.dir(obj)
}
```
* 接下来在实现一个构造函数，用来测试每一步
```js
function Parent(name){
  this.name = name;
}

$new(Parent, 'husky')
// 输出：
// Parent
//   __proto__:
//     constructor: ƒ Parent(name)
//     __proto__: Object
```
* 可以看到此时`__proto__`原型指向的就是`Parent`构造函数的原型,此时目的已达成
* 但是可以优化，我们来改造一下，来完成相同的事情
```js
function $new(fn,...args){

  let obj = Object.create(fn.prototype);
  
  console.dir(obj)
}

$new(Parent, 'husky')
// 输出：
// Parent
//   __proto__:
//     constructor: ƒ Parent(name)
//     __proto__: Object
```
* 可以看到原型链指向没问题，方法可行，ok进入下一个环节

#### 第二步执行构造函数
* 这个简单，我们来实现以下，具体思想就是构造函数中执行的逻辑，`this`要是刚才我们新建的对象
* 很容易想到，`call`,`apply`,`bind`三个方法,但是这种情况`call`和`apply`更合适,这两个方法的区别也只是传递参数的区别

```js
function $new(fn,...args){

  let obj = Object.create(fn.prototype);
  
  fn.apply(obj, args) //  fn.call(obj, ...args)
}
```
#### 第三步处理构造函数中有return的情况
* 需要了解`值类型`（Number、String、Boolean、undefined、object、Null）和`引用类型`(Object,Function,Array,RegExp,Date等等)的前置知识
* 首先我们改造一下`Parent`构造函数,`return` 一个 值类型
```js
function Parent(name){
  this.name = name;
  return 'test' // Symbol('asds'), true, 1, undefined, null
}
let a = new Parent('a');
console.dir(a);
// 输出
// Parent
//   name: "a"
//   __proto__:
//     constructor: ƒ Parent(name)
//     __proto__: Object
```
* `return` 一个 引用类型
```js
function Parent(name){
  this.name = name;
  return {name : name} // new Date() , new RegExp()
}
let a = new Parent('a');
console.dir(a);
// 输出
// Object
//    name: "a"
//    __proto__: Object
```
* 根据这个实验发现，`return` 的返回值如果是值类型，就不会起作用,如果是引用类型就会返回那个引用类型的对象
* 那根据这个特性，我们就把最后一部实现一下,其实就是我们文章最开始那一段代码
```js
function $new(fn,...args){

  let obj = Object.create(fn.prototype);

  let res = fn.apply(obj, args)

  return res instanceof Object ? res : obj
}
```
* OK到这里我们就分析完毕了，是不更清晰了，相信一定深深的刻在了脑子里了，下次有小伙伴有困惑，可以按照这个思路进行讲解了
* 如果有错误的地方，可以在评论区指正，`GitHub`账号登录即可

## 参考资料

* [这些手写代码会了吗？少年](https://juejin.im/post/6856419501777846279)
* [面试官真的会问：new的实现以及无new实例化](https://juejin.im/post/6850037282319204360)

<Utterances :id="9"/>