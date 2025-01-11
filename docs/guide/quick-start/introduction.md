---
title: 介绍
createTime: 2025/01/08 20:58:14
permalink: /article/cxnqr517/
---

<div align="center">
<img src="/icon.png"/>

## <code>Digital IDE</code> | All in one <code>vscode</code> plugin for Verilog/VHDL development

[Document (New)](https://nc-ai.cn/en) | [中文文档 (New)](https://nc-ai.cn) | [Bilibili Video](https://www.bilibili.com/video/BV1t14y1179V/?spm_id_from=333.999.0.0)

</div>

<br>

Digital IDE (简称为 DIDE) 是一个给数字开发工作者提供的友好便捷的自研开发工具。DIDE 可以运行在常规的所有平台上（Windows，Linux，MacOS）上。对于常年使用 ssh 连接内网服务器工作的工程师， DIDE 也能支持远程开发状态下的各项功能支持。

我们致力于文件结构即工程结构的开发思想，并借助规范的、简化的、可视的工程管理系统、IP管理系统以及丰富的辅助组件，帮助下游的开发者能够满足研发过程中敏捷开发、验证以及团队协作等需求。对于上游，帮助FPGA原厂降低软件开发生态的扩展和维护成本。

我们的 Github 仓库 👇
<detail-url
    href="https://github.com/Digital-EDA/Digital-IDE"
    logo="github"
    title="Digital IDE"
    desc="All in one vscode plugin for HDL development"
></detail-url>


## 前言

- 安装地址 [插件市场](https://marketplace.visualstudio.com/items?itemName=sterben.fpga-support)。
- 如有问题的话欢迎在 [issues](https://github.com/Bestduan/Digital-IDE/issues)上发表。
- 喜欢的话请给个 [star](https://github.com/Bestduan/Digital-IDE)吧。
- 邮箱： sterben.nitcloud@gmail.com | zhelonghuang@mail.ustc.edu.cn

- QQ群： 932987873

在使用过程中遇到问题的可以进QQ群与管理联系，在群里看到即回复。

## 更新内容

### 工程管理功能更新
1. 一键快速仿真，选中需要仿真的模块，点击仿真按键，直接调用独立仿真工具（如iverilog）进行仿真；

2. 一键综合设计，选中需要综合的模块，点击综合生成网表，并在netlist view中进行渲染；
3. 顶层模块定义，右击所需要设置为顶层的模块，选择设置为顶层（设计顶层或者仿真顶层）；
4. 导出模块依赖，右击所需要导出为顶层的模块，选择导出，导出一个`flielist.f`文件；
5. 提高渲染稳定，修复当前已知bug，将结构树渲染作为后端debug的工具；
6. 新增将标准xilinx文件结构转换成插件的标准文件结构；
7. 修复用户库路径无法导入的问题；
8. 完善Generate instance，同时支持命令框选择和自动补全支持；
9. 完善Fast Simulate，修复已知快速仿真的bug；
10. 去除了所有可能会删除文件的功能；
11. 去除了生成testbench模板的功能；
12. 新增对易灵思FPGA开发环境的支持。

### 语言服务功能更新
1. 修复port表格description列混乱问题，github #78 #77；
2. 去除了本地default的语法诊断功能。

### 波形渲染功能更新
1. ToolBar支持 （支持搜索，缩放，定位，标记）；

2. 支持模拟形式的波形渲染 （折线渲染，阶梯渲染）；
3. 新增波形拖动，并支持分组功能；
4. 新增多种波形数据格式显示（二进制，八进制，十进制，十六进制，标准浮点数）；
5. 新增波形多选删除的功能；
6. 新增波形保存功能；
7. 新增相对时间计算的功能；
8. 修复了0s处无法锁定的bug。


## 关于反馈

首先感谢您的使用与反馈，首先如果您有关于此插件更好的想法在知乎和github下均可发表，但如果是使用中出现的问题请移步至[Github](https://github.com/Bestduan/Digital-IDE/issues)发表，请勿在知乎下发表，感谢您的配合。

此外，在提出issues的时候，请详细说明您所遇到的问题，重点包含以下部分
<Card title="一个 Smart 的提问格式" icon="https://picx.zhimg.com/80/v2-d6eb33d06a512edcad625af79d5da7a4_1440w.png">

- dide 版本

- 运行环境
- vscode 版本
- 报错信息 (来源：vscode本身以及Toggle Developer Tool)  
- 具体问题，以及出现的原因
- 如果是特殊情况请粘贴源码 (为了更好的能复现问题)
- 截图展示（截图尽量截全，结构树和文件结构都是重要信息）

</Card>



:::info 提示
本插件所有功能与设计均为自研，旨在做出自己的规范、定义和特色，故不会参考（抄）其余任何同质插件的任何功能，来做一样的功能。因此对于issues中要求复刻其他同质插件的需求均不会给予支持。
:::