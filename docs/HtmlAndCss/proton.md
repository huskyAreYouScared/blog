# proton-engine粒子引擎
* [官网文档](https://projects.jpeer.at/proton/index.html)
## API名词分析
* Attraction 吸引
* Velocity 粒子速度
* Collision 粒子碰撞
* CrossZone 跨区
* Force 力
* Gravity 重力
* GravityWell 重力井
* Repulsion 排斥

## Attraction
* API
```js
  new .Attraction(targetPosition, forceopt, radiusopt, lifeopt, easingopt)
```
* 在屏幕中生成引力厂
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
* 用法
```js
// eg:
 emitter.addBehaviour(new Proton.Collision(emitter));
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
