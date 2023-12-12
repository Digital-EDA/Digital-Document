---
title: 设计辅助
---

## Tree View

<center>
<video width="90%" controls>  
  <source src="/videos/treeview.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

以模块为单位，展示当前工作区的工程结构，以层级关系显示出HDL文件之间包含与被包含关系，单击后可打开对应的文件。

> 注意：treeView只展示property.json中用户指定或者默认的工作区文件夹的HDL文件，其他文件中的模块不会显示在treeView中

---

## Netlist 预览

<center>
<video width="90%" controls>  
  <source src="/videos/netlist.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

The plugin uses `yosys 0.21` kernel (open source yosysjs 0.5 version) to synthesize the specified project (can run on all platforms), display the synthesized network diagram and support `include` and multi-file projects.

插件使用了`yosys 0.21`版本的内核(开源的yosysjs为0.5版本)进行指定工程的综合(可全平台运行)，并展示综合后的网络图，支持 `include` 以及多文件工程。

使用方式
1. 点击右上角的图标进行面板的创建
2. 或者在project structure中选择需要显示的模块，或者在文件中右击选择 `show netlist`

> 目前版本的netlist前端还不完善，未来的版本将会对前端UI进行优化

---

## 代码文档化

<center>
<video width="90%" controls>  
  <source src="/videos/code2doc.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

自动文档化目前只支持verilog，并且支持wavedrom可视化，还支持如下三种导出格式：

- markdown
- html
- pdf

如果需要导出pdf，请将你本机的Google Chrome或者Edge浏览器的启动路径填入参数**markdown-pdf executable path**中。由于大部分pdf阅读器都不支持变色背景，请在浅色主题下导出你的pdf：

> windows 11 中，Edge的默认启动路径为 `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`

<center>
<video width="90%" controls>  
  <source src="/videos/exportpdf.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

---

## FSM 预览

<center>
<video width="90%" controls>  
  <source src="/videos/fsm.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

该功能可以可视化出项目中的有限状态机，并可以点击图中的形状进行跳转。

> 目前前端还比较简陋，未来会对FSM功能的前端UI进行优化。