
// Case 1 : If x is null and y is undefined, return true OR If x is undefined and y is null, return true.
console.log(null == undefined); 
console.log(undefined == null);

/**
 *  Case 2 : String and Number Comparison
 *       a. x -> number & y -> string then result => x == ToNumber(y)
 *       b. x -> string & y -> number then result => ToNumber(x) == y
 */

console.log(12 == "12");
console.log("abc" == 13); // NaN == 13 ( false )

/**
 *  Case 3 : Boolean Comparison
 *       a. x -> boolean then result => ToNumber(x) == y
 *       b. y -> boolean then result => x == ToNumber(y)
 */

console.log(false == "0"); // true

/**
 *  x -> boolean then ToNumber(x) i.e., ToNumber(false) = 0
 *  x = 0 (Number) and y = "0" (string) now x == y then ToNumber(y) i.e., ToNumber("0") = 0
 *  x == y i.e., 0 == 0 will give true
 */


/**
 *  Case 4 : Object Comparison
 *      a. If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
 *      b. If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison ToPrimitive(x) == y.
 */

let obj = { x : 10, valueOf(){return 100}};
console.log(99 - obj); // false
console.log(100 - obj); // true

console.log(obj - "100"); // true


/** IF NONE OF THE 9 RULES WHICH IS MENTIONED IN ECMASCRIPT DOCS APPLIES JUST RETURN "false" */
console.log(null == false); // false

/**
 *   x -> null , y -> false 
 *   y -> boolean then ToNumber(y) i.e., ToNumber(false) = 0 { Rule no. 7 }
 *   x -> null , y -> 9 (number) none of the 9 rule applies to this case hence return false
 */