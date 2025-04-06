function makeIterator(array){
    let nextIndex = 0;
    return {
        next(){
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false}:
                {value: undefined, done: true}
        }
    }
}

const it = makeIterator(['a', 'b', 'c']);
console.log(it.next()) // { value: 'a', done: false }
console.log(it.next()) // { value: 'b', done: false }
console.log(it.next()) // { value: 'c', done: false }
console.log(it.next()) // { value: undefined, done: true }

/*
Expalination:
The makeIterator function creates an iterator for an array.
It returns an object with a next method that returns the next value in the array.
The next method checks if there are more elements in the array.
If there are, it returns the next value and sets done to false.
If there are no more elements, it returns undefined and sets done to true.
The nextIndex variable keeps track of the current index in the array.
The iterator object is created by calling the makeIterator function with an array.
*/


// Iterator using a generator function
function* makeGenerator(array){
    for (let i = 0; i < array.length; i++){
        yield array[i];
    }
}
const gen = makeGenerator(['a', 'b', 'c']);
console.log(gen.next()) // { value: 'a', done: false }
console.log(gen.next()) // { value: 'b', done: false }
console.log(gen.next()) // { value: 'c', done: false }
console.log(gen.next()) // { value: undefined, done: true }
/*
Expalination:
The makeGenerator function is a generator function that creates an iterator for an array.
It uses the yield keyword to return values one at a time.
The generator function is called with an array.
The next method is called to get the next value from the generator.                
The generator function keeps track of the current index in the array.
The generator function is a simpler way to create an iterator.
*/

// Another Example 
const obj = {
    [Symbol.iterator]:function(){
        let step = 0;
        const iterator = {
            next: function(){
                step++;
                if( step ==1){
                    return {value: "hello", done: false};
                }
                else if (step == 2){
                    return {value: "world", done: false};
                }
                return {value: undefined, done: true};
            }
        }
        return iterator;
    }
}
const it1 = obj[Symbol.iterator]();
console.log(it1.next()) // { value: 'hello', done: false }
console.log(it1.next()) // { value: 'world', done: false }


for (let value of obj){
    console.log(value); // hello world
}