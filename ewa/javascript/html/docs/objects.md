# Objects

!!! abstract
    **Summary**

    - [x] Objects in JavaScript are dynamic; they can change at any point during code execution
    - [x] While OO-langueage lock-down objects based on class definitions; JS has no such restrictions
    - [x] Objects are central elements in JS


!!! warning
    **Please note:** A large part of JavaScript programming is managing objects – this is why understanding how objects work is key to understanding JavaScript as a whole. 


## Preamble

- Everything in JS is an object
- or can be accessed as objects
- even functions are objects

Hence, a good understanding about objects is crucial for working with JS.




## Defining Objects

Objects can be created on two ways:

1. via an object **Constructor** using a constructor function
2. via the object **literal notation**.

The constructor function then serves as a reference type; the objects created via it are reference values (i.e., instances of a reference type).

The literal notation creates only reference values.



### Adding Properties to Objects

JS distinguishes between 

1. properties inherited from the object prototype and 
2. own properties 

Adding an individual property creates a new _own property_ on that object, i.e., the object instance _owns_ that property.



### Checking for the Existence of Properties

Since properties can added to objects at any time, it is sometimes necessary to check for the existence of a property.

The `:::js in`-operator also works for methods (since methods are also properties and reference values (=objects))

!!! note
    __Please note__: The `:::js in` operator checks for both own properties and prototype properties. If you only want the check for own properties use the `:::js hasOwnProperty()` method, which is present on all objects.

The `:::js hasOwnProperty()` method returns `true` only if the given property exists and is an own property.


## Disclaimer

Most of the information in this lecture has been compiled from the following sources:

* <https://www.w3schools.com/js/js_function_definition.asp>

