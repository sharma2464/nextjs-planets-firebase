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
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
exports.modules = {

/***/ "./config/firebase.js":
/*!****************************!*\
  !*** ./config/firebase.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n // import { getAnalytics } from \"firebase/analytics\";\n\n\n\n // TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\n\nconst firebaseConfig = {\n  apiKey: 'AIzaSyBZFoZVAgO0E0RXiH2JK0hBlc2NLeXoX48',\n  authDomain: 'nextclient-8e091.firebaseapp.com',\n  projectId: 'nextclient-8e091',\n  storageBucket: 'nextclient-8e091.appspot.com',\n  messagingSenderId: '898617027757',\n  appId: '1:898617027757:web:3680ce302969ac112b6a24',\n  measurementId: 'G-81J80WBECE'\n}; // Initialize Firebase\n\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app); // const analytics = getAnalytics(app);\n\nconst authProviders = {\n  google: firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider\n};\n\nconst googleSignInWithPopup = () => {\n  const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\n  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithRedirect)(auth, provider);\n  /*\r\n  signInWithPopup(auth, provider)\r\n    .then((result) => {\r\n      // This gives you a Google Access Token. You can use it to access the Google API.\r\n      const credential = GoogleAuthProvider.credentialFromResult(result);\r\n      const token = credential.accessToken;\r\n      // The signed-in user info.\r\n      const user = result.user;\r\n      // ...\r\n      localStorage.setItem('token', token);\r\n      localStorage.setItem('user', user);\r\n    })\r\n    .catch((error) => {\r\n      // Handle Errors here.\r\n      const errorCode = error.code;\r\n      const errorMessage = error.message;\r\n      // The email of the user's account used.\r\n      const email = error.email;\r\n      // The AuthCredential type that was used.\r\n      const credential = GoogleAuthProvider.credentialFromError(error);\r\n      // ...\r\n      console.log({ errorCode, errorMessage, email, credential });\r\n    });\r\n    */\n};\n\nconst firebase = {\n  app,\n  auth,\n  db,\n  storage,\n  authProviders,\n  googleSignInWithPopup\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZmlyZWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBRTtDQUVGOztBQUNBO0FBTUE7Q0FFQTtBQUNBO0FBRUE7QUFDQTs7QUFDQSxNQUFNUSxjQUFjLEdBQUc7QUFDckJDLEVBQUFBLE1BQU0sRUFBRSx5Q0FEYTtBQUVyQkMsRUFBQUEsVUFBVSxFQUFFLGtDQUZTO0FBR3JCQyxFQUFBQSxTQUFTLEVBQUUsa0JBSFU7QUFJckJDLEVBQUFBLGFBQWEsRUFBRSw4QkFKTTtBQUtyQkMsRUFBQUEsaUJBQWlCLEVBQUUsY0FMRTtBQU1yQkMsRUFBQUEsS0FBSyxFQUFFLDJDQU5jO0FBT3JCQyxFQUFBQSxhQUFhLEVBQUU7QUFQTSxDQUF2QixFQVVBOztBQUNBLE1BQU1DLEdBQUcsR0FBR2hCLDJEQUFhLENBQUNRLGNBQUQsQ0FBekI7QUFDQSxNQUFNUyxJQUFJLEdBQUdoQixzREFBTyxFQUFwQjtBQUNBLE1BQU1pQixFQUFFLEdBQUdiLGdFQUFZLENBQUNXLEdBQUQsQ0FBdkI7QUFDQSxNQUFNRyxPQUFPLEdBQUdiLDREQUFVLENBQUNVLEdBQUQsQ0FBMUIsRUFDQTs7QUFFQSxNQUFNSSxhQUFhLEdBQUc7QUFDcEJDLEVBQUFBLE1BQU0sRUFBRW5CLDZEQUFrQkE7QUFETixDQUF0Qjs7QUFHQSxNQUFNb0IscUJBQXFCLEdBQUcsTUFBTTtBQUNsQyxRQUFNQyxRQUFRLEdBQUcsSUFBSXJCLDZEQUFKLEVBQWpCO0FBQ0FxQixFQUFBQSxRQUFRLENBQUNDLFFBQVQsQ0FBa0IsbURBQWxCO0FBQ0FwQixFQUFBQSxpRUFBa0IsQ0FBQ2EsSUFBRCxFQUFPTSxRQUFQLENBQWxCO0FBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0MsQ0E1QkQ7O0FBOEJBLE1BQU1FLFFBQVEsR0FBRztBQUNmVCxFQUFBQSxHQURlO0FBRWZDLEVBQUFBLElBRmU7QUFHZkMsRUFBQUEsRUFIZTtBQUlmQyxFQUFBQSxPQUplO0FBS2ZDLEVBQUFBLGFBTGU7QUFNZkUsRUFBQUE7QUFOZSxDQUFqQjtBQVFBLGlFQUFlRyxRQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL2NvbmZpZy9maXJlYmFzZS5qcz8yYTQ5Il0sInNvdXJjZXNDb250ZW50IjpbIiAgLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuLy8gaW1wb3J0IHsgZ2V0QW5hbHl0aWNzIH0gZnJvbSBcImZpcmViYXNlL2FuYWx5dGljc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldEF1dGgsXHJcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxyXG4gIHNpZ25JbldpdGhQb3B1cCxcclxuICBzaWduSW5XaXRoUmVkaXJlY3QsXHJcbn0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IGdldFN0b3JhZ2UsIHJlZiB9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2VcclxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcclxuXHJcbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cclxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6ICdBSXphU3lCWkZvWlZBZ08wRTBSWGlIMkpLMGhCbGMyTkxlWG9YNDgnLFxyXG4gIGF1dGhEb21haW46ICduZXh0Y2xpZW50LThlMDkxLmZpcmViYXNlYXBwLmNvbScsXHJcbiAgcHJvamVjdElkOiAnbmV4dGNsaWVudC04ZTA5MScsXHJcbiAgc3RvcmFnZUJ1Y2tldDogJ25leHRjbGllbnQtOGUwOTEuYXBwc3BvdC5jb20nLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiAnODk4NjE3MDI3NzU3JyxcclxuICBhcHBJZDogJzE6ODk4NjE3MDI3NzU3OndlYjozNjgwY2UzMDI5NjlhYzExMmI2YTI0JyxcclxuICBtZWFzdXJlbWVudElkOiAnRy04MUo4MFdCRUNFJyxcclxufTtcclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbmNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKGFwcCk7XHJcbi8vIGNvbnN0IGFuYWx5dGljcyA9IGdldEFuYWx5dGljcyhhcHApO1xyXG5cclxuY29uc3QgYXV0aFByb3ZpZGVycyA9IHtcclxuICBnb29nbGU6IEdvb2dsZUF1dGhQcm92aWRlcixcclxufTtcclxuY29uc3QgZ29vZ2xlU2lnbkluV2l0aFBvcHVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gIHByb3ZpZGVyLmFkZFNjb3BlKCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NvbnRhY3RzLnJlYWRvbmx5Jyk7XHJcbiAgc2lnbkluV2l0aFJlZGlyZWN0KGF1dGgsIHByb3ZpZGVyKTtcclxuICAvKlxyXG4gIHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcilcclxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgLy8gVGhpcyBnaXZlcyB5b3UgYSBHb29nbGUgQWNjZXNzIFRva2VuLiBZb3UgY2FuIHVzZSBpdCB0byBhY2Nlc3MgdGhlIEdvb2dsZSBBUEkuXHJcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBHb29nbGVBdXRoUHJvdmlkZXIuY3JlZGVudGlhbEZyb21SZXN1bHQocmVzdWx0KTtcclxuICAgICAgY29uc3QgdG9rZW4gPSBjcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAvLyBUaGUgc2lnbmVkLWluIHVzZXIgaW5mby5cclxuICAgICAgY29uc3QgdXNlciA9IHJlc3VsdC51c2VyO1xyXG4gICAgICAvLyAuLi5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIHVzZXIpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxyXG4gICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAvLyBUaGUgZW1haWwgb2YgdGhlIHVzZXIncyBhY2NvdW50IHVzZWQuXHJcbiAgICAgIGNvbnN0IGVtYWlsID0gZXJyb3IuZW1haWw7XHJcbiAgICAgIC8vIFRoZSBBdXRoQ3JlZGVudGlhbCB0eXBlIHRoYXQgd2FzIHVzZWQuXHJcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBHb29nbGVBdXRoUHJvdmlkZXIuY3JlZGVudGlhbEZyb21FcnJvcihlcnJvcik7XHJcbiAgICAgIC8vIC4uLlxyXG4gICAgICBjb25zb2xlLmxvZyh7IGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlLCBlbWFpbCwgY3JlZGVudGlhbCB9KTtcclxuICAgIH0pO1xyXG4gICAgKi9cclxufTtcclxuXHJcbmNvbnN0IGZpcmViYXNlID0ge1xyXG4gIGFwcCxcclxuICBhdXRoLFxyXG4gIGRiLFxyXG4gIHN0b3JhZ2UsXHJcbiAgYXV0aFByb3ZpZGVycyxcclxuICBnb29nbGVTaWduSW5XaXRoUG9wdXAsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlO1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJnZXRGaXJlc3RvcmUiLCJnZXRTdG9yYWdlIiwicmVmIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiYXV0aCIsImRiIiwic3RvcmFnZSIsImF1dGhQcm92aWRlcnMiLCJnb29nbGUiLCJnb29nbGVTaWduSW5XaXRoUG9wdXAiLCJwcm92aWRlciIsImFkZFNjb3BlIiwiZmlyZWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/firebase.js\n");

/***/ }),

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var konsta_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! konsta/react */ \"konsta/react\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ \"react-firebaseui/StyledFirebaseAuth\");\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_firebase__WEBPACK_IMPORTED_MODULE_4__, konsta_react__WEBPACK_IMPORTED_MODULE_0__]);\n([_config_firebase__WEBPACK_IMPORTED_MODULE_4__, konsta_react__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\nvar _jsxFileName = \"/Users/manishsharma/personal/nextjs-planets-firebase/pages/signin.js\";\n// Import FirebaseAuth and firebase.\n\n\n\n // import firebase from 'firebase/compat/app';\n// import 'firebase/compat/auth';\n\n // Configure Firebase.\n// const config = {\n// apiKey: 'AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM',\n// authDomain: 'myproject-1234.firebaseapp.com',\n// ...\n// };\n// firebase.initializeApp(config);\n// Configure FirebaseUI.\n\n\n\nconst uiConfig = {\n  // Popup signin flow rather than redirect flow.\n  signInFlow: \"popup\",\n  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.\n  signInSuccessUrl: \"/\",\n  // We will display Google and Facebook as auth providers.\n  signInOptions: [_config_firebase__WEBPACK_IMPORTED_MODULE_4__[\"default\"].authProviders.google.PROVIDER_ID]\n};\n\nfunction SignInScreen() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(konsta_react__WEBPACK_IMPORTED_MODULE_0__.Navbar, {\n      title: \"Signin\",\n      left: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(konsta_react__WEBPACK_IMPORTED_MODULE_0__.Link, {\n        onClick: () => router.push(\"/\"),\n        children: \"Home\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 36\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(konsta_react__WEBPACK_IMPORTED_MODULE_0__.List, {\n      inset: true,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(konsta_react__WEBPACK_IMPORTED_MODULE_0__.BlockTitle, {\n        color: \"primary\",\n        children: \"Planet of the Apps\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(konsta_react__WEBPACK_IMPORTED_MODULE_0__.ListItem, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_3___default()), {\n          uiConfig: uiConfig,\n          firebaseAuth: _config_firebase__WEBPACK_IMPORTED_MODULE_4__[\"default\"].auth\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInScreen);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOztDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFDQSxNQUFNVSxRQUFRLEdBQUc7QUFDZjtBQUNBQyxFQUFBQSxVQUFVLEVBQUUsT0FGRztBQUdmO0FBQ0FDLEVBQUFBLGdCQUFnQixFQUFFLEdBSkg7QUFLZjtBQUNBQyxFQUFBQSxhQUFhLEVBQUUsQ0FBQ0oseUZBQUQ7QUFOQSxDQUFqQjs7QUFTQSxTQUFTUSxZQUFULEdBQXdCO0FBQ3RCLFFBQU1DLE1BQU0sR0FBR1osc0RBQVMsRUFBeEI7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGdEQUFEO0FBQVEsV0FBSyxFQUFDLFFBQWQ7QUFBdUIsVUFBSSxlQUFFLDhEQUFDLDhDQUFEO0FBQU0sZUFBTyxFQUFFLE1BQU1ZLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVosQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsOENBQUQ7QUFBTSxXQUFLLE1BQVg7QUFBQSw4QkFDRSw4REFBQyxvREFBRDtBQUFZLGFBQUssRUFBQyxTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBQSwrQkFDRSw4REFBQyw0RUFBRDtBQUFvQixrQkFBUSxFQUFFVCxRQUE5QjtBQUF3QyxzQkFBWSxFQUFFRCw2REFBYVc7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBV0Q7O0FBRUQsaUVBQWVILFlBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vcGFnZXMvc2lnbmluLmpzPzc4ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IEZpcmViYXNlQXV0aCBhbmQgZmlyZWJhc2UuXHJcbmltcG9ydCB7IEJsb2NrLCBCbG9ja1RpdGxlLCBMaW5rLCBMaXN0LCBMaXN0SXRlbSwgTmF2YmFyIH0gZnJvbSBcImtvbnN0YS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3R5bGVkRmlyZWJhc2VBdXRoIGZyb20gXCJyZWFjdC1maXJlYmFzZXVpL1N0eWxlZEZpcmViYXNlQXV0aFwiO1xyXG4vLyBpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvY29tcGF0L2FwcCc7XHJcbi8vIGltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2F1dGgnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uL2NvbmZpZy9maXJlYmFzZVwiO1xyXG5cclxuLy8gQ29uZmlndXJlIEZpcmViYXNlLlxyXG4vLyBjb25zdCBjb25maWcgPSB7XHJcbi8vIGFwaUtleTogJ0FJemFTeUFldWUtQXNZdTc2TU1RbFRPTS1LbGJZQmx1c1c5YzFGTScsXHJcbi8vIGF1dGhEb21haW46ICdteXByb2plY3QtMTIzNC5maXJlYmFzZWFwcC5jb20nLFxyXG4vLyAuLi5cclxuLy8gfTtcclxuLy8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG5cclxuLy8gQ29uZmlndXJlIEZpcmViYXNlVUkuXHJcbmNvbnN0IHVpQ29uZmlnID0ge1xyXG4gIC8vIFBvcHVwIHNpZ25pbiBmbG93IHJhdGhlciB0aGFuIHJlZGlyZWN0IGZsb3cuXHJcbiAgc2lnbkluRmxvdzogXCJwb3B1cFwiLFxyXG4gIC8vIFJlZGlyZWN0IHRvIC9zaWduZWRJbiBhZnRlciBzaWduIGluIGlzIHN1Y2Nlc3NmdWwuIEFsdGVybmF0aXZlbHkgeW91IGNhbiBwcm92aWRlIGEgY2FsbGJhY2tzLnNpZ25JblN1Y2Nlc3MgZnVuY3Rpb24uXHJcbiAgc2lnbkluU3VjY2Vzc1VybDogXCIvXCIsXHJcbiAgLy8gV2Ugd2lsbCBkaXNwbGF5IEdvb2dsZSBhbmQgRmFjZWJvb2sgYXMgYXV0aCBwcm92aWRlcnMuXHJcbiAgc2lnbkluT3B0aW9uczogW2ZpcmViYXNlLmF1dGhQcm92aWRlcnMuZ29vZ2xlLlBST1ZJREVSX0lEXSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIFNpZ25JblNjcmVlbigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciB0aXRsZT1cIlNpZ25pblwiIGxlZnQ9ezxMaW5rIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX0+SG9tZTwvTGluaz59IC8+XHJcbiAgICAgIDxMaXN0IGluc2V0PlxyXG4gICAgICAgIDxCbG9ja1RpdGxlIGNvbG9yPVwicHJpbWFyeVwiPlBsYW5ldCBvZiB0aGUgQXBwczwvQmxvY2tUaXRsZT5cclxuICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICA8U3R5bGVkRmlyZWJhc2VBdXRoIHVpQ29uZmlnPXt1aUNvbmZpZ30gZmlyZWJhc2VBdXRoPXtmaXJlYmFzZS5hdXRofSAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JblNjcmVlbjtcclxuIl0sIm5hbWVzIjpbIkJsb2NrIiwiQmxvY2tUaXRsZSIsIkxpbmsiLCJMaXN0IiwiTGlzdEl0ZW0iLCJOYXZiYXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIlN0eWxlZEZpcmViYXNlQXV0aCIsImZpcmViYXNlIiwidWlDb25maWciLCJzaWduSW5GbG93Iiwic2lnbkluU3VjY2Vzc1VybCIsInNpZ25Jbk9wdGlvbnMiLCJhdXRoUHJvdmlkZXJzIiwiZ29vZ2xlIiwiUFJPVklERVJfSUQiLCJTaWduSW5TY3JlZW4iLCJyb3V0ZXIiLCJwdXNoIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-firebaseui/StyledFirebaseAuth":
/*!******************************************************!*\
  !*** external "react-firebaseui/StyledFirebaseAuth" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("react-firebaseui/StyledFirebaseAuth");

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
var __webpack_exports__ = (__webpack_exec__("./pages/signin.js"));
module.exports = __webpack_exports__;

})();