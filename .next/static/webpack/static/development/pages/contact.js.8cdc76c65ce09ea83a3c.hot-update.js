webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./components/Contact/AddressBlock.js":
/*!********************************************!*\
  !*** ./components/Contact/AddressBlock.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _BlockContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlockContainer */ "./components/Contact/BlockContainer.js");
/* harmony import */ var _IconContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IconContainer */ "./components/Contact/IconContainer.js");
/* harmony import */ var _shared_FlowText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/FlowText */ "./shared/FlowText.js");
var _jsxFileName = "E:\\_WebDev\\consulting-site\\components\\Contact\\AddressBlock.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Montserrat-Black';\n  font-weight: 900;\n  font-size: 25px;\n  color: #fff;\n  text-align: center;\n  margin: 20px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var AddressText = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_shared_FlowText__WEBPACK_IMPORTED_MODULE_6__["FlowText"])(_templateObject());

var EmailBlock = function EmailBlock() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlockContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IconContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHome"],
    color: "#fff",
    size: "3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddressText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "\u0433. \u041A\u0438\u0435\u0432, \u0421\u043E\u0444\u0438\u0435\u0432\u0441\u043A\u0430\u044F \u0411\u043E\u0440\u0449\u0430\u0433\u043E\u0432\u043A\u0430. \u0423\u043B. \u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F, 11"));
};

/* harmony default export */ __webpack_exports__["default"] = (EmailBlock);

/***/ }),

/***/ "./components/Contact/ContactContainer.js":
/*!************************************************!*\
  !*** ./components/Contact/ContactContainer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _PhoneBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhoneBlock */ "./components/Contact/PhoneBlock.js");
/* harmony import */ var _EmailBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmailBlock */ "./components/Contact/EmailBlock.js");
/* harmony import */ var _AddressBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddressBlock */ "./components/Contact/AddressBlock.js");
var _jsxFileName = "E:\\_WebDev\\consulting-site\\components\\Contact\\ContactContainer.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 600px;\n  background-color: #4f4f4f;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

var ContactContainer = function ContactContainer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhoneBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmailBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddressBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactContainer);

/***/ })

})
//# sourceMappingURL=contact.js.8cdc76c65ce09ea83a3c.hot-update.js.map