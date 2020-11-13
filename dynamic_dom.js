// assign vars to elements in the dom
// by id:
const myForm = document.querySelector('#my-form'); // whole form
const nameInput = document.querySelector('#name'); // "name" input
const emailInput = document.querySelector('#email'); // "email" input
const userList = document.querySelector('#users'); // list of users
// by class:
const msg = document.querySelector('.msg'); // empty message field

// function that is triggered on submission
myForm.addEventListener('submit', onSubmit);

// function
function onSubmit(e) {
    e.preventDefault(); // prevent default

    if(nameInput.value == '' || emailInput.value == '') { // empty inputs
        msg.classList.add('error'); // adds CSS class 'error' from stylesheet
        msg.innerHTML = 'Please enter all fields'; // enters text in empty msg field
        
        // remove message after 3sec
        setIntervalTimeout(() => msg.remove(), 3000)
    } else {
        console.log('success');
    }
}