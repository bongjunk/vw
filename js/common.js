$(function(){

    $('.header').load('inc.html header div', init);

    function init(){
        $('nav a').on('click',function(){
            localStorage.pageNum = $(this).index();
        });

        $('nav a').eq(localStorage.pageNum).css({ opacity:0.5 });
    }


    function mainScroll(){
        var delta, loop, num = 0, pos = [];
    
        $('.scroll').each(function (i) {
            pos.push($('.scroll').eq(i).offset().top); 
        });

        console.log(pos);
        $(window).on('mousewheel DOMMouseScroll', function (e) {
            delta = e.originalEvent.wheelDelta || -e.originalEvent.wheelDelta;
    
            clearTimeout(loop);
            loop = setTimeout(function () {
                if (delta < 0) {
                    // down
                    //$(window).scrollTop(1000);
                    if (num != 7) num++;
                } else {
                    // up
                    //$(window).scrollTop(0);
                    if (num != 0) num--;
                }
                $('main > div').animate({ marginTop: -pos[num]});
                //$('main > div').animate({marginTop:$(window).height() * -num})
            }, 100)
        });
    }
    mainScroll();

    function scrollImg(){
        // 모바일 상태 top버튼
        $(window).scroll(function() {
          if ($(this).scrollTop() > 1700) {
              $('.main_06 img').fadeIn();
          } else {
              $('.main_06 img').fadeOut();
          }
        });
    
    }
    scrollImg();
});

