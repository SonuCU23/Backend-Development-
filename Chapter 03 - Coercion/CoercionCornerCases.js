// ToString() -> "" + value
console.log("" + 0); // 0 -> "0"
console.log("" + (-0)); // -0 -> "0"

console.log("" + []); // [] -> "" (empty string)
console.log("" + {}); // [object Object]

console.log("" + [1,2,3]); // "1,2,3"
console.log("" + [null, undefined]); // ","
console.log("" + [1,2,null, 3, 4, undefined]);

// ToNumber() 
console.log(0 - "010"); // decimal
console.log(0 - "O10"); 
console.log(0 - "0xb"); // hexadecimal
console.log(0 - 0xb); // hexadecimal

console.log([] - 1);
console.log([""] - 1);
console.log(["0"] - 1);
console.log([6] - 1);
