# 兼容性总结

* 记录遇到过的浏览器兼容性问题

## Svg-icon
* [svg-icon](https://panjiachen.github.io/vue-element-admin-site/zh/feature/component/svg-icon.html)如果用过vue-element-admin这个项目，那应该都会到这个问题
* svg-icon其实是使用了svg中的use标签的:href
```html{6}
// html部分
<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners" />
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :href="iconName" />
  </svg>
</template>
```
* 但是safari浏览器在12.1版本之前都不支持这个svg中use标签的href属性
<iframe src="https://caniuse.com/#feat=mdn-svg_elements_use_href"  width="100%" height="500">
</iframe>
* 所以整体图标全部换成了[iconfont](https://www.iconfont.cn/)的字体图标
* 后面发现这个有人提这个[issues](https://github.com/PanJiaChen/vue-element-admin/pull/3085)，被修复了
* 将原来的use的href属性替换成xlink:href
```html
<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners" />
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
-  <use :href="iconName" />
+  <use :xlink:href="iconName" />
  </svg>
</template>
```
## 移动端上传图片
* `android` 不加 `capture` 属性，可以选择，本地文件，相册，或者拍照
* `IOS` 加 `capture` 属性，可以选择，本地文件，相册，或者拍照
* 这两个端刚好相反，所以要做一些特殊的处理
```html
```
```js
```