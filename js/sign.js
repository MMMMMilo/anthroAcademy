const switcher = document.querySelector("#switcher");
const signContainer = document.querySelector('.sign .container')

switcher.addEventListener('click',()=>{
    if(signContainer.classList.contains("is-flip") === false){
        signContainer.classList.remove("is-flipInverse")
        signContainer.classList.add("is-flip")
    }else{
        console.log("animation2")
        signContainer.classList.remove("is-flip")
        signContainer.classList.add("is-flipInverse")
    }
})


// function checkForm(){
//     let form = document.getElementById('signForm');
//     let userID = document.getElementsByName('userId');
//     let password = document.getElementsByName('password');
//     let mail = document.getElementsByName('mail');
//     let tel = document.getElementsByName('tel');


// }




