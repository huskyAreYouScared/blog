# 自动更新日志
* 需要插件conventional-changelog-cli + commitizen

## 第一步
```bash{1}
  npm install -g conventional-changelog-cli
```
* 安装成功之后需要如果在命令行 找不到conventional-changelog这个命令需要去配置[环境变量](https://www.baidu.com/s?wd=%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)

## 第二步
* 进入到要生成日志的项目中
```bash{1}
  conventional-changelog -p angular -i CHANGELOG.md -s
```

* 此时根目录下就会生成 CHANGELOG.md文件
## 第三步
* 安装git commit 规范提交的插件,这里我用了[commitizen](https://www.npmjs.com/package/commitizen)
```bash{1}
  npm install -g commitizen
```
* 然后初始化您的项目以使用cz-conventional-changelog适配器
```bash{1}
  commitizen init cz-conventional-changelog --save-dev --save-exact
```

## 第四步
* 之前是使用git commit来提交，现在可以使用 git cz来提交，然后就按照命令行的提示一步一步填写即可
```bash
  ? Select the type of change that you're committing: perf:     A code change that improves performance
  ? What is the scope of this change (e.g. component or file name): (press enter to skip) 
  ? Write a short, imperative tense description of the change (max 94 chars):
  (11) add conventional-changelog
  ? Provide a longer description of the change: (press enter to skip)
  
  ? Are there any breaking changes? No
  ? Does this change affect any open issues? No
```

## 第五步
* 改变CHANGELOG文件和package的版本号，在package文件中新增加命令version
```
  // package.json
  "scripts":{
    ···
    "version": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md"
    ···
  }
```

* 添加好之后执行命令
* version 后面可以写major/minor/patch，分别对应主要版本、次要版本、补丁 （v0.0.1）
```bash{1}
  npm version minor -m 'description'
```
* 此时就将git 提交的信息写入CHANGELOG了，package.json中的version（major/minor/patch）也会更新

## 别忘了提交

