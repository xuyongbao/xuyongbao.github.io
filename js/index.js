
$(function(){
    $('.logo_right').mouseover(function(){
        $('.logo_right p span').addClass('show');
        $('.logo_right p a').addClass('on');
    });
    $('.logo_right').mouseout(function(){
        $('.logo_right p span').removeClass('show');
        $('.logo_right p a').removeClass('on');
    });


    $('#nav_app').mouseover(function(){
        $('.nav_right .nav_app').addClass('on');
    });
    $('#nav_app').mouseout(function(){
        $('.nav_right .nav_app').removeClass('on');
    });


    $(' .personal .personal_nav a').click(function(){

        $('.personal .personal_nav a').removeClass('on');
        $('.personal .personal_video ul').removeClass('show');

        $(this).addClass('on');
        $('.personal .personal_video ul').eq($(this).index()).addClass('show')

    });



    $('.original .personal_nav a').click(function(){

        $('.original .personal_nav a').removeClass('on');
        $('.original .personal_video ul').removeClass('show');

        $(this).addClass('on');
        $('.original .personal_video ul').eq($(this).index()).addClass('show')

    });


    $('.video .personal_left .personal_nav a').click(function(){

        $('.video .personal_left .personal_nav a').removeClass('on');
        $('.video .main_left').removeClass('show');

        $(this).addClass('on');
        $('.video .main_left').eq($(this).index()).addClass('show')

    });




    $('.video .video_right .personal_nav a').click(function(){

        $('.video  .video_right .personal_nav a').removeClass('on');
        $('.video .video_right .video_list ul').removeClass('show');

        $(this).addClass('on');
        $('.video .video_right .video_list ul').eq($(this).index()).addClass('show')

    });



    $('.korean .video_right .personal_nav a').click(function(){

        $('.korean  .video_right .personal_nav a').removeClass('on');
        $('.korean .video_right .video_list ul').removeClass('show');

        $(this).addClass('on');
        $('.korean .video_right .video_list ul').eq($(this).index()).addClass('show')

    });



    $('.moviep .personal_left .personal_nav a').click(function(){

        $('.moviep .personal_left .personal_nav a').removeClass('on');
        $('.moviep .main_left').removeClass('show');

        $(this).addClass('on');
        $('.moviep .main_left').eq($(this).index()).addClass('show')

    });

    $('.moviep .video_right .personal_nav a').click(function(){

        $('.moviep  .video_right .personal_nav a').removeClass('on');
        $('.moviep .video_right .video_list ul').removeClass('show');

        $(this).addClass('on');
        $('.moviep .video_right .video_list ul').eq($(this).index()).addClass('show')

    });


    $('.theatre  .personal_nav a').click(function(){

        $('.theatre .personal_nav a').removeClass('on');
        $('.theatre  .main_left ul').removeClass('show');

        $(this).addClass('on');
        $('.theatre  .main_left ul').eq($(this).index()).addClass('show')

    });



    $('.variety  .personal_nav a').click(function(){

        $('.variety  .personal_nav a').removeClass('on');
        $('.variety .main_left').removeClass('show');

        $(this).addClass('on');
        $('.variety .main_left').eq($(this).index()).addClass('show')

    });


    $('.variety  .video_right .personal_nav a').click(function(){

        $('.variety  .video_right .personal_nav a').removeClass('on');
        $('.variety .video_ul').removeClass('show');

        $(this).addClass('on');
        $('.variety .video_ul').eq($(this).index()).addClass('show')

    });

    $('.entertainment  .enter_left .personal_nav a').click(function(){

        $('.entertainment  .enter_left .personal_nav a').removeClass('on');
        $('.entertainment .personal_video ul').removeClass('show');

        $(this).addClass('on');
        $('.entertainment .personal_video ul').eq($(this).index()).addClass('show')

    });

    $('.music  .music_left .personal_nav a').click(function(){

        $('.music  .music_left  .personal_nav a').removeClass('on');
        $('.music  .music_left ul').removeClass('show');

        $(this).addClass('on');
        $('.music  .music_left ul').eq($(this).index()).addClass('show')

    });



    $('.music  .music_right .personal_nav a').click(function(){

        $('.music  .music_right  .personal_nav a').removeClass('on');
        $('.music  .music_right .video_ul').removeClass('show');

        $(this).addClass('on');
        $('.music  .music_right .video_ul').eq($(this).index()).addClass('show')

    });

    $('.channel .personal_nav a').click(function(){

        $('.channel .personal_nav a').removeClass('on');
        $('.channel .channel_right ul').removeClass('show');

        $(this).addClass('on');
        $('.channel .channel_right ul').eq($(this).index()).addClass('show')

    });






    $('li.main_li').mouseover(function(){

        $(this).addClass('show');
    });


    $('li.main_li').mouseout(function(){
        $('li.main_li').removeClass('show');

    });




    $('.user').mouseover(function(){

        $(this).addClass('show');
    });


    $('.user').mouseout(function(){
        $('.user').removeClass('show');

    });

































});


















































