---
sidebarDepth: 3
---
# 剖析call、apply、bind

## call
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

* 此时我们自定义的`$call`方法就挂载到了`Function`的原型上了

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
* 所以我们要对传入的参数做一下判断
```js
function $call() {

  let arg_1 = arguments[0];

  let target = arg_1 ? Object(arg_1) : window;

  let other_args = [...arguments].slice(1);

  let currentFn = Symbol("$call");

  target[currentFn] = this;

  return target[currentFn](...other_args);
}
```
* 根据上面原生`call`函数方法执行返回值，分析出，当传入的第一个参数值为`undefined`或`null`的时候，会把`target`赋值为`window`
* 我们还要看一个实验，为什么要这么处理
```js
function test(age) {
  console.log(this.name, age);
}
test('test') // 只输出：test 大家可以试一下
```
* 此时这个`this`就相当于是`window`,`window`并没有定义`name`属性，看这个实验`console.log(this.name, age)`中的`this.name`并没有返回`undefined`

* 根据这个特性,就可以解释，为什么当传入第一个参数是`undefined`或者`null`要赋值为`window`了

#### 原型挂载优化
* 给`$call`方法增加属性配置，使其不可被遍历
```js
Function.prototype.$call = $call
Object.defineProperty(Function.prototype,'$call',{
  enumerable: false
})
```

## apply

### 实现
* 其实这个方法和我们自定义的$call唯一的区别就是传入的参数，原生的apply需要传入一个数组，所以我们也要传入一个数组
* 区别二，就是需要对第二个参数进行判断是不是数组，如果不是抛出错误
```js
 function $apply() {
  let arg_1 = arguments[0];
  
  let other_args = arguments[1] ? arguments[1] : []

  if (!Array.isArray(other_args) && other_args !== undefined)
    throw new Error("CreateListFromArrayLike called on non-object");

  let target = arg_1 ? Object(arg_1) : window;

  let currentFn =  Symbol("$apply");

  target[currentFn] = this;

  return target[currentFn](...other_args);
}
```

```js
Function.prototype.$apply = $apply
Object.defineProperty(Function.prototype,'$apply',{
  enumerable: false
})
```
* ok是不是很简单，大部分逻辑不同就是在参数上

## bind

### 原生bind回顾
* 这个就和`call`和`apply`不同了，这个方法是直接返回一个改变了`this`指向的函数，参数可以在改变`this`指向的是传递，也可以在执行这个改变了`this`指向的函数时候再传递参数
```js
let husky = {
  name: "husky",
  print: function (...age) {
    console.log(this.name, ...age);
  },
};

let keji = {
  name: "keji",
};

let hh = husky.print.bind(husky,'test1')
hh('test1') // husky test1 test1
```

* ok,我们回顾了基础用法之后，就可以来实现

### 代码实现
* 首先我们先看代码,可以先看一下代码，带着问题，看解析，效果会更好
```js
function $bind() {
  let target = arguments[0];

  let other_args = [...arguments].slice(1);

  let currentFn = Symbol("$bind");

  target[currentFn] = this
  
  return function(){
    let secondParams = [...arguments]
    let mergeParams = other_args.concat(secondParams)
    target[currentFn](...mergeParams)
  }
}
```
####　前4行代码
* 前4行代码，我们在$call中已经基本介绍了，这里就不重复讲解了
#### 第5行到第9行
* 可以看到，我们这里返回了一个匿名函数，因为原生的bind也是返回一个方法，所以很容易想到，返回值是一个函数
* 接下来就要处理参数了，首先两处传参的位置，我们是很明确的，一次是bind方法中可以传入，另一次是调用返回的函数时候传入的参数，并且这两次传入参数都有效果，所以我们就要合并两次参数，第7行代码就是这个作用
* 第8行代码，就很好理解了，改变this指向，传入参数，在自定义$call中也已经分析过了

::: tip
  OK 到这里已经全部实现完毕了，其实重点将$call的实现研究透彻，$bind和$apply就很简单了
:::

## 参考资料
* [这些手写代码会了吗？少年](https://juejin.im/post/6856419501777846279#heading-1)
* [彻底搞懂闭包，柯里化，手写代码，金九银十不再丢分！](https://juejin.im/post/6856419501777846279#heading-1)