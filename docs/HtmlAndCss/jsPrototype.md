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

<img :src="$withBase('/image/js_prototype_two_proto.png')" alt="dock">

* 可以看到，这里类中有两个原型，这里我们讲一下区别
* `__proto__`原型一般是直接通过`Husky`来调用的时候使用,只服务于`Husky`自己
* `prototype`原型一般是`Husky`的实例的原型指向到这里,我们来看一下例子
```js
let twohaha = new Husky()
console.log(twohaha.__proto__ === Husky.prototype)
// true

console.log(twohaha.__proto__ === Husky.__proto__)
// false
```
* 这说明我们实例化的对象的`__proto__`原型指向的是`Husky`的`prototype`原型

## 原型链示意图
<img :src="$withBase('/image/js_prototype.png')" alt="dock">

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

## 系统构造函数的原型体现
```js
let arr = []
console.log(arr.__proto__ === Array.prototype)
// true
let str = ''
console.log(str.__proto__ === String.prototype)
// true
let bool = true
console.log(bool.__proto__ === Boolean.prototype)
// true
let obj = {}
console.log(obj.__proto__ === Object.prototype)
// true
let regexp = /^.*/ig
console.log(regexp.__proto__ === RegExp.prototype)
// true
```

## 自定义对象的原型设置
* 通过`Object`的方法`setPrototypeOf`设置原型，`getPrototypeOf`获取原型
```js
let dog = {tag:'dog'}
let husky = {tag:'details'}
Object.setPrototypeOf(husky,dog)
console.log(Object.getPrototypeOf(husky))
// {tag: "dog"}
```
* 由控制台输出的内容可见，给husky设置原型成功

## 通过实例来创建新实例
* 因为实例中原型的constructor指向的就是构造函数
```js
function Dog(type){
  this.type = type
}
let husky = new Dog('husky')

function newParentInstance(obj){
  let constructor = Object.getPrototypeOf(obj).constructor
  return new constructor('柯基')
}
console.log(newParentInstance(husky))
// Dog {type: "柯基"}
```

## instanceof 检测原型链
* a instanceof b 可以检测 a的原型链上有没有b
```js
function Dog(){}
function Husky(){}
console.dir(new Dog())
Husky.prototype = new Dog()
console.dir(Husky)
Husky.prototype.constructor = Husky // Husky的constructor在上一步被改变了，这里要改回来
let h = new Husky()
console.log(h instanceof Dog)
```

## isPrototypeOf 检测原型链
```js
let dog = {tag:'dog'}
let husky = {tag:'details'}
Object.setPrototypeOf(husky,dog)
console.log(dog.isPrototypeOf(husky))
// true
```

## in 和 hasOwnProperty 来获取对象上的属性
* in 可以检测到原型上的属性
* getOwnProperty只能获取对象本身的属性
```js
let dog = {tag:'dog'}
let husky = {name:'twohaha'}
Object.setPrototypeOf(husky,dog)
console.log('tag' in husky)
// true
console.log(husky.hasOwnProperty('tag'))
// false
```

## 在构造函数的原型上定义方法
* 优点共享内存
```js
function Dog(name, type){
  this.name = name
  this.type = type
}

Dog.prototype = {
  constructor: Dog,
  getName(){
    return this.name
  },
  getType(){
    return this.type
  }
}

let husky = new Dog('twohaha','husky')
console.log(husky.getName())
// twohaha
console.log(husky.getType())
// husky
```

## 原型继承
### 通过prototype.__proto__实现继承
```js
function Dog(name){
  this.name = name
}
Dog.prototype.getType=function(){
  console.log('Is a dog')
}
function Husky(){}
Husky.prototype.__proto__ = Dog.prototype
console.dir(Husky)
let twohaha = new Husky('twohaha')
twohaha.getType()
// Is a dog
```

### 通过新创建一个一个原型的方式实现继承
```js
function Dog(name){
  this.name = name
}
Dog.prototype.getType=function(){
  console.log('Is a dog')
}
function Husky(){}
Husky.prototype = Object.create(Dog.prototype)
console.dir(Husky)
let twohaha = new Husky('twohaha')
twohaha.getType()
// Is a dog
```
* 通过上面的方式实现继承有几个注意点
  * 如果给`Husky`在原型上定义共享函数，需要在继承逻辑之后写
  * 继承后的原型没有`constructor`,需要在继承后，重新指定`constructor`
```js
Husky.prototype = Object.create(Dog.prototype)
Husky.prototype.constructor = Husky
```
* 通过上面的方式`constructor`是可以被遍历的所以还是不符合，这里我们要改变属性的特征，将`enumerable`改为`false`
```js
Husky.prototype = Object.create(Dog.prototype)
Object.defineProperty(Husky.prototype,'constructor',{
  value: Husky,
  enumerable: false // 不可遍历
})
```

## 继承使用父类的属性
```js
function Dog(name){
  this.name = name
}
Dog.prototype.showName=function(){
  console.log(this.name)
}
function Husky(name){
  Dog.call(this, name)
}
Husky.prototype.__proto__ = Dog.prototype

let husky = new Husky('twohaha')
husky.showName()
// twohaha
```

## 封装原型继承工厂
```js
// params{parent} 父类
// params{sub} 子类
function extends(parent,sub){
  sub.prototype = Object.create(parent.prototype)
  Object.defineProperty(sub.prototype,'constructor',{
    value: sub,
    enumerable: false // 不可遍历
  })
}
```