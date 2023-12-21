//changeFontSize
$(function(){
    // let currentSize = parseInt($('.container').css('font-size'));
    //偵測目前font-size

    $('#shrink').click(function(){
        changeSize('small');
    })
    $('#enlarge').click(function(){
        changeSize('big');
    })
    
    function changeSize(size){
        let currentSize = parseInt($('.container').css('font-size')); 
        let newSize;
    
        if(size === 'small'){
            newSize = currentSize - 2;
        }else if(size === 'big'){
            newSize = currentSize + 2;
        }
        $('.container').css('font-size',newSize)
    }
});