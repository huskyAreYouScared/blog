# 选择排序

```js{5,6,9}
  function selectSort(arr){
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i
      for (let j = i+1; j < arr.length ; j++) {
        if (arr[minIndex] > arr[j]) {
          minIndex = j
        }
      }
      if(minIndex !==i){
        swap(arr,i,minIndex)
      }
    }
    return arr
  }
  /**
  * 
  * @param {Array} arr 要排序的数组
  * @param {Number} i 旧的最小值索引
  * @param {Number} current 新的最小值索引
  */
  function swap(arr,i,current){
    let temp = arr[i]
    arr[i] =arr[current]
    arr[current] = temp
  }

```
* 这里只是简单实现选择排序，容易理解
* 第一步：第一层循环假定第`i`个元素是最小值
* 第二步：进入第二层循环，排除`i`索引之前的元素进行依次对比，找到真正的最小值，将索引保存在`minIndex`
* 第三步：当内层循环结束，找到了最小值的索引，然后通过`swap`方法进行位置对调
* 然后继续回到第一步循环遍历，直到全部全部遍历完成