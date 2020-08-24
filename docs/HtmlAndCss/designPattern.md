# 设计模式

::: tip
  每种设计模式都有特定的使用场景，适度使用，有助于提高可维护性和可读性
  过度使用会带来更多的复杂度，反而不利于维护
:::
## 单例模式
:::tip
* 我的理解：`单例模式`的`构造函数`（class 或 functin），在一个程序中，只有一个实例，无论`实例化`多少次（new Person()）
* 单例模式在创建后在内存中只存在一个实例
:::
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
:::tip
* 根据不同的参数，产生不同的实例，一般用来创建同一类对象。
* 将对象的创建与对象的实现分离
:::

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

::: tip
  更关注最后结果的创建过程，分步构建复杂对象
:::

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

::: tip
* 相当于中介，买房的人，通过中介的方式，从房主那里买到房
* 用程序体现就是，调用代理方法，符合一定预期，代理方法会调用目标对象
:::
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

## 享元模式

::: tip
  对共享对象的复用，减少对象的创建，从而减少内存的使用
:::

### 简单示例
* 通过一个平时很常见的，去面馆买面的场景来。对享元模式进行理解
* 用这么几个特点，就是，厨师每次只给一个顾客做面，面馆的厨师数量有限
* 但是顾客很多，需要排队，就比如我们平时去面馆的那个叫号系统
* 首先我们先来实现一个厨师类Chef
```js
class Chef {
  static _id = 0;
  constructor(name) {
    Chef._id += 1;
    this.userId = Chef._id;
    this.name = name
    this.workState = false;
  }

  // 厨师煮面
  boilNoodle(customerId) {
    return new Promise((resolve) => {
      this.workState = true;
      console.log("正在煮" + customerId + "客人的面");
      setTimeout(() => {
        this.workState = false;
        console.log( customerId + "客人的面已经煮好");
        resolve();
      }, Math.random() * 3000);
    });
  }
}
```
* 接下来我们来定义一下厨房对象
* 厨房对象应该记录，今天上班的厨师，还需要记录当前顾客的排队队列
* 还需要实现找到当前没有任务的厨师，按照顾客的订单队列完成相应的工作
* 利用有限的厨师资源，完成订单队列，这里就相当于，少创建了很多厨师类，减小了内存的开销（减少了面馆的工资支出）
```js
let KitchenPool = {
  _chefPool : [], // 定义厨房当前的厨师数量
  _customerQueue : [], // 顾客的排队队列

  // 到达饭点，顾客来面馆点餐
  customerPay(...customerOrders) {
    customerOrders.map(order=>{
      this.startBoilNoodle(order)
    })
  },
  // 顾客点完餐，等待厨师做饭
  startBoilNoodle(order){
    let noworkChef = this.getNoWorkChef()
    if(noworkChef) {
      noworkChef.boilNoodle(order).then(()=>{
        let customerOrder = this._customerQueue.length && this._customerQueue.shift()
        customerOrder && this.startBoilNoodle(customerOrder)
      })
    } else {
      this._customerQueue.push(order)
    }
  },
  // 厨师上班打卡
  employChef(name){
    this._chefPool.push(new Chef(name))
  },
  // 找到闲置状态的厨师
  getNoWorkChef(){
    return this._chefPool.find(chef => !chef.workState)
  }
}

// 今日上班的厨师
let chefs = ['chef_01','chef_02','chef_03','chef_04']
chefs.forEach((chef) => {
  KitchenPool.employChef(chef);
})

// 生成顾客
let customers = ["01", "02", "03", "04", "05"]
customers.forEach((customer) => {
  KitchenPool.customerPay(customer);
});

// 结果是随机的 因为在执行煮面的方法用了Math.random()来模拟煮面时间
// 正在煮01客人的面
// 正在煮02客人的面
// 正在煮03客人的面
// 正在煮04客人的面
// 01客人的面已经煮好
// 正在煮05客人的面
// 04客人的面已经煮好
// 03客人的面已经煮好
// 02客人的面已经煮好
// 05客人的面已经煮好
```

## 装饰器模式
:::tip
在不改变原对象的基础上，给原始对象进行属性或方法的包装扩展
:::

### 简单实现
* 我们通过做奶茶的案例来实现一个装饰器模式
```js
class Tea {
  getTea() {
    console.log("泡茶");
  }
}

class Fruit {
  constructor(teaObject) {
    this.teaObject = teaObject;
  }

  getTea() {
    this.teaObject.getTea();
    console.log("加入水果");
  }
}
class Ice {
  constructor(teaObject) {
    this.teaObject = teaObject;
  }

  getTea() {
    this.teaObject.getTea();
    console.log("加入冰块");
  }
}

let tea = new Tea();
tea = new Fruit(tea);
tea = new Ice(tea);
tea.getTea()

// 泡茶
// 加入水果
// 加入冰块
```

### 闭包方式改造
* 里用闭包的方式，将装饰之前的对象缓存起来
```js
let Tea = {
  getTea() {
    console.log("泡茶");
  }
}

function addFruit(){
  console.log("加入水果");
}
function addIce(){
  console.log("加入冰块");
}

Tea.getTea = function (){
  let getTea = Tea.getTea
  return ()=>{
    getTea()
    addFruit()
  };
}()
Tea.getTea = function (){
  let getTea = Tea.getTea
  return ()=>{
    getTea()
    addIce()
  };
}()

Tea.getTea()
// 泡茶
// 加入水果
// 加入冰块
```

### 实际项目应用
* 通过装饰器模式给某一个对象的某个方法扩展功能
```js
function decorateObj(originObj, originKey, fn) {
  originObj[originKey] = function() {
      var originFn = originObj[originKey]
      return function() {
          originFn && originFn()
          fn()
      }
  }()
}
```
* 上面一个例子，我们实现了做奶茶的案例
* 通过刚刚新定义的decorateObj方法再扩展一个方法
```js

decorateObj(Tea,'getTea',function(){
  console.log('请喝茶');
});

Tea.getTea();

// 泡茶
// 加入水果
// 加入冰块
// 请喝茶

```

## 外观模式
:::tip
* 对内部发杂的逻辑流程进行简化，使调用方更容易使用
:::

### 实现多态
* 对方法传递的参数进行判断，考虑多种情况，按照不同的预判，来确定用户行为，来保证后续逻辑不变
* 下面这个方法，用户可以传递`el`,也可以不传递`el`,如果不传递没我们就把这个点击事件加到`body`上面,`el`的参数就不校验了
```js
function setDefaultEvent(el,fn){
  if(!fn){
    fn = el
    el = 'body'
  }
  document.getElementById(el).onclick = fn
}
```

### 解决平台兼容性
* 老版本浏览之间，不同浏览器之间会存在兼容性问题，我们可以通过外观模式进行封装
* 以给元素添加事件为例
```js
function addEvent(element, type, fn) {
  if (element.addEventListener) {
      element.addEventListener(type, fn, false)
  } else if (element.attachEvent) {
      element.attachEvent('on' + type, fn)
  } else {
      element['on' + type] = fn
  }
}
```