# 链表

## 用JS实现链表
* 先写一下链表所需要的属性和方法的框架
```js
function LinkedList(){
  this.head = null // 链表的首位
  this.length = 0 // 链表的长度
  // 链表节点
  function Node(value){
    this.value = value
    this.next = null
  }
  this.append = function (){} // 向尾部添加新的节点
  this.insert(position,element) // 向链表特定位置插入元素；
  this.remove(element) // 从链表移除一项；
  this.indexOf(element) // 返回链表中某元素的索引，如果没有返回-1；
  this.removeAt(position) // 从特定位置移除一项；
  this.isEmpty() // 判断链表是否为空，如果为空返回true,否则返回false;
  this.size() // 返回链表包含的元素个数；
  this.toString() // 重写继承自Object类的toString()方法，因为我们使用了Node类；
}
```

### 实现append
```js
function LinkedList(){
  this.head = null // 链表的首位
  this.length = 0 // 链表的长度
  // 链表节点
  function Node(value){
    this.value = value
    this.next = null
  }
  // 向尾部添加新的节点
  this.append = function (value){
    let newNode = new Node(value)
    if(this.length === 0){
      this.head = newNode
    }else{
      let current = this.head
      while(current.next){
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }
}
```
### 实现insert
```js
// ... 省略 ...
this.insert = function (position,element){
  if(position>=0 && position<=this.length){
    let newNode = new Node(element)
    let current = this.head
    if(position === 0){
      newNode.next = current
      this.head = newNode
    } else {
      while(--position){
        current = current.next
      }
    }
    newNode.next = current.next
    current.next = newNode
    this.length++
    return true
  }else{
    return false
  }
}
// ... 省略 ...
```

### 实现indexOf
```js
// ... 省略 ...
this.indexOf = function(element){
    let currnet = this.head
    let index = 0
    while(currnet){
      if(element === currnet.value){
        return index
      }
      currnet = currnet.next
      index++
    }
    return -1
  }
// ... 省略 ...
```

### 实现removeAt
```js
// ... 省略 ...
this.removeAt = function(position){
    let current = this.head
    if(position>=0 && position<=this.length){
      if(position === 0){
        this.head = current.next
      } else{
        let previous = null
        while(position--){
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.length--
      return true
    }else{
      return false
    }
  }
// ... 省略 ...
```

### 实现remove
```js
// ... 省略 ...
  this.remove = function(element){
    let postion = this.indexOf(element)
    return this.removeAt(postion)
  }
// ... 省略 ...
```

### 实现 isEmpty
* 如果是空返回`true`，否则`false`
```js
// ... 省略 ...
  this.isEmpty = function(){
    return this.length === 0
  }
// ... 省略 ...
```

### 实现 size
```js
// ... 省略 ...
  this.size = function(){
    return this.length
  }
// ... 省略 ...
```

### 实现 toString

```js
// ... 省略 ...
  this.toString = function() {
    let current = this.head
    let str = ''
    while(current){
      str +=current.value+(current.next?',':'')
      current = current.next
    }
    return str
  }
// ... 省略 ...
```
### 测试
```js
let list = new LinkedList()
list.append(1)
list.append(3)

list.insert(0,4)
list.insert(0,4)

list.removeAt(1)
list.remove(3)

console.log(list.size()); // 2
console.log(list.head.next) // Node { value: 1, next: null }
console.log(list.toString()) // 4,1
```
## 双向链表
* 所谓双向链表，其实就是在数据节点上增加前一个保留前一个节点的属性
* 接下来实现一下和单链表一样的功能
### 基础结构
```js
function LinkedList(){
  this.head = null
  this.length = 0

  function Node(value){
    this.value = value
    this.next = null
    this.prev = null //  和单链表区别的地方
  }
}
```
### 双向链表 append
```js
// 向尾部添加新的节点
  this.append = function (value){
    let newNode = new Node(value)
    if(this.length === 0){
      this.head = newNode
    }else{
      let current = this.head
      while(current.next){
        current = current.next
      }
      newNode.prev = current
      current.next = newNode
    }
    this.length++
  } 
```

