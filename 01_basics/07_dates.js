// ✅ Creating a date object
let myDate = new Date();

// Different formats of output:
// console.log(myDate.toString());         // Full readable string with timezone
// console.log(myDate.toDateString());     // Only date portion
// console.log(myDate.toLocaleString());   // Local time formatting
// console.log(typeof myDate);             // object

// ✅ Creating custom date objects in different formats:

// Month is 0-based in JS Date (0 = Jan, 11 = Dec)
let myCreatedDate = new Date(2023, 0, 23);           // Jan 23, 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);   // Jan 23, 2023, 05:03 AM
// let myCreatedDate = new Date("2023-01-14");        // YYYY-MM-DD format (ISO)
// let myCreatedDate = new Date("01-14-2023");        // MM-DD-YYYY (US format)

// console.log(myCreatedDate.toLocaleString());      // Formatted output

// ✅ Timestamps
let myTimeStamp = Date.now();  // Current time in ms since Jan 1, 1970

// console.log(myTimeStamp);                     // e.g. 1720251781012
// console.log(myCreatedDate.getTime());         // Timestamp of created date
// console.log(Math.floor(Date.now() / 1000));   // Unix timestamp in seconds

// ✅ Getting individual parts of current date
let newDate = new Date();

console.log(newDate);                 // Full Date object
console.log(newDate.getMonth() + 1); // Month (0-based, so +1)
console.log(newDate.getDay());       // Day of week (0 = Sunday)

// ✅ Fancy formatted string (custom format)
console.log(
    newDate.toLocaleString("default", {
    weekday: "long",       // "Tuesday"
    year: "numeric",       // "2025"
    month: "long",         // "July"
    day: "numeric",        // "2"
    hour: "2-digit",       // "12"
    minute: "2-digit",     // "33"
    second: "2-digit",     // "45"
    timeZoneName: "long",  // "India Standard Time"
    })
);
