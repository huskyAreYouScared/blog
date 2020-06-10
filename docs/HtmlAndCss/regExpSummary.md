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