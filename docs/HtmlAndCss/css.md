# CSS收藏夹

## 常用

* [Flex布局-阮一峰](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

* [Grid布局-阮一峰](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## 技巧收集

* [css圆形的写法](https://cloudfour.com/thinks/css-circles/)

## 插件

* [瀑布流布局插件](https://masonry.desandro.com/)

## css代码生成

* [animista动画生成](https://animista.net/)

* [三角形生成（1）](https://www.dute.org/css-arrow)

* [三角形生成（2）](http://apps.eky.hk/css-triangle-generator/zh-hant)

* [文本阴影生成（text-shadow）](https://techbrood.com/tool?p=cg-text-shadow)

* [CSS3 框阴影（box-shadow）](https://techbrood.com/tool?p=cg-box-shadow)

* [CSS3 渐变色生成](https://techbrood.com/tool?p=gradient-generator)

* [CSS3 剪切路径（Clip-path）](https://techbrood.com/tool?p=css-clip-path)

* [CSS Gradient Magic](https://www.gradientmagic.com/browse)该网站收集很多渐变效果，支持直接复制CSS代码

* [CSS 布局收集](https://csslayout.io/)

* [毛玻璃效果生成](https://glassmorphism.com/)

* [一个可以在线调节主要参数（CSS 变量）的 CSS 框架。](https://cavepaint.github.io/cavepaintcss/)

* [生成网格效果](https://stripesgenerator.com/)

## css开源库

* [mvp.css](https://andybrewer.github.io/mvp/) 一个最简化的 CSS 库，不提供任何自定义的类，只给出最基本的 HTML 元素的样式，适合在它的基础上添加自定义的样式

## 碎片知识

### 事件透传
```css
.class{
  pointer-events: none;
}
```

### 居中
* `.container` 为容器 `.item` 未子元素
* 布局中没写宽和高，但是其实是有的这里省略，除非必须要用到宽高
#### flex
```css
.container{
  display: flex;
  align-items: center;
  justify-content: center;
}
```
#### position: absolute + transform: translate 
```css
.container{
  position: relative;
}
.item{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

#### position: absolute + margin 负值
```css
.container{
  position: relative;
}
.item{
  --width:100px;
  --height:100px;
  width: var(--width);
  height: var(--height);
  background-color:lightsalmon;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: calc(var(--width) / -2);
  margin-top: calc(var(--height) / -2);
}
```

#### position: absolute + margin: auto
```css
.container{
  position: relative;
}
.item{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
```

#### grid
```css
.container{
  display: grid;
}
.item{
  align-self: center;
  justify-self: center;
}
```

#### table-cell
```css
.container{
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.item{
  display: inline-block;
}
```

#### line-height + text-align + vertical-align
* 用于子元素是行内元素 或者行内块元素
```css
.container{
  width: 300px;
  height: 300px;
  line-height: 300px;
  text-align: center;
}
.item{
  display: inline-block;
  vertical-align: middle;
  line-height: initial; /* 防止子元素继承父元素的line-height*/
}
```

### 省略号
```css
/* 显示一行，省略号 */
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
word-break: break-all;
 
/* 显示两行，省略号 */
text-overflow: -o-ellipsis-lastline;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
line-clamp: 2;
-webkit-box-orient: vertical;
```

### clamp 响应式布局
```css
/* minimum 最小值
flexible 弹性值
maximum 最大值 */
h1 {
  /* font-size: clamp(minimum, flexible, maximum); */
  font-size: clamp(16px, 5vw, 34px);
}
```