// Nested function's scope
function outerFunction() {
    let outerVariable = "I'm from outer function";
    
    function innerFunction() {
        let innerVariable = "I'm from inner function";
        console.log(outerVariable); // Accessing outer variable
        console.log(innerVariable); // Accessing inner variable
    }
    
    innerFunction();
    }
outerFunction();

// Closures
function createCounter() {
    let count = 0; // Private variable

    return function() {
        count++; // Increment the private variable
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2


// IIFE (Immediately Invoked Function Expression)
(function() {
    let message = "This is an IIFE";
    console.log(message);
})();
// The variable 'message' is not accessible here
// because it's scoped to the IIFE

// Currying 
function add(a) {
    return function(b) {
        return a + b;
    };
}
const addFive = add(5);
console.log(addFive(3)); // 8
console.log(add(2)(3)); // 5

function sum(a,b,c){
    return a+b+c;
}

function curry(fn){
    return (a) => {
        return (b) => {
            return (c) => {
                return fn(a,b,c)
            }
        }
    }
}

const cr = curry(sum);
// console.log(cr(2)(4)(6));
const add1 = cr(1);
const add2 = add1(2);
const add3 = add2(3);
// console.log(add3); // 6


/* 
this keyword
1. In a method, this refers to the owner object.
2. Alone, this refers to the global object.
3. In a function, this refers to the global object.
4. In an event, this refers to the element that triggered the event.
5. In a constructor function, this refers to the newly created object.
6. In strict mode, this is undefined.
7. In an arrow function, this refers to the lexical scope (the surrounding context).
// Arrow functions do not have their own 'this' context
8. In a class method, this refers to the instance of the class.

There are some exceptions to these rules, such as when using call(), apply(), or bind() methods to explicitly set the value of this.

There are 4 ways to determine 'this'
1. Implicit binding
2. Explicit binding
3. New binding
4. Default binding
1. Implicit binding: When a function is called as a method of an object, the object is bound to this.
2. Explicit binding: When a function is called with call(), apply(), or bind(), the first argument is bound to this.
3. New binding: When a function is called with new, this refers to the newly created object.
4. Default binding: When a function is called without any context, this refers to the global object (window in browsers) or undefined in strict mode.
*/

// Implicit binding
const person = {
    name: "Alice",
    greet: function(){
        console.log(`Hello, ${this.name}`); // 'this' refers to the global object
    }
}

person.greet(); // Hello, Alice

// Explicit binding
function greet() {
    console.log(`Hello, ${this.name}`);
}

const person1 = {
    name: "Bob"

};

const person2 = {
    name: "Charlie"
};
greet.call(person1); // Hello, Bob
greet.apply(person2); // Hello, Charlie

// New binding
function Person(name){
    // this = {}; here 'this' refers to the new  empty object
    this.name = name;
    this.greet = function(){
        console.log(`Hello, ${this.name}`);
    }
}
const alice = new Person("Alice");
alice.greet(); // Hello, Alice

// Default binding
function greet(){
    console.log(`Hello, ${this.name}`); // 'this' refers to the global object
}

// const name = "Global";
globalThis.name = "Global"; // In Node.js, use globalThis
// In browsers, use window.name
// In Node.js, use global.name
greet(); // Hello, Global

/*
Order of precedence for 'this'
1. New binding
2. Explicit binding
3. Implicit binding
4. Default binding
*/


// Arrow functions
const arrowGreet = () => {
    console.log(`Hello, ${this.name}`); // 'this' refers to the lexical scope
}
const name2 = "Arrow Global";
arrowGreet(); // Hello, Arrow Global



// Function Hoisting
function hoistedFunction() {
    console.log("This function is hoisted!");
}
hoistedFunction(); // This function is hoisted!


// Partial Application
function multiply(a, b) {
    return a * b;
}
const double = multiply.bind(null, 2); // Partial application
console.log(double(5)); // 10

// Memoization
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10)); // 55
console.log(memoizedFibonacci(20)); // 6765


// Function Composition
function compose(...fns) {
    return function(arg) {
        return fns.reduceRight((acc, fn) => fn(acc), arg);
    };
}


function addOne(x) {
    return x + 1;
}
function multiplyByTwo(x) {
    return x * 2;
}
const composedFunction = compose(multiplyByTwo, addOne);
console.log(composedFunction(3)); // (3 + 1) * 2 = 8
//
// Function Chaining
class Calculator {
    constructor(value = 0) {
        this.value = value;
    }
    add(x) {
        this.value += x;
        return this; // Return the instance for chaining
    }
    subtract(x) {
        this.value -= x;
        return this; // Return the instance for chaining
    }
    multiply(x) {
        this.value *= x;
        return this; // Return the instance for chaining
    }
    getValue() {
        return this.value;
    }
}
const calculator = new Calculator();
console.log(calculator.add(5).subtract(2).multiply(3).getValue()); // ((0 + 5) - 2) * 3 = 9
// Function Decorators
function logExecutionTime(fn) {
    return function(...args) {
        const start = performance.now();
        const result = fn(...args);
        const end = performance.now();
        console.log(`Execution time: ${end - start} ms`);
        return result;
    };
}
function slowFunction() {
    for (let i = 0; i < 1e7; i++) {} // Simulate a slow operation
    return "Done";
}
const decoratedFunction = logExecutionTime(slowFunction);
console.log(decoratedFunction()); // Logs execution time

// Function Overloading
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + ' ' + b;
    }
}
console.log(add(2, 3)); // 5
console.log(add("Hello", "World")); // "Hello World"
// Function Binding
function greet() {
    console.log(`Hello, ${this.name}`);
}
// const person = {
//     name: "Alice"
// };
// const boundGreet = greet.bind(person);
// boundGreet(); // "Hello, Alice"
// Function Unbinding
function unbind(fn, context) {
    return function(...args) {
        return fn.apply(context, args);
    };
}
const unboundGreet = unbind(greet, person);
unboundGreet(); // "Hello, Alice"
// Function Rest Parameters
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
