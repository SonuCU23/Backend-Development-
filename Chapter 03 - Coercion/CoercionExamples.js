
/* Coercion Case 1 */

let obj = { x: 10, y : 20};
let num = 23;

/* String Interpolation : Backticks are “extended functionality” quotes. They allow us to embed variables and 
expressions into a string by wrapping them in ${…} */

console.log(`The value of obj is ${obj}`); // The value of obj is [object Object]
console.log(`The value of num is ${num}`); // The value of num is 23

/* Coercion Case 2 */
console.log( 1 < 2 < 3); // true , 1 < 2 is true and true < 3 => 1 < 3 => true
console.log( 3 > 2 > 1); // false , 3 > 2 is true and true > 1 => 1 > 1 => false

/* NaN Coercion Cases */

console.log(Number(123)); // 123
console.log(Number("abc")); // NaN
console.log(Number("0xa")); // 10 (Hexadecimal)

// How we can check whether the value is NaN or not
let x = NaN;

console.log(x == NaN); // false (In JavaScript, NaN is the only value that is not equal to itself)

// Methods to check whether the value is NaN or not
console.log(isNaN(x)); // true
console.log(isNaN("Sonu Ray")); // true (because isNaN() converts its argument to a Number, and then tests it for being NaN)

console.log(Number.isNaN(x)); // true
console.log(Number.isNaN("Sonu Ray")); // false 

// How to check whether the value is NaN or not without using isNaN() or Number.isNaN() method
console.log(x !== x); // true (NaN is the only value that is not equal to itself)


/* Negative Zero Cases */
let a = -0;
console.log(x === 0); // true
console.log(x === -0); // true

// How to check whether the value is -0 or not
console.log(Object.is(x, 0)); // false
console.log(Object.is(x, -0)); // true

console.log(Math.sign(-3)); // -1
console.log(Math.sign(2)); // 1
console.log(Math.sign(0)); // 0
console.log(Math.sign(-0)); // -0

/**
 * For Boxing and Auto Boxing refer : https://javascript.plainenglish.io/javascript-boxing-wrappers-5b5ff9e5f6ab
 */