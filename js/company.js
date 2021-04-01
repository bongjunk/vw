$(function(){

    function head(){
        $('.header').load('inc.html .header div', init);

        function init(){
            $('nav a').on('click',function(){
                localStorage.pageNum = $(this).index();
            });

            $('nav a').eq(localStorage.pageNum).css({ opacity:0.5 });
        }
    }
    head();

    function headW(){
        $('.header_02').load('inc.html .header_02 div', init);

        function init(){
            $('nav a').on('click',function(){
                localStorage.pageNum = $(this).index();
            });

            $('nav a').eq(localStorage.pageNum).css({ opacity:0.5 });
        }
    }
    headW();

    function headColor(){
        var pageOffsetTop = $('.main_03').offset().top;
        console.log(pageOffsetTop);

        $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
            pageOffsetTop =  $('.main_03').offset().top;
        });
        
        $(window).on('scroll', function(){ //스크롤시

            if($(this).scrollTop() > pageOffsetTop){
                $('.menu a').addClass('active');

                $(".imgChange").attr("src", "./imgs/header/nav_reference.png");
                $(".logoChange").attr("src", "./imgs/header/logo.png");
            }else{
                $('.menu a').removeClass('active');

                $(".imgChange").attr("src", "./imgs/header/nav_reference_w.png");
                $(".logoChange").attr("src", "./imgs/header/logo_w.png");
            }

            // sns
            if($(this).scrollTop() > 1000){
                $(".snsF").attr("src", "./imgs/header/util_facebook.png").fadeIn();
                $(".snsI").attr("src", "./imgs/header/util_instagram.png").fadeIn();
            }else{
                $(".snsF").attr("src", "./imgs/header/util_facebook_w.png");
                $(".snsI").attr("src", "./imgs/header/util_instagram_w.png");
            }

            // vision
            if($(this).scrollTop() > 950){
                $('.main_02 span').css({opacity:'0.5'});
            }else{
                $('.main_02 span').css({opacity:'1'});
            }
            
        });
    }
    headColor();

    function mainScroll(){
        var delta, loop, num = 0, pos = [];
    
        $('.scroll').each(function (i) {
            pos.push($('.scroll').eq(i).offset().top); 
        });

        // console.log(pos);
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
        $(window).scroll(function() {
            let scrollT = $(this).scrollTop();

            if (scrollT > 1600 && scrollT < 2800) {
                $('.main_07').show();
                $('.main_07 .img01').fadeIn();
            } else {
                $('.main_07 .img01').fadeOut();
            }
            
            if (scrollT > 2800 && scrollT < 3900) {
                $('.main_07 .img02').fadeIn();
            } else {
                $('.main_07 .img02').fadeOut();
            }

            if (scrollT > 3900 && scrollT < 4800) {
                $('.main_07 .img03').fadeIn();
            } else {
                $('.main_07 .img03').fadeOut();
            }
        });
    
    }
    scrollImg();
});