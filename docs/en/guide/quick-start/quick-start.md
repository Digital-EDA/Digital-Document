---
title: Quick Start
createTime: 2025/01/08 23:52:18
permalink: /en/article/jaacqlp8/
---
## Plugin Launch

Plugin launch involves two modes:

1. Single File Launch: This occurs when VSCode only opens a single file.
2. Folder Launch: This occurs when VSCode opens an entire project folder.

### Single File Launch

In single-file mode, only the most basic language services are enabled:
- Hover tips
- Jump to definition
- Autocomplete (limited to the current file)
- Code formatting
- Syntax highlighting
- Code outline
- Code diagnostics
- Code documentation

Other features, such as simulation and structure tree, are not available.

### Folder Launch

In folder mode, when the plugin is started, it will search for the configuration file `property.json` in the `.vscode` folder at the root of the opened directory. If not found, it will prompt you to configure property.json and will also scan all HDL files in the current folder for analysis. Only in folder mode can all plugin functionalities be used.

> Note: The plugin cannot be used during the analysis phase, and using the plugin will still result in the error "command not found." Currently, this separation has not been implemented. It is recommended to configure the property file in a timely manner and adopt the standard file structure. Global HDL file parsing may consume significant CPU resources, causing lag during use.

Once the analysis is complete, the plugin can be used.

To help users get started quickly, this project provides a test template project: [DIDEtemp](https://github.com/Digital-EDA/DIDEtemp).

## Configuration File Explanation

This plugin defines the project configuration file as `property.json`, which is placed only in the `.vscode` folder. The configuration file can be generated in the following ways:

- Use the shortcut `F1` to open the command box, then enter *Digital-IDE:Generate property.json* to generate the initial `property.json` template file. The generated configuration file will be placed directly in the `.vscode` folder.

- If you have your own template, you can use *Digital-IDE:Overwrite property.json template* to customize the template file. Starting from version 0.4.0, user settings and configurations will be added to the cache and will not be updated with the plugin.

> Note: If you are using a configuration file from version 0.3.0 or earlier, you can enter *Digital-IDE: Transform configure file from previous version* to new version to update the configuration file. Additionally, starting from version 0.3.0, the plugin will automatically ask users whether to create `property.json` each time it is started.

For the cache directory design:

By default, the cache directory is located under `~/.digital-ide/`, and this is the same for both Windows and Linux systems.

:::info
Special note: If the user has set the `$HOME` environment variable, the cache directory will be placed under `$HOME/.digital-ide/`. Therefore, it is important to check your environment variables before installing the plugin to ensure they are correctly configured.

Priority order:

- $HOME environment variable
- $USERPROFILE environment variable
System-recognized HOME path
:::

**Test Template Project Video**

@[artPlayer](/videos/project.mp4)