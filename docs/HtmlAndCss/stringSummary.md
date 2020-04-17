# 字符串技巧总结

## 根据数字返回星期

```js
  function backDate( number ) {
    return number <= 7?`星期${'日一二三四五六日'.charAt(number)}`:''
  }
```