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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("$(function () {\n  // 메인페이지 fade in, fade out\n  var fadeN = 0;\n  $('.main_01 .imgList img').not(':first').hide();\n  setInterval(function () {\n    $('.main_01 .imgList img').eq(fadeN).fadeOut(5000);\n    fadeN++;\n\n    if (fadeN == 4) {\n      fadeN = 0;\n    }\n\n    $('.main_01 .imgList img').eq(fadeN).fadeIn(5000);\n    var imgSrc = $('.main_01 .imgList img').eq(fadeN).attr('src');\n    var imgB = $('.play .cell a').index();\n    console.log(imgSrc);\n    console.log(imgB);\n    $('.play .cell a').on('click', function () {\n      $('.main_01 .imgList img').attr('src', imgSrc); // $('.main_01 .imgList img').attr('fadeN',imgSrc)\n    });\n  }, 5000);\n  $(document).ready(function () {\n    //좌우버튼, 동그라미 버튼 연동 //\n    var i = $(\".btn li.on\").index();\n    var len = $(\".panel li\").length;\n    $(\".btn li\").click(function () {\n      i = $(this).index();\n      showSlide();\n    });\n\n    function showSlide() {\n      $(\".btn li\").removeClass(\"on\");\n      $(\".btn li\").eq(i).addClass(\"on\");\n      $(\".panel li\").stop(true, true).fadeOut();\n      $(\".panel li\").eq(i).stop(true, true).fadeIn();\n    }\n  }); // function imgBtn(){\n  // }\n  // imgBtn();\n  // $('.play .cell a').on('click',function(){\n  // $('.main_01 .imgList img').not(':first').hide();\n  // setInterval(function(){\n  //     $('.main_01 .imgList img').eq(fadeN).fadeOut(2000);\n  //     fadeN++;\n  //     if(fadeN == 4){fadeN = 0}\n  //     $('.main_01 .imgList img').eq(fadeN).fadeIn(2000);\n  // },2000);\n  // console.log(fadeN);\n  //});\n});\n\n//# sourceURL=webpack://project_02/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;