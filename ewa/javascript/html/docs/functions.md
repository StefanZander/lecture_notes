# Functions

!!! abstract
    **Summary**

    - [x] Functions are first-class citizen, i.e., regular objects in JavaScript
    - [x] Functions are used for many purposes
    - [x] JS distinguishes between function declarations, function expressions, constructor functions and arrow functions


!!! warning
    **Please note:**  
    A profound understanding of functions in JavaScript is essential because JavaScript employs no concept of classes – so functions and reference types are all a programmer has to implement aggregation and inheritance. 


## General Information

### Usage Overview 
Functions in JavaScript can be used to

- return values
- create new reference values (=instances of reference types)
- specify new reference types
- create inheritance and aggregation

### Functions are First-Class Objects

Functions in JavaScript are first-class citizen, i.e., they inherit all properties and characteristics of normal objects:

- they can be **assigned** to variables
- they can be defined as **methods** in objects
- they can be passed as **arguments** to functions
- they can be **returned** from functions

Functions are treated as full-fledged objects that exhibit the special pre-defined `:::js [[call]]` property. 
The `:::js [[call]]` property signals JS that a function object returns a **pre-computed value**.


### Function Parameters

Function parameters are the names listed in the function definition.

Function arguments are the real values passed to (and received by) the function.

If a function is called with missing arguments (less than declared), the missing values are set to: undefined


## Defining Functions

### Function Declarations

- used for normal function and constructor functions to generate reference values (_=instances of reference types_)
- Hoisted at the top of the scope (=_context_) in which they are defined 



### Function Expression

Used in/as 

  - assignment expressions, 
  - function parameters (e.g. for handlers)
  - methods
  - return values of functions




## Types of Functions in JavaScript


### Constructor Functions

Functions invoked with `:::js new` are called __Constructor Fuctions__.

Constructor functions define reference types and return a newly created reference value.

The default return type is the new reference value (instance of an reference type).

The instantiation process can be manipulated by explicitly specifying the return value of a constructor function.




### Self-Invoking Functions

Function expressions can be made "self-invoking".

A self-invoking expression is invoked (started) automatically, without being called.

Function expressions will execute automatically if the expression is followed by ().

You cannot self-invoke a function declaration.

You have to add parentheses around the function to indicate that it is a function expression

``` javascript
(function () {
  let x = "Hello World";  // I will invoke myself
  console.log(x);
})();
```

The function above is actually an anonymous self-invoking function (function without name).


#### Example #2

``` html
<!DOCTYPE html>
<html>
<body>

<p>Functions can be invoked automatically without being called:</p>

<p id="demo"></p>

<script>
(function () {
  document.getElementById("demo").textContent = "Hello! I called myself";
})();
</script>

</body>
</html>
```


### Arrow Functions

Arrow functions allows a short syntax for writing function expressions.

Arrow functions do not have their own this. They are not well suited for defining object methods.

Arrow functions are not hoisted. They must be defined before they are used.

You don't need the function keyword, the return keyword, and the curly brackets.

```javascript
// ES5
var x = function(x, y) {
  return x * y;
}

// ES6
const x = (x, y) => x * y;
```

You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

```javascript
const x = (x, y) => { return x * y };
```

### The 'this' Keyword in Functions

In a function definition, this refers to the "owner" of the function.

In the example above, this is the person object that "owns" the fullName function.

In other words, this.firstName means the firstName property of this object.



## Disclaimer

Most of the information in this lecture has been compiled from the following sources:

* <https://www.w3schools.com/js/js_function_definition.asp>

