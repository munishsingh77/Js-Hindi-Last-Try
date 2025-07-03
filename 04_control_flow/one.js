// ==========================
// 🔁 Basic If/Else
// ==========================

const isUserloggedIn = true;
const temperature = 41;

if (temperature === 40) {
    console.log("Temperature is exactly 40");
} else {
    console.log("Temperature is greater than 40");
}

console.log("Executed");

// ==========================
// 💡 Comparison Operators
// <, >, <=, >=, ==, !=, ===, !==
// ==========================

// ==========================
// ⚡ Variable Scope in If Block
// ==========================

const score = 200;

if (score > 100) {
    let power = "fly";
    console.log(`User power inside block: ${power}`);
}

// console.log(`User power outside block: ${power}`); 
// ❌ Error: power is not accessible outside block

// ==========================
// ⛔ One-line If (Avoid comma usage)
// ==========================

const balance = 1000;

if (balance > 500) console.log("test"), console.log("test2"); 
// ❗ This works but it's confusing — avoid using commas

// ✅ Better:
if (balance > 500) {
    console.log("test");
    console.log("test2");
}

// ==========================
// 🔁 Else If Ladder
// ==========================

if (balance < 500) {
    console.log("Less than 500");
} else if (balance < 750) {
    console.log("Less than 750");
} else if (balance < 900) {
    console.log("Less than 900");
} else {
    console.log("Less than 1200");
}

// ==========================
// ✅ Logical Operators (&&, ||)
// ==========================

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// AND (all conditions must be true)
if (userLoggedIn && debitCard && 2 === 3) {
    console.log("Allow to buy course");
}

// OR (any one condition is true)
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); // ✅ This will run
}
