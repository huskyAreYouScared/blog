# 栈
:::tip
  这里我们用链表来实现栈的数据结构，如果喜欢用数组也可以，根据个人喜好来定
:::
## 数据结构特点
* 先进后出（LIFO）last in first out
## 实现

### 基础属性和方法介绍
:::tip
  每个方法的实现方式不唯一，如有优化建议，请大神指导，感谢🙏  
:::
* 先写一下栈所需要的属性和方法
```js
const LinkedList = require('../链表/index.js') // 这里我们引入之前实现的链表数据结构

function Stack () {
  this.items = new LinkedList()
  this.length = 0
}

Stack.prototype.push = function (element) {} // 添加元素，可一次性加入多个
Stack.prototype.pop = function () {} // 出栈，在栈顶弹出数据，返回栈顶数据
Stack.prototype.peek = function () {} // 返回栈顶元素，不对栈中的数据进行操作
Stack.prototype.isEmpty = function () {} // 是否为空栈
Stack.prototype.clear = function () {} // 清空栈
Stack.prototype.size = function () {} // 栈内数据大小
Stack.prototype.print = function () {} // 打印栈内元素
```

### push
* 元素可以传入单个或者多个
* 传入多个需要一数组的形式入餐
```js
Stack.prototype.push = function (element) {
  if(Array.isArray(element)){
    element.forEach(item=>{
      this.items.append(item)
    })
  } else {
    this.items.append(element)
  }
}
```
### pop
```js
Stack.prototype.pop = function () {
  let removeElement = this.items.removeAt(this.length - 1)
  this.length--
  return removeElement
}
```
### peek
```js
Stack.prototype.peek = function () {
  let head = this.items.head
  let length = this.length
  while(--length){
    head = head.next
  }
  return head
}
```

### isEmpty
```js
Stack.prototype.isEmpty = function () {
  return this.length === 0
}
```

### clear
```js
Stack.prototype.clear = function () {
  this.length = 0
  this.items.head = null
}
```

### size 和 print
```js

Stack.prototype.size = function () {
  return this.length
}
Stack.prototype.print = function () {
  return this.items.toString()
}
```

* 到这里栈的方法和属性基本完成，这里借用了好多链表的方法