---
title: Project Building
---

The purpose of project building is to help users quickly build their own third-party projects, especially `project Manager` is related to third-party tool chain. Currently, the only compatible third-party tool is xilinx's vivado (other third-parties will continue to be supported in the future). However, `lib Manager` is to avoid repeatedly build a wheel and provide a function to facilitate the user to use some common HDL libraries provided by plugin, but also support the user to accumulate their own library.

## Project Manager
Main purposes of the `project manager` are as follows:
1. abstract out the function to reduce the learning cost of other three-party tools
2. erase version differences, allowing more focus on the source code design
   - Because as long as you have the configuration file and design source, you can restore the project under any vivado version.

`[Note]`: `project Manager` is strongly dependent on the property configuration file `property.json`, if missing, it will directly use the default (template) configuration.

For project management on the PL side, I have abstracted the following functions:
1. launch ------ to start the whole project, or create it if there is no project, or open it directly if there is
2. refresh ----- to refresh the whole project and update the design of the whole project
3. simulate ---- to simulate the whole project, without opening the GUI interface by default *`(using the simulator in TOOL_CHAIN)*
   1. simGUI ----- open the GUI interface after successful simulation
   2. simCLI ----- does not open the GUI interface after successful simulation
4. build ------- to build the whole project and finally output the bit stream file
   1. synth ------ to synthesize the project
   2. impl ------- to implement the project
   3. bit -------- to export the project's bitstream file
5. program -----  download the bitstream file to the FPGA/zynq board *`(download and burn, but not solidify)`*
6. gui --------- open the GUI interface of the tool chain
    1. After opening the GUI, the terminal named *`HardWare`* is not recommended to close by itself.
       - The whole GUI interface will be closed automatically after direct closure, and if not saved then the design may be lost.
       - The plugin will not move your `IP and bd design` to the same level of `Hardware/src/` after closing directly.
7. exit -------- Closing the project is only valid under the CLI, after opening the GUI, terminal control is taken over by the GUI.
    1. After clicking `exit` the plugin will move your `IP and bd design` to the same level of `Hardware/src/`.
    2. If you close the terminal named *`HardWare`* directly, the move of `IP and bd designs` will not take place.
    3. Note: You can also move your `IP and bd designs` to the same level of `Hardware/src/` when *Clean* is in the function bar *TOOL*.

In addition to the above explicit functions, there are two implicit functions each in the `architecture` column, which are
1. `Set as Top` -------------- sets this file as the top-level design module of the current project
2. `Set as Testbench Top` ---- sets the file as the top-level module of the simulation for the current project

Specially, *`Zynq`* devices support mixed PS+PL development. To cope with the mixed development, the plugin gives the `soc` configuration as follows:
```json
"soc": {
    "core": "ps7_cortexa9_0",
    "bd"  : "zynq_default"
}
```
Using the configuration plugin as above will automatically build a bd project containing the zynq design to help users quickly build the platform.

Finally, about device selection, it can be configured in the `property.json` file under the *device* property.
The following are currently available:
- xc7z020clg400-2
- xc7a35tftg256-1
- xc7a35tcsg324-1
- xc7z035ffg676-2
- xc7z020clg484-1

But the supported devices are not limited to these, theoretically all the devices that vivado can support can be supported. You can write your device directly to the *Device* attribute, which will give you a warning if the device is not in the database, but will not prevent you from running. To remove the warning you need to add your device to the database with the *FPGA:Add devices to the database* command. Unneeded devices can also be removed from the database with *FPGA:Remove the device from the database*.

**Related setting**
`prj.vivado.install.path` --- Installation path of vivado
When vivado is installed, you can configure the installation path of vivado directly inside the plugin, or you can add vivado to the environment variables (recommended). If the path is not found by mistake, it is already added to the environment variables by default.
*e.g. : D:/APP/vivado_18_3/Vivado/2018.3/bin/*
`[Note]`: Use `/` to separate the paths and configure them to the bin directory.

`prj.xilinx.IP.repo.path` ---- User-designed IP libraries from xilinx
After configuring this property, the plugin will automatically add the path to the IP repo of vivado.
*e.g. : D:/project/FPGA/.Lib/xIP*

`prj.xilinx.BD.repo.path` ----  User-defined placement path for xilinx block design files
*e.g. : D:/project/FPGA/.Lib/xbd*


## lib Manager
The plugin comes with HDL function library linking function.
The `property.json` file is configured as follows:
```json
"library" : {
    "state": "", // local | remote(default)
    "hardware" : {
        "common": [],
        "custom": []
    }
},

"IP_REPO": [
    "arm", // including ip CM3DbgAXI & DAPLink_to_Arty_shield
    "adi"  // containing all device ip's under the adi company, with the included absolute paths removed Taken from adi2019_r1
],
```

It is not recommended that users configure the library properties in the `property.json` file by themselves. It is recommended to use the *import library* command, or the icon activation command in the following figure to do so.

The *state* represents whether the library file is loaded into the local workspace, or linked as a remote.
- `remote` represents virtual inclusion from a remote (anything not under the workspace is considered remote, not remote on the network).
  - remote library files can be opened and changed *(`Note: `If the next import after the change is the code after the change)* .
- `local` means import the remote file into the project locally
  1. placed in the lib under `arch.hardware.src`, the changes will not affect the code in the remote library.
  2. *`[Note]`: When changing from local back to remote the lib folder will be deleted (plugin will remind), please note*.

The property *common* represents the HDL function library that comes with the plugin, *the code of this library is less mature and is for reference only*.
The lib paths that have been simulated and tested so far are as follows
- Soc
- Math/Cordic.v
- Math/Sort3.v
- Math/Sqrt.v
- Malloc/RAM/Shift_RAM
- Apply/DSP/Advance/Communicate/Modulate
- Apply/DSP/Base/DDS
- Apply/Image  (need to include Sort3, Sqrt, Shift_RAM)

`[Note]`: When the input is a folder then it contains all the files under that folder. In addition, it is not recommended to change the code in this library directly, otherwise it will be overwritten again after the next plugin update, please be careful.

The property *custom* represents a user-defined HDL function library.
The use of this property requires the root directory of the user-defined library to be configured for *prj.lib.custom.path* under *setting*, and the absolute path of the file (folder) with the configuration under the *custom* property. The representation is as follows:
*`prj.lib.custom.path`*`/`*`${custom}`* 

`[Note]`: When the input is a folder then it contains all the files under that folder.

Finally, for the `IP_REPO` property, this is the two official xilinx IP repo provided by the plugin to users, choose the one you want to configure, and the plugin will automatically add it to the IP repo of Vivado, which is convenient for users to develop directly without having to compile and import it by themselves.