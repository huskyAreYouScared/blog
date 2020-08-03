# 字典

## 概念
* 以键值对形式存储的数据结构

## 实现
* 这里我们用Object来实现
### 基础属性、方法
```js
class Dictionary{
  constructor(){
    this.items = {}
  }
  set(key, value) // 向字典中添加新元素
  delete (key) // 通过使用键值从字典中移除键值对应的值
  has(key) // 如果某个键值存在于这个字典中，则返回 true，否则返回 false
  get(key) // 使用键值查找对应的值并返回
  clear() // 删除字典中的所有元素
  size() // 返回字典包含的元素数量
  keys() // 将字典的所有键名以数组的形式返回
  values() // 将字典包含的所有数值以数组形式返回
}
```

:::tip
  由于字典数据结构比较简单，这里我们不分部实现了
:::
```js
class Dictionary{
  constructor(){
    this.items = {}
  }

  // 向字典中添加新元素
  set(key, value) {
    if (!key) return new Error('键名不能为空')
    this.items[key] = value
  }

  // 如果某个键值存在于这个字典中，则返回 true，否则返回 false
  has(key) {
    return key in this.items
  }

  // 通过使用键值从字典中移除键值对应的值
  delete(key) {
    if(!key || !this.has(key)) return false
    delete this.items[key] 
    return true
  }

  // 使用键值查找对应的值并返回
  get(key) {
    return this.items[key]
  }

  // 删除字典中的所有元素
  clear() {
    this.items = {}
  }

  // 将字典的所有键名以数组的形式返回
  keys() {
    return Object.keys(this.items)
  }

  // 将字典包含的所有键值以数组形式返回
  values() {
    return Object.values(this.items)
  }

  // 返回字典包含的元素数量
  size() {
    return this.values.length
  }
}
```