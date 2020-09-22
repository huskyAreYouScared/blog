# 二分查找
* binary search

## 非递归方式
```js
  /**
   * 
   * @param {*} arr 带检测的有序数组
   * @param {*} target 目标值
   */
  function binary_search(arr,target){
    let first = 0
    let end = arr.length - 1
    while(first<=end){
      let middle = Math.floor((first+end)/2)
      if(arr[middle] === target){
        return middle
      } else if(arr[middle]>target){
        end = middle -1
      }else {
        first= middle +1
      }
    }
    return false
  }
```

* 首先要拿到有序数组的首末索引
* 通过首末索引相加来找到中间索引，通过中间索引判断目标元素所在的区域
* 如果碰巧middle对应的数就是目标，那就直接返回该索引
* 如果middle索引对应的元素大于target，那么证明target，在以middle分割的数组的前半部分，所以要让末尾索引变成 middle - 1，相反就让首索引变成 middle + 1
* 查找结束条件，1.就是成功找到目标元素，然后返回相对应的索引，2.没有查找到目标元素，返回false

## 递归方式
```js
function binary_search_recursion(arr, target, start, end) {
  
  if (start > end) {
    return -1;
  }
  let middle = Math.floor((start + end) / 2);
  if (arr[middle] === target) {
    return middle;
  }

  if (arr[middle] > target) {
    return binary_search_recursion(arr, target, start, middle - 1);
  } else {
    return binary_search_recursion(arr, target, middle + 1, end);
  }
}

```
* 具体的判断逻辑和非递归模式相同