---
title: 定义跳转
createTime: 2025/01/08 20:58:14
permalink: /article/90x49t8x/
---

## 功能说明

代码设计中的“定义跳转”（Definition Jump 或 Go to Definition）功能是一种快速导航工具，允许用户快速在编辑器中跳转到对应变量的定义的位置上。比如点击例化模块，跳转到对应模块申明的地方。

@[artPlayer](/videos/lsp/definition-common.mp4)


## 触发方式

触发定义跳转的使用方式有以下几种：
1. 按住 ctrl 键（MAC cmd键），再鼠标左击标识符，便可进行跳转（最常用）。
2. 选中标识符，按 `F12` 快捷键便可跳转。
3. 选中标识符，鼠标右击，选则 `Go to Definition` ，便可进行跳转。

## 特性支持

### DF.1 `include

DIDE 支持 <code>`include "path" </code> 的path跳转，支持相对路径和绝对路径；

### DF.2 `define

DIDE 支持 \`define 的宏定义跳转，并结合 DF.1 支持`跨文件的宏定义跳转`；

### DF.3 common symbol

DIDE 支持限定的 symbol 的跳转，当前支持的跳转类型如下：

- signal类型：wire | reg | logic
- port类型：input | output | inout
- param类型：parameter | localparam

### DF.4 instance

DIDE 针对instance内容的跳转，具体支持的跳转类型如下：

- instance原定义的模块进行跳转，跳转到instance内容原定义的模块处；
- instance下ports内容的定义跳转，和接入信号不同，是跳转到声明端口的定义处；
- instance下params内容的定义跳转，和配置参数不同，是跳转到声明参数的定义处。


:::info
定义的跳转和悬停提示是挂钩的，如果悬停提示都无法生效则代表无法解析到该定义，跳转一定无法运行；可能有相应语法错误，或者当前不支持，需要后续补充（具体支持哪些定义，详见悬停提示的介绍页）。
:::