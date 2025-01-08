---
title: 快速仿真
createTime: 2025/01/08 20:58:14
permalink: /article/wem4n467/
---

仿真搭建的目的是帮助用户能快速搭建起自己的仿真框架，并快速的获得仿真结果。


## 产生例化

<!-- TODO: auto-instance（） -->
<center>
<video width="90%" controls>  
  <source src="/videos/netlist.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

该插件支持不同语言间的交叉例化，比如在sv文件中例化sv和vhdl模块，或者在vhdl文件中例化sv和vhdl模块。

步骤如下:
1. 将光标放置在文本需要例化处。
2. 使用快捷键`F1`启动命令框，输入*Instance*，选择`Instance`。
   1. 或者使用快捷键`Alt + I`。
   2. 或者在需要例化处右击选择`Instance`
3. 输入需要例化的模块的关键字（插件会自动匹配）。
4. 选择需要例化的模块。

`【注】`：在使用快捷键时，需检查是否存在快捷键键冲突。

如果想要更改testbench模板的话步骤如下：
使用快捷键`F1`启动命令框，选择TOOL:Overwrite the template of testbench，选择要更改的仿真文件的类型，这时会打开testbench file的初始化文件在此基础上更改保存即可。此外请保留 `//Instance` 标志，该标志是用于识别需要例化的位置。

后期会考虑tb文件与例化模块间的智能连线。

## 快速仿真

当前针对小模块的快速验证，我们给出了一个一键快速仿真的功能，该功能依赖的是`iverilog`来完成的。因此用户需要自己配置好`iverilog`的安装。

对于0.4.0最新版来说，我们对include做了专门的设计，无论写不写include都能正常仿真，但我们强烈不建议写include，include本身的设计会导致更高的复杂度，导致运行的不稳定性。

初期配置时，安装好`iverilog`，并将其配置到系统环境下，或者在setting中配置其安装路径。
### 使用说明

快速仿真的使用非常简单，只需要一步：

在对应tb模块的`功能入口`处点击，则完成相应仿真打开vcd波形渲染器。（当前只支持vcd格式的波形渲染）

`功能入口1：`

如下图所示的，悬浮在模块命名上的`Simulate`按键功能入口

<!-- TODO: sim-incode -->
![行间功能入口]()

`功能入口2：`

如下图所示的依赖结构中的功能入口

<!-- TODO: sim-arch -->
![依赖结构中的功能入口]()

点击功能入口之后，如果生成了vcd文件则插件自动打开对应的波形渲染器，用户只需要在里面进行波形的查看即可。具体的波形渲染器的使用视频如下：

<!-- TODO: waveview wave渲染器的使用教程视频-->
<center>
<video width="90%" controls>  
  <source src="/videos/waveview.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

### 常见问题

Q: 没有生成vcd文件

A: 如果运行的过程中没有报错，那可能是tb文件中缺少生成vcd波形文件的语句：

    ```verilog
        initial begin
            $dumpfile("prj/icarus/FFT_IFFT.vcd");        
            $dumpvars(0, FFT_IFFT_tb);
            #2000 $finish();
        end
    ```

Q: 直接卡死，毫无输出

A: 如果运行的过程中没有报错，那可能是tb文件中缺少`$finish();`，强烈不建议这么做，这样做vcd会不断变大，后端iverilog也会卡住进程。需要在设计中加入一个`$finish();`来完善整个验证设计。
