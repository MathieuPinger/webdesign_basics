
/*
Empty values:
NaN - nonsensical
Null - Empty
Undefined - Empty
*/

// expression = a code that produces a value
// including a written value
// statement = a "sentence" of expressions
// the Semicolon separates statements

console.log(null == undefined); // true: basically the same
console.log(NaN == NaN); // false

// unary operators
console.log(typeof "");
console.log(-(4+5)); // - as a unary
delete NaN


// binary operators
// logical
console.log(false || true); // prints true: true if one is true
console.log(false && true); // false: true if both are true

// ternary operator: conditional
console.log(true ? 1 : 2); // 1: if true then 1 else 2
console.log(false ? 1 : 2); // 2: if true then 1 else 2

// automatic type conversion: attention!
console.log(8*null); // interprets null as 0!
console.log("5"-1); // 4, string to integer
console.log("5"+1); // 51, string concatenation!
console.log(false == 0); // true!

// short circuit evaluation of logical operators
// ||: when left option is false, return right option
console.log(null || "user"); // -> user
console.log("Agnes" || "user"); // -> Agnes

// &&: when left option is false, return left option
console.log(null || "user"); // -> user

// Environment
// environment is the collection of binidngs and their values

// Function binding vs declaration
// normal binding: is read in top-down-fashion, needs semicolon
let addFive = function(x) {
    return x+5;
};

// as declaration: is moved to top of the scope, no semicolon needed
function(addSix) {
    return x+6;
}

// arrow function: read as "this input creates" => "this output
let addEight = (x) => { return x+8; };
// if only 1 argument and one expression, simplify:
let addEight = x => x+8; // no return needed, no .this method offered
