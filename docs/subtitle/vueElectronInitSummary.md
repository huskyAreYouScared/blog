# 直接使用vue-electron，不升级依赖
* 这里将不升级依赖所遇到的问题进行记录,因为我开发的第一个应用的时候就是初始化之后什么都没升级
## electron-builder打包遇到报错
### Fatal error：Unable to commit changes
* 这个报错是模板初始化的时候选择了electron-builder的情况
![electron-builder打包报错](https://imgkr.cn-bj.ufileos.com/5a36cd50-ab99-4adc-9f28-b0bf57ad9c6b.png)
* 解决办法，electron-builder github issue中已经有开发者回答了[传送门](https://github.com/electron-userland/electron-builder/issues/3122#issuecomment-509110200)
* 也就是说需要更新electron-builder的版本，这个时候只需要下载最新版本即可
```bash
yarn add electron-builder@latest -D
```