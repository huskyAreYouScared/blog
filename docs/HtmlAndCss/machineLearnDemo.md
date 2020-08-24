# 机器学习入门demo

:::tip
  本文记录一下机器学习最基本的理论实战，入门级别难度。主要用来记录一下思想
:::

## &&运算，机器学习

###　数据准备
```js
const datas = [
  [[0, 0], 0],
  [[0, 1], 0],
  [[1, 0], 0],
  [[1, 1], 1]
];
```
### 实现过程

```js
// 声明权重
const weights = [];
for (let i = 0; i < 3; i++) {
  weights[i] = Math.random() - 0.5;
}

// 激活函数
function activite(inputs){
  return sigmoid(
    inputs[0] * weights[0] + inputs[1] * weights[1] + 1 * weights[2]
  );
}

// 将变量映射到0,1之间
function sigmoid(x){
  return 1/(1+Math.pow(Math.E,-x))
}

function errRate(output,expected){
  return Math.abs(output - expected);
}

let errors = [];
let maxError = 20

function calcErrorSvg(err) {
  errors.push(err)
  if(errors.length>maxError){
    errors.shift()
  }

  return errors.reduce((basic,item)=> basic + item) / errors.length
}

let d=0.0000001 // Δd 每次权重改变的变量
let trainRate = 0.1 // 训练率
let times = 0 // 训练次数
let threshold = 0.0001; // 阈值

// 开始训练
function train(inputs,expected){
  let err = errRate(activite(inputs), expected);

  const dw = [];
  weights.forEach((w,i)=>{
    weights[i] +=d
    let err2 = errRate(activite(inputs), expected);

    dw[i] = (err2 - err)/d 
    weights[i] = w
  })

  weights.forEach((w, i) => {
    weights[i] -= dw[i] * trainRate;
  });
  
  times++
  let errorRate = calcErrorSvg(err)
  if(times % 5000 === 0) {
    console.log(`${times}--rate${errorRate}`);
  }
  return errorRate <= threshold;
}

for (let i = 0; ; i++) {
  let data = datas[i%datas.length]
  // console.log(weights);
  if(train(data[0], data[1])){
    break
  }
}
// 训练完成输出权重
console.log(weights);
```

### 参考资料
* blue老师的入门课程(b站传送们)[https://www.bilibili.com/video/BV16Z4y1M7gH]
* (Sigmoid函数)[https://baike.baidu.com/item/Sigmoid%E5%87%BD%E6%95%B0/7981407?fr=aladdin]