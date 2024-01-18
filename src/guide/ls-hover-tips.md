---
title: Hover Tips
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