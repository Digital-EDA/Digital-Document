---
title: 仿真搭建
---

仿真搭建的目的是帮助用户能快速搭建起自己的仿真框架，并快速的获得仿真结果。


## 产生例化 & tb file

虽然自动补全可以实现例化的自动补全，但是无法阅览整个项目所有可用的模块并从中选择，因此我们提供了自动例化的功能；除此之外我们还提供了自动生成选定模块testbench的功能。


<br>
<div align=center>
<img src="https://img1.imgtp.com/2023/08/18/bA4ybk5Z.gif" style="width: 90%;"/>
</div>
<br>

该插件支持不同语言间的交叉例化，比如在verilog文件中例化verilog和vhdl模块，或者在vhdl文件中例化Verilog和vhdl模块。

步骤如下:
1. 将光标放置在文本需要例化处。
2. 使用快捷键`F1`启动命令框，输入*Instance*，选择`Instance`。
   1. 或者使用快捷键`Alt + I`。
   2. 或者在需要例化处右击选择`Instance`
3. 输入需要例化的模块的关键字（插件会自动匹配）。
4. 选择需要例化的模块。

`【注】`：在使用快捷键时，需检查是否存在快捷键键冲突。

除了自动例化外，插件还提供了一个verilog的仿真模板，使用方式如下：
1. `F1`启动命令框，输入*Testbench*, 选择`testbench`
   1. 或者在需要生成并例化的文件下右击选择`Testbench`。
2. 选择仿真文件的类型以及需要存储的位置，如果存在直接替换即可。

如果想要更改testbench模板的话步骤如下：
使用快捷键`F1`启动命令框，选择TOOL:Overwrite the template of testbench，选择要更改的仿真文件的类型，这时会打开testbench file的初始化文件在此基础上更改保存即可。此外请保留 `//Instance` 标志，该标志是用于识别需要例化的位置。

后期会考虑tb文件与例化模块间的智能连线。

## 快速仿真
该功能的目的是为了能快速地对单个模块，或几个模块组成的小工程进行快速地仿真。


**iverilog快速仿真**

<br>
<div align=center>
<img src="https://img1.imgtp.com/2023/08/18/7PS5Cp37.gif" style="width: 90%;"/>
</div>
<br>


- 如果想要使用该功能，请自行下载iverilog，并加入环境变量。
- VCD渲染目前使用的是wavetrace这个vscode插件，下一个版本会推出我们开发的内嵌波形渲染器，而且完全免费。
- 多文件仿真我们建议不要写include，如果写了include，请在property.json中加入所有include的文件的文件夹路径，例如：

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