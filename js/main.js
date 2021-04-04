$(function(){

    function mainImg(){
      // 메인페이지 fade in, fade out
      var fadeN = 0;
      $('.main_01 .imgList img').not(':first').hide();

      $('.pbtn').on('click', function(){

        // $('.main_01 .imgList img').not(':first').hide();

        $('.pbtn img').attr('src', './imgs/main/btn_pause_off.png');

        var fadeInterval = setInterval(function(){
            $('.main_01 .imgList img').eq(fadeN).fadeOut(5000);
            fadeN++;
            if(fadeN == 4){fadeN = 0}
            $('.main_01 .imgList img').eq(fadeN).fadeIn(5000);

            //var imgSrc = $('.main_01 .imgList img').eq(fadeN).attr('src');
        },5000);

        $('.pbtn').on('click' ,function(){
          $('.pbtn img').attr('src', './imgs/main/btn_pause_on.png');
          clearInterval(fadeInterval);
        });
        
      });

      $('.cell .dot').on('click', function(){
        var idx = $(this).index();
        //var imgSrc = $('.main_01 .imgList img').eq(fadeN).attr('src');

        // $('.cell .dot').each(function(i){
        // });

        $('.main_01 .imgList img').eq(idx).fadeOut();
        $('.main_01 .imgList img').eq(idx).fadeIn();
        
          
        console.log(idx);
        // console.log(imgSrc);

      });

      
    }
    mainImg();

  

});