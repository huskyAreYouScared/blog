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
    this.length += 1
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


## 链表的应用