---
marp: true
theme: custom-theme-roboto
paginate: true
---
<style>
/**
 * @theme enable-all-auto-scaling
 * @auto-scaling true
 */

/* @import 'default'; */
/* @import url('user-theme2.css'); */



</style>

<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files js_functions.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- js_functions.md -->

# Entwicklung Web-basierter Anwendungen

#### Prof. Dr. Stefan Linus Zander 

Einführung in JavaScript | Functions  {.lightgreen .Big .skip}


---
<!-- header: Überblick -->
<!-- footer: Entwicklung Web-basierter Anwendungen | Einführung in JavaScript – Funktionen | Prof. Dr. Stefan Zander-->

# Outline


---
# Foundational Concepts

Functions in JS are "First-Class Citizens"
- "you can do with functions anything you can do with objects"

Functions have a special internal property called `[[Call]]` that objects don't have
- the `[[Call]]` internal property is unique to functions and indicates that the object can be executed 
- this property is not accessible via code but rather defines the behaviour of code as it executes
- JS defines multiple internal properties for objects (indicated by the `[[...]]` double bracket notation)
- Because functions are objects, they behave differently than functions in other languages, and this behavior is central to a good understanding of JavaScript. 