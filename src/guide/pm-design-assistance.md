---
title: Design Assistance
---

## Tree View

<center>
<video width="90%" controls>  
  <source src="/videos/treeview.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

Display the project structure of the current workspace in terms of modules, show the containment and inclusion relationship between HDL files in terms of hierarchy, and click to open the corresponding file.

> Note: The treeView only displays the HDL files in the user-specified or default workspace folder in property.json, the modules in other files will not be displayed in the treeView.

---

## Netlist Preview

<center>
<video width="90%" controls>  
  <source src="/videos/netlist.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

The plugin uses `yosys 0.21` kernel (open source yosysjs 0.5 version) to synthesize the specified project (can run on all platforms), display the synthesized network diagram and support `include` and multi-file projects.

How to use
1. Click the icon in the upper right corner to create the panel
2. Or select the module you want to display in the project structure, or right click in the file and select `show netlist`.

> The current version of the netlist front-end is not perfect, future versions will optimize the front-end UI.

---

## Code to Doc

<center>
<video width="90%" controls>  
  <source src="/videos/code2doc.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

Auto-documentation currently only supports verilog and wavedrom visualization, and also supports the following three export formats:

- markdown
- html
- pdf

If you need to export pdf, please fill the startup path of your local Google Chrome or Edge browser into the parameter **markdown-pdf executable path**. As most pdf readers do not support color changing background, please export your pdf in light color theme:

> > In windows 11, the default startup path for Edge is `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`.

<center>
<video width="90%" controls>  
  <source src="/videos/exportpdf.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

---

## FSM Preview

<center>
<video width="90%" controls>  
  <source src="/videos/fsm.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

This feature visualizes the finite state machine in a project and allows you to click on the shapes in the diagram to jump around.

> The front-end is currently quite minimal and the front-end UI of the FSM feature will be optimized in the future.
