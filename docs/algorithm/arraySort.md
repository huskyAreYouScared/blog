# Array.sort()

* js Array对象的sort方法，可以控制升序还是降序，传入函数参数来控制
* 函数参数`(a, b) => a - b ,a - b > 0`则是升序; `(a, b) => b - a ,b - a >0`则是降序
* 如果上面这感觉有点绕，来个通俗易懂的
::: tip Asc
`(a, b) => a > b`，前面`a`大于后面`b`条件成立，需要换位置,大的值都移动到后面了所以为升序
:::
::: tip Desc
`(a, b) => a < b`，前面`a`小于后面`b`条件成立，需要换位置,小的值都移动到后面了所以为降序
:::

* 了解了这个特性接下来我们来简单实现以下
```js
/**
 * @param {Array} arr 
 * @param {Function} compare 
 */
function sort(arr, compare){
  let Length = arr.length
  for (let outer = Length - 1; outer > 0; outer--) {
    for (let inner = 0; inner < outer; inner++) {
      if( compare(arr[inner], arr[inner+1]) > 0){
        swap(arr, inner, inner+1)
      }
    }
  }
}

function swap(arr, outer, inner){
  let temp = arr[outer]
  arr[outer] = arr[inner]
  arr[inner] = temp
}
```
* 第一步：首先获取要排序的数组长度
* 第二步：外层循环每次数组总长度递减，内层循环根据传入的`function`参数来判断是否交换位置
* 第三步：如果符合条件通过`swap`互换位置，内层循环结束，必定会将最大值（或最小值）向数组的尾部移动，来确定下来最终位置，所以内层循环会每一次都比上一次少
* 然后循环二、三步，直到循环全部结束