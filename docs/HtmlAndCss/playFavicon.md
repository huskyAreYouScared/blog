# favicon的玩法
## 玩法一
* 调用摄像头，来欣赏自己的美颜
* 代码走起
### 1.获取展示`favicon`的`link`标签，没有则创建
```js
let fiEl = document.querySelector('link[rel=icon]') ? document.querySelector('link[rel=icon]'):createFavIcon()
function createFavIcon(){
  let newFI = document.createElement('link')
  newFI.setAttribute('rel','icon')
  newFI.setAttribute('href','')
  let head = document.querySelector('head')
  head.appendChild(newFI)
  return newFI
}
```
### 2.调用摄像头，并且将视频中的画面展示在favicon中
* 这个过程浏览器会问你是否允许开启摄像头，点击允许即可
```js
let video = null
function favicon() {
  video = document.createElement('video')
  video.width = '40'
  video.height = '40'
  video.autoplay = "autoplay"
  video.addEventListener('timeupdate', (res) => {
    //将视频装换成图片，通过监听视频的timeupdate来做到刷新favicon的herf指定的图片
    fiEl.href = canvasPaint(video)
  }, false)
  navigator.mediaDevices.getUserMedia({ video: true }).then(res=>{
    video.srcObject = res
  })
}
function canvasPaint(video){
  let canvas = document.createElement('canvas')
  canvas.width = 40
  canvas.height = 40
  const context = canvas.getContext('2d')
  context.clearRect(0, 0, 40, 40)
  context.drawImage(video, 0, 0, 40, 40)
  return canvas.toDataURL("image/png")
}
// 调用执行
favicon()
```

## 玩法二
### 待更新