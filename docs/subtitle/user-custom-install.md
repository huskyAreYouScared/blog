# 用户自定义安装

## electron-builder相关配置
* [electron-builder github](https://github.com/electron-userland/electron-builder)

* 在package.json中进行配置
```json
  // ...
  "build": {
    "nsis": {
      "oneClick": false, // 这里一定要设置false ,如果是true则是一键安装，windows下会安装到系统盘C
      "allowToChangeInstallationDirectory": true, // 允许自定义安装目录
      "createDesktopShortcut": true, // 快截图标
      "runAfterFinish": true, // 安装完后运行自动勾选
      "createStartMenuShortcut": true // 在菜单中生成快截导航
      // ...还有很多详见官网
    },
    // ...
  }
  // ...
```