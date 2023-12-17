$(function(){
    $('.touchHover').bind('touchstart',function(){
        $(this).addClass('hovered');
        }).bind('touchend',function(){
        $t=setTimeout(function(){$(this).removeClass('hovered');},10);
        e.preventDefault()
    });
});
