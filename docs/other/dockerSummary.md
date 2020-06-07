# docker小记

## 工具准备
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
* `-p`指定端口映射
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

### rm 删除镜像
* `-f` 强制删除
* `docker rm -f` + 容器ID
```bash
docker rm -f d97bf784fa0d
```