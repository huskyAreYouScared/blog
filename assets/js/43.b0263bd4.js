(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{253:function(a,s,e){"use strict";e.r(s);var r=e(2),t=Object(r.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"docker小记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker小记"}},[a._v("#")]),a._v(" docker小记")]),a._v(" "),e("h2",{attrs:{id:"工具准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工具准备"}},[a._v("#")]),a._v(" 工具准备")]),a._v(" "),e("ul",[e("li",[a._v("docker Hub官网"),e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("传送门"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("在线的版"),e("a",{attrs:{href:"https://labs.play-with-docker.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker-Playground传送门"),e("OutboundLink")],1),a._v("每次申请使用免费4小时，下次用在进行申请\n"),e("img",{attrs:{src:"https://imgkr.cn-bj.ufileos.com/25cbd8c4-b3fd-43e7-a256-4aacec479174.png",alt:"Docker-Playground"}})])]),a._v(" "),e("h2",{attrs:{id:"开始使用docker-playground"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始使用docker-playground"}},[a._v("#")]),a._v(" 开始使用Docker-Playground")]),a._v(" "),e("ul",[e("li",[a._v("点击 ADD NEW INSTANCE")])]),a._v(" "),e("h2",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),e("h3",{attrs:{id:"pull-拉取镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pull-拉取镜像"}},[a._v("#")]),a._v(" pull 拉取镜像")]),a._v(" "),e("ul",[e("li",[a._v("拉去镜像")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker pull nginx\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("也可指定版本,如果不指定版本，默认pull最新版")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker pull nginx:latest\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"images-查看镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#images-查看镜像"}},[a._v("#")]),a._v(" images 查看镜像")]),a._v(" "),e("ul",[e("li",[a._v("查看镜像")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker images\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"run-运行镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-运行镜像"}},[a._v("#")]),a._v(" run 运行镜像")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("-d")]),a._v("指定docker镜像后台运行")]),a._v(" "),e("li",[e("code",[a._v("-p")]),a._v("指定端口映射 -p 80:80")]),a._v(" "),e("li",[e("code",[a._v("--name")]),a._v("指定运行后的容器的名字")]),a._v(" "),e("li",[e("code",[a._v("-v")]),a._v(" 指定外部和容器内部的文件映射  "),e("code",[a._v("pwd")]),a._v(":/xx/xxx")]),a._v(" "),e("li",[e("code",[a._v("docker run")]),a._v(" + "),e("code",[a._v("一些列参数")]),a._v(" + "),e("code",[a._v("需要运行的镜像名")])])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("：80 nginx\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("同一个镜像可以启动很多个，本地映射端口不重复即可")])]),a._v(" "),e("h3",{attrs:{id:"ps-查看正在运行的容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ps-查看正在运行的容器"}},[a._v("#")]),a._v(" ps 查看正在运行的容器")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("输出如下")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                NAMES\nd97bf784fa0d        nginx               "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/docker-entrypoint.…"')]),a._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("57")]),a._v(" seconds ago      Up "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("56")]),a._v(" seconds       "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:80-"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("/tcp   beautiful_proskuriakova\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"exec-修改容器内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exec-修改容器内容"}},[a._v("#")]),a._v(" exec 修改容器内容")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("docker exec")]),a._v(" + 参数 + 通过ps查看的容器ID")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it d97bf784fa0d "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"commit-创建新容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit-创建新容器"}},[a._v("#")]),a._v(" commit 创建新容器")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("docker commit <已存在容器的containerID> <镜像名>")])])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker commit d9 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("此时我们在执行 "),e("code",[a._v("docker images")]),a._v(" 就会发现有两个容器一个是之前的 "),e("code",[a._v("nginx")]),a._v(" 还有一个我们本地提交的 "),e("code",[a._v("test")])])]),a._v(" "),e("h3",{attrs:{id:"rm-删除镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rm-删除镜像"}},[a._v("#")]),a._v(" rm 删除镜像")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("-f")]),a._v(" 强制删除")]),a._v(" "),e("li",[e("code",[a._v("docker rm -f")]),a._v(" + 容器ID")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -f d97bf784fa0d\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"build-生成容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-生成容器"}},[a._v("#")]),a._v(" build 生成容器")]),a._v(" "),e("ul",[e("li",[a._v("首先要新建一个"),e("code",[a._v("Dockerfile")]),a._v("文件")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" Dockerfile\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("在里面写入")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("FROM nginx\nADD ./ /usr/share/nginx/html\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("ul",[e("li",[a._v("退出并保存")]),a._v(" "),e("li",[a._v("在本地新建一个"),e("code",[a._v("index.html")])])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" index.html\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("随便写入些内容")]),a._v(" "),e("li",[a._v("此时我们就可以使用 "),e("code",[a._v("docker build")]),a._v("命令来生成容器")]),a._v(" "),e("li",[e("code",[a._v("docker build -t <指定容器名> <指定要执行那个目录下的Dockerfile文件>")])])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker build -t test2 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"tar-归档docker容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tar-归档docker容器"}},[a._v("#")]),a._v(" tar 归档docker容器")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("docker save <已有的容器镜像名> > <指定文件名>")])])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker save nginx "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" nginx.tar\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"load-启用已经归档的容器镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load-启用已经归档的容器镜像"}},[a._v("#")]),a._v(" load 启用已经归档的容器镜像")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("docker load < <被归档的容器镜像>")])])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker load "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" nginx.tar\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);