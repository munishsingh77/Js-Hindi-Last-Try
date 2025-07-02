// ✅ Basic comparisons — completely valid and predictable
// console.log(2 > 1);   // ✅ true
// console.log(2 >= 1);  // ✅ true
// console.log(2 < 1);   // ✅ false
// console.log(2 == 1);  // ✅ false
// console.log(2 != 1);  // ✅ true

// ✅ Comparisons with strings (JavaScript auto converts strings to numbers)
/// These are **valid but may confuse beginners**
// console.log("2" > 1);   // ✅ true — "2" is converted to number 2
// console.log("02" > 1);  // ✅ true — "02" is converted to 2

// ❗️Now comes the tricky part — comparison with `null`

console.log(null > 0);     // ❌ false — tricky behavior!
// ❗️Because: null is converted to 0 → 0 > 0 → false

console.log(null == 0);    // ❌ false — because null only equals undefined, not 0
// ❗️null == 0 is false because `==` does not convert null to number here

console.log(null >= 0);    // ✅ true — WHY? Because null is converted to 0 → 0 >= 0 → true
// ❗️This makes it very confusing — avoid comparing null using >, <, >=, <=

/// ✅ Rule: **never use relational operators with null or undefined** — confusing results

// Comparisons with `undefined`
console.log(undefined == 0); // ❌ false — undefined is only loosely equal to null
console.log(undefined > 0);  // ❌ false — undefined becomes NaN, and NaN is never > any number
console.log(undefined < 0);  // ❌ false — same reason (NaN involved)

// ✅ Use === instead of == for clarity and type safety
console.log("2" === 2); // ❌ false — different types: string !== number
// ✅ Use === to avoid type coercion surprises
