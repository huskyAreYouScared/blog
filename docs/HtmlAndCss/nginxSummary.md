# nginx小记

* 本次学习nginx使用的是Ubuntu系统

## install nginx

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