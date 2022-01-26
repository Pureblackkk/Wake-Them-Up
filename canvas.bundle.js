/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/copy-paste/copy-paste-house.js":
/*!********************************************!*\
  !*** ./src/copy-paste/copy-paste-house.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyPasteHouse": () => (/* binding */ CopyPasteHouse)
/* harmony export */ });
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CopyPasteHouse = /*#__PURE__*/function () {
  function CopyPasteHouse() {
    _classCallCheck(this, CopyPasteHouse);

    this.house = [];
    CopyPasteHouse.instance = this;
  }

  _createClass(CopyPasteHouse, null, [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new CopyPasteHouse();
      }

      return this.instance;
    }
  }, {
    key: "package",
    get: function get() {
      return lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default()(this.house);
    },
    set: function set(obj) {
      this.house = [];

      if (obj instanceof Array) {
        var _iterator = _createForOfIteratorHelper(obj),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            this.house.push(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default()(item));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        this.house.push(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default()(obj));
      }
    }
  }]);

  return CopyPasteHouse;
}();



/***/ }),

/***/ "./src/core/action-layer/action-utils.js":
/*!***********************************************!*\
  !*** ./src/core/action-layer/action-utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionUtils": () => (/* binding */ ActionUtils)
/* harmony export */ });
/* harmony import */ var _data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-layer/sleeper/sleeper-pool */ "./src/core/data-layer/sleeper/sleeper-pool.js");
/* harmony import */ var _data_layer_edge_edge_pool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-layer/edge/edge-pool */ "./src/core/data-layer/edge/edge-pool.js");
/* harmony import */ var _utils_math_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/math-utils */ "./src/utils/math-utils.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/core/action-layer/config.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var ActionUtils = /*#__PURE__*/function () {
  function ActionUtils() {
    _classCallCheck(this, ActionUtils);
  }

  _createClass(ActionUtils, null, [{
    key: "findLocatedObject",
    value:
    /**
     * Find mouse located object
     * @param {*} canvas 
     * @param {*} location 
     * @returns 
     */
    function findLocatedObject(canvas, location) {
      var findFunctionsList = [ActionUtils.findLocatedLineOrHead, ActionUtils.findLocatedAnchor, ActionUtils.findLocatedSleeper];

      for (var _i = 0, _findFunctionsList = findFunctionsList; _i < _findFunctionsList.length; _i++) {
        var findFunction = _findFunctionsList[_i];
        var findResult = findFunction(canvas, location);

        if (!!findResult) {
          return findResult;
        }
      }

      return null;
    }
    /**
     * Find the sleeper which at the mouse location
     * @param {*} canvas Canvas Object 
     * @param {*} location Mouse location
     * @returns {Sleeper | null}
     */

  }, {
    key: "findLocatedSleeper",
    value: function findLocatedSleeper(canvas, location) {
      var canvasContext = canvas.getContext('2d'); // Inner function to check if location in circle

      var isLocatedInCircle = function isLocatedInCircle(circlePath) {
        var x = location.x,
            y = location.y;
        return canvasContext.isPointInPath(circlePath, x, y);
      }; // Handler checking functions' maps 


      var locationHandlerMaps = {
        'circle': isLocatedInCircle.bind(this)
      }; // Iterate pool to find located path

      for (var index = _data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_0__.SleeperPooler.pool.length - 1; index >= 0; index--) {
        var sleeper = _data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_0__.SleeperPooler.pool[index];
        var sleeperStyle = sleeper.canvasInformation;
        var sleeperCanvasPath = sleeper.canvasPath;
        var drawType = sleeperStyle.drawType;

        if (locationHandlerMaps[drawType](sleeperCanvasPath)) {
          return {
            result: sleeper,
            type: 'sleeper'
          };
        }
      }

      return null;
    }
    /**
     * Find the anchor which at the mouse location
     * @param {*} canvas Canvas Object 
     * @param {*} location Mouse location
     */

  }, {
    key: "findLocatedAnchor",
    value: function findLocatedAnchor(canvas, location) {
      var canvasContext = canvas.getContext('2d');
      var x = location.x,
          y = location.y;

      for (var index = _data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_0__.SleeperPooler.pool.length - 1; index >= 0; index--) {
        var sleeper = _data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_0__.SleeperPooler.pool[index];

        if (sleeper.isActive) {
          var _iterator = _createForOfIteratorHelper(sleeper.canvasAnchorsPathList),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var sleeperAnchor = _step.value;
              var anchorPath = sleeperAnchor.anchorPath;

              if (canvasContext.isPointInPath(anchorPath, x, y)) {
                return {
                  result: [sleeper, sleeperAnchor],
                  type: 'anchor'
                };
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }

      return null;
    }
    /**
     * Find the edge which at the mouse location
     * @param {*} canvas 
     * @param {*} location 
     */

  }, {
    key: "findLocatedLineOrHead",
    value: function findLocatedLineOrHead(canvas, location) {
      var canvasContext = canvas.getContext('2d');
      var x = location.x,
          y = location.y;

      for (var index = _data_layer_edge_edge_pool__WEBPACK_IMPORTED_MODULE_1__.EdgePooler.pool.length - 1; index >= 0; index--) {
        var edge = _data_layer_edge_edge_pool__WEBPACK_IMPORTED_MODULE_1__.EdgePooler.pool[index];
        var head = edge.canvasPath.head;

        if ((0,_utils_math_utils__WEBPACK_IMPORTED_MODULE_2__.isPointInLine)(edge.startLocation, edge.endLocation, x, y)) {
          return {
            result: edge,
            type: 'line'
          };
        }

        if (canvasContext.isPointInPath(head, x, y)) {
          return {
            result: edge,
            type: 'head'
          };
        }
      }

      return null;
    }
    /**
     * Find the sleeper who is in dragging status
     * @returns 
     */

  }, {
    key: "findDraggedSleeper",
    value: function findDraggedSleeper() {
      var draggedSleeperList = [];

      var _iterator2 = _createForOfIteratorHelper(_data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_0__.SleeperPooler.pool),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var sleeper = _step2.value;

          if (sleeper.isDrag) {
            draggedSleeperList.push(sleeper);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return draggedSleeperList;
    }
    /**
     * Throttler maker for listener callback function
     * @param {Function} fn 
     * @param {Number} waitTime 
     * @returns 
     */

  }, {
    key: "throttlerMaker",
    value: function throttlerMaker(fn, waitTime) {
      var timer = null;
      return function () {
        var context = this;
        var args = arguments;

        if (!timer) {
          timer = setTimeout(function () {
            fn.apply(context, args);
            timer = null;
          }, waitTime);
        }
      };
    }
    /**
     * Find the closest sleeper given location
     * @param {*} location 
     * @returns 
     */

  }, {
    key: "findClosestSleeper",
    value: function findClosestSleeper(location) {
      var x = location.x,
          y = location.y;

      var _iterator3 = _createForOfIteratorHelper(_data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_0__.SleeperPooler.pool),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var sleeper = _step3.value;
          var sleeperX = sleeper.canvasInformation.x;
          var sleeperY = sleeper.canvasInformation.y;
          var distance = Math.sqrt(Math.pow(sleeperX - x, 2) + Math.pow(sleeperY - y, 2));

          if (distance < sleeper.canvasInformation.radius + _config__WEBPACK_IMPORTED_MODULE_3__.MinimalDistanceForLocate) {
            return sleeper;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return null;
    }
    /**
     * Find the closest anchor given location
     * @param {*} location 
     * @returns 
     */

  }, {
    key: "findClosestAnchor",
    value: function findClosestAnchor(location) {
      var locatedSleeper = this.findClosestSleeper(location);

      if (!locatedSleeper) {
        return null;
      }

      console.log('cloest Sleeper', locatedSleeper);
      var locatedSleeperX = locatedSleeper.canvasInformation.x;
      var locatedSleeperY = locatedSleeper.canvasInformation.y;
      var radius = locatedSleeper.canvasInformation.radius;
      var anchorLocationList = [{
        x: locatedSleeperX - radius,
        y: locatedSleeperY
      }, {
        x: locatedSleeperX + radius,
        y: locatedSleeperY
      }, {
        x: locatedSleeperX,
        y: locatedSleeperY - radius
      }, {
        x: locatedSleeperX,
        y: locatedSleeperY + radius
      }];
      var minDistance = Number.MAX_SAFE_INTEGER;
      var minLocation = null;

      for (var _i2 = 0, _anchorLocationList = anchorLocationList; _i2 < _anchorLocationList.length; _i2++) {
        var anchorLocation = _anchorLocationList[_i2];
        var x = anchorLocation.x,
            y = anchorLocation.y;
        var distance = Math.pow(location.x - x, 2) + Math.pow(location.y - y, 2);

        if (distance < minDistance) {
          minLocation = anchorLocation;
          minDistance = distance;
        }
      }

      return {
        closestLocation: minLocation,
        closestSleeper: locatedSleeper
      };
    }
  }]);

  return ActionUtils;
}();



/***/ }),

/***/ "./src/core/action-layer/config.js":
/*!*****************************************!*\
  !*** ./src/core/action-layer/config.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mouseActionMode": () => (/* binding */ mouseActionMode),
/* harmony export */   "MinimalDistanceForLocate": () => (/* binding */ MinimalDistanceForLocate)
/* harmony export */ });
var mouseActionMode = {
  downOnSleeper: 'downOnSleeper',
  downOnAnchor: 'downOnAnchor',
  downOnLine: 'downOnEgde',
  downOnHead: 'downOnHead',
  downOnBackground: 'downOnBackground',
  downOnNone: 'downOnNone',
  downOnText: 'downOnText'
};
var MinimalDistanceForLocate = 10;

/***/ }),

/***/ "./src/core/action-layer/keyboard/keyboard-action-controller.js":
/*!**********************************************************************!*\
  !*** ./src/core/action-layer/keyboard/keyboard-action-controller.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardActionController": () => (/* binding */ KeyboardActionController)
/* harmony export */ });
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global/event-name-config */ "./src/global/event-name-config.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/event */ "./src/utils/event.js");
/* harmony import */ var _undo_redo_undo_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../undo-redo/undo-decorator */ "./src/undo-redo/undo-decorator.js");
/* harmony import */ var _copy_paste_copy_paste_house__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../copy-paste/copy-paste-house */ "./src/copy-paste/copy-paste-house.js");
/* harmony import */ var _data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-layer/sleeper/sleeper */ "./src/core/data-layer/sleeper/sleeper.js");
/* harmony import */ var _data_layer_edge_edge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data-layer/edge/edge */ "./src/core/data-layer/edge/edge.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var KeyboardActionController = /*#__PURE__*/function () {
  function KeyboardActionController() {
    _classCallCheck(this, KeyboardActionController);

    this.initEventHandler();
  }
  /**
   * Regiser event handler
   */


  _createClass(KeyboardActionController, [{
    key: "initEventHandler",
    value: function initEventHandler() {
      // Extract event name
      var keyboardDelete = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.keyboardDelete,
          keyboardInput = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.keyboardInput,
          keyboardTextUndo = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.keyboardTextUndo,
          keyboardTextRedo = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.keyboardTextRedo,
          keyboardTextDelete = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.keyboardTextDelete,
          keyboardCopy = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.keyboardCopy,
          keyboardPaste = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.keyboardPaste; // Make EventName-Handler Map

      var eventNamesMap = {};
      eventNamesMap[keyboardDelete] = _undo_redo_undo_decorator__WEBPACK_IMPORTED_MODULE_2__.UndoDecorator.deleteItemsDecorator(this.keyboardDeleteController);
      eventNamesMap[keyboardPaste] = _undo_redo_undo_decorator__WEBPACK_IMPORTED_MODULE_2__.UndoDecorator.pasteDecorator(this.keyboardPasteController);
      eventNamesMap[keyboardCopy] = this.keyboardCopyController;
      eventNamesMap[keyboardInput] = this.keyboardInputController;
      eventNamesMap[keyboardTextUndo] = this.keyboardTextUndoController;
      eventNamesMap[keyboardTextRedo] = this.keyboardTextRedoController;
      eventNamesMap[keyboardTextDelete] = this.keyboardTextDeleteController; // Init event handler

      for (var eventName in eventNamesMap) {
        _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.addEventListener(eventName, eventNamesMap[eventName]);
      }
    }
    /**
     * Delete the selected edge or Sleeper
     * @param {Edge | Sleeper} clickObject 
     */

  }, {
    key: "keyboardDeleteController",
    value: function keyboardDeleteController(clickObject) {
      clickObject.deleteSelf(); // Trigger the painter event to redraw

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
    /**
     * Input text to the sleeper
     * @param {*} sleeper 
     * @param {*} inputKey string
     */

  }, {
    key: "keyboardInputController",
    value: function keyboardInputController(sleeper, inputKey) {
      var newContent = "".concat(sleeper.textInformation.content).concat(inputKey); // Update text

      sleeper.textInformation.content = newContent; // Update temp stack

      sleeper.textTempStack.text = newContent;
      console.log(sleeper.textInformation.content); // Trigger the painter event to redraw

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
    /**
     * Undo for sleeper in text mode
     * @param {*} sleeper 
     */

  }, {
    key: "keyboardTextUndoController",
    value: function keyboardTextUndoController(sleeper) {
      sleeper.textTempStack.undo();
      console.log(sleeper.textTempStack.text); // Update

      sleeper.textInformation.content = sleeper.textTempStack.text; // Trigger the painter event to redraw

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
    /**
     * Redo for sleeper in text mode
     * @param {*} sleeper 
     */

  }, {
    key: "keyboardTextRedoController",
    value: function keyboardTextRedoController(sleeper) {
      sleeper.textTempStack.redo(); // Update

      sleeper.textInformation.content = sleeper.textTempStack.text; // Trigger the painter event to redraw

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
    /**
     * Delete for sleeper in text mode
     * @param {*} sleeper 
     */

  }, {
    key: "keyboardTextDeleteController",
    value: function keyboardTextDeleteController(sleeper) {
      var stringLength = sleeper.textInformation.content.length;
      var newContent = sleeper.textInformation.content.substring(0, stringLength - 1); // Update text

      sleeper.textInformation.content = newContent; // Update temp stack

      sleeper.textTempStack.text = newContent; // Trigger the painter event to redraw

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
    /**
     * Copy a object selected
     * @param {sleeper | Edge} object 
     */

  }, {
    key: "keyboardCopyController",
    value: function keyboardCopyController(object) {
      _copy_paste_copy_paste_house__WEBPACK_IMPORTED_MODULE_3__.CopyPasteHouse["package"] = object;
    }
    /**
     * Paste the object store in copy-paste house
     */

  }, {
    key: "keyboardPasteController",
    value: function keyboardPasteController(copyedObjectList) {
      var _iterator = _createForOfIteratorHelper(copyedObjectList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          // TODO: Only support for sleeper now
          if (item instanceof _data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_4__.Sleeper) {
            // Remove non-related factors within sleeper
            item.prepareForPaste(); // Register event

            item.initEventHandler(); // Add Sleeper into sleeper pool

            item.recoverSelf();
          }
        } // Trigger the painter event to redraw

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
  }]);

  return KeyboardActionController;
}();



/***/ }),

/***/ "./src/core/action-layer/keyboard/keyboard-action.js":
/*!***********************************************************!*\
  !*** ./src/core/action-layer/keyboard/keyboard-action.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardAction": () => (/* binding */ KeyboardAction)
/* harmony export */ });
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/event */ "./src/utils/event.js");
/* harmony import */ var _data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-layer/sleeper/sleeper */ "./src/core/data-layer/sleeper/sleeper.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/event-name-config */ "./src/global/event-name-config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var KeyboardAction = /*#__PURE__*/function () {
  function KeyboardAction(canvas, mouseAction) {
    _classCallCheck(this, KeyboardAction);

    this.canvas = canvas;
    this.mouseAction = mouseAction;
    this.canvasContext = this.canvas.getContext('2d');
    this.initAction();
  }
  /**
   * Init all the mouse action listeners
   */


  _createClass(KeyboardAction, [{
    key: "initAction",
    value: function initAction() {
      var actionsMap = {
        'keydown': this.keyDown.bind(this)
      };

      var _loop = function _loop(action) {
        window.addEventListener(action, function (event) {
          actionsMap[action](event);
        });
      };

      for (var action in actionsMap) {
        _loop(action);
      }
    }
  }, {
    key: "keyDown",
    value: function keyDown(event) {
      var code = event.keyCode; // Check if mousedown element is sleeper and in text mode

      var isTextModeOn = this.mouseAction.mouseDownElement instanceof _data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_1__.Sleeper && this.mouseAction.mouseDownElement.isTextMode;

      switch (code) {
        case 8:
          // Press Delete
          isTextModeOn ? this._handlerTextDelete() : this._handlerDelete();
          break;

        case 90:
          // Press ctrl + z
          if ((event.ctrlKey || event.metaKey) && !event.shiftKey) {
            isTextModeOn ? _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.keyboardTextUndo, this.mouseAction.mouseDownElement) : _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.UndoRedoEventName.undo);
          } // Press ctrl + shfit + z


          if ((event.ctrlKey || event.metaKey) && event.shiftKey) {
            isTextModeOn ? _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.keyboardTextRedo, this.mouseAction.mouseDownElement) : _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.UndoRedoEventName.redo);
          }

          break;

        case 67:
          // Press ctrl + c
          if ((event.ctrlKey || event.metaKey) && !event.shiftKey) {
            isTextModeOn ? _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent('null') : _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.keyboardCopy, this.mouseAction.mouseDownElement);
          }

          break;

        case 86:
          // Press ctrl + v
          if ((event.ctrlKey || event.metaKey) && !event.shiftKey) {
            isTextModeOn ? _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent('null') : _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.keyboardPaste, this.mouseAction.mouseDownElement);
          }

          break;

        default:
          if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122) {
            isTextModeOn && this._handleNormal(event.key.toString());
          }

          break;
      }
    }
    /**
     * Handle text input for sleeper
     * @param {*} key 
     */

  }, {
    key: "_handleNormal",
    value: function _handleNormal(key) {
      _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.keyboardInput, this.mouseAction.mouseDownElement, key);
    }
    /**
     * Handler for object delete
     */

  }, {
    key: "_handlerDelete",
    value: function _handlerDelete() {
      // If click element exists and is active, then delete
      if (this.mouseAction.mouseDownElement && this.mouseAction.mouseDownElement.isActive) {
        _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.keyboardDelete, this.mouseAction.mouseDownElement);
      }
    }
    /**
     * Handler for text delete
     */

  }, {
    key: "_handlerTextDelete",
    value: function _handlerTextDelete() {
      _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.keyboardTextDelete, this.mouseAction.mouseDownElement);
    }
  }]);

  return KeyboardAction;
}();



/***/ }),

/***/ "./src/core/action-layer/mouse/deepClone.js":
/*!**************************************************!*\
  !*** ./src/core/action-layer/mouse/deepClone.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeepCloneInfo": () => (/* binding */ DeepCloneInfo)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/core/action-layer/config.js");
 // Clone the related information according to the type of class

function DeepCloneInfo(mode, target) {
  switch (mode) {
    case _config__WEBPACK_IMPORTED_MODULE_0__.mouseActionMode.downOnSleeper:
      return {
        x: target.canvasInformation.x,
        y: target.canvasInformation.y
      };

    case _config__WEBPACK_IMPORTED_MODULE_0__.mouseActionMode.downOnHead:
      return {
        x: target.endLocation.x,
        y: target.endLocation.y
      };

    default:
      break;
  }
}

/***/ }),

/***/ "./src/core/action-layer/mouse/mouse-action-controller.js":
/*!****************************************************************!*\
  !*** ./src/core/action-layer/mouse/mouse-action-controller.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseActionController": () => (/* binding */ MouseActionController)
/* harmony export */ });
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global/event-name-config */ "./src/global/event-name-config.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/event */ "./src/utils/event.js");
/* harmony import */ var _data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-layer/sleeper/sleeper-pool */ "./src/core/data-layer/sleeper/sleeper-pool.js");
/* harmony import */ var _data_layer_edge_edge_pool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-layer/edge/edge-pool */ "./src/core/data-layer/edge/edge-pool.js");
/* harmony import */ var _undo_redo_undo_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../undo-redo/undo-decorator */ "./src/undo-redo/undo-decorator.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var MouseActionController = /*#__PURE__*/function () {
  function MouseActionController() {
    _classCallCheck(this, MouseActionController);

    this.initEventHandler();
  }
  /**
   * Regiser event handler
   */


  _createClass(MouseActionController, [{
    key: "initEventHandler",
    value: function initEventHandler() {
      // Extract event name
      var mouseDownSleeper = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.mouseDownSleeper,
          mouseDownLine = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.mouseDownLine,
          mouseDownBackground = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.mouseDownBackground,
          mouseMoveSleeper = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.mouseMoveSleeper,
          mouseMoveHead = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.mouseMoveHead,
          mouseUpSleeper = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.mouseUpSleeper,
          mouseUpAnchor = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.mouseUpAnchor,
          mouseUpHead = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.mouseUpHead,
          mouseDoubleClick = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.mouseDoubleClick; // Make EventName-Handler Map

      var eventNamesMap = {};
      eventNamesMap[mouseDownSleeper] = this.mouseDownSleeperController;
      eventNamesMap[mouseDownLine] = this.mouseDownLineController;
      eventNamesMap[mouseDownBackground] = this.mouseDownBackgroundController;
      eventNamesMap[mouseMoveSleeper] = this.mouseMoveSleeperController;
      eventNamesMap[mouseMoveHead] = this.mouseMoveHeadController;
      eventNamesMap[mouseUpSleeper] = _undo_redo_undo_decorator__WEBPACK_IMPORTED_MODULE_4__.UndoDecorator.mouseUpSleeperDecorator(this.mouseUpSleeperController.bind(this));
      eventNamesMap[mouseUpAnchor] = _undo_redo_undo_decorator__WEBPACK_IMPORTED_MODULE_4__.UndoDecorator.mouseUpAnchorDecorator(this.mouseUpAnchorController.bind(this));
      eventNamesMap[mouseUpHead] = _undo_redo_undo_decorator__WEBPACK_IMPORTED_MODULE_4__.UndoDecorator.mouseUpHeadDecorator(this.mouseUpHeadController.bind(this));
      eventNamesMap[mouseDoubleClick] = this.mouseDoubleClickController; // Init event handler

      for (var eventName in eventNamesMap) {
        _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.addEventListener(eventName, eventNamesMap[eventName]);
      }
    }
    /**
     * Alter the sleeper properties 
     * @param {Sleeper} sleeper Sleeper object
     */

  }, {
    key: "mouseDownSleeperController",
    value: function mouseDownSleeperController(sleeper) {
      console.log('down', sleeper.textInformation.content); // Change active status and drag status

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.SleeperEventName.activeSomeSleeper, sleeper); // Trigger the painter event to redraw

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
    /**
     * Alter the edge properties
     * @param {*} edge 
     */

  }, {
    key: "mouseDownLineController",
    value: function mouseDownLineController(edge) {
      // Change active edge status 
      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.EdgeEventName.activeSomeEdge, edge); // Trigger the painter event to redraw

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
    /**
     * Clean all the active status
     */

  }, {
    key: "mouseDownBackgroundController",
    value: function mouseDownBackgroundController() {
      console.log('Down on background controller');

      var _iterator = _createForOfIteratorHelper(_data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_2__.SleeperPooler.pool),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var sleeper = _step.value;
          // Deactive all the sleeper
          sleeper.changeActiveStatus(null); // Back to normal mode

          sleeper.endTextMode();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(_data_layer_edge_edge_pool__WEBPACK_IMPORTED_MODULE_3__.EdgePooler.pool),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var edge = _step2.value;
          edge.isActive = false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      console.log(_data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_2__.SleeperPooler.pool); // Trigger the painter event to redraw

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
    /**
     * Change the sleeper canvas position
     * @param {*} dragSleeperList 
     * @param {*} relativeMoveDistance 
     */

  }, {
    key: "mouseMoveSleeperController",
    value: function mouseMoveSleeperController(dragSleeperList, relativeMoveDistance) {
      var _iterator3 = _createForOfIteratorHelper(dragSleeperList),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var sleeper = _step3.value;
          var originX = sleeper.canvasInformation.x;
          var originY = sleeper.canvasInformation.y;
          var newX = originX + relativeMoveDistance.x;
          var newY = originY + relativeMoveDistance.y;
          sleeper.changeCanvasInformation({
            x: newX,
            y: newY
          });

          var _iterator4 = _createForOfIteratorHelper(sleeper.edgeList),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var edge = _step4.value;
              edge.setLocation('start', {
                x: edge.startLocation.x + relativeMoveDistance.x,
                y: edge.startLocation.y + relativeMoveDistance.y
              });
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          var _iterator5 = _createForOfIteratorHelper(sleeper.incomingEdgeList),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _edge = _step5.value;

              _edge.setLocation('end', {
                x: _edge.endLocation.x + relativeMoveDistance.x,
                y: _edge.endLocation.y + relativeMoveDistance.y
              });
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        } // Trigger the painter event to redraw

      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
    /**
     * Change the edge canvas position
     * @param {Edge} dragEdge 
     * @param {*} relativeMoveDistance 
     */

  }, {
    key: "mouseMoveHeadController",
    value: function mouseMoveHeadController(dragEdge, currentPosition) {
      dragEdge.setLocation('end', currentPosition); // Delete the edge from end sleeper

      if (!!dragEdge.endSleeper) {
        dragEdge.endSleeper.removeIncomingEdge(dragEdge);
        dragEdge.changeEnd(null);
      } // Trigger the painter event to redraw


      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
    /**
     * Clean all the drag flag when mouse up
     * @param {*} dragSleeperList 
     */

  }, {
    key: "mouseUpSleeperController",
    value: function mouseUpSleeperController(dragSleeperList) {
      var _iterator6 = _createForOfIteratorHelper(dragSleeperList),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var sleeper = _step6.value;
          sleeper.switchDragStatus();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
    /**
     * Save the temporary edge into sleeper
     * @param {*} sleeperAndAnchor clicked anchor and its sleeper
     * @param {Edge} edge edge object
     */

  }, {
    key: "mouseUpAnchorController",
    value: function mouseUpAnchorController(sleeperAndAnchor, edge, closestObject) {
      var _sleeperAndAnchor = _slicedToArray(sleeperAndAnchor, 2),
          sleeper = _sleeperAndAnchor[0],
          sleeperAnchor = _sleeperAndAnchor[1];

      sleeper.addEdge(edge); // Add the end sleeper if cloestObject existed

      if (!!closestObject) {
        this.mouseUpHeadController(edge, closestObject);
      }
    }
    /**
     * Link to the cloest anchor if needed
     * @param {*} edge 
     * @param {*} closestObject 
     */

  }, {
    key: "mouseUpHeadController",
    value: function mouseUpHeadController(edge, closestObject) {
      var closestLocation = closestObject.closestLocation,
          closestSleeper = closestObject.closestSleeper; // Set incoming edge for current sleeper

      closestSleeper.addIncomingEdge(edge); // Set edge location

      edge.setLocation('end', closestLocation); // Set edge end sleeper

      edge.changeEnd(closestSleeper); // Set edge start sleeper's child

      edge.startSleeper.addChild(closestSleeper); // Trigger the painter event to redraw

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
    /**
     * @param {Sleeper} sleeper
     * Start text mode when doulbe click on the sleeper
     */

  }, {
    key: "mouseDoubleClickController",
    value: function mouseDoubleClickController(sleeper) {
      // Call the starting text mode function of that sleeper
      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.SleeperEventName.activeSomeSleeperTextMode, sleeper); // Trigger the painter event to redraw

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
  }]);

  return MouseActionController;
}();



/***/ }),

/***/ "./src/core/action-layer/mouse/mouse-action.js":
/*!*****************************************************!*\
  !*** ./src/core/action-layer/mouse/mouse-action.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseAction": () => (/* binding */ MouseAction)
/* harmony export */ });
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/event */ "./src/utils/event.js");
/* harmony import */ var _deepClone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deepClone */ "./src/core/action-layer/mouse/deepClone.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/event-name-config */ "./src/global/event-name-config.js");
/* harmony import */ var _undo_redo_operation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../undo-redo/operation */ "./src/undo-redo/operation.js");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-utils */ "./src/core/action-layer/action-utils.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/core/action-layer/config.js");
/* harmony import */ var _data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data-layer/sleeper/sleeper */ "./src/core/data-layer/sleeper/sleeper.js");
/* harmony import */ var _data_layer_edge_edge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data-layer/edge/edge */ "./src/core/data-layer/edge/edge.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var MouseAction = /*#__PURE__*/function () {
  function MouseAction(canvas) {
    _classCallCheck(this, MouseAction);

    _defineProperty(this, "switchTextMode", void 0);

    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext('2d');
    this.mousePositionX = null;
    this.mousePositionY = null;
    this.actionMode = _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnNone;
    this.mouseDownElement = null; // Save temporary variable 

    this.temporaryEdge = null; // Copy for decorator

    this.temporaryCopy = null;
    this.initAction();
  }

  _createClass(MouseAction, [{
    key: "initAction",
    value:
    /**
     * Init all the mouse action listeners
     */
    function initAction() {
      var _this = this;

      var actionsMap = {
        'mousedown': this.handleMouseDown.bind(this),
        'mousemove': _action_utils__WEBPACK_IMPORTED_MODULE_4__.ActionUtils.throttlerMaker(this.handleMouseMove.bind(this), 1000 / 60),
        'mouseup': this.handleNMouseUp.bind(this),
        'dblclick': this.handleMouseDoubleClick.bind(this),
        'contextmenu': this.handleMousePreventRightClick.bind(this)
      };

      var _loop = function _loop(action) {
        _this.canvas.addEventListener(action, function (event) {
          actionsMap[action](event);
        });
      };

      for (var action in actionsMap) {
        _loop(action);
      }
    }
  }, {
    key: "setMousePosition",
    value: function setMousePosition(x, y) {
      this.mousePositionX = x;
      this.mousePositionY = y;
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      var location = {
        x: event.offsetX,
        y: event.offsetY
      }; // Update mouse position when click

      this.setMousePosition(location.x, location.y); // Find located object

      var locatedObject = _action_utils__WEBPACK_IMPORTED_MODULE_4__.ActionUtils.findLocatedObject(this.canvas, location);
      console.log('located object', locatedObject); // If right click

      if (event.button == 2) {
        // If right click
        var type = null;
        var result = null;

        if (locatedObject) {
          type = locatedObject.type;
          result = locatedObject.result;
        }

        _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.mouseRightClick, type, result, {
          x: event.offsetX,
          y: event.offsetY
        });
        return;
      } // If left click


      if (!!locatedObject) {
        var _type = locatedObject.type,
            _result = locatedObject.result;

        switch (_type) {
          case 'line':
            _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.mouseDownLine, _result);
            this.actionMode = _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnLine;
            this.mouseDownElement = _result;
            break;

          case 'head':
            this.actionMode = _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnHead;
            this.mouseDownElement = _result;
            break;

          case 'anchor':
            this.actionMode = _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnAnchor;
            this.mouseDownElement = _result;
            break;

          case 'sleeper':
            _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.mouseDownSleeper, _result);
            this.actionMode = _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnSleeper;
            this.mouseDownElement = _result;
            break;
        } // A certain copy of mouseDownElement for info from original node


        this.temporaryCopy = (0,_deepClone__WEBPACK_IMPORTED_MODULE_1__.DeepCloneInfo)(this.actionMode, this.mouseDownElement);
        return;
      } // Down on background


      this.actionMode = _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnBackground;
      _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.mouseDownBackground, null);
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      switch (this.actionMode) {
        case _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnNone:
          this._handlerHoverMove.call(this, event);

          break;

        case _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnSleeper:
          this._handlerDragSleeperMove.call(this, event);

          break;

        case _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnAnchor:
          this._handlerDragAnchorMove.call(this, event);

          break;

        case _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnBackground:
          this._handlerDragBackgroundMove.call(this, event);

          break;

        case _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnHead:
          this._handlerDragHeadMove.call(this, event);

          break;
      }
    }
  }, {
    key: "_handlerHoverMove",
    value: function _handlerHoverMove(event) {
      var location = {
        x: event.offsetX,
        y: event.offsetY
      }; // Find located object

      var locatedObject = _action_utils__WEBPACK_IMPORTED_MODULE_4__.ActionUtils.findLocatedObject(this.canvas, location);

      if (!!locatedObject) {
        var type = locatedObject.type;

        switch (type) {
          case 'anchor':
            this.canvas.style.cursor = 'crosshair';
            break;

          case 'sleeper':
            this.canvas.style.cursor = 'pointer';
            break;

          case 'line':
            console.log('In line');
            this.canvas.style.cursor = 'pointer';
            break;

          case 'head':
            console.log('In Head');
            this.canvas.style.cursor = 'all-scroll';
            break;

          default:
            break;
        }

        return;
      }

      this.canvas.style.cursor = 'default';
    }
  }, {
    key: "_handlerDragSleeperMove",
    value: function _handlerDragSleeperMove(event) {
      var dragSleeperList = _action_utils__WEBPACK_IMPORTED_MODULE_4__.ActionUtils.findDraggedSleeper(); // No node is dragged

      if (dragSleeperList.length === 0) {
        return;
      } // Calculate relative move distance


      var relativeMoveDistance = {
        x: event.offsetX - this.mousePositionX,
        y: event.offsetY - this.mousePositionY
      }; // Save current mouse posistion

      this.setMousePosition(event.offsetX, event.offsetY); // Trigger the action controller

      _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.mouseMoveSleeper, dragSleeperList, relativeMoveDistance);
    }
  }, {
    key: "_handlerDragAnchorMove",
    value: function _handlerDragAnchorMove(event) {
      if (!this.temporaryEdge) {
        var _this$mouseDownElemen = _slicedToArray(this.mouseDownElement, 2),
            sleeper = _this$mouseDownElemen[0],
            sleeperAnchor = _this$mouseDownElemen[1];

        var startLoaction = sleeperAnchor.location; // Create the temporary egde object

        this.temporaryEdge = new _data_layer_edge_edge__WEBPACK_IMPORTED_MODULE_7__.Edge();
        this.temporaryEdge.changeStart(sleeper);
        this.temporaryEdge.setLocation('start', startLoaction);
      } // Set the end location


      var endLocation = {
        x: event.offsetX,
        y: event.offsetY
      };
      this.temporaryEdge.setLocation('end', endLocation); // Save current mouse posistion

      this.setMousePosition(event.offsetX, event.offsetY); // Trigger the painter event to redraw

      _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.PainterEventName.repaint);
    }
  }, {
    key: "_handlerDragHeadMove",
    value: function _handlerDragHeadMove(event) {
      // Calculate relative move distance
      var currentPosistion = {
        x: event.offsetX,
        y: event.offsetY
      };
      _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.mouseMoveHead, this.mouseDownElement, currentPosistion);
    }
  }, {
    key: "_handlerDragBackgroundMove",
    value: function _handlerDragBackgroundMove(event) {// TODO: Create selection box
    }
  }, {
    key: "handleNMouseUp",
    value: function handleNMouseUp(event) {
      switch (this.actionMode) {
        case _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnSleeper:
          var dragSleeperList = _action_utils__WEBPACK_IMPORTED_MODULE_4__.ActionUtils.findDraggedSleeper();
          console.log('mouse up', this.mouseDownElement.isDrag);
          _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.mouseUpSleeper, dragSleeperList, this.temporaryCopy);
          break;

        case _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnAnchor:
          var closestObjectAnchor = _action_utils__WEBPACK_IMPORTED_MODULE_4__.ActionUtils.findClosestAnchor({
            x: event.offsetX,
            y: event.offsetY
          });
          _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.mouseUpAnchor, this.mouseDownElement, this.temporaryEdge, closestObjectAnchor);
          this.temporaryEdge = null;
          break;

        case _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnHead:
          var closestObjectHead = _action_utils__WEBPACK_IMPORTED_MODULE_4__.ActionUtils.findClosestAnchor({
            x: event.offsetX,
            y: event.offsetY
          });

          if (!closestObjectHead) {
            // Send directly to UndoRedo stack (Note only head is speicial)
            _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.UndoRedoEventName.addMutation, {
              object: this.mouseDownElement,
              operation: _undo_redo_operation__WEBPACK_IMPORTED_MODULE_3__.SavedOperation.moveHead,
              params: {
                changeEndLocation: {
                  x: this.mouseDownElement.endLocation.x - this.temporaryCopy.x,
                  y: this.mouseDownElement.endLocation.y - this.temporaryCopy.y
                }
              }
            });
            break;
          }

          _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.mouseUpHead, this.mouseDownElement, closestObjectHead, this.temporaryCopy);
          break;

        case _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnBackground:
          break;
      } // Back to default status


      this.actionMode = _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnNone;
      this.temporaryCopy = null;
    }
    /**
     * Handle callback for double click operation
     * @param {*} event 
     */

  }, {
    key: "handleMouseDoubleClick",
    value: function handleMouseDoubleClick(event) {
      // Only Active when double click on sleeper
      if (!this.mouseDownElement instanceof _data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_6__.Sleeper) {
        return;
      } // Find if the location is on the that sleeper


      var isInThisSleeper = this.canvasContext.isPointInPath(this.mouseDownElement.canvasPath, event.offsetX, event.offsetY);

      if (!isInThisSleeper || this.mouseDownElement.isTextMode) {
        return;
      } // Change the mouse action mode


      this.actionMode = _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnText;
      _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.mouseDoubleClick, this.mouseDownElement);
    }
  }, {
    key: "handleMousePreventRightClick",
    value: function handleMousePreventRightClick(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }]);

  return MouseAction;
}();



/***/ }),

/***/ "./src/core/action-layer/panel/panel-operation-controller.js":
/*!*******************************************************************!*\
  !*** ./src/core/action-layer/panel/panel-operation-controller.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelOperationController": () => (/* binding */ PanelOperationController)
/* harmony export */ });
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global/event-name-config */ "./src/global/event-name-config.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/event */ "./src/utils/event.js");
/* harmony import */ var _data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-layer/sleeper/sleeper-pool */ "./src/core/data-layer/sleeper/sleeper-pool.js");
/* harmony import */ var _data_layer_sleeper_sleeper_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-layer/sleeper/sleeper-factory */ "./src/core/data-layer/sleeper/sleeper-factory.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var PanelOperationController = /*#__PURE__*/function () {
  function PanelOperationController() {
    _classCallCheck(this, PanelOperationController);

    this.initEventHandler();
  }
  /**
   * Regiser event handler
   */


  _createClass(PanelOperationController, [{
    key: "initEventHandler",
    value: function initEventHandler() {
      // Extract event name
      var changeAllProbability = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PanelOpearationControllerEventName.changeAllProbability,
          resetSleepers = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PanelOpearationControllerEventName.resetSleepers,
          panelCreateNode = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PanelOpearationControllerEventName.panelCreateNode,
          panelActive = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PanelOpearationControllerEventName.panelActive; // Make EventName-Handler Map

      var eventNamesMap = {};
      eventNamesMap[changeAllProbability] = this.probChangeController;
      eventNamesMap[panelCreateNode] = this.panelCreateNodeController;
      eventNamesMap[resetSleepers] = this.resetController;
      eventNamesMap[panelActive] = this.panelActiveController; // Init event handler

      for (var eventName in eventNamesMap) {
        _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.addEventListener(eventName, eventNamesMap[eventName]);
      }
    }
    /**
     * Change all the prob within each sleeper
     * @param {*} prob 
     */

  }, {
    key: "probChangeController",
    value: function probChangeController(prob) {
      // Change the factory
      _data_layer_sleeper_sleeper_factory__WEBPACK_IMPORTED_MODULE_3__.SleepersFactory.changeProbability(prob); // Change the sleeper

      var _iterator = _createForOfIteratorHelper(_data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_2__.SleeperPooler.pool),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var sleeper = _step.value;
          sleeper.probability = prob;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Reset all the sleeper status
     */

  }, {
    key: "resetController",
    value: function resetController() {
      var _iterator2 = _createForOfIteratorHelper(_data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_2__.SleeperPooler.pool),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var sleeper = _step2.value;

          if (sleeper.isSleeping !== sleeper.beforeProcessIsSleeping) {
            sleeper.changeSleepingStatus(sleeper.beforeProcessIsSleeping);
          }
        } // Trigger the painter event to redraw

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
    /**
     * Create sleeper from panel
     */

  }, {
    key: "panelCreateNodeController",
    value: function panelCreateNodeController(obj, position) {
      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PanelOpearationControllerEventName.createNode, 0, position);
    }
    /**
     * Acitve sleeper with context meanu
     */

  }, {
    key: "panelActiveController",
    value: function panelActiveController(sleeper) {
      // Active sleeper
      sleeper.changeSleepingStatus();
      sleeper.beforeProcessIsSleeping = sleeper.isSleeping; // Trigger the painter event to redraw

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
  }]);

  return PanelOperationController;
}();



/***/ }),

/***/ "./src/core/action-layer/waking-process/waking-process-controller.js":
/*!***************************************************************************!*\
  !*** ./src/core/action-layer/waking-process/waking-process-controller.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WakingProcessController": () => (/* binding */ WakingProcessController)
/* harmony export */ });
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/event */ "./src/utils/event.js");
/* harmony import */ var _data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-layer/sleeper/sleeper-pool */ "./src/core/data-layer/sleeper/sleeper-pool.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/event-name-config */ "./src/global/event-name-config.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var WakingProcessController = /*#__PURE__*/function () {
  function WakingProcessController() {
    _classCallCheck(this, WakingProcessController);

    this.roundNum = 0;
    this.frameTime = 700;
    this.isPause = true;
    this.refreshIntervalId = null;
    this.awakeQueue = null;
    this.initEventHandler();
  }
  /**
   * Regiser event handler
   */


  _createClass(WakingProcessController, [{
    key: "initEventHandler",
    value: function initEventHandler() {
      // Extract event name
      var startWakingProcess = _global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.PanelOpearationControllerEventName.startWakingProcess,
          pauseWakingProcess = _global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.PanelOpearationControllerEventName.pauseWakingProcess; // Make EventName-Handler Map

      var eventNamesMap = {};
      eventNamesMap[startWakingProcess] = this.startWakingProcessController.bind(this);
      eventNamesMap[pauseWakingProcess] = this.pauseWakingProcessController.bind(this); // Init event handler

      for (var eventName in eventNamesMap) {
        _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.addEventListener(eventName, eventNamesMap[eventName]);
      }
    }
  }, {
    key: "initAwakeQueue",
    value: function initAwakeQueue() {
      var tempQueue = [];

      var _iterator = _createForOfIteratorHelper(_data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_1__.SleeperPooler.pool),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var sleeper = _step.value;

          if (!sleeper.isSleeping) {
            tempQueue.push(sleeper);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.awakeQueue = tempQueue;
    }
  }, {
    key: "startWakingProcessController",
    value: function startWakingProcessController() {
      var _this = this;

      this.isPause = false;
      this.initAwakeQueue();
      console.log('This is awake queue1', this.awakeQueue); // Set interval

      this.refreshIntervalId = setInterval(function () {
        if (_this.awakeQueue.length > 0 && !_this.isPause) {
          // Go Next Round
          var _iterator2 = _createForOfIteratorHelper(_this.awakeQueue),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var sleeper = _step2.value;
              var newActivedSleeper = sleeper.activeChild();
              _this.awakeQueue = [].concat(_toConsumableArray(_this.awakeQueue), _toConsumableArray(newActivedSleeper));

              _this.awakeQueue.shift();
            } // Add round number

          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          _this.roundNum += 1; // Trigger the painter event to redraw

          _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.PainterEventName.repaint);
        } else {
          if (_this.awakeQueue.length == 0) {
            _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.PanelOpearationControllerEventName.endWakingProcess);
          } // Clear interval


          clearInterval(_this.refreshIntervalId);
        }
      }, this.frameTime);
    }
  }, {
    key: "pauseWakingProcessController",
    value: function pauseWakingProcessController() {
      this.isPause = true;
    }
  }]);

  return WakingProcessController;
}();



/***/ }),

/***/ "./src/core/data-layer/config.js":
/*!***************************************!*\
  !*** ./src/core/data-layer/config.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultEdgeWeight": () => (/* binding */ DefaultEdgeWeight),
/* harmony export */   "DefaultSleeperCanvasInformation": () => (/* binding */ DefaultSleeperCanvasInformation),
/* harmony export */   "DefaultAwakeCanvasInformation": () => (/* binding */ DefaultAwakeCanvasInformation)
/* harmony export */ });
var DefaultEdgeWeight = 0.5;
var DefaultSleeperCanvasInformation = {
  drawType: 'circle',
  x: 500,
  y: 500,
  radius: 30,
  startAngle: 0,
  endAngle: 2 * Math.PI,
  isFilled: true,
  fillColor: '#CAC9CC',
  isBorder: true,
  borderWith: 2,
  borderColor: '#000000',
  isAnchor: false,
  activeBorderColor: '#0068FF'
};
var DefaultAwakeCanvasInformation = {
  drawType: 'circle',
  x: 500,
  y: 500,
  radius: 30,
  startAngle: 0,
  endAngle: 2 * Math.PI,
  isFilled: true,
  fillColor: '#FFB1B2',
  isBorder: true,
  borderWith: 2,
  borderColor: '#000000',
  isAnchor: false,
  activeBorderColor: '#0068FF'
};

/***/ }),

/***/ "./src/core/data-layer/edge/edge-pool.js":
/*!***********************************************!*\
  !*** ./src/core/data-layer/edge/edge-pool.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdgePooler": () => (/* binding */ EdgePooler)
/* harmony export */ });
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global/event-name-config */ "./src/global/event-name-config.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/event */ "./src/utils/event.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var EdgePool = /*#__PURE__*/function () {
  function EdgePool() {
    _classCallCheck(this, EdgePool);

    if (!EdgePool.instance) {
      this.pool = [];
      this.instance = null;
      this.initEventsHandler();
      EdgePool.instance = this;
    }

    return EdgePool.instance;
  }
  /**
   * Register event handler related to Sleeper Pool
   */


  _createClass(EdgePool, [{
    key: "initEventsHandler",
    value: function initEventsHandler() {
      // Register adding sleeper
      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.addEventListener(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.EdgePoolEventName.addEdge, this.addEdge.bind(this));
    }
    /**
     * Add a sleeper object into edge pool
     * @param {Edge} sleeper 
     */

  }, {
    key: "addEdge",
    value: function addEdge(edge) {
      this.pool.push(edge);
    }
    /**
     * Remove an edge from edge pool
     * @param {*} edge 
     */

  }, {
    key: "removeEdge",
    value: function removeEdge(edge) {
      var locatedIndex = this.pool.findIndex(function (edgeInPool) {
        return edgeInPool === edge;
      });

      if (locatedIndex !== -1) {
        this.pool.splice(locatedIndex, 1);
      }
    }
  }], [{
    key: "getInstance",
    value:
    /**
     * Get singleton instance of SleeperPool
     * @returns {EdgePool}
     */
    function getInstance() {
      if (!this.instance) {
        this.instance = new EdgePool();
      }

      return this.instance;
    }
  }]);

  return EdgePool;
}();

var EdgePooler = EdgePool.getInstance();

/***/ }),

/***/ "./src/core/data-layer/edge/edge.js":
/*!******************************************!*\
  !*** ./src/core/data-layer/edge/edge.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Edge": () => (/* binding */ Edge)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/core/data-layer/config.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/event */ "./src/utils/event.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/event-name-config */ "./src/global/event-name-config.js");
/* harmony import */ var _sleeper_sleeper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sleeper/sleeper */ "./src/core/data-layer/sleeper/sleeper.js");
/* harmony import */ var _edge_pool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edge-pool */ "./src/core/data-layer/edge/edge-pool.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Edge = /*#__PURE__*/function () {
  function Edge() {
    _classCallCheck(this, Edge);

    // Data information
    this.startSleeper = null;
    this.endSleeper = null;
    this.weight = null; // Canvas path information

    this.startLocation = null;
    this.endLocation = null;
    this.canvasPath = null;
    this.isActive = false; // Init event

    this.initEventHandler(); // Trigger Event

    _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.EdgePoolEventName.addEdge, this);
  }

  _createClass(Edge, [{
    key: "initEventHandler",
    value: function initEventHandler() {
      // Extract event name
      var activeSomeEdge = _global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.EdgeEventName.activeSomeEdge;
      var eventNamesMap = {};
      eventNamesMap[activeSomeEdge] = this.activeSomeEdge.bind(this); // Register active some node handler

      for (var event in eventNamesMap) {
        _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.addEventListener(event, eventNamesMap[event]);
      }
    }
    /**
     * Get the start sleeper object
     * @returns {Sleeper} 
     */

  }, {
    key: "getStartSleeper",
    value: function getStartSleeper() {
      return this.startSleeper;
    }
    /**
     * Get the end sleeper object
     * @returns {Sleeper} 
     */

  }, {
    key: "getEndSleeper",
    value: function getEndSleeper() {
      return this.endSleeper;
    }
    /**
     * Get the weight on this edge
     * @returns {float}
     */

  }, {
    key: "getWeight",
    value: function getWeight() {
      return this.weight;
    }
    /**
     * Change the weight to the given value
     * @param {float} newWeight 
     */

  }, {
    key: "changeWeight",
    value: function changeWeight(newWeight) {
      this.weight = newWeight;
    }
    /**
     * Change the start sleeper
     * @param {*} newSleeper 
     */

  }, {
    key: "changeStart",
    value: function changeStart(newSleeper) {
      this.startSleeper = newSleeper;
    }
    /**
     * Change the end sleeper
     * @param {*} newSleeper 
     */

  }, {
    key: "changeEnd",
    value: function changeEnd(newSleeper) {
      this.endSleeper = newSleeper;
    }
    /**
     * Set start and end location
     */

  }, {
    key: "setLocation",
    value: function setLocation(type, location) {
      switch (type) {
        case 'start':
          this.startLocation = location;
          break;

        case 'end':
          this.endLocation = location;
          break;
      }
    }
    /**
     * Update the canvas path
     */

  }, {
    key: "setCanvasPath",
    value: function setCanvasPath(edgePath) {
      this.canvasPath = edgePath;
    }
  }, {
    key: "activeSomeEdge",
    value: function activeSomeEdge(edge) {
      if (edge === this && this.isActive === false) {
        this.isActive = true;
      } else if (this.isActive && edge !== this) {
        this.isActive = false;
      }
    }
  }, {
    key: "deleteSelf",
    value: function deleteSelf() {
      _edge_pool__WEBPACK_IMPORTED_MODULE_4__.EdgePooler.removeEdge(this); // Delete it in start sleeper

      this.startSleeper.removeEdge(this); // Delete it in end sleeper

      if (!!this.endSleeper) {
        this.endSleeper.removeIncomingEdge(this); // Delete the child of start sleeper

        this.startSleeper.removeChild(this.endSleeper);
      }
    }
  }, {
    key: "recoverSelf",
    value: function recoverSelf() {
      _edge_pool__WEBPACK_IMPORTED_MODULE_4__.EdgePooler.addEdge(this); // Recover it in start sleeper

      this.startSleeper.addEdge(this); // Recover it in end sleeper

      if (!!this.endSleeper) {
        this.endSleeper.addIncomingEdge(this); // add the child of start sleeper

        this.startSleeper.addChild(this.endSleeper);
      }
    }
  }]);

  return Edge;
}();



/***/ }),

/***/ "./src/core/data-layer/sleeper/sleeper-factory.js":
/*!********************************************************!*\
  !*** ./src/core/data-layer/sleeper/sleeper-factory.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepersFactory": () => (/* binding */ SleepersFactory)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/core/data-layer/config.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global/event-name-config */ "./src/global/event-name-config.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/event */ "./src/utils/event.js");
/* harmony import */ var _sleeper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sleeper */ "./src/core/data-layer/sleeper/sleeper.js");
/* harmony import */ var _sleeper_pool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sleeper-pool */ "./src/core/data-layer/sleeper/sleeper-pool.js");
/* harmony import */ var _undo_redo_undo_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../undo-redo/undo-decorator */ "./src/undo-redo/undo-decorator.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var SleeperFactory = /*#__PURE__*/function () {
  function SleeperFactory() {
    _classCallCheck(this, SleeperFactory);

    if (!SleeperFactory.instance) {
      // Initial params
      this.sleeperCanvasInformation = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_0__.DefaultSleeperCanvasInformation);
      this.awakeCanvasInformation = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_0__.DefaultAwakeCanvasInformation);
      this.activeInformation = _config__WEBPACK_IMPORTED_MODULE_0__.DefaultActiveInformation;
      this.prob = 0.0;
      this.initEventsHandler();
      SleeperFactory.instance = this;
    }

    return SleeperFactory.instance;
  }
  /**
   * Register event handler related to Sleeper Pool
   */


  _createClass(SleeperFactory, [{
    key: "mountCanvas",
    value:
    /**
     * Mount canvas when initialize, must mount before it can be used !!!
     * @param {*} canvasObj 
     */
    function mountCanvas(canvasObj) {
      this.canvas = canvasObj;
    }
  }, {
    key: "initEventsHandler",
    value: function initEventsHandler() {
      // Register for making new sleeper
      _utils_event__WEBPACK_IMPORTED_MODULE_2__.Eventer.addEventListener(_global_event_name_config__WEBPACK_IMPORTED_MODULE_1__.PanelOpearationControllerEventName.createNode, _undo_redo_undo_decorator__WEBPACK_IMPORTED_MODULE_5__.UndoDecorator.createSleeperDecorator(this.makeNewSleeper.bind(this))); // Register for changeing sleeper and awake sleepers' style

      _utils_event__WEBPACK_IMPORTED_MODULE_2__.Eventer.addEventListener(_global_event_name_config__WEBPACK_IMPORTED_MODULE_1__.PanelOpearationControllerEventName.changeNodeStyle, this.changeCanvasInformation.bind(this));
    }
    /**
     * Change sleeper and awake sleepers' canvas information
     * @param {Number} type 0 for sleeper, 1 for awake sleeper
     * @param {object} propertyObject object for change
     */

  }, {
    key: "changeCanvasInformation",
    value: function changeCanvasInformation(type, propertyObject) {
      var forChangedInformation = !!type ? this.awakeCanvasInformation : this.sleeperCanvasInformation; // Iterate the aleration and update

      for (var property in propertyObject) {
        var newValue = propertyObject[property];

        if (forChangedInformation[property] !== newValue) {
          forChangedInformation[property] = newValue;
        }
      } // Update canvas Information


      var _iterator = _createForOfIteratorHelper(_sleeper_pool__WEBPACK_IMPORTED_MODULE_4__.SleeperPooler.pool),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var sleeper = _step.value;

          // Only change corresponding nodes 
          if (!!type ^ sleeper.isSleeping) {
            sleeper.changeCanvasInformation({
              fillColor: forChangedInformation.fillColor,
              borderColor: forChangedInformation.borderColor
            });
          }
        } // Trigger the painter event to redraw

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      _utils_event__WEBPACK_IMPORTED_MODULE_2__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_1__.PainterEventName.repaint);
    }
    /**
     * Get canvas information
     * @param {int} type 0 for sleeper, 1 for awake sleeper
     */

  }, {
    key: "getCanvasInformation",
    value: function getCanvasInformation(type) {
      return !!type ? this.awakeCanvasInformation : this.sleeperCanvasInformation;
    }
    /**
     * Change config probability to awake other sleeper
     * @param {*} type 
     */

  }, {
    key: "changeProbability",
    value: function changeProbability(prob) {
      this.prob = prob;
    }
    /**
     * Make new sleeper to sleeper pool
     * @param {int} type 0 for sleeper, 1 for awake sleeper
     * @param {object} position location to make new sleeper
     */

  }, {
    key: "makeNewSleeper",
    value: function makeNewSleeper(type, position) {
      console.log('create'); // Get sleep status

      var status = !type; // Get canvas information

      var canvasInformation = !!type ? Object.assign({}, this.awakeCanvasInformation) : Object.assign({}, this.sleeperCanvasInformation); // Set posiition

      if (!!position) {
        canvasInformation.x = position.x;
        canvasInformation.y = position.y;
      } // Make new sleeper


      var tempSleeper = new _sleeper__WEBPACK_IMPORTED_MODULE_3__.Sleeper(status, canvasInformation);
      tempSleeper.probability = this.prob;
      return tempSleeper;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new SleeperFactory();
      }

      return this.instance;
    }
  }]);

  return SleeperFactory;
}();

var SleepersFactory = SleeperFactory.getInstance();

/***/ }),

/***/ "./src/core/data-layer/sleeper/sleeper-pool.js":
/*!*****************************************************!*\
  !*** ./src/core/data-layer/sleeper/sleeper-pool.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleeperPooler": () => (/* binding */ SleeperPooler)
/* harmony export */ });
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/event */ "./src/utils/event.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global/event-name-config */ "./src/global/event-name-config.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SleeperPool = /*#__PURE__*/function () {
  function SleeperPool() {
    _classCallCheck(this, SleeperPool);

    if (!SleeperPool.instance) {
      this.pool = [];
      this.instance = null;
      this.initEventsHandler();
      SleeperPool.instance = this;
    }

    return SleeperPool.instance;
  }
  /**
   * Register event handler related to Sleeper Pool
   */


  _createClass(SleeperPool, [{
    key: "initEventsHandler",
    value: function initEventsHandler() {
      // Register adding sleeper
      _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.addEventListener(_global_event_name_config__WEBPACK_IMPORTED_MODULE_1__.SleeperPoolEventName.addSleeper, this.addSleeper.bind(this)); // Register active sleeper

      _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.addEventListener(_global_event_name_config__WEBPACK_IMPORTED_MODULE_1__.SleeperEventName.activeSomeSleeper, this.reOrderSleeper.bind(this));
    }
    /**
     * Add a sleeper object into sleeper pool
     * @param {Sleeper} sleeper 
     */

  }, {
    key: "addSleeper",
    value: function addSleeper(sleeper) {
      this.pool.push(sleeper);
    }
    /**
     * Remove a given sleeper
     * @param {*} sleeper 
     */

  }, {
    key: "removeSleeper",
    value: function removeSleeper(sleeper) {
      var locatedIndex = this.pool.findIndex(function (sleeperInPool) {
        return sleeperInPool === sleeper;
      });

      if (locatedIndex !== -1) {
        this.pool.splice(locatedIndex, 1);
      }
    }
  }, {
    key: "reOrderSleeper",
    value: function reOrderSleeper(sleeper) {
      var sleeperIndex = this.pool.findIndex(function (sleeperInPool) {
        return sleeperInPool === sleeper;
      });
      this.pool.splice(sleeperIndex, 1);
      this.pool = [].concat(_toConsumableArray(this.pool), [sleeper]);
    }
  }], [{
    key: "getInstance",
    value:
    /**
     * Get singleton instance of SleeperPool
     * @returns {SleeperPool}
     */
    function getInstance() {
      if (!this.instance) {
        this.instance = new SleeperPool();
      }

      return this.instance;
    }
  }]);

  return SleeperPool;
}();

var SleeperPooler = SleeperPool.getInstance();

/***/ }),

/***/ "./src/core/data-layer/sleeper/sleeper-text.js":
/*!*****************************************************!*\
  !*** ./src/core/data-layer/sleeper/sleeper-text.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextSleeper": () => (/* binding */ TextSleeper)
/* harmony export */ });
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global/event-name-config */ "./src/global/event-name-config.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/event */ "./src/utils/event.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TextSleeperTempStack = /*#__PURE__*/function () {
  function TextSleeperTempStack(originText) {
    _classCallCheck(this, TextSleeperTempStack);

    this.pointer = 0;
    this.stackList = [];
    this.stackList.push(originText);
  }

  _createClass(TextSleeperTempStack, [{
    key: "text",
    get: function get() {
      return this.stackList[this.pointer];
    },
    set: function set(val) {
      this.pointer += 1;
      this.stackList.push(val);
    }
  }, {
    key: "undo",
    value: function undo() {
      if (this.pointer > 0) {
        this.pointer -= 1;
      }
    }
  }, {
    key: "redo",
    value: function redo() {
      if (this.pointer < this.stackList.length - 1) {
        this.pointer += 1;
      }
    }
  }]);

  return TextSleeperTempStack;
}();

var TextSleeper = /*#__PURE__*/function () {
  function TextSleeper() {
    _classCallCheck(this, TextSleeper);

    this.isTextMode = false; // Set for default text config

    this.textInformation = {
      size: 15,
      style: 'Times New Roman',
      content: 'a',
      color: 'black'
    };
    this.textareaInformation = {
      width: null,
      height: null
    };
    this.textareaBoundingBoxPath = null; // Reigister for text temp stack

    this.textTempStack = null;
    this.textInitEventHandler();
  }

  _createClass(TextSleeper, [{
    key: "textInitEventHandler",
    value: function textInitEventHandler() {
      // Extract event name
      var activeSomeSleeperTextMode = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.SleeperEventName.activeSomeSleeperTextMode;
      var eventNamesMap = {};
      eventNamesMap[activeSomeSleeperTextMode] = this.startTextMode.bind(this); // Register active some node handler

      for (var event in eventNamesMap) {
        _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.addEventListener(event, eventNamesMap[event]);
      }
    }
    /**
     * start the text mode
     */

  }, {
    key: "startTextMode",
    value: function startTextMode(sleeper) {
      if (sleeper == this && this.isTextMode === false) {
        this.isTextMode = true;
        this.textTempStack = new TextSleeperTempStack(this.textInformation.content);
      } else if (this.isTextMode && sleeper !== this) {
        this.isTextMode = false;
        this.textTempStack = null;
      }
    }
    /**
     * end the text mode
     */

  }, {
    key: "endTextMode",
    value: function endTextMode() {
      if (this.isTextMode) {
        this.isTextMode = false;
        this.textTempStack = null;
      }
    }
    /**
     * Draw the text 
     */

  }, {
    key: "drawText",
    value: function drawText() {
      // Get sleeper center
      var textPosition = {
        x: this.canvasInformation.x,
        y: this.canvasInformation.y
      }; // Get max width

      var textMaxWidth = this.canvasInformation.radius * Math.sqrt(3); // Draw the text

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.textWrite, {
        position: textPosition,
        maxWidth: textMaxWidth,
        information: this.textInformation
      }, this.setTextOrTextareaInformation.bind(this));
    }
    /**
     * Draw the textera
     */

  }, {
    key: "drawTextArea",
    value: function drawTextArea() {
      // Only draw it when textmode is on
      if (!this.isTextMode) {
        return;
      } // Get Sleeper center


      var sleeperPosition = {
        x: this.canvasInformation.x,
        y: this.canvasInformation.y
      }; // Draw the text

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.figureDraw, {
        sleeperPosition: sleeperPosition,
        textareaInformation: this.textareaInformation,
        drawType: 'textarea'
      }, this._setTextareaPath.bind(this));
    }
    /**
     * Set text / textarea information
     * @param {*} propertyObject 
     * @param {*} type 
     */

  }, {
    key: "setTextOrTextareaInformation",
    value: function setTextOrTextareaInformation(propertyObject, type) {
      if (type !== 'text' && type !== 'textarea') {
        Error('Wrong type when setting text / textare information');
      }

      var forSetObject = type == 'text' ? this.textInformation : this.textareaInformation; // Iterate the aleration and update

      for (var property in propertyObject) {
        var newValue = propertyObject[property];

        if (newValue && forSetObject[property] !== newValue) {
          forSetObject[property] = newValue;
        }
      } // Draw text area when 


      if (type == 'textarea') {
        this.drawTextArea();
      }
    }
    /**
     * Set bounding box path
     * @param {*} boundingBoxPath 
     */

  }, {
    key: "_setTextareaPath",
    value: function _setTextareaPath(boundingBoxPath) {
      this.textareaBoundingBoxPath = boundingBoxPath;
    }
  }]);

  return TextSleeper;
}();



/***/ }),

/***/ "./src/core/data-layer/sleeper/sleeper.js":
/*!************************************************!*\
  !*** ./src/core/data-layer/sleeper/sleeper.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sleeper": () => (/* binding */ Sleeper)
/* harmony export */ });
/* harmony import */ var _edge_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../edge/edge */ "./src/core/data-layer/edge/edge.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/event */ "./src/utils/event.js");
/* harmony import */ var _utils_math_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/math-utils */ "./src/utils/math-utils.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/core/data-layer/config.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/event-name-config */ "./src/global/event-name-config.js");
/* harmony import */ var _sleeper_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sleeper-text */ "./src/core/data-layer/sleeper/sleeper-text.js");
/* harmony import */ var _sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sleeper/sleeper-pool */ "./src/core/data-layer/sleeper/sleeper-pool.js");
/* harmony import */ var _sleeper_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sleeper-factory */ "./src/core/data-layer/sleeper/sleeper-factory.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var Sleeper = /*#__PURE__*/function (_TextSleeper) {
  _inherits(Sleeper, _TextSleeper);

  var _super = _createSuper(Sleeper);

  function Sleeper(status, canvasInformation) {
    var _this;

    _classCallCheck(this, Sleeper);

    _this = _super.call(this);
    _this.isSleeping = status;
    _this.beforeProcessIsSleeping = status;
    _this.isActive = false;
    _this.isDrag = false; // Probability to active others

    _this.probability = 0.0;
    _this.edgeList = [];
    _this.incomingEdgeList = [];
    _this.childrenList = [];
    _this.childEdgeMapList = [];
    _this.canvasInformation = canvasInformation || Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_3__.DefaultSleeperCanvasInformation);
    _this.canvasPath = null;
    _this.canvasAnchorsPathList = null;

    _this.initEventHandler(); // Trigger Event


    _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_4__.SleeperPoolEventName.addSleeper, _assertThisInitialized(_this));
    _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_4__.PainterEventName.figureDraw, _this.canvasInformation, _this.setCanvasPath.bind(_assertThisInitialized(_this))); // Draw the text

    _this.drawTextArea();

    _this.drawText();

    console.log('New Sleeper', _assertThisInitialized(_this));
    return _this;
  }

  _createClass(Sleeper, [{
    key: "initEventHandler",
    value: function initEventHandler() {
      // Extract event name
      var activeSomeSleeper = _global_event_name_config__WEBPACK_IMPORTED_MODULE_4__.SleeperEventName.activeSomeSleeper;
      var eventNamesMap = {};
      eventNamesMap[activeSomeSleeper] = this.changeActiveStatus.bind(this); // Register active some node handler

      for (var event in eventNamesMap) {
        _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.addEventListener(event, eventNamesMap[event]);
      }
    }
    /**
     * Add a child node for current sleeper
     * @param {Sleeper} childSleeper 
     */

  }, {
    key: "addChild",
    value: function addChild(childSleeper) {
      if (!childSleeper) {
        return new Error('Sleeper AddChild Error: No children is given!');
      }

      this.childrenList.push(childSleeper);
    }
    /**
     * Remove a given child sleeper 
     * @param {Sleeper} childSleeper 
     */

  }, {
    key: "removeChild",
    value: function removeChild(childSleeper) {
      var expectChildIndex = this.childrenList.findIndex(function (childObject) {
        return childObject === childSleeper;
      }); // Throw Error when not find the child

      if (expectChildIndex === -1 || expectChildIndex === undefined) {
        return new Error('Sleeper RemoveChild Error: Not find the child!');
      } // Remove the child


      this.childrenList.splice(expectChildIndex, 1);
    }
    /**
     * Add a edge for current sleeper 
     * @param {Edge} edge Edge object 
     */

  }, {
    key: "addEdge",
    value: function addEdge(edge) {
      if (!edge) {
        return new Error('Sleeper addEdge Error: No edge is given!');
      }

      this.edgeList.push(edge);
    }
    /**
     * Remove a edge for current sleeper 
     * @param {Edge} edge Edge object
     */

  }, {
    key: "removeEdge",
    value: function removeEdge(edge) {
      var expectEdgeIndex = this.edgeList.findIndex(function (edgeObject) {
        return edgeObject === edge;
      }); // Throw Error when not find the child

      if (expectEdgeIndex === -1 || expectEdgeIndex === undefined) {
        return new Error('Sleeper RemoveEdge Error: Not find the edge!');
      } // Remove the child


      this.edgeList.splice(expectEdgeIndex, 1);
    }
    /**
     * Add a incoming edge for current sleeper
     */

  }, {
    key: "addIncomingEdge",
    value: function addIncomingEdge(edge) {
      if (!edge) {
        return new Error('Sleeper addIncomingEdge Error: No edge is given!');
      }

      this.incomingEdgeList.push(edge);
    }
    /**
     * Remove a incoming edge for current sleeper 
     * @param {*} edge 
     * @returns 
     */

  }, {
    key: "removeIncomingEdge",
    value: function removeIncomingEdge(edge) {
      var expectEdgeIndex = this.incomingEdgeList.findIndex(function (edgeObject) {
        return edgeObject === edge;
      }); // Throw Error when not find the child

      if (expectEdgeIndex === -1 || expectEdgeIndex === undefined) {
        return new Error('Sleeper RemoveIncomingEdge Error: Not find the edge!');
      } // Remove the child


      this.incomingEdgeList.splice(expectEdgeIndex, 1);
    }
    /**
     * Change the current node status
     */

  }, {
    key: "changeSleepingStatus",
    value: function changeSleepingStatus(args) {
      // If not pass status then reverse current status
      if (args == undefined) {
        this.isSleeping = !this.isSleeping;
      } else {
        this.isSleeping = args;
      } // Change canvas information


      var _SleepersFactory$getC = _sleeper_factory__WEBPACK_IMPORTED_MODULE_7__.SleepersFactory.getCanvasInformation(!this.isSleeping),
          borderColor = _SleepersFactory$getC.borderColor,
          fillColor = _SleepersFactory$getC.fillColor;

      this.changeCanvasInformation({
        borderColor: borderColor,
        fillColor: fillColor
      });
    }
    /**
     * Try to active the children nodes
     */

  }, {
    key: "activeChild",
    value: function activeChild() {
      var tempActivedChildList = []; // Active the children in order

      this.childrenList.forEach(function (childObject) {
        // Only looking for sleeping node
        if (!childObject.isSleeping) {
          return;
        }

        var weight = childObject.probability; // Change the child status if active

        if ((0,_utils_math_utils__WEBPACK_IMPORTED_MODULE_2__.getActivityByWeight)(weight)) {
          childObject.changeSleepingStatus();
          tempActivedChildList.push(childObject);
        }
      });
      return tempActivedChildList;
    }
    /**
     * Update the canvas path
     * @param {*} canvasPathObject canvas path object
     */

  }, {
    key: "setCanvasPath",
    value: function setCanvasPath(args) {
      var _args = _slicedToArray(args, 2),
          canvasPathObject = _args[0],
          anchorsList = _args[1];

      this.canvasPath = canvasPathObject;

      if (!!anchorsList) {
        this.canvasAnchorsPathList = anchorsList;
      }
    }
    /**
     * Update sleeper active status
     * @param {*} sleeper the event recieved sleepr object, note that it may be other sleepers
     */

  }, {
    key: "changeActiveStatus",
    value: function changeActiveStatus(sleeper) {
      if (sleeper === this && this.isActive === false) {
        // Select this sleeper and active itself
        this.isActive = true;
        this.changeCanvasInformation({
          isAnchor: true
        });
      } else if (this.isActive && sleeper !== this) {
        // Select other sleeper then inactive itself
        this.isActive = false;
        this.isTextMode = false;
        this.changeCanvasInformation({
          isAnchor: false
        });
      } // Set drag flag


      if (sleeper === this) {
        this.switchDragStatus();
        console.log('isdrag', this.isDrag);
      }
    }
    /**
     * Update sleeper drag status
     */

  }, {
    key: "switchDragStatus",
    value: function switchDragStatus() {
      this.isDrag = !this.isDrag;
    }
    /**
     * Update Sleeper canvas information and trigger the painter event
     * @param {object} propertyObject
     */

  }, {
    key: "changeCanvasInformation",
    value: function changeCanvasInformation(propertyObject) {
      // Iterate the aleration and update
      for (var property in propertyObject) {
        var newValue = propertyObject[property];

        if (this.canvasInformation[property] !== newValue) {
          this.canvasInformation[property] = newValue;
        }
      }
    }
    /**
     * Delete non-related factor within this sleeper for paste
     */

  }, {
    key: "prepareForPaste",
    value: function prepareForPaste() {
      // TODO: May need to change the position of it
      // Remove its edges and in-out sleeper
      this.edgeList = [];
      this.incomingEdgeList = [];
      this.childrenList = [];
      this.childEdgeMapList = []; // Change status

      this.isActive = true;
      this.isDrag = false;
    }
    /**
     * Delete itself 
     */

  }, {
    key: "deleteSelf",
    value: function deleteSelf() {
      _sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_6__.SleeperPooler.removeSleeper(this);
    }
    /**
     * Recover itself
     */

  }, {
    key: "recoverSelf",
    value: function recoverSelf() {
      _sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_6__.SleeperPooler.addSleeper(this);
    }
  }]);

  return Sleeper;
}(_sleeper_text__WEBPACK_IMPORTED_MODULE_5__.TextSleeper);



/***/ }),

/***/ "./src/core/view-layer/canvas.js":
/*!***************************************!*\
  !*** ./src/core/view-layer/canvas.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Canvas": () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var _action_layer_mouse_mouse_action_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-layer/mouse/mouse-action-controller */ "./src/core/action-layer/mouse/mouse-action-controller.js");
/* harmony import */ var _action_layer_mouse_mouse_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-layer/mouse/mouse-action */ "./src/core/action-layer/mouse/mouse-action.js");
/* harmony import */ var _action_layer_keyboard_keyboard_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-layer/keyboard/keyboard-action */ "./src/core/action-layer/keyboard/keyboard-action.js");
/* harmony import */ var _action_layer_keyboard_keyboard_action_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-layer/keyboard/keyboard-action-controller */ "./src/core/action-layer/keyboard/keyboard-action-controller.js");
/* harmony import */ var _global_global_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/global-config */ "./src/global/global-config.js");
/* harmony import */ var _painter_painter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./painter/painter */ "./src/core/view-layer/painter/painter.js");
/* harmony import */ var _undo_redo_undo_redo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../undo-redo/undo-redo */ "./src/undo-redo/undo-redo.js");
/* harmony import */ var _data_layer_sleeper_sleeper_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data-layer/sleeper/sleeper-factory */ "./src/core/data-layer/sleeper/sleeper-factory.js");
/* harmony import */ var _action_layer_panel_panel_operation_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../action-layer/panel/panel-operation-controller */ "./src/core/action-layer/panel/panel-operation-controller.js");
/* harmony import */ var _action_layer_waking_process_waking_process_controller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../action-layer/waking-process/waking-process-controller */ "./src/core/action-layer/waking-process/waking-process-controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












var Canvas = /*#__PURE__*/function () {
  function Canvas() {
    _classCallCheck(this, Canvas);

    if (!Canvas.instance) {
      this.init();
      Canvas.instance = this;
    }

    return Canvas.instance;
  }
  /**
   * Init canvas instance
   */


  _createClass(Canvas, [{
    key: "init",
    value: function init() {
      this.initContext();
      this.initPainter();
      this.initActionRelated();
      this.initUndoRedoStack();
      this.initSleeperFactory();
    }
    /**
     * Init canvas context
     */

  }, {
    key: "initContext",
    value: function initContext() {
      this.canvas = document.getElementById(_global_global_config__WEBPACK_IMPORTED_MODULE_4__.GlobalConfig.canvasId);
      this.canvas.width = window.innerWidth - _global_global_config__WEBPACK_IMPORTED_MODULE_4__.GlobalConfig.pandelWidth;
      this.canvas.height = window.innerHeight - _global_global_config__WEBPACK_IMPORTED_MODULE_4__.GlobalConfig.headerHeight;
    }
    /**
     * Init canvas painter
     */

  }, {
    key: "initPainter",
    value: function initPainter() {
      this.painter = new _painter_painter__WEBPACK_IMPORTED_MODULE_5__.Painter(this.canvas);
    }
    /**
     * Init canvas action related
     */

  }, {
    key: "initActionRelated",
    value: function initActionRelated() {
      this.mouseActionController = new _action_layer_mouse_mouse_action_controller__WEBPACK_IMPORTED_MODULE_0__.MouseActionController();
      this.mouseAction = new _action_layer_mouse_mouse_action__WEBPACK_IMPORTED_MODULE_1__.MouseAction(this.canvas);
      this.keyboardActionController = new _action_layer_keyboard_keyboard_action_controller__WEBPACK_IMPORTED_MODULE_3__.KeyboardActionController();
      this.keyboardAction = new _action_layer_keyboard_keyboard_action__WEBPACK_IMPORTED_MODULE_2__.KeyboardAction(this.canvas, this.mouseAction);
      this.panelOperationController = new _action_layer_panel_panel_operation_controller__WEBPACK_IMPORTED_MODULE_8__.PanelOperationController();
      this.wakingProcessController = new _action_layer_waking_process_waking_process_controller__WEBPACK_IMPORTED_MODULE_9__.WakingProcessController();
    }
    /**
     * Init UndoRedoStack
     */

  }, {
    key: "initUndoRedoStack",
    value: function initUndoRedoStack() {
      _undo_redo_undo_redo__WEBPACK_IMPORTED_MODULE_6__.UndoRedo.getInstance();
    }
    /**
     * Init sleeper factory
     */

  }, {
    key: "initSleeperFactory",
    value: function initSleeperFactory() {
      _data_layer_sleeper_sleeper_factory__WEBPACK_IMPORTED_MODULE_7__.SleepersFactory.mountCanvas(this);
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new Canvas();
      }

      return this.instance;
    }
  }]);

  return Canvas;
}();



/***/ }),

/***/ "./src/core/view-layer/painter/figure/config.js":
/*!******************************************************!*\
  !*** ./src/core/view-layer/painter/figure/config.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeafultAnchorSetting": () => (/* binding */ DeafultAnchorSetting),
/* harmony export */   "DeafultArrowSetting": () => (/* binding */ DeafultArrowSetting),
/* harmony export */   "ActiveArrowSetting": () => (/* binding */ ActiveArrowSetting),
/* harmony export */   "DeafaultBoundingBoxSetting": () => (/* binding */ DeafaultBoundingBoxSetting)
/* harmony export */ });
var DeafultAnchorSetting = {
  lineWidth: 2,
  lineColor: 'black',
  anchorRadius: 4
};
var DeafultArrowSetting = {
  headLength: 10,
  lineWidth: 2,
  lineColor: 'black'
};
var ActiveArrowSetting = {
  lineWidth: 3,
  lineColor: '#0068FF'
};
var DeafaultBoundingBoxSetting = {
  lineWidth: 2,
  lineColor: '#3366FF'
};

/***/ }),

/***/ "./src/core/view-layer/painter/figure/painter.js":
/*!*******************************************************!*\
  !*** ./src/core/view-layer/painter/figure/painter.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FigurePainter": () => (/* binding */ FigurePainter)
/* harmony export */ });
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/event */ "./src/utils/event.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global/event-name-config */ "./src/global/event-name-config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/core/view-layer/painter/figure/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var FigurePainter = /*#__PURE__*/function () {
  function FigurePainter(canvas, canvasContext) {
    _classCallCheck(this, FigurePainter);

    this.canvas = canvas;
    this.canvasContext = canvasContext;
    this.drawMap = {
      'circle': this.drawCircle.bind(this),
      'arrow': this.drawArrow.bind(this),
      'textarea': this.drawTextarea.bind(this)
    };
    this.initEventHandler();
  }
  /**
   * Register event handler related to Painter
   */


  _createClass(FigurePainter, [{
    key: "initEventHandler",
    value: function initEventHandler() {
      _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.addEventListener(_global_event_name_config__WEBPACK_IMPORTED_MODULE_1__.PainterEventName.figureDraw, this.draw.bind(this));
    }
    /**
     * Draw the correspond images given related information
     * @param {*} params 
     * @returns {*} canvas path
     */

  }, {
    key: "draw",
    value: function draw(params, setPathCallback) {
      var drawType = params.drawType; // Raise the error if the shape not included 

      if (!(drawType in this.drawMap)) {
        return Error('Figure Draw Error: Given type not found!');
      } // Draw the correspond shape and set the path to the sleeper


      setPathCallback(this.drawMap[drawType](params));
    }
    /**
     * Draw cirle on canvas
     * @param {*} params 
     * @returns 
     */

  }, {
    key: "drawCircle",
    value: function drawCircle(params) {
      // Extract the drawing parameters
      var x = params.x,
          y = params.y,
          radius = params.radius,
          startAngle = params.startAngle,
          endAngle = params.endAngle,
          isFilled = params.isFilled,
          isBorder = params.isBorder,
          borderWith = params.borderWith,
          borderColor = params.borderColor,
          isAnchor = params.isAnchor,
          activeBorderColor = params.activeBorderColor; // Draw the circle

      var circle = new Path2D();
      circle.arc(x, y, radius, startAngle, endAngle); // Fill the circle

      var fillColor = params['fillColor'];

      if (isFilled && fillColor) {
        this.canvasContext.fillStyle = fillColor;
        this.canvasContext.fill(circle);
      } // Draw the border


      if (!!(isBorder && borderWith && borderColor)) {
        this.canvasContext.lineWidth = borderWith;

        if (isAnchor) {
          this.canvasContext.strokeStyle = activeBorderColor;
        } else {
          this.canvasContext.strokeStyle = borderColor;
        }

        this.canvasContext.stroke(circle);
      } // Draw the anchor


      var anchorsPathList = [];

      if (isAnchor) {
        // Set stroke style
        this.canvasContext.lineWidth = _config__WEBPACK_IMPORTED_MODULE_2__.DeafultAnchorSetting.lineWidth;
        var anchorPositionList = [{
          x: x + radius,
          y: y
        }, {
          x: x - radius,
          y: y
        }, {
          x: x,
          y: y + radius
        }, {
          x: x,
          y: y - radius
        }];

        for (var _i = 0, _anchorPositionList = anchorPositionList; _i < _anchorPositionList.length; _i++) {
          var anchorPosition = _anchorPositionList[_i];
          this.canvasContext.strokeStyle = _config__WEBPACK_IMPORTED_MODULE_2__.DeafultAnchorSetting.lineColor;
          var _x = anchorPosition.x,
              _y = anchorPosition.y;
          var anchorPath = new Path2D();
          anchorPath.arc(_x, _y, _config__WEBPACK_IMPORTED_MODULE_2__.DeafultAnchorSetting.anchorRadius, startAngle, endAngle);
          this.canvasContext.stroke(anchorPath);
          this.canvasContext.fillStyle = 'white';
          this.canvasContext.fill(anchorPath);
          anchorsPathList.push({
            anchorPath: anchorPath,
            location: {
              x: _x,
              y: _y
            }
          });
        }
      }

      return [circle, anchorsPathList];
    }
    /**
     * Draw arrow on canvas
     * @param {*} params 
     */

  }, {
    key: "drawArrow",
    value: function drawArrow(params) {
      var startLocation = params.startLocation,
          endLocation = params.endLocation,
          isActive = params.isActive; // If only one location provided, then set the other the same

      if (!startLocation) {
        startLocation = endLocation;
      } else if (!endLocation) {
        endLocation = startLocation;
      }

      var angle = Math.atan2(endLocation.y - startLocation.y, endLocation.x - startLocation.x); // Set stroke style

      this.canvasContext.strokeStyle = isActive ? _config__WEBPACK_IMPORTED_MODULE_2__.ActiveArrowSetting.lineColor : _config__WEBPACK_IMPORTED_MODULE_2__.DeafultArrowSetting.lineColor;
      this.canvasContext.lineWidth = isActive ? _config__WEBPACK_IMPORTED_MODULE_2__.ActiveArrowSetting.lineWidth : _config__WEBPACK_IMPORTED_MODULE_2__.DeafultArrowSetting.lineWidth;
      var line = new Path2D();
      var head = new Path2D(); // Draw the line 

      line.moveTo(startLocation.x, startLocation.y);
      line.lineTo(endLocation.x, endLocation.y);
      this.canvasContext.stroke(line); // Draw the head

      head.moveTo(endLocation.x - _config__WEBPACK_IMPORTED_MODULE_2__.DeafultArrowSetting.headLength * Math.cos(angle - Math.PI / 6), endLocation.y - _config__WEBPACK_IMPORTED_MODULE_2__.DeafultArrowSetting.headLength * Math.sin(angle - Math.PI / 6));
      head.lineTo(endLocation.x, endLocation.y);
      head.lineTo(endLocation.x - _config__WEBPACK_IMPORTED_MODULE_2__.DeafultArrowSetting.headLength * Math.cos(angle + Math.PI / 6), endLocation.y - _config__WEBPACK_IMPORTED_MODULE_2__.DeafultArrowSetting.headLength * Math.sin(angle + Math.PI / 6));
      this.canvasContext.stroke(head);
      return {
        line: line,
        head: head
      };
    }
    /**
     * Draw the textarea
     * @param {*} params 
     */

  }, {
    key: "drawTextarea",
    value: function drawTextarea(params) {
      var sleeperPosition = params.sleeperPosition,
          textareaInformation = params.textareaInformation;
      var boundingBoxPath = new Path2D();
      boundingBoxPath.rect(sleeperPosition.x - textareaInformation.width / 2, sleeperPosition.y - textareaInformation.height / 2, textareaInformation.width, textareaInformation.height);
      this.canvasContext.lineWidth = _config__WEBPACK_IMPORTED_MODULE_2__.DeafaultBoundingBoxSetting.lineWidth;
      this.canvasContext.strokeStyle = _config__WEBPACK_IMPORTED_MODULE_2__.DeafaultBoundingBoxSetting.lineColor;
      this.canvasContext.stroke(boundingBoxPath);
      return boundingBoxPath;
    }
  }]);

  return FigurePainter;
}();



/***/ }),

/***/ "./src/core/view-layer/painter/painter.js":
/*!************************************************!*\
  !*** ./src/core/view-layer/painter/painter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Painter": () => (/* binding */ Painter)
/* harmony export */ });
/* harmony import */ var _figure_painter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figure/painter */ "./src/core/view-layer/painter/figure/painter.js");
/* harmony import */ var _text_painter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text/painter */ "./src/core/view-layer/painter/text/painter.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/event */ "./src/utils/event.js");
/* harmony import */ var _data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-layer/sleeper/sleeper-pool */ "./src/core/data-layer/sleeper/sleeper-pool.js");
/* harmony import */ var _data_layer_edge_edge_pool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-layer/edge/edge-pool */ "./src/core/data-layer/edge/edge-pool.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/event-name-config */ "./src/global/event-name-config.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Painter = /*#__PURE__*/function () {
  function Painter(canvas) {
    _classCallCheck(this, Painter);

    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext('2d'); // Init different painter

    this.initPainter(); // Init eventer handler

    this.initEventHandler();
  }
  /**
   * Register event handler related to Painter
   */


  _createClass(Painter, [{
    key: "initEventHandler",
    value: function initEventHandler() {
      _utils_event__WEBPACK_IMPORTED_MODULE_2__.Eventer.addEventListener(_global_event_name_config__WEBPACK_IMPORTED_MODULE_5__.PainterEventName.repaint, this.repaint.bind(this));
    }
  }, {
    key: "initPainter",
    value: function initPainter() {
      this.figure = new _figure_painter__WEBPACK_IMPORTED_MODULE_0__.FigurePainter(this.canvas, this.canvasContext);
      this.text = new _text_painter__WEBPACK_IMPORTED_MODULE_1__.TextPainter(this.canvas, this.canvasContext);
    }
    /**
     * Repaint all canvas object
     */

  }, {
    key: "repaint",
    value: function repaint() {
      // Clean the canvas
      this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height); // Iterate to draw the sleeper

      var _iterator = _createForOfIteratorHelper(_data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_3__.SleeperPooler.pool),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var sleeper = _step.value;
          // TODO: Make it as a function of sleeper
          _utils_event__WEBPACK_IMPORTED_MODULE_2__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_5__.PainterEventName.figureDraw, sleeper.canvasInformation, sleeper.setCanvasPath.bind(sleeper)); // Rewrite the text

          sleeper.drawText();
        } // Iterate to draw the edge

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(_data_layer_edge_edge_pool__WEBPACK_IMPORTED_MODULE_4__.EdgePooler.pool),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var edge = _step2.value;
          _utils_event__WEBPACK_IMPORTED_MODULE_2__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_5__.PainterEventName.figureDraw, {
            drawType: 'arrow',
            startLocation: edge.startLocation,
            endLocation: edge.endLocation,
            isActive: edge.isActive
          }, edge.setCanvasPath.bind(edge));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return Painter;
}();



/***/ }),

/***/ "./src/core/view-layer/painter/text/painter.js":
/*!*****************************************************!*\
  !*** ./src/core/view-layer/painter/text/painter.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextPainter": () => (/* binding */ TextPainter)
/* harmony export */ });
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/event */ "./src/utils/event.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global/event-name-config */ "./src/global/event-name-config.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TextPainter = /*#__PURE__*/function () {
  function TextPainter(canvas, canvasContext) {
    _classCallCheck(this, TextPainter);

    this.canvas = canvas;
    this.canvasContext = canvasContext;
    this.initEventHandler();
  }
  /**
   * Register event handler related to Painter
   */


  _createClass(TextPainter, [{
    key: "initEventHandler",
    value: function initEventHandler() {
      _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.addEventListener(_global_event_name_config__WEBPACK_IMPORTED_MODULE_1__.PainterEventName.textWrite, this.write.bind(this));
    }
    /**
     * Write the text follow the params given
     * @param {*} params 
     * @param {*} setPathCallback 
     */

  }, {
    key: "write",
    value: function write(params, setTextareaCallback) {
      // Parse configurations
      var position = params.position,
          maxWidth = params.maxWidth,
          information = params.information; // Get size

      var size = information.size || '12';
      size += 'px';
      this.canvasContext.font = "".concat(size, " ").concat(information.style); // Prepare writing text params

      this.canvasContext.fillStyle = information.color;

      var fillInfo = this._getFillList(position, information.content, maxWidth);

      var fillList = fillInfo.fillList,
          textareaInformation = fillInfo.textareaInformation; // Set callback to draw the textarea first

      setTextareaCallback(textareaInformation, 'textarea'); // Write text

      var _iterator = _createForOfIteratorHelper(fillList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var text = _step.value;
          this.canvasContext.fillText(text[0], text[1], text[2]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Get fill list for single / multiple lines
     * @param {*} position sleeper center
     * @param {*} content text content
     * @param {*} maxWidth predefined maximal width
     * @returns filling list and textarea information
     */

  }, {
    key: "_getFillList",
    value: function _getFillList(position, content, maxWidth) {
      var metrics = this.canvasContext.measureText(content);
      var fillList = [];

      if (metrics.width < maxWidth) {
        // Get text location information
        var x = position.x - metrics.width / 2;
        var y = position.y + (metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent) / 2; // Get textarea location information

        var textareaInformation = {
          width: maxWidth,
          height: metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
        };
        fillList.push([content, x, y]);
        return {
          fillList: fillList,
          textareaInformation: textareaInformation
        };
      } // TODO: For multiple lines


      return fillList;
    }
  }]);

  return TextPainter;
}();



/***/ }),

/***/ "./src/global/event-name-config.js":
/*!*****************************************!*\
  !*** ./src/global/event-name-config.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleeperEventName": () => (/* binding */ SleeperEventName),
/* harmony export */   "EdgeEventName": () => (/* binding */ EdgeEventName),
/* harmony export */   "SleeperPoolEventName": () => (/* binding */ SleeperPoolEventName),
/* harmony export */   "EdgePoolEventName": () => (/* binding */ EdgePoolEventName),
/* harmony export */   "PainterEventName": () => (/* binding */ PainterEventName),
/* harmony export */   "ActionControllerEventName": () => (/* binding */ ActionControllerEventName),
/* harmony export */   "PanelOpearationControllerEventName": () => (/* binding */ PanelOpearationControllerEventName),
/* harmony export */   "UndoRedoEventName": () => (/* binding */ UndoRedoEventName)
/* harmony export */ });
var SleeperEventName = {
  activeSomeSleeper: 'activeSomeSleeper',
  activeSomeSleeperTextMode: 'activeSomeSleeperTextMode'
};
var EdgeEventName = {
  activeSomeEdge: 'activeSomeEdge'
};
var SleeperPoolEventName = {
  addSleeper: 'addSleeper'
};
var EdgePoolEventName = {
  addEdge: 'addEdge'
};
var PainterEventName = {
  figureDraw: 'figureDraw',
  textWrite: 'textWrite',
  repaint: 'repaint'
};
var ActionControllerEventName = {
  mouseDownSleeper: 'mouseDownSleeper',
  mouseDownLine: 'mouseDownLine',
  mouseDownBackground: 'mouseDownBackground',
  mouseMoveSleeper: 'mouseMove',
  mouseMoveAnchor: 'mouseMoveAnchor',
  mouseMoveHead: 'mouseMoveHead',
  mouseUpSleeper: 'mouseUpSleeper',
  mouseUpAnchor: 'mouseUpAnchor',
  mouseUpHead: 'mouseUpHead',
  mouseDoubleClick: 'mouseDoubleClick',
  mouseRightClick: 'mouseRightClick',
  keyboardDelete: 'keyboardDelete',
  keyboardCopy: 'keyboardCopy',
  keyboardPaste: 'keyboardPaste',
  keyboardTextDelete: 'keyboardTextDelete',
  keyboardInput: 'keyboardInput',
  keyboardTextRedo: 'keyboardTextRedo',
  keyboardTextUndo: 'keyboardTextUndo'
};
var PanelOpearationControllerEventName = {
  closeColorPicker: 'closeColorPicker',
  createNode: 'createNode',
  panelCreateNode: 'panelCreateNode',
  changeNodeStyle: 'changeNodeStyle',
  changeAllProbability: 'changeAllProbability',
  startWakingProcess: 'startWakingProcess',
  pauseWakingProcess: 'pauseWakingProcess',
  endWakingProcess: 'endWakingProcess',
  resetSleepers: 'resetSleepers',
  panelActive: 'panelActive'
};
var UndoRedoEventName = {
  addMutation: 'addMutation',
  undo: 'undo',
  redo: 'redo'
};

/***/ }),

/***/ "./src/global/global-config.js":
/*!*************************************!*\
  !*** ./src/global/global-config.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalConfig": () => (/* binding */ GlobalConfig)
/* harmony export */ });
var GlobalConfig = {
  canvasId: 'myCanvas',
  headerHeight: 66,
  pandelWidth: 300
};

/***/ }),

/***/ "./src/undo-redo/operation.js":
/*!************************************!*\
  !*** ./src/undo-redo/operation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedOperation": () => (/* binding */ SavedOperation)
/* harmony export */ });
var SavedOperation = {
  moveSleeper: 'moveSleeper',
  addEdgeFromAnchor: 'addEdgeFromAnchor',
  moveHead: 'moveHead',
  delete: 'delete',
  paste: 'paste',
  createSleeper: 'createSleeper'
};

/***/ }),

/***/ "./src/undo-redo/redo-controller.js":
/*!******************************************!*\
  !*** ./src/undo-redo/redo-controller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "redoController": () => (/* binding */ redoController)
/* harmony export */ });
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation */ "./src/undo-redo/operation.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/event-name-config */ "./src/global/event-name-config.js");
/* harmony import */ var _core_data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data-layer/sleeper/sleeper */ "./src/core/data-layer/sleeper/sleeper.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/**
 * Redo controller to actually deal with the redoing the tasks
 * @param {*} task 
 */

function redoController(task) {
  var object = task.object,
      params = task.params,
      operation = task.operation;

  switch (operation) {
    case _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.moveSleeper:
      redoMoveSleeper(object, params);
      break;

    case _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.addEdgeFromAnchor:
      redoMoveAnchor(object, params);
      break;

    case _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.moveHead:
      redoMoveHead(object, params);
      break;

    case _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation["delete"]:
      redoDeleteItems(object);
      break;

    case _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.paste:
      redoPaste(object);
      break;

    case _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.createSleeper:
      redoCreateSleeper(object);
      break;

    default:
      break;
  } // Trigger the painter event to redraw


  _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.PainterEventName.repaint);
}
/**
 * Redo move sleeper operation
 * @param {*} object Recieved current sleeper node
 * @param {*} params operation parameters
 */

function redoMoveSleeper(object, params) {
  var _object$canvasInforma = object.canvasInformation,
      x = _object$canvasInforma.x,
      y = _object$canvasInforma.y;
  var changeLocation = params.changeLocation;
  var recoverLocation = {
    x: x + changeLocation.x,
    y: y + changeLocation.y
  }; // Change sleeper canvas location

  object.changeCanvasInformation(recoverLocation); // Change the connected outcoming edges' location

  var _iterator = _createForOfIteratorHelper(object.edgeList),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var edge = _step.value;
      var edgeRecoverLocation = {
        x: edge.startLocation.x + changeLocation.x,
        y: edge.startLocation.y + changeLocation.y
      };
      edge.setLocation('start', edgeRecoverLocation);
    } // Change the incoming edges' location

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(object.incomingEdgeList),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _edge = _step2.value;
      var _edgeRecoverLocation = {
        x: _edge.endLocation.x + changeLocation.x,
        y: _edge.endLocation.y + changeLocation.y
      };

      _edge.setLocation('end', _edgeRecoverLocation);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
/**
 * Redo move anchor operation
 * @param {*} object Recieved edge object
 * @param {*} params the sleeper node where the edge start
 */


function redoMoveAnchor(object, params) {
  // Remove the edge created
  object.recoverSelf();
}
/**
 * Undo move head operation
 * @param {*} object 
 * @param {*} params 
 */


function redoMoveHead(object, params) {
  var changeEndLocation = params.changeEndLocation; // Recover egde end location

  var recoverLocation = {
    x: object.endLocation.x + changeEndLocation.x,
    y: object.endLocation.y + changeEndLocation.y
  };
  object.setLocation('end', recoverLocation); // Recover added end sleeper if needed

  if (!!params['addedEndSleeper']) {
    params['addedEndSleeper'].addIncomingEdge(object);
  }
}
/**
 * Redo delete the clicked object
 * @param {*} object Deleted object
 */


function redoDeleteItems(object) {
  object.deleteSelf();
}
/**
 * Redo paste the item
 */


function redoPaste(object) {
  var _iterator3 = _createForOfIteratorHelper(object),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;

      // TODO: Only support sleeper now
      if (item instanceof _core_data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_3__.Sleeper) {
        item.recoverSelf();
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}
/**
 * Redo create the sleeper
 * @param {*} object 
 */


function redoCreateSleeper(object) {
  object.recoverSelf();
}

/***/ }),

/***/ "./src/undo-redo/undo-controller.js":
/*!******************************************!*\
  !*** ./src/undo-redo/undo-controller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "undoController": () => (/* binding */ undoController)
/* harmony export */ });
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation */ "./src/undo-redo/operation.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/event-name-config */ "./src/global/event-name-config.js");
/* harmony import */ var _core_data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data-layer/sleeper/sleeper */ "./src/core/data-layer/sleeper/sleeper.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/**
 * Undo controller to actually deal with the undoing the tasks
 * @param {*} task 
 */

function undoController(task) {
  var object = task.object,
      params = task.params,
      operation = task.operation;

  switch (operation) {
    case _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.moveSleeper:
      undoMoveSleeper(object, params);
      break;

    case _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.addEdgeFromAnchor:
      undoMoveAnchor(object, params);
      break;

    case _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.moveHead:
      undoMoveHead(object, params);
      break;

    case _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation["delete"]:
      undoDeleteItems(object);
      break;

    case _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.paste:
      undoPaste(object);
      break;

    case _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.createSleeper:
      undoCreateSleeper(object);
      break;

    default:
      break;
  } // Trigger the painter event to redraw


  _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.PainterEventName.repaint);
}
/**
 * Undo move sleeper operation
 * @param {*} object Recieved current sleeper node
 * @param {*} params operation parameters
 */

function undoMoveSleeper(object, params) {
  var _object$canvasInforma = object.canvasInformation,
      x = _object$canvasInforma.x,
      y = _object$canvasInforma.y;
  var changeLocation = params.changeLocation;
  var recoverLocation = {
    x: x - changeLocation.x,
    y: y - changeLocation.y
  }; // Change sleeper canvas location

  object.changeCanvasInformation(recoverLocation); // Change the connected outcoming edges' location

  var _iterator = _createForOfIteratorHelper(object.edgeList),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var edge = _step.value;
      var edgeRecoverLocation = {
        x: edge.startLocation.x - changeLocation.x,
        y: edge.startLocation.y - changeLocation.y
      };
      edge.setLocation('start', edgeRecoverLocation);
    } // Change the incoming edges' location

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(object.incomingEdgeList),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _edge = _step2.value;
      var _edgeRecoverLocation = {
        x: _edge.endLocation.x - changeLocation.x,
        y: _edge.endLocation.y - changeLocation.y
      };

      _edge.setLocation('end', _edgeRecoverLocation);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
/**
 * Undo move anchor operation
 * @param {*} object Recieved edge object
 * @param {*} params the sleeper node where the edge start
 */


function undoMoveAnchor(object, params) {
  // Remove the edge created
  object.deleteSelf();
}
/**
 * Undo move head operation
 * @param {*} object 
 * @param {*} params 
 */


function undoMoveHead(object, params) {
  var changeEndLocation = params.changeEndLocation; // Recover egde end location

  var recoverLocation = {
    x: object.endLocation.x - changeEndLocation.x,
    y: object.endLocation.y - changeEndLocation.y
  };
  object.setLocation('end', recoverLocation); // Remove added end sleeper if needed

  if (!!params['addedEndSleeper']) {
    params['addedEndSleeper'].removeIncomingEdge(object);
  }
}
/**
 * Undo delete the clicked object
 * @param {*} object Deleted object
 */


function undoDeleteItems(object) {
  object.recoverSelf();
}
/**
 * Undo Paste the item
 * @param {*} object Deleted object
 */


function undoPaste(object) {
  var _iterator3 = _createForOfIteratorHelper(object),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;

      // TODO: Only support sleeper now
      if (item instanceof _core_data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_3__.Sleeper) {
        item.deleteSelf();
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}
/**
 * Undo create sleeper
 * @param {*} object Deleted object
 */


function undoCreateSleeper(object) {
  object.deleteSelf();
}

/***/ }),

/***/ "./src/undo-redo/undo-decorator.js":
/*!*****************************************!*\
  !*** ./src/undo-redo/undo-decorator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UndoDecorator": () => (/* binding */ UndoDecorator)
/* harmony export */ });
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation */ "./src/undo-redo/operation.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/event-name-config */ "./src/global/event-name-config.js");
/* harmony import */ var _copy_paste_copy_paste_house__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../copy-paste/copy-paste-house */ "./src/copy-paste/copy-paste-house.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var UndoDecorator = /*#__PURE__*/function () {
  function UndoDecorator() {
    _classCallCheck(this, UndoDecorator);
  }

  _createClass(UndoDecorator, null, [{
    key: "mouseUpSleeperDecorator",
    value:
    /**
     * Decorator for mouse up from sleeper
     */
    function mouseUpSleeperDecorator(controllerFunction) {
      return function (dragSleeperList, originalInfo) {
        // TODO: Current Sleeper (Now no selection box)
        var currentSleeper = dragSleeperList[0]; // Find location change

        var changeLocation = {
          x: currentSleeper.canvasInformation.x - originalInfo.x,
          y: currentSleeper.canvasInformation.y - originalInfo.y
        };

        if (changeLocation.x !== 0 && changeLocation.y !== 0) {
          // Save to undo stack
          _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.UndoRedoEventName.addMutation, {
            object: currentSleeper,
            operation: _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.moveSleeper,
            params: {
              changeLocation: changeLocation
            }
          });
        } // Original controller


        controllerFunction(dragSleeperList);
      };
    }
    /**
     * Decorator for mouse up from anchor
     */

  }, {
    key: "mouseUpAnchorDecorator",
    value: function mouseUpAnchorDecorator(controllerFunction) {
      return function (sleeperAndAnchor, edge, closestObject) {
        // Save to undo stack
        _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.UndoRedoEventName.addMutation, {
          object: edge,
          operation: _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.addEdgeFromAnchor,
          params: {
            startSleeper: sleeperAndAnchor[0]
          }
        }); // Original controller 

        controllerFunction(sleeperAndAnchor, edge, closestObject);
      };
    }
    /**
     * Decorator for mouse up from head
     */

  }, {
    key: "mouseUpHeadDecorator",
    value: function mouseUpHeadDecorator(controllerFunction) {
      return function (edge, closestObject, originalLocation) {
        var closestLocation = closestObject.closestLocation,
            closestSleeper = closestObject.closestSleeper; // Add mutation 

        _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.UndoRedoEventName.addMutation, {
          object: edge,
          operation: _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.moveHead,
          params: {
            changeEndLocation: {
              x: closestLocation.x - originalLocation.x,
              y: closestLocation.y - originalLocation.y
            },
            addedEndSleeper: closestSleeper
          }
        }); // Original controller

        controllerFunction(edge, closestObject);
      };
    }
    /**
     * Decorator for delete items
     */

  }, {
    key: "deleteItemsDecorator",
    value: function deleteItemsDecorator(controllerFunction) {
      return function (clickObject) {
        // Add mutation
        _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.UndoRedoEventName.addMutation, {
          object: clickObject,
          operation: _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation["delete"],
          params: {}
        }); // Original controller

        controllerFunction(clickObject);
      };
    }
    /**
     * Decorator for paste items
     */

  }, {
    key: "pasteDecorator",
    value: function pasteDecorator(controllerFunction) {
      return function () {
        // Firstlu copy
        var clonedHouse = _copy_paste_copy_paste_house__WEBPACK_IMPORTED_MODULE_3__.CopyPasteHouse["package"]; // Add mutation

        _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.UndoRedoEventName.addMutation, {
          object: clonedHouse,
          operation: _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.paste,
          params: {}
        }); // Original controller

        controllerFunction(clonedHouse);
      };
    }
    /**
     * Decorator for create sleeper
     */

  }, {
    key: "createSleeperDecorator",
    value: function createSleeperDecorator(controllerFunction) {
      return function (type, position) {
        // Original controller
        var newSleeper = controllerFunction(type, position); // Add mutation

        _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.UndoRedoEventName.addMutation, {
          object: newSleeper,
          operation: _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.createSleeper,
          params: {}
        });
      };
    }
  }]);

  return UndoDecorator;
}();

/***/ }),

/***/ "./src/undo-redo/undo-redo.js":
/*!************************************!*\
  !*** ./src/undo-redo/undo-redo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UndoRedo": () => (/* binding */ UndoRedo)
/* harmony export */ });
/* harmony import */ var _undo_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./undo-controller */ "./src/undo-redo/undo-controller.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/event-name-config */ "./src/global/event-name-config.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.js");
/* harmony import */ var _redo_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redo-controller */ "./src/undo-redo/redo-controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var UndoRedo = /*#__PURE__*/function () {
  function UndoRedo() {
    _classCallCheck(this, UndoRedo);

    if (!UndoRedo.instance) {
      // Define the stack and the pointer
      this.stack = [];
      this.pointer = -1;
      this.instance = null;
      this.initEventHandler();
      UndoRedo.instance = this;
    }
  }
  /**
   * Add event name
   */


  _createClass(UndoRedo, [{
    key: "initEventHandler",
    value: function initEventHandler() {
      var undo = _global_event_name_config__WEBPACK_IMPORTED_MODULE_1__.UndoRedoEventName.undo,
          addMutation = _global_event_name_config__WEBPACK_IMPORTED_MODULE_1__.UndoRedoEventName.addMutation,
          redo = _global_event_name_config__WEBPACK_IMPORTED_MODULE_1__.UndoRedoEventName.redo;
      _utils_event__WEBPACK_IMPORTED_MODULE_2__.Eventer.addEventListener(addMutation, this.addMutationToStack.bind(this));
      _utils_event__WEBPACK_IMPORTED_MODULE_2__.Eventer.addEventListener(undo, this.undo.bind(this));
      _utils_event__WEBPACK_IMPORTED_MODULE_2__.Eventer.addEventListener(redo, this.redo.bind(this));
    }
    /**
     * Add mutation to undo stack
     * @param {*} mutation 
     */

  }, {
    key: "addMutationToStack",
    value: function addMutationToStack(mutation) {
      this.pointer += 1; // Break the stack order, ignore the operation after pointer

      if (this.pointer !== this.stack.length && this.pointer >= 0) {
        this.stack.splice(this.pointer);
        console.log(this.stack.length);
      }

      this.stack.push(mutation);
    }
    /**
     * Undo the operation
     */

  }, {
    key: "undo",
    value: function undo() {
      if (this.stack.length !== 0 || this.pointer !== -1) {
        var undoTask = this.stack[this.pointer];
        (0,_undo_controller__WEBPACK_IMPORTED_MODULE_0__.undoController)(undoTask);
        this.pointer -= 1;
      }
    }
    /**
     * Redo the operation
     */

  }, {
    key: "redo",
    value: function redo() {
      if (this.stack.length !== 0 && this.pointer !== this.stack.length - 1) {
        this.pointer += 1;
        var redoTask = this.stack[this.pointer];
        console.log(redoTask);
        (0,_redo_controller__WEBPACK_IMPORTED_MODULE_3__.redoController)(redoTask);
      }
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new UndoRedo();
      }

      return this.instance;
    }
  }]);

  return UndoRedo;
}();



/***/ }),

/***/ "./src/utils/event.js":
/*!****************************!*\
  !*** ./src/utils/event.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eventer": () => (/* binding */ Eventer)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Event = /*#__PURE__*/function () {
  function Event() {
    _classCallCheck(this, Event);

    if (!Event.instance) {
      this.eventDictionary = {};
      Event.instance = this; // Add to whole window

      window.Eventer = this;
    }

    return Event.instance;
  }
  /**
   * EventListener for adding event
   * @param {string} eventName 
   * @param {Function} callback 
   */


  _createClass(Event, [{
    key: "addEventListener",
    value: function addEventListener(eventName, callback) {
      // Find if eventName already exists
      if (!(eventName in this.eventDictionary)) {
        this.eventDictionary[eventName] = [];
      } // Push the callback function into list


      this.eventDictionary[eventName].push(callback);
    }
    /**
     * Remove the listener given a specific event and callback function
     * @param {string} eventName 
     * @param {Function | undefined} callback 
     * @returns 
     */

  }, {
    key: "removeEventListener",
    value: function removeEventListener(eventName, callback) {
      // Throw Error when not find the event
      if (!(eventName in this.eventDictionary)) {
        return new Error('Event Not Registered');
      } // Just remove the specific callback function if callback given


      if (!!callback) {
        var currentEventList = this.eventDictionary[eventName];
        var callbackIndex = currentEventList.findIndex(function (savedCallbackFunction) {
          return savedCallbackFunction === callback;
        }); // Raise error if callback function not found

        if (callbackIndex === -1 || callbackIndex === undefined) {
          return new Error('Callback function not found');
        } // Remove the callback function


        currentEventList.splice(callbackIndex, 1); // Remove this event if event list is empty 

        if (currentEventList.length === 0) {
          delete this.eventDictionary[eventName];
        }
      } else {
        // Directly delete this event
        delete this.eventDictionary[eventName];
      }
    }
    /**
     * Event disptacher, trigger the related event
     * @param {string} eventName 
     * @param  {...any} args 
     */

  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(eventName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Throw Error when not find the event
      if (!(eventName in this.eventDictionary)) {
        return new Error('Event Not Registered');
      } // Iterate for trigger


      this.eventDictionary[eventName].forEach(function (callback) {
        callback.apply(void 0, args);
      });
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new Event();
      }

      return this.instance;
    }
  }]);

  return Event;
}();

var Eventer = Event.getInstance();

/***/ }),

/***/ "./src/utils/math-utils.js":
/*!*********************************!*\
  !*** ./src/utils/math-utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getActivityByWeight": () => (/* binding */ getActivityByWeight),
/* harmony export */   "isPointInLine": () => (/* binding */ isPointInLine)
/* harmony export */ });
/**
 * Find if it is possible to be active
 * @param {float} weight 
 * @returns {bool}
 */
function getActivityByWeight(weight) {
  var sudoRandomVariable = Math.random();
  return sudoRandomVariable <= weight;
}
/**
 * Find if given point near the line
 * @param {*} lineStartLocation 
 * @param {*} lineEndLocation 
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */

function isPointInLine(lineStartLocation, lineEndLocation, x, y) {
  if (lineEndLocation.x > lineStartLocation.x && (x > lineEndLocation.x || x < lineStartLocation.x)) {
    return false;
  }

  if (lineEndLocation.x < lineStartLocation.x && (x < lineEndLocation.x || x > lineStartLocation.x)) {
    return false;
  } // Calculate the line 


  var slope = (lineEndLocation.y - lineStartLocation.y) / (lineEndLocation.x - lineStartLocation.x); // Find the arrow region

  var angle = Math.atan(slope);
  var xLength = 10 * 0.5 * Math.pow(3, 0.5) * Math.abs(Math.cos(angle));

  if (lineEndLocation.x > lineStartLocation.x && x > lineEndLocation.x - xLength) {
    return false;
  }

  if (lineEndLocation.x < lineStartLocation.x && x < lineEndLocation.x + xLength) {
    return false;
  }

  var intercept = lineStartLocation.y - slope * lineStartLocation.x; // Find the distance between line and point

  var distance = Math.abs(intercept + slope * x - y) / Math.sqrt(1 + Math.pow(slope, 2));
  return distance <= 5;
}

/***/ }),

/***/ "./node_modules/lodash.clonedeep/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.clonedeep/index.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./src/entry/testEntry.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_view_layer_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/view-layer/canvas */ "./src/core/view-layer/canvas.js");
/* harmony import */ var _core_data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data-layer/sleeper/sleeper */ "./src/core/data-layer/sleeper/sleeper.js");

 // Init Canvas

var myCanvas = _core_view_layer_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.getInstance(); // // Add a sleeper
// new Sleeper();
// new Sleeper(
//     false,
//     {
//         drawType: 'circle',
//         x: 600,
//         y: 600,
//         radius: 30,
//         startAngle: 0,
//         endAngle: 2 * Math.PI,
//         isFilled: true,
//         fillColor: '#FFCC33',
//     }
// );
// new Sleeper(
//     false,
//     {
//         drawType: 'circle',
//         x: 700,
//         y: 700,
//         radius: 30,
//         startAngle: 0,
//         endAngle: 2 * Math.PI,
//         isFilled: true,
//         fillColor: '#FFCC33',
//     }
// );
// new Sleeper(
//     false,
//     {
//         drawType: 'circle',
//         x: 500,
//         y: 600,
//         radius: 30,
//         startAngle: 0,
//         endAngle: 2 * Math.PI,
//         isFilled: true,
//         fillColor: '#FFCC33',
//     }
// );
// new Sleeper(
//     false,
//     {
//         drawType: 'circle',
//         x: 600,
//         y: 700,
//         radius: 30,
//         startAngle: 0,
//         endAngle: 2 * Math.PI,
//         isFilled: true,
//         fillColor: '#FFCC33',
//     }
// );
// new Sleeper(
//     false,
//     {
//         drawType: 'circle',
//         x: 700,
//         y: 800,
//         radius: 30,
//         startAngle: 0,
//         endAngle: 2 * Math.PI,
//         isFilled: true,
//         fillColor: '#FFCC33',
//     }
// );
// // Enable hot updating
// if (module.hot) {
//     module.hot.accept('../core/view-layer/canvas', function() {
//         return;
//     })
// }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O1VDbnREQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSkE7Q0FHQTs7QUFDQSxJQUFJOGIsUUFBUSxHQUFHekgsdUVBQUEsRUFBZixFQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3B5LXBhc3RlL2NvcHktcGFzdGUtaG91c2UuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvYWN0aW9uLXV0aWxzLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9rZXlib2FyZC9rZXlib2FyZC1hY3Rpb24tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9rZXlib2FyZC9rZXlib2FyZC1hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvbW91c2UvZGVlcENsb25lLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL21vdXNlL21vdXNlLWFjdGlvbi1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL21vdXNlL21vdXNlLWFjdGlvbi5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9wYW5lbC9wYW5lbC1vcGVyYXRpb24tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci93YWtpbmctcHJvY2Vzcy93YWtpbmctcHJvY2Vzcy1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvZGF0YS1sYXllci9jb25maWcuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9kYXRhLWxheWVyL2VkZ2UvZWRnZS1wb29sLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvZGF0YS1sYXllci9lZGdlL2VkZ2UuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci1mYWN0b3J5LmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItcG9vbC5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXRleHQuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL3ZpZXctbGF5ZXIvY2FudmFzLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvdmlldy1sYXllci9wYWludGVyL2ZpZ3VyZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS92aWV3LWxheWVyL3BhaW50ZXIvZmlndXJlL3BhaW50ZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS92aWV3LWxheWVyL3BhaW50ZXIvcGFpbnRlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL3ZpZXctbGF5ZXIvcGFpbnRlci90ZXh0L3BhaW50ZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2dsb2JhbC9nbG9iYWwtY29uZmlnLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3VuZG8tcmVkby9vcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdW5kby1yZWRvL3JlZG8tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy91bmRvLXJlZG8vdW5kby1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3VuZG8tcmVkby91bmRvLWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy91bmRvLXJlZG8vdW5kby1yZWRvLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3V0aWxzL2V2ZW50LmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3V0aWxzL21hdGgtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLmNsb25lZGVlcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9lbnRyeS90ZXN0RW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsb25lRGVlcCBmcm9tIFwibG9kYXNoLmNsb25lZGVlcFwiO1xuXG5jbGFzcyBDb3B5UGFzdGVIb3VzZSB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDb3B5UGFzdGVIb3VzZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ob3VzZSA9IFtdO1xuICAgICAgICBDb3B5UGFzdGVIb3VzZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldCBwYWNrYWdlKG9iaikge1xuICAgICAgICB0aGlzLmhvdXNlID0gW107XG5cbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIG9iaikge1xuICAgICAgICAgICAgICAgIHRoaXMuaG91c2UucHVzaChjbG9uZURlZXAoaXRlbSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ob3VzZS5wdXNoKGNsb25lRGVlcChvYmopKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgcGFja2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lRGVlcCh0aGlzLmhvdXNlKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IENvcHlQYXN0ZUhvdXNlIH07IiwiaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXBvb2wnO1xuaW1wb3J0IHsgRWRnZVBvb2xlciB9IGZyb20gJy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLXBvb2wnO1xuaW1wb3J0IHsgaXNQb2ludEluTGluZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGgtdXRpbHMnO1xuaW1wb3J0IHsgTWluaW1hbERpc3RhbmNlRm9yTG9jYXRlIH0gZnJvbSAnLi9jb25maWcnO1xuXG5jbGFzcyBBY3Rpb25VdGlscyB7XG4gICAgLyoqXG4gICAgICogRmluZCBtb3VzZSBsb2NhdGVkIG9iamVjdFxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmFzIFxuICAgICAqIEBwYXJhbSB7Kn0gbG9jYXRpb24gXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRMb2NhdGVkT2JqZWN0KGNhbnZhcywgbG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmluZEZ1bmN0aW9uc0xpc3QgPSBbXG4gICAgICAgICAgICBBY3Rpb25VdGlscy5maW5kTG9jYXRlZExpbmVPckhlYWQsXG4gICAgICAgICAgICBBY3Rpb25VdGlscy5maW5kTG9jYXRlZEFuY2hvcixcbiAgICAgICAgICAgIEFjdGlvblV0aWxzLmZpbmRMb2NhdGVkU2xlZXBlcixcbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGZpbmRGdW5jdGlvbiBvZiBmaW5kRnVuY3Rpb25zTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgZmluZFJlc3VsdCA9IGZpbmRGdW5jdGlvbihjYW52YXMsIGxvY2F0aW9uKTtcbiAgICAgICAgICAgIGlmICghIWZpbmRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluZFJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgc2xlZXBlciB3aGljaCBhdCB0aGUgbW91c2UgbG9jYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhcyBDYW52YXMgT2JqZWN0IFxuICAgICAqIEBwYXJhbSB7Kn0gbG9jYXRpb24gTW91c2UgbG9jYXRpb25cbiAgICAgKiBAcmV0dXJucyB7U2xlZXBlciB8IG51bGx9XG4gICAgICovXG4gICAgc3RhdGljIGZpbmRMb2NhdGVkU2xlZXBlcihjYW52YXMsIGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAvLyBJbm5lciBmdW5jdGlvbiB0byBjaGVjayBpZiBsb2NhdGlvbiBpbiBjaXJjbGVcbiAgICAgICAgY29uc3QgaXNMb2NhdGVkSW5DaXJjbGUgPSAoY2lyY2xlUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge3gsIHl9ID0gbG9jYXRpb247XG4gICAgICAgICAgICByZXR1cm4gY2FudmFzQ29udGV4dC5pc1BvaW50SW5QYXRoKGNpcmNsZVBhdGgsIHgsIHkpXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSGFuZGxlciBjaGVja2luZyBmdW5jdGlvbnMnIG1hcHMgXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSGFuZGxlck1hcHMgPSB7XG4gICAgICAgICAgICAnY2lyY2xlJzogaXNMb2NhdGVkSW5DaXJjbGUuYmluZCh0aGlzKSxcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEl0ZXJhdGUgcG9vbCB0byBmaW5kIGxvY2F0ZWQgcGF0aFxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IFNsZWVwZXJQb29sZXIucG9vbC5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICAgICAgICBjb25zdCBzbGVlcGVyID0gU2xlZXBlclBvb2xlci5wb29sW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNsZWVwZXJTdHlsZSA9IHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb247XG4gICAgICAgICAgICBjb25zdCBzbGVlcGVyQ2FudmFzUGF0aCA9IHNsZWVwZXIuY2FudmFzUGF0aDtcbiAgICAgICAgICAgIGNvbnN0IHsgZHJhd1R5cGUgfSA9IHNsZWVwZXJTdHlsZTtcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbkhhbmRsZXJNYXBzW2RyYXdUeXBlXShzbGVlcGVyQ2FudmFzUGF0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHNsZWVwZXIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzbGVlcGVyJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgYW5jaG9yIHdoaWNoIGF0IHRoZSBtb3VzZSBsb2NhdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmFzIENhbnZhcyBPYmplY3QgXG4gICAgICogQHBhcmFtIHsqfSBsb2NhdGlvbiBNb3VzZSBsb2NhdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kTG9jYXRlZEFuY2hvcihjYW52YXMsIGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3Qge3gsIHl9ID0gbG9jYXRpb247XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBTbGVlcGVyUG9vbGVyLnBvb2wubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICAgICAgY29uc3Qgc2xlZXBlciA9IFNsZWVwZXJQb29sZXIucG9vbFtpbmRleF07XG4gICAgICAgICAgICBpZiAoc2xlZXBlci5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2xlZXBlckFuY2hvciBvZiBzbGVlcGVyLmNhbnZhc0FuY2hvcnNQYXRoTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGFuY2hvclBhdGggfSA9IHNsZWVwZXJBbmNob3I7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXNDb250ZXh0LmlzUG9pbnRJblBhdGgoYW5jaG9yUGF0aCwgeCwgeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBbc2xlZXBlciwgc2xlZXBlckFuY2hvcl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FuY2hvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgZWRnZSB3aGljaCBhdCB0aGUgbW91c2UgbG9jYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhcyBcbiAgICAgKiBAcGFyYW0geyp9IGxvY2F0aW9uIFxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kTG9jYXRlZExpbmVPckhlYWQoY2FudmFzLCBsb2NhdGlvbikge1xuICAgICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IHt4LCB5fSA9IGxvY2F0aW9uO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IEVkZ2VQb29sZXIucG9vbC5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICAgICAgICBjb25zdCBlZGdlID0gRWRnZVBvb2xlci5wb29sW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHsgaGVhZCB9ID0gZWRnZS5jYW52YXNQYXRoO1xuICAgICAgICAgICAgaWYgKGlzUG9pbnRJbkxpbmUoZWRnZS5zdGFydExvY2F0aW9uLCBlZGdlLmVuZExvY2F0aW9uLCB4LCB5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogZWRnZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FudmFzQ29udGV4dC5pc1BvaW50SW5QYXRoKGhlYWQsIHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBlZGdlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGVhZCcsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBzbGVlcGVyIHdobyBpcyBpbiBkcmFnZ2luZyBzdGF0dXNcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZERyYWdnZWRTbGVlcGVyKCkge1xuICAgICAgICBjb25zdCBkcmFnZ2VkU2xlZXBlckxpc3QgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIGlmIChzbGVlcGVyLmlzRHJhZykge1xuICAgICAgICAgICAgICAgIGRyYWdnZWRTbGVlcGVyTGlzdC5wdXNoKHNsZWVwZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkcmFnZ2VkU2xlZXBlckxpc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhyb3R0bGVyIG1ha2VyIGZvciBsaXN0ZW5lciBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB3YWl0VGltZSBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgdGhyb3R0bGVyTWFrZXIoZm4sIHdhaXRUaW1lKSB7XG4gICAgICAgIGxldCB0aW1lciA9IG51bGw7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIGlmKCF0aW1lcikge1xuICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0sIHdhaXRUaW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgY2xvc2VzdCBzbGVlcGVyIGdpdmVuIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIHsqfSBsb2NhdGlvbiBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZENsb3Nlc3RTbGVlcGVyKGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IHt4LCB5fSA9IGxvY2F0aW9uO1xuICAgICAgICBmb3IoY29uc3Qgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsZWVwZXJYID0gc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi54O1xuICAgICAgICAgICAgY29uc3Qgc2xlZXBlclkgPSBzbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoc2xlZXBlclggLSB4KSoqMiArIChzbGVlcGVyWSAteSkqKjIpO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi5yYWRpdXMgKyBNaW5pbWFsRGlzdGFuY2VGb3JMb2NhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2xlZXBlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIGNsb3Nlc3QgYW5jaG9yIGdpdmVuIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIHsqfSBsb2NhdGlvbiBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZENsb3Nlc3RBbmNob3IobG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgbG9jYXRlZFNsZWVwZXIgPSB0aGlzLmZpbmRDbG9zZXN0U2xlZXBlcihsb2NhdGlvbik7XG4gICAgICAgIGlmICghbG9jYXRlZFNsZWVwZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2Nsb2VzdCBTbGVlcGVyJywgbG9jYXRlZFNsZWVwZXIpO1xuXG4gICAgICAgIGNvbnN0IGxvY2F0ZWRTbGVlcGVyWCA9IGxvY2F0ZWRTbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLng7XG4gICAgICAgIGNvbnN0IGxvY2F0ZWRTbGVlcGVyWSA9IGxvY2F0ZWRTbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnk7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IGxvY2F0ZWRTbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnJhZGl1cztcbiAgICAgICAgY29uc3QgYW5jaG9yTG9jYXRpb25MaXN0ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IGxvY2F0ZWRTbGVlcGVyWCAtIHJhZGl1cyxcbiAgICAgICAgICAgICAgICB5OiBsb2NhdGVkU2xlZXBlclksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IGxvY2F0ZWRTbGVlcGVyWCArIHJhZGl1cyxcbiAgICAgICAgICAgICAgICB5OiBsb2NhdGVkU2xlZXBlclksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IGxvY2F0ZWRTbGVlcGVyWCxcbiAgICAgICAgICAgICAgICB5OiBsb2NhdGVkU2xlZXBlclkgLSByYWRpdXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IGxvY2F0ZWRTbGVlcGVyWCxcbiAgICAgICAgICAgICAgICB5OiBsb2NhdGVkU2xlZXBlclkgKyByYWRpdXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIGxldCBtaW5EaXN0YW5jZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgICAgICBsZXQgbWluTG9jYXRpb24gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGFuY2hvckxvY2F0aW9uIG9mIGFuY2hvckxvY2F0aW9uTGlzdCkge1xuICAgICAgICAgICAgY29uc3Qge3gsIHl9ID0gYW5jaG9yTG9jYXRpb247XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IChsb2NhdGlvbi54IC0geCkqKjIgKyAobG9jYXRpb24ueSAtIHkpKioyO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgbWluRGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBtaW5Mb2NhdGlvbiA9IGFuY2hvckxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIG1pbkRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xvc2VzdExvY2F0aW9uOiBtaW5Mb2NhdGlvbixcbiAgICAgICAgICAgIGNsb3Nlc3RTbGVlcGVyOiBsb2NhdGVkU2xlZXBlcixcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEFjdGlvblV0aWxzIH07IiwiZXhwb3J0IGNvbnN0IG1vdXNlQWN0aW9uTW9kZSA9IHtcbiAgICBkb3duT25TbGVlcGVyOiAnZG93bk9uU2xlZXBlcicsXG4gICAgZG93bk9uQW5jaG9yOiAnZG93bk9uQW5jaG9yJyxcbiAgICBkb3duT25MaW5lOiAnZG93bk9uRWdkZScsXG4gICAgZG93bk9uSGVhZDogJ2Rvd25PbkhlYWQnLFxuICAgIGRvd25PbkJhY2tncm91bmQ6ICdkb3duT25CYWNrZ3JvdW5kJyxcbiAgICBkb3duT25Ob25lOiAnZG93bk9uTm9uZScsXG4gICAgZG93bk9uVGV4dDogJ2Rvd25PblRleHQnLFxufTtcblxuZXhwb3J0IGNvbnN0IE1pbmltYWxEaXN0YW5jZUZvckxvY2F0ZSA9IDEwOyIsImltcG9ydCB7IFxuICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBVbmRvRGVjb3JhdG9yIH0gZnJvbSAnLi4vLi4vLi4vdW5kby1yZWRvL3VuZG8tZGVjb3JhdG9yJztcbmltcG9ydCB7IENvcHlQYXN0ZUhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29weS1wYXN0ZS9jb3B5LXBhc3RlLWhvdXNlJztcbmltcG9ydCB7IFNsZWVwZXIgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlcic7XG5pbXBvcnQgeyBFZGdlIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9lZGdlL2VkZ2UnOyBcblxuXG5jbGFzcyBLZXlib2FyZEFjdGlvbkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc2VyIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAga2V5Ym9hcmREZWxldGUsXG4gICAgICAgICAgICBrZXlib2FyZElucHV0LFxuICAgICAgICAgICAga2V5Ym9hcmRUZXh0VW5kbyxcbiAgICAgICAgICAgIGtleWJvYXJkVGV4dFJlZG8sXG4gICAgICAgICAgICBrZXlib2FyZFRleHREZWxldGUsXG4gICAgICAgICAgICBrZXlib2FyZENvcHksXG4gICAgICAgICAgICBrZXlib2FyZFBhc3RlLFxuICAgICAgICB9ID0gQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZTtcblxuICAgICAgICAvLyBNYWtlIEV2ZW50TmFtZS1IYW5kbGVyIE1hcFxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmREZWxldGVdID0gVW5kb0RlY29yYXRvci5kZWxldGVJdGVtc0RlY29yYXRvcih0aGlzLmtleWJvYXJkRGVsZXRlQ29udHJvbGxlcik7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmRQYXN0ZV0gPSBVbmRvRGVjb3JhdG9yLnBhc3RlRGVjb3JhdG9yKHRoaXMua2V5Ym9hcmRQYXN0ZUNvbnRyb2xsZXIpO1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkQ29weV0gPSB0aGlzLmtleWJvYXJkQ29weUNvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmRJbnB1dF0gPSB0aGlzLmtleWJvYXJkSW5wdXRDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkVGV4dFVuZG9dID0gdGhpcy5rZXlib2FyZFRleHRVbmRvQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFtrZXlib2FyZFRleHRSZWRvXSA9IHRoaXMua2V5Ym9hcmRUZXh0UmVkb0NvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmRUZXh0RGVsZXRlXSA9IHRoaXMua2V5Ym9hcmRUZXh0RGVsZXRlQ29udHJvbGxlcjtcblxuICAgICAgICAvLyBJbml0IGV2ZW50IGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnROYW1lc01hcFtldmVudE5hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSB0aGUgc2VsZWN0ZWQgZWRnZSBvciBTbGVlcGVyXG4gICAgICogQHBhcmFtIHtFZGdlIHwgU2xlZXBlcn0gY2xpY2tPYmplY3QgXG4gICAgICovXG4gICAga2V5Ym9hcmREZWxldGVDb250cm9sbGVyKGNsaWNrT2JqZWN0KSB7XG4gICAgICAgIGNsaWNrT2JqZWN0LmRlbGV0ZVNlbGYoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnB1dCB0ZXh0IHRvIHRoZSBzbGVlcGVyXG4gICAgICogQHBhcmFtIHsqfSBzbGVlcGVyIFxuICAgICAqIEBwYXJhbSB7Kn0gaW5wdXRLZXkgc3RyaW5nXG4gICAgICovXG4gICAga2V5Ym9hcmRJbnB1dENvbnRyb2xsZXIoc2xlZXBlciwgaW5wdXRLZXkpIHtcbiAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IGAke3NsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnR9JHtpbnB1dEtleX1gO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0ZXh0XG4gICAgICAgIHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0ZW1wIHN0YWNrXG4gICAgICAgIHNsZWVwZXIudGV4dFRlbXBTdGFjay50ZXh0ID0gbmV3Q29udGVudDtcblxuICAgICAgICBjb25zb2xlLmxvZyhzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50KTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5kbyBmb3Igc2xlZXBlciBpbiB0ZXh0IG1vZGVcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXIgXG4gICAgICovXG4gICAga2V5Ym9hcmRUZXh0VW5kb0NvbnRyb2xsZXIoc2xlZXBlcikge1xuICAgICAgICBzbGVlcGVyLnRleHRUZW1wU3RhY2sudW5kbygpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHNsZWVwZXIudGV4dFRlbXBTdGFjay50ZXh0KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFVwZGF0ZVxuICAgICAgICBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50ID0gc2xlZXBlci50ZXh0VGVtcFN0YWNrLnRleHQ7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZG8gZm9yIHNsZWVwZXIgaW4gdGV4dCBtb2RlXG4gICAgICogQHBhcmFtIHsqfSBzbGVlcGVyIFxuICAgICAqL1xuICAgIGtleWJvYXJkVGV4dFJlZG9Db250cm9sbGVyKHNsZWVwZXIpIHtcbiAgICAgICAgc2xlZXBlci50ZXh0VGVtcFN0YWNrLnJlZG8oKTtcblxuICAgICAgICAvLyBVcGRhdGVcbiAgICAgICAgc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudCA9IHNsZWVwZXIudGV4dFRlbXBTdGFjay50ZXh0O1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTsgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGZvciBzbGVlcGVyIGluIHRleHQgbW9kZVxuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlciBcbiAgICAgKi9cbiAgICBrZXlib2FyZFRleHREZWxldGVDb250cm9sbGVyKHNsZWVwZXIpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nTGVuZ3RoID0gc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50LnN1YnN0cmluZygwLCBzdHJpbmdMZW5ndGggLSAxKTtcblxuICAgICAgICAvLyBVcGRhdGUgdGV4dFxuICAgICAgICBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50ID0gbmV3Q29udGVudDtcblxuICAgICAgICAvLyBVcGRhdGUgdGVtcCBzdGFja1xuICAgICAgICBzbGVlcGVyLnRleHRUZW1wU3RhY2sudGV4dCA9IG5ld0NvbnRlbnQ7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvcHkgYSBvYmplY3Qgc2VsZWN0ZWRcbiAgICAgKiBAcGFyYW0ge3NsZWVwZXIgfCBFZGdlfSBvYmplY3QgXG4gICAgICovXG4gICAga2V5Ym9hcmRDb3B5Q29udHJvbGxlcihvYmplY3QpIHtcbiAgICAgICAgQ29weVBhc3RlSG91c2UucGFja2FnZSA9IG9iamVjdDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUGFzdGUgdGhlIG9iamVjdCBzdG9yZSBpbiBjb3B5LXBhc3RlIGhvdXNlXG4gICAgICovXG4gICAga2V5Ym9hcmRQYXN0ZUNvbnRyb2xsZXIoY29weWVkT2JqZWN0TGlzdCkgeyAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgY29weWVkT2JqZWN0TGlzdCkge1xuICAgICAgICAgICAgLy8gVE9ETzogT25seSBzdXBwb3J0IGZvciBzbGVlcGVyIG5vd1xuICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBTbGVlcGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIG5vbi1yZWxhdGVkIGZhY3RvcnMgd2l0aGluIHNsZWVwZXJcbiAgICAgICAgICAgICAgICBpdGVtLnByZXBhcmVGb3JQYXN0ZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgZXZlbnRcbiAgICAgICAgICAgICAgICBpdGVtLmluaXRFdmVudEhhbmRsZXIoKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBTbGVlcGVyIGludG8gc2xlZXBlciBwb29sXG4gICAgICAgICAgICAgICAgaXRlbS5yZWNvdmVyU2VsZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgS2V5Ym9hcmRBY3Rpb25Db250cm9sbGVyIH07IiwiaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFNsZWVwZXIgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlcic7XG5pbXBvcnQgeyBcbiAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLFxuICAgIFVuZG9SZWRvRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuXG5jbGFzcyBLZXlib2FyZEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBtb3VzZUFjdGlvbikge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5tb3VzZUFjdGlvbiA9IG1vdXNlQWN0aW9uO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmluaXRBY3Rpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGFsbCB0aGUgbW91c2UgYWN0aW9uIGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGluaXRBY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbnNNYXAgPSB7XG4gICAgICAgICAgICAna2V5ZG93bic6IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGFjdGlvbiBpbiBhY3Rpb25zTWFwKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihhY3Rpb24sIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zTWFwW2FjdGlvbl0oZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIG1vdXNlZG93biBlbGVtZW50IGlzIHNsZWVwZXIgYW5kIGluIHRleHQgbW9kZVxuICAgICAgICBjb25zdCBpc1RleHRNb2RlT24gPSB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQgaW5zdGFuY2VvZiBTbGVlcGVyIFxuICAgICAgICAmJiB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQuaXNUZXh0TW9kZTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaChjb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgLy8gUHJlc3MgRGVsZXRlXG4gICAgICAgICAgICAgICAgaXNUZXh0TW9kZU9uID8gdGhpcy5faGFuZGxlclRleHREZWxldGUoKSA6IHRoaXMuX2hhbmRsZXJEZWxldGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgICAgICAgLy8gUHJlc3MgY3RybCArIHpcbiAgICAgICAgICAgICAgICBpZiAoKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgJiYgIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGV4dE1vZGVPbiA/IFxuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkVGV4dFVuZG8sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUudW5kbyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUHJlc3MgY3RybCArIHNoZml0ICsgelxuICAgICAgICAgICAgICAgIGlmICgoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSAmJiBldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICBpc1RleHRNb2RlT24gPyBcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZFRleHRSZWRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLnJlZG8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjc6XG4gICAgICAgICAgICAgICAgLy8gUHJlc3MgY3RybCArIGNcbiAgICAgICAgICAgICAgICBpZigoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNUZXh0TW9kZU9uID9cbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KCdudWxsJylcbiAgICAgICAgICAgICAgICAgICAgOiBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkQ29weSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg2OlxuICAgICAgICAgICAgICAgIC8vIFByZXNzIGN0cmwgKyB2XG4gICAgICAgICAgICAgICAgaWYoKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgJiYgIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGV4dE1vZGVPbiA/XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudCgnbnVsbCcpXG4gICAgICAgICAgICAgICAgICAgIDogRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZFBhc3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcgfHxcbiAgICAgICAgICAgICAgICAgICAgY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwIHx8XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjJcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaXNUZXh0TW9kZU9uICYmIHRoaXMuX2hhbmRsZU5vcm1hbChldmVudC5rZXkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRleHQgaW5wdXQgZm9yIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IGtleSBcbiAgICAgKi9cbiAgICBfaGFuZGxlTm9ybWFsKGtleSkgeyAgXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUua2V5Ym9hcmRJbnB1dCxcbiAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgIGtleVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIG9iamVjdCBkZWxldGVcbiAgICAgKi9cbiAgICBfaGFuZGxlckRlbGV0ZSgpIHtcbiAgICAgICAgLy8gSWYgY2xpY2sgZWxlbWVudCBleGlzdHMgYW5kIGlzIGFjdGl2ZSwgdGhlbiBkZWxldGVcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50XG4gICAgICAgICAgICAmJiB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQuaXNBY3RpdmVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZERlbGV0ZSxcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciB0ZXh0IGRlbGV0ZVxuICAgICAqL1xuICAgIF9oYW5kbGVyVGV4dERlbGV0ZSgpIHtcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZFRleHREZWxldGUsXG4gICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBLZXlib2FyZEFjdGlvbiB9OyIsImltcG9ydCB7IG1vdXNlQWN0aW9uTW9kZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbi8vIENsb25lIHRoZSByZWxhdGVkIGluZm9ybWF0aW9uIGFjY29yZGluZyB0byB0aGUgdHlwZSBvZiBjbGFzc1xuZXhwb3J0IGZ1bmN0aW9uIERlZXBDbG9uZUluZm8obW9kZSwgdGFyZ2V0KSB7XG4gICAgc3dpdGNoKG1vZGUpIHtcbiAgICAgICAgY2FzZShtb3VzZUFjdGlvbk1vZGUuZG93bk9uU2xlZXBlcik6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IHRhcmdldC5jYW52YXNJbmZvcm1hdGlvbi54LFxuICAgICAgICAgICAgICAgIHk6IHRhcmdldC5jYW52YXNJbmZvcm1hdGlvbi55LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAobW91c2VBY3Rpb25Nb2RlLmRvd25PbkhlYWQpOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiB0YXJnZXQuZW5kTG9jYXRpb24ueCxcbiAgICAgICAgICAgICAgICB5OiB0YXJnZXQuZW5kTG9jYXRpb24ueSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBcbiAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLFxuICAgIFNsZWVwZXJFdmVudE5hbWUsXG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbiAgICBFZGdlRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFNsZWVwZXJQb29sZXIgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci1wb29sJztcbmltcG9ydCB7IEVkZ2VQb29sZXIgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL2VkZ2UvZWRnZS1wb29sJztcbmltcG9ydCB7IFVuZG9EZWNvcmF0b3IgfSBmcm9tICcuLi8uLi8uLi91bmRvLXJlZG8vdW5kby1kZWNvcmF0b3InOyBcblxuY2xhc3MgTW91c2VBY3Rpb25Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXNlciBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG1vdXNlRG93blNsZWVwZXIsXG4gICAgICAgICAgICBtb3VzZURvd25MaW5lLFxuICAgICAgICAgICAgbW91c2VEb3duQmFja2dyb3VuZCxcbiAgICAgICAgICAgIG1vdXNlTW92ZVNsZWVwZXIsXG4gICAgICAgICAgICBtb3VzZU1vdmVIZWFkLFxuICAgICAgICAgICAgbW91c2VVcFNsZWVwZXIsXG4gICAgICAgICAgICBtb3VzZVVwQW5jaG9yLFxuICAgICAgICAgICAgbW91c2VVcEhlYWQsXG4gICAgICAgICAgICBtb3VzZURvdWJsZUNsaWNrLFxuICAgICAgICB9ID0gQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZTtcblxuICAgICAgICAvLyBNYWtlIEV2ZW50TmFtZS1IYW5kbGVyIE1hcFxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VEb3duU2xlZXBlcl0gPSB0aGlzLm1vdXNlRG93blNsZWVwZXJDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlRG93bkxpbmVdID0gdGhpcy5tb3VzZURvd25MaW5lQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZURvd25CYWNrZ3JvdW5kXSA9IHRoaXMubW91c2VEb3duQmFja2dyb3VuZENvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VNb3ZlU2xlZXBlcl0gPSB0aGlzLm1vdXNlTW92ZVNsZWVwZXJDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlTW92ZUhlYWRdID0gdGhpcy5tb3VzZU1vdmVIZWFkQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZVVwU2xlZXBlcl0gPSBVbmRvRGVjb3JhdG9yLm1vdXNlVXBTbGVlcGVyRGVjb3JhdG9yKHRoaXMubW91c2VVcFNsZWVwZXJDb250cm9sbGVyLmJpbmQodGhpcykpO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlVXBBbmNob3JdID0gVW5kb0RlY29yYXRvci5tb3VzZVVwQW5jaG9yRGVjb3JhdG9yKHRoaXMubW91c2VVcEFuY2hvckNvbnRyb2xsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VVcEhlYWRdID0gVW5kb0RlY29yYXRvci5tb3VzZVVwSGVhZERlY29yYXRvcih0aGlzLm1vdXNlVXBIZWFkQ29udHJvbGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZURvdWJsZUNsaWNrXSA9IHRoaXMubW91c2VEb3VibGVDbGlja0NvbnRyb2xsZXI7XG5cbiAgICAgICAgLy8gSW5pdCBldmVudCBoYW5kbGVyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TmFtZXNNYXBbZXZlbnROYW1lXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbHRlciB0aGUgc2xlZXBlciBwcm9wZXJ0aWVzIFxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gc2xlZXBlciBTbGVlcGVyIG9iamVjdFxuICAgICAqL1xuICAgIG1vdXNlRG93blNsZWVwZXJDb250cm9sbGVyKHNsZWVwZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Rvd24nLCBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vIENoYW5nZSBhY3RpdmUgc3RhdHVzIGFuZCBkcmFnIHN0YXR1c1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBTbGVlcGVyRXZlbnROYW1lLmFjdGl2ZVNvbWVTbGVlcGVyLFxuICAgICAgICAgICAgc2xlZXBlclxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbHRlciB0aGUgZWRnZSBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIHsqfSBlZGdlIFxuICAgICAqL1xuICAgIG1vdXNlRG93bkxpbmVDb250cm9sbGVyKGVkZ2UpIHtcbiAgICAgICAgLy8gQ2hhbmdlIGFjdGl2ZSBlZGdlIHN0YXR1cyBcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgRWRnZUV2ZW50TmFtZS5hY3RpdmVTb21lRWRnZSxcbiAgICAgICAgICAgIGVkZ2UsXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFuIGFsbCB0aGUgYWN0aXZlIHN0YXR1c1xuICAgICAqL1xuICAgIG1vdXNlRG93bkJhY2tncm91bmRDb250cm9sbGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnRG93biBvbiBiYWNrZ3JvdW5kIGNvbnRyb2xsZXInKTtcbiAgICAgICAgZm9yIChjb25zdCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgLy8gRGVhY3RpdmUgYWxsIHRoZSBzbGVlcGVyXG4gICAgICAgICAgICBzbGVlcGVyLmNoYW5nZUFjdGl2ZVN0YXR1cyhudWxsKTtcblxuICAgICAgICAgICAgLy8gQmFjayB0byBub3JtYWwgbW9kZVxuICAgICAgICAgICAgc2xlZXBlci5lbmRUZXh0TW9kZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBlZGdlIG9mIEVkZ2VQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgZWRnZS5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coU2xlZXBlclBvb2xlci5wb29sKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBzbGVlcGVyIGNhbnZhcyBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gZHJhZ1NsZWVwZXJMaXN0IFxuICAgICAqIEBwYXJhbSB7Kn0gcmVsYXRpdmVNb3ZlRGlzdGFuY2UgXG4gICAgICovXG4gICAgbW91c2VNb3ZlU2xlZXBlckNvbnRyb2xsZXIoZHJhZ1NsZWVwZXJMaXN0LCByZWxhdGl2ZU1vdmVEaXN0YW5jZSkge1xuICAgICAgICBmb3IgKGNvbnN0IHNsZWVwZXIgb2YgZHJhZ1NsZWVwZXJMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5YID0gc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi54O1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luWSA9IHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ggPSBvcmlnaW5YICsgcmVsYXRpdmVNb3ZlRGlzdGFuY2UueDtcbiAgICAgICAgICAgIGNvbnN0IG5ld1kgPSBvcmlnaW5ZICsgcmVsYXRpdmVNb3ZlRGlzdGFuY2UueTtcbiAgICAgICAgICAgIHNsZWVwZXIuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24oe1xuICAgICAgICAgICAgICAgIHg6IG5ld1gsXG4gICAgICAgICAgICAgICAgeTogbmV3WSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygc2xlZXBlci5lZGdlTGlzdCkge1xuICAgICAgICAgICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oJ3N0YXJ0Jywge1xuICAgICAgICAgICAgICAgICAgICB4OiBlZGdlLnN0YXJ0TG9jYXRpb24ueCArIHJlbGF0aXZlTW92ZURpc3RhbmNlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGVkZ2Uuc3RhcnRMb2NhdGlvbi55ICsgcmVsYXRpdmVNb3ZlRGlzdGFuY2UueSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChjb25zdCBlZGdlIG9mIHNsZWVwZXIuaW5jb21pbmdFZGdlTGlzdCkge1xuICAgICAgICAgICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oJ2VuZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogZWRnZS5lbmRMb2NhdGlvbi54ICsgcmVsYXRpdmVNb3ZlRGlzdGFuY2UueCxcbiAgICAgICAgICAgICAgICAgICAgeTogZWRnZS5lbmRMb2NhdGlvbi55ICsgcmVsYXRpdmVNb3ZlRGlzdGFuY2UueSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGVkZ2UgY2FudmFzIHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtFZGdlfSBkcmFnRWRnZSBcbiAgICAgKiBAcGFyYW0geyp9IHJlbGF0aXZlTW92ZURpc3RhbmNlIFxuICAgICAqL1xuICAgIG1vdXNlTW92ZUhlYWRDb250cm9sbGVyKGRyYWdFZGdlLCBjdXJyZW50UG9zaXRpb24pIHtcbiAgICAgICAgZHJhZ0VkZ2Uuc2V0TG9jYXRpb24oJ2VuZCcsIGN1cnJlbnRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8gRGVsZXRlIHRoZSBlZGdlIGZyb20gZW5kIHNsZWVwZXJcbiAgICAgICAgaWYgKCEhZHJhZ0VkZ2UuZW5kU2xlZXBlcikge1xuICAgICAgICAgICAgZHJhZ0VkZ2UuZW5kU2xlZXBlci5yZW1vdmVJbmNvbWluZ0VkZ2UoZHJhZ0VkZ2UpO1xuICAgICAgICAgICAgZHJhZ0VkZ2UuY2hhbmdlRW5kKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYW4gYWxsIHRoZSBkcmFnIGZsYWcgd2hlbiBtb3VzZSB1cFxuICAgICAqIEBwYXJhbSB7Kn0gZHJhZ1NsZWVwZXJMaXN0IFxuICAgICAqL1xuICAgIG1vdXNlVXBTbGVlcGVyQ29udHJvbGxlcihkcmFnU2xlZXBlckxpc3QpIHtcbiAgICAgICAgZm9yKGNvbnN0IHNsZWVwZXIgb2YgZHJhZ1NsZWVwZXJMaXN0KSB7XG4gICAgICAgICAgICBzbGVlcGVyLnN3aXRjaERyYWdTdGF0dXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHRlbXBvcmFyeSBlZGdlIGludG8gc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlckFuZEFuY2hvciBjbGlja2VkIGFuY2hvciBhbmQgaXRzIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGVkZ2UgZWRnZSBvYmplY3RcbiAgICAgKi9cbiAgICBtb3VzZVVwQW5jaG9yQ29udHJvbGxlcihzbGVlcGVyQW5kQW5jaG9yLCBlZGdlLCBjbG9zZXN0T2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IFtzbGVlcGVyLCBzbGVlcGVyQW5jaG9yXSA9IHNsZWVwZXJBbmRBbmNob3I7XG4gICAgICAgIHNsZWVwZXIuYWRkRWRnZShlZGdlKTtcblxuICAgICAgICAvLyBBZGQgdGhlIGVuZCBzbGVlcGVyIGlmIGNsb2VzdE9iamVjdCBleGlzdGVkXG4gICAgICAgIGlmICghIWNsb3Nlc3RPYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VVcEhlYWRDb250cm9sbGVyKGVkZ2UsIGNsb3Nlc3RPYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGluayB0byB0aGUgY2xvZXN0IGFuY2hvciBpZiBuZWVkZWRcbiAgICAgKiBAcGFyYW0geyp9IGVkZ2UgXG4gICAgICogQHBhcmFtIHsqfSBjbG9zZXN0T2JqZWN0IFxuICAgICAqL1xuICAgIG1vdXNlVXBIZWFkQ29udHJvbGxlcihlZGdlLCBjbG9zZXN0T2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNsb3Nlc3RMb2NhdGlvbixcbiAgICAgICAgICAgIGNsb3Nlc3RTbGVlcGVyLFxuICAgICAgICB9ID0gY2xvc2VzdE9iamVjdDtcblxuICAgICAgICAvLyBTZXQgaW5jb21pbmcgZWRnZSBmb3IgY3VycmVudCBzbGVlcGVyXG4gICAgICAgIGNsb3Nlc3RTbGVlcGVyLmFkZEluY29taW5nRWRnZShlZGdlKTtcblxuICAgICAgICAvLyBTZXQgZWRnZSBsb2NhdGlvblxuICAgICAgICBlZGdlLnNldExvY2F0aW9uKCdlbmQnLCBjbG9zZXN0TG9jYXRpb24pO1xuXG4gICAgICAgIC8vIFNldCBlZGdlIGVuZCBzbGVlcGVyXG4gICAgICAgIGVkZ2UuY2hhbmdlRW5kKGNsb3Nlc3RTbGVlcGVyKTtcblxuICAgICAgICAvLyBTZXQgZWRnZSBzdGFydCBzbGVlcGVyJ3MgY2hpbGRcbiAgICAgICAgZWRnZS5zdGFydFNsZWVwZXIuYWRkQ2hpbGQoY2xvc2VzdFNsZWVwZXIpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NsZWVwZXJ9IHNsZWVwZXJcbiAgICAgKiBTdGFydCB0ZXh0IG1vZGUgd2hlbiBkb3VsYmUgY2xpY2sgb24gdGhlIHNsZWVwZXJcbiAgICAgKi9cbiAgICBtb3VzZURvdWJsZUNsaWNrQ29udHJvbGxlcihzbGVlcGVyKSB7XG4gICAgICAgIC8vIENhbGwgdGhlIHN0YXJ0aW5nIHRleHQgbW9kZSBmdW5jdGlvbiBvZiB0aGF0IHNsZWVwZXJcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgU2xlZXBlckV2ZW50TmFtZS5hY3RpdmVTb21lU2xlZXBlclRleHRNb2RlLFxuICAgICAgICAgICAgc2xlZXBlcixcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBNb3VzZUFjdGlvbkNvbnRyb2xsZXIgfTsiLCJpbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgRGVlcENsb25lSW5mbyB9IGZyb20gJy4vZGVlcENsb25lJztcbmltcG9ydCB7IFxuICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbiAgICBVbmRvUmVkb0V2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IFNhdmVkT3BlcmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vdW5kby1yZWRvL29wZXJhdGlvbic7XG5pbXBvcnQgeyBBY3Rpb25VdGlscyB9IGZyb20gJy4uL2FjdGlvbi11dGlscyc7XG5pbXBvcnQgeyBtb3VzZUFjdGlvbk1vZGUgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyJztcbmltcG9ydCB7IEVkZ2UgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL2VkZ2UvZWRnZSc7XG5cbmNsYXNzIE1vdXNlQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMubW91c2VQb3NpdGlvblggPSBudWxsO1xuICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb25ZID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gbW91c2VBY3Rpb25Nb2RlLmRvd25Pbk5vbmU7XG4gICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IG51bGw7XG5cbiAgICAgICAgLy8gU2F2ZSB0ZW1wb3JhcnkgdmFyaWFibGUgXG4gICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZSA9IG51bGw7XG5cbiAgICAgICAgLy8gQ29weSBmb3IgZGVjb3JhdG9yXG4gICAgICAgIHRoaXMudGVtcG9yYXJ5Q29weSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5pbml0QWN0aW9uKCk7XG4gICAgfVxuICAgIHN3aXRjaFRleHRNb2RlXG4gICAgLyoqXG4gICAgICogSW5pdCBhbGwgdGhlIG1vdXNlIGFjdGlvbiBsaXN0ZW5lcnNcbiAgICAgKi9cbiAgICBpbml0QWN0aW9uKCkge1xuICAgICAgICBjb25zdCBhY3Rpb25zTWFwID0ge1xuICAgICAgICAgICAgJ21vdXNlZG93bic6IHRoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQodGhpcyksXG4gICAgICAgICAgICAnbW91c2Vtb3ZlJzogQWN0aW9uVXRpbHMudGhyb3R0bGVyTWFrZXIodGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKSwgMTAwMCAvIDYwKSxcbiAgICAgICAgICAgICdtb3VzZXVwJzogdGhpcy5oYW5kbGVOTW91c2VVcC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2RibGNsaWNrJzogdGhpcy5oYW5kbGVNb3VzZURvdWJsZUNsaWNrLmJpbmQodGhpcyksXG4gICAgICAgICAgICAnY29udGV4dG1lbnUnOiB0aGlzLmhhbmRsZU1vdXNlUHJldmVudFJpZ2h0Q2xpY2suYmluZCh0aGlzKSxcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBhY3Rpb24gaW4gYWN0aW9uc01hcCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihhY3Rpb24sIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zTWFwW2FjdGlvbl0oZXZlbnQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE1vdXNlUG9zaXRpb24oeCwgeSkge1xuICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb25YID0geDtcbiAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uWSA9IHk7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCxcbiAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVXBkYXRlIG1vdXNlIHBvc2l0aW9uIHdoZW4gY2xpY2tcbiAgICAgICAgdGhpcy5zZXRNb3VzZVBvc2l0aW9uKGxvY2F0aW9uLngsIGxvY2F0aW9uLnkpO1xuXG4gICAgICAgIC8vIEZpbmQgbG9jYXRlZCBvYmplY3RcbiAgICAgICAgY29uc3QgbG9jYXRlZE9iamVjdCA9IEFjdGlvblV0aWxzLmZpbmRMb2NhdGVkT2JqZWN0KHRoaXMuY2FudmFzLCBsb2NhdGlvbik7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2xvY2F0ZWQgb2JqZWN0JywgbG9jYXRlZE9iamVjdCk7XG5cbiAgICAgICAgLy8gSWYgcmlnaHQgY2xpY2tcbiAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAyKSB7XG4gICAgICAgICAgICAvLyBJZiByaWdodCBjbGlja1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsb2NhdGVkT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IGxvY2F0ZWRPYmplY3QudHlwZTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsb2NhdGVkT2JqZWN0LnJlc3VsdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VSaWdodENsaWNrLFxuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gSWYgbGVmdCBjbGlja1xuICAgICAgICBpZighIWxvY2F0ZWRPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHt0eXBlLCByZXN1bHR9ID0gbG9jYXRlZE9iamVjdDtcbiAgICAgICAgICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGluZSc6XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VEb3duTGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uTGluZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gbW91c2VBY3Rpb25Nb2RlLmRvd25PbkhlYWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYW5jaG9yJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gbW91c2VBY3Rpb25Nb2RlLmRvd25PbkFuY2hvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzbGVlcGVyJzpcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZURvd25TbGVlcGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25TbGVlcGVyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBIGNlcnRhaW4gY29weSBvZiBtb3VzZURvd25FbGVtZW50IGZvciBpbmZvIGZyb20gb3JpZ2luYWwgbm9kZVxuICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlDb3B5ID0gRGVlcENsb25lSW5mbyh0aGlzLmFjdGlvbk1vZGUsIHRoaXMubW91c2VEb3duRWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEb3duIG9uIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gbW91c2VBY3Rpb25Nb2RlLmRvd25PbkJhY2tncm91bmQ7XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VEb3duQmFja2dyb3VuZCxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTW92ZShldmVudCkge1xuICAgICAgICBzd2l0Y2godGhpcy5hY3Rpb25Nb2RlKSB7XG4gICAgICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25Ob25lKTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVySG92ZXJNb3ZlLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZShtb3VzZUFjdGlvbk1vZGUuZG93bk9uU2xlZXBlcik6XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlckRyYWdTbGVlcGVyTW92ZS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UobW91c2VBY3Rpb25Nb2RlLmRvd25PbkFuY2hvcik6XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlckRyYWdBbmNob3JNb3ZlLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZShtb3VzZUFjdGlvbk1vZGUuZG93bk9uQmFja2dyb3VuZCk6XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlckRyYWdCYWNrZ3JvdW5kTW92ZS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UobW91c2VBY3Rpb25Nb2RlLmRvd25PbkhlYWQpOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJEcmFnSGVhZE1vdmUuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFuZGxlckhvdmVyTW92ZShldmVudCkge1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGV2ZW50Lm9mZnNldFgsXG4gICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEZpbmQgbG9jYXRlZCBvYmplY3RcbiAgICAgICAgY29uc3QgbG9jYXRlZE9iamVjdCA9IEFjdGlvblV0aWxzLmZpbmRMb2NhdGVkT2JqZWN0KHRoaXMuY2FudmFzLCBsb2NhdGlvbik7XG4gICAgICAgIGlmKCEhbG9jYXRlZE9iamVjdCkge1xuICAgICAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBsb2NhdGVkT2JqZWN0O1xuICAgICAgICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdhbmNob3InOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAnY3Jvc3NoYWlyJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2xlZXBlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGluZSc6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbiBsaW5lJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZCc6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbiBIZWFkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdhbGwtc2Nyb2xsJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuICAgIH1cblxuICAgIF9oYW5kbGVyRHJhZ1NsZWVwZXJNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRyYWdTbGVlcGVyTGlzdCA9IEFjdGlvblV0aWxzLmZpbmREcmFnZ2VkU2xlZXBlcigpO1xuXG4gICAgICAgIC8vIE5vIG5vZGUgaXMgZHJhZ2dlZFxuICAgICAgICBpZiAoZHJhZ1NsZWVwZXJMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHJlbGF0aXZlIG1vdmUgZGlzdGFuY2VcbiAgICAgICAgY29uc3QgcmVsYXRpdmVNb3ZlRGlzdGFuY2UgPSB7XG4gICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYIC0gdGhpcy5tb3VzZVBvc2l0aW9uWCwgXG4gICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZIC0gdGhpcy5tb3VzZVBvc2l0aW9uWSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBTYXZlIGN1cnJlbnQgbW91c2UgcG9zaXN0aW9uXG4gICAgICAgIHRoaXMuc2V0TW91c2VQb3NpdGlvbihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBhY3Rpb24gY29udHJvbGxlclxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlTW92ZVNsZWVwZXIsXG4gICAgICAgICAgICBkcmFnU2xlZXBlckxpc3QsXG4gICAgICAgICAgICByZWxhdGl2ZU1vdmVEaXN0YW5jZSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlckRyYWdBbmNob3JNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy50ZW1wb3JhcnlFZGdlKSB7XG4gICAgICAgICAgICBjb25zdCBbc2xlZXBlciwgc2xlZXBlckFuY2hvcl0gPSB0aGlzLm1vdXNlRG93bkVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBzdGFydExvYWN0aW9uID0gc2xlZXBlckFuY2hvci5sb2NhdGlvbjtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSB0ZW1wb3JhcnkgZWdkZSBvYmplY3RcbiAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZSA9IG5ldyBFZGdlKCk7XG4gICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUVkZ2UuY2hhbmdlU3RhcnQoc2xlZXBlcik7XG4gICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUVkZ2Uuc2V0TG9jYXRpb24oJ3N0YXJ0Jywgc3RhcnRMb2FjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGhlIGVuZCBsb2NhdGlvblxuICAgICAgICBjb25zdCBlbmRMb2NhdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGV2ZW50Lm9mZnNldFgsIFxuICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRlbXBvcmFyeUVkZ2Uuc2V0TG9jYXRpb24oJ2VuZCcsIGVuZExvY2F0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNhdmUgY3VycmVudCBtb3VzZSBwb3Npc3Rpb25cbiAgICAgICAgdGhpcy5zZXRNb3VzZVBvc2l0aW9uKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlckRyYWdIZWFkTW92ZShldmVudCkge1xuICAgICAgICAvLyBDYWxjdWxhdGUgcmVsYXRpdmUgbW92ZSBkaXN0YW5jZVxuICAgICAgICBjb25zdCBjdXJyZW50UG9zaXN0aW9uID0ge1xuICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCwgXG4gICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICB9O1xuXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VNb3ZlSGVhZCxcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgIGN1cnJlbnRQb3Npc3Rpb24sXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBfaGFuZGxlckRyYWdCYWNrZ3JvdW5kTW92ZShldmVudCkge1xuICAgICAgICAvLyBUT0RPOiBDcmVhdGUgc2VsZWN0aW9uIGJveFxuICAgIH1cblxuICAgIGhhbmRsZU5Nb3VzZVVwKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLmFjdGlvbk1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgKG1vdXNlQWN0aW9uTW9kZS5kb3duT25TbGVlcGVyKTpcbiAgICAgICAgICAgICAgICBjb25zdCBkcmFnU2xlZXBlckxpc3QgPSBBY3Rpb25VdGlscy5maW5kRHJhZ2dlZFNsZWVwZXIoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbW91c2UgdXAnLCB0aGlzLm1vdXNlRG93bkVsZW1lbnQuaXNEcmFnKTtcblxuICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZVVwU2xlZXBlcixcbiAgICAgICAgICAgICAgICAgICAgZHJhZ1NsZWVwZXJMaXN0LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUNvcHksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKG1vdXNlQWN0aW9uTW9kZS5kb3duT25BbmNob3IpOlxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RPYmplY3RBbmNob3IgPSBBY3Rpb25VdGlscy5maW5kQ2xvc2VzdEFuY2hvcih7XG4gICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50Lm9mZnNldFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFksXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VVcEFuY2hvcixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUVkZ2UsXG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3RPYmplY3RBbmNob3IsXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChtb3VzZUFjdGlvbk1vZGUuZG93bk9uSGVhZCk6XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdE9iamVjdEhlYWQgPSBBY3Rpb25VdGlscy5maW5kQ2xvc2VzdEFuY2hvcih7XG4gICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50Lm9mZnNldFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFksXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNsb3Nlc3RPYmplY3RIZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgZGlyZWN0bHkgdG8gVW5kb1JlZG8gc3RhY2sgKE5vdGUgb25seSBoZWFkIGlzIHNwZWljaWFsKVxuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUuYWRkTXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5tb3ZlSGVhZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUVuZExvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMubW91c2VEb3duRWxlbWVudC5lbmRMb2NhdGlvbi54IC0gdGhpcy50ZW1wb3JhcnlDb3B5LngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMubW91c2VEb3duRWxlbWVudC5lbmRMb2NhdGlvbi55IC0gdGhpcy50ZW1wb3JhcnlDb3B5LnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VVcEhlYWQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdE9iamVjdEhlYWQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5Q29weSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAobW91c2VBY3Rpb25Nb2RlLmRvd25PbkJhY2tncm91bmQpOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmFjayB0byBkZWZhdWx0IHN0YXR1c1xuICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uTm9uZTtcbiAgICAgICAgdGhpcy50ZW1wb3JhcnlDb3B5ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgY2FsbGJhY2sgZm9yIGRvdWJsZSBjbGljayBvcGVyYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IGV2ZW50IFxuICAgICAqL1xuICAgIGhhbmRsZU1vdXNlRG91YmxlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgLy8gT25seSBBY3RpdmUgd2hlbiBkb3VibGUgY2xpY2sgb24gc2xlZXBlclxuICAgICAgICBpZiAoIXRoaXMubW91c2VEb3duRWxlbWVudCBpbnN0YW5jZW9mIFNsZWVwZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmQgaWYgdGhlIGxvY2F0aW9uIGlzIG9uIHRoZSB0aGF0IHNsZWVwZXJcbiAgICAgICAgY29uc3QgaXNJblRoaXNTbGVlcGVyID0gdGhpcy5jYW52YXNDb250ZXh0LmlzUG9pbnRJblBhdGgoXG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQuY2FudmFzUGF0aCxcbiAgICAgICAgICAgIGV2ZW50Lm9mZnNldFgsXG4gICAgICAgICAgICBldmVudC5vZmZzZXRZLFxuICAgICAgICApXG4gICAgICAgIFxuICAgICAgICBpZiAoIWlzSW5UaGlzU2xlZXBlciB8fCB0aGlzLm1vdXNlRG93bkVsZW1lbnQuaXNUZXh0TW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIENoYW5nZSB0aGUgbW91c2UgYWN0aW9uIG1vZGVcbiAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gbW91c2VBY3Rpb25Nb2RlLmRvd25PblRleHQ7XG5cbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZURvdWJsZUNsaWNrLFxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlUHJldmVudFJpZ2h0Q2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSAgIFxufVxuXG5leHBvcnQgeyBNb3VzZUFjdGlvbiB9OyIsImltcG9ydCB7IFxuICAgIFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBTbGVlcGVyUG9vbGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItcG9vbCc7XG5pbXBvcnQgeyBTbGVlcGVyc0ZhY3RvcnkgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci1mYWN0b3J5JztcblxuY2xhc3MgUGFuZWxPcGVyYXRpb25Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXNlciBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNoYW5nZUFsbFByb2JhYmlsaXR5LFxuICAgICAgICAgICAgcmVzZXRTbGVlcGVycyxcbiAgICAgICAgICAgIHBhbmVsQ3JlYXRlTm9kZSxcbiAgICAgICAgICAgIHBhbmVsQWN0aXZlLFxuICAgICAgICB9ID0gUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZTtcblxuICAgICAgICAvLyBNYWtlIEV2ZW50TmFtZS1IYW5kbGVyIE1hcFxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbY2hhbmdlQWxsUHJvYmFiaWxpdHldID0gdGhpcy5wcm9iQ2hhbmdlQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFtwYW5lbENyZWF0ZU5vZGVdID0gdGhpcy5wYW5lbENyZWF0ZU5vZGVDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW3Jlc2V0U2xlZXBlcnNdID0gdGhpcy5yZXNldENvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbcGFuZWxBY3RpdmVdID0gdGhpcy5wYW5lbEFjdGl2ZUNvbnRyb2xsZXI7XG5cbiAgICAgICAgLy8gSW5pdCBldmVudCBoYW5kbGVyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TmFtZXNNYXBbZXZlbnROYW1lXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgYWxsIHRoZSBwcm9iIHdpdGhpbiBlYWNoIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IHByb2IgXG4gICAgICovXG4gICAgcHJvYkNoYW5nZUNvbnRyb2xsZXIocHJvYikge1xuICAgICAgICAvLyBDaGFuZ2UgdGhlIGZhY3RvcnlcbiAgICAgICAgU2xlZXBlcnNGYWN0b3J5LmNoYW5nZVByb2JhYmlsaXR5KHByb2IpO1xuXG4gICAgICAgIC8vIENoYW5nZSB0aGUgc2xlZXBlclxuICAgICAgICBmb3IoY29uc3Qgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIHNsZWVwZXIucHJvYmFiaWxpdHkgPSBwcm9iO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgYWxsIHRoZSBzbGVlcGVyIHN0YXR1c1xuICAgICAqL1xuICAgIHJlc2V0Q29udHJvbGxlcigpIHtcbiAgICAgICAgZm9yKGNvbnN0IHNsZWVwZXIgb2YgU2xlZXBlclBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBpZiAoc2xlZXBlci5pc1NsZWVwaW5nICE9PSBzbGVlcGVyLmJlZm9yZVByb2Nlc3NJc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgc2xlZXBlci5jaGFuZ2VTbGVlcGluZ1N0YXR1cyhzbGVlcGVyLmJlZm9yZVByb2Nlc3NJc1NsZWVwaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgc2xlZXBlciBmcm9tIHBhbmVsXG4gICAgICovXG4gICAgcGFuZWxDcmVhdGVOb2RlQ29udHJvbGxlcihvYmosIHBvc2l0aW9uKSB7XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUuY3JlYXRlTm9kZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2l0dmUgc2xlZXBlciB3aXRoIGNvbnRleHQgbWVhbnVcbiAgICAgKi9cbiAgICBwYW5lbEFjdGl2ZUNvbnRyb2xsZXIoc2xlZXBlcikge1xuICAgICAgICAvLyBBY3RpdmUgc2xlZXBlclxuICAgICAgICBzbGVlcGVyLmNoYW5nZVNsZWVwaW5nU3RhdHVzKCk7XG4gICAgICAgIHNsZWVwZXIuYmVmb3JlUHJvY2Vzc0lzU2xlZXBpbmcgPSBzbGVlcGVyLmlzU2xlZXBpbmc7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgeyBQYW5lbE9wZXJhdGlvbkNvbnRyb2xsZXIgfTsiLCJpbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXBvb2wnO1xuaW1wb3J0IHtcbiAgICBQYWludGVyRXZlbnROYW1lLFxuICAgIFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbmNsYXNzIFdha2luZ1Byb2Nlc3NDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yb3VuZE51bSA9IDA7XG4gICAgICAgIHRoaXMuZnJhbWVUaW1lID0gNzAwO1xuICAgICAgICB0aGlzLmlzUGF1c2UgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZnJlc2hJbnRlcnZhbElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5hd2FrZVF1ZXVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXNlciBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHN0YXJ0V2FraW5nUHJvY2VzcyxcbiAgICAgICAgICAgIHBhdXNlV2FraW5nUHJvY2VzcyxcbiAgICAgICAgfSA9IFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWU7XG5cbiAgICAgICAgLy8gTWFrZSBFdmVudE5hbWUtSGFuZGxlciBNYXBcbiAgICAgICAgY29uc3QgZXZlbnROYW1lc01hcCA9IHt9O1xuICAgICAgICBldmVudE5hbWVzTWFwW3N0YXJ0V2FraW5nUHJvY2Vzc10gPSB0aGlzLnN0YXJ0V2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgZXZlbnROYW1lc01hcFtwYXVzZVdha2luZ1Byb2Nlc3NdID0gdGhpcy5wYXVzZVdha2luZ1Byb2Nlc3NDb250cm9sbGVyLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gSW5pdCBldmVudCBoYW5kbGVyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TmFtZXNNYXBbZXZlbnROYW1lXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0QXdha2VRdWV1ZSgpIHtcbiAgICAgICAgY29uc3QgdGVtcFF1ZXVlID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgaWYgKCFzbGVlcGVyLmlzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICB0ZW1wUXVldWUucHVzaChzbGVlcGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXdha2VRdWV1ZSA9IHRlbXBRdWV1ZTtcbiAgICB9XG4gICAgXG4gICAgc3RhcnRXYWtpbmdQcm9jZXNzQ29udHJvbGxlcigpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5pdEF3YWtlUXVldWUoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYXdha2UgcXVldWUxJywgdGhpcy5hd2FrZVF1ZXVlKTtcblxuICAgICAgICAvLyBTZXQgaW50ZXJ2YWxcbiAgICAgICAgdGhpcy5yZWZyZXNoSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF3YWtlUXVldWUubGVuZ3RoID4gMCAmJiAhdGhpcy5pc1BhdXNlKSB7XG4gICAgICAgICAgICAgICAgLy8gR28gTmV4dCBSb3VuZFxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2xlZXBlciBvZiB0aGlzLmF3YWtlUXVldWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3QWN0aXZlZFNsZWVwZXIgPSBzbGVlcGVyLmFjdGl2ZUNoaWxkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXdha2VRdWV1ZSA9IFsuLi50aGlzLmF3YWtlUXVldWUsIC4uLm5ld0FjdGl2ZWRTbGVlcGVyXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hd2FrZVF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHJvdW5kIG51bWJlclxuICAgICAgICAgICAgICAgIHRoaXMucm91bmROdW0gKz0gMTtcblxuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXdha2VRdWV1ZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lLmVuZFdha2luZ1Byb2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDbGVhciBpbnRlcnZhbFxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yZWZyZXNoSW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMuZnJhbWVUaW1lKTtcbiAgICB9XG5cbiAgICBwYXVzZVdha2luZ1Byb2Nlc3NDb250cm9sbGVyKCkge1xuICAgICAgICB0aGlzLmlzUGF1c2UgPSB0cnVlO1xuICAgIH1cblxuICAgIFxufVxuXG5leHBvcnQgeyBXYWtpbmdQcm9jZXNzQ29udHJvbGxlciB9OyIsImV4cG9ydCBjb25zdCBEZWZhdWx0RWRnZVdlaWdodCA9IDAuNTtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRTbGVlcGVyQ2FudmFzSW5mb3JtYXRpb24gPSB7XG4gICAgZHJhd1R5cGU6ICdjaXJjbGUnLFxuICAgIHg6IDUwMCxcbiAgICB5OiA1MDAsXG4gICAgcmFkaXVzOiAzMCxcbiAgICBzdGFydEFuZ2xlOiAwLFxuICAgIGVuZEFuZ2xlOiAyICogTWF0aC5QSSxcbiAgICBpc0ZpbGxlZDogdHJ1ZSxcbiAgICBmaWxsQ29sb3I6ICcjQ0FDOUNDJyxcbiAgICBpc0JvcmRlcjogdHJ1ZSxcbiAgICBib3JkZXJXaXRoOiAyLFxuICAgIGJvcmRlckNvbG9yOiAnIzAwMDAwMCcsXG4gICAgaXNBbmNob3I6IGZhbHNlLFxuICAgIGFjdGl2ZUJvcmRlckNvbG9yOiAnIzAwNjhGRicsXG59O1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdEF3YWtlQ2FudmFzSW5mb3JtYXRpb24gPSB7XG4gICAgZHJhd1R5cGU6ICdjaXJjbGUnLFxuICAgIHg6IDUwMCxcbiAgICB5OiA1MDAsXG4gICAgcmFkaXVzOiAzMCxcbiAgICBzdGFydEFuZ2xlOiAwLFxuICAgIGVuZEFuZ2xlOiAyICogTWF0aC5QSSxcbiAgICBpc0ZpbGxlZDogdHJ1ZSxcbiAgICBmaWxsQ29sb3I6ICcjRkZCMUIyJyxcbiAgICBpc0JvcmRlcjogdHJ1ZSxcbiAgICBib3JkZXJXaXRoOiAyLFxuICAgIGJvcmRlckNvbG9yOiAnIzAwMDAwMCcsXG4gICAgaXNBbmNob3I6IGZhbHNlLFxuICAgIGFjdGl2ZUJvcmRlckNvbG9yOiAnIzAwNjhGRicsXG59OyIsImltcG9ydCB7IEVkZ2VQb29sRXZlbnROYW1lIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5cbmNsYXNzIEVkZ2VQb29sIHtcbiAgICAvKipcbiAgICAgKiBHZXQgc2luZ2xldG9uIGluc3RhbmNlIG9mIFNsZWVwZXJQb29sXG4gICAgICogQHJldHVybnMge0VkZ2VQb29sfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRWRnZVBvb2woKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIUVkZ2VQb29sLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2wgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pbml0RXZlbnRzSGFuZGxlcigpO1xuICAgICAgICAgICAgRWRnZVBvb2wuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEVkZ2VQb29sLmluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBTbGVlcGVyIFBvb2xcbiAgICAgKi9cbiAgICBpbml0RXZlbnRzSGFuZGxlcigpIHtcbiAgICAgICAgLy8gUmVnaXN0ZXIgYWRkaW5nIHNsZWVwZXJcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgRWRnZVBvb2xFdmVudE5hbWUuYWRkRWRnZSwgXG4gICAgICAgICAgICB0aGlzLmFkZEVkZ2UuYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHNsZWVwZXIgb2JqZWN0IGludG8gZWRnZSBwb29sXG4gICAgICogQHBhcmFtIHtFZGdlfSBzbGVlcGVyIFxuICAgICAqL1xuICAgIGFkZEVkZ2UoZWRnZSkge1xuICAgICAgICB0aGlzLnBvb2wucHVzaChlZGdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYW4gZWRnZSBmcm9tIGVkZ2UgcG9vbFxuICAgICAqIEBwYXJhbSB7Kn0gZWRnZSBcbiAgICAgKi9cbiAgICByZW1vdmVFZGdlKGVkZ2UpIHtcbiAgICAgICAgY29uc3QgbG9jYXRlZEluZGV4ID0gdGhpcy5wb29sLmZpbmRJbmRleChlZGdlSW5Qb29sID0+IGVkZ2VJblBvb2wgPT09IGVkZ2UpO1xuICAgICAgICBpZiAobG9jYXRlZEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wb29sLnNwbGljZShsb2NhdGVkSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRWRnZVBvb2xlciA9IEVkZ2VQb29sLmdldEluc3RhbmNlKCk7IiwiaW1wb3J0IHsgRGVmYXVsdEVkZ2VXZWlnaHQgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFxuICAgIEVkZ2VQb29sRXZlbnROYW1lLCBcbiAgICBFZGdlRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4uL3NsZWVwZXIvc2xlZXBlcic7XG5pbXBvcnQgeyBFZGdlUG9vbGVyIH0gZnJvbSAnLi9lZGdlLXBvb2wnO1xuXG5jbGFzcyBFZGdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gRGF0YSBpbmZvcm1hdGlvblxuICAgICAgICB0aGlzLnN0YXJ0U2xlZXBlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZW5kU2xlZXBlciA9IG51bGw7XG4gICAgICAgIHRoaXMud2VpZ2h0ID0gbnVsbDtcblxuICAgICAgICAvLyBDYW52YXMgcGF0aCBpbmZvcm1hdGlvblxuICAgICAgICB0aGlzLnN0YXJ0TG9jYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmVuZExvY2F0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW52YXNQYXRoID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEluaXQgZXZlbnRcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBFdmVudFxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoRWRnZVBvb2xFdmVudE5hbWUuYWRkRWRnZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZVNvbWVFZGdlLFxuICAgICAgICB9ID0gRWRnZUV2ZW50TmFtZTtcblxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbYWN0aXZlU29tZUVkZ2VdID0gdGhpcy5hY3RpdmVTb21lRWRnZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGFjdGl2ZSBzb21lIG5vZGUgaGFuZGxlclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnROYW1lc01hcFtldmVudF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzdGFydCBzbGVlcGVyIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTbGVlcGVyfSBcbiAgICAgKi9cbiAgICBnZXRTdGFydFNsZWVwZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0U2xlZXBlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGVuZCBzbGVlcGVyIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTbGVlcGVyfSBcbiAgICAgKi9cbiAgICBnZXRFbmRTbGVlcGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmRTbGVlcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgd2VpZ2h0IG9uIHRoaXMgZWRnZVxuICAgICAqIEByZXR1cm5zIHtmbG9hdH1cbiAgICAgKi9cbiAgICBnZXRXZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIHdlaWdodCB0byB0aGUgZ2l2ZW4gdmFsdWVcbiAgICAgKiBAcGFyYW0ge2Zsb2F0fSBuZXdXZWlnaHQgXG4gICAgICovXG4gICAgY2hhbmdlV2VpZ2h0KG5ld1dlaWdodCkge1xuICAgICAgICB0aGlzLndlaWdodCA9IG5ld1dlaWdodDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBzdGFydCBzbGVlcGVyXG4gICAgICogQHBhcmFtIHsqfSBuZXdTbGVlcGVyIFxuICAgICAqL1xuICAgIGNoYW5nZVN0YXJ0KG5ld1NsZWVwZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydFNsZWVwZXIgPSBuZXdTbGVlcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgZW5kIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IG5ld1NsZWVwZXIgXG4gICAgICovXG4gICAgY2hhbmdlRW5kKG5ld1NsZWVwZXIpIHtcbiAgICAgICAgdGhpcy5lbmRTbGVlcGVyID0gbmV3U2xlZXBlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgc3RhcnQgYW5kIGVuZCBsb2NhdGlvblxuICAgICAqL1xuICAgIHNldExvY2F0aW9uKHR5cGUsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydExvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZW5kTG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY2FudmFzIHBhdGhcbiAgICAgKi9cbiAgICBzZXRDYW52YXNQYXRoKGVkZ2VQYXRoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzUGF0aCA9IGVkZ2VQYXRoO1xuICAgIH1cblxuICAgIGFjdGl2ZVNvbWVFZGdlKGVkZ2UpIHtcbiAgICAgICAgaWYgKGVkZ2UgPT09IHRoaXMgJiYgdGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBY3RpdmUgJiYgZWRnZSAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlU2VsZigpIHtcbiAgICAgICAgRWRnZVBvb2xlci5yZW1vdmVFZGdlKHRoaXMpO1xuICAgICAgICAvLyBEZWxldGUgaXQgaW4gc3RhcnQgc2xlZXBlclxuICAgICAgICB0aGlzLnN0YXJ0U2xlZXBlci5yZW1vdmVFZGdlKHRoaXMpO1xuXG4gICAgICAgIC8vIERlbGV0ZSBpdCBpbiBlbmQgc2xlZXBlclxuICAgICAgICBpZiAoISF0aGlzLmVuZFNsZWVwZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kU2xlZXBlci5yZW1vdmVJbmNvbWluZ0VkZ2UodGhpcyk7XG5cbiAgICAgICAgICAgIC8vIERlbGV0ZSB0aGUgY2hpbGQgb2Ygc3RhcnQgc2xlZXBlclxuICAgICAgICAgICAgdGhpcy5zdGFydFNsZWVwZXIucmVtb3ZlQ2hpbGQodGhpcy5lbmRTbGVlcGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY292ZXJTZWxmKCkge1xuICAgICAgICBFZGdlUG9vbGVyLmFkZEVkZ2UodGhpcyk7XG4gICAgICAgIC8vIFJlY292ZXIgaXQgaW4gc3RhcnQgc2xlZXBlclxuICAgICAgICB0aGlzLnN0YXJ0U2xlZXBlci5hZGRFZGdlKHRoaXMpO1xuXG4gICAgICAgIC8vIFJlY292ZXIgaXQgaW4gZW5kIHNsZWVwZXJcbiAgICAgICAgaWYgKCEhdGhpcy5lbmRTbGVlcGVyKSB7XG4gICAgICAgICAgICB0aGlzLmVuZFNsZWVwZXIuYWRkSW5jb21pbmdFZGdlKHRoaXMpO1xuXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGNoaWxkIG9mIHN0YXJ0IHNsZWVwZXJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyLmFkZENoaWxkKHRoaXMuZW5kU2xlZXBlcilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgRWRnZSB9OyIsImltcG9ydCB7IFxuICAgIERlZmF1bHRTbGVlcGVyQ2FudmFzSW5mb3JtYXRpb24sXG4gICAgRGVmYXVsdEF3YWtlQ2FudmFzSW5mb3JtYXRpb24sXG4gICAgRGVmYXVsdEFjdGl2ZUluZm9ybWF0aW9uLFxufSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgXG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbiAgICBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFNsZWVwZXIgfSBmcm9tICcuL3NsZWVwZXInO1xuaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4vc2xlZXBlci1wb29sJztcbmltcG9ydCB7IFVuZG9EZWNvcmF0b3IgfSBmcm9tICcuLi8uLi8uLi91bmRvLXJlZG8vdW5kby1kZWNvcmF0b3InO1xuXG5jbGFzcyBTbGVlcGVyRmFjdG9yeSB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU2xlZXBlckZhY3RvcnkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdW50IGNhbnZhcyB3aGVuIGluaXRpYWxpemUsIG11c3QgbW91bnQgYmVmb3JlIGl0IGNhbiBiZSB1c2VkICEhIVxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmFzT2JqIFxuICAgICAqL1xuICAgIG1vdW50Q2FudmFzKGNhbnZhc09iaikge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc09iajtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFTbGVlcGVyRmFjdG9yeS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgLy8gSW5pdGlhbCBwYXJhbXNcbiAgICAgICAgICAgIHRoaXMuc2xlZXBlckNhbnZhc0luZm9ybWF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdFNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbik7XG4gICAgICAgICAgICB0aGlzLmF3YWtlQ2FudmFzSW5mb3JtYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0QXdha2VDYW52YXNJbmZvcm1hdGlvbik7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZm9ybWF0aW9uID0gRGVmYXVsdEFjdGl2ZUluZm9ybWF0aW9uO1xuICAgICAgICAgICAgdGhpcy5wcm9iID0gMC4wO1xuXG4gICAgICAgICAgICB0aGlzLmluaXRFdmVudHNIYW5kbGVyKCk7XG4gICAgICAgICAgICBTbGVlcGVyRmFjdG9yeS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xlZXBlckZhY3RvcnkuaW5zdGFuY2U7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBTbGVlcGVyIFBvb2xcbiAgICAgKi9cbiAgICBpbml0RXZlbnRzSGFuZGxlcigpIHtcbiAgICAgICAgLy8gUmVnaXN0ZXIgZm9yIG1ha2luZyBuZXcgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lLmNyZWF0ZU5vZGUsXG4gICAgICAgICAgICBVbmRvRGVjb3JhdG9yLmNyZWF0ZVNsZWVwZXJEZWNvcmF0b3IodGhpcy5tYWtlTmV3U2xlZXBlci5iaW5kKHRoaXMpKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGZvciBjaGFuZ2Vpbmcgc2xlZXBlciBhbmQgYXdha2Ugc2xlZXBlcnMnIHN0eWxlXG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUuY2hhbmdlTm9kZVN0eWxlLFxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbi5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHNsZWVwZXIgYW5kIGF3YWtlIHNsZWVwZXJzJyBjYW52YXMgaW5mb3JtYXRpb25cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdHlwZSAwIGZvciBzbGVlcGVyLCAxIGZvciBhd2FrZSBzbGVlcGVyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnR5T2JqZWN0IG9iamVjdCBmb3IgY2hhbmdlXG4gICAgICovXG4gICAgY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24odHlwZSwgcHJvcGVydHlPYmplY3QpIHtcbiAgICAgICAgbGV0IGZvckNoYW5nZWRJbmZvcm1hdGlvbiA9ICEhdHlwZSA/IHRoaXMuYXdha2VDYW52YXNJbmZvcm1hdGlvbiA6IHRoaXMuc2xlZXBlckNhbnZhc0luZm9ybWF0aW9uO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdGhlIGFsZXJhdGlvbiBhbmQgdXBkYXRlXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gcHJvcGVydHlPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcHJvcGVydHlPYmplY3RbcHJvcGVydHldO1xuICAgICAgICAgICAgaWYgKGZvckNoYW5nZWRJbmZvcm1hdGlvbltwcm9wZXJ0eV0gIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZm9yQ2hhbmdlZEluZm9ybWF0aW9uW3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGUgY2FudmFzIEluZm9ybWF0aW9uXG4gICAgICAgIGZvciAobGV0IHNsZWVwZXIgb2YgU2xlZXBlclBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICAvLyBPbmx5IGNoYW5nZSBjb3JyZXNwb25kaW5nIG5vZGVzIFxuICAgICAgICAgICAgaWYgKCghIXR5cGUpIF4gc2xlZXBlci5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgc2xlZXBlci5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogZm9yQ2hhbmdlZEluZm9ybWF0aW9uLmZpbGxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZvckNoYW5nZWRJbmZvcm1hdGlvbi5ib3JkZXJDb2xvcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2FudmFzIGluZm9ybWF0aW9uXG4gICAgICogQHBhcmFtIHtpbnR9IHR5cGUgMCBmb3Igc2xlZXBlciwgMSBmb3IgYXdha2Ugc2xlZXBlclxuICAgICAqL1xuICAgIGdldENhbnZhc0luZm9ybWF0aW9uKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuICEhdHlwZSA/IHRoaXMuYXdha2VDYW52YXNJbmZvcm1hdGlvbiA6IHRoaXMuc2xlZXBlckNhbnZhc0luZm9ybWF0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBjb25maWcgcHJvYmFiaWxpdHkgdG8gYXdha2Ugb3RoZXIgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gdHlwZSBcbiAgICAgKi9cbiAgICBjaGFuZ2VQcm9iYWJpbGl0eShwcm9iKSB7XG4gICAgICAgIHRoaXMucHJvYiA9IHByb2I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZSBuZXcgc2xlZXBlciB0byBzbGVlcGVyIHBvb2xcbiAgICAgKiBAcGFyYW0ge2ludH0gdHlwZSAwIGZvciBzbGVlcGVyLCAxIGZvciBhd2FrZSBzbGVlcGVyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBvc2l0aW9uIGxvY2F0aW9uIHRvIG1ha2UgbmV3IHNsZWVwZXJcbiAgICAgKi9cbiAgICBtYWtlTmV3U2xlZXBlcih0eXBlLCBwb3NpdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlJyk7XG4gICAgICAgIC8vIEdldCBzbGVlcCBzdGF0dXNcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gIXR5cGU7XG5cbiAgICAgICAgLy8gR2V0IGNhbnZhcyBpbmZvcm1hdGlvblxuICAgICAgICBjb25zdCBjYW52YXNJbmZvcm1hdGlvbiA9ICEhdHlwZSA/IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYXdha2VDYW52YXNJbmZvcm1hdGlvbikgOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbik7XG5cbiAgICAgICAgLy8gU2V0IHBvc2lpdGlvblxuICAgICAgICBpZiAoISFwb3NpdGlvbikge1xuICAgICAgICAgICAgY2FudmFzSW5mb3JtYXRpb24ueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICBjYW52YXNJbmZvcm1hdGlvbi55ID0gcG9zaXRpb24ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ha2UgbmV3IHNsZWVwZXJcbiAgICAgICAgY29uc3QgdGVtcFNsZWVwZXIgPSBuZXcgU2xlZXBlcihcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIGNhbnZhc0luZm9ybWF0aW9uLFxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGVtcFNsZWVwZXIucHJvYmFiaWxpdHkgPSB0aGlzLnByb2I7XG4gICAgICAgIHJldHVybiB0ZW1wU2xlZXBlcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBTbGVlcGVyc0ZhY3RvcnkgPSBTbGVlcGVyRmFjdG9yeS5nZXRJbnN0YW5jZSgpO1xuXG4iLCJpbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgXG4gICAgU2xlZXBlclBvb2xFdmVudE5hbWUsXG4gICAgU2xlZXBlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcblxuY2xhc3MgU2xlZXBlclBvb2wge1xuICAgIC8qKlxuICAgICAqIEdldCBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgU2xlZXBlclBvb2xcbiAgICAgKiBAcmV0dXJucyB7U2xlZXBlclBvb2x9XG4gICAgICovXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTbGVlcGVyUG9vbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghU2xlZXBlclBvb2wuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9vbCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmluaXRFdmVudHNIYW5kbGVyKCk7XG4gICAgICAgICAgICBTbGVlcGVyUG9vbC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xlZXBlclBvb2wuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciByZWxhdGVkIHRvIFNsZWVwZXIgUG9vbFxuICAgICAqL1xuICAgIGluaXRFdmVudHNIYW5kbGVyKCkge1xuICAgICAgICAvLyBSZWdpc3RlciBhZGRpbmcgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBTbGVlcGVyUG9vbEV2ZW50TmFtZS5hZGRTbGVlcGVyLCBcbiAgICAgICAgICAgIHRoaXMuYWRkU2xlZXBlci5iaW5kKHRoaXMpXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgYWN0aXZlIHNsZWVwZXJcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgU2xlZXBlckV2ZW50TmFtZS5hY3RpdmVTb21lU2xlZXBlcixcbiAgICAgICAgICAgIHRoaXMucmVPcmRlclNsZWVwZXIuYmluZCh0aGlzKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgc2xlZXBlciBvYmplY3QgaW50byBzbGVlcGVyIHBvb2xcbiAgICAgKiBAcGFyYW0ge1NsZWVwZXJ9IHNsZWVwZXIgXG4gICAgICovXG4gICAgYWRkU2xlZXBlcihzbGVlcGVyKSB7XG4gICAgICAgIHRoaXMucG9vbC5wdXNoKHNsZWVwZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGdpdmVuIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXIgXG4gICAgICovXG4gICAgcmVtb3ZlU2xlZXBlcihzbGVlcGVyKSB7XG4gICAgICAgIGNvbnN0IGxvY2F0ZWRJbmRleCA9IHRoaXMucG9vbC5maW5kSW5kZXgoc2xlZXBlckluUG9vbCA9PiBzbGVlcGVySW5Qb29sID09PSBzbGVlcGVyKTtcbiAgICAgICAgaWYgKGxvY2F0ZWRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucG9vbC5zcGxpY2UobG9jYXRlZEluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlT3JkZXJTbGVlcGVyKHNsZWVwZXIpIHtcbiAgICAgICAgY29uc3Qgc2xlZXBlckluZGV4ID0gdGhpcy5wb29sLmZpbmRJbmRleChzbGVlcGVySW5Qb29sID0+IHNsZWVwZXJJblBvb2wgID09PSBzbGVlcGVyKTtcbiAgICAgICAgdGhpcy5wb29sLnNwbGljZShzbGVlcGVySW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnBvb2wgPSBbLi4udGhpcy5wb29sLCBzbGVlcGVyXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBTbGVlcGVyUG9vbGVyID0gU2xlZXBlclBvb2wuZ2V0SW5zdGFuY2UoKTsiLCJpbXBvcnQgeyBcbiAgICBQYWludGVyRXZlbnROYW1lLFxuICAgIFNsZWVwZXJFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2V2ZW50XCI7XG5cbmNsYXNzIFRleHRTbGVlcGVyVGVtcFN0YWNrIHtcbiAgICBjb25zdHJ1Y3RvcihvcmlnaW5UZXh0KSB7XG4gICAgICAgIHRoaXMucG9pbnRlciA9IDA7XG4gICAgICAgIHRoaXMuc3RhY2tMaXN0ID0gW107XG4gICAgICAgIHRoaXMuc3RhY2tMaXN0LnB1c2gob3JpZ2luVGV4dCk7XG4gICAgfVxuXG4gICAgZ2V0IHRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrTGlzdFt0aGlzLnBvaW50ZXJdO1xuICAgIH1cblxuICAgIHNldCB0ZXh0KHZhbCkge1xuICAgICAgICB0aGlzLnBvaW50ZXIgKz0gMTtcbiAgICAgICAgdGhpcy5zdGFja0xpc3QucHVzaCh2YWwpO1xuICAgIH1cblxuICAgIHVuZG8oKSB7XG4gICAgICAgIGlmICh0aGlzLnBvaW50ZXIgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvaW50ZXIgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZG8oKSB7XG4gICAgICAgIGlmICh0aGlzLnBvaW50ZXIgPCB0aGlzLnN0YWNrTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLnBvaW50ZXIgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jbGFzcyBUZXh0U2xlZXBlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNldCBmb3IgZGVmYXVsdCB0ZXh0IGNvbmZpZ1xuICAgICAgICB0aGlzLnRleHRJbmZvcm1hdGlvbiA9IHtcbiAgICAgICAgICAgIHNpemU6IDE1LFxuICAgICAgICAgICAgc3R5bGU6ICdUaW1lcyBOZXcgUm9tYW4nLFxuICAgICAgICAgICAgY29udGVudDogJ2EnLFxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRleHRhcmVhSW5mb3JtYXRpb24gPSB7XG4gICAgICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnRleHRhcmVhQm91bmRpbmdCb3hQYXRoID0gbnVsbDtcblxuICAgICAgICAvLyBSZWlnaXN0ZXIgZm9yIHRleHQgdGVtcCBzdGFja1xuICAgICAgICB0aGlzLnRleHRUZW1wU3RhY2sgPSBudWxsO1xuXG4gICAgICAgIHRoaXMudGV4dEluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICB0ZXh0SW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZVNvbWVTbGVlcGVyVGV4dE1vZGUsXG4gICAgICAgIH0gPSBTbGVlcGVyRXZlbnROYW1lO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFthY3RpdmVTb21lU2xlZXBlclRleHRNb2RlXSA9IHRoaXMuc3RhcnRUZXh0TW9kZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGFjdGl2ZSBzb21lIG5vZGUgaGFuZGxlclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnROYW1lc01hcFtldmVudF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3RhcnQgdGhlIHRleHQgbW9kZVxuICAgICAqL1xuICAgIHN0YXJ0VGV4dE1vZGUoc2xlZXBlcikge1xuICAgICAgICBpZiAoc2xlZXBlciA9PSB0aGlzICYmIHRoaXMuaXNUZXh0TW9kZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRleHRUZW1wU3RhY2sgPSBuZXcgVGV4dFNsZWVwZXJUZW1wU3RhY2sodGhpcy50ZXh0SW5mb3JtYXRpb24uY29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1RleHRNb2RlICYmIHNsZWVwZXIgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50ZXh0VGVtcFN0YWNrID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGVuZCB0aGUgdGV4dCBtb2RlXG4gICAgICovXG4gICAgZW5kVGV4dE1vZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVGV4dE1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50ZXh0VGVtcFN0YWNrID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIHRleHQgXG4gICAgICovXG4gICAgZHJhd1RleHQoKSB7XG4gICAgICAgIC8vIEdldCBzbGVlcGVyIGNlbnRlclxuICAgICAgICBjb25zdCB0ZXh0UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNhbnZhc0luZm9ybWF0aW9uLngsXG4gICAgICAgICAgICB5OiB0aGlzLmNhbnZhc0luZm9ybWF0aW9uLnksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gR2V0IG1heCB3aWR0aFxuICAgICAgICBjb25zdCB0ZXh0TWF4V2lkdGggPSB0aGlzLmNhbnZhc0luZm9ybWF0aW9uLnJhZGl1cyAqIE1hdGguc3FydCgzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIERyYXcgdGhlIHRleHRcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS50ZXh0V3JpdGUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRleHRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogdGV4dE1heFdpZHRoLFxuICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uOiB0aGlzLnRleHRJbmZvcm1hdGlvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLnNldFRleHRPclRleHRhcmVhSW5mb3JtYXRpb24uYmluZCh0aGlzKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSB0ZXh0ZXJhXG4gICAgICovXG4gICAgZHJhd1RleHRBcmVhKCkge1xuICAgICAgICAvLyBPbmx5IGRyYXcgaXQgd2hlbiB0ZXh0bW9kZSBpcyBvblxuICAgICAgICBpZiAoIXRoaXMuaXNUZXh0TW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IFNsZWVwZXIgY2VudGVyXG4gICAgICAgIGNvbnN0IHNsZWVwZXJQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzSW5mb3JtYXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzSW5mb3JtYXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBEcmF3IHRoZSB0ZXh0XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUuZmlndXJlRHJhdyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzbGVlcGVyUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgdGV4dGFyZWFJbmZvcm1hdGlvbjogdGhpcy50ZXh0YXJlYUluZm9ybWF0aW9uLFxuICAgICAgICAgICAgICAgIGRyYXdUeXBlOiAndGV4dGFyZWEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuX3NldFRleHRhcmVhUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0ZXh0IC8gdGV4dGFyZWEgaW5mb3JtYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IHByb3BlcnR5T2JqZWN0IFxuICAgICAqIEBwYXJhbSB7Kn0gdHlwZSBcbiAgICAgKi9cbiAgICBzZXRUZXh0T3JUZXh0YXJlYUluZm9ybWF0aW9uKHByb3BlcnR5T2JqZWN0LCB0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlICE9PSAndGV4dCcgJiYgdHlwZSAhPT0gJ3RleHRhcmVhJykge1xuICAgICAgICAgICAgRXJyb3IoJ1dyb25nIHR5cGUgd2hlbiBzZXR0aW5nIHRleHQgLyB0ZXh0YXJlIGluZm9ybWF0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JTZXRPYmplY3QgPSAodHlwZSA9PSAndGV4dCcpID8gdGhpcy50ZXh0SW5mb3JtYXRpb24gOiB0aGlzLnRleHRhcmVhSW5mb3JtYXRpb247XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0aGUgYWxlcmF0aW9uIGFuZCB1cGRhdGVcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBwcm9wZXJ0eU9iamVjdCkge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBwcm9wZXJ0eU9iamVjdFtwcm9wZXJ0eV07XG5cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAmJiBmb3JTZXRPYmplY3RbcHJvcGVydHldICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGZvclNldE9iamVjdFtwcm9wZXJ0eV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERyYXcgdGV4dCBhcmVhIHdoZW4gXG4gICAgICAgIGlmICh0eXBlID09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RleHRBcmVhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYm91bmRpbmcgYm94IHBhdGhcbiAgICAgKiBAcGFyYW0geyp9IGJvdW5kaW5nQm94UGF0aCBcbiAgICAgKi9cbiAgICBfc2V0VGV4dGFyZWFQYXRoKGJvdW5kaW5nQm94UGF0aCkge1xuICAgICAgICB0aGlzLnRleHRhcmVhQm91bmRpbmdCb3hQYXRoID0gYm91bmRpbmdCb3hQYXRoO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVGV4dFNsZWVwZXIgfTsiLCJpbXBvcnQgeyBFZGdlIH0gZnJvbSAnLi4vZWRnZS9lZGdlJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBnZXRBY3Rpdml0eUJ5V2VpZ2h0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWF0aC11dGlscyc7XG5pbXBvcnQgeyBcbiAgICBEZWZhdWx0U2xlZXBlckNhbnZhc0luZm9ybWF0aW9uLFxuICAgIERlZmF1bHRBY3RpdmVJbmZvcm1hdGlvbixcbn0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFxuICAgIFNsZWVwZXJFdmVudE5hbWUsXG4gICAgU2xlZXBlclBvb2xFdmVudE5hbWUsXG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IFRleHRTbGVlcGVyIH0gZnJvbSAnLi9zbGVlcGVyLXRleHQnOyBcbmltcG9ydCB7IFNsZWVwZXJQb29sZXIgfSBmcm9tICcuLi9zbGVlcGVyL3NsZWVwZXItcG9vbCc7XG5pbXBvcnQgeyBTbGVlcGVyc0ZhY3RvcnkgfSBmcm9tICcuL3NsZWVwZXItZmFjdG9yeSc7XG5cbmNsYXNzIFNsZWVwZXIgZXh0ZW5kcyBUZXh0U2xlZXBlciB7XG4gICAgY29uc3RydWN0b3Ioc3RhdHVzLCBjYW52YXNJbmZvcm1hdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaXNTbGVlcGluZyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5iZWZvcmVQcm9jZXNzSXNTbGVlcGluZyA9IHN0YXR1cztcblxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEcmFnID0gZmFsc2U7XG5cbiAgICAgICAgLy8gUHJvYmFiaWxpdHkgdG8gYWN0aXZlIG90aGVyc1xuICAgICAgICB0aGlzLnByb2JhYmlsaXR5ID0gMC4wO1xuXG4gICAgICAgIHRoaXMuZWRnZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5pbmNvbWluZ0VkZ2VMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRFZGdlTWFwTGlzdCA9IFtdO1xuXG4gICAgICAgIHRoaXMuY2FudmFzSW5mb3JtYXRpb24gPSBjYW52YXNJbmZvcm1hdGlvbiB8fCBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0U2xlZXBlckNhbnZhc0luZm9ybWF0aW9uKTtcbiAgICAgICAgdGhpcy5jYW52YXNQYXRoID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW52YXNBbmNob3JzUGF0aExpc3QgPSBudWxsO1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIEV2ZW50XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChTbGVlcGVyUG9vbEV2ZW50TmFtZS5hZGRTbGVlcGVyLCB0aGlzKTtcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LCBcbiAgICAgICAgICAgIHRoaXMuY2FudmFzSW5mb3JtYXRpb24sIFxuICAgICAgICAgICAgdGhpcy5zZXRDYW52YXNQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgdGV4dFxuICAgICAgICB0aGlzLmRyYXdUZXh0QXJlYSgpO1xuICAgICAgICB0aGlzLmRyYXdUZXh0KCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ05ldyBTbGVlcGVyJywgdGhpcyk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZVNvbWVTbGVlcGVyLFxuICAgICAgICB9ID0gU2xlZXBlckV2ZW50TmFtZTtcblxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbYWN0aXZlU29tZVNsZWVwZXJdID0gdGhpcy5jaGFuZ2VBY3RpdmVTdGF0dXMuYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBSZWdpc3RlciBhY3RpdmUgc29tZSBub2RlIGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudCBpbiBldmVudE5hbWVzTWFwKSB7XG4gICAgICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50TmFtZXNNYXBbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNoaWxkIG5vZGUgZm9yIGN1cnJlbnQgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gY2hpbGRTbGVlcGVyIFxuICAgICAqL1xuICAgIGFkZENoaWxkKGNoaWxkU2xlZXBlcikge1xuICAgICAgICBpZiAoIWNoaWxkU2xlZXBlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBBZGRDaGlsZCBFcnJvcjogTm8gY2hpbGRyZW4gaXMgZ2l2ZW4hJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5wdXNoKGNoaWxkU2xlZXBlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgZ2l2ZW4gY2hpbGQgc2xlZXBlciBcbiAgICAgKiBAcGFyYW0ge1NsZWVwZXJ9IGNoaWxkU2xlZXBlciBcbiAgICAgKi9cbiAgICByZW1vdmVDaGlsZChjaGlsZFNsZWVwZXIpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0Q2hpbGRJbmRleCA9IHRoaXMuY2hpbGRyZW5MaXN0LmZpbmRJbmRleChcbiAgICAgICAgICAgIGNoaWxkT2JqZWN0ID0+IGNoaWxkT2JqZWN0ID09PSBjaGlsZFNsZWVwZXJcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBjaGlsZFxuICAgICAgICBpZiAoZXhwZWN0Q2hpbGRJbmRleCA9PT0gLTEgfHwgZXhwZWN0Q2hpbGRJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIFJlbW92ZUNoaWxkIEVycm9yOiBOb3QgZmluZCB0aGUgY2hpbGQhJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgY2hpbGRcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3Quc3BsaWNlKGV4cGVjdENoaWxkSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlciBcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGVkZ2UgRWRnZSBvYmplY3QgXG4gICAgICovXG4gICAgYWRkRWRnZShlZGdlKSB7XG4gICAgICAgIGlmICghZWRnZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBhZGRFZGdlIEVycm9yOiBObyBlZGdlIGlzIGdpdmVuIScpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlciBcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGVkZ2UgRWRnZSBvYmplY3RcbiAgICAgKi9cbiAgICByZW1vdmVFZGdlKGVkZ2UpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0RWRnZUluZGV4ID0gdGhpcy5lZGdlTGlzdC5maW5kSW5kZXgoXG4gICAgICAgICAgICBlZGdlT2JqZWN0ID0+IGVkZ2VPYmplY3QgPT09IGVkZ2VcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBjaGlsZFxuICAgICAgICBpZiAoZXhwZWN0RWRnZUluZGV4ID09PSAtMSB8fCBleHBlY3RFZGdlSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBSZW1vdmVFZGdlIEVycm9yOiBOb3QgZmluZCB0aGUgZWRnZSEnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjaGlsZFxuICAgICAgICB0aGlzLmVkZ2VMaXN0LnNwbGljZShleHBlY3RFZGdlSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGluY29taW5nIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlclxuICAgICAqL1xuICAgIGFkZEluY29taW5nRWRnZShlZGdlKSB7XG4gICAgICAgIGlmICghZWRnZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBhZGRJbmNvbWluZ0VkZ2UgRXJyb3I6IE5vIGVkZ2UgaXMgZ2l2ZW4hJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluY29taW5nRWRnZUxpc3QucHVzaChlZGdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBpbmNvbWluZyBlZGdlIGZvciBjdXJyZW50IHNsZWVwZXIgXG4gICAgICogQHBhcmFtIHsqfSBlZGdlIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHJlbW92ZUluY29taW5nRWRnZShlZGdlKSB7XG4gICAgICAgIGNvbnN0IGV4cGVjdEVkZ2VJbmRleCA9IHRoaXMuaW5jb21pbmdFZGdlTGlzdC5maW5kSW5kZXgoXG4gICAgICAgICAgICBlZGdlT2JqZWN0ID0+IGVkZ2VPYmplY3QgPT09IGVkZ2VcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBjaGlsZFxuICAgICAgICBpZiAoZXhwZWN0RWRnZUluZGV4ID09PSAtMSB8fCBleHBlY3RFZGdlSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBSZW1vdmVJbmNvbWluZ0VkZ2UgRXJyb3I6IE5vdCBmaW5kIHRoZSBlZGdlIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjaGlsZFxuICAgICAgICB0aGlzLmluY29taW5nRWRnZUxpc3Quc3BsaWNlKGV4cGVjdEVkZ2VJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBjdXJyZW50IG5vZGUgc3RhdHVzXG4gICAgICovXG4gICAgY2hhbmdlU2xlZXBpbmdTdGF0dXMoYXJncykge1xuICAgICAgICAvLyBJZiBub3QgcGFzcyBzdGF0dXMgdGhlbiByZXZlcnNlIGN1cnJlbnQgc3RhdHVzXG4gICAgICAgIGlmIChhcmdzID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5pc1NsZWVwaW5nID0gIXRoaXMuaXNTbGVlcGluZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNTbGVlcGluZyA9IGFyZ3M7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIENoYW5nZSBjYW52YXMgaW5mb3JtYXRpb25cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICBmaWxsQ29sb3JcbiAgICAgICAgfSA9IFNsZWVwZXJzRmFjdG9yeS5nZXRDYW52YXNJbmZvcm1hdGlvbighdGhpcy5pc1NsZWVwaW5nKTtcblxuICAgICAgICB0aGlzLmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgZmlsbENvbG9yLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnkgdG8gYWN0aXZlIHRoZSBjaGlsZHJlbiBub2Rlc1xuICAgICAqL1xuICAgIGFjdGl2ZUNoaWxkKCkge1xuICAgICAgICBjb25zdCB0ZW1wQWN0aXZlZENoaWxkTGlzdCA9IFtdO1xuXG4gICAgICAgIC8vIEFjdGl2ZSB0aGUgY2hpbGRyZW4gaW4gb3JkZXJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChjaGlsZE9iamVjdCA9PiB7XG4gICAgICAgICAgICAvLyBPbmx5IGxvb2tpbmcgZm9yIHNsZWVwaW5nIG5vZGVcbiAgICAgICAgICAgIGlmICghY2hpbGRPYmplY3QuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgd2VpZ2h0ID0gY2hpbGRPYmplY3QucHJvYmFiaWxpdHk7XG5cbiAgICAgICAgICAgIC8vIENoYW5nZSB0aGUgY2hpbGQgc3RhdHVzIGlmIGFjdGl2ZVxuICAgICAgICAgICAgaWYgKGdldEFjdGl2aXR5QnlXZWlnaHQod2VpZ2h0KSkge1xuICAgICAgICAgICAgICAgIGNoaWxkT2JqZWN0LmNoYW5nZVNsZWVwaW5nU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgdGVtcEFjdGl2ZWRDaGlsZExpc3QucHVzaChjaGlsZE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0ZW1wQWN0aXZlZENoaWxkTGlzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNhbnZhcyBwYXRoXG4gICAgICogQHBhcmFtIHsqfSBjYW52YXNQYXRoT2JqZWN0IGNhbnZhcyBwYXRoIG9iamVjdFxuICAgICAqL1xuICAgIHNldENhbnZhc1BhdGgoYXJncykge1xuICAgICAgICBjb25zdCBbY2FudmFzUGF0aE9iamVjdCwgYW5jaG9yc0xpc3RdID0gYXJncztcbiAgICAgICAgdGhpcy5jYW52YXNQYXRoID0gY2FudmFzUGF0aE9iamVjdDtcblxuICAgICAgICBpZiAoISFhbmNob3JzTGlzdCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXNBbmNob3JzUGF0aExpc3QgPSBhbmNob3JzTGlzdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBzbGVlcGVyIGFjdGl2ZSBzdGF0dXNcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXIgdGhlIGV2ZW50IHJlY2lldmVkIHNsZWVwciBvYmplY3QsIG5vdGUgdGhhdCBpdCBtYXkgYmUgb3RoZXIgc2xlZXBlcnNcbiAgICAgKi9cbiAgICBjaGFuZ2VBY3RpdmVTdGF0dXMoc2xlZXBlcikge1xuICAgICAgICBpZiAoc2xlZXBlciA9PT0gdGhpcyAmJiB0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gU2VsZWN0IHRoaXMgc2xlZXBlciBhbmQgYWN0aXZlIGl0c2VsZlxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHtcbiAgICAgICAgICAgICAgICBpc0FuY2hvcjogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBY3RpdmUgJiYgc2xlZXBlciAhPT0gdGhpcykge1xuICAgICAgICAgICAgLy8gU2VsZWN0IG90aGVyIHNsZWVwZXIgdGhlbiBpbmFjdGl2ZSBpdHNlbGZcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbih7XG4gICAgICAgICAgICAgICAgaXNBbmNob3I6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFNldCBkcmFnIGZsYWdcbiAgICAgICAgaWYoc2xlZXBlciA9PT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hEcmFnU3RhdHVzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXNkcmFnJywgdGhpcy5pc0RyYWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHNsZWVwZXIgZHJhZyBzdGF0dXNcbiAgICAgKi9cbiAgICBzd2l0Y2hEcmFnU3RhdHVzKCkge1xuICAgICAgICB0aGlzLmlzRHJhZyA9ICF0aGlzLmlzRHJhZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgU2xlZXBlciBjYW52YXMgaW5mb3JtYXRpb24gYW5kIHRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydHlPYmplY3RcbiAgICAgKi9cbiAgICBjaGFuZ2VDYW52YXNJbmZvcm1hdGlvbihwcm9wZXJ0eU9iamVjdCkge1xuICAgICAgICAvLyBJdGVyYXRlIHRoZSBhbGVyYXRpb24gYW5kIHVwZGF0ZVxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHByb3BlcnR5T2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbnZhc0luZm9ybWF0aW9uW3Byb3BlcnR5XSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0luZm9ybWF0aW9uW3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIG5vbi1yZWxhdGVkIGZhY3RvciB3aXRoaW4gdGhpcyBzbGVlcGVyIGZvciBwYXN0ZVxuICAgICAqL1xuICAgIHByZXBhcmVGb3JQYXN0ZSgpIHtcbiAgICAgICAgLy8gVE9ETzogTWF5IG5lZWQgdG8gY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiBpdFxuXG4gICAgICAgIC8vIFJlbW92ZSBpdHMgZWRnZXMgYW5kIGluLW91dCBzbGVlcGVyXG4gICAgICAgIHRoaXMuZWRnZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5pbmNvbWluZ0VkZ2VMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRFZGdlTWFwTGlzdCA9IFtdO1xuXG4gICAgICAgIC8vIENoYW5nZSBzdGF0dXNcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNEcmFnID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGl0c2VsZiBcbiAgICAgKi9cbiAgICBkZWxldGVTZWxmKCkge1xuICAgICAgICBTbGVlcGVyUG9vbGVyLnJlbW92ZVNsZWVwZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVjb3ZlciBpdHNlbGZcbiAgICAgKi9cbiAgICByZWNvdmVyU2VsZigpIHtcbiAgICAgICAgU2xlZXBlclBvb2xlci5hZGRTbGVlcGVyKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgU2xlZXBlciB9OyIsImltcG9ydCB7IE1vdXNlQWN0aW9uQ29udHJvbGxlciB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9tb3VzZS9tb3VzZS1hY3Rpb24tY29udHJvbGxlcic7XG5pbXBvcnQgeyBNb3VzZUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9tb3VzZS9tb3VzZS1hY3Rpb24nO1xuaW1wb3J0IHsgS2V5Ym9hcmRBY3Rpb24gfSBmcm9tICcuLi9hY3Rpb24tbGF5ZXIva2V5Ym9hcmQva2V5Ym9hcmQtYWN0aW9uJztcbmltcG9ydCB7IEtleWJvYXJkQWN0aW9uQ29udHJvbGxlciB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9rZXlib2FyZC9rZXlib2FyZC1hY3Rpb24tY29udHJvbGxlcic7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9nbG9iYWwvZ2xvYmFsLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSAnLi9wYWludGVyL3BhaW50ZXInO1xuaW1wb3J0IHsgVW5kb1JlZG8gfSBmcm9tICcuLi8uLi91bmRvLXJlZG8vdW5kby1yZWRvJztcbmltcG9ydCB7IFNsZWVwZXJzRmFjdG9yeSB9IGZyb20gJy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLWZhY3RvcnknO1xuaW1wb3J0IHsgUGFuZWxPcGVyYXRpb25Db250cm9sbGVyIH0gZnJvbSAnLi4vYWN0aW9uLWxheWVyL3BhbmVsL3BhbmVsLW9wZXJhdGlvbi1jb250cm9sbGVyJztcbmltcG9ydCB7IFdha2luZ1Byb2Nlc3NDb250cm9sbGVyIH0gZnJvbSAnLi4vYWN0aW9uLWxheWVyL3dha2luZy1wcm9jZXNzL3dha2luZy1wcm9jZXNzLWNvbnRyb2xsZXInO1xuXG5jbGFzcyBDYW52YXMge1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ2FudmFzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFDYW52YXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgQ2FudmFzLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIENhbnZhcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhbnZhcyBpbnN0YW5jZVxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5pbml0UGFpbnRlcigpO1xuICAgICAgICB0aGlzLmluaXRBY3Rpb25SZWxhdGVkKCk7XG4gICAgICAgIHRoaXMuaW5pdFVuZG9SZWRvU3RhY2soKTtcbiAgICAgICAgdGhpcy5pbml0U2xlZXBlckZhY3RvcnkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhbnZhcyBjb250ZXh0XG4gICAgICovXG4gICAgaW5pdENvbnRleHQoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoR2xvYmFsQ29uZmlnLmNhbnZhc0lkKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIEdsb2JhbENvbmZpZy5wYW5kZWxXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gR2xvYmFsQ29uZmlnLmhlYWRlckhlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhbnZhcyBwYWludGVyXG4gICAgICovXG4gICAgaW5pdFBhaW50ZXIoKSB7XG4gICAgICAgIHRoaXMucGFpbnRlciA9IG5ldyBQYWludGVyKHRoaXMuY2FudmFzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhbnZhcyBhY3Rpb24gcmVsYXRlZFxuICAgICAqL1xuICAgIGluaXRBY3Rpb25SZWxhdGVkKCkge1xuICAgICAgICB0aGlzLm1vdXNlQWN0aW9uQ29udHJvbGxlciA9IG5ldyBNb3VzZUFjdGlvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy5tb3VzZUFjdGlvbiA9IG5ldyBNb3VzZUFjdGlvbih0aGlzLmNhbnZhcyk7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpb25Db250cm9sbGVyID0gbmV3IEtleWJvYXJkQWN0aW9uQ29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLmtleWJvYXJkQWN0aW9uID0gbmV3IEtleWJvYXJkQWN0aW9uKHRoaXMuY2FudmFzLCB0aGlzLm1vdXNlQWN0aW9uKTtcbiAgICAgICAgdGhpcy5wYW5lbE9wZXJhdGlvbkNvbnRyb2xsZXIgPSBuZXcgUGFuZWxPcGVyYXRpb25Db250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMud2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIgPSBuZXcgV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IFVuZG9SZWRvU3RhY2tcbiAgICAgKi9cbiAgICBpbml0VW5kb1JlZG9TdGFjaygpIHtcbiAgICAgICAgVW5kb1JlZG8uZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHNsZWVwZXIgZmFjdG9yeVxuICAgICAqL1xuICAgIGluaXRTbGVlcGVyRmFjdG9yeSgpIHtcbiAgICAgICAgU2xlZXBlcnNGYWN0b3J5Lm1vdW50Q2FudmFzKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ2FudmFzIH07IiwiZXhwb3J0IGNvbnN0IERlYWZ1bHRBbmNob3JTZXR0aW5nID0ge1xuICAgIGxpbmVXaWR0aDogMixcbiAgICBsaW5lQ29sb3I6ICdibGFjaycsXG4gICAgYW5jaG9yUmFkaXVzOiA0LFxufTtcblxuZXhwb3J0IGNvbnN0IERlYWZ1bHRBcnJvd1NldHRpbmcgPSB7XG4gICAgaGVhZExlbmd0aDogMTAsXG4gICAgbGluZVdpZHRoOiAyLFxuICAgIGxpbmVDb2xvcjogJ2JsYWNrJyxcbn07XG5cbmV4cG9ydCBjb25zdCBBY3RpdmVBcnJvd1NldHRpbmcgPSB7XG4gICAgbGluZVdpZHRoOiAzLCBcbiAgICBsaW5lQ29sb3I6ICcjMDA2OEZGJyxcbn07XG5cbmV4cG9ydCBjb25zdCBEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZyA9IHtcbiAgICBsaW5lV2lkdGg6IDIsXG4gICAgbGluZUNvbG9yOiAnIzMzNjZGRicsXG59ICIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBQYWludGVyRXZlbnROYW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IFxuICAgIERlYWZ1bHRBbmNob3JTZXR0aW5nLFxuICAgIERlYWZ1bHRBcnJvd1NldHRpbmcsXG4gICAgRGVhZmF1bHRCb3VuZGluZ0JveFNldHRpbmcsXG4gICAgQWN0aXZlQXJyb3dTZXR0aW5nLFxufSBmcm9tICcuL2NvbmZpZyc7XG5cbmNsYXNzIEZpZ3VyZVBhaW50ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY2FudmFzQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gY2FudmFzQ29udGV4dDtcbiAgICAgICAgdGhpcy5kcmF3TWFwID0ge1xuICAgICAgICAgICAgJ2NpcmNsZSc6IHRoaXMuZHJhd0NpcmNsZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2Fycm93JzogdGhpcy5kcmF3QXJyb3cuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICd0ZXh0YXJlYSc6IHRoaXMuZHJhd1RleHRhcmVhLmJpbmQodGhpcyksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBQYWludGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFBhaW50ZXJFdmVudE5hbWUuZmlndXJlRHJhdywgdGhpcy5kcmF3LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIGNvcnJlc3BvbmQgaW1hZ2VzIGdpdmVuIHJlbGF0ZWQgaW5mb3JtYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IHBhcmFtcyBcbiAgICAgKiBAcmV0dXJucyB7Kn0gY2FudmFzIHBhdGhcbiAgICAgKi9cbiAgICBkcmF3KHBhcmFtcywgc2V0UGF0aENhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHsgZHJhd1R5cGUgfSA9IHBhcmFtcztcblxuICAgICAgICAvLyBSYWlzZSB0aGUgZXJyb3IgaWYgdGhlIHNoYXBlIG5vdCBpbmNsdWRlZCBcbiAgICAgICAgaWYgKCEoZHJhd1R5cGUgaW4gdGhpcy5kcmF3TWFwKSkge1xuICAgICAgICAgICAgcmV0dXJuIEVycm9yKCdGaWd1cmUgRHJhdyBFcnJvcjogR2l2ZW4gdHlwZSBub3QgZm91bmQhJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIERyYXcgdGhlIGNvcnJlc3BvbmQgc2hhcGUgYW5kIHNldCB0aGUgcGF0aCB0byB0aGUgc2xlZXBlclxuICAgICAgICBzZXRQYXRoQ2FsbGJhY2sodGhpcy5kcmF3TWFwW2RyYXdUeXBlXShwYXJhbXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3IGNpcmxlIG9uIGNhbnZhc1xuICAgICAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGRyYXdDaXJjbGUocGFyYW1zKSB7XG4gICAgICAgIC8vIEV4dHJhY3QgdGhlIGRyYXdpbmcgcGFyYW1ldGVyc1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgIGlzRmlsbGVkLFxuICAgICAgICAgICAgaXNCb3JkZXIsXG4gICAgICAgICAgICBib3JkZXJXaXRoLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICBpc0FuY2hvcixcbiAgICAgICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yLFxuICAgICAgICB9ID0gcGFyYW1zO1xuXG4gICAgICAgIC8vIERyYXcgdGhlIGNpcmNsZVxuICAgICAgICBjb25zdCBjaXJjbGUgPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgIGNpcmNsZS5hcmMoXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEZpbGwgdGhlIGNpcmNsZVxuICAgICAgICBjb25zdCBmaWxsQ29sb3IgPSBwYXJhbXNbJ2ZpbGxDb2xvciddO1xuICAgICAgICBpZiAoaXNGaWxsZWQgJiYgZmlsbENvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZpbGwoY2lyY2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERyYXcgdGhlIGJvcmRlclxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhIShcbiAgICAgICAgICAgICAgICBpc0JvcmRlclxuICAgICAgICAgICAgICAgICYmIGJvcmRlcldpdGhcbiAgICAgICAgICAgICAgICAmJiBib3JkZXJDb2xvclxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5saW5lV2lkdGggPSBib3JkZXJXaXRoO1xuICAgICAgICAgICAgaWYgKGlzQW5jaG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gYWN0aXZlQm9yZGVyQ29sb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlKGNpcmNsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEcmF3IHRoZSBhbmNob3JcbiAgICAgICAgY29uc3QgYW5jaG9yc1BhdGhMaXN0ID0gW107XG4gICAgICAgIGlmIChpc0FuY2hvcikge1xuICAgICAgICAgICAgLy8gU2V0IHN0cm9rZSBzdHlsZVxuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmxpbmVXaWR0aCA9IERlYWZ1bHRBbmNob3JTZXR0aW5nLmxpbmVXaWR0aDtcblxuICAgICAgICAgICAgY29uc3QgYW5jaG9yUG9zaXRpb25MaXN0ID0gW1xuICAgICAgICAgICAgICAgIHt4OiB4ICsgcmFkaXVzLCB5OiB5fSxcbiAgICAgICAgICAgICAgICB7eDogeCAtIHJhZGl1cywgeTogeX0sXG4gICAgICAgICAgICAgICAge3g6IHgsIHk6IHkgKyByYWRpdXN9LFxuICAgICAgICAgICAgICAgIHt4OiB4LCB5OiB5IC0gcmFkaXVzfSxcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgYW5jaG9yUG9zaXRpb24gb2YgYW5jaG9yUG9zaXRpb25MaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gRGVhZnVsdEFuY2hvclNldHRpbmcubGluZUNvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnN0IHt4ICx5fSA9IGFuY2hvclBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuY2hvclBhdGggPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgICAgICAgICAgYW5jaG9yUGF0aC5hcmMoXG4gICAgICAgICAgICAgICAgICAgIHgsIFxuICAgICAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgICAgICBEZWFmdWx0QW5jaG9yU2V0dGluZy5hbmNob3JSYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZShhbmNob3JQYXRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbChhbmNob3JQYXRoKTtcbiAgICAgICAgICAgICAgICBhbmNob3JzUGF0aExpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvclBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2NpcmNsZSwgYW5jaG9yc1BhdGhMaXN0XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3IGFycm93IG9uIGNhbnZhc1xuICAgICAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICAgICAqL1xuICAgIGRyYXdBcnJvdyhwYXJhbXMpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHN0YXJ0TG9jYXRpb24sXG4gICAgICAgICAgICBlbmRMb2NhdGlvbixcbiAgICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICB9ID0gcGFyYW1zO1xuXG4gICAgICAgIC8vIElmIG9ubHkgb25lIGxvY2F0aW9uIHByb3ZpZGVkLCB0aGVuIHNldCB0aGUgb3RoZXIgdGhlIHNhbWVcbiAgICAgICAgaWYoIXN0YXJ0TG9jYXRpb24pIHtcbiAgICAgICAgICAgIHN0YXJ0TG9jYXRpb24gPSBlbmRMb2NhdGlvbjtcbiAgICAgICAgfSBlbHNlIGlmICghZW5kTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGVuZExvY2F0aW9uID0gc3RhcnRMb2NhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnkgLSBzdGFydExvY2F0aW9uLnksIFxuICAgICAgICAgICAgZW5kTG9jYXRpb24ueCAtIHN0YXJ0TG9jYXRpb24ueFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFNldCBzdHJva2Ugc3R5bGVcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gaXNBY3RpdmUgPyBcbiAgICAgICAgICAgIEFjdGl2ZUFycm93U2V0dGluZy5saW5lQ29sb3IgOlxuICAgICAgICAgICAgRGVhZnVsdEFycm93U2V0dGluZy5saW5lQ29sb3I7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5saW5lV2lkdGggPSBpc0FjdGl2ZSA/IFxuICAgICAgICAgICAgQWN0aXZlQXJyb3dTZXR0aW5nLmxpbmVXaWR0aCA6XG4gICAgICAgICAgICBEZWFmdWx0QXJyb3dTZXR0aW5nLmxpbmVXaWR0aDtcblxuICAgICAgICBjb25zdCBsaW5lID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICBjb25zdCBoZWFkID0gbmV3IFBhdGgyRCgpO1xuXG4gICAgICAgIC8vIERyYXcgdGhlIGxpbmUgXG4gICAgICAgIGxpbmUubW92ZVRvKHN0YXJ0TG9jYXRpb24ueCwgc3RhcnRMb2NhdGlvbi55KTtcbiAgICAgICAgbGluZS5saW5lVG8oZW5kTG9jYXRpb24ueCwgZW5kTG9jYXRpb24ueSk7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2UobGluZSk7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgaGVhZFxuICAgICAgICBoZWFkLm1vdmVUbyhcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnggLSBEZWFmdWx0QXJyb3dTZXR0aW5nLmhlYWRMZW5ndGggKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSxcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnkgLSBEZWFmdWx0QXJyb3dTZXR0aW5nLmhlYWRMZW5ndGggKiBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyA2KVxuICAgICAgICApO1xuICAgICAgICBoZWFkLmxpbmVUbyhlbmRMb2NhdGlvbi54LCBlbmRMb2NhdGlvbi55KTtcbiAgICAgICAgaGVhZC5saW5lVG8oXG4gICAgICAgICAgICBlbmRMb2NhdGlvbi54IC0gRGVhZnVsdEFycm93U2V0dGluZy5oZWFkTGVuZ3RoICogTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJIC8gNiksXG4gICAgICAgICAgICBlbmRMb2NhdGlvbi55IC0gRGVhZnVsdEFycm93U2V0dGluZy5oZWFkTGVuZ3RoICogTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJIC8gNilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZShoZWFkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7bGluZSwgaGVhZH07XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIHRleHRhcmVhXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gICAgICovXG4gICAgZHJhd1RleHRhcmVhKHBhcmFtcykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBzbGVlcGVyUG9zaXRpb24sXG4gICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uLFxuICAgICAgICB9ID0gcGFyYW1zO1xuXG4gICAgICAgIGNvbnN0IGJvdW5kaW5nQm94UGF0aCA9IG5ldyBQYXRoMkQoKTtcblxuICAgICAgICBib3VuZGluZ0JveFBhdGgucmVjdChcbiAgICAgICAgICAgIHNsZWVwZXJQb3NpdGlvbi54IC0gdGV4dGFyZWFJbmZvcm1hdGlvbi53aWR0aCAvIDIsXG4gICAgICAgICAgICBzbGVlcGVyUG9zaXRpb24ueSAtIHRleHRhcmVhSW5mb3JtYXRpb24uaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHRleHRhcmVhSW5mb3JtYXRpb24ud2lkdGgsXG4gICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uLmhlaWdodCxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQubGluZVdpZHRoID0gRGVhZmF1bHRCb3VuZGluZ0JveFNldHRpbmcubGluZVdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZy5saW5lQ29sb3I7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2UoYm91bmRpbmdCb3hQYXRoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBib3VuZGluZ0JveFBhdGg7XG4gICAgfVxufVxuXG5leHBvcnQgeyBGaWd1cmVQYWludGVyIH07IiwiaW1wb3J0IHsgRmlndXJlUGFpbnRlciB9IGZyb20gJy4vZmlndXJlL3BhaW50ZXInO1xuaW1wb3J0IHsgVGV4dFBhaW50ZXIgfSBmcm9tICcuL3RleHQvcGFpbnRlcic7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXBvb2wnO1xuaW1wb3J0IHsgRWRnZVBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLXBvb2wnO1xuaW1wb3J0IHsgUGFpbnRlckV2ZW50TmFtZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbmNsYXNzIFBhaW50ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAvLyBJbml0IGRpZmZlcmVudCBwYWludGVyXG4gICAgICAgIHRoaXMuaW5pdFBhaW50ZXIoKTtcblxuICAgICAgICAvLyBJbml0IGV2ZW50ZXIgaGFuZGxlclxuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBldmVudCBoYW5kbGVyIHJlbGF0ZWQgdG8gUGFpbnRlclxuICAgICAqL1xuICAgIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsIHRoaXMucmVwYWludC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBpbml0UGFpbnRlcigpIHtcbiAgICAgICAgdGhpcy5maWd1cmUgPSBuZXcgRmlndXJlUGFpbnRlcih0aGlzLmNhbnZhcywgdGhpcy5jYW52YXNDb250ZXh0KTtcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IFRleHRQYWludGVyKHRoaXMuY2FudmFzLCB0aGlzLmNhbnZhc0NvbnRleHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGFpbnQgYWxsIGNhbnZhcyBvYmplY3RcbiAgICAgKi9cbiAgICByZXBhaW50KCkge1xuICAgICAgICAvLyBDbGVhbiB0aGUgY2FudmFzXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0byBkcmF3IHRoZSBzbGVlcGVyXG4gICAgICAgIGZvciAoY29uc3Qgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IE1ha2UgaXQgYXMgYSBmdW5jdGlvbiBvZiBzbGVlcGVyXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LFxuICAgICAgICAgICAgICAgIHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24sXG4gICAgICAgICAgICAgICAgc2xlZXBlci5zZXRDYW52YXNQYXRoLmJpbmQoc2xlZXBlcilcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIFJld3JpdGUgdGhlIHRleHRcbiAgICAgICAgICAgIHNsZWVwZXIuZHJhd1RleHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEl0ZXJhdGUgdG8gZHJhdyB0aGUgZWRnZVxuICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgRWRnZVBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZHJhd1R5cGU6ICdhcnJvdycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0TG9jYXRpb246IGVkZ2Uuc3RhcnRMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZW5kTG9jYXRpb246IGVkZ2UuZW5kTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBlZGdlLmlzQWN0aXZlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRnZS5zZXRDYW52YXNQYXRoLmJpbmQoZWRnZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IFBhaW50ZXIgfTsiLCJpbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgUGFpbnRlckV2ZW50TmFtZSB9IGZyb20gJy4uLy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbmNsYXNzIFRleHRQYWludGVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNhbnZhc0NvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dCA9IGNhbnZhc0NvbnRleHQ7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBQYWludGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFBhaW50ZXJFdmVudE5hbWUudGV4dFdyaXRlLCB0aGlzLndyaXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlIHRoZSB0ZXh0IGZvbGxvdyB0aGUgcGFyYW1zIGdpdmVuXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gICAgICogQHBhcmFtIHsqfSBzZXRQYXRoQ2FsbGJhY2sgXG4gICAgICovXG4gICAgd3JpdGUocGFyYW1zLCBzZXRUZXh0YXJlYUNhbGxiYWNrKSB7XG4gICAgICAgIC8vIFBhcnNlIGNvbmZpZ3VyYXRpb25zXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgbWF4V2lkdGgsXG4gICAgICAgICAgICBpbmZvcm1hdGlvbixcbiAgICAgICAgfSA9IHBhcmFtcztcblxuICAgICAgICAvLyBHZXQgc2l6ZVxuICAgICAgICBsZXQgc2l6ZSA9IGluZm9ybWF0aW9uLnNpemUgfHwgJzEyJztcbiAgICAgICAgc2l6ZSArPSAncHgnXG5cbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZvbnQgPSBgJHtzaXplfSAke2luZm9ybWF0aW9uLnN0eWxlfWA7XG4gICAgICAgIFxuICAgICAgICAvLyBQcmVwYXJlIHdyaXRpbmcgdGV4dCBwYXJhbXNcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZpbGxTdHlsZSA9IGluZm9ybWF0aW9uLmNvbG9yO1xuICAgICAgICBjb25zdCBmaWxsSW5mbyA9IHRoaXMuX2dldEZpbGxMaXN0KHBvc2l0aW9uLCBpbmZvcm1hdGlvbi5jb250ZW50LCBtYXhXaWR0aCk7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbGxMaXN0LFxuICAgICAgICAgICAgdGV4dGFyZWFJbmZvcm1hdGlvbixcbiAgICAgICAgfSA9IGZpbGxJbmZvO1xuXG4gICAgICAgIC8vIFNldCBjYWxsYmFjayB0byBkcmF3IHRoZSB0ZXh0YXJlYSBmaXJzdFxuICAgICAgICBzZXRUZXh0YXJlYUNhbGxiYWNrKHRleHRhcmVhSW5mb3JtYXRpb24sICd0ZXh0YXJlYScpO1xuICAgICAgICBcbiAgICAgICAgLy8gV3JpdGUgdGV4dFxuICAgICAgICBmb3IgKGxldCB0ZXh0IG9mIGZpbGxMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFRleHQodGV4dFswXSwgdGV4dFsxXSwgdGV4dFsyXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZmlsbCBsaXN0IGZvciBzaW5nbGUgLyBtdWx0aXBsZSBsaW5lc1xuICAgICAqIEBwYXJhbSB7Kn0gcG9zaXRpb24gc2xlZXBlciBjZW50ZXJcbiAgICAgKiBAcGFyYW0geyp9IGNvbnRlbnQgdGV4dCBjb250ZW50XG4gICAgICogQHBhcmFtIHsqfSBtYXhXaWR0aCBwcmVkZWZpbmVkIG1heGltYWwgd2lkdGhcbiAgICAgKiBAcmV0dXJucyBmaWxsaW5nIGxpc3QgYW5kIHRleHRhcmVhIGluZm9ybWF0aW9uXG4gICAgICovXG4gICAgX2dldEZpbGxMaXN0KHBvc2l0aW9uLCBjb250ZW50LCBtYXhXaWR0aCkgeyAgICAgXG4gICAgICAgIGxldCBtZXRyaWNzID0gdGhpcy5jYW52YXNDb250ZXh0Lm1lYXN1cmVUZXh0KGNvbnRlbnQpO1xuICAgICAgICBsZXQgZmlsbExpc3QgPSBbXVxuXG4gICAgICAgIGlmIChtZXRyaWNzLndpZHRoIDwgbWF4V2lkdGgpIHtcbiAgICAgICAgICAgIC8vIEdldCB0ZXh0IGxvY2F0aW9uIGluZm9ybWF0aW9uXG4gICAgICAgICAgICBsZXQgeCA9IHBvc2l0aW9uLnggLSBtZXRyaWNzLndpZHRoIC8gMjtcbiAgICAgICAgICAgIGxldCB5ID0gcG9zaXRpb24ueSArIChtZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94QXNjZW50ICsgbWV0cmljcy5hY3R1YWxCb3VuZGluZ0JveERlc2NlbnQpIC8gMjtcblxuICAgICAgICAgICAgLy8gR2V0IHRleHRhcmVhIGxvY2F0aW9uIGluZm9ybWF0aW9uXG4gICAgICAgICAgICBsZXQgdGV4dGFyZWFJbmZvcm1hdGlvbiA9ICB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG1heFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogKG1ldHJpY3MuZm9udEJvdW5kaW5nQm94QXNjZW50ICsgbWV0cmljcy5mb250Qm91bmRpbmdCb3hEZXNjZW50KSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZpbGxMaXN0LnB1c2goW2NvbnRlbnQsIHgsIHldKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmlsbExpc3QsXG4gICAgICAgICAgICAgICAgdGV4dGFyZWFJbmZvcm1hdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBGb3IgbXVsdGlwbGUgbGluZXNcbiAgICAgICAgcmV0dXJuIGZpbGxMaXN0O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVGV4dFBhaW50ZXIgfTsiLCJleHBvcnQgY29uc3QgU2xlZXBlckV2ZW50TmFtZSA9IHtcbiAgICBhY3RpdmVTb21lU2xlZXBlcjogJ2FjdGl2ZVNvbWVTbGVlcGVyJyxcbiAgICBhY3RpdmVTb21lU2xlZXBlclRleHRNb2RlOiAnYWN0aXZlU29tZVNsZWVwZXJUZXh0TW9kZScsXG59O1xuXG5leHBvcnQgY29uc3QgRWRnZUV2ZW50TmFtZSA9IHtcbiAgICBhY3RpdmVTb21lRWRnZTogJ2FjdGl2ZVNvbWVFZGdlJyxcbn1cblxuZXhwb3J0IGNvbnN0IFNsZWVwZXJQb29sRXZlbnROYW1lID0ge1xuICAgIGFkZFNsZWVwZXI6ICdhZGRTbGVlcGVyJyxcbn07XG5cbmV4cG9ydCBjb25zdCBFZGdlUG9vbEV2ZW50TmFtZSA9IHtcbiAgICBhZGRFZGdlOiAnYWRkRWRnZScsXG59O1xuXG5leHBvcnQgY29uc3QgUGFpbnRlckV2ZW50TmFtZSA9IHtcbiAgICBmaWd1cmVEcmF3OiAnZmlndXJlRHJhdycsXG4gICAgdGV4dFdyaXRlOiAndGV4dFdyaXRlJyxcbiAgICByZXBhaW50OiAncmVwYWludCcsXG59O1xuXG5leHBvcnQgY29uc3QgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZSA9IHtcbiAgICBtb3VzZURvd25TbGVlcGVyOiAnbW91c2VEb3duU2xlZXBlcicsXG4gICAgbW91c2VEb3duTGluZTogJ21vdXNlRG93bkxpbmUnLFxuICAgIG1vdXNlRG93bkJhY2tncm91bmQ6ICdtb3VzZURvd25CYWNrZ3JvdW5kJyxcbiAgICBtb3VzZU1vdmVTbGVlcGVyOiAnbW91c2VNb3ZlJyxcbiAgICBtb3VzZU1vdmVBbmNob3I6ICdtb3VzZU1vdmVBbmNob3InLFxuICAgIG1vdXNlTW92ZUhlYWQ6ICdtb3VzZU1vdmVIZWFkJyxcbiAgICBtb3VzZVVwU2xlZXBlcjogJ21vdXNlVXBTbGVlcGVyJyxcbiAgICBtb3VzZVVwQW5jaG9yOiAnbW91c2VVcEFuY2hvcicsXG4gICAgbW91c2VVcEhlYWQ6ICdtb3VzZVVwSGVhZCcsXG4gICAgbW91c2VEb3VibGVDbGljazogJ21vdXNlRG91YmxlQ2xpY2snLFxuICAgIG1vdXNlUmlnaHRDbGljazogJ21vdXNlUmlnaHRDbGljaycsXG4gICAga2V5Ym9hcmREZWxldGU6ICdrZXlib2FyZERlbGV0ZScsXG4gICAga2V5Ym9hcmRDb3B5OiAna2V5Ym9hcmRDb3B5JyxcbiAgICBrZXlib2FyZFBhc3RlOiAna2V5Ym9hcmRQYXN0ZScsXG4gICAga2V5Ym9hcmRUZXh0RGVsZXRlOiAna2V5Ym9hcmRUZXh0RGVsZXRlJyxcbiAgICBrZXlib2FyZElucHV0OiAna2V5Ym9hcmRJbnB1dCcsXG4gICAga2V5Ym9hcmRUZXh0UmVkbzogJ2tleWJvYXJkVGV4dFJlZG8nLFxuICAgIGtleWJvYXJkVGV4dFVuZG86ICdrZXlib2FyZFRleHRVbmRvJyxcbn07XG5cbmV4cG9ydCBjb25zdCBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lID0ge1xuICAgIGNsb3NlQ29sb3JQaWNrZXI6ICdjbG9zZUNvbG9yUGlja2VyJyxcbiAgICBjcmVhdGVOb2RlOiAnY3JlYXRlTm9kZScsXG4gICAgcGFuZWxDcmVhdGVOb2RlOiAncGFuZWxDcmVhdGVOb2RlJyxcbiAgICBjaGFuZ2VOb2RlU3R5bGU6ICdjaGFuZ2VOb2RlU3R5bGUnLFxuICAgIGNoYW5nZUFsbFByb2JhYmlsaXR5OiAnY2hhbmdlQWxsUHJvYmFiaWxpdHknLFxuICAgIHN0YXJ0V2FraW5nUHJvY2VzczogJ3N0YXJ0V2FraW5nUHJvY2VzcycsXG4gICAgcGF1c2VXYWtpbmdQcm9jZXNzOiAncGF1c2VXYWtpbmdQcm9jZXNzJyxcbiAgICBlbmRXYWtpbmdQcm9jZXNzOiAnZW5kV2FraW5nUHJvY2VzcycsXG4gICAgcmVzZXRTbGVlcGVyczogJ3Jlc2V0U2xlZXBlcnMnLFxuICAgIHBhbmVsQWN0aXZlOiAncGFuZWxBY3RpdmUnLFxufTtcblxuZXhwb3J0IGNvbnN0IFVuZG9SZWRvRXZlbnROYW1lID0ge1xuICAgIGFkZE11dGF0aW9uOiAnYWRkTXV0YXRpb24nLFxuICAgIHVuZG86ICd1bmRvJyxcbiAgICByZWRvOiAncmVkbycsXG59OyIsImV4cG9ydCBjb25zdCBHbG9iYWxDb25maWcgPSB7XG4gICAgY2FudmFzSWQ6ICdteUNhbnZhcycsXG4gICAgaGVhZGVySGVpZ2h0OiA2NixcbiAgICBwYW5kZWxXaWR0aDogMzAwLFxufTsiLCJleHBvcnQgY29uc3QgU2F2ZWRPcGVyYXRpb24gPSB7XG4gICAgbW92ZVNsZWVwZXI6ICdtb3ZlU2xlZXBlcicsXG4gICAgYWRkRWRnZUZyb21BbmNob3I6ICdhZGRFZGdlRnJvbUFuY2hvcicsXG4gICAgbW92ZUhlYWQ6ICdtb3ZlSGVhZCcsXG4gICAgZGVsZXRlOiAnZGVsZXRlJyxcbiAgICBwYXN0ZTogJ3Bhc3RlJyxcbiAgICBjcmVhdGVTbGVlcGVyOiAnY3JlYXRlU2xlZXBlcicsXG59OyIsImltcG9ydCB7IFNhdmVkT3BlcmF0aW9uIH0gZnJvbSAnLi9vcGVyYXRpb24nO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFBhaW50ZXJFdmVudE5hbWUgfSBmcm9tICcuLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4uL2NvcmUvZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXInO1xuXG4vKipcbiAqIFJlZG8gY29udHJvbGxlciB0byBhY3R1YWxseSBkZWFsIHdpdGggdGhlIHJlZG9pbmcgdGhlIHRhc2tzXG4gKiBAcGFyYW0geyp9IHRhc2sgXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZG9Db250cm9sbGVyKHRhc2spIHtcbiAgICBjb25zdCB7XG4gICAgICAgIG9iamVjdCxcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgfSA9IHRhc2s7XG5cbiAgICBzd2l0Y2gob3BlcmF0aW9uKSB7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLm1vdmVTbGVlcGVyKTpcbiAgICAgICAgICAgIHJlZG9Nb3ZlU2xlZXBlcihvYmplY3QsIHBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24uYWRkRWRnZUZyb21BbmNob3IpOlxuICAgICAgICAgICAgcmVkb01vdmVBbmNob3Iob2JqZWN0LCBwYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLm1vdmVIZWFkKTpcbiAgICAgICAgICAgIHJlZG9Nb3ZlSGVhZChvYmplY3QsIHBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24uZGVsZXRlKTpcbiAgICAgICAgICAgIHJlZG9EZWxldGVJdGVtcyhvYmplY3QpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLnBhc3RlKTpcbiAgICAgICAgICAgIHJlZG9QYXN0ZShvYmplY3QpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLmNyZWF0ZVNsZWVwZXIpOlxuICAgICAgICAgICAgcmVkb0NyZWF0ZVNsZWVwZXIob2JqZWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICApO1xufVxuXG5cbi8qKlxuICogUmVkbyBtb3ZlIHNsZWVwZXIgb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBSZWNpZXZlZCBjdXJyZW50IHNsZWVwZXIgbm9kZVxuICogQHBhcmFtIHsqfSBwYXJhbXMgb3BlcmF0aW9uIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gcmVkb01vdmVTbGVlcGVyKG9iamVjdCwgcGFyYW1zKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBvYmplY3QuY2FudmFzSW5mb3JtYXRpb25cbiAgICBjb25zdCB7IGNoYW5nZUxvY2F0aW9uIH0gPSBwYXJhbXM7XG4gICAgY29uc3QgcmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICB4OiB4ICsgY2hhbmdlTG9jYXRpb24ueCxcbiAgICAgICAgeTogeSArIGNoYW5nZUxvY2F0aW9uLnksXG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHNsZWVwZXIgY2FudmFzIGxvY2F0aW9uXG4gICAgb2JqZWN0LmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHJlY292ZXJMb2NhdGlvbik7XG5cbiAgICAvLyBDaGFuZ2UgdGhlIGNvbm5lY3RlZCBvdXRjb21pbmcgZWRnZXMnIGxvY2F0aW9uXG4gICAgZm9yIChjb25zdCBlZGdlIG9mIG9iamVjdC5lZGdlTGlzdCkge1xuICAgICAgICBjb25zdCBlZGdlUmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZWRnZS5zdGFydExvY2F0aW9uLnggKyBjaGFuZ2VMb2NhdGlvbi54LFxuICAgICAgICAgICAgeTogZWRnZS5zdGFydExvY2F0aW9uLnkgKyBjaGFuZ2VMb2NhdGlvbi55LFxuICAgICAgICB9O1xuXG4gICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oXG4gICAgICAgICAgICAnc3RhcnQnLFxuICAgICAgICAgICAgZWRnZVJlY292ZXJMb2NhdGlvbixcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIGluY29taW5nIGVkZ2VzJyBsb2NhdGlvblxuICAgIGZvciAoY29uc3QgZWRnZSBvZiBvYmplY3QuaW5jb21pbmdFZGdlTGlzdCkge1xuICAgICAgICBjb25zdCBlZGdlUmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZWRnZS5lbmRMb2NhdGlvbi54ICsgY2hhbmdlTG9jYXRpb24ueCxcbiAgICAgICAgICAgIHk6IGVkZ2UuZW5kTG9jYXRpb24ueSArIGNoYW5nZUxvY2F0aW9uLnksXG4gICAgICAgIH07XG5cbiAgICAgICAgZWRnZS5zZXRMb2NhdGlvbihcbiAgICAgICAgICAgICdlbmQnLFxuICAgICAgICAgICAgZWRnZVJlY292ZXJMb2NhdGlvbixcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVkbyBtb3ZlIGFuY2hvciBvcGVyYXRpb25cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFJlY2lldmVkIGVkZ2Ugb2JqZWN0XG4gKiBAcGFyYW0geyp9IHBhcmFtcyB0aGUgc2xlZXBlciBub2RlIHdoZXJlIHRoZSBlZGdlIHN0YXJ0XG4gKi9cbmZ1bmN0aW9uIHJlZG9Nb3ZlQW5jaG9yKG9iamVjdCwgcGFyYW1zKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBlZGdlIGNyZWF0ZWRcbiAgICBvYmplY3QucmVjb3ZlclNlbGYoKTtcbn1cblxuLyoqXG4gKiBVbmRvIG1vdmUgaGVhZCBvcGVyYXRpb25cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFxuICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gKi9cbmZ1bmN0aW9uIHJlZG9Nb3ZlSGVhZChvYmplY3QsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgY2hhbmdlRW5kTG9jYXRpb24gfSA9IHBhcmFtcztcblxuICAgIC8vIFJlY292ZXIgZWdkZSBlbmQgbG9jYXRpb25cbiAgICBjb25zdCByZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgIHg6IG9iamVjdC5lbmRMb2NhdGlvbi54ICsgY2hhbmdlRW5kTG9jYXRpb24ueCxcbiAgICAgICAgeTogb2JqZWN0LmVuZExvY2F0aW9uLnkgKyBjaGFuZ2VFbmRMb2NhdGlvbi55LFxuICAgIH07XG5cbiAgICBvYmplY3Quc2V0TG9jYXRpb24oXG4gICAgICAgICdlbmQnLFxuICAgICAgICByZWNvdmVyTG9jYXRpb24sXG4gICAgKTtcblxuICAgIC8vIFJlY292ZXIgYWRkZWQgZW5kIHNsZWVwZXIgaWYgbmVlZGVkXG4gICAgaWYgKCEhcGFyYW1zWydhZGRlZEVuZFNsZWVwZXInXSkge1xuICAgICAgICBwYXJhbXNbJ2FkZGVkRW5kU2xlZXBlciddLmFkZEluY29taW5nRWRnZShvYmplY3QpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZWRvIGRlbGV0ZSB0aGUgY2xpY2tlZCBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IERlbGV0ZWQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHJlZG9EZWxldGVJdGVtcyhvYmplY3QpIHtcbiAgICBvYmplY3QuZGVsZXRlU2VsZigpO1xufVxuXG4vKipcbiAqIFJlZG8gcGFzdGUgdGhlIGl0ZW1cbiAqL1xuZnVuY3Rpb24gcmVkb1Bhc3RlKG9iamVjdCkge1xuICAgIGZvciAobGV0IGl0ZW0gb2Ygb2JqZWN0KSB7XG4gICAgICAgIC8vIFRPRE86IE9ubHkgc3VwcG9ydCBzbGVlcGVyIG5vd1xuICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIFNsZWVwZXIpIHtcbiAgICAgICAgICAgIGl0ZW0ucmVjb3ZlclNlbGYoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBSZWRvIGNyZWF0ZSB0aGUgc2xlZXBlclxuICogQHBhcmFtIHsqfSBvYmplY3QgXG4gKi9cbmZ1bmN0aW9uIHJlZG9DcmVhdGVTbGVlcGVyKG9iamVjdCkge1xuICAgIG9iamVjdC5yZWNvdmVyU2VsZigpO1xufVxuXG4iLCJpbXBvcnQgeyBTYXZlZE9wZXJhdGlvbiB9IGZyb20gJy4vb3BlcmF0aW9uJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBQYWludGVyRXZlbnROYW1lIH0gZnJvbSAnLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IFNsZWVwZXIgfSBmcm9tICcuLi9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyJztcblxuLyoqXG4gKiBVbmRvIGNvbnRyb2xsZXIgdG8gYWN0dWFsbHkgZGVhbCB3aXRoIHRoZSB1bmRvaW5nIHRoZSB0YXNrc1xuICogQHBhcmFtIHsqfSB0YXNrIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5kb0NvbnRyb2xsZXIodGFzaykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgb2JqZWN0LCBcbiAgICAgICAgcGFyYW1zLCBcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgIH0gPSB0YXNrO1xuXG4gICAgc3dpdGNoKG9wZXJhdGlvbikge1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5tb3ZlU2xlZXBlcik6XG4gICAgICAgICAgICB1bmRvTW92ZVNsZWVwZXIob2JqZWN0LCBwYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLmFkZEVkZ2VGcm9tQW5jaG9yKTpcbiAgICAgICAgICAgIHVuZG9Nb3ZlQW5jaG9yKG9iamVjdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5tb3ZlSGVhZCk6XG4gICAgICAgICAgICB1bmRvTW92ZUhlYWQob2JqZWN0LCBwYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLmRlbGV0ZSk6XG4gICAgICAgICAgICB1bmRvRGVsZXRlSXRlbXMob2JqZWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5wYXN0ZSk6XG4gICAgICAgICAgICB1bmRvUGFzdGUob2JqZWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5jcmVhdGVTbGVlcGVyKTpcbiAgICAgICAgICAgIHVuZG9DcmVhdGVTbGVlcGVyKG9iamVjdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgKTtcbn1cblxuLyoqXG4gKiBVbmRvIG1vdmUgc2xlZXBlciBvcGVyYXRpb25cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFJlY2lldmVkIGN1cnJlbnQgc2xlZXBlciBub2RlXG4gKiBAcGFyYW0geyp9IHBhcmFtcyBvcGVyYXRpb24gcGFyYW1ldGVyc1xuICovXG5mdW5jdGlvbiB1bmRvTW92ZVNsZWVwZXIob2JqZWN0LCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IG9iamVjdC5jYW52YXNJbmZvcm1hdGlvblxuICAgIGNvbnN0IHsgY2hhbmdlTG9jYXRpb24gfSA9IHBhcmFtcztcbiAgICBjb25zdCByZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgIHg6IHggLSBjaGFuZ2VMb2NhdGlvbi54LFxuICAgICAgICB5OiB5IC0gY2hhbmdlTG9jYXRpb24ueSxcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2Ugc2xlZXBlciBjYW52YXMgbG9jYXRpb25cbiAgICBvYmplY3QuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24ocmVjb3ZlckxvY2F0aW9uKTtcblxuICAgIC8vIENoYW5nZSB0aGUgY29ubmVjdGVkIG91dGNvbWluZyBlZGdlcycgbG9jYXRpb25cbiAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygb2JqZWN0LmVkZ2VMaXN0KSB7XG4gICAgICAgIGNvbnN0IGVkZ2VSZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBlZGdlLnN0YXJ0TG9jYXRpb24ueCAtIGNoYW5nZUxvY2F0aW9uLngsXG4gICAgICAgICAgICB5OiBlZGdlLnN0YXJ0TG9jYXRpb24ueSAtIGNoYW5nZUxvY2F0aW9uLnksXG4gICAgICAgIH07XG5cbiAgICAgICAgZWRnZS5zZXRMb2NhdGlvbihcbiAgICAgICAgICAgICdzdGFydCcsXG4gICAgICAgICAgICBlZGdlUmVjb3ZlckxvY2F0aW9uLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgaW5jb21pbmcgZWRnZXMnIGxvY2F0aW9uXG4gICAgZm9yIChjb25zdCBlZGdlIG9mIG9iamVjdC5pbmNvbWluZ0VkZ2VMaXN0KSB7XG4gICAgICAgIGNvbnN0IGVkZ2VSZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBlZGdlLmVuZExvY2F0aW9uLnggLSBjaGFuZ2VMb2NhdGlvbi54LFxuICAgICAgICAgICAgeTogZWRnZS5lbmRMb2NhdGlvbi55IC0gY2hhbmdlTG9jYXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICBlZGdlLnNldExvY2F0aW9uKFxuICAgICAgICAgICAgJ2VuZCcsXG4gICAgICAgICAgICBlZGdlUmVjb3ZlckxvY2F0aW9uLFxuICAgICAgICApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBVbmRvIG1vdmUgYW5jaG9yIG9wZXJhdGlvblxuICogQHBhcmFtIHsqfSBvYmplY3QgUmVjaWV2ZWQgZWRnZSBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIHRoZSBzbGVlcGVyIG5vZGUgd2hlcmUgdGhlIGVkZ2Ugc3RhcnRcbiAqL1xuZnVuY3Rpb24gdW5kb01vdmVBbmNob3Iob2JqZWN0LCBwYXJhbXMpIHtcbiAgICAvLyBSZW1vdmUgdGhlIGVkZ2UgY3JlYXRlZFxuICAgIG9iamVjdC5kZWxldGVTZWxmKCk7XG59XG5cbi8qKlxuICogVW5kbyBtb3ZlIGhlYWQgb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICovXG5mdW5jdGlvbiB1bmRvTW92ZUhlYWQob2JqZWN0LCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IGNoYW5nZUVuZExvY2F0aW9uIH0gPSBwYXJhbXM7XG5cbiAgICAvLyBSZWNvdmVyIGVnZGUgZW5kIGxvY2F0aW9uXG4gICAgY29uc3QgcmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICB4OiBvYmplY3QuZW5kTG9jYXRpb24ueCAtIGNoYW5nZUVuZExvY2F0aW9uLngsXG4gICAgICAgIHk6IG9iamVjdC5lbmRMb2NhdGlvbi55IC0gY2hhbmdlRW5kTG9jYXRpb24ueSxcbiAgICB9O1xuXG4gICAgb2JqZWN0LnNldExvY2F0aW9uKFxuICAgICAgICAnZW5kJyxcbiAgICAgICAgcmVjb3ZlckxvY2F0aW9uLFxuICAgICk7XG5cbiAgICAvLyBSZW1vdmUgYWRkZWQgZW5kIHNsZWVwZXIgaWYgbmVlZGVkXG4gICAgaWYgKCEhcGFyYW1zWydhZGRlZEVuZFNsZWVwZXInXSkge1xuICAgICAgICBwYXJhbXNbJ2FkZGVkRW5kU2xlZXBlciddLnJlbW92ZUluY29taW5nRWRnZShvYmplY3QpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBVbmRvIGRlbGV0ZSB0aGUgY2xpY2tlZCBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IERlbGV0ZWQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHVuZG9EZWxldGVJdGVtcyhvYmplY3QpIHtcbiAgICBvYmplY3QucmVjb3ZlclNlbGYoKTtcbn1cblxuLyoqXG4gKiBVbmRvIFBhc3RlIHRoZSBpdGVtXG4gKiBAcGFyYW0geyp9IG9iamVjdCBEZWxldGVkIG9iamVjdFxuICovXG5mdW5jdGlvbiB1bmRvUGFzdGUob2JqZWN0KSB7XG4gICAgZm9yKGxldCBpdGVtIG9mIG9iamVjdCkge1xuICAgICAgICAvLyBUT0RPOiBPbmx5IHN1cHBvcnQgc2xlZXBlciBub3dcbiAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBTbGVlcGVyKSB7XG4gICAgICAgICAgICBpdGVtLmRlbGV0ZVNlbGYoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBVbmRvIGNyZWF0ZSBzbGVlcGVyXG4gKiBAcGFyYW0geyp9IG9iamVjdCBEZWxldGVkIG9iamVjdFxuICovXG5mdW5jdGlvbiB1bmRvQ3JlYXRlU2xlZXBlcihvYmplY3QpIHtcbiAgICBvYmplY3QuZGVsZXRlU2VsZigpO1xufVxuIiwiaW1wb3J0IHsgU2F2ZWRPcGVyYXRpb24gfSBmcm9tICcuL29wZXJhdGlvbic7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgVW5kb1JlZG9FdmVudE5hbWUgfSBmcm9tICcuLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29weVBhc3RlSG91c2UgfSBmcm9tICcuLi9jb3B5LXBhc3RlL2NvcHktcGFzdGUtaG91c2UnO1xuXG5leHBvcnQgY2xhc3MgVW5kb0RlY29yYXRvciB7XG4gICAgLyoqXG4gICAgICogRGVjb3JhdG9yIGZvciBtb3VzZSB1cCBmcm9tIHNsZWVwZXJcbiAgICAgKi8gXG4gICAgc3RhdGljIG1vdXNlVXBTbGVlcGVyRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZHJhZ1NsZWVwZXJMaXN0LCBvcmlnaW5hbEluZm8pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IEN1cnJlbnQgU2xlZXBlciAoTm93IG5vIHNlbGVjdGlvbiBib3gpXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U2xlZXBlciA9IGRyYWdTbGVlcGVyTGlzdFswXTtcblxuICAgICAgICAgICAgLy8gRmluZCBsb2NhdGlvbiBjaGFuZ2VcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUxvY2F0aW9uID0ge1xuICAgICAgICAgICAgICAgIHg6IGN1cnJlbnRTbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnggLSBvcmlnaW5hbEluZm8ueCxcbiAgICAgICAgICAgICAgICB5OiBjdXJyZW50U2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi55IC0gb3JpZ2luYWxJbmZvLnksXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaGFuZ2VMb2NhdGlvbi54ICE9PSAwICYmIGNoYW5nZUxvY2F0aW9uLnkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRvIHVuZG8gc3RhY2tcbiAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUuYWRkTXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBjdXJyZW50U2xlZXBlcixcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5tb3ZlU2xlZXBlcixcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgY29udHJvbGxlclxuICAgICAgICAgICAgY29udHJvbGxlckZ1bmN0aW9uKGRyYWdTbGVlcGVyTGlzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNvcmF0b3IgZm9yIG1vdXNlIHVwIGZyb20gYW5jaG9yXG4gICAgICovXG4gICAgc3RhdGljIG1vdXNlVXBBbmNob3JEZWNvcmF0b3IoY29udHJvbGxlckZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihzbGVlcGVyQW5kQW5jaG9yLCBlZGdlLCBjbG9zZXN0T2JqZWN0KSB7XG4gICAgICAgICAgICAvLyBTYXZlIHRvIHVuZG8gc3RhY2tcbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgIG9iamVjdDogZWRnZSxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLmFkZEVkZ2VGcm9tQW5jaG9yLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFNsZWVwZXI6IHNsZWVwZXJBbmRBbmNob3JbMF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBjb250cm9sbGVyIFxuICAgICAgICAgICAgY29udHJvbGxlckZ1bmN0aW9uKHNsZWVwZXJBbmRBbmNob3IsIGVkZ2UsIGNsb3Nlc3RPYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjb3JhdG9yIGZvciBtb3VzZSB1cCBmcm9tIGhlYWRcbiAgICAgKi9cbiAgICBzdGF0aWMgbW91c2VVcEhlYWREZWNvcmF0b3IoY29udHJvbGxlckZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihlZGdlLCBjbG9zZXN0T2JqZWN0LCBvcmlnaW5hbExvY2F0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgY2xvc2VzdExvY2F0aW9uLFxuICAgICAgICAgICAgICAgIGNsb3Nlc3RTbGVlcGVyLFxuICAgICAgICAgICAgfSA9IGNsb3Nlc3RPYmplY3Q7XG5cbiAgICAgICAgICAgIC8vIEFkZCBtdXRhdGlvbiBcbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgIG9iamVjdDogZWRnZSxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLm1vdmVIZWFkLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFbmRMb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogY2xvc2VzdExvY2F0aW9uLnggLSBvcmlnaW5hbExvY2F0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjbG9zZXN0TG9jYXRpb24ueSAtIG9yaWdpbmFsTG9jYXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWRkZWRFbmRTbGVlcGVyOiBjbG9zZXN0U2xlZXBlcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJGdW5jdGlvbihlZGdlLCBjbG9zZXN0T2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY29yYXRvciBmb3IgZGVsZXRlIGl0ZW1zXG4gICAgICovXG4gICAgc3RhdGljIGRlbGV0ZUl0ZW1zRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oY2xpY2tPYmplY3QpIHtcbiAgICAgICAgICAgIC8vIEFkZCBtdXRhdGlvblxuICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLmFkZE11dGF0aW9uLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiBjbGlja09iamVjdCxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLmRlbGV0ZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJGdW5jdGlvbihjbGlja09iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNvcmF0b3IgZm9yIHBhc3RlIGl0ZW1zXG4gICAgICovXG4gICAgc3RhdGljIHBhc3RlRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBGaXJzdGx1IGNvcHlcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZEhvdXNlID0gQ29weVBhc3RlSG91c2UucGFja2FnZTtcblxuICAgICAgICAgICAgLy8gQWRkIG11dGF0aW9uXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUuYWRkTXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IGNsb25lZEhvdXNlLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogU2F2ZWRPcGVyYXRpb24ucGFzdGUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBjb250cm9sbGVyXG4gICAgICAgICAgICBjb250cm9sbGVyRnVuY3Rpb24oY2xvbmVkSG91c2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjb3JhdG9yIGZvciBjcmVhdGUgc2xlZXBlclxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVTbGVlcGVyRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odHlwZSwgcG9zaXRpb24pIHtcbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NsZWVwZXIgPSBjb250cm9sbGVyRnVuY3Rpb24odHlwZSwgcG9zaXRpb24pO1xuXG4gICAgICAgICAgICAvLyBBZGQgbXV0YXRpb25cbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgIG9iamVjdDogbmV3U2xlZXBlcixcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLmNyZWF0ZVNsZWVwZXIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IHVuZG9Db250cm9sbGVyIH0gZnJvbSAnLi91bmRvLWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVW5kb1JlZG9FdmVudE5hbWUgfSBmcm9tICcuLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IHJlZG9Db250cm9sbGVyIH0gZnJvbSAnLi9yZWRvLWNvbnRyb2xsZXInO1xuXG5jbGFzcyBVbmRvUmVkbyB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBVbmRvUmVkbygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYoIVVuZG9SZWRvLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAvLyBEZWZpbmUgdGhlIHN0YWNrIGFuZCB0aGUgcG9pbnRlclxuICAgICAgICAgICAgdGhpcy5zdGFjayA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyID0gLTE7XG5cbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgICAgICAgICBVbmRvUmVkby5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbmFtZVxuICAgICAqL1xuICAgIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHVuZG8sXG4gICAgICAgICAgICBhZGRNdXRhdGlvbixcbiAgICAgICAgICAgIHJlZG8sXG4gICAgICAgIH0gPSBVbmRvUmVkb0V2ZW50TmFtZTtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGFkZE11dGF0aW9uLCB0aGlzLmFkZE11dGF0aW9uVG9TdGFjay5iaW5kKHRoaXMpKTtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKHVuZG8sIHRoaXMudW5kby5iaW5kKHRoaXMpKTtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKHJlZG8sIHRoaXMucmVkby5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgbXV0YXRpb24gdG8gdW5kbyBzdGFja1xuICAgICAqIEBwYXJhbSB7Kn0gbXV0YXRpb24gXG4gICAgICovXG4gICAgYWRkTXV0YXRpb25Ub1N0YWNrKG11dGF0aW9uKSB7XG4gICAgICAgIHRoaXMucG9pbnRlciArPSAxO1xuXG4gICAgICAgIC8vIEJyZWFrIHRoZSBzdGFjayBvcmRlciwgaWdub3JlIHRoZSBvcGVyYXRpb24gYWZ0ZXIgcG9pbnRlclxuICAgICAgICBpZiAodGhpcy5wb2ludGVyICE9PSB0aGlzLnN0YWNrLmxlbmd0aCAmJiB0aGlzLnBvaW50ZXIgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdGFjay5zcGxpY2UodGhpcy5wb2ludGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhY2subGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhY2sucHVzaChtdXRhdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5kbyB0aGUgb3BlcmF0aW9uXG4gICAgICovXG4gICAgdW5kbygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoICE9PSAwIHx8IHRoaXMucG9pbnRlciAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHVuZG9UYXNrID0gdGhpcy5zdGFja1t0aGlzLnBvaW50ZXJdO1xuICAgICAgICAgICAgdW5kb0NvbnRyb2xsZXIodW5kb1Rhc2spO1xuXG4gICAgICAgICAgICB0aGlzLnBvaW50ZXIgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZG8gdGhlIG9wZXJhdGlvblxuICAgICAqL1xuICAgIHJlZG8oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCAhPT0gMCAmJiB0aGlzLnBvaW50ZXIgIT09IHRoaXMuc3RhY2subGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyICs9IDE7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlZG9UYXNrID0gdGhpcy5zdGFja1t0aGlzLnBvaW50ZXJdO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZWRvVGFzayk7XG5cbiAgICAgICAgICAgIHJlZG9Db250cm9sbGVyKHJlZG9UYXNrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgVW5kb1JlZG8gfTsiLCJjbGFzcyBFdmVudCB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBFdmVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIUV2ZW50Lmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RGljdGlvbmFyeSA9IHt9O1xuICAgICAgICAgICAgRXZlbnQuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBZGQgdG8gd2hvbGUgd2luZG93XG4gICAgICAgICAgICB3aW5kb3cuRXZlbnRlciA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEV2ZW50Lmluc3RhbmNlOyBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVudExpc3RlbmVyIGZvciBhZGRpbmcgZXZlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAvLyBGaW5kIGlmIGV2ZW50TmFtZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBpZiAoIShldmVudE5hbWUgaW4gdGhpcy5ldmVudERpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RGljdGlvbmFyeVtldmVudE5hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFB1c2ggdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGludG8gbGlzdFxuICAgICAgICB0aGlzLmV2ZW50RGljdGlvbmFyeVtldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0aGUgbGlzdGVuZXIgZ2l2ZW4gYSBzcGVjaWZpYyBldmVudCBhbmQgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb24gfCB1bmRlZmluZWR9IGNhbGxiYWNrIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBldmVudFxuICAgICAgICBpZiAoIShldmVudE5hbWUgaW4gdGhpcy5ldmVudERpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdFdmVudCBOb3QgUmVnaXN0ZXJlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSnVzdCByZW1vdmUgdGhlIHNwZWNpZmljIGNhbGxiYWNrIGZ1bmN0aW9uIGlmIGNhbGxiYWNrIGdpdmVuXG4gICAgICAgIGlmICghIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RXZlbnRMaXN0ID0gdGhpcy5ldmVudERpY3Rpb25hcnlbZXZlbnROYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrSW5kZXggPSBjdXJyZW50RXZlbnRMaXN0LmZpbmRJbmRleChzYXZlZENhbGxiYWNrRnVuY3Rpb24gPT4gXG4gICAgICAgICAgICAgICAgc2F2ZWRDYWxsYmFja0Z1bmN0aW9uID09PSBjYWxsYmFja1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gUmFpc2UgZXJyb3IgaWYgY2FsbGJhY2sgZnVuY3Rpb24gbm90IGZvdW5kXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tJbmRleCA9PT0gLTEgfHwgY2FsbGJhY2tJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignQ2FsbGJhY2sgZnVuY3Rpb24gbm90IGZvdW5kJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgICAgIGN1cnJlbnRFdmVudExpc3Quc3BsaWNlKGNhbGxiYWNrSW5kZXgsIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhpcyBldmVudCBpZiBldmVudCBsaXN0IGlzIGVtcHR5IFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFdmVudExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnREaWN0aW9uYXJ5W2V2ZW50TmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEaXJlY3RseSBkZWxldGUgdGhpcyBldmVudFxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnREaWN0aW9uYXJ5W2V2ZW50TmFtZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBkaXNwdGFjaGVyLCB0cmlnZ2VyIHRoZSByZWxhdGVkIGV2ZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBcbiAgICAgKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3MgXG4gICAgICovXG4gICAgZGlzcGF0Y2hFdmVudChldmVudE5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gVGhyb3cgRXJyb3Igd2hlbiBub3QgZmluZCB0aGUgZXZlbnRcbiAgICAgICAgaWYgKCEoZXZlbnROYW1lIGluIHRoaXMuZXZlbnREaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignRXZlbnQgTm90IFJlZ2lzdGVyZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEl0ZXJhdGUgZm9yIHRyaWdnZXJcbiAgICAgICAgdGhpcy5ldmVudERpY3Rpb25hcnlbZXZlbnROYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEV2ZW50ZXIgPSBFdmVudC5nZXRJbnN0YW5jZSgpOyIsIi8qKlxuICogRmluZCBpZiBpdCBpcyBwb3NzaWJsZSB0byBiZSBhY3RpdmVcbiAqIEBwYXJhbSB7ZmxvYXR9IHdlaWdodCBcbiAqIEByZXR1cm5zIHtib29sfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZpdHlCeVdlaWdodCh3ZWlnaHQpIHtcbiAgICBjb25zdCBzdWRvUmFuZG9tVmFyaWFibGUgPSBNYXRoLnJhbmRvbSgpO1xuICAgIHJldHVybiBzdWRvUmFuZG9tVmFyaWFibGUgPD0gd2VpZ2h0O1xufVxuXG4vKipcbiAqIEZpbmQgaWYgZ2l2ZW4gcG9pbnQgbmVhciB0aGUgbGluZVxuICogQHBhcmFtIHsqfSBsaW5lU3RhcnRMb2NhdGlvbiBcbiAqIEBwYXJhbSB7Kn0gbGluZUVuZExvY2F0aW9uIFxuICogQHBhcmFtIHsqfSB4IFxuICogQHBhcmFtIHsqfSB5IFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BvaW50SW5MaW5lKGxpbmVTdGFydExvY2F0aW9uLCBsaW5lRW5kTG9jYXRpb24sIHgsIHkpIHtcbiAgICBpZihcbiAgICAgICAgbGluZUVuZExvY2F0aW9uLnggPiBsaW5lU3RhcnRMb2NhdGlvbi54IFxuICAgICAgICAmJiAoXG4gICAgICAgICAgICB4ID4gbGluZUVuZExvY2F0aW9uLnggXG4gICAgICAgICAgICB8fCB4IDwgbGluZVN0YXJ0TG9jYXRpb24ueFxuICAgICAgICApXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihcbiAgICAgICAgbGluZUVuZExvY2F0aW9uLnggPCBsaW5lU3RhcnRMb2NhdGlvbi54IFxuICAgICAgICAmJiAoXG4gICAgICAgICAgICB4IDwgbGluZUVuZExvY2F0aW9uLnggXG4gICAgICAgICAgICB8fCB4ID4gbGluZVN0YXJ0TG9jYXRpb24ueFxuICAgICAgICApXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgbGluZSBcbiAgICBjb25zdCBzbG9wZSA9IChsaW5lRW5kTG9jYXRpb24ueSAtIGxpbmVTdGFydExvY2F0aW9uLnkpIC8gXG4gICAgKGxpbmVFbmRMb2NhdGlvbi54IC0gbGluZVN0YXJ0TG9jYXRpb24ueCk7XG5cbiAgICAvLyBGaW5kIHRoZSBhcnJvdyByZWdpb25cbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbihzbG9wZSk7XG4gICAgY29uc3QgeExlbmd0aCA9IDEwICogMC41ICogMyoqMC41ICogTWF0aC5hYnMoTWF0aC5jb3MoYW5nbGUpKTtcbiAgICBpZiAoXG4gICAgICAgIGxpbmVFbmRMb2NhdGlvbi54ID4gbGluZVN0YXJ0TG9jYXRpb24ueCBcbiAgICAgICAgJiYgeCA+IGxpbmVFbmRMb2NhdGlvbi54IC0geExlbmd0aFxuICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgICBsaW5lRW5kTG9jYXRpb24ueCA8IGxpbmVTdGFydExvY2F0aW9uLnhcbiAgICAgICAgJiYgeCA8IGxpbmVFbmRMb2NhdGlvbi54ICsgeExlbmd0aFxuICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBjb25zdCBpbnRlcmNlcHQgPSBsaW5lU3RhcnRMb2NhdGlvbi55IC0gc2xvcGUgKiBsaW5lU3RhcnRMb2NhdGlvbi54O1xuXG4gICAgLy8gRmluZCB0aGUgZGlzdGFuY2UgYmV0d2VlbiBsaW5lIGFuZCBwb2ludFxuICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnMoaW50ZXJjZXB0ICsgc2xvcGUgKiB4IC0geSkgLyBNYXRoLnNxcnQoMSArIHNsb3BlKioyKTtcblxuICAgIHJldHVybiBkaXN0YW5jZSA8PSA1O1xufSIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKlxuICogQWRkcyB0aGUga2V5LXZhbHVlIGBwYWlyYCB0byBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXIgVGhlIGtleS12YWx1ZSBwYWlyIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG1hcGAuXG4gKi9cbmZ1bmN0aW9uIGFkZE1hcEVudHJ5KG1hcCwgcGFpcikge1xuICAvLyBEb24ndCByZXR1cm4gYG1hcC5zZXRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICByZXR1cm4gbWFwO1xufVxuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYHNldGAuXG4gKi9cbmZ1bmN0aW9uIGFkZFNldEVudHJ5KHNldCwgdmFsdWUpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBzZXQuYWRkYCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgc2V0LmFkZCh2YWx1ZSk7XG4gIHJldHVybiBzZXQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheSxcbiAgICBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KSxcbiAgICBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgICBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpLFxuICAgIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpLFxuICAgIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0JyksXG4gICAgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX19bJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgY2FjaGUgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoY2FjaGUgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBjYWNoZS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2FjaGUgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBjYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICB2YXIgcmVzdWx0ID0gKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSlcbiAgICA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZylcbiAgICA6IFtdO1xuXG4gIHZhciBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgc2tpcEluZGV4ZXMgPSAhIWxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRnVsbF0gU3BlY2lmeSBhIGNsb25lIGluY2x1ZGluZyBzeW1ib2xzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIGlmIChpc0hvc3RPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lT2JqZWN0KGlzRnVuYyA/IHt9IDogdmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBiYXNlQ2xvbmUsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgaWYgKCFpc0Fycikge1xuICAgIHZhciBwcm9wcyA9IGlzRnVsbCA/IGdldEFsbEtleXModmFsdWUpIDoga2V5cyh2YWx1ZSk7XG4gIH1cbiAgYXJyYXlFYWNoKHByb3BzIHx8IHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgIHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b3R5cGUgVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBiYXNlQ3JlYXRlKHByb3RvKSB7XG4gIHJldHVybiBpc09iamVjdChwcm90bykgPyBvYmplY3RDcmVhdGUocHJvdG8pIDoge307XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBidWZmZXIuY29uc3RydWN0b3IoYnVmZmVyLmxlbmd0aCk7XG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBtYXAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTWFwKG1hcCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKG1hcFRvQXJyYXkobWFwKSwgdHJ1ZSkgOiBtYXBUb0FycmF5KG1hcCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkTWFwRW50cnksIG5ldyBtYXAuY29uc3RydWN0b3IpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc2V0LlxuICovXG5mdW5jdGlvbiBjbG9uZVNldChzZXQsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhzZXRUb0FycmF5KHNldCksIHRydWUpIDogc2V0VG9BcnJheShzZXQpO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZFNldEVudHJ5LCBuZXcgc2V0LmNvbnN0cnVjdG9yKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCA/IHNvdXJjZVtrZXldIDogbmV3VmFsdWUpO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2wgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2wgcHJvcGVydGllcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9IG5hdGl2ZUdldFN5bWJvbHMgPyBvdmVyQXJnKG5hdGl2ZUdldFN5bWJvbHMsIE9iamVjdCkgOiBzdHViQXJyYXk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSxcbi8vIGZvciBkYXRhIHZpZXdzIGluIEVkZ2UgPCAxNCwgYW5kIHByb21pc2VzIGluIE5vZGUuanMuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBjbG9uZUZ1bmMsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lTWFwKG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVNldChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCB0cnVlLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJpbXBvcnQgeyBDYW52YXMgfSBmcm9tICcuLi9jb3JlL3ZpZXctbGF5ZXIvY2FudmFzJztcbmltcG9ydCB7IFNsZWVwZXIgfSBmcm9tICcuLi9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyJztcblxuLy8gSW5pdCBDYW52YXNcbnZhciBteUNhbnZhcyA9IENhbnZhcy5nZXRJbnN0YW5jZSgpO1xuXG4vLyAvLyBBZGQgYSBzbGVlcGVyXG4vLyBuZXcgU2xlZXBlcigpO1xuLy8gbmV3IFNsZWVwZXIoXG4vLyAgICAgZmFsc2UsXG4vLyAgICAge1xuLy8gICAgICAgICBkcmF3VHlwZTogJ2NpcmNsZScsXG4vLyAgICAgICAgIHg6IDYwMCxcbi8vICAgICAgICAgeTogNjAwLFxuLy8gICAgICAgICByYWRpdXM6IDMwLFxuLy8gICAgICAgICBzdGFydEFuZ2xlOiAwLFxuLy8gICAgICAgICBlbmRBbmdsZTogMiAqIE1hdGguUEksXG4vLyAgICAgICAgIGlzRmlsbGVkOiB0cnVlLFxuLy8gICAgICAgICBmaWxsQ29sb3I6ICcjRkZDQzMzJyxcbi8vICAgICB9XG4vLyApO1xuXG4vLyBuZXcgU2xlZXBlcihcbi8vICAgICBmYWxzZSxcbi8vICAgICB7XG4vLyAgICAgICAgIGRyYXdUeXBlOiAnY2lyY2xlJyxcbi8vICAgICAgICAgeDogNzAwLFxuLy8gICAgICAgICB5OiA3MDAsXG4vLyAgICAgICAgIHJhZGl1czogMzAsXG4vLyAgICAgICAgIHN0YXJ0QW5nbGU6IDAsXG4vLyAgICAgICAgIGVuZEFuZ2xlOiAyICogTWF0aC5QSSxcbi8vICAgICAgICAgaXNGaWxsZWQ6IHRydWUsXG4vLyAgICAgICAgIGZpbGxDb2xvcjogJyNGRkNDMzMnLFxuLy8gICAgIH1cbi8vICk7XG5cbi8vIG5ldyBTbGVlcGVyKFxuLy8gICAgIGZhbHNlLFxuLy8gICAgIHtcbi8vICAgICAgICAgZHJhd1R5cGU6ICdjaXJjbGUnLFxuLy8gICAgICAgICB4OiA1MDAsXG4vLyAgICAgICAgIHk6IDYwMCxcbi8vICAgICAgICAgcmFkaXVzOiAzMCxcbi8vICAgICAgICAgc3RhcnRBbmdsZTogMCxcbi8vICAgICAgICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuLy8gICAgICAgICBpc0ZpbGxlZDogdHJ1ZSxcbi8vICAgICAgICAgZmlsbENvbG9yOiAnI0ZGQ0MzMycsXG4vLyAgICAgfVxuLy8gKTtcblxuXG4vLyBuZXcgU2xlZXBlcihcbi8vICAgICBmYWxzZSxcbi8vICAgICB7XG4vLyAgICAgICAgIGRyYXdUeXBlOiAnY2lyY2xlJyxcbi8vICAgICAgICAgeDogNjAwLFxuLy8gICAgICAgICB5OiA3MDAsXG4vLyAgICAgICAgIHJhZGl1czogMzAsXG4vLyAgICAgICAgIHN0YXJ0QW5nbGU6IDAsXG4vLyAgICAgICAgIGVuZEFuZ2xlOiAyICogTWF0aC5QSSxcbi8vICAgICAgICAgaXNGaWxsZWQ6IHRydWUsXG4vLyAgICAgICAgIGZpbGxDb2xvcjogJyNGRkNDMzMnLFxuLy8gICAgIH1cbi8vICk7XG5cbi8vIG5ldyBTbGVlcGVyKFxuLy8gICAgIGZhbHNlLFxuLy8gICAgIHtcbi8vICAgICAgICAgZHJhd1R5cGU6ICdjaXJjbGUnLFxuLy8gICAgICAgICB4OiA3MDAsXG4vLyAgICAgICAgIHk6IDgwMCxcbi8vICAgICAgICAgcmFkaXVzOiAzMCxcbi8vICAgICAgICAgc3RhcnRBbmdsZTogMCxcbi8vICAgICAgICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuLy8gICAgICAgICBpc0ZpbGxlZDogdHJ1ZSxcbi8vICAgICAgICAgZmlsbENvbG9yOiAnI0ZGQ0MzMycsXG4vLyAgICAgfVxuLy8gKTtcblxuXG4vLyAvLyBFbmFibGUgaG90IHVwZGF0aW5nXG4vLyBpZiAobW9kdWxlLmhvdCkge1xuLy8gICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuLi9jb3JlL3ZpZXctbGF5ZXIvY2FudmFzJywgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIHJldHVybjtcbi8vICAgICB9KVxuLy8gfVxuIl0sIm5hbWVzIjpbImNsb25lRGVlcCIsIkNvcHlQYXN0ZUhvdXNlIiwiaG91c2UiLCJpbnN0YW5jZSIsIm9iaiIsIkFycmF5IiwiaXRlbSIsInB1c2giLCJTbGVlcGVyUG9vbGVyIiwiRWRnZVBvb2xlciIsImlzUG9pbnRJbkxpbmUiLCJNaW5pbWFsRGlzdGFuY2VGb3JMb2NhdGUiLCJBY3Rpb25VdGlscyIsImNhbnZhcyIsImxvY2F0aW9uIiwiZmluZEZ1bmN0aW9uc0xpc3QiLCJmaW5kTG9jYXRlZExpbmVPckhlYWQiLCJmaW5kTG9jYXRlZEFuY2hvciIsImZpbmRMb2NhdGVkU2xlZXBlciIsImZpbmRGdW5jdGlvbiIsImZpbmRSZXN1bHQiLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImlzTG9jYXRlZEluQ2lyY2xlIiwiY2lyY2xlUGF0aCIsIngiLCJ5IiwiaXNQb2ludEluUGF0aCIsImxvY2F0aW9uSGFuZGxlck1hcHMiLCJiaW5kIiwiaW5kZXgiLCJwb29sIiwibGVuZ3RoIiwic2xlZXBlciIsInNsZWVwZXJTdHlsZSIsImNhbnZhc0luZm9ybWF0aW9uIiwic2xlZXBlckNhbnZhc1BhdGgiLCJjYW52YXNQYXRoIiwiZHJhd1R5cGUiLCJyZXN1bHQiLCJ0eXBlIiwiaXNBY3RpdmUiLCJjYW52YXNBbmNob3JzUGF0aExpc3QiLCJzbGVlcGVyQW5jaG9yIiwiYW5jaG9yUGF0aCIsImVkZ2UiLCJoZWFkIiwic3RhcnRMb2NhdGlvbiIsImVuZExvY2F0aW9uIiwiZHJhZ2dlZFNsZWVwZXJMaXN0IiwiaXNEcmFnIiwiZm4iLCJ3YWl0VGltZSIsInRpbWVyIiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJzbGVlcGVyWCIsInNsZWVwZXJZIiwiZGlzdGFuY2UiLCJNYXRoIiwic3FydCIsInJhZGl1cyIsImxvY2F0ZWRTbGVlcGVyIiwiZmluZENsb3Nlc3RTbGVlcGVyIiwiY29uc29sZSIsImxvZyIsImxvY2F0ZWRTbGVlcGVyWCIsImxvY2F0ZWRTbGVlcGVyWSIsImFuY2hvckxvY2F0aW9uTGlzdCIsIm1pbkRpc3RhbmNlIiwiTnVtYmVyIiwiTUFYX1NBRkVfSU5URUdFUiIsIm1pbkxvY2F0aW9uIiwiYW5jaG9yTG9jYXRpb24iLCJjbG9zZXN0TG9jYXRpb24iLCJjbG9zZXN0U2xlZXBlciIsIm1vdXNlQWN0aW9uTW9kZSIsImRvd25PblNsZWVwZXIiLCJkb3duT25BbmNob3IiLCJkb3duT25MaW5lIiwiZG93bk9uSGVhZCIsImRvd25PbkJhY2tncm91bmQiLCJkb3duT25Ob25lIiwiZG93bk9uVGV4dCIsIkFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUiLCJQYWludGVyRXZlbnROYW1lIiwiRXZlbnRlciIsIlVuZG9EZWNvcmF0b3IiLCJTbGVlcGVyIiwiRWRnZSIsIktleWJvYXJkQWN0aW9uQ29udHJvbGxlciIsImluaXRFdmVudEhhbmRsZXIiLCJrZXlib2FyZERlbGV0ZSIsImtleWJvYXJkSW5wdXQiLCJrZXlib2FyZFRleHRVbmRvIiwia2V5Ym9hcmRUZXh0UmVkbyIsImtleWJvYXJkVGV4dERlbGV0ZSIsImtleWJvYXJkQ29weSIsImtleWJvYXJkUGFzdGUiLCJldmVudE5hbWVzTWFwIiwiZGVsZXRlSXRlbXNEZWNvcmF0b3IiLCJrZXlib2FyZERlbGV0ZUNvbnRyb2xsZXIiLCJwYXN0ZURlY29yYXRvciIsImtleWJvYXJkUGFzdGVDb250cm9sbGVyIiwia2V5Ym9hcmRDb3B5Q29udHJvbGxlciIsImtleWJvYXJkSW5wdXRDb250cm9sbGVyIiwia2V5Ym9hcmRUZXh0VW5kb0NvbnRyb2xsZXIiLCJrZXlib2FyZFRleHRSZWRvQ29udHJvbGxlciIsImtleWJvYXJkVGV4dERlbGV0ZUNvbnRyb2xsZXIiLCJldmVudE5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tPYmplY3QiLCJkZWxldGVTZWxmIiwiZGlzcGF0Y2hFdmVudCIsInJlcGFpbnQiLCJpbnB1dEtleSIsIm5ld0NvbnRlbnQiLCJ0ZXh0SW5mb3JtYXRpb24iLCJjb250ZW50IiwidGV4dFRlbXBTdGFjayIsInRleHQiLCJ1bmRvIiwicmVkbyIsInN0cmluZ0xlbmd0aCIsInN1YnN0cmluZyIsIm9iamVjdCIsInBhY2thZ2UiLCJjb3B5ZWRPYmplY3RMaXN0IiwicHJlcGFyZUZvclBhc3RlIiwicmVjb3ZlclNlbGYiLCJVbmRvUmVkb0V2ZW50TmFtZSIsIktleWJvYXJkQWN0aW9uIiwibW91c2VBY3Rpb24iLCJpbml0QWN0aW9uIiwiYWN0aW9uc01hcCIsImtleURvd24iLCJhY3Rpb24iLCJ3aW5kb3ciLCJldmVudCIsImNvZGUiLCJrZXlDb2RlIiwiaXNUZXh0TW9kZU9uIiwibW91c2VEb3duRWxlbWVudCIsImlzVGV4dE1vZGUiLCJfaGFuZGxlclRleHREZWxldGUiLCJfaGFuZGxlckRlbGV0ZSIsImN0cmxLZXkiLCJtZXRhS2V5Iiwic2hpZnRLZXkiLCJfaGFuZGxlTm9ybWFsIiwia2V5IiwidG9TdHJpbmciLCJEZWVwQ2xvbmVJbmZvIiwibW9kZSIsInRhcmdldCIsIlNsZWVwZXJFdmVudE5hbWUiLCJFZGdlRXZlbnROYW1lIiwiTW91c2VBY3Rpb25Db250cm9sbGVyIiwibW91c2VEb3duU2xlZXBlciIsIm1vdXNlRG93bkxpbmUiLCJtb3VzZURvd25CYWNrZ3JvdW5kIiwibW91c2VNb3ZlU2xlZXBlciIsIm1vdXNlTW92ZUhlYWQiLCJtb3VzZVVwU2xlZXBlciIsIm1vdXNlVXBBbmNob3IiLCJtb3VzZVVwSGVhZCIsIm1vdXNlRG91YmxlQ2xpY2siLCJtb3VzZURvd25TbGVlcGVyQ29udHJvbGxlciIsIm1vdXNlRG93bkxpbmVDb250cm9sbGVyIiwibW91c2VEb3duQmFja2dyb3VuZENvbnRyb2xsZXIiLCJtb3VzZU1vdmVTbGVlcGVyQ29udHJvbGxlciIsIm1vdXNlTW92ZUhlYWRDb250cm9sbGVyIiwibW91c2VVcFNsZWVwZXJEZWNvcmF0b3IiLCJtb3VzZVVwU2xlZXBlckNvbnRyb2xsZXIiLCJtb3VzZVVwQW5jaG9yRGVjb3JhdG9yIiwibW91c2VVcEFuY2hvckNvbnRyb2xsZXIiLCJtb3VzZVVwSGVhZERlY29yYXRvciIsIm1vdXNlVXBIZWFkQ29udHJvbGxlciIsIm1vdXNlRG91YmxlQ2xpY2tDb250cm9sbGVyIiwiYWN0aXZlU29tZVNsZWVwZXIiLCJhY3RpdmVTb21lRWRnZSIsImNoYW5nZUFjdGl2ZVN0YXR1cyIsImVuZFRleHRNb2RlIiwiZHJhZ1NsZWVwZXJMaXN0IiwicmVsYXRpdmVNb3ZlRGlzdGFuY2UiLCJvcmlnaW5YIiwib3JpZ2luWSIsIm5ld1giLCJuZXdZIiwiY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24iLCJlZGdlTGlzdCIsInNldExvY2F0aW9uIiwiaW5jb21pbmdFZGdlTGlzdCIsImRyYWdFZGdlIiwiY3VycmVudFBvc2l0aW9uIiwiZW5kU2xlZXBlciIsInJlbW92ZUluY29taW5nRWRnZSIsImNoYW5nZUVuZCIsInN3aXRjaERyYWdTdGF0dXMiLCJzbGVlcGVyQW5kQW5jaG9yIiwiY2xvc2VzdE9iamVjdCIsImFkZEVkZ2UiLCJhZGRJbmNvbWluZ0VkZ2UiLCJzdGFydFNsZWVwZXIiLCJhZGRDaGlsZCIsImFjdGl2ZVNvbWVTbGVlcGVyVGV4dE1vZGUiLCJTYXZlZE9wZXJhdGlvbiIsIk1vdXNlQWN0aW9uIiwibW91c2VQb3NpdGlvblgiLCJtb3VzZVBvc2l0aW9uWSIsImFjdGlvbk1vZGUiLCJ0ZW1wb3JhcnlFZGdlIiwidGVtcG9yYXJ5Q29weSIsImhhbmRsZU1vdXNlRG93biIsInRocm90dGxlck1ha2VyIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTk1vdXNlVXAiLCJoYW5kbGVNb3VzZURvdWJsZUNsaWNrIiwiaGFuZGxlTW91c2VQcmV2ZW50UmlnaHRDbGljayIsIm9mZnNldFgiLCJvZmZzZXRZIiwic2V0TW91c2VQb3NpdGlvbiIsImxvY2F0ZWRPYmplY3QiLCJmaW5kTG9jYXRlZE9iamVjdCIsImJ1dHRvbiIsIm1vdXNlUmlnaHRDbGljayIsIl9oYW5kbGVySG92ZXJNb3ZlIiwiY2FsbCIsIl9oYW5kbGVyRHJhZ1NsZWVwZXJNb3ZlIiwiX2hhbmRsZXJEcmFnQW5jaG9yTW92ZSIsIl9oYW5kbGVyRHJhZ0JhY2tncm91bmRNb3ZlIiwiX2hhbmRsZXJEcmFnSGVhZE1vdmUiLCJzdHlsZSIsImN1cnNvciIsImZpbmREcmFnZ2VkU2xlZXBlciIsInN0YXJ0TG9hY3Rpb24iLCJjaGFuZ2VTdGFydCIsImN1cnJlbnRQb3Npc3Rpb24iLCJjbG9zZXN0T2JqZWN0QW5jaG9yIiwiZmluZENsb3Nlc3RBbmNob3IiLCJjbG9zZXN0T2JqZWN0SGVhZCIsImFkZE11dGF0aW9uIiwib3BlcmF0aW9uIiwibW92ZUhlYWQiLCJwYXJhbXMiLCJjaGFuZ2VFbmRMb2NhdGlvbiIsImlzSW5UaGlzU2xlZXBlciIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZSIsIlNsZWVwZXJzRmFjdG9yeSIsIlBhbmVsT3BlcmF0aW9uQ29udHJvbGxlciIsImNoYW5nZUFsbFByb2JhYmlsaXR5IiwicmVzZXRTbGVlcGVycyIsInBhbmVsQ3JlYXRlTm9kZSIsInBhbmVsQWN0aXZlIiwicHJvYkNoYW5nZUNvbnRyb2xsZXIiLCJwYW5lbENyZWF0ZU5vZGVDb250cm9sbGVyIiwicmVzZXRDb250cm9sbGVyIiwicGFuZWxBY3RpdmVDb250cm9sbGVyIiwicHJvYiIsImNoYW5nZVByb2JhYmlsaXR5IiwicHJvYmFiaWxpdHkiLCJpc1NsZWVwaW5nIiwiYmVmb3JlUHJvY2Vzc0lzU2xlZXBpbmciLCJjaGFuZ2VTbGVlcGluZ1N0YXR1cyIsInBvc2l0aW9uIiwiY3JlYXRlTm9kZSIsIldha2luZ1Byb2Nlc3NDb250cm9sbGVyIiwicm91bmROdW0iLCJmcmFtZVRpbWUiLCJpc1BhdXNlIiwicmVmcmVzaEludGVydmFsSWQiLCJhd2FrZVF1ZXVlIiwic3RhcnRXYWtpbmdQcm9jZXNzIiwicGF1c2VXYWtpbmdQcm9jZXNzIiwic3RhcnRXYWtpbmdQcm9jZXNzQ29udHJvbGxlciIsInBhdXNlV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIiLCJ0ZW1wUXVldWUiLCJpbml0QXdha2VRdWV1ZSIsInNldEludGVydmFsIiwibmV3QWN0aXZlZFNsZWVwZXIiLCJhY3RpdmVDaGlsZCIsInNoaWZ0IiwiZW5kV2FraW5nUHJvY2VzcyIsImNsZWFySW50ZXJ2YWwiLCJEZWZhdWx0RWRnZVdlaWdodCIsIkRlZmF1bHRTbGVlcGVyQ2FudmFzSW5mb3JtYXRpb24iLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJQSSIsImlzRmlsbGVkIiwiZmlsbENvbG9yIiwiaXNCb3JkZXIiLCJib3JkZXJXaXRoIiwiYm9yZGVyQ29sb3IiLCJpc0FuY2hvciIsImFjdGl2ZUJvcmRlckNvbG9yIiwiRGVmYXVsdEF3YWtlQ2FudmFzSW5mb3JtYXRpb24iLCJFZGdlUG9vbEV2ZW50TmFtZSIsIkVkZ2VQb29sIiwiaW5pdEV2ZW50c0hhbmRsZXIiLCJsb2NhdGVkSW5kZXgiLCJmaW5kSW5kZXgiLCJlZGdlSW5Qb29sIiwic3BsaWNlIiwiZ2V0SW5zdGFuY2UiLCJ3ZWlnaHQiLCJuZXdXZWlnaHQiLCJuZXdTbGVlcGVyIiwiZWRnZVBhdGgiLCJyZW1vdmVFZGdlIiwicmVtb3ZlQ2hpbGQiLCJEZWZhdWx0QWN0aXZlSW5mb3JtYXRpb24iLCJTbGVlcGVyRmFjdG9yeSIsInNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsImF3YWtlQ2FudmFzSW5mb3JtYXRpb24iLCJhY3RpdmVJbmZvcm1hdGlvbiIsImNhbnZhc09iaiIsImNyZWF0ZVNsZWVwZXJEZWNvcmF0b3IiLCJtYWtlTmV3U2xlZXBlciIsImNoYW5nZU5vZGVTdHlsZSIsInByb3BlcnR5T2JqZWN0IiwiZm9yQ2hhbmdlZEluZm9ybWF0aW9uIiwicHJvcGVydHkiLCJuZXdWYWx1ZSIsInN0YXR1cyIsInRlbXBTbGVlcGVyIiwiU2xlZXBlclBvb2xFdmVudE5hbWUiLCJTbGVlcGVyUG9vbCIsImFkZFNsZWVwZXIiLCJyZU9yZGVyU2xlZXBlciIsInNsZWVwZXJJblBvb2wiLCJzbGVlcGVySW5kZXgiLCJUZXh0U2xlZXBlclRlbXBTdGFjayIsIm9yaWdpblRleHQiLCJwb2ludGVyIiwic3RhY2tMaXN0IiwidmFsIiwiVGV4dFNsZWVwZXIiLCJzaXplIiwiY29sb3IiLCJ0ZXh0YXJlYUluZm9ybWF0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0YXJlYUJvdW5kaW5nQm94UGF0aCIsInRleHRJbml0RXZlbnRIYW5kbGVyIiwic3RhcnRUZXh0TW9kZSIsInRleHRQb3NpdGlvbiIsInRleHRNYXhXaWR0aCIsInRleHRXcml0ZSIsIm1heFdpZHRoIiwiaW5mb3JtYXRpb24iLCJzZXRUZXh0T3JUZXh0YXJlYUluZm9ybWF0aW9uIiwic2xlZXBlclBvc2l0aW9uIiwiZmlndXJlRHJhdyIsIl9zZXRUZXh0YXJlYVBhdGgiLCJFcnJvciIsImZvclNldE9iamVjdCIsImRyYXdUZXh0QXJlYSIsImJvdW5kaW5nQm94UGF0aCIsImdldEFjdGl2aXR5QnlXZWlnaHQiLCJjaGlsZHJlbkxpc3QiLCJjaGlsZEVkZ2VNYXBMaXN0Iiwic2V0Q2FudmFzUGF0aCIsImRyYXdUZXh0IiwiY2hpbGRTbGVlcGVyIiwiZXhwZWN0Q2hpbGRJbmRleCIsImNoaWxkT2JqZWN0IiwidW5kZWZpbmVkIiwiZXhwZWN0RWRnZUluZGV4IiwiZWRnZU9iamVjdCIsImdldENhbnZhc0luZm9ybWF0aW9uIiwidGVtcEFjdGl2ZWRDaGlsZExpc3QiLCJmb3JFYWNoIiwiY2FudmFzUGF0aE9iamVjdCIsImFuY2hvcnNMaXN0IiwicmVtb3ZlU2xlZXBlciIsIkdsb2JhbENvbmZpZyIsIlBhaW50ZXIiLCJVbmRvUmVkbyIsIkNhbnZhcyIsImluaXQiLCJpbml0Q29udGV4dCIsImluaXRQYWludGVyIiwiaW5pdEFjdGlvblJlbGF0ZWQiLCJpbml0VW5kb1JlZG9TdGFjayIsImluaXRTbGVlcGVyRmFjdG9yeSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW52YXNJZCIsImlubmVyV2lkdGgiLCJwYW5kZWxXaWR0aCIsImlubmVySGVpZ2h0IiwiaGVhZGVySGVpZ2h0IiwicGFpbnRlciIsIm1vdXNlQWN0aW9uQ29udHJvbGxlciIsImtleWJvYXJkQWN0aW9uQ29udHJvbGxlciIsImtleWJvYXJkQWN0aW9uIiwicGFuZWxPcGVyYXRpb25Db250cm9sbGVyIiwid2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIiLCJtb3VudENhbnZhcyIsIkRlYWZ1bHRBbmNob3JTZXR0aW5nIiwibGluZVdpZHRoIiwibGluZUNvbG9yIiwiYW5jaG9yUmFkaXVzIiwiRGVhZnVsdEFycm93U2V0dGluZyIsImhlYWRMZW5ndGgiLCJBY3RpdmVBcnJvd1NldHRpbmciLCJEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZyIsIkZpZ3VyZVBhaW50ZXIiLCJkcmF3TWFwIiwiZHJhd0NpcmNsZSIsImRyYXdBcnJvdyIsImRyYXdUZXh0YXJlYSIsImRyYXciLCJzZXRQYXRoQ2FsbGJhY2siLCJjaXJjbGUiLCJQYXRoMkQiLCJhcmMiLCJmaWxsU3R5bGUiLCJmaWxsIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJhbmNob3JzUGF0aExpc3QiLCJhbmNob3JQb3NpdGlvbkxpc3QiLCJhbmNob3JQb3NpdGlvbiIsImFuZ2xlIiwiYXRhbjIiLCJsaW5lIiwibW92ZVRvIiwibGluZVRvIiwiY29zIiwic2luIiwicmVjdCIsIlRleHRQYWludGVyIiwiZmlndXJlIiwiY2xlYXJSZWN0Iiwid3JpdGUiLCJzZXRUZXh0YXJlYUNhbGxiYWNrIiwiZm9udCIsImZpbGxJbmZvIiwiX2dldEZpbGxMaXN0IiwiZmlsbExpc3QiLCJmaWxsVGV4dCIsIm1ldHJpY3MiLCJtZWFzdXJlVGV4dCIsImFjdHVhbEJvdW5kaW5nQm94QXNjZW50IiwiYWN0dWFsQm91bmRpbmdCb3hEZXNjZW50IiwiZm9udEJvdW5kaW5nQm94QXNjZW50IiwiZm9udEJvdW5kaW5nQm94RGVzY2VudCIsIm1vdXNlTW92ZUFuY2hvciIsImNsb3NlQ29sb3JQaWNrZXIiLCJtb3ZlU2xlZXBlciIsImFkZEVkZ2VGcm9tQW5jaG9yIiwiZGVsZXRlIiwicGFzdGUiLCJjcmVhdGVTbGVlcGVyIiwicmVkb0NvbnRyb2xsZXIiLCJ0YXNrIiwicmVkb01vdmVTbGVlcGVyIiwicmVkb01vdmVBbmNob3IiLCJyZWRvTW92ZUhlYWQiLCJyZWRvRGVsZXRlSXRlbXMiLCJyZWRvUGFzdGUiLCJyZWRvQ3JlYXRlU2xlZXBlciIsImNoYW5nZUxvY2F0aW9uIiwicmVjb3ZlckxvY2F0aW9uIiwiZWRnZVJlY292ZXJMb2NhdGlvbiIsInVuZG9Db250cm9sbGVyIiwidW5kb01vdmVTbGVlcGVyIiwidW5kb01vdmVBbmNob3IiLCJ1bmRvTW92ZUhlYWQiLCJ1bmRvRGVsZXRlSXRlbXMiLCJ1bmRvUGFzdGUiLCJ1bmRvQ3JlYXRlU2xlZXBlciIsImNvbnRyb2xsZXJGdW5jdGlvbiIsIm9yaWdpbmFsSW5mbyIsImN1cnJlbnRTbGVlcGVyIiwib3JpZ2luYWxMb2NhdGlvbiIsImFkZGVkRW5kU2xlZXBlciIsImNsb25lZEhvdXNlIiwic3RhY2siLCJhZGRNdXRhdGlvblRvU3RhY2siLCJtdXRhdGlvbiIsInVuZG9UYXNrIiwicmVkb1Rhc2siLCJFdmVudCIsImV2ZW50RGljdGlvbmFyeSIsImNhbGxiYWNrIiwiY3VycmVudEV2ZW50TGlzdCIsImNhbGxiYWNrSW5kZXgiLCJzYXZlZENhbGxiYWNrRnVuY3Rpb24iLCJzdWRvUmFuZG9tVmFyaWFibGUiLCJyYW5kb20iLCJsaW5lU3RhcnRMb2NhdGlvbiIsImxpbmVFbmRMb2NhdGlvbiIsInNsb3BlIiwiYXRhbiIsInhMZW5ndGgiLCJhYnMiLCJpbnRlcmNlcHQiLCJteUNhbnZhcyJdLCJzb3VyY2VSb290IjoiIn0=