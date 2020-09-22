# 树

:::tip
  这里我们首先实现简单的二叉搜索树<br>
  接下来一段时间会补充更多的树的实现
:::

### 概念
* 树的概念这里就先不介绍了，我相信你看到这里，概念一定是了解的，只是实现思路还有一丝丝断层，来这里探索灵感
## 二叉搜索树
### 基础方法和属性
```js
class BinarySearchTree{
  constructor(){
    this.root = null
  }
  Node(value) {
    this.key = value
    this.left = null
    this.right = null
  }
  insert(value){} // 向树中插入新的节点
  search(value){} // 查找当前树中是否存在该节点，有的话返回true
  preOrderTraverse(cb){} // 先序遍历
  inOrderTraverse(cb){} // 中序遍历
  postOrderTraverse(cb){} // 后序遍历
  min(){} // 获取树的最小值节点
  max(){} // 获取树的最大值节点
  remove(value){} // 移除树中现有节点
}
```

### insert
* 如果是第一个元素，直接赋值给root
* 如果不是第一个元素，就要根据二叉搜索树的特点，根据和根节点的key来决定插入到左子树还是右子树
* 不断递归判断下去，直到符合条件插入新节点
```js
  insert(value){
    let newNode = this.Node(value)
    if(!this.root){
      this.root = newNode
    } else {
      this.insertNode(this.root,newNode)
    }
  }

  insertNode(node,newNode){
    if(node.key<newNode.key){
      node.right === null ?
        node.right = newNode :
        this.insertNode(node.right,newNode)
    } else {
      node.left === null ?
        node.left = newNode :
        this.insertNode(node.left,newNode)
    }
  }
```

### search
* 如果查找到了，符合条件的node，就返回true，否则返回false
* 同样利用递归的思想，不断判断下去，直到触发结束条件来得出最终结果
```js
  search(value) {
    return this.searchNode(this.root,value)
  }

  searchNode(root, value){
    if(!root) {
      return false
    }
    if(root.key === value){
      return true
    } else if(value <root.key){
      return this.searchNode(root.left,value)
    } else if(value >root.key){
      return this.searchNode(root.right,value)
    }
  }
```

### preOrderTravers
* 先序遍历 遍历顺序 `根 左 右`
```js
  // params 回调函数 
  preOrderTravers(cb){
    this.preOrderTraversNode(this.root, cb)
  }

  preOrderTraversNode(root, cb){
    if(!root) return
    cb(root.key)
    this.preOrderTraversNode(root.left,cb)
    this.preOrderTraversNode(root.right,cb)
  }
```

### inOrderTravers
* 中序遍历 遍历顺序 `左 根 右`
```js
  // params 回调函数 
  inOrderTravers(cb){
    this.inOrderTraversNode(this.root,cb)
  }

  inOrderTraversNode(root,cb){
    if(!root) return
    this.inOrderTraversNode(root.left,cb)
    cb(root.key)
    this.inOrderTraversNode(root.right,cb)
  }
```
### postOrderTravers
* 后序遍历 遍历顺序 `左 右 根`
```js
  // params 回调函数 
  postOrderTravers(cb){
    this.postOrderTraversNode(this.root,cb)
  }

  postOrderTraversNode(root,cb){
    if(!root) return
    this.postOrderTraversNode(root.left,cb)
    this.postOrderTraversNode(root.right,cb)
    cb(root.key)
  }
```

### min 和 max
```js
  min(){
    if(!this.root){
      return null
    } else {
      let current = this.root
      while(current.left){
        current = current.left
      }
      return current
    }
  }

  max(){
    if(!this.root){
      return null
    } else {
      let current = this.root
      while(current.right){
        current = current.right
      }
      return current
    }
  }

```

### remove
* 移除节点存在三种情况 
* 1.移除的是叶子节点
* 2.移除的是根节点，且根节点有一个叶子节点
* 3.移除的是根节点，且根节点有两个叶子节点
```js
  remove(value){
    return this.removeNode(this.root,value)
  }

  removeNode(root, value){
    if(!root){
      return null
    }
    if(value < root.key){
      root.left = this.removeNode(root.left, value)
      return root
    } else if(value > root.key){
      root.right = this.removeNode(root.right, value)
      return root
    } else { // 相等代表已经找到了该节点，接下来执行移除逻辑
      // 第一种情况:移除的是叶子节点
      if(root.left === null && root.right === null) {
        root = null
        return root
      }
      // 第二种情况:移除的是根节点，且根节点有一个叶子节点
      if(root.left === null) {
        root = root.right
        return root
      }
      if(root.right === null) {
        root = root.left
        return root
      }
      // 当前面条件都不满足时，那就是第三种情况
      // 移除的是当前子树的根节点，且这个根节点有两个叶子节点
      // 由于二叉搜索树的特性，移除方案：
      // 找到右子树中最小值，替换当前的根节点即可，然后在移除右子树中的最小节点
      let currentRightChildTreeMin = this.findMinNode(root.right) // 找到右子树中的最小节点
      root.key = currentRightChildTreeMin.key
      root.right = this.removeNode(root.right, currentRightChildTreeMin.key)
      // 这里暂时不实现如果在这个树中同时要移除多个相同值的子节点
      return root
    }
  }

  // 找到当前传入根中的最小值节点并返回该节点
  // 用于移除节点情况3中
  findMinNode(root){
    let current = root
    while(current && current.left !== null){
      current = current.left
    }
    return current
  }
```


### 如何判断当前树，是否为二叉搜索树
* 由于二叉搜索树的中序遍历方法，是按照大小顺序进行遍历的
* 将遍历的节点依次插入临时数组中
* 最后遍历临时数组是否存在索引小的值大于索引大的值，如果存在代表不是二叉搜索树
```js
isValidBST(){
    let arr = []
    this.inOrderTravers(function(value){
      arr.push(value)
    })
    for (let index = 1; index < arr.length; index++) {
      if(arr[index - 1] > arr[index]) {
        return false
      }
    }
    return true
  }
```

### 按照树的深度，一层一层的遍历
* 如下图，最后输出的值为

![树](https://static01.imgkr.com/temp/e84865915159490ebc1f20de40ce873f.png)
```js
[ 
  [ 5 ], 
  [ 3, 8 ], 
  [ 6, 9 ] 
]
```
```js
  printLevelOrder(){
    return this.printLevelOrderNode(this.root)
  }
  printLevelOrderNode(root, arr = [], i = 0) {
    if(root){
      !arr[i] && (arr[i] = [])
      arr[i].push(root.key)
      i++
      root.left && this.printLevelOrderNode(root.left,arr,i)
      root.right && this.printLevelOrderNode(root.right,arr,i)
    }
    return arr
  }
```