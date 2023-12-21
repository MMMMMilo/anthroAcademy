//course selection
function courseSelection(){
    //selection_location
    let itemNorth = document.querySelector('#itemNorth')
    let itemCentral = document.querySelector('#itemCentral')
    let itemSouth = document.querySelector('#itemSouth')

    //selection_location-list and course_course-list
    let North = document.querySelectorAll('.nor')
    let Central = document.querySelectorAll('.cen')
    let South = document.querySelectorAll('.sou')
    
    //Set to revert the default style of font color
    function resetColor(item) {
        item.style.fontWeight="";
        item.style.background="none";
        item.style.textShadow = "";
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
        itemNorth.style.fontWeight="600";
        itemNorth.style.textShadow="0 0 5px rgb(2, 222, 197),0px 0px 5px rgb(2, 222, 197),0px 0px 5px rgb(2, 222, 197)";
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
        itemCentral.style.textShadow="0 0 5px rgb(2, 222, 197),0px 0px 5px rgb(2, 222, 197),0px 0px 5px rgb(2, 222, 197)";
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
        itemSouth.style.textShadow="0 0 5px rgb(2, 222, 197),0px 0px 5px rgb(2, 222, 197),0px 0px 5px rgb(2, 222, 197)";
    });
    itemSouth.addEventListener('blur', () => {
        resetColor(itemSouth);
    });
}

document.addEventListener("DOMContentLoaded",function(){
    courseSelection();
    console.log("DOM fully loaded and parsed"); 
});