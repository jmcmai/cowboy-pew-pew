/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fcarolinevan%2Fcowboy-pew-pew%2Fpages%2Findex.tsx&page=%2F!":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fcarolinevan%2Fcowboy-pew-pew%2Fpages%2Findex.tsx&page=%2F! ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmNhcm9saW5ldmFuJTJGY293Ym95LXBldy1wZXclMkZwYWdlcyUyRmluZGV4LnRzeCZwYWdlPSUyRiEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDMUM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvP2JiOTMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fcarolinevan%2Fcowboy-pew-pew%2Fpages%2Findex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _convex_generated_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../convex/_generated/react */ \"./convex/_generated/react.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App() {\n    _s();\n    // test user\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const storeUser = (0,_convex_generated_react__WEBPACK_IMPORTED_MODULE_2__.useMutation)(\"storeUser\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Store the user in the database.\n        // storeUser` gets the user information via the `auth` object on the server\n        // so we don't need to pass anything manually here.\n        async function createUser() {\n            const id = await storeUser();\n            setUserId(id);\n        }\n        createUser();\n        return ()=>setUserId(null);\n    }, [\n        storeUser\n    ]);\n    const notes = (0,_convex_generated_react__WEBPACK_IMPORTED_MODULE_2__.useQuery)(\"getNotes\") || [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Choose a Set to Study\"\n            }, void 0, false, {\n                fileName: \"/Users/carolinevan/cowboy-pew-pew/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: notes.map((note)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: note.title\n                            }, void 0, false, {\n                                fileName: \"/Users/carolinevan/cowboy-pew-pew/pages/index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: note.noteContent\n                            }, void 0, false, {\n                                fileName: \"/Users/carolinevan/cowboy-pew-pew/pages/index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: new Date(note._creationTime).toLocaleTimeString()\n                            }, void 0, false, {\n                                fileName: \"/Users/carolinevan/cowboy-pew-pew/pages/index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, note._id.toString(), true, {\n                        fileName: \"/Users/carolinevan/cowboy-pew-pew/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/carolinevan/cowboy-pew-pew/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/carolinevan/cowboy-pew-pew/pages/index.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"9HzbshIDW/XUypk+b875voeIcC4=\", false, function() {\n    return [\n        _convex_generated_react__WEBPACK_IMPORTED_MODULE_2__.useMutation,\n        _convex_generated_react__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDa0I7QUFDdUI7QUFJbkQsU0FBU0ssTUFBTTs7SUFDNUIsWUFBWTtJQUNaLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBcUIsSUFBSTtJQUM3RCxNQUFNTSxZQUFZTCxvRUFBV0EsQ0FBQztJQUM5QkYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLGtDQUFrQztRQUNsQywyRUFBMkU7UUFDM0UsbURBQW1EO1FBQ25ELGVBQWVRLGFBQWE7WUFDMUIsTUFBTUMsS0FBSyxNQUFNRjtZQUNqQkQsVUFBVUc7UUFDWjtRQUNBRDtRQUNBLE9BQU8sSUFBTUYsVUFBVSxJQUFJO0lBQzdCLEdBQUc7UUFBQ0M7S0FBVTtJQUVkLE1BQU1HLFFBQVFQLGlFQUFRQSxDQUFDLGVBQWUsRUFBRTtJQUV4QyxxQkFDRSw4REFBQ1E7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFDRUgsTUFBTUksR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDQzs7MENBQ0MsOERBQUNDOzBDQUFNRixLQUFLRyxLQUFLOzs7Ozs7MENBQ2pCLDhEQUFDRDswQ0FBTUYsS0FBS0ksV0FBVzs7Ozs7OzBDQUN2Qiw4REFBQ0Y7MENBQU0sSUFBSUcsS0FBS0wsS0FBS00sYUFBYSxFQUFFQyxrQkFBa0I7Ozs7Ozs7dUJBSC9DUCxLQUFLUSxHQUFHLENBQUNDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTcEMsQ0FBQztHQWhDdUJwQjs7UUFHSkYsZ0VBQVdBO1FBYWZDLDZEQUFRQTs7O0tBaEJBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICcuLi9jb252ZXgvX2dlbmVyYXRlZC9yZWFjdCdcbmltcG9ydCB7IElkIH0gZnJvbSBcIi4uL2NvbnZleC9fZ2VuZXJhdGVkL2RhdGFNb2RlbFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIC8vIHRlc3QgdXNlclxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGU8SWQ8XCJ1c2Vyc1wiPiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBzdG9yZVVzZXIgPSB1c2VNdXRhdGlvbihcInN0b3JlVXNlclwiKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTdG9yZSB0aGUgdXNlciBpbiB0aGUgZGF0YWJhc2UuXG4gICAgLy8gc3RvcmVVc2VyYCBnZXRzIHRoZSB1c2VyIGluZm9ybWF0aW9uIHZpYSB0aGUgYGF1dGhgIG9iamVjdCBvbiB0aGUgc2VydmVyXG4gICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBwYXNzIGFueXRoaW5nIG1hbnVhbGx5IGhlcmUuXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcigpIHtcbiAgICAgIGNvbnN0IGlkID0gYXdhaXQgc3RvcmVVc2VyKCk7XG4gICAgICBzZXRVc2VySWQoaWQpO1xuICAgIH1cbiAgICBjcmVhdGVVc2VyKCk7XG4gICAgcmV0dXJuICgpID0+IHNldFVzZXJJZChudWxsKTtcbiAgfSwgW3N0b3JlVXNlcl0pO1xuXG4gIGNvbnN0IG5vdGVzID0gdXNlUXVlcnkoJ2dldE5vdGVzJykgfHwgW11cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGgxPkNob29zZSBhIFNldCB0byBTdHVkeTwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtub3Rlcy5tYXAoKG5vdGU6YW55KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17bm90ZS5faWQudG9TdHJpbmcoKX0+XG4gICAgICAgICAgICA8c3Bhbj57bm90ZS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj57bm90ZS5ub3RlQ29udGVudH08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj57bmV3IERhdGUobm90ZS5fY3JlYXRpb25UaW1lKS50b0xvY2FsZVRpbWVTdHJpbmcoKX08L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwiQXBwIiwidXNlcklkIiwic2V0VXNlcklkIiwic3RvcmVVc2VyIiwiY3JlYXRlVXNlciIsImlkIiwibm90ZXMiLCJtYWluIiwiaDEiLCJ1bCIsIm1hcCIsIm5vdGUiLCJsaSIsInNwYW4iLCJ0aXRsZSIsIm5vdGVDb250ZW50IiwiRGF0ZSIsIl9jcmVhdGlvblRpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJfaWQiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ }),

/***/ "./convex/_generated/react.js":
/*!************************************!*\
  !*** ./convex/_generated/react.js ***!
  \************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAction\": function() { return /* binding */ useAction; },\n/* harmony export */   \"useConvex\": function() { return /* binding */ useConvex; },\n/* harmony export */   \"useMutation\": function() { return /* binding */ useMutation; },\n/* harmony export */   \"usePaginatedQuery\": function() { return /* binding */ usePaginatedQuery; },\n/* harmony export */   \"useQueries\": function() { return /* binding */ useQueries; },\n/* harmony export */   \"useQuery\": function() { return /* binding */ useQuery; }\n/* harmony export */ });\n/* harmony import */ var convex_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! convex/react */ \"./node_modules/convex/dist/esm/react/index.js\");\n/* eslint-disable */ /**\n * Generated React hooks.\n *\n * THIS CODE IS AUTOMATICALLY GENERATED.\n *\n * Generated by convex@0.9.1.\n * To regenerate, run `npx convex codegen`.\n * @module\n */ \n/**\n * Load a reactive query within a React component.\n *\n * This React hook contains internal state that will cause a rerender whenever\n * the query result changes.\n *\n * This relies on the {@link ConvexProvider} being above in the React component tree.\n *\n * @param name - The name of the query function.\n * @param args - The arguments to the query function.\n * @returns `undefined` if loading and the query's return value otherwise.\n */ const useQuery = convex_react__WEBPACK_IMPORTED_MODULE_0__.useQueryGeneric;\n/**\n * Construct a new {@link ReactMutation}.\n *\n * Mutation objects can be called like functions to request execution of the\n * corresponding Convex function, or further configured with\n * [optimistic updates](https://docs.convex.dev/using/optimistic-updates).\n *\n * The value returned by this hook is stable across renders, so it can be used\n * by React dependency arrays and memoization logic relying on object identity\n * without causing rerenders.\n *\n * This relies on the {@link ConvexProvider} being above in the React component tree.\n *\n * @param name - The name of the mutation.\n * @returns The {@link ReactMutation} object with that name.\n */ const useMutation = convex_react__WEBPACK_IMPORTED_MODULE_0__.useMutationGeneric;\n/**\n * Construct a new {@link ReactAction}.\n *\n * Convex function objects can be called like functions to request execution of\n * the corresponding Convex function.\n *\n * The value returned by this hook is stable across renders, so it can be used\n * by React dependency arrays and memoization logic relying on object identity\n * without causing rerenders.\n *\n * This relies on the {@link ConvexProvider} being above in the React component tree.\n *\n * @param name - The name of the function.\n * @returns The {@link ReactAction} object with that name.\n */ const useAction = convex_react__WEBPACK_IMPORTED_MODULE_0__.useActionGeneric;\n/**\n * Get the {@link ConvexReactClient} within a React component.\n *\n * This relies on the {@link ConvexProvider} being above in the React component tree.\n *\n * @returns The active {@link ConvexReactClient} object, or `undefined`.\n */ const useConvex = convex_react__WEBPACK_IMPORTED_MODULE_0__.useConvexGeneric;\n/**\n * Load data reactively from a paginated query to a create a growing list.\n *\n * This can be used to power \"infinite scroll\" UIs.\n *\n * This hook must be used with Convex query functions that match\n * {@link PaginatedQueryFunction}. This means they must:\n * 1. Have a first argument must be an object containing `numItems` and `cursor`.\n * 2. Return a {@link PaginationResult}.\n *\n * `usePaginatedQuery` concatenates all the pages\n * of results into a single list and manages the continuation cursors when\n * requesting more items.\n *\n * Example usage:\n * ```typescript\n * const { results, status, loadMore } = usePaginatedQuery(\n *   \"listMessages\",\n *   { initialNumItems: 5 },\n *   \"#general\"\n * );\n * ```\n *\n * If the query `name` or `args` change, the pagination state will be reset\n * to the first page. Similarly, if any of the pages result in an InvalidCursor\n * or QueryScannedTooManyDocuments error, the pagination state will also reset\n * to the first page.\n *\n * To learn more about pagination, see [Paginated Queries](https://docs.convex.dev/using/pagination).\n *\n * @param name - The name of the query function.\n * @param options - An object specifying the `initialNumItems` to be loaded in\n * the first page.\n * @param args - The arguments to the query function, excluding the first.\n * @returns A {@link UsePaginatedQueryResult} that includes the currently loaded\n * items, the status of the pagination, and a `loadMore` function.\n */ const usePaginatedQuery = convex_react__WEBPACK_IMPORTED_MODULE_0__.usePaginatedQueryGeneric;\n/**\n * Load a variable number of reactive Convex queries.\n *\n * `useQueries` is similar to {@link useQuery} but it allows\n * loading multiple queries which can be useful for loading a dynamic number\n * of queries without violating the rules of React hooks.\n *\n * This hook accepts an object whose keys are identifiers for each query and the\n * values are objects of `{ name: string, args: Value[] }`. The `name` is the\n * name of the Convex query function to load, and the `args` are the arguments to\n * that function.\n *\n * The hook returns an object that maps each identifier to the result of the query,\n * `undefined` if the query is still loading, or an instance of `Error` if the query\n * threw an exception.\n *\n * For example if you loaded a query like:\n * ```typescript\n * const results = useQueriesGeneric({\n *   messagesInGeneral: {\n *     name: \"listMessages\",\n *     args: [\"#general\"]\n *   }\n * });\n * ```\n * then the result would look like:\n * ```typescript\n * {\n *   messagesInGeneral: [{\n *     channel: \"#general\",\n *     body: \"hello\"\n *     _id: ...,\n *     _creationTime: ...\n *   }]\n * }\n * ```\n *\n * This React hook contains internal state that will cause a rerender\n * whenever any of the query results change.\n *\n * Throws an error if not used under {@link ConvexProvider}.\n *\n * @param queries - An object mapping identifiers to objects of\n * `{name: string, args: Value[] }` describing which query functions to fetch.\n * @returns An object with the same keys as the input. The values are the result\n * of the query function, `undefined` if it's still loading, or an `Error` if\n * it threw an exception.\n */ const useQueries = convex_react__WEBPACK_IMPORTED_MODULE_0__.useQueriesGeneric;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb252ZXgvX2dlbmVyYXRlZC9yZWFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0JBQWtCLEdBQ2xCOzs7Ozs7OztDQVFDLEdBU3FCO0FBRXRCOzs7Ozs7Ozs7OztDQVdDLEdBQ00sTUFBTU0sV0FBV0QseURBQWVBLENBQUM7QUFFeEM7Ozs7Ozs7Ozs7Ozs7OztDQWVDLEdBQ00sTUFBTUUsY0FBY0wsNERBQWtCQSxDQUFDO0FBRTlDOzs7Ozs7Ozs7Ozs7OztDQWNDLEdBQ00sTUFBTU0sWUFBWVAsMERBQWdCQSxDQUFDO0FBRTFDOzs7Ozs7Q0FNQyxHQUNNLE1BQU1RLFlBQVlULDBEQUFnQkEsQ0FBQztBQUUxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBb0NDLEdBQ00sTUFBTVUsb0JBQW9CUCxrRUFBd0JBLENBQUM7QUFFMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBK0NDLEdBQ00sTUFBTVEsYUFBYVAsMkRBQWlCQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnZleC9fZ2VuZXJhdGVkL3JlYWN0LmpzPzM4NjAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogR2VuZXJhdGVkIFJlYWN0IGhvb2tzLlxuICpcbiAqIFRISVMgQ09ERSBJUyBBVVRPTUFUSUNBTExZIEdFTkVSQVRFRC5cbiAqXG4gKiBHZW5lcmF0ZWQgYnkgY29udmV4QDAuOS4xLlxuICogVG8gcmVnZW5lcmF0ZSwgcnVuIGBucHggY29udmV4IGNvZGVnZW5gLlxuICogQG1vZHVsZVxuICovXG5cbmltcG9ydCB7XG4gIHVzZUNvbnZleEdlbmVyaWMsXG4gIHVzZUFjdGlvbkdlbmVyaWMsXG4gIHVzZU11dGF0aW9uR2VuZXJpYyxcbiAgdXNlUGFnaW5hdGVkUXVlcnlHZW5lcmljLFxuICB1c2VRdWVyaWVzR2VuZXJpYyxcbiAgdXNlUXVlcnlHZW5lcmljLFxufSBmcm9tIFwiY29udmV4L3JlYWN0XCI7XG5cbi8qKlxuICogTG9hZCBhIHJlYWN0aXZlIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIFJlYWN0IGhvb2sgY29udGFpbnMgaW50ZXJuYWwgc3RhdGUgdGhhdCB3aWxsIGNhdXNlIGEgcmVyZW5kZXIgd2hlbmV2ZXJcbiAqIHRoZSBxdWVyeSByZXN1bHQgY2hhbmdlcy5cbiAqXG4gKiBUaGlzIHJlbGllcyBvbiB0aGUge0BsaW5rIENvbnZleFByb3ZpZGVyfSBiZWluZyBhYm92ZSBpbiB0aGUgUmVhY3QgY29tcG9uZW50IHRyZWUuXG4gKlxuICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcXVlcnkgZnVuY3Rpb24uXG4gKiBAcGFyYW0gYXJncyAtIFRoZSBhcmd1bWVudHMgdG8gdGhlIHF1ZXJ5IGZ1bmN0aW9uLlxuICogQHJldHVybnMgYHVuZGVmaW5lZGAgaWYgbG9hZGluZyBhbmQgdGhlIHF1ZXJ5J3MgcmV0dXJuIHZhbHVlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHVzZVF1ZXJ5ID0gdXNlUXVlcnlHZW5lcmljO1xuXG4vKipcbiAqIENvbnN0cnVjdCBhIG5ldyB7QGxpbmsgUmVhY3RNdXRhdGlvbn0uXG4gKlxuICogTXV0YXRpb24gb2JqZWN0cyBjYW4gYmUgY2FsbGVkIGxpa2UgZnVuY3Rpb25zIHRvIHJlcXVlc3QgZXhlY3V0aW9uIG9mIHRoZVxuICogY29ycmVzcG9uZGluZyBDb252ZXggZnVuY3Rpb24sIG9yIGZ1cnRoZXIgY29uZmlndXJlZCB3aXRoXG4gKiBbb3B0aW1pc3RpYyB1cGRhdGVzXShodHRwczovL2RvY3MuY29udmV4LmRldi91c2luZy9vcHRpbWlzdGljLXVwZGF0ZXMpLlxuICpcbiAqIFRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGlzIGhvb2sgaXMgc3RhYmxlIGFjcm9zcyByZW5kZXJzLCBzbyBpdCBjYW4gYmUgdXNlZFxuICogYnkgUmVhY3QgZGVwZW5kZW5jeSBhcnJheXMgYW5kIG1lbW9pemF0aW9uIGxvZ2ljIHJlbHlpbmcgb24gb2JqZWN0IGlkZW50aXR5XG4gKiB3aXRob3V0IGNhdXNpbmcgcmVyZW5kZXJzLlxuICpcbiAqIFRoaXMgcmVsaWVzIG9uIHRoZSB7QGxpbmsgQ29udmV4UHJvdmlkZXJ9IGJlaW5nIGFib3ZlIGluIHRoZSBSZWFjdCBjb21wb25lbnQgdHJlZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBtdXRhdGlvbi5cbiAqIEByZXR1cm5zIFRoZSB7QGxpbmsgUmVhY3RNdXRhdGlvbn0gb2JqZWN0IHdpdGggdGhhdCBuYW1lLlxuICovXG5leHBvcnQgY29uc3QgdXNlTXV0YXRpb24gPSB1c2VNdXRhdGlvbkdlbmVyaWM7XG5cbi8qKlxuICogQ29uc3RydWN0IGEgbmV3IHtAbGluayBSZWFjdEFjdGlvbn0uXG4gKlxuICogQ29udmV4IGZ1bmN0aW9uIG9iamVjdHMgY2FuIGJlIGNhbGxlZCBsaWtlIGZ1bmN0aW9ucyB0byByZXF1ZXN0IGV4ZWN1dGlvbiBvZlxuICogdGhlIGNvcnJlc3BvbmRpbmcgQ29udmV4IGZ1bmN0aW9uLlxuICpcbiAqIFRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGlzIGhvb2sgaXMgc3RhYmxlIGFjcm9zcyByZW5kZXJzLCBzbyBpdCBjYW4gYmUgdXNlZFxuICogYnkgUmVhY3QgZGVwZW5kZW5jeSBhcnJheXMgYW5kIG1lbW9pemF0aW9uIGxvZ2ljIHJlbHlpbmcgb24gb2JqZWN0IGlkZW50aXR5XG4gKiB3aXRob3V0IGNhdXNpbmcgcmVyZW5kZXJzLlxuICpcbiAqIFRoaXMgcmVsaWVzIG9uIHRoZSB7QGxpbmsgQ29udmV4UHJvdmlkZXJ9IGJlaW5nIGFib3ZlIGluIHRoZSBSZWFjdCBjb21wb25lbnQgdHJlZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIFRoZSB7QGxpbmsgUmVhY3RBY3Rpb259IG9iamVjdCB3aXRoIHRoYXQgbmFtZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHVzZUFjdGlvbiA9IHVzZUFjdGlvbkdlbmVyaWM7XG5cbi8qKlxuICogR2V0IHRoZSB7QGxpbmsgQ29udmV4UmVhY3RDbGllbnR9IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIHJlbGllcyBvbiB0aGUge0BsaW5rIENvbnZleFByb3ZpZGVyfSBiZWluZyBhYm92ZSBpbiB0aGUgUmVhY3QgY29tcG9uZW50IHRyZWUuXG4gKlxuICogQHJldHVybnMgVGhlIGFjdGl2ZSB7QGxpbmsgQ29udmV4UmVhY3RDbGllbnR9IG9iamVjdCwgb3IgYHVuZGVmaW5lZGAuXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VDb252ZXggPSB1c2VDb252ZXhHZW5lcmljO1xuXG4vKipcbiAqIExvYWQgZGF0YSByZWFjdGl2ZWx5IGZyb20gYSBwYWdpbmF0ZWQgcXVlcnkgdG8gYSBjcmVhdGUgYSBncm93aW5nIGxpc3QuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBwb3dlciBcImluZmluaXRlIHNjcm9sbFwiIFVJcy5cbiAqXG4gKiBUaGlzIGhvb2sgbXVzdCBiZSB1c2VkIHdpdGggQ29udmV4IHF1ZXJ5IGZ1bmN0aW9ucyB0aGF0IG1hdGNoXG4gKiB7QGxpbmsgUGFnaW5hdGVkUXVlcnlGdW5jdGlvbn0uIFRoaXMgbWVhbnMgdGhleSBtdXN0OlxuICogMS4gSGF2ZSBhIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYG51bUl0ZW1zYCBhbmQgYGN1cnNvcmAuXG4gKiAyLiBSZXR1cm4gYSB7QGxpbmsgUGFnaW5hdGlvblJlc3VsdH0uXG4gKlxuICogYHVzZVBhZ2luYXRlZFF1ZXJ5YCBjb25jYXRlbmF0ZXMgYWxsIHRoZSBwYWdlc1xuICogb2YgcmVzdWx0cyBpbnRvIGEgc2luZ2xlIGxpc3QgYW5kIG1hbmFnZXMgdGhlIGNvbnRpbnVhdGlvbiBjdXJzb3JzIHdoZW5cbiAqIHJlcXVlc3RpbmcgbW9yZSBpdGVtcy5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogYGBgdHlwZXNjcmlwdFxuICogY29uc3QgeyByZXN1bHRzLCBzdGF0dXMsIGxvYWRNb3JlIH0gPSB1c2VQYWdpbmF0ZWRRdWVyeShcbiAqICAgXCJsaXN0TWVzc2FnZXNcIixcbiAqICAgeyBpbml0aWFsTnVtSXRlbXM6IDUgfSxcbiAqICAgXCIjZ2VuZXJhbFwiXG4gKiApO1xuICogYGBgXG4gKlxuICogSWYgdGhlIHF1ZXJ5IGBuYW1lYCBvciBgYXJnc2AgY2hhbmdlLCB0aGUgcGFnaW5hdGlvbiBzdGF0ZSB3aWxsIGJlIHJlc2V0XG4gKiB0byB0aGUgZmlyc3QgcGFnZS4gU2ltaWxhcmx5LCBpZiBhbnkgb2YgdGhlIHBhZ2VzIHJlc3VsdCBpbiBhbiBJbnZhbGlkQ3Vyc29yXG4gKiBvciBRdWVyeVNjYW5uZWRUb29NYW55RG9jdW1lbnRzIGVycm9yLCB0aGUgcGFnaW5hdGlvbiBzdGF0ZSB3aWxsIGFsc28gcmVzZXRcbiAqIHRvIHRoZSBmaXJzdCBwYWdlLlxuICpcbiAqIFRvIGxlYXJuIG1vcmUgYWJvdXQgcGFnaW5hdGlvbiwgc2VlIFtQYWdpbmF0ZWQgUXVlcmllc10oaHR0cHM6Ly9kb2NzLmNvbnZleC5kZXYvdXNpbmcvcGFnaW5hdGlvbikuXG4gKlxuICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcXVlcnkgZnVuY3Rpb24uXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCBzcGVjaWZ5aW5nIHRoZSBgaW5pdGlhbE51bUl0ZW1zYCB0byBiZSBsb2FkZWQgaW5cbiAqIHRoZSBmaXJzdCBwYWdlLlxuICogQHBhcmFtIGFyZ3MgLSBUaGUgYXJndW1lbnRzIHRvIHRoZSBxdWVyeSBmdW5jdGlvbiwgZXhjbHVkaW5nIHRoZSBmaXJzdC5cbiAqIEByZXR1cm5zIEEge0BsaW5rIFVzZVBhZ2luYXRlZFF1ZXJ5UmVzdWx0fSB0aGF0IGluY2x1ZGVzIHRoZSBjdXJyZW50bHkgbG9hZGVkXG4gKiBpdGVtcywgdGhlIHN0YXR1cyBvZiB0aGUgcGFnaW5hdGlvbiwgYW5kIGEgYGxvYWRNb3JlYCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IHVzZVBhZ2luYXRlZFF1ZXJ5ID0gdXNlUGFnaW5hdGVkUXVlcnlHZW5lcmljO1xuXG4vKipcbiAqIExvYWQgYSB2YXJpYWJsZSBudW1iZXIgb2YgcmVhY3RpdmUgQ29udmV4IHF1ZXJpZXMuXG4gKlxuICogYHVzZVF1ZXJpZXNgIGlzIHNpbWlsYXIgdG8ge0BsaW5rIHVzZVF1ZXJ5fSBidXQgaXQgYWxsb3dzXG4gKiBsb2FkaW5nIG11bHRpcGxlIHF1ZXJpZXMgd2hpY2ggY2FuIGJlIHVzZWZ1bCBmb3IgbG9hZGluZyBhIGR5bmFtaWMgbnVtYmVyXG4gKiBvZiBxdWVyaWVzIHdpdGhvdXQgdmlvbGF0aW5nIHRoZSBydWxlcyBvZiBSZWFjdCBob29rcy5cbiAqXG4gKiBUaGlzIGhvb2sgYWNjZXB0cyBhbiBvYmplY3Qgd2hvc2Uga2V5cyBhcmUgaWRlbnRpZmllcnMgZm9yIGVhY2ggcXVlcnkgYW5kIHRoZVxuICogdmFsdWVzIGFyZSBvYmplY3RzIG9mIGB7IG5hbWU6IHN0cmluZywgYXJnczogVmFsdWVbXSB9YC4gVGhlIGBuYW1lYCBpcyB0aGVcbiAqIG5hbWUgb2YgdGhlIENvbnZleCBxdWVyeSBmdW5jdGlvbiB0byBsb2FkLCBhbmQgdGhlIGBhcmdzYCBhcmUgdGhlIGFyZ3VtZW50cyB0b1xuICogdGhhdCBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgaG9vayByZXR1cm5zIGFuIG9iamVjdCB0aGF0IG1hcHMgZWFjaCBpZGVudGlmaWVyIHRvIHRoZSByZXN1bHQgb2YgdGhlIHF1ZXJ5LFxuICogYHVuZGVmaW5lZGAgaWYgdGhlIHF1ZXJ5IGlzIHN0aWxsIGxvYWRpbmcsIG9yIGFuIGluc3RhbmNlIG9mIGBFcnJvcmAgaWYgdGhlIHF1ZXJ5XG4gKiB0aHJldyBhbiBleGNlcHRpb24uXG4gKlxuICogRm9yIGV4YW1wbGUgaWYgeW91IGxvYWRlZCBhIHF1ZXJ5IGxpa2U6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBjb25zdCByZXN1bHRzID0gdXNlUXVlcmllc0dlbmVyaWMoe1xuICogICBtZXNzYWdlc0luR2VuZXJhbDoge1xuICogICAgIG5hbWU6IFwibGlzdE1lc3NhZ2VzXCIsXG4gKiAgICAgYXJnczogW1wiI2dlbmVyYWxcIl1cbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqIHRoZW4gdGhlIHJlc3VsdCB3b3VsZCBsb29rIGxpa2U6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB7XG4gKiAgIG1lc3NhZ2VzSW5HZW5lcmFsOiBbe1xuICogICAgIGNoYW5uZWw6IFwiI2dlbmVyYWxcIixcbiAqICAgICBib2R5OiBcImhlbGxvXCJcbiAqICAgICBfaWQ6IC4uLixcbiAqICAgICBfY3JlYXRpb25UaW1lOiAuLi5cbiAqICAgfV1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIFRoaXMgUmVhY3QgaG9vayBjb250YWlucyBpbnRlcm5hbCBzdGF0ZSB0aGF0IHdpbGwgY2F1c2UgYSByZXJlbmRlclxuICogd2hlbmV2ZXIgYW55IG9mIHRoZSBxdWVyeSByZXN1bHRzIGNoYW5nZS5cbiAqXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgbm90IHVzZWQgdW5kZXIge0BsaW5rIENvbnZleFByb3ZpZGVyfS5cbiAqXG4gKiBAcGFyYW0gcXVlcmllcyAtIEFuIG9iamVjdCBtYXBwaW5nIGlkZW50aWZpZXJzIHRvIG9iamVjdHMgb2ZcbiAqIGB7bmFtZTogc3RyaW5nLCBhcmdzOiBWYWx1ZVtdIH1gIGRlc2NyaWJpbmcgd2hpY2ggcXVlcnkgZnVuY3Rpb25zIHRvIGZldGNoLlxuICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIHNhbWUga2V5cyBhcyB0aGUgaW5wdXQuIFRoZSB2YWx1ZXMgYXJlIHRoZSByZXN1bHRcbiAqIG9mIHRoZSBxdWVyeSBmdW5jdGlvbiwgYHVuZGVmaW5lZGAgaWYgaXQncyBzdGlsbCBsb2FkaW5nLCBvciBhbiBgRXJyb3JgIGlmXG4gKiBpdCB0aHJldyBhbiBleGNlcHRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VRdWVyaWVzID0gdXNlUXVlcmllc0dlbmVyaWM7XG4iXSwibmFtZXMiOlsidXNlQ29udmV4R2VuZXJpYyIsInVzZUFjdGlvbkdlbmVyaWMiLCJ1c2VNdXRhdGlvbkdlbmVyaWMiLCJ1c2VQYWdpbmF0ZWRRdWVyeUdlbmVyaWMiLCJ1c2VRdWVyaWVzR2VuZXJpYyIsInVzZVF1ZXJ5R2VuZXJpYyIsInVzZVF1ZXJ5IiwidXNlTXV0YXRpb24iLCJ1c2VBY3Rpb24iLCJ1c2VDb252ZXgiLCJ1c2VQYWdpbmF0ZWRRdWVyeSIsInVzZVF1ZXJpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./convex/_generated/react.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fcarolinevan%2Fcowboy-pew-pew%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);