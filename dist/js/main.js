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

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_v5.0/./src/scss/main.scss?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _js_template_page_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/template-page/timer */ \"./src/js/template-page/timer.js\");\n/* harmony import */ var _js_template_page_timer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_template_page_timer__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack://webpack_v5.0/./src/js/index.js?");

/***/ }),

/***/ "./src/js/template-page/timer.js":
/*!***************************************!*\
  !*** ./src/js/template-page/timer.js ***!
  \***************************************/
/***/ (() => {

eval("const dateString = data;\r\nconst dateParts = dateString.split(/[/ :]/);\r\n\r\nconst day = parseInt(dateParts[0]);\r\nconst month = parseInt(dateParts[1]) - 1;\r\nconst year = parseInt(dateParts[2]);\r\nlet hour = parseInt(dateParts[3]);\r\nconst minute = parseInt(dateParts[4]);\r\nconst period = dateParts[5].toLowerCase();\r\n\r\nif (period === \"pm\" && hour !== 12) {\r\n  hour += 12;\r\n} else if (period === \"am\" && hour === 12) {\r\n  hour = 0;\r\n}\r\n\r\nconst targetDate = new Date(year, month, day, hour, minute);\r\nconst options = {\r\n  year: \"numeric\",\r\n  month: \"short\",\r\n  day: \"numeric\",\r\n};\r\nconst formattedDate = targetDate.toLocaleDateString(\"en-US\", options);\r\nconst endDate = document.querySelector(\".data__ending--bottom\");\r\nendDate.innerText = formattedDate;\r\n\r\nfunction updateCountdown() {\r\n  const now = new Date();\r\n  const timeRemaining = targetDate - now;\r\n\r\n  if (timeRemaining <= 0) {\r\n    document.getElementById(\"countdown\").textContent =\r\n      \"Event has already occurred!\";\r\n  } else {\r\n    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));\r\n    const hours = Math.floor(\r\n      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)\r\n    );\r\n    const minutes = Math.floor(\r\n      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)\r\n    );\r\n    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);\r\n\r\n    document.getElementById(\"days\").textContent = days.toString().padStart(2, \"0\");;\r\n    document.getElementById(\"hours\").textContent = hours.toString().padStart(2, \"0\");;\r\n    document.getElementById(\"minutes\").textContent = minutes.toString().padStart(2, \"0\");;\r\n    document.getElementById(\"seconds\").textContent = seconds.toString().padStart(2, \"0\");;\r\n  }\r\n}\r\n\r\nsetInterval(updateCountdown, 1000);\r\nupdateCountdown();\r\n\n\n//# sourceURL=webpack://webpack_v5.0/./src/js/template-page/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scss/main.scss");
/******/ 	
/******/ })()
;