# 模板字符串

## 模板字符串应用一
* 配合对象解构赋值效果更佳
```js
function details ({name, address, phone}) {
  return `name:${name}, address:${address}, phone:${phone}`
}
```

## 模板字符串应用二
* 作为函数实参
```js{6}
function dog (content, weight) {
  let bodyType = weight > 20 ? 'big' : 'small'
  return `${content[0]} is ${bodyType} dog`
}

huskyDetails`husky${25}`
// husky is big dog
```