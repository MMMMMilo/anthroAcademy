// carousels
function carousels(){
    let carousels = document.querySelectorAll('.carousel');
    let widthItems = document.querySelectorAll('.course .carousel .course-list .course-card');

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
document.addEventListener("DOMContentLoaded",function(){
    carousels();
    console.log("DOM fully loaded and parsed"); 
});


