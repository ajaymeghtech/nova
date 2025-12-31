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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/gtag.ts":
/*!*********************!*\
  !*** ./lib/gtag.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   \"event\": () => (/* binding */ event),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview)\n/* harmony export */ });\nconst GA_TRACKING_ID = ''; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages\n\nconst pageview = url => {\n  if (window && window.gtag) {\n    window.gtag('config', GA_TRACKING_ID, {\n      page_path: url\n    });\n  }\n};\n// https://developers.google.com/analytics/devguides/collection/gtagjs/events\nconst event = ({\n  action,\n  category,\n  label,\n  value\n}) => {\n  window.gtag('event', action, {\n    event_category: category,\n    event_label: label,\n    value: value\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ3RhZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxjQUFjLEdBQUcsRUFBdkIsRUFFUDs7QUFDTyxNQUFNQyxRQUFRLEdBQUlDLEdBQUQsSUFBdUI7RUFDN0MsSUFBSUMsTUFBTSxJQUFJQSxNQUFNLENBQUNDLElBQXJCLEVBQTJCO0lBQ3pCRCxNQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaLEVBQXNCSixjQUF0QixFQUFzQztNQUNwQ0ssU0FBUyxFQUFFSDtJQUR5QixDQUF0QztFQUdEO0FBQ0YsQ0FOTTtBQWVQO0FBQ08sTUFBTUksS0FBSyxHQUFHLENBQUM7RUFBRUMsTUFBRjtFQUFVQyxRQUFWO0VBQW9CQyxLQUFwQjtFQUEyQkM7QUFBM0IsQ0FBRCxLQUF5RDtFQUM1RVAsTUFBTSxDQUFDQyxJQUFQLENBQVksT0FBWixFQUFxQkcsTUFBckIsRUFBNkI7SUFDM0JJLGNBQWMsRUFBRUgsUUFEVztJQUUzQkksV0FBVyxFQUFFSCxLQUZjO0lBRzNCQyxLQUFLLEVBQUVBO0VBSG9CLENBQTdCO0FBS0QsQ0FOTSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRzc3MvLi9saWIvZ3RhZy50cz81M2E5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBHQV9UUkFDS0lOR19JRCA9ICcnXG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvcGFnZXNcbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICh1cmw6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBpZiAod2luZG93ICYmIHdpbmRvdy5ndGFnKSB7XG4gICAgd2luZG93Lmd0YWcoJ2NvbmZpZycsIEdBX1RSQUNLSU5HX0lELCB7XG4gICAgICBwYWdlX3BhdGg6IHVybCxcbiAgICB9KVxuICB9XG59XG5cbnR5cGUgR1RhZ0V2ZW50ID0ge1xuICBhY3Rpb246IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgdmFsdWU6IG51bWJlclxufVxuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL2V2ZW50c1xuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBjYXRlZ29yeSwgbGFiZWwsIHZhbHVlIH06IEdUYWdFdmVudCk6IHZvaWQgPT4ge1xuICB3aW5kb3cuZ3RhZygnZXZlbnQnLCBhY3Rpb24sIHtcbiAgICBldmVudF9jYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgZXZlbnRfbGFiZWw6IGxhYmVsLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJHQV9UUkFDS0lOR19JRCIsInBhZ2V2aWV3IiwidXJsIiwid2luZG93IiwiZ3RhZyIsInBhZ2VfcGF0aCIsImV2ZW50IiwiYWN0aW9uIiwiY2F0ZWdvcnkiLCJsYWJlbCIsInZhbHVlIiwiZXZlbnRfY2F0ZWdvcnkiLCJldmVudF9sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/gtag.ts\n");

/***/ }),

