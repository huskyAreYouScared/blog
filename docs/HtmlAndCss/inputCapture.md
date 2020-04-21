# 移动端input选择文件
* 以android手机举例，兼容性问题在后面讲

## 选择视频
### accept="video/*"
```html
* 如果只设置了accept手机会让我们选择，摄像机，文件管理，视频
<input type="file" accept="video/*">
```

### accept="video/*" capture
* 如果设置了accept还设置了capture，就会调用手机的摄像机
```html
<input type="file" accept="video/*" capture>
```


## 选择图片
### accept="image/*"
```html
* 如果只设置了accept手机会让我们选择，相机，文件管理，相册
<input type="file" accept="image/*">
```

### accept="image/*" capture
* 如果设置了accept还设置了capture，就会调用手机的照相机
```html
<input type="file" accept="image/*" capture>
```

## 选择音频
### accept="audio/*"
```html
* 如果只设置了accept手机会让我们选择，录音机，文件
<input type="file" accept="audio/*">
```

### accept="audio/*" capture
* 如果设置了accept还设置了capture，就会调用手机的录音机
```html
<input type="file" accept="audio/*" capture>
```
* 在微信里面不可以，还是让我们选择，录音机，文件 wechat version7.0.13 ｜2020.4.21 ｜vivo-xplay21

## 直接进入本地文件
### accept="*"
```html
* 直接进入本地文件，可以选择任何文件
<input type="file" accept="*">
```

## 在accept设置.png,.jpg
### accept="*"
```html
* 直接进入本地文件，可以选择任何文件，除了图片其他文件还是可以选择，如果要选择指定类型文件，建议用image/*,video/*,audio/*
<input type="file" accept=".png,.jpg">
```
* 在微信中直接提示，没有应用可以执行此操作 wechat version7.0.13 ｜2020.4.21 ｜vivo-xplay21

> 以上内容都是在移动端下的情况