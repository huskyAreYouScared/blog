# nginx小记

* 本次学习nginx使用的是Ubuntu系统

## install nginx
* nginx下载地址[传送门](http://nginx.org/en/download.html)
```bash
sudo apt-get install nginx
```
## nginx的常用命令

### 启动命令
- 直接输入nginx
```bash
  nginx
```
- 还可以通过systemctl来开启
```bash
systemctl start nginx.service
```

### 停止nginx
#### 立即停止
```bash
nginx -s stop
```

#### 优雅的停止
```bash
nginx -s quit
```
#### kill 结束nginx进程
* 先查看nginx占用的PID
```bash
  lsof -i:80
```
* 输出如下内容，找到nginx进程的PID
```bash
COMMAND     PID     USER   FD   TYPE    DEVICE SIZE/OFF NODE NAME
nginx     16903     root    6u  IPv4 645602965      0t0  TCP *:http (LISTEN)
nginx     16903     root    7u  IPv6 645602966      0t0  TCP *:http (LISTEN)
nginx     16904 www-data    6u  IPv4 645602965      0t0  TCP *:http (LISTEN)
nginx     16904 www-data    7u  IPv6 645602966      0t0  TCP *:http (LISTEN)
```
* 使用kill命令结束进程
```bash
kill -9 16903 && kill -9 16904
```
* 也可以使用 killall 命令结束nginx进程
```bash
killall nginx
```

## 运行第一个静态网站

### 配置文件介绍
* 主配置文件
```bash
/etc/nginx/nginx.conf
```
* 子配置项，一般我们没有做任何的定制，子配置项会在
```bash
/etc/nginx/conf.d/default/*.conf
```

### 配置编写
* 首先准备好静态页面，这里我用的是我自己开发的[粒子动画展示网站-cfazy-future](https://github.com/huskyAreYouScared/crazy-future)
* 将打包好的文件发送到服务器的 `/data/blog/dist`目录下
* 修改`nginx`的配置，在`/etc/nginx/conf.d/default.conf`中写入一下配置
```bash
server {
      listen 80;
      server_name www.woniuwnwn.top;
      location / {
              root /data/blog/dist;
              index index.html index.htm;
      }
}

```
* 退出保存重启`nginx -s reload`，如果之前没有启动，直接`nginx`启动即可
* 点击图片预览
[![预览](https://imgkr.cn-bj.ufileos.com/5ca4f1d8-bf37-47fa-bcb6-44565a9cdaf9.png)](http://www.woniuwnwn.top/)
:::tip
- 需要注意的是 server_name 要写对域名，否则直接输入域名访问不了，还需要再域名后面配上 /index.html
- eg: http://www.woniuwnwn.top/index.html
- version : nginx version: nginx/1.14.0 (Ubuntu)
:::
### 指定错误页面
* 通过`error_page`来指定
```bash
server {
      listen 80;
      server_name www.woniuwnwn.top;
      error_page /xx/xx/404.html
      location / {
              root /data/blog/dist;
              index index.html index.htm;
      }
}
```
* error_page后面也可以指定网址，如果资源未找到，直接跳转网址
```bash
server {
      listen 80;
      server_name www.woniuwnwn.top;
      error_page www.woniuwnwn.top/error;
      location / {
              root /data/blog/dist;
              index index.html index.htm;
      }
}
```
## gzip压缩开启
* 首先进入nginx的主配置文件
```bash
cd /etc/nginx && vim nginx.conf
```
* 在http配置中增加gzip的属性并开启
```bash
http{
  gzip on;

  # other config
}
```
* gzip有很多配置参数[官网传送门](http://nginx.org/en/docs/http/ngx_http_gzip_module.html)

## 权限

### deny和allow
* 通过deny和allow配置拒绝和可访问的ip
```bash
server {
      listen 80;
      server_name www.woniuwnwn.top;
      location / {
              root /data/blog/dist;
              index index.html index.htm;
              deny xx.xx.xx.xx/xx;
              allow xx.xx.xx.xx/xx;
      }
}
```
* denu 和 allow 后面的 xx/xx代表一段连续的ip拒绝和允许访问
```
location / {
        root /data/blog/dist;
        index index.html index.htm;
        deny 192.168.1.5/100; # 表示拒绝从5~100的IP访问
}
```
### deny和allow的优先级
* 写在上面的优先级要高，所以说下面这个例子是，允许192.168.1.5/100这些ip访问的，deny无效
```
location / {
        root /data/blog/dist;
        index index.html index.htm;
        allow 192.168.1.5/100; # 表示允许从5~100的IP访问
        deny 192.168.1.5/100; # 表示拒绝从5~100的IP访问
}
```

## location匹配
### 精确匹配 “=”
* `=` 匹配的优先级最高
* 不允许用户访问后台管理
```bash
location =/back-stage {
        root /data/blog/dist;
        index index.html index.htm;
}
```
### 精确匹配 “^~”
* `^~` 匹配的优先级次于`=`
```bash
location ^~/back-stage {
        root /data/blog/dist;
        index index.html index.htm;
}
```
### 正则匹配 “~”
* `~` 匹配的优先级次于`^~`
```bash
location ~\.mov$ {
        root /data/blog/dist;
        index index.html index.htm;
}
```
### 匹配任何查询
* 优先级最低
```bash
location / {
        root /data/blog/dist;
        index index.html index.htm;
        allow all;
}
```

## 设置虚拟主机

### 通过域名设置虚拟主机
* 需要在准备一个域名，我们可以在解析一个子域名 我这里新解析了一个`test.woniuwnwn.top`域名
* 在准备一个静态页面
```
cd /data/test && mkdir index.html
```
```
echo '<h1>test</h1>' >> index.html
```
* 在上面的例子中已经在`conf.d`目录下有一个`default.conf`子配置项，这里我们要新建一个
```bash
cd /etc/nginx/conf.d && vim test.conf
```
* 新建好文件之后在里面在配一套`server`
```bash
server {
      listen 80;
      server_name test.woniuwnwn.top;
      location / {
              root /data/test;
              index index.html index.htm;
      }
}
```

* 此时在重启nginx就可以通过test.woniuwnwn.top访问我们配置的虚拟主机的项目了
```bash
nginx -s reload
```
## 反向代理
* 正向代理是给客户端做代理
* 反向代理是给服务器做代理
### proxy_pass 反向代理
```bash
server {
    listen 80;
    server_name test.woniuwnwn.top;
    location / {
            proxy_pass xx.xx.xx.xx:xxxx;
    }
}
```
* 反向代理还有很多配置可以看nginx的官网[传送门](http://nginx.org/en/docs/http/ngx_http_proxy_module.html)
### 将/test匹配代理到目标域名的/配置技巧
```bash
server {
    listen 80;
    server_name test.woniuwnwn.top;
    location /test/ {
            proxy_pass xx.xx.xx.xx:xxxx/;
    }
}
```
* 由上面这个例子可以看出，技巧就是将`/test`后面加上`/`，在`proxy_pass`的代理域名后面也加一个`/`
## 适配PC或mobile设备，来跳转不同域名
### 通过$http_user_agent来做判断
```
server {
    listen 80;
    server_name www.woniuwnwn.top;
    location / {
            root /data/pc;
            if ($http_user_agent ~* (mobile|nokia|iphone|ipad|android|samsung|htc|blackberry)) {
              root /data/mobile;
            }
            index index.html index.htm;
    }
}
```
:::tip
- 这个自适应是nginx帮我们进行不同平台进行不同页面的加载
- 和前端的的自适应不是一回事，通过nginx可以帮助前端来做适配，就不用把适配的代码都写到一个工程里面了，相当于减小包体积，增加加载速度，减小白屏时间
:::
## 负载均衡
### upstream
* 简单配置一个负载均衡的小案例
```bash
upstream group1{
        server xx.xx.xx.xx.端口1;
        server xx.xx.xx.xx.端口2;
}
server {
    listen 80;
    server_name www.woniuwnwn.top;
    location / {
            proxy_pass http://group1
    }
}
```
### weight 负载均衡加权
# 服务器性能好设置权重大一些，利于资源分配合理化
```bash
upstream group1{
        server xx.xx.xx.xx.端口1 weight = 1;
        server xx.xx.xx.xx.端口2 weight = 1;
}
```

## 相关
* [OpenResty](http://openresty.org/cn/) 基于 NGINX 和 LuaJIT 的 Web 平台。
<Utterances :id="3"/>