// load footer on each page in JQuery  //not success
$(document).ready(function () {  
    $('#openContact').click(function(){
        $('#contact').show();
    })
    $('#closeContact').click(function(){
        $('#contact').hide();
    })
    
    $('#openService').click(function(){
        $('.service').show();
    })
    $('#closeService').click(function(){
        $('.service').hide();
    })
    
    $('#openPrivacy').click(function(){
        $('.privacy').show();
    })
    $('#closePrivacy').click(function(){
        $('.privacy').hide();
    })
});