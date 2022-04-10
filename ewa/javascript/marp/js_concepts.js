const fetch = require('node-fetch');


//**********************************************/
//******************** JSON ********************/
//**********************************************/

// JSON <==> AJAX
// JSON <==> Literal Notation of Objects

let p1 = {
    name: "Stefan", // prop #1
    age: "25", // prop #2
    likes: [ { name: "soccer" } , { name: "badminton" }]
}






//**********************************************/
//*************** Error Handling ***************/
//**********************************************/

// NO Error Handling
const printFirstTwoLetters = (str) => {
    const firstTwo = str.substring(0,2); 
    console.log(firstTwo); // will not be executed
}

printFirstTwoLetters(5); // str.substring is not a function


// WITH Error Handling
const printFirstTwoLetters = (str) => {
    "use strict";
    try {
        if (typeof str !== "string")
            throw new Error("Parameter is not a String"); 
        if (str.length < 2)
            throw new Error("String is less than 2 chars"); 
        const firstTwo = str.substring(0,2); 
        console.log(firstTwo);
    } catch (err) { 
        console.log(err)
    } 
}

printFirstTwoLetters(5) // Parameter is not a String
printFirstTwoLetters("5") // String is less than 2 chars



//**********************************************/
//****************** Closures ******************/
//**********************************************/

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

let obj = MyProtectedObj("James"); 

console.log(mySecretVariable); // Reference Error
console.log(obj.mySecretVariable); // outputs 'undefined'

obj.getCode(); //returns the randomly generated number
obj.setName("John"); //ok
obj.getName();




// 3 different categories for asynchronous JS
/**
 * a) callbacks
 * b) promises
 * c) async await   <-- preferred way
 */


//**********************************************/
//****************** Callbacks *****************/
//**********************************************/

// Example #1: A Simple Callback

console.log("Hallo Welt - jetzt");

setTimeout(() => {
    console.log("Hallo Welt – nach 1 Sec.")
}, 2000 ); 

console.log("Dieser Code wird vor dem asynchronen Code ausgeführt...");


// Example #2
// Nested callback functions --> "Callback-Hell"

let i = 0;
let stop = false;

setTimeout(() => { // first callback function; christmas-tree-pattern
    console.log("rot – " + i);
    setTimeout(() => {
        console.log("gelb – " + i);
        setTimeout(() => {
            console.log("grün – " + i);
            stop = true;
        }, 2000);
    }, 2000);
}, 2000);

const inc = setInterval(() => { 
    i = i + 1;
    if (stop === true) {
        clearInterval(inc);
    }
}, 500);


// Event handler for buttons
const btn;
btn.addEventListener("click", () => {
    
});





//**********************************************/
//****************** PROMISES ******************/ 
//**********************************************/

// Promises (success and fail path)
const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() *2);
    if (rand === 0) {
        resolve(rand);
    } else {
        reject(rand);
    }
} );

myPromise
    .then((rand) => console.log("Success – " + rand))
    .then(() => console.log("Ausgabe 2 im Erfolgsfall"))
    .catch((rand) => console.error("Fehlerfall – " + rand));



// Fetch with promises
const fetch = require('node-fetch');
const url = "https://randomuser.me/api/";
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let users = data.results;
        console.log(users);
    })
    .catch((err) => console.error(err));
console.log("request started...");
// errors are handled inside the catch





//**********************************************/
//*************** ASYCH & AWAIT ****************/ 
//**********************************************/

// async without error handling
const fetch = require('node-fetch');
const url = "https://randomuser.me/api/";
const fetchUser = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

fetchUser();


// async with error handling
const fetch = require('node-fetch');
const url = "https://randomuser.me/api/";
const fetchUserWithErrorHandling = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        console.log("finished");

    } catch(err) {
        console.error(err);
    }
}

fetchUserWithErrorHandling();
console.log("Executed before Async call...");
for (let i = 0; i < 1000; i++) { }
console.log("Executed before Async call...");

// let s = setInterval(fetchUserWithErrorHandling, 2000);



// Calling await in an async IIFP
const fetchUserDetails = async (userId) => {
  // pretend we make an asynchronous call
  // and return the user details
  return {'name': 'Robin', 'likes': ['toys', 'pizzas']};
}

// error
const user = await fetchUserDetails();
console.log(user);

// await must be invoked in an async function (--> IIFP)
(async () => {
    const user = await fetchUserDetails();
    console.log(user);
})();



// Example with try...catch
const validateUser = ({userId, password}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId && password) {
                resolve(`${userId} you have been authenticated successfully!!!`);
            } else {
                reject({message: 'userId or Password could be blank!'});
            }

        }, 2000);
    });
}


const app = async () => {
    const data = {
        userId: '',
        password: ''
    };

    try {
        console.log('Initializing...');
        const result = await validateUser(data);
        console.log(result);
    } catch (e) {
        console.error(e.message);
    }
}

// invoke the function app
app();




//**********************************************/
//************** FURTHER EXAMPLES **************/
//**********************************************/

// Pass literal objects to a function
function printMyProps(props) {
    for (let p in props) {
        console.log(`${p}: ${props[p]}`);
    }
}

printMyProps( {name: "stefan", alter: 42 });

function Person(name, age) {
    this.name = name;
    this.age = age;
} 

printMyProps(Person);

let p = new Person("Hans", 88);
printMyProps(p);





//**********************************************/
//******** Fetching for Airport Example ********/
//**********************************************/

const fetch = require('node-fetch');
let url = "http://localhost/EWA/php/ajax_and_php/airport_provider_with_filter.php?filter=";
let filter = "lo";

const fetchAirports = async (url, filter) => {
    try {
        const res = await fetch(url+filter);
        const data = await res.json();
        console.log(data);
    } catch(err) {
        console.log(`An Error occured: ${err}`);
    }
}


fetchAirports(url, filter);

// Exam Example (remove)

const ratings = [4, 6, 7, 2, 3, 5, 4, 1];

async function calculateAverage(ratings) {
    let sum = 0
    let i = 0
    for (;i < ratings.length; i++) {
        sum = sum + ratings[i];
        console.log(`i: ${i} – sum: ${sum}`);
    }
    return sum/i;
}

let avg;
(async () => {
    avg = await calculateAverage(ratings);
    console.log(`Average: ${avg}`);
})();

console.log("Start...");





// Notations

// // Constructor function --> Reference Type
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let p = new Person("Hans"); // new --> Constructor creates new Reference Value


// // Literal Notation --> Reference Values
// let p2 = {
//     name: "Jack",  // own property
//     age: 42
// }


// // DOM --> Document Object Model (DOM API)

// btn.class = "pressed"; // <!--
// btn.setAttribute("class=....")

// // Schlecht
// innerHtml = "<p> neuer <p> <article> ... Paragraph </p>"; 



//**********************************************/
//********* Prototypes and Inheritance *********/
//**********************************************/

function Book(title, author) {
    this.title = title;
    this.author = author;

    this.print = function(aspect) {
        console.log(this[aspect]);
    }
}

let book1 = new Book("Die verlorene Ehre der Katharina Blum", "Heinrich Böll");
book1.print("title");

// console.log(bello.constructor.prototype);

// not working
// Dog.bark = function() { console.log("Miau") };
// bello.bark();

//alternatively: Dog.prototype
book1.constructor.prototype.printTitle = function() {
    this.print("title");
    // console.log(this.title);
}

book1.printTitle();