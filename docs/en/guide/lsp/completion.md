---
title: Completion
createTime: 2025/01/08 23:52:18
permalink: /en/article/9f61qe0o/
---

## Feature Description

The auto-completion feature in code design (completion) refers to the IDE predicting and providing suggestions for completion based on user input. The types of auto-completion provided by DIDE include:

- Code snippet completion
- Keyword completion (keywords, system functions, macros)
- Automatic instantiation
- Primitive instantiation


## Snippet Completion

Code snippet completion is a built-in completion method in VS Code, composed of snippets provided by both the plugin and the user. Users can define templates for frequently used code, and VS Code will automatically add these templates to the auto-completion list based on the prefix. Unlike typical auto-completion results, snippet completion items are indicated by a hollow square icon as their prefix. For example, in the figure below, `mod`, `modp`, and `module` are all snippet completion items.

### Prepared Code Snippet

DIDE provides common templates for Verilog and VHDL. The plugin's snippets include frequently used design components, such as module declarations, edge detection, counters, simple state machine templates, and other logic elements:

@[artPlayer](/videos/lsp/completion-snippet.mp4)

### CF.1 Custom Code Snippets

If you wish to add custom snippets, you can follow these steps:

@[artPlayer](/videos/lsp/completion-user-define-snippet.mp4)

## CF.2 Automatic Instantiation

Are you still manually instantiating modules? Are you checking parameters and ports one by one? Worried about missing port connections during instantiation? To address these issues, this plugin offers an auto-instantiation feature to help you quickly instantiate the module you want to connect. Simply type the module name (auto-association is supported), and the module instantiation will be automatically completed. The usage process is as follows:

@[artPlayer](/videos/lsp/completion-common-instance.mp4)

If you're unsure about which modules are available, can't recall the exact name of a module, or need to specify which module to instantiate when multiple modules share the same name, you can use the Quick Instantiation feature to automatically complete the instantiation. The process is as follows:

1. Place the cursor at the location where the instantiation is needed in the text.
2. Press the shortcut `F1` to open the command palette, type instance, and select the command Digital-IDE: Generate instance template from selected module.
    - Alternatively, use the shortcut Alt + I.
    - Or right-click at the instantiation location and select `Generate instance template from selected module`.
3. Enter the keyword for the module you wish to instantiate (the plugin will automatically match it).
4. Select the module you want to instantiate and press Enter.

:::info
When using the shortcut keys, make sure to check for any potential shortcut key conflicts.
:::

## CF.3 Primitive Instantiation

Additionally, starting from version 0.4.0, the plugin includes instantiations for all primitives from `xilinx` and `efinix`, along with the corresponding comments, so there is no longer a need to copy from Vivado's language templates.

@[artPlayer](/videos/lsp/completion-primitive.mp4)

Here are some configurable parameters related to automatic instantiation:


| Configuration Items | Description                                                                 | Default  |
|---------------------------------------------|----------------------------------------------------------------------|---------|
| `function.lsp.completion.vlog.autoAddInclude` | Whether to automatically add `include` at the beginning of the file when instantiating a module | `true`  |
| `function.lsp.completion.vlog.completeWholeInstante` | Whether to automatically complete all `parameters` and `ports` needed for full instantiation | `true`  |
| `function.instantiation.addComment`          | Whether to add comments after instantiation | `true`  |
| `function.instantiation.autoNetOutputDeclaration` | Whether to automatically complete the definition of all `output` ports after instantiation | `true`  |

## CF.4 Keyword Completion

DIDE supports the auto-completion of all keywords, system functions, macros, etc., under the IEEE 2005 standard, along with documentation for some functions.

@[artPlayer](/videos/lsp/completion-keyword.mp4)

## CF.5 Special Characters Completion Trigger

In addition to regular characters (normal uppercase and lowercase letters), certain special characters can also trigger completion:

1. `.` triggers completion for module `ports` and `parameters` during instantiation.
2. <code>\`</code> keyword triggers completion for `macro definition` identifiers.
3. <code>/</code> triggers completion for `path` in <code>\`include</code> statements.
> Currently, completion only supports completing ports and parameters during module instantiation in Verilog and SystemVerilog. 
By simply entering characters without using <code>\`</code>, DIDE can still provide auto-completion for macros (and will automatically add the <code>\`</code> prefix).

@[artPlayer](/videos/lsp/completion-special-trigger.mp4)

## Future Plans

- [] Support for completion of **macro definition functions**
- [] Support for `.` completion within `class`, `interface`, etc., in SystemVerilog (SV)