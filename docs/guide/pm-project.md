---
title: 工程搭建
createTime: 2025/01/08 20:58:14
permalink: /article/z2qwp9ny/
---

工程管理主要需要实现以下几个任务:

1. 工程搭建
  - Library Manager (IP & BD)
  - Project Manager (PS & PL)
2. 仿真搭建
  - Instances & AI for Generate tb file
  - Fast simulate & Generate simulation script
3. 设计辅助
  - Tree Structure
  - Code-Document
  - Netlist-View
  - Wave-View

## 基础定义

### 标准文件结构

```
📦prj
📂.vscode
  └── 📜property.json  -- 工程配置文件 用户自定义 (或者存放于工作区的根目录也可)
📂prj                  -- 用于存放工程文件
  ├── 📂simulation     -- 用于存放第三方仿真工具运行时的中间文件
  ├── 📂factory        -- 用于存放原厂的工程文件 (如：xilinx，efinlix)
📂user                 -- 用于存放用户设计的源文件 用户自定义
  ├── 📂ip             -- 用于存放工程ip代码 (厂商工具管理，但由插件搬移至src同级目录)
  ├── 📂bd             -- 用于存放工程block design源码 (厂商工具管理，但由插件搬移至src同级目录)
  ├── 📂data           -- 主要存放数据文件，以及约束文件
  ├── 📂sim            -- 用于存放用户仿真代码
  ├── 📂src            -- 用于存放用户的设计源码   
  |    └─ 📂lib        -- 用于存放用户的硬件库源码
  └── 📂sdk            -- 用于存放软件设计，对应xilinx的sdk的设计
```

【注】：在此去除Hardware和Software的分开设计并进行合并；在soc的开发模式下只会在user下新增sdk的文件夹，从而简化整体工程管理设计。当插件检索不到对应工作区下有`property.json`文件时，则认为是无配置文件结构，工程管理系统内则做以下定义(即所有的检测都会到工作区下去寻找，此操作会导致插件运行卡顿，慎用)：

```json
"arch" : {
    "structure" : "null", // 内部配置，或者用户设置该字段在规定之外则默认设置为此
    "prjPath": "${workspace}/prj",
    "hardware" : {
        "src"  : "${workspace}", 
        "sim"  : "${workspace}",  
        "data" : "${workspace}" 
    },
    "software" : {
        "src"  : "${workspace}",
        "data" : "${workspace}" 
    }
},
```

### 自定义文件结构

用户自定义文件结构由用户自行配置的`arch`属性来配置（具体配置方式见下一小节），并且此时`structure`类型必须要配置为`custom`。

【注】：当structure配置为非`custom`时其余属性均忽略，只使用指定的模式。若在三种模式之外的进行报错被认为使用的是用户模式，此时若无定义则将整个工作区进行解析。


### 忽略文件设计
为了更好的进行工程的自定义化在原有的管理系统上新增ignore设计。文件名定义为 `.dideignore` 该文件所包含的设计同 `.gitignore` 由文件或者文件夹带正则的相对路径或绝对路径组成；其中包含的HDL文件均忽略，不参与解析、渲染以及监控。参考书写如下：

```makefile
# 忽略 user/src 文件夹下所有的文件，等同于 user/src/* 以及 user/src/
user/src

# 忽略 user/src 文件夹下所有的 .v 后缀的文件
user/src/*.v
```

【注】：ignore文件的优先级大于定义的文件路径，如果ignore中包含src的路径，那整个src都不会被添加到工程中进行解析、渲染以及监控等操作。

### 配置文件定义

```json
// porperty.json 所有属性解说
{
    // 当前使用的第三方工具链
    "toolChain": "xilinx", 
    "toolVersion" : "2023.2.307",

    // 工程命名 
    // PL : 编程逻辑设计部分即之前的FPGA
    // PS : 处理系统设计部分即之前的SOC
    "prjName": {
        "PL": "template",
        "PS": "template"
    },

    // 自定义工程结构，若无该属性则认为是标准文件结构（详见下文说明）
    "arch" : {
        "structure" : "", // standard | xilinx | custom
        "prjPath" : "",   // 放置工程运行时的中间文件
        "hardware" : {    
            "src"  : "",  // 放置设计源文件，注: src上一级为IP&bd
            "sim"  : "",  // 放置仿真文件，会直接反应在树状结构上
            "data" : ""   // 放置约束、数据文件，约束会自动添加进vivado工程
        },
        "software" : {
            "src"  : "",  // 放置软件设计文件
            "data" : ""   // 放置软件相关数据文件
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
    
    "device": "none"
}
```

于工程路径配置需支持如下功能：
1. 所有属性均支持`${workspace}`、`${plname}`、`${psname}`
  - `${workspace}` ： 当前工作区的路径
  - `${plname}`、`${psname}` ：PL或PS的工程的名字
