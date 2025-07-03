// ==========================
// ✅ Truthy & Falsy Check
// ==========================

const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// 🧠 Even though `userEmail` is an empty array, it's still a **truthy** value

// ==========
// ⚠️ Special Falsy Values:
// ==========
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// ==========
// ✅ Common Truthy Values:
// ==========
// "0", 'false', " " (space string), [], {}, function(){}

// ==========
// Check if array is empty:
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// ==========
// Check if object is empty:
const emptyObj1 = {};

if (Object.keys(emptyObj1).length === 0) {
    console.log("Object is empty");
}

// ==========================
// 🤯 Nullish Coalescing Operator (??)
// ==========================

// ✅ Only returns right-hand value if left is **null or undefined**
// ⚠️ It does NOT treat "", false, or 0 as nullish (unlike || operator)

let val1;
// val1 = 5 ?? 10         // 5
// val1 = null ?? 10      // 10
// val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 20   // ✅ returns first non-nullish => 10

console.log(val1);

// ==========================
// 🎯 Ternary Operator
// ==========================
// condition ? valueIfTrue : valueIfFalse

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than or equal to 80") : console.log("more than 80");

// ==========================
// 🤓 Advanced Logic: Truthy, Nullish & Ternary
// ==========================

// ✅ Truthy & Falsy Check
const userEmail2 = [];

if (userEmail2) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// ❗ Even though `userEmail` is an empty array, it's still a truthy value

// ❌ Falsy Values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// ✅ Truthy Values: "0", 'false', " ", [], {}, function(){}

// Check if array is empty:
if (userEmail2.length === 0) {
    console.log("Array is empty");
}

// Check if object is empty:
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// ✅ Nullish Coalescing Operator (??)
let val2;
// val2 = 5 ?? 10         // 5
// val2 = null ?? 10      // 10
// val2 = undefined ?? 15 // 15
val2 = null ?? 10 ?? 20   // ✅ returns first non-nullish => 10
console.log(val2);

// ✅ Ternary Operator
const iceTeaPrice2 = 100;
iceTeaPrice2 <= 80 ? console.log("less than or equal to 80") : console.log("more than 80");
