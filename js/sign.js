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

// function checkForm(){
//     let form = document.getElementById('signForm');
//     let userID = document.getElementsByName('userId');
//     let password = document.getElementsByName('password');
//     let mail = document.getElementsByName('mail');
//     let tel = document.getElementsByName('tel');


// }




