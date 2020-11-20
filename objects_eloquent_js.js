// key:value pairs are objects - object literals create objects
// value name and value properties
let mathieu = {
    "age": 26,
    "heigth": 182
};

// quoted value names always work, unquoted are only for valid identifies
let pascal = {
    age: 31,
    "favorite food": "pizza"
}
console.log(mathieu.age);


// (it's JSON were all names need to be double-quoted!!)


// access all properties of an object
console.log(Object.keys(mathieu));

// find whether a property exists
console.log("fav_food" in mathieu);

// delete vs set undefined
delete mathieu.age;
mathieu.height = undefined;

// copy properties to another object (overwriting)
Object.assign(mathieu, pascal); // copies all properties of pascal to mathieu

// arrays are objects with numeric value names
let manyNumbers = [1,2,3,4,5];
console.log(typeof manyNumbers); // object

// arrays of objects are possible
let journal = [
    {day: 1,
    mood: "superduper",
    tired: false},
    {day: 2,
    mood: "terrible",
    tired: true}
];

// mutability
let object1 = {value: 10};
let object2 = object1; // binds to the same object!
let object3 = {value: 10}; // same value, different object!

console.log(object1 == object2); // → true
console.log(object1 == object3); // → false

object1.value = 15;
console.log(object2.value); // → 15
console.log(object3.value); // → 10

// values are immutable, but with "let" the binding can change
// const bindings to objects are immutable, but the properties can be changed
const score = {visitors: 0, home: 0};
score.visitors = 1; // This is okay
score = {visitors: 1, home: 1}; // Reassignment isn't allowed

/* Useful array methods:
shift/unshift: place/remove value at the beginning of array
push/pop: place/remoce value at the end of array
includes: checks whether value exists in array
indexOf: first index of value
lastIndexOf: last index of value
slice(a,b): return elements between a(inclusive) and b(exclusive)
concat: like + for arrays
*/

// values of type string, number and Boolean are immutable! NOT Objects
let kim = "Kim";
kim.age = 88;
console.log(kim.age); // → undefined

// but they have built-in properties
console.log("coconut".slice(3,5)); // similar to arrays
console.log("coconut".indexOf("on")); // works with substrings
console.log(" okay \n".trim()); // removes whitespace
console.log("6".padStart(3, "0")); // -> "006", 3 indicates length

// split and join
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

// repeat string --> in one string
console.log("le".repeat(3)); // lelele

// rest parameters
// three dot notation for rest parameters in js (== args in Python)
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) { // for ... of as a shorthand
        if(number > result) result = number;
    }
    return result;
}

// three dots spread out arrays into values
let numbers = [1,2,3];
console.log(max(9, ...numbers, 1)); // max takes values as input

// same with strings
let words = ["I", "am"];
console.log(["Here", ...words, "sitting"]);

// Functions can be written with arrays or objects in mind:
function useless([a,b,c,d]) {
    console.log(a+b+c+d);
}

let {name} = {name: "Faraji", age: 23};
console.log(name);
// → Faraji