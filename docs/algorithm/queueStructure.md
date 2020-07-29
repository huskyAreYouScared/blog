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
Queue.prototype.isEmpty = function () {} // 是否为空栈
Queue.prototype.size = function () {} // 栈内数据大小
Queue.prototype.print = function () {} // 打印栈内元素
```
