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

### 优化：将UI和业务逻辑分离
* 首先我们在src目录下新建一个ToDoUI.js来放UI代码
* 将原来的App.js中的UI部分抽离出来
```js
// ToDoUI.js
import React, { Component } from 'react'; 

import { Input, Button, Card, Divider } from "antd";
class ToDoUI extends Component {

  render() { 
    return (
      <div style={{ width: "50%", margin: "20px auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Input
            style={{ width: "80%" }}
            value={this.props.value}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleAddClick}>
            添加
          </Button>
        </div>
        <Divider dashed />
        {this.props.list.map((item, index) => {
          return (
            <Card
              onClick={() => {this.props.handleDeleteClick(index)}}
              key={index}
              style={{ marginTop: 10 }}
            >
              <p>{item}</p>
            </Card>
          );
        })}
      </div>
    );
  }
}
export default ToDoUI;
```
* UI组件中需要的属性和方法将通过属性的方式传递过来
* 那么接下来改造业务逻辑部分,没有太大变化，主要是讲UI部分单独提出去，在这里面已组件的方式引入，并传递需要的props
```js
import React, { Component } from 'react'
import store from './store';
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators';
import ToDoUI from './ToDoUI'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <ToDoUI
        value={this.state.value}
        handleInputChange={this.handleInputChange}
        handleAddClick={this.handleAddClick}
        handleDeleteClick={this.handleDeleteClick}
        list={this.state.list}
      />
    );
  }
  handleInputChange(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action);
  }
  handleAddClick() {
    const action = addItemAction()
    store.dispatch(action);
  }
  handleDeleteClick(index) {
    console.log(index);
    const action = deleteItemAction(index)
    store.dispatch(action);
  }
  storeChange() {
    this.setState(store.getState());
  }
}
export default App;
```
### 优化：UI组件改为无状态组件
* 无状态组件通过`function`方式定义并将j`sx`的`UI`部分`return`即可
* `props` 作为`function`的形参传入
```js
import React, { Component } from 'react'; 
import { Input, Button, Card, Divider } from "antd";

function ToDoUI(props){
  return (
    <div style={{ width: "50%", margin: "20px auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Input
          style={{ width: "80%" }}
          value={props.value}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleAddClick}>
          添加
        </Button>
      </div>
      <Divider dashed />
      {props.list.map((item, index) => {
        return (
          <Card
            onClick={() => {props.handleDeleteClick(index)}}
            key={index}
            style={{ marginTop: 10 }}
          >
            <p>{item}</p>
          </Card>
        );
      })}
    </div>
  )
}
export default ToDoUI;
```

### redux-thunk中间件
* 使用`redux-thunk`可以让您编写与`store`交互的异步逻辑
* 首先安装`redux-thunk`
```sh
yarn add redux-thunk -S
```
* 接下来去`store`目录中使用`redux-thunk`中

```js
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer';
import thunk from 'redux-thunk';
const store = createStore(reducer, applyMiddleware(thunk));
```

* 因为我们要适配`redux-devtools`所以要引入`compose`，来实现增强函数

```js
import {createStore, compose, applyMiddleware} from 'redux'
import reducer from './reducer';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

export default store
```

