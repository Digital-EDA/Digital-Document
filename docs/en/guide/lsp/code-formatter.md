---
title: Code Formatter
createTime: 2025/01/08 23:52:18
permalink: /en/article/ix69vkfm/
---

## Code Formatter

<center>
<video width="90%" controls>  
  <source src="/videos/2.3.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>


The selected text or the entire document can be formatted using the built-in VS Code shortcut: `Shift + Alt + F`. This feature supports verilog and VHDL.

Related setting description:
- verilog and systemverilog
1. `function.lsp.formatter.vlog.default.style`
    - verilog and Systemverilog formatting types, supporting three types `kr`, `ansi`, `gun`
2. `function.lsp.formatter.vlog.default.args`
    - Other parameter inputs and vlog formatting use istyle's webassembly, so please refer to istyle for the parameters to be entered.
    > This function is based on istyle to achieve, so the full-text formatting is still not perfect, it is recommended to check the always statement block to format, and later will continue to fix related problems.

```bash
# Additional parameters for vlog formatting:
# -s Specifies the number of spaces for indentation, e.g., -s2 means using 2 spaces per indentation level (or -s4 for 4 spaces).
# -p Adds spaces around operators.
# -P Adds spaces around both operators and parentheses.
```

Effects of istyle Formatting Types:

### ANSI style
```verilog
// ANSI style
reg [3:0] cnt;
always @(posedge clk or posedge rst)
begin
    if (rst)
    begin
        cnt <= 4'h0;
    end
    else
    begin
        cnt <= cnt + 4'h1;
    end
end
```

### KR style
```verilog
// KR style
reg [3:0] cnt;
always @(posedge clk or posedge rst) begin
    if(rst) begin
        cnt<=4'h0;
    end
    else begin
        cnt<=cnt+4'h1;
    end
end
```

### GNU style
```verilog
// GNU style
reg [3:0] cnt;
always @(posedge clk or posedge rst)
  begin
    if(rst)
      begin
        cnt<=4'h0;
      end
    else
      begin
        cnt<=cnt+4'h1;
      end
  end
```

- vhdl
1. `function.lsp.formatter.vhdl.default.align-comments`
    - whether need to align comments
2. `function.lsp.formatter.vhdl.default.indentation`
    - the number of spaces corresponding to the tab