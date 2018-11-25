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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "./components/About/Texts/DefinitionText.js":
/*!**************************************************!*\
  !*** ./components/About/Texts/DefinitionText.js ***!
  \**************************************************/
/*! exports provided: DefinitionText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionText", function() { return DefinitionText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_FlowText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/FlowText */ "./shared/FlowText.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Montserrat-Medium';\n  font-weight: 500;\n  font-size: 15px;\n  color: #4f4f4f;\n  margin-bottom: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var DefinitionText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_shared_FlowText__WEBPACK_IMPORTED_MODULE_2__["FlowText"])(_templateObject());

/***/ }),

/***/ "./components/About/Texts/GuaranteeText.js":
/*!*************************************************!*\
  !*** ./components/About/Texts/GuaranteeText.js ***!
  \*************************************************/
/*! exports provided: GuaranteeText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuaranteeText", function() { return GuaranteeText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_FlowText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/FlowText */ "./shared/FlowText.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var GuaranteeText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_shared_FlowText__WEBPACK_IMPORTED_MODULE_2__["FlowText"])(_templateObject());

/***/ }),

/***/ "./components/About/Texts/PaceText.js":
/*!********************************************!*\
  !*** ./components/About/Texts/PaceText.js ***!
  \********************************************/
/*! exports provided: PaceText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaceText", function() { return PaceText; });
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




var PaceText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_shared_FlowText__WEBPACK_IMPORTED_MODULE_2__["FlowText"])(_templateObject());

/***/ }),

/***/ "./components/About/Title.js":
/*!***********************************!*\
  !*** ./components/About/Title.js ***!
  \***********************************/
/*! exports provided: Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Montserrat-Bold';\n  font-weight: 700;\n  font-size: 21px;\n  color: #4f4f4f;\n  text-align: center;\n  margin-bottom: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2(_templateObject());

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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_Styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Styles */ "./base/Styles.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _shared_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Content */ "./shared/Content.js");
/* harmony import */ var _components_About_Texts_DefinitionText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/About/Texts/DefinitionText */ "./components/About/Texts/DefinitionText.js");
/* harmony import */ var _components_About_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/About/Title */ "./components/About/Title.js");
/* harmony import */ var _components_About_Texts_PaceText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/About/Texts/PaceText */ "./components/About/Texts/PaceText.js");
/* harmony import */ var _shared_FlowText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/FlowText */ "./shared/FlowText.js");
/* harmony import */ var _shared_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/List */ "./shared/List.js");
/* harmony import */ var _shared_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/ListItem */ "./shared/ListItem.js");
/* harmony import */ var _components_About_Texts_GuaranteeText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/About/Texts/GuaranteeText */ "./components/About/Texts/GuaranteeText.js");
var _jsxFileName = "E:\\_WebDev\\consulting-site\\pages\\about.js";












var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_Styles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bgImage: '../static/img/img4.jpeg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Content__WEBPACK_IMPORTED_MODULE_3__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About_Texts_DefinitionText__WEBPACK_IMPORTED_MODULE_4__["DefinitionText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\u041A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433, \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438, \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u2013 \u044D\u0442\u043E \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043F\u043E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439, \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0446\u0435\u0432 \u043F\u043E \u0448\u0438\u0440\u043E\u043A\u043E\u043C\u0443 \u043A\u0440\u0443\u0433\u0443 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0432 \u0441\u0444\u0435\u0440\u0435 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0439, \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0439, \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0432\u0438\u0434\u0430\u0445 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438. \u0426\u0435\u043B\u044C \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u0430 \u2014 \u043F\u043E\u043C\u043E\u0447\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F (\u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u0443) \u0432 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0438 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0446\u0435\u043B\u0435\u0439."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About_Title__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "\u041F\u043E\u0447\u0435\u043C\u0443 \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0442\u0430\u043A \u0430\u043A\u0442\u0443\u0430\u043B\u0435\u043D \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About_Texts_PaceText__WEBPACK_IMPORTED_MODULE_6__["PaceText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\u0422\u0435\u043C\u043F \u0436\u0438\u0437\u043D\u0438 \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u0435\u043C\u0438\u0442\u0435\u043B\u0435\u043D, \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u044F\u0442 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439. \u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435, \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0435 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u2013 \u044D\u0442\u043E \u043E\u0434\u0438\u043D \u0438\u0437 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0433\u043E \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0412\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u041F\u0435\u0440\u0435\u043B\u043E\u0436\u0438\u0442\u0435 \u044D\u0442\u043E \u043D\u0430 \u043F\u043B\u0435\u0447\u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u043E\u0432 \u0438 \u0437\u0430\u043D\u0438\u043C\u0430\u0439\u0442\u0435\u0441\u044C \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F. \u0412\u0440\u0435\u043C\u044F \u2013 \u0434\u0435\u043D\u044C\u0433\u0438! \u2013 \u043E\u0434\u0438\u043D \u0438\u0437 \u0434\u0435\u0432\u0438\u0437\u043E\u0432 \u0431\u0438\u0437\u043D\u0435\u0441\u043C\u0435\u043D\u043E\u0432. \u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u0438 \u0447\u0435\u0442\u043A\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430, \u0432\u044B\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0412\u0430\u043C  \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About_Title__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\u041C\u044B \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_List__WEBPACK_IMPORTED_MODULE_8__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_ListItem__WEBPACK_IMPORTED_MODULE_9__["ListItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "1. \u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u043C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_ListItem__WEBPACK_IMPORTED_MODULE_9__["ListItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "2. \u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_ListItem__WEBPACK_IMPORTED_MODULE_9__["ListItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "3. \u041A\u043E\u043D\u0434\u0435\u043D\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_ListItem__WEBPACK_IMPORTED_MODULE_9__["ListItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "4. \u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u0443\u044E \u0441\u0432\u044F\u0437\u044C 24/7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_ListItem__WEBPACK_IMPORTED_MODULE_9__["ListItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "5. \u0421\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0446\u0435\u043D\u044B \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C\u044B\u0445 \u0443\u0441\u043B\u0443\u0433")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About_Texts_GuaranteeText__WEBPACK_IMPORTED_MODULE_10__["GuaranteeText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\u041C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C, \u0446\u0435\u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0443\u0441\u043B\u0443\u0433 \u0434\u043E\u0440\u043E\u0436\u0435 \u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438, \u0441 \u043A\u043E\u043B\u043B\u0435\u0433\u0430\u043C\u0438. \u041D\u041E! \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0434\u0435\u0448\u0435\u0432\u043E\u0439. \u0412\u044B, \u043A\u0430\u043A \u0443\u0441\u043F\u0435\u0448\u043D\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441\u043C\u0435\u043D, \u0434\u0443\u043C\u0430\u044E, \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u044D\u0442\u043E. \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0433\u043E\u0442\u043E\u0432\u0430 \u043A \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u043C\u0443 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0443!")));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

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

/***/ "./shared/List.js":
/*!************************!*\
  !*** ./shared/List.js ***!
  \************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: column nowrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject());

/***/ }),

/***/ "./shared/ListItem.js":
/*!****************************!*\
  !*** ./shared/ListItem.js ***!
  \****************************/
/*! exports provided: ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
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



var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject());

/***/ }),

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/about.js */"./pages/about.js");


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
//# sourceMappingURL=about.js.map