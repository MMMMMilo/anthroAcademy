// 3D sphere
const sphere = document.getElementById('sphere');
const rows = []

for (let i = 0; i < 180; i += 9) {
    rows.push(`<div class="line" style="transform:rotateY(${i}deg);"></div>`);
}
for (let i = 0; i < 360; i += 18) {
    rows.push(`<div class="line cross-line" style="transform:rotateX(${i}deg);"></div>`);
}
sphere.innerHTML = rows.join("");

//IntersectionObserver(entires_callback,option)
const blockTitles = document.querySelectorAll(".block-title")
const newsLinks = document.querySelectorAll(".news-list .news-link")
const journalItems = document.querySelectorAll(".item")

function scrollDown(){
    const observer = new IntersectionObserver((entires)=>{
        entires.forEach(entry =>{
            entry.target.classList.toggle("show",entry.isIntersecting)
        })
        console.log(entires);
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
    journalItems.forEach(journalItem=>{
        observer.observe(journalItem);
    })
};

function scrollRight(){
    const teacherContainers = document.querySelectorAll(".teacher-intro .container")
    const observer = new IntersectionObserver((entires)=>{
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

window.addEventListener("load",function(){
    scrollDown();
    scrollRight();
});