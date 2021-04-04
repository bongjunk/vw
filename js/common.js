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
                    if (num < 5) num++;
                    
                } else { 
                    // up
                    //$(window).scrollTop(0);
                    if (num != 0) num--;
                    
                }

                // $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
                //     pageOffsetTop =  $('.main_03').offset().top;
                // });

                $('main > div').animate({ marginTop: -pos[num]},900,'swing');

                // if(delta != 120){
                //     $('.txt01').addClass('animate__slideOutUp');
                //     $('.txt01').removeClass('animate__fadeInDown');
                // }else{
                //     $('.txt01').removeClass('animate__slideOutUp');
                //     $('.txt01').addClass('animate__fadeInDown');
                // }
                //$('main > div').animate({marginTop:$(window).height() * -num})
            }, 100)
        });
    }
    window.onload = mainScroll;
    
    function contaScroll(){
        $(window).scroll(function() { 
            var scrollValue = $(this).scrollTop(); 
            
            $('.inner_02 > div').each(function(){
                var divOST = $(this).offset().top - 600;
                var divEffect = $(this).attr('data-effect');

                if(scrollValue >= divOST){
                    $(this).addClass(divEffect);
                }
            });
            
            if(scrollValue >= 700){
                $('.main_03 img').addClass('animate__fadeIn');
            }
            
        });
    }
    contaScroll();

    // function applyScroll(){
    //     $(window).scroll(function() { 
    //         var scrollValue = $(this).scrollTop(); 
            
    //         $('.inner_02 > div').each(function(){
    //             var divOST = $(this).offset().top - 600;
    //             var divEffect = $(this).attr('data-effect');

    //             if(scrollValue >= divOST){
    //                 $(this).addClass(divEffect);
    //             }
    //         });
            
    //         if(scrollValue >= 700){
    //             console.log(scrollValue);
    //             $('.main_03 img').addClass('animate__fadeIn');
    //         }
            
    //     });
    // }
    // applyScroll();


    // function divSlide(){
    // // ul태그에 slide 클래스가 있을 때만 실행
    //     if($('div').hasClass('imgList')){
    //         $(".regular").slick({
    //             dots: true,
    //             infinite: true,
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             autoplay:true,
    //             autoplaySpeend:1500,
    //             arrows:false,
    //             fade:true
    //             // speend:1000
    //             // centerMode: true,
    //             // vertical: true
    //         });
    //     }
    // }
    // divSlide();
    
});
