"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var konsta_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! konsta/react */ \"./node_modules/konsta/react/esm/konsta-react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ \"./node_modules/react-firebaseui/StyledFirebaseAuth.js\");\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/manishsharma/personal/nextjs-planets-firebase/pages/signin.js\";\n// Import FirebaseAuth and firebase.\n\n\n // import firebase from 'firebase/compat/app';\n// import 'firebase/compat/auth';\n\n // Configure Firebase.\n// const config = {\n// apiKey: 'AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM',\n// authDomain: 'myproject-1234.firebaseapp.com',\n// ...\n// };\n// firebase.initializeApp(config);\n// Configure FirebaseUI.\n\n\n\nvar uiConfig = {\n  // Popup signin flow rather than redirect flow.\n  signInFlow: \"popup\",\n  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.\n  signInSuccessUrl: \"/\",\n  // We will display Google and Facebook as auth providers.\n  signInOptions: [_config_firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].authProviders.google.PROVIDER_ID]\n};\n\nfunction SignInScreen() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(konsta_react__WEBPACK_IMPORTED_MODULE_0__.BlockTitle, {\n      color: \"primary\",\n      children: \"Planet of the Apps\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(konsta_react__WEBPACK_IMPORTED_MODULE_0__.BlockTitle, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"Please sign-in:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(konsta_react__WEBPACK_IMPORTED_MODULE_0__.List, {\n      inset: true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(konsta_react__WEBPACK_IMPORTED_MODULE_0__.ListItem, {\n        title: \"Please sign-in:\",\n        chevron: true,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2___default()), {\n          uiConfig: uiConfig,\n          firebaseAuth: _config_firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(konsta_react__WEBPACK_IMPORTED_MODULE_0__.Block, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_c = SignInScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInScreen);\n\nvar _c;\n\n$RefreshReg$(_c, \"SignInScreen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOztDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFDQSxJQUFNTyxRQUFRLEdBQUc7QUFDZjtBQUNBQyxFQUFBQSxVQUFVLEVBQUUsT0FGRztBQUdmO0FBQ0FDLEVBQUFBLGdCQUFnQixFQUFFLEdBSkg7QUFLZjtBQUNBQyxFQUFBQSxhQUFhLEVBQUUsQ0FBQ0oseUZBQUQ7QUFOQSxDQUFqQjs7QUFTQSxTQUFTUSxZQUFULEdBQXdCO0FBQ3RCLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsb0RBQUQ7QUFBWSxXQUFLLEVBQUMsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLG9EQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFLRSw4REFBQyw4Q0FBRDtBQUFNLFdBQUssTUFBWDtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQVUsYUFBSyxFQUFDLGlCQUFoQjtBQUFrQyxlQUFPLE1BQXpDO0FBQUEsK0JBQ0UsOERBQUMsNEVBQUQ7QUFBb0Isa0JBQVEsRUFBRVAsUUFBOUI7QUFBd0Msc0JBQVksRUFBRUQsNkRBQWFTO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBVUUsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUEsa0JBREY7QUFjRDs7S0FmUUQ7QUFpQlQsK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzPzc4ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IEZpcmViYXNlQXV0aCBhbmQgZmlyZWJhc2UuXHJcbmltcG9ydCB7IEJsb2NrLCBCbG9ja1RpdGxlLCBMaXN0LCBMaXN0SXRlbSB9IGZyb20gXCJrb25zdGEvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3R5bGVkRmlyZWJhc2VBdXRoIGZyb20gXCJyZWFjdC1maXJlYmFzZXVpL1N0eWxlZEZpcmViYXNlQXV0aFwiO1xyXG4vLyBpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvY29tcGF0L2FwcCc7XHJcbi8vIGltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2F1dGgnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uL2NvbmZpZy9maXJlYmFzZVwiO1xyXG5cclxuLy8gQ29uZmlndXJlIEZpcmViYXNlLlxyXG4vLyBjb25zdCBjb25maWcgPSB7XHJcbi8vIGFwaUtleTogJ0FJemFTeUFldWUtQXNZdTc2TU1RbFRPTS1LbGJZQmx1c1c5YzFGTScsXHJcbi8vIGF1dGhEb21haW46ICdteXByb2plY3QtMTIzNC5maXJlYmFzZWFwcC5jb20nLFxyXG4vLyAuLi5cclxuLy8gfTtcclxuLy8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG5cclxuLy8gQ29uZmlndXJlIEZpcmViYXNlVUkuXHJcbmNvbnN0IHVpQ29uZmlnID0ge1xyXG4gIC8vIFBvcHVwIHNpZ25pbiBmbG93IHJhdGhlciB0aGFuIHJlZGlyZWN0IGZsb3cuXHJcbiAgc2lnbkluRmxvdzogXCJwb3B1cFwiLFxyXG4gIC8vIFJlZGlyZWN0IHRvIC9zaWduZWRJbiBhZnRlciBzaWduIGluIGlzIHN1Y2Nlc3NmdWwuIEFsdGVybmF0aXZlbHkgeW91IGNhbiBwcm92aWRlIGEgY2FsbGJhY2tzLnNpZ25JblN1Y2Nlc3MgZnVuY3Rpb24uXHJcbiAgc2lnbkluU3VjY2Vzc1VybDogXCIvXCIsXHJcbiAgLy8gV2Ugd2lsbCBkaXNwbGF5IEdvb2dsZSBhbmQgRmFjZWJvb2sgYXMgYXV0aCBwcm92aWRlcnMuXHJcbiAgc2lnbkluT3B0aW9uczogW2ZpcmViYXNlLmF1dGhQcm92aWRlcnMuZ29vZ2xlLlBST1ZJREVSX0lEXSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIFNpZ25JblNjcmVlbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJsb2NrVGl0bGUgY29sb3I9XCJwcmltYXJ5XCI+UGxhbmV0IG9mIHRoZSBBcHBzPC9CbG9ja1RpdGxlPlxyXG4gICAgICA8QmxvY2tUaXRsZT5cclxuICAgICAgICA8cD5QbGVhc2Ugc2lnbi1pbjo8L3A+XHJcbiAgICAgIDwvQmxvY2tUaXRsZT5cclxuICAgICAgPExpc3QgaW5zZXQ+XHJcbiAgICAgICAgPExpc3RJdGVtIHRpdGxlPVwiUGxlYXNlIHNpZ24taW46XCIgY2hldnJvbj5cclxuICAgICAgICAgIDxTdHlsZWRGaXJlYmFzZUF1dGggdWlDb25maWc9e3VpQ29uZmlnfSBmaXJlYmFzZUF1dGg9e2ZpcmViYXNlLmF1dGh9IC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgICA8QmxvY2s+PC9CbG9jaz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JblNjcmVlbjtcclxuIl0sIm5hbWVzIjpbIkJsb2NrIiwiQmxvY2tUaXRsZSIsIkxpc3QiLCJMaXN0SXRlbSIsIlJlYWN0IiwiU3R5bGVkRmlyZWJhc2VBdXRoIiwiZmlyZWJhc2UiLCJ1aUNvbmZpZyIsInNpZ25JbkZsb3ciLCJzaWduSW5TdWNjZXNzVXJsIiwic2lnbkluT3B0aW9ucyIsImF1dGhQcm92aWRlcnMiLCJnb29nbGUiLCJQUk9WSURFUl9JRCIsIlNpZ25JblNjcmVlbiIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

/***/ })

});