### 手机端H5展示页的制作

#### 前言
现在很多的活动都需要h5展示页，网上有很多网站提供这样的服务，但是稍微多一点花样，就要（...）
本次分享就是为了解除这种限制，花样任你玩。
#### 需要的插件
* [swiper](https://www.swiper.com.cn/usage/index.html) 用于滑屏，翻页
* [anime.js](https://www.animejs.cn/documentation/) 用于每一屏的页面动画

#### 准备
* 本次将不使用React、Vue、Angular，将采用HTML+CSS+JS的方式来实现，如果想使用前端框架也是可以的，自适应改造一下就可以，大致代码思路还是一样的
* 在准备好的文件目录,初始化package.json文件
```bash{1}
  npm init -y
```

* 下载插件,以npm包管理器举例说明
```bash{1}
  npm i swiper animejs

  # or

  yarn add swiper animejs
```
如果想加速下载可以在当前目录新建.npmrc文件，在里面指定registry
```bash{1}
  registry=https://registry.npm.taobao.org
```
* 文件准备新建index.html、main.css、[reset.css](https://meyerweb.com/eric/tools/css/reset/)、index.js,引入main.css、reset.css和swiper的js文件和样式文件、animejs、index.js，需要注意先后顺序
```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="./node_modules/swiper/css/swiper.min.css">
      <link rel="stylesheet" href="./reset.css">
      <link rel="stylesheet" href="./main.css">
    </head>
    <body>
      <script src="./node_modules/animejs/lib/anime.min.js"></script>
      <script src="./node_modules/swiper/js/swiper.min.js"></script>
      <script src="./index.js"></script>
    </body>
  </html>
```


#### 接下来正式开始
* 首先在index.html文件加入相应布局标签
```html
  <!-- ...-->
+  <div class="swiper-container">
+    <div class="swiper-wrapper">
+      <div class="swiper-slide">第一页</div>
+      <div class="swiper-slide">第二页</div>
+      <div class="swiper-slide">第三页</div>
+    </div>
+    <!-- 如果需要分页器 -->
+    <div class="swiper-pagination"></div>
+  </div>
  <!-- ... -->
```
* 在reset.css文件中写入，点击这里[reset.css](https://meyerweb.com/eric/tools/css/reset/)查看
```css
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
```
* 在main.css文件写入
```css
  .swiper-container {
    width: 100%;
    height: 100vh;
  } 
```

* 在index.js文件写入
```js
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    // loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  }) 
```
* 此时就可以在浏览器中预览一下最基础，还没有内容的H5展示框架(记得打开调试器，开启手机模式)
*那么框架有了，接下来我们就可以使用animejs做动画，用HTML，css制作想要的布局了，再配合wiper的事件

#### 布局，内容填充
* 这部分大家可以参考或者跳过，因为布局肯定千变万化，简单实现以下了解即可，为了分享的完整性，照顾一下刚刚学习前端的小伙伴

* 布局变化index.html文件
```html
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <h1 class="anime anime1">记得打开调试器</h1>
      <h1 class="anime anime1">选择手机模式运行</h1>
    </div>
    <div class="swiper-slide">
      <h1 class="anime anime2">完成一半了，加油</h1>
      <h1 class="anime anime2">swiper,anime虽好，不要贪杯哦</h1>
    </div>
    <div class="swiper-slide">
      <h1 class="anime anime3">恭喜你完成了本次分享</h1>
      <h1 class="anime anime3">加油</h1>
    </div>
  </div>
```
* css变化main.css文件
```css
 .swiper-slide{
    background-color: #F44336;
    color: #fff;
    text-align: center;
    overflow: hidden;
    position: relative;
  }
  .swiper-slide h1:nth-child(1){
    font-size: 2rem;
    line-height: 200px;
  }
  .swiper-slide h1:nth-child(2){
    font-size: 1.5rem;
    line-height: 400px;
  }
  .anime{
    position: absolute;
    width: 100%;
    top: -800px;
  }
```
* 这里我们通过样式文件将每个页面的布局元素移出了可视区域，需要通过动画的方式移入可视区域
### 动画制作，swiper事件处理

* 将index.js文件的内容修改为下面这样
```js
  let animation=null
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    pagination: {
      el: '.swiper-pagination',
    },
    on: {
      slideChangeTransitionEnd: function () { // 滑动结束调用该事件
      // 这一步很重要 上一页的动画执行完，滑倒下一个页面的时候要将已经执行的动画值回归原位，否则下次在滑倒这个页面将不会有动画了，除非下次滑到这个页面不需要动画了
        animation.reverse() // 动画反转
        animation.play() // 动画播放，播放后上页的位置就回归原位了
        switch (this.realIndex){
          case 0: anime1();break;
          case 1: anime2();break;
          case 2: anime3();break;
          default: anime1()
        }
      },
    },
  })        
  function anime1(){
    animation = anime({
      targets: ['.anime1'],
      top: {
        value: [-800, 0],
        delay: 500
      },
      left: '50%',
      translateX: '-50%'
    })
  }
  function anime2(){
    animation = anime({
      targets: ['.anime2'],
      top: {
        value: [-800, 0],
        delay: 500
      },
      left: '50%',
      translateX: '-50%'
    })
  }
  function anime3(){
    animation = anime({
      targets: ['.anime3'],
      top: {
        value: [-800, 0],
        delay: 500
      },
      left:'50%',
      translateX:'-50%'
    })
  }
anime1()
```
* animejs 的教程我在B站录了教学视频，有兴趣的可以看一下，官网在这了，[传送门](https://www.animejs.cn/documentation/)
#### 效果演示
<img style="width:300px;" :src="$withBase('/image/H5show-over.gif')" alt="dock">

#### 到这里就结束了，可以自由发挥了，加油！