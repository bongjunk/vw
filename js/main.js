$(function(){
// 메인페이지 fade in, fade out
    var fadeN = 0;

    $('.main_01 .imgList img').not(':first').hide();
    setInterval(function(){
        $('.main_01 .imgList img').eq(fadeN).fadeOut(5000);
        fadeN++;
        if(fadeN == 4){fadeN = 0}
        $('.main_01 .imgList img').eq(fadeN).fadeIn(5000);
    },5000);
    console.log(fadeN);


    // $('.play .cell a').on('click',function(){
        // $('.main_01 .imgList img').not(':first').hide();
        // setInterval(function(){
        //     $('.main_01 .imgList img').eq(fadeN).fadeOut(2000);
        //     fadeN++;
        //     if(fadeN == 4){fadeN = 0}
        //     $('.main_01 .imgList img').eq(fadeN).fadeIn(2000);
        // },2000);
        // console.log(fadeN);

    //});



});