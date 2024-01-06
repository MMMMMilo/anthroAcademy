// 3D sphere
function sphere(){
    const sphere = document.getElementById('sphere');
    const rows = []

    for (let i = 0; i < 180; i += 9) {
        rows.push(`<div class="line" style="transform:rotateY(${i}deg);"></div>`);
    }
    for (let i = 0; i < 360; i += 18) {
        rows.push(`<div class="line cross-line" style="transform:rotateX(${i}deg);"></div>`);
    }
    //Concatenate all the HTML string elements stored in the rows array into a single string.
    sphere.innerHTML = rows.join("");
}
//IntersectionObserver(entires_callback,option)
function scrollDown(){
    let blockTitles = document.querySelectorAll(".block-title")
    let newsLinks = document.querySelectorAll(".news-list .news-link")
    let observer = new IntersectionObserver((entires)=>{
        entires.forEach(entry =>{
            entry.target.classList.toggle("show",entry.isIntersecting)
        })
    },{
        threshold:.3,
    }
    );
    blockTitles.forEach(blockTitle =>{
        observer.observe(blockTitle);
    })
    newsLinks.forEach(newsLink=>{
        observer.observe(newsLink);
    })
};
document.addEventListener("DOMContentLoaded",function(){
    sphere();
    scrollDown();
    console.log("DOM fully loaded and parsed");
});