
/**
 *  Case 1 : 
 *      a. If x is NaN, return false.
 *      b. If y is NaN, return false.
 */

console.log(NaN === 3); // false
console.log("string" === NaN); // false
console.log(NaN === NaN); // false , NaN is only value in javascript which is not equal to itself

/**
 *  Case 2 : -0 and +0 Comparision
 *      a. If x is +0 and y is -0, return true.
 *      b. If x is -0 and y is +0, return true.
 */

console.log(-0 === +0); // true
console.log(+0 === -0); // true

// SameValueNonNumber 

/** If x and y are the same Object value, return true. Otherwise, return false. */
let obj1 = { x : 10};
let obj2 = { x : 10};
let obj3 = { x : 10};

/* Key Value Pairs are same and objects looks identical but obj1, obj2 & obj3 present at different memory 
location. Javascript compares objects by reference not by value */
console.log(obj1 === obj2); // false 
console.log(obj1 === obj3); // false

console.log(obj1 === obj1);

