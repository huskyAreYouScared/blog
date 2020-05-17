# proton-engine粒子引擎
* [官网文档](https://projects.jpeer.at/proton/index.html)
## API名词分析
* Alpha 透明度
* Attraction 吸引
* Velocity 速度
* Collision 碰撞
* Color 颜色
* CrossZone 跨区
* Force 力
* Gravity 重力
* GravityWell 重力井
* Pool 池
* RandomDrift 随机漂移
* Repulsion 排斥
* Rate 比率
* Scale 缩放

## Alpha
* API
```js
  new .Alpha(a, b, lifeopt, easingopt)
```
* 设置粒子的透明度
```js
  emitter.addBehaviour(new Proton.Alpha(1,0,Infinity,  Proton.easeOutQuart))
```
## Attraction
* API
```js
  new .Attraction(targetPosition, forceopt, radiusopt, lifeopt, easingopt)
```
* 生成引力厂
```js
  emitter.addBehaviour(
    new Proton.Attraction(
      new Proton.Vector2D(window.innerWidth / 2, window.innerHeight / 2),
      1000, 
      10000, 
      Infinity,
      Proton.easeLinear
    )
  )
```

## Collision
* API
```js
  new .Collision(emitteropt, massopt, callbackopt, lifeopt, easingopt)
```
* 用法
```js
// eg:
 emitter.addBehaviour(new Proton.Collision(emitter));
```
## Color
* API
```js
  new .Color(color1, color2, lifeopt, easingopt)
```
* 设置粒子颜色
```js
   emitter.addBehaviour(new Proton.Color(
      'random', // 随机颜色
      '#cccccc55', // rgb颜色值
      Infinity,
      Proton.easeOutQuart
    )
  )
```

## CrossZone
* API
```js
  new .CrossZone(zone, crossTypeopt, lifeopt, easingopt)
```
* 用法
```js
  emitter.addBehaviour(new Proton.CrossZone(
      //  定义区域形状 
      new Proton.RectZone(0,0,window.innerWidth,window.innerHeight),
      'bound', // strings: dead | bound | cross
      Infinity,
      Proton.easeLinear
    )
  )
```

## Force
* API
```js
  new .Force(fx, fy, lifeopt, easingopt)
```
* 给X，Y轴增加力，粒子就会沿着力的方向进行运动
```js
  //  eg：给一个X轴正方向和Y轴父方向的力，粒子就会向右上角运动  
  emitter.addBehaviour(new Proton.Force(10,-10,Infinity,Proton.easeOutQuart))
```

## Gravity
* API
```js
  new .Gravity(g, lifeopt, easingopt)
```
* 用法
```js
  // 第一个参数g,填写正数：向下， 负数：向上，0:保持原粒子状态
  emitter.addBehaviour(new Proton.Gravity(0,Infinity,Proton.easeLinear))
```

## GravityWell
* API
```js
  new .GravityWell(centerPointopt, forceopt, lifeopt, easingopt)
```
* 可以用来模拟黑洞
```js
  emitter.addBehaviour(new Proton.GravityWell(
      new Proton.Vector2D(window.innerWidth/2,window.innerHeight/2),
      1000, // 引力大小
      Infinity, // 生命周期
      Proton.easeLinear
    )
  )
```
## Pool
* 用法，这个API目前还没有完全理解，但是可以这样试一下，缓存已经发射的粒子
```js
let pool = new Proton.Pool(context)
    pool.cache.once = emitter.particles
    console.log(pool)
    // {
    //   cache:{
    //     xxx:{xxxx}
    //   },
    //   total:xxx
    // }
```
## RandomDrift
* API
```js
  new .RandomDrift(driftX, driftY, delay, lifeopt, easingopt)
```
* 在粒子移动中随机给粒子施加x轴或者y轴的力
```js
  emitter.addBehaviour(new Proton.RandomDrift(
        30, // 在x轴施加力
        10, // 在y轴施加力
        0.05, // 漂移延迟时间
        2,
        Proton.easeOutQuart
      )
    )
```
## Rate
* API
```js
  new .Rate(numpan, timepan)
```
* 粒子的发射比率
```js
  emitter.rate = new Proton.Rate(
    Proton.getSpan(1, 90), // 每次发射1～90个之间的粒子数
    Proton.getSpan(1, 10) // 每隔1～10秒发射一次粒子
  )
```

## Repulsion
* API
```
  new .Repulsion(targetPosition, forceopt, radiusopt, lifeopt, easingopt)
```
* 不同于GravityWell的引力，这个是排斥力,粒子会被排斥走
```js
  emitter.addBehaviour(new Proton.Repulsion(
      new Proton.Vector2D(window.innerWidth/2,window.innerHeight/2),
      100, // 排斥里
      100, // 排斥半径
      Infinity,
      Proton.easeLinear
    )
  )
```
## Scale
* API
```js
 new .Scale(a, b, lifeopt, easingopt)
```
* 设置粒子的缩放
```js
// 粒子开始渲染时候是五倍的大小，随着生命周期而变小，变为原大小
emitter.addBehaviour(new Proton.Scale(5,0,Infinity,  Proton.easeOutQuart))
```