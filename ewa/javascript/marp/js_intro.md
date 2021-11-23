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
<!-- header: Foundational Concepts -->
<!-- footer: Entwicklung Web-basierter Anwendungen | Einführung in JavaScript – Funktionen | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->

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

- Primitive types are stored as **simple data types**
  - ie., the variable object holds the actual value
- JS has 5 primitive types
  - **Boolean** – true or false
  - **Number** – integer or floating point number
  - **String** – character or sequence of characters
  - **Null** – a primitive type with only one value `null`
  - **Undefined** – value assigned to unitialized variables
- Primitive types `Boolean`, `Number`, and `String` are treated as reference types to make the language more consistent
- All primitive types have _literal representations_ of their values
- **Identification**: `typeof` returns type as `string`
::::
:::: single
**Reference Types** {.Big .red}

- Reference types are stored as **objects** 
  - i.e., the variable object holds a reference to the memory location where the object data are stored.
- Reference types in some ways resemble the class-concept of OO languages
- Instances of reference types are called **Reference Values**
- Reference types can be specified in *different notations* 
  - **Literal Form**: the reference type becomes a reference value
  - **Constructor function**: the reference type serves as *blueprint* for other reference values of the same type
- Reference types and reference values are objects in JS
- **Identification**: `instanceof` returns `true|false`
::::
:::::

::: centerbox blue
Each variable in JavaScript is associated with a specific primitive or reference type
:::

---
# Primitive Types

::::: columns
:::: single
**A) Defining Primitive Types**

- A variable holding a primitive directly contains the primitive value
- Values are represented as literals and stored directly in the variable object

```js
let color1 = "red"; 
let color2 = color1;

console.log(color1); // red
console.log(color2); // red

color1 = "blue"; 

console.log(color1); // blue
console.log(color2); // red
```
::::
:::: single
**B) Identifying Primitive Types**

- The `typeof` operator identifies a primitive type
- It returns the type in form of a string

```js
console.log(typeof "Nicholas"); // "string"
console.log(typeof 10);         // "number"
console.log(typeof 5.1);        // "number"
console.log(typeof true);       // "boolean" 
console.log(typeof undefined);  // "undefined"
```
::::
:::::


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
# Reference Types and Reference Values

<!-- - Reference types represent objects in JS and are the closest things to classes -->
<!-- - Reference values are instances of reference types and are synonymous with objects -->
- An object (=instance of a reference type) is an *unordered list* of **properties**
- A property consists of a **name** (always a string) and a **value** (can be primitive type or reference value)
- When the value of a property is a function, it is called a **method**
- **Methods** are reference values that can be *executed*
- Objects can be perceived as **hash tables**
  - The *values* of their properties can be accessed in an *associative form* through their *keys*. 
- Assigning an object to a variable actually assigns a _pointer_ of the _memory location_ to the variable
  - i.e., the variable object contains the pointer
  - When one object is copied to another variable, the new variable gets a copy of the pointer


::: blue smaller
**Naming Convention**
Although reference types are objects, it is useful to distinguish them from reference values. Hence, when we talk about *objects*, we refer to instances of reference types, ie., reference values. When we talk about *reference types*, we use this denominator.
:::

---
# Instantiating Objects

::::: columns
:::: single
**A) Usign the `new` Operator with a Constructor**
- A constructor is a function that uses `new` to create an object
- Any function can be a constructor^1^
- Such functions are called **Constructor functions**
```js
function Book(name, year) {
  this.name = name;
  this.year = year;
}
let b = new Book("ECMAScript 6", 2015);
```

**B) Using the `Object()` Function as Constructor**
  ```js
    let book = new Object();
    book.name = "The Principles of Object-Oriented JavaScript"; 
    book.year = 2014;
  ```

::::
:::: single
**C) Using the Literal Notation**
- Objects (=reference values) can be directly created using the literal notation syntax without `new` operator and constructor.
  ```js
  let book = {
    name: "The Principles of Object-Oriented JavaScript",
    year: 2014
  };
  ```

- Property names can also be represented as string literals
  ```js
  let book = {
    "name": "The Principles of Object-Oriented JavaScript",
    "year": 2014
  };
  ```

  ::: warning centerbox center small
  Please note the different syntax of the literal notation!
  :::
