# debounce、throttle

## debounce(防抖)

### 演示debounce的用法
* `debounce`就是实现防抖的工具方法, 用法很简单,只需要将真正需要执行的方法，传参给`debounce`第一个参数，第二个参数是控制防抖的时间,当然还会有第三个参数，我们后面说
```js{4}
let test = function(e){
  console.log(e);
}
window.onmousemove = debounce(test, 500)
```
* 防抖可以理解为：相当于我们给这个函数设置了一个倒计时（第二个参数），第一次触发事件，倒计时开始，当倒计时为`0`的时候，才会真正的执行绑定的事件（第一个参数），但是如果倒计时还没有结束，就再次触发事件，倒计时将回到初始值，继续在进行倒计时。

### 作用
* 我们来通过一个示例就可以更清晰的理解防抖的作用
```html{5}
搜索框：<input type="text" id="input"/>
<script>
  let inputEl = document.getelementById('input')

  inputEl.oninput=debounce(function(){
    // 调用接口来查询
  },500)
</script>
```
* 这是一个很常见的例子，一个搜索框，搜索框监听`oninput`事件来向后台调用接口，但是`oninput`事件没按一个键都会触发，也就调很多次接口，这就会出现一种情况，后调用的接口可能先响应，先调用的接口可能数据后响应，这样数据就不对了

### 由浅入深
* 还是老样子，我们由浅入深的一步一步分析，先实现一个最简单的，可能有缺陷，没关系，我们慢慢完善
```js
function debounce(fn, delay){
  let timeout;
  return function(){
    if(timeout) clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  }
}
```
* 一眼看上去，可以看到这是一个闭包的方式，将`timeout`变量缓存起来
* 还可以确定这个方法将返回一个函数，这也符合预期，因为要将这个函数返回，绑定给监听的事件
```js{2,4}
functon test(){/*其他逻辑*/}
window.onmousemove = debounce(test,500) 
/*相当于*/ 
window.onmousemove = function(){
  if(timeout) clearTimeout(timeout);
  timeout = setTimeout(test, delay);
}
```
* 匿名函数体中的逻辑也很简单，如果`timeout`不为空，就清除定时器，如果为空才会往下走，设置定时器。来执行`test`方法
* 好了到这里一个漏洞百出的防抖函数完成了，之所以写成这样，是为了方便理解核心思想

### 优化环节
* 我们在看一个示例，来引出我们接下来要完善的地方

```html{7}
<div id="container" style="width:500px;height:500px;background:#333;"> </div>
<script>
  function changeColor(event){
    console.log(event)
    console.log(this)
  }
  document.getElementById('container').onmousemove = debounce(changeColor,500) 
</script>

```
<img :src="$withBase('/image/debounce_optimize_01.png')">

* 可以看到，我们并没有预期的输出参数`event`,返回的`this`也不是`id`为`container`的`div`,而是`window`
* 所以接下来我们要处理的就是`传参`和正确的`上下文`
```js{4,5,8}
function debounce(fn, delay){
  let timeout;
  return function(){
    let args = arguments
    let conetxt = this
    if(timeout) clearTimeout(timeout);
    timeout = setTimeout(()=>{
      fn.call(conetxt,...args)
    }, delay);
  }
}
```
* 通过在匿名函数中声明当前函数的入参，和上下文，通过`call`方法来改变`this`指向并传递参数
* 在最开始的时候我们提到了，`debounce`还是需要第三个参数，第三个参数是用来控制，第一次触发事件是否立即执行一次真正的方法，接下来在进行优化，来实现这个功能
```js{7,10}
function debounce(fn, delay, immediate){
  let timeout;
  return function(){
    if(timeout) clearTimeout(timeout);
    let args = arguments
    let conetxt = this
    if(!timeout && immediate) fn.call(conetxt,...args)
    timeout = setTimeout(()=>{
      fn.call(conetxt,...args)
      timeout = null
    }, delay);
  }
}
```
* 第`7`行，通过判断`timeout`和`immediate`两个变量来判断是否为立即执行，当`!timeout`为这`true`时和`immediate`为`true`，才证明时触发了第一次执行，并且为立即执行
* 第`10`行，为了保证立即执行的逻辑，所以在每次真正执行方法后，都要将闭包缓存的`timeout`设置为空，为了配合下一次的立即执行逻辑，如果不设置为空，下次就不会立即执行了
* ok到这里就全部结束了，如果还有什么优化点，后面会继续补充

## throttle(节流)

### 演示节流用法

```html
<div id="container" style="width:500px;height:500px"> </div>
<script>
  function test(){
    let color = ['red','blue','green','yellow','orange']
    this.style.background = color[Math.round(Math.random()*5)]
  }
  document.getElementById('container').onmousemove = throttle(test,2000) 
</script>
```
<img :src="$withBase('/image/throttle_demo.gif')">

### 原理
* 在连续触发某个事件，在规定的时间内`（throttle第二个参数）`，只会执行一次绑定的函数`（throttle第一个参数）`

### 代码实现
* 实现节流的方式有很多，我们先实现一个易于理解的版本
```js
function throttle(fn, delay){
  let temp = 0
  return function() {
    let current = Date.now()
    if (current - temp > delay) {
      fn.call(this, ...arguments)
      temp = current
    }
  }
}
```
* 看这段代码，可以很容易看出，又是利用了闭包的方式缓存了一个变量`temp`
* 接下里我们又申请了一个变量来获取当前的时间戳
* 用当前时间戳和保存的变量进行相减，如果这个值大于了我们传入的`delay`值，就会执行绑定的方法
* 因为考虑到参数和上下文的问题，我们可以用`call`方法来帮助我们改变this的指向，并传入参数
* 最后一步很关键，要更新`temp`变量的值为当前时间戳，否则后面每次触发事件都会符合第五行的判断，`fn`也就每次都会执行，节流作用就失效了

### 优化
* 简单版本完事了，还要进行一下优化，来判断一下参数是否传递正确
```js
function throttle(fn, delay){
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function')
  }
  if (typeof delay !== 'number') {
    throw new TypeError('Expected a number')
  }
  let temp=0
  return function(){
    let current = Date.now()
    if(current - temp > delay){
      fn.call(this,...arguments)
      temp = current
    }
  }
}
```
* 增加了前`6`行代码，用来判断传入参数是否符合要求，ok到这里`throttle`函数就完成了

### 其它实现方式

#### 利用setTimeout来实现
```js{10, 16}
function throttle(fn, delay){
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function')
  }
  if (typeof delay !== 'number') {
    throw new TypeError('Expected a number')
  }
  let timeout=null
  return function(){
    if(!timeout){
      let args = arguments
      let context = this
      timeout = setTimeout(()=>{
        fn.call(context, args)
        clearTimeout(timeout)
        timeout = null
      }, delay)
    }
  }
}
```
* 主要看第`10`行和`16`行即可，主要是通过判断当前`timeout`变量是否为`null`来判断是否可以执行