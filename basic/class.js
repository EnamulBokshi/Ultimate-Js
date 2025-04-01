/* 
Classes 

Classes are a powerful feature in JavaScript that allow you to create objects with shared properties and methods.
Classes are a blueprint for creating objects.
Classes are created using the class keyword.
Classes can contain properties and methods.

In this chapter, we will learn how to create classes, usage of classes, and how to use inheritance in classes, how to create objects from classes, and how to use the constructor method.
Classes are a special type of function.

A class lays out two main things:
1. Properties: These are the variables that belong to the class. They are defined in the constructor method.
2. Methods: These are the functions that belong to the class. They are defined inside the class body.

Instances, Objects of a class known as instance of that class.


*/

// The following code snippet shows how to create a class in JavaScript:
class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.courses = [
            
        ]
    }
    addCouse(courseCode, courseName, TeacherName){
       
        this.courses.push({
            courseCode: courseCode,
            courseName: courseName,
            TeacherName: TeacherName
        })
    }
    getDetails(){
        return {
            name: this.name,
            age: this.age,
            courses: this.courses
        }
    }
}

// Creating an object from the class
let enamul = new Student("Enamul",26);
enamul.addCouse("CS50", "Introduction to Computer Science", "David Malan");
enamul.addCouse("CS50W", "Introduction to Web Programming", "David Malan");
enamul.addCouse("CS50AI", "Introduction to Artificial Intelligence", "David Malan");
const details = enamul.getDetails();
// console.log(details); // {name: "Enamul", age: 26, courses: [{...}]}

// Another Example
class Player{
    constructor(startX,startY){
        this.x = startX;
        this.y = startY;
    }
    move(dx,dy){
        this.x += dx;
        this.y += dy;
    }
    getPosition(){
        return {
            x: this.x,
            y: this.y
        }
    }
}

let player1 = new Player(0,0);
player1.move(5,10);
console.log(player1.getPosition()); // {x: 5, y: 10}