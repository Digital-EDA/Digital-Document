---
title: 悬停提示
---

## 悬停提示

将鼠标移动到需要查看的变量、宏、例化模块等上时，会显示当前变量的申明定义。

> 如果是模块，还会显示该模块的各种类型的端口数量等信息

<br>
<div align=center>
<img src="https://pic1.zhimg.com/80/v2-3548c2344be35b502ec46d8a6c0a6165_1440w.png" style="width: 90%;"/>
</div>
<br>

主要提示的内容为当前文件内定义的数据类型以及例化模块的相关信息。
提示内容如下：
1. `标识对应的注释` + `标识对应的内容`
2. 二进制、十六进制 -> 十进制

其中标识对应的注释的内容为
1. 标识被定义的所在行后的行注释
2. 标识被定义之前的行注释以及块注释(遇到非注释部分即停止)

> 悬停提示使用的是内置的vlog和vhdl解析器，目前暂时只支持简单的悬停提示