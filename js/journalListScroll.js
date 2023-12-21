//IntersectionObserver(entires_callback,option)
function scrollDown(){
    let journalItems = document.querySelectorAll(".item")
    let observer = new IntersectionObserver((entires)=>{
        entires.forEach(entry =>{
            entry.target.classList.toggle("show",entry.isIntersecting)
        })
    },{
        threshold:.3,
    }
    );
    journalItems.forEach(journalItem=>{
        observer.observe(journalItem);
    })
};
document.addEventListener("DOMContentLoaded",function(){
    scrollDown();
    console.log("DOM fully loaded and parsed");
});