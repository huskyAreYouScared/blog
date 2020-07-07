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
```

## 链表的应用