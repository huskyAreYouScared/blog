# es6+ 小记

## Class

### 静态属性
* class 方式定义
```js
class Husky{
  static name = 'husky'
}
```
* function 方式定义
```js
function Husky(){}
Husky.name = 'husky'
```

### 静态方法
* class 方式定义
```js
class Husky{
  static getName=function(){}
}
```

* function 方式定义
```js
// 一下两种方式都可以
function Husky(){}
Husky.getName=function(){}
Husky.__proto__.getAge=function(){}
```

#### 静态方法实用小案例
* 通过静态方法创建对象并传递参数
```js
class Husky{
  constructor (name, age){
    this.name = name
    this.age = age
  }
  static init(...args){
    return new this(...args)
  }
}
let obj = Husky.init('husky', 1)
console.log(obj.name)
// husky
```

### 访问器
* 通过 `get` `set`设置类的访问器
```js
class Husky{
  constructor(name){
    this._name = name
  }
  get name(){
    return this._name
  }
  set name(name){
    if(/\w+/.test(name)) throw new Error('名字不能包含特殊符号')
    this._name = name
  }
}
let husky = new Husky('twohaha')
husky.name = 'smalltwohaha'
console.log(husky.name)
// smalltwohaha
husky.name = 'smalltwohaha@'
console.log(husky.name)
// VM1874:9 Uncaught Error: 名字不能包含特殊符号
// at Husky.set name [as name] (<anonymous>:9:32)
// at <anonymous>:14:12
```

### 使用Symbol来定义受保护的属性
* 使用Symbol定义class中的私有属性，这个class和继承了这个class的class可以使用这个私有属性
```js
const protecteds = Symbol()
class Person{
  constructor(){
    this[protecteds] = {}
    this[protecteds].type = 'humans' 
  }
}

class Student extends Person{
  constructor(){
    super()
    console.log(this[protecteds].type)
  }
}
```

* 这个时候直接通过`.protecteds`赋值和使用这个值就访问不到了，可以通过`get`和`set`访问器的形式修改这个值q

### 使用WeakMap来定义受保护的属性
* 这个方法要配合模块化来使用，否则没有效果
```js
const protecteds = new WeakMap()
class Person{
  constructor(){
    protecteds.set(this,{
      ...protecteds, type:'humans'
    }) 
  }
  get type(){
    return protecteds.get(this).type
  }
  set type(value){
    protecteds.set(this,{...protecteds,type:value})
  }
}
let humans = new Person()
console.log(humans.type)
```

### 使用 # 定义私有属性
* 使用#定义私有属性
```js

class Person{
  #type='humans'
  get type(){
    return this.#type
  }
  set type(value){
    this.#type = value
  }
}
let person = new Person()
console.log(person.type)
```

### super()解决的问题
* 原型攀升，防止this指向混乱
```js

let basic = {
  name:'basic',
  getName(){
    console.log(this.name)
  }
}
let husky = {
   __proto__: basic,
  name:'husky',
  getName(){
    // console.log(this.__proto__.getName.call(this))
    // 此时的this指的是子类twohaha，所以他继续调用husky类的getName方法，进入死循环
    super().getName()
  }
}

let twohaha = {
  __proto__: husky,
  name: 'twohaha',
  getName(){
    // console.log(this.__proto__.getName.call(this))
    // 使用上面方式只能实现父子结构继承，不能更多了，防止死循环
    // 所以引出了super关键字来做原型攀升，避免this指向混乱
    super().getName()
  }
}
twohaha.getName()
```
* 在子类中执行super()执行的是父类的constructor方法
* 可以使用super.getName()的方式调用父类方法