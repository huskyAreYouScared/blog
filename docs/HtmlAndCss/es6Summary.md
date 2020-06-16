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