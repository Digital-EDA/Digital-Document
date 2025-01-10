---
title: 快速启动
createTime: 2025/01/08 20:58:14
permalink: /article/40pehd2r/
---
## 插件启动

插件启动分为两种模式：
1. 单文件启动，也即vscode只打开一个文件的情况
2. 文件夹启动，也即vscode打开一个工程文件夹

### 单文件启动

在单文件模式下只会启动最基本的语言服务功能：
- 悬停提示
- 定义跳转
- 自动补全（仅限本文件）
- 代码格式
- 代码高亮
- 代码大纲
- 代码诊断
- 代码文档

其余仿真，结构树等等功能均无法使用。

### 文件夹启动

在文件夹模式下启动时，插件会到所打开文件夹的根目录下的`.vscode`下去寻找配置文件，如果找不到会建议你配置`property.json`，同时会检索当前文件夹下所有的HDL文件，并进行分析。并且在文件夹模式下才能使用插件的所有功能。

> 注：在分析阶段也是使用不了插件功能的，此时使用插件功能依旧会有"无法找到命令"的报错，目前并未做分离。并建议及时配置属性文件，并采用标准文件结构。若全局解析HDL文件会消耗很大部分的CPU性能，导致使用卡顿。

在插件完成分析之后即可使用插件了。

为了帮助用户快速入手，本项目给出了一个测试模板工程：[DIDEtemp](https://github.com/Digital-EDA/DIDEtemp)。

## 配置文件说明

本插件定义工程配置文件为`property.json`，只放置于`.vscode`文件夹下。生成配置文件的方式如下：

- 使用快捷键`F1`呼出控制命令框，输入 *Digital-IDE:Generate property.json* 即可生成初始的 `property.json` 模板文件。生成的配置文件会直接放置于`.vscode`的文件夹下

- 如果你有属于自己的模板可以使用*Digital-IDE:Overwrite property.json template* 来自定义模板文件。自0.4.0版本之后用户的设置与配置都会被添加至缓存，不会随插件进行更新。

> 注：如果你是0.3.0之前的工程配置文件的话，可以输入*Digital-IDE: Transform configure file from previous version to new version*来进行配置文件的更新。并且在0.3.0版本后，插件每次启动都会自动询问用户是否要创建`property.json`。

对于缓存区的设计如下：

默认为： `~/.digital-ide/` 下， win 和 linux 下后一样。

:::info
特殊的，用户如果设置了 `$HOME` 的环境变量的话缓存文件夹就会被放置到 `$HOME/.digital-ide/` 下。因此在安装插件之前注意并检查自己的环境变量是否合适。

优先级：
- $HOME 环境变量
- $USERPROFILE 环境变量
系统认定的HOME路径
:::


$$测试模板工程视频$$

@[artPlayer](/videos/project.mp4)
