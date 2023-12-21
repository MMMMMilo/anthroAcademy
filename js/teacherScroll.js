//IntersectionObserver(entires_callback,option)
function scrollRight(){
    let teacherContainers = document.querySelectorAll(".teacher-intro .container")
    let observer = new IntersectionObserver((entires)=>{
        entires.forEach(entry =>{
            entry.target.classList.toggle("show",entry.isIntersecting)
            if(entry.isIntersecting) observer.unobserve(entry.target)
        })
    },{
        threshold:1
    });
    teacherContainers.forEach(teacherContainer=>{
        observer.observe(teacherContainer);
    })
}
document.addEventListener("DOMContentLoaded",function(){
    scrollRight();
    console.log("DOM fully loaded and parsed"); 
});
