/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/***/ (() => {

eval("$(function () {\n  function head() {\n    $('.header').load('inc.html .header div', init);\n\n    function init() {\n      $('nav a').on('click', function () {\n        localStorage.pageNum = $(this).index();\n      });\n      $('nav a').eq(localStorage.pageNum).css({\n        opacity: 0.5\n      });\n    }\n  }\n\n  head();\n\n  function headW() {\n    $('.header_02').load('inc.html .header_02 div', init);\n\n    function init() {\n      $('nav a').on('click', function () {\n        localStorage.pageNum = $(this).index();\n      });\n      $('nav a').eq(localStorage.pageNum).css({\n        opacity: 0.5\n      });\n    }\n  }\n\n  headW();\n\n  function mainScroll() {\n    var delta,\n        loop,\n        num = 0,\n        pos = [];\n    $('.scroll').each(function (i) {\n      pos.push($('.scroll').eq(i).offset().top);\n    }); // console.log(pos);\n\n    $(window).on('mousewheel DOMMouseScroll', function (e) {\n      delta = e.originalEvent.wheelDelta || -e.originalEvent.wheelDelta;\n      clearTimeout(loop);\n      loop = setTimeout(function () {\n        if (delta < 0) {\n          // down\n          //$(window).scrollTop(1000);\n          if (num < 5) num++;\n        } else {\n          // up\n          //$(window).scrollTop(0);\n          if (num != 0) num--;\n        }\n\n        $('main > div').animate({\n          marginTop: -pos[num]\n        }, 700, 'swing'); // $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산\n        //     pageOffsetTop =  $('.main_03').offset().top;\n        // });\n        // if(delta != 120){\n        //     $('.txt01').addClass('animate__slideOutUp');\n        //     $('.txt01').removeClass('animate__fadeInDown');\n        // }else{\n        //     $('.txt01').removeClass('animate__slideOutUp');\n        //     $('.txt01').addClass('animate__fadeInDown');\n        // }\n        //$('main > div').animate({marginTop:$(window).height() * -num})\n      }, 100);\n    });\n  }\n\n  window.onload = mainScroll;\n\n  function contaScroll() {\n    $(window).scroll(function () {\n      var scrollValue = $(this).scrollTop();\n      var imgH = $('.main_03 > img').offset().top;\n      console.log(imgH);\n      console.log(scrollValue);\n      $('.inner_02 > div').each(function () {\n        var divOST = $(this).offset().top - 600;\n        var divEffect = $(this).attr('data-effect');\n\n        if (scrollValue >= divOST) {\n          $(this).addClass(divEffect);\n        }\n      });\n\n      if (scrollValue >= imgH - 600) {\n        $('.main_03 img').addClass('animate__fadeIn');\n      }\n    });\n  }\n\n  contaScroll(); // function applyScroll(){\n  //     $(window).scroll(function() { \n  //         var scrollValue = $(this).scrollTop(); \n  //         $('.inner_02 > div').each(function(){\n  //             var divOST = $(this).offset().top - 600;\n  //             var divEffect = $(this).attr('data-effect');\n  //             if(scrollValue >= divOST){\n  //                 $(this).addClass(divEffect);\n  //             }\n  //         });\n  //         if(scrollValue >= 700){\n  //             console.log(scrollValue);\n  //             $('.main_03 img').addClass('animate__fadeIn');\n  //         }\n  //     });\n  // }\n  // applyScroll();\n\n  function divSlide() {\n    // div태그에 slide 클래스가 있을 때만 실행\n    if ($('div').hasClass('scroll')) {\n      $(\".regular\").slick({\n        dots: true,\n        infinite: true,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        autoplay: true,\n        autoplaySpeend: 5000,\n        arrows: false,\n        fade: true,\n        speed: 2000 // speed:1000\n        // centerMode: true,\n        // vertical: true\n\n      });\n    }\n  }\n\n  divSlide();\n});\n\n//# sourceURL=webpack://project_02/./src/js/common.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/common.js"]();
/******/ 	
/******/ })()
;