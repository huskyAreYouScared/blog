# 小技巧（百宝箱）

### 禁用鼠标右键
```html
<body oncontextmenu="return false">
  <div></div>
</body>
```

### 函数参数校验器
```js
const isRequired = () => { throw new Error('param is required'); };
function (name = isRequired()) {
  console.log(name)
};
print('husky'); // husky
print(); // 报错
print(null); // null
```

### 校验是否为JSON字符串
```js
export function isJsonString(str) {
  try {
    if (typeof JSON.parse(str) === 'object') {
      return true
    }
  } catch (e) {
    return false
  }
}
```