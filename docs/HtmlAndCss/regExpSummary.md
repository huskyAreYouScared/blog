# 正则小记

## 前置知识
* 字符串中可以使用正则的方法
  * search
  * match
  * matchAll
  * split
  * replace
* 正则对象 RegExp
  * 正则对象方法
    * test
    * exec
  * 正则对象属性
    * lastIndex

## 转译
* 在字面量定义的正则用`\`转译，在正则表达式对象RegExp中转译要用`\\`
```js
// 对 . 进行转译
let reg =/\.\d/
// 对 . 和 \d 进行转译
let regObj = new RegExp("\\.\\d") 
```

## \d 和 \D
* \d 代表 0～9其中一个字符
* \D 代表 除了0～9的其他字符

## \s 和 \S
* \s 代表 匹配空白
* \S 代表 除了空白之外的字符
:::tip
空白指 --> 空格“ ” 制表符“  ” 换行“\n” 
:::

## \w 和 \W
* \w 代表匹配一个数字或者字母或者下划线（"_"）
* \W 代表匹配一个除了数字或者字母或者下划线（"_"）的字符

## . 匹配
* 用来匹配除了换行之外的其他字符
```js
/^.+$/.test('\nsad\n') // false
/^.+$/.test('sad') // true
```
## 匹配任何字符
* 可以通过 [\d\D] [\w\W] [\s\S]方式来匹配所有字符

## i 和 g 修正符
* i 匹配不区分大小写
```js
let str = 'Husky are you scared'
console.log(str.match(/h/i))
// ["H", index: 0, input: "Husky are you scared", groups: undefined]
```
* g 匹配全局
```js
let str = 'husky are you scared'
console.log(str.match(/u/g))
// ["u", "u"]
```
## m 多行匹配修正符
* 如果遇到多行的字符串，可以用这个修饰符，让每一行都按照正则来匹配多行之间无影响
```js
let mutipleStr = `
  husky are you
  scared husky
  it is a crazy dog as two ha ha
`
console.log(mutipleStr.match(/husky$/m))
// ["husky", index: 26, input: "↵  husky are you↵  scared husky↵  it is a crazy dog as two ha ha↵", groups: undefined]
```
## y 必须连续匹配的修正符
```js{10}
let str = "husky are you scared"
let reg = /[huy]/y
console.log(reg.exec(str))
console.log(reg.exec(str))
console.log(reg.exec(str))
console.log(reg.exec(str))
console.log(reg.exec(str))
["h", index: 0, input: "husky are you scared", groups: undefined]
["u", index: 1, input: "husky are you scared", groups: undefined]
null
["h", index: 0, input: "husky are you scared", groups: undefined]
["u", index: 1, input: "husky are you scared", groups: undefined]
```
* 可以看到在第十行输出了null，代表着匹配到字母 `s`的时候由于`s`不再正则匹配里面，所以就中断了继续向下匹配，如果是 `g`修饰符就会继续向下匹配，直到字符串末尾
* 第11和12行是从新开始了一轮匹配
* 如果要想匹配字符串中一段连续的字符，用`y`修正符比较高效

## u 属性匹配修饰符
### 例子1 匹配Emoji
* 匹配字符属性为Emoji的字符，更多属性请查看[unicode](https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt#%20Emoji%20(Emoji))

```js
let str = `😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 `
console.log(str.match(/\p{Emoji}/ug))
```
### 例子2 匹配中文
* 匹配文字系统属性，用Script (as sc) 来匹配，可以点击下图去查看详情
[![http://www.unicode.org/standard/supported.html](https://imgkr.cn-bj.ufileos.com/a13ebc02-ebd5-49b1-8fd0-d79b3146121d.png)](http://www.unicode.org/standard/supported.html)
* 可以将鼠标移动到每一个文字系统上查看更多表达方式
```js
let str = `husky are you scared 二哈`
console.log(str.match(/\p{sc=Han}/ug))
// ["二", "哈"]
```
* 如果要匹配宽字节的字符也可以使用 `u` 修饰符
## lasIndex 和 exec
* 用正则表达式的`exec`方法来进行匹配，以获取匹配到的字符的详细信息，每执行一次`exec`方法，`lastIndex`就索引值就会变成匹配到的字符的后一位索引，然后再一次执行exec就会从匹配到的字符的后一位索引开始进行匹配
```js
let reg = /\p{sc=Han}/ug
let str = '哈士奇你怕吗'
console.log(reg.lastIndex) // 0
// 执行
reg.exec(str) // ["哈", index: 0, input: "哈士奇你怕吗", groups: undefined]
console.log(reg.lastIndex) // 1
// 在执行 
reg.exec(str) // ["士", index: 1, input: "哈士奇你怕吗", groups: undefined]
console.log(reg.lastIndex) // 2
```
## ^ 排除匹配
* 通过 `^` 和 `[]` 来做排除匹配，匹配下面字符串中的中文
```js
let str = 'husky are 二 you  哈 scared'
console.log(str.match(/[^\w ]/g)) // 这里我们排出数字字母和空格
// ["二", "哈"]
```
## 原子表特殊字符不解析
* 在正则中 `.` `+` `()`等等都有特殊的含义，一般要匹配这些特殊的字符要在其前面加上 `\`来转译
* 但是放到原子组中就不用转译了可以直接匹配
```js
let str = '(husky).com+'
console.log(str.match(/[().+]/g))
// ["(", ")", ".", "+"]
```
## 原子组
* 用`（）`包裹的一段符合匹配的内容
```js
let str = 'name:husky,age:18'
let result = str.match(/((\w*):(\w*))/)
console.log(result)
// 0: "name:husky"
// 1: "name:husky"    // 匹配的第一组信息
// 2: "name"          // 匹配的第二组信息
// 3: "husky"         // 匹配的第三组信息
// groups: undefined
// index: 0
// input: "name:husky,age:18"
// length: 4
```
### ?: 来对已经匹配的原子组进行忽略
* 举例
```js
let str = 'husky are you scared'
// 不忽略空格，就会在结果中进行记录
console.log(str.match(/(\w*( ))/))
// ["husky ", "husky ", " ", index: 0, input: "husky are you scared", groups: undefined]

