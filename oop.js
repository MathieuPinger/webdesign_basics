// constructor function
function Person( // start with capital letter
	firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = dob;
}

// Instantiate object
const person1 = new Person('John', 'Smith', '4/3/1920');
console.log(person1)
console.log(person1.firstName)