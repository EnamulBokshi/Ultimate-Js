
// Let's create a class called Person with properties firstName and lastName
// and a method getFullName that returns the full name of the person.
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

/*

Person is the parent class
let's create two child classes clalled SuperHero and Villain
and they will inherit from the Person class
SuperHero will have a property called superPower
Villain will have a property called evilPower
and a method getVillain that returns the full name of the villain and the evil power.
The getVillain method will be similar to the getSuperHero method
*/

// Let's create a class called SuperHero that inherits from the Person class
class SuperHero extends Person {
    constructor(firstName, lastName, superPower)
    {
        super(firstName, lastName); // calling the constructor of the parent class and passing the required parameters
        this.superPower = superPower;
    
    }
    getSuperPower(){
        return this.superPower;
    }
    getSuperHero(){
        return `${this.getFullName()} with super power ${this.superPower}`;
    }
    // thi.getFullName() will be inherited from the Person class, this method will be available in the SuperHero class
    // this method will return the full name of the superhero

}

// Let's create a class called Villain that inherits from the Person class
// Villain will have a property called evilPower
// and a method getVillain that returns the full name of the villain and the evil power.
class Villain extends Person {
    constructor(firstName, lastName, evilPower){
        super(firstName, lastName); // calling the constructor of the parent class and passing the required parameters
        this.evilPower = evilPower;
    }
    getEvilPower(){
        return this.evilPower;
    }
    getVillain(){
        return `${this.getFullName()} with evil power ${this.evilPower}`;
    }
}

// creating instances of the classes
const superman = new SuperHero("Clark","Kent", "Flying");
const batman = new SuperHero("Bruce", "Wayne", "Rich");
const joker = new Villain("Joker", "Smith", "Chaos");
const lex = new Villain("Lex", "Luthor", "Intelligence");



console.log(superman.getSuperHero()); // Clark Kent with super power Flying
console.log(batman.getSuperHero()); // Bruce Wayne with super power Rich
console.log(joker.getVillain()); // Joker Smith with evil power Chaos
console.log(lex.getVillain()); // Lex Luthor with evil power Intelligence

console.log(superman.getFullName()); // Clark Kent
console.log(batman.getFullName()); // Bruce Wayne
console.log(joker.getFullName()); // Joker Smith
console.log(lex.getFullName()); // Lex Luthor
console.log(superman.getSuperPower()); // Flying
console.log(batman.getSuperPower()); // Rich
console.log(joker.getEvilPower()); // Chaos
console.log(lex.getEvilPower()); // Intelligence