// ============ 🔗 Merging Arrays ============

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// ❌ Push puts the entire array as a single element
// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]); // "flash"

// ✅ concat() returns a new combined array
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// ✅ Spread operator is modern & flexible way
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros); 
// ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// ============ 🧱 Flattening Arrays ============

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// ✅ flat(Infinity) flattens all levels of nested arrays
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// ============ 🔍 Checking or Creating Arrays ============

// ✅ Check if value is an array
console.log(Array.isArray("Hitesh")); // false

// ✅ Convert string to array of characters
console.log(Array.from("Hitesh")); // ["H", "i", "t", "e", "s", "h"]

// ❗️Interesting: when input is an object (not iterable)
console.log(Array.from({ name: "hitesh" })); 
// [] — can't convert object to array unless it's array-like or iterable

// ============ 📦 Creating Array from Variables ============

let score1 = 100;
let score2 = 200;
let score3 = 300;

// ✅ Creates array from multiple values
console.log(Array.of(score1, score2, score3)); 
// [100, 200, 300]
