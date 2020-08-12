# 设计模式

## 单例模式
* 我的理解：`单例模式`的`构造函数`（class 或 functin），在一个程序中，只有一个实例，无论`实例化`多少次（new Person()）
* 单例模式在创建后在内存中只存在一个实例
### 简单实现
* 其实就是在给构造函数内部定义一个变量来保存，第一次实例化的实例，之后判断该变量是否为空，如果不为空直接返回实例
```js
function Singleton(...args) {
  if(Singleton._instance){
    return Singleton._instance
  }
  this.args = args
  Singleton._instance = this
}
let a = new Singleton('b','c')
let b = new Singleton('c')

console.log(a === b); // true
```
### 将业务和单例模式分离
* 写一个通用的单例方法，将具体业务分离出来，方便维护
```js
// 单例逻辑
function Singleton(fun) {
  let _instance
  return new Proxy(fun,{
    construct(target,args){
      return _instance || (_instance = new fun(...args))
    }
  })
}

// 具体业务
class Car{
  constructor(brand){
    this.brand = brand
  }
  // 其他方法
}
let proxySingleton = Singleton(Car)
let a = new proxySingleton('husky','哈哈')
let b = new proxySingleton('哈哈')
console.log(a === b); // true
```