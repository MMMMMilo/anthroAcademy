//load header on each page in JS 
document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch and load HTML content into an element
    function loadHTML(url, elementId) {
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${url}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            document.getElementById(elementId).innerHTML = htmlContent;
            signPopup();
            signFlip();
            formValidation();
            brithdayInput();
        })
        .catch(error => {
            console.error(error);
        });
    }
    // Load header.html into the element with ID 'main-header'
    loadHTML('header.html', 'main-header');
    console.log("DOM fully loaded and parsed"); 
});
// sign-popup
function signPopup() {
    let signContainer = document.querySelector('.sign');
    let openSign = document.querySelector(".nav-bar :last-child a");
    let signCard = document.querySelector('.sign .container .sign-card');
    let closeSign = document.querySelector(".sign .close-secondary");

    openSign.addEventListener('click', function(e){
        signContainer.style.display="block";
        e.preventDefault();
    })
    closeSign.addEventListener('click',function(){
        signContainer.style.display = "none";
        signCard.classList.remove("is-flipInverse" , "is-flip");
    })
}
// sign-flip
function signFlip() {
    let signCard = document.querySelector('.sign .container .sign-card');
    let switcher = document.querySelector("#switcher");

    switcher.addEventListener('change', function () {
        if (signCard.classList.contains("is-flip")) {
            signCard.classList.remove("is-flip");
            signCard.classList.add("is-flipInverse");
            // e.stopPropagation();
            console.log("animation1");
        } else {
            signCard.classList.remove("is-flipInverse");
            signCard.classList.add("is-flip");
            // e.stopPropagation();
            console.log("animation2");
        }
    });
}
// sign validation
function formValidation(){
    let form = document.querySelector('#signup');
    //Select all input in the form
    let inputs = form.querySelectorAll('input');
    let isValid = false;
    inputs.forEach((input) => {
        input.addEventListener('input',()=>{
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
    form.addEventListener("submit",(e)=>{
        if(!isValid){
            console.log('Form submission prevented. Validation failed.');
            e.preventDefault
        }else{
            console.log('Form submitted successfully.');
        }
    });
}
// change placeholder of birthday
// Clicking on button or input does not give it focus on Safari,so dose blur. 
function brithdayInput(){
    let birthdayText = document.querySelector('#signup .birthday-text');
    let birthdayDate = document.querySelector('#signup .birthday-date');
    
    birthdayText.addEventListener('click', ()=> {
        birthdayText.style.display = 'none';
        birthdayDate.style.display = 'block';
        birthdayDate.focus();
    });
    birthdayDate.addEventListener('blur', ()=> {
        birthdayText.style.display = 'block';
        birthdayDate.style.display = 'none';
    });
}
// load footer on each page in JQuery  //not success
$(document).ready(function () {
    $('#main-footer').load('footer.html');
    
    $('#openContact').click(function(){
        $('#contact').show();
    })
    $('#closeContact').click(function(){
        $('#contact').hide();
    })
    
    $('#openService').click(function(){
        $('.service').show();
    })
    $('#closeService').click(function(){
        $('.service').hide();
    })
    
    $('#openPrivacy').click(function(){
        $('.privacy').show();
    })
    $('#closePrivacy').click(function(){
        $('.privacy').hide();
    })
});



