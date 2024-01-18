---
title: Completion
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