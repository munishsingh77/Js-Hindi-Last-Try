// let name = "Munish";
// let age = 25;
// let isLoggedIn = true;


// number => 2 to power 53
// BigInt
// string
// boolean => true or false 
// null => standalone value
// undefine 
// Symbol => unique 

//object

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof null); // object (this is a known JavaScript quirk)
console.log(typeof undefined); // undefined
console.log(typeof Symbol("id")); // symbol

//         DATA TYPES SUMMARY

// ************ PRIMITIVE TYPES ************
// These are copied by **value** (not by reference)
// They are immutable and stored in stack memory

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;                    // Number
const scoreValue = 100.3;            // Number (float)
const isLoggedIn = false;            // Boolean
const outsideTemp = null;            // Null → type is 'object' ❗️(JavaScript bug)
let userEmail;                       // Undefined
const name = "Munish";               // String

const id = Symbol('123');            // Symbol → always unique
const anotherId = Symbol('123');     // Symbol again
console.log(id === anotherId);       // ❌ false → Symbols are always unique

const bigNumber = 3456543576654356754n; // ✅ BigInt

// typeof checks for primitive types
console.log(typeof score);        // number
console.log(typeof outsideTemp);  // ❗️ object (weird JS behavior)
console.log(typeof userEmail);    // undefined
console.log(typeof bigNumber);    // bigint
console.log(typeof id);           // symbol

// ************ NON-PRIMITIVE (REFERENCE) TYPES ************
// These are copied by **reference**
// Stored in heap memory

// ✅ Arrays
const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros); // object

// ✅ Objects
let myObj = {
    name: "hitesh",
    age: 22,
};
console.log(typeof myObj); // object

// ✅ Functions
const myFunction = function(){
    console.log("Hello world");
};
console.log(typeof myFunction); // function (special object subtype)

// ************ BONUS: Copying Behavior ************

// ✅ Primitive copy by value
let x = 10;
let y = x;
y = 20;
console.log(x); // 10 ✅ x is not affected
console.log(y); // 20

// ❗️Non-primitive copy by reference
let obj1 = { name: "Munish" };
let obj2 = obj1;
obj2.name = "Hitesh";
console.log(obj1.name); // ❗️Hitesh → obj1 changed too (same reference)

// ✅ Use spread operator or structuredClone for copying safely
let obj3 = { ...obj1 };       // shallow copy
obj3.name = "Sameer";
console.log(obj1.name); // still "Hitesh"
console.log(obj3.name); // "Sameer"

// ************ Summary of typeof ************

/*
typeof null             → "object"     ❗️(JavaScript bug)
typeof undefined        → "undefined"
typeof []               → "object"
typeof {}               → "object"
typeof function(){}     → "function"
typeof 100n             → "bigint"
typeof Symbol("abc")    → "symbol"
typeof "hello"          → "string"
typeof 123              → "number"
*/

// 📘 Read more: https://262.ecma-international.org/5.1/#sec-11.4.3
// 📘 MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures


//******************************************************************
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive), Heap (Non-Primitive)

// Stack (Primitive)
let myYoutubename = "Munishsingh";
let anothoername = myYoutubename;
anothoername = "Hitesh";

console.log(myYoutubename);  // ✅ Munishsingh
console.log(anothoername);   // ✅ Hitesh

// Heap (Non-Primitive)
let userOne = {
    name: "username@nasdficom",
    upi: "user@ybl"
};

let userTwo = userOne;       // 🧠 Both point to the same object

userTwo.name = "hitesh@google.com"; // Changes both userOne & userTwo

console.log(userOne.name); // ✅ hitesh@google.com
console.log(userTwo.name); // ✅ hitesh@google.com
