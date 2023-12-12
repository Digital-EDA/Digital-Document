---
title: Project Configuration
---

Before the introduction of functions, it is important to know the basic structure of the project.

## Project Configuration File Generation
Use * TOOL: generate property file * to generate the initial ` property. json ` template file. The generated file will be placed directly in the .vscode folder.
If you have your own template, you can customize the template file using * TOOL: Overwrite the InitPropertyParam *.

> After version 0.3.0, the plugin will automatically ask users whether to create property.json every time it starts.

<center>
<video width="90%" controls>  
  <source src="/videos/project.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

## Description Of the Project Configuration File
> New configuration properties will be used after version 0.3.0
```json
// porperty.json  All attributes explained
{
    // Third-party tool chains currently in use
    "toolChain": "xilinx", 

    // Project naming 
    // PL : Programming logic design part is FPGA before
    // PL : Processing system design part is the previous SOC
    "prjName": {
        "PL": "template",
        "PS": "template"
    },

    // Custom project structure, without this attribute it is considered as a standard file structure (see below for details)
    // Project path, hardware and software design path
    // All properties support ${workspace}, ${plname}, ${psname}, relative paths
    // ${workspace} ： path to the current workspace
    // ${plname}、${psname} ：the name of the PL or PS project
    "arch" : {
        "prjPath": "",
        "hardware" : {
            "src"  : "",  // Place the design source file, note: src is one level below IP&bd
            "sim"  : "",  // Place the simulation file, which will be directly reflected in the tree structure
            "data" : ""   // Place constraints and data files, constraints will be automatically added to the vivado project
        },
        "software" : {
            "src"  : "",
            "data" : ""
        }
    },

    // Code library management, support for remote and local two kinds of call (see the following library management for details)
    // Use UI to configure, not recommended for users to change directly
    "library" : {
        "state": "", // local | remote
        "hardware" : {
            "common": [], // Common libraries provided by the plugin
            "custom": []  // User's own design library
        }
    },

    // Xilinx IP repository can be add directly to the IP repo of vivado
    // Only IP repositories of ADI and ARM are supported currently（adi | arm）
    "IP_REPO" : [],

    // When the design uses PL + PS that is SOC development
    // Mixed development when the core is not none
    "soc": {
        "core": "none",
        "bd": "",
        "os": "",
        "app": ""
    },

    // Whether the information is output at the terminal when the project is realized synthetically
    "enableShowLog": false,

    // 设备类型 可以是如下几种：
    // "none",
    // "xc7z020clg400-2",
    // "xc7a35tftg256-1",
    // "xc7a35tcsg324-1",
    // "xc7z035ffg676-2",
    // "xc7z020clg484-1"
    "device": "none"
}
```

One of the most important attributes is the `arch` attribute, which is considered a user-defined project structure when configured. For user-defined structures, all file changes are managed by the user. When the `arch` attribute is not configured, it is considered to use the standard file structure recommended by the plugin. The description of the standard file structure is as follows.
```
.vscode
  └── property.json   -- Project configuration file  user-defined (or stored in the root of the workspace)
prj                   -- Store project files
  ├── simulation      -- Store intermediate files for third-party simulation tool runtime
  ├── intel           -- Store intel project files
  └── xilinx          -- Store xilinx project files
user                  -- Store user-designed source files which are user-defined
  ├── ip              -- Store project ip code (managed by vendor tools, but moved to the same level of src by the plugin)
  ├── bd              -- Store the source code of project block designer(managed by vendor tools, but moved to the same level of src by the plugin)
  ├── data            -- mainly for data files and constraint files
  ├── sim             -- Store user's simulation code
  └── src             -- Store user's design source code   
       └─ lib         -- Store user's hardware library source code  
```

When the `SOC.core` in the `property.json` file is not set to "none" and the configuration file is saved, the file structure will be automatically changed to a hybrid PS+PL design structure. Under this structure the user folder will change to the following structure:
```
user               -- Store user-designed source files, user-defined
  Hardware         -- mainly for hardware logic design
     ├── ip        -- Store project ip code (managed by vendor tools, but moved by the plugin to the same level directory as src)
     ├── bd        --  Store project block designer source code (managed by vendor tools, but moved to src sibling directory by plugins) 
     ├── data      -- mainly for data files and constraint files
     ├── sim       -- Store user's simulation code
     └── src       -- Store user's design source code  
          └─ lib   --  Store user's hardware library source code   
  Software         -- Store software-driven designs
     ├── data      -- mainly for data files and constraint files
     └── src       -- Store user's project source code    
```
`[Note]`: When the value of `SOC.core` is changed from non-none to none, the Software folder is not needed by default and will be deleted (the plugin will also give a prompt accordingly), so please make a backup. Also, *IP and bd design will be placed to the directory above src, so it is better not to set src as the root path of the workspace*.

In addition, if the path configured by the user under arch is wrong or invalid, the plugin will directly change to the structure path under standard. *When the user does not configure the `property.json` file, the file structure will default to the path of the workspace, and this behavior may cause a lot of performance consumption, please pay attention to it*.
