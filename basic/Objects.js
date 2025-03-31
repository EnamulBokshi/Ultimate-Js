/*

Objects are another data type in JavaScript. They are used to store collections of data and more complex entities.
Objects are mutable, meaning that their properties can be changed after they are created.
Objects are created using curly braces {} or the Object() constructor.
Objects can contain properties and methods.
Properties are key-value pairs, where the key is a string and the value can be any data type.
Methods are functions that are associated with an object.

*/

// Creating an object
let person = {
    name: "John",
    age: 30,
    city: "New York",
    getDetails: ()=>{
        return `${this.name} is ${this.age} years old and lives in ${this.city}.`;
    }
}
console.log(person.getDetails);

// Getting an Object's keys
let keys = Object.keys(person);
console.log(keys); // ["name", "age", "city", "getDetails"]
// Getting an Object's values
let values = Object.values(person);
console.log(values); // ["John", 30, "New York", ƒ]
// Getting an Object's entries
let entries = Object.entries(person);
console.log(entries); // [["name", "John"], ["age", 30], ["city", "New York"], ["getDetails", ƒ]]



// Combining objects
let person1 = {
    name: "Enamul",
    age: 26,
}
let info1 = {
    city: "Dhaka",
    country: "Bangladesh",
}
let fullInfo = Object.assign({},person1,info1)
console.log(fullInfo)

//  Nesting objects with arrays
// Nesting with literals

let trilogies = [
    {
        title: "His Dark Materials",
        author: "Philip Pullman",
        books: ["Northern Lights","The Subtle Knife", "The Amber Spyglass"]
    },
    {
        title: "The Lord of the Rings",
        author: "N.K. Jemisin",
        books: ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"]
    }
];
// console.log(trilogies[0].title) // His Dark Materials
