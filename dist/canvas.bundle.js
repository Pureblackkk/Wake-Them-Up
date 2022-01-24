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
      return this.house;
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
    value: function keyboardPasteController() {
      // Get the object
      var copyedObjectList = _copy_paste_copy_paste_house__WEBPACK_IMPORTED_MODULE_3__.CopyPasteHouse["package"];

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
        } // Trigger the painter event to redraw

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

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
/* harmony export */   "DefaultActiveInformation": () => (/* binding */ DefaultActiveInformation)
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
  fillColor: 'red',
  isBorder: false
};
var DefaultActiveInformation = {
  isBorder: true,
  borderWith: 3,
  borderColor: 'blue',
  isAnchor: true
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
    _this.isSleeping = status || true;
    _this.isActive = false;
    _this.isDrag = false;
    _this.edgeList = [];
    _this.incomingEdgeList = [];
    _this.childrenList = [];
    _this.childEdgeMapList = [];
    _this.canvasInformation = canvasInformation || _config__WEBPACK_IMPORTED_MODULE_3__.DefaultSleeperCanvasInformation;
    _this.canvasPath = null;
    _this.canvasAnchorsPathList = null;

    _this.initEventHandler(); // Trigger Event


    _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_4__.SleeperPoolEventName.addSleeper, _assertThisInitialized(_this));
    _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_4__.PainterEventName.figureDraw, _this.canvasInformation, _this.setCanvasPath.bind(_assertThisInitialized(_this))); // Draw the text

    _this.drawTextArea();

    _this.drawText();

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
    value: function changeSleepingStatus() {
      this.isSleeping = !this.isSleeping;
    }
    /**
     * Try to active the children nodes
     */

  }, {
    key: "activeChild",
    value: function activeChild() {
      // Active the children in order
      this.childrenList.forEach(function (childObject) {
        var weight = childObject.edge.weight; // Change the child status if active

        if ((0,_utils_math_utils__WEBPACK_IMPORTED_MODULE_2__.getActivityByWeight)(weight)) {
          childObject.child.changeSleepingStatus();
        }
      });
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
        this.changeCanvasInformation(_config__WEBPACK_IMPORTED_MODULE_3__.DefaultActiveInformation);
      } else if (this.isActive && sleeper !== this) {
        // Select other sleeper then inactive itself
        this.isActive = false;
        this.isTextMode = false;
        this.changeCanvasInformation({
          isBorder: false,
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
    }
    /**
     * Init UndoRedoStack
     */

  }, {
    key: "initUndoRedoStack",
    value: function initUndoRedoStack() {
      _undo_redo_undo_redo__WEBPACK_IMPORTED_MODULE_6__.UndoRedo.getInstance();
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
  lineColor: 'blue'
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
          isAnchor = params.isAnchor; // Draw the circle

      var circle = new Path2D();
      circle.arc(x, y, radius, startAngle, endAngle); // Fill the circle

      var fillColor = params['fillColor'];

      if (isFilled && fillColor) {
        this.canvasContext.fillStyle = fillColor;
        this.canvasContext.fill(circle);
      } // Draw the border


      if (!!(isBorder && borderWith && borderColor)) {
        this.canvasContext.lineWidth = borderWith;
        this.canvasContext.strokeStyle = borderColor;
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
var PanelOpearationControllerEventName = {};
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
  paste: 'paste'
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
        // Add mutation
        _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.UndoRedoEventName.addMutation, {
          object: _copy_paste_copy_paste_house__WEBPACK_IMPORTED_MODULE_3__.CopyPasteHouse["package"],
          operation: _operation__WEBPACK_IMPORTED_MODULE_0__.SavedOperation.paste,
          params: {}
        }); // Original controller

        controllerFunction();
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
  var sudoRandomVariable = Math.random;
  return sudoRandomVariable < weight;
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

var myCanvas = _core_view_layer_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.getInstance(); // Add a sleeper

new _core_data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_1__.Sleeper();
new _core_data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_1__.Sleeper(false, {
  drawType: 'circle',
  x: 600,
  y: 600,
  radius: 30,
  startAngle: 0,
  endAngle: 2 * Math.PI,
  isFilled: true,
  fillColor: '#FFCC33'
});
new _core_data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_1__.Sleeper(false, {
  drawType: 'circle',
  x: 700,
  y: 700,
  radius: 30,
  startAngle: 0,
  endAngle: 2 * Math.PI,
  isFilled: true,
  fillColor: '#FFCC33'
});
new _core_data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_1__.Sleeper(false, {
  drawType: 'circle',
  x: 500,
  y: 600,
  radius: 30,
  startAngle: 0,
  endAngle: 2 * Math.PI,
  isFilled: true,
  fillColor: '#FFCC33'
});
new _core_data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_1__.Sleeper(false, {
  drawType: 'circle',
  x: 600,
  y: 700,
  radius: 30,
  startAngle: 0,
  endAngle: 2 * Math.PI,
  isFilled: true,
  fillColor: '#FFCC33'
});
new _core_data_layer_sleeper_sleeper__WEBPACK_IMPORTED_MODULE_1__.Sleeper(false, {
  drawType: 'circle',
  x: 700,
  y: 800,
  radius: 30,
  startAngle: 0,
  endAngle: 2 * Math.PI,
  isFilled: true,
  fillColor: '#FFCC33'
}); // Enable hot updating

if (false) {}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFBQSxDQUFDLEVBQUUsR0FIUDtBQUlJc0MsRUFBQUEsTUFBTSxFQUFFLEVBSlo7QUFLSThMLEVBQUFBLFVBQVUsRUFBRSxDQUxoQjtBQU1JQyxFQUFBQSxRQUFRLEVBQUUsSUFBSWpNLElBQUksQ0FBQ2tNLEVBTnZCO0FBT0lDLEVBQUFBLFFBQVEsRUFBRSxJQVBkO0FBUUlDLEVBQUFBLFNBQVMsRUFBRTtBQVJmLENBRko7QUFjQSxJQUFJdksscUVBQUosQ0FDSSxLQURKLEVBRUk7QUFDSXJELEVBQUFBLFFBQVEsRUFBRSxRQURkO0FBRUliLEVBQUFBLENBQUMsRUFBRSxHQUZQO0FBR0lDLEVBQUFBLENBQUMsRUFBRSxHQUhQO0FBSUlzQyxFQUFBQSxNQUFNLEVBQUUsRUFKWjtBQUtJOEwsRUFBQUEsVUFBVSxFQUFFLENBTGhCO0FBTUlDLEVBQUFBLFFBQVEsRUFBRSxJQUFJak0sSUFBSSxDQUFDa00sRUFOdkI7QUFPSUMsRUFBQUEsUUFBUSxFQUFFLElBUGQ7QUFRSUMsRUFBQUEsU0FBUyxFQUFFO0FBUmYsQ0FGSixHQWVBOztBQUNBLElBQUlpTSxLQUFKLEVBQWdCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3B5LXBhc3RlL2NvcHktcGFzdGUtaG91c2UuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvYWN0aW9uLXV0aWxzLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9rZXlib2FyZC9rZXlib2FyZC1hY3Rpb24tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9rZXlib2FyZC9rZXlib2FyZC1hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvbW91c2UvZGVlcENsb25lLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL21vdXNlL21vdXNlLWFjdGlvbi1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL21vdXNlL21vdXNlLWFjdGlvbi5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvY29uZmlnLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvZGF0YS1sYXllci9lZGdlL2VkZ2UtcG9vbC5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItcG9vbC5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXRleHQuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL3ZpZXctbGF5ZXIvY2FudmFzLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvdmlldy1sYXllci9wYWludGVyL2ZpZ3VyZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS92aWV3LWxheWVyL3BhaW50ZXIvZmlndXJlL3BhaW50ZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS92aWV3LWxheWVyL3BhaW50ZXIvcGFpbnRlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL3ZpZXctbGF5ZXIvcGFpbnRlci90ZXh0L3BhaW50ZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2dsb2JhbC9nbG9iYWwtY29uZmlnLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3VuZG8tcmVkby9vcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdW5kby1yZWRvL3JlZG8tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy91bmRvLXJlZG8vdW5kby1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3VuZG8tcmVkby91bmRvLWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy91bmRvLXJlZG8vdW5kby1yZWRvLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3V0aWxzL2V2ZW50LmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3V0aWxzL21hdGgtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLmNsb25lZGVlcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9lbnRyeS90ZXN0RW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsb25lRGVlcCBmcm9tIFwibG9kYXNoLmNsb25lZGVlcFwiO1xuXG5jbGFzcyBDb3B5UGFzdGVIb3VzZSB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDb3B5UGFzdGVIb3VzZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ob3VzZSA9IFtdO1xuICAgICAgICBDb3B5UGFzdGVIb3VzZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldCBwYWNrYWdlKG9iaikge1xuICAgICAgICB0aGlzLmhvdXNlID0gW107XG5cbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIG9iaikge1xuICAgICAgICAgICAgICAgIHRoaXMuaG91c2UucHVzaChjbG9uZURlZXAoaXRlbSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ob3VzZS5wdXNoKGNsb25lRGVlcChvYmopKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgcGFja2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG91c2U7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDb3B5UGFzdGVIb3VzZSB9OyIsImltcG9ydCB7IFNsZWVwZXJQb29sZXIgfSBmcm9tICcuLi9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci1wb29sJztcbmltcG9ydCB7IEVkZ2VQb29sZXIgfSBmcm9tICcuLi9kYXRhLWxheWVyL2VkZ2UvZWRnZS1wb29sJztcbmltcG9ydCB7IGlzUG9pbnRJbkxpbmUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRoLXV0aWxzJztcbmltcG9ydCB7IE1pbmltYWxEaXN0YW5jZUZvckxvY2F0ZSB9IGZyb20gJy4vY29uZmlnJztcblxuY2xhc3MgQWN0aW9uVXRpbHMge1xuICAgIC8qKlxuICAgICAqIEZpbmQgbW91c2UgbG9jYXRlZCBvYmplY3RcbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhcyBcbiAgICAgKiBAcGFyYW0geyp9IGxvY2F0aW9uIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kTG9jYXRlZE9iamVjdChjYW52YXMsIGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZpbmRGdW5jdGlvbnNMaXN0ID0gW1xuICAgICAgICAgICAgQWN0aW9uVXRpbHMuZmluZExvY2F0ZWRMaW5lT3JIZWFkLFxuICAgICAgICAgICAgQWN0aW9uVXRpbHMuZmluZExvY2F0ZWRBbmNob3IsXG4gICAgICAgICAgICBBY3Rpb25VdGlscy5maW5kTG9jYXRlZFNsZWVwZXIsXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yIChjb25zdCBmaW5kRnVuY3Rpb24gb2YgZmluZEZ1bmN0aW9uc0xpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbmRSZXN1bHQgPSBmaW5kRnVuY3Rpb24oY2FudmFzLCBsb2NhdGlvbik7XG4gICAgICAgICAgICBpZiAoISFmaW5kUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmRSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIHNsZWVwZXIgd2hpY2ggYXQgdGhlIG1vdXNlIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIHsqfSBjYW52YXMgQ2FudmFzIE9iamVjdCBcbiAgICAgKiBAcGFyYW0geyp9IGxvY2F0aW9uIE1vdXNlIGxvY2F0aW9uXG4gICAgICogQHJldHVybnMge1NsZWVwZXIgfCBudWxsfVxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kTG9jYXRlZFNsZWVwZXIoY2FudmFzLCBsb2NhdGlvbikge1xuICAgICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgLy8gSW5uZXIgZnVuY3Rpb24gdG8gY2hlY2sgaWYgbG9jYXRpb24gaW4gY2lyY2xlXG4gICAgICAgIGNvbnN0IGlzTG9jYXRlZEluQ2lyY2xlID0gKGNpcmNsZVBhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHt4LCB5fSA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIGNhbnZhc0NvbnRleHQuaXNQb2ludEluUGF0aChjaXJjbGVQYXRoLCB4LCB5KVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEhhbmRsZXIgY2hlY2tpbmcgZnVuY3Rpb25zJyBtYXBzIFxuICAgICAgICBjb25zdCBsb2NhdGlvbkhhbmRsZXJNYXBzID0ge1xuICAgICAgICAgICAgJ2NpcmNsZSc6IGlzTG9jYXRlZEluQ2lyY2xlLmJpbmQodGhpcyksXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJdGVyYXRlIHBvb2wgdG8gZmluZCBsb2NhdGVkIHBhdGhcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBTbGVlcGVyUG9vbGVyLnBvb2wubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICAgICAgY29uc3Qgc2xlZXBlciA9IFNsZWVwZXJQb29sZXIucG9vbFtpbmRleF07XG4gICAgICAgICAgICBjb25zdCBzbGVlcGVyU3R5bGUgPSBzbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uO1xuICAgICAgICAgICAgY29uc3Qgc2xlZXBlckNhbnZhc1BhdGggPSBzbGVlcGVyLmNhbnZhc1BhdGg7XG4gICAgICAgICAgICBjb25zdCB7IGRyYXdUeXBlIH0gPSBzbGVlcGVyU3R5bGU7XG4gICAgICAgICAgICBpZiAobG9jYXRpb25IYW5kbGVyTWFwc1tkcmF3VHlwZV0oc2xlZXBlckNhbnZhc1BhdGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBzbGVlcGVyLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2xlZXBlcicsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIGFuY2hvciB3aGljaCBhdCB0aGUgbW91c2UgbG9jYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhcyBDYW52YXMgT2JqZWN0IFxuICAgICAqIEBwYXJhbSB7Kn0gbG9jYXRpb24gTW91c2UgbG9jYXRpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZExvY2F0ZWRBbmNob3IoY2FudmFzLCBsb2NhdGlvbikge1xuICAgICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IHt4LCB5fSA9IGxvY2F0aW9uO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gU2xlZXBlclBvb2xlci5wb29sLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHNsZWVwZXIgPSBTbGVlcGVyUG9vbGVyLnBvb2xbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHNsZWVwZXIuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNsZWVwZXJBbmNob3Igb2Ygc2xlZXBlci5jYW52YXNBbmNob3JzUGF0aExpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBhbmNob3JQYXRoIH0gPSBzbGVlcGVyQW5jaG9yO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FudmFzQ29udGV4dC5pc1BvaW50SW5QYXRoKGFuY2hvclBhdGgsIHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogW3NsZWVwZXIsIHNsZWVwZXJBbmNob3JdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhbmNob3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIGVkZ2Ugd2hpY2ggYXQgdGhlIG1vdXNlIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIHsqfSBjYW52YXMgXG4gICAgICogQHBhcmFtIHsqfSBsb2NhdGlvbiBcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZExvY2F0ZWRMaW5lT3JIZWFkKGNhbnZhcywgbG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCB7eCwgeX0gPSBsb2NhdGlvbjtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBFZGdlUG9vbGVyLnBvb2wubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICAgICAgY29uc3QgZWRnZSA9IEVkZ2VQb29sZXIucG9vbFtpbmRleF07XG4gICAgICAgICAgICBjb25zdCB7IGhlYWQgfSA9IGVkZ2UuY2FudmFzUGF0aDtcbiAgICAgICAgICAgIGlmIChpc1BvaW50SW5MaW5lKGVkZ2Uuc3RhcnRMb2NhdGlvbiwgZWRnZS5lbmRMb2NhdGlvbiwgeCwgeSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGVkZ2UsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbnZhc0NvbnRleHQuaXNQb2ludEluUGF0aChoZWFkLCB4LCB5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogZWRnZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hlYWQnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgc2xlZXBlciB3aG8gaXMgaW4gZHJhZ2dpbmcgc3RhdHVzXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIGZpbmREcmFnZ2VkU2xlZXBlcigpIHtcbiAgICAgICAgY29uc3QgZHJhZ2dlZFNsZWVwZXJMaXN0ID0gW107XG4gICAgICAgIGZvciAobGV0IHNsZWVwZXIgb2YgU2xlZXBlclBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBpZiAoc2xlZXBlci5pc0RyYWcpIHtcbiAgICAgICAgICAgICAgICBkcmFnZ2VkU2xlZXBlckxpc3QucHVzaChzbGVlcGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZHJhZ2dlZFNsZWVwZXJMaXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRocm90dGxlciBtYWtlciBmb3IgbGlzdGVuZXIgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gd2FpdFRpbWUgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIHRocm90dGxlck1ha2VyKGZuLCB3YWl0VGltZSkge1xuICAgICAgICBsZXQgdGltZXIgPSBudWxsO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICBpZighdGltZXIpIHtcbiAgICAgICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9LCB3YWl0VGltZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIGNsb3Nlc3Qgc2xlZXBlciBnaXZlbiBsb2NhdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gbG9jYXRpb24gXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRDbG9zZXN0U2xlZXBlcihsb2NhdGlvbikge1xuICAgICAgICBjb25zdCB7eCwgeX0gPSBsb2NhdGlvbjtcbiAgICAgICAgZm9yKGNvbnN0IHNsZWVwZXIgb2YgU2xlZXBlclBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBjb25zdCBzbGVlcGVyWCA9IHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueDtcbiAgICAgICAgICAgIGNvbnN0IHNsZWVwZXJZID0gc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi55O1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHNsZWVwZXJYIC0geCkqKjIgKyAoc2xlZXBlclkgLXkpKioyKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ucmFkaXVzICsgTWluaW1hbERpc3RhbmNlRm9yTG9jYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNsZWVwZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBjbG9zZXN0IGFuY2hvciBnaXZlbiBsb2NhdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gbG9jYXRpb24gXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRDbG9zZXN0QW5jaG9yKGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGxvY2F0ZWRTbGVlcGVyID0gdGhpcy5maW5kQ2xvc2VzdFNsZWVwZXIobG9jYXRpb24pO1xuICAgICAgICBpZiAoIWxvY2F0ZWRTbGVlcGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbG9lc3QgU2xlZXBlcicsIGxvY2F0ZWRTbGVlcGVyKTtcblxuICAgICAgICBjb25zdCBsb2NhdGVkU2xlZXBlclggPSBsb2NhdGVkU2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi54O1xuICAgICAgICBjb25zdCBsb2NhdGVkU2xlZXBlclkgPSBsb2NhdGVkU2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi55O1xuICAgICAgICBjb25zdCByYWRpdXMgPSBsb2NhdGVkU2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi5yYWRpdXM7XG4gICAgICAgIGNvbnN0IGFuY2hvckxvY2F0aW9uTGlzdCA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiBsb2NhdGVkU2xlZXBlclggLSByYWRpdXMsXG4gICAgICAgICAgICAgICAgeTogbG9jYXRlZFNsZWVwZXJZLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiBsb2NhdGVkU2xlZXBlclggKyByYWRpdXMsXG4gICAgICAgICAgICAgICAgeTogbG9jYXRlZFNsZWVwZXJZLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiBsb2NhdGVkU2xlZXBlclgsXG4gICAgICAgICAgICAgICAgeTogbG9jYXRlZFNsZWVwZXJZIC0gcmFkaXVzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiBsb2NhdGVkU2xlZXBlclgsXG4gICAgICAgICAgICAgICAgeTogbG9jYXRlZFNsZWVwZXJZICsgcmFkaXVzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgbWluRGlzdGFuY2UgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICAgICAgbGV0IG1pbkxvY2F0aW9uID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBhbmNob3JMb2NhdGlvbiBvZiBhbmNob3JMb2NhdGlvbkxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHt4LCB5fSA9IGFuY2hvckxvY2F0aW9uO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAobG9jYXRpb24ueCAtIHgpKioyICsgKGxvY2F0aW9uLnkgLSB5KSoqMjtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IG1pbkRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgbWluTG9jYXRpb24gPSBhbmNob3JMb2NhdGlvbjtcbiAgICAgICAgICAgICAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsb3Nlc3RMb2NhdGlvbjogbWluTG9jYXRpb24sXG4gICAgICAgICAgICBjbG9zZXN0U2xlZXBlcjogbG9jYXRlZFNsZWVwZXIsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5leHBvcnQgeyBBY3Rpb25VdGlscyB9OyIsImV4cG9ydCBjb25zdCBtb3VzZUFjdGlvbk1vZGUgPSB7XG4gICAgZG93bk9uU2xlZXBlcjogJ2Rvd25PblNsZWVwZXInLFxuICAgIGRvd25PbkFuY2hvcjogJ2Rvd25PbkFuY2hvcicsXG4gICAgZG93bk9uTGluZTogJ2Rvd25PbkVnZGUnLFxuICAgIGRvd25PbkhlYWQ6ICdkb3duT25IZWFkJyxcbiAgICBkb3duT25CYWNrZ3JvdW5kOiAnZG93bk9uQmFja2dyb3VuZCcsXG4gICAgZG93bk9uTm9uZTogJ2Rvd25Pbk5vbmUnLFxuICAgIGRvd25PblRleHQ6ICdkb3duT25UZXh0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBNaW5pbWFsRGlzdGFuY2VGb3JMb2NhdGUgPSAxMDsiLCJpbXBvcnQgeyBcbiAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLFxuICAgIFBhaW50ZXJFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgVW5kb0RlY29yYXRvciB9IGZyb20gJy4uLy4uLy4uL3VuZG8tcmVkby91bmRvLWRlY29yYXRvcic7XG5pbXBvcnQgeyBDb3B5UGFzdGVIb3VzZSB9IGZyb20gJy4uLy4uLy4uL2NvcHktcGFzdGUvY29weS1wYXN0ZS1ob3VzZSc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXInO1xuaW1wb3J0IHsgRWRnZSB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlJzsgXG5cblxuY2xhc3MgS2V5Ym9hcmRBY3Rpb25Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXNlciBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGtleWJvYXJkRGVsZXRlLFxuICAgICAgICAgICAga2V5Ym9hcmRJbnB1dCxcbiAgICAgICAgICAgIGtleWJvYXJkVGV4dFVuZG8sXG4gICAgICAgICAgICBrZXlib2FyZFRleHRSZWRvLFxuICAgICAgICAgICAga2V5Ym9hcmRUZXh0RGVsZXRlLFxuICAgICAgICAgICAga2V5Ym9hcmRDb3B5LFxuICAgICAgICAgICAga2V5Ym9hcmRQYXN0ZSxcbiAgICAgICAgfSA9IEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWU7XG5cbiAgICAgICAgLy8gTWFrZSBFdmVudE5hbWUtSGFuZGxlciBNYXBcbiAgICAgICAgY29uc3QgZXZlbnROYW1lc01hcCA9IHt9O1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkRGVsZXRlXSA9IFVuZG9EZWNvcmF0b3IuZGVsZXRlSXRlbXNEZWNvcmF0b3IodGhpcy5rZXlib2FyZERlbGV0ZUNvbnRyb2xsZXIpO1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkUGFzdGVdID0gVW5kb0RlY29yYXRvci5wYXN0ZURlY29yYXRvcih0aGlzLmtleWJvYXJkUGFzdGVDb250cm9sbGVyKTtcbiAgICAgICAgZXZlbnROYW1lc01hcFtrZXlib2FyZENvcHldID0gdGhpcy5rZXlib2FyZENvcHlDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkSW5wdXRdID0gdGhpcy5rZXlib2FyZElucHV0Q29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFtrZXlib2FyZFRleHRVbmRvXSA9IHRoaXMua2V5Ym9hcmRUZXh0VW5kb0NvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmRUZXh0UmVkb10gPSB0aGlzLmtleWJvYXJkVGV4dFJlZG9Db250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkVGV4dERlbGV0ZV0gPSB0aGlzLmtleWJvYXJkVGV4dERlbGV0ZUNvbnRyb2xsZXI7XG5cbiAgICAgICAgLy8gSW5pdCBldmVudCBoYW5kbGVyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TmFtZXNNYXBbZXZlbnROYW1lXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgdGhlIHNlbGVjdGVkIGVkZ2Ugb3IgU2xlZXBlclxuICAgICAqIEBwYXJhbSB7RWRnZSB8IFNsZWVwZXJ9IGNsaWNrT2JqZWN0IFxuICAgICAqL1xuICAgIGtleWJvYXJkRGVsZXRlQ29udHJvbGxlcihjbGlja09iamVjdCkge1xuICAgICAgICBjbGlja09iamVjdC5kZWxldGVTZWxmKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5wdXQgdGV4dCB0byB0aGUgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlciBcbiAgICAgKiBAcGFyYW0geyp9IGlucHV0S2V5IHN0cmluZ1xuICAgICAqL1xuICAgIGtleWJvYXJkSW5wdXRDb250cm9sbGVyKHNsZWVwZXIsIGlucHV0S2V5KSB7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBgJHtzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50fSR7aW5wdXRLZXl9YDtcblxuICAgICAgICAvLyBVcGRhdGUgdGV4dFxuICAgICAgICBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50ID0gbmV3Q29udGVudDtcblxuICAgICAgICAvLyBVcGRhdGUgdGVtcCBzdGFja1xuICAgICAgICBzbGVlcGVyLnRleHRUZW1wU3RhY2sudGV4dCA9IG5ld0NvbnRlbnQ7XG5cbiAgICAgICAgY29uc29sZS5sb2coc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuZG8gZm9yIHNsZWVwZXIgaW4gdGV4dCBtb2RlXG4gICAgICogQHBhcmFtIHsqfSBzbGVlcGVyIFxuICAgICAqL1xuICAgIGtleWJvYXJkVGV4dFVuZG9Db250cm9sbGVyKHNsZWVwZXIpIHtcbiAgICAgICAgc2xlZXBlci50ZXh0VGVtcFN0YWNrLnVuZG8oKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhzbGVlcGVyLnRleHRUZW1wU3RhY2sudGV4dCk7XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGVcbiAgICAgICAgc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudCA9IHNsZWVwZXIudGV4dFRlbXBTdGFjay50ZXh0O1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWRvIGZvciBzbGVlcGVyIGluIHRleHQgbW9kZVxuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlciBcbiAgICAgKi9cbiAgICBrZXlib2FyZFRleHRSZWRvQ29udHJvbGxlcihzbGVlcGVyKSB7XG4gICAgICAgIHNsZWVwZXIudGV4dFRlbXBTdGFjay5yZWRvKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlXG4gICAgICAgIHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQgPSBzbGVlcGVyLnRleHRUZW1wU3RhY2sudGV4dDtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7IFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBmb3Igc2xlZXBlciBpbiB0ZXh0IG1vZGVcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXIgXG4gICAgICovXG4gICAga2V5Ym9hcmRUZXh0RGVsZXRlQ29udHJvbGxlcihzbGVlcGVyKSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ0xlbmd0aCA9IHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQubGVuZ3RoO1xuICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudC5zdWJzdHJpbmcoMCwgc3RyaW5nTGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRleHRcbiAgICAgICAgc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudCA9IG5ld0NvbnRlbnQ7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRlbXAgc3RhY2tcbiAgICAgICAgc2xlZXBlci50ZXh0VGVtcFN0YWNrLnRleHQgPSBuZXdDb250ZW50O1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb3B5IGEgb2JqZWN0IHNlbGVjdGVkXG4gICAgICogQHBhcmFtIHtzbGVlcGVyIHwgRWRnZX0gb2JqZWN0IFxuICAgICAqL1xuICAgIGtleWJvYXJkQ29weUNvbnRyb2xsZXIob2JqZWN0KSB7XG4gICAgICAgIENvcHlQYXN0ZUhvdXNlLnBhY2thZ2UgPSBvYmplY3Q7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFBhc3RlIHRoZSBvYmplY3Qgc3RvcmUgaW4gY29weS1wYXN0ZSBob3VzZVxuICAgICAqL1xuICAgIGtleWJvYXJkUGFzdGVDb250cm9sbGVyKCkge1xuICAgICAgICAvLyBHZXQgdGhlIG9iamVjdFxuICAgICAgICBjb25zdCBjb3B5ZWRPYmplY3RMaXN0ID0gQ29weVBhc3RlSG91c2UucGFja2FnZTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgY29weWVkT2JqZWN0TGlzdCkge1xuICAgICAgICAgICAgLy8gVE9ETzogT25seSBzdXBwb3J0IGZvciBzbGVlcGVyIG5vd1xuICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBTbGVlcGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIG5vbi1yZWxhdGVkIGZhY3RvcnMgd2l0aGluIHNsZWVwZXJcbiAgICAgICAgICAgICAgICBpdGVtLnByZXBhcmVGb3JQYXN0ZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgZXZlbnRcbiAgICAgICAgICAgICAgICBpdGVtLmluaXRFdmVudEhhbmRsZXIoKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBTbGVlcGVyIGludG8gc2xlZXBlciBwb29sXG4gICAgICAgICAgICAgICAgaXRlbS5yZWNvdmVyU2VsZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgS2V5Ym9hcmRBY3Rpb25Db250cm9sbGVyIH07IiwiaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFNsZWVwZXIgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlcic7XG5pbXBvcnQgeyBcbiAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLFxuICAgIFVuZG9SZWRvRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuXG5jbGFzcyBLZXlib2FyZEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBtb3VzZUFjdGlvbikge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5tb3VzZUFjdGlvbiA9IG1vdXNlQWN0aW9uO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmluaXRBY3Rpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGFsbCB0aGUgbW91c2UgYWN0aW9uIGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGluaXRBY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbnNNYXAgPSB7XG4gICAgICAgICAgICAna2V5ZG93bic6IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGFjdGlvbiBpbiBhY3Rpb25zTWFwKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihhY3Rpb24sIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zTWFwW2FjdGlvbl0oZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIG1vdXNlZG93biBlbGVtZW50IGlzIHNsZWVwZXIgYW5kIGluIHRleHQgbW9kZVxuICAgICAgICBjb25zdCBpc1RleHRNb2RlT24gPSB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQgaW5zdGFuY2VvZiBTbGVlcGVyIFxuICAgICAgICAmJiB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQuaXNUZXh0TW9kZTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaChjb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgLy8gUHJlc3MgRGVsZXRlXG4gICAgICAgICAgICAgICAgaXNUZXh0TW9kZU9uID8gdGhpcy5faGFuZGxlclRleHREZWxldGUoKSA6IHRoaXMuX2hhbmRsZXJEZWxldGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgICAgICAgLy8gUHJlc3MgY3RybCArIHpcbiAgICAgICAgICAgICAgICBpZiAoKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgJiYgIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGV4dE1vZGVPbiA/IFxuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkVGV4dFVuZG8sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUudW5kbyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUHJlc3MgY3RybCArIHNoZml0ICsgelxuICAgICAgICAgICAgICAgIGlmICgoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSAmJiBldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICBpc1RleHRNb2RlT24gPyBcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZFRleHRSZWRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLnJlZG8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjc6XG4gICAgICAgICAgICAgICAgLy8gUHJlc3MgY3RybCArIGNcbiAgICAgICAgICAgICAgICBpZigoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNUZXh0TW9kZU9uID9cbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KCdudWxsJylcbiAgICAgICAgICAgICAgICAgICAgOiBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkQ29weSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg2OlxuICAgICAgICAgICAgICAgIC8vIFByZXNzIGN0cmwgKyB2XG4gICAgICAgICAgICAgICAgaWYoKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgJiYgIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGV4dE1vZGVPbiA/XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudCgnbnVsbCcpXG4gICAgICAgICAgICAgICAgICAgIDogRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZFBhc3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcgfHxcbiAgICAgICAgICAgICAgICAgICAgY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwIHx8XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjJcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaXNUZXh0TW9kZU9uICYmIHRoaXMuX2hhbmRsZU5vcm1hbChldmVudC5rZXkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRleHQgaW5wdXQgZm9yIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IGtleSBcbiAgICAgKi9cbiAgICBfaGFuZGxlTm9ybWFsKGtleSkgeyAgXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUua2V5Ym9hcmRJbnB1dCxcbiAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgIGtleVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIG9iamVjdCBkZWxldGVcbiAgICAgKi9cbiAgICBfaGFuZGxlckRlbGV0ZSgpIHtcbiAgICAgICAgLy8gSWYgY2xpY2sgZWxlbWVudCBleGlzdHMgYW5kIGlzIGFjdGl2ZSwgdGhlbiBkZWxldGVcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50XG4gICAgICAgICAgICAmJiB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQuaXNBY3RpdmVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZERlbGV0ZSxcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciB0ZXh0IGRlbGV0ZVxuICAgICAqL1xuICAgIF9oYW5kbGVyVGV4dERlbGV0ZSgpIHtcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZFRleHREZWxldGUsXG4gICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBLZXlib2FyZEFjdGlvbiB9OyIsImltcG9ydCB7IG1vdXNlQWN0aW9uTW9kZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbi8vIENsb25lIHRoZSByZWxhdGVkIGluZm9ybWF0aW9uIGFjY29yZGluZyB0byB0aGUgdHlwZSBvZiBjbGFzc1xuZXhwb3J0IGZ1bmN0aW9uIERlZXBDbG9uZUluZm8obW9kZSwgdGFyZ2V0KSB7XG4gICAgc3dpdGNoKG1vZGUpIHtcbiAgICAgICAgY2FzZShtb3VzZUFjdGlvbk1vZGUuZG93bk9uU2xlZXBlcik6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IHRhcmdldC5jYW52YXNJbmZvcm1hdGlvbi54LFxuICAgICAgICAgICAgICAgIHk6IHRhcmdldC5jYW52YXNJbmZvcm1hdGlvbi55LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAobW91c2VBY3Rpb25Nb2RlLmRvd25PbkhlYWQpOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiB0YXJnZXQuZW5kTG9jYXRpb24ueCxcbiAgICAgICAgICAgICAgICB5OiB0YXJnZXQuZW5kTG9jYXRpb24ueSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBcbiAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLFxuICAgIFNsZWVwZXJFdmVudE5hbWUsXG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbiAgICBFZGdlRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFNsZWVwZXJQb29sZXIgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci1wb29sJztcbmltcG9ydCB7IEVkZ2VQb29sZXIgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL2VkZ2UvZWRnZS1wb29sJztcbmltcG9ydCB7IFVuZG9EZWNvcmF0b3IgfSBmcm9tICcuLi8uLi8uLi91bmRvLXJlZG8vdW5kby1kZWNvcmF0b3InOyBcblxuY2xhc3MgTW91c2VBY3Rpb25Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXNlciBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG1vdXNlRG93blNsZWVwZXIsXG4gICAgICAgICAgICBtb3VzZURvd25MaW5lLFxuICAgICAgICAgICAgbW91c2VEb3duQmFja2dyb3VuZCxcbiAgICAgICAgICAgIG1vdXNlTW92ZVNsZWVwZXIsXG4gICAgICAgICAgICBtb3VzZU1vdmVIZWFkLFxuICAgICAgICAgICAgbW91c2VVcFNsZWVwZXIsXG4gICAgICAgICAgICBtb3VzZVVwQW5jaG9yLFxuICAgICAgICAgICAgbW91c2VVcEhlYWQsXG4gICAgICAgICAgICBtb3VzZURvdWJsZUNsaWNrLFxuICAgICAgICB9ID0gQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZTtcblxuICAgICAgICAvLyBNYWtlIEV2ZW50TmFtZS1IYW5kbGVyIE1hcFxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VEb3duU2xlZXBlcl0gPSB0aGlzLm1vdXNlRG93blNsZWVwZXJDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlRG93bkxpbmVdID0gdGhpcy5tb3VzZURvd25MaW5lQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZURvd25CYWNrZ3JvdW5kXSA9IHRoaXMubW91c2VEb3duQmFja2dyb3VuZENvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VNb3ZlU2xlZXBlcl0gPSB0aGlzLm1vdXNlTW92ZVNsZWVwZXJDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlTW92ZUhlYWRdID0gdGhpcy5tb3VzZU1vdmVIZWFkQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZVVwU2xlZXBlcl0gPSBVbmRvRGVjb3JhdG9yLm1vdXNlVXBTbGVlcGVyRGVjb3JhdG9yKHRoaXMubW91c2VVcFNsZWVwZXJDb250cm9sbGVyLmJpbmQodGhpcykpO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlVXBBbmNob3JdID0gVW5kb0RlY29yYXRvci5tb3VzZVVwQW5jaG9yRGVjb3JhdG9yKHRoaXMubW91c2VVcEFuY2hvckNvbnRyb2xsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VVcEhlYWRdID0gVW5kb0RlY29yYXRvci5tb3VzZVVwSGVhZERlY29yYXRvcih0aGlzLm1vdXNlVXBIZWFkQ29udHJvbGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZURvdWJsZUNsaWNrXSA9IHRoaXMubW91c2VEb3VibGVDbGlja0NvbnRyb2xsZXI7XG5cbiAgICAgICAgLy8gSW5pdCBldmVudCBoYW5kbGVyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TmFtZXNNYXBbZXZlbnROYW1lXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbHRlciB0aGUgc2xlZXBlciBwcm9wZXJ0aWVzIFxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gc2xlZXBlciBTbGVlcGVyIG9iamVjdFxuICAgICAqL1xuICAgIG1vdXNlRG93blNsZWVwZXJDb250cm9sbGVyKHNsZWVwZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Rvd24nLCBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vIENoYW5nZSBhY3RpdmUgc3RhdHVzIGFuZCBkcmFnIHN0YXR1c1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBTbGVlcGVyRXZlbnROYW1lLmFjdGl2ZVNvbWVTbGVlcGVyLFxuICAgICAgICAgICAgc2xlZXBlclxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbHRlciB0aGUgZWRnZSBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIHsqfSBlZGdlIFxuICAgICAqL1xuICAgIG1vdXNlRG93bkxpbmVDb250cm9sbGVyKGVkZ2UpIHtcbiAgICAgICAgLy8gQ2hhbmdlIGFjdGl2ZSBlZGdlIHN0YXR1cyBcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgRWRnZUV2ZW50TmFtZS5hY3RpdmVTb21lRWRnZSxcbiAgICAgICAgICAgIGVkZ2UsXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFuIGFsbCB0aGUgYWN0aXZlIHN0YXR1c1xuICAgICAqL1xuICAgIG1vdXNlRG93bkJhY2tncm91bmRDb250cm9sbGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnRG93biBvbiBiYWNrZ3JvdW5kIGNvbnRyb2xsZXInKTtcbiAgICAgICAgZm9yIChjb25zdCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgLy8gRGVhY3RpdmUgYWxsIHRoZSBzbGVlcGVyXG4gICAgICAgICAgICBzbGVlcGVyLmNoYW5nZUFjdGl2ZVN0YXR1cyhudWxsKTtcblxuICAgICAgICAgICAgLy8gQmFjayB0byBub3JtYWwgbW9kZVxuICAgICAgICAgICAgc2xlZXBlci5lbmRUZXh0TW9kZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBlZGdlIG9mIEVkZ2VQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgZWRnZS5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgc2xlZXBlciBjYW52YXMgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0geyp9IGRyYWdTbGVlcGVyTGlzdCBcbiAgICAgKiBAcGFyYW0geyp9IHJlbGF0aXZlTW92ZURpc3RhbmNlIFxuICAgICAqL1xuICAgIG1vdXNlTW92ZVNsZWVwZXJDb250cm9sbGVyKGRyYWdTbGVlcGVyTGlzdCwgcmVsYXRpdmVNb3ZlRGlzdGFuY2UpIHtcbiAgICAgICAgZm9yIChjb25zdCBzbGVlcGVyIG9mIGRyYWdTbGVlcGVyTGlzdCkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luWCA9IHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueDtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpblkgPSBzbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnk7XG4gICAgICAgICAgICBjb25zdCBuZXdYID0gb3JpZ2luWCArIHJlbGF0aXZlTW92ZURpc3RhbmNlLng7XG4gICAgICAgICAgICBjb25zdCBuZXdZID0gb3JpZ2luWSArIHJlbGF0aXZlTW92ZURpc3RhbmNlLnk7XG4gICAgICAgICAgICBzbGVlcGVyLmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHtcbiAgICAgICAgICAgICAgICB4OiBuZXdYLFxuICAgICAgICAgICAgICAgIHk6IG5ld1ksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBlZGdlIG9mIHNsZWVwZXIuZWRnZUxpc3QpIHtcbiAgICAgICAgICAgICAgICBlZGdlLnNldExvY2F0aW9uKCdzdGFydCcsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogZWRnZS5zdGFydExvY2F0aW9uLnggKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBlZGdlLnN0YXJ0TG9jYXRpb24ueSArIHJlbGF0aXZlTW92ZURpc3RhbmNlLnksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZWRnZSBvZiBzbGVlcGVyLmluY29taW5nRWRnZUxpc3QpIHtcbiAgICAgICAgICAgICAgICBlZGdlLnNldExvY2F0aW9uKCdlbmQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGVkZ2UuZW5kTG9jYXRpb24ueCArIHJlbGF0aXZlTW92ZURpc3RhbmNlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGVkZ2UuZW5kTG9jYXRpb24ueSArIHJlbGF0aXZlTW92ZURpc3RhbmNlLnksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBlZGdlIGNhbnZhcyBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7RWRnZX0gZHJhZ0VkZ2UgXG4gICAgICogQHBhcmFtIHsqfSByZWxhdGl2ZU1vdmVEaXN0YW5jZSBcbiAgICAgKi9cbiAgICBtb3VzZU1vdmVIZWFkQ29udHJvbGxlcihkcmFnRWRnZSwgY3VycmVudFBvc2l0aW9uKSB7XG4gICAgICAgIGRyYWdFZGdlLnNldExvY2F0aW9uKCdlbmQnLCBjdXJyZW50UG9zaXRpb24pO1xuXG4gICAgICAgIC8vIERlbGV0ZSB0aGUgZWRnZSBmcm9tIGVuZCBzbGVlcGVyXG4gICAgICAgIGlmICghIWRyYWdFZGdlLmVuZFNsZWVwZXIpIHtcbiAgICAgICAgICAgIGRyYWdFZGdlLmVuZFNsZWVwZXIucmVtb3ZlSW5jb21pbmdFZGdlKGRyYWdFZGdlKTtcbiAgICAgICAgICAgIGRyYWdFZGdlLmNoYW5nZUVuZChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFuIGFsbCB0aGUgZHJhZyBmbGFnIHdoZW4gbW91c2UgdXBcbiAgICAgKiBAcGFyYW0geyp9IGRyYWdTbGVlcGVyTGlzdCBcbiAgICAgKi9cbiAgICBtb3VzZVVwU2xlZXBlckNvbnRyb2xsZXIoZHJhZ1NsZWVwZXJMaXN0KSB7XG4gICAgICAgIGZvcihjb25zdCBzbGVlcGVyIG9mIGRyYWdTbGVlcGVyTGlzdCkge1xuICAgICAgICAgICAgc2xlZXBlci5zd2l0Y2hEcmFnU3RhdHVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSB0ZW1wb3JhcnkgZWRnZSBpbnRvIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXJBbmRBbmNob3IgY2xpY2tlZCBhbmNob3IgYW5kIGl0cyBzbGVlcGVyXG4gICAgICogQHBhcmFtIHtFZGdlfSBlZGdlIGVkZ2Ugb2JqZWN0XG4gICAgICovXG4gICAgbW91c2VVcEFuY2hvckNvbnRyb2xsZXIoc2xlZXBlckFuZEFuY2hvciwgZWRnZSwgY2xvc2VzdE9iamVjdCkge1xuICAgICAgICBjb25zdCBbc2xlZXBlciwgc2xlZXBlckFuY2hvcl0gPSBzbGVlcGVyQW5kQW5jaG9yO1xuICAgICAgICBzbGVlcGVyLmFkZEVkZ2UoZWRnZSk7XG5cbiAgICAgICAgLy8gQWRkIHRoZSBlbmQgc2xlZXBlciBpZiBjbG9lc3RPYmplY3QgZXhpc3RlZFxuICAgICAgICBpZiAoISFjbG9zZXN0T2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlVXBIZWFkQ29udHJvbGxlcihlZGdlLCBjbG9zZXN0T2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpbmsgdG8gdGhlIGNsb2VzdCBhbmNob3IgaWYgbmVlZGVkXG4gICAgICogQHBhcmFtIHsqfSBlZGdlIFxuICAgICAqIEBwYXJhbSB7Kn0gY2xvc2VzdE9iamVjdCBcbiAgICAgKi9cbiAgICBtb3VzZVVwSGVhZENvbnRyb2xsZXIoZWRnZSwgY2xvc2VzdE9iamVjdCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjbG9zZXN0TG9jYXRpb24sXG4gICAgICAgICAgICBjbG9zZXN0U2xlZXBlcixcbiAgICAgICAgfSA9IGNsb3Nlc3RPYmplY3Q7XG5cbiAgICAgICAgLy8gU2V0IGluY29taW5nIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlclxuICAgICAgICBjbG9zZXN0U2xlZXBlci5hZGRJbmNvbWluZ0VkZ2UoZWRnZSk7XG5cbiAgICAgICAgLy8gU2V0IGVkZ2UgbG9jYXRpb25cbiAgICAgICAgZWRnZS5zZXRMb2NhdGlvbignZW5kJywgY2xvc2VzdExvY2F0aW9uKTtcblxuICAgICAgICAvLyBTZXQgZWRnZSBlbmQgc2xlZXBlclxuICAgICAgICBlZGdlLmNoYW5nZUVuZChjbG9zZXN0U2xlZXBlcik7XG5cbiAgICAgICAgLy8gU2V0IGVkZ2Ugc3RhcnQgc2xlZXBlcidzIGNoaWxkXG4gICAgICAgIGVkZ2Uuc3RhcnRTbGVlcGVyLmFkZENoaWxkKGNsb3Nlc3RTbGVlcGVyKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTbGVlcGVyfSBzbGVlcGVyXG4gICAgICogU3RhcnQgdGV4dCBtb2RlIHdoZW4gZG91bGJlIGNsaWNrIG9uIHRoZSBzbGVlcGVyXG4gICAgICovXG4gICAgbW91c2VEb3VibGVDbGlja0NvbnRyb2xsZXIoc2xlZXBlcikge1xuICAgICAgICAvLyBDYWxsIHRoZSBzdGFydGluZyB0ZXh0IG1vZGUgZnVuY3Rpb24gb2YgdGhhdCBzbGVlcGVyXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFNsZWVwZXJFdmVudE5hbWUuYWN0aXZlU29tZVNsZWVwZXJUZXh0TW9kZSxcbiAgICAgICAgICAgIHNsZWVwZXIsXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgTW91c2VBY3Rpb25Db250cm9sbGVyIH07IiwiaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IERlZXBDbG9uZUluZm8gfSBmcm9tICcuL2RlZXBDbG9uZSc7XG5pbXBvcnQgeyBcbiAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLFxuICAgIFBhaW50ZXJFdmVudE5hbWUsXG4gICAgVW5kb1JlZG9FdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBTYXZlZE9wZXJhdGlvbiB9IGZyb20gJy4uLy4uLy4uL3VuZG8tcmVkby9vcGVyYXRpb24nO1xuaW1wb3J0IHsgQWN0aW9uVXRpbHMgfSBmcm9tICcuLi9hY3Rpb24tdXRpbHMnO1xuaW1wb3J0IHsgbW91c2VBY3Rpb25Nb2RlIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFNsZWVwZXIgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlcic7XG5pbXBvcnQgeyBFZGdlIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9lZGdlL2VkZ2UnO1xuXG5jbGFzcyBNb3VzZUFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb25YID0gbnVsbDtcbiAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uWSA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25Ob25lO1xuICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQgPSBudWxsO1xuXG4gICAgICAgIC8vIFNhdmUgdGVtcG9yYXJ5IHZhcmlhYmxlIFxuICAgICAgICB0aGlzLnRlbXBvcmFyeUVkZ2UgPSBudWxsO1xuXG4gICAgICAgIC8vIENvcHkgZm9yIGRlY29yYXRvclxuICAgICAgICB0aGlzLnRlbXBvcmFyeUNvcHkgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuaW5pdEFjdGlvbigpO1xuICAgIH1cbiAgICBzd2l0Y2hUZXh0TW9kZVxuICAgIC8qKlxuICAgICAqIEluaXQgYWxsIHRoZSBtb3VzZSBhY3Rpb24gbGlzdGVuZXJzXG4gICAgICovXG4gICAgaW5pdEFjdGlvbigpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uc01hcCA9IHtcbiAgICAgICAgICAgICdtb3VzZWRvd24nOiB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ21vdXNlbW92ZSc6IEFjdGlvblV0aWxzLnRocm90dGxlck1ha2VyKHRoaXMuaGFuZGxlTW91c2VNb3ZlLmJpbmQodGhpcyksIDEwMDAgLyA2MCksXG4gICAgICAgICAgICAnbW91c2V1cCc6IHRoaXMuaGFuZGxlTk1vdXNlVXAuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdkYmxjbGljayc6IHRoaXMuaGFuZGxlTW91c2VEb3VibGVDbGljay5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2NvbnRleHRtZW51JzogdGhpcy5oYW5kbGVNb3VzZVByZXZlbnRSaWdodENsaWNrLmJpbmQodGhpcyksXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgYWN0aW9uIGluIGFjdGlvbnNNYXApIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoYWN0aW9uLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uc01hcFthY3Rpb25dKGV2ZW50KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNb3VzZVBvc2l0aW9uKHgsIHkpIHtcbiAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uWCA9IHg7XG4gICAgICAgIHRoaXMubW91c2VQb3NpdGlvblkgPSB5O1xuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGV2ZW50Lm9mZnNldFgsXG4gICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFVwZGF0ZSBtb3VzZSBwb3NpdGlvbiB3aGVuIGNsaWNrXG4gICAgICAgIHRoaXMuc2V0TW91c2VQb3NpdGlvbihsb2NhdGlvbi54LCBsb2NhdGlvbi55KTtcblxuICAgICAgICAvLyBGaW5kIGxvY2F0ZWQgb2JqZWN0XG4gICAgICAgIGNvbnN0IGxvY2F0ZWRPYmplY3QgPSBBY3Rpb25VdGlscy5maW5kTG9jYXRlZE9iamVjdCh0aGlzLmNhbnZhcywgbG9jYXRpb24pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2NhdGVkIG9iamVjdCcsIGxvY2F0ZWRPYmplY3QpO1xuXG4gICAgICAgIC8vIElmIHJpZ2h0IGNsaWNrXG4gICAgICAgIGlmIChldmVudC5idXR0b24gPT0gMikge1xuICAgICAgICAgICAgLy8gSWYgcmlnaHQgY2xpY2tcbiAgICAgICAgICAgIGxldCB0eXBlID0gbnVsbDtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAobG9jYXRlZE9iamVjdCkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBsb2NhdGVkT2JqZWN0LnR5cGU7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbG9jYXRlZE9iamVjdC5yZXN1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlUmlnaHRDbGljayxcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50Lm9mZnNldFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIElmIGxlZnQgY2xpY2tcbiAgICAgICAgaWYoISFsb2NhdGVkT2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCB7dHlwZSwgcmVzdWx0fSA9IGxvY2F0ZWRPYmplY3Q7XG4gICAgICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlRG93bkxpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gbW91c2VBY3Rpb25Nb2RlLmRvd25PbkxpbmU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25IZWFkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FuY2hvcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25BbmNob3I7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2xlZXBlcic6XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VEb3duU2xlZXBlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uU2xlZXBlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQSBjZXJ0YWluIGNvcHkgb2YgbW91c2VEb3duRWxlbWVudCBmb3IgaW5mbyBmcm9tIG9yaWdpbmFsIG5vZGVcbiAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5Q29weSA9IERlZXBDbG9uZUluZm8odGhpcy5hY3Rpb25Nb2RlLCB0aGlzLm1vdXNlRG93bkVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRG93biBvbiBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25CYWNrZ3JvdW5kO1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlRG93bkJhY2tncm91bmQsXG4gICAgICAgICAgICBudWxsXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMuYWN0aW9uTW9kZSkge1xuICAgICAgICAgICAgY2FzZShtb3VzZUFjdGlvbk1vZGUuZG93bk9uTm9uZSk6XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlckhvdmVyTW92ZS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UobW91c2VBY3Rpb25Nb2RlLmRvd25PblNsZWVwZXIpOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJEcmFnU2xlZXBlck1vdmUuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25BbmNob3IpOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJEcmFnQW5jaG9yTW92ZS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UobW91c2VBY3Rpb25Nb2RlLmRvd25PbkJhY2tncm91bmQpOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJEcmFnQmFja2dyb3VuZE1vdmUuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25IZWFkKTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVyRHJhZ0hlYWRNb3ZlLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhbmRsZXJIb3Zlck1vdmUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBGaW5kIGxvY2F0ZWQgb2JqZWN0XG4gICAgICAgIGNvbnN0IGxvY2F0ZWRPYmplY3QgPSBBY3Rpb25VdGlscy5maW5kTG9jYXRlZE9iamVjdCh0aGlzLmNhbnZhcywgbG9jYXRpb24pO1xuICAgICAgICBpZighIWxvY2F0ZWRPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gbG9jYXRlZE9iamVjdDtcbiAgICAgICAgICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnYW5jaG9yJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NsZWVwZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW4gbGluZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWQnOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW4gSGVhZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAnYWxsLXNjcm9sbCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICB9XG5cbiAgICBfaGFuZGxlckRyYWdTbGVlcGVyTW92ZShldmVudCkge1xuICAgICAgICBjb25zdCBkcmFnU2xlZXBlckxpc3QgPSBBY3Rpb25VdGlscy5maW5kRHJhZ2dlZFNsZWVwZXIoKTtcblxuICAgICAgICAvLyBObyBub2RlIGlzIGRyYWdnZWRcbiAgICAgICAgaWYgKGRyYWdTbGVlcGVyTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSByZWxhdGl2ZSBtb3ZlIGRpc3RhbmNlXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlTW92ZURpc3RhbmNlID0ge1xuICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCAtIHRoaXMubW91c2VQb3NpdGlvblgsIFxuICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSAtIHRoaXMubW91c2VQb3NpdGlvblksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU2F2ZSBjdXJyZW50IG1vdXNlIHBvc2lzdGlvblxuICAgICAgICB0aGlzLnNldE1vdXNlUG9zaXRpb24oZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgYWN0aW9uIGNvbnRyb2xsZXJcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZU1vdmVTbGVlcGVyLFxuICAgICAgICAgICAgZHJhZ1NsZWVwZXJMaXN0LFxuICAgICAgICAgICAgcmVsYXRpdmVNb3ZlRGlzdGFuY2UsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2hhbmRsZXJEcmFnQW5jaG9yTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMudGVtcG9yYXJ5RWRnZSkge1xuICAgICAgICAgICAgY29uc3QgW3NsZWVwZXIsIHNsZWVwZXJBbmNob3JdID0gdGhpcy5tb3VzZURvd25FbGVtZW50O1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRMb2FjdGlvbiA9IHNsZWVwZXJBbmNob3IubG9jYXRpb247XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgdGVtcG9yYXJ5IGVnZGUgb2JqZWN0XG4gICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUVkZ2UgPSBuZXcgRWRnZSgpO1xuICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlLmNoYW5nZVN0YXJ0KHNsZWVwZXIpO1xuICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlLnNldExvY2F0aW9uKCdzdGFydCcsIHN0YXJ0TG9hY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBlbmQgbG9jYXRpb25cbiAgICAgICAgY29uc3QgZW5kTG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLCBcbiAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFksXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlLnNldExvY2F0aW9uKCdlbmQnLCBlbmRMb2NhdGlvbik7XG4gICAgICAgIFxuICAgICAgICAvLyBTYXZlIGN1cnJlbnQgbW91c2UgcG9zaXN0aW9uXG4gICAgICAgIHRoaXMuc2V0TW91c2VQb3NpdGlvbihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2hhbmRsZXJEcmFnSGVhZE1vdmUoZXZlbnQpIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHJlbGF0aXZlIG1vdmUgZGlzdGFuY2VcbiAgICAgICAgY29uc3QgY3VycmVudFBvc2lzdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGV2ZW50Lm9mZnNldFgsIFxuICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgfTtcblxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlTW92ZUhlYWQsXG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICBjdXJyZW50UG9zaXN0aW9uLFxuICAgICAgICApXG4gICAgfVxuXG4gICAgX2hhbmRsZXJEcmFnQmFja2dyb3VuZE1vdmUoZXZlbnQpIHtcbiAgICAgICAgLy8gVE9ETzogQ3JlYXRlIHNlbGVjdGlvbiBib3hcbiAgICB9XG5cbiAgICBoYW5kbGVOTW91c2VVcChldmVudCkge1xuICAgICAgICBzd2l0Y2godGhpcy5hY3Rpb25Nb2RlKSB7XG4gICAgICAgICAgICBjYXNlIChtb3VzZUFjdGlvbk1vZGUuZG93bk9uU2xlZXBlcik6XG4gICAgICAgICAgICAgICAgY29uc3QgZHJhZ1NsZWVwZXJMaXN0ID0gQWN0aW9uVXRpbHMuZmluZERyYWdnZWRTbGVlcGVyKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdXNlIHVwJywgdGhpcy5tb3VzZURvd25FbGVtZW50LmlzRHJhZyk7XG5cbiAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VVcFNsZWVwZXIsXG4gICAgICAgICAgICAgICAgICAgIGRyYWdTbGVlcGVyTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlDb3B5LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChtb3VzZUFjdGlvbk1vZGUuZG93bk9uQW5jaG9yKTpcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0T2JqZWN0QW5jaG9yID0gQWN0aW9uVXRpbHMuZmluZENsb3Nlc3RBbmNob3Ioe1xuICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlVXBBbmNob3IsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0T2JqZWN0QW5jaG9yLFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUVkZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAobW91c2VBY3Rpb25Nb2RlLmRvd25PbkhlYWQpOlxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RPYmplY3RIZWFkID0gQWN0aW9uVXRpbHMuZmluZENsb3Nlc3RBbmNob3Ioe1xuICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjbG9zZXN0T2JqZWN0SGVhZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZW5kIGRpcmVjdGx5IHRvIFVuZG9SZWRvIHN0YWNrIChOb3RlIG9ubHkgaGVhZCBpcyBzcGVpY2lhbClcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLmFkZE11dGF0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogU2F2ZWRPcGVyYXRpb24ubW92ZUhlYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFbmRMb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLm1vdXNlRG93bkVsZW1lbnQuZW5kTG9jYXRpb24ueCAtIHRoaXMudGVtcG9yYXJ5Q29weS54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLm1vdXNlRG93bkVsZW1lbnQuZW5kTG9jYXRpb24ueSAtIHRoaXMudGVtcG9yYXJ5Q29weS55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlVXBIZWFkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3RPYmplY3RIZWFkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUNvcHksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKG1vdXNlQWN0aW9uTW9kZS5kb3duT25CYWNrZ3JvdW5kKTpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJhY2sgdG8gZGVmYXVsdCBzdGF0dXNcbiAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gbW91c2VBY3Rpb25Nb2RlLmRvd25Pbk5vbmU7XG4gICAgICAgIHRoaXMudGVtcG9yYXJ5Q29weSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGNhbGxiYWNrIGZvciBkb3VibGUgY2xpY2sgb3BlcmF0aW9uXG4gICAgICogQHBhcmFtIHsqfSBldmVudCBcbiAgICAgKi9cbiAgICBoYW5kbGVNb3VzZURvdWJsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIC8vIE9ubHkgQWN0aXZlIHdoZW4gZG91YmxlIGNsaWNrIG9uIHNsZWVwZXJcbiAgICAgICAgaWYgKCF0aGlzLm1vdXNlRG93bkVsZW1lbnQgaW5zdGFuY2VvZiBTbGVlcGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIGlmIHRoZSBsb2NhdGlvbiBpcyBvbiB0aGUgdGhhdCBzbGVlcGVyXG4gICAgICAgIGNvbnN0IGlzSW5UaGlzU2xlZXBlciA9IHRoaXMuY2FudmFzQ29udGV4dC5pc1BvaW50SW5QYXRoKFxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50LmNhbnZhc1BhdGgsXG4gICAgICAgICAgICBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgKVxuICAgICAgICBcbiAgICAgICAgaWYgKCFpc0luVGhpc1NsZWVwZXIgfHwgdGhpcy5tb3VzZURvd25FbGVtZW50LmlzVGV4dE1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBDaGFuZ2UgdGhlIG1vdXNlIGFjdGlvbiBtb2RlXG4gICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25UZXh0O1xuXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VEb3VibGVDbGljayxcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZVByZXZlbnRSaWdodENsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gICBcbn1cblxuZXhwb3J0IHsgTW91c2VBY3Rpb24gfTsiLCJleHBvcnQgY29uc3QgRGVmYXVsdEVkZ2VXZWlnaHQgPSAwLjU7XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0U2xlZXBlckNhbnZhc0luZm9ybWF0aW9uID0ge1xuICAgIGRyYXdUeXBlOiAnY2lyY2xlJyxcbiAgICB4OiA1MDAsXG4gICAgeTogNTAwLFxuICAgIHJhZGl1czogMzAsXG4gICAgc3RhcnRBbmdsZTogMCxcbiAgICBlbmRBbmdsZTogMiAqIE1hdGguUEksXG4gICAgaXNGaWxsZWQ6IHRydWUsXG4gICAgZmlsbENvbG9yOiAncmVkJyxcbiAgICBpc0JvcmRlcjogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdEFjdGl2ZUluZm9ybWF0aW9uID0ge1xuICAgIGlzQm9yZGVyOiB0cnVlLFxuICAgIGJvcmRlcldpdGg6IDMsXG4gICAgYm9yZGVyQ29sb3I6ICdibHVlJyxcbiAgICBpc0FuY2hvcjogdHJ1ZSxcbn07IiwiaW1wb3J0IHsgRWRnZVBvb2xFdmVudE5hbWUgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcblxuY2xhc3MgRWRnZVBvb2wge1xuICAgIC8qKlxuICAgICAqIEdldCBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgU2xlZXBlclBvb2xcbiAgICAgKiBAcmV0dXJucyB7RWRnZVBvb2x9XG4gICAgICovXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBFZGdlUG9vbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghRWRnZVBvb2wuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9vbCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmluaXRFdmVudHNIYW5kbGVyKCk7XG4gICAgICAgICAgICBFZGdlUG9vbC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gRWRnZVBvb2wuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciByZWxhdGVkIHRvIFNsZWVwZXIgUG9vbFxuICAgICAqL1xuICAgIGluaXRFdmVudHNIYW5kbGVyKCkge1xuICAgICAgICAvLyBSZWdpc3RlciBhZGRpbmcgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBFZGdlUG9vbEV2ZW50TmFtZS5hZGRFZGdlLCBcbiAgICAgICAgICAgIHRoaXMuYWRkRWRnZS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgc2xlZXBlciBvYmplY3QgaW50byBlZGdlIHBvb2xcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IHNsZWVwZXIgXG4gICAgICovXG4gICAgYWRkRWRnZShlZGdlKSB7XG4gICAgICAgIHRoaXMucG9vbC5wdXNoKGVkZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbiBlZGdlIGZyb20gZWRnZSBwb29sXG4gICAgICogQHBhcmFtIHsqfSBlZGdlIFxuICAgICAqL1xuICAgIHJlbW92ZUVkZ2UoZWRnZSkge1xuICAgICAgICBjb25zdCBsb2NhdGVkSW5kZXggPSB0aGlzLnBvb2wuZmluZEluZGV4KGVkZ2VJblBvb2wgPT4gZWRnZUluUG9vbCA9PT0gZWRnZSk7XG4gICAgICAgIGlmIChsb2NhdGVkSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2wuc3BsaWNlKGxvY2F0ZWRJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBFZGdlUG9vbGVyID0gRWRnZVBvb2wuZ2V0SW5zdGFuY2UoKTsiLCJpbXBvcnQgeyBEZWZhdWx0RWRnZVdlaWdodCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgXG4gICAgRWRnZVBvb2xFdmVudE5hbWUsIFxuICAgIEVkZ2VFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vc2xlZXBlci9zbGVlcGVyJztcbmltcG9ydCB7IEVkZ2VQb29sZXIgfSBmcm9tICcuL2VkZ2UtcG9vbCc7XG5cbmNsYXNzIEVkZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBEYXRhIGluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbmRTbGVlcGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy53ZWlnaHQgPSBudWxsO1xuXG4gICAgICAgIC8vIENhbnZhcyBwYXRoIGluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMuc3RhcnRMb2NhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZW5kTG9jYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmNhbnZhc1BhdGggPSBudWxsO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gSW5pdCBldmVudFxuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIEV2ZW50XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChFZGdlUG9vbEV2ZW50TmFtZS5hZGRFZGdlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlU29tZUVkZ2UsXG4gICAgICAgIH0gPSBFZGdlRXZlbnROYW1lO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFthY3RpdmVTb21lRWRnZV0gPSB0aGlzLmFjdGl2ZVNvbWVFZGdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgYWN0aXZlIHNvbWUgbm9kZSBoYW5kbGVyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnQgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudE5hbWVzTWFwW2V2ZW50XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHN0YXJ0IHNsZWVwZXIgb2JqZWN0XG4gICAgICogQHJldHVybnMge1NsZWVwZXJ9IFxuICAgICAqL1xuICAgIGdldFN0YXJ0U2xlZXBlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRTbGVlcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZW5kIHNsZWVwZXIgb2JqZWN0XG4gICAgICogQHJldHVybnMge1NsZWVwZXJ9IFxuICAgICAqL1xuICAgIGdldEVuZFNsZWVwZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZFNsZWVwZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB3ZWlnaHQgb24gdGhpcyBlZGdlXG4gICAgICogQHJldHVybnMge2Zsb2F0fVxuICAgICAqL1xuICAgIGdldFdlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2VpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgd2VpZ2h0IHRvIHRoZSBnaXZlbiB2YWx1ZVxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IG5ld1dlaWdodCBcbiAgICAgKi9cbiAgICBjaGFuZ2VXZWlnaHQobmV3V2VpZ2h0KSB7XG4gICAgICAgIHRoaXMud2VpZ2h0ID0gbmV3V2VpZ2h0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIHN0YXJ0IHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IG5ld1NsZWVwZXIgXG4gICAgICovXG4gICAgY2hhbmdlU3RhcnQobmV3U2xlZXBlcikge1xuICAgICAgICB0aGlzLnN0YXJ0U2xlZXBlciA9IG5ld1NsZWVwZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBlbmQgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gbmV3U2xlZXBlciBcbiAgICAgKi9cbiAgICBjaGFuZ2VFbmQobmV3U2xlZXBlcikge1xuICAgICAgICB0aGlzLmVuZFNsZWVwZXIgPSBuZXdTbGVlcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBzdGFydCBhbmQgZW5kIGxvY2F0aW9uXG4gICAgICovXG4gICAgc2V0TG9jYXRpb24odHlwZSwgbG9jYXRpb24pIHtcbiAgICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0TG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjYW52YXMgcGF0aFxuICAgICAqL1xuICAgIHNldENhbnZhc1BhdGgoZWRnZVBhdGgpIHtcbiAgICAgICAgdGhpcy5jYW52YXNQYXRoID0gZWRnZVBhdGg7XG4gICAgfVxuXG4gICAgYWN0aXZlU29tZUVkZ2UoZWRnZSkge1xuICAgICAgICBpZiAoZWRnZSA9PT0gdGhpcyAmJiB0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FjdGl2ZSAmJiBlZGdlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVTZWxmKCkge1xuICAgICAgICBFZGdlUG9vbGVyLnJlbW92ZUVkZ2UodGhpcyk7XG4gICAgICAgIC8vIERlbGV0ZSBpdCBpbiBzdGFydCBzbGVlcGVyXG4gICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyLnJlbW92ZUVkZ2UodGhpcyk7XG5cbiAgICAgICAgLy8gRGVsZXRlIGl0IGluIGVuZCBzbGVlcGVyXG4gICAgICAgIGlmICghIXRoaXMuZW5kU2xlZXBlcikge1xuICAgICAgICAgICAgdGhpcy5lbmRTbGVlcGVyLnJlbW92ZUluY29taW5nRWRnZSh0aGlzKTtcblxuICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSBjaGlsZCBvZiBzdGFydCBzbGVlcGVyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2xlZXBlci5yZW1vdmVDaGlsZCh0aGlzLmVuZFNsZWVwZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjb3ZlclNlbGYoKSB7XG4gICAgICAgIEVkZ2VQb29sZXIuYWRkRWRnZSh0aGlzKTtcbiAgICAgICAgLy8gUmVjb3ZlciBpdCBpbiBzdGFydCBzbGVlcGVyXG4gICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyLmFkZEVkZ2UodGhpcyk7XG5cbiAgICAgICAgLy8gUmVjb3ZlciBpdCBpbiBlbmQgc2xlZXBlclxuICAgICAgICBpZiAoISF0aGlzLmVuZFNsZWVwZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kU2xlZXBlci5hZGRJbmNvbWluZ0VkZ2UodGhpcyk7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgY2hpbGQgb2Ygc3RhcnQgc2xlZXBlclxuICAgICAgICAgICAgdGhpcy5zdGFydFNsZWVwZXIuYWRkQ2hpbGQodGhpcy5lbmRTbGVlcGVyKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBFZGdlIH07IiwiaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFxuICAgIFNsZWVwZXJQb29sRXZlbnROYW1lLFxuICAgIFNsZWVwZXJFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbmNsYXNzIFNsZWVwZXJQb29sIHtcbiAgICAvKipcbiAgICAgKiBHZXQgc2luZ2xldG9uIGluc3RhbmNlIG9mIFNsZWVwZXJQb29sXG4gICAgICogQHJldHVybnMge1NsZWVwZXJQb29sfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU2xlZXBlclBvb2woKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIVNsZWVwZXJQb29sLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2wgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pbml0RXZlbnRzSGFuZGxlcigpO1xuICAgICAgICAgICAgU2xlZXBlclBvb2wuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFNsZWVwZXJQb29sLmluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBTbGVlcGVyIFBvb2xcbiAgICAgKi9cbiAgICBpbml0RXZlbnRzSGFuZGxlcigpIHtcbiAgICAgICAgLy8gUmVnaXN0ZXIgYWRkaW5nIHNsZWVwZXJcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgU2xlZXBlclBvb2xFdmVudE5hbWUuYWRkU2xlZXBlciwgXG4gICAgICAgICAgICB0aGlzLmFkZFNsZWVwZXIuYmluZCh0aGlzKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGFjdGl2ZSBzbGVlcGVyXG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFNsZWVwZXJFdmVudE5hbWUuYWN0aXZlU29tZVNsZWVwZXIsXG4gICAgICAgICAgICB0aGlzLnJlT3JkZXJTbGVlcGVyLmJpbmQodGhpcylcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHNsZWVwZXIgb2JqZWN0IGludG8gc2xlZXBlciBwb29sXG4gICAgICogQHBhcmFtIHtTbGVlcGVyfSBzbGVlcGVyIFxuICAgICAqL1xuICAgIGFkZFNsZWVwZXIoc2xlZXBlcikge1xuICAgICAgICB0aGlzLnBvb2wucHVzaChzbGVlcGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBnaXZlbiBzbGVlcGVyXG4gICAgICogQHBhcmFtIHsqfSBzbGVlcGVyIFxuICAgICAqL1xuICAgIHJlbW92ZVNsZWVwZXIoc2xlZXBlcikge1xuICAgICAgICBjb25zdCBsb2NhdGVkSW5kZXggPSB0aGlzLnBvb2wuZmluZEluZGV4KHNsZWVwZXJJblBvb2wgPT4gc2xlZXBlckluUG9vbCA9PT0gc2xlZXBlcik7XG4gICAgICAgIGlmIChsb2NhdGVkSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2wuc3BsaWNlKGxvY2F0ZWRJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZU9yZGVyU2xlZXBlcihzbGVlcGVyKSB7XG4gICAgICAgIGNvbnN0IHNsZWVwZXJJbmRleCA9IHRoaXMucG9vbC5maW5kSW5kZXgoc2xlZXBlckluUG9vbCA9PiBzbGVlcGVySW5Qb29sICA9PT0gc2xlZXBlcik7XG4gICAgICAgIHRoaXMucG9vbC5zcGxpY2Uoc2xlZXBlckluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5wb29sID0gWy4uLnRoaXMucG9vbCwgc2xlZXBlcl07XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgU2xlZXBlclBvb2xlciA9IFNsZWVwZXJQb29sLmdldEluc3RhbmNlKCk7IiwiaW1wb3J0IHsgXG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbiAgICBTbGVlcGVyRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9ldmVudFwiO1xuXG5jbGFzcyBUZXh0U2xlZXBlclRlbXBTdGFjayB7XG4gICAgY29uc3RydWN0b3Iob3JpZ2luVGV4dCkge1xuICAgICAgICB0aGlzLnBvaW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnN0YWNrTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnN0YWNrTGlzdC5wdXNoKG9yaWdpblRleHQpO1xuICAgIH1cblxuICAgIGdldCB0ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFja0xpc3RbdGhpcy5wb2ludGVyXTtcbiAgICB9XG5cbiAgICBzZXQgdGV4dCh2YWwpIHtcbiAgICAgICAgdGhpcy5wb2ludGVyICs9IDE7XG4gICAgICAgIHRoaXMuc3RhY2tMaXN0LnB1c2godmFsKTtcbiAgICB9XG5cbiAgICB1bmRvKCkge1xuICAgICAgICBpZiAodGhpcy5wb2ludGVyID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyIC09IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWRvKCkge1xuICAgICAgICBpZiAodGhpcy5wb2ludGVyIDwgdGhpcy5zdGFja0xpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyICs9IDE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY2xhc3MgVGV4dFNsZWVwZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzVGV4dE1vZGUgPSBmYWxzZTtcblxuICAgICAgICAvLyBTZXQgZm9yIGRlZmF1bHQgdGV4dCBjb25maWdcbiAgICAgICAgdGhpcy50ZXh0SW5mb3JtYXRpb24gPSB7XG4gICAgICAgICAgICBzaXplOiAxNSxcbiAgICAgICAgICAgIHN0eWxlOiAnVGltZXMgTmV3IFJvbWFuJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdhJyxcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50ZXh0YXJlYUluZm9ybWF0aW9uID0ge1xuICAgICAgICAgICAgd2lkdGg6IG51bGwsXG4gICAgICAgICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy50ZXh0YXJlYUJvdW5kaW5nQm94UGF0aCA9IG51bGw7XG5cbiAgICAgICAgLy8gUmVpZ2lzdGVyIGZvciB0ZXh0IHRlbXAgc3RhY2tcbiAgICAgICAgdGhpcy50ZXh0VGVtcFN0YWNrID0gbnVsbDtcblxuICAgICAgICB0aGlzLnRleHRJbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgdGV4dEluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIC8vIEV4dHJhY3QgZXZlbnQgbmFtZVxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmVTb21lU2xlZXBlclRleHRNb2RlLFxuICAgICAgICB9ID0gU2xlZXBlckV2ZW50TmFtZTtcblxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbYWN0aXZlU29tZVNsZWVwZXJUZXh0TW9kZV0gPSB0aGlzLnN0YXJ0VGV4dE1vZGUuYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBSZWdpc3RlciBhY3RpdmUgc29tZSBub2RlIGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudCBpbiBldmVudE5hbWVzTWFwKSB7XG4gICAgICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50TmFtZXNNYXBbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHN0YXJ0IHRoZSB0ZXh0IG1vZGVcbiAgICAgKi9cbiAgICBzdGFydFRleHRNb2RlKHNsZWVwZXIpIHtcbiAgICAgICAgaWYgKHNsZWVwZXIgPT0gdGhpcyAmJiB0aGlzLmlzVGV4dE1vZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmlzVGV4dE1vZGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50ZXh0VGVtcFN0YWNrID0gbmV3IFRleHRTbGVlcGVyVGVtcFN0YWNrKHRoaXMudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNUZXh0TW9kZSAmJiBzbGVlcGVyICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLmlzVGV4dE1vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudGV4dFRlbXBTdGFjayA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBlbmQgdGhlIHRleHQgbW9kZVxuICAgICAqL1xuICAgIGVuZFRleHRNb2RlKCkge1xuICAgICAgICBpZiAodGhpcy5pc1RleHRNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmlzVGV4dE1vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudGV4dFRlbXBTdGFjayA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSB0ZXh0IFxuICAgICAqL1xuICAgIGRyYXdUZXh0KCkge1xuICAgICAgICAvLyBHZXQgc2xlZXBlciBjZW50ZXJcbiAgICAgICAgY29uc3QgdGV4dFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jYW52YXNJbmZvcm1hdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXNJbmZvcm1hdGlvbi55LFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEdldCBtYXggd2lkdGhcbiAgICAgICAgY29uc3QgdGV4dE1heFdpZHRoID0gdGhpcy5jYW52YXNJbmZvcm1hdGlvbi5yYWRpdXMgKiBNYXRoLnNxcnQoMyk7XG4gICAgICAgIFxuICAgICAgICAvLyBEcmF3IHRoZSB0ZXh0XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUudGV4dFdyaXRlLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0ZXh0UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IHRleHRNYXhXaWR0aCxcbiAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbjogdGhpcy50ZXh0SW5mb3JtYXRpb24sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0T3JUZXh0YXJlYUluZm9ybWF0aW9uLmJpbmQodGhpcyksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgdGV4dGVyYVxuICAgICAqL1xuICAgIGRyYXdUZXh0QXJlYSgpIHtcbiAgICAgICAgLy8gT25seSBkcmF3IGl0IHdoZW4gdGV4dG1vZGUgaXMgb25cbiAgICAgICAgaWYgKCF0aGlzLmlzVGV4dE1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdldCBTbGVlcGVyIGNlbnRlclxuICAgICAgICBjb25zdCBzbGVlcGVyUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNhbnZhc0luZm9ybWF0aW9uLngsXG4gICAgICAgICAgICB5OiB0aGlzLmNhbnZhc0luZm9ybWF0aW9uLnksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgdGV4dFxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLmZpZ3VyZURyYXcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2xlZXBlclBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIHRleHRhcmVhSW5mb3JtYXRpb246IHRoaXMudGV4dGFyZWFJbmZvcm1hdGlvbixcbiAgICAgICAgICAgICAgICBkcmF3VHlwZTogJ3RleHRhcmVhJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLl9zZXRUZXh0YXJlYVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGV4dCAvIHRleHRhcmVhIGluZm9ybWF0aW9uXG4gICAgICogQHBhcmFtIHsqfSBwcm9wZXJ0eU9iamVjdCBcbiAgICAgKiBAcGFyYW0geyp9IHR5cGUgXG4gICAgICovXG4gICAgc2V0VGV4dE9yVGV4dGFyZWFJbmZvcm1hdGlvbihwcm9wZXJ0eU9iamVjdCwgdHlwZSkge1xuICAgICAgICBpZiAodHlwZSAhPT0gJ3RleHQnICYmIHR5cGUgIT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgIEVycm9yKCdXcm9uZyB0eXBlIHdoZW4gc2V0dGluZyB0ZXh0IC8gdGV4dGFyZSBpbmZvcm1hdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9yU2V0T2JqZWN0ID0gKHR5cGUgPT0gJ3RleHQnKSA/IHRoaXMudGV4dEluZm9ybWF0aW9uIDogdGhpcy50ZXh0YXJlYUluZm9ybWF0aW9uO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdGhlIGFsZXJhdGlvbiBhbmQgdXBkYXRlXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gcHJvcGVydHlPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcHJvcGVydHlPYmplY3RbcHJvcGVydHldO1xuXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgJiYgZm9yU2V0T2JqZWN0W3Byb3BlcnR5XSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmb3JTZXRPYmplY3RbcHJvcGVydHldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEcmF3IHRleHQgYXJlYSB3aGVuIFxuICAgICAgICBpZiAodHlwZSA9PSAndGV4dGFyZWEnKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdUZXh0QXJlYSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGJvdW5kaW5nIGJveCBwYXRoXG4gICAgICogQHBhcmFtIHsqfSBib3VuZGluZ0JveFBhdGggXG4gICAgICovXG4gICAgX3NldFRleHRhcmVhUGF0aChib3VuZGluZ0JveFBhdGgpIHtcbiAgICAgICAgdGhpcy50ZXh0YXJlYUJvdW5kaW5nQm94UGF0aCA9IGJvdW5kaW5nQm94UGF0aDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRleHRTbGVlcGVyIH07IiwiaW1wb3J0IHsgRWRnZSB9IGZyb20gJy4uL2VkZ2UvZWRnZSc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgZ2V0QWN0aXZpdHlCeVdlaWdodCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL21hdGgtdXRpbHMnO1xuaW1wb3J0IHsgXG4gICAgRGVmYXVsdFNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbixcbiAgICBEZWZhdWx0QWN0aXZlSW5mb3JtYXRpb24sXG59IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBcbiAgICBTbGVlcGVyRXZlbnROYW1lLFxuICAgIFNsZWVwZXJQb29sRXZlbnROYW1lLFxuICAgIFBhaW50ZXJFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBUZXh0U2xlZXBlciB9IGZyb20gJy4vc2xlZXBlci10ZXh0JzsgXG5pbXBvcnQgeyBTbGVlcGVyUG9vbGVyIH0gZnJvbSAnLi4vc2xlZXBlci9zbGVlcGVyLXBvb2wnO1xuXG5jbGFzcyBTbGVlcGVyIGV4dGVuZHMgVGV4dFNsZWVwZXIge1xuICAgIGNvbnN0cnVjdG9yKHN0YXR1cywgY2FudmFzSW5mb3JtYXRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlzU2xlZXBpbmcgPSBzdGF0dXMgfHwgdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRHJhZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZWRnZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5pbmNvbWluZ0VkZ2VMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRFZGdlTWFwTGlzdCA9IFtdO1xuXG4gICAgICAgIHRoaXMuY2FudmFzSW5mb3JtYXRpb24gPSBjYW52YXNJbmZvcm1hdGlvbiB8fCBEZWZhdWx0U2xlZXBlckNhbnZhc0luZm9ybWF0aW9uO1xuICAgICAgICB0aGlzLmNhbnZhc1BhdGggPSBudWxsO1xuICAgICAgICB0aGlzLmNhbnZhc0FuY2hvcnNQYXRoTGlzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgRXZlbnRcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFNsZWVwZXJQb29sRXZlbnROYW1lLmFkZFNsZWVwZXIsIHRoaXMpO1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLmZpZ3VyZURyYXcsIFxuICAgICAgICAgICAgdGhpcy5jYW52YXNJbmZvcm1hdGlvbiwgXG4gICAgICAgICAgICB0aGlzLnNldENhbnZhc1BhdGguYmluZCh0aGlzKSxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBEcmF3IHRoZSB0ZXh0XG4gICAgICAgIHRoaXMuZHJhd1RleHRBcmVhKCk7XG4gICAgICAgIHRoaXMuZHJhd1RleHQoKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlU29tZVNsZWVwZXIsXG4gICAgICAgIH0gPSBTbGVlcGVyRXZlbnROYW1lO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFthY3RpdmVTb21lU2xlZXBlcl0gPSB0aGlzLmNoYW5nZUFjdGl2ZVN0YXR1cy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGFjdGl2ZSBzb21lIG5vZGUgaGFuZGxlclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnROYW1lc01hcFtldmVudF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgY2hpbGQgbm9kZSBmb3IgY3VycmVudCBzbGVlcGVyXG4gICAgICogQHBhcmFtIHtTbGVlcGVyfSBjaGlsZFNsZWVwZXIgXG4gICAgICovXG4gICAgYWRkQ2hpbGQoY2hpbGRTbGVlcGVyKSB7XG4gICAgICAgIGlmICghY2hpbGRTbGVlcGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIEFkZENoaWxkIEVycm9yOiBObyBjaGlsZHJlbiBpcyBnaXZlbiEnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LnB1c2goY2hpbGRTbGVlcGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBnaXZlbiBjaGlsZCBzbGVlcGVyIFxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gY2hpbGRTbGVlcGVyIFxuICAgICAqL1xuICAgIHJlbW92ZUNoaWxkKGNoaWxkU2xlZXBlcikge1xuICAgICAgICBjb25zdCBleHBlY3RDaGlsZEluZGV4ID0gdGhpcy5jaGlsZHJlbkxpc3QuZmluZEluZGV4KFxuICAgICAgICAgICAgY2hpbGRPYmplY3QgPT4gY2hpbGRPYmplY3QgPT09IGNoaWxkU2xlZXBlclxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRocm93IEVycm9yIHdoZW4gbm90IGZpbmQgdGhlIGNoaWxkXG4gICAgICAgIGlmIChleHBlY3RDaGlsZEluZGV4ID09PSAtMSB8fCBleHBlY3RDaGlsZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1NsZWVwZXIgUmVtb3ZlQ2hpbGQgRXJyb3I6IE5vdCBmaW5kIHRoZSBjaGlsZCEnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjaGlsZFxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5zcGxpY2UoZXhwZWN0Q2hpbGRJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgZWRnZSBmb3IgY3VycmVudCBzbGVlcGVyIFxuICAgICAqIEBwYXJhbSB7RWRnZX0gZWRnZSBFZGdlIG9iamVjdCBcbiAgICAgKi9cbiAgICBhZGRFZGdlKGVkZ2UpIHtcbiAgICAgICAgaWYgKCFlZGdlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIGFkZEVkZ2UgRXJyb3I6IE5vIGVkZ2UgaXMgZ2l2ZW4hJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVkZ2VMaXN0LnB1c2goZWRnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgZWRnZSBmb3IgY3VycmVudCBzbGVlcGVyIFxuICAgICAqIEBwYXJhbSB7RWRnZX0gZWRnZSBFZGdlIG9iamVjdFxuICAgICAqL1xuICAgIHJlbW92ZUVkZ2UoZWRnZSkge1xuICAgICAgICBjb25zdCBleHBlY3RFZGdlSW5kZXggPSB0aGlzLmVkZ2VMaXN0LmZpbmRJbmRleChcbiAgICAgICAgICAgIGVkZ2VPYmplY3QgPT4gZWRnZU9iamVjdCA9PT0gZWRnZVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRocm93IEVycm9yIHdoZW4gbm90IGZpbmQgdGhlIGNoaWxkXG4gICAgICAgIGlmIChleHBlY3RFZGdlSW5kZXggPT09IC0xIHx8IGV4cGVjdEVkZ2VJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIFJlbW92ZUVkZ2UgRXJyb3I6IE5vdCBmaW5kIHRoZSBlZGdlIScpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGNoaWxkXG4gICAgICAgIHRoaXMuZWRnZUxpc3Quc3BsaWNlKGV4cGVjdEVkZ2VJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgaW5jb21pbmcgZWRnZSBmb3IgY3VycmVudCBzbGVlcGVyXG4gICAgICovXG4gICAgYWRkSW5jb21pbmdFZGdlKGVkZ2UpIHtcbiAgICAgICAgaWYgKCFlZGdlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIGFkZEluY29taW5nRWRnZSBFcnJvcjogTm8gZWRnZSBpcyBnaXZlbiEnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5jb21pbmdFZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGluY29taW5nIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlciBcbiAgICAgKiBAcGFyYW0geyp9IGVkZ2UgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcmVtb3ZlSW5jb21pbmdFZGdlKGVkZ2UpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0RWRnZUluZGV4ID0gdGhpcy5pbmNvbWluZ0VkZ2VMaXN0LmZpbmRJbmRleChcbiAgICAgICAgICAgIGVkZ2VPYmplY3QgPT4gZWRnZU9iamVjdCA9PT0gZWRnZVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRocm93IEVycm9yIHdoZW4gbm90IGZpbmQgdGhlIGNoaWxkXG4gICAgICAgIGlmIChleHBlY3RFZGdlSW5kZXggPT09IC0xIHx8IGV4cGVjdEVkZ2VJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIFJlbW92ZUluY29taW5nRWRnZSBFcnJvcjogTm90IGZpbmQgdGhlIGVkZ2UhJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGNoaWxkXG4gICAgICAgIHRoaXMuaW5jb21pbmdFZGdlTGlzdC5zcGxpY2UoZXhwZWN0RWRnZUluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGN1cnJlbnQgbm9kZSBzdGF0dXNcbiAgICAgKi9cbiAgICBjaGFuZ2VTbGVlcGluZ1N0YXR1cygpIHtcbiAgICAgICAgdGhpcy5pc1NsZWVwaW5nID0gIXRoaXMuaXNTbGVlcGluZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnkgdG8gYWN0aXZlIHRoZSBjaGlsZHJlbiBub2Rlc1xuICAgICAqL1xuICAgIGFjdGl2ZUNoaWxkKCkge1xuICAgICAgICAvLyBBY3RpdmUgdGhlIGNoaWxkcmVuIGluIG9yZGVyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goY2hpbGRPYmplY3QgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2VpZ2h0ID0gY2hpbGRPYmplY3QuZWRnZS53ZWlnaHQ7XG4gICAgICAgICAgICAvLyBDaGFuZ2UgdGhlIGNoaWxkIHN0YXR1cyBpZiBhY3RpdmVcbiAgICAgICAgICAgIGlmIChnZXRBY3Rpdml0eUJ5V2VpZ2h0KHdlaWdodCkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZE9iamVjdC5jaGlsZC5jaGFuZ2VTbGVlcGluZ1N0YXR1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNhbnZhcyBwYXRoXG4gICAgICogQHBhcmFtIHsqfSBjYW52YXNQYXRoT2JqZWN0IGNhbnZhcyBwYXRoIG9iamVjdFxuICAgICAqL1xuICAgIHNldENhbnZhc1BhdGgoYXJncykge1xuICAgICAgICBjb25zdCBbY2FudmFzUGF0aE9iamVjdCwgYW5jaG9yc0xpc3RdID0gYXJncztcbiAgICAgICAgdGhpcy5jYW52YXNQYXRoID0gY2FudmFzUGF0aE9iamVjdDtcblxuICAgICAgICBpZiAoISFhbmNob3JzTGlzdCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXNBbmNob3JzUGF0aExpc3QgPSBhbmNob3JzTGlzdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBzbGVlcGVyIGFjdGl2ZSBzdGF0dXNcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXIgdGhlIGV2ZW50IHJlY2lldmVkIHNsZWVwciBvYmplY3QsIG5vdGUgdGhhdCBpdCBtYXkgYmUgb3RoZXIgc2xlZXBlcnNcbiAgICAgKi9cbiAgICBjaGFuZ2VBY3RpdmVTdGF0dXMoc2xlZXBlcikge1xuICAgICAgICBpZiAoc2xlZXBlciA9PT0gdGhpcyAmJiB0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gU2VsZWN0IHRoaXMgc2xlZXBlciBhbmQgYWN0aXZlIGl0c2VsZlxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKERlZmF1bHRBY3RpdmVJbmZvcm1hdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FjdGl2ZSAmJiBzbGVlcGVyICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAvLyBTZWxlY3Qgb3RoZXIgc2xlZXBlciB0aGVuIGluYWN0aXZlIGl0c2VsZlxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc1RleHRNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHtcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNBbmNob3I6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFNldCBkcmFnIGZsYWdcbiAgICAgICAgaWYoc2xlZXBlciA9PT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hEcmFnU3RhdHVzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXNkcmFnJywgdGhpcy5pc0RyYWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHNsZWVwZXIgZHJhZyBzdGF0dXNcbiAgICAgKi9cbiAgICBzd2l0Y2hEcmFnU3RhdHVzKCkge1xuICAgICAgICB0aGlzLmlzRHJhZyA9ICF0aGlzLmlzRHJhZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgU2xlZXBlciBjYW52YXMgaW5mb3JtYXRpb24gYW5kIHRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydHlPYmplY3RcbiAgICAgKi9cbiAgICBjaGFuZ2VDYW52YXNJbmZvcm1hdGlvbihwcm9wZXJ0eU9iamVjdCkge1xuICAgICAgICAvLyBJdGVyYXRlIHRoZSBhbGVyYXRpb24gYW5kIHVwZGF0ZVxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHByb3BlcnR5T2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbnZhc0luZm9ybWF0aW9uW3Byb3BlcnR5XSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0luZm9ybWF0aW9uW3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIG5vbi1yZWxhdGVkIGZhY3RvciB3aXRoaW4gdGhpcyBzbGVlcGVyIGZvciBwYXN0ZVxuICAgICAqL1xuICAgIHByZXBhcmVGb3JQYXN0ZSgpIHtcbiAgICAgICAgLy8gVE9ETzogTWF5IG5lZWQgdG8gY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiBpdFxuXG4gICAgICAgIC8vIFJlbW92ZSBpdHMgZWRnZXMgYW5kIGluLW91dCBzbGVlcGVyXG4gICAgICAgIHRoaXMuZWRnZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5pbmNvbWluZ0VkZ2VMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRFZGdlTWFwTGlzdCA9IFtdO1xuXG4gICAgICAgIC8vIENoYW5nZSBzdGF0dXNcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNEcmFnID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGl0c2VsZiBcbiAgICAgKi9cbiAgICBkZWxldGVTZWxmKCkge1xuICAgICAgICBTbGVlcGVyUG9vbGVyLnJlbW92ZVNsZWVwZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVjb3ZlciBpdHNlbGZcbiAgICAgKi9cbiAgICByZWNvdmVyU2VsZigpIHtcbiAgICAgICAgU2xlZXBlclBvb2xlci5hZGRTbGVlcGVyKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgU2xlZXBlciB9OyIsImltcG9ydCB7IE1vdXNlQWN0aW9uQ29udHJvbGxlciB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9tb3VzZS9tb3VzZS1hY3Rpb24tY29udHJvbGxlcic7XG5pbXBvcnQgeyBNb3VzZUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9tb3VzZS9tb3VzZS1hY3Rpb24nO1xuaW1wb3J0IHsgS2V5Ym9hcmRBY3Rpb24gfSBmcm9tICcuLi9hY3Rpb24tbGF5ZXIva2V5Ym9hcmQva2V5Ym9hcmQtYWN0aW9uJztcbmltcG9ydCB7IEtleWJvYXJkQWN0aW9uQ29udHJvbGxlciB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9rZXlib2FyZC9rZXlib2FyZC1hY3Rpb24tY29udHJvbGxlcic7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9nbG9iYWwvZ2xvYmFsLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSAnLi9wYWludGVyL3BhaW50ZXInO1xuaW1wb3J0IHsgVW5kb1JlZG8gfSBmcm9tICcuLi8uLi91bmRvLXJlZG8vdW5kby1yZWRvJztcblxuY2xhc3MgQ2FudmFzIHtcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IENhbnZhcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghQ2FudmFzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgIENhbnZhcy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBDYW52YXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjYW52YXMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmluaXRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuaW5pdFBhaW50ZXIoKTtcbiAgICAgICAgdGhpcy5pbml0QWN0aW9uUmVsYXRlZCgpO1xuICAgICAgICB0aGlzLmluaXRVbmRvUmVkb1N0YWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjYW52YXMgY29udGV4dFxuICAgICAqL1xuICAgIGluaXRDb250ZXh0KCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEdsb2JhbENvbmZpZy5jYW52YXNJZCk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBHbG9iYWxDb25maWcucGFuZGVsV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIEdsb2JhbENvbmZpZy5oZWFkZXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjYW52YXMgcGFpbnRlclxuICAgICAqL1xuICAgIGluaXRQYWludGVyKCkge1xuICAgICAgICB0aGlzLnBhaW50ZXIgPSBuZXcgUGFpbnRlcih0aGlzLmNhbnZhcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjYW52YXMgYWN0aW9uIHJlbGF0ZWRcbiAgICAgKi9cbiAgICBpbml0QWN0aW9uUmVsYXRlZCgpIHtcbiAgICAgICAgdGhpcy5tb3VzZUFjdGlvbkNvbnRyb2xsZXIgPSBuZXcgTW91c2VBY3Rpb25Db250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMubW91c2VBY3Rpb24gPSBuZXcgTW91c2VBY3Rpb24odGhpcy5jYW52YXMpO1xuICAgICAgICB0aGlzLmtleWJvYXJkQWN0aW9uQ29udHJvbGxlciA9IG5ldyBLZXlib2FyZEFjdGlvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZEFjdGlvbiA9IG5ldyBLZXlib2FyZEFjdGlvbih0aGlzLmNhbnZhcywgdGhpcy5tb3VzZUFjdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBVbmRvUmVkb1N0YWNrXG4gICAgICovXG4gICAgaW5pdFVuZG9SZWRvU3RhY2soKSB7XG4gICAgICAgIFVuZG9SZWRvLmdldEluc3RhbmNlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDYW52YXMgfTsiLCJleHBvcnQgY29uc3QgRGVhZnVsdEFuY2hvclNldHRpbmcgPSB7XG4gICAgbGluZVdpZHRoOiAyLFxuICAgIGxpbmVDb2xvcjogJ2JsYWNrJyxcbiAgICBhbmNob3JSYWRpdXM6IDQsXG59O1xuXG5leHBvcnQgY29uc3QgRGVhZnVsdEFycm93U2V0dGluZyA9IHtcbiAgICBoZWFkTGVuZ3RoOiAxMCxcbiAgICBsaW5lV2lkdGg6IDIsXG4gICAgbGluZUNvbG9yOiAnYmxhY2snLFxufTtcblxuZXhwb3J0IGNvbnN0IEFjdGl2ZUFycm93U2V0dGluZyA9IHtcbiAgICBsaW5lV2lkdGg6IDMsIFxuICAgIGxpbmVDb2xvcjogJ2JsdWUnLFxufTtcblxuZXhwb3J0IGNvbnN0IERlYWZhdWx0Qm91bmRpbmdCb3hTZXR0aW5nID0ge1xuICAgIGxpbmVXaWR0aDogMixcbiAgICBsaW5lQ29sb3I6ICcjMzM2NkZGJyxcbn0gIiwiaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFBhaW50ZXJFdmVudE5hbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgXG4gICAgRGVhZnVsdEFuY2hvclNldHRpbmcsXG4gICAgRGVhZnVsdEFycm93U2V0dGluZyxcbiAgICBEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZyxcbiAgICBBY3RpdmVBcnJvd1NldHRpbmcsXG59IGZyb20gJy4vY29uZmlnJztcblxuY2xhc3MgRmlndXJlUGFpbnRlciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjYW52YXNDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQgPSBjYW52YXNDb250ZXh0O1xuICAgICAgICB0aGlzLmRyYXdNYXAgPSB7XG4gICAgICAgICAgICAnY2lyY2xlJzogdGhpcy5kcmF3Q2lyY2xlLmJpbmQodGhpcyksXG4gICAgICAgICAgICAnYXJyb3cnOiB0aGlzLmRyYXdBcnJvdy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ3RleHRhcmVhJzogdGhpcy5kcmF3VGV4dGFyZWEuYmluZCh0aGlzKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciByZWxhdGVkIHRvIFBhaW50ZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LCB0aGlzLmRyYXcuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgY29ycmVzcG9uZCBpbWFnZXMgZ2l2ZW4gcmVsYXRlZCBpbmZvcm1hdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICAgICAqIEByZXR1cm5zIHsqfSBjYW52YXMgcGF0aFxuICAgICAqL1xuICAgIGRyYXcocGFyYW1zLCBzZXRQYXRoQ2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgeyBkcmF3VHlwZSB9ID0gcGFyYW1zO1xuXG4gICAgICAgIC8vIFJhaXNlIHRoZSBlcnJvciBpZiB0aGUgc2hhcGUgbm90IGluY2x1ZGVkIFxuICAgICAgICBpZiAoIShkcmF3VHlwZSBpbiB0aGlzLmRyYXdNYXApKSB7XG4gICAgICAgICAgICByZXR1cm4gRXJyb3IoJ0ZpZ3VyZSBEcmF3IEVycm9yOiBHaXZlbiB0eXBlIG5vdCBmb3VuZCEnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gRHJhdyB0aGUgY29ycmVzcG9uZCBzaGFwZSBhbmQgc2V0IHRoZSBwYXRoIHRvIHRoZSBzbGVlcGVyXG4gICAgICAgIHNldFBhdGhDYWxsYmFjayh0aGlzLmRyYXdNYXBbZHJhd1R5cGVdKHBhcmFtcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXcgY2lybGUgb24gY2FudmFzXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgZHJhd0NpcmNsZShwYXJhbXMpIHtcbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgZHJhd2luZyBwYXJhbWV0ZXJzXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgcmFkaXVzLFxuICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgaXNGaWxsZWQsXG4gICAgICAgICAgICBpc0JvcmRlcixcbiAgICAgICAgICAgIGJvcmRlcldpdGgsXG4gICAgICAgICAgICBib3JkZXJDb2xvcixcbiAgICAgICAgICAgIGlzQW5jaG9yLFxuICAgICAgICB9ID0gcGFyYW1zO1xuXG4gICAgICAgIC8vIERyYXcgdGhlIGNpcmNsZVxuICAgICAgICBjb25zdCBjaXJjbGUgPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgIGNpcmNsZS5hcmMoXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEZpbGwgdGhlIGNpcmNsZVxuICAgICAgICBjb25zdCBmaWxsQ29sb3IgPSBwYXJhbXNbJ2ZpbGxDb2xvciddO1xuICAgICAgICBpZiAoaXNGaWxsZWQgJiYgZmlsbENvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZpbGwoY2lyY2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERyYXcgdGhlIGJvcmRlclxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhIShcbiAgICAgICAgICAgICAgICBpc0JvcmRlclxuICAgICAgICAgICAgICAgICYmIGJvcmRlcldpdGhcbiAgICAgICAgICAgICAgICAmJiBib3JkZXJDb2xvclxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5saW5lV2lkdGggPSBib3JkZXJXaXRoO1xuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlKGNpcmNsZSk7XG4gICAgICAgIH0gICBcblxuICAgICAgICAvLyBEcmF3IHRoZSBhbmNob3JcbiAgICAgICAgY29uc3QgYW5jaG9yc1BhdGhMaXN0ID0gW107XG4gICAgICAgIGlmIChpc0FuY2hvcikge1xuICAgICAgICAgICAgLy8gU2V0IHN0cm9rZSBzdHlsZVxuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmxpbmVXaWR0aCA9IERlYWZ1bHRBbmNob3JTZXR0aW5nLmxpbmVXaWR0aDtcblxuICAgICAgICAgICAgY29uc3QgYW5jaG9yUG9zaXRpb25MaXN0ID0gW1xuICAgICAgICAgICAgICAgIHt4OiB4ICsgcmFkaXVzLCB5OiB5fSxcbiAgICAgICAgICAgICAgICB7eDogeCAtIHJhZGl1cywgeTogeX0sXG4gICAgICAgICAgICAgICAge3g6IHgsIHk6IHkgKyByYWRpdXN9LFxuICAgICAgICAgICAgICAgIHt4OiB4LCB5OiB5IC0gcmFkaXVzfSxcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgYW5jaG9yUG9zaXRpb24gb2YgYW5jaG9yUG9zaXRpb25MaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gRGVhZnVsdEFuY2hvclNldHRpbmcubGluZUNvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnN0IHt4ICx5fSA9IGFuY2hvclBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuY2hvclBhdGggPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgICAgICAgICAgYW5jaG9yUGF0aC5hcmMoXG4gICAgICAgICAgICAgICAgICAgIHgsIFxuICAgICAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgICAgICBEZWFmdWx0QW5jaG9yU2V0dGluZy5hbmNob3JSYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZShhbmNob3JQYXRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbChhbmNob3JQYXRoKTtcbiAgICAgICAgICAgICAgICBhbmNob3JzUGF0aExpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvclBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2NpcmNsZSwgYW5jaG9yc1BhdGhMaXN0XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3IGFycm93IG9uIGNhbnZhc1xuICAgICAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICAgICAqL1xuICAgIGRyYXdBcnJvdyhwYXJhbXMpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHN0YXJ0TG9jYXRpb24sXG4gICAgICAgICAgICBlbmRMb2NhdGlvbixcbiAgICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICB9ID0gcGFyYW1zO1xuXG4gICAgICAgIC8vIElmIG9ubHkgb25lIGxvY2F0aW9uIHByb3ZpZGVkLCB0aGVuIHNldCB0aGUgb3RoZXIgdGhlIHNhbWVcbiAgICAgICAgaWYoIXN0YXJ0TG9jYXRpb24pIHtcbiAgICAgICAgICAgIHN0YXJ0TG9jYXRpb24gPSBlbmRMb2NhdGlvbjtcbiAgICAgICAgfSBlbHNlIGlmICghZW5kTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGVuZExvY2F0aW9uID0gc3RhcnRMb2NhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnkgLSBzdGFydExvY2F0aW9uLnksIFxuICAgICAgICAgICAgZW5kTG9jYXRpb24ueCAtIHN0YXJ0TG9jYXRpb24ueFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFNldCBzdHJva2Ugc3R5bGVcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gaXNBY3RpdmUgPyBcbiAgICAgICAgICAgIEFjdGl2ZUFycm93U2V0dGluZy5saW5lQ29sb3IgOlxuICAgICAgICAgICAgRGVhZnVsdEFycm93U2V0dGluZy5saW5lQ29sb3I7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5saW5lV2lkdGggPSBpc0FjdGl2ZSA/IFxuICAgICAgICAgICAgQWN0aXZlQXJyb3dTZXR0aW5nLmxpbmVXaWR0aCA6XG4gICAgICAgICAgICBEZWFmdWx0QXJyb3dTZXR0aW5nLmxpbmVXaWR0aDtcblxuICAgICAgICBjb25zdCBsaW5lID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICBjb25zdCBoZWFkID0gbmV3IFBhdGgyRCgpO1xuXG4gICAgICAgIC8vIERyYXcgdGhlIGxpbmUgXG4gICAgICAgIGxpbmUubW92ZVRvKHN0YXJ0TG9jYXRpb24ueCwgc3RhcnRMb2NhdGlvbi55KTtcbiAgICAgICAgbGluZS5saW5lVG8oZW5kTG9jYXRpb24ueCwgZW5kTG9jYXRpb24ueSk7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2UobGluZSk7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgaGVhZFxuICAgICAgICBoZWFkLm1vdmVUbyhcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnggLSBEZWFmdWx0QXJyb3dTZXR0aW5nLmhlYWRMZW5ndGggKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSxcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnkgLSBEZWFmdWx0QXJyb3dTZXR0aW5nLmhlYWRMZW5ndGggKiBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyA2KVxuICAgICAgICApO1xuICAgICAgICBoZWFkLmxpbmVUbyhlbmRMb2NhdGlvbi54LCBlbmRMb2NhdGlvbi55KTtcbiAgICAgICAgaGVhZC5saW5lVG8oXG4gICAgICAgICAgICBlbmRMb2NhdGlvbi54IC0gRGVhZnVsdEFycm93U2V0dGluZy5oZWFkTGVuZ3RoICogTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJIC8gNiksXG4gICAgICAgICAgICBlbmRMb2NhdGlvbi55IC0gRGVhZnVsdEFycm93U2V0dGluZy5oZWFkTGVuZ3RoICogTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJIC8gNilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZShoZWFkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7bGluZSwgaGVhZH07XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIHRleHRhcmVhXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gICAgICovXG4gICAgZHJhd1RleHRhcmVhKHBhcmFtcykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBzbGVlcGVyUG9zaXRpb24sXG4gICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uLFxuICAgICAgICB9ID0gcGFyYW1zO1xuXG4gICAgICAgIGNvbnN0IGJvdW5kaW5nQm94UGF0aCA9IG5ldyBQYXRoMkQoKTtcblxuICAgICAgICBib3VuZGluZ0JveFBhdGgucmVjdChcbiAgICAgICAgICAgIHNsZWVwZXJQb3NpdGlvbi54IC0gdGV4dGFyZWFJbmZvcm1hdGlvbi53aWR0aCAvIDIsXG4gICAgICAgICAgICBzbGVlcGVyUG9zaXRpb24ueSAtIHRleHRhcmVhSW5mb3JtYXRpb24uaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHRleHRhcmVhSW5mb3JtYXRpb24ud2lkdGgsXG4gICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uLmhlaWdodCxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQubGluZVdpZHRoID0gRGVhZmF1bHRCb3VuZGluZ0JveFNldHRpbmcubGluZVdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZy5saW5lQ29sb3I7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2UoYm91bmRpbmdCb3hQYXRoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBib3VuZGluZ0JveFBhdGg7XG4gICAgfVxufVxuXG5leHBvcnQgeyBGaWd1cmVQYWludGVyIH07IiwiaW1wb3J0IHsgRmlndXJlUGFpbnRlciB9IGZyb20gJy4vZmlndXJlL3BhaW50ZXInO1xuaW1wb3J0IHsgVGV4dFBhaW50ZXIgfSBmcm9tICcuL3RleHQvcGFpbnRlcic7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXBvb2wnO1xuaW1wb3J0IHsgRWRnZVBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLXBvb2wnO1xuaW1wb3J0IHsgUGFpbnRlckV2ZW50TmFtZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbmNsYXNzIFBhaW50ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAvLyBJbml0IGRpZmZlcmVudCBwYWludGVyXG4gICAgICAgIHRoaXMuaW5pdFBhaW50ZXIoKTtcblxuICAgICAgICAvLyBJbml0IGV2ZW50ZXIgaGFuZGxlclxuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBldmVudCBoYW5kbGVyIHJlbGF0ZWQgdG8gUGFpbnRlclxuICAgICAqL1xuICAgIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsIHRoaXMucmVwYWludC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBpbml0UGFpbnRlcigpIHtcbiAgICAgICAgdGhpcy5maWd1cmUgPSBuZXcgRmlndXJlUGFpbnRlcih0aGlzLmNhbnZhcywgdGhpcy5jYW52YXNDb250ZXh0KTtcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IFRleHRQYWludGVyKHRoaXMuY2FudmFzLCB0aGlzLmNhbnZhc0NvbnRleHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGFpbnQgYWxsIGNhbnZhcyBvYmplY3RcbiAgICAgKi9cbiAgICByZXBhaW50KCkge1xuICAgICAgICAvLyBDbGVhbiB0aGUgY2FudmFzXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0byBkcmF3IHRoZSBzbGVlcGVyXG4gICAgICAgIGZvciAoY29uc3Qgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IE1ha2UgaXQgYXMgYSBmdW5jdGlvbiBvZiBzbGVlcGVyXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LFxuICAgICAgICAgICAgICAgIHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24sXG4gICAgICAgICAgICAgICAgc2xlZXBlci5zZXRDYW52YXNQYXRoLmJpbmQoc2xlZXBlcilcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIFJld3JpdGUgdGhlIHRleHRcbiAgICAgICAgICAgIHNsZWVwZXIuZHJhd1RleHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEl0ZXJhdGUgdG8gZHJhdyB0aGUgZWRnZVxuICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgRWRnZVBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZHJhd1R5cGU6ICdhcnJvdycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0TG9jYXRpb246IGVkZ2Uuc3RhcnRMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZW5kTG9jYXRpb246IGVkZ2UuZW5kTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBlZGdlLmlzQWN0aXZlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRnZS5zZXRDYW52YXNQYXRoLmJpbmQoZWRnZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IFBhaW50ZXIgfTsiLCJpbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgUGFpbnRlckV2ZW50TmFtZSB9IGZyb20gJy4uLy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbmNsYXNzIFRleHRQYWludGVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNhbnZhc0NvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dCA9IGNhbnZhc0NvbnRleHQ7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBQYWludGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFBhaW50ZXJFdmVudE5hbWUudGV4dFdyaXRlLCB0aGlzLndyaXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlIHRoZSB0ZXh0IGZvbGxvdyB0aGUgcGFyYW1zIGdpdmVuXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gICAgICogQHBhcmFtIHsqfSBzZXRQYXRoQ2FsbGJhY2sgXG4gICAgICovXG4gICAgd3JpdGUocGFyYW1zLCBzZXRUZXh0YXJlYUNhbGxiYWNrKSB7XG4gICAgICAgIC8vIFBhcnNlIGNvbmZpZ3VyYXRpb25zXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgbWF4V2lkdGgsXG4gICAgICAgICAgICBpbmZvcm1hdGlvbixcbiAgICAgICAgfSA9IHBhcmFtcztcblxuICAgICAgICAvLyBHZXQgc2l6ZVxuICAgICAgICBsZXQgc2l6ZSA9IGluZm9ybWF0aW9uLnNpemUgfHwgJzEyJztcbiAgICAgICAgc2l6ZSArPSAncHgnXG5cbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZvbnQgPSBgJHtzaXplfSAke2luZm9ybWF0aW9uLnN0eWxlfWA7XG4gICAgICAgIFxuICAgICAgICAvLyBQcmVwYXJlIHdyaXRpbmcgdGV4dCBwYXJhbXNcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZpbGxTdHlsZSA9IGluZm9ybWF0aW9uLmNvbG9yO1xuICAgICAgICBjb25zdCBmaWxsSW5mbyA9IHRoaXMuX2dldEZpbGxMaXN0KHBvc2l0aW9uLCBpbmZvcm1hdGlvbi5jb250ZW50LCBtYXhXaWR0aCk7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbGxMaXN0LFxuICAgICAgICAgICAgdGV4dGFyZWFJbmZvcm1hdGlvbixcbiAgICAgICAgfSA9IGZpbGxJbmZvO1xuXG4gICAgICAgIC8vIFNldCBjYWxsYmFjayB0byBkcmF3IHRoZSB0ZXh0YXJlYSBmaXJzdFxuICAgICAgICBzZXRUZXh0YXJlYUNhbGxiYWNrKHRleHRhcmVhSW5mb3JtYXRpb24sICd0ZXh0YXJlYScpO1xuICAgICAgICBcbiAgICAgICAgLy8gV3JpdGUgdGV4dFxuICAgICAgICBmb3IgKGxldCB0ZXh0IG9mIGZpbGxMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFRleHQodGV4dFswXSwgdGV4dFsxXSwgdGV4dFsyXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZmlsbCBsaXN0IGZvciBzaW5nbGUgLyBtdWx0aXBsZSBsaW5lc1xuICAgICAqIEBwYXJhbSB7Kn0gcG9zaXRpb24gc2xlZXBlciBjZW50ZXJcbiAgICAgKiBAcGFyYW0geyp9IGNvbnRlbnQgdGV4dCBjb250ZW50XG4gICAgICogQHBhcmFtIHsqfSBtYXhXaWR0aCBwcmVkZWZpbmVkIG1heGltYWwgd2lkdGhcbiAgICAgKiBAcmV0dXJucyBmaWxsaW5nIGxpc3QgYW5kIHRleHRhcmVhIGluZm9ybWF0aW9uXG4gICAgICovXG4gICAgX2dldEZpbGxMaXN0KHBvc2l0aW9uLCBjb250ZW50LCBtYXhXaWR0aCkgeyAgICAgXG4gICAgICAgIGxldCBtZXRyaWNzID0gdGhpcy5jYW52YXNDb250ZXh0Lm1lYXN1cmVUZXh0KGNvbnRlbnQpO1xuICAgICAgICBsZXQgZmlsbExpc3QgPSBbXVxuXG4gICAgICAgIGlmIChtZXRyaWNzLndpZHRoIDwgbWF4V2lkdGgpIHtcbiAgICAgICAgICAgIC8vIEdldCB0ZXh0IGxvY2F0aW9uIGluZm9ybWF0aW9uXG4gICAgICAgICAgICBsZXQgeCA9IHBvc2l0aW9uLnggLSBtZXRyaWNzLndpZHRoIC8gMjtcbiAgICAgICAgICAgIGxldCB5ID0gcG9zaXRpb24ueSArIChtZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94QXNjZW50ICsgbWV0cmljcy5hY3R1YWxCb3VuZGluZ0JveERlc2NlbnQpIC8gMjtcblxuICAgICAgICAgICAgLy8gR2V0IHRleHRhcmVhIGxvY2F0aW9uIGluZm9ybWF0aW9uXG4gICAgICAgICAgICBsZXQgdGV4dGFyZWFJbmZvcm1hdGlvbiA9ICB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG1heFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogKG1ldHJpY3MuZm9udEJvdW5kaW5nQm94QXNjZW50ICsgbWV0cmljcy5mb250Qm91bmRpbmdCb3hEZXNjZW50KSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZpbGxMaXN0LnB1c2goW2NvbnRlbnQsIHgsIHldKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmlsbExpc3QsXG4gICAgICAgICAgICAgICAgdGV4dGFyZWFJbmZvcm1hdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBGb3IgbXVsdGlwbGUgbGluZXNcbiAgICAgICAgcmV0dXJuIGZpbGxMaXN0O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVGV4dFBhaW50ZXIgfTsiLCJleHBvcnQgY29uc3QgU2xlZXBlckV2ZW50TmFtZSA9IHtcbiAgICBhY3RpdmVTb21lU2xlZXBlcjogJ2FjdGl2ZVNvbWVTbGVlcGVyJyxcbiAgICBhY3RpdmVTb21lU2xlZXBlclRleHRNb2RlOiAnYWN0aXZlU29tZVNsZWVwZXJUZXh0TW9kZScsXG59O1xuXG5leHBvcnQgY29uc3QgRWRnZUV2ZW50TmFtZSA9IHtcbiAgICBhY3RpdmVTb21lRWRnZTogJ2FjdGl2ZVNvbWVFZGdlJyxcbn1cblxuZXhwb3J0IGNvbnN0IFNsZWVwZXJQb29sRXZlbnROYW1lID0ge1xuICAgIGFkZFNsZWVwZXI6ICdhZGRTbGVlcGVyJyxcbn07XG5cbmV4cG9ydCBjb25zdCBFZGdlUG9vbEV2ZW50TmFtZSA9IHtcbiAgICBhZGRFZGdlOiAnYWRkRWRnZScsXG59O1xuXG5leHBvcnQgY29uc3QgUGFpbnRlckV2ZW50TmFtZSA9IHtcbiAgICBmaWd1cmVEcmF3OiAnZmlndXJlRHJhdycsXG4gICAgdGV4dFdyaXRlOiAndGV4dFdyaXRlJyxcbiAgICByZXBhaW50OiAncmVwYWludCcsXG59O1xuXG5leHBvcnQgY29uc3QgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZSA9IHtcbiAgICBtb3VzZURvd25TbGVlcGVyOiAnbW91c2VEb3duU2xlZXBlcicsXG4gICAgbW91c2VEb3duTGluZTogJ21vdXNlRG93bkxpbmUnLFxuICAgIG1vdXNlRG93bkJhY2tncm91bmQ6ICdtb3VzZURvd25CYWNrZ3JvdW5kJyxcbiAgICBtb3VzZU1vdmVTbGVlcGVyOiAnbW91c2VNb3ZlJyxcbiAgICBtb3VzZU1vdmVBbmNob3I6ICdtb3VzZU1vdmVBbmNob3InLFxuICAgIG1vdXNlTW92ZUhlYWQ6ICdtb3VzZU1vdmVIZWFkJyxcbiAgICBtb3VzZVVwU2xlZXBlcjogJ21vdXNlVXBTbGVlcGVyJyxcbiAgICBtb3VzZVVwQW5jaG9yOiAnbW91c2VVcEFuY2hvcicsXG4gICAgbW91c2VVcEhlYWQ6ICdtb3VzZVVwSGVhZCcsXG4gICAgbW91c2VEb3VibGVDbGljazogJ21vdXNlRG91YmxlQ2xpY2snLFxuICAgIG1vdXNlUmlnaHRDbGljazogJ21vdXNlUmlnaHRDbGljaycsXG4gICAga2V5Ym9hcmREZWxldGU6ICdrZXlib2FyZERlbGV0ZScsXG4gICAga2V5Ym9hcmRDb3B5OiAna2V5Ym9hcmRDb3B5JyxcbiAgICBrZXlib2FyZFBhc3RlOiAna2V5Ym9hcmRQYXN0ZScsXG4gICAga2V5Ym9hcmRUZXh0RGVsZXRlOiAna2V5Ym9hcmRUZXh0RGVsZXRlJyxcbiAgICBrZXlib2FyZElucHV0OiAna2V5Ym9hcmRJbnB1dCcsXG4gICAga2V5Ym9hcmRUZXh0UmVkbzogJ2tleWJvYXJkVGV4dFJlZG8nLFxuICAgIGtleWJvYXJkVGV4dFVuZG86ICdrZXlib2FyZFRleHRVbmRvJyxcbn07XG5cbmV4cG9ydCBjb25zdCBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lID0ge1xuXG59XG5cbmV4cG9ydCBjb25zdCBVbmRvUmVkb0V2ZW50TmFtZSA9IHtcbiAgICBhZGRNdXRhdGlvbjogJ2FkZE11dGF0aW9uJyxcbiAgICB1bmRvOiAndW5kbycsXG4gICAgcmVkbzogJ3JlZG8nLFxufTsiLCJleHBvcnQgY29uc3QgR2xvYmFsQ29uZmlnID0ge1xuICAgIGNhbnZhc0lkOiAnbXlDYW52YXMnLFxuICAgIGhlYWRlckhlaWdodDogNjYsXG4gICAgcGFuZGVsV2lkdGg6IDMwMCxcbn07IiwiZXhwb3J0IGNvbnN0IFNhdmVkT3BlcmF0aW9uID0ge1xuICAgIG1vdmVTbGVlcGVyOiAnbW92ZVNsZWVwZXInLFxuICAgIGFkZEVkZ2VGcm9tQW5jaG9yOiAnYWRkRWRnZUZyb21BbmNob3InLFxuICAgIG1vdmVIZWFkOiAnbW92ZUhlYWQnLFxuICAgIGRlbGV0ZTogJ2RlbGV0ZScsXG4gICAgcGFzdGU6ICdwYXN0ZScsXG59OyIsImltcG9ydCB7IFNhdmVkT3BlcmF0aW9uIH0gZnJvbSAnLi9vcGVyYXRpb24nO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFBhaW50ZXJFdmVudE5hbWUgfSBmcm9tICcuLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4uL2NvcmUvZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXInO1xuXG4vKipcbiAqIFJlZG8gY29udHJvbGxlciB0byBhY3R1YWxseSBkZWFsIHdpdGggdGhlIHJlZG9pbmcgdGhlIHRhc2tzXG4gKiBAcGFyYW0geyp9IHRhc2sgXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZG9Db250cm9sbGVyKHRhc2spIHtcbiAgICBjb25zdCB7XG4gICAgICAgIG9iamVjdCxcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgfSA9IHRhc2s7XG5cbiAgICBzd2l0Y2gob3BlcmF0aW9uKSB7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLm1vdmVTbGVlcGVyKTpcbiAgICAgICAgICAgIHJlZG9Nb3ZlU2xlZXBlcihvYmplY3QsIHBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24uYWRkRWRnZUZyb21BbmNob3IpOlxuICAgICAgICAgICAgcmVkb01vdmVBbmNob3Iob2JqZWN0LCBwYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLm1vdmVIZWFkKTpcbiAgICAgICAgICAgIHJlZG9Nb3ZlSGVhZChvYmplY3QsIHBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24uZGVsZXRlKTpcbiAgICAgICAgICAgIHJlZG9EZWxldGVJdGVtcyhvYmplY3QpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLnBhc3RlKTpcbiAgICAgICAgICAgIHJlZG9QYXN0ZShvYmplY3QpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICk7XG59XG5cblxuLyoqXG4gKiBSZWRvIG1vdmUgc2xlZXBlciBvcGVyYXRpb25cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFJlY2lldmVkIGN1cnJlbnQgc2xlZXBlciBub2RlXG4gKiBAcGFyYW0geyp9IHBhcmFtcyBvcGVyYXRpb24gcGFyYW1ldGVyc1xuICovXG5mdW5jdGlvbiByZWRvTW92ZVNsZWVwZXIob2JqZWN0LCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IG9iamVjdC5jYW52YXNJbmZvcm1hdGlvblxuICAgIGNvbnN0IHsgY2hhbmdlTG9jYXRpb24gfSA9IHBhcmFtcztcbiAgICBjb25zdCByZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgIHg6IHggKyBjaGFuZ2VMb2NhdGlvbi54LFxuICAgICAgICB5OiB5ICsgY2hhbmdlTG9jYXRpb24ueSxcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2Ugc2xlZXBlciBjYW52YXMgbG9jYXRpb25cbiAgICBvYmplY3QuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24ocmVjb3ZlckxvY2F0aW9uKTtcblxuICAgIC8vIENoYW5nZSB0aGUgY29ubmVjdGVkIG91dGNvbWluZyBlZGdlcycgbG9jYXRpb25cbiAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygb2JqZWN0LmVkZ2VMaXN0KSB7XG4gICAgICAgIGNvbnN0IGVkZ2VSZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBlZGdlLnN0YXJ0TG9jYXRpb24ueCArIGNoYW5nZUxvY2F0aW9uLngsXG4gICAgICAgICAgICB5OiBlZGdlLnN0YXJ0TG9jYXRpb24ueSArIGNoYW5nZUxvY2F0aW9uLnksXG4gICAgICAgIH07XG5cbiAgICAgICAgZWRnZS5zZXRMb2NhdGlvbihcbiAgICAgICAgICAgICdzdGFydCcsXG4gICAgICAgICAgICBlZGdlUmVjb3ZlckxvY2F0aW9uLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgaW5jb21pbmcgZWRnZXMnIGxvY2F0aW9uXG4gICAgZm9yIChjb25zdCBlZGdlIG9mIG9iamVjdC5pbmNvbWluZ0VkZ2VMaXN0KSB7XG4gICAgICAgIGNvbnN0IGVkZ2VSZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBlZGdlLmVuZExvY2F0aW9uLnggKyBjaGFuZ2VMb2NhdGlvbi54LFxuICAgICAgICAgICAgeTogZWRnZS5lbmRMb2NhdGlvbi55ICsgY2hhbmdlTG9jYXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICBlZGdlLnNldExvY2F0aW9uKFxuICAgICAgICAgICAgJ2VuZCcsXG4gICAgICAgICAgICBlZGdlUmVjb3ZlckxvY2F0aW9uLFxuICAgICAgICApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZWRvIG1vdmUgYW5jaG9yIG9wZXJhdGlvblxuICogQHBhcmFtIHsqfSBvYmplY3QgUmVjaWV2ZWQgZWRnZSBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIHRoZSBzbGVlcGVyIG5vZGUgd2hlcmUgdGhlIGVkZ2Ugc3RhcnRcbiAqL1xuZnVuY3Rpb24gcmVkb01vdmVBbmNob3Iob2JqZWN0LCBwYXJhbXMpIHtcbiAgICAvLyBSZW1vdmUgdGhlIGVkZ2UgY3JlYXRlZFxuICAgIG9iamVjdC5yZWNvdmVyU2VsZigpO1xufVxuXG4vKipcbiAqIFVuZG8gbW92ZSBoZWFkIG9wZXJhdGlvblxuICogQHBhcmFtIHsqfSBvYmplY3QgXG4gKiBAcGFyYW0geyp9IHBhcmFtcyBcbiAqL1xuZnVuY3Rpb24gcmVkb01vdmVIZWFkKG9iamVjdCwgcGFyYW1zKSB7XG4gICAgY29uc3QgeyBjaGFuZ2VFbmRMb2NhdGlvbiB9ID0gcGFyYW1zO1xuXG4gICAgLy8gUmVjb3ZlciBlZ2RlIGVuZCBsb2NhdGlvblxuICAgIGNvbnN0IHJlY292ZXJMb2NhdGlvbiA9IHtcbiAgICAgICAgeDogb2JqZWN0LmVuZExvY2F0aW9uLnggKyBjaGFuZ2VFbmRMb2NhdGlvbi54LFxuICAgICAgICB5OiBvYmplY3QuZW5kTG9jYXRpb24ueSArIGNoYW5nZUVuZExvY2F0aW9uLnksXG4gICAgfTtcblxuICAgIG9iamVjdC5zZXRMb2NhdGlvbihcbiAgICAgICAgJ2VuZCcsXG4gICAgICAgIHJlY292ZXJMb2NhdGlvbixcbiAgICApO1xuXG4gICAgLy8gUmVjb3ZlciBhZGRlZCBlbmQgc2xlZXBlciBpZiBuZWVkZWRcbiAgICBpZiAoISFwYXJhbXNbJ2FkZGVkRW5kU2xlZXBlciddKSB7XG4gICAgICAgIHBhcmFtc1snYWRkZWRFbmRTbGVlcGVyJ10uYWRkSW5jb21pbmdFZGdlKG9iamVjdCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlZG8gZGVsZXRlIHRoZSBjbGlja2VkIG9iamVjdFxuICogQHBhcmFtIHsqfSBvYmplY3QgRGVsZXRlZCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gcmVkb0RlbGV0ZUl0ZW1zKG9iamVjdCkge1xuICAgIG9iamVjdC5kZWxldGVTZWxmKCk7XG59XG5cbi8qKlxuICogUmVkbyBwYXN0ZSB0aGUgaXRlbVxuICovXG5mdW5jdGlvbiByZWRvUGFzdGUob2JqZWN0KSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBvYmplY3QpIHtcbiAgICAgICAgLy8gVE9ETzogT25seSBzdXBwb3J0IHNsZWVwZXIgbm93XG4gICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgU2xlZXBlcikge1xuICAgICAgICAgICAgaXRlbS5yZWNvdmVyU2VsZigpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBTYXZlZE9wZXJhdGlvbiB9IGZyb20gJy4vb3BlcmF0aW9uJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBQYWludGVyRXZlbnROYW1lIH0gZnJvbSAnLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IFNsZWVwZXIgfSBmcm9tICcuLi9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyJztcblxuLyoqXG4gKiBVbmRvIGNvbnRyb2xsZXIgdG8gYWN0dWFsbHkgZGVhbCB3aXRoIHRoZSB1bmRvaW5nIHRoZSB0YXNrc1xuICogQHBhcmFtIHsqfSB0YXNrIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5kb0NvbnRyb2xsZXIodGFzaykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgb2JqZWN0LCBcbiAgICAgICAgcGFyYW1zLCBcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgIH0gPSB0YXNrO1xuXG4gICAgc3dpdGNoKG9wZXJhdGlvbikge1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5tb3ZlU2xlZXBlcik6XG4gICAgICAgICAgICB1bmRvTW92ZVNsZWVwZXIob2JqZWN0LCBwYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLmFkZEVkZ2VGcm9tQW5jaG9yKTpcbiAgICAgICAgICAgIHVuZG9Nb3ZlQW5jaG9yKG9iamVjdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5tb3ZlSGVhZCk6XG4gICAgICAgICAgICB1bmRvTW92ZUhlYWQob2JqZWN0LCBwYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLmRlbGV0ZSk6XG4gICAgICAgICAgICB1bmRvRGVsZXRlSXRlbXMob2JqZWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5wYXN0ZSk6XG4gICAgICAgICAgICB1bmRvUGFzdGUob2JqZWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICApO1xufVxuXG4vKipcbiAqIFVuZG8gbW92ZSBzbGVlcGVyIG9wZXJhdGlvblxuICogQHBhcmFtIHsqfSBvYmplY3QgUmVjaWV2ZWQgY3VycmVudCBzbGVlcGVyIG5vZGVcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIG9wZXJhdGlvbiBwYXJhbWV0ZXJzXG4gKi9cbmZ1bmN0aW9uIHVuZG9Nb3ZlU2xlZXBlcihvYmplY3QsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gb2JqZWN0LmNhbnZhc0luZm9ybWF0aW9uXG4gICAgY29uc3QgeyBjaGFuZ2VMb2NhdGlvbiB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IHJlY292ZXJMb2NhdGlvbiA9IHtcbiAgICAgICAgeDogeCAtIGNoYW5nZUxvY2F0aW9uLngsXG4gICAgICAgIHk6IHkgLSBjaGFuZ2VMb2NhdGlvbi55LFxuICAgIH1cblxuICAgIC8vIENoYW5nZSBzbGVlcGVyIGNhbnZhcyBsb2NhdGlvblxuICAgIG9iamVjdC5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbihyZWNvdmVyTG9jYXRpb24pO1xuXG4gICAgLy8gQ2hhbmdlIHRoZSBjb25uZWN0ZWQgb3V0Y29taW5nIGVkZ2VzJyBsb2NhdGlvblxuICAgIGZvciAoY29uc3QgZWRnZSBvZiBvYmplY3QuZWRnZUxpc3QpIHtcbiAgICAgICAgY29uc3QgZWRnZVJlY292ZXJMb2NhdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGVkZ2Uuc3RhcnRMb2NhdGlvbi54IC0gY2hhbmdlTG9jYXRpb24ueCxcbiAgICAgICAgICAgIHk6IGVkZ2Uuc3RhcnRMb2NhdGlvbi55IC0gY2hhbmdlTG9jYXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICBlZGdlLnNldExvY2F0aW9uKFxuICAgICAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgICAgIGVkZ2VSZWNvdmVyTG9jYXRpb24sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBpbmNvbWluZyBlZGdlcycgbG9jYXRpb25cbiAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygb2JqZWN0LmluY29taW5nRWRnZUxpc3QpIHtcbiAgICAgICAgY29uc3QgZWRnZVJlY292ZXJMb2NhdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGVkZ2UuZW5kTG9jYXRpb24ueCAtIGNoYW5nZUxvY2F0aW9uLngsXG4gICAgICAgICAgICB5OiBlZGdlLmVuZExvY2F0aW9uLnkgLSBjaGFuZ2VMb2NhdGlvbi55LFxuICAgICAgICB9O1xuXG4gICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oXG4gICAgICAgICAgICAnZW5kJyxcbiAgICAgICAgICAgIGVkZ2VSZWNvdmVyTG9jYXRpb24sXG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vKipcbiAqIFVuZG8gbW92ZSBhbmNob3Igb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBSZWNpZXZlZCBlZGdlIG9iamVjdFxuICogQHBhcmFtIHsqfSBwYXJhbXMgdGhlIHNsZWVwZXIgbm9kZSB3aGVyZSB0aGUgZWRnZSBzdGFydFxuICovXG5mdW5jdGlvbiB1bmRvTW92ZUFuY2hvcihvYmplY3QsIHBhcmFtcykge1xuICAgIC8vIFJlbW92ZSB0aGUgZWRnZSBjcmVhdGVkXG4gICAgb2JqZWN0LmRlbGV0ZVNlbGYoKTtcbn1cblxuLyoqXG4gKiBVbmRvIG1vdmUgaGVhZCBvcGVyYXRpb25cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFxuICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gKi9cbmZ1bmN0aW9uIHVuZG9Nb3ZlSGVhZChvYmplY3QsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgY2hhbmdlRW5kTG9jYXRpb24gfSA9IHBhcmFtcztcblxuICAgIC8vIFJlY292ZXIgZWdkZSBlbmQgbG9jYXRpb25cbiAgICBjb25zdCByZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgIHg6IG9iamVjdC5lbmRMb2NhdGlvbi54IC0gY2hhbmdlRW5kTG9jYXRpb24ueCxcbiAgICAgICAgeTogb2JqZWN0LmVuZExvY2F0aW9uLnkgLSBjaGFuZ2VFbmRMb2NhdGlvbi55LFxuICAgIH07XG5cbiAgICBvYmplY3Quc2V0TG9jYXRpb24oXG4gICAgICAgICdlbmQnLFxuICAgICAgICByZWNvdmVyTG9jYXRpb24sXG4gICAgKTtcblxuICAgIC8vIFJlbW92ZSBhZGRlZCBlbmQgc2xlZXBlciBpZiBuZWVkZWRcbiAgICBpZiAoISFwYXJhbXNbJ2FkZGVkRW5kU2xlZXBlciddKSB7XG4gICAgICAgIHBhcmFtc1snYWRkZWRFbmRTbGVlcGVyJ10ucmVtb3ZlSW5jb21pbmdFZGdlKG9iamVjdCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFVuZG8gZGVsZXRlIHRoZSBjbGlja2VkIG9iamVjdFxuICogQHBhcmFtIHsqfSBvYmplY3QgRGVsZXRlZCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gdW5kb0RlbGV0ZUl0ZW1zKG9iamVjdCkge1xuICAgIG9iamVjdC5yZWNvdmVyU2VsZigpO1xufVxuXG4vKipcbiAqIFVuZG8gUGFzdGUgdGhlIGl0ZW1cbiAqL1xuZnVuY3Rpb24gdW5kb1Bhc3RlKG9iamVjdCkge1xuICAgIGZvcihsZXQgaXRlbSBvZiBvYmplY3QpIHtcbiAgICAgICAgLy8gVE9ETzogT25seSBzdXBwb3J0IHNsZWVwZXIgbm93XG4gICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgU2xlZXBlcikge1xuICAgICAgICAgICAgaXRlbS5kZWxldGVTZWxmKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTYXZlZE9wZXJhdGlvbiB9IGZyb20gJy4vb3BlcmF0aW9uJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBVbmRvUmVkb0V2ZW50TmFtZSB9IGZyb20gJy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBDb3B5UGFzdGVIb3VzZSB9IGZyb20gJy4uL2NvcHktcGFzdGUvY29weS1wYXN0ZS1ob3VzZSc7XG5cbmV4cG9ydCBjbGFzcyBVbmRvRGVjb3JhdG9yIHtcbiAgICAvKipcbiAgICAgKiBEZWNvcmF0b3IgZm9yIG1vdXNlIHVwIGZyb20gc2xlZXBlclxuICAgICAqLyBcbiAgICBzdGF0aWMgbW91c2VVcFNsZWVwZXJEZWNvcmF0b3IoY29udHJvbGxlckZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihkcmFnU2xlZXBlckxpc3QsIG9yaWdpbmFsSW5mbykge1xuICAgICAgICAgICAgLy8gVE9ETzogQ3VycmVudCBTbGVlcGVyIChOb3cgbm8gc2VsZWN0aW9uIGJveClcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTbGVlcGVyID0gZHJhZ1NsZWVwZXJMaXN0WzBdO1xuXG4gICAgICAgICAgICAvLyBGaW5kIGxvY2F0aW9uIGNoYW5nZVxuICAgICAgICAgICAgY29uc3QgY2hhbmdlTG9jYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeDogY3VycmVudFNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueCAtIG9yaWdpbmFsSW5mby54LFxuICAgICAgICAgICAgICAgIHk6IGN1cnJlbnRTbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnkgLSBvcmlnaW5hbEluZm8ueSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoYW5nZUxvY2F0aW9uLnggIT09IDAgJiYgY2hhbmdlTG9jYXRpb24ueSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFNhdmUgdG8gdW5kbyBzdGFja1xuICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IGN1cnJlbnRTbGVlcGVyLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLm1vdmVTbGVlcGVyLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUxvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBjb250cm9sbGVyXG4gICAgICAgICAgICBjb250cm9sbGVyRnVuY3Rpb24oZHJhZ1NsZWVwZXJMaXN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY29yYXRvciBmb3IgbW91c2UgdXAgZnJvbSBhbmNob3JcbiAgICAgKi9cbiAgICBzdGF0aWMgbW91c2VVcEFuY2hvckRlY29yYXRvcihjb250cm9sbGVyRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNsZWVwZXJBbmRBbmNob3IsIGVkZ2UsIGNsb3Nlc3RPYmplY3QpIHtcbiAgICAgICAgICAgIC8vIFNhdmUgdG8gdW5kbyBzdGFja1xuICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLmFkZE11dGF0aW9uLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiBlZGdlLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogU2F2ZWRPcGVyYXRpb24uYWRkRWRnZUZyb21BbmNob3IsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0U2xlZXBlcjogc2xlZXBlckFuZEFuY2hvclswXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIGNvbnRyb2xsZXIgXG4gICAgICAgICAgICBjb250cm9sbGVyRnVuY3Rpb24oc2xlZXBlckFuZEFuY2hvciwgZWRnZSwgY2xvc2VzdE9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNvcmF0b3IgZm9yIG1vdXNlIHVwIGZyb20gaGVhZFxuICAgICAqL1xuICAgIHN0YXRpYyBtb3VzZVVwSGVhZERlY29yYXRvcihjb250cm9sbGVyRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVkZ2UsIGNsb3Nlc3RPYmplY3QsIG9yaWdpbmFsTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBjbG9zZXN0TG9jYXRpb24sXG4gICAgICAgICAgICAgICAgY2xvc2VzdFNsZWVwZXIsXG4gICAgICAgICAgICB9ID0gY2xvc2VzdE9iamVjdDtcblxuICAgICAgICAgICAgLy8gQWRkIG11dGF0aW9uIFxuICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLmFkZE11dGF0aW9uLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiBlZGdlLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogU2F2ZWRPcGVyYXRpb24ubW92ZUhlYWQsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUVuZExvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjbG9zZXN0TG9jYXRpb24ueCAtIG9yaWdpbmFsTG9jYXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNsb3Nlc3RMb2NhdGlvbi55IC0gb3JpZ2luYWxMb2NhdGlvbi55LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhZGRlZEVuZFNsZWVwZXI6IGNsb3Nlc3RTbGVlcGVyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgY29udHJvbGxlclxuICAgICAgICAgICAgY29udHJvbGxlckZ1bmN0aW9uKGVkZ2UsIGNsb3Nlc3RPYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjb3JhdG9yIGZvciBkZWxldGUgaXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVsZXRlSXRlbXNEZWNvcmF0b3IoY29udHJvbGxlckZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihjbGlja09iamVjdCkge1xuICAgICAgICAgICAgLy8gQWRkIG11dGF0aW9uXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUuYWRkTXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IGNsaWNrT2JqZWN0LFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogU2F2ZWRPcGVyYXRpb24uZGVsZXRlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgY29udHJvbGxlclxuICAgICAgICAgICAgY29udHJvbGxlckZ1bmN0aW9uKGNsaWNrT2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY29yYXRvciBmb3IgcGFzdGUgaXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFzdGVEZWNvcmF0b3IoY29udHJvbGxlckZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIEFkZCBtdXRhdGlvblxuICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLmFkZE11dGF0aW9uLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiBDb3B5UGFzdGVIb3VzZS5wYWNrYWdlLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogU2F2ZWRPcGVyYXRpb24ucGFzdGUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJGdW5jdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IHVuZG9Db250cm9sbGVyIH0gZnJvbSAnLi91bmRvLWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVW5kb1JlZG9FdmVudE5hbWUgfSBmcm9tICcuLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IHJlZG9Db250cm9sbGVyIH0gZnJvbSAnLi9yZWRvLWNvbnRyb2xsZXInO1xuXG5jbGFzcyBVbmRvUmVkbyB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBVbmRvUmVkbygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYoIVVuZG9SZWRvLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAvLyBEZWZpbmUgdGhlIHN0YWNrIGFuZCB0aGUgcG9pbnRlclxuICAgICAgICAgICAgdGhpcy5zdGFjayA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyID0gLTE7XG5cbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgICAgICAgICBVbmRvUmVkby5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbmFtZVxuICAgICAqL1xuICAgIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHVuZG8sXG4gICAgICAgICAgICBhZGRNdXRhdGlvbixcbiAgICAgICAgICAgIHJlZG8sXG4gICAgICAgIH0gPSBVbmRvUmVkb0V2ZW50TmFtZTtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGFkZE11dGF0aW9uLCB0aGlzLmFkZE11dGF0aW9uVG9TdGFjay5iaW5kKHRoaXMpKTtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKHVuZG8sIHRoaXMudW5kby5iaW5kKHRoaXMpKTtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKHJlZG8sIHRoaXMucmVkby5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgbXV0YXRpb24gdG8gdW5kbyBzdGFja1xuICAgICAqIEBwYXJhbSB7Kn0gbXV0YXRpb24gXG4gICAgICovXG4gICAgYWRkTXV0YXRpb25Ub1N0YWNrKG11dGF0aW9uKSB7XG4gICAgICAgIHRoaXMucG9pbnRlciArPSAxO1xuXG4gICAgICAgIC8vIEJyZWFrIHRoZSBzdGFjayBvcmRlciwgaWdub3JlIHRoZSBvcGVyYXRpb24gYWZ0ZXIgcG9pbnRlclxuICAgICAgICBpZiAodGhpcy5wb2ludGVyICE9PSB0aGlzLnN0YWNrLmxlbmd0aCAmJiB0aGlzLnBvaW50ZXIgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdGFjay5zcGxpY2UodGhpcy5wb2ludGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhY2subGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhY2sucHVzaChtdXRhdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5kbyB0aGUgb3BlcmF0aW9uXG4gICAgICovXG4gICAgdW5kbygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoICE9PSAwIHx8IHRoaXMucG9pbnRlciAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHVuZG9UYXNrID0gdGhpcy5zdGFja1t0aGlzLnBvaW50ZXJdO1xuICAgICAgICAgICAgdW5kb0NvbnRyb2xsZXIodW5kb1Rhc2spO1xuXG4gICAgICAgICAgICB0aGlzLnBvaW50ZXIgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZG8gdGhlIG9wZXJhdGlvblxuICAgICAqL1xuICAgIHJlZG8oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCAhPT0gMCAmJiB0aGlzLnBvaW50ZXIgIT09IHRoaXMuc3RhY2subGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyICs9IDE7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlZG9UYXNrID0gdGhpcy5zdGFja1t0aGlzLnBvaW50ZXJdO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZWRvVGFzayk7XG5cbiAgICAgICAgICAgIHJlZG9Db250cm9sbGVyKHJlZG9UYXNrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgVW5kb1JlZG8gfTsiLCJjbGFzcyBFdmVudCB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBFdmVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIUV2ZW50Lmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RGljdGlvbmFyeSA9IHt9O1xuICAgICAgICAgICAgRXZlbnQuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBZGQgdG8gd2hvbGUgd2luZG93XG4gICAgICAgICAgICB3aW5kb3cuRXZlbnRlciA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEV2ZW50Lmluc3RhbmNlOyBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVudExpc3RlbmVyIGZvciBhZGRpbmcgZXZlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAvLyBGaW5kIGlmIGV2ZW50TmFtZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBpZiAoIShldmVudE5hbWUgaW4gdGhpcy5ldmVudERpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RGljdGlvbmFyeVtldmVudE5hbWVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQdXNoIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpbnRvIGxpc3RcbiAgICAgICAgdGhpcy5ldmVudERpY3Rpb25hcnlbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIGxpc3RlbmVyIGdpdmVuIGEgc3BlY2lmaWMgZXZlbnQgYW5kIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9uIHwgdW5kZWZpbmVkfSBjYWxsYmFjayBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgLy8gVGhyb3cgRXJyb3Igd2hlbiBub3QgZmluZCB0aGUgZXZlbnRcbiAgICAgICAgaWYgKCEoZXZlbnROYW1lIGluIHRoaXMuZXZlbnREaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignRXZlbnQgTm90IFJlZ2lzdGVyZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEp1c3QgcmVtb3ZlIHRoZSBzcGVjaWZpYyBjYWxsYmFjayBmdW5jdGlvbiBpZiBjYWxsYmFjayBnaXZlblxuICAgICAgICBpZiAoISFjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEV2ZW50TGlzdCA9IHRoaXMuZXZlbnREaWN0aW9uYXJ5W2V2ZW50TmFtZV07XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja0luZGV4ID0gY3VycmVudEV2ZW50TGlzdC5maW5kSW5kZXgoc2F2ZWRDYWxsYmFja0Z1bmN0aW9uID0+IFxuICAgICAgICAgICAgICAgIHNhdmVkQ2FsbGJhY2tGdW5jdGlvbiA9PT0gY2FsbGJhY2tcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIFJhaXNlIGVycm9yIGlmIGNhbGxiYWNrIGZ1bmN0aW9uIG5vdCBmb3VuZFxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrSW5kZXggPT09IC0xIHx8IGNhbGxiYWNrSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0NhbGxiYWNrIGZ1bmN0aW9uIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgICAgICBjdXJyZW50RXZlbnRMaXN0LnNwbGljZShjYWxsYmFja0luZGV4LCAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoaXMgZXZlbnQgaWYgZXZlbnQgbGlzdCBpcyBlbXB0eSBcbiAgICAgICAgICAgIGlmIChjdXJyZW50RXZlbnRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50RGljdGlvbmFyeVtldmVudE5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRGlyZWN0bHkgZGVsZXRlIHRoaXMgZXZlbnRcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50RGljdGlvbmFyeVtldmVudE5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgZGlzcHRhY2hlciwgdHJpZ2dlciB0aGUgcmVsYXRlZCBldmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgXG4gICAgICogQHBhcmFtICB7Li4uYW55fSBhcmdzIFxuICAgICAqL1xuICAgIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIC8vIFRocm93IEVycm9yIHdoZW4gbm90IGZpbmQgdGhlIGV2ZW50XG4gICAgICAgIGlmICghKGV2ZW50TmFtZSBpbiB0aGlzLmV2ZW50RGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0V2ZW50IE5vdCBSZWdpc3RlcmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJdGVyYXRlIGZvciB0cmlnZ2VyXG4gICAgICAgIHRoaXMuZXZlbnREaWN0aW9uYXJ5W2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudGVyID0gRXZlbnQuZ2V0SW5zdGFuY2UoKTsiLCIvKipcbiAqIEZpbmQgaWYgaXQgaXMgcG9zc2libGUgdG8gYmUgYWN0aXZlXG4gKiBAcGFyYW0ge2Zsb2F0fSB3ZWlnaHQgXG4gKiBAcmV0dXJucyB7Ym9vbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2aXR5QnlXZWlnaHQod2VpZ2h0KSB7XG4gICAgY29uc3Qgc3Vkb1JhbmRvbVZhcmlhYmxlID0gTWF0aC5yYW5kb207XG4gICAgcmV0dXJuIHN1ZG9SYW5kb21WYXJpYWJsZSA8IHdlaWdodDtcbn1cblxuLyoqXG4gKiBGaW5kIGlmIGdpdmVuIHBvaW50IG5lYXIgdGhlIGxpbmVcbiAqIEBwYXJhbSB7Kn0gbGluZVN0YXJ0TG9jYXRpb24gXG4gKiBAcGFyYW0geyp9IGxpbmVFbmRMb2NhdGlvbiBcbiAqIEBwYXJhbSB7Kn0geCBcbiAqIEBwYXJhbSB7Kn0geSBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQb2ludEluTGluZShsaW5lU3RhcnRMb2NhdGlvbiwgbGluZUVuZExvY2F0aW9uLCB4LCB5KSB7XG4gICAgaWYoXG4gICAgICAgIGxpbmVFbmRMb2NhdGlvbi54ID4gbGluZVN0YXJ0TG9jYXRpb24ueCBcbiAgICAgICAgJiYgKFxuICAgICAgICAgICAgeCA+IGxpbmVFbmRMb2NhdGlvbi54IFxuICAgICAgICAgICAgfHwgeCA8IGxpbmVTdGFydExvY2F0aW9uLnhcbiAgICAgICAgKVxuICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoXG4gICAgICAgIGxpbmVFbmRMb2NhdGlvbi54IDwgbGluZVN0YXJ0TG9jYXRpb24ueCBcbiAgICAgICAgJiYgKFxuICAgICAgICAgICAgeCA8IGxpbmVFbmRMb2NhdGlvbi54IFxuICAgICAgICAgICAgfHwgeCA+IGxpbmVTdGFydExvY2F0aW9uLnhcbiAgICAgICAgKVxuICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGxpbmUgXG4gICAgY29uc3Qgc2xvcGUgPSAobGluZUVuZExvY2F0aW9uLnkgLSBsaW5lU3RhcnRMb2NhdGlvbi55KSAvIFxuICAgIChsaW5lRW5kTG9jYXRpb24ueCAtIGxpbmVTdGFydExvY2F0aW9uLngpO1xuXG4gICAgLy8gRmluZCB0aGUgYXJyb3cgcmVnaW9uXG4gICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4oc2xvcGUpO1xuICAgIGNvbnN0IHhMZW5ndGggPSAxMCAqIDAuNSAqIDMqKjAuNSAqIE1hdGguYWJzKE1hdGguY29zKGFuZ2xlKSk7XG4gICAgaWYgKFxuICAgICAgICBsaW5lRW5kTG9jYXRpb24ueCA+IGxpbmVTdGFydExvY2F0aW9uLnggXG4gICAgICAgICYmIHggPiBsaW5lRW5kTG9jYXRpb24ueCAtIHhMZW5ndGhcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgbGluZUVuZExvY2F0aW9uLnggPCBsaW5lU3RhcnRMb2NhdGlvbi54XG4gICAgICAgICYmIHggPCBsaW5lRW5kTG9jYXRpb24ueCArIHhMZW5ndGhcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgY29uc3QgaW50ZXJjZXB0ID0gbGluZVN0YXJ0TG9jYXRpb24ueSAtIHNsb3BlICogbGluZVN0YXJ0TG9jYXRpb24ueDtcblxuICAgIC8vIEZpbmQgdGhlIGRpc3RhbmNlIGJldHdlZW4gbGluZSBhbmQgcG9pbnRcbiAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguYWJzKGludGVyY2VwdCArIHNsb3BlICogeCAtIHkpIC8gTWF0aC5zcXJ0KDEgKyBzbG9wZSoqMik7XG5cbiAgICByZXR1cm4gZGlzdGFuY2UgPD0gNTtcbn0iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKipcbiAqIEFkZHMgdGhlIGtleS12YWx1ZSBgcGFpcmAgdG8gYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwYWlyIFRoZSBrZXktdmFsdWUgcGFpciB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBtYXBgLlxuICovXG5mdW5jdGlvbiBhZGRNYXBFbnRyeShtYXAsIHBhaXIpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBtYXAuc2V0YCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgbWFwLnNldChwYWlyWzBdLCBwYWlyWzFdKTtcbiAgcmV0dXJuIG1hcDtcbn1cblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBtb2RpZnkuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBzZXRgLlxuICovXG5mdW5jdGlvbiBhZGRTZXRFbnRyeShzZXQsIHZhbHVlKSB7XG4gIC8vIERvbid0IHJldHVybiBgc2V0LmFkZGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIHNldC5hZGQodmFsdWUpO1xuICByZXR1cm4gc2V0O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXksXG4gICAgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCksXG4gICAgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gICAgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKSxcbiAgICBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKSxcbiAgICBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpLFxuICAgIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKSxcbiAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyBkYXRhW2tleV0gIT09IHVuZGVmaW5lZCA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIGdldE1hcERhdGEodGhpcywga2V5KS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fWydkZWxldGUnXShrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGNhY2hlID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGNhY2hlIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gY2FjaGUuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNhY2hlID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgY2FjaGUuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICAvLyBTYWZhcmkgOSBtYWtlcyBgYXJndW1lbnRzLmxlbmd0aGAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgdmFyIHJlc3VsdCA9IChpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpXG4gICAgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpXG4gICAgOiBbXTtcblxuICB2YXIgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aCxcbiAgICAgIHNraXBJbmRleGVzID0gISFsZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoa2V5ID09ICdsZW5ndGgnIHx8IGlzSW5kZXgoa2V5LCBsZW5ndGgpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsb25lYCBhbmQgYF8uY2xvbmVEZWVwYCB3aGljaCB0cmFja3NcbiAqIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0Z1bGxdIFNwZWNpZnkgYSBjbG9uZSBpbmNsdWRpbmcgc3ltYm9scy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIG9iamVjdHMgYW5kIHRoZWlyIGNsb25lIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgaXNEZWVwLCBpc0Z1bGwsIGN1c3RvbWl6ZXIsIGtleSwgb2JqZWN0LCBzdGFjaykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICBpZiAoaXNIb3N0T2JqZWN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZU9iamVjdChpc0Z1bmMgPyB7fSA6IHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgYmFzZUNsb25lLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuXG4gIGlmICghaXNBcnIpIHtcbiAgICB2YXIgcHJvcHMgPSBpc0Z1bGwgPyBnZXRBbGxLZXlzKHZhbHVlKSA6IGtleXModmFsdWUpO1xuICB9XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgaXNEZWVwLCBpc0Z1bGwsIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG90eXBlIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gYmFzZUNyZWF0ZShwcm90bykge1xuICByZXR1cm4gaXNPYmplY3QocHJvdG8pID8gb2JqZWN0Q3JlYXRlKHByb3RvKSA6IHt9O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IChpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgYnVmZmVyLmNvbnN0cnVjdG9yKGJ1ZmZlci5sZW5ndGgpO1xuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgbWFwLlxuICovXG5mdW5jdGlvbiBjbG9uZU1hcChtYXAsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhtYXBUb0FycmF5KG1hcCksIHRydWUpIDogbWFwVG9BcnJheShtYXApO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZE1hcEVudHJ5LCBuZXcgbWFwLmNvbnN0cnVjdG9yKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IHJlZ2V4cC5jb25zdHJ1Y3RvcihyZWdleHAuc291cmNlLCByZUZsYWdzLmV4ZWMocmVnZXhwKSk7XG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHNldC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTZXQoc2V0LCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMoc2V0VG9BcnJheShzZXQpLCB0cnVlKSA6IHNldFRvQXJyYXkoc2V0KTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRTZXRFbnRyeSwgbmV3IHNldC5jb25zdHJ1Y3Rvcik7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlID09PSB1bmRlZmluZWQgPyBzb3VyY2Vba2V5XSA6IG5ld1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9sIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9sIHByb3BlcnRpZXMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSBuYXRpdmVHZXRTeW1ib2xzID8gb3ZlckFyZyhuYXRpdmVHZXRTeW1ib2xzLCBPYmplY3QpIDogc3R1YkFycmF5O1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEsXG4vLyBmb3IgZGF0YSB2aWV3cyBpbiBFZGdlIDwgMTQsIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzLlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUFycmF5KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgY2xvbmVGdW5jLCBpc0RlZXApIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIHJldHVybiBjbG9uZUFycmF5QnVmZmVyKG9iamVjdCk7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIHJldHVybiBjbG9uZURhdGFWaWV3KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzogY2FzZSBpbnQxNlRhZzogY2FzZSBpbnQzMlRhZzpcbiAgICBjYXNlIHVpbnQ4VGFnOiBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzogY2FzZSB1aW50MTZUYWc6IGNhc2UgdWludDMyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lVHlwZWRBcnJheShvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHJldHVybiBjbG9uZU1hcChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKG9iamVjdCk7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVJlZ0V4cChvYmplY3QpO1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTZXQob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVN5bWJvbChvYmplY3QpO1xuICB9XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uY2xvbmVgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGNsb25lcyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZWN1cnNpdmVseSBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBkZWVwIGNsb25lZCB2YWx1ZS5cbiAqIEBzZWUgXy5jbG9uZVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgZGVlcCA9IF8uY2xvbmVEZWVwKG9iamVjdHMpO1xuICogY29uc29sZS5sb2coZGVlcFswXSA9PT0gb2JqZWN0c1swXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgdHJ1ZSwgdHJ1ZSk7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDgtOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEZWVwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnLi4vY29yZS92aWV3LWxheWVyL2NhbnZhcyc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vY29yZS9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlcic7XG5cbi8vIEluaXQgQ2FudmFzXG52YXIgbXlDYW52YXMgPSBDYW52YXMuZ2V0SW5zdGFuY2UoKTtcblxuLy8gQWRkIGEgc2xlZXBlclxubmV3IFNsZWVwZXIoKTtcbm5ldyBTbGVlcGVyKFxuICAgIGZhbHNlLFxuICAgIHtcbiAgICAgICAgZHJhd1R5cGU6ICdjaXJjbGUnLFxuICAgICAgICB4OiA2MDAsXG4gICAgICAgIHk6IDYwMCxcbiAgICAgICAgcmFkaXVzOiAzMCxcbiAgICAgICAgc3RhcnRBbmdsZTogMCxcbiAgICAgICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuICAgICAgICBpc0ZpbGxlZDogdHJ1ZSxcbiAgICAgICAgZmlsbENvbG9yOiAnI0ZGQ0MzMycsXG4gICAgfVxuKTtcblxubmV3IFNsZWVwZXIoXG4gICAgZmFsc2UsXG4gICAge1xuICAgICAgICBkcmF3VHlwZTogJ2NpcmNsZScsXG4gICAgICAgIHg6IDcwMCxcbiAgICAgICAgeTogNzAwLFxuICAgICAgICByYWRpdXM6IDMwLFxuICAgICAgICBzdGFydEFuZ2xlOiAwLFxuICAgICAgICBlbmRBbmdsZTogMiAqIE1hdGguUEksXG4gICAgICAgIGlzRmlsbGVkOiB0cnVlLFxuICAgICAgICBmaWxsQ29sb3I6ICcjRkZDQzMzJyxcbiAgICB9XG4pO1xuXG5uZXcgU2xlZXBlcihcbiAgICBmYWxzZSxcbiAgICB7XG4gICAgICAgIGRyYXdUeXBlOiAnY2lyY2xlJyxcbiAgICAgICAgeDogNTAwLFxuICAgICAgICB5OiA2MDAsXG4gICAgICAgIHJhZGl1czogMzAsXG4gICAgICAgIHN0YXJ0QW5nbGU6IDAsXG4gICAgICAgIGVuZEFuZ2xlOiAyICogTWF0aC5QSSxcbiAgICAgICAgaXNGaWxsZWQ6IHRydWUsXG4gICAgICAgIGZpbGxDb2xvcjogJyNGRkNDMzMnLFxuICAgIH1cbik7XG5cblxubmV3IFNsZWVwZXIoXG4gICAgZmFsc2UsXG4gICAge1xuICAgICAgICBkcmF3VHlwZTogJ2NpcmNsZScsXG4gICAgICAgIHg6IDYwMCxcbiAgICAgICAgeTogNzAwLFxuICAgICAgICByYWRpdXM6IDMwLFxuICAgICAgICBzdGFydEFuZ2xlOiAwLFxuICAgICAgICBlbmRBbmdsZTogMiAqIE1hdGguUEksXG4gICAgICAgIGlzRmlsbGVkOiB0cnVlLFxuICAgICAgICBmaWxsQ29sb3I6ICcjRkZDQzMzJyxcbiAgICB9XG4pO1xuXG5uZXcgU2xlZXBlcihcbiAgICBmYWxzZSxcbiAgICB7XG4gICAgICAgIGRyYXdUeXBlOiAnY2lyY2xlJyxcbiAgICAgICAgeDogNzAwLFxuICAgICAgICB5OiA4MDAsXG4gICAgICAgIHJhZGl1czogMzAsXG4gICAgICAgIHN0YXJ0QW5nbGU6IDAsXG4gICAgICAgIGVuZEFuZ2xlOiAyICogTWF0aC5QSSxcbiAgICAgICAgaXNGaWxsZWQ6IHRydWUsXG4gICAgICAgIGZpbGxDb2xvcjogJyNGRkNDMzMnLFxuICAgIH1cbik7XG5cblxuLy8gRW5hYmxlIGhvdCB1cGRhdGluZ1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vY29yZS92aWV3LWxheWVyL2NhbnZhcycsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm47XG4gICAgfSlcbn1cbiJdLCJuYW1lcyI6WyJjbG9uZURlZXAiLCJDb3B5UGFzdGVIb3VzZSIsImhvdXNlIiwiaW5zdGFuY2UiLCJvYmoiLCJBcnJheSIsIml0ZW0iLCJwdXNoIiwiU2xlZXBlclBvb2xlciIsIkVkZ2VQb29sZXIiLCJpc1BvaW50SW5MaW5lIiwiTWluaW1hbERpc3RhbmNlRm9yTG9jYXRlIiwiQWN0aW9uVXRpbHMiLCJjYW52YXMiLCJsb2NhdGlvbiIsImZpbmRGdW5jdGlvbnNMaXN0IiwiZmluZExvY2F0ZWRMaW5lT3JIZWFkIiwiZmluZExvY2F0ZWRBbmNob3IiLCJmaW5kTG9jYXRlZFNsZWVwZXIiLCJmaW5kRnVuY3Rpb24iLCJmaW5kUmVzdWx0IiwiY2FudmFzQ29udGV4dCIsImdldENvbnRleHQiLCJpc0xvY2F0ZWRJbkNpcmNsZSIsImNpcmNsZVBhdGgiLCJ4IiwieSIsImlzUG9pbnRJblBhdGgiLCJsb2NhdGlvbkhhbmRsZXJNYXBzIiwiYmluZCIsImluZGV4IiwicG9vbCIsImxlbmd0aCIsInNsZWVwZXIiLCJzbGVlcGVyU3R5bGUiLCJjYW52YXNJbmZvcm1hdGlvbiIsInNsZWVwZXJDYW52YXNQYXRoIiwiY2FudmFzUGF0aCIsImRyYXdUeXBlIiwicmVzdWx0IiwidHlwZSIsImlzQWN0aXZlIiwiY2FudmFzQW5jaG9yc1BhdGhMaXN0Iiwic2xlZXBlckFuY2hvciIsImFuY2hvclBhdGgiLCJlZGdlIiwiaGVhZCIsInN0YXJ0TG9jYXRpb24iLCJlbmRMb2NhdGlvbiIsImRyYWdnZWRTbGVlcGVyTGlzdCIsImlzRHJhZyIsImZuIiwid2FpdFRpbWUiLCJ0aW1lciIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwic2V0VGltZW91dCIsImFwcGx5Iiwic2xlZXBlclgiLCJzbGVlcGVyWSIsImRpc3RhbmNlIiwiTWF0aCIsInNxcnQiLCJyYWRpdXMiLCJsb2NhdGVkU2xlZXBlciIsImZpbmRDbG9zZXN0U2xlZXBlciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGVkU2xlZXBlclgiLCJsb2NhdGVkU2xlZXBlclkiLCJhbmNob3JMb2NhdGlvbkxpc3QiLCJtaW5EaXN0YW5jZSIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJtaW5Mb2NhdGlvbiIsImFuY2hvckxvY2F0aW9uIiwiY2xvc2VzdExvY2F0aW9uIiwiY2xvc2VzdFNsZWVwZXIiLCJtb3VzZUFjdGlvbk1vZGUiLCJkb3duT25TbGVlcGVyIiwiZG93bk9uQW5jaG9yIiwiZG93bk9uTGluZSIsImRvd25PbkhlYWQiLCJkb3duT25CYWNrZ3JvdW5kIiwiZG93bk9uTm9uZSIsImRvd25PblRleHQiLCJBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lIiwiUGFpbnRlckV2ZW50TmFtZSIsIkV2ZW50ZXIiLCJVbmRvRGVjb3JhdG9yIiwiU2xlZXBlciIsIkVkZ2UiLCJLZXlib2FyZEFjdGlvbkNvbnRyb2xsZXIiLCJpbml0RXZlbnRIYW5kbGVyIiwia2V5Ym9hcmREZWxldGUiLCJrZXlib2FyZElucHV0Iiwia2V5Ym9hcmRUZXh0VW5kbyIsImtleWJvYXJkVGV4dFJlZG8iLCJrZXlib2FyZFRleHREZWxldGUiLCJrZXlib2FyZENvcHkiLCJrZXlib2FyZFBhc3RlIiwiZXZlbnROYW1lc01hcCIsImRlbGV0ZUl0ZW1zRGVjb3JhdG9yIiwia2V5Ym9hcmREZWxldGVDb250cm9sbGVyIiwicGFzdGVEZWNvcmF0b3IiLCJrZXlib2FyZFBhc3RlQ29udHJvbGxlciIsImtleWJvYXJkQ29weUNvbnRyb2xsZXIiLCJrZXlib2FyZElucHV0Q29udHJvbGxlciIsImtleWJvYXJkVGV4dFVuZG9Db250cm9sbGVyIiwia2V5Ym9hcmRUZXh0UmVkb0NvbnRyb2xsZXIiLCJrZXlib2FyZFRleHREZWxldGVDb250cm9sbGVyIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrT2JqZWN0IiwiZGVsZXRlU2VsZiIsImRpc3BhdGNoRXZlbnQiLCJyZXBhaW50IiwiaW5wdXRLZXkiLCJuZXdDb250ZW50IiwidGV4dEluZm9ybWF0aW9uIiwiY29udGVudCIsInRleHRUZW1wU3RhY2siLCJ0ZXh0IiwidW5kbyIsInJlZG8iLCJzdHJpbmdMZW5ndGgiLCJzdWJzdHJpbmciLCJvYmplY3QiLCJwYWNrYWdlIiwiY29weWVkT2JqZWN0TGlzdCIsInByZXBhcmVGb3JQYXN0ZSIsInJlY292ZXJTZWxmIiwiVW5kb1JlZG9FdmVudE5hbWUiLCJLZXlib2FyZEFjdGlvbiIsIm1vdXNlQWN0aW9uIiwiaW5pdEFjdGlvbiIsImFjdGlvbnNNYXAiLCJrZXlEb3duIiwiYWN0aW9uIiwid2luZG93IiwiZXZlbnQiLCJjb2RlIiwia2V5Q29kZSIsImlzVGV4dE1vZGVPbiIsIm1vdXNlRG93bkVsZW1lbnQiLCJpc1RleHRNb2RlIiwiX2hhbmRsZXJUZXh0RGVsZXRlIiwiX2hhbmRsZXJEZWxldGUiLCJjdHJsS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwiX2hhbmRsZU5vcm1hbCIsImtleSIsInRvU3RyaW5nIiwiRGVlcENsb25lSW5mbyIsIm1vZGUiLCJ0YXJnZXQiLCJTbGVlcGVyRXZlbnROYW1lIiwiRWRnZUV2ZW50TmFtZSIsIk1vdXNlQWN0aW9uQ29udHJvbGxlciIsIm1vdXNlRG93blNsZWVwZXIiLCJtb3VzZURvd25MaW5lIiwibW91c2VEb3duQmFja2dyb3VuZCIsIm1vdXNlTW92ZVNsZWVwZXIiLCJtb3VzZU1vdmVIZWFkIiwibW91c2VVcFNsZWVwZXIiLCJtb3VzZVVwQW5jaG9yIiwibW91c2VVcEhlYWQiLCJtb3VzZURvdWJsZUNsaWNrIiwibW91c2VEb3duU2xlZXBlckNvbnRyb2xsZXIiLCJtb3VzZURvd25MaW5lQ29udHJvbGxlciIsIm1vdXNlRG93bkJhY2tncm91bmRDb250cm9sbGVyIiwibW91c2VNb3ZlU2xlZXBlckNvbnRyb2xsZXIiLCJtb3VzZU1vdmVIZWFkQ29udHJvbGxlciIsIm1vdXNlVXBTbGVlcGVyRGVjb3JhdG9yIiwibW91c2VVcFNsZWVwZXJDb250cm9sbGVyIiwibW91c2VVcEFuY2hvckRlY29yYXRvciIsIm1vdXNlVXBBbmNob3JDb250cm9sbGVyIiwibW91c2VVcEhlYWREZWNvcmF0b3IiLCJtb3VzZVVwSGVhZENvbnRyb2xsZXIiLCJtb3VzZURvdWJsZUNsaWNrQ29udHJvbGxlciIsImFjdGl2ZVNvbWVTbGVlcGVyIiwiYWN0aXZlU29tZUVkZ2UiLCJjaGFuZ2VBY3RpdmVTdGF0dXMiLCJlbmRUZXh0TW9kZSIsImRyYWdTbGVlcGVyTGlzdCIsInJlbGF0aXZlTW92ZURpc3RhbmNlIiwib3JpZ2luWCIsIm9yaWdpblkiLCJuZXdYIiwibmV3WSIsImNoYW5nZUNhbnZhc0luZm9ybWF0aW9uIiwiZWRnZUxpc3QiLCJzZXRMb2NhdGlvbiIsImluY29taW5nRWRnZUxpc3QiLCJkcmFnRWRnZSIsImN1cnJlbnRQb3NpdGlvbiIsImVuZFNsZWVwZXIiLCJyZW1vdmVJbmNvbWluZ0VkZ2UiLCJjaGFuZ2VFbmQiLCJzd2l0Y2hEcmFnU3RhdHVzIiwic2xlZXBlckFuZEFuY2hvciIsImNsb3Nlc3RPYmplY3QiLCJhZGRFZGdlIiwiYWRkSW5jb21pbmdFZGdlIiwic3RhcnRTbGVlcGVyIiwiYWRkQ2hpbGQiLCJhY3RpdmVTb21lU2xlZXBlclRleHRNb2RlIiwiU2F2ZWRPcGVyYXRpb24iLCJNb3VzZUFjdGlvbiIsIm1vdXNlUG9zaXRpb25YIiwibW91c2VQb3NpdGlvblkiLCJhY3Rpb25Nb2RlIiwidGVtcG9yYXJ5RWRnZSIsInRlbXBvcmFyeUNvcHkiLCJoYW5kbGVNb3VzZURvd24iLCJ0aHJvdHRsZXJNYWtlciIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZU5Nb3VzZVVwIiwiaGFuZGxlTW91c2VEb3VibGVDbGljayIsImhhbmRsZU1vdXNlUHJldmVudFJpZ2h0Q2xpY2siLCJvZmZzZXRYIiwib2Zmc2V0WSIsInNldE1vdXNlUG9zaXRpb24iLCJsb2NhdGVkT2JqZWN0IiwiZmluZExvY2F0ZWRPYmplY3QiLCJidXR0b24iLCJtb3VzZVJpZ2h0Q2xpY2siLCJfaGFuZGxlckhvdmVyTW92ZSIsImNhbGwiLCJfaGFuZGxlckRyYWdTbGVlcGVyTW92ZSIsIl9oYW5kbGVyRHJhZ0FuY2hvck1vdmUiLCJfaGFuZGxlckRyYWdCYWNrZ3JvdW5kTW92ZSIsIl9oYW5kbGVyRHJhZ0hlYWRNb3ZlIiwic3R5bGUiLCJjdXJzb3IiLCJmaW5kRHJhZ2dlZFNsZWVwZXIiLCJzdGFydExvYWN0aW9uIiwiY2hhbmdlU3RhcnQiLCJjdXJyZW50UG9zaXN0aW9uIiwiY2xvc2VzdE9iamVjdEFuY2hvciIsImZpbmRDbG9zZXN0QW5jaG9yIiwiY2xvc2VzdE9iamVjdEhlYWQiLCJhZGRNdXRhdGlvbiIsIm9wZXJhdGlvbiIsIm1vdmVIZWFkIiwicGFyYW1zIiwiY2hhbmdlRW5kTG9jYXRpb24iLCJpc0luVGhpc1NsZWVwZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIkRlZmF1bHRFZGdlV2VpZ2h0IiwiRGVmYXVsdFNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbiIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIlBJIiwiaXNGaWxsZWQiLCJmaWxsQ29sb3IiLCJpc0JvcmRlciIsIkRlZmF1bHRBY3RpdmVJbmZvcm1hdGlvbiIsImJvcmRlcldpdGgiLCJib3JkZXJDb2xvciIsImlzQW5jaG9yIiwiRWRnZVBvb2xFdmVudE5hbWUiLCJFZGdlUG9vbCIsImluaXRFdmVudHNIYW5kbGVyIiwibG9jYXRlZEluZGV4IiwiZmluZEluZGV4IiwiZWRnZUluUG9vbCIsInNwbGljZSIsImdldEluc3RhbmNlIiwid2VpZ2h0IiwibmV3V2VpZ2h0IiwibmV3U2xlZXBlciIsImVkZ2VQYXRoIiwicmVtb3ZlRWRnZSIsInJlbW92ZUNoaWxkIiwiU2xlZXBlclBvb2xFdmVudE5hbWUiLCJTbGVlcGVyUG9vbCIsImFkZFNsZWVwZXIiLCJyZU9yZGVyU2xlZXBlciIsInNsZWVwZXJJblBvb2wiLCJzbGVlcGVySW5kZXgiLCJUZXh0U2xlZXBlclRlbXBTdGFjayIsIm9yaWdpblRleHQiLCJwb2ludGVyIiwic3RhY2tMaXN0IiwidmFsIiwiVGV4dFNsZWVwZXIiLCJzaXplIiwiY29sb3IiLCJ0ZXh0YXJlYUluZm9ybWF0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0YXJlYUJvdW5kaW5nQm94UGF0aCIsInRleHRJbml0RXZlbnRIYW5kbGVyIiwic3RhcnRUZXh0TW9kZSIsInRleHRQb3NpdGlvbiIsInRleHRNYXhXaWR0aCIsInRleHRXcml0ZSIsInBvc2l0aW9uIiwibWF4V2lkdGgiLCJpbmZvcm1hdGlvbiIsInNldFRleHRPclRleHRhcmVhSW5mb3JtYXRpb24iLCJzbGVlcGVyUG9zaXRpb24iLCJmaWd1cmVEcmF3IiwiX3NldFRleHRhcmVhUGF0aCIsInByb3BlcnR5T2JqZWN0IiwiRXJyb3IiLCJmb3JTZXRPYmplY3QiLCJwcm9wZXJ0eSIsIm5ld1ZhbHVlIiwiZHJhd1RleHRBcmVhIiwiYm91bmRpbmdCb3hQYXRoIiwiZ2V0QWN0aXZpdHlCeVdlaWdodCIsInN0YXR1cyIsImlzU2xlZXBpbmciLCJjaGlsZHJlbkxpc3QiLCJjaGlsZEVkZ2VNYXBMaXN0Iiwic2V0Q2FudmFzUGF0aCIsImRyYXdUZXh0IiwiY2hpbGRTbGVlcGVyIiwiZXhwZWN0Q2hpbGRJbmRleCIsImNoaWxkT2JqZWN0IiwidW5kZWZpbmVkIiwiZXhwZWN0RWRnZUluZGV4IiwiZWRnZU9iamVjdCIsImZvckVhY2giLCJjaGlsZCIsImNoYW5nZVNsZWVwaW5nU3RhdHVzIiwiY2FudmFzUGF0aE9iamVjdCIsImFuY2hvcnNMaXN0IiwicmVtb3ZlU2xlZXBlciIsIkdsb2JhbENvbmZpZyIsIlBhaW50ZXIiLCJVbmRvUmVkbyIsIkNhbnZhcyIsImluaXQiLCJpbml0Q29udGV4dCIsImluaXRQYWludGVyIiwiaW5pdEFjdGlvblJlbGF0ZWQiLCJpbml0VW5kb1JlZG9TdGFjayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW52YXNJZCIsImlubmVyV2lkdGgiLCJwYW5kZWxXaWR0aCIsImlubmVySGVpZ2h0IiwiaGVhZGVySGVpZ2h0IiwicGFpbnRlciIsIm1vdXNlQWN0aW9uQ29udHJvbGxlciIsImtleWJvYXJkQWN0aW9uQ29udHJvbGxlciIsImtleWJvYXJkQWN0aW9uIiwiRGVhZnVsdEFuY2hvclNldHRpbmciLCJsaW5lV2lkdGgiLCJsaW5lQ29sb3IiLCJhbmNob3JSYWRpdXMiLCJEZWFmdWx0QXJyb3dTZXR0aW5nIiwiaGVhZExlbmd0aCIsIkFjdGl2ZUFycm93U2V0dGluZyIsIkRlYWZhdWx0Qm91bmRpbmdCb3hTZXR0aW5nIiwiRmlndXJlUGFpbnRlciIsImRyYXdNYXAiLCJkcmF3Q2lyY2xlIiwiZHJhd0Fycm93IiwiZHJhd1RleHRhcmVhIiwiZHJhdyIsInNldFBhdGhDYWxsYmFjayIsImNpcmNsZSIsIlBhdGgyRCIsImFyYyIsImZpbGxTdHlsZSIsImZpbGwiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImFuY2hvcnNQYXRoTGlzdCIsImFuY2hvclBvc2l0aW9uTGlzdCIsImFuY2hvclBvc2l0aW9uIiwiYW5nbGUiLCJhdGFuMiIsImxpbmUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjb3MiLCJzaW4iLCJyZWN0IiwiVGV4dFBhaW50ZXIiLCJmaWd1cmUiLCJjbGVhclJlY3QiLCJ3cml0ZSIsInNldFRleHRhcmVhQ2FsbGJhY2siLCJmb250IiwiZmlsbEluZm8iLCJfZ2V0RmlsbExpc3QiLCJmaWxsTGlzdCIsImZpbGxUZXh0IiwibWV0cmljcyIsIm1lYXN1cmVUZXh0IiwiYWN0dWFsQm91bmRpbmdCb3hBc2NlbnQiLCJhY3R1YWxCb3VuZGluZ0JveERlc2NlbnQiLCJmb250Qm91bmRpbmdCb3hBc2NlbnQiLCJmb250Qm91bmRpbmdCb3hEZXNjZW50IiwibW91c2VNb3ZlQW5jaG9yIiwiUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZSIsIm1vdmVTbGVlcGVyIiwiYWRkRWRnZUZyb21BbmNob3IiLCJkZWxldGUiLCJwYXN0ZSIsInJlZG9Db250cm9sbGVyIiwidGFzayIsInJlZG9Nb3ZlU2xlZXBlciIsInJlZG9Nb3ZlQW5jaG9yIiwicmVkb01vdmVIZWFkIiwicmVkb0RlbGV0ZUl0ZW1zIiwicmVkb1Bhc3RlIiwiY2hhbmdlTG9jYXRpb24iLCJyZWNvdmVyTG9jYXRpb24iLCJlZGdlUmVjb3ZlckxvY2F0aW9uIiwidW5kb0NvbnRyb2xsZXIiLCJ1bmRvTW92ZVNsZWVwZXIiLCJ1bmRvTW92ZUFuY2hvciIsInVuZG9Nb3ZlSGVhZCIsInVuZG9EZWxldGVJdGVtcyIsInVuZG9QYXN0ZSIsImNvbnRyb2xsZXJGdW5jdGlvbiIsIm9yaWdpbmFsSW5mbyIsImN1cnJlbnRTbGVlcGVyIiwib3JpZ2luYWxMb2NhdGlvbiIsImFkZGVkRW5kU2xlZXBlciIsInN0YWNrIiwiYWRkTXV0YXRpb25Ub1N0YWNrIiwibXV0YXRpb24iLCJ1bmRvVGFzayIsInJlZG9UYXNrIiwiRXZlbnQiLCJldmVudERpY3Rpb25hcnkiLCJjYWxsYmFjayIsImN1cnJlbnRFdmVudExpc3QiLCJjYWxsYmFja0luZGV4Iiwic2F2ZWRDYWxsYmFja0Z1bmN0aW9uIiwic3Vkb1JhbmRvbVZhcmlhYmxlIiwicmFuZG9tIiwibGluZVN0YXJ0TG9jYXRpb24iLCJsaW5lRW5kTG9jYXRpb24iLCJzbG9wZSIsImF0YW4iLCJ4TGVuZ3RoIiwiYWJzIiwiaW50ZXJjZXB0IiwibXlDYW52YXMiLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiXSwic291cmNlUm9vdCI6IiJ9