// objects in the browser: the window is the parent object
console.log(window)
// window is top level, i.e. window.alert = alert

// single element selectors
// look in html for ID
let form = document.getElementById('my-form');
console.log(form);

// Query selector works like jQuery: select other things than IDs
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

// select multiple elements
console.log(document.querySelectorAll('*')); // everything
console.log(document.querySelectorAll('div'));

// apply functions on NodeLists
let divs = document.querySelectorAll('div');
divs.forEach(div => console.log(div));

// let's remove the header
let ul = document.querySelector('h1');
ul.remove();

// change item1
let items = document.querySelector('.items');
items.firstElementChild.textContent = 'Bye!';