/***/ "./next-seo.config.js":
/*!****************************!*\
  !*** ./next-seo.config.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @type {import('next-seo/lib/types').NextSeoProps}\n **/\nconst config = {\n  openGraph: {\n    type: 'article',\n    locale: 'en_US',\n    site_name: 'NextSSS'\n  },\n  twitter: {\n    cardType: 'summary_large_image'\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LXNlby5jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLE1BQU0sR0FBRztFQUNiQyxTQUFTLEVBQUU7SUFDVEMsSUFBSSxFQUFFLFNBREc7SUFFVEMsTUFBTSxFQUFFLE9BRkM7SUFHVEMsU0FBUyxFQUFFO0VBSEYsQ0FERTtFQU1iQyxPQUFPLEVBQUU7SUFDUEMsUUFBUSxFQUFFO0VBREg7QUFOSSxDQUFmO0FBV0EsaUVBQWVOLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0c3NzLy4vbmV4dC1zZW8uY29uZmlnLmpzPzRiMGEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZSB7aW1wb3J0KCduZXh0LXNlby9saWIvdHlwZXMnKS5OZXh0U2VvUHJvcHN9XG4gKiovXG5jb25zdCBjb25maWcgPSB7XG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6ICdhcnRpY2xlJyxcbiAgICBsb2NhbGU6ICdlbl9VUycsXG4gICAgc2l0ZV9uYW1lOiAnTmV4dFNTUycsXG4gIH0sXG4gIHR3aXR0ZXI6IHtcbiAgICBjYXJkVHlwZTogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWdcbiJdLCJuYW1lcyI6WyJjb25maWciLCJvcGVuR3JhcGgiLCJ0eXBlIiwibG9jYWxlIiwic2l0ZV9uYW1lIiwidHdpdHRlciIsImNhcmRUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./next-seo.config.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next-seo.config */ \"./next-seo.config.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/gtag */ \"./lib/gtag.ts\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\nvar _jsxFileName = \"D:\\\\amritagithub\\\\nova\\\\pages\\\\_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n // Slick carousel styles (requires installing `react-slick` and `slick-carousel`)\n\n\n\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const handleRouteChange = (url, {\n      shallow\n    } = {}) => {\n      if (!shallow) _lib_gtag__WEBPACK_IMPORTED_MODULE_5__.pageview(url);\n    };\n\n    router.events.on('routeChangeComplete', handleRouteChange);\n    return () => {\n      router.events.off('routeChangeComplete', handleRouteChange);\n    };\n  }, [router.events]); // Load Bootstrap JS on client only\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! bootstrap/dist/js/bootstrap.bundle */ \"bootstrap/dist/js/bootstrap.bundle\", 23)).then(() => {// bootstrap loaded\n    }).catch(err => {\n      console.error('Failed to load Bootstrap JS', err);\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_3__.DefaultSeo, _objectSpread({}, _next_seo_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBOzs7O0FBRUEsTUFBTU0sR0FBRyxHQUFHLENBQUM7RUFBRUMsU0FBRjtFQUFhQztBQUFiLENBQUQsS0FBOEI7RUFDeEMsTUFBTUMsTUFBTSxHQUFHUixzREFBUyxFQUF4QjtFQUVBRCxnREFBUyxDQUFDLE1BQU07SUFDZCxNQUFNVSxpQkFBaUIsR0FBRyxDQUFDQyxHQUFELEVBQU07TUFBRUM7SUFBRixJQUFjLEVBQXBCLEtBQTJCO01BQ25ELElBQUksQ0FBQ0EsT0FBTCxFQUFjUCwrQ0FBQSxDQUFjTSxHQUFkO0lBQ2YsQ0FGRDs7SUFHQUYsTUFBTSxDQUFDSyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDTCxpQkFBeEM7SUFDQSxPQUFPLE1BQU07TUFDWEQsTUFBTSxDQUFDSyxNQUFQLENBQWNFLEdBQWQsQ0FBa0IscUJBQWxCLEVBQXlDTixpQkFBekM7SUFDRCxDQUZEO0VBR0QsQ0FSUSxFQVFOLENBQUNELE1BQU0sQ0FBQ0ssTUFBUixDQVJNLENBQVQsQ0FId0MsQ0FheEM7O0VBQ0FkLGdEQUFTLENBQUMsTUFBTTtJQUNkLDJLQUNHaUIsSUFESCxDQUNRLE1BQU0sQ0FDVjtJQUNELENBSEgsRUFJR0MsS0FKSCxDQUlVQyxHQUFELElBQVM7TUFDZEMsT0FBTyxDQUFDQyxLQUFSLENBQWMsNkJBQWQsRUFBNkNGLEdBQTdDO0lBQ0QsQ0FOSDtFQU9ELENBUlEsRUFRTixFQVJNLENBQVQ7RUFVQSxvQkFDRTtJQUFBLHdCQUNFLCtEQUFDLGtEQUFEO01BQUEsdUJBQ0U7UUFBTSxJQUFJLEVBQUMsVUFBWDtRQUFzQixPQUFPLEVBQUM7TUFBOUI7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFERixlQUlFLCtEQUFDLGdEQUFELG9CQUFnQmYsd0RBQWhCO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFKRixlQUtFLCtEQUFDLFNBQUQsb0JBQWVJLFNBQWY7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUxGO0VBQUEsZ0JBREY7QUFTRCxDQWpDRDs7QUFtQ0EsaUVBQWVGLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0c3NzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSAnbmV4dC1zZW8nXG5pbXBvcnQgU0VPIGZyb20gJy4uL25leHQtc2VvLmNvbmZpZydcbmltcG9ydCAqIGFzIGd0YWcgZnJvbSAnLi4vbGliL2d0YWcnXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuc2Nzcydcbi8vIFNsaWNrIGNhcm91c2VsIHN0eWxlcyAocmVxdWlyZXMgaW5zdGFsbGluZyBgcmVhY3Qtc2xpY2tgIGFuZCBgc2xpY2stY2Fyb3VzZWxgKVxuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcydcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsLCB7IHNoYWxsb3cgfSA9IHt9KSA9PiB7XG4gICAgICBpZiAoIXNoYWxsb3cpIGd0YWcucGFnZXZpZXcodXJsKVxuICAgIH1cbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgfVxuICB9LCBbcm91dGVyLmV2ZW50c10pXG5cbiAgLy8gTG9hZCBCb290c3RyYXAgSlMgb24gY2xpZW50IG9ubHlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbXBvcnQoJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUnKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBib290c3RyYXAgbG9hZGVkXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgQm9vdHN0cmFwIEpTJywgZXJyKVxuICAgICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxEZWZhdWx0U2VvIHsuLi5TRU99IC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiSGVhZCIsIkRlZmF1bHRTZW8iLCJTRU8iLCJndGFnIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJzaGFsbG93IiwicGFnZXZpZXciLCJldmVudHMiLCJvbiIsIm9mZiIsInRoZW4iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "bootstrap/dist/js/bootstrap.bundle":
/*!*****************************************************!*\
  !*** external "bootstrap/dist/js/bootstrap.bundle" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("bootstrap/dist/js/bootstrap.bundle");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();