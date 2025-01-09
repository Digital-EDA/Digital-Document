---
title: Syntax Diagnosis
createTime: 2025/01/08 23:52:18
permalink: /en/article/aoy1t6x4/
---

## Syntax Diagnosis

We provide different code diagnostic tools for Verilog, VHDL, and SystemVerilog.

Currently supported third-party linters include:

1. iverilog (Verilog only)
2. modelsim (SystemVerilog + VHDL, mixed)
3. vivado (SystemVerilog + VHDL, mixed)
4. verible (Verilog only)
5. verilator (Verilog only)

<!-- TODO: linter.run -->
<center>
<video width="90%" controls>  
  <source src="/videos/linter.run.mp4" type="video/mp4">  
  您的浏览器不支持视频标签。  
</video>
</center>

## Switching Diagnostic Tools (Linters)

*$Method 1: Click Status Bar Item$*

Click the status bar item in the lower-right corner of the image above. A selection box will appear at the top of the window. Choose the desired linter. Available linters will have a lightbulb icon and the description "[xxx is ready]"; unavailable linters will have a warning icon and the label "[xxx is currently unavailable]".

*$Method 2: Configure in Settings$*

Search for {hdl language id} linter in the settings, find the corresponding tab, and click to select. If an unavailable linter is selected, the status bar item for the linter in the lower-right corner will turn yellow, warning the user that the current setting is incorrect.

> Note: The options in Method 1 and Method 2 are linked. Modifying one will also cause changes in rendering and internal values of the other.


## Linter Configuration
###  Linter Online Configuration
If an offline linter is selected, as shown in the image, when the user selects `verible` (which is currently unavailable), a popup will appear asking the user:

<!-- TODO: linter-win + linter-loss -->
<center class="half">
    <img src="linter-win" width="200"/>
    <img src="linter-loss" width="200"/>
</center>

Clicking on the configuration installation directory will redirect to the settings page, where the absolute path of the installation directory should be entered:

<!-- TODO: linter-path -->
<center class="half">
    <img src="linter-path" width="200"/>
</center>


In the output below, the backend has correctly recognized the valid workload. As shown, the workload is the absolute path of a valid executable file. At this point, `verible` is online.

<!-- TODO: linter-setting-success -->
<center class="half">
    <img src="linter-setting-success" width="200"/>
</center>

`Note:` For some linters, the pop-up window above not only provides a button to jump to the 【Configure Installation Directory】 but also a button on the left labeled [Download {Linter ID}]. Clicking this will automatically complete the download and path configuration. However, it's important to note that this button is only available for certain linters on specific platforms. We are not responsible for the download source.

### Modifying Diagnostic Level
Some linters, such as Verilator, may report warnings that can be annoying. In such cases, you can open the settings and find the following options:

- error: Only display errors
- warning: Display errors and warnings

The display effect is as follows:

<!-- TODO: linter-error/warning-mode -->
<center class="half">
    <img src="linter-error-mode" width="200"/>
    <img src="linter-warning-mode" width="200"/>
</center>

### Modify Diagnostic Mode
To modify the diagnostic mode, search for `linter mode` in the `Settings`, as shown in the image below:

<!-- TODO: linter-mode -->
<center class="half">
    <img src="linter-mode" width="200"/>
</center>

Select the appropriate diagnostic mode:

- Full: Diagnose all design sources directly and report errors, regardless of whether the file is open.
- Common: When a single file is closed, corresponding errors are removed. Only the file that is open will be diagnosed.
- Shutdown: Disable global diagnostics, meaning no project-level errors will be reported (focus on coding).