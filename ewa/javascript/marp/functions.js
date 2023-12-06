//**********************************************/
// ***************** FUNCTIONS *****************/
//**********************************************/


// Function Declarion == named functions // Constructors
let result = add(5, 5);
console.log(result);

function add(num1, num2) {
  return num1 + num2;
}


// function expression == anonymous fcts // callbacks // async
var add = function(num1, num2) {
    return num1 + num2;
  }; // mind the semicolon ';' at the expression's end
  
let result = add(5, 5);
console.log(result);






// constructor functions
function Person(firstname, lastname, birthyear, isAnimal) {
    "use strict";
    this._firstname = firstname;
    this._lastname = lastname;
    this.age = new Date().getFullYear() - birthyear;
    this.sayName = function() { // methods
        console.log("My name is " + this._firstname + " " + this._lastname);
    } 

    if (isAnimal)
        return new Dog(); // Q: sinnvoll? 
}

function Dog() {
    this.wuff = function() {
        console.log("Wuff Wuff");
    }
}


// Usage
let p = new Person("Hans", "Haas", 1919, false); 
p.sayName(); 
// p.wuff();
// p.bark = function() {console.log("wuff"); };
// p.bark();

console.log(p instanceof Person);


// Self-Invoking Functions (aks IIFE)
(function () {
    let x = "Hello World"; // I will invoke myself 
    console.log(x);
})();



// ARROW FUNCTIONS (>= ES6)
//
// Problem of arrow functions: 
// - have no specific this; this always referes to global context
// - not hoisted

let double = function(num) {
    return num * 2;
}

let double = (num) => { return num * 2 };

console.log(double(3));





// Example #2
// shorthand with omitted return
const v = (x, y) => x * y;

// preferred version with {} and explicit return
const v = (x, y) => { return x * y };



// ================================================
// ================================================
// ================================================
// Functions as values (Functionpointer)


// Example 1
function sayHi() {
//    console.log("Hi!");
    return "Hi!";
}
    
sayHi(); // outputs "Hi!" 
    
let say_something = sayHi;
    
say_something();       // outputs "Hi!"
    
    
    // Example 2
    function addOne(num) {
        return num + 1; 
    }
    
    let plusOne = addOne; 
    
    let result = plusOne(1); // outputs '2'
    
    
    // Example 3: Handler
    function init() {
        alert("Page has been fully loaded.");
    }
    
    window.onload = init;
    
        
    
    
    // ================================================
    // ================================================
    // ================================================
    // (a-c) Using Functions as arguments
    function calc(a, b, f) {
        console.log(f(a,b)); // #1: add(a,b) --> return --> return 
    }
    
    function add(x,y) {
        return x+y;
    }
    
    function sub(x,y) {
        return x-y;
    }
    
    calc(9,4,add); 
    calc(9,4,sub); 
    

    
    // Example 2
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.decode = function() {
            return this.firstname + " " + this.lastname;
        }
        this.toString = function() { 
            console.log("says: " + this.firstname)
        }
    }

    // let p = new Person("Max", "Moritz");
    // p.toString();

 
    function lower() {
        return this.firstname.toLowerCase() + " " + this.lastname.toLowerCase();
    }
    
    function scribble() {
        var str = this.firstname + " " + this.lastname;
        var result = "";
        for (let i = 0; i < str.length; i++ ) {
            if (i % 2 == 0) {
                result = result + str.charAt(i).toUpperCase();
            } else {
                result = result + str.charAt(i).toLowerCase();
            } 
        }
        return result;
    }
    
    function dashed() {
        var str = this.firstname + " " + this.lastname;
        var result = "";
        for (let i = 0; i < str.length; i++ ) {
            if (i != this.firstname.length) {
                result = result + "_";
            }
            else result = result + " ";
        }
        return result;
    }
    
    let p = new Person("Peter", "Pan");
    p.decode();
    p.decode = scribble;
    p.decode();
    
    
    
    
   
    
    // ================================================
    // ================================================
    // ================================================
    // (d) Function that returns a function
    // Q: For which cases could that be used? (eg. Factory)
    
    function saySomething(name) {
        return function sayHello() {
            return("Hello, my name is ... " + name); // 'this.name' does not work since it looks for the value of a 'name' property in the property to which saySomething was assigned to.
        };
    }
    
    let a = saySomething("Stefan"); // vs. var a = saySomething;
    
    a(); // Outputs "Hello, my name is ... Stefan
    
    
    // The following calls demonstrate the difference 
    // between constructor and normal functions
    y = saySomething; // (A) assigning a reference to saySomething

    x = new saySomething(); // (B) x and saySomething are two different objects
    
    saySomething.desc = "some descr.";
    
    y.hasOwnProperty("desc"); // true
    x.hasOwnProperty("desc"); // false 
    
    


    
// ================================================
// ================================================
// ================================================
// Variable Function Arguments
function sum() {
    "use strict";
    var result = 0,
        i = 0,
        len = arguments.length;
    try {
        while (i < len) {
            if (typeof arguments[i] !== Number) {
                throw new Error("Can only add numbers");
            }
            result += arguments[i];
            i++;
        }
    } catch (err) { 
        console.log(err)
    }
    return result;
}

console.log(sum(1, "2")); // 3
console.log(sum(3, 4, 5, 6)); // 18
console.log(sum(50 + 50 )); // 100
console.log(sum()); // 0






// ================================================
// ================================================
// ================================================
// Creating Closures
// Run in Browser + display scopes when adding a new mySecretVariable
// Source: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
 
function MyProtectedObj(param) {
    const mySecretVariable = "4711";
    let name = param;
     
    return { // returns an annonymous inner func.
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
  
  let a = MyProtectedObj("James"); // called as func.
  let b = new MyProtectedObj("Jack"); // called as constructor