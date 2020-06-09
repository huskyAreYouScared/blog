# micro and macro

## 微任务
* Promise
* MutationObserver
* process.nextTick (node)
## 宏任务
* setTimeout
* setInterval
* I/O
* requestAnimationFrame
* setImmediate （node）

## setTimeout实现setInterval
```js
function custumInterval(cb,interval){
  (function run(){
    cb()
    setTimeout(run,interval)
  })();
}
custumInterval(function(){
  console.log(1)
},200)

```

## 宏任务-耗时任务拆分
```js
let num = 500000000;
let count = 0
function splitTask(){
  for (let i = 0;i < 100000000;i++){
    if(num<=0){
      break;
    }
    count += num--
  }
  if(num > 0){
    console.log(num);
    
    setTimeout(splitTask)
  }else {
    // 拆分的任务执行完成
    console.log(count)
  }
}
console.log('huskyareyouscared')
splitTask()
```

## 微任务-耗时任务处理
```js
async function microCompute(num){
  // 将耗时任务加入到微任务队列
  let res = await Promise.resolve().then(()=>{
    let count = 0
    for(let i = 0; i < num ;){// 由于是对num进行累加，所以不对i进行操作，让num--
      count += num--
    }
    return count
  })
}
microCompute(8888888888)
console.log('同步代码继续执行')
```
