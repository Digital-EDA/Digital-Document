---
title: Code Formatter
---

## Code Formatter

<center>
<video width="90%" controls>  
  <source src="/videos/2.3.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>


You can format the document with selected characters or full text. Vscode comes with shortcuts to open：`shift + alt + f`. Related setting description:
- verilog and systemverilog
1. `function.lsp.formatter.vlog.default.style`
    - verilog and systemverilog formatting types, supporting three types `kr`, `ansi`, `gun`
2. `function.lsp.formatter.vlog.default.args`
    - Other parameter inputs and vlog formatting use istyle's webassembly, so please refer to istyle for the parameters to be entered.
    > This function is based on istyle to achieve, so the full-text formatting is still not perfect, it is recommended to check the always statement block to format, and later will continue to fix related problems.

- vhdl
1. `function.lsp.formatter.vhdl.default.align-comments`
    - whether need to align comments
2. `function.lsp.formatter.vhdl.default.indentation`
    - the number of spaces corresponding to the tab