// =====================
// 👤 Singleton Objects
// =====================

// Singleton object (constructor way, less common in practice)
// const obj = Object.create(null); 

// =====================
// ✅ Object Literals
// =====================

// Create a symbol (unique & non-colliding)
const mySym = Symbol("key1");

// JS object with mixed key types
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",   // Key with space must be in quotes
    [mySym]: "mykey1",                 // Symbol as a key (must use [])
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// =====================
// ✅ Accessing Values
// =====================

// Dot notation
// console.log(JsUser.email);             // hitesh@google.com

// Bracket notation (needed when key has spaces or is Symbol)
console.log(JsUser["email"]);             // hitesh@google.com
console.log(JsUser["full name"]);         // Hitesh Choudhary
console.log(JsUser[mySym]);               // mykey1

// =====================
// ✅ Updating Object Values
// =====================

JsUser.email = "hitesh@chatgpt.com";      // Works fine

// ❌ Freezing the object (makes it immutable)
// Object.freeze(JsUser);

// Even after this line, if freeze is active, the change below will fail silently
JsUser.email = "hitesh@microsoft.com";    // Won't apply if frozen

// console.log(JsUser); // Check if the email changed

// =====================
// ✅ Adding Methods to Object
// =====================

JsUser.greeting = function () {
    console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);  // "this" refers to JsUser
};

// Method calls
console.log(JsUser.greeting());      // Hello JS user → undefined (console.log returns nothing)
console.log(JsUser.greetingTwo());   // Hello JS user, Hitesh → undefined
