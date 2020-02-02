### 解决mac权限问题报错

* 举例，我在项目中要用到sass，但是要安装node-sass
* 安装之后告诉我需要npm rebuild node-sass
* 但是在命令行执行报错Error: EACCES: permission denied,···
* 我加上sudo命令依旧报错
* 最后加上了--unsafe-perm=true --allow-root 就好使了
* 完整的命令
```bash{1}
  sudo npm rebuild node-sass --unsafe-perm=true --allow-root
```