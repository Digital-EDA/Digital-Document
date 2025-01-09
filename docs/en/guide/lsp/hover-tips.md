---
title: Hover Tips
createTime: 2025/01/08 23:52:18
permalink: /en/article/b6kpsarq/
---

## Feature Description

Hover Tooltips consist of two main components:

1. Definition of the Symbol. The complete definition of the symbol, ending with one of the following terminators: ,, ;, or end.
2. Comments Associated with the Symbol. Includes both the comments following the definition and the comments preceding it (block comments & inline comments).
  - Trailing Comments: Comments on the same line as the symbol's definition.
  - Leading Comments: All comments above the symbol's first line, stopping at the nearest symbol encountered.
  - Comments support WaveDrom rendering.
3. Hover Tooltips for Instance Content
  - Tooltip behavior for different aspects of module instantiation is as follows: Module Name: Displays the module's definition details (see Figure 1).
  - Module Instance Name: Displays details of the module instantiation (see Figure 2).
  - Instantiation Port: Displays the definition of the corresponding port (see Figure 3).
  - Wires Connected to Instantiation Ports: Displays the definition of the wire connected to the port (see Figure 4).

`Note:` Hovering over a definition location displays information about the definition itself. Definitions are given the highest priority, followed by inline comments on the same line, and finally, preceding comments have the lowest priority.


Here is an example illustrating the hover tooltip behavior for various components in a Verilog file:

## Usage Effect

```verilog
`define value 10  
/*
 * Block comment section
 */
// Inline comment section
module name #(
        // Leading comment
        parameter DATA_WIDTH // Trailing comment
    ) (
        // Leading comment
        input idata // Trailing comment
    );  
    
    wire wave;
    
    // Leading comment
    // Leading comment
    // Leading comment
    wire out, in
         sig; // Trailing comment
    
endmodule
```

<!-- TODO: hover-tips -->
<center>
<video width="90%" controls>  
  <source src="/videos/hover-tips.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>