---
title: 介绍
---

提供前端代码设计所需的基本语言服务。


## 语言高亮

<br>
<div align=center>
<img src="https://picx.zhimg.com/80/v2-0b3740ecd3e9fd2d77e73595c20a7c5a_1440w.png" style="width: 90%;"/>
</div>
<br>

现支持以下语言的高亮
1. HDL
   - verilog
   - systemverilog
   - VHDL
2. TCL 
   - xdc
   - sdc
   - fdc (包括xdc、sdc、fdc约束文件)

---

## 语法诊断

我们为 verilog, vhdl, systemverilog 提供了不同的代码诊断器。

<center>
<video width="90%" controls>  
  <source src="/videos/linter.1.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

<center>
<video width="90%" controls>  
  <source src="/videos/linter.2.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

在该插件0.3.0版本之后将支持自带的语法诊断器，无需下载任何第三方工具支持的语法有：
- verilog
- vhdl (仍然有bug)
- systemverilog (正在开发)

---

## 文件大纲

工作区左侧可以看到当前HDL代码的文件大纲，以便快速定位需要查看的模块或变量。

<br>
<div align=center>
<img src="https://picx.zhimg.com/80/v2-1a7702db958deed33dfd9d218efc241f_1440w.png" style="width: 90%;"/>
</div>
<br>

---

## 悬停提示

将鼠标移动到需要查看的变量、宏、例化模块等上时，会显示当前变量的申明定义。

> 如果是模块，还会显示该模块的各种类型的端口数量等信息

<br>
<div align=center>
<img src="https://pic1.zhimg.com/80/v2-3548c2344be35b502ec46d8a6c0a6165_1440w.png" style="width: 90%;"/>
</div>
<br>

主要提示的内容为当前文件内定义的数据类型以及例化模块的相关信息。
提示内容如下：
1. `标识对应的注释` + `标识对应的内容`
2. 二进制、十六进制 -> 十进制

其中标识对应的注释的内容为
1. 标识被定义的所在行后的行注释
2. 标识被定义之前的行注释以及块注释(遇到非注释部分即停止)

> 悬停提示使用的是内置的vlog和vhdl解析器，目前暂时只支持简单的悬停提示

---

## 自动补全

<center>
<video width="90%" controls>  
  <source src="/videos/2.1.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

该插件所提供的自动补全分两部分：
1. snippet文件提供的自动补全，支持用户添加
2. 关键符触发自动补全
   1. `.`关键符触发例化模块的端口或者参数名的补全
   2. ` 关键符触发宏定义标识的补全
   3. `/`关键符触发include中路径的补全

> 目前自动补全只支持在verilog和systemverilog中例化模块里进行端口参数例化时的补全

有关自动补全的几个可以设置的参数的说明：

1. `function.lsp.completion.vlog.autoAddInclude`
    - 是否在例化模块时自动在文件开头加入include，默认为true
2. `function.lsp.completion.vlog.completeWholeInstante`
    - 是否完整地自动补全整个例化所需要的所有parameters和ports，默认为true
3. `function.instantiation.addComment`
    - 是否在例化后加入一些注释，默认为true
4. `function.instantiation.autoNetOutputDeclaration`
    - 是否在例化后自动完成所有output端口的定义，默认为true



---

## 定义跳转

<center>
<video width="90%" controls>  
  <source src="/videos/2.2.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>


如果悬停提示支持有效那就能支持定义的跳转。
但有些时候无法完成定义的跳转，其原因是解释器没有正确的解释出代码，这时候可以将`linter`设置为`default`，使用解释器进行检查查看代码语法的正确性。


---

## 代码格式化

<center>
<video width="90%" controls>  
  <source src="/videos/2.3.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>



可以对选中的字符或者全文进行文档的格式化 vscode自带快捷键打开方式：`shift + alt + f`。支持Verilog和VHDL。
相关设置(setting)说明:
- verilog and systemverilog
1. `function.lsp.formatter.vlog.default.style`
    - verilog 和 systemverilog格式化类型，支持三种类型 `kr`、`ansi`、`gun`
2. `function.lsp.formatter.vlog.default.args`
    - 其他参数输入，vlog的格式化使用的是istyle的webassembly因此要输入的参数请参考istyle
    > 由于该功能是基于istyle来实现的因此对全文格式化依旧不是很完善，建议选中always语句块来进行格式化，后期会持续修复相关问题。

- vhdl
1. `function.lsp.formatter.vhdl.default.align-comments`
    - 是否需要对齐注释
2. `function.lsp.formatter.vhdl.default.indentation`
    - tab所对应的空格数量

---

## VHDL 自动翻译为 Verilog

<center>
<video width="90%" controls>  
  <source src="/videos/2.4.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

目前只支持vhdl转Verilog的翻译功能。
如果没有输出的话，则意味着vhdl的语法错误，或者有插件无法解析的语法。转换后的verilog文件已经经过了格式化，不需要再次格式化。
