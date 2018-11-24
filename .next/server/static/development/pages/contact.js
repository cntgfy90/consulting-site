module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./base/Styles.js":
/*!************************!*\
  !*** ./base/Styles.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\_WebDev\\consulting-site\\base\\Styles.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1607086566",
    css: "@font-face{font-family:'Montserrat-SemiBold';src:url('../static/fonts/Montserrat-SemiBold.woff2') format('woff2'), url('../static/fonts/Montserrat-SemiBold.woff') format('woff');font-weight:600;font-style:normal;}@font-face{font-family:'Montserrat-Medium';src:url('../static/fonts/Montserrat-Medium.woff2') format('woff2'), url('../static/fonts/Montserrat-Medium.woff') format('woff');font-weight:500;font-style:normal;}@font-face{font-family:'Montserrat-ExtraBold';src:url('../static/fonts/Montserrat-ExtraBold.woff2') format('woff2'), url('../static/fonts/Montserrat-ExtraBold.woff') format('woff');font-weight:800;font-style:normal;}@font-face{font-family:'Montserrat-Black';src:url('../static/fonts/Montserrat-Black.woff2') format('woff2'), url('../static/fonts/Montserrat-Black.woff') format('woff');font-weight:900;font-style:normal;}@font-face{font-family:'Montserrat-Thin';src:url('../static/fonts/Montserrat-Thin.woff2') format('woff2'), url('../static/fonts/Montserrat-Thin.woff') format('woff');font-weight:100;font-style:normal;}@font-face{font-family:'Montserrat';src:url('../static/fonts/Montserrat-Regular.woff2') format('woff2'), url('../static/fonts/Montserrat-Regular.woff') format('woff');font-weight:normal;font-style:normal;}@font-face{font-family:'Montserrat-Light';src:url('../static/fonts/Montserrat-Light.woff2') format('woff2'), url('../static/fonts/Montserrat-Light.woff') format('woff');font-weight:300;font-style:normal;}@font-face{font-family:'Montserrat-Bold';src:url('../static/fonts/Montserrat-Bold.woff2') format('woff2'), url('../static/fonts/Montserrat-Bold.woff') format('woff');font-weight:bold;font-style:normal;}*{box-sizing:border-box;margin:0;padding:0;}a,a:hover{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxfV2ViRGV2XFxjb25zdWx0aW5nLXNpdGVcXGJhc2VcXFN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLeUIsQUFJaUMsQUFNRCxBQUllLEFBUUYsQUFRRyxBQVFKLEFBUUQsQUFRTCxBQVFNLEFBUUQsc0JBakV2QixHQW1EMEQsS0FSSCxBQXdCQSxDQWxFdEQsQUFrQ3VELEFBd0JBLENBeENDLEVBUkUsQ0FnQkMsTUF6QnZFLFNBSUEseUdBc0NvQixBQXdCQyxDQWhCRSxFQWhCSCxBQXdCQSxHQXhDQSxNQVJBLEdBZ0JBLENBaUJFLENBd0JBLEVBaENBLEFBd0JBLENBUkEsRUFoQ0EsTUFSQSxHQWdCQSxHQWlCdEIsQ0F3QkEsRUFoQ0EsQUF3QkEsQ0FSQSxFQWhDQSxNQVJBLEdBZ0JBIiwiZmlsZSI6IkU6XFxfV2ViRGV2XFxjb25zdWx0aW5nLXNpdGVcXGJhc2VcXFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSwgYTpob3ZlciB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuICAgICAgICAgICAgc3JjOiB1cmwoJy4uL3N0YXRpYy9mb250cy9Nb250c2VycmF0LVNlbWlCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgICAgICAgICAgdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1TZW1pQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtTWVkaXVtJztcclxuICAgICAgICAgICAgc3JjOiB1cmwoJy4uL3N0YXRpYy9mb250cy9Nb250c2VycmF0LU1lZGl1bS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgICAgICAgICAgIHVybCgnLi4vc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtTWVkaXVtLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1FeHRyYUJvbGQnO1xyXG4gICAgICAgICAgICBzcmM6IHVybCgnLi4vc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtRXh0cmFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgICAgICAgICAgdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1FeHRyYUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LUJsYWNrJztcclxuICAgICAgICAgICAgc3JjOiB1cmwoJy4uL3N0YXRpYy9mb250cy9Nb250c2VycmF0LUJsYWNrLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgICAgICAgICAgdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1CbGFjay53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtVGhpbic7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1UaGluLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgICAgICAgICAgdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1UaGluLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgICAgICAgICAgdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1MaWdodCc7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1MaWdodC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgICAgICAgICAgIHVybCgnLi4vc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtTGlnaHQud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LUJvbGQnO1xyXG4gICAgICAgICAgICBzcmM6IHVybCgnLi4vc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgICAgICAgICAgIHVybCgnLi4vc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=E:\\_WebDev\\consulting-site\\base\\Styles.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.js");
var _jsxFileName = "E:\\_WebDev\\consulting-site\\components\\Header.js";





var Header = function Header(_ref) {
  var bgImage = _ref.bgImage;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4099953058", [bgImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4099953058",
    css: "header.__jsx-style-dynamic-selector{background:url(".concat(bgImage, ") no-repeat center / cover;height:400px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxfV2ViRGV2XFxjb25zdWx0aW5nLXNpdGVcXGNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFha0IsQUFJaUYsc0VBQ3pELGFBQ0YsV0FDYiIsImZpbGUiOiJFOlxcX1dlYkRldlxcY29uc3VsdGluZy1zaXRlXFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHtcclxuICBiZ0ltYWdlLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7YmdJbWFnZX0pIG5vLXJlcGVhdCBjZW50ZXIgLyBjb3ZlcjtcclxuICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYmdJbWFnZTogJy4uL3N0YXRpYy9pbWcvaW1nNy5qcGVnJyxcclxufTtcclxuXHJcbkhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgYmdJbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXX0= */\n/*@ sourceURL=E:\\_WebDev\\consulting-site\\components\\Header.js */"),
    dynamic: [bgImage],
    __self: this
  }));
};

