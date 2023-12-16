const carousel = document.querySelector('.carousel');
document.querySelector('.next').onclick = function(){
    let widthItem = document.querySelector('.course .course-list .course-card').offsetWidth;
    carousel.scrollLeft += widthItem;
    // carousel.scrollIntoView({
    //     behavior:'smooth',
    //     inline:'start'
    // });
}
document.querySelector('.prev').onclick = function(){
    let widthItem = document.querySelector('.course .course-list .course-card').offsetWidth;
    carousel.scrollLeft -= widthItem;
    // carousel.scrollIntoView({
    //     behavior:'smooth',
    //     inline:'start'
    // });
};
