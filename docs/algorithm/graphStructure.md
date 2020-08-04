# 图

## 实现无向图

### 基础属性和方法
```js
function Graph() {
  // 存储顶点
  this.vertices = []

  // 存储边
  this.adjacentList = {}
}
// 录入顶点
Graph.prototype.addVertex = function (v) {}
// 录入边
Graph.prototype.addEdge = function (first, second) {}
// 打印当前图的结构
Graph.prototype.print = function (first, second) {}
```

### addVertex
* 录入当图的顶点
```js
Graph.prototype.addVertex = function (v) {
  if(!this.vertices.includes(v)) return new Error('顶点重复')
  this.vertices.push(v)
  this.adjacentList[v] = []
}
```
### removeVertex
* 删除顶点别忘了同时也要删除，边中的关系
```js
Graph.prototype.removeVertex = function (v) {
  // 删除顶点
  if(this.vertices.includes(v)) {
    this.vertices.splice(this.vertices.indexOf(v))
  } 
  // 删除相关边
  Object.keys(this.adjacentList).forEach(item=>{
    if (this.adjacentList[item].includes(v)){
      this.adjacentList[item].splice(this.adjacentList[item].indexOf(v))
    }
  })
}
```

### addEdge
```js
Graph.prototype.addEdge = function (first, second) {
  // 但录入边信息时，判断顶点在不在，如果不在，自动添加该顶点信息
  if (!this.adjacentList[first]) this.addVertex(first)
  if (!this.adjacentList[second]) this.addVertex(second)

  !this.adjacentList[first].includes(second)
    ? this.adjacentList[first].push(second) : undefined
  !this.adjacentList[second].includes(first) 
    ? this.adjacentList[second].push(first) : undefined
}
```
### removeEdge
* 删除边，要删除两个顶点中的相互依赖数据
```js
/**
 * @params source {*} 顶点一
 * @params destination {*} 顶点二
 */
Graph.prototype.removeEdge = function (source, destination) {
  if (this.adjacentList[source] && this.adjacentList[source].includes(destination)) {
    let destinationIndex = this.adjacentList[source].indexOf(destination)
    this.adjacentList[source].splice(destinationIndex,1)
    let sourceIndex = this.adjacentList[destination].indexOf(source)
    this.adjacentList[destination].splice(sourceIndex,1)
  }
}
```

### print
```js
Graph.prototype.print = function (first, second) {
  let template = ``
  this.vertices.forEach(vertex=>{
    template += `${vertex} =>`
    this.adjacentList[vertex].forEach(edge=>{
      template+=` ${edge} `
    })
    template+='\n'
  })
  return template
}
```
* 打印结果为
```js
a => b  c  d  e  f
b => a  f  e  d
c => a
d => a  b  r
e => a  b
f => a  b
r => d
```

## 广度优先遍历
* 要实现广度优先，需要一个记录节点有没有被遍历的工具函数
* 我们用这个工具函数先定义所有节点为未探索状态 `black`,类似我们玩文明，红色警戒中的未探索地图
* `gray`代表发现了该节点，还没有去过
* `white`代表已经去过该节点
```js
/**
 * white 已探索
 * gray  已发现未探索 
 * black 未发现
 */
Graph.prototype._initColor = function() {
  let color = {}
  this.vertices.forEach(item=>{
    color[item] = 'black'
  })
  return color
}

```
### BFS
* 需要用到`队列数据结构`来配合完成  [去回顾队列](./queueStructure.html)
* 详细解释在代码中进行注释
```js
Graph.prototype.BFS = function (v, callback) {
  let color = this._initColor() // 初始化，让全部节点变为'black',并返回该对象
  let queue = new Queue()
  queue.enqueue(v || this.vertices[0])// 将传入的顶点加入队列
  while (!queue.isEmpty()) {
    // 将当前顶点出队列，由于之前实现的队列返回的是节点(用链表实现的队列)
    // Node { value: xx, next: xx }
    let currentVertex = queue.dequeue() 
    // 在这里将节点值解构出来
    let { value } = currentVertex
    // 那道该节点所对应的边
    let currentEdgeList = this.adjacentList[value]
    // 举例：类似于我们在当前节点发现了该节点周围的节点
    currentEdgeList.forEach(edge => {
      if (color[edge] === 'black') {
        // 将这些节点状态改为已发现状态，并加入队列
        color[edge] === 'gray'
        queue.enqueue(edge)
      }
    });
    // 如果第一次到达该节点，执行回调函数中的方法
    if(color[value] !== 'white'){
      color[value] = 'white'
      callback && callback(value)
    }
  }
}
```
### 测试
```js
let gg = new Graph()
gg.addVertex('a')
gg.addVertex('b')
gg.addVertex('c')
gg.addVertex('d')
gg.addVertex('e')
gg.addVertex('f')

gg.addEdge('a','b')
gg.addEdge('a','c')
gg.addEdge('a','c')
gg.addEdge('a','d')
gg.addEdge('a','e')
gg.addEdge('a','f')
gg.addEdge('b','f')
gg.addEdge('b','e')
gg.addEdge('b','d')
gg.addEdge('r','d')

gg.BFS('b',function (value) {
  console.log(`------------${value} 已探索--------------`);
})

------------b 已探索--------------
------------a 已探索--------------
------------f 已探索--------------
------------e 已探索--------------
------------d 已探索--------------
------------c 已探索--------------
------------r 已探索--------------
```

## 深度优先遍历
```js
Graph.prototype._DFSHandler = function (v,color,callback) {
  color[v] = 'gray'
  let currentEdge = this.adjacentList[v] 
  // 遍历找到符合递归条件的顶点
  currentEdge.forEach(edge => {
    if (color[edge] === 'black') {
      this._DFSHandler(edge,color,callback)
    }
  });
  color[v] = 'white'
  callback && callback(v)
}

Graph.prototype.DFS = function (v,callBack){
  let color = this._initColor()
  this._DFSHandler(v, color, callBack)
}

```