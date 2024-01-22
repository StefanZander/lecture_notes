// ================================================
// ================================================
// ================================================
// Code-testbed for JavaScript Lecture Examples


function getValue(condition) {

    if (condition) {
        value  = "green";
        // value is hoisted to the top of the function
        // value = "red"
        let value;
    } else {  value = "red" }
    // value = "green"; // value should not exist here
    console.log(value); // displays 'green'
}

getValue(true)
getValue(false)

// primitive types
let color1 = "blue";
let color2 = color1;

console.log(color1)
console.log(color2)

color1 = "red"

console.log(color1)
console.log(color2)

// autoboxing
console.log(color1.toUpperCase())
console.log(1234.3456.toFixed(2));



// ================================================
// ================================================
// ================================================
// Creating Primitive Types using Literal Notation


// strings
let name = "Nicholas";
let selection = "a";

// numbers
let count = 25;
let cost = 1.51;

// boolean
let found = true;

// null
let object = null;

// undefined
let flag = undefined;
let ref;    // assigned undefined automatically




// ================================================
// ================================================
// ================================================
// Identifying the Type of Primitive Types 
console.log(typeof "Nicholas");     // "string"
console.log(typeof 10);             // "number"
console.log(typeof 5.1);            // "number"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined"





// ================================================
// ================================================
// ================================================
// Primitive Type Wrappers --> allows to use Primitive Types
// as if they were Reference Types (ie. Objects)
// Use of primitive methods
let name = "Nicholas";
let lowercaseName = name.toLowerCase(); // convert to lowercase
let firstLetter = name.charAt(0);       // get first character
let middleOfName = name.substring(2, 5); // get characters 2-4

let count = 10;
let fixedCount = count.toFixed(2); // convert to "10.00"
let hexCount = count.toString(16); // convert to "a"

let flag = true;
let stringFlag = flag.toString(); // convert to "true"







// #9
// ================================================
// ================================================
// ================================================
// Create Object with Literal Notation

let book1 = {
    name: "The Principles of Object-Oriented JavaScript",
    year: 2014
};

let book2 = {
    "name": "The Principles of Object-Oriented JavaScript",
    "year": 2014
};


let book3 = new Object();
book3.name = "The Principles of Object-Oriented JavaScript";
book3.year = 2014;


// Test that all creations are equal, ie., they are objects
console.log(book3 instanceof Object); // true

console.log(typeof book1); //object
console.log(typeof book2); //object
console.log(typeof book3); //object

console.log(book1 == book2); // false
console.log(book1 === book2); // false



// ================================================
// ================================================
// ================================================
// Primitive Types are no objects
let name = "Hans";
name.last = "Haas";

console.log(name.last); // undefined




// ==================================================================
// ==================================================================
// ==================================================================
// Create via Constructor
function Person(firstname, lastname, birthyear) {
    "use strict";
    this._firstname = firstname;
    this._lastname = lastname;
    this.age = new Date().getFullYear() - birthyear;
    
    this.sayName = function() {
        console.log("My name is " + this._firstname + " " + this._lastname);
        return "My name is " + this._firstname + " " + this._lastname;
    }
    return new Dog(); // added in LVA #10; remove for normal construction
}

function Dog(name) {
    this._name = "Bello";
}

function Student(fullname, matr) {
    this._fullname = fullname;
    this._matr = matr;
    this.sayHello = function() {
        console.log("Hello, my name is " + this._fullname);
    }
}

let john = new Person("John", "Doe", 1986);
console.log(john);

// Be aware that 'this' is now bound to the global window-object and not the instance
// Forbidden in strict mode (--> does not allow a binding of this to the global object)
let hans = Person("Hans", "Haas", 1932);






// ================================================
// ================================================
// ================================================
// Accessing Properties in Objects
let person = new Object();

person.firstname = "John";
person.surname = "Doe";

person["surname"] = "Doe"; // alternative notation

console.log(person.firstname);

let s = "firstname";
console.log(person[s]);              // John

console.log(person["firstname"]);    // John



// ================================================
// ================================================
// ================================================
// Iterating over Properties in Objects
for (props in person) {
//    console.log("Own Property: " + person.hasOwnProperty(props));
    console.log("Name: " + props);
    console.log("Value: " + person[props]);
}

console.log("firstname" in person); // true
console.log("givenname" in person); // false




// ================================================
// ================================================
// ================================================
// #34 Checking for existence of individual properties
console.log("firstname" in person); // true
console.log(person.hasOwnProperty("firstname")); // true

console.log("toString" in person); // true
console.log(person.hasOwnProperty("toString")); // false




// ================================================
// ================================================
// ================================================
// #36 Enumerations on property keys; keys are stored in _keys
// Example does not work in latest chrome version
let _keys = Object.keys(person);

for (props in _keys) { // does not retrieves props but can be iterated with index let
    console.log("Own Property: " + person.hasOwnProperty(_keys[props]));
    console.log("Key: " + _keys[props]);
    console.log("Value: " + person[_keys[props]]);
}




// 'this' refers to the object to which a function was applied to
// #25

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

person1.sayName(); // outputs "Nicholas"

person2.sayName(); // outputs "Greg"

sayNameForAll(); // outputs "Michael"



// ARROW FUNCTIONS (>= ES6)
//
// Problem of arrow functions: 
// - have no specific this; this always referes to global context
// - not hoisted

// shorthand with omitted return
const v = (x, y) => x * y;

// preferred version with {} and explicit return
const v = (x, y) => { return x * y };




