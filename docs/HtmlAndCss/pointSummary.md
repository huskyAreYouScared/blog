---
sidebarDepth: 3
---
# 小技巧（百宝箱）

## HTML

### 禁用鼠标右键
```html
<body oncontextmenu="return false">
  <div></div>
</body>
```
### 生成骨架屏
* [传送门](https://skeletonreact.com/)


## JavaScript

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

### 清除全部cookie
```js
export function clearCookie() {
  // 通过正则匹配到全部的cookie的key
  const cookieArr = document.cookie.match(/[^ =;]+(?==)/g)
  if (cookieArr && Object.prototype.toString.call(cookieArr) === '[object Array]') {
    cookieArr.forEach(item => {
      Cookies.remove(item) // 开始清除
    })
  }
}
```

### 合并多个对象
```js
/**
 * @param {Object} multiple object
 * @return {Object}  merge object
 */
export function merge(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    const source = arguments[i] || {};
    for (const prop in source) {
      if (source.hasOwnProperty(prop)) {
        const value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
}
```

### 判断元素是否包含在容器中
```js
export const isInContainer = (el, container) => {
  const elRect = el.getBoundingClientRect()
  let containerRect

  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect()
  }

  return elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right
}
```

### 封装addEventListener
```js
export const on = (function() {
  if (document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();
```
### 封装removeEventListener
```js
export const off = (function() {
  if (document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();
```

### 封装一次绑定方法once
* [off](#封装addEventListener) 和 [on](#封装removeEventListener) 用到了上面封装的方法
```js
export const once = function(el, event, fn) {
  var listener = function() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};
```

### 获取密码输入框内容

* 方法一
```js
document.querySelector('input[type=password]').value
```

* 方法二
```js
document.querySelector('input[type=password]').setAttribute('type','text')
```

### 模板字符串应用一
* 配合对象解构赋值效果更佳
```js
function details ({name, address, phone}) {
  return `name:${name}, address:${address}, phone:${phone}`
}
```

### 模板字符串应用二
* 作为函数实参
```js{6}
function huskyDetails (content, weight) {
  let bodyType = weight > 20 ? 'big' : 'small'
  return `${content[0]} is ${bodyType} dog`
}

huskyDetails`husky${25}`
// husky is big dog
```

### 根据数字返回星期

```js
function backDate( number ) {
  return number <= 7?`星期${'日一二三四五六日'.charAt(number)}`:''
}
```

## HTML

### 禁用鼠标右键
```html
<body oncontextmenu="return false">
  <div></div>
</body>
```

## CSS

### 居中
* `.container` 为容器 `.item` 未子元素
* 布局中没写宽和高，但是其实是有的这里省略，除非必须要用到宽高
#### flex
```css
.container{
  display: flex;
  align-items: center;
  justify-content: center;
}
```
#### position: absolute + transform: translate 
```css
.container{
  position: relative;
}
.item{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

#### position: absolute + margin 负值
```css
.container{
  position: relative;
}
.item{
  --width:100px;
  --height:100px;
  width: var(--width);
  height: var(--height);
  background-color:lightsalmon;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: calc(var(--width) / -2);
  margin-top: calc(var(--height) / -2);
}
```

#### position: absolute + margin: auto
```css
.container{
  position: relative;
}
.item{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
```

#### grid
```css
.container{
  display: grid;
}
.item{
  align-self: center;
  justify-self: center;
}
```

#### table-cell
```css
.container{
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.item{
  display: inline-block;
}
```

#### line-height + text-align + vertical-align
* 用于子元素是行内元素 或者行内块元素
```css
.container{
  width: 300px;
  height: 300px;
  line-height: 300px;
  text-align: center;
}
.item{
  display: inline-block;
  vertical-align: middle;
  line-height: initial; /* 防止子元素继承父元素的line-height*/
}
```

### 省略号
```css
/* 显示一行，省略号 */
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
word-break: break-all;
 
/* 显示两行，省略号 */
text-overflow: -o-ellipsis-lastline;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
line-clamp: 2;
-webkit-box-orient: vertical;
```