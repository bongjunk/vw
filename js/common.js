$(function(){

    $('.header').load('inc.html header div', init);

    function init(){
        $('nav a').on('click',function(){
            localStorage.pageNum = $(this).index();
        });

        $('nav a').eq(localStorage.pageNum).css({ opacity:0.5 });
    }
});