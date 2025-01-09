---
title: Netlist
createTime: 2025/01/08 23:52:18
permalink: /en/article/x29n1v76/
---

## Netlist Preview

We have integrated the Yosys executable file (directly compiled) into the plugin backend. This integration allows project code synthesis (limited to Verilog and certain SystemVerilog files; see the Yosys official website for supported features) without the need to install or configure any additional software. After synthesis, the generated netlist can be visualized as a schematic diagram.

The process is straightforward: simply click the corresponding button in the functionality menu to render the netlist with the current module as the top-level design. This feature enables users to quickly review their design implementation.

`Functionality Access Point 1:`

As shown in the figure below, the Netlist button, located in the hover menu over the module name, serves as the access point for this functionality.

<!-- TODO: netlist-incode -->
![行间功能入口]()

`Functionality Access Point 2:`

As shown in the dependency structure below, the access point for this functionality is integrated within the design hierarchy.

<!-- TODO: netlist-arch -->
![依赖结构中的功能入口]()

<!-- TODO: netlist (netlist具体使用教程视频) -->
<center>
<video width="90%" controls>  
  <source src="/videos/netlist.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

