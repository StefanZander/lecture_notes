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

<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files js_intro.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- js_intro.md -->

# Entwicklung Web-basierter Anwendungen

#### Prof. Dr. Stefan Linus Zander 

Einführung in JavaScript  {.lightgreen .Big .skip}


---
<!-- header: Überblick -->
<!-- footer: Entwicklung Web-basierter Anwendungen – Einführung in JavaScript | Prof. Dr. Stefan Zander-->

# Outline


---
# Foundational Concepts

- Object-based $$\neq$$ Object-oriented
  - before you can do anything in OO, you need to create a class
- JavaScript $$\leftrightarrow$$ Flexibility
- OO developers often get disoriented when working with JavaScript since
  - JS has no formal concept/support for classes
  - JS allows to code using the pay-as-you-go principle
- Until ECMAScript 5, JS does not have a formal concept for classes
  - Classes were introduced in ECMAScript6, but they rather serve as syntactic sugar 
- JS is an incredibly flexible language
  - You can just start coding
  - no formal class or package structure
  - Code along the pay-as-you-go principle

The biggest mistake in learning JS is to take your OO-knowledge and transfer it to JS

- JS makes Objects the central part of the language
    - All data in JS are either objects or can be accessed through objects
    - Even functions are objects
    - Objects are extremely flexible and can be modified at any time

::: warning
So, working with and understanding objects is key to understanding JavaScript as a language.
:::


--- 
# JavaScript Datatypes

<!-- JS employs two primary data types -->

::::: columns
:::: single
**Primitive Types** {.Big .red}

- Primitive types are stored as **simple data types**, ie., the variable object holds the actual value.
- Some primitive types are treated as reference types to make the language more consistent
- JS has 5 primitive types
  - **Boolean** – true or false
  - **Number** – integer or floating point number
  - **String** – character or sequence of characters
  - **Null** – a primitive type with only one value `null`
  - **Undefined** – value assigned to unitialized variables

- All primitive types have _literal representations_ of their values
- Identification: `typeof` returns type as `string`
::::
:::: single
**Reference Types** {.Big .red}

- Reference types are stored as **objects** (=references to memory locations), i.e., the variable object holds a reference to the memory location where the object data are stored.
- Reference types are the closest thing to classes in JS
- Objects are instances of reference types
- Identification: `instanceof` returns `true|false`
::::
:::::

Each variable is associated with a specific primitive or reference type


---
# Primitive Types

- A variable holding a primitive directly contains the primitive value
- Values are represented as literals and stored directly in the variable object

```js
var color1 = "red"; 
var color2 = color1;

console.log(color1); // red
console.log(color2); // red

color1 = "blue"; 

console.log(color1); // blue
console.log(color2); // red
```

Identifying Primitive Types

- the `typeof` operator can be used to identify a primitive type
  - it returns the type in form of a string

```js
console.log(typeof "Nicholas"); // "string"
console.log(typeof 10);         // "number"
console.log(typeof 5.1);        // "number"
console.log(typeof true);       // "boolean" 
console.log(typeof undefined);  // "undefined"
```


---
# Primitive Wrapper Types

::::: columns
::::double
The primitive types 
- `String`
- `Number`
- `Boolean`

have **primitive wrapper types**^1^ that allow them to be used like objects.

Primitive wrapper types are *special reference types* that are automatically created whenever one of the tree types are read. 

This proces is called ==autoboxing==.
::::
:::: triple
Examples
```js
var name = "Nicholas";
var lowercaseName = name.toLowerCase();   // convert to lowercase
var firstLetter = name.charAt(0);         // get first character
var middleOfName = name.substring(2, 5);  // get characters 2-4

var count = 10;
var fixedCount = count.toFixed(2);        // convert to "10.00"
var hexCount = count.toString(16);        // convert to "a"

var flag = true;
var stringFlag = flag.toString();         // convert to "true"

name.last = "zakas";
console.log(name.last);                   // undefined
``` 
::::
:::::

