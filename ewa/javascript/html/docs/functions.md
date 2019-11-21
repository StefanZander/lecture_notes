# Self-Invoking Functions

!!! abstract
    **Summary**

    - [x] Sie kennen die technischen Grundlagen der Android Action Bar
    - [x] Sie können eine Action Bar in ihre Applikation integrieren
    - [x] Sie verstehen wie sie Actions definieren und der Action Bar hinzufügen



## Function Declarations



## Function Expression






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





## Disclaimer

Most of the information in this lecture has been compiled from the following sources:

* <https://www.w3schools.com/js/js_function_definition.asp>
* <https://www.computerbase.de/forum/threads/warum-sind-closures-so-wichtig.1906523/>
* <http://www.vogella.com/tutorials/AndroidActionBar/article.html>
