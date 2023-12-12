---
title: Simulation Building
---

The purpose of simulation building is to help users to build their own simulation framework quickly and get simulation results quickly.

## Generate instance & tb file

Although auto-completion can realize the automatic completion of the example, but it can not view the entire project all the available modules and select from them, so we provide automatic example of the function; In addition, we also provide automatic generation of the selected module testbench function.

<br>
<div align=center>
<img src="https://img1.imgtp.com/2023/08/18/bA4ybk5Z.gif" style="width: 90%;"/>
</div>
<br>

The plugin supports cross instantiation between different languages, such as instantiating verilog and vhdl modules in a verilog file, or Verilog and vhdl modules in a vhdl file.

The steps are as follows:
1. Place the cursor where the text needs to be instantiated. 
2. Start the command box by `F1`, type *Instance*, and select `TOOL:Instance`.
   1. or use the shortcut `Alt + I`
   2. or right-click on the module to be instantiated and select `Instance`
3. Enter the keyword of the module to be instantiated (the plugin will automatically match it). 
4. Select the module you want to instantiate.

`[Note]`: When using shortcut keys, you need to check if there is a shortcut key conflict.

In addition to automatic instantiation, the plugin also provides a simulation template for verilog, which is used as follows:
1. Start the command box by `F1`, type *Testbench*, and select `TOOL:Testbench`.
   1. or right-click under the file to be generated and instantiated and select `Testbench`.
2. Select the type of simulation file and the location where you want to store it, and replace it directly if it exists.

If you want to change the template of testbench, proceed as follows:
Use the shortcut `F1` to start the command box, then select TOOL:Overwrite the template of testbench to choose the type of simulation file you want to change. This will open the initialization file of the testbench file, what you need to do is saving the changes based on this. In addition, please keep the `//Instance` flag, which is used to identify the location to be instantiated.

The intelligent connection between the tb file and the instantiated module will be considered later.

## Fast Simulate
The purpose of this feature is to enable fast simulation of a single module, or a small project consisting of several modules.
Currently the only supported simulation tool is iverilog, which will be continuously updated to add new support.

**Iverilog Fast Simulation**
<br>
<div align=center>
<img src="https://img1.imgtp.com/2023/08/18/7PS5Cp37.gif" style="width: 90%;"/>
</div>
<br>

- If you want to use this feature, please download iverilog by yourself and add environment variables.
- VCD rendering is currently using wavetrace, a vscode plugin, the next version will introduce an embedded waveform renderer that we have developed, and it is completely free.
- In term of Multi-file simulation, we recommend not to write include, if you write include, please add the folder path of all included files in property.json, for example:

```json
{
	...
    "iverilogCompileOptions": {
        "standard": "2012",
        "includes": [
            "${workspace}/src",
            "${workspace}/src/Controller",
            "${workspace}/src/DataPath"
        ]
    },
    ...
}
```