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