Header.defaultProps = {
  bgImage: '../static/img/img7.jpeg'
};
Header.propTypes = {
  bgImage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\_WebDev\\consulting-site\\components\\Navigation.js";




var Navigation = function Navigation() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3318959256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3318959256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/registration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3318959256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u041E\u041E\u041E / \u0424\u041B\u041F")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/accountant-services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3318959256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3318959256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "\u041E \u043D\u0430\u0441")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3318959256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3318959256",
    css: "ul.jsx-3318959256{position:fixed;top:0;left:0;right:0;width:100%;background-color:#74d9f2;height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 30px;}a.jsx-3318959256{font-family:'Montserrat';font-size:18px;color:#000;line-height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxfV2ViRGV2XFxjb25zdWx0aW5nLXNpdGVcXGNvbXBvbmVudHNcXE5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJrQixBQUcwQixBQVlVLGVBWG5CLE1BQVEsSUFZQyxHQVpRLFFBQ1osSUFZQSxPQVhjLElBWVIsaUJBQ25CLElBWmMsWUFDQywwRUFDUSwyRUFDUyxtSEFDZixlQUNqQiIsImZpbGUiOiJFOlxcX1dlYkRldlxcY29uc3VsdGluZy1zaXRlXFxjb21wb25lbnRzXFxOYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPtCT0LvQsNCy0L3QsNGPPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdHJhdGlvblwiPlxyXG4gICAgICAgICAgPGE+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQntCe0J4gLyDQpNCb0J88L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudGFudC1zZXJ2aWNlc1wiPlxyXG4gICAgICAgICAgPGE+0JHRg9GF0LPQsNC70YLQtdGA0YHQutC40LUg0YPRgdC70YPQs9C4PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICA8YT7QniDQvdCw0YE8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgPGE+0JrQvtC90YLQsNC60YLRizwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzRkOWYyO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XHJcbiJdfQ== */\n/*@ sourceURL=E:\\_WebDev\\consulting-site\\components\\Navigation.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_Styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Styles */ "./base/Styles.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
var _jsxFileName = "E:\\_WebDev\\consulting-site\\pages\\contact.js";




var Contact = function Contact() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_Styles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bgImage: '../static/img/img1.jpeg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/contact.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/contact.js */"./pages/contact.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=contact.js.map