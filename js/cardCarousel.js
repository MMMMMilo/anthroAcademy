//carousels
function carousels(){
    const carousels = document.querySelectorAll('.carousel');
    const widthItems = document.querySelectorAll('.course .carousel .course-list .course-card');

    document.querySelector('.prev').onclick = function () {
        carousels.forEach((carousel) => {
            widthItems.forEach((widthItem) => {
                carousel.scrollLeft -= widthItem.offsetWidth;
                console.log("touch prev");
            });
        });
    
    };
    document.querySelector('.next').onclick = function () {
        carousels.forEach((carousel) => {
            widthItems.forEach((widthItem) => {
                carousel.scrollLeft += widthItem.offsetWidth;
                console.log("touch next");
            });
        });
        
    };
}


    //course selection
function courseSelection(){
    const itemNorth = document.querySelector('.item.north')
    const itemCentral = document.querySelector('.item.central')
    const itemSouth = document.querySelector('.item.south')
    
    const North = document.querySelectorAll('.nor');
    const Central = document.querySelectorAll('.cen');
    const South = document.querySelectorAll('.sou');
    
    //Set to revert the default style of font color
    function resetColor(item) {
        item.style.fontWeight="";
        item.style.background="none";
        item.style.boxShadow = "none";
    }
    //north
    itemNorth.addEventListener('click',()=>{
        North.forEach((elem)=>{
            elem.style.display = "block";
        });
        Central.forEach((elem)=>{
            elem.style.display = "none";
        });
        South.forEach((elem)=>{
            elem.style.display = "none";
        });
        itemNorth.fontWeight="600";
        itemNorth.style.background="radial-gradient( rgba(254,254,254,0) 30%, rgba(2,222,197,0.5) 300%)";
        itemNorth.style.boxShadow = "0 4px 30px rgba(2, 222, 197, 0.5)";
    });
    itemNorth.addEventListener('blur', () => {
        resetColor(itemNorth);
    });
    //central
    itemCentral.addEventListener('click',()=>{
        North.forEach((elem)=>{
            elem.style.display = "none";
        });
        Central.forEach((elem)=>{
            elem.style.display = "block";
        });
        South.forEach((elem)=>{
            elem.style.display = "none";
        });
        itemCentral.style.fontWeight="600";
        itemCentral.style.background="radial-gradient( rgba(254,254,254,0) 30%, rgba(2,222,197,0.5) 300%)";
        itemCentral.style.boxShadow = "0 4px 30px rgba(2, 222, 197, 0.5)";
    });
    itemCentral.addEventListener('blur', () => {
        resetColor(itemCentral);
    });
    //south
    itemSouth.addEventListener('click',()=>{
        North.forEach((elem)=>{
            elem.style.display = "none";
        });
        Central.forEach((elem)=>{
            elem.style.display = "none";
        });
        South.forEach((elem)=>{
            elem.style.display = "block";
        });
        itemSouth.style.fontWeight="600";
        itemSouth.style.background="radial-gradient( rgba(254,254,254,0) 30%, rgba(2,222,197,0.5) 300%)";
        itemSouth.style.boxShadow = "0 4px 30px rgba(2, 222, 197, 0.5)";
    });
    itemSouth.addEventListener('blur', () => {
        resetColor(itemSouth);
    });
}
window.addEventListener("DOMContentLoaded",function(){
    carousels();
    courseSelection();
});