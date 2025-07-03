// ==========================
// 🔒 Block Scope vs Global Scope
// ==========================

let a = 300;

if (true) {
    let a = 10;          // Block-scoped
    const b = 20;        // Block-scoped
    // console.log("INNER:", a);  // 10
}

// console.log(a);  // 300 (outer scope)
// console.log(b);  // ❌ Error: b is not defined
// console.log(c);  // ❌ If var c was used and declared, it would be accessible (function/global scope)


// ==========================
// 🔁 Nested Functions & Scope Chain
// ==========================

function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username); // ✅ Can access parent function's variable
    }

    // console.log(website); // ❌ Error: website is defined inside 'two' only

    two(); // 👈 Call inner function
}

// one();  // Uncomment to run


// ==========================
// 🧱 Scope Inside if-blocks
// ==========================

if (true) {
    const username = "hitesh";

    if (username === "hitesh") {
        const website = " youtube";
        console.log(username + website); // ✅ Works
    }

    // console.log(website); // ❌ Error: website is only inside inner if-block
}

// console.log(username); // ❌ Error: username is block-scoped


// ==========================
// 🔁 Hoisting in Functions
// ==========================

console.log(addone(5));  // ✅ This works due to function hoisting

function addone(num) {
    return num + 1;
}

// ❌ Function Expression is NOT hoisted like declarations

addTwo(5); // ❌ Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};

// 💡 Tip: Use function expressions only after their definition
