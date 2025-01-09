---
title: Introduction
createTime: 2025/01/08 23:52:18
permalink: /en/article/c2mce3m0/
---

<div align="center">
<img src="/icon.png"/>

## <code>Digital IDE</code> | All in one <code>vscode</code> plugin for Verilog/VHDL development

[Document (New)](https://sterben.nitcloud.cn/) | [中文文档 (New)](https://sterben.nitcloud.cn/zh/) | [Bilibili Video](https://www.bilibili.com/video/BV1t14y1179V/?spm_id_from=333.999.0.0)

</div>

Digital IDE (dide for short) is a user-friendly and efficient development tool designed for digital developers. We are committed to the development concept where the file structure corresponds directly to the project structure. With a standardized, simplified, and visualized project management system, IP management system, and a variety of auxiliary components, we help downstream developers meet the requirements of agile development, verification, and team collaboration during the R&D process. For upstream, we assist FPGA vendors in reducing the cost of expanding and maintaining their software development ecosystems.


Our github repo 👇
<detail-url
    href="https://github.com/Digital-EDA/Digital-IDE"
    logo="github"
    title="Digital IDE"
    desc="All in one vscode plugin for HDL development"
></detail-url>


## Preface

- [Installation](https://marketplace.visualstudio.com/items?itemName=sterben.fpga-support)

- If you have any questions, please leave a message on the [issues](https://github.com/Bestduan/Digital-IDE/issues)
- If you like it, please give it a [star](https://github.com/Bestduan/Digital-IDE)
- email: sterben.nitcloud@gmail.com | zhelonghuang@mail.ustc.edu.cn

- QQ group: 932987873

If you encounter any issues during use, feel free to contact the administrators in the QQ group. Responses will be provided as soon as possible.

## Changelog

### Project Management Updates
1. One-Click Simulation: Select the module to be simulated and click the simulation button to directly invoke independent simulation tools (e.g., Icarus Verilog).

2. One-Click Synthesis: Select the module to be synthesized, click the synthesis button to generate a netlist, and render it in the netlist view.
3. Top-Level Module Definition: Right-click the module to be set as the top-level, and choose to set it as the design or simulation top-level.
4. Export Module Dependencies: Right-click the module to export, and choose to export it as a `filelist.f` file.
5. Improved Rendering Stability: Fixed known bugs and enhanced the structure tree rendering for backend debugging.
6. Support for Xilinx File Structures: Added functionality to convert standard Xilinx file structures into the plugin’s standard file structure.
7. User Library Path Issue Resolved: Fixed the issue preventing user library paths from being imported.
8. Enhanced Instance Generation: Added support for command-line selection and autocomplete.
9. Improved Fast Simulation: Fixed known bugs in the fast simulation feature.
10. File Deletion Features Removed: Eliminated all functionalities that might delete files.
11. Testbench Template Generation Removed: Removed the feature for generating testbench templates.
12. Support for Efinix FPGA Development Environment: Added compatibility for Efinix FPGA development tools.

### Language Service Updates
1. Port Table Description Fix: Resolved the disordered description column issue (GitHub #78, #77).

2. Default Syntax Diagnostics Removed: Removed the local default syntax diagnostic feature.

### Waveform Rendering Updates
1. ToolBar Support: Added toolbar features for search, zoom, positioning, and marking.

2. Simulation Waveform Rendering: Supports line and step waveform rendering.
3. Waveform Drag and Grouping: Added drag-and-drop functionality with grouping support.
4. Enhanced Data Format Display: Added support for binary, octal, decimal, hexadecimal, and standard floating-point formats.
5. Waveform Multi-Select Deletion: Enabled the deletion of multiple waveforms simultaneously.
6. Waveform Save Feature: Added functionality to save waveforms.
7. Relative Time Calculation: Added support for relative time calculations.
8. Zero-Second Lock Bug Fix: Fixed the bug preventing locking at 0s.

## About Feedback

First of all, thank you for your use and feedback. Any better ideas about this plugin can be published under both Zhihu and github, if it is the use of the problem please move to [github](https://github.com/Bestduan/Digital-IDE/issues) instead of Zhihu. Thank you for your cooperation.

In addition, when posting an issue, please provide a detailed description of the problem you are experiencing, focusing on the following sections
- Operating environment

- Version used
- Error message (source: vscode itself and Toggle Developer Tool)
- The specific problem and the reason for it
- Please paste the source code if it is a special case (to better reproduce the problem)

- Please show as many screenshots as possible

Thank you for using and providing feedback! If you have suggestions for improvement, feel free to post them on Zhihu or GitHub. However, for issues encountered during use, please post them on [Github](https://github.com/Bestduan/Digital-IDE/issues) instead of Zhihu. Your cooperation is appreciated.

When submitting an issue, please include the following details:

<Card title="A Smart question format" icon="https://picx.zhimg.com/80/v2-d6eb33d06a512edcad625af79d5da7a4_1440w.png">

- Plugin version

- Operating environment
- vscode version
- Error messages (from VS Code itself and the Toggle Developer Tools console)
- Detailed description of the problem and its cause
- Source code (if applicable, for better reproducibility)
- Screenshots (include as much context as possible, such as the structure tree and file structure)
</Card>

:::info
All features and designs of this plugin are independently developed, with a focus on establishing our own standards, definitions, and characteristics. As such, requests to replicate features from other similar plugins will not be supported.
:::