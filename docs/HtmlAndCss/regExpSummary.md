# 正则小记

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

## .
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

## ?= 用人话解释“后面是什么”
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
## ?<= 用人话解释“前面是什么“
* 给出下面一段字符，我们要匹配前面是`@`符号的`husky`,将其替换为`two ha ha`
```js
let text = '@husky #husky ¥husky'

let reg = /(?<=@)husky/ig

let result = text.replace(reg,'two ha ha')
console.log(result)
// @two ha ha #husky ¥husky
```

## ?! 用人话解释“后面不是什么”
* 给出下面一段字符，我们要匹配后面不是`@`符号的`husky`,将其替换为`two ha ha`
```js
let text = 'husky@ husky@ husky¥'

let reg = /husky(?!@)/ig

let result = text.replace(reg,'two ha ha')
console.log(result)
// husky@ husky@ two ha ha¥
```

## ?! 用人话解释“前面不是什么”
* 给出下面一段字符，我们要前面不是`@`符号的`husky`,将其替换为`two ha ha`
```js
let text = '#husky @husky &husky'

let reg = /(?<!@)husky/ig

let result = text.replace(reg,'two ha ha')
console.log(result)
// #two ha ha @husky &two ha ha
```