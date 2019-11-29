# Introduction to JavaScript

## Language Concepts

JavaScritp (JS) is an extremely flexible language

Rather than encapsulating your programm code in classes, in JS you can start coding as you go (good software engineering principles should be followed of course).

JS employs no formal concept of classes




## Data Types

### Primitive Types

Primitive types represent simple pieces of data; they are stored direcly in the variable object. 
Primitive types are treated as simple data types.

JS defines 5 primitive types:

- **Boolean**  
    true or false
- **Number**  
    Any integer or floating-point numeric value
- **String**  
    A character or sequence of characters delimited by either single or double quotes (JavaScript has no separate character type)
- **Null**  
    A primitive type that has only one value, null
- **Undefined**  
    A primitive type that has only one value, undefined (undefined is the value assigned to a variable that is not initialized)

All primitive types have literal representations of their values.

!!! note
    __Definition: Literal__  
    Literals represent values that are not stored in a variable, such as a hard-coded name or value 

``` javascript
// ================================================
// Creating Primitive Types using Literal Notation
// ================================================

// strings
var name = "Nicholas";
var selection = "a";

// numbers
var count = 25;
var cost = 1.51;

// boolean
var found = true;

// null
var object = null;

// undefined
var flag = undefined;
var ref;    // assigned undefined automatically
```


The `:::js typeof` operator can be used to determine the type of a primitive type. It returns a string representation of that type.

``` javascript
// ================================================
// Identifying the Type of Primitive Types 
// ================================================
console.log(typeof "Nicholas");     // "string"
console.log(typeof 10);             // "number"
console.log(typeof 5.1);            // "number"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined"
```
Wrapper ...

``` javascript
// ================================================
// Primitive Type Wrappers --> allows to use Primitive Types
// as if they were Reference Types (ie. Objects)
// ================================================
//
// Use of primitive methods
var name = "Nicholas";
var lowercaseName = name.toLowerCase(); // convert to lowercase
var firstLetter = name.charAt(0);       // get first character
var middleOfName = name.substring(2, 5); // get characters 2-4

var count = 10;
var fixedCount = count.toFixed(2); // convert to "10.00"
var hexCount = count.toString(16); // convert to "a"

var flag = true;
var stringFlag = flag.toString(); // convert to "true"
```



### Reference Types

!!! note
    __Definition: Reference Type__  
    A reference type is an object that serves as boilerplate for the creation of other objects (so-called: reference values). 
    Objects created from reference types are called _instances_ of that reference type or _reference values_.

 

!!! note
    __Definition: Reference Value__  
    A reference value is an object that has been created (e.g. through a constructor function) from a reference type. 
    A reference value is called an instance of its constructing reference type.


!!! note
    __Definition: Object__  
    Objects are the central elements in JS. 
    Objects are either defined as reference types or reference values.
    Objects consist of an unordered number of properties inherited from their prototype and individually defined properties (so-called own properties).
    Concrete object data are stored as references to memory locations.

