---
title: Definition Jumps
createTime: 2025/01/08 23:52:18
permalink: /en/article/3sbyyltg/
---

## Feature Description

The "Go to Definition" feature in code design is a fast navigation tool that allows developers to jump directly from a usage location to the specific definition of a variable, function, class, or other entity in the code. The primary purposes and benefits of this feature include:


1. Improved Navigation Efficiency:
   The "Go to Definition" feature helps developers quickly locate the definition of variables, functions, or classes without manually searching through the code. This is especially important in large projects, where direct navigation can significantly reduce search time.
2. Enhanced Code Understanding:
   Jumping to the definition enables developers to better understand the implementation details and functionality of the code being invoked. This is particularly useful when working with third-party libraries, modules, or code written by others.
3. Faster Debugging: 
   When encountering errors or exceptions, "Go to Definition" can quickly pinpoint the related definition, making it easier to analyze the root cause and debug the issue. This is especially useful in complex call chains, eliminating the need for manual search.
4. Support for Code Refactoring: 
   During code refactoring, "Go to Definition" helps developers quickly locate the original definition, review dependencies, and ensure compatibility of changes. This helps maintain code consistency and correctness during structural adjustments.
5. Improved Learning Efficiency: 
   The "Go to Definition" feature allows developers to quickly find the key code locations when learning a new codebase, framework, or project, speeding up the learning process. This is especially beneficial for new developers or those taking over a new project.

## Usage Instructions

There are several ways to use the "Go to Definition" feature:

1. Hold the Ctrl key (or Cmd key on Mac) and left-click the identifier to jump to the definition.
2. Select the identifier and press the `F12` shortcut key to jump.
3. Right-click the identifier and choose `Go to Definition` to jump.

Features of the "Go to Definition" function:

1. Path Jump for \`include \<path>: Supports both relative and absolute paths.
2. Macro Definition Jump for \`define: Supports "cross-file" macro definition jumps.
3. Symbol Type Jump: Currently, the following symbol types are supported for jumping:
  - signal types: `wire`, `reg`, `logic`
  - port types: `input`, `output`, `inout`
  - Param types: `parameter`, `localparam`
4. Instance-related Jump: Supports jumping to the following instance content definitions:
  - Jump to the original module definition of the instance.
  - Jump to the definition of the ports within the instance, where the ports are defined
  - Jump to the definition of the parameters within the instance, where the parameters are defined (distinct from configuration parameters).
    ```verilog
    // Definitions related to instance content
    module instModule #( 
            parameter param
        ) (
            input in,
            output out
        );  

    endmodule

    // Instance definition example:
    // Module
    instModule #(
        // .Declare Parameters (Configuration parameters)
        // Parameters are defined in the original module of the instance;
        // Configuration parameters are specific values or defined within this file.
        .param(10))
    u_instModule (  
        // .Declare Ports (Input signals)
        // Ports are defined in the original module of the instance;
        // Input signals are specific values or defined within this file.
        .in(in),
        .out(out)
    );
    ```
  
## Usage Effect:

<!-- TODO: definition-jumps -->
<center>
<video width="90%" controls>  
  <source src="/videos/definition-jumps.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>


`Note:` The "Go to Definition" functionality is closely tied to hover tips. If hover tips fail to display, it indicates that the corresponding definition could not be resolved, and the jump feature will not work. This may be due to syntax errors or unsupported features in the current version, requiring future updates. (For details on supported definitions, refer to the hover tips documentation.)