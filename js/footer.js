$(function(){
    $('#footer_nat').change(function(){
        var tmp=$(this).val();
        if(tmp=="ko"){
            $('#phone').text('+82 2 3440 5876')
        }else if(tmp=="us"){
            $('#phone').text('+1-800-432-9330')
        }else if(tmp=="uk"){
            $('#phone').text('+44 845337 1868')
        }else if(tmp=="ch"){
            $('#phone').text('+86 400 0642 999')
        }else if(tmp=="fr"){
            $('#phone').text('+33 1 58 18 14 98')
        }    
    });
})