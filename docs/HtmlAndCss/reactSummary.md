---
sidebarDepth: 3
---
# React全家桶

## React
:::tip
目前使用的是15.6.3 版本，后面会有新版本
:::
### hello world
* 首先我们不用任何脚手架，写一个 `Hello world` `demo`
* 我对门首先到 `github` 上面下载 `React` 文件 [网址](https://github.com/facebook/react/releases?after=v15.6.0)
* `https://github.com/facebook/react/releases?after=v15.6.0` 注意网址上后面跟了一个after参数指定了版本号，否则要next很多次才能找到对应版本的文件
* 我们还可以使用npm的方式来下载对应的包，到引入的时候直接在node_modules中引入即可,需要注意版本号
```sh
  npm i react@xx.xx.xx react-dom@xx.xx.xx -S
```
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
### state 和 绑定事件
* 通过 `getInitialState` 定义组件内状态
* 通过`setState`修改组件内状态
* 绑定事件
```js
let DemoCompenent = React.createClass({
        getInitialState: function(){
          return {title:'husky'}
        },
        handleClick: function(){
          this.setState({
            title:'keji'
          })
        },
        render: function () {
          return <div>
              <button onClick={this.handleClick}>i like {this.state.title}</button>
            </div>
          }
      })
      ReactDOM.render(<DemoCompenent />,document.getElementById('container'))
```
* 虽然很简单，但是有一些细节需要注意，定义状态的`getInitialState`函数要有`return`返回值
* 注册事件要用`小驼峰`命名方法，使用`{}`表达式的时候不用谢`""`

### 生命周期
* `componentWillMount` 组件将准备挂载到真实`dom`中
* `componentDidMoun`t 组件已经挂载到真实`dom`中
* `componentWillUpdate` 组件状态将要更新的钩子
* `componentDidUpdate` 组件状态已经更新的钩子
* `componentWillUnmount` 组件将要销毁的钩子函数
* 接下来我们用一个`demo`来演示
```js
let DemoCompenent = React.createClass({
  getInitialState: function(){
    return {title:'husky'}
  },
  componentWillMount: function(){
    console.log(1);
  },
  componentDidMount: function(){
    console.log(2);
  },
  componentWillUpdate: function(){
    console.log(3);
  },
  componentDidUpdate: function(){
    console.log(4);
  },
  componentWillUnmount: function(){
    console.log(5);
  },
  handleClick: function(){
    this.setState({
      title:'keji'
    })
    setTimeout(()=>{
      ReactDOM.unmountComponentAtNode(document.getElementById('container'))
    },1000)
  },
  render: function () {
    return <div>
        <button onClick={this.handleClick}>i like {this.state.title}</button>
      </div>
    }
})
ReactDOM.render(<DemoCompenent talk="husky are you scared" />,document.getElementById('container'))
```
* 这里需要注意的是最后一个`componentWillUnmount`钩子函数，我们在点击事件中通过异步的方式执行了销毁的方法

### 子组件
* 我们来用一个`select`标签 和 `option`标签来演示一下 `react`子组件的使用方式
```js
  let DemoCompenent = React.createClass({
    render: function () {
      return(
        <select>
          { 
            React.Children.map(this.props.children, function (child) {
              return child // 就相当于是<option value="dog">dog</option>  
            })
          }
        </select>
      )
    }
  })
  ReactDOM.render(
    <DemoCompenent>
      <option value="dog">dog</option>  
      <option value="cat"> cat</option>  
      <option value="keji"> keji</option> 
    </DemoCompenent>,
    document.getElementById('container')
  )
```
* 需要注意的是`React.Children`和`this.props.children`的`children`大小写细节

### 属性校验和属性默认值 
* 通过propTypes进行属性校验，getDefaultProps增加属性默认值
* 属性校验仅在开发模式给予warning提示，生产环境需要额外逻辑处理
```js
let DemoCompenent = React.createClass({
        propTypes:{
          name:React.PropTypes.string.isRequired // name属性为string类型，切必须传入
        },
        getDefaultProps:function(){
          return {
            name:'two haha'
          }
        },
        render: function () {
          return <div>{this.props.name}</div>
        }
      })
      ReactDOM.render(<DemoCompenent name="husky"/>,document.getElementById('container'))
```
* 相当于VUE中的
```js
props:{
  name:{
    default:'two haha',
    type: String
  }
}
```
### ref 获取真实dom
* 这个和`Vue`的`ref`用法基本一致
```js
let DemoCompenent = React.createClass({
  handleClick: function(){
    this.refs.box.style.background = '#ccc'
  },
  render: function () {
    return (
      <div ref="box">
        <h1 onClick={this.handleClick}>husky are you scared</h1>
      </div>
    )
    
  }
})
ReactDOM.render(<DemoCompenent/>,document.getElementById('container'))
```
* `Vue`中是`this.$refs`，`react`中是`this.refs`

### 表单注意事项 bind
* 主要注意表单绑定的事件，需要通过bind方法,来传递除了event的参数,如果不需要多余的参数传递进去，那么就正常绑定事件
* label的for属性要写成htmlFor
```js
let DemoCompenent = React.createClass({
  getInitialState: function(){
    return { name : '' }
  },
  handleChnage(name,e){
    this.setState({
      [name] : e.target.value
    })
  },
  handleClick: function(e){
    e.preventDefault()
    console.log(this.state.name);
  },
  render: function () {
    return (
      <form onSubmit={this.handleClick}>
        <label htmlFor="name"></label>
        <input type="text" onChange={this.handleChnage.bind(this,'name')} value={this.state.name}/>
        <input type="submit"/>
      </form>
    )
  }
})
ReactDOM.render(<DemoCompenent/>,document.getElementById('container'))
```

### 动态渲染 style
```js
  style={{background:this.state.bg}} // 正确写法
  style="background:{this.state.bg}" // 错误写法
```
* 下面这个示例，通过在输入框中输入`RGB`的值来动态改变父容器的背景色
```js
let DemoCompenent = React.createClass({
  getInitialState: function () {
    return { bg: "" };
  },
  handleChnage(e) {
    this.setState({
      color: '#'+e.target.value,
    });
  },
  render: function () {
    return (
      <div style={{backgroundColor:this.state.bg}}>
          #<input
            type="text"
            onChange={this.handleChnage}
            value={this.state.bg}
          />
      </div>
    );
  },
});
ReactDOM.render(<DemoCompenent />, document.getElementById("container"));
```

### 使用脚手架
* 正常在工作中为了提高开发效率，项目的初始化，都使用脚手架来完成
* 全局安装`create-react-app`
```sh
  npm install create-react-app -g
```
* 开始构建一个项目
```sh
  create-react-app react-demo
```
* 如果这个环节总是提示 `There appears to be trouble with your network connection. Retrying...`更换淘宝镜像就ok了
```sh
yarn config set registry https://registry.npm.taobao.org
```
* 构建之后会产生如下文件
```sh
.gitignore
package.json
README.md
yarn.lock
node_modules
public
src
  App.css
  App.js
  App.test.js
  index.css
  index.js
  logo.svg
  serviceWorker.js
  setupTests.js
```
* src下有很多文件，为了清晰的由浅入深，我们只留`index.js`文件，其余删除

### 16.x版本组件写法
* 我们来改写一下`index.js`
```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```
* 新建一个`app.js`用来写组件
```js
import React,{Component} from 'react';
class App extends Component {
  render(){
    return (
      <h1>first component</h1>
    )
  }
}
export default App;
```
* 之前组件是通过 `React.createClass` 创建的

* 还有另一种写组件的方式，称为无状态组件，上面这种成为有状态组件
* 但是后面会出`React Hooks` ，这个概念也就不存在了
```js
import React from 'react';
function App2(){
  return (
    <h1>无状态组件</h1>
  )
}
export default App2;
```

### jsx 踩坑
* 在15.x版本中，已经提到过jsx的基本使用，在这里记录一下踩坑
#### 注释
* 注释是要写在{}中
```js
 {/* jsx中的注释写法 */}
```
#### class需要改写为className
```js
<h1 className="text">class注意</h1>
```
#### for 需要改写为 htmlFor

#### 通过 dangerouslySetInnerHTML 解析HTML元素
```js
class App extends Component {
  state={
    title:'<h1>hello world</h1>'
  }
  render(){
    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: this.state.title }}/>
      </div>
    );
  }
}
```
### 父子组件传值
* 首先我们先定义两个组件，首先定义子组件
```js
import React, { Component } from 'react';
class Child extends Component {
  constructor (props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  render() {
    return <p onClick={this.handleDelete}>{this.props.name}</p>;
  }
  handleDelete(){
    this.props.handleDelete(this.props.index)
  }
}
export default Child;
```
* 其中handleDelete是通过父组件传递过来的方法
* 再定义一个父组件来使用子组件，并传入子组件需要的属性
```js
import React, { Component } from "react";
import Child from "./Child";

class App extends Component {
  state = { list: ["dog", "cat", "fish"] };
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  render() {
    return (
      <div>
        {this.state.list.map((item, index) => {
          return (
            <div key={item}>
              <Child
                index={index}
                handleDelete={this.handleDelete}
                name={item}
              ></Child>
            </div>
          );
        })}
      </div>
    );
  }
  handleDelete(index) {
    this.state.list.splice(index, 1)
    this.setState({
      list: this.state.list,
    });
  }
}
export default App;
```
### propTypes 检验prop传值类型
* 需要在使用`prop`的子组件中来校验
* 需要引入[prop-types](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html)工具包,它里面有很多配置，这里我们简单举两个例子
* 通过当前类中的属性`propTypes`来配置
```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child extends Component {
  constructor (props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  render() {
    return <p onClick={this.handleDelete}>{this.props.name}</p>;
  }
  handleDelete(){
    this.props.handleDelete(this.props.index)
  }
}

Child.propTypes = {
  handleDelete:PropTypes.func.isRequired,
  name:PropTypes.string.isRequired
};

export default Child;
```

### defaultProps定义默认值
* 如果我们父组件没有给对应的属性传值，那么子组件将会使用默认值
* 通过当前类中的属性`defaultProps`配置
```js
Child.defaultProps = {
  name:'animal'
};
```

### 生命周期性能优化
* 通过shouldComponentUpdate生命周期函数来判断属性是否变换，如果没变不进行重新渲染
```js
shouldComponentUpdate(nextProps,nextState) {
    if(nextProps.name!==this.props.name){
      return true
    }else {
      return false
    }
  }
  render() {
    return <p onClick={this.handleDelete}>{this.props.name}</p>;
  }
```

## Redux

### 准备环节
* 首先我们需要安装[redux](http://cn.redux.js.org/)
```sh
yarn add redux -S
```
* 在使用之前，我们先写一些UI来配合使用`redux`，我们安装[antd UI](https://ant-design.gitee.io/index-cn)
```sh
yarn add antd -S
```

### 界面搭建
* 我们用一个常用案例`TodoList` 来演示
```js
import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, Card, Divider } from "antd"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: []
    }
  }
  render() { 
    return (
      <div style={{ width: "50%", margin: "20px auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between"}}>
          <Input style={{ width: "80%" }} />
          <Button type="primary">添加</Button>
        </div>
        <Divider dashed />
          {this.state.list.map((item, index) => {
            return (
              <Card key={index + 1} style={{marginTop: 10}}>
                <p>{item}</p>
              </Card>
            )
          })}
      </div>
    )
  }
}
export default App;
```

### 使用 redux devtools
* 到`Google`商店下载，或者去`GitHub`下载[redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
* 代码中要写一段逻辑配合`redux devtools`起效果
```js{3}
const store = createStore(
  reducer,
+ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

### 创建createStore、reducer 
* 在`src`中新建`store`目录
* 在`store`中新建`index.js` 和 新建 `reducer.js`
```js
// index.js
import {createStore} from 'redux'
import reducer from './reducer';

const store = createStore(reducer);

export default store
```
* 这里我们给一个默认值
```js
// reducer.js
let defaultState = {
  value: "",
  list: [1, 2, 3],
};
export default (state = defaultState, action) => {
  return state;
};

```

### 给UI绑定点击事件，并触发store.dispatch来改变数据
* 接下来我们对上面的`Todo`代码进行改进
```js
class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState(); // 初始化数据状态
    this.handleInputChange = this.handleInputChange.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    store.subscribe(this.storeChange); // 对store进行订阅，一旦数据改变，调用storeChange改变组件内状态
  }
  render() {
    return (
      <div style={{ width: "50%", margin: "20px auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Input style={{ width: "80%" }} value={this.state.value} onChange={this.handleInputChange} />
          <Button type="primary" onClick={this.handleAddClick}>
            添加
          </Button>
        </div>
        <Divider dashed />
        {this.state.list.map((item, index) => {
          return (
            <Card
              onClick={this.handleDeleteClick.bind(this, index)}
              key={index + 1}
              style={{ marginTop: 10 }}
            >
              <p>{item}</p>
            </Card>
          );
        })}
      </div>
    );
  }

  // 监听输入框的值变化
  handleInputChange(e) {
    const action = {
      type: "changeInput",
      value: e.target.value,
    };
    store.dispatch(action);
  }

  // 增加一项
  handleAddClick() {
    const action = {
      type: "add"
    };
    store.dispatch(action);
  }
  // 删除一项
  handleDeleteClick(index) {
    console.log(arguments);
    const action = {
      type: "delete",
      value: index,
    };
    store.dispatch(action);
  }
  // 数据改变 同时 改变组件内状态
  storeChange() {
    this.setState(store.getState());
  }
}
export default App;

```

### 修改reducer中的action逻辑
* 我们需要给对应的`dispatch`传递的`action`进行处理，来对数据进行修改
```js
export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'changeInput':
      newState.value = action.value
      return newState
    case 'add':
      newState.list.push(newState.value)
      newState.value =''
      return newState
    case 'delete':
      newState.list.splice(action.value, 1);
      return newState
    default:
      break
  }
  return state
};
```
### 优化 action 和 actionType
* 首先我们新建两个文件 `actionTypes` 和 `actionCreators` 两个文件
* 先来声明`actionType`常量
```js
// actionTypes
export const CHANGE_INPUT = 'changeInput'
export const DELETE_ITEM = 'deleteItem'
export const ADD_ITEM = 'addItem'
```
* 在抽离`action`的逻辑
```js
// actionCreators
import { CHANGE_INPUT, DELETE_ITEM, ADD_ITEM } from "./actionTypes"

export const changeInputAction = (value)=>{
  return {
    type: CHANGE_INPUT,
    value
  }
}
export const addItemAction = () => {
  return {
    type: ADD_ITEM,
  };
};

export const deleteItemAction = (value) => {
  return {
    type: DELETE_ITEM,
    value,
  };
};
```
* 做了上面的优化，我们来改写一下`Todo`的绑定事件代码，将`action`抽离出来单独管理
```js

import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators';


  handleInputChange(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action);
  }
  handleAddClick() {
    const action = addItemAction()
    store.dispatch(action);
  }
  handleDeleteClick(index) {
    const action = deleteItemAction(index)
    store.dispatch(action);
  }
```

## React Router

## React Hook
