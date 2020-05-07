# elementUI使用技巧
## 自定义elementUI-Upload的上传按钮
### 问题描述
* 但是这里有个问题，就是自定义的按钮，无法触发选择文件弹框


### 第一步
* 这里提供一个简单的技巧
* 以官网的例子进行介绍
```html
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
```
* 我们首先将`el-upload`隐藏掉，要让它不显示，但是还存在在dom树中
```css
  .upload-demo{
    display:none;
  }
```
### 第二步
* 接下来就可以自定义自己想要的上传按钮样式了，我们这里随便举个例子
```html
<div class="customUpload" @click="selectFile">
  <div>+</div>
  <div>上传图片尺寸要小于1920x1080</div>
</div>
```
* css这就不写了，因为样式，是根据业务定的，大家都不一样

### 第三步
* 我们先看一下隐藏的`el-upload`在真实dom中的样子 
<img style="" :src="$withBase('/image/elementUIUpload-01.png')" alt="dock">

### 第四步
* 接下来是重点，通过点击我们自定义的布局，来触发`el-upload`来选择文件，具体逻辑和思路在下边代码注释中
```js
// vue methods
methods:{
  selectFile(){
    // 在这里我们要先通过document的方式选中 el-upload 最后挂载在dom上的input标签，然后给予click（）事件
    // .upload-demo 是已经隐藏了的el-upload的class类名，
    // .el-upload__input 是挂载在dom上的input标签的class类名
    document.querySelector('.upload-demo .el-upload__input').click()
  }
}
```
* 到这里就已经可以成功的弹出选择文件的弹框了
::: tip
以上步骤仅适用于，一个页面只有一个上传按钮
如果在这个页面需要放置多个上传按钮就会有问题
:::
## 多上传按钮解决办法

### 给已经封装好的Upload组件增加标识ID
* 如果是动态的表单，在每个对象都要有一个上传按钮的话，唯一表示ID可以用索引
* 如果只是单纯的多几个上传那妞，那么唯一表示可以自定义
* 效果图
```html
// ....其他代码....
  <CustomUpload 
    onlyId="customLoad"
  />
// ....其他代码....

import CustomUpload from '@/components/customUpload'
```

### 未完待续。。。