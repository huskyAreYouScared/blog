# css字体样式

## 使用自定义字体
* 注意版权问题
* 首先定义字体
```css
  @font-face {
    font-family: 'selfFamily'; /* 名字任意取 */
    src: url('selfFont.woff2') format('woff2'),
         url('selfFont.woff') format('woff'),
         url('selfFont.ttf') format('truetype');
    font-style:normal;
    font-weight:normal;
  }
```
* 使用字体
```css
  .use-family{
    font-family:'selfFamily' /* @font-face 中 font-family 定义的名字 */
  }
```
* [字体裁剪工具](https://github.com/2234839/web-font)
## 相关资料
* [Web 中文字体处理总结](https://aotu.io/notes/2020/02/28/webfont-processing/)