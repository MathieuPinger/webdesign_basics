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
	done: true
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

// while loop
let i = 10;
while(i < 10) {
	console.log(`while loop: ${i}`);
	i++; // increment i
}

// loop through array: way 1
for(let i = 0; i < todos.length; i++) {
	console.log(todos[i].text)
}

// way 2: like "for i in array" in Python
for(let todo of todos) {
	console.log(todo.text)
}

// way 3: high order array methods
// recommended!
// method 1: forEach with function call
todos.forEach(function(todo) { // anonymous function
	console.log(todo.text);
});

// method 2: map: returns an array
const todoText = todos.map(function(todo) { // anonymous function
	return todo.text;
});
console.log(todoText);

// method 3: filter: returns array elements on condition
// this returns the whole array element but filters on properties
const todoTasks = todos.filter(function(todo) { // anonymous function
	return todo.done == true;
});
console.log(todoTasks)

// chain filter and map: get only the texts
const todoTasksTexts = todos.filter(function(todo) { // anonymous function
	return todo.done == true;
}).map(function(todo) {
	return todo.text;
});
console.log(todoTasksTexts)

// if
const b = '10'; 

// == matches only number, === matches data type
if(b == 10) { // works
	console.log('x is 10');
};

if(b === 10) { // doesn't work
	console.log('x is 10');
} else {
	console.log('x is not 10')
};

// logical AND = &&, OR = ||

// Ternary operator: ? (then) with : (else)
// like ifelse in R
let color = 'red';
const isRed = color === 'red' ? 'yes' : 'no';
console.log(`Is the color red? ${isRed}`);

// switch-case: similar to if, better than nested if (readable+faster), but only equality check
switch(color) {
	case 'red':
		console.log('color is red');
		break;
	case 'blue':
		console.log('color is blue');
		break;
	default:
		console.log('color is neither blue nor red');
		break;
}

// can you nest ternaries? YES
let color2 = 'blue';
const isBlue = color === 'red' 
	? 'yes'
	: color === 'blue'
	? 'blue'
	: 'neither';
console.log(color2)