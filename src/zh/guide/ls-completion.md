---
title: 自动补全
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