// 忽略匹配空格的原子组
console.log(str.match(/(\w*(?: ))/))
// ["husky ", "husky ", index: 0, input: "husky are you scared", groups: undefined]
```
### $ 来替换正则原子组中的匹配值
* 举例：我们给下面的字符串换一种展现方式
```js
let str = 'name:husky,name:cat,name:twohaha'
console.log(str.replace(/(name):(\w+)/g,'$1--$2'))
// name--husky,name--cat,name--twohaha
```
### $&、 $`、 $' 
* $&  代表匹配到的内容
* $`  代表匹配到的内容的左边
```js
let str = 'huskyareyouscared'
console.log(str.replace(/husky/,'small$`$&'))
// smallhuskyareyouscared
```
* $'  代表匹配到的内容的右边
```js
let str = '@#%'
console.log(str.replace(/#/,"$'"))
// @%%
```
###  给原子组起别名
* 通过在原子组中加入`?<别名>`来声明别名，通过`$<别名>`的方式来配合获取原子组的内容
#### 别名案例一
```js
let str = 'husky @ you scared'
let reg = /(?<name>@)/gi
console.log(str.replace(reg,'<span>$<name></span>'))
// husky <span>@</span> you scared
```

#### 别名案列二
* 首先我们先准备一段字符串。将str对象通过JSON.stringify将它序列化
```js
let str = [
  {name:'张三'},
  {name:'李四'},
  {name:'husky'}
]
let jsonStr = JSON.stringify(str)
console.log(jsonStr)
// [{"name":"张三"},{"name":"李四"},{"name":"husky"}]
```
* 通过正则原子组别名的方式还原回去
```js
function parse (arrStr) {
  let tempArr = []
  let reg = /\{(").*?\1:\1(?<name>.+?)\1\}/ig 
  for(let item of arrStr.matchAll(reg)){
    tempArr.push(item.groups)
  }
  return tempArr
}
console.log(parse(jsonStr))
// (3) [{…}, {…}, {…}]
// 0: {name: "张三"}
// 1: {name: "李四"}
// 2: {name: "husky"}
```

## 重复匹配的符号 * +
* `*`代表匹配0个或者多个
```js
let str = '@husky @you @'
console.log(str.match(/@\w*/gi))
// ["@husky", "@you", "@"]
```
* `+`代表匹配一个或者多个
```js
let str = 'husky are you scared'
console.log(str.match(/ \w+/gi))
// [" are", " you", " scared"] 由于husky前面没有空格所以匹配不到
```
## ? 禁止贪婪
* 首先如果单独实用 `?` 代表匹配 `0` 或者 `1` 个
* 限制 `+` 的贪婪匹配 就这样使用 `+?`,同样 `*?` 也一样会被限制, 同样`{1,}?` 也会被限制
```js
let str = 'husky are you haaaaaaaaaa'
console.log(str.match(/ha+/))
// ["haaaaaaaaaa", index: 14, input: "husky are you haaaaaaaaaa", groups: undefined]
console.log(str.match(/ha+?/))
// ["ha", index: 14, input: "husky are you haaaaaaaaaa", groups: undefined]

console.log(str.match(/ha*?/))
// ["h", index: 0, input: "husky are you haaaaaaaaaa", groups: undefined]

console.log(str.match(/ha{1,}?/))
// ["ha", index: 14, input: "husky are you haaaaaaaaaa", groups: undefined]
```
* 通过上面的三个例子可以看出 在贪婪匹配中加上 `?` 就会取它们`(*,+,{1,})`中的做小匹配值进行匹配
* 举例
```js
let str = `
  <p>husky</p>
  <p>are</p>
  <p>you</p>
  <p>scared</p>
`
// 不加禁止贪婪
console.log(str.match(/<(p)>[\d\D]+<\/\1>/ig))
// ["<p>husky</p>↵  <p>are</p>↵  <p>you</p>↵  <p>scared</p>"] 
// 直接从头匹配到尾忽略了中间的</p>


// 加上禁止贪婪
console.log(str.match(/<(p)>[\d\D]+?<\/\1>/ig))
//  ["<p>husky</p>", "<p>are</p>", "<p>you</p>", "<p>scared</p>"]
```

## exec 利用全局匹配
* 这里面利用了正则的 lastIndex属性和exec方法来实现
```js
function searchAll(str,reg){
  // 这里我们就不校验参数了
  let result = []
  let res = ''
  while((res = reg.exec(str))){
    result.push(res[0])
  }
  return result
}
// 这里有个主意正则表达式必须有全局修饰符g否则进入死循环
console.log(searchAll('aaa,ddd,asda,a,sd,',/a+/g));
// ["aaa", "a", "a", "a"]
```
## 进阶小技巧
### ?= 用人话解释“后面是什么”
* 给出下面一段字符，我们要匹配`husky`但是后面要是`=`号的`husky`,将其替换为`two ha ha`
```js
let text = 'husky! husky= husky$'

let reg = /husky(?==)/ig

let result = text.replace(reg,'two ha ha')
console.log(result)
// husky! two ha ha= husky$
```
:::tip
断言只作为条件，不再匹配的结果里面
:::
### ?<= 用人话解释“前面是什么“
* 给出下面一段字符，我们要匹配前面是`@`符号的`husky`,将其替换为`two ha ha`
```js
let text = '@husky #husky ¥husky'

let reg = /(?<=@)husky/ig

let result = text.replace(reg,'two ha ha')
console.log(result)
// @two ha ha #husky ¥husky
```

### ?! 用人话解释“后面不是什么”
* 给出下面一段字符，我们要匹配后面不是`@`符号的`husky`,将其替换为`two ha ha`
```js
let text = 'husky@ husky@ husky¥'

let reg = /husky(?!@)/ig

let result = text.replace(reg,'two ha ha')
console.log(result)
// husky@ husky@ two ha ha¥
```

### ?<! 用人话解释“前面不是什么”
* 给出下面一段字符，我们要前面不是`@`符号的`husky`,将其替换为`two ha ha`
```js
let text = '#husky @husky &husky'

let reg = /(?<!@)husky/ig

let result = text.replace(reg,'two ha ha')
console.log(result)
// #two ha ha @husky &two ha ha
```
