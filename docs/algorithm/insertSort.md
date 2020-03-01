### 插入排序

```js{5,6,9}
  function insertSort(arr){
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

* 外层遍历，首先假定数组的当前索引为最小值（这样可以保证数组的全部元素都扮演一边最小值的角色）
* 然后通过内层循环，对扮演最小值的角色进行校验（arr[minIndex] > arr[j] line 5）当发现当前minIndex最小值身份造假的时候，就需要先把最小值身份先发布出来( minIndex = j ) 但是还没真正的给与名分
* 因为不确定当前最小值身份是否也是演出来的，所以需要继续遍历，当全部的后续接受校验者全部校验之后，才可以确定下来
* 当内层循环结束之后，在通过 swap function 进行真正的给与名分
* 这样全部遍历完成之后就会从小到大进行排好序了