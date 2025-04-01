/*
When a user clicks a button, scrolls, or simply moves the mouse within a web page, that action creates an event. 
An event is the browser's way of notifying your JavaScript code that something has happened.
JavaScript allows you to respond to these events using event listeners.
This is a powerful feature that enables you to create interactive web applications.
Event listeners are functions that are executed when a specific event occurs.
*/

/*

Why it's called event listeners?
Well, the name is a bit misleading.
Event listeners are not actually listening for events.
Instead, they are waiting for events to occur.
When an event occurs, the event listener is executed.
Event listeners are functions that are executed when a specific event occurs.

Events are how the browser tells JavaScript that something has occurred in the DOM. It's almost as if every time the mouse moves, the browser is saying "Hey JavaScript, the mouse just moved!", or a key is pressed, the browser is shouting, "Hey, the user just pressed a key!".
Thse shouts are called events and it's happeing all the time. Our script code can respond to them using event listeners.
like this:
 if mouse moves do that, if button is clicked do this, if a key is pressed do that.
*/
// Event bubling
// Event bubbling is a way of event propagation in the DOM.

// When an event occurs on an element, it first runs the handlers on it, then on its parent, and so on up to the document.
// This is called event bubbling because the event bubbles up from the target element to the root of the DOM tree.
// This is the default behavior of events in JavaScript.
// On triggering an event, it also gets triggered on its parent element, parent's parent element, and so on.
//

// Consider the following example:
document.querySelector("#main-h1").addEventListener("click", (e) => {
    console.log("Main h1 clicked")
})
document.querySelector("body").addEventListener("click", (e)=>{
    console.log("Body clicked")

})

/* 

 Event delegation 

 Event delegation is a technique that allows you to attach a single event listener to a parent element instead of attaching it to each child element.
 This is useful when you have a large number of child elements and you want to avoid attaching event listeners to each one.

 */
// In the following example, we have a list of fruits and we want to attach a click event listener to each item.

const fruits = document.querySelector("#fruits");
const sentence = document.querySelector("#sentence");

fruits.addEventListener("click", (e)=>{
 let fruit = e.target.textContent;
 sentence.textContent += fruit + " "
});

/*
Note: 
e.target is the element that triggered the event, not the element that the event listener is attached to.
e.currentTarget is the element that the event listener is attached to.

In the above example, when we click on a fruit, e.target will be the fruit that was clicked, and e.currentTarget will be the fruits list.
// So, if we click on "Apple", e.target will be "Apple" (<li>Apple</li> )and e.currentTarget will be the (ul) fruits list.
*/

