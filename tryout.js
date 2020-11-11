// Trying out JavaScript
/*
multi-line comment
*/

// console = object with different methods to do stuff with the console
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warn');

// variable types
// var = global scope -> avoid
// let = local scope within a block
// const = cannot be reassigned (tuple!)

// data types
// primitives = string, numbers, boolean, null, undefinded, symbol
// arrays etc are not primitive data types but OBJECTS
const name = 'John';
const age = 30;
const rating = 4.5; // there is no floating data type
const x = null; // empty, not an object!
const y = undefined; //explicitly stated
let z; // undefined

console.log(typeof name);
console.log(typeof age);
console.log(typeof z);
console.log(typeof x); // returns "object" but is really not, type 'bogus' or '0x00'

// Concatenation
console.log('My name is' + name + 'and I am ' + age);
//Template strings (aka f strings in Python)
console.log(`My name is ${name}`);

// properties and methods
const hello = 'Hello World!';
console.log(hello.length); // with brackets = method; w/o = property
console.log(hello.toLowerCase());
console.log(hello.substring(0,5).toUpperCase()); // chaining methods
console.log(hello.split('')); // creates Array, split by; '' = "every letter"
console.log(hello.split(' ')); // by blankspace

//arrays
// using Constructors
const numbers = new Array(1,2,3,4,5);
// using brackets
const numbers2 = [1,2,3,4,5];
const stuff = [1,2,'bla',true]; // arrays are flexible
// zero-based!
console.log(stuff[2]); // = 'bla'
console.log(stuff.pop()); // Python...
console.log(stuff.unshift('abc')); //adds to first place
console.log(stuff.push('efg')); //adds to last place

console.log(Array.isArray(stuff));

// R which
console.log(stuff.indexOf('efg'));

// object literals: like dictionaries
// name-value pairs are encapsulated (non global)
// names = properties
// anything, including functions, can be in a literal
// use commas!
const person = {
	firstName: 'John',
	lastName: 'Peter',
	age: 30,
	hobbies: ['music', 'golf'],
	address: {
		street: '50 main st',
		city: 'London'
	}
}

console.log(person);
console.log(person.address, person.lastName);

// destructuring
const {firstName, lastName} = person; // pulls properties out
console.log(firstName); // = John,now global

// add properties
person.email = 'abc@g.de';

// JSON
// array of object litterals
todos = [
{
	id: 1,
	text: 'laundry',
	done: false
},
{
	id: 2,
	text: 'cooking',
	done: false
},
{
	id: 3,
	text: 'learn jspsych',
	done: false
}];

console.log(todos[1].text);
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// for loops
// start ; end ; increment
for (let i = 0; i < 10; i++) {
	console.log(i);
}