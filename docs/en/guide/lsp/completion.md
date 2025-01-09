---
title: Completion
createTime: 2025/01/08 23:52:18
permalink: /en/article/9f61qe0o/
---

## Feature Description

<center>
<video width="90%" controls>  
  <source src="/videos/2.1.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

The code autocompletion feature in code design aims to improve development efficiency and code quality by simplifying code input, reducing errors, and enhancing consistency. Below are the core objectives and detailed descriptions of the supported features.

1. $Improve Development Efficiency$
Autocompletion significantly reduces the manual input required by developers, particularly when dealing with long variable names or complex class and function calls, thus improving efficiency.
2. $Reduce Errors$
By displaying variable, function, and module suggestions in real time, autocompletion helps developers avoid common errors such as typos and undefined variables.
3. $Enhance Readability and Consistency$
Autocompletion helps developers follow consistent naming conventions and standardized library calls, improving the readability of the code and ensuring consistency in team collaboration.

## Supported Features

### Snippet Completion

The VS Code built-in snippet completion has been enhanced in this plugin, adding commonly used design components such as:

* Edge detection logic
* Counter templates
* Simple finite state machine templates

Developers can customize their own snippets to meet project requirements, improving collaboration and code reuse.

<!-- TODO: add-snippets -->
<center>
<video width="100%" controls>  
  <source src="/videos/add-snippets.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

### Automatic Instantiation

Manually instantiating modules is time-consuming and prone to missing parameters or ports. The plugin's automatic instantiation feature generates complete module instantiation templates quickly. The process is as follows:

<!-- TODO: auto-instance -->
<center>
<video width="100%" controls>  
  <source src="/videos/auto-instance.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>


If you're unsure about which modules are available, can't recall the exact name of a module, or need to specify which module to instantiate when multiple modules share the same name, you can use the Quick Instantiation feature to automatically complete the instantiation. The process is as follows:

1. Place the cursor at the location where the instantiation is needed in the text.
2. Press the shortcut `F1` to open the command palette, type instance, and select the command Digital-IDE: Generate instance template from selected module.
    - Alternatively, use the shortcut Alt + I.
    - Or right-click at the instantiation location and select `Generate instance template from selected module`.
3. Enter the keyword for the module you wish to instantiate (the plugin will automatically match it).
4. Select the module you want to instantiate and press Enter.

`Note:` When using the shortcut keys, make sure to check for any potential shortcut key conflicts.

### Primitive Instantiation

Additionally, starting from version 0.4.0, the plugin includes instantiations for all primitives from `xilinx` and `efinix`, along with the corresponding comments, so there is no longer a need to copy from Vivado's language templates.

<!-- TODO: prim-instance -->
<center>
<video width="100%" controls>  
  <source src="/videos/prim-instance.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

Here are some configurable parameters related to automatic instantiation:

1. `function.lsp.completion.vlog.autoAddInclude`
    - Whether to automatically add include at the beginning of the file when instantiating a module. The default is true.
2. `function.lsp.completion.vlog.completeWholeInstante`
    - Whether to automatically complete all parameters and ports needed for full instantiation. The default is true.
3. `function.instantiation.addComment`
    - Whether to add comments after instantiation. The default is true.
4. `function.instantiation.autoNetOutputDeclaration`
    - Whether to automatically complete the definition of all output ports after instantiation. The default is true.

### Keyword Autocompletion

The current keyword autocompletion supports the following three triggering modes:

1. The . keyword triggers autocompletion for module `ports` and `parameters` during instantiation.
2. The \` keyword triggers autocompletion for `macro definition` identifiers.
3. The / keyword triggers autocompletion for `path` in include statements.
> Currently, autocompletion only supports completing ports and parameters during module instantiation in Verilog and SystemVerilog.

The usage and effect are as follows:

<!-- TODO: auto-completion -->
<center>
<video width="100%" controls>  
  <source src="/videos/auto-completion.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

## Future Plans
[] Support for autocompletion of `macro definition functions`
[] Support for . autocompletion within `class`, `interface`, etc., in SystemVerilog (SV)