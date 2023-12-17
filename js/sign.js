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
//sign validation
function formValidation(e){
    let form = document.querySelector('#signup');
    //Select all input in the form
    let inputs = form.querySelectorAll('input');
    let isValid = false;
    inputs.forEach((input) => {
        input.addEventListener('input',function(){
            //Check if the input has data before entering the switch statement. The trim is a method of string that remove white space from string.
            if(input.value.trim() !== ''){
                //Additional condition base on other criteria
                switch (input.id){
                    case 'signId':
                        isValid =/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(input.value);
                        break;
                    case 'signpassword':
                        isValid = /^(?=.*[a-zA-z])(?=.*\d).{8,12}$/.test(input.value);
                        break;
                    case 'tel':
                        isValid = /^09\d{8}$/.test(input.value);
                        break;
                    case 'mail':
                        isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.value);
                        break;       
                }
                if(isValid){
                    input.classList.remove('error');
                    input.classList.add('success');
                }else{
                    input.classList.remove('success');
                    input.classList.add('error');
                }
            }
        })
    })
    form.addEventListener("submit",function(e){
        if(!isValid){
            console.log('Form submission prevented. Validation failed.');
            e.preventDefault
        }else{
            console.log('Form submitted successfully.');
            // form.style.display="none";
        }
    });
}
window.addEventListener("DOMContentLoaded",function(){
    formValidation();
});
//change placeholder of birthday
//Clicking on button or input does not give it focus on Safari,so dose blur. 
const birthdayText = document.querySelector('#signup .birthday-text');
const birthdayDate = document.querySelector('#signup .birthday-date');
birthdayText.addEventListener('click', function() {
    birthdayText.style.display = 'none';
    birthdayDate.style.display = 'block';
    birthdayDate.focus();
});
birthdayDate.addEventListener('blur', function() {
    birthdayText.style.display = 'block';
    birthdayDate.style.display = 'none';
});
