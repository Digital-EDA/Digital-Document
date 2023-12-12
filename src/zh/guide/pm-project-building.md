---
title: 工程搭建
---

工程搭建的目的是帮助用户快速搭建属于自己第三方工程的，尤其是`project Manager`和第三方工具链相关，目前兼容的第三方工具只有xilinx的vivado（后续会继续支持其他三方）。而`lib Manager`则是为了避免重复造轮子而提供的一个功能，方便用户使用插件提供的一些常见HDL library，也支持用户自己积累library。

## Project Manager
`project Manager`的主要目的如下：
1. 抽象出功能，减少其他三方工具的学习成本
2. 抹除版本差异，使得更加专注源码的设计
   - 因为只要有配置文件和设计源就能在任意一个vivado版本下还原工程 

注：`project Manager`是强依赖属性配置文件`property.json`的，如果省缺会直接使用默认(模板)配置

对于PL端的工程管理，我抽象出以下几个功能：
1. launch ------ 启动整个工程，如果没有工程则创建，有的话则直接打开
2. refresh ----- 刷新整个工程，更新整个工程的设计
3. simulate ---- 仿真整个工程，默认不打开GUI界面 *`（使用的是TOOL_CHAIN里的仿真器）`*
   1. simGUI ----- 仿真成功后打开GUI界面
   2. simCLI ----- 仿真成功后不打开GUI界面
4. build ------- 构建整个工程，并最后输出bit流文件
   1. synth ------ 进行工程的综合
   2. impl ------- 进行工程的实现
   3. bit -------- 输出工程的bit流文件
5. program ----- 比特流文件下载到FPGA/zynq板子中去 *`（下载烧写，但不固化）`*
6. gui --------- 打开工具链的GUI界面
    1. 打开GUI后，名为 *`HardWare`* 的终端不建议自行关闭
       - 直接关闭后整个GUI界面会自动关闭，若不保存则可能会导致设计丢失。
       - 直接关闭后插件不会将你的`IP和bd设计`移动`Hardware/src/`的同级目录下
7. exit -------- 关闭工程，仅在CLI下有效，在打开GUI之后，终端控制权被GUI接管。
    1. 在点击`exit`之后插件会将你的`IP和bd设计`移动`Hardware/src/`的同级目录下
    2. 如果直接关闭名为 *`HardWare`* 的终端则不会进行`IP和bd设计`的移动。
    3. 注：功能栏 *TOOL* 中的 *Clean* 时也可以将你的`IP和bd设计`移动`Hardware/src/`的同级目录下

除了以上几个显性功能外，还有两个隐性功能分别在`architecture`栏中，分别为
1. `Set as Top` -------------- 将该文件设置为当前工程的设计顶层模块
2. `Set as Testbench Top` ---- 将该文件设置为当前工程的仿真顶层模块

特殊地，*`Zynq`*器件支持PS+PL混合开发，为了应对混合开发的情况，插件给出`soc`配置如下：
```json
"soc": {
    "core": "ps7_cortexa9_0",
    "bd"  : "zynq_default"
}
```
使用如上配置插件会自动构建一个包含zynq设计的bd工程，帮助用户快速搭建平台。

最后关于设备选型，在`property.json`文件中的*Device*属性下配置即可。
目前已有的如下：
- xc7z020clg400-2
- xc7a35tftg256-1
- xc7a35tcsg324-1
- xc7z035ffg676-2
- xc7z020clg484-1

但支持的器件并不仅限于此，理论上可以支持vivado所能支持的所有器件，你可以直接将你的器件直接写在*device*属性中，此时由于数据库中没有该设备会报警告，但不妨碍运行。如果要消除警告需要将你的器件通过*FPGA:Add devices to the database*命令将其添加到数据库中。对于不需要的设备也可以通过 *FPGA:Remove the device from the database* 将其从数据库中删除。

**相关设置**
`prj.vivado.install.path` --- vivado的安装路径
当安装好vivado之后，可以直接在插件内部直接配置vivado的安装路径，也可以将vivado添加到环境变量中去（推荐）。如果路径错误找不到则默认为已经添加到环境变量中去了。
*e.g. : D:/APP/vivado_18_3/Vivado/2018.3/bin/*
注意：在路径中使用斜杠`/`分隔，并且配置到bin目录下。

`prj.xilinx.IP.repo.path` ---- 用户自行设计的xilinx的IP仓库配置该属性后插件会自动将该路径添加到vivado的IP repo中去
*e.g. : D:/project/FPGA/.Lib/xIP*

`prj.xilinx.BD.repo.path` ----  用户自定义xilinx block design文件的放置路径
*e.g. : D:/project/FPGA/.Lib/xbd*


## lib Manager
该插件自带HDL功能库链接功能。
`property.json`文件中配置如下：
```json
"library" : {
    "state": "", // local | remote(default)
    "hardware" : {
        "common": [],
        "custom": []
    }
},

"IP_REPO": [
    "arm", // 包含ip CM3DbgAXI & DAPLink_to_Arty_shield
    "adi"  // 包含 adi 公司下所有器件ip，已去除所包含的绝对路径 取自 adi2019_r1
],
```

对于`property.json`文件中的library属性不建议用户自己配置，建议使用*import library*命令，或者下图中的图标激活命令进行配置。

*state* 属性代表是库文件是加载到本地工作区，还是作为远程进行链接。
- `remote` 代表从远程虚拟包含（不在工作区下的都被认为远程，而不是网络上的远程）。
  - 远程库文件可以打开并更改 *(`注：`如果更改之后下次导入就是更改之后的代码)* 。
- `local`  代表将远程文件导入到该工程本地
  1. 放置到`arch.hardware.src`下的lib中，此时更改不会影响远程库中的代码。
  2. *`注：`当从local改回remote时lib文件夹会被删除（插件会提醒），请注意*。

*common* 属性代表插件自带的HDL功能库，*该库的代码不太成熟，仅供参考*。
目前已经经过仿真测试的lib路径如下
- Soc
- Math/Cordic.v
- Math/Sort3.v
- Math/Sqrt.v
- Malloc/RAM/Shift_RAM
- Apply/DSP/Advance/Communicate/Modulate
- Apply/DSP/Base/DDS
- Apply/Image  (需要包含 Sort3, Sqrt, Shift_RAM)

`【注】`：当输入的是文件夹时则包含该文件夹下所有的文件。此外不建议直接更改该库中的代码，更改之后再在下一次插件更新之后会被重新覆盖，请慎重。

*custom* 属性代表用户自定义HDL功能库。
该属性的使用需要对*setting*下的*PRJ.customer.Lib.repo.path*进行配置用户自定义库的根目录，并与*custom*属性下的配置组成文件(夹)的绝对路径。表示如下：
*`PRJ.customer.Lib.repo.path`*`/`*`${custom}`* 

`【注】`：当输入的是文件夹时则包含该文件夹下所有的文件。

最后，对于`IP_REPO`属性，这是插件向用户提供的两个官方xilinx IP repo，选择自己想要的进行配置，插件会自动添加到vivado的IP repo中去，方便用户直接开发，不用自己去编译导入。