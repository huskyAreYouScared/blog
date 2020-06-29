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

### 利用JSON.stringify去除多余的属性
* 假定我们只需要传给后台name和id属性，可是要传递的对象多了很多属性
```js
let params = {
  name:'🐰哈哈',
  id:1,
  type:'husky',
  shortName:'2ha',
  englishName:'twohaha'
}
params = JSON.parse(JSON.stringify(params,['id','name']))
console.log(params)
// {id: 1, name: "twohaha"}
```