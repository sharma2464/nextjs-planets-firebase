"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./config/firebase.js":
/*!****************************!*\
  !*** ./config/firebase.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n // import { getAnalytics } from \"firebase/analytics\";\n\n\n\n // TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\n\nconst firebaseConfig = {\n  apiKey: 'AIzaSyBZFoZVAgO0E0RXiH2JK0hBlc2NLeXoX48',\n  authDomain: 'nextclient-8e091.firebaseapp.com',\n  projectId: 'nextclient-8e091',\n  storageBucket: 'nextclient-8e091.appspot.com',\n  messagingSenderId: '898617027757',\n  appId: '1:898617027757:web:3680ce302969ac112b6a24',\n  measurementId: 'G-81J80WBECE'\n}; // Initialize Firebase\n\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app); // const analytics = getAnalytics(app);\n\nconst authProviders = {\n  google: firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider\n};\n\nconst googleSignInWithPopup = () => {\n  const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\n  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithRedirect)(auth, provider);\n  /*\r\n  signInWithPopup(auth, provider)\r\n    .then((result) => {\r\n      // This gives you a Google Access Token. You can use it to access the Google API.\r\n      const credential = GoogleAuthProvider.credentialFromResult(result);\r\n      const token = credential.accessToken;\r\n      // The signed-in user info.\r\n      const user = result.user;\r\n      // ...\r\n      localStorage.setItem('token', token);\r\n      localStorage.setItem('user', user);\r\n    })\r\n    .catch((error) => {\r\n      // Handle Errors here.\r\n      const errorCode = error.code;\r\n      const errorMessage = error.message;\r\n      // The email of the user's account used.\r\n      const email = error.email;\r\n      // The AuthCredential type that was used.\r\n      const credential = GoogleAuthProvider.credentialFromError(error);\r\n      // ...\r\n      console.log({ errorCode, errorMessage, email, credential });\r\n    });\r\n    */\n};\n\nconst firebase = {\n  app,\n  auth,\n  db,\n  storage,\n  authProviders,\n  googleSignInWithPopup\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZmlyZWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBRTtDQUVGOztBQUNBO0FBTUE7Q0FFQTtBQUNBO0FBRUE7QUFDQTs7QUFDQSxNQUFNUSxjQUFjLEdBQUc7QUFDckJDLEVBQUFBLE1BQU0sRUFBRSx5Q0FEYTtBQUVyQkMsRUFBQUEsVUFBVSxFQUFFLGtDQUZTO0FBR3JCQyxFQUFBQSxTQUFTLEVBQUUsa0JBSFU7QUFJckJDLEVBQUFBLGFBQWEsRUFBRSw4QkFKTTtBQUtyQkMsRUFBQUEsaUJBQWlCLEVBQUUsY0FMRTtBQU1yQkMsRUFBQUEsS0FBSyxFQUFFLDJDQU5jO0FBT3JCQyxFQUFBQSxhQUFhLEVBQUU7QUFQTSxDQUF2QixFQVVBOztBQUNBLE1BQU1DLEdBQUcsR0FBR2hCLDJEQUFhLENBQUNRLGNBQUQsQ0FBekI7QUFDQSxNQUFNUyxJQUFJLEdBQUdoQixzREFBTyxFQUFwQjtBQUNBLE1BQU1pQixFQUFFLEdBQUdiLGdFQUFZLENBQUNXLEdBQUQsQ0FBdkI7QUFDQSxNQUFNRyxPQUFPLEdBQUdiLDREQUFVLENBQUNVLEdBQUQsQ0FBMUIsRUFDQTs7QUFFQSxNQUFNSSxhQUFhLEdBQUc7QUFDcEJDLEVBQUFBLE1BQU0sRUFBRW5CLDZEQUFrQkE7QUFETixDQUF0Qjs7QUFHQSxNQUFNb0IscUJBQXFCLEdBQUcsTUFBTTtBQUNsQyxRQUFNQyxRQUFRLEdBQUcsSUFBSXJCLDZEQUFKLEVBQWpCO0FBQ0FxQixFQUFBQSxRQUFRLENBQUNDLFFBQVQsQ0FBa0IsbURBQWxCO0FBQ0FwQixFQUFBQSxpRUFBa0IsQ0FBQ2EsSUFBRCxFQUFPTSxRQUFQLENBQWxCO0FBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0MsQ0E1QkQ7O0FBOEJBLE1BQU1FLFFBQVEsR0FBRztBQUNmVCxFQUFBQSxHQURlO0FBRWZDLEVBQUFBLElBRmU7QUFHZkMsRUFBQUEsRUFIZTtBQUlmQyxFQUFBQSxPQUplO0FBS2ZDLEVBQUFBLGFBTGU7QUFNZkUsRUFBQUE7QUFOZSxDQUFqQjtBQVFBLGlFQUFlRyxRQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL2NvbmZpZy9maXJlYmFzZS5qcz8yYTQ5Il0sInNvdXJjZXNDb250ZW50IjpbIiAgLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuLy8gaW1wb3J0IHsgZ2V0QW5hbHl0aWNzIH0gZnJvbSBcImZpcmViYXNlL2FuYWx5dGljc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldEF1dGgsXHJcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxyXG4gIHNpZ25JbldpdGhQb3B1cCxcclxuICBzaWduSW5XaXRoUmVkaXJlY3QsXHJcbn0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IGdldFN0b3JhZ2UsIHJlZiB9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2VcclxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcclxuXHJcbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cclxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6ICdBSXphU3lCWkZvWlZBZ08wRTBSWGlIMkpLMGhCbGMyTkxlWG9YNDgnLFxyXG4gIGF1dGhEb21haW46ICduZXh0Y2xpZW50LThlMDkxLmZpcmViYXNlYXBwLmNvbScsXHJcbiAgcHJvamVjdElkOiAnbmV4dGNsaWVudC04ZTA5MScsXHJcbiAgc3RvcmFnZUJ1Y2tldDogJ25leHRjbGllbnQtOGUwOTEuYXBwc3BvdC5jb20nLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiAnODk4NjE3MDI3NzU3JyxcclxuICBhcHBJZDogJzE6ODk4NjE3MDI3NzU3OndlYjozNjgwY2UzMDI5NjlhYzExMmI2YTI0JyxcclxuICBtZWFzdXJlbWVudElkOiAnRy04MUo4MFdCRUNFJyxcclxufTtcclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbmNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKGFwcCk7XHJcbi8vIGNvbnN0IGFuYWx5dGljcyA9IGdldEFuYWx5dGljcyhhcHApO1xyXG5cclxuY29uc3QgYXV0aFByb3ZpZGVycyA9IHtcclxuICBnb29nbGU6IEdvb2dsZUF1dGhQcm92aWRlcixcclxufTtcclxuY29uc3QgZ29vZ2xlU2lnbkluV2l0aFBvcHVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gIHByb3ZpZGVyLmFkZFNjb3BlKCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NvbnRhY3RzLnJlYWRvbmx5Jyk7XHJcbiAgc2lnbkluV2l0aFJlZGlyZWN0KGF1dGgsIHByb3ZpZGVyKTtcclxuICAvKlxyXG4gIHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcilcclxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgLy8gVGhpcyBnaXZlcyB5b3UgYSBHb29nbGUgQWNjZXNzIFRva2VuLiBZb3UgY2FuIHVzZSBpdCB0byBhY2Nlc3MgdGhlIEdvb2dsZSBBUEkuXHJcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBHb29nbGVBdXRoUHJvdmlkZXIuY3JlZGVudGlhbEZyb21SZXN1bHQocmVzdWx0KTtcclxuICAgICAgY29uc3QgdG9rZW4gPSBjcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAvLyBUaGUgc2lnbmVkLWluIHVzZXIgaW5mby5cclxuICAgICAgY29uc3QgdXNlciA9IHJlc3VsdC51c2VyO1xyXG4gICAgICAvLyAuLi5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIHVzZXIpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxyXG4gICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAvLyBUaGUgZW1haWwgb2YgdGhlIHVzZXIncyBhY2NvdW50IHVzZWQuXHJcbiAgICAgIGNvbnN0IGVtYWlsID0gZXJyb3IuZW1haWw7XHJcbiAgICAgIC8vIFRoZSBBdXRoQ3JlZGVudGlhbCB0eXBlIHRoYXQgd2FzIHVzZWQuXHJcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBHb29nbGVBdXRoUHJvdmlkZXIuY3JlZGVudGlhbEZyb21FcnJvcihlcnJvcik7XHJcbiAgICAgIC8vIC4uLlxyXG4gICAgICBjb25zb2xlLmxvZyh7IGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlLCBlbWFpbCwgY3JlZGVudGlhbCB9KTtcclxuICAgIH0pO1xyXG4gICAgKi9cclxufTtcclxuXHJcbmNvbnN0IGZpcmViYXNlID0ge1xyXG4gIGFwcCxcclxuICBhdXRoLFxyXG4gIGRiLFxyXG4gIHN0b3JhZ2UsXHJcbiAgYXV0aFByb3ZpZGVycyxcclxuICBnb29nbGVTaWduSW5XaXRoUG9wdXAsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlO1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJnZXRGaXJlc3RvcmUiLCJnZXRTdG9yYWdlIiwicmVmIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiYXV0aCIsImRiIiwic3RvcmFnZSIsImF1dGhQcm92aWRlcnMiLCJnb29nbGUiLCJnb29nbGVTaWduSW5XaXRoUG9wdXAiLCJwcm92aWRlciIsImFkZFNjb3BlIiwiZmlyZWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/firebase.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var konsta_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! konsta/react */ \"konsta/react\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([konsta_react__WEBPACK_IMPORTED_MODULE_0__, _config_firebase__WEBPACK_IMPORTED_MODULE_1__]);\n([konsta_react__WEBPACK_IMPORTED_MODULE_0__, _config_firebase__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\nvar _jsxFileName = \"/Users/manishsharma/personal/nextjs-planets-firebase/pages/index.js\";\n\n\n\n\nfunction Home(props) {\n  if (_config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].auth.currentUser && _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].auth.currentUser.uid) {}\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(konsta_react__WEBPACK_IMPORTED_MODULE_0__.Navbar, {\n      title: \"List of Planets\",\n      left: _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].auth.currentUser && _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].auth.currentUser.uid ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(konsta_react__WEBPACK_IMPORTED_MODULE_0__.Link, {\n        navbar: true,\n        href: \"/planets/new\",\n        children: \"Create New\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(konsta_react__WEBPACK_IMPORTED_MODULE_0__.Link, {\n        navbar: true,\n        href: \"/signin\",\n        children: \"Signin\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }, this),\n      right: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(konsta_react__WEBPACK_IMPORTED_MODULE_0__.Link, {\n        navbar: true,\n        onClick: () => _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].auth.signOut(),\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(konsta_react__WEBPACK_IMPORTED_MODULE_0__.BlockTitle, {\n      children: \"List starts here\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFZSxTQUFTSSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDbEMsTUFBSUYseUVBQUEsSUFBNkJBLDZFQUFqQyxFQUFnRSxDQUMvRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGdEQUFEO0FBQ0UsV0FBSyxFQUFDLGlCQURSO0FBRUUsVUFBSSxFQUNGQSx5RUFBQSxJQUE2QkEsNkVBQTdCLGdCQUNFLDhEQUFDLDhDQUFEO0FBQU0sY0FBTSxNQUFaO0FBQWEsWUFBSSxFQUFDLGNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZ0JBS0UsOERBQUMsOENBQUQ7QUFBTSxjQUFNLE1BQVo7QUFBYSxZQUFJLEVBQUMsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSTjtBQWFFLFdBQUssZUFDSCw4REFBQyw4Q0FBRDtBQUFNLGNBQU0sTUFBWjtBQUFhLGVBQU8sRUFBRSxNQUFNQSxxRUFBQSxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQXFCRSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCRjtBQUFBLGtCQURGO0FBeUJELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmxvY2tUaXRsZSwgTGluaywgTmF2YmFyIH0gZnJvbSBcImtvbnN0YS9yZWFjdFwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9jb25maWcvZmlyZWJhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBpZiAoZmlyZWJhc2UuYXV0aC5jdXJyZW50VXNlciAmJiBmaXJlYmFzZS5hdXRoLmN1cnJlbnRVc2VyLnVpZCkge1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhclxuICAgICAgICB0aXRsZT1cIkxpc3Qgb2YgUGxhbmV0c1wiXG4gICAgICAgIGxlZnQ9e1xuICAgICAgICAgIGZpcmViYXNlLmF1dGguY3VycmVudFVzZXIgJiYgZmlyZWJhc2UuYXV0aC5jdXJyZW50VXNlci51aWQgPyAoXG4gICAgICAgICAgICA8TGluayBuYXZiYXIgaHJlZj1cIi9wbGFuZXRzL25ld1wiPlxuICAgICAgICAgICAgICBDcmVhdGUgTmV3XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxMaW5rIG5hdmJhciBocmVmPVwiL3NpZ25pblwiPlxuICAgICAgICAgICAgICBTaWduaW5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmlnaHQ9e1xuICAgICAgICAgIDxMaW5rIG5hdmJhciBvbkNsaWNrPXsoKSA9PiBmaXJlYmFzZS5hdXRoLnNpZ25PdXQoKX0+XG4gICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIH1cbiAgICAgIC8+XG5cbiAgICAgIDxCbG9ja1RpdGxlPkxpc3Qgc3RhcnRzIGhlcmU8L0Jsb2NrVGl0bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQmxvY2tUaXRsZSIsIkxpbmsiLCJOYXZiYXIiLCJmaXJlYmFzZSIsIkhvbWUiLCJwcm9wcyIsImF1dGgiLCJjdXJyZW50VXNlciIsInVpZCIsInNpZ25PdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ }),

/***/ "konsta/react":
/*!*******************************!*\
  !*** external "konsta/react" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("konsta/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();