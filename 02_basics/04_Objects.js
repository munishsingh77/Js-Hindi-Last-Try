// ✅ Creating Objects

// const tinderUser = new Object()  // Old way (also works)
const tinderUser = {};              // Preferred modern way

// Adding properties
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// ✅ Nested Objects

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};

console.log(regularUser.fullname.userfullname.firstname);  // hitesh

// ✅ Combining Objects

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// ❌ Wrong way: nested under obj1 & obj2 keys
// const obj3 = { obj1, obj2 }; 

// ✅ Using Object.assign (older way)
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// ✅ Using spread operator (modern & clean)
const obj3 = { ...obj1, ...obj2, ...obj4 };
console.log(obj3);  // {1: 'a', 2: 'b', 3: 'a', 4: 'b', 5: 'a', 6: 'b'}

// ✅ Array of Objects (e.g. users)

const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "a@gmail.com" },
    { id: 3, email: "b@gmail.com" }
];

console.log(users[1].email);  // a@gmail.com

// ✅ Object Methods

console.log(Object.keys(tinderUser));      // ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser));    // ['123abc', 'Sammy', false]
console.log(Object.entries(tinderUser));   // [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// ✅ Destructuring Objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// Extract with aliasing
const { courseInstructor: instructor } = course;

console.log(instructor);  // hitesh

// ✅ JSON Format (e.g. from API)
// This is just a data format, not actual JS
/*
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
*/

// ✅ Array of Objects (again, common in APIs)
[
    { name: "User1", id: 1 },
    { name: "User2", id: 2 },
    { name: "User3", id: 3 }
];

