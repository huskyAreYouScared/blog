# docker小记

## 工具准备
* docker Hub官网[传送门](https://hub.docker.com/)
* 在线的版[Docker-Playground传送门](https://labs.play-with-docker.com/)每次申请使用免费4小时，下次用在进行申请
![Docker-Playground](https://imgkr.cn-bj.ufileos.com/25cbd8c4-b3fd-43e7-a256-4aacec479174.png)
## 开始使用Docker-Playground
* 点击 ADD NEW INSTANCE
## 常用命令
### pull 拉取镜像
* 拉去镜像
```bash
docker pull nginx
```
* 也可指定版本,如果不指定版本，默认pull最新版
```bash
docker pull nginx:latest
```
### images 查看镜像
* 查看镜像
```bash
docker images
```

### run 运行镜像
* `-d`指定docker镜像后台运行
* `-p`指定端口映射 -p 80:80
* `--name`指定运行后的容器的名字
* `-v` 指定外部和容器内部的文件映射  `pwd`:/xx/xxx
* `--link` 将一个容器的地址写入另一个容器的`hosts`文件中，就可以通过名称访问了,使用方式 --link 其他容器的名字名:本容器写入hosts文件和ip对应的名字 ，`eg: --link nginx1:nginx1`
* `docker run` + `一些列参数` + `需要运行的镜像名`
```bash
docker run -d -p 80：80 nginx
```
* 同一个镜像可以启动很多个，本地映射端口不重复即可
### ps 查看正在运行的容器
```bash
docker ps
```
* 输出如下
```bash
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                NAMES
d97bf784fa0d        nginx               "/docker-entrypoint.…"   57 seconds ago      Up 56 seconds       0.0.0.0:80->80/tcp   beautiful_proskuriakova
```
### exec 修改容器内容
* `docker exec` + 参数 + 通过ps查看的容器ID
```bash
docker exec -it d97bf784fa0d bash
```


### commit 创建新容器
* `docker commit <已存在容器的containerID> <镜像名>`
```bash
docker commit d9 test
```
* 此时我们在执行 `docker images` 就会发现有两个容器一个是之前的 `nginx` 还有一个我们本地提交的 `test`

### rm 删除镜像
* `-f` 强制删除
* `docker rm -f` + 容器ID
```bash
docker rm -f d97bf784fa0d
```
### build 生成容器
* 首先要新建一个`Dockerfile`文件
```bash
vim Dockerfile
```
* 在里面写入
```bash
FROM nginx
ADD ./ /usr/share/nginx/html
```
* 退出并保存
* 在本地新建一个`index.html`
```bash
vim index.html
```
* 随便写入些内容
* 此时我们就可以使用 `docker build `命令来生成容器
* `docker build -t <指定容器名> <指定要执行那个目录下的Dockerfile文件>`
```bash
docker build -t test2 .
```

### tar 归档docker容器
* `docker save <已有的容器镜像名> > <指定文件名>`
```bash
docker save nginx > nginx.tar
```

### load 启用已经归档的容器镜像
* `docker load < <被归档的容器镜像>`
```bash
docker load < nginx.tar
```
## docker-compose
* 后面补充