### redux-thunk 示例
* 首先我们需要准备模拟请求的网站，这里我们使用[一言](https://hitokoto.cn/#)提供的接口
* 一言提供了接口可以根据传递不同参数返回不同的数据，这里我们已最简单的接口进行演示
* ``get`` 请求 ``https://v1.hitokoto.cn/``，返回数据格式如下
```sh
{
"id": 5859,
"uuid": "df187911-1d7f-46e5-8c62-ad156d9227f0",
"hitokoto": "合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。",
"type": "i",
"from": "老子·德经·第六十四章",
"from_who": null,
"creator": "a632079",
"creator_uid": 1044,
"reviewer": 4756,
"commit_from": "web",
"created_at": "1586398126",
"length": 30
}
```
* 接下来我们在`actionTypes`中声明请求列表的`action Type`
```js
+ export const GET_LIST = 'getList'
```
* 在`actionCreators`中声明`action`
* 这里我们要写两个，一个是异步请求数据的`action`，一个是改变触发`store`更新的`action`
```js
export const getList = (value) => {
  return {
    type: GET_LIST,
    value
  };
};

export const getAsyncList = (value) => {
  return (dispatch)=>{
    Axios.get("https://v1.hitokoto.cn/").then(res=>{
      let action = getList(res.data)
      dispatch(action)
    })
  }
};
```
* 准备工作都做好了，接下来在`Todo`的业务逻辑层的`componentDidMount`中执行
```js
import { /*...*/, getAsyncList } from './store/actionCreators';
componentDidMount() {
    let action =  getAsyncList()
    store.dispatch(action)
  }
```

### 使用react-redux
* 首先进入项目的入口处全局增加`Provider`
```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
+ import {Provider} from 'react-redux'
+ import store from './store'

+ const main= (
+   <Provider store={store}>
+     <App />
+   </Provider>
+ )
ReactDOM.render(main, document.getElementById("root"));
```

* 接下来我们再去`ToDoUI`文件中改造
* 主要改造部分就是`export default`的时候`connect`一下，主要作用，就是将原来通过`props`传递过来的属性在这里进行一次转换
* 通过 `connect` 的 第一个参数 `stateToProps`，将`state`中的属性转换为当前组件`props`的属性
* 通过 `connect` 的 第二个参数 `dispatchToProps` ，将父组件中触发`dispatch`的函数挪到这一层，不需要父组件传递相应`dispatch`方法，直接通过`connect`的方式在`props`上增加相应的方法
* 也就是说，父组件中不需要给当前组件传递任何值，就可以完成之前的`todo`交互
```js
const stateToProps = (state)=>{
  return {
    value: state.value, 
    list: state.list
  };
}
const dispatchToProps = (dispatch)=>{
  return {
    handleInputChange(e) {
      let action = changeInputAction(e.target.value);
      dispatch(action);
    },
    handleAddClick(e) {
      let action = addItemAction();
      dispatch(action);
    },
    initGetAsyncList() {
      let action = getAsyncList();
      dispatch(action);
    },
    handleDeleteClick(index) {
      let action = deleteItemAction(index);
      dispatch(action);
    },
  };
}

export default connect(stateToProps, dispatchToProps)(ToDoUI);
```
* 可以删除 给`<ToDoUI>`组件传递的属性了，和`dispatch`还有`store`的逻辑都可以删掉了
```js
// ... 省略 ...
render() {
    return (
      <ToDoUI
-       value={this.state.value}
-       handleInputChange={this.handleInputChange}
-       handleAddClick={this.handleAddClick}
-       list={this.state.list}
-       handleDeleteClick={this.handleDeleteClick}
      />
    );
  }
// ... 省略 ...
```

## React Router

### 安装 react-router
```sh
yarn add react-router -S
```
### 按照传统，准备组件资源
* 首先写着我们上面写`ToDo`的例子写
* 新建一个`other.js`无状态组件
```js
import React from 'react';
function Other () {
  return (
    <h1>other page</h1>
  )
}
export default Other;
```
* 新建一个`AppRouter.js`文件用来定义菜单组件，我们主要的路由就是在这里面配置
```js
import React, { Component } from "react"; 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Menu } from 'antd';
import ToDo from "./ToDo";
import Other from "./other";

class AppRouter extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
      <Router>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <Link to="/">todo</Link>
          </Menu.Item>
          <Menu.Item key="app">
            <Link to="/other/">other</Link>
          </Menu.Item>
        </Menu>
        <Route path="/" exact component={ToDo} />
        <Route path="/other/" component={Other} />
      </Router>
    );
  }
}
export default AppRouter;
```
* 我们通过`Router、Route、Link`三个组件的配合，完成了最简单的路由配置

### 动态传值
* 首先设置动态传值的规则，在`Route`组件上
* 我们在`path`中使用`:xxx`的方式设置动态路由参数
```js
<Route path="/" exact component={ToDo} />
<Route path="/other/:title" component={Other} />
```
* 修改`ToDo`的代码，加上`Link`标签来跳转到`other`并动态传入参数
```js
  {props.list.map((item, index) => {
    return (
      <Card
        onClick={() => {props.handleDeleteClick(index)}}
        key={index}
        style={{ marginTop: 10 }}
      >
        <p>{item}</p>
+       <Link to={`/other/`+item}>查看详情</Link>
      </Card>
    );
  })}
```
* 动态路由传入后，对应的路由页面可以在`props`中拿到传入的参数
* 具体在 `props` 的` match`属性的`params`属性中，在具体取值就是我们定义规则的时候`:xxx`的变量名
```js
import React from 'react';
function Other(props) {
  return <h1>title:{props.match.params.title}</h1>;
}
export default Other;
```

### redirect
* 在`react-router-dom`中引入`Redirect`组件进行重定向
```js
function Other(props) {
  return (
    <div>
      <Redirect to="/"></Redirect>
      <h1>title:{props.match.params.title}</h1>;
    </div>
  );
}
```
* 通过`js` `props.history.push`的方式进行重定向
```js
function Other(props) {
  props.history.push('/')
  return (
    <div>
      <h1>title:{props.match.params.title}</h1>;
    </div>
  );
}
```
### 嵌套路
* 嵌套路由很简单，就是在第一层`Route`路由的组件中重新再配置一套`Route`规则即可
* `page1`和`page2`为简单的为无状态组件
```js
import React, { Component } from 'react';
import { Menu } from "antd";
import {Route,Link} from "react-router-dom"
import page1 from './views/page1';
import page2 from './views/page2';
const { SubMenu } = Menu;

class other extends Component {
  handleClick = (e) => {
    console.log("click ", e);
  };
  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          mode="vertical"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to="/other/page1">page1</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/other/page2">page2</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
        <div className="childRoute">
          <Route path="/other/page1" component={page1} />
          <Route path="/other/page2" component={page2} />
        </div>
      </div>
    );
  }
}
export default other
```

## React Hook

### useState
* 声明带有状态的变量
* 通过数组解构的方式得到状态变量，和这个状态改变得方法
```js
import React, {  useState } from 'react';
function Page1 () {
  let [attr1, setAttr1] = useState({
    name:'husky',
    age:2
  });
  return (
    <h1 onClick={()=>{setAttr1({ name: "two haha", age: 3 });}}>
      {attr1.name}
      {attr1.age}
    </h1>
  );
}
export default Page1;
```

### useEffect（一）
* 代替有状态组件中的`componentDidMount`和`componentDidUpdate`钩子函数
* 第一次挂在Dom完成的时候执行一次，数据更新之后执行一次
```js
function Page1 () {
  let [attr1, setAttr1] = useState({
    name:'husky',
    age:2
  });
  useEffect(()=>{
    console.log("attr1");
  })
  return (
    <h1 onClick={()=>{setAttr1({ name: "two haha", age: 3 });}}>
      {attr1.name}
      {attr1.age}
    </h1>
  );
}
```

### useEffect（二）
* 通过`useEffect` 模拟 `componentWillUnmount`
* 通过在`useEffect`第一个匿名函数参数中`return`一个匿名函数的方式来执行，当然还需要在`useEffect`的第二个参数中设置空数组
* 如果不设置空数组，就代表，只要这个组件内有数据变化，就会再执行一遍
* 如果在数组中写了某些状态，那就代表只有写在数组中的状态改变时，才会在触发`useEffect`
```js
function Page1 () {
  let [attr1, setAttr1] = useState({
    name:'husky',
    age:2
  });
  useEffect(()=>{
    console.log("attr1");
    return ()=>{
      console.log('goodbye');
    }
  })
  return (
    <h1 onClick={()=>{setAttr1({ name: "two haha", age: 3 });}}>
      {attr1.name}
      {attr1.age}
    </h1>
  );
}
```
* 当切换路由组件销毁的时候就会在控制台打印`goodbye`

### useContext父子组件通信
* 通过createContext 在父组件中定义并且提供给子组件的状态
```js
export const parentContext = createContext() 

return (
  <div>
    <parentContext.Provider value={/*父组件要共享给子组件的状态*/}>
      {/*子组件*/}
    </parentContext.Provider>
  </div>
)
```
* 在子组件中用 useContext来接收父组件传递的状态
```js
import { parentContext } from "从父组件中引入createContext创建变量";

let name = useContext(parentContext);

return (<h1>{name}</h1>)
```

### useReducer
* 类似于`redux`中的`reducer`的功能
* 接下来使用一个加减数值的案例来了解一下`useReducer`的使用方式
```js
import React, { useReducer } from 'react';

function Page1 () {
  let [count, dispatch] = useReducer((state, action)=>{
    console.log(action);
    switch (action.type) {
      case 'ADD':
        return ++state;
      case 'SUB':
        return --state;
      default:
        return state
    }
  }, 0)
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "SUB" });
        }}
      >
        -
      </button>
    </div>
  );
}
export default Page1;
```

### useContext配合useReducer实现状态管理
* 首先我们将currentContext部分的逻辑单独抽离出来
```js
import React, { createContext } from 'react';

export const currentContext = createContext({});

export const ContextContainer = (props)=> {
  return (
    <currentContext.Provider value={{bg:'#333'}}>
      {props.children}
    </currentContext.Provider>
  )
}
```

* 接下来对currentContext中的代码进行改造，增加reducer部分逻辑
```js
import React, { createContext, useReducer } from "react";

export const currentContext = createContext({});

export const ContextContainer = (props)=> {

  let [bg, dispatch] = useReducer(reducer, '#FFF');

  return (
    <currentContext.Provider value={{ bg, dispatch }}>
      {props.children}
    </currentContext.Provider>
  );
}
export const THEME_COLOR_LIGHT = "THEME_COLOR_LIGHT";
export const THEME_COLOR_DARK = "THEME_COLOR_DARK";

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "THEME_COLOR_DARK":
      return "#333";
    case "THEME_COLOR_LIGHT":
      return "#FFF";
    default:
      return state;
  }
}
```

* 接下来我们去使用，首先我们声明一个控制按钮组，来控制明暗模式
* Context文件就是我们最开始声明的一些方法和属性以及组件
```js
import React, { useContext } from "react";
import {
  currentContext,
  THEME_COLOR_DARK,
  THEME_COLOR_LIGHT,
} from "../Context";

function Ctrl() {
  let { dispatch } = useContext(currentContext);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: THEME_COLOR_DARK });
        }}>
        dark
      </button>
      <button
        onClick={() => {
          dispatch({ type: THEME_COLOR_LIGHT });
        }}>
        light
      </button>
    </div>
  );
}

export default Ctrl;
```

* 接下来处理显示明暗主题的组件，这个组件主要通过useContext来使用改变的状态
```js
import React, { useContext } from "react";
import { currentContext } from "../Context";
function Platform() {
  let { bg } = useContext(currentContext);
  return <div style={{ width: 200, height: 200, background: bg }}></div>;
}

export default Platform;
```

* 两个组件都定义玩了，还需要将他们添加到起初声明的createContext组件中
```js
import React from "react";
import Platform from "./platform";
import Ctrl from "./ctrl";
import { ContextContainer } from "../Context";
function Page1() {
  return (
    <div>
      <ContextContainer>
        <Platform />
        <Ctrl />
      </ContextContainer>
    </div>
  );
}
export default Page1;
```
* 至此我们模拟redux，改变元素主题色的小案例完成

### useMemo
* 通过这个钩子函数可以解决，当某些组件的状态没有变化时，则这些组件内部逻辑不需要重新执行，相当于缓存
```js
import React, { useMemo } from 'react';
function Page2({ title }) {
  function upperName(title = '') {
    return title.toUpperCase();
  }
  const result = useMemo(() => upperName(title), [title]);
  return (
    <>
      <h1>{result}</h1>
    </>
  );
}
```
* 通过上面这个例子，也就是说，只要`title`值不变，`upperName`方法就不会在执行第二遍了

### useRef
* 通过`useRef`来获取来获取`dom`元素,通过`useRef`声明的`dom`变量会将`dom`的信息保存在该变量的`current`属性中
```js
import React, { useRef } from 'react';
function Page2() {
  let h1El = useRef()
  console.log(h1El); // h1El.current
  return (
    <>
      <h1 ref={h1El}>husky are you scared</h1>
    </>
  );
}
export default Page2;
```

### custom hooks
* 自定义钩子函数，主要就是将一些公共的方法抽离出来，降低耦合性
* 需要注意的是自定义钩子函数，需要以`use`开头，就像`useState、useContext`一样
* 接下来使用一个小案例来演示，主要作用就是，判断local storage中是否userInfo信息，如果没有跳转到登录的路由
```js
import React, { useState ,useEffect } from 'react';

function useLoginState(props){
  let [loginState,setState] = useState(false);
  useEffect(()=>{
    if (localStorage.getItem("USER_INFO")) {
      setState(true)
    } else {
      props.history.push("/login/");
      setState(false);
    }
  }, [props.history])
  
  return loginState;
}

function Page2(props) {
  let h1El = useLoginState(props);
  console.log(h1El);
  
  return (
    <>
      <h1>husky are you scared</h1>
    </>
  );
}
export default Page2;
```
* 这里为了演示，放到了一起，在项目中可以单独抽离成公共的hook

<Minimap/>