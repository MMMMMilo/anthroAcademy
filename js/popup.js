
$(document).ready(function(){
    $('#openContact').click(function(){
        $('#contact').toggle();
    })
    $('#closeContact').click(function(){
        $('#contact').hide();
    })
})

$(document).ready(function(){
    $('#openService').click(function(){
        $('.service').toggle();
    })
    $('#closeService').click(function(){
        $('.service').hide();
    })
})

$(document).ready(function(){
    $('#openPrivacy').click(function(){
        $('.privacy').toggle();
    })
    $('#closePrivacy').click(function(){
        $('.privacy').hide();
    })
})