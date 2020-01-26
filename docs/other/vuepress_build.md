### github pages+actions+vuepress

* 有一次看阮一峰老师的blog知道了actions[传送门](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
* 在使用github提供的actions之前，我一直用的是netlify，由于处于好奇，研究了一下github的actions
* 最开始我是按照阮老师的blog操作的，所以一些关于 workflow, job, step, action的知识大家可以去看阮老师的blog
* 接下来会将我遇到的一些问题、还有和阮老师的blog不一样的地方，在这篇文章进行记录

#### 首先是 GitHub 密钥配置的不同之处

* 我这里采用的是在本地生成公钥和私钥
```bash
  ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
```
* 在运行这条命令的路径下会生成俩个文件gh-pages,gh-pages.pub
<img :src="$withBase('/image/pub-private-key.png')" alt="dock">

* 然后将公钥配置到项目的Setting/Deplog keys如下图
<img :src="$withBase('/image/config-pubkey.png')" alt="dock">

* 然后将私钥配置到项目的Setting/Secrets如下图
<img :src="$withBase('/image/config-privatekey.png')" alt="dock">

* 到这里密钥配置完成

#### .github/workflows用的是其他的actions

* 在这里先说一下，我开始用的是阮老师blog里那个workflows配置，对发布路径和其他的一些密钥配置稍加改造，但是GitHub actions 运行成功之后，我去访问我的那个主页，发现是404
* 后来经过Google发现要加上[.nojekyll](https://github.community/t5/GitHub-Pages/GitHub-Pages-Builds-Fail/m-p/29184#M2000)的空文件即可,但是后续又出现了问题，我更新文章的时候，GitHub actions也运行成功了但是blog就是不更新
* 后来才换了这个workflows
```bash
  name: vuepress build
  on:
    push:
      branches:
      - master
  jobs:
    build-deploy:
      runs-on: ubuntu-18.04
      steps:
      - uses: actions/checkout@master
      - run: npm ci # 安装依赖

      - run: npm run build # vuepress打包命令 默认应该是（docs:build）

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v2.5.0
        env:
          ACTIONS_DEPLOY_KEY: ${{ secrets.ACCESS_TOKEN_PRIVATE }} # 前面配的密钥，密钥名别写错
          PUBLISH_BRANCH: gh-pages # github pages 的发布分支
          PUBLISH_DIR: dist # 打包的目录
```
* 到这里就成功了，其他一些关于详细的配置可以去[官方文档](https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)查看
