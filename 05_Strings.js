const name = "hitesh";
const repoCount = 50;

// ❌ Not ideal: messy concatenation
// console.log(name + repoCount + " Value");

// ✅ Recommended: use template strings for clarity
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

// ------------------------------------------
// ✅ String Object & Properties
const gameName = new String('hitesh-hc-com');

// Accessing characters & internals
// console.log(gameName[0]);           // ✅ 'h'
// console.log(gameName.__proto__);    // ✅ Shows all string methods

// String properties and methods
// console.log(gameName.length);       // ✅ 13
// console.log(gameName.toUpperCase()); // ✅ "HITESH-HC-COM"

// ✅ charAt() — returns character at index
console.log(gameName.charAt(2));        // "t"

// ✅ indexOf() — finds index of a character
console.log(gameName.indexOf('t'));     // 2 (first occurrence)

// ✅ substring(start, end) — end is exclusive, doesn't support negatives
const newString = gameName.substring(0, 4);
console.log(newString);                // "hite"

// ✅ slice(start, end) — supports negative indexes
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);            // "" → -8 (from end) is before 4, so returns empty string

// ✅ trim() — removes leading/trailing spaces
const newStringOne = "   hitesh    ";
console.log(newStringOne);             // With spaces
console.log(newStringOne.trim());      // "hitesh"

// ✅ replace() — replaces first match only
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-'));   // "https://hitesh.com/hitesh-choudhary"

// ✅ includes() — checks if string contains substring
console.log(url.includes('sundar'));    // false

// ✅ split() — splits string into array based on delimiter
console.log(gameName.split('-'));       // ['hitesh', 'hc', 'com']
