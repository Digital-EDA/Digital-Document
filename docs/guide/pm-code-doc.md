---
title: 文档化
createTime: 2025/01/08 20:58:14
permalink: /article/c6cg05hm/
---

## 代码文档化

<center>
<video width="90%" controls>  
  <source src="/videos/code2doc.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

自动文档化目前只支持verilog，并且支持wavedrom可视化，还支持如下三种导出格式：

- markdown
- html
- pdf

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

如果需要导出pdf，请将你本机的Google Chrome或者Edge浏览器的启动路径填入参数**markdown-pdf executable path**中。由于大部分pdf阅读器都不支持变色背景，请在浅色主题下导出你的pdf：

> windows 11 中，Edge的默认启动路径为 `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`

<center>
<video width="90%" controls>  
  <source src="/videos/exportpdf.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

---
