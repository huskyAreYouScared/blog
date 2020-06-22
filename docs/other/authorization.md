# node JWT鉴权小记

* jsonwebtoken Github地址[node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
* jwt.io官网 [传送门](https://jwt.io/)支持很多语言的工具包，也有关于JWT token的生成方式的demo便于理解
:::tip
本文小案例使用express框架进行编写
:::
* 我们首先要下载一些包
```bash
npm init -y && npm i jsonwebtoken express -S
```
* 下载好工具包我们开始写一个登录服务，本文就不调用数据库了，直接将密码和用户名写在代码里
```js
// index.js
const express = require('express')
var jwt = require('jsonwebtoken');
let app = express()

app.get('/login',(req,res)=>{
  if (req.query.name === 'husky' && req.query.pwd === 'husky' ){
    var token = jwt.sign({ foo: 'bar' }, secret);
    res.json({
      token: token,
      date:new Date()
    })
  }else{
    res.send(401)
  }
})

app.listen(8000)
```
* 通过调用登录接口，我们可以拿到`token`
* 这里我们先执行一下看看可以，是否可以获取`JWT token`
```bash
node index.js
```
* 我们使用postman来调试
![postman调试截图](https://imgkr.cn-bj.ufileos.com/9416e803-a406-42b1-b817-348ea1667a74.png)

* 我们获取`token`成功，接下来我们来验证这个`token`是否有效
* 这里我们来写一个接口判断一下，如果在真实项目中，还会有其他逻辑的，这里暂且不考虑
* 这里我们采用的是`bearer`的方式在`header`中添加的`token`，因为这个`token`是放在请求头里面的，所以我们要在请求头里面获取
```js
// index.js

app.get('/verify',(req,res)=>{
  try {
    let token = req.headers.authorization.split(' ')[1]
    var decoded = jwt.verify(token, secret);
    res.json(decoded)
    
  } catch (error) {
    res.send(401)
  }
})

```

* 这里我们重启一下
```bash
node index.js
```
* 由于在上一步中我们获取到了`token`，在这步将会用到，我们`postman`切换`tab`,来到`Authorization`，`type`我们使用`Bearer Token`的方式，然后将`token`粘贴在右侧`token`的输入框中，点击发送，`body`就会将上一步的用户信息返给我们
![postman调试截图](https://imgkr.cn-bj.ufileos.com/de246234-ccea-4d69-bd8a-a7cd602bfe56.png)

* 到这里我们就完成了`JWT`的验证了