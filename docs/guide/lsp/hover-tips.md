---
title: 悬停提示
createTime: 2025/01/08 20:58:14
permalink: /article/xkhqu96v/
---

## 功能说明

悬停提示包含两部分的内容：
1. symbol的定义，完整定义的部分以结尾标识为止（，|；|end）；
2. symbol的注释，也即定义后的注释和定义上的注释（块注释 &行注释）。
  - 定义后注释定义为：symbol所在line所包含的注释；
  - 定义上注释定义为：symbol首个line往上所有注释，一直到有symbol为止；
  - 注释支持wavedom的渲染。
3. 例化内容的悬停提示要求如下：
  - 对于模块名的悬停提示效果为图1：也即模块定义的内容；
  - 对于模块例化名的悬停提示效果为图2：也即模块例化的内容；
  - 例化端口的悬停提示效果为图3：也即这个端口定义的内容；
  - 例化端口连线的悬停提示效果为图4：也即连到这个端口上的线定义的内容。

:::info
在定义的地方进行悬停提示时就是提示它本身。核心就是定义是最先看到的，同一行的注释是第二优先，定义上的注释优先级最低。
:::

书写示例如下：
```verilog
`define value 10
/*
*  块注释处
*/
// 行注释处
module name #( 
        // 定义上注释
        parameter DATA_WIDTH // 定义后注释
    ) (
        // 定义上注释
        input idata // 定义后注释
    );  
    
    wire wave;
    
    // 定义上注释
    // 定义上注释
    // 定义上注释
    wire out, in
         sig; // 定义后注释
    
endmodule
```

## 使用效果

<!-- TODO: hover-tips -->
<center>
<video width="90%" controls>  
  <source src="/videos/hover-tips.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>