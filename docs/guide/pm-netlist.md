---
title: Netlist
createTime: 2025/01/08 20:58:14
permalink: /article/ob4dnut5/
---

## Netlist 预览

我们在插件后端集成了yosys可执行文件（直接编译后的），这使得可以在不安装以及配置任何软件之下完成工程代码（仅限verilog和部分sv，具体支持见yosys官网）的综合，并能够展示出综合之后的网表图。使用方式非常简单，只需要在功能入口处点击，就能渲染出以当前模块为顶层的网表图，能帮助用户快速审查自己的代码设计。

`功能入口1：`

如下图所示的，悬浮在模块命名上的`Netlist`按键功能入口

<!-- TODO: netlist-incode -->
![行间功能入口]()

`功能入口2：`

如下图所示的依赖结构中的功能入口

<!-- TODO: netlist-arch -->
![依赖结构中的功能入口]()

<!-- TODO: netlist (netlist具体使用教程视频) -->
<center>
<video width="90%" controls>  
  <source src="/videos/netlist.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

