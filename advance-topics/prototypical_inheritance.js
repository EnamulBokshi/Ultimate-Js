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



console.log(person1.getFullName())
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
person1.getFullName() // Alice Smith
person2.getFullName() // Bob Johnson
// Both instances have access to the getFullName method
// The getFullName method is not duplicated for each instance
// It is shared between all instances of the constructor function
// The prototype property is an object that is shared by all instances of the constructor function
// When we create a new instance of the constructor function, it inherits properties and methods from the prototype object
// This is called prototypal inheritance
