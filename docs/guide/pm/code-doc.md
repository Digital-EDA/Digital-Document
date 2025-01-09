---
title: 文档化
createTime: 2025/01/08 20:58:14
permalink: /article/c6cg05hm/
---

## 代码文档化

DIDE 对于项目中的 vlog 和 vhdl 等文件，支持直接查看它们的文档，点击右上角的按钮即可查看。通过文档化，你可以快速了解当前 verilog 或者 vhdl 文件中 module 的基本信息和依赖信息。依赖信息也支持跳转。

@[artPlayer](/videos/code2doc.mp4)

## wavedrom 注释

自动文档化目前支持 verilog, systemverilog 和 vhdl。并且支持 wavedrom 可视化。
wavedrom的使用方式如下，需要在块注释中注明使用的时wavedrom
```json
/*@wavedrom
{signal: [
  {name: 'clock', wave: '101010101010101010101'},
  {name: 'case1:ivalid', wave: '01...................'},
  {name: 'case2:ivalid', wave: '101010101010101010101'},
  {name: 'idata', wave: 'x4.4.4.4.4.x.........', data: ['data0','data1','data2','data3','data4']},
  {name: 'ivalid', wave: '0........1...........'},
  {name: 'odata', wave: 'x........5.5.5.5.5.x.', data: ['data0','data1','data2','data3','data4']},
]}
*/
```

## 导出你的文档

DIDE 的文档化支持如下三种导出格式：

- markdown
- html
- pdf

@[artPlayer](/videos/exportpdf.mp4)

导出的文档默认都在项目的 `./doc` 下。

如果需要导出pdf，请将你本机的Google Chrome或者Edge浏览器的启动路径填入参数**markdown-pdf executable path**中。由于大部分pdf阅读器都不支持变色背景，请在浅色主题下导出你的pdf：

:::info
如果是 Windows 11 用户，默认不需要设置浏览器路径。因为 win11 自带的 edge 路径 `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe` 是固定的。
:::
