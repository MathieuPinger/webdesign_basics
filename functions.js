// Functions

// Function with default parameters
function addNums(num1 = 1, num2 = 2) {
	return num1+num2;
};

console.log(addNums()); // returns NaN if parameters are empty

// arrow function
// instead of keyword function, name it as a variable
let addNums = (num1 = 1, num2 = 2) => {
	return num1+num2;
};

// easier: if only one statement, no parentheses and return
let addNums = (num1 = 1, num2 = 2) => num1 + num2;

// if only one parameter: no parentheses
let addFive = num => num + 5;


///// use arrow functions with array methods
// array of object litterals
const todos = [
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

// remember array methods:
todos.forEach(function(todo) {
	console.log(todo.text)
});

// for Each + arrow function
todos.forEach(todo => console.log(todo.text));

// arrow function + nested ternaries