# 前端监控
:::tip
本篇文章没有深入理解，只做学习记录
:::
## 捕获前端JS报错
* 需要qs插件
```bash
yarn add qs -S
```
```js
window.onerror = function(message,source,lineno,colno){
  sendError(qs.stringify({
    message,source,lineno,colno
  }))
}
```
## 将错误日志发往后端
```js
function sendError(params){
  let img = document.createElement('img')
  document.body.appendChild(img)
  img.src = `http://采集日志域名?${params}`
  document.body.removeChild(img)
}

```