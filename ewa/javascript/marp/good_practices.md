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



<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files good_practices.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- good_practices.md -->



# Entwicklung Web-basierter Anwendungen

#### Prof. Dr. Stefan Linus Zander 

Einführung in JavaScript | Good Practices  {.lightgreen .Big .skip}


---
<!-- header: Overview -->
<!-- footer: Entwicklung Web-basierter Anwendungen | Einführung in JavaScript – Good Practices | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->

# Outline

- 


---
<!-- header: TBA -->
## Pure and Impure Functions

::::: columns
:::: single
**Impure Function** :fa-thumbs-down: {.center}

```js
let counter = 0;

function increment() {
  counter++;
  return counter;
}
```

- modifies a (global) variable outside of its scope
- considered bad practice and should be avoided

::: graybox smaller
**How to create pure functions in JavaScript?**

- Use only input arguments to perform calculations and return the result
- Avoid side effects 
- Avoid global state
- Return a value
:::
::::
:::: single
**Pure Function** :fa-thumbs-up: {.center}
```js
function increment(counter: number) {
  return counter++;
}
```

- always returns the same result for same argument values and has no side effects  
  - like modifying an argument 
  - or global variable 
  - or outputting something. 
- The only result of calling a pure function is the return value.
- Pure functions are self-contained and explicitly define all their dependencies through input parameters. 
- This characteristic enhances code readability and makes it easier to understand and reason about the function's behavior.
::::
:::::

::: footnotes
More information: https://dev.to/codeofrelevancy/you-need-to-know-about-pure-functions-impure-functions-in-javascript-57
:::



---
## Guard Clauses Technique 

A guard clause is a programming technique used to improve the readability and maintainability of code by handling special cases or conditions at the beginning of a function or method, often with an early return or an exception. The purpose of guard clauses is to check for specific conditions that would make the normal execution of the function unnecessary, and if those conditions are met, exit the function early.

::::: columns
:::: single
```js
function anyFunction() {
  if (wifi) {
    if  (login) {
      if (admin) {
        showAdminPanel();
      } else {
        console.log("no admin");
      }
    } else {
      console.log("not logged in");
    }
  } else {
    console.log("wifi not activated");
  }
}
```
::::
:::: single
```js
function anyFunction() {
  if (!wifi) { //reversed condition
    console.log("wifi not activated");
    return;
  }
  if (!login) { //reversed condition
    console.log("please log in");
    return;
  }
  if (!admin) { //reversed condition
    console.log("no admin");
    return;
  }
  // further code
}
```
::::
:::::