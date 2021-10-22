# CSGO

## 录像

### 关闭ui 
```
cl_draw_only_deathnotices 1
```

### 开启视频进度面板
```
demoui 0
demoui 1
```
快捷键 shift F2

### 其他指令
```
mirv_deathmsg debug 1 //显示击杀信息
cl_draw_only_deathnotices 1 //隐藏所有UI
sv_cheats 1 //开发者模式
mirv_deathmsg filter add attackerMatch=!<玩家数字id> block=1 //屏蔽除<id>玩家以外所有玩家的击杀信息
mirv_deathmsg filter clear//清楚所有屏蔽规则
mirv_deathmsg lifetime <数字>//数字越大 击杀时间显示越长
mirv_deathmsg lifetime default //还原击杀信息显示时间
mirv_deathmsg localplayer <玩家id> //高亮玩家击杀信息
mirv_deathmsg localplayer default//不高亮任何人的击杀信息
mp_display_kill_assists 0 //屏蔽所有助攻
mirv_campath add //添加一个摄像机机位
bind tab mirv_campath add //绑定指令到tab 相当于按下tab就相当于输入绑定的指令
mirv_campath enable 1 //激活所有摄像机机位
mirv_campath clear //清楚所有已放置的摄像机机位
```
