---
sidebarDepth: 3
---
# webpack小记

## tapable
### SyncHook 同步钩子
* 按照添加函数添加的顺序执行
```js
class SyncHook {
  constructor(){
    this.tasks = []
  }
  tap(task){
    this.tasks.push(task)
  }
  call(...args){
    this.tasks.forEach((task)=>{
      task(...args)
    })
  }
}

let syncHook = new SyncHook()
// tap 订阅
syncHook.tap(function(task){
  console.log(task,1)
})
syncHook.tap(function(task){
  console.log(task,2)
})

// call 发布
syncHook.call('process')
```

### SyncBailHook 同步保险钩子
* 为了保险，在每个函数钩子执行之后，判断是否返回非undefined得值，如果返回则不继续往下执行
```js
class SyncBailHook{
  constructor(){
    this.tasks = []
  }
  tap(name,task){
    this.tasks.push(task)
  }
  call(...args){
    let result ,index=0;
    do{
      result=this.tasks[index++](...args)
    }while(result === undefined && index < this.tasks.length)
  }
}


let syncBailHook = new SyncBailHook()
// tap 订阅
syncBailHook.tap(function(task){
  console.log(task,1)
  return false
})
syncBailHook.tap(function(task){
  console.log(task,2)
})

// call 发布
syncBailHook.call('process')
// 只输出 process 1，因为第一个注册的函数返回了非undifined的值
```

### SyncWaterfallHook 同步瀑布流钩子
* 将前一个任务输出的结果传递给下一个任务，像瀑布一样向下流转
* 这里运用了 `Array` 的 `reduce` 来处理数据向下流转
```js
class SyncWaterfallHook {
  constructor(name){
    this.tasks = []
  }
  tap(name,task){
    this.tasks.push(task)
  }
  call(...args){
    let [first,...others] = this.tasks
    others.reduce((value,task)=>{
      return task(value)
    },first(...args))
  }
}
let SyncWaterfallHook = new SyncWaterfallHook()
SyncWaterfallHook.tap('学拼音', function (data) {
  console.log(data);
  return '学会拼音'
})
SyncWaterfallHook.tap('说话', function (data) {
  console.log(data);
  return '学会说话'
})
SyncWaterfallHook.tap('写字', function (data) {
  console.log(data);
  return '学会写字'
})

hook.call('small husky')
```
### SyncLoopHook  同步循环钩子
* 每个注册的任务执行后，只要返回值不为`undefined`就会一直循环执行当前任务

::: tip
function函数不写return，默认返回undefined
:::
```js
class SyncLoopHook {
  constructor(name){
    this.tasks = []
  }
  tap(name,task){
    this.tasks.push(task)
  }
  call(...args){
    this.tasks.forEach(task=>{
      let result = null
      do {
        result = task(...args)
      } while (result!==undefined);
    })
  }
}
```

### AsyncParalleHook 异步并行钩子
* 当所有任务并行完成后才执行最后的回调方法
* 每个任务完成之后，都会调用回调，在回调函数中进行判断是否全部的任务执行完成
* 主要实现方式，在`callAsync`中定义一个变量`currentTaskTotal`，用来保存有多少个任务执行完成了，每次任务执行完成都会调用回调函数`done`来对`currentTaskTotal++`，并且判断`currentTaskTotal`是否和总任务数量相等，相等则代表全部的任务执行完成，执行最后的`callAsync`的回调
```js
class AsyncParallelHook {
  constructor(){
    this.tasks = []
  }
  tapAsync(name,task){
    this.tasks.push(task)
  }
  callAsync(...args){
    let callBack = args.pop()
    let index = 0
    let done =()=>{
      index++
      if(index === this.tasks.length){
        callBack()
      }
    }
    this.tasks.forEach(task=>{
      task(...args,done)
    })
  }
}

//  执行
let AsyncParallelHook = new AsyncParallelHook()
AsyncParallelHook.tapAsync('1', function (data,cb) {
  setTimeout(()=>{
    console.log(1);
    cb()
  },1000)
})
AsyncParallelHook.tapAsync('2', function (data,cb) {
  setTimeout(()=>{
    console.log(2);
    cb()
  },2000)
})
AsyncParallelHook.callAsync('end',()=>{
  console.log('over');
})

// 结果
1
2
over
```

