# Self-Invoking Functions

!!! abstract
    **Summary**

    - [x] Sie kennen die technischen Grundlagen der Android Action Bar
    - [x] Sie können eine Action Bar in ihre Applikation integrieren
    - [x] Sie verstehen wie sie Actions definieren und der Action Bar hinzufügen


!!! warning
    **Please note:** A profound understanding of functions in JavaScript is essential because JavaScript employs no concept of classes – so functions and reference types are all you have to achieve aggregation and inheritance. 


## Function Declarations

- used for normal function and constructor functions to generate reference values (_= objects_)
- Hoisted at the top of the context in which they are defined 




## Function Expression

- Used in/as 
    - assignment expressions, 
    - function parameters (e.g. for handlers)
    - methods
    - return values of functions






## Self-Invoking Functions

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



## Disclaimer

Most of the information in this lecture has been compiled from the following sources:

* <https://www.w3schools.com/js/js_function_definition.asp>
* <https://www.computerbase.de/forum/threads/warum-sind-closures-so-wichtig.1906523/>
* <http://www.vogella.com/tutorials/AndroidActionBar/article.html>
