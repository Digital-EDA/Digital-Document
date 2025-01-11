---
title: Definition Jumps
createTime: 2025/01/08 23:52:18
permalink: /en/article/3sbyyltg/
---

## Feature Description

The "Go to Definition" feature in code design is a fast navigation tool that allows developers to jump directly from a usage location to the specific definition of a variable, function, class, or other entity in the code. The primary purposes and benefits of this feature include:

@[artPlayer](/videos/lsp/definition-common.mp4)

## Usage Instructions

There are several ways to use the "Go to Definition" feature:

1. Hold the Ctrl key (or cmd key on Mac) and left-click the identifier to jump to the definition.
2. Select the identifier and press the `F12` shortcut key to jump.
3. Right-click the identifier and choose `Go to Definition` to jump.

## Feature Support

### DF.1 `include

DIDE supports path navigation for <code>`include "path"</code>, accommodating both relative and absolute paths.

### DF.2 `define

DIDE supports macro definition navigation for \`define, and with DF.1, it enables `cross-file macro definition navigation`.

### DF.3 common symbol

DIDE supports navigation for specific symbols. The currently supported navigation types include:

- signal types: wire | reg | logic
- port types: input |output | inout
- Param types: parameter | localparam

### DF.4 instance

DIDE provides navigation for instance content, specifically supporting the following navigation types:

- Jump to the module definition of the instance, navigating to the original definition of the instantiated module.
- Jump to the definition of ports within the instance, specifically to the declaration of the ports, not the connected signals.
- Jump to the definition of parameters within the instance, specifically to the declared parameters, not the configured values.


:::info
The "Go to Definition" functionality is closely tied to hover tips. If hover tips fail to display, it indicates that the corresponding definition could not be resolved, and the jump feature will not work. This may be due to syntax errors or unsupported features in the current version, requiring future updates. (For details on supported definitions, refer to the hover tips documentation.)
:::

