# 快速排序（快排）

```js
  function quickSort(arr){
    if(arr.length <= 1){
      return arr
    }
    let current = arr[0]
    let left = []
    let right = []
    for (let index = 1; index < arr.length - 1; index++) {
      if(current>=arr[index]){
        left.push(arr[index])
      }else{
        right.push(arr[index])
      }
    }
    return [...quickSort(left), current, ...quickSort(right)]
  }
```

* 运用了递归的方式
* 首先应该设置递归结束条件，也就是传入的 arr 数组参数长度小于等于1的时候结束递归
* 每次取数组的第一个元素，然后对整个数组，除了第一个元素之外进行遍历，所以 index 从1开始
* 将小于当前 current 的数插入 left 数组，大于和等于的插入 right 数组
* 最后在对 left 和 right 数组同样做这些操作，递归
* 最后将数组相连接