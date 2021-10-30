$(document).ready(function(){
    $('.btn').mouseleave(function(){
        $(this).css('background-color', '#7395AE');
    });

    //event mouseenter
    $('.btn').mouseenter(function(){
        $(this).css('background-color', 'grey');
    });

    //event hide
    $('.container').hide(function(fast){
    });

    //event show
    $('#show').click(function(){
        $('.container').show();
        $('.awal').hide();

    })
});