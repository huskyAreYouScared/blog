### mac 和 windows不同的处理

### 获取当前使用的是什么系统

```js
  process.platform // 'darwin'  、 'win32'
```

### 获取当前是什么架构

```js
  process.arch // x64
```
### 路径问题
* 在mac中要用 “/” 否则打开文件的时候会报错
* windows中 “/” ， “\” 都可以所以统一用“/”来拼接文件路径

### 由于目前只适配了windows版，mac目前还没有进行

