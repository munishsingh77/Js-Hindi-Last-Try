// ==========================
// 🔁 Basic Function
// ==========================

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();  // Output: H I T E S H

// ==========================
// ➕ Function with Return
// ==========================

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
console.log("Result:", result);  // Output: Result: 8

// ==========================
// 🙍‍♂️ Default Parameters + Condition
// ==========================

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("hitesh"));  // Output: hitesh just logged in
console.log(loginUserMessage());          // Output: sam just logged in

// ==========================
// 🛒 Using Rest Parameters
// ==========================

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));
// Output: [500, 2000]

// 🧠 Tip: `val1` and `val2` take first two values, the rest go into `num1` array

// ==========================
// 🧾 Function Accepting Object
// ==========================

const user = {
    username: "hitesh",
    price: 199
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user); // Output: Username is hitesh and price is 199

// Passing object directly
handleObject({
    username: "sam",
    price: 399
});

// ==========================
// 📦 Function Accepting Array
// ==========================

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));        // Output: 400
console.log(returnSecondValue([200, 400, 500]));   // Output: 400
