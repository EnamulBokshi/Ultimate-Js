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


