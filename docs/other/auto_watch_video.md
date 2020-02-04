### Auto.js自动刷短视频

#### 首先要获取到软件
* [传送门](https://pan.baidu.com/s/1IG1J1ewAVFmTgcY4uE-hGw)提取码: ygpq

#### 设备要求
* \>= Android7.0
#### 编程语言要求
* javascript 不熟悉也没关系
#### 使用讲解
* 1.安装之后打开Auto.js需要给予权限
<br/>
<img style="width:300px;" :src="$withBase('/image/autojs-1.jpg')" alt="dock">

* 2.点击右下角加号新建文件
<br/>
<img style="width:300px;" :src="$withBase('/image/autojs-2.jpg')" alt="dock">

* 3.点击图中标红位置的铅笔图标进行脚本编写，播放按钮运行脚本
<br/>
<img style="width:300px;" :src="$withBase('/image/autojs-3.jpg')" alt="dock">

* 4.在空白处写入代码，代码我会粘贴在下面，写好代码之后点击保存,这里代码很简单就是对定时器的利用配合滑屏API来完成，如果对脚本不是很熟悉直接复制即可
<br/>
<img style="width:300px;" :src="$withBase('/image/autojs-4.jpg')" alt="dock">
```js{3}
  var i = 0
  setInterval(function(){i++
    swipe(500,2000,500,500,600); // 滑屏
    if(i==200){
      let next = confirm("is next")
      if(next){
        i=0
      }else{
        exit()
      }
    }
  },15000) // 滑屏间隔
```
[滑屏的api](https://hyb1996.github.io/AutoJs-Docs/#/coordinatesBasedAutomation?id=swipex1-y1-x2-y2-duration)

* 5.两种运行方式一种是在步骤三点击运行，另一种是在步骤四编写完代码后在上方点击运行
* 6.在管理里面查看当前运行的脚本
<br/>
<img style="width:300px;" :src="$withBase('/image/autojs-5.jpg')" alt="dock">
* 7.关闭脚本，在管理界面->运行中的脚本->每个脚本后面对应的叉号点击即可关闭

#### 相关文章
* [autojs文档](https://hyb1996.github.io/AutoJs-Docs/#/)
#### 声明
* 版权归原作者所有，如有侵权联系删除 issue即可 
* [项目地址](https://github.com/huskyAreYouScared/blog)
