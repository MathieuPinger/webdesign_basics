// constructor function: pre ES6 syntax
function Person( // start with capital letter
	firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob); // Date object already specified

	this.getBirthYear = function() {
		//get the birthyear
		return this.dob.getFullYear();
	}
};

// Instantiate object
const person1 = new Person('John', 'Smith', '4/3/1920');
console.log(person1);
console.log(person1.firstName);
console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());

// Prototypes
Person.prototype.getFullName = function() {
	// gives full Name - prototype is not added to every instance of the object!
	return `${firstName}` `${lastName}`;
};

const person2 = new Person('Mary', 'Smith', '6/11/1925');
console.log(person2) // the function getFullName is not part of the object but of the __proto__

// Classes: ES6 syntax
class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);
	}

// way prettier methods, no longer prototypes needed
	getBirthYear() {
		//get the birthyear
		return this.dob.getFullYear();
	}

	getFullName() {
	// gives full Name - prototype is not added to every instance of the object!
	return `${firstName}` `${lastName}`;
}