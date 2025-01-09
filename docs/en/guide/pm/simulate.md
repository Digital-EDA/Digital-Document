---
title: Simulation Building
createTime: 2025/01/08 23:52:18
permalink: /en/article/gcnsg49q/
---

The purpose of simulation building is to help users to build their own simulation framework quickly and get simulation results quickly.

## Generate instance

<!-- TODO: auto-instance（） -->
<center>
<video width="90%" controls>  
  <source src="/videos/netlist.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

Although auto-completion can realize the automatic completion of the example, but it can not view the entire project all the available modules and select from them, so we provide automatic example of the function; In addition, we also provide automatic generation of the selected module testbench function.

The plugin supports cross instantiation between different languages, such as instantiating verilog and vhdl modules in a verilog file, or Verilog and vhdl modules in a vhdl file.

The steps are as follows:
1. Place the cursor where the text needs to be instantiated. 
2. Start the command box by `F1`, type *Instance*, and select `TOOL:Instance`.
   1. or use the shortcut `Alt + I`
   2. or right-click on the module to be instantiated and select `Instance`
3. Enter the keyword of the module to be instantiated (the plugin will automatically match it). 
4. Select the module you want to instantiate.

`[Note]`: When using shortcut keys, you need to check if there is a shortcut key conflict.

If you want to change the template of testbench, proceed as follows:
Use the shortcut `F1` to start the command box, then select TOOL:Overwrite the template of testbench to choose the type of simulation file you want to change. This will open the initialization file of the testbench file, what you need to do is saving the changes based on this. In addition, please keep the `//Instance` flag, which is used to identify the location to be instantiated.

The intelligent connection between the tb file and the instantiated module will be considered later.

## Fast Simulate

To facilitate rapid validation of small modules, a one-click quick simulation feature is provided, leveraging `iverilog`. Users must install and configure `iverilog` independently.

For version 0.4.0 and later, specific design improvements for include have been implemented. While simulation will run correctly regardless of whether include is used, we strongly discourage its use due to the increased complexity and instability it introduces.

Initial Configuration:
Install `iverilog` and add it to the system environment, or specify its installation path in the plugin settings.

### Usage Instructions:
Quick simulation requires just one step:

Click the Simulate 1`unctionality button` at the corresponding testbench module's access point. Simulation will be completed, and the VCD waveform renderer will open (currently supporting only VCD format waveforms).

`Functionality Access Point 1:`

As shown in the image below, the Simulate button is accessible by hovering over the module name in the hierarchy.

<!-- TODO: sim-incode -->
![行间功能入口]()

`Functionality Access Point 2:`

As shown in the dependency structure below, the access point for this functionality is integrated within the design hierarchy.

<!-- TODO: sim-arch -->
![依赖结构中的功能入口]()


After clicking the functionality access point, if a VCD file is generated, the plugin automatically opens the corresponding waveform viewer. Users can directly review the waveform within the viewer. The following video demonstrates how to use the waveform viewer in detail:

<!-- TODO: waveview wave渲染器的使用教程视频-->
<center>
<video width="90%" controls>  
  <source src="/videos/waveview.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

### FAQ

Q: No VCD file is generated.

A: If no errors occurred during execution, the issue might be that the testbench (TB) file is missing statements to generate the VCD waveform file:

```verilog
initial begin
    $dumpfile("prj/icarus/FFT_IFFT.vcd");        
    $dumpvars(0, FFT_IFFT_tb);
    #2000 $finish();
end
```

Q: Execution freezes with no output.

A: If no errors occurred during execution, the issue might be that the testbench lacks a `$finish();` statement. It is strongly discouraged to omit this statement as it causes the VCD file to grow indefinitely and leads to the iverilog backend freezing the process. Add a `$finish();` statement to complete the validation design properly.