2. 支持相对路径的写法，如：`./user/src`
3. 支持路径字符的正则匹配
【注】：配置文件格式要做到后续版本一直兼容。同时去除更改配置文件从而更改文件结构的设计。

## 标准功能入口

为了更好的兼容三方EDA的综合工具，目前定义通用设计接口如下：

1. Launch ------ 启动整个工程，如果没有工程则创建，有的话则直接打开
2. Refresh ----- 刷新整个工程，更新整个工程的设计
3. Simulate ---- 仿真整个工程，默认不打开GUI界面 *`（使用的是TOOL_CHAIN里的仿真器）`*
   1. SimGUI ----- 仿真成功后打开GUI界面
   2. SimCLI ----- 仿真成功后不打开GUI界面
4. Build ------- 构建整个工程，并最后输出bit流文件
   1. Synth ------ 进行工程的综合
   2. Impl ------- 进行工程的实现
   3. Bitstream -- 输出工程的bit流文件
5. Program ----- 比特流文件下载 *`（下载烧写，但不固化）`*
6. GUI --------- 打开工具链的GUI界面
7. Exit -------- 关闭工程。
   - 在点击`Exit`之后插件会将你的`IP和bd设计`移动`user/src/`目录下


在操作框外的还需要两个重要功能：
1. setSrcTop
  - 刷新树结构
  - 并在工具链中重新设置
2. setSimTop
  - 刷新树结构
  - 并在工具链中重新设置
3. Do simulation for current module
4. exportFilelist
  - 导出 *.f 文件包含该模块以及所有依赖的文件绝对路径

### Xilinx兼容性说明

launch主要是完成工程的搭建，在有工程的情况下打开工程，在没有工程的情况下创建工程。具体注意点如下：

从`property.json`中所配置的`arch.prjPath`属性下配置的工程路径下找'.xpr'文件
  - 如果找到一个就直接打开，如果是多个交给用户选择再打开，如果是启用的GUI则直接打开vivado的界面。
  - 如果找不到就根据`property.json`中配置的内容来构建一个工程。

## 依赖结构渲染

结构树渲染，主要是展现工程的连接依赖的层级结构，其中以模块为基本单位，表述模块之间的层级关系。但是模块的属性比较复杂，并不只是一种类型；其可区分类型如下：
1. 文件分类，展示设计文件分区，当前分为设计区和仿真区，各区只包含对应文件夹下的模块。
2. 设计顶层，展示当前工程的顶层设计是哪一个模块，初始随机，后续由用户定义。
3. 仿真顶层，展示当前工程的仿真顶层是哪一个模块，初始随机，后续由用户定义。
4. 链接模块，展示哪些模块所在的文件是非本地的，一般都是库代码，插件定义。
5. 原语模块，展示哪些模块是原厂的原语模块。
6. IP代码块，展示IP的顶层模块，针对xilinx等原厂IP模块。

说明讲解：
特殊地，对于原语模块和IP代码模块无需点击跳转，但对于图标说明如下：
- 对于原语模块，如 IBUFDS 等（其余的见上查询连接）需要使用 celllib 的图标。
- 对于IP代码模块，需要到 ip 文件夹 下找有没有同名文件夹，有同名文件夹就需要使用相应的图标。

更新事件触发：
1. 工作区下，在vscode中有文件/文件夹的新增、删减以及重命名时结构树更新事件触发。
2. 工作区下，在文件管理器中有文件/文件夹的新增、删减以及重命名时结构树更新事件触发。
3. `property.json`文件变动时结构树更新事件触发，主要是针对文件结构和库文件变动的更新。
4. 工作区下，在vscode中有hdl文件文件内容更新时，针对那个文件内容的相关信息进行更新。

## 库管理系统

库管理系统，帮助用户快速将插件提供的、三方提供的或者用户自己设计的IP库导入到整个工程设计中去，能帮助用户快速搭建出一个可用的工程模板，使得用户更加关注业务层的设计。因此对于库管理系统定义设计如下：

设计库导入的方式：
1. 界面引导导入 （推荐）
2. 属性文件配置

<!-- TODO: library-arch (目前支持并验证好的有哪些库)-->
![library-arch]()

导入的IP库的类型：
1. local   [本地导入]
2. remote  [远程链接]（推荐）

【注】：此处之所以会分两种设计类型，一个是remote设计能轻量化工程设计源，达到快速分发的目的。另一方面，在remote的时候，如果对IP库代码进行了修改，会被永久更改，这是不建议的。
因此在此支持local导入类型。local导入类型能将IP库代码直接复制到本地，可供用户直接修改，并不影响其他调用IP库的工程。

IP库的导入来源：
1. 插件后端提供 ------- source path
2. IP供应商提供 ------- cloud platform
3. 用户自己设计 ------- costumer path

<!-- TODO: library-manager（用户库路径设置、库导入、使用例化的视频） -->
<center>
<video width="90%" controls>  
  <source src="/videos/netlist.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>