# jest单元测试小记

* 环境安装
```bash
  yarn add jest -D
```

## 第一个测试demo
* 准备一个文件夹 `test`
* 准备一个待测试文件 `hello-jest.js`
* 准备一个测试文件 `hello-jest.test.js`,待测试文件名只需要在`.js`结尾之前加上`.test`即可，`jest`就会识别完成测试
```js
  // hello-jest.js

  function hello (name) {
    return 'hello' + name
  }
  module.exports = hello // 这里要用commonjs规范
```
```js
  // hello-jest.test.js
  const hello = require('./hello-jest.js') // 这里要用commonjs规范
  
  // 测试代码
  test('这里是一段关于测试的描述可自定义',()=>{
    let name = 'husky'
    expect(hello(name)).toBe('hello' + name)
  })
```
* 到这里测试文件和被测试文件就准备好了
* 在`package.json`文件配置命令
```json
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "test": "jest" // 添加jest命令
  }
```
* 执行`npm run test`即可完成测试
```
PASS  test/hello.test.js
  √ 这里是一段关于测试的描述可自定义 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.009 s
Ran all test suites.
```

## jest的配置
* 本小节记录一下`jest`的基础配置
* 生成配置文件，要在项目的根目录下执行
```bash
  npx jest --init
```
* 执行完上面的命令会有一个命令行的交互
```bash
// 第一个选择测试的环境，这里我们选择`jsdom`浏览器端
√ Choose the test environment that will be used for testing » jsdom (browser-like)
// 是否生成测试覆盖率文件
√ Do you want Jest to add coverage reports? ... yes
// 自动清除每次测试之间的模拟调用和实例
√ Automatically clear mock calls and instances between every test? ... yes
```
* 此时项目的根目录下就会生成`jest.config.js`文件
* 里面有很多的配置项，可以进行自定义
```js
module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  // ....
}
```

## 代码覆盖率
* 在`package.json` 配置命令
```json
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "test": "jest", // 添加jest命令
    "test:coverage": "jest --coverage" // 添加jest命令
  }
```
* 执行命令
```bash
 npm run test:coverage
```
* 由于再`jest`的配置文件中设置了生成代码覆盖率文件，执行命令之后，分别会在命令行和根目录下产生测试的反馈和文件
```
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |
 hello-jest.js |     100 |      100 |     100 |     100 |
---------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.157 s
Ran all test suites.
```
```
└─coverage
  └─lcov-report
      └─index.html
```
* 打开这个`index.html`即可查看测试报告

## 匹配器 matchers
```js
  test('这里是一段关于测试的描述可自定义',()=>{
    let name = 'husky'
    expect(hello(name)).toBe('hello' + name)
  })
```
* 匹配器指的就是`expect()`后面的`toBe()`方法，但是`jest`有很多类型的匹配器，`toBe()`是普通匹配器
* 详细介绍[官网地址](https://jestjs.io/docs/zh-Hans/using-matchers)
### 普通匹配器
* `toBe()` 用于值类型的精准匹配
* `toEqual()`  用于返回值是对象或者数组的精准匹配
* `not` 不相等的匹配
```js
 expect().not.toEqual() // 对象或数组不相等
 expect().not.toBe() // 值类型不相等
```
### Truthiness
* 用来精准匹配 `undefined`、 `null`，和 `false`
* `toBeNull` 只匹配 `null`
* `toBeUndefined` 只匹配 `undefined`
* `toBeDefined` 与 toBeUndefined 相反
* `toBeTruthy` 匹配任何 `if` 语句为真
* `toBeFalsy` 匹配任何 `if` 语句为假

### 数字匹配器
* toBeGreaterThan() 大于
* toBeGreaterThanOrEqual() 大于等于
* toBeLessThan() 小于
* toBeLessThanOrEqual() 小于等于
* toBeCloseTo() 浮点数相加精度会不准，这个匹配器一般用于浮点数
```js
test('两个浮点数字相加', () => {
  const value = 0.1 + 0.2; 
  // 为什么toBe会报错，就是因为0.1+0.2结果不是0.3而是0.30000000000000004，精度失去精度导致的，所以浮点数用toBeCloseTo进行匹配
  //expect(value).toBe(0.3);           这句会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3); // 这句可以运行
});
```
### 字符串匹配器
* toMatch() 可以用正则表达式来匹配字符串
```js
  expect('husky are you scared').toMatch(/scared$/)
```

### 数组和迭代的匹配器
* toContain() 是否在数组或者有迭代器的数据结构中
```js
let names = ['husky', 'are', 'you', 'scared']
test('the shopping list has beer on it', () => {
  expect(names).toContain('husky');
  expect(new Set(names)).toContain('husky');
});
```

### 例外
* `toThrow()` 匹配一些错误参数可以是：`正则、字符串、Error对象`

* [更加详细的匹配器](https://jestjs.io/docs/zh-Hans/expect)

### 自定义匹配器
* 通过expect.extend来实现
```js
expect.extend({
  IsHusky (received) {
    const pass = received === 'husky'
    if (pass) {
      return {
        message: () =>
          `expected ${received}, is husky`,
        pass: true
      }
    } else {
      return {
        message: () =>
          `expected ${received}, not is husky`,
        pass: false
      }
    }
  }
})
// 测试
test('is husky', () => {
  expect('husky').IsHusky()
})
```
### 断言 assertions()
* 表示如果没有执行assertions指定次数的expect(),就代表该条测试用例不通过
```js
test('is husky', () => {
  expect.assertions(1)
  return fetchDataPromise().catch((err) => {
    expect(err.toString()).toMatch('err')
  })
})
```

## 配置babel支持es6
* 下载`babel`核心包，语法转换包
```bash
  yarn add @babel/core @babel/preset-env -D
```
* 在项目根目录下配置`.babelrc` 也就可以使用`babel.config.js`的方式
```json
// .babelrc
{
  "presets": [
    [
      "@babel/preset-env", {
        'targets': {
          'esmodules': true
        }
      }
    ]
  ]
}
```
```js
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env',{xxxxxxxx配置xxxxxxxx}]
  ]
}
```
* 配置完就可以使用 `import` 的方式在测试文件引入其他包了

## 异步代码测试

### 回调函数式的异步方法
* 先定义一个异步请求方法
```js
import axios from 'axios'
// 这里调用一言的接口
export function fetchData (cb) {
  axios.get('https://v1.hitokoto.cn/').then(res => {
    cb(res.data)
  })
}
```
* done来配合异步函数测试
```js
import { fetchData } from './hello-jest'

test('fetchData cb', (done) => {
  fetchData((data) => {
    expect(data).not.toBeNull()
    done() // 为了确保异步测试成功测试，需要在异步回调中执行done回调
  })
})
```
### promise方式的异步方法
* 准备要测试的代码
```js
import axios from 'axios'

export function fetchDataPromise () {
  return axios.get('https://v1.hitokoto.cn/') // 直接返回promise
}
```
* 准备测试文件，如果要测试返回的是promise的异步，那么需要return 异步方法
```js
test('fetchData promise', () => {
  // 一定要加return
  return fetchDataPromise().then((res) => {
    expect(res.data).not.toBeNull()
  })
})
```

### async-await方式处理异步方法
 * 准备要测试的代码
```js
import axios from 'axios'

export function fetchDataPromise () {
  return axios.get('https://v1.hitokoto.cn/') // 直接返回promise
}
```
* 使用async和await来处理异步测试
```js
test('fetchData async', async () => {
  let response = await fetchDataPromise()
  expect(response.data).not.toBeNull()
})
```
