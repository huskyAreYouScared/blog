# JS 进阶小记

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

### instanceof 检测对象的实现
* 该方法还可以检测原型链中的继承实现
```js
class Basic{}
class Husky extends Basic{}
let husky = new Husky()
console.log(husky instanceof Husky) 
// true
console.log(husky instanceof Basic) 
// true
```

## 对象

### 深拷贝
* 1.简单深拷贝，特殊情况暂不考虑
```js
function deepCopy(obj){
  let res = obj instanceof Array ? [] : {}
  for(let [key,value] of Object.entries(obj)){
    res[key] = typeof value === 'object' ? deepCopy(value) : value
  }
  return res
}
```

### 工厂函数，创建一类对象
* 定义好工厂函数后就可以，定量生产对象了
```js
function dog (type, name) {
  return {
    type,
    name,
    info () {
      console.log(`品种：${this.type}，名字：${this.name}`)
    }
  }
}

let twohaha = dog('husky', 'twohaha')
twohaha.info()
// 品种：husky，名字：twohaha

let keji = dog('keji', 'keke')
keji.info()
//  品种：keji，名字：keke
```

### 利用闭包，防止外部改变内部变量

```js
function Dog (type, name) {
  let data = { type, name }
  let getType = function () {
    return data.type
  }
  this.getInfo = function () {
    return getType()
  }
}

let twohaha = new Dog('husky', 'twohaha')
twohaha.getType = function(){
  return 'keji'
}
console.log(twohaha.getInfo())
// husky
```

### 属性特征
#### 获取对象的某个属性特征的方法 `Object.getOwnPropertyDescriptor(Object,'attribute')`
```js
let husky ={
  name: 'husky',
  age: 18
}
console.log(Object.getOwnPropertyDescriptor(husky,'name'))
// {value: "husky", writable: true, enumerable: true, configurable: true}
```
#### 获取对象的全部属性特征的方法 `Object.getOwnPropertyDescriptors(Object)`

#### 灵活配置属性特征 `Object.defineProperty(Object,'attribute',{配置})`
- writable : 是否可重新赋值
- enumerable : 是否可遍历
- configurable : 是否可删除或者是否可重新配置
* 给对象的属性writable设置为false
```js
let husky ={
  name: 'husky',
  age: 18
}
Object.defineProperty(husky,'name',{
  writable:false
})
husky.name = 'keji'
console.log(husky.name)
// husky
```
* 给对象的属性enumerable设置为false
```js
let husky ={
  name: 'husky',
  age: 18
}
Object.defineProperty(husky,'name',{
  enumerable:false
})
console.log(Object.keys(husky))
// ["age"]
```
* 给对象的属性configurable设置为false
```js
let husky ={
  name: 'husky',
  age: 18
}
Object.defineProperty(husky,'name',{
  configurable:false
})
// 如果在对husky对象的name属性进行配置，就会报错
// Object.defineProperty(husky,'name',{
//   configurable:true
// })
delete husky.name // 删除失败
console.log(husky)
// {name: "husky", age: 18}
```
#### 灵活配置属性特征 `Object.defineProperties(Object,'attribute',{批量配置})`

### 禁止向对象添加新属性
* 通过`preventExtensions`的处理，对象不能在新增属性了
```js
let husky ={
  name: 'husky',
  age: 18
}
Object.preventExtensions(husky)
husky.sex = 'male'
console.log(husky)
// {name: "husky", age: 18}
```
### 判断是否可以添加属性
* 通过isExtensible来判断对象是否可以添加属性
```js
let husky ={
  name: 'husky',
  age: 18
}
Object.preventExtensions(husky)
if(Object.isExtensible(husky)){
  husky.sex = 'male'
}
console.log(husky)
// {name: "husky", age: 18}
```

### 封闭对象 seal 和 isSealed
* 通过seal来封闭对象，不能新增属性，不可删除，不可重新配置对象特征 但是 可以重新对已有的对象属性赋值
* isSealed来判断该对象是否封闭
```js
let husky ={
  name: 'husky',
  age: 18
}
Object.seal(husky)
console.log(Object.isSealed(husky))
// true 证明该对象已经封闭
Object.defineProperty(husky,'name',{
  writable: true
})
husky.sex = 'male'
husky.name = 'keji'
delete husky.name
console.log(husky)
// {name: "keji", age: 18}
```

### 冻结对象 freeze 、isFrozen
* 冻结对象 比 seal还要强，连对已有的对象属性重新赋值都不可以，只可以读取使用，和遍历
* isFrozen 判断对象是否被冻结
```js
let husky ={
  name: 'husky',
  age: 18
}
Object.freeze(husky)
console.log(Object.isFrozen(husky))
// true 证明该对象已经被冻结
husky.sex = 'male'
delete husky.name
console.log(husky)
// {name: "husky", age: 18}
```

