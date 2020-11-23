/* Encapsulation:
In OOP, objects can have public and privte properties.
Public = part of the interface to interact with other objects.
Encapsulation = separating interface from implementation. */

// this binding
// refers to the object a function was called on
let order = {
    price: "5$",
    food: "pizza"};
order.summary = function() {
    console.log(`Order was placed: a ${this.food} for ${this.price}`);
};

order.summary();

// you can define the function first and then add it to the object

function orderSummary() {
    console.log(`Order was placed: a ${this.food} for ${this.price}`);
};

let secondOrder ={
    price: "1$",
    food: "cookiee",
    orderSummary // here it goes
};

secondOrder.orderSummary();

// call this explicitly
orderSummary.call(secondOrder);

// Prototypes
// Objects can draw default properties from prototypes
// Prototypes are hierarchical
// First prototype: Object.prototype -> gives methods such as toString

console.log(Object.getPrototypeOf({}) == Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // no higher prototype!

console.log(Object.getPrototypeOf(Math.max) == Function.prototype); //true
console.log(Object.getPrototypeOf([]) == Array.prototype); //true
console.log(Object.getPrototypeOf([]) == Object.prototype); //false!

// Object.create to create object of a specific prototype
let anotherOrder = Object.create(order);
//anotherOrder.price = "4$";
//anotherOrder.food = "Pasta";
anotherOrder.summary(); // inherits from "order"

/*
Classes are constructor functions with a prototype property
Constructor functions make objects with "new" keyword
The prototype property of the constructor is given to the object*/

function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

console.log(Object.getPrototypeOf(Rabbit) ==
            Function.prototype); // → true: constructor function
console.log(Object.getPrototypeOf(weirdRabbit) ==
            Rabbit.prototype); // → true: object

// ES6 notation
class RabbitES6 {
    constructor(type) { // this is the function bound to RabbitES6
        this.type = type;
    }
    speak(line) { // this is still a prototype!
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new RabbitES6("killer");
let blackRabbit = new RabbitES6("black");
killerRabbit.speak("Hellooo");
console.log(killerRabbit);

// check properties of objects
console.log(Object.keys(killerRabbit)); // array of properties
// check properties while ignoring prototype
console.log(killerRabbit.hasOwnProperty("toString")); // false

