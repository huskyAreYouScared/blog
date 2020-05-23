## qrcodejs使用小记
* [qrcode](https://www.npmjs.com/package/qrcode)

### 简单使用
* 安装`qrcode`和引入`qrcode`, 本文使用的`v1.4.4`版本
```bash
  npm i qrcode
```

* 引入
```js
import qrcode from 'qrcode'
```

* 使用
```js
  let url = 'xxx' // 网址内容随意
  // qrcode参数准备
  let qrOptions = {
    errorCorrectionLevel: 'H', // 纠错等级 'L','M','Q','H'
    type: 'image/png', // 类型
    margin: 1, // 轮廓白边
    quality: 1, // 品质
    width: 500, // 宽
    height: 500, // 高
    color: { 
      dark: '#000000', // 深色 默认黑色
      light: '#ffffff' // 浅色 默认白色
    }
  }
```
* 参数和内容都准备好了，可以调用`qrcode`的`API`了
```js
  // Browser:
  //   create()
  //   toCanvas()
  //   toDataURL()
  //   toString()
  // Server:
  //   create()
  //   toCanvas()
  //   toDataURL()
  //   toString()
  //   toFile()
  //   toFileStream()
  // 根据API的名字就可以知道返回值是什么，我们这里以浏览器的toCanvas举例
  qrcode.toCanvas(url, qrOptions,(err, canvas)=>{
    // if (err) throw err
  })
```
* 介绍一下将生成的二维码下载下来的业务需求
```js
  qrcode.toCanvas(url, qrOptions,(err, canvas)=>{
    if (err)  return// 给予提示等等逻辑
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.href = canvas.toDataURL('image/png')
    a.download = '文件名'
    a.click()
    document.body.removeChild(a)
  })
```
* 上一步已经完成了基本的需求，但是只有黑白点，接下来在二维码中间加入图片
* 如果在二维码的中间加入了图片，`qrOption`的`errorCorrectionLevel`属性要设计为`H`，纠错`30%`
```js
  QRCode.toCanvas(url, qrOPtions, (done, canvas) => {
    const img = new Image()
    const content2d = canvas.getContext('2d') // 获取canvas的上下文
    const imageSize = 100 // 要绘制的图片的大小限定
    // 增加时间戳防止缓存
    img.src = parseRemark.appLogo + '?' + new Date().getTime() // 这里加入时间戳是避免缓存导致请求失败
    img.width = imageSize + 'px'
    img.height = imageSize + 'px'
    img.setAttribute('crossOrigin', 'anonymous')
    img.onload = () => {
      const x = (canvas.width - imageSize) / 2
      const y = (canvas.height - imageSize) / 2
      content2d.drawImage(img, x, y, imageSize, imageSize)  // 将图片画在二维码中间
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.href = canvas.toDataURL('image/png')
      a.download = '文件名'
      a.click()
      document.body.removeChild(a)
    }
  })
```
* [纠错等级详情](https://www.npmjs.com/package/qrcode#error-correction-level)