//  Manipulate DOM in real time
// This is for dynamic websites: change HTML and CSS from JS

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

// remove the last element of a group
items.lastElementChild.remove();

// items is a NodeList -> access with []
items.children[1].innerText = 'Whut';

// change item with HTML
items.lastElementChild.innerHTML = '<h1>Hello</h1>';

// btn element = submit button
// create object of class btn
const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Event Listener: run function when events happens
// btn.addEventListener('click', (e) => {
//     e.preventDefault(); // default action (submit data) needs to be prevented
//     console.log('click');
//     console.log(e); // click event
//     console.log(e.target.className); // gives class of clicked object
// });

// change something when button is clicked: color change
btn.addEventListener('click', (e) => {
    // e.preventDefault(); // if omitted: only short color change
    // changes form background
    document.querySelector('#my-form').style.background = '#ccc';
    // changes body color
    document.querySelector('body').classList.add('bg-dark');
    // change element text
    items.lastElementChild.innerHTML = '<h1>See ya!<h1>';
})

// further events: mouseover, mouseout