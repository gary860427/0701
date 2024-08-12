$(function () {  //document ready 一個js檔只要執行一次就可以

    // 移除行動裝置的背景影片
    if ($(window).width() < 821) {
        $('#about video').remove();
    }


    // 漢堡按鈕
    $('.hamburger').click(function(){
        // .hamburger 交替切換 .is-active
        $(this).toggleClass('is-active');
        // .navigation 交替切換 .show
        $('.navigation').toggleClass('show');
    });

    // 滑動至指定位置
    $('.menu a').click(function(){
        let btn = $(this).attr('href');
        let pos = $(btn).offset();
        $('html,body').animate({scrollTop:pos.top},1000);
    });

});


