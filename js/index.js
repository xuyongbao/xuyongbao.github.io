$(function(){
    $('.mainLeft').find('h3').click(function(){
        $(this).next().toggle();
        if($(this).next().is(":visible") == true){
            $(this).find('.triangle').addClass('right');
        }else{
            $(this).find('.triangle').removeClass('right');
        }
        /*$(this).parent().siblings().find('ul').hide();
        $(this).parent().siblings().find('.triangle').removeClass('right');*/
        $('.mainRight_title').find('a').eq(1).text($(this).text());
    });
    $('.new_guide').find('ul').find('a').click(function(){
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        $('.mainRight_title').find('a').eq(2).text($(this).text());
    });
})
