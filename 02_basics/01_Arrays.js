// ==========================
// ✅ Creating Arrays
// ==========================

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4); // Another way to create an array

// console.log(myArr[1]); // 👉 1 (access by index)


// ==========================
// ✅ Array Methods
// ==========================

// Add to end
// myArr.push(6);    // [0,1,2,3,4,5,6]
// myArr.push(7);    // [0,1,2,3,4,5,6,7]

// Remove last
// myArr.pop();      // Removes last element

// Add to beginning
// myArr.unshift(9); // [9,0,1,2,3,4,5]

// Remove first
// myArr.shift();    // Removes first element

// Check if value exists
// console.log(myArr.includes(9)); // false (was removed)
// console.log(myArr.indexOf(3));  // 3 (index of value 3)

// Convert to string
// const newArr = myArr.join(); // "0,1,2,3,4,5"
// console.log(newArr);


// ==========================
// ✅ slice() vs splice()
// ==========================

console.log("A ", myArr); // 👉 A  [0, 1, 2, 3, 4, 5]

// ✅ slice(start, end) — returns a shallow copy (end NOT included)
const myn1 = myArr.slice(1, 3); 
console.log("Slice Result:", myn1);   // 👉 [1, 2]
console.log("B ", myArr);            // 👉 B  [0, 1, 2, 3, 4, 5] — original not changed

// ✅ splice(start, deleteCount) — modifies the original array
const myn2 = myArr.splice(1, 3); 
console.log("C ", myArr);            // 👉 [0, 4, 5] — 1,2,3 removed
console.log("Splice Result:", myn2); // 👉 [1, 2, 3]
