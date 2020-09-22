# 截取视频图片

::: tip
本文要用到的知识: vue 、ElementUI 、es6相关知识
:::
## 业务背景
* 上传视频的时候，需要顺便上传一张视频封面，视频封面来自于视频中的某一帧

## 需求分析
* 首先这个视频需要通过 `input[type="file"]` 表单元素选中要上传的视频，这里使用的是`elementUI`的上传组件
* 通过上传组件的`before-upload`钩子函数来判断上传的内容是否为视频，如果是就要执行截取视频某一帧的逻辑
* 截取视频某一帧图片，并上传到服务器，返回图片存在服务器的URL信息
* 其余的按照正常上传逻辑走

## 实现

### HTML部分
```html
<el-upload
  :action="action"
  :accept="accept"
  :on-success="handleAttach"
  :before-upload="beforeAvatarUpload"
  :on-error="someErr"
>
</el-upload>
```

### before-update钩子中处理的逻辑
* 首先我们要判断当前上传文件是否为视频
* 
```js
async beforeAvatarUpload(file) {

  // 截取视频第10帧
  if (/(mp4|3gp|mov|rm|wmv|mpg|mpeg|flv)$/i.test(file.name)) {
    this.videoFrameInfo = await getVideoFrame(file, 10)
  }

  // 其他逻辑
}
```