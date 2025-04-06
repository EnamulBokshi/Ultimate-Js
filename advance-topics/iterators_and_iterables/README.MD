# Iterators and Iterables in JavaScript

In JavaScript, **iterators** and **iterables** are fundamental concepts that allow us to define and customize iteration behavior for objects. Understanding these is essential for working with modern JavaScript features like `for...of` loops, spread syntax (`...`), and more.

---

## 🔁 Iterables

An **iterable** is any object that implements the `@@iterator` method, meaning it has a function with the key `Symbol.iterator`. This method returns an **iterator**.

### ✅ Built-in Iterables:
- Arrays
- Strings
- Maps
- Sets

### Example:
```javascript
const arr = [1, 2, 3];
const str = "hello";

console.log(typeof arr[Symbol.iterator]); // "function"
console.log(typeof str[Symbol.iterator]); // "function"
```

---

## 🔂 Iterators

An **iterator** is an object that has a `next()` method which returns an object with two properties:
- `value`: the current value
- `done`: boolean indicating whether the iteration is complete

### Example:
```javascript
const arr = [10, 20, 30];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

---

## 🔧 Custom Iterables

You can create your own iterable by implementing the `Symbol.iterator` method.

### Example:
```javascript
const myIterable = {
  data: ["a", "b", "c"],
  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;

    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (const val of myIterable) {
  console.log(val);
}
```

---

## 🌀 Using Iterators Manually

Iterators can be used directly without `for...of`:
```javascript
const iter = ["x", "y", "z"][Symbol.iterator]();

let result = iter.next();
while (!result.done) {
  console.log(result.value);
  result = iter.next();
}
```

---

## 💡 Summary
| Term       | Description |
|------------|-------------|
| Iterable   | Object implementing `Symbol.iterator()` |
| Iterator   | Object with `next()` method returning `{ value, done }` |

### Use Cases:
- Custom data structures
- Lazy evaluation
- Asynchronous data processing (via `AsyncIterator` & `for await...of`)

Iterators and iterables help structure and control data flow, making code more flexible and powerful.

---

## 📚 References
- [MDN Web Docs - Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [MDN Web Docs - Iterables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)