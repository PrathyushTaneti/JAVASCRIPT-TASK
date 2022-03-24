const name = document.getElementById('name');
const email = document.getElementById('email');
const phoneno = document.getElementById('phoneno');
const organisation = document.getElementById('organisation');
const male = document.getElementById('gender-male');
const female = document.getElementById('gender-female');
const city = document.getElementById('city');
const state = document.getElementById('state');
const contact = document.getElementById('contact');
const formDetails = document.getElementById('formDetails');
const submitDetails = document.getElementById('sendDetails');
const clearDetails = document.getElementById('clearDetails');

name.addEventListener('blur', () => {
    if (!name.value) {
        document.getElementById('nameError').innerHTML = "Name is required";
    }
    else {
        document.getElementById('nameError').innerHTML = "*";
    }
})

email.addEventListener('blur', () => {
    if (!email.value) {
        document.getElementById('emailError').innerHTML = "Email is required";
    }
    else {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.value.match(validRegex)) {
            document.getElementById('emailError').innerHTML = "Invalid Email";
        }
        else {
             document.getElementById('emailError').innerHTML = "*";
        }
    }
})

organisation.addEventListener('blur', () => {
    if (!organisation.value) {
        document.getElementById('organisationError').innerHTML = "Organisation is required";
    }
    else {
        document.getElementById('organisationError').innerHTML = "*";
    }
})

formDetails.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!name.value) {
        document.getElementById('nameError').innerHTML = "Name is required";
    }
    if (!email.value) {
        document.getElementById('emailError').innerHTML = "Email is required";
    }
    if (!organisation.value) {
        document.getElementById('organisationError').innerHTML = "Organisation is required";
    }
    if (!name.value || !email.value || !organisation.value) {
        document.getElementById('errorMessage').innerHTML = "Please Fill All The Details"
    }        
    else {
        alert("Welcome");
        clearDetails.click();
    }
})

clearDetails.addEventListener('click',() => {
    formDetails.reset();
    window.location.reload();
})

state.addEventListener('change', () => {
    if (state.value) {
         document.getElementById('promo').value = document.getElementById('state').value.toUpperCase() + "-PROMO";
    }
    else {
        document.getElementById('promo').value = "";
    }
})

male.onclick = () => alert("Hello Sir")
female.onclick = () => alert("Hello Lady")
