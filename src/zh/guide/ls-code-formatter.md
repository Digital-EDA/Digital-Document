---
title: 代码格式化
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