::::
:::::

<!-- - A literal allows to define a reference value without explicitly creating an object using the `new` operator and the object's constructor -->


::: footnotes
^1^ Constructors start with an upper case (capital letter) by convention to distinguish them from non-constructor functions.
:::



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
# Identification

::::: columns
:::: single
**A) Identifying Reference Types**

- To identify a *specific type*, use the `instanceof` operator 

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
  console.log(typeof reflect);                // "function"
  ```
- *Functions* can be identified using `typeof` operator
- *Arrays* can be identified using the `Array.isArray()` function
::::
:::: single
**B) Identifying Reference Values**

- The `instanceof` operator also helps in identifying the type of a *reference value*

  ```js
  function Book(name, year) {
    this.name = name;
    this.year = year;
  }

  let b = new Book("ECMAScript 6", 2015);

  console.log(b instanceof Object);     // true
  console.log(b instanceof Book);       // true
  console.log(b instanceof Person);     // false
  ```

  Example #2
  ::::: columns-center
  :::: single

    ```js
    console.log(typeof Book);
    console.log(typeof b);   
    ```
  ::::
  :::: single
  ::: smaller center blue
  Think about, what does the `typeof` operator return for each operation?
  :::
  ::::
  :::::


::::
:::::



---
# Property Types

<!-- Properties can be of one of two types -->

::::: columns
:::: single
**A) "Own" Properties**

- Own-properties are properties that 'belong' exlusively to the object instance for which they are defined
<!-- - An own property simply indicates that the specific instance of the object owns that property -->
- The property is stored directly on the object instance
- All operations on the property must be performed on that object
  ```js
  var person1 = {
    name: "Nicholas", 
    sayName: function() {
      console.log(this.name); }
  };
  console.log("name" in person1);                   // true
  console.log(person1.hasOwnProperty("name"));      // true
  
  console.log("toString" in person1);               // true
  console.log(person1.hasOwnProperty("toString"));  // false
  ```

::::
:::: single
**B) Prototype Properties**

::::
:::::



---
# Identifying the Property Type

JavaScript distinguishes between two types of object properties: own properties and prototype properties

See previous slides


---
# Working with Properties

::::: columns
:::: single
**A) Adding Properties**
```js
...
```
- Properties can be added at any time regardless of the creation method
::::
:::: single
**B) Deleting Properties**
```js
let person1 = { 
  name: "Nicholas"
};

console.log("name" in person1); // true

delete person1.name;            

console.log("name" in person1); // false
console.log(person1.name);      // undefined
```

- A successful `delete` operation returns `true`
- Some properties can not be removed
::::
:::: single
**C) Enumerating Properties**
```js
// Only iterates over OWN properties

let property;

for (property in Person) {
  console.log("Name: " + property); 
  console.log("Value: " + Person[property]);
}
```

<!-- Version B: -->
```js 
// Includes PROTOTYPE properties

let properties = Object.keys(object); 

// if you want to mimic for-in behavior
let i, 
    len = properties.length;

for (i=0; i < len; i++) { 
  console.log("Name: " + properties[i]); 
  console.log("Value: " + object[properties[i]]);
}
```
::::
:::::



---
# Working with Properties


::::: columns
:::: single
**D) Identifying Properties**

- The `in` operator looks for the specified *property* with the given *name* and returns `true` in case of its existence
- The `in` operator works on both *reference types* and *values*

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function() {
    console.log(this.name); 
  }
}

console.log("name" in Person);    // true
console.log("age" in Person);     // true
console.log("sayName" in Person); // true
console.log("title" in Person);   // false
```

::::
:::: single
**E) Identifying Own Properties only**

- The `in` operator checks for both *own properties* and *prototype properties*
- If only own properties should be detected, a *combination* of `in` with the `hasOwnProperty` method^1^ is needed

```js
  var person1 = {
    name: "Nicholas", 
    sayName: function() {
      console.log(this.name); }
  };

  console.log("name" in person1);                   // true
  console.log(person1.hasOwnProperty("name"));      // true
  
  console.log("toString" in person1);               // true
  console.log(person1.hasOwnProperty("toString"));  // false
```
::::
:::::

::: footnotes
^1^ The `hasOwnProperty` method is present on all objects in JavaScript
:::
