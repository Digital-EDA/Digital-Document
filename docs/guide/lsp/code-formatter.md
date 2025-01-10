---
title: 代码格式化
createTime: 2025/01/08 20:58:14
permalink: /article/slz63nid/
---

## 功能说明

@[artPlayer](/videos/lsp/format-common.mp4)

可以对选中的字符或者全文进行文档的格式化 vscode自带快捷键打开方式：`shift + alt + f`。支持verilog和VHDL。
相关设置(setting)说明:
- verilog and systemverilog
1. `function.lsp.formatter.vlog.default.style`
    - verilog 和 systemverilog格式化类型，支持三种类型 `kr`、`ansi`、`gun`
2. `function.lsp.formatter.vlog.default.args`
    - 其他参数输入，vlog的格式化使用的是istyle的webassembly因此要输入的参数请参考istyle
    > 由于该功能是基于istyle来实现的因此对全文格式化依旧不是很完善，建议选中always语句块来进行格式化，后期会持续修复相关问题。

```bash
# vlog格式化其余所有参数为：
# -s 指定缩进时的空格数量，-s2表示每次缩进使用2个空格（如果是-s4则表示每次用4个空格缩进）。
# -p 选项指定在运算符两侧插入空格。
# -P 选项指定在运算符和括号周围插入空格。
```

istyle的格式化类型效果如下所示：
### ANSI style
```verilog
// ANSI style
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
    - 是否需要对齐注释
2. `function.lsp.formatter.vhdl.default.indentation`
    - tab所对应的空格数量

## TODO

- [ ] 参数化