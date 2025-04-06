function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const person1 = new Person("Alice", "Smith");
const person2 = new Person("Bob",  "Johnson");

person1.name = "Alice";
person2.name = "Bob";
person1.greet = function() {
    console.log(`Hello, ${this.name}`);
};

person1.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}



// console.log(person1.getFullName())
/*
person1 has getFullName method
person2 does not
This property is not on the prototype
*/
// console.log(person2.getFullName()) // TypeError: person2.getFullName is not a function

/*
There is a way to share properties and methods between instances of a constructor function
by using the prototype property.
The prototype property allows us to add properties and methods to the constructor function's prototype object.
This means that all instances of the constructor function will have access to these properties and methods.
This is a way to create shared properties and methods that are not duplicated for each instance.
The prototype property is an object that is shared by all instances of the constructor function.
When we create a new instance of the constructor function, it inherits properties and methods from the prototype object.
This is called prototypal inheritance.
*/

// Adding a method to the prototype
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
// Adding a property to the prototype
// person1.getFullName() // Alice Smith
// person2.getFullName() // Bob Johnson
// Both instances have access to the getFullName method
// The getFullName method is not duplicated for each instance
// It is shared between all instances of the constructor function
// The prototype property is an object that is shared by all instances of the constructor function
// When we create a new instance of the constructor function, it inherits properties and methods from the prototype object
// This is called prototypal inheritance
// We could do the same thing with class based inheritance

function SuperHero(firstName, lastName, superPower) {
    Person.call(this, firstName, lastName);
    this.superPower = superPower;
}
// Inheriting from Person
SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.getSuperHero = function(){
    return `${this.getFullName()} with super power ${this.superPower}`;
}
const superman = new SuperHero("Clark", "Kent", "Flying");
const batman = new SuperHero("Bruce", "Wayne", "Rich");
console.log(superman.getSuperHero()) // Clark Kent with super power Flying
console.log(batman.getSuperHero()) // Bruce Wayne with super power Rich
// The getSuperHero method is not duplicated for each instance

function Villain(firstName, lastName, evilPower) {
    Person.call(this, firstName, lastName);
    this.evilPower = evilPower;
}
// Inheriting from Person
Villain.prototype = Object.create(Person.prototype);
Villain.prototype.getVillain = function(){
    return `${this.getFullName()} with evil power ${this.evilPower}`;
}
const joker = new Villain("Joker", "Smith", "Laughing gas");
const lexLuthor = new Villain("Lex", "Luthor", "Money");

console.log(joker.getVillain()) // Joker Smith with evil power Laughing gas
console.log(lexLuthor.getVillain()) // Lex Luthor with evil power Money

/*

In summary, prototypal inheritance allows us to create a chain of objects that inherit properties and methods from each other.
This is a powerful feature of JavaScript that allows us to create complex objects and share functionality between them.

In the above example, The Person constructor function is the parent or base function/object.
The SuperHero and Villain constructor functions are the child or derived functions/objects.
The child functions inherit properties and methods from the parent function using the prototype property.
and each child function has a unique method called getSuperHero and getVillain respectively.

*/

// note: we can replace this prototypal inheritance with class based inheritance by extending a base class into a drive or child class
// In the next chapter, we will learn about classes and see how to inherit properties from a base class to it's child classes
