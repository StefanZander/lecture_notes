# Closures

!!! abstract
    **Summary**

    - [x] Protected variables are defined in the outer scope of the function and can be accessed by exposing the inner functional scope 
    - [x] Closures are a common way to achieve encapsulation (ie. hiding data from external and uncotrolled access) 
    - [x] Closures consist of an outer and inner function

!!! note
    __Note:__ The app bar should be implemented using the __Android Toolbar__ to make it available for a wide range of devices. According to the Android developer guidelines, the appcompat [Toolbar](https://developer.android.com/reference/android/support/v7/widget/Toolbar.html) has the best compatibility support.  

## Motivation

Closure == dt. Einschließen bzw. Abschluss 

### What is a Closure?

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.

The inner function will have access to the variables in the outer function scope, even after the outer function has returned.


### Usage

In JavaScript, closures are the primary mechanism used to enable __data privacy__. 
Data privacy is an essential property that helps in programming to an interface, not an implementation. This is an important concept in building robust software because implementation details are more likely to change in breaking ways than interface contracts.

When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function. You can’t get at the data from an outside scope except through the object’s privileged methods. In JavaScript, any exposed method defined within the closure scope is privileged.


### Einsatzzwecke

* __Closures erlauben die Isolierung von Variablen__  
    Außerhalb einer Closure liegen alle Variablen auf dem Window-Object und das kann unvorhergesehene Konsequenzen haben, bspw. wenn externe Scripte eingebunden werden. Hier kann es passieren, dass Variablen ungewusst überschrieben werden oder ähnliches.

* __Transport von definierten Zuständen (*=States*) von einem Scope in einen anderen__  
    Was wird eingeschlossen: State, also Variablen die einen zugeordneten Wert haben.  
    Der Nutzen: Transport von State von einem Scope in einen komplett anderen Scope.

    Im u.g. Beispiel ist der State `:::js let obj = new MyProtectedObj("James")` eingeschlossen in einem Closure und kann jetzt über die Variable `a` "woanders" hin transportiert werden, d.h., an ein anderes Object (in einem anderen Scope) übergeben werden.

    Also Funktion+State. Offensichtlich sehr ähnlich zu einem Objekt, welches ja ebenso Funktion+State kapselt, aber eben auch mehrere Funktionen beinhalten kann.

* __Closures can be used to create stateful functions__
    Closures can also be used to create stateful functions whose return values may be influenced by their internal state, e.g.:


### Example
``` javascript
function MyProtectedObj(param) {
  const mySecretVariable = Math.floor(4711 * Math.random());
  let name = param;
   
  return { 
    getCode: function() { 
      return mySecretVariable;
    },
    setName: function(value) {
      name = value;
    },
    getName: function() {
      return name;
    }
  }
}
```

The closure function can be used like that

``` javascript
let obj = MyProtectedObj("James");

console.log(mySecretVariable);      // Reference Error 
console.log(obj.mySecretVariable);  // outputs 'undefined'

obj.getCode();  //returns the randomly generated number
obj.setName("John");  //ok
obj.getName();  //outputs 'John'
```



## Pitfalls

Be careful, using `:::js this` does not work in closures
``` javascript
function MyProtectedObj(name) {
  this.mySecretVariable = Math.floor(4711 * Math.random());
  this.name = name;
   
  return { 
    getCode: function() { 
      return mySecretVariable;
    },
    setCode: function(value) {
      mySecretVariable = value;
    },
    getName: function() {
      return name;
    }
  }
}

let obj = MyProtectedObj("James");

//works since mySecretVariable is bound to the global scope
console.log(mySecretVariable); // ...
```

!!! warning
    __Please note__ that the returning object must not access the variables via `this`




## Disclaimer

Most of the information in this lecture has been compiled from the following sources:

* <https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36>
* <https://www.computerbase.de/forum/threads/warum-sind-closures-so-wichtig.1906523/>
* <http://www.vogella.com/tutorials/AndroidActionBar/article.html>
