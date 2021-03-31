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

eval("$(function () {\n  $('.header').load('inc.html header div', init);\n\n  function init() {\n    $('nav a').on('click', function () {\n      localStorage.pageNum = $(this).index();\n    });\n    $('nav a').eq(localStorage.pageNum).css({\n      opacity: 0.5\n    });\n  }\n\n  function mainScroll() {\n    var delta,\n        loop,\n        num = 0,\n        pos = [];\n    $('.scroll').each(function (i) {\n      pos.push($('.scroll').eq(i).offset().top);\n    });\n    console.log(pos);\n    $(window).on('mousewheel DOMMouseScroll', function (e) {\n      delta = e.originalEvent.wheelDelta || -e.originalEvent.wheelDelta;\n      clearTimeout(loop);\n      loop = setTimeout(function () {\n        if (delta < 0) {\n          // down\n          //$(window).scrollTop(1000);\n          if (num != 7) num++;\n        } else {\n          // up\n          //$(window).scrollTop(0);\n          if (num != 0) num--;\n        }\n\n        $('main > div').animate({\n          marginTop: -pos[num]\n        }); //$('main > div').animate({marginTop:$(window).height() * -num})\n      }, 100);\n    });\n  }\n\n  mainScroll();\n});\n\n//# sourceURL=webpack://project_02/./src/js/common.js?");

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