# 《闭包》小记

## 简单实现闭包
```js
function husky(){
  let age = 1
  return function(){
    console.log(++age)
  }
}
let h = husky()
h() // 2
h() // 3
```
## 构造函数实现闭包
```js
function Husky() {
  let age = 0
  this.increment=function(){
    console.log(++age)
  }
}
let twohaha = new Husky()
twohaha.increment() // 1
twohaha.increment() // 2
```
### 小案例1
* 立即执行函数，伪装块级作用域
```js
for(var i = 0;i< 3;i++){
  (function(i){
    setTimeout(function(){
      console.log(i)
    },1000)
  })(i)
}
// 1
// 2
// 3
```

### 小案例2
* 利用闭包分装sort排序参数
```js
let dog = [
  {age:2,weight:10},
  {age:3,weight:5},
  {age:1,weight:8},
  {age:4,weight:12}
]

function order(attribute, type = 'asc'){
  return function(a, b){
    if(type === 'asc') return a[attribute] > b[attribute] ? 1 : -1
    return a[attribute] > b[attribute] ? -1 : 1
    
  }
}
dog.sort(order('age'))
// 0: {age: 1, weight: 8}
// 1: {age: 2, weight: 10}
// 2: {age: 3, weight: 5}
// 3: {age: 4, weight: 12}
dog.sort(order('weight'))
// 0: {age: 3, weight: 5}
// 1: {age: 1, weight: 8}
// 2: {age: 2, weight: 10}
// 3: {age: 4, weight: 12}
```

## 防止闭包内存泄漏
```js
let buttons = document.querySelectorAll('button')

buttons.forEach(item=>{
  let temp = item.getAttribute('name')
  item.addEventListener('click',function(){
    console.log(temp)
  })
  item = null // 将闭包要缓存的值赋值为null，等待GC，防止内存泄漏
})

```