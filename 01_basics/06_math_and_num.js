// =========================
// 🚀 Working with Numbers
// =========================

const score = 400;
// console.log(score); // 400

const balance = new Number(100); // wrapped as Number object
// console.log(balance); // [Number: 100]

// Convert to string and check length
// console.log(balance.toString().length); // "100" => 3

// Fix decimal places
// console.log(balance.toFixed(1)); // "100.0"

const otherNumber = 123.8966;
// .toPrecision() gives a formatted string with significant digits
// console.log(otherNumber.toPrecision(4)); // "123.9"

const hundreds = 1000000;
// Format with commas (India-style)
// console.log(hundreds.toLocaleString('en-IN')); // "10,00,000"



// =========================
// 🔢 Math Operations
// =========================

// console.log(Math); // Object with all math functions

// Absolute value
// console.log(Math.abs(-4)); // 4

// Rounding
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2));  // 5 (round up)
// console.log(Math.floor(4.9)); // 4 (round down)

// Min/Max
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8



// =========================
// 🎲 Random Numbers
// =========================

// Basic random number (0 <= x < 1)
console.log(Math.random()); // e.g., 0.3748

// Random number between 1 and 10 (may include decimals)
console.log((Math.random() * 10) + 1); // e.g., 7.392

// Random whole number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // e.g., 6

// Random whole number in custom range (min to max)
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// e.g., random number between 10 and 20
