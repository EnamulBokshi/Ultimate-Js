# JavaScript Functions and Higher-Order Functions

This document provides an overview of the JavaScript code in `basic/functions.js`. The code demonstrates various concepts related to functions, including:

-   **Basic Functions:** Definition and invocation of simple functions.
-   **Arrow Functions:** Concise syntax for writing functions.
-   **Rest Parameters:**  Using the rest parameter syntax to accept an indefinite number of arguments.
-   **Higher-Order Functions:** Functions that take other functions as arguments or return functions as their results.

## Examples

### Basic Function

```javascript
function sayHello(){
    console.log("Hello World!!")
}
```

### Arrow Function

```javascript
const add = (a, b) =>{
    return a + b;
}
```

### Rest Parameters

```javascript
const calc = (operator, ...values)=>{
    // ... implementation ...
}
```

### Higher-Order Functions

The code demonstrates the use of built-in higher-order functions like `map`, `filter`, `reduce`, `forEach`, and `every`. It also includes a custom `customMap` function.

#### `map()`

```javascript
let numbers = [1,2,3,4,5];
let squares = numbers.map((number) => number * number);
// console.log(squares); // [1, 4, 9, 16, 25]
```

#### `filter()`

```javascript
let numbers = [1,2,3,4,5];
let evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers); // [2, 4]
```

#### `reduce()`

```javascript
let numbers = [1,2,3,4,5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // 15
```

#### `forEach()`

```javascript
let numbers = [1,2,3,4,5];
let sum1 = 0;
numbers.forEach((number) => {
    sum1 += number;
});
// console.log(sum1); // 15
```

#### `every()`

```javascript
let numbers = [1,2,3,4,5];
let allEven = numbers.every((number) => number % 2 === 0);
// console.log(allEven); // false
```

#### Custom `customMap()`

```javascript
const customMap = (array, callback)=>{
    let result = [];
    for (let i = 0; i < array.length; i++){
        result.push(callback(array[i], i, array))
    }
    return result;
} 

const sockets = [
    {name: "Socket 1", status: "open",number:1},
    {name: "Socket 2", status: "closed",number:2},
    {name: "Socket 3", status: "open",number:3},
    {name: "Socket 4", status: "closed",number:4},
    {name: "Socket 5", status: "open",number:5},
]
const customMapResult = customMap(sockets, (sockets) => sockets.number);
// console.log(customMapResult) // [1, 2, 3, 4, 5]
```