::: footnotes
^1^ Primitive wrapper types are **special reference types** for String, Number, and Boolean primitive types that allow to use them as if they were reference values without introducing a new syntax.
:::

---
# Comparisons 

- `===` Comparison without coercing the variables to another type
- `==` Comparison with type coercion 

```js
console.log("5" == 5);              // true
console.log("5" === 5);             // false

console.log(undefined == null);     // true
console.log(undefined === null);    // false
```


---
# Reference Types

- Reference types represent objects in JS and are the closest things to classes
- Reference values are instances of reference types and are synonymous with objects
- An object (=instance of a reference type) is an unordered list of properties
- A property consists of a name (always a string) and a value
- When the value of a property is a function, it is called a method
- Functions are reference values that can be executed
- Objects can be perceived as hash tables
- When you assign an object to a variable, you actually asign a pointer
  - ie., when you a asign one variable to another, the other one gets a copy of the pointer



---
# Instantiating Objects

::::: columns
:::: single
**A) Usign the `new` operator with a constructor**
  - a constructor is a function that uses `new` to create an object
  - any function can be a constructor
  - Constructors start with an upper case (capital letter) by convention to distinguish them from non-constructor functions
  
  ```js
  let book = new Object();
  book.name = "The Principles of Object-Oriented JavaScript"; 
  book.year = 2014;
  ```

::::
:::: single
**B) Using the literal form**
- Several built-in types have literal forms
- A literal allows to define a reference value without explicitly creating an object using the `new` operator and the object's constructor

```js
let book = {
  name: "The Principles of Object-Oriented JavaScript",
  year: 2014
};
```

Property names can also be represented as string literals
```js
let book = {
  "name": "The Principles of Object-Oriented JavaScript",
  "year": 2014
};
```
::::
:::::


---
# Adding and Removing Properties

Properties are name/value-pairs stored on an object

Properties can be added to and removed from objects at any time.

This allows objects to be modified whenever you want – even if you did not define them in the first place^1^.

### Accessing Properties

```js
let array = [];
array.push(12345);
```

```js
let array = [];
array["push"](12345);
```

The bracket notation allow to use variable values instead as literals to specify the property to access. Also special characters can be used in property names

```js
let array = [];
let method = "push";
array[method](12345);
```


::: footnotes
^1^ There are ways to prevent object modifications
:::



---
# Built-in Reference Types

- The `Object`-type is one generic built-in reference type
- The other built-in reference types are more specialized in their intended usage
    - `Array` – ordered list of numerically indexed values
    - `Date` – for date and time data
    - `Error` – A runtime error
    - `Function` – a function
    - `RegExp` – a regular expression  

```js
var items = new Array();
var now = new Date();
var error = new Error("Something bad happened."); 
var func = new Function("console.log('Hi');"); 
var object = new Object();
var re = new RegExp("\\d+");
```



---
# Arrays

- There is no concept of associative arrays in JS
- values in arrays will be retrieved using an index

### Array Construction

::::: columns
:::: single
a) Literal notation
```js
var colors = [ "red", "blue", "green" ]; 
console.log(colors[0]); // "red"
```
::::
:::: single
b) Array Reference Type
```js
var colors = new Array("red", "blue", "green") 
console.log(colors[0]); // "red"
```
::::
:::::


---
# Identifying Reference Types

A function is the easiest type to identify since the `typeof` operator returns `function` 

```js
function reflect(value) {
  return value;
}
console.log(typeof reflect); // "function"
```

To identify a specific type, use the `instanceof` operator or the `Array.isArray()` function

```js
var items = []; 
var object = {};

function reflect(value) {
    return value;
}

console.log(items instanceof Array);        // true
console.log(items instanceof Object);       // true
console.log(object instanceof Object);      // true
console.log(object instanceof Array);       // false
console.log(reflect instanceof Function);   // true
console.log(reflect instanceof Object);     // true

console.log(Array.isArray(items));          // true
```
