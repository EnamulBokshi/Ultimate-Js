
# Advanced JS Concepts

This README provides a brief overview of advanced JavaScript concepts with code examples for each. Understanding these will help you write cleaner, more efficient, and more powerful JavaScript code.

---

## 1. Nested Functions' Scope

In JavaScript, functions can be nested inside other functions. Inner functions can access variables and parameters of their outer functions due to lexical scoping. This concept is essential for creating modular, encapsulated code.

### Example:

```js
function outerFunction() {
  let outerVar = 'I am outside!';
  
  function innerFunction() {
    console.log(outerVar); // Accessible due to scope
  }
  
  innerFunction();
}

outerFunction();
// Output: I am outside!
```

---

## 2. Closures

A closure is a function that "remembers" the variables from its lexical scope even when it is executed outside that scope. Closures are commonly used for data privacy and creating function factories.

### Example:

```js
function makeCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

---

## 3. `this` Keyword

The `this` keyword refers to the object it belongs to. Its value depends on the context in which a function is called. In objects, `this` refers to the object itself; in regular functions, it refers to the global object (or `undefined` in strict mode).

### Example:

```js
const obj = {
  name: 'JS',
  showName() {
    console.log(this.name);
  }
};

obj.showName(); // JS

const detached = obj.showName;
detached(); // undefined (in strict mode)
```

---

## 4. Prototypes

Every JavaScript function has a `prototype` property. Objects created from constructors inherit from the constructor's prototype. Prototypes enable method sharing and are the foundation of inheritance in JavaScript.

### Example:

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

const p1 = new Person('Alice');
p1.sayHello(); // Hello, I'm Alice
```

---

## 5. Prototypal Inheritance

Objects can inherit directly from other objects using `Object.create()`. This allows objects to share behavior and properties without needing classes or constructors.

### Example:

```js
const animal = {
  eats: true
};

const dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); // true (inherited)
console.log(dog.barks); // true
```

---

## 6. `class`

The `class` syntax introduced in ES6 simplifies the creation of objects and inheritance. It is syntactic sugar over the existing prototype-based inheritance.

### Example:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.
```

---

## 7. Iterables and Iterators

An iterable is an object that implements the `Symbol.iterator` method, which returns an iterator. Iterators define a sequence and potentially a return value upon completion.

### Example:

```js
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const value of myIterable) {
  console.log(value);
}
// Output: 1 2 3
```

---

## 8. Generators

Generators are special functions that can pause execution using the `yield` keyword and resume later. They make it easier to work with iterators and asynchronous flows.

### Example:

```js
function* generatorFunc() {
  yield 'Hello';
  yield 'World';
}

const gen = generatorFunc();
console.log(gen.next().value); // Hello
console.log(gen.next().value); // World
console.log(gen.next().done);  // true
```

---

Happy learning and coding! 🚀