function sayHello(){
    console.log("Hello World!!")
}
// sayHello();

const add = (a, b) =>{
    return a + b;
}

// console.log(add(2, 3)); // 5

// Rest Parameters

const calc = (operator, ...values)=>{
    let result = 0;
    switch(operator){
        case "+":
            result = values.reduce((prevValue,currentValue)=> prevValue + currentValue, 0);
            break;
        case "-":
            result = values.reduce ((prevValue,currentValue)=> prevValue - currentValue, 0);
            break;
        case "*":
            result = values.reduce (( prevValue, currentValue) => prevValue * currentValue, 1);
            break;
        case "/":
            result = values.reduce ((prevValue, currentValue) => prevValue / currentValue, 1);
            break;
        default:
            console.log("Invalid operator");
            break;
    }
    return result;
}
// console.log(calc("+", 1, 2, 3, 4)); // 10
// console.log(calc("-", 10, 2, 3)); // 5
// console.log(calc("*", 2, 3, 4)); // 24
// console.log(calc("/", 10, 2)); // 5
// console.log(calc("%", 10, 2)); // Invalid operator

// setInterval(() => {
//     console.log("Hello World");
// },2000);
// setTimeout(() => {
//     console.log("Hello World 1");
// }, 2000);
// console.log("Hello World 2");



/* 
 
 Higher Order Functions
 Higher order functions are functions that take other functions as arguments or return functions as their result.
 Higher order functions are a key feature of functional programming.
 They allow you to create more abstract and reusable code.
 In above, we already used higher order functions which are setInterval and setTimeout. Both of these functions take a callback function as an argument and execute it later.
 We can also create our own higher order functions.

 */

//  Let's see some examples of higher order functions
// 1. map() function
 let numbers = [1,2,3,4,5];
//  Transforming the array using map
 let squares = numbers.map((number) => number * number);
// console.log(squares); // [1, 4, 9, 16, 25]

// 2. filter() function
let evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers); // [2, 4]

// 3. reduce() function
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // 15

// 4. forEach() function
let sum1 = 0;
numbers.forEach((number) => {
    sum1 += number;
});
// console.log(sum1); // 15

// 5. every() function
let allEven = numbers.every((number) => number % 2 === 0);
// console.log(allEven); // false
/*
    All of these functions takes a callback function as an argument and execute it on each element of the array.
    The map() function creates a new array with the results of calling a provided function on every element in the calling array.

*/

const sockets = [
    {name: "Socket 1", status: "open",number:1},
    {name: "Socket 2", status: "closed",number:2},
    {name: "Socket 3", status: "open",number:3},
    {name: "Socket 4", status: "closed",number:4},
    {name: "Socket 5", status: "open",number:5},
]
const numberes = sockets.map((sockets) => sockets.number);
// console.log(numberes) // [1, 2, 3, 4, 5]



// Custome Higher Order Function

const doubler = (callbak) => {
    callbak();
    callbak();
}

doubler(() => {
    console.log("Hello World");
})

const customMap = (array, callback)=>{
    let result = [];
    for (let i = 0; i < array.length; i++){
        result.push(callback(array[i], i, array))
    }
    return result;
} 

const customMapResult = customMap(sockets, (sockets) => sockets.number);
// console.log(customMapResult) // [1, 2, 3, 4, 5]
// The customMap function takes an array and a callback function as arguments.
// It creates a new array and pushes the result of calling the callback function on each element of the array.
// It returns the new array.
//
// The customMap function is a simplified version of the map() function.
// It does not handle edge cases like empty arrays, non-array arguments, etc.
// It is just for demonstration purposes.
//

// Higher Order Function, That return function

const makeApplePie = (apple)=>{
    return (sugar)=>{
        return `Apple pie with ${apple} and ${sugar}`;
    }
}

const applePie = makeApplePie("green apple");
// console.log(applePie("white sugar")); // Apple pie with green apple and white sugar
// console.log(applePie("brown sugar")); // Apple pie with green apple and brown sugar
const makeAppender = (suffix)=>{
    return (text)=>{
        return text + suffix;
    }
}
const exciting = makeAppender("!!!");
console.log(exciting("Hello World")); // Hello World!!!

const puzzling = makeAppender("???");
console.log(puzzling("Goodbye")); // Goodbye???