### 双向链表 insert
```js
  // 向链表特定位置插入元素；
  this.insert=function(position, element) {
    let newNode = new Node(element)
    let current = this.head
    // 当还没有数据的时候
    if(position === 0 && this.length===0) {
      this.head = newNode
      return this.length++
    }
    // 当有数据插入到首个元素的时候
    if(position === 0 && this.length!==0){
      newNode.next = current
      current.prev = newNode
      this.head = newNode
      return this.length++
    } 
    // 多个元素的时候，插入到中间位置，如果索引大于当前的链表长度，插入失败返回false
    if (position > 0 && position <= this.length) {
      while(position>0 && current.next){
        current = current.next
        position--
      }
      if(current.next !== null){
        newNode.prev = current
        newNode.next = current.next
        current.next.prev = newNode
        current.next = newNode
      } else {
        newNode.prev = current
        newNode.next = null
        current.next = newNode
      }
      return this.length++
    }else {
      return false
    }
  } 
```

### 双向链表 indexOf
* 这个方法和但链表的一致
```js
// 返回链表中某元素的索引，如果没有返回-1；
  this.indexOf=function(element) {
    let current = this.head
    let index = 0
    while(current){
      if(current.value === element){
        return index
      }
      current = current.next
      index++
    }
    return -1
  }
```

### 双向链表 removeAt
```js
// 从特定位置移除一项；
  this.removeAt=function(position) {
    let current = this.head
    if(position>=0&&position < this.length){
      if(position === 0){
        this.head = current.next
        this.head.prev = null
      } else {

        let prev = null
        while(position--){
          prev = current
          current = current.next
        }

        prev.next = current.next

        if(current.next&&current.next.prev){ // 如果current.next是null则不做处理
          current.next.prev = prev
        }
      }     
      this.length--
      return true
    } else {
      return false
    }
  }

```

### 双向链表 remove
* 该方法也和单链表一致，需要调用自身的indexOf和removeAt来实现
```js
 // 从链表移除一项；
  this.remove=function(element) {
    let index = this.indexOf(element)
    if(index !== -1){
      this.removeAt(index)
      return true
    }
    return false
  }
```
### isEmpty 和 size 和 toString 和单链表一样

## 环形链表 即 最后一个元素的 next 指向 head

## 链表常见算法题

### 反转链表
```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverse(head){
  let newHead = null
  while(head){
    let temp = head
    head = head.next
    temp.next = newHead
    newHead = temp
  }
  return newHead
}
```
### 俩俩交换链表数据
:::tip
1->2->3->4     swapPairs   2->1->4->3
:::
* 解决方案一  循环迭代的方式
```js
function swapPairs(head){
  let dummy = head.next
  let prev = null
  while(head && head.next){
    
    let firstNode = head
    let secondNode = head.next
    // 和上一轮的最后一位关联
    prev?prev.next = secondNode:''

    // swap
    firstNode.next = secondNode.next
    secondNode.next = firstNode
    
    // 准备下一轮赋值
    head = firstNode.next
    prev = firstNode
  }
  return dummy
}
```

* 解决方案二  递归的方式
```js
function swapPairs(head) {
  if(!head || !head.next) return head

  let firstNode = head
  let secondNode = head.next

  firstNode.next =  swapPairs(secondNode.next)
  secondNode.next = firstNode

  return secondNode
}
```

### 检测链表中是否有环
* 如果有环输出该环的head，如果没有则返回null
* 主要利用了快满指针的思想
```js
var detectCycle = function(head) {
    let fast = head,slow = head;
    // 边界值判断
    if(!head||!head.next){
        return null
    }
    // 快慢指针循环，如果有相等的情况则代表有环
    while(fast&&fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast){
            break
        }
    }
    // 上面的循环结束后，如果fast和slow不想等则代表没有环
    if(fast!= slow){
        return null
    }
    // 将slow指向链表最开始的位置
    slow = head
    // 接下来fast和slow每次循环走一步，直到相等后，就找到了有环链表的head
    while(fast!=slow){
        fast= fast.next
        slow = slow.next
    }
    return slow
};
```