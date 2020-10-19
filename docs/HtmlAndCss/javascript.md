---
sidebarDepth: 3
---

# JS收藏夹

## 函数参数校验器

``` js
const isRequired = () => {
    throw new Error('param is required');
};

function(name = isRequired()) {
    console.log(name)
};
print('husky'); // husky
print(); // 报错
print(null); // null
```

## 校验是否为JSON字符串

``` js
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

## 利用JSON.stringify去除多余的属性

* 假定我们只需要传给后台name和id属性，可是要传递的对象多了很多属性

``` js
let params = {
    name: '🐰哈哈',
    id: 1,
    type: 'husky',
    shortName: '2ha',
    englishName: 'twohaha'
}
params = JSON.parse(JSON.stringify(params, ['id', 'name']))
console.log(params)
// {id: 1, name: "twohaha"}
```

## 清除全部cookie

``` js
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

## 合并多个对象

``` js
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

## 判断元素是否包含在容器中

``` js
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

## 封装addEventListener

``` js
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

## 封装removeEventListener

``` js
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

## 封装一次绑定方法once

* [off](#封装addEventListener) 和 [on](#封装removeEventListener) 用到了上面封装的方法

``` js
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

## 获取密码输入框内容

* 方法一

``` js
document.querySelector('input[type=password]').value
```

* 方法二

``` js
document.querySelector('input[type=password]').setAttribute('type', 'text')
```

## 模板字符串应用一

* 配合对象解构赋值效果更佳

``` js
function details({
    name,
    address,
    phone
}) {
    return `name:${name}, address:${address}, phone:${phone}`
}
```

## 模板字符串应用二

* 作为函数实参

```js{6}
function huskyDetails (content, weight) {
  let bodyType = weight > 20 ? 'big' : 'small'
  return `${content[0]} is ${bodyType} dog`
}

huskyDetails `husky${25}`
// husky is big dog

``` 

## 根据数字返回星期

```js
function backDate( number ) {
  return number <= 7? `星期${'日一二三四五六日'.charAt(number)}` :''
}
```

## 判断元素是否有滚动条

### 判断竖向是否有滚动条

``` js
  element.scrollHeight > element.clientHeight;
```

### 判断横向是否有滚动条

``` js
  element.scrollWidth > element.clientWidth;
```

## 计算默认滚动条的宽度

``` js
// 计算滚动条宽度的方法：新建一个带有滚动条的DIV元素，再计算该元素offsetWidth和clientWidth的差值。
function getScrollbarWidth() {

    var scrollDiv = document.createElement("div");
    scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);

    return scrollbarWidth;
};
```

## 检测平台

###　判断IOS系统

``` js
((navigator.userAgent.toLowerCase().indexOf('iphone') !== -1 ||
        navigator.userAgent.toLowerCase().indexOf('ipod') !== -1 ||
        navigator.userAgent.toLowerCase().indexOf('ipad') !== -1 ||
        navigator.userAgent.toLowerCase().indexOf('mobile') !== -1 ||
        navigator.userAgent.toLowerCase().indexOf('android') !== -1) ?
    true : false)
```

### 判断IE系统

``` js
((navigator.userAgent.toLowerCase().indexOf('msie') !== -1 ||
        navigator.userAgent.toLowerCase().indexOf('trident') !== -1) ?
    true : false)
```

## 不常用技巧

### new Function 的方式创建异步方法

``` js
const AsyncFunction = Object.getPrototypeOf(async function() {}).constructor; 

const fetchPage = new AsyncFunction("url", "return await fetch(url); "); 

fetchPage('./index.json').then((res) => {

    return res.json();

}).then((res) => {

    console.log(res);

})
```

<Minimap/>