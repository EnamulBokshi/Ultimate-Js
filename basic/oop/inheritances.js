/* 
    **Inheritance in JavaScript**

    Inheritance is one of the key features of object-oriented programming (OOP).
    It in JavaScript allows one object to access properties and methods of another object.
    This is a powerful feature that enables code reuse and the creation of complex data structures.
    In JavaScript, inheritance is achieved through prototypes.
    When a function is created, it automatically gets a prototype property.
    The prototype property is an object that contains properties and methods that are shared by all instances of the function.
    When a new object is created from the function, it inherits the properties and methods from the prototype object.
    This allows you to create a chain of objects, where each object can inherit properties and methods from its parent object.

    As an anology, consider a family tree. Each person in the family tree inherits traits from their parents and grandparents 
*/
// 

// class Player{
//     constructor(startX,startY){
//         this.x = startX;
//         this.y = startY;
//     }
//     move(dx,dy){
//         this.x += dx;
//         this.y += dy;
//     }
//     getPosition(){
//         return {
//             x: this.x,
//             y: this.y
//         }
//     }
// }

class Actor{
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
    }
    move(dx, dy){
        this.x += dx;
        this.y += dy;
    }
    distanceTo(otherActor){
        let dx = otherActor.x - thix.x;
        let dy = otherActor.y - this.y;
        return Math.hypot(dx, dy);
    }
}

class Player extends Actor {
    constructor(startX, startY){
        super(startX, startY);
        this.hp = 100;
    }
}

class Enemy extends Actor {
    attack(player){
        if(this.distanceTo(player) < 4){
            player.hp -= 10;
            return true;
        }else{
            return false;
        }
    }
}

let player = new Player(1,2);
let enemy = new Enemy(3,4);
player.hp;// 100
enemy.distanceTo(player); // 2.8284271247461903
enemy.attack(player); // true
player.hp; // 90
player.move(5,5);
enemy.distanceTo(player); // 3.605551275463989
enemy.attack(player); // false
player.hp; // 90
