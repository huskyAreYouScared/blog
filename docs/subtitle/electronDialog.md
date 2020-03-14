# electron dialog小记

## 调用保存弹框（showSaveDialog）

```js{2,3,4}
  dialog.showSaveDialog({title:'保存文件',
    filters: [
      { name: 'subtitle', extensions: ['bcc', 'srt'] } // name 可以自定义随便起
    ],
    properties: ['openDirectory']
  }).then(res => {
    // 渲染进程监听
    event.sender.send('save-srt-file', res)
  })
```
* 高亮的这三行代码，当弹窗打开时只能看到，只有定义在 extensions 数组中的文件后缀名的文件，才能展示在dialog中

* 如果保存的时候输入文件名不输入后缀名，那么默认会给这个文件一个后缀名，也就是 extensions 数组的第一个元素的格式 

* [官网传送门](https://www.electronjs.org/docs/api/dialog#dialogshowsavedialogbrowserwindow-options)