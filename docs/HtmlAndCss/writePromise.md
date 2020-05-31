# A+ Promise

## 基础代码
```js
class CPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(executor) {
    this.status = CPromise.PENDING
    this.value = null
    executor(this.resolve.bind(this), this.reject.bind(this))
  }
  resolve(value){
    this.status = CPromise.FULFILLED
    this.value = value
  }
  reject(reason){
    this.status = CPromise.REJECTED
    this.value = reason
  }
}
```