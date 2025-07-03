// ==========================
// 🔀 SWITCH STATEMENT
// ==========================

// Syntax Template:
// switch (key) {
//     case value1:
//         // code block
//         break;
//     case value2:
//         // code block
//         break;
//     default:
//         // default code block
// }

const month = "march"; // The value we want to compare against multiple cases

// Start of switch statement: compares `month` to each case
switch (month) {
    case "jan":                      // If month === "jan"
        console.log("January");      // Print this line
        break;                       // Exit the switch block — prevents fallthrough

    case "feb":                      // If month === "feb"
        console.log("February");
        break;

    case "march":                    // If month === "march"
        console.log("March");        // ✅ This matches and gets executed
        break;                       // Exit switch to avoid running next cases

    case "april":                    // Will not run because "march" already matched
        console.log("April");
        break;

    default:                         // This runs only if no case matches
        console.log("Default case match");
        break;
}

