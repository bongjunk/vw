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

eval("$(function () {\n  function mainImg() {\n    // 메인페이지 fade in, fade out\n    var fadeN = 0;\n    $('.main_01 .imgList img').not(':first').hide();\n    $('.pbtn').on('click', function () {\n      // $('.main_01 .imgList img').not(':first').hide();\n      $('.pbtn img').attr('src', './imgs/main/btn_pause_off.png');\n      var fadeInterval = setInterval(function () {\n        $('.main_01 .imgList img').eq(fadeN).fadeOut(5000);\n        fadeN++;\n\n        if (fadeN == 4) {\n          fadeN = 0;\n        }\n\n        $('.main_01 .imgList img').eq(fadeN).fadeIn(5000); //var imgSrc = $('.main_01 .imgList img').eq(fadeN).attr('src');\n      }, 5000);\n      $('.pbtn').on('click', function () {\n        $('.pbtn img').attr('src', './imgs/main/btn_pause_on.png');\n        clearInterval(fadeInterval);\n      });\n    });\n    $('.cell .dot').on('click', function () {\n      var idx = $(this).index(); //var imgSrc = $('.main_01 .imgList img').eq(fadeN).attr('src');\n      // $('.cell .dot').each(function(i){\n      // });\n\n      $('.main_01 .imgList img').eq(idx).fadeOut();\n      $('.main_01 .imgList img').eq(idx).fadeIn();\n      console.log(idx); // console.log(imgSrc);\n    });\n  }\n\n  mainImg();\n});\n\n//# sourceURL=webpack://project_02/./src/js/main.js?");

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