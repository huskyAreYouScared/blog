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
  :on-success="handleAttach"
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
## 单页面多个上传按钮解决办法
* 如果是动态的表单，在每个对象都要有一个上传按钮的话，唯一标识可以用索引
* 如果只是单纯的多几个上传那妞，那么唯一标识可以自定义
* 业务场景效果图
<br>
<img style="" :src="$withBase('/image/elementUI-upload-multiple.png')" alt="dock">

### 对上面写的upload组件进行改造
* 改变一：对el-upload的class进行改变
```html
<el-upload
  :class="'upload-hide upload-hide-' + uploadId" <--这里是新增的，解决点击上传按钮，总是触发第一个按钮的问题
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :on-success="handleAttach"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
```
* 改变二：增加uploadId和onSuccess属性
```js
  props: {
    // 新增的组件属性
    onSuccess: {    
      type: Function,         
      default: function() {}  
    },                                     
    uploadId: {
      type: [String, Number],
      default: ''
    }
    // ...
  }
```
* 改变三：点击代理获取`class`名变更,将唯一标识传给`onSuccess`函数用于定位最终将值赋值给那个变量
```js
 methods: {
    uploadProxy() {
      // 这里将.upload-demo替换成 新增的
      document.querySelector(`.upload-hide-${this.uploadId} .el-upload__input`).click()
    },
    handleAttach(res) {
      const arg = [].slice.call(arguments)
      // 这里将uploadId作为第一个参数，文件信息作为第二个参数传入到onSuccess中
      arg.unshift(this.uploadId, JSON.parse(JSON.stringify(this.fileData)))
      // 在这里执行
      this.onSuccess.apply(this, arg)
    },
    // ...
  }
```
* 支持单页面有多个上传按钮的组件已经改造好了，下面介绍一下怎么使用

### 支持单页面多个upload，使用讲解
* 首先我们传入`upload-id`和`on-success`,要注意`upload-id`和`data`里面绑定的变量名字要一致,这样我们就可以通过`on-success`返回的参数进行准确赋值了
```html
  // 标签部分
  <CustomUpload 
    upload-id="customUpload"
    :on-success="onSuccess"
  />
  // script部分
  data() {
    return {
      form: {
        customUpload: '', // 这里需要注意，要和传入的唯一标识一致
      }
    }
  }
//...
}
```
* `upload-id`会成为`on-succes`绑定的函数的第一个参数
```js
methods: {
    onSuccess() {
      // 将唯一标识和文件信息进行解构
      const [uploadId, fileData] = arguments
      // 通过唯一标识给data赋值
      this.form[uploadId] = fileData[0].fileUrl
    }
  }
```
* 大功告成