# 图片下载文件

## 跨域无法下载，而是直接预览

* 在同域下进行是没有问题的可以下载
```js
  // 同域下
  const download = document.createElement('a')
  download.href = path // path 是文件地址
  download.download = new Date().getTime()
  download.click()
```
* 但是跨域就不会直接下载，而是在浏览器进行预览
* 解决办法 这里直接上代码 通过注释讲解
```js
  // 我这里用的是Vue,下面
    downfile(item) {
        const imgTemp = new Image()
        imgTemp.crossOrigin = 'Anonymous' // * 通过添加这个属性，来处理跨域问题
        imgTemp.src = item.path + '?time=' + new Date() // * 请求的图片地址后面加上时间戳参数，处理缓存问题
        imgTemp.onload = ()=> {
          this.funDownloadImg(imgTemp, item.name)
        }
    },
  funDownloadImg(domImg, filename) {
      const eleLink = document.createElement('a')
      // 创建隐藏的可下载链接
      const canvas = document.createElement('canvas')
      canvas.width = domImg.width
      canvas.height = domImg.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(domImg, 0, 0, domImg.width, domImg.height)
      const mime = domImg.src.substring(domImg.src.lastIndexOf('.') + 1).toLowerCase()
      // 由于请求图片的时候加了时间戳，所以要处理一下
      const suffix = mime.split('?')[0]
      const dataUrl = canvas.toDataURL('image/' + suffix)
      eleLink.href = dataUrl
      eleLink.download = filename
      // 触发点击
      document.body.appendChild(eleLink)
      eleLink.click()
      // 然后移除,过河拆桥
      document.body.removeChild(eleLink)
    }
```
## 下载其他文件
* 上面提到的方法不是很优雅，接下来介绍一下通过XMLHttpRequest方式下载文件
* 不用考虑文件类型
* IE浏览器存在兼容性问题
```js
  try {
    let request = new XMLHttpRequest();
    request.responseType = 'blob'
    request.onload = function() {
      const url = window.URL.createObjectURL(this.response)
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.href = url
      a.download = item.fileName
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    }
    request.open('GET', item.fileUrl)
    request.send()
  } catch (error) {
    alert('请尝试使用其他浏览器进行下载，该浏览器不支持')
  }
```
## 参考地址
* [JS前端创建html或json文件并浏览器导出下载](https://www.zhangxinxu.com/wordpress/2017/07/js-text-string-download-as-html-json-file/)
* [解决 canvas 将图片转为base64报错: Uncaught DOMException: Failed to execute 'toDataURL' on 'HTMLCanvasEleme...](https://www.cnblogs.com/brock/p/11673177.html)