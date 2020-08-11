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
```
  /xxx/xxx/xxx.mp4
```

## ffmpeg-static根据不同平台进行打包
[ffmpeg-static打包](./according-platform-build.html)


## 开发时候的用户文件位置
* windows平台开发在：`C:\Users\这里是用户名\AppData\Roaming\Electron` 中

## 用户文件目录
```js
let {app} from 'electron'
app.getPath()
```
* %APPDATA% Windows 中
* $XDG_CONFIG_HOME or ~/.config Linux 中
* ~/Library/Application Support macOS 中
### 具体到当前应用的目录
* 需要多传递一个`userData`属性
```js
let {app} from 'electron'
app.getPath('userData')
```
* 还有很多路径可以访问，详见[官网](https://www.electronjs.org/docs/api/app#appgetpathname)
