// Type Coercion in JavaScript
// Type coercion is the automatic or implicit conversion of values from one data type to another.
// In JavaScript, type coercion can occur in two ways:
// 1. Implicit coercion: JavaScript automatically converts one type to another.
// 2. Explicit coercion: The programmer manually converts one type to another using functions or methods.
// Implicit Coercion

// As an example, consider the following code:
let a_numer = 5;
let b_string = "10";
let result = a_numer + b_string; // "510"
// In this case, JavaScript automatically converts the number 5 to a string and concatenates it with "10", resulting in "510".

// In some cases, Boolean values can also be coerced into numbers. For example:
let a_boolean = true;
let b_number = 1;
let result2 = a_boolean + b_number; // 2
// Here, true is coerced into 1, and the result is 2.
// Similarly, false is coerced into 0:
let a_boolean2 = false;
let b_number2 = 1;
let result3 = a_boolean2 + b_number2; // 1
//  0 + 1 = 1
// Explicit Coercion
// Explicit coercion is when the programmer manually converts one type to another.
// JavaScript provides several functions and methods for explicit coercion.
// For example, to convert a string to a number, you can use the Number() function:
let str_number = "10";
let num = Number(str_number); // 10
// To convert a number to a string, you can use the String() function:
let num2 = 10;
let str = String(num2); // "10"
// To convert a string to a Boolean, you can use the Boolean() function:
let str_boolean = "true";
let bool = Boolean(str_boolean); // true
// To convert a number to a Boolean, you can use the Boolean() function:
let num3 = 0;
let bool2 = Boolean(num3); // false
// To convert an object to a Boolean, you can use the Boolean() function:
let obj = {};
let bool3 = Boolean(obj); // true
// To convert an array to a Boolean, you can use the Boolean() function:
let arr = [];
let bool4 = Boolean(arr); // true
// To convert a null value to a Boolean, you can use the Boolean() function:
let null_value = null;
let bool5 = Boolean(null_value); // false
// To convert an undefined value to a Boolean, you can use the Boolean() function:
let undefined_value = undefined;
let bool6 = Boolean(undefined_value); // false


// Equality with Coercion
// JavaScript has two equality operators: == and ===.
// The == operator performs type coercion, while the === operator does not.
// For example:
let a = 5;
let b = "5";
let isEqual = a == b; // true
let isStrictEqual = a === b; // false
// In this case, the == operator coerces the string "5" into a number, resulting in true.
// The === operator does not perform type coercion, so it returns false.
//
// Similarly, when comparing Boolean values, the == operator performs type coercion:
let a_boolean3 = true;
let b_boolean = 1;
let isEqual2 = a_boolean3 == b_boolean; // true
let isStrictEqual2 = a_boolean3 === b_boolean; // false
// In this case, the == operator coerces the number 1 into a Boolean, resulting in true.
// The === operator does not perform type coercion, so it returns false.
// 0 == false // true
// 0 === false // false
// NaN == NaN // false
// NaN === NaN // false
// null == undefined // true
// null === undefined // false
// "" = false // false
// "" == 0 // true
// "" === 0 // false
// false == 0 // true
// false === 0 // false
// true == 1 // true
// true === 1 // false
// true == "1" // true
// true === "1" // false
// 0 != false // false
// 0 !== false // true
// 0 != null // false
// 0 !== null // true
// 0 != undefined // false
// 0 !== undefined // true
// 0 != NaN // false
// 0 !== NaN // true
// 0 != "" // false
// 0 !== "" // true

// Truthiness
// In JavaScript, values can be either truthy or falsy.
// Truthy values are values that evaluate to true in a Boolean context.
// Falsy values are values that evaluate to false in a Boolean context.
// The following values are considered falsy:
// 1. false
// 2. 0
// 3. -0
// 4. 0n
// 5. "", '', `` (empty string)
// 6. null
// 7. undefined
// 8. NaN
// All other values are considered truthy.
// For example:
// let aa = 1;
// let bb = 0;
// let isTrue = Boolean(aa); // true
// !0 // true
// !1 // false
// !"" // true
// !"hello" // false
// !null // true
// !undefined // true
// !NaN // true
// !false // true
// !true // false
// ![] // false
// !{} // false
// console.log(![])

// !{} // false
// !null // true


// console.log(15&&17) // 17
// console.log(15||17) // 15
// console.log(0||17) // 17
// console.log(0&&17) // 0
// console.log(0||false) // false
// console.log(0&&false) // 0
// console.log("" || "hello") // hello
// console.log("" && "hello") // ""
// console.log("hello" || "") // hello
// console.log("hello" && "") // ""
// console.log(0 == false) // true
// console.log(0 === false) // false
// console.log(0 == "") // true
// console.log(0 === "") // false
// console.log(0 == null) // false



// Uses for Truthiness
// Truthiness is often used in conditional statements to check if a value is truthy or falsy.
// For example:
let name;
name = name || "No name provided";
console.log(name); // No name provided

let age = 0;
age = age || 18;
console.log(age); // 18
// In this case, if name is falsy (undefined), it will be assigned the value "No name provided".