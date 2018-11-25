webpackHotUpdate("static\\development\\pages\\registration.js",{

/***/ "./components/Registration/Texts/StartText.js":
/*!****************************************************!*\
  !*** ./components/Registration/Texts/StartText.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared_FlowText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/FlowText */ "./shared/FlowText.js");
var _jsxFileName = "E:\\_WebDev\\consulting-site\\components\\Registration\\Texts\\StartText.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StartTextStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_shared_FlowText__WEBPACK_IMPORTED_MODULE_2__["FlowText"])(_templateObject());

var StartText = function StartText() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StartTextStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\u0421\u0442\u0430\u0440\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 \u0432\u044B\u0431\u043E\u0440\u0430 \u0444\u043E\u0440\u043C\u044B \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u044B \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438.");
};

/* harmony default export */ __webpack_exports__["default"] = (StartText);

/***/ }),

/***/ "./pages/registration.js":
/*!*******************************!*\
  !*** ./pages/registration.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_Styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Styles */ "./base/Styles.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _shared_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Content */ "./shared/Content.js");
/* harmony import */ var _components_Registration_Texts_StartText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Registration/Texts/StartText */ "./components/Registration/Texts/StartText.js");
var _jsxFileName = "E:\\_WebDev\\consulting-site\\pages\\registration.js";






var Registration = function Registration() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_Styles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bgImage: '../static/img/img5.jpeg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Content__WEBPACK_IMPORTED_MODULE_3__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Registration_Texts_StartText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Registration);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/registration")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=registration.js.dbac11c909c70b3063e4.hot-update.js.map