---
title: 工程配置
---

本插件定义工程配置文件为`property.json`，只放置于`.vscode`文件夹下。如果您能有耐心阅读完这个文件的作用，强烈推荐您选择创建property.json用于配置你的HDL项目。


## 工程配置文件的生成

使用 *TOOL:generate property file* 可以生成初始的 `property.json` 模板文件。生成的配置文件会直接放置于.vscode的文件夹下
如果你有属于自己的模板可以使用*TOOL:Overwrite the InitPropertyParam* 来自定义模板文件。

> 0.3.0版本后，插件每次启动都会自动询问用户是否要创建property.json

<center>
<video width="90%" controls>  
  <source src="/videos/project.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

## 工程配置文件的说明
> 注：在0.3.0版本之后将使用全新的配置属性
```json
// porperty.json 所有属性解说
{
    // 当前使用的第三方工具链
    "toolChain": "xilinx", 

    // 工程命名 
    // PL : 编程逻辑设计部分即之前的FPGA
    // PL : 处理系统设计部分即之前的SOC
    "prjName": {
        "PL": "template",
        "PS": "template"
    },

    // 自定义工程结构，若无该属性则认为是标准文件结构（详见下文说明）
    // 工程路径，软硬件设计路径
    // 所有属性均支持${workspace}、${plname}、${psname}、相对路径的写法
    // ${workspace} ： 当前工作区的路径
    // ${plname}、${psname} ：PL或PS的工程的名字
    "arch" : {
        "prjPath": "",
        "hardware" : {
            "src"  : "",  // 放置设计源文件，注: src上一级为IP&bd
            "sim"  : "",  // 放置仿真文件，会直接反应在树状结构上
            "data" : ""   // 放置约束、数据文件，约束会自动添加进vivado工程
        },
        "software" : {
            "src"  : "",
            "data" : ""
        }
    },

    // 代码库管理，支持远程和本地两种调用方式（详见下文库管理）
    // 使用UI来进行配置，不建议用户直接更改
    "library" : {
        "state": "", // local | remote
        "hardware" : {
            "common": [], // 插件提供的常见库
            "custom": []  // 用户自己的设计库
        }
    },

    // xilinx的IP仓库，直接添加到vivado的IP repo中
    // 目前支持ADI和ARM提供的IP repo （adi | arm）
    "IP_REPO" : [],

    // 当设计时用到PL+PS即为SOC开发
    // 当其中core不为none的时候即为混合开发
    "soc": {
        "core": "none",
        "bd": "",
        "os": "",
        "app": ""
    },

    // 工程综合实现时，是否在终端输出信息
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

其中最重要的属性是`arch`属性，配置了`arch`属性则认为是用户自定义工程结构。对于用户自定义结构，一切文件变动均由用户自行管理。当不进行`arch`属性配置的时候则认为使用本插件推荐的标准文件结构。对于标准文件结构的说明如下：
```
.vscode
  └── property.json   -- 工程配置文件 用户自定义 (或者存放于工作区的根目录也可)
prj                   -- 用于存放工程文件
  ├── simulation      -- 用于存放第三方仿真工具运行时的中间文件
  ├── intel           -- 用于存放Intel的工程文件
  └── xilinx          -- 用于存放xilinx的工程文件
user                  -- 用于存放用户设计的源文件 用户自定义
  ├── ip              -- 用于存放工程ip代码 (厂商工具管理，但由插件搬移至src同级目录)
  ├── bd              -- 用于存放工程block designer源码 (厂商工具管理，但由插件搬移至src同级目录)
  ├── data            -- 主要存放数据文件，以及约束文件
  ├── sim             -- 用于存放用户仿真代码
  └── src             -- 用于存放用户的设计源码   
       └─ lib         -- 用于存放用户的硬件库源码   
```

当 `property.json` 文件中 `soc.core` 设置不为 "none" 后保存配置文件时，文件结构会自动更改为PS+PL的混合设计结构。在该结构下user文件夹会发生改变，变为如下结构：
```
user               -- 用于存放用户设计的源文件 用户自定义
  Hardware         -- 主要存放硬件逻辑设计
     ├── ip        -- 用于存放工程ip代码 (厂商工具管理，但由插件搬移至src同级目录)
     ├── bd        -- 用于存放工程block designer源码 (厂商工具管理，但由插件搬移至src同级目录) 
     ├── data      -- 主要存放数据文件，以及约束文件
     ├── sim       -- 用于存放用户仿真代码
     └── src       -- 用于存放用户的设计源码  
          └─ lib   -- 用于存放用户的硬件库源码   
  Software         -- 主要存放软件驱动设计
     ├── data      -- 主要存放数据文件，以及约束文件
     └── src       -- 用于存放用户的工程源码   
```
注：在`soc.core`的值由非none变为none时，Software文件夹默认为不需要，会被删除（插件也会给出相应的提示），请做好备份。另外，*IP和bd设计会被放置到src的上一级目录，因此src最好不要设置为工作区的根路径*。

此外，如果用户在ARCH下配置的路径错误或者无效，插件会直接改为标准下的结构路径。*当用户不去配置`property.json`文件时，文件结构全部默认为工作区的路径，该行为可能会造成大量的性能消耗，请用户注意*。
