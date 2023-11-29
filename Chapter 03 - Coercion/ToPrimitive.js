
/** CASE 1 */

let obj = {};

console.log(10 - obj); 
/* 

ToPrimitive(obj, Number) -> OrdinaryToPrimitive(obj, "Number") -> MethodNames = [valueOf,toString]
    obj.valueOf -> object  continue loop
    obj.toString -> [object Object] (type String i.e., non object type) -> return [objet Object]
    
    Now ToNumber("[object Object]") -> "[object Object]" can't be converted to number so it will return NaN
     10 - NaN => NaN
*/

console.log(obj - obj); // NaN

/** CASE 2 */

let obj1 = { x : 8, y : 10}; 

/** 
 *  Result will remain the same because whatever key value pair in object doesn't matter. It matters only on
 *  toString & valueOf
 * */ 

console.log(100 - obj1); // NaN

/** CASE 3 */

let obj2 = {
    x : 7,
    valueOf(){
        // by default it returns same object
        return 99;
    }
};

console.log( 100 - obj2); // 1

/**
 *  ToNumber(obj2) -> ToPrimitive(obj2 , Number) -> OrdinaryToPrimitive(obj2, "Number")
 *  Now methodNames = [valueOf, toString], calling forEach on MethodNames
 *      1. valueOf() -> 99 ( non object type ) -> return 99
 *      
 *  100 - 99 ----> 1  
 */

let obj3 = { x : 8, toString(){return "88"}};
console.log(90 - obj3); // toSting() -> "88" -> ToNumber("88"); -> 90 - 88 = 2

let obj4 = { x : 8, toString(){return {}}}; // returning empty Object
console.log( 100 -obj4); // Can't convert into non object type hene Throw a TypeError exception. 