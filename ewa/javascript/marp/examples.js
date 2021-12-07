const fetch = require('node-fetch');

// Using Objects in literal form as arguments

// Callbacks
// Promises
// async / await

// 3 different categories for asynchronous JS
/**
 * a) callbacks
 * b) promises
 * c) async await   <-- preferred way
 */


//******************Callbacks *****************/


// Example #1: A Simple Callback

// console.log("Hallo Welt - jetzt");

// setTimeout(() => {
//     console.log("Hallo Welt – nach 1 Sec.")
// }, 2000 ); 

// console.log("Dieser Code wird vor dem asynchronen Code ausgeführt...");

// Example #2
// Nested callback functions --> "Callback-Hell"

// let i = 0;
// let stop = false;

// setTimeout(() => { // first callback function; christmas-tree-pattern
//     console.log("rot – " + i);
//     setTimeout(() => {
//         console.log("gelb – " + i);
//         setTimeout(() => {
//             console.log("grün – " + i);
//             stop = true;
//         }, 2000);
//     }, 2000);
// }, 2000);

// const inc = setInterval(() => { 
//     i = i + 1;
//     if (stop === true) {
//         clearInterval(inc);
//     }
// }, 500);


// Event handler for buttons
// const btn;
// btn.addEventListener("click", () => {
    
// });



//************ PROMISES ************/ 


// Promises (success and fail path)
// const myPromise = new Promise((resolve, reject) => {
//     const rand = Math.floor(Math.random() *2);
//     if (rand === 0) {
//         resolve(rand);
//     } else {
//         reject(rand);
//     }
// } );

// myPromise
//     .then((rand) => console.log("Success – " + rand))
//     .then(() => console.log("Ausgabe 2 im Erfolgsfall"))
//     .catch((rand) => console.error("Fehlerfall – " + rand));



//     // Fetch with promises
// const url = "https://randomuser.me/api/";
// fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         let users = data.results;
//         console.log(users);
//     })
//     .catch((err) => console.error(err));

// errors are handled inside the catch



//************ ASYCH & AWAIT ************/ 

// async without error handling
const url = "https://randomuser.me/api/";
const fetchUser = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

// fetchUser();


// async with error handling
const fetchUserWithErrorHandling = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log("finished");
    } catch(err) {
        console.error(err);
    }
}

fetchUserWithErrorHandling();
console.log("Executed before Async call...");
for (let i = 0; i < 1000; i++) { }
console.log("Executed before Async call...");



// async with arrow function
const fetchUserDetails = async (userId) => {
   // pretend we make an asynchronous call
  // and return the user details
  return {'name': 'Robin', 'likes': ['toys', 'pizzas']};
}

// await must be invoked in an async function
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


