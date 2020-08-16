# React全家桶

## React
:::tip
目前使用的是15.6.3 版本，后面会有新版本
:::
### hello world
* 首先我们不用任何脚手架，写一个 `Hello world` `demo`
* 我对门首先到 `github` 上面下载 `React` 文件 [网址](https://github.com/facebook/react/releases?after=v15.6.0)
* `https://github.com/facebook/react/releases?after=v15.6.0` 注意网址上后面跟了一个after参数指定了版本号，否则要next很多次才能找到对应版本的文件
* 首先我们下载好`react.js`和`react-dom.js`文件后，准备一个`HTML`文件并引入
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="container"></div>
  <script src="./react.js"></script>
  <script src="./react-dom.js"></script>
</body>
</html>
```
* 接下来我们开始写`React`代码部分
```js
<script>
  let DemoCompenent = React.createClass({
    render: function() {
      return React.createElement('h1',null,'hello world')
    }
  })
  ReactDOM.render(React.createElement(DemoCompenent),document.getElementById('container'))
</script>
```
* `ok`第一个`react`小`demo`完成
### 初探 jsx
* 首先如果要使用`jsx`语法，我们需要一个工具来帮助浏览器来转换这样的语法`babel-core`
* [https://www.bootcdn.cn/babel-core/5.8.38/](https://www.bootcdn.cn/babel-core/5.8.38/)在这里可以下载，下载后引入
* 还有一点需要注意，就是我们写`js`语法的地方需要在`script`标签中加入`type="text/babel"`属性
* 接下来，我们看一下修改后的代码
```js
<body>
  <div id="container"></div>
  <script src="./react.js"></script>
  <script src="./react-dom.js"></script>
  <script src="https://cdn.bootcdn.net/ajax/libs/babel-core/5.8.38/browser.js"></script>
  <script type="text/babel">
    let DemoCompenent = React.createClass({
      render: function(){
        return <h1>hello world</h1>
      }
    })
    ReactDOM.render(<DemoCompenent/>,document.getElementById('container'))
  </script>
</body>
```
* 这里有一点需要注意，就是我们定义的`DemoCompenent`组件变量需要以大驼峰法`（Camel-Case）`进行定义，否则将不会成功，可以尝试一下小驼峰试一下

### 组件属性
* 和正常的`HTML`标签一样，我们自定义的组件也可以传入属性，在组件之中就可以使用
* 在组件之中可以通过`this.props`的方式使用属性
```js
<script type="text/babel">
  let DemoCompenent = React.createClass({
    render: function(){
      return <h1>{this.props.talk ? this.props.talk : 'hello world'}</h1>
    }
  })
  ReactDOM.render(<DemoCompenent talk="husky are you scared"/>,document.getElementById('container'))
</script>
```

### jsx 渲染数组
* 首先我们需要定义一个数组变量，然后再`jsx`中使用,通过`Array`的`map`方法来遍历返回一个新的`jsx`数组
```js
<script type="text/babel">
  let animals = ['fish', 'cat', 'husky']
  let DemoCompenent = React.createClass({
    render: function () {
      return <div>
          {
            animals.map((name)=>{
              return <p key={name}>{name}</p>
            })
          }
        </div>
      }
  })
  ReactDOM.render(<DemoCompenent talk="husky are you scared" />,document.getElementById('container'))
</script>
```
* 其实通过map遍历得来的就是
```js
[ <p key="fish">fish</p>, <p key="cat">cat</p>, <p key="husky">husky</p> ]
```
## React Hook

## React Router

## Redux
