//sign-popup
const openSign = document.querySelector(".nav-bar :last-child>a");
const closeSign = document.querySelector(".sign .close-secondary");
const signForm = document.querySelector(".sign");

openSign.addEventListener('click',()=>{
    signForm.style.display="block";
})
closeSign.addEventListener('click',()=>{
    signForm.style.display = "none";
    signContainer.classList.remove("is-flipInverse" , "is-flip")
})
// sign-flip
const switcher = document.querySelector("#switcher");
const signContainer = document.querySelector('.sign-card')

switcher.addEventListener('click',()=>{
    if(signContainer.classList.contains("is-flip") === true){
        signContainer.classList.remove("is-flip")
        signContainer.classList.add("is-flipInverse")
    }else{
        console.log("animation2")
        signContainer.classList.remove("is-flipInverse")
        signContainer.classList.add("is-flip")
    }
})



function formValidation(e) {
    let form = document.querySelector('#signup');
    let inputs = form.querySelectorAll('input');
    let isValid = Array.from(inputs).fill(false);

    inputs.forEach((input, index) => {
        isValid.push(0);
        input.addEventListener('input', function () {
            // Check if the input has data before entering the switch statement.
            // The trim is a method of a string that removes white space from the string.
            if (input.value.trim() !== '') {
                // Additional condition based on other criteria
                switch (input.id) {
                    case 'signId':
                        isValid[index] = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(input.value);
                        break;
                    case 'signpassword':
                        isValid[index] = /^(?=.*[a-zA-z])(?=.*\d).{8,12}$/.test(input.value);
                        break;
                    case 'tel':
                        isValid[index] = /^09\d{8}$/.test(input.value);
                        break;
                    case 'mail':
                        isValid[index] = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.value);
                        break;
                    // Add more cases for other input fields if needed
                }

                if (isValid[index]) {
                    input.classList.remove('error');
                    input.classList.add('success');
                } else {
                    input.classList.remove('success');
                    input.classList.add('error');
                }
            }
        });
    });

    form.addEventListener("submit", function (event) {
        // Check if all inputs are valid
        if (isValid.every((value) => value===1)) {
            console.log('Form submitted successfully.');
            form.style.display = "none"; // Hide the form
        } else {
            console.log('Form submission prevented. Validation failed.');
            event.preventDefault();
        }
    });
}

window.addEventListener("load", function () {
    formValidation();
});