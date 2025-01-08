---
title: 语法诊断
createTime: 2025/01/08 20:58:14
permalink: /article/wux1dorv/
---

## 语法诊断

我们为 verilog, vhdl, systemverilog 提供了不同的代码诊断器。

目前支持的三方linter有：
1. iverilog  (verilog only)
2. modelsim （sv + vhdl,mixed）
3. vivado   （sv + vhdl,mixed）
4. verible   (verilog only)
5. verilator (verilog only)

<!-- TODO: linter.run -->
<center>
<video width="90%" controls>  
  <source src="/videos/linter.run.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

## 更换诊断器

*$方法一：点击 Status Bar Item$*

点击上图右下角的 status bar item，此时窗体上面会出现一个选择框，选择需要的诊断器即可。可用的诊断器会有灯泡的图标，并写上 【xxx 已经准备就绪】 的描述；不可用的诊断器会有警告的图标，并写上 【xxx 目前不可用】的标记。

*$方法二：在设置中配置$*

在设置中搜索 {hdl 语言 id} linter，找到对应选项卡，点击选择即可。如果点击选中了不可用的诊断器，右下角显示的诊断器 status bar item 会变成黄色，警告用户当前设置异常。

> 【注】：方法一和方法二的选项是相互绑定的，修改其中一个，另一个也会发生渲染和内部值上的变化。

## 诊断器配置

### 配置上线
如果选择了不在线的诊断器，如图。当用户选择了`verible`，因为显示目前不可用，所以此时会跳出一个弹窗，询问用户：

<!-- TODO: linter-win + linter-loss -->
<center class="half">
    <img src="linter-win" width="200"/>
    <img src="linter-loss" width="200"/>
</center>

点击配置安装目录，就会跳转到设置界面，填入安装目录的绝对路径：

<!-- TODO: linter-path -->
<center class="half">
    <img src="linter-path" width="200"/>
</center>


下方的 output 中后端已经正确识别到了有效的工作负载，可以看到，工作负载是一个有效的可执行文件的绝对路径。此时`verible`上线。

<!-- TODO: linter-setting-success -->
<center class="half">
    <img src="linter-setting-success" width="200"/>
</center>

> 【注】：对于部分诊断器，上面的这个弹窗除了提供一个跳转到【配置安装目录】的按钮，还会在它的左边提供一个【下载{诊断器ID}】的按钮，点击它会自动完成下载和路径的配置，但是需要注意，只有部分平台的部分诊断器会提供这个按钮，下载源我们不负任何责任。

### 修改诊断等级

部分诊断器会报warning，比如 verilator，很多 warning 看着很烦人，这时候可以打开 setting，找到下面的选项：

- error: 只显示错误
- warning: 显示错误和警告

显示效果如下：

<!-- TODO: linter-error/warning-mode -->
<center class="half">
    <img src="linter-error-mode" width="200"/>
    <img src="linter-warning-mode" width="200"/>
</center>

### 修改诊断模式

修改诊断模式在`设置`中搜索 `linter mode`，如下图：

<!-- TODO: linter-mode -->
<center class="half">
    <img src="linter-mode" width="200"/>
</center>

选择适合的诊断模式：
- Full: 将所有设计源直接进行诊断，并报错，无论文件是否打开。
- Common: 单文件关闭时，对应报错去除，打开哪个文件就对哪个文件进行诊断。
- Shutdown: 全局关闭，即整个工程都不进行工程报错。（专心code）