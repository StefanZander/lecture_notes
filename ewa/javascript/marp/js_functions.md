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


---
# Function Delarations vs. Function Expressions

::::: columns
:::: single
**Declaration**

```js
let result = add(5, 5);

function add(num1, num2) {
  return num1 + num2;
}
```

- Function declaration are **hoisted** to the top of the context^1^
  - ie., the function name is known ahead of time  


::::
:::: single
**Expression**

```js
let add = function(num1, num2) { 
  return num1 + num2;
};
```

- Function expressions are anonymous function – ie., functions without name
- function expression can not be hoisted; they can only be referenced through the variable 
- Assign a function value to the variable `add`
- Mind the semicolon (`;`) at the end of the expression

::::
:::::

::: footnotes
^1^ the context is either the function in which the declaration occurs or the global scope

:::


---
# Function Declaration vs. Function Expression

::::: columns
:::: single
```js
// ================================================
// Function Declaration
// ================================================

// OK
var result = add(5, 5);

function add(num1, num2) {
  return num1 + num2;
}
```
::::
:::: single
```js
// ================================================
// Function Expression
// ================================================

// error!
var result = add(5, 5);

var add = function (num1, num2) {
  return num1 + num2;
};
```
::::
:::::


---
# What you can do with Functions in JavaScript

Since JavaScript has *first-class functions*, they can be used just as objects: 

::::: columns-center
:::: double
::: blue 
1. **Assign a function to a variable**
2. **Add to an object**
3. **Pass to other functions as arguments**
4. **Return them from functions** 
{.nobottommargin}
:::
::::
:::: triple red
This makes JavaScript functions incredibly powerful
::::
:::::


---
# Assigning a Function to a Variable

```js
// Example 1
function sayHi() {
  console.log("Hi!");
}

sayHi(); // outputs "Hi!" 

let say_something = sayHi;

say_something();       // outputs "Hi!"
```


```js
// Example 2
function addOne(num) {
  return num + 1; 
}

let plusOne = addOne; 

let result = plusOne(1); // outputs '2'
```

---
# Adding a Function to an Object

::::: columns
:::: single
**Methods**

- A property value of type function makes the property a **method**.
- Methods are treated the same way as properties except for they can be executed (i.e., their value is calculated).

  ```js
  var person = {
    name: "Nicholas", 
    sayName: function() {
      console.log(person.name); 
    }
  };

  person.sayName();   // outputs "Nicholas"
  ```
  ::: small green noborder
  **Think about**  
  What is the difference between `person.name` and `this.name` ? 
  :::

::::
:::: single
**The `this` Object**

- Every scope in JS has a `this` object 
- `this` represents the calling object for the function
- In the global scope, `this` represents the global object^1^

```js
function sayNameForAll() { 
  console.log(this.name);
}
let person1 = {
  name: "Nicholas", 
  sayName: sayNameForAll
};
let person2 = { 
  name: "Greg",
  sayName: sayNameForAll
};
let name = "Michael"; 
person1.sayName();  // outputs "Nicholas"
person2.sayName();  // outputs "Greg"
sayNameForAll();    // outputs "Michael"
```
::::
:::::

::: footnotes
^1^ The global object is the web browser `window`
:::



---
# Returning a Function from a Function

```js
function saySomething(name) {
    return function sayHello() {
        console.log("Hello, my name is ... " + name); 
        // 'this.name' does not work since it looks 
        // for the value of a 'name' property in the 
        // property to which saySomething was assigned to.
    };
}

var a = saySomething("Stefan"); // vs. var a = saySomething;

a(); // Outputs "Hello, my name is ... Stefan"
```

Fragen:
- Warum funktioniert `console.log("Hello, my name is ... " + this.name);` im obigen Beispiel nicht?
- Wie sähe der Funktionsaufruf aus, wenn stattdessen `let a = saySomething;` angegeben würde?


---
# Parameters in Functions

JS allows to pass any numbers of parameters to any functions since function parameters are stored in an array-like data structure called `arguments`.
::::: columns
:::: double
```js
function sum() {
  "use strict";
  var result = 0,
      i = 0,
      len = arguments.length;
  
  while (i < len) {
      result += arguments[i];
      i++;
  }
  return result;
}

console.log(sum(1, 2));         // 3
console.log(sum(3, 4, 5, 6));   // 18
console.log(sum(50));           // 50
console.log(sum());             // 0
```
::::
:::: single
::: blue
**Function Overloading**

Many OO-languages support function overloading (=a combination of function name plus the number and types of parameters the function expects). Since JavaScript functions can accept any numbers of parameters, they don't have signatures which means that function overloading is not possible.
:::
::::
:::::