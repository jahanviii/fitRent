"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@tabler";
exports.ids = ["vendor-chunks/@tabler"];
exports.modules = {

/***/ "(ssr)/./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createReactComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.mjs */ \"(ssr)/./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs\");\n/**\n * @license @tabler/icons-react v3.10.0 - MIT\n *\n * This source code is licensed under the MIT license.\n * See the LICENSE file in the root directory of this source tree.\n */ \n\nconst createReactComponent = (type, iconName, iconNamePascal, iconNode)=>{\n    const Component = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({ color = \"currentColor\", size = 24, stroke = 2, title, className, children, ...rest }, ref)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"svg\", {\n            ref,\n            ..._defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"][type],\n            width: size,\n            height: size,\n            className: [\n                `tabler-icon`,\n                `tabler-icon-${iconName}`,\n                className\n            ].join(\" \"),\n            ...type === \"filled\" ? {\n                fill: color\n            } : {\n                strokeWidth: stroke,\n                stroke: color\n            },\n            ...rest\n        }, [\n            title && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"title\", {\n                key: \"svg-title\"\n            }, title),\n            ...iconNode.map(([tag, attrs])=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),\n            ...Array.isArray(children) ? children : [\n                children\n            ]\n        ]));\n    Component.displayName = `${iconNamePascal}`;\n    return Component;\n};\n //# sourceMappingURL=createReactComponent.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHRhYmxlci9pY29ucy1yZWFjdC9kaXN0L2VzbS9jcmVhdGVSZWFjdENvbXBvbmVudC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUlBLE1BQU1BLHVCQUF1QixDQUMzQkMsTUFDQUMsVUFDQUMsZ0JBQ0FDO0lBRUEsTUFBTUMsMEJBQVlDLGlEQUFVQSxDQUMxQixDQUNFLEVBQUVDLFFBQVEsZ0JBQWdCQyxPQUFPLEVBQUksRUFBQUMsU0FBUyxDQUFHLEVBQUFDLEtBQUEsRUFBT0MsU0FBVyxFQUFBQyxRQUFBLEVBQVUsR0FBR0MsTUFBQSxFQUNoRkMsb0JBRUFDLG9EQUFhQSxDQUNYLE9BQ0E7WUFDRUQ7WUFDQSxHQUFHRSw4REFBQSxDQUFrQmYsS0FBSTtZQUN6QmdCLE9BQU9UO1lBQ1BVLFFBQVFWO1lBQ1JHLFdBQVc7Z0JBQUMsQ0FBZTtnQkFBQSxlQUFlVCxTQUFZO2dCQUFBUzthQUFXLENBQUFRLElBQUEsQ0FBSztZQUN0RSxHQUFJbEIsU0FBUyxXQUNUO2dCQUNFbUIsTUFBTWI7WUFBQSxJQUVSO2dCQUNFYyxhQUFhWjtnQkFDYkEsUUFBUUY7WUFDVjtZQUNKLEdBQUdNLElBQUE7UUFDTCxHQUNBO1lBQ0VILHVCQUFTSyxvREFBYUEsQ0FBQyxTQUFTO2dCQUFFTyxLQUFLO1lBQUEsR0FBZVo7ZUFDbkROLFNBQVNtQixHQUFBLENBQUksQ0FBQyxDQUFDQyxLQUFLQyxNQUFXLGlCQUFBVixvREFBYUEsQ0FBQ1MsS0FBS0M7ZUFDakRDLE1BQU1DLE9BQUEsQ0FBUWYsWUFBWUEsV0FBVztnQkFBQ0E7YUFBUTtTQUNwRDtJQUlJUCxVQUFBdUIsV0FBQSxHQUFjLEdBQUd6QixlQUFjO0lBRWxDLE9BQUFFO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRyZW50Ly4uLy4uL3NyYy9jcmVhdGVSZWFjdENvbXBvbmVudC50cz9hODU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcndhcmRSZWYsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdEF0dHJpYnV0ZXMgZnJvbSAnLi9kZWZhdWx0QXR0cmlidXRlcyc7XG5pbXBvcnQgdHlwZSB7IEljb25Ob2RlLCBJY29uUHJvcHMsIEljb24gfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgY3JlYXRlUmVhY3RDb21wb25lbnQgPSAoXG4gIHR5cGU6ICdvdXRsaW5lJyB8ICdmaWxsZWQnLFxuICBpY29uTmFtZTogc3RyaW5nLFxuICBpY29uTmFtZVBhc2NhbDogc3RyaW5nLFxuICBpY29uTm9kZTogSWNvbk5vZGUsXG4pID0+IHtcbiAgY29uc3QgQ29tcG9uZW50ID0gZm9yd2FyZFJlZjxJY29uLCBJY29uUHJvcHM+KFxuICAgIChcbiAgICAgIHsgY29sb3IgPSAnY3VycmVudENvbG9yJywgc2l6ZSA9IDI0LCBzdHJva2UgPSAyLCB0aXRsZSwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucmVzdCB9OiBJY29uUHJvcHMsXG4gICAgICByZWYsXG4gICAgKSA9PlxuICAgICAgY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3N2ZycsXG4gICAgICAgIHtcbiAgICAgICAgICByZWYsXG4gICAgICAgICAgLi4uZGVmYXVsdEF0dHJpYnV0ZXNbdHlwZV0sXG4gICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgIGNsYXNzTmFtZTogW2B0YWJsZXItaWNvbmAsIGB0YWJsZXItaWNvbi0ke2ljb25OYW1lfWAsIGNsYXNzTmFtZV0uam9pbignICcpLFxuICAgICAgICAgIC4uLih0eXBlID09PSAnZmlsbGVkJ1xuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgZmlsbDogY29sb3IsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBzdHJva2UsXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBjb2xvcixcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIHRpdGxlICYmIGNyZWF0ZUVsZW1lbnQoJ3RpdGxlJywgeyBrZXk6ICdzdmctdGl0bGUnIH0sIHRpdGxlKSxcbiAgICAgICAgICAuLi5pY29uTm9kZS5tYXAoKFt0YWcsIGF0dHJzXSkgPT4gY3JlYXRlRWxlbWVudCh0YWcsIGF0dHJzKSksXG4gICAgICAgICAgLi4uKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBbY2hpbGRyZW5dKSxcbiAgICAgICAgXSxcbiAgICAgICksXG4gICk7XG5cbiAgQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gYCR7aWNvbk5hbWVQYXNjYWx9YDtcblxuICByZXR1cm4gQ29tcG9uZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVhY3RDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVhY3RDb21wb25lbnQiLCJ0eXBlIiwiaWNvbk5hbWUiLCJpY29uTmFtZVBhc2NhbCIsImljb25Ob2RlIiwiQ29tcG9uZW50IiwiZm9yd2FyZFJlZiIsImNvbG9yIiwic2l6ZSIsInN0cm9rZSIsInRpdGxlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJyZXN0IiwicmVmIiwiY3JlYXRlRWxlbWVudCIsImRlZmF1bHRBdHRyaWJ1dGVzIiwid2lkdGgiLCJoZWlnaHQiLCJqb2luIiwiZmlsbCIsInN0cm9rZVdpZHRoIiwia2V5IiwibWFwIiwidGFnIiwiYXR0cnMiLCJBcnJheSIsImlzQXJyYXkiLCJkaXNwbGF5TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ defaultAttributes)\n/* harmony export */ });\n/**\n * @license @tabler/icons-react v3.10.0 - MIT\n *\n * This source code is licensed under the MIT license.\n * See the LICENSE file in the root directory of this source tree.\n */ var defaultAttributes = {\n    outline: {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        width: 24,\n        height: 24,\n        viewBox: \"0 0 24 24\",\n        fill: \"none\",\n        stroke: \"currentColor\",\n        strokeWidth: 2,\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\"\n    },\n    filled: {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        width: 24,\n        height: 24,\n        viewBox: \"0 0 24 24\",\n        fill: \"currentColor\",\n        stroke: \"none\"\n    }\n};\n //# sourceMappingURL=defaultAttributes.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHRhYmxlci9pY29ucy1yZWFjdC9kaXN0L2VzbS9kZWZhdWx0QXR0cmlidXRlcy5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBQUEsSUFBZUEsb0JBQUE7SUFDYkMsU0FBUztRQUNQQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxhQUFhO1FBQ2JDLGVBQWU7UUFDZkMsZ0JBQWdCO0lBQ2xCO0lBQ0FDLFFBQVE7UUFDTlQsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsU0FBUztRQUNUQyxNQUFNO1FBQ05DLFFBQVE7SUFDVjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZml0cmVudC8uLi8uLi9zcmMvZGVmYXVsdEF0dHJpYnV0ZXMudHM/MzcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIG91dGxpbmU6IHtcbiAgICB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgICB3aWR0aDogMjQsXG4gICAgaGVpZ2h0OiAyNCxcbiAgICB2aWV3Qm94OiAnMCAwIDI0IDI0JyxcbiAgICBmaWxsOiAnbm9uZScsXG4gICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICBzdHJva2VXaWR0aDogMixcbiAgICBzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuICAgIHN0cm9rZUxpbmVqb2luOiAncm91bmQnLFxuICB9LFxuICBmaWxsZWQ6IHtcbiAgICB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgICB3aWR0aDogMjQsXG4gICAgaGVpZ2h0OiAyNCxcbiAgICB2aWV3Qm94OiAnMCAwIDI0IDI0JyxcbiAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICBzdHJva2U6ICdub25lJyxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiZGVmYXVsdEF0dHJpYnV0ZXMiLCJvdXRsaW5lIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJmaWxsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandGoogle.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandGoogle.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IconBrandGoogle)\n/* harmony export */ });\n/* harmony import */ var _createReactComponent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.mjs */ \"(ssr)/./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs\");\n/**\n * @license @tabler/icons-react v3.10.0 - MIT\n *\n * This source code is licensed under the MIT license.\n * See the LICENSE file in the root directory of this source tree.\n */ \nvar IconBrandGoogle = (0,_createReactComponent_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"outline\", \"brand-google\", \"IconBrandGoogle\", [\n    [\n        \"path\",\n        {\n            \"d\": \"M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z\",\n            \"key\": \"svg-0\"\n        }\n    ]\n]);\n //# sourceMappingURL=IconBrandGoogle.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHRhYmxlci9pY29ucy1yZWFjdC9kaXN0L2VzbS9pY29ucy9JY29uQnJhbmRHb29nbGUubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsSUFBZUEsa0JBQUFDLHFFQUFvQkEsQ0FBQyxXQUFXLGdCQUFnQixtQkFBbUI7SUFBQztRQUFDO1FBQU87WUFBQyxLQUFJO1lBQTZGLE9BQU07UUFBTztLQUFFO0NBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRyZW50Ly4uLy4uLy4uL3NyYy9pY29ucy9JY29uQnJhbmRHb29nbGUudHM/ZTJmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlUmVhY3RDb21wb25lbnQgZnJvbSAnLi4vY3JlYXRlUmVhY3RDb21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVhY3RDb21wb25lbnQoJ291dGxpbmUnLCAnYnJhbmQtZ29vZ2xlJywgJ0ljb25CcmFuZEdvb2dsZScsIFtbXCJwYXRoXCIse1wiZFwiOlwiTTIwLjk0NSAxMWE5IDkgMCAxIDEgLTMuMjg0IC01Ljk5N2wtMi42NTUgMi4zOTJhNS41IDUuNSAwIDEgMCAyLjExOSA2LjYwNWgtNC4xMjV2LTNoNy45NDV6XCIsXCJrZXlcIjpcInN2Zy0wXCJ9XV0pOyJdLCJuYW1lcyI6WyJJY29uQnJhbmRHb29nbGUiLCJjcmVhdGVSZWFjdENvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandGoogle.mjs\n");

/***/ })

};
;