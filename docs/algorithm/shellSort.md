# 希尔排序
:::tip
希尔排序是对插入排序的一种优化，在掌握希尔排序之前，要提前掌握插入排序
:::
* [插入排序传送门](./insertSort.html)
## 分组原理图
![希尔排序原理解析图](https://imgkr.cn-bj.ufileos.com/6f6c3150-76f4-42a6-bbb0-61b39c4b8d2b.png)
## 代码实现
```js
function shellSort(data){
  let tempData = data
  let len = tempData.length
  // 按照数组总数量的一半进行分组
  for (let groupNumber = parseInt(len >> 1); groupNumber >=1; groupNumber=parseInt(groupNumber >> 1)) {

    // 根据最外层所定的分组方案进行分组，其余逻辑和插入排序一样
    for (let i = groupNumber; i < tempData.length; i++) {

      let next = i - groupNumber

      if(arr[i]<arr[next]){

        let temp = arr[i]

        while(next>=0 && temp<arr[next]){
          arr[next+groupNumber] = arr[next]
          next-=groupNumber
        }
        
        arr[next+groupNumber] = temp
      }
    }
  }
  return tempData
}
```

## 解析

* 重点理解最外层的分组方案，分组的实现是对数组的索引进行定额增加实现的，（定额：最外层的分组方案，即groupNumber）
* 内层排序逻辑还是插入排序的逻辑，只不过插入排序每次的比较是和前一个索引值进行比较，希尔排序变成了和当前分组的前一个值进行比较
* 只要理解了分组的逻辑思维，加上插入排序的是为就很简单了


