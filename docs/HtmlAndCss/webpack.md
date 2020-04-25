---
sidebarDepth: 3
---
# webpack小记

## tapable
### SyncHook简单实现
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