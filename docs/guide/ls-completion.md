---
title: 自动补全
createTime: 2025/01/08 20:58:14
permalink: /article/un7eg34t/
---

## 功能说明

代码设计中的自动补全功能（Code Autocompletion）旨在提高开发效率和代码质量。其主要目的如下：

1. $提高开发效率$：
   自动补全可以显著减少开发人员输入代码的时间。通过预测下一步的代码或语法，自动补全帮助开发人员减少手动输入，尤其在长变量名或复杂的类和函数调用时显得尤为高效。
2. $减少错误$：
   自动补全功能可以减少输入错误，如拼写错误或未定义的变量。它通过即时显示变量和函数名建议，帮助开发人员更准确地选择并调用现有代码或库，从而减少代码中的常见错误。
3. $增强可读性和一致性$：
   自动补全可以帮助开发者遵循一致的命名约定和使用标准化的库调用。这对大型项目和团队协作尤为重要，因为一致性有助于提高代码的可读性和维护性。

目前支持的自动补全的功能如下：

## snippet补全

snippet补全是vscode自带的一种补全方式，由插件和用户所提供的snippet共同组成。在本插件的snippet中补充了一些常用设计组件，如边沿提取，计数器，简单状态机模板等逻辑，触发效果如下：

如果你希望自行补充自定义的一些snippet功能，可以进行如下操作：

<!-- TODO: add-snippets -->
<center>
<video width="100%" controls>  
  <source src="/videos/add-snippets.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>


## 自动例化

你是否还在手动进行模块的例化？是否还在一个一个查看要例化的参数和端口？担心例化是缺少端口连接？针对这些问题本插件提供了自动例化功能，能帮助你快速例化你要连接的模块。只要打出你想要例化的模块名（可自动关联）就能将该模块的例化自动补充出来。使用过程如下：

<!-- TODO: auto-instance -->
<center>
<video width="100%" controls>  
  <source src="/videos/auto-instance.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

如果你不知道有哪些模块；或者想不出模块的具体名字；或者在有多个重名模块时，需要指定要例化的模块时你就需要使用快速例化来自动补全。使用流程如下：
1. 将光标放置在文本需要例化处。
2. 使用快捷键`F1`启动命令框，输入*instance*，选择`Digital-IDE: Generate instance template from selected module`命令。
   - 或者使用快捷键`Alt + I`。
   - 或者在需要例化处右击选择`Generate instance template from selected module`
3. 输入需要例化的模块的关键字（插件会自动匹配）。
4. 选择需要例化的模块，并回车。

`【注】`：在使用快捷键时，需检查是否存在快捷键键冲突。

## 原语例化
同时，在0.4.0版本之后，插件包含了`xilinx`以及`efinix`的所有原语的例化，同时给出相应的注释，再也不用到vivado中的language template里面进行复制。
<!-- TODO: prim-instance -->
<center>
<video width="100%" controls>  
  <source src="/videos/prim-instance.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>


有关自动例化的几个可以设置的参数的说明：

1. `function.lsp.completion.vlog.autoAddInclude`
    - 是否在例化模块时自动在文件开头加入include，默认为true
2. `function.lsp.completion.vlog.completeWholeInstante`
    - 是否完整地自动补全整个例化所需要的所有parameters和ports，默认为true
3. `function.instantiation.addComment`
    - 是否在例化后加入一些注释，默认为true
4. `function.instantiation.autoNetOutputDeclaration`
    - 是否在例化后自动完成所有output端口的定义，默认为true

## 关键字补全

当前关键字补全支持以下三种触发模式：
1. . 关键符触发例化模块的`端口`以及`参数`的补全
2. \` 关键符触发`宏定义`标识的补全
3. / 关键符触发include中`路径`的补全
> 目前自动补全只支持在verilog和systemverilog中例化模块里进行端口参数例化时的补全

使用方式和效果如下：
<!-- TODO: auto-completion -->
<center>
<video width="100%" controls>  
  <source src="/videos/auto-completion.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

## 后续规划

[] 支持宏定义函数补全
[] 支持sv语言的class、interface等中的 `.` 补全

