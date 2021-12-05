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

<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files js_concepts.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- js_concepts.md -->

# Entwicklung Web-basierter Anwendungen

#### Prof. Dr. Stefan Linus Zander 

Einführung in JavaScript | Wichtige Konzepte  {.lightgreen .Big .skip}


---
<!-- header: Overview -->
<!-- footer: Entwicklung Web-basierter Anwendungen | Einführung in JavaScript – Wichtige Konzepte | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->

# Outline


---
# Error Handling

::::: columns
:::: single
- __Programm defensively__ $\leadsto$ ==anticipate the things that can go wrong and handle them in your code==
  - e.g. Checking parameter types
  - e.g. Checking for `null` or `undefined`
- Surround code that can throw errors with `try / catch`
    - e.g. in node.js, an unhandled error might cause your server to shut down
- Throw `Error` objects in case of unexpected events

::: blue small centerbox BIGskip
**Error Handling is a kind of mindset**
Prepare your code for things that can go wrong & handle them nicely!
:::
::::
:::: single
```js
// NO Error Handling
const printFirstTwoLetters = (str) => { 
    const firstTwo = str.substring(0,2);
    console.log(firstTwo); // will not be executed
}
printFirstTwoLetters(5) // str.substring is not a function
```
```js
// WITH Error Handling
const printFirstTwoLetters = (str) => {
    "use strict";
    try {
        if (typeof str !== "string") 
            throw new Error("Parameter is not a String");
        if (str.length < 2)
            throw new Error("String is less than 2 chars");
        const firstTwo = str.substring(0,2);
        console.log(firstTwo);
    } catch (err) {
        console.log(err)
    }
}
printFirstTwoLetters(5) // Parameter is not a String
printFirstTwoLetters("5") // String is less than 2 chars
```
::::
:::::



---
# ES6 Syntax

::: footnotes
Source: https://www.youtube.com/watch?v=a00NRSFgHsY
:::