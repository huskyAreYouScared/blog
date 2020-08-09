# mac 和 windows不同的处理

## 获取当前使用的是什么系统

```js
  process.platform // 'darwin'  、 'win32'
```

## 获取当前是什么架构

```js
  process.arch // x64
```
## 路径问题
* 在mac中要用 “/” 否则打开文件的时候会报错
* windows中 “/” ， “\” 都可以所以统一用“/”来拼接文件路径

## ffmpeg-static根据不同平台进行打包
[ffmpeg-static打包](./according-platform-build.html)


## 开发时候的用户文件位置
* windows平台开发在：`C:\Users\这里是用户名\AppData\Roaming\Electron` 中

