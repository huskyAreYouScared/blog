# 设计模式

::: tip
  每种设计模式都有特定的使用场景，适度使用，有助于提高可维护性和可读性
  过度使用会带来更多的复杂度，反而不利于维护
:::
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


## 工厂模式
* 根据不同的参数，产生不同的实例，一般用来创建同一类对象。
* 将对象的创建与对象的实现分离

### 举个例子（简单工厂）
* 我们可以通过宠物店和对宠物的服务来举例
* 首先把宠物店比作工厂，不同服务比作产物
```js


function PetShop(service) {
  switch (service) {
    case "理发":
      return new PetClear();
    case "买狗粮":
      return new PayGrain();
    default:
      return new WatchForFree();
  }
}

function PetClear() {
  this.clear=function(){
    console.log('先洗澡。在理发');
  }
}
function PayGrain() {
  this.pay = function () {
    console.log("买狗粮");
  };
}
function WatchForFree() {
  console.log('免费观看宠物');
}

PetShop("理发").clear()
PetShop("买狗粮").pay()
PetShop()
// 先洗澡。在理发
// 买狗粮
// 免费观看宠物
```

* 但是等服务多了，就要写很多判断，接下来进一步优化，对服务进行管理
```js
class Shop {
  constructor() {
    this.serviceList = {};
  }

  addService(name, type, price) {
    if (name in this.serviceList) {
      console.log("服务重复");
      return;
    }
    this.serviceList[name] = { type, price };
  }
  removeService(name) {
    if (name in this.serviceList) {
      delete this.serviceList[name];
    }
  }
  getService(name) {
    if (name in this.serviceList) {
      return new Service(this.serviceList[name]);
    } else {
      throw new Error("服务未找到");
    }
  }
}

class Service {
  constructor({ type, price }) {
    this.type = type;
    this.price = price;
  }

  deal() {
    console.log(this.type, this.price);
  }
}

let shop = new Shop()
shop.addService("clear", "清理", 100);
shop.addService("food", "狗粮", 30);


let clear = shop.getService("food");
clear.deal()
```
* 声明两个class,宠物店负责管理服务，服务类，负责具体的服务逻辑

## 建造者模式
* 更关注最后结果的创建过程，分布构建复杂对象

### 简单示例
* 我们举一个身边的例子，通过建造者模式创建一个游戏玩家
* 我们可以通过氪金度和游戏时长来构建不同的对象
```js
class PlayerBuilder {
  constructor(username) {
    this.username = username;
  }

  SpendMoney(money) {
    const vip = {};
    if (money > 30 && money <= 60) {
      vip.level = 1;
      vip.attachment = "赠送经验卡一张";
    } else if (money > 60 && money <= 10000) {
      vip.level = 2;
      vip.attachment = "赠送经验卡二张";
    } else if (money > 10000) {
      vip.level = 3;
      vip.attachment = "赠送经验卡一亿张";
    } else {
      vip.level = 0;
      vip.attachment = "氪金更快乐";
    }
    this.vip = vip;
  }

  SpendTime(time) {
    const activityDegree = {};
    if (time > 30 && time <= 60) {
      activityDegree.level = 1;
      activityDegree.attachment = "休闲时刻";
    } else if (time > 60 && time <= 10000) {
      activityDegree.level = 2;
      activityDegree.attachment = "适度游戏有益健康";
    } else if (time > 10000) {
      activityDegree.level = 3;
      activityDegree.attachment = "沉迷游戏无法自拔";
    } else {
      activityDegree.level = 0;
      activityDegree.attachment = "佛系玩家";
    }
    this.viactivityDegreep = activityDegree;
  }
}

let p1 = new PlayerBuilder("husky");
p1.SpendMoney(50);
p1.SpendTime(3);
console.log(p1);
// PlayerBuilder {
//   username: 'husky',
//   vip: { level: 1, attachment: '赠送经验卡一张' },
//   viactivityDegreep: { level: 0, attachment: '佛系玩家' }
// }
```

* 我们优化一下，让这个例子支持链式调用，像`JQuery`那样支持链式调用
* 其实很简单，就是在每个影响构建对象的方法返回当前对象，也就是`this`
```js
class PlayerBuilder {
  constructor(username) {
    this.username = username;
  }

  SpendMoney(money) {
    const vip = {};
    if (money > 30 && money <= 60) {
      vip.level = 1;
      vip.attachment = "赠送经验卡一张";
    } else if (money > 60 && money <= 10000) {
      vip.level = 2;
      vip.attachment = "赠送经验卡二张";
    } else if (money > 10000) {
      vip.level = 3;
      vip.attachment = "赠送经验卡一亿张";
    } else {
      vip.level = 0;
      vip.attachment = "氪金更快乐";
    }
    this.vip = vip;
    return this
  }

  SpendTime(time) {
    const activityDegree = {};
    if (time > 30 && time <= 60) {
      activityDegree.level = 1;
      activityDegree.attachment = "休闲时刻";
    } else if (time > 60 && time <= 10000) {
      activityDegree.level = 2;
      activityDegree.attachment = "适度游戏有益健康";
    } else if (time > 10000) {
      activityDegree.level = 3;
      activityDegree.attachment = "沉迷游戏无法自拔";
    } else {
      activityDegree.level = 0;
      activityDegree.attachment = "佛系玩家";
    }
    this.viactivityDegreep = activityDegree;
    return this
  }
}

let p1 = new PlayerBuilder("husky");
p1.SpendMoney(50).SpendTime(80);
```

## 代理模式
* 相当于中介，买房的人，通过中介的方式，从房主那里买到房
* 用程序体现就是，调用代理方法，符合一定预期，代理方法会调用目标对象

### 简单示例
```js
let homeowners = {
  address:'河畔花园',
  sellHouse:function(){
    console.log('同意卖掉房子，然后去买新房子');
  }
}

let middle = {
  name:'中介',
  sellHouse:function(price){
    if(price>100){ // 单位是：万
      homeowners.sellHouse()
    } else {
      console.log('10年前应该可以买到');
    }
  }
};

middle.sellHouse(200)
```

### es6 Proxy改写
```js
let homeowners = {
  address:'河畔花园',
  sellHouse:function(){
    console.log('同意卖掉房子，然后去买新房子');
  }
}

let proxy = new Proxy(homeowners.sellHouse, {
  apply(target, ctx, [price]){
    if (price>100) {
      return Reflect.apply(...arguments)
    } else{
      console.log("10年前应该可以买到");
    }
  }
});

proxy(200) // 同意卖掉房子，然后去买新房子
```