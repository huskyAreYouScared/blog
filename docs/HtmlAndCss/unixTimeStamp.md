# Unix时间戳
* 在有一些接口文档中看到过也叫`UTC时间戳`
## js获取当前时间unix时间戳
* 方法一
```js
  let now = Math.round(new Date().getTime()/1000)
```
* 方法二
```js
let now = new Date()
let unixTimeStamp = Math.round(Date.UTC(now.getUTCFullYear(), 
                              now.getUTCMonth(), 
                              now.getUTCDate(), 
                              now.getUTCHours(), 
                              now.getUTCMinutes(), 
                              now.getUTCSeconds(), 
                              now.getUTCMilliseconds()
                              ) / 1000)
```

## 其他编程语言获取unix时间戳
[传送门](http://tool.chinaz.com/Tools/unixtime.aspx)