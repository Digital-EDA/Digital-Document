---
title: Design Assistance
createTime: 2025/01/08 23:52:18
permalink: /en/article/0kzryk3m/
---

## Code to Doc

<center>
<video width="90%" controls>  
  <source src="/videos/code2doc.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

Auto-documentation currently only supports verilog and wavedrom visualization, and also supports the following three export formats:

- markdown
- html
- pdf


The usage of Wavedrom is as follows. It needs to be specified within block comments that Wavedrom is being used.
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

If you need to export pdf, please fill the startup path of your local Google Chrome or Edge browser into the parameter **markdown-pdf executable path**. As most pdf readers do not support color changing background, please export your pdf in light color theme:

> In windows 11, the default startup path for Edge is `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`.

<center>
<video width="90%" controls>  
  <source src="/videos/exportpdf.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

---
