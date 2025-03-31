// Array is a collection of items
let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
primes[0] = 1; // 1
primes[1] = 2; // 2
// and so one

// The last element of the array is at index length - 1
let lastElement = primes[primes.length - 1]; // 29

// Arrays of arrays
// An array can contain other arrays. This is called a multidimensional array.
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// The first element of the first array is at index 0, 0
let firstElement = matrix[0][0]; // 1
// The second element of the first array is at index 0, 1
let secondElement = matrix[0][1]; // 2
// and so one
// The last element of the last array is at index 2, 2
let lastElement2 = matrix[2][2]; // 9

// console.log(primes)
// (3) [Array(3), Array(3), Array(3)]


// Array operations
// 1. Adding an element to the end of an array
let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
// 2. Removing the last element of an array
arr.pop(); // [1, 2, 3]
// 3. Adding an element to the beginning of an array
arr.unshift(0); // [0, 1, 2, 3]
// 4. Removing the first element of an array
arr.shift(); // [1, 2, 3]
// 5. Adding an element to a specific index of an array
arr.splice(1, 0, 1.5); // [1, 1.5, 2, 3]
// 6. Removing an element from a specific index of an array
arr.splice(1, 1); // [1, 2, 3]
// 7. Removing mutiple elements from an array
arr.splice(1,2)


// Task on array
/*

Create a new empty array and save it in a variable called rainbow (see the section
“Adding an Element to an Array” on page 42 to see how to create a new empty array).
Your task is to add the colors of the rainbow ("Red", "Orange", "Yellow", "Green",
"Blue", "Indigo", "Violet") to this array, but with a twist: you must start by adding
"Green", and use push and unshift to add the rest. If you make a mistake, you can use
pop or shift to remove the color you just added

*/
let rainbow = [];
rainbow.push("Green");
rainbow.unshift("Yellow"); // ["Yellow", "Green"]
rainbow.push("Blue");// [ "Yellow", "Green","Blue"]
rainbow.push("Indigo"); // [ "Yellow", "Green","Blue","Indigo"]
rainbow.push("Violet"); // [ "Yellow", "Green","Blue","Indigo","Violet"]
rainbow.unshift("Orange") // [ "Orange", "Yellow", "Green","Blue","Indigo","Violet"]
rainbow.unshift("Red") // [ "Red", "Orange", "Yellow", "Green","Blue","Indigo","Violet"]    

// console.log(rainbow)

// Combining arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// 1. Using concat() method
let arr3 = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]
// 2. Using spread operator
let arr4 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
// 3. Using push() method
arr1.push(...arr2); // [1, 2, 3, 4, 5, 6]
// 4. Using unshift() method
arr1.unshift(...arr2); // [4, 5, 6, 1, 2, 3]
// 5. Using splice() method
arr1.splice(3, 0, ...arr2); // [1, 2, 3, 4, 5, 6]

// Finding the index of an element in an array

let sizes  = ["small", "medium", "large"];
// 1. Using indexOf() method
let index = sizes.indexOf("medium"); // 1
// 2. Using lastIndexOf() method
let index2 = sizes.lastIndexOf("medium"); // 1
// 3. Using findIndex() method
let index3 = sizes.findIndex((size) => size === "medium"); // 1
// 4. Using find() method
let index4 = sizes.find((s)=> s === "medium") // "medium"
// console.log(index4)

// Turning an array into a string

let beatles = ["John", "Paul", "George", "Ringo"];
let usingJoin = beatles.join();
console.log(usingJoin) // John,Paul,George,Ringo



// Other Useful Array Methods
// 1. Using reverse() method
let arr5 = [1, 2, 3];
arr5.reverse(); // [3, 2, 1]
// 2. Using sort() method
let arr6 = [3, 1, 2];
arr6.sort(); // [1, 2, 3]
// 3. Using fill() method
let arr7 = [1, 2, 3];
arr7.fill(0); // [0, 0, 0]
// 4. Using copyWithin() method
let arr8 = [1, 2, 3];
arr8.copyWithin(0, 1); // [2, 3, 3]
// 5. Using slice(start, end) method
let arr9 = [1, 2, 3];
let arr10 = arr9.slice(1, 2); // [2]
// 6. Using splice(start, deleteCount, item1, item2, ...) method
let arr11 = [1, 2, 3];
arr11.splice(1, 1, 4, 5); // [1, 4, 5, 3]
