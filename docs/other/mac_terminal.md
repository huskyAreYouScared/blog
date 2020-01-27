## mac隐藏终端用户名

* 首先打开终端，然后打开/etc/bashrc
```sh{1}
  sudo vim /etc/bashrc
```
* 打开后应该看到的文件是这个样子
```sh{6}
# System-wide .bashrc file for interactive bash(1) shells.
if [ -z "$PS1" ]; then
   return
fi

PS1='\h:\W \u\$ '
# Make bash check its window size after a process completes
shopt -s checkwinsize

[ -r "/etc/bashrc_$TERM_PROGRAM" ] && . "/etc/bashrc_$TERM_PROGRAM"
```
* 重点看PS1这一行,将它改为
```sh
# PS1='\h:\W \u\$ '
PS1='\h:\W \$ '
```

* 然后强制退出保存wq!
* 重新打开终端用户名就隐藏了