/*
Let's ovrride the default string iterator
*/

let str = "hello";
let strIterator = str[Symbol.iterator]();
console.log(strIterator) // Object [String Iterator] {}
console.log(strIterator.next()) // { value: 'h', done: false }
console.log(strIterator.next()) // { value: 'e', done: false }
console.log(strIterator.next()) // { value: 'l', done: false }
console.log(strIterator.next()) // { value: 'l', done: false }
console.log(strIterator.next()) // { value: 'o', done: false }
console.log(strIterator.next()) // { value: undefined, done: true }

// we can get the iterator value, like:
let newStrIterator = str[Symbol.iterator]();
console.log(newStrIterator.next().value) // h
console.log(newStrIterator.next().value) // e
console.log(newStrIterator.next().value) // l