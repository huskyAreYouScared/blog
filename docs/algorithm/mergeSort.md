# 归并排序

* 主要思想，分而治之，在合并

## 原理图
![归并排序原理图](https://imgkr.cn-bj.ufileos.com/f76f97ae-c3d9-4b20-9cfe-46527e480beb.png)

## 代码实现
```js
function mergeSort(arr){
  return split(arr)
}
function split(arr){
  let len = arr.length
  if(len<=1){ // 数组划分结束条件，递归结束条件
    return arr
  }
  // 定义拆分点
  let middle = Math.floor(len / 2)
  let leftArr = arr.slice(0,middle)
  let rightArr = arr.slice(middle, len)
  // 递归调用拆分，拆分后合并，在合并的时候，就要考虑排序了
  return merge(split(leftArr), split(rightArr))
}
function merge(leftArr,rightArr){
  // 合并的逻辑很简单，就是将两边数组按照大小进行合并
  let leftLen = leftArr.length
  let rightLen = rightArr.length
  let currentLeftIndex = 0
  let currentRightIndex = 0
  let resultArr = []
  while (currentLeftIndex < leftLen && currentRightIndex < rightLen) {
    if (leftArr[currentLeftIndex] < rightArr[currentRightIndex]){
      resultArr.push(leftArr[currentLeftIndex++])
    } else {
      resultArr.push(rightArr[currentRightIndex++])
    }
  }
  while (currentLeftIndex < leftLen) {
    resultArr.push(leftArr[currentLeftIndex++])
  }
  while (currentRightIndex < rightLen) {
    resultArr.push(rightArr[currentRightIndex++])
  }
  return resultArr // 返回排好序的数组
}
```