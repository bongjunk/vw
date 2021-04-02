$(function(){

    function mainImg(){
      // 메인페이지 fade in, fade out
      var fadeN = 0;
      $('.main_01 .imgList img').not(':first').hide();

      $('.pbtn').on('click', function(){
        $('.main_01 .imgList img').not(':first').hide();
        
        $('.pbtn img').attr('src', './imgs/main/btn_pause_off.png');

        setInterval(function(){
            $('.main_01 .imgList img').eq(fadeN).fadeOut(5000);
            fadeN++;
            if(fadeN == 4){fadeN = 0}
            $('.main_01 .imgList img').eq(fadeN).fadeIn(5000);

            var imgSrc = $('.main_01 .imgList img').eq(fadeN).attr('src');
            var imgB = $('.play .cell a').index();

            console.log(imgSrc);
            console.log(imgB);

            $('.play .cell a').on('click', function(){
                
                
                $('.main_01 .imgList img').attr('src',imgSrc)
        
                // $('.main_01 .imgList img').attr('fadeN',imgSrc)
            });

        },5000);
      });
    }
    mainImg();
    


    $(document).ready(function() {

        //좌우버튼, 동그라미 버튼 연동 //
      
        var i = $(".btn li.on").index();
        var len = $(".panel li").length;
    
        $(".btn li").click(function() {
          i = $(this).index();
          showSlide();
        });
        function showSlide() {
          $(".btn li").removeClass("on");
          $(".btn li").eq(i).addClass("on");
          $(".panel li").stop(true, true).fadeOut();
          $(".panel li").eq(i).stop(true, true).fadeIn();
        }
      });

    // function imgBtn(){
   
    // }
    // imgBtn();

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