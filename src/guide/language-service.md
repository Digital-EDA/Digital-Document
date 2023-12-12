---
title: Introduction
---

Provide the basic language services required for front-end code design


## Language Highlight

<br>
<div align=center>
<img src="https://picx.zhimg.com/80/v2-0b3740ecd3e9fd2d77e73595c20a7c5a_1440w.png" style="width: 90%;"/>
</div>
<br>

The following languages are now supported for highlighting
1. HDL
   - verilog
   - systemverilog
   - VHDL
2. TCL 
   - xdc
   - sdc
   - fdc (including xdc、sdc、fdc)

---

## Syntax Diagnosis

We provide different linter for verilog, vhdl, systemverilog to diagnose your code.

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


After version 0.3.0, the plugin will support a built-in syntax diagnostic tool that does not require downloading any third-party tools. The supported syntax includes:
- verilog
- vhdl (bugs remain)
- systemverilog (developing)

---

## Outline

The outline of the current HDL code can be seen on the left side of the workspace to quickly locate the module or variable you need to see.
<br>
<div align=center>
<img src="https://picx.zhimg.com/80/v2-1a7702db958deed33dfd9d218efc241f_1440w.png" style="width: 90%;"/>
</div>
<br>

---

## Hover Tips

When you move the mouse over a variable, macro, example module, etc. that you want to view, the declaration definition of the current variable is displayed.

> If it is a module, information such as the number of ports of each type for the module is also displayed.

<br>
<div align=center>
<img src="https://pic1.zhimg.com/80/v2-3548c2344be35b502ec46d8a6c0a6165_1440w.png" style="width: 90%;"/>
</div>
<br>

The prompts are as follows:
1. `mark corresponding comment` + `mark corresponding content`
2. binary, hexadecimal -> decimal

where contents of the comment corresponding to the marker are
1. line comments after the line where the marker is defined
2. line comments and block comments (stopping when a non-commented part is encountered) before the marker is defined

> Hover tips use the built-in vlog and vhdl parser, which currently only support simple hover tips

---

## Completion

<center>
<video width="90%" controls>  
  <source src="/videos/2.1.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

The auto-completion provided by the plugin is divided into two parts:
1. snippet file provided by the auto-complete, support for user-added
2. keyword triggered auto-completion
   1. `. `. Keyword triggers the completion of the port or parameter name of the exemplified module.
   2. `\`` Keyword triggers the completion of macro definition identifiers.
   3. `/` key triggers path completion in include.

> Currently, auto-completion is only supported in verilog and systemverilog for port parameter routines.

A description of the parameters that can be set for auto-completion:

1. `function.lsp.completion.vlog.autoAddInclude`
    - Whether or not to automatically add an include to the beginning of a file when instantiating a module, default is true.
2. `function.lsp.completion.vlog.completeWholeInstante`
    - Whether or not to complete all parameters and ports needed for the whole instantiation, default is true.
3. `function.instantiation.addComment`
    - Whether to add some comments after the instantiation, default is true.
4. `function.instantiation.autoNetOutputDeclaration`
    - Whether to automatically complete the definition of all output ports after instantiation, default is true.

---

## Definition Jumps

<center>
<video width="90%" controls>  
  <source src="/videos/2.2.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

If the hover tip support is valid, then it can support the definition jump.
However, there are some times when the definition jump cannot be done because the interpreter does not interpret the code correctly, so you can set `linter` to `default` and use the interpreter to check the correctness of the code syntax.


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

---

## Vhdl to Verilog Translation

<center>
<video width="90%" controls>  
  <source src="/videos/2.4.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>


Currently only vhdl to Verilog translation is supported.
If there is no output, it means that the syntax of vhdl is wrong, or there is a syntax that the plugin cannot parse.
