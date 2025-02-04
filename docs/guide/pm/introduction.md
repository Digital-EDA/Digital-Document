---
title: 介绍
createTime: 2025/01/08 20:58:14
permalink: /article/sgdouweb/
---

## 工程管理的意义

"工程管理"（Project Management）是一种用于组织和管理代码文件、资源和配置的功能。其主要目的是帮助开发人员更高效地组织、导航和操作项目中的各种元素。

工程管理功能通常包括:
- 项目结构管理
- 依赖项管理
- 构建和运行配置
- 版本控制等。

其意义和目的包括：

1. 提高项目组织性：工程管理提供统一的项目结构视图，将源代码、配置文件、资源文件等整齐地组织在文件树中，使得文件层次分明，易于查找和管理，避免文件混乱。
2. 简化依赖管理：IDE通常支持对项目依赖项的自动管理，例如第三方库、框架或模块的引入、更新和移除。这种集中化的管理减少了依赖项的兼容性问题，有助于项目的稳定性和可维护性。
3. 加快构建和部署流程：工程管理允许开发人员配置和执行构建脚本（如Gradle、Maven等）或运行环境，自动化构建、测试、打包和部署过程，从而显著加快开发流程并减少人工干预。
4. 支持多环境配置：工程管理使得开发人员可以定义不同的运行或构建配置（如开发、测试、生产环境），从而轻松在不同配置间切换，满足各种部署需求，提高测试和部署的灵活性。
5. 增强代码导航和重构：通过工程管理，开发者能够在项目中快速定位到文件、类或函数定义的位置，提升代码导航效率。同时，IDE的工程管理功能提供批量重构支持，确保项目结构的灵活性和一致性。
6. 便于团队协作：工程管理与版本控制系统（如Git）集成，使开发团队能够方便地管理代码分支、处理合并冲突、执行代码审查，从而提升协作效率和代码质量。
7. 提高项目可移植性：项目的结构和配置文件通过工程管理可以保持标准化，便于其他开发人员接手或迁移项目，减少项目依赖和环境配置的复杂性。

## 业务分类

工程管理主要分为以下几个业务：

1. 工程搭建类
   1. project Management (PS & PL)
   2. lib Management (IP & bd)
2. 仿真搭建类
   1. generate instance & tb file
   2. fast simulate
3. 设计辅助类
   1. [x]tree Structure
   2. [x]netlist preview
   3. [x]Code to doc
   4. [x]fsm preview
   5. [x]waveform preview
   6. []fsm designer

对于工程搭建和仿真搭建，插件都将自行构建依赖项，真的做到了一键管理的便捷性。