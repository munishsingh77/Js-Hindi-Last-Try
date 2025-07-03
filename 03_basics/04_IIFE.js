// ==========================
// ⚡ Immediately Invoked Function Expression (IIFE)
// ==========================

// 🔸 Named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})();  // ⬅️ Don't forget the semicolon if another IIFE follows

// 🔸 Unnamed Arrow Function IIFE with Parameter
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');

// if you're using multiple IIFEs back-to-back, 
// always end the first one with a semicolon (;) — or else JavaScript will throw an error or behave unexpectedly.


