---
sidebarDepth: 3
---
# 剖析Call、Apply、Bind

## Call
:::tip
  实现方式可能不是最好的，欢迎指正
:::

### 草稿版
#### 原生call回顾
* 在实现之前我们先来看一下原生的`call`方法是如何使用，这个很重要，如果对原生的`call`理解不够透彻，对后面我们要自己实现会有一点障碍
```js
let husky = {
  name:'husky',
  print:function(age){
    console.log(this.name,age);
  }
}
let keji={
  name:'keji'
}

husky.print.call(hh,5) // 输出：keji 5
```
* 可以看到这里输出的是`keji 5`而不是`husky 5` 是因为我们改变了`this`指向
* OK 回顾之后，我们开始本次实验

#### 草稿版开始
* 先定义一个`$call`方法，用来模拟`call`方法
* 接下来实现一个方便理解的版本，上代码,先看代码，在讲解
```js
function $call() {
  // 第一行
  let target = arguments[0]

  let currentFn = Symbol('$call')

  target[currentFn] = this;

  let args = [...arguments].slice(1)

  return target[currentFn](...args)
}
```
#### 开始讲解

##### 第一行
```js
  let target = arguments[0]
```
* 第一行很简单，就是通过`arguments`的方式来拿参数，`arguments`是一个类数组类型，具体什么是类数组，先不过多讨论，在这里我们就把他当作数组
* 此时第一个参数就是`this`改变指向后的对象，后面这里会有优化

```js
  let currentFn = Symbol('$call')
```
##### 第二行
* 第二行代码，其实就是声明一个变量，一个不会重复的变量，作用就是保证不会影响其他对象的属性
* 如果对[Symbol](https://es6.ruanyifeng.com/#docs/symbol)还不了解的小伙伴可以先搜一下，再继续，保证后面逻辑的通畅性，还是要了解一下，不用深入了解特性就好

```js
  target[currentFn] = this;
```
##### 第三行
* 第三行代码，可以看到第一行和第二行声明的变量在这里就用上了
* 先说等号左边的代码`target[currentFn]`这种写法，就是给target一个`currentFn`属性很好理解
* 接下来就是等号右边这个`this`是个啥东西,在还没有写这篇文章之前，每次看到这里，都很不理解，只好背下来，但是容易忘
* 为了好理解这个`this`是什么，我们也不从理论上来理解，来个实验，但是最后还是要落实到理论上的
```js
let test = {
  attr1:'属性一',
  call:function(){
    console.log(this);
  }
}
test.call() // {attr1: "属性一", call: ƒ}
```
* 可以看到我们这里定义了一个`test`对象，给他定义了一个`call`方法，在`call`方法中来打印日志，打印这个`this`
* 这个`this`输出的是`{attr1: "属性一", call: ƒ}`，我们可以理解为，谁调用了这个`call`，这个`this`就是谁
* 好按照这个方式理解，我们的第三行代码中等号右边的`this`其实就是`print`这个函数（函数也是对象）

```js
  husky.print.call(hh,5)
```

* 相信到这里，可能理解了这个`this`,还有其他`？？？`，为什么`print`函数会有`call`方法，这里先记下，在第五行之后讲
* 一定要记得，其实对原型链掌握很好的小伙伴应该不会有这个疑问
##### 第四行

```js
let args = [...arguments].slice(1)
```
* 第四行代码,也很好理解，对在`$call`中传递的参数，除了第一个参数（在之前第一行已经处理了），保存到变量`args`中
* 用`[...arguments]`的方式来处理参数，是因为`arguments`是类数组，之前提到过，他的原型中没有数组的很好用的工具方法
* `slice(1)`很简单，就是截取数组，从索引1的位置一直截取到最后一个元素

##### 第五行

```js
  return target[currentFn](...args)
```

* 这个就简单了,就是调用`target`的`currentFn`方法，并且传入参数
* `return` 就相当于返回 `target[currentFn]`调用后的返回值

##### 核心逻辑完成，接下来是组装环节
* 在第三行代码留了一个?没有说，接下来解惑，解涉及到原型链
* 我们先随便写一个函数，并打印它，看一下他的原型

```js
  console.dir(function(){});
```
<img :src="$withBase('/image/call__proton__.png')" alt="dock">

* 可以看到其实`call`方法是在该方法原型链上，所以它可以调用`call`方法，具体原型链分析事先了解，后续我也会单独开一篇文章讲一下
* 那么在组装之前还要了解一下`Function`构造函数，我们再看一个示例

```js
  console.dir(new Function());
```
<img :src="$withBase('/image/call__proton__.png')" alt="dock">

* 根据这个示例，其实在声明`function(){}`这个函数的时候，就相当于执行了`new Function()`
* OK根据这些特性，我们得到了思路，把`$call`方法挂载到`Function`构造函数的原型上即可

```js
  Function.prototype.$call = $call
```

### 优化版

#### $call核心逻辑优化
* 理解了之前的几行代码，我们还可以继续优化一下
* 按照习惯，上示例

```js
let husky = {
  attr:'husky',
  print:function(age){
    console.log(this.attr, age);
  }
}

husky.print.call('test',5) // undefined 5
husky.print.call(1, 5) // undefined 5
husky.print.call(true, 5) // undefined 5
husky.print.call(Symbol(), 5) // undefined 5
husky.print.call(null, 5) // 5
husky.print.call(undefined, 5) // 5
```
* 可以看到当我们给`call`传递基本值类型的时候，原生的`call`方法，输出的是这些
* 那么我们就要改进`$call`,其实也不难，无非就是做一些判断逻辑，我们首先来处理`null`和`undefined`
```js
function $call() {

  let arg_1 = arguments[0]

  let other_args =  [...arguments].slice(1)

  if (arg_1 === null || arg_1 === undefined) {
    return this(...other_args)
  }
  // ...
}
```
* 如果是`null`或者`undefined`就直接执行不走`call`的逻辑了，直接调用改变`this`之前的方法
* 当然这一步对变量`arg_1`和`other_args`提前声明了，后面会用到
* 继续来处理其他值类型的逻辑
```js
function $call() {
  let arg_1 = arguments[0]

  let other_args =  [...arguments].slice(1)

  if (arg_1 === null || arg_1 === undefined) {
    return this(...other_args)
  }
  
  let target = ['object', 'function'].includes(typeof arg_1)
    ? arg_1
    : {}
  // ...
}
```
* 这一步很简单，`Number,String,Boolean,Symbol`这几种类型，直接给`target`赋值为空对象，这也符合我们最开始的示例，当访问它上面的属性时，会给`undefined`，属性为定义返回`undefined`完全正确
* 后面逻辑基本上就是变量替换，接下来看一下最后优化的代码
```js
function $call() {
  let arg_1 = arguments[0]

  let other_args =  [...arguments].slice(1)

  if (arg_1 === null || arg_1 === undefined) {
    return this(...other_args)
  }
  
  let target = ['object', 'function'].includes(typeof arg_1)
    ? arg_1
    : {}

  let currentFn = Symbol('$call')

  target[currentFn] = this;

  let args = other_args
  
  return target[currentFn](...args)
}
```

#### 原型挂载优化
* 给`$call`方法增加属性配置，使其不可被遍历
```js
Function.prototype.$call = $call
Object.defineProperty(Function.prototype,'$call',{
  enumerable: false
})
```