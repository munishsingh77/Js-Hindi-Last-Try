let score = "hitesh" // ✅ OK: Declaring a string variable

// console.log(typeof score);       // ✅ OK: typeof returns 'string'
// console.log(typeof(score));      // ✅ OK: parentheses are optional with typeof

let valueInNumber = Number(score) // ✅ Converts string to number (will result in NaN)
// console.log(typeof valueInNumber); // ✅ 'number'
// console.log(valueInNumber);        // ❗️NaN — because "hitesh" is not a valid number

// Examples:
// "33"     => 33 ✅
// "33abc"  => NaN ❗️
// true     => 1 ✅
// false    => 0 ✅

let isLoggedIn = "hitesh" // ✅ OK: Non-empty string

let booleanIsLoggedIn = Boolean(isLoggedIn) // ✅ Converts to true (non-empty string is truthy)
// console.log(booleanIsLoggedIn); // ✅ true

// Examples:
// 1 => true ✅
// 0 => false ✅
// "" => false ✅
// "hitesh" => true ✅

let someNumber = 33 // ✅ OK

let stringNumber = String(someNumber) // ✅ Converts number to string
// console.log(stringNumber);         // ✅ "33"
// console.log(typeof stringNumber);  // ✅ "string"

// *********************** Operations ***********************

let value = 3 // ✅
let negValue = -value // ✅ Unary negation
// console.log(negValue); // ✅ -3

// Basic operations — ✅
/*
console.log(2 + 2);   // ✅ 4
console.log(2 - 2);   // ✅ 0
console.log(2 * 2);   // ✅ 4
console.log(2 ** 3);  // ✅ 8 (exponentiation)
console.log(2 / 3);   // ✅ 0.666...
console.log(2 % 3);   // ✅ 2 (remainder)
*/

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2 // ✅ String concatenation
// console.log(str3); // ✅ "hello hitesh"

// ❗️Below are **valid but not clean** — avoid mixing types in expressions:

// console.log("1" + 2);     // ✅ Outputs "12" (2 is converted to string)
// console.log(1 + "2");     // ✅ "12" again

// console.log("1" + 2 + 2); // ❌ BAD PRACTICE — confusing: "1" + 2 → "12", then +2 → "122"
// console.log(1 + 2 + "2"); // ❌ BAD PRACTICE — looks like math but becomes "32"

// ✅ Better: use parentheses to make things clear
// console.log("1" + (2 + 2)); // ✅ "14" — clear intention

// ❌ This is legal but **confusing and unreadable**:
console.log(3 + 4 * 5 % 3); 
// ❌ BAD PRACTICE — confusing order of operations (what runs first?)
// ✅ DO THIS INSTEAD:
console.log(((3 + 4) * 5) % 3); // ✅ Clear and readable

// Type coercion with unary operators:
console.log(+true); // ✅ 1 — converts boolean to number
console.log(+"");   // ✅ 0 — converts empty string to 0

// ❌ Avoid chained assignment like this:
let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // ❌ BAD PRACTICE — confusing and hard to debug
// ✅ Do this instead:
let result = 2 + 2
let a = result
let b = result
let c = result

let gameCounter = 100
++gameCounter; // ✅ Pre-increment
console.log(gameCounter); // ✅ 101

// ✅ Advanced Study: Type Conversion Spec
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
