/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutLoad: () => (/* binding */ aboutLoad)\n/* harmony export */ });\nfunction aboutLoad(){\n    const contentDiv = document.querySelector(\"#content\");\n    const aboutContentHolder = document.createElement(\"div\");\n    aboutContentHolder.classList.add(\".about_content_holder\");\n    const aboutTitle = document.createElement(\"h1\");\n    aboutTitle.textContent = \"About\";\n    const aboutDescription = document.createElement(\"p\");\n    aboutDescription.textContent = \"This is a experimental restaurant page\";\n    aboutContentHolder.appendChild(aboutTitle);\n    aboutContentHolder.appendChild(aboutDescription);\n    contentDiv.appendChild(aboutContentHolder);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcz81ODY0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhYm91dExvYWQoKXtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IGFib3V0Q29udGVudEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWJvdXRDb250ZW50SG9sZGVyLmNsYXNzTGlzdC5hZGQoXCIuYWJvdXRfY29udGVudF9ob2xkZXJcIik7XG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICAgIGNvbnN0IGFib3V0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhYm91dERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZXhwZXJpbWVudGFsIHJlc3RhdXJhbnQgcGFnZVwiO1xuICAgIGFib3V0Q29udGVudEhvbGRlci5hcHBlbmRDaGlsZChhYm91dFRpdGxlKTtcbiAgICBhYm91dENvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQoYWJvdXREZXNjcmlwdGlvbik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChhYm91dENvbnRlbnRIb2xkZXIpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/about.js\n\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageloader */ \"./src/pageloader.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n(0,_pageloader__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n\nconst contentDiv = document.querySelector(\"#content\");\nlet currentTab = \"home\";\n\ndocument.documentElement.addEventListener(\"click\", (e)=>{\n    switch(e.target.id){\n        case \"home\":\n            if(currentTab === \"home\"){\n                break;\n            } else{\n                contentDiv.innerHTML = \"\";\n                (0,_pageloader__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n                currentTab = \"home\";\n                break;\n            }\n        case \"menu\":\n            if(currentTab === \"menu\"){\n                break;\n            } else{\n                contentDiv.innerHTML = \"\";\n                (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuLoad)();\n                currentTab = \"menu\";\n                break;\n            }\n        case \"about\":\n            if(currentTab === \"about\"){\n                break;\n            } else{\n                contentDiv.innerHTML = \"\";\n                (0,_about__WEBPACK_IMPORTED_MODULE_2__.aboutLoad)();\n                currentTab = \"about\";\n                break;\n            }\n    }\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF3QztBQUNOO0FBQ0U7QUFDcEMscURBQVE7O0FBRVI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsZ0JBQWdCLHFEQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGdCQUFnQiwrQ0FBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxnQkFBZ0IsaURBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFnZUxvYWQgfSBmcm9tIFwiLi9wYWdlbG9hZGVyXCI7XG5pbXBvcnQgeyBtZW51TG9hZCB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGFib3V0TG9hZCB9IGZyb20gXCIuL2Fib3V0XCI7XG5wYWdlTG9hZCgpO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xubGV0IGN1cnJlbnRUYWIgPSBcImhvbWVcIjtcblxuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICBzd2l0Y2goZS50YXJnZXQuaWQpe1xuICAgICAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgICAgICAgaWYoY3VycmVudFRhYiA9PT0gXCJob21lXCIpe1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICBwYWdlTG9hZCgpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWIgPSBcImhvbWVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcIm1lbnVcIjpcbiAgICAgICAgICAgIGlmKGN1cnJlbnRUYWIgPT09IFwibWVudVwiKXtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgbWVudUxvYWQoKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFiID0gXCJtZW51XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJhYm91dFwiOlxuICAgICAgICAgICAgaWYoY3VycmVudFRhYiA9PT0gXCJhYm91dFwiKXtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgYWJvdXRMb2FkKCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFRhYiA9IFwiYWJvdXRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICB9XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuLoad: () => (/* binding */ menuLoad)\n/* harmony export */ });\nfunction menuLoad(){\n    const contentDiv = document.querySelector(\"#content\");\n    const menuContentHolder = document.createElement(\"div\");\n    menuContentHolder.classList.add(\".menu_content_holder\");\n    const menuTitle = document.createElement(\"h1\");\n    menuTitle.textContent = \"This is our menu\";\n    const menuDescription = document.createElement(\"p\");\n    menuDescription.textContent = \"Enjoy the good stuff\";\n    menuContentHolder.appendChild(menuTitle);\n    menuContentHolder.appendChild(menuDescription);\n    contentDiv.appendChild(menuContentHolder);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbWVudUxvYWQoKXtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IG1lbnVDb250ZW50SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q29udGVudEhvbGRlci5jbGFzc0xpc3QuYWRkKFwiLm1lbnVfY29udGVudF9ob2xkZXJcIik7XG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBvdXIgbWVudVwiO1xuICAgIGNvbnN0IG1lbnVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRW5qb3kgdGhlIGdvb2Qgc3R1ZmZcIjtcbiAgICBtZW51Q29udGVudEhvbGRlci5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIG1lbnVDb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKG1lbnVEZXNjcmlwdGlvbik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51Q29udGVudEhvbGRlcik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n\n}");

/***/ }),

/***/ "./src/pageloader.js":
/*!***************************!*\
  !*** ./src/pageloader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\nfunction pageLoad(){\n    const contentDiv = document.querySelector(\"#content\");\n    const heroSection = document.createElement(\"div\");\n    const contentTitle = document.createElement(\"h1\");\n    const contentDescription = document.createElement(\"p\");\n\n    contentTitle.textContent = \"Welcome to my Restaurent site\";\n    contentDescription.textContent = \"It's a practice restaurent page\";\n\n    heroSection.classList.add(\".hero_section\");\n    heroSection.appendChild(contentTitle);\n    heroSection.appendChild(contentDescription);\n    contentDiv.appendChild(heroSection);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZWxvYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWRlci5qcz9mMzcwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZCgpe1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBjb250ZW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBteSBSZXN0YXVyZW50IHNpdGVcIjtcbiAgICBjb250ZW50RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkl0J3MgYSBwcmFjdGljZSByZXN0YXVyZW50IHBhZ2VcIjtcblxuICAgIGhlcm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCIuaGVyb19zZWN0aW9uXCIpO1xuICAgIGhlcm9TZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG4gICAgaGVyb1NlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGVudERlc2NyaXB0aW9uKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlcm9TZWN0aW9uKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pageloader.js\n\n}");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;