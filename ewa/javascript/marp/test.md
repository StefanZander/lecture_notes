---
theme: custom-theme-roboto
paginate: true
---

<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files js_functions.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- test.md -->

# Entwicklung Web-basierter Anwendungen

#### Prof. Dr. Stefan Linus Zander 

Einführung in JavaScript | Functions  {.lightgreen .Big .skip}



---
# Outline

- The Special Role of Functions in JavaScript
- Function Declaration versus Function Expression
- Hoisting
- Function Types
  - Constructor Functions
  - Self-Invoking Functions
  - Arrow Functions
- Working with Functions
  - Assigning a Function to a Variable
  - Adding a Function to an Object
  - Passing Functions to other Functions as Arguments
  - Returning a Function from a Function
  - Parameters in Functions



---
# Das ist ein Test zu Fußnoten

Hier kommt gewöhnlicher Text^1^ in den verschiedene Fußnoten ^2^ eingebaut sind^3^ [ist hier der Fussnotentext].

Vielleicht habe ich das nur falsch dargestellt

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like. 

::: footnotes
^1^ hier steht die erste Fussnote
:::