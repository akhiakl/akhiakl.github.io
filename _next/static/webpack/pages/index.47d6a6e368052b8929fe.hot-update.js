/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TextRotator.tsx":
/*!************************************!*\
  !*** ./components/TextRotator.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/akhil/project/portfolio/components/TextRotator.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar TextRotator = function TextRotator(_ref) {\n  _s();\n\n  var textArr = _ref.textArr;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      activeSkillsetIndex = _useState[0],\n      setActiveSkillsetIndex = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      startAnimation = _useState2[0],\n      setStartAnimation = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1500),\n      timerInitialDelay = _useState3[0],\n      setTimerInitialDelay = _useState3[1];\n\n  var setIndexWithDelay = function setIndexWithDelay(index) {\n    setTimeout(function () {\n      setActiveSkillsetIndex(index);\n    }, 3000);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    setStartAnimation(true);\n    setTimeout(function () {\n      setTimerInitialDelay(0);\n\n      if (activeSkillsetIndex === textArr.length - 1) {\n        setIndexWithDelay(0);\n      } else {\n        setIndexWithDelay(activeSkillsetIndex + 1);\n      }\n    }, timerInitialDelay);\n  }, [activeSkillsetIndex]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('text-2xl text-red-500', {\n      'animate-dim': startAnimation\n    }),\n    children: textArr[activeSkillsetIndex]\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TextRotator, \"ilnIP78UlD4g2R61t51443rE9HU=\");\n\n_c = TextRotator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextRotator);\n\nvar _c;\n\n$RefreshReg$(_c, \"TextRotator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0Um90YXRvci50c3g/YjcxMyJdLCJuYW1lcyI6WyJUZXh0Um90YXRvciIsInRleHRBcnIiLCJ1c2VTdGF0ZSIsImFjdGl2ZVNraWxsc2V0SW5kZXgiLCJzZXRBY3RpdmVTa2lsbHNldEluZGV4Iiwic3RhcnRBbmltYXRpb24iLCJzZXRTdGFydEFuaW1hdGlvbiIsInRpbWVySW5pdGlhbERlbGF5Iiwic2V0VGltZXJJbml0aWFsRGVsYXkiLCJzZXRJbmRleFdpdGhEZWxheSIsImluZGV4Iiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImxlbmd0aCIsImNsYXNzTmFtZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFNQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFnRDtBQUFBOztBQUFBLE1BQTdDQyxPQUE2QyxRQUE3Q0EsT0FBNkM7O0FBQUEsa0JBQ1pDLCtDQUFRLENBQVMsQ0FBVCxDQURJO0FBQUEsTUFDM0RDLG1CQUQyRDtBQUFBLE1BQ3RDQyxzQkFEc0M7O0FBQUEsbUJBRXRCRiwrQ0FBUSxDQUFVLEtBQVYsQ0FGYztBQUFBLE1BRTNERyxjQUYyRDtBQUFBLE1BRTNDQyxpQkFGMkM7O0FBQUEsbUJBR2hCSiwrQ0FBUSxDQUFTLElBQVQsQ0FIUTtBQUFBLE1BRzNESyxpQkFIMkQ7QUFBQSxNQUd4Q0Msb0JBSHdDOztBQUlsRSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBeUI7QUFDakRDLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZQLDRCQUFzQixDQUFDTSxLQUFELENBQXRCO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBSkQ7O0FBS0FFLGtEQUFTLENBQUMsWUFBTTtBQUNkTixxQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0FLLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZILDBCQUFvQixDQUFDLENBQUQsQ0FBcEI7O0FBQ0EsVUFBSUwsbUJBQW1CLEtBQUtGLE9BQU8sQ0FBQ1ksTUFBUixHQUFpQixDQUE3QyxFQUFnRDtBQUM5Q0oseUJBQWlCLENBQUMsQ0FBRCxDQUFqQjtBQUNELE9BRkQsTUFFTztBQUNMQSx5QkFBaUIsQ0FBQ04sbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBakI7QUFDRDtBQUNGLEtBUFMsRUFPUEksaUJBUE8sQ0FBVjtBQVFELEdBVlEsRUFVTixDQUFDSixtQkFBRCxDQVZNLENBQVQ7QUFZQSxzQkFDRTtBQUNFLGFBQVMsRUFBRVcsaURBQVUsQ0FBQyx1QkFBRCxFQUEwQjtBQUM3QyxxQkFBZVQ7QUFEOEIsS0FBMUIsQ0FEdkI7QUFBQSxjQUtHSixPQUFPLENBQUNFLG1CQUFEO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0E5QkQ7O0dBQU1ILFc7O0tBQUFBLFc7QUErQk4sK0RBQWVBLFdBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RleHRSb3RhdG9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBUZXh0Um90YXRvclByb3BzIHtcbiAgdGV4dEFycjogc3RyaW5nW11cbn1cblxuY29uc3QgVGV4dFJvdGF0b3IgPSAoeyB0ZXh0QXJyIH06IFRleHRSb3RhdG9yUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFthY3RpdmVTa2lsbHNldEluZGV4LCBzZXRBY3RpdmVTa2lsbHNldEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcbiAgY29uc3QgW3N0YXJ0QW5pbWF0aW9uLCBzZXRTdGFydEFuaW1hdGlvbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgY29uc3QgW3RpbWVySW5pdGlhbERlbGF5LCBzZXRUaW1lckluaXRpYWxEZWxheV0gPSB1c2VTdGF0ZTxudW1iZXI+KDE1MDApXG4gIGNvbnN0IHNldEluZGV4V2l0aERlbGF5ID0gKGluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEFjdGl2ZVNraWxsc2V0SW5kZXgoaW5kZXgpXG4gICAgfSwgMzAwMClcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0YXJ0QW5pbWF0aW9uKHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRUaW1lckluaXRpYWxEZWxheSgwKVxuICAgICAgaWYgKGFjdGl2ZVNraWxsc2V0SW5kZXggPT09IHRleHRBcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICBzZXRJbmRleFdpdGhEZWxheSgwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SW5kZXhXaXRoRGVsYXkoYWN0aXZlU2tpbGxzZXRJbmRleCArIDEpXG4gICAgICB9XG4gICAgfSwgdGltZXJJbml0aWFsRGVsYXkpXG4gIH0sIFthY3RpdmVTa2lsbHNldEluZGV4XSlcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGV4dC0yeGwgdGV4dC1yZWQtNTAwJywge1xuICAgICAgICAnYW5pbWF0ZS1kaW0nOiBzdGFydEFuaW1hdGlvbixcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIHt0ZXh0QXJyW2FjdGl2ZVNraWxsc2V0SW5kZXhdfVxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBUZXh0Um90YXRvclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TextRotator.tsx\n");

/***/ })

});