### 访问器 set get
* 通过set给对象的属性赋值，可以保证数据的质量
* get可以对原始数据进行加工
```js
let husky ={
  data:{
    name: 'husky',
    age: 2,
  },
  set age(value){
    if(typeof value !== 'number' || value > 300 || value < 0){
      throw new Error('请赋值正确的年龄')
    }
    this.data.age = value
  },
  get age(){
    return this.data.age
  }
}
husky.age = 10
```

#### 小案例，通过get，set完成本地存储
```js
let sessionStorage ={
  set userInfo(value){
    sessionStorage.setItem('userInfo',JSON.stringfy(value))
  },
  get userInfo(){
    let userInfo = sessionStorage.get('userInfo')
    if(userInfo){
      return userInfo
    }else{
      // 未登录重新登录
    }
  }
}
```

### Proxy 代理
#### 基本语法
```js
let husky ={
  name: 'husky'
}
let proxy = new Proxy(husky,{
  get(obj,property){
    return obj[property]
  },
  set(obj, property, value){
    obj[property] = value
    return true
  }
})
proxy.name = 'keji'
console.log(husky)
// {name: "keji"}
```
#### 不仅可以代理对象，还可以代理函数
```js
function husky(value){
  console.log(value * value)
}

let proxy = new Proxy(husky,{
  apply(func, obj, args){
    console.log('property is'+args)
    func.apply(this, args)
  }
})
proxy.apply(null,[100])
// property is100
// 10000
```

#### Proxy 对数组进行代理
```js
let husky = ['twohaha', 'keji', 'goldmao']
let proxy = new Proxy(husky,{
  get(array, index){
    return array[index].toUpperCase()
  }
})
console.log(proxy[0])
// TWOHAHA
```
#### Vue3双向数据绑定原理
```js
function View(){
  let proxy = new Proxy({},{
    get(obj, property){},
    set(obj, property, value){
      document.querySelectAll(`[v-model="${property}"]`).
      forEach(item=>{
        item.value = value
      })
    }
  })
  this.init = function(){
    const els = document.querySelectorAll("[v-model]");
    els.forEach(item => {
      item.addEventListener("keyup", function(){
        proxy[this.getAttribute("v-model")] = this.value
      })
    })
  }
}

new View().init()
```

## JSON 
### toJSON自定义序列化
* 可以通过给对象怎家toJSON属性，自定义JSON.stringify的序列化数据

```js
let params = {
  name:'🐰哈哈',
  id:1,
  type:'husky',
  shortName:'2ha',
  englishName:'twohaha',
  toJSON:function(){
    return [
      ...Object.keys(this)
    ]
  }
}
console.log(JSON.stringify(params))
// ["name","id","type","shortName","englishName","toJSON"]
```

### JSON.parse自定义解析
```js
let husky = `{"name":"🐰哈哈","id":1,"type":"husky","shortName":"2ha","englishName":"twohaha"}`
let keys = []
let res = JSON.parse(husky,(key, value)=>{
  // others logic
  return value
})
console.log(res)
// {name: "🐰哈哈", id: 1, type: "husky", shortName: "2ha", englishName: "twohaha"}
```

## 函数进阶

### 箭头函数中的this指向
* 箭头函数中的`this`指向的是上下文
```js
let husky = {
  name:'twohaha',
  getName :function () {
    return  ()=> {
      return this.name
    }
  }
}
console.log(husky.getName()()) // twohaha
```
* 如果上面的例子不用箭头函数
```js
let husky = {
  name:'twohaha',
  getName :function () {
    return  function() {
      return this.name
    }
  }
}
console.log(husky.getName()()) // undefined
```
* 因为此时的`this`指向的不再是`husky`对象，而是`window`，所以会输出`undefined`

### call 和 apply
* 可以改变`this`指向，`apply`的参数要求是数组，`call`正常传参数
```js
function Husky(){
  this.name = name
  this.getName=function(type){
    return this.name + '，品种：' + type
  }
}
let keji = new Husky('keji')
keji.getName.call({name:'twohaha'},'husky')
// "twohaha，品种：husky"

keji.getName.apply({name:'twohaha'},['husky'])
// "twohaha，品种：husky"
```

### bind
* 同样可以改变`this`指向，返回一个函数
```js
function Husky(){
  this.name = name
  this.getName=function(type){
    return this.name + '，品种：' + type
  }
}
let keji = new Husky('keji');
let twohaha = keji.getName.bind({name:'twohaha'})
twohaha('哈士奇')
// "twohaha，品种：哈士奇"
```
* 这里有一点需要注意，如果我们在用`bind`的时候直接传了参数，那么之后在传参数就不起作用了，如果在`bind`的时候没传参数，那么后面调用该函数的时候传参数是有效果的
```js

let twohaha = keji.getName.bind({name:'twohaha'},'husky')
twohaha('哈士奇') 
// "twohaha，品种：husky"
```