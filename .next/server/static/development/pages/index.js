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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
    styleId: "252695589",
    css: "@font-face{font-family:'Montserrat-SemiBold';src:url('../static/fonts/Montserrat-SemiBold.woff2') format('woff2'), url('../static/fonts/Montserrat-SemiBold.woff') format('woff');font-weight:600;font-style:normal;}@font-face{font-family:'Montserrat-Medium';src:url('../static/fonts/Montserrat-Medium.woff2') format('woff2'), url('../static/fonts/Montserrat-Medium.woff') format('woff');font-weight:500;font-style:normal;}@font-face{font-family:'Montserrat-ExtraBold';src:url('../static/fonts/Montserrat-ExtraBold.woff2') format('woff2'), url('../static/fonts/Montserrat-ExtraBold.woff') format('woff');font-weight:800;font-style:normal;}@font-face{font-family:'Montserrat-Black';src:url('../static/fonts/Montserrat-Black.woff2') format('woff2'), url('../static/fonts/Montserrat-Black.woff') format('woff');font-weight:900;font-style:normal;}@font-face{font-family:'Montserrat-Thin';src:url('../static/fonts/Montserrat-Thin.woff2') format('woff2'), url('../static/fonts/Montserrat-Thin.woff') format('woff');font-weight:100;font-style:normal;}@font-face{font-family:'Montserrat';src:url('../static/fonts/Montserrat-Regular.woff2') format('woff2'), url('../static/fonts/Montserrat-Regular.woff') format('woff');font-weight:normal;font-style:normal;}@font-face{font-family:'Montserrat-Light';src:url('../static/fonts/Montserrat-Light.woff2') format('woff2'), url('../static/fonts/Montserrat-Light.woff') format('woff');font-weight:300;font-style:normal;}@font-face{font-family:'Montserrat-Bold';src:url('../static/fonts/Montserrat-Bold.woff2') format('woff2'), url('../static/fonts/Montserrat-Bold.woff') format('woff');font-weight:bold;font-style:normal;}*{box-sizing:border-box;margin:0;padding:0;}a,a:hover{-webkit-text-decoration:none;text-decoration:none;}ul{list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxfV2ViRGV2XFxjb25zdWx0aW5nLXNpdGVcXGJhc2VcXFN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLeUIsQUFJaUMsQUFNRCxBQUlMLEFBSW9CLEFBUUYsQUFRRyxBQVFKLEFBUUQsQUFRTCxBQVFNLEFBUUQsZ0JBM0RsQyxNQVZXLEdBdUQwRCxLQVJILEFBd0JBLENBdEV0RCxBQXNDdUQsQUF3QkEsQ0F4Q0MsRUFSRSxDQWdCQyxNQTdCdkUsU0FJQSx5R0EwQ29CLEFBd0JDLENBaEJFLEVBaEJILEFBd0JBLEdBeENBLE1BUkEsR0FnQkEsQ0FpQkUsQ0F3QkEsRUFoQ0EsQUF3QkEsQ0FSQSxFQWhDQSxNQVJBLEdBZ0JBLEdBaUJ0QixDQXdCQSxFQWhDQSxBQXdCQSxDQVJBLEVBaENBLE1BUkEsR0FnQkEiLCJmaWxlIjoiRTpcXF9XZWJEZXZcXGNvbnN1bHRpbmctc2l0ZVxcYmFzZVxcU3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhLCBhOmhvdmVyIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuICAgICAgICAgICAgc3JjOiB1cmwoJy4uL3N0YXRpYy9mb250cy9Nb250c2VycmF0LVNlbWlCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgICAgICAgICAgdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1TZW1pQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtTWVkaXVtJztcclxuICAgICAgICAgICAgc3JjOiB1cmwoJy4uL3N0YXRpYy9mb250cy9Nb250c2VycmF0LU1lZGl1bS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgICAgICAgICAgIHVybCgnLi4vc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtTWVkaXVtLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1FeHRyYUJvbGQnO1xyXG4gICAgICAgICAgICBzcmM6IHVybCgnLi4vc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtRXh0cmFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgICAgICAgICAgdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1FeHRyYUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LUJsYWNrJztcclxuICAgICAgICAgICAgc3JjOiB1cmwoJy4uL3N0YXRpYy9mb250cy9Nb250c2VycmF0LUJsYWNrLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgICAgICAgICAgdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1CbGFjay53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtVGhpbic7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1UaGluLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgICAgICAgICAgdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1UaGluLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgICAgICAgICAgdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1MaWdodCc7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1MaWdodC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgICAgICAgICAgIHVybCgnLi4vc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtTGlnaHQud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LUJvbGQnO1xyXG4gICAgICAgICAgICBzcmM6IHVybCgnLi4vc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgICAgICAgICAgIHVybCgnLi4vc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=E:\\_WebDev\\consulting-site\\base\\Styles.js */",
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

/***/ "./components/Main/Links/ContactLink.js":
/*!**********************************************!*\
  !*** ./components/Main/Links/ContactLink.js ***!
  \**********************************************/
/*! exports provided: ContactLinkStyled, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactLinkStyled", function() { return ContactLinkStyled; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\_WebDev\\consulting-site\\components\\Main\\Links\\ContactLink.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Montserrat-Medium';\n  font-size: 14px;\n  color: #0b4eb7;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var ContactLinkStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(_templateObject());

var ContactLink = function ContactLink(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactLinkStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, children));
};

ContactLink.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ContactLink);

/***/ }),

/***/ "./components/Main/Service.js":
/*!************************************!*\
  !*** ./components/Main/Service.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_FlowText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/FlowText */ "./shared/FlowText.js");
var _jsxFileName = "E:\\_WebDev\\consulting-site\\components\\Main\\Service.js";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Montserrat-Medium';\n  font-size: 16px;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 120px;\n  height: 120px;\n  border-radius: 100%;\n  background: ", ";\n  margin-bottom: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 30px 15px;\n  background-color: #fcfcfc;\n  max-width: 300px;\n  text-align: center;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n  margin-bottom: 30px;\n  border-radius: 2px;\n  height: 320px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span(_templateObject2(), function (_ref) {
  var icon = _ref.icon;
  return "url(".concat(icon, ") no-repeat center / cover");
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_shared_FlowText__WEBPACK_IMPORTED_MODULE_3__["FlowText"])(_templateObject3());

var Service = function Service(_ref2) {
  var className = _ref2.className,
      icon = _ref2.icon,
      children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconContainer, {
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, children));
};

Service.defaultProps = {
  className: ''
};
Service.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),

/***/ "./components/Main/ServiceContainer.js":
/*!*********************************************!*\
  !*** ./components/Main/ServiceContainer.js ***!
  \*********************************************/
/*! exports provided: ServiceContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceContainer", function() { return ServiceContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-around;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ServiceContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

/***/ }),

/***/ "./components/Main/ServiceGroup.js":
/*!*****************************************!*\
  !*** ./components/Main/ServiceGroup.js ***!
  \*****************************************/
/*! exports provided: ServiceGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceGroup", function() { return ServiceGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ServiceGroup = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

/***/ }),

/***/ "./components/Main/Texts/ContactText.js":
/*!**********************************************!*\
  !*** ./components/Main/Texts/ContactText.js ***!
  \**********************************************/
/*! exports provided: ContactText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactText", function() { return ContactText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_FlowText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/FlowText */ "./shared/FlowText.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ContactText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_shared_FlowText__WEBPACK_IMPORTED_MODULE_2__["FlowText"])(_templateObject());

/***/ }),

/***/ "./components/Main/Texts/IntroText.js":
/*!********************************************!*\
  !*** ./components/Main/Texts/IntroText.js ***!
  \********************************************/
/*! exports provided: IntroText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroText", function() { return IntroText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_FlowText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/FlowText */ "./shared/FlowText.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var IntroText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_shared_FlowText__WEBPACK_IMPORTED_MODULE_2__["FlowText"])(_templateObject());

/***/ }),

/***/ "./components/Main/Texts/OfferText.js":
/*!********************************************!*\
  !*** ./components/Main/Texts/OfferText.js ***!
  \********************************************/
/*! exports provided: OfferText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferText", function() { return OfferText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_FlowText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/FlowText */ "./shared/FlowText.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 50px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var OfferText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_shared_FlowText__WEBPACK_IMPORTED_MODULE_2__["FlowText"])(_templateObject());

/***/ }),

/***/ "./components/Main/Texts/StartText.js":
/*!********************************************!*\
  !*** ./components/Main/Texts/StartText.js ***!
  \********************************************/
/*! exports provided: StartText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartText", function() { return StartText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_FlowText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/FlowText */ "./shared/FlowText.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StartText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_shared_FlowText__WEBPACK_IMPORTED_MODULE_2__["FlowText"])(_templateObject());

/***/ }),

/***/ "./components/Main/Title.js":
/*!**********************************!*\
  !*** ./components/Main/Title.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\_WebDev\\consulting-site\\components\\Main\\Title.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Montserrat-Bold';\n  font-weight: bold;\n  font-size: 24px;\n  text-align: center;\n  color: #4f4f4f;\n  margin-bottom: 50px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var TitleStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1(_templateObject());

var MainTitle = function MainTitle(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleStyled, {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, children);
};

MainTitle.defaultProps = {
  className: ''
};
MainTitle.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MainTitle);

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
    className: "jsx-3845520161",
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
    className: "jsx-3845520161",
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
    className: "jsx-3845520161",
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
    className: "jsx-3845520161",
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
    className: "jsx-3845520161",
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
    className: "jsx-3845520161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3845520161",
    css: "ul.jsx-3845520161{position:fixed;top:0;left:0;right:0;width:100%;background-color:rgba(255,255,255,0.7);height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 30px;}a.jsx-3845520161{font-family:'Montserrat';font-size:18px;color:#000;line-height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxfV2ViRGV2XFxjb25zdWx0aW5nLXNpdGVcXGNvbXBvbmVudHNcXE5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJrQixBQUcwQixBQVlVLGVBWG5CLE1BQVEsSUFZQyxHQVpRLFFBQ1osSUFZQSxPQVgrQixJQVl6QixpQkFDbkIsa0JBWmMsWUFDQywwRUFDUSwyRUFDUyxtSEFDZixlQUNqQiIsImZpbGUiOiJFOlxcX1dlYkRldlxcY29uc3VsdGluZy1zaXRlXFxjb21wb25lbnRzXFxOYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPtCT0LvQsNCy0L3QsNGPPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdHJhdGlvblwiPlxyXG4gICAgICAgICAgPGE+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQntCe0J4gLyDQpNCb0J88L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudGFudC1zZXJ2aWNlc1wiPlxyXG4gICAgICAgICAgPGE+0JHRg9GF0LPQsNC70YLQtdGA0YHQutC40LUg0YPRgdC70YPQs9C4PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICA8YT7QniDQvdCw0YE8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgPGE+0JrQvtC90YLQsNC60YLRizwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcclxuIl19 */\n/*@ sourceURL=E:\\_WebDev\\consulting-site\\components\\Navigation.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_Styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Styles */ "./base/Styles.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Main_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Main/Title */ "./components/Main/Title.js");
/* harmony import */ var _shared_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Content */ "./shared/Content.js");
/* harmony import */ var _components_Main_Texts_IntroText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Main/Texts/IntroText */ "./components/Main/Texts/IntroText.js");
/* harmony import */ var _components_Main_Texts_OfferText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Main/Texts/OfferText */ "./components/Main/Texts/OfferText.js");
/* harmony import */ var _components_Main_Texts_StartText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Main/Texts/StartText */ "./components/Main/Texts/StartText.js");
/* harmony import */ var _components_Main_Texts_ContactText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Main/Texts/ContactText */ "./components/Main/Texts/ContactText.js");
/* harmony import */ var _components_Main_Links_ContactLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Main/Links/ContactLink */ "./components/Main/Links/ContactLink.js");
/* harmony import */ var _components_Main_ServiceContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Main/ServiceContainer */ "./components/Main/ServiceContainer.js");
/* harmony import */ var _components_Main_ServiceGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Main/ServiceGroup */ "./components/Main/ServiceGroup.js");
/* harmony import */ var _components_Main_Service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Main/Service */ "./components/Main/Service.js");
var _jsxFileName = "E:\\_WebDev\\consulting-site\\pages\\index.js";














var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_Styles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bgImage: '../static/img/img7.jpeg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Content__WEBPACK_IMPORTED_MODULE_4__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "\u0412\u0430\u0441 \u043F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u043E\u0432\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \xABAVG\xBB."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Texts_IntroText__WEBPACK_IMPORTED_MODULE_5__["IntroText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "\u041A\u0430\u0436\u0434\u044B\u0439 \u0443\u0441\u043F\u0435\u0448\u043D\u044B\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0432 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434 \u0436\u0438\u0437\u043D\u0438 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u043A \u043C\u044B\u0441\u043B\u0438 \u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u0418 \u0441\u0442\u043E\u0438\u0442 \u043D\u0430 \u0440\u0430\u0441\u043F\u0443\u0442\u044C\u0435: \u0434\u0435\u043B\u0430\u0442\u044C \u0432\u0441\u0435 \u0441\u0430\u043C\u043E\u043C\u0443 \u0438\u043B\u0438 \u043D\u0430\u0439\u0442\u0438 \u0440\u0435\u0441\u0443\u0440\u0441 \u0434\u043B\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Texts_OfferText__WEBPACK_IMPORTED_MODULE_6__["OfferText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0445 \u0443\u0441\u043B\u0443\u0433 \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Texts_StartText__WEBPACK_IMPORTED_MODULE_7__["StartText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "- \u0421 \u0427\u0435\u0433\u043E \u041D\u0430\u0447\u0430\u0442\u044C?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Texts_StartText__WEBPACK_IMPORTED_MODULE_7__["StartText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "- \u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u0413\u043B\u0430\u0432\u043D\u043E\u0433\u043E!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Texts_ContactText__WEBPACK_IMPORTED_MODULE_8__["ContactText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0412\u0430\u0448\u0443", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Links_ContactLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, ' заявку '), "\u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438\u043B\u0438", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Links_ContactLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, ' звоните '), "\u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u0435\u0440\u0432\u0438\u0447\u043D\u0443\u044E \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_ServiceContainer__WEBPACK_IMPORTED_MODULE_10__["ServiceContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_ServiceGroup__WEBPACK_IMPORTED_MODULE_11__["ServiceGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Service__WEBPACK_IMPORTED_MODULE_12__["default"], {
    icon: '../static/img/services/consult.jpg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0438 \u0412\u0430\u0448\u0435\u0433\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Service__WEBPACK_IMPORTED_MODULE_12__["default"], {
    icon: '../static/img/services/law.jpg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\u041F\u043E\u043B\u043D\u043E\u0435 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0412\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_ServiceGroup__WEBPACK_IMPORTED_MODULE_11__["ServiceGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Service__WEBPACK_IMPORTED_MODULE_12__["default"], {
    icon: '../static/img/services/changes.jpg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "\u0412\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 \u0423\u0441\u0442\u0430\u0432\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Service__WEBPACK_IMPORTED_MODULE_12__["default"], {
    icon: '../static/img/services/service.jpg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0439: \u043F\u043E\u043B\u043D\u043E\u0435 \u0438\u043B\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0435, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0436\u0435\u043B\u0430\u043D\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_ServiceGroup__WEBPACK_IMPORTED_MODULE_11__["ServiceGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Service__WEBPACK_IMPORTED_MODULE_12__["default"], {
    icon: '../static/img/services/tax.jpg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "\u041E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430\u043B\u043E\u0433\u043E\u043E\u0431\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0438 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0438 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0423\u043A\u0440\u0430\u0438\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Service__WEBPACK_IMPORTED_MODULE_12__["default"], {
    icon: '../static/img/services/finish.jpg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u043B\u0438\u043A\u0432\u0438\u0434\u0430\u0446\u0438\u0438 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./shared/Content.js":
/*!***************************!*\
  !*** ./shared/Content.js ***!
  \***************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(to top, #f3f3f3, #f9f9f9);\n  padding: 40px 16px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

/***/ }),

/***/ "./shared/FlowText.js":
/*!****************************!*\
  !*** ./shared/FlowText.js ***!
  \****************************/
/*! exports provided: FlowText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowText", function() { return FlowText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Montserrat';\n  font-weight: normal;\n  font-size: 15px;\n  letter-spacing: 0.5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var FlowText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject());

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

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
//# sourceMappingURL=index.js.map