const accountId = 187373   
let accountEmail = "munihssight75@gmail.com"
var accountPassword = "12345678"
accountCity = "Karachi"// Its not good practice to declare variables without var, let, or const, but it works in JavaScript,so it is treated as a global variable.
let accountState; // accountState is declared but not initialized, so it will be undefined.

//accountId = 123456 // This is allowed since accountId is declared with const, it cannot be reassigned.

accountEmail = "hellomunish5@gmail.com" // This will throw an error because accountEmail is already declared with let.
accountPassword = "123456789" // This will work since accountPassword is declared with var, it can be reassigned.
accountCity = "Lahore" // This will work since accountCity is not declared with

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); // "

/*  
prefer not to use var
because of usue in block scope and funtional scope
*/