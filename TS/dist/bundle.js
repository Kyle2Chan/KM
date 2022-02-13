/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/core/GameInit.ts":
/*!******************************!*\
  !*** ./src/core/GameInit.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameInit)\n/* harmony export */ });\n/* harmony import */ var _utils_Timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Timer */ \"./src/core/utils/Timer.ts\");\n\nclass GameInit {\n    static start() {\n        // new StepPreload().execute();\n        _utils_Timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tick(100, this, this.update);\n    }\n    static update() {\n        console.log(Date.now());\n    }\n}\n\n\n//# sourceURL=webpack:///./src/core/GameInit.ts?");

/***/ }),

/***/ "./src/core/utils/GameStatus.ts":
/*!**************************************!*\
  !*** ./src/core/utils/GameStatus.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameStatus)\n/* harmony export */ });\n/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ \"csharp\");\n/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);\n\nclass GameStatus {\n    static get frames() {\n        if (this._frames < 0) {\n            this._frames = (csharp__WEBPACK_IMPORTED_MODULE_0___default().UnityEngine.Time.frameCount);\n        }\n        return this._frames;\n    }\n    static update() {\n        this._frames++;\n    }\n}\nGameStatus._frames = -1;\n\n\n//# sourceURL=webpack:///./src/core/utils/GameStatus.ts?");

/***/ }),

/***/ "./src/core/utils/Handler.ts":
/*!***********************************!*\
  !*** ./src/core/utils/Handler.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Handler)\n/* harmony export */ });\n/* harmony import */ var _Pool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pool */ \"./src/core/utils/Pool.ts\");\n\nclass Handler {\n    onRecycle() {\n        this._caller = null;\n        this._func = null;\n        this._args = null;\n        this._once = false;\n    }\n    onReUse() { }\n    set(caller, func, args, once) {\n        this._caller = caller;\n        this._func = func;\n        this._args = args;\n        this._once = once;\n        return this;\n    }\n    static create(caller, func, args, once = true) {\n        return (_Pool__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(Handler) || new Handler()).set(caller, func, args, once);\n    }\n    execute() {\n        if (!this._caller) {\n            console.error(\"can not find caller\");\n            return;\n        }\n        if (!this._func) {\n            console.error(\"can not find function to call\");\n            return;\n        }\n        this._func.apply(this._caller, this._args);\n        if (this._once) {\n            _Pool__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(this);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/core/utils/Handler.ts?");

/***/ }),

/***/ "./src/core/utils/Pool.ts":
/*!********************************!*\
  !*** ./src/core/utils/Pool.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pool)\n/* harmony export */ });\nclass Pool {\n    static get(type) {\n        const pool = this._dictPool.get(type);\n        if (!pool) {\n            return null;\n        }\n        const obj = pool.pop();\n        if (obj) {\n            obj.onReUse();\n        }\n        return obj;\n    }\n    static push(obj) {\n        let pool = this._dictPool.get(obj);\n        if (!pool) {\n            pool = [];\n        }\n        obj.onRecycle();\n        pool.push(obj);\n    }\n}\nPool._dictPool = new Map();\n\n\n//# sourceURL=webpack:///./src/core/utils/Pool.ts?");

/***/ }),

/***/ "./src/core/utils/Timer.ts":
/*!*********************************!*\
  !*** ./src/core/utils/Timer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Timer)\n/* harmony export */ });\n/* harmony import */ var _GameStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameStatus */ \"./src/core/utils/GameStatus.ts\");\n/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Handler */ \"./src/core/utils/Handler.ts\");\n/* harmony import */ var _Pool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pool */ \"./src/core/utils/Pool.ts\");\n\n\n\nclass Timer {\n    constructor() {\n        this._id = ++Timer._ID;\n        Timer._timers.set(this._id, this);\n    }\n    onReUse() {\n        this._id = ++Timer._ID;\n        Timer._timers.set(this._id, this);\n    }\n    onRecycle() {\n        Timer._timers.delete(this._id);\n        this._id = 0;\n        this._running = false;\n    }\n    get id() {\n        return this._id;\n    }\n    dispose() {\n        this._disposed = true;\n        this._running = false;\n        Timer._timers.delete(this._id);\n    }\n    check() {\n        return !this._disposed && this._running;\n    }\n    update() {\n        if (this.check() && this._handler) {\n            this._handler.execute();\n            if (this._once) {\n                _Pool__WEBPACK_IMPORTED_MODULE_2__[\"default\"].push(this);\n            }\n        }\n    }\n    static updateAllTimers() {\n        this._timers.forEach((v) => {\n            v.update();\n        });\n    }\n    static frame(interval, caller, func, args, once = false) {\n        const timer = _Pool__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(FrameTimer) || new FrameTimer();\n        if (interval <= 0) {\n            interval = 1;\n        }\n        timer._interval = interval;\n        timer._startTime = _GameStatus__WEBPACK_IMPORTED_MODULE_0__[\"default\"].frames;\n        timer._once = once;\n        timer._handler = _Handler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(caller, func, args, once);\n        timer._running = true;\n        return timer;\n    }\n    static tick(interval, caller, func, args, once = false) {\n        if (interval <= 0) {\n            interval = 1;\n        }\n        const timer = _Pool__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(TickTimer) || new TickTimer();\n        timer._interval = interval;\n        timer._startTime = Date.now();\n        timer._once = once;\n        timer._handler = _Handler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(caller, func, args, once);\n        timer._running = true;\n        return timer;\n    }\n    static clearAll(caller) {\n        // if(caller && ){\n        // }\n    }\n}\nTimer._timers = new Map();\nTimer._ID = 0;\nclass FrameTimer extends Timer {\n    check() {\n        if (!super.check()) {\n            return false;\n        }\n        if (_GameStatus__WEBPACK_IMPORTED_MODULE_0__[\"default\"].frames >= this._startTime + this._interval) {\n            this._startTime = _GameStatus__WEBPACK_IMPORTED_MODULE_0__[\"default\"].frames;\n            return true;\n        }\n        return false;\n    }\n}\nclass TickTimer extends Timer {\n    check() {\n        if (!super.check()) {\n            return false;\n        }\n        if (Date.now() >= this._startTime + this._interval) {\n            this._startTime = Date.now();\n            return true;\n        }\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/core/utils/Timer.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_GameInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/GameInit */ \"./src/core/GameInit.ts\");\n/* harmony import */ var core_utils_GameStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/utils/GameStatus */ \"./src/core/utils/GameStatus.ts\");\n/* harmony import */ var core_utils_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/utils/Timer */ \"./src/core/utils/Timer.ts\");\n\n\n\ncore_GameInit__WEBPACK_IMPORTED_MODULE_0__[\"default\"].start();\nfunction update(deltaTime) {\n    core_utils_Timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateAllTimers();\n    core_utils_GameStatus__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update();\n}\nfunction lateUpdate(deltaTime) { }\nfunction quit() { }\nfunction register(csRegister) {\n    csRegister.Register(update, lateUpdate, quit);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (register);\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "csharp":
/*!*************************!*\
  !*** external "csharp" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("csharp");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ module.exports = __webpack_exports__;
/******/ 
