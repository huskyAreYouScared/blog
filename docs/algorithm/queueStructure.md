# 队列
:::tip
  实现方式有很多种，主要吧队列的数据结构特点展现出来即可
:::
## 数据结构特点
* 先进后出（FIFO）first in first out

## 实现

### 基础属性和方法介绍
:::tip
  每个方法的实现方式不唯一，如有优化建议，请大神指导，感谢🙏  
:::
* 先写一下栈所需要的属性和方法
```js
const LinkedList = require('../链表/index.js') // 这里我们引入之前实现的链表数据结构

function Queue () {
  this.items = new LinkedList()
  this.length = 0
}

Queue.prototype.enqueue = function (element) {} // 添加元素，可一次性加入多个
Queue.prototype.dequeue = function () {} // 队首元素出队列，并返回该元素
Queue.prototype.front = function () {} // 返回队列首元素，不对队列中的数据进行操作
Queue.prototype.isEmpty = function () {} // 是否为空队列
Queue.prototype.size = function () {} // 队列内数据大小
Queue.prototype.print = function () {} // 打印队列内元素
```

### enqueue
* 和栈的push实现方式一致
```js
Queue.prototype.enqueue = function (element) {
  if(Array.isArray(element)){
    element.forEach(item=>{
      this.items.append(item)
    })
    this.length +=element.length
  } else {
    this.items.append(element)
    this.length++
  }
}
```

### dequeue
* 由于是先进先出的数据结构特征，所以出队列第一个元素,借助链表的removeAt实现，同时队列数量减少
```js
Queue.prototype.dequeue = function () {
  this.length--
  return this.items.removeAt(0)
} 
```

### front
* 获取队首元素，不对队列进行任何操作
```js
Queue.prototype.front = function () {
  return this.items.head
} 
```

### isEmpty 、size、print
* 和三个方法实现很简单
```js
//  是否为空队列
Queue.prototype.isEmpty = function () {
  return this.length === 0
} 
// 队列内数据大小
Queue.prototype.size = function () {
  return this.length
} 
// 打印队列内元素
Queue.prototype.print = function () {
  return this.items.toString()
} 
```