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
<!-- header: Overview -->
<!-- footer: Entwicklung Web-basierter Anwendungen | Einführung in JavaScript – Funktionen | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->

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
<!-- header: JavaScript Functions -->
# The Special Role of Functions in JavaScript

<!-- - $\leadsto$ "you can do with functions anything you can do with objects" { .kursiv} -->
**Functions** in JavaScript are _"First-Class Elements"_ $\leadsto$ hence, anything that works with objects also works with functions! 

::::: columns-center skip
:::: double
::: bluebox big
1. **Assign a function to a variable**
2. **Add a function to an object**
3. **Pass to other functions as arguments**
4. **Return functions from functions** 
{.nobottommargin}
:::
::::
:::: double warning center 
$\Rightarrow$ This makes JavaScript functions incredibly powerful!
::::
:::::

{.skip} 

::::: columns-bottom
:::: double
::: graybox smaller
**How does this work ?**
Functions have a **special internal property** called `[[Call]]` that other objects don't have^1^
- The `[[Call]]` internal property is unique to functions and indicates that the ==object can be executed==
- This property is _not accessible_ via code but rather defines the behaviour of code as it executes
::::
:::: single
::: warning centerbox center 
Because functions are objects in JavaScript, they behave differently than functions in other languages. 
$\Rightarrow$ Understanding this behavior is central to a good understanding of JavaScript. 
:::
::::
:::::

::: footnotes
^1^ JavaScript defines multiple internal properties for objects (indicated by the `[[...]]` double bracket notation)
:::



---
# Function Delarations vs. Function Expressions

::::: columns
:::: single
::: greenbox
**Declaration** {.Big .center}

```js
let result = add(5, 5);

function add(num1, num2) {
  return num1 + num2;
}
```
<!--
- Function declaration are **hoisted** to the top of the context^1^
  - ie., the function name is known ahead of time
- Hence, such functions can be used before they are defined   -->
- Declared functions are named functions
- Hoisted at the top of the scope^1^ (=context) in which they are defined
- Used for ...
  - normal named functions that return something
  - **constructor functions** to generate reference values
:::
::::
:::: single
::: bluebox
**Expression** {.Big .center}

```js
let add = function(num1, num2) { 
  return num1 + num2;
}; // mind the semicolon ';' at the expression's end

let result = add(5, 5);
```

- Function expressions are anonymous function
- Function expression can not be hoisted; 
  - they can only be referenced through the variable 
- Used for ...
  - assignment expressions
  - function parameters (e.g. for handlers)
  - methods
  - return values of functions

:::
::::
:::::

::: footnotes
^1^ The context is either the function, in which the declaration occurs or the global scope, i.e., the `window` object
:::


---
# Hoisting

Function declarations are hoisted to the top of the context in which they are defined.

::::: columns
:::: single
```js
// ================================================
// Function Declaration
// ================================================

let result = add(5, 5);

function add(num1, num2) {
  return num1 + num2;
}
```
::: center Skip Big greenbox centerbox
:fas-circle-check: OK
:::
::::
:::: single
```js
// ================================================
// Function Expression
// ================================================

let result = add(5, 5);

let add = function (num1, num2) {
  return num1 + num2;
};
```
::: center Skip Big warning centerbox
:fas-circle-exclamation: Error
:::
::::
:::::



---
<!-- header: Function Types -->
# Function Types


---
# Constructor Functions

::::: columns
:::: single
- Functions invoked with `new` are called **Constructor Functions**
- Constructor functions ...
  - *define* ==reference types== 
  - *return* a newly created ==reference value==
- The _default return type_ is the new reference value (=instance of an reference type)
- The instantiation process can be manipulated by explicitly specifying the _return value_ of a constructor function
- Constructor function should be named using the _camel-case notation_
::::
:::: single
<!-- **Example** -->
```js
function Person(firstname, lastname, birthyear) {
    "use strict";
    this._firstname = firstname;
    this._lastname = lastname;
    this.age = new Date().getFullYear() - birthyear;
    
    this.sayName = function() {
        console.log(
          "My name is " + 
          this._firstname + " " + 
          this._lastname);
    }
}

// Usage
let p = new Person("Hans", "Haas", 1919);
p.sayName(); // My name is Hans Haas
```
::::
:::::



---
# Self-Invoking Functions

::::: columns-center
:::: single
- Function expressions can be made =="self-invoking"==
- aka ==Immediately Invoked Function Expression (IIFE)==
- A self-invoking expression is started _automatically_ without being called and will be removed immediately when finished 
- IIFE create a ==local scope== for variables and the function
  - i.e., they a not visible globally
  - no mismatch with identically named variables among scripts
- Function expressions will _execute automatically_ if the expression is followed by `()`
- A function declaration cannot be self-invoked
- Parentheses `()` around the function indicate that it is a function expression
::::
:::: single
**Example #1**
```js
(function () {
  let x = "Hello World";  // I will invoke myself
  console.log(x);
})();
```

**Example #2**
```html
<!DOCTYPE html>
<html>
<body>
<p>Functions can be invoked automatically without being called</p>
<p id="demo"></p>
<script>
(function () {
  document.getElementById("demo").textContent = 
    "Hello! I called myself";
})();
</script>
</body>
</html>
```
::::
:::::

::: footnotes
^1^ Please note: Anonymous functions are bound to a variable wherefore they are technically not anonymous; IIFE in contrast require more brackets but are technically indeed anonymous.

^2^ Source: https://www.mediaevent.de/javascript/self-executing-functions.html
:::



--- 
# Alternative Notations for Self-Invoking Functions

Three common notations exists for Self-Invoking Functions^1^

```js
// Crockford's preference - parens on the inside
(function() {
  console.log('Welcome to the Internet. Please follow me.');
} () );

//The OPs example, parentheses on the outside
(function() {
  console.log('Welcome to the Internet. Please follow me.');
}) ();

//Using the exclamation mark operator
//https://stackoverflow.com/a/5654929/1175496
!function() {
  console.log('Welcome to the Internet. Please follow me.');
}();
```

::: footnotes
^1^ Spaces have been added for reasons of readability and comprehensibility.
:::



---
## When to use Immediately Invoked Function Expressions (1/2)

::::: columns
:::: single
**Abgrenzung des Gültigkeitsbereichs (Scope Isolation):**

IIFE ermöglichen die Schaffung eines eigenen Gültigkeitsbereichs für Variablen. Dadurch werden Konflikte mit globalen Variablen vermieden und verhindert, dass Variablen in anderen Teilen des Codes versehentlich überschrieben werden.
```javascript
(function() {
  // Gültigkeitsbereich ist auf die IIFE begrenzt
  var localVar = 'Nur in der IIFE sichtbar';
  console.log(localVar);
})();
```
::::
:::: single
**Modulare Programmierung**

IIFE sind nützlich, um Module zu erstellen und zu verhindern, dass Variablen oder Funktionen in den globalen Bereich durchsickern. Dies fördert das Konzept der modularen Programmierung.
```javascript

var myModule = (function() {
  var privateVar = 'Geheime Variable';

  function privateFunction() {
    console.log('Geheime Funktion');
  }

  return {
    publicVar: 'Öffentliche Variable',
    publicFunction: function() {
      console.log('Öffentliche Funktion');
    }
  };
})();

console.log(myModule.publicVar); // Öffentliche Variable
myModule.publicFunction(); // Öffentliche Funktion
```
::::
:::::


---
## When to use Immediately Invoked Function Expressions (2/2)

::::: columns
:::: single
**3. Vermeidung von Namenskonflikten**

IIFE helfen dabei, Namenskonflikte zu vermeiden, indem sie sicherstellen, dass Variablen und Funktionen nur in dem Kontext existieren, in dem sie benötigt werden.

```javascript
var myApp = myApp || {};

myApp.namespace = (function() {
  // Hier können Sie sichere Variablen und Funktionen erstellen
  // ohne den globalen Namespace zu verschmutzen
  return {
    // ...
  };
})();
```
::::
:::: single
**4. Schutz vor unbeabsichtigtem globalen Scope**

Da IIFE ihren eigenen Gültigkeitsbereich haben, helfen sie dabei, unbeabsichtigte globale Variablen zu verhindern, die potenzielle Fehler in komplexen Anwendungen verursachen könnten.

```javascript
(function() {
  // Code innerhalb der IIFE hat keinen Einfluss auf den globalen Bereich
  var localVar = 'Lokale Variable';
  console.log(localVar);
})();

console.log(typeof localVar); // undefined
```
::::
:::::

IIFE sind ein leistungsfähiges Werkzeug, um sauberen und sicheren Code in JavaScript zu schreiben, insbesondere wenn es um den Schutz des Gültigkeitsbereichs und die Vermeidung von Konflikten geht.





---
# Arrow Functions

::::: columns
:::: single
- Arrow functions are a __short syntax__ for _function expressions_
  - no `function` keyword 
  - no `return` keyword & curly brackets `{}` in single statements
  - no `()` when only one parameter is expected
- Arrow functions do _not_ have their own `this`
  - They use `this` from the _calling context_ (ie. surrounding block)
  - They are not well suited for defining object methods
- Arrow functions are _not hoisted_
  - They must be defined before they are used
- There is no `arguments` object in arrow functions

::: graybox smaller 
**Please note**
Return and the curly brackets can only be omitted if the function is a single statement. Because of this, it might be a good habit to always keep them.
:::
::::
:::: single
```js
// ES5
var x = function(x, y) {
  return x * y;
}

// ES6
const x = (x, y) => x * y;
```

```js
// Usual notation
let double = function (num) {
   return num * 2;
}

// Shortest possible notation
let double = num => num * 2; 

// Recommended notation
let double = (num) => { return num * 2; }
```

<!-- 
```js
const x = (x, y) => { return x * y };
``` 
-->

::::
:::::

::: footnotes
Source: https://www.mediaevent.de/javascript/arrow-function.html
:::



---
<!-- header: Working with Functions -->
# Working with Functions



---
# Assigning a Function to a Variable


::::: columns
:::: single
```js
// Example 1
function sayHi() {
  console.log("Hi!");
}

sayHi(); // outputs "Hi!" 

let say_something = sayHi;

say_something();       // outputs "Hi!"
```
::::
:::: single
```js
// Example 2
function addOne(num) {
  return num + 1; 
}

let plusOne = addOne; 

let result = plusOne(1); // outputs '2'
```
::::
:::: single
```js
// Example 3: Handler
function init() {
    alert("Page has been fully loaded.");
}

window.onload = init;
```
::::
:::::



---
# Adding a Function to an Object

::::: columns 
:::: single
**Methods: Executable Property Values**

- A property value of type `function` makes the property a **method**.
- Methods are treated the same way as properties except for they can be *executed* (i.e., their value is calculated).

  ```js
  let person = {
    name: "Nicholas", 
    sayName: function() {
      console.log(person.name); 
    }
  };

  person.sayName();   // outputs "Nicholas"
  ```
  ::: small greenbox 
  **Think about**  
  What is the difference between `person.name` and `this.name` ? 
  :::

::::
:::: single
**The `this` Object**

- Every *scope* in JavaScript has a `this` object 
- `this` represents the *calling object* for the function
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
## Passing Functions to other Functions as Arguments


::::: columns
:::: single
```js
// Using Functions as arguments
function calc(a, b, f) {
    return f(a,b);
}

function add(x,y) {
    return x+y;
}

function sub(x,y) {
    return x-y;
}

calc(9,4,add); 
calc(9,4,sub); 
```
::::
:::: double
```js
// Example 2
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.decode = function() { return this.firstname + " " + this.lastname; }
}

function lower() {
    return this.firstname.toLowerCase() + " " + this.lastname.toLowerCase();
}

function scribble() {
    var str = this.firstname + " " + this.lastname;
    var result = "";
    for (var i = 0; i < str.length; i++ ) {
      if (i % 2 == 0) { result = result + str.charAt(i).toUpperCase(); } 
        else { result = result + str.charAt(i).toLowerCase(); } }
    return result;
}

function dashed() {
    var str = this.firstname + " " + this.lastname;
    var result = "";
    for (var i = 0; i < str.length; i++ ) {
        if (i != this.firstname.length) { result = result + "_"; }
          else result = result + " "; }
    return result;
}

let p = new Person("Peter", "Pan");
p.decode();
p.decode = scribble;
p.decode();
```
::::
:::::



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

let a = saySomething("Stefan"); // vs. let a = saySomething;

a(); // Outputs "Hello, my name is ... Stefan"
```

Fragen:
- Warum funktioniert `console.log("Hello, my name is ... " + this.name);` im obigen Beispiel nicht?
- Wie sähe der Funktionsaufruf aus, wenn stattdessen `let a = saySomething;` angegeben würde?


---
# Parameters in Functions

JavaScript allows to pass any number of ==parameters== to functions since function parameters are stored in an _array-like data structure_ called `arguments`
::::: columns
:::: double
```js
function sum() {
  "use strict";
  let result = 0,
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
:::: single vert-top
::: bluebox 
**Function Overloading**

Many OO-languages support _function overloading_ (ie. a combination of function name plus the number and types of parameters the function expects). Since JavaScript functions can accept _any numbers of parameters_, they do not have signatures which means that ==function overloading is not possible==.
:::
::::
:::::



---
<!-- header: Summary -->
# Summary


---
# :far-lightbulb: Points to Remember

::::: columns
:::: double
- Functions in javascript are objects that have an internal `[[call]]` property 
  - Their values can be calculated
- Since functions are __first-class objects__, JavaScript allows to ...
  - assign functions to variables
  - add functions to objects
  - pass functions to other functions as arguments
  - return functions from functions
- Functions used with `new` makes them ==constructors==
  - `new` creates a new object rather than copies are reference from the original object
  - The object to be created can be controlled using the `return` statement
- Functions can be defined as ==function declarations== and ==function expressions==
- The ==arrow-notation== should be used with caution^1^ 
::::
:::: single vert-center
![](figures/brain3.png)
::::
:::::

::: footnotes
^1^ Arrow-functions behave differently compared to function declarations (e.g. `this` refers to the global scope rather than to the current object.)
:::

<!-- Sehr gute JS-Tutorial-Quelle https://www.tutorialstonight.com/js/js-objects#javascript-object-using-class -->
