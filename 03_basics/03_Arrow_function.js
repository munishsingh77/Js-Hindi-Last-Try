// ==========================
// 🧍 Object Method using `this`
// ==========================

const user1 = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);  // ✅ this.username refers to user object
        console.log(this);  // Logs full `user` object
    }
};

// user.welcomeMessage();        // Output: hitesh, welcome to website
// user.username = "sam";
// user.welcomeMessage();        // Output: sam, welcome to website

// ==========================
// 🌐 `this` in Global Scope
// ==========================

// console.log(this); // In browser → window object | In Node.js → {}

// ==========================
// 🔁 `this` in Regular Function
// ==========================

// function chai() {
//     let username = "hitesh";
//     console.log(this.username); // ❌ undefined — `this` doesn't refer to function scope
// }

// chai();

// const chai1 = function () {
//     let username = "hitesh";
//     console.log(this.username); // ❌ undefined again
// }

// chai();

// ==========================
// ➤ Arrow Function & `this`
// ==========================

const chai2 = () => {
    let username = "hitesh";
    console.log(this); // ❗ Arrow functions do NOT have their own `this` — it refers to outer scope
}

// chai2();

// ==========================
// ➕ Arrow Function Return Variations
// ==========================

// ✅ Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };

// ✅ Implicit return (no `return` keyword needed)
// const addTwo = (num1, num2) => num1 + num2;

// ✅ With parentheses, also implicit return
// const addTwo = (num1, num2) => (num1 + num2);

// ✅ Returning an object — wrap in parentheses
const addTwo1 = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4)); // Output: { username: 'hitesh' }

// ==========================
// 🔁 Arrow Function with forEach (example)
// ==========================

// const myArray = [2, 5, 3, 7, 8];

// myArray.forEach((num) => {
//     console.log(num * 2);
// });
// ==========================
// 🧍 Object Method using `this`
// ==========================

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);  // ✅ this.username refers to user object
        console.log(this);  // Logs full `user` object
    }
};

// user.welcomeMessage();        // Output: hitesh, welcome to website
// user.username = "sam";
// user.welcomeMessage();        // Output: sam, welcome to website

// ==========================
// 🌐 `this` in Global Scope
// ==========================

// console.log(this); // In browser → window object | In Node.js → {}

// ==========================
// 🔁 `this` in Regular Function
// ==========================

// function chai() {
//     let username = "hitesh";
//     console.log(this.username); // ❌ undefined — `this` doesn't refer to function scope
// }

// chai();

// const chai = function () {
//     let username = "hitesh";
//     console.log(this.username); // ❌ undefined again
// }

// chai();

// ==========================
// ➤ Arrow Function & `this`
// ==========================

const chai = () => {
    let username = "hitesh";
    console.log(this); // ❗ Arrow functions do NOT have their own `this` — it refers to outer scope
}

// chai();

// ==========================
// ➕ Arrow Function Return Variations
// ==========================

// ✅ Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };

// ✅ Implicit return (no `return` keyword needed)
// const addTwo = (num1, num2) => num1 + num2;

// ✅ With parentheses, also implicit return
// const addTwo = (num1, num2) => (num1 + num2);

// ✅ Returning an object — wrap in parentheses
const addTwo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4)); // Output: { username: 'hitesh' }

// ==========================
// 🔁 Arrow Function with forEach (example)
// ==========================

// const myArray = [2, 5, 3, 7, 8];

// myArray.forEach((num) => {
//     console.log(num * 2);
// });
