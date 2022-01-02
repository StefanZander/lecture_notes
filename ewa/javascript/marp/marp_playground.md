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

<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files marp_playground.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- marp_playground.md -->

# MARP PLAYGROUND

#### Prof. Dr. Stefan Linus Zander 

Zum Experimentieren von Sprachfeatures und Marp-Extensions  {.lightgreen .Big .skip}


---
<!-- header: Overview -->
<!-- footer: Entwicklung Web-basierter Anwendungen | Einführung in JavaScript – Wichtige Konzepte | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->


TBA



---
# Progressive Disclosure

::::: columns
:::: single
* Modules are used to separte code into files
* Modules are self-contained units of code, stored in files

::: {data-marpit-fragment=3}
Here comes the revealed content
:::

::: {data-marpit-fragment=4}
Here comes additional content in form of a [math expression]{.red data-marpit-fragment=5}

$\mapsto$ 
:::

and further [content]{data-marpit-fragment=}

[here is addionital content,wrapped in blocks]{data-marpit-fragments=6}

::::
:::: single
::::
:::::


::: footnotes
Sources:
- https://www.freecodecamp.org/news/javascript-modules-explained-with-examples/
- https://www.freecodecamp.org/news/javascript-modules-beginners-guide/
- https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/
:::