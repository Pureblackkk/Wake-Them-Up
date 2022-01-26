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
          resetSleepers = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PanelOpearationControllerEventName.resetSleepers; // Make EventName-Handler Map

      var eventNamesMap = {};
      eventNamesMap[changeAllProbability] = this.probChangeController;
      eventNamesMap[resetSleepers] = this.resetController; // Init event handler

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
  fillColor: '#F59123',
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
      _utils_event__WEBPACK_IMPORTED_MODULE_2__.Eventer.addEventListener(_global_event_name_config__WEBPACK_IMPORTED_MODULE_1__.PanelOpearationControllerEventName.createNode, this.makeNewSleeper.bind(this)); // Register for changeing sleeper and awake sleepers' style

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
     */

  }, {
    key: "makeNewSleeper",
    value: function makeNewSleeper(type) {
      // Get sleep status
      var status = !type; // Get canvas information

      var canvasInformation = !!type ? Object.assign({}, this.awakeCanvasInformation) : Object.assign({}, this.sleeperCanvasInformation); // Make new sleeper

      var tempSleeper = new _sleeper__WEBPACK_IMPORTED_MODULE_3__.Sleeper(status, canvasInformation);
      tempSleeper.probability = this.prob;
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
  changeNodeStyle: 'changeNodeStyle',
  changeAllProbability: 'changeAllProbability',
  startWakingProcess: 'startWakingProcess',
  pauseWakingProcess: 'pauseWakingProcess',
  endWakingProcess: 'endWakingProcess',
  resetSleepers: 'resetSleepers'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLEdBQUc7QUFDZCxhQUFh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QixtQkFBbUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7VUNudERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNKQTtDQUdBOztBQUNBLElBQUlxYixRQUFRLEdBQUdySCx1RUFBQSxFQUFmLEVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcHktcGFzdGUvY29weS1wYXN0ZS1ob3VzZS5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9hY3Rpb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvY29uZmlnLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL2tleWJvYXJkL2tleWJvYXJkLWFjdGlvbi1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL2tleWJvYXJkL2tleWJvYXJkLWFjdGlvbi5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9tb3VzZS9kZWVwQ2xvbmUuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvbW91c2UvbW91c2UtYWN0aW9uLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvbW91c2UvbW91c2UtYWN0aW9uLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL3BhbmVsL3BhbmVsLW9wZXJhdGlvbi1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL3dha2luZy1wcm9jZXNzL3dha2luZy1wcm9jZXNzLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9kYXRhLWxheWVyL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLXBvb2wuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9kYXRhLWxheWVyL2VkZ2UvZWRnZS5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci1wb29sLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItdGV4dC5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvdmlldy1sYXllci9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS92aWV3LWxheWVyL3BhaW50ZXIvZmlndXJlL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL3ZpZXctbGF5ZXIvcGFpbnRlci9maWd1cmUvcGFpbnRlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL3ZpZXctbGF5ZXIvcGFpbnRlci9wYWludGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvdmlldy1sYXllci9wYWludGVyL3RleHQvcGFpbnRlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvZ2xvYmFsL2dsb2JhbC1jb25maWcuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdW5kby1yZWRvL29wZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy91bmRvLXJlZG8vcmVkby1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3VuZG8tcmVkby91bmRvLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdW5kby1yZWRvL3VuZG8tZGVjb3JhdG9yLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3VuZG8tcmVkby91bmRvLXJlZG8uanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdXRpbHMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdXRpbHMvbWF0aC11dGlscy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL25vZGVfbW9kdWxlcy9sb2Rhc2guY2xvbmVkZWVwL2luZGV4LmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2VudHJ5L3Rlc3RFbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xvbmVEZWVwIGZyb20gXCJsb2Rhc2guY2xvbmVkZWVwXCI7XG5cbmNsYXNzIENvcHlQYXN0ZUhvdXNlIHtcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IENvcHlQYXN0ZUhvdXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhvdXNlID0gW107XG4gICAgICAgIENvcHlQYXN0ZUhvdXNlLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0IHBhY2thZ2Uob2JqKSB7XG4gICAgICAgIHRoaXMuaG91c2UgPSBbXTtcblxuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygb2JqKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3VzZS5wdXNoKGNsb25lRGVlcChpdGVtKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvdXNlLnB1c2goY2xvbmVEZWVwKG9iaikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBwYWNrYWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3VzZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IENvcHlQYXN0ZUhvdXNlIH07IiwiaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXBvb2wnO1xuaW1wb3J0IHsgRWRnZVBvb2xlciB9IGZyb20gJy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLXBvb2wnO1xuaW1wb3J0IHsgaXNQb2ludEluTGluZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGgtdXRpbHMnO1xuaW1wb3J0IHsgTWluaW1hbERpc3RhbmNlRm9yTG9jYXRlIH0gZnJvbSAnLi9jb25maWcnO1xuXG5jbGFzcyBBY3Rpb25VdGlscyB7XG4gICAgLyoqXG4gICAgICogRmluZCBtb3VzZSBsb2NhdGVkIG9iamVjdFxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmFzIFxuICAgICAqIEBwYXJhbSB7Kn0gbG9jYXRpb24gXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRMb2NhdGVkT2JqZWN0KGNhbnZhcywgbG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmluZEZ1bmN0aW9uc0xpc3QgPSBbXG4gICAgICAgICAgICBBY3Rpb25VdGlscy5maW5kTG9jYXRlZExpbmVPckhlYWQsXG4gICAgICAgICAgICBBY3Rpb25VdGlscy5maW5kTG9jYXRlZEFuY2hvcixcbiAgICAgICAgICAgIEFjdGlvblV0aWxzLmZpbmRMb2NhdGVkU2xlZXBlcixcbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGZpbmRGdW5jdGlvbiBvZiBmaW5kRnVuY3Rpb25zTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgZmluZFJlc3VsdCA9IGZpbmRGdW5jdGlvbihjYW52YXMsIGxvY2F0aW9uKTtcbiAgICAgICAgICAgIGlmICghIWZpbmRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluZFJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgc2xlZXBlciB3aGljaCBhdCB0aGUgbW91c2UgbG9jYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhcyBDYW52YXMgT2JqZWN0IFxuICAgICAqIEBwYXJhbSB7Kn0gbG9jYXRpb24gTW91c2UgbG9jYXRpb25cbiAgICAgKiBAcmV0dXJucyB7U2xlZXBlciB8IG51bGx9XG4gICAgICovXG4gICAgc3RhdGljIGZpbmRMb2NhdGVkU2xlZXBlcihjYW52YXMsIGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAvLyBJbm5lciBmdW5jdGlvbiB0byBjaGVjayBpZiBsb2NhdGlvbiBpbiBjaXJjbGVcbiAgICAgICAgY29uc3QgaXNMb2NhdGVkSW5DaXJjbGUgPSAoY2lyY2xlUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge3gsIHl9ID0gbG9jYXRpb247XG4gICAgICAgICAgICByZXR1cm4gY2FudmFzQ29udGV4dC5pc1BvaW50SW5QYXRoKGNpcmNsZVBhdGgsIHgsIHkpXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSGFuZGxlciBjaGVja2luZyBmdW5jdGlvbnMnIG1hcHMgXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSGFuZGxlck1hcHMgPSB7XG4gICAgICAgICAgICAnY2lyY2xlJzogaXNMb2NhdGVkSW5DaXJjbGUuYmluZCh0aGlzKSxcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEl0ZXJhdGUgcG9vbCB0byBmaW5kIGxvY2F0ZWQgcGF0aFxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IFNsZWVwZXJQb29sZXIucG9vbC5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICAgICAgICBjb25zdCBzbGVlcGVyID0gU2xlZXBlclBvb2xlci5wb29sW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNsZWVwZXJTdHlsZSA9IHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb247XG4gICAgICAgICAgICBjb25zdCBzbGVlcGVyQ2FudmFzUGF0aCA9IHNsZWVwZXIuY2FudmFzUGF0aDtcbiAgICAgICAgICAgIGNvbnN0IHsgZHJhd1R5cGUgfSA9IHNsZWVwZXJTdHlsZTtcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbkhhbmRsZXJNYXBzW2RyYXdUeXBlXShzbGVlcGVyQ2FudmFzUGF0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHNsZWVwZXIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzbGVlcGVyJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgYW5jaG9yIHdoaWNoIGF0IHRoZSBtb3VzZSBsb2NhdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmFzIENhbnZhcyBPYmplY3QgXG4gICAgICogQHBhcmFtIHsqfSBsb2NhdGlvbiBNb3VzZSBsb2NhdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kTG9jYXRlZEFuY2hvcihjYW52YXMsIGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3Qge3gsIHl9ID0gbG9jYXRpb247XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBTbGVlcGVyUG9vbGVyLnBvb2wubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICAgICAgY29uc3Qgc2xlZXBlciA9IFNsZWVwZXJQb29sZXIucG9vbFtpbmRleF07XG4gICAgICAgICAgICBpZiAoc2xlZXBlci5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2xlZXBlckFuY2hvciBvZiBzbGVlcGVyLmNhbnZhc0FuY2hvcnNQYXRoTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGFuY2hvclBhdGggfSA9IHNsZWVwZXJBbmNob3I7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXNDb250ZXh0LmlzUG9pbnRJblBhdGgoYW5jaG9yUGF0aCwgeCwgeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBbc2xlZXBlciwgc2xlZXBlckFuY2hvcl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FuY2hvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgZWRnZSB3aGljaCBhdCB0aGUgbW91c2UgbG9jYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhcyBcbiAgICAgKiBAcGFyYW0geyp9IGxvY2F0aW9uIFxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kTG9jYXRlZExpbmVPckhlYWQoY2FudmFzLCBsb2NhdGlvbikge1xuICAgICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IHt4LCB5fSA9IGxvY2F0aW9uO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IEVkZ2VQb29sZXIucG9vbC5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICAgICAgICBjb25zdCBlZGdlID0gRWRnZVBvb2xlci5wb29sW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHsgaGVhZCB9ID0gZWRnZS5jYW52YXNQYXRoO1xuICAgICAgICAgICAgaWYgKGlzUG9pbnRJbkxpbmUoZWRnZS5zdGFydExvY2F0aW9uLCBlZGdlLmVuZExvY2F0aW9uLCB4LCB5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogZWRnZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FudmFzQ29udGV4dC5pc1BvaW50SW5QYXRoKGhlYWQsIHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBlZGdlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGVhZCcsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBzbGVlcGVyIHdobyBpcyBpbiBkcmFnZ2luZyBzdGF0dXNcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZERyYWdnZWRTbGVlcGVyKCkge1xuICAgICAgICBjb25zdCBkcmFnZ2VkU2xlZXBlckxpc3QgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIGlmIChzbGVlcGVyLmlzRHJhZykge1xuICAgICAgICAgICAgICAgIGRyYWdnZWRTbGVlcGVyTGlzdC5wdXNoKHNsZWVwZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkcmFnZ2VkU2xlZXBlckxpc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhyb3R0bGVyIG1ha2VyIGZvciBsaXN0ZW5lciBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB3YWl0VGltZSBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgdGhyb3R0bGVyTWFrZXIoZm4sIHdhaXRUaW1lKSB7XG4gICAgICAgIGxldCB0aW1lciA9IG51bGw7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIGlmKCF0aW1lcikge1xuICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0sIHdhaXRUaW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgY2xvc2VzdCBzbGVlcGVyIGdpdmVuIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIHsqfSBsb2NhdGlvbiBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZENsb3Nlc3RTbGVlcGVyKGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IHt4LCB5fSA9IGxvY2F0aW9uO1xuICAgICAgICBmb3IoY29uc3Qgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsZWVwZXJYID0gc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi54O1xuICAgICAgICAgICAgY29uc3Qgc2xlZXBlclkgPSBzbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoc2xlZXBlclggLSB4KSoqMiArIChzbGVlcGVyWSAteSkqKjIpO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi5yYWRpdXMgKyBNaW5pbWFsRGlzdGFuY2VGb3JMb2NhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2xlZXBlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIGNsb3Nlc3QgYW5jaG9yIGdpdmVuIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIHsqfSBsb2NhdGlvbiBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZENsb3Nlc3RBbmNob3IobG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgbG9jYXRlZFNsZWVwZXIgPSB0aGlzLmZpbmRDbG9zZXN0U2xlZXBlcihsb2NhdGlvbik7XG4gICAgICAgIGlmICghbG9jYXRlZFNsZWVwZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2Nsb2VzdCBTbGVlcGVyJywgbG9jYXRlZFNsZWVwZXIpO1xuXG4gICAgICAgIGNvbnN0IGxvY2F0ZWRTbGVlcGVyWCA9IGxvY2F0ZWRTbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLng7XG4gICAgICAgIGNvbnN0IGxvY2F0ZWRTbGVlcGVyWSA9IGxvY2F0ZWRTbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnk7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IGxvY2F0ZWRTbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnJhZGl1cztcbiAgICAgICAgY29uc3QgYW5jaG9yTG9jYXRpb25MaXN0ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IGxvY2F0ZWRTbGVlcGVyWCAtIHJhZGl1cyxcbiAgICAgICAgICAgICAgICB5OiBsb2NhdGVkU2xlZXBlclksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IGxvY2F0ZWRTbGVlcGVyWCArIHJhZGl1cyxcbiAgICAgICAgICAgICAgICB5OiBsb2NhdGVkU2xlZXBlclksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IGxvY2F0ZWRTbGVlcGVyWCxcbiAgICAgICAgICAgICAgICB5OiBsb2NhdGVkU2xlZXBlclkgLSByYWRpdXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IGxvY2F0ZWRTbGVlcGVyWCxcbiAgICAgICAgICAgICAgICB5OiBsb2NhdGVkU2xlZXBlclkgKyByYWRpdXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIGxldCBtaW5EaXN0YW5jZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgICAgICBsZXQgbWluTG9jYXRpb24gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGFuY2hvckxvY2F0aW9uIG9mIGFuY2hvckxvY2F0aW9uTGlzdCkge1xuICAgICAgICAgICAgY29uc3Qge3gsIHl9ID0gYW5jaG9yTG9jYXRpb247XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IChsb2NhdGlvbi54IC0geCkqKjIgKyAobG9jYXRpb24ueSAtIHkpKioyO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgbWluRGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBtaW5Mb2NhdGlvbiA9IGFuY2hvckxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIG1pbkRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xvc2VzdExvY2F0aW9uOiBtaW5Mb2NhdGlvbixcbiAgICAgICAgICAgIGNsb3Nlc3RTbGVlcGVyOiBsb2NhdGVkU2xlZXBlcixcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEFjdGlvblV0aWxzIH07IiwiZXhwb3J0IGNvbnN0IG1vdXNlQWN0aW9uTW9kZSA9IHtcbiAgICBkb3duT25TbGVlcGVyOiAnZG93bk9uU2xlZXBlcicsXG4gICAgZG93bk9uQW5jaG9yOiAnZG93bk9uQW5jaG9yJyxcbiAgICBkb3duT25MaW5lOiAnZG93bk9uRWdkZScsXG4gICAgZG93bk9uSGVhZDogJ2Rvd25PbkhlYWQnLFxuICAgIGRvd25PbkJhY2tncm91bmQ6ICdkb3duT25CYWNrZ3JvdW5kJyxcbiAgICBkb3duT25Ob25lOiAnZG93bk9uTm9uZScsXG4gICAgZG93bk9uVGV4dDogJ2Rvd25PblRleHQnLFxufTtcblxuZXhwb3J0IGNvbnN0IE1pbmltYWxEaXN0YW5jZUZvckxvY2F0ZSA9IDEwOyIsImltcG9ydCB7IFxuICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBVbmRvRGVjb3JhdG9yIH0gZnJvbSAnLi4vLi4vLi4vdW5kby1yZWRvL3VuZG8tZGVjb3JhdG9yJztcbmltcG9ydCB7IENvcHlQYXN0ZUhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29weS1wYXN0ZS9jb3B5LXBhc3RlLWhvdXNlJztcbmltcG9ydCB7IFNsZWVwZXIgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlcic7XG5pbXBvcnQgeyBFZGdlIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9lZGdlL2VkZ2UnOyBcblxuXG5jbGFzcyBLZXlib2FyZEFjdGlvbkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc2VyIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAga2V5Ym9hcmREZWxldGUsXG4gICAgICAgICAgICBrZXlib2FyZElucHV0LFxuICAgICAgICAgICAga2V5Ym9hcmRUZXh0VW5kbyxcbiAgICAgICAgICAgIGtleWJvYXJkVGV4dFJlZG8sXG4gICAgICAgICAgICBrZXlib2FyZFRleHREZWxldGUsXG4gICAgICAgICAgICBrZXlib2FyZENvcHksXG4gICAgICAgICAgICBrZXlib2FyZFBhc3RlLFxuICAgICAgICB9ID0gQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZTtcblxuICAgICAgICAvLyBNYWtlIEV2ZW50TmFtZS1IYW5kbGVyIE1hcFxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmREZWxldGVdID0gVW5kb0RlY29yYXRvci5kZWxldGVJdGVtc0RlY29yYXRvcih0aGlzLmtleWJvYXJkRGVsZXRlQ29udHJvbGxlcik7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmRQYXN0ZV0gPSBVbmRvRGVjb3JhdG9yLnBhc3RlRGVjb3JhdG9yKHRoaXMua2V5Ym9hcmRQYXN0ZUNvbnRyb2xsZXIpO1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkQ29weV0gPSB0aGlzLmtleWJvYXJkQ29weUNvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmRJbnB1dF0gPSB0aGlzLmtleWJvYXJkSW5wdXRDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkVGV4dFVuZG9dID0gdGhpcy5rZXlib2FyZFRleHRVbmRvQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFtrZXlib2FyZFRleHRSZWRvXSA9IHRoaXMua2V5Ym9hcmRUZXh0UmVkb0NvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmRUZXh0RGVsZXRlXSA9IHRoaXMua2V5Ym9hcmRUZXh0RGVsZXRlQ29udHJvbGxlcjtcblxuICAgICAgICAvLyBJbml0IGV2ZW50IGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnROYW1lc01hcFtldmVudE5hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSB0aGUgc2VsZWN0ZWQgZWRnZSBvciBTbGVlcGVyXG4gICAgICogQHBhcmFtIHtFZGdlIHwgU2xlZXBlcn0gY2xpY2tPYmplY3QgXG4gICAgICovXG4gICAga2V5Ym9hcmREZWxldGVDb250cm9sbGVyKGNsaWNrT2JqZWN0KSB7XG4gICAgICAgIGNsaWNrT2JqZWN0LmRlbGV0ZVNlbGYoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnB1dCB0ZXh0IHRvIHRoZSBzbGVlcGVyXG4gICAgICogQHBhcmFtIHsqfSBzbGVlcGVyIFxuICAgICAqIEBwYXJhbSB7Kn0gaW5wdXRLZXkgc3RyaW5nXG4gICAgICovXG4gICAga2V5Ym9hcmRJbnB1dENvbnRyb2xsZXIoc2xlZXBlciwgaW5wdXRLZXkpIHtcbiAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IGAke3NsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnR9JHtpbnB1dEtleX1gO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0ZXh0XG4gICAgICAgIHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0ZW1wIHN0YWNrXG4gICAgICAgIHNsZWVwZXIudGV4dFRlbXBTdGFjay50ZXh0ID0gbmV3Q29udGVudDtcblxuICAgICAgICBjb25zb2xlLmxvZyhzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50KTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5kbyBmb3Igc2xlZXBlciBpbiB0ZXh0IG1vZGVcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXIgXG4gICAgICovXG4gICAga2V5Ym9hcmRUZXh0VW5kb0NvbnRyb2xsZXIoc2xlZXBlcikge1xuICAgICAgICBzbGVlcGVyLnRleHRUZW1wU3RhY2sudW5kbygpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHNsZWVwZXIudGV4dFRlbXBTdGFjay50ZXh0KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFVwZGF0ZVxuICAgICAgICBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50ID0gc2xlZXBlci50ZXh0VGVtcFN0YWNrLnRleHQ7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZG8gZm9yIHNsZWVwZXIgaW4gdGV4dCBtb2RlXG4gICAgICogQHBhcmFtIHsqfSBzbGVlcGVyIFxuICAgICAqL1xuICAgIGtleWJvYXJkVGV4dFJlZG9Db250cm9sbGVyKHNsZWVwZXIpIHtcbiAgICAgICAgc2xlZXBlci50ZXh0VGVtcFN0YWNrLnJlZG8oKTtcblxuICAgICAgICAvLyBVcGRhdGVcbiAgICAgICAgc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudCA9IHNsZWVwZXIudGV4dFRlbXBTdGFjay50ZXh0O1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTsgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGZvciBzbGVlcGVyIGluIHRleHQgbW9kZVxuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlciBcbiAgICAgKi9cbiAgICBrZXlib2FyZFRleHREZWxldGVDb250cm9sbGVyKHNsZWVwZXIpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nTGVuZ3RoID0gc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50LnN1YnN0cmluZygwLCBzdHJpbmdMZW5ndGggLSAxKTtcblxuICAgICAgICAvLyBVcGRhdGUgdGV4dFxuICAgICAgICBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50ID0gbmV3Q29udGVudDtcblxuICAgICAgICAvLyBVcGRhdGUgdGVtcCBzdGFja1xuICAgICAgICBzbGVlcGVyLnRleHRUZW1wU3RhY2sudGV4dCA9IG5ld0NvbnRlbnQ7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvcHkgYSBvYmplY3Qgc2VsZWN0ZWRcbiAgICAgKiBAcGFyYW0ge3NsZWVwZXIgfCBFZGdlfSBvYmplY3QgXG4gICAgICovXG4gICAga2V5Ym9hcmRDb3B5Q29udHJvbGxlcihvYmplY3QpIHtcbiAgICAgICAgQ29weVBhc3RlSG91c2UucGFja2FnZSA9IG9iamVjdDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUGFzdGUgdGhlIG9iamVjdCBzdG9yZSBpbiBjb3B5LXBhc3RlIGhvdXNlXG4gICAgICovXG4gICAga2V5Ym9hcmRQYXN0ZUNvbnRyb2xsZXIoKSB7XG4gICAgICAgIC8vIEdldCB0aGUgb2JqZWN0XG4gICAgICAgIGNvbnN0IGNvcHllZE9iamVjdExpc3QgPSBDb3B5UGFzdGVIb3VzZS5wYWNrYWdlO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBjb3B5ZWRPYmplY3RMaXN0KSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBPbmx5IHN1cHBvcnQgZm9yIHNsZWVwZXIgbm93XG4gICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIFNsZWVwZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgbm9uLXJlbGF0ZWQgZmFjdG9ycyB3aXRoaW4gc2xlZXBlclxuICAgICAgICAgICAgICAgIGl0ZW0ucHJlcGFyZUZvclBhc3RlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZWdpc3RlciBldmVudFxuICAgICAgICAgICAgICAgIGl0ZW0uaW5pdEV2ZW50SGFuZGxlcigpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIFNsZWVwZXIgaW50byBzbGVlcGVyIHBvb2xcbiAgICAgICAgICAgICAgICBpdGVtLnJlY292ZXJTZWxmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBLZXlib2FyZEFjdGlvbkNvbnRyb2xsZXIgfTsiLCJpbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyJztcbmltcG9ydCB7IFxuICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG4gICAgVW5kb1JlZG9FdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbmNsYXNzIEtleWJvYXJkQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIG1vdXNlQWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLm1vdXNlQWN0aW9uID0gbW91c2VBY3Rpb247XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuaW5pdEFjdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgYWxsIHRoZSBtb3VzZSBhY3Rpb24gbGlzdGVuZXJzXG4gICAgICovXG4gICAgaW5pdEFjdGlvbigpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uc01hcCA9IHtcbiAgICAgICAgICAgICdrZXlkb3duJzogdGhpcy5rZXlEb3duLmJpbmQodGhpcyksXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgYWN0aW9uIGluIGFjdGlvbnNNYXApIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGFjdGlvbiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNNYXBbYWN0aW9uXShldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleURvd24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgbW91c2Vkb3duIGVsZW1lbnQgaXMgc2xlZXBlciBhbmQgaW4gdGV4dCBtb2RlXG4gICAgICAgIGNvbnN0IGlzVGV4dE1vZGVPbiA9IHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCBpbnN0YW5jZW9mIFNsZWVwZXIgXG4gICAgICAgICYmIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudC5pc1RleHRNb2RlO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoKGNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAvLyBQcmVzcyBEZWxldGVcbiAgICAgICAgICAgICAgICBpc1RleHRNb2RlT24gPyB0aGlzLl9oYW5kbGVyVGV4dERlbGV0ZSgpIDogdGhpcy5faGFuZGxlckRlbGV0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5MDpcbiAgICAgICAgICAgICAgICAvLyBQcmVzcyBjdHJsICsgelxuICAgICAgICAgICAgICAgIGlmICgoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNUZXh0TW9kZU9uID8gXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUua2V5Ym9hcmRUZXh0VW5kbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS51bmRvKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBQcmVzcyBjdHJsICsgc2hmaXQgKyB6XG4gICAgICAgICAgICAgICAgaWYgKChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpICYmIGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGV4dE1vZGVPbiA/IFxuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkVGV4dFJlZG8sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUucmVkbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2NzpcbiAgICAgICAgICAgICAgICAvLyBQcmVzcyBjdHJsICsgY1xuICAgICAgICAgICAgICAgIGlmKChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpICYmICFldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICBpc1RleHRNb2RlT24gP1xuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoJ251bGwnKVxuICAgICAgICAgICAgICAgICAgICA6IEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUua2V5Ym9hcmRDb3B5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODY6XG4gICAgICAgICAgICAgICAgLy8gUHJlc3MgY3RybCArIHZcbiAgICAgICAgICAgICAgICBpZigoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNUZXh0TW9kZU9uID9cbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KCdudWxsJylcbiAgICAgICAgICAgICAgICAgICAgOiBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkUGFzdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NyB8fFxuICAgICAgICAgICAgICAgICAgICBjb2RlID49IDY1ICYmIGNvZGUgPD0gOTAgfHxcbiAgICAgICAgICAgICAgICAgICAgY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMlxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpc1RleHRNb2RlT24gJiYgdGhpcy5faGFuZGxlTm9ybWFsKGV2ZW50LmtleS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGV4dCBpbnB1dCBmb3Igc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0ga2V5IFxuICAgICAqL1xuICAgIF9oYW5kbGVOb3JtYWwoa2V5KSB7ICBcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZElucHV0LFxuICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAga2V5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3Igb2JqZWN0IGRlbGV0ZVxuICAgICAqL1xuICAgIF9oYW5kbGVyRGVsZXRlKCkge1xuICAgICAgICAvLyBJZiBjbGljayBlbGVtZW50IGV4aXN0cyBhbmQgaXMgYWN0aXZlLCB0aGVuIGRlbGV0ZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnRcbiAgICAgICAgICAgICYmIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudC5pc0FjdGl2ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkRGVsZXRlLFxuICAgICAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIHRleHQgZGVsZXRlXG4gICAgICovXG4gICAgX2hhbmRsZXJUZXh0RGVsZXRlKCkge1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkVGV4dERlbGV0ZSxcbiAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEtleWJvYXJkQWN0aW9uIH07IiwiaW1wb3J0IHsgbW91c2VBY3Rpb25Nb2RlIH0gZnJvbSAnLi4vY29uZmlnJztcblxuLy8gQ2xvbmUgdGhlIHJlbGF0ZWQgaW5mb3JtYXRpb24gYWNjb3JkaW5nIHRvIHRoZSB0eXBlIG9mIGNsYXNzXG5leHBvcnQgZnVuY3Rpb24gRGVlcENsb25lSW5mbyhtb2RlLCB0YXJnZXQpIHtcbiAgICBzd2l0Y2gobW9kZSkge1xuICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25TbGVlcGVyKTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogdGFyZ2V0LmNhbnZhc0luZm9ybWF0aW9uLngsXG4gICAgICAgICAgICAgICAgeTogdGFyZ2V0LmNhbnZhc0luZm9ybWF0aW9uLnksXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIChtb3VzZUFjdGlvbk1vZGUuZG93bk9uSGVhZCk6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IHRhcmdldC5lbmRMb2NhdGlvbi54LFxuICAgICAgICAgICAgICAgIHk6IHRhcmdldC5lbmRMb2NhdGlvbi55LFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSIsImltcG9ydCB7IFxuICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG4gICAgU2xlZXBlckV2ZW50TmFtZSxcbiAgICBQYWludGVyRXZlbnROYW1lLFxuICAgIEVkZ2VFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXBvb2wnO1xuaW1wb3J0IHsgRWRnZVBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLXBvb2wnO1xuaW1wb3J0IHsgVW5kb0RlY29yYXRvciB9IGZyb20gJy4uLy4uLy4uL3VuZG8tcmVkby91bmRvLWRlY29yYXRvcic7IFxuXG5jbGFzcyBNb3VzZUFjdGlvbkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc2VyIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbW91c2VEb3duU2xlZXBlcixcbiAgICAgICAgICAgIG1vdXNlRG93bkxpbmUsXG4gICAgICAgICAgICBtb3VzZURvd25CYWNrZ3JvdW5kLFxuICAgICAgICAgICAgbW91c2VNb3ZlU2xlZXBlcixcbiAgICAgICAgICAgIG1vdXNlTW92ZUhlYWQsXG4gICAgICAgICAgICBtb3VzZVVwU2xlZXBlcixcbiAgICAgICAgICAgIG1vdXNlVXBBbmNob3IsXG4gICAgICAgICAgICBtb3VzZVVwSGVhZCxcbiAgICAgICAgICAgIG1vdXNlRG91YmxlQ2xpY2ssXG4gICAgICAgIH0gPSBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lO1xuXG4gICAgICAgIC8vIE1ha2UgRXZlbnROYW1lLUhhbmRsZXIgTWFwXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZURvd25TbGVlcGVyXSA9IHRoaXMubW91c2VEb3duU2xlZXBlckNvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VEb3duTGluZV0gPSB0aGlzLm1vdXNlRG93bkxpbmVDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlRG93bkJhY2tncm91bmRdID0gdGhpcy5tb3VzZURvd25CYWNrZ3JvdW5kQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZU1vdmVTbGVlcGVyXSA9IHRoaXMubW91c2VNb3ZlU2xlZXBlckNvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VNb3ZlSGVhZF0gPSB0aGlzLm1vdXNlTW92ZUhlYWRDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlVXBTbGVlcGVyXSA9IFVuZG9EZWNvcmF0b3IubW91c2VVcFNsZWVwZXJEZWNvcmF0b3IodGhpcy5tb3VzZVVwU2xlZXBlckNvbnRyb2xsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VVcEFuY2hvcl0gPSBVbmRvRGVjb3JhdG9yLm1vdXNlVXBBbmNob3JEZWNvcmF0b3IodGhpcy5tb3VzZVVwQW5jaG9yQ29udHJvbGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZVVwSGVhZF0gPSBVbmRvRGVjb3JhdG9yLm1vdXNlVXBIZWFkRGVjb3JhdG9yKHRoaXMubW91c2VVcEhlYWRDb250cm9sbGVyLmJpbmQodGhpcykpO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlRG91YmxlQ2xpY2tdID0gdGhpcy5tb3VzZURvdWJsZUNsaWNrQ29udHJvbGxlcjtcblxuICAgICAgICAvLyBJbml0IGV2ZW50IGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnROYW1lc01hcFtldmVudE5hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsdGVyIHRoZSBzbGVlcGVyIHByb3BlcnRpZXMgXG4gICAgICogQHBhcmFtIHtTbGVlcGVyfSBzbGVlcGVyIFNsZWVwZXIgb2JqZWN0XG4gICAgICovXG4gICAgbW91c2VEb3duU2xlZXBlckNvbnRyb2xsZXIoc2xlZXBlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZG93bicsIHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQpO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hhbmdlIGFjdGl2ZSBzdGF0dXMgYW5kIGRyYWcgc3RhdHVzXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFNsZWVwZXJFdmVudE5hbWUuYWN0aXZlU29tZVNsZWVwZXIsXG4gICAgICAgICAgICBzbGVlcGVyXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsdGVyIHRoZSBlZGdlIHByb3BlcnRpZXNcbiAgICAgKiBAcGFyYW0geyp9IGVkZ2UgXG4gICAgICovXG4gICAgbW91c2VEb3duTGluZUNvbnRyb2xsZXIoZWRnZSkge1xuICAgICAgICAvLyBDaGFuZ2UgYWN0aXZlIGVkZ2Ugc3RhdHVzIFxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBFZGdlRXZlbnROYW1lLmFjdGl2ZVNvbWVFZGdlLFxuICAgICAgICAgICAgZWRnZSxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYW4gYWxsIHRoZSBhY3RpdmUgc3RhdHVzXG4gICAgICovXG4gICAgbW91c2VEb3duQmFja2dyb3VuZENvbnRyb2xsZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEb3duIG9uIGJhY2tncm91bmQgY29udHJvbGxlcicpO1xuICAgICAgICBmb3IgKGNvbnN0IHNsZWVwZXIgb2YgU2xlZXBlclBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICAvLyBEZWFjdGl2ZSBhbGwgdGhlIHNsZWVwZXJcbiAgICAgICAgICAgIHNsZWVwZXIuY2hhbmdlQWN0aXZlU3RhdHVzKG51bGwpO1xuXG4gICAgICAgICAgICAvLyBCYWNrIHRvIG5vcm1hbCBtb2RlXG4gICAgICAgICAgICBzbGVlcGVyLmVuZFRleHRNb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgRWRnZVBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBlZGdlLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhTbGVlcGVyUG9vbGVyLnBvb2wpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIHNsZWVwZXIgY2FudmFzIHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHsqfSBkcmFnU2xlZXBlckxpc3QgXG4gICAgICogQHBhcmFtIHsqfSByZWxhdGl2ZU1vdmVEaXN0YW5jZSBcbiAgICAgKi9cbiAgICBtb3VzZU1vdmVTbGVlcGVyQ29udHJvbGxlcihkcmFnU2xlZXBlckxpc3QsIHJlbGF0aXZlTW92ZURpc3RhbmNlKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc2xlZXBlciBvZiBkcmFnU2xlZXBlckxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpblggPSBzbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLng7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5ZID0gc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi55O1xuICAgICAgICAgICAgY29uc3QgbmV3WCA9IG9yaWdpblggKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS54O1xuICAgICAgICAgICAgY29uc3QgbmV3WSA9IG9yaWdpblkgKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS55O1xuICAgICAgICAgICAgc2xlZXBlci5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbih7XG4gICAgICAgICAgICAgICAgeDogbmV3WCxcbiAgICAgICAgICAgICAgICB5OiBuZXdZLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZWRnZSBvZiBzbGVlcGVyLmVkZ2VMaXN0KSB7XG4gICAgICAgICAgICAgICAgZWRnZS5zZXRMb2NhdGlvbignc3RhcnQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGVkZ2Uuc3RhcnRMb2NhdGlvbi54ICsgcmVsYXRpdmVNb3ZlRGlzdGFuY2UueCxcbiAgICAgICAgICAgICAgICAgICAgeTogZWRnZS5zdGFydExvY2F0aW9uLnkgKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS55LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygc2xlZXBlci5pbmNvbWluZ0VkZ2VMaXN0KSB7XG4gICAgICAgICAgICAgICAgZWRnZS5zZXRMb2NhdGlvbignZW5kJywge1xuICAgICAgICAgICAgICAgICAgICB4OiBlZGdlLmVuZExvY2F0aW9uLnggKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBlZGdlLmVuZExvY2F0aW9uLnkgKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS55LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgZWRnZSBjYW52YXMgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGRyYWdFZGdlIFxuICAgICAqIEBwYXJhbSB7Kn0gcmVsYXRpdmVNb3ZlRGlzdGFuY2UgXG4gICAgICovXG4gICAgbW91c2VNb3ZlSGVhZENvbnRyb2xsZXIoZHJhZ0VkZ2UsIGN1cnJlbnRQb3NpdGlvbikge1xuICAgICAgICBkcmFnRWRnZS5zZXRMb2NhdGlvbignZW5kJywgY3VycmVudFBvc2l0aW9uKTtcblxuICAgICAgICAvLyBEZWxldGUgdGhlIGVkZ2UgZnJvbSBlbmQgc2xlZXBlclxuICAgICAgICBpZiAoISFkcmFnRWRnZS5lbmRTbGVlcGVyKSB7XG4gICAgICAgICAgICBkcmFnRWRnZS5lbmRTbGVlcGVyLnJlbW92ZUluY29taW5nRWRnZShkcmFnRWRnZSk7XG4gICAgICAgICAgICBkcmFnRWRnZS5jaGFuZ2VFbmQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhbiBhbGwgdGhlIGRyYWcgZmxhZyB3aGVuIG1vdXNlIHVwXG4gICAgICogQHBhcmFtIHsqfSBkcmFnU2xlZXBlckxpc3QgXG4gICAgICovXG4gICAgbW91c2VVcFNsZWVwZXJDb250cm9sbGVyKGRyYWdTbGVlcGVyTGlzdCkge1xuICAgICAgICBmb3IoY29uc3Qgc2xlZXBlciBvZiBkcmFnU2xlZXBlckxpc3QpIHtcbiAgICAgICAgICAgIHNsZWVwZXIuc3dpdGNoRHJhZ1N0YXR1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgdGVtcG9yYXJ5IGVkZ2UgaW50byBzbGVlcGVyXG4gICAgICogQHBhcmFtIHsqfSBzbGVlcGVyQW5kQW5jaG9yIGNsaWNrZWQgYW5jaG9yIGFuZCBpdHMgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7RWRnZX0gZWRnZSBlZGdlIG9iamVjdFxuICAgICAqL1xuICAgIG1vdXNlVXBBbmNob3JDb250cm9sbGVyKHNsZWVwZXJBbmRBbmNob3IsIGVkZ2UsIGNsb3Nlc3RPYmplY3QpIHtcbiAgICAgICAgY29uc3QgW3NsZWVwZXIsIHNsZWVwZXJBbmNob3JdID0gc2xlZXBlckFuZEFuY2hvcjtcbiAgICAgICAgc2xlZXBlci5hZGRFZGdlKGVkZ2UpO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgZW5kIHNsZWVwZXIgaWYgY2xvZXN0T2JqZWN0IGV4aXN0ZWRcbiAgICAgICAgaWYgKCEhY2xvc2VzdE9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5tb3VzZVVwSGVhZENvbnRyb2xsZXIoZWRnZSwgY2xvc2VzdE9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaW5rIHRvIHRoZSBjbG9lc3QgYW5jaG9yIGlmIG5lZWRlZFxuICAgICAqIEBwYXJhbSB7Kn0gZWRnZSBcbiAgICAgKiBAcGFyYW0geyp9IGNsb3Nlc3RPYmplY3QgXG4gICAgICovXG4gICAgbW91c2VVcEhlYWRDb250cm9sbGVyKGVkZ2UsIGNsb3Nlc3RPYmplY3QpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY2xvc2VzdExvY2F0aW9uLFxuICAgICAgICAgICAgY2xvc2VzdFNsZWVwZXIsXG4gICAgICAgIH0gPSBjbG9zZXN0T2JqZWN0O1xuXG4gICAgICAgIC8vIFNldCBpbmNvbWluZyBlZGdlIGZvciBjdXJyZW50IHNsZWVwZXJcbiAgICAgICAgY2xvc2VzdFNsZWVwZXIuYWRkSW5jb21pbmdFZGdlKGVkZ2UpO1xuXG4gICAgICAgIC8vIFNldCBlZGdlIGxvY2F0aW9uXG4gICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oJ2VuZCcsIGNsb3Nlc3RMb2NhdGlvbik7XG5cbiAgICAgICAgLy8gU2V0IGVkZ2UgZW5kIHNsZWVwZXJcbiAgICAgICAgZWRnZS5jaGFuZ2VFbmQoY2xvc2VzdFNsZWVwZXIpO1xuXG4gICAgICAgIC8vIFNldCBlZGdlIHN0YXJ0IHNsZWVwZXIncyBjaGlsZFxuICAgICAgICBlZGdlLnN0YXJ0U2xlZXBlci5hZGRDaGlsZChjbG9zZXN0U2xlZXBlcik7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gc2xlZXBlclxuICAgICAqIFN0YXJ0IHRleHQgbW9kZSB3aGVuIGRvdWxiZSBjbGljayBvbiB0aGUgc2xlZXBlclxuICAgICAqL1xuICAgIG1vdXNlRG91YmxlQ2xpY2tDb250cm9sbGVyKHNsZWVwZXIpIHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgc3RhcnRpbmcgdGV4dCBtb2RlIGZ1bmN0aW9uIG9mIHRoYXQgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBTbGVlcGVyRXZlbnROYW1lLmFjdGl2ZVNvbWVTbGVlcGVyVGV4dE1vZGUsXG4gICAgICAgICAgICBzbGVlcGVyLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IE1vdXNlQWN0aW9uQ29udHJvbGxlciB9OyIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBEZWVwQ2xvbmVJbmZvIH0gZnJvbSAnLi9kZWVwQ2xvbmUnO1xuaW1wb3J0IHsgXG4gICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZSxcbiAgICBQYWludGVyRXZlbnROYW1lLFxuICAgIFVuZG9SZWRvRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgU2F2ZWRPcGVyYXRpb24gfSBmcm9tICcuLi8uLi8uLi91bmRvLXJlZG8vb3BlcmF0aW9uJztcbmltcG9ydCB7IEFjdGlvblV0aWxzIH0gZnJvbSAnLi4vYWN0aW9uLXV0aWxzJztcbmltcG9ydCB7IG1vdXNlQWN0aW9uTW9kZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXInO1xuaW1wb3J0IHsgRWRnZSB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlJztcblxuY2xhc3MgTW91c2VBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uWCA9IG51bGw7XG4gICAgICAgIHRoaXMubW91c2VQb3NpdGlvblkgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uTm9uZTtcbiAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAvLyBTYXZlIHRlbXBvcmFyeSB2YXJpYWJsZSBcbiAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlID0gbnVsbDtcblxuICAgICAgICAvLyBDb3B5IGZvciBkZWNvcmF0b3JcbiAgICAgICAgdGhpcy50ZW1wb3JhcnlDb3B5ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmluaXRBY3Rpb24oKTtcbiAgICB9XG4gICAgc3dpdGNoVGV4dE1vZGVcbiAgICAvKipcbiAgICAgKiBJbml0IGFsbCB0aGUgbW91c2UgYWN0aW9uIGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGluaXRBY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbnNNYXAgPSB7XG4gICAgICAgICAgICAnbW91c2Vkb3duJzogdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdtb3VzZW1vdmUnOiBBY3Rpb25VdGlscy50aHJvdHRsZXJNYWtlcih0aGlzLmhhbmRsZU1vdXNlTW92ZS5iaW5kKHRoaXMpLCAxMDAwIC8gNjApLFxuICAgICAgICAgICAgJ21vdXNldXAnOiB0aGlzLmhhbmRsZU5Nb3VzZVVwLmJpbmQodGhpcyksXG4gICAgICAgICAgICAnZGJsY2xpY2snOiB0aGlzLmhhbmRsZU1vdXNlRG91YmxlQ2xpY2suYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdjb250ZXh0bWVudSc6IHRoaXMuaGFuZGxlTW91c2VQcmV2ZW50UmlnaHRDbGljay5iaW5kKHRoaXMpLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGFjdGlvbiBpbiBhY3Rpb25zTWFwKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKGFjdGlvbiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNNYXBbYWN0aW9uXShldmVudClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TW91c2VQb3NpdGlvbih4LCB5KSB7XG4gICAgICAgIHRoaXMubW91c2VQb3NpdGlvblggPSB4O1xuICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb25ZID0geTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBVcGRhdGUgbW91c2UgcG9zaXRpb24gd2hlbiBjbGlja1xuICAgICAgICB0aGlzLnNldE1vdXNlUG9zaXRpb24obG9jYXRpb24ueCwgbG9jYXRpb24ueSk7XG5cbiAgICAgICAgLy8gRmluZCBsb2NhdGVkIG9iamVjdFxuICAgICAgICBjb25zdCBsb2NhdGVkT2JqZWN0ID0gQWN0aW9uVXRpbHMuZmluZExvY2F0ZWRPYmplY3QodGhpcy5jYW52YXMsIGxvY2F0aW9uKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnbG9jYXRlZCBvYmplY3QnLCBsb2NhdGVkT2JqZWN0KTtcblxuICAgICAgICAvLyBJZiByaWdodCBjbGlja1xuICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09IDIpIHtcbiAgICAgICAgICAgIC8vIElmIHJpZ2h0IGNsaWNrXG4gICAgICAgICAgICBsZXQgdHlwZSA9IG51bGw7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKGxvY2F0ZWRPYmplY3QpIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gbG9jYXRlZE9iamVjdC50eXBlO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxvY2F0ZWRPYmplY3QucmVzdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZVJpZ2h0Q2xpY2ssXG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBsZWZ0IGNsaWNrXG4gICAgICAgIGlmKCEhbG9jYXRlZE9iamVjdCkge1xuICAgICAgICAgICAgY29uc3Qge3R5cGUsIHJlc3VsdH0gPSBsb2NhdGVkT2JqZWN0O1xuICAgICAgICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsaW5lJzpcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZURvd25MaW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25MaW5lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uSGVhZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhbmNob3InOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uQW5jaG9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NsZWVwZXInOlxuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlRG93blNsZWVwZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gbW91c2VBY3Rpb25Nb2RlLmRvd25PblNsZWVwZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEEgY2VydGFpbiBjb3B5IG9mIG1vdXNlRG93bkVsZW1lbnQgZm9yIGluZm8gZnJvbSBvcmlnaW5hbCBub2RlXG4gICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUNvcHkgPSBEZWVwQ2xvbmVJbmZvKHRoaXMuYWN0aW9uTW9kZSwgdGhpcy5tb3VzZURvd25FbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvd24gb24gYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uQmFja2dyb3VuZDtcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZURvd25CYWNrZ3JvdW5kLFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICApXG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLmFjdGlvbk1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UobW91c2VBY3Rpb25Nb2RlLmRvd25Pbk5vbmUpOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJIb3Zlck1vdmUuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25TbGVlcGVyKTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVyRHJhZ1NsZWVwZXJNb3ZlLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZShtb3VzZUFjdGlvbk1vZGUuZG93bk9uQW5jaG9yKTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVyRHJhZ0FuY2hvck1vdmUuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25CYWNrZ3JvdW5kKTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVyRHJhZ0JhY2tncm91bmRNb3ZlLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZShtb3VzZUFjdGlvbk1vZGUuZG93bk9uSGVhZCk6XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlckRyYWdIZWFkTW92ZS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVySG92ZXJNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCxcbiAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gRmluZCBsb2NhdGVkIG9iamVjdFxuICAgICAgICBjb25zdCBsb2NhdGVkT2JqZWN0ID0gQWN0aW9uVXRpbHMuZmluZExvY2F0ZWRPYmplY3QodGhpcy5jYW52YXMsIGxvY2F0aW9uKTtcbiAgICAgICAgaWYoISFsb2NhdGVkT2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGxvY2F0ZWRPYmplY3Q7XG4gICAgICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FuY2hvcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdjcm9zc2hhaXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzbGVlcGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsaW5lJzpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0luIGxpbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkJzpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0luIEhlYWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ2FsbC1zY3JvbGwnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgfVxuXG4gICAgX2hhbmRsZXJEcmFnU2xlZXBlck1vdmUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZHJhZ1NsZWVwZXJMaXN0ID0gQWN0aW9uVXRpbHMuZmluZERyYWdnZWRTbGVlcGVyKCk7XG5cbiAgICAgICAgLy8gTm8gbm9kZSBpcyBkcmFnZ2VkXG4gICAgICAgIGlmIChkcmFnU2xlZXBlckxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxjdWxhdGUgcmVsYXRpdmUgbW92ZSBkaXN0YW5jZVxuICAgICAgICBjb25zdCByZWxhdGl2ZU1vdmVEaXN0YW5jZSA9IHtcbiAgICAgICAgICAgIHg6IGV2ZW50Lm9mZnNldFggLSB0aGlzLm1vdXNlUG9zaXRpb25YLCBcbiAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFkgLSB0aGlzLm1vdXNlUG9zaXRpb25ZLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFNhdmUgY3VycmVudCBtb3VzZSBwb3Npc3Rpb25cbiAgICAgICAgdGhpcy5zZXRNb3VzZVBvc2l0aW9uKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIGFjdGlvbiBjb250cm9sbGVyXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VNb3ZlU2xlZXBlcixcbiAgICAgICAgICAgIGRyYWdTbGVlcGVyTGlzdCxcbiAgICAgICAgICAgIHJlbGF0aXZlTW92ZURpc3RhbmNlLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9oYW5kbGVyRHJhZ0FuY2hvck1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRlbXBvcmFyeUVkZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IFtzbGVlcGVyLCBzbGVlcGVyQW5jaG9yXSA9IHRoaXMubW91c2VEb3duRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0TG9hY3Rpb24gPSBzbGVlcGVyQW5jaG9yLmxvY2F0aW9uO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIHRlbXBvcmFyeSBlZ2RlIG9iamVjdFxuICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlID0gbmV3IEVkZ2UoKTtcbiAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZS5jaGFuZ2VTdGFydChzbGVlcGVyKTtcbiAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZS5zZXRMb2NhdGlvbignc3RhcnQnLCBzdGFydExvYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aGUgZW5kIGxvY2F0aW9uXG4gICAgICAgIGNvbnN0IGVuZExvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCwgXG4gICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZS5zZXRMb2NhdGlvbignZW5kJywgZW5kTG9jYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgLy8gU2F2ZSBjdXJyZW50IG1vdXNlIHBvc2lzdGlvblxuICAgICAgICB0aGlzLnNldE1vdXNlUG9zaXRpb24oZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9oYW5kbGVyRHJhZ0hlYWRNb3ZlKGV2ZW50KSB7XG4gICAgICAgIC8vIENhbGN1bGF0ZSByZWxhdGl2ZSBtb3ZlIGRpc3RhbmNlXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQb3Npc3Rpb24gPSB7XG4gICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLCBcbiAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFksXG4gICAgICAgIH07XG5cbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZU1vdmVIZWFkLFxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgY3VycmVudFBvc2lzdGlvbixcbiAgICAgICAgKVxuICAgIH1cblxuICAgIF9oYW5kbGVyRHJhZ0JhY2tncm91bmRNb3ZlKGV2ZW50KSB7XG4gICAgICAgIC8vIFRPRE86IENyZWF0ZSBzZWxlY3Rpb24gYm94XG4gICAgfVxuXG4gICAgaGFuZGxlTk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMuYWN0aW9uTW9kZSkge1xuICAgICAgICAgICAgY2FzZSAobW91c2VBY3Rpb25Nb2RlLmRvd25PblNsZWVwZXIpOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdTbGVlcGVyTGlzdCA9IEFjdGlvblV0aWxzLmZpbmREcmFnZ2VkU2xlZXBlcigpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3VzZSB1cCcsIHRoaXMubW91c2VEb3duRWxlbWVudC5pc0RyYWcpO1xuXG4gICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlVXBTbGVlcGVyLFxuICAgICAgICAgICAgICAgICAgICBkcmFnU2xlZXBlckxpc3QsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5Q29weSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAobW91c2VBY3Rpb25Nb2RlLmRvd25PbkFuY2hvcik6XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdE9iamVjdEFuY2hvciA9IEFjdGlvblV0aWxzLmZpbmRDbG9zZXN0QW5jaG9yKHtcbiAgICAgICAgICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZVVwQW5jaG9yLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZSxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdE9iamVjdEFuY2hvcixcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKG1vdXNlQWN0aW9uTW9kZS5kb3duT25IZWFkKTpcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0T2JqZWN0SGVhZCA9IEFjdGlvblV0aWxzLmZpbmRDbG9zZXN0QW5jaG9yKHtcbiAgICAgICAgICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICghY2xvc2VzdE9iamVjdEhlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VuZCBkaXJlY3RseSB0byBVbmRvUmVkbyBzdGFjayAoTm90ZSBvbmx5IGhlYWQgaXMgc3BlaWNpYWwpXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLm1vdmVIZWFkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRW5kTG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5tb3VzZURvd25FbGVtZW50LmVuZExvY2F0aW9uLnggLSB0aGlzLnRlbXBvcmFyeUNvcHkueCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5tb3VzZURvd25FbGVtZW50LmVuZExvY2F0aW9uLnkgLSB0aGlzLnRlbXBvcmFyeUNvcHkueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZVVwSGVhZCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0T2JqZWN0SGVhZCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlDb3B5LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChtb3VzZUFjdGlvbk1vZGUuZG93bk9uQmFja2dyb3VuZCk6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCYWNrIHRvIGRlZmF1bHQgc3RhdHVzXG4gICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25Ob25lO1xuICAgICAgICB0aGlzLnRlbXBvcmFyeUNvcHkgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBjYWxsYmFjayBmb3IgZG91YmxlIGNsaWNrIG9wZXJhdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gZXZlbnQgXG4gICAgICovXG4gICAgaGFuZGxlTW91c2VEb3VibGVDbGljayhldmVudCkge1xuICAgICAgICAvLyBPbmx5IEFjdGl2ZSB3aGVuIGRvdWJsZSBjbGljayBvbiBzbGVlcGVyXG4gICAgICAgIGlmICghdGhpcy5tb3VzZURvd25FbGVtZW50IGluc3RhbmNlb2YgU2xlZXBlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBpZiB0aGUgbG9jYXRpb24gaXMgb24gdGhlIHRoYXQgc2xlZXBlclxuICAgICAgICBjb25zdCBpc0luVGhpc1NsZWVwZXIgPSB0aGlzLmNhbnZhc0NvbnRleHQuaXNQb2ludEluUGF0aChcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudC5jYW52YXNQYXRoLFxuICAgICAgICAgICAgZXZlbnQub2Zmc2V0WCxcbiAgICAgICAgICAgIGV2ZW50Lm9mZnNldFksXG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIGlmICghaXNJblRoaXNTbGVlcGVyIHx8IHRoaXMubW91c2VEb3duRWxlbWVudC5pc1RleHRNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBtb3VzZSBhY3Rpb24gbW9kZVxuICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uVGV4dDtcblxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlRG91YmxlQ2xpY2ssXG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VQcmV2ZW50UmlnaHRDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9ICAgXG59XG5cbmV4cG9ydCB7IE1vdXNlQWN0aW9uIH07IiwiaW1wb3J0IHsgXG4gICAgUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZSxcbiAgICBQYWludGVyRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFNsZWVwZXJQb29sZXIgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci1wb29sJztcbmltcG9ydCB7IFNsZWVwZXJzRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLWZhY3RvcnknO1xuXG5jbGFzcyBQYW5lbE9wZXJhdGlvbkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc2VyIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY2hhbmdlQWxsUHJvYmFiaWxpdHksXG4gICAgICAgICAgICByZXNldFNsZWVwZXJzLFxuICAgICAgICB9ID0gUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZTtcblxuICAgICAgICAvLyBNYWtlIEV2ZW50TmFtZS1IYW5kbGVyIE1hcFxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbY2hhbmdlQWxsUHJvYmFiaWxpdHldID0gdGhpcy5wcm9iQ2hhbmdlQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFtyZXNldFNsZWVwZXJzXSA9IHRoaXMucmVzZXRDb250cm9sbGVyO1xuXG4gICAgICAgIC8vIEluaXQgZXZlbnQgaGFuZGxlclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBpbiBldmVudE5hbWVzTWFwKSB7XG4gICAgICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudE5hbWVzTWFwW2V2ZW50TmFtZV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIGFsbCB0aGUgcHJvYiB3aXRoaW4gZWFjaCBzbGVlcGVyXG4gICAgICogQHBhcmFtIHsqfSBwcm9iIFxuICAgICAqL1xuICAgIHByb2JDaGFuZ2VDb250cm9sbGVyKHByb2IpIHtcbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBmYWN0b3J5XG4gICAgICAgIFNsZWVwZXJzRmFjdG9yeS5jaGFuZ2VQcm9iYWJpbGl0eShwcm9iKTtcblxuICAgICAgICAvLyBDaGFuZ2UgdGhlIHNsZWVwZXJcbiAgICAgICAgZm9yKGNvbnN0IHNsZWVwZXIgb2YgU2xlZXBlclBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBzbGVlcGVyLnByb2JhYmlsaXR5ID0gcHJvYjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IGFsbCB0aGUgc2xlZXBlciBzdGF0dXNcbiAgICAgKi9cbiAgICByZXNldENvbnRyb2xsZXIoKSB7XG4gICAgICAgIGZvcihjb25zdCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgaWYgKHNsZWVwZXIuaXNTbGVlcGluZyAhPT0gc2xlZXBlci5iZWZvcmVQcm9jZXNzSXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHNsZWVwZXIuY2hhbmdlU2xlZXBpbmdTdGF0dXMoc2xlZXBlci5iZWZvcmVQcm9jZXNzSXNTbGVlcGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IFBhbmVsT3BlcmF0aW9uQ29udHJvbGxlciB9OyIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBTbGVlcGVyUG9vbGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItcG9vbCc7XG5pbXBvcnQge1xuICAgIFBhaW50ZXJFdmVudE5hbWUsXG4gICAgUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcblxuY2xhc3MgV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJvdW5kTnVtID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZVRpbWUgPSA3MDA7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVmcmVzaEludGVydmFsSWQgPSBudWxsO1xuICAgICAgICB0aGlzLmF3YWtlUXVldWUgPSBudWxsO1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc2VyIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgc3RhcnRXYWtpbmdQcm9jZXNzLFxuICAgICAgICAgICAgcGF1c2VXYWtpbmdQcm9jZXNzLFxuICAgICAgICB9ID0gUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZTtcblxuICAgICAgICAvLyBNYWtlIEV2ZW50TmFtZS1IYW5kbGVyIE1hcFxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbc3RhcnRXYWtpbmdQcm9jZXNzXSA9IHRoaXMuc3RhcnRXYWtpbmdQcm9jZXNzQ29udHJvbGxlci5iaW5kKHRoaXMpO1xuICAgICAgICBldmVudE5hbWVzTWFwW3BhdXNlV2FraW5nUHJvY2Vzc10gPSB0aGlzLnBhdXNlV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIuYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBJbml0IGV2ZW50IGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnROYW1lc01hcFtldmVudE5hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRBd2FrZVF1ZXVlKCkge1xuICAgICAgICBjb25zdCB0ZW1wUXVldWUgPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IHNsZWVwZXIgb2YgU2xlZXBlclBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBpZiAoIXNsZWVwZXIuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHRlbXBRdWV1ZS5wdXNoKHNsZWVwZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hd2FrZVF1ZXVlID0gdGVtcFF1ZXVlO1xuICAgIH1cbiAgICBcbiAgICBzdGFydFdha2luZ1Byb2Nlc3NDb250cm9sbGVyKCkge1xuICAgICAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0QXdha2VRdWV1ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBhd2FrZSBxdWV1ZTEnLCB0aGlzLmF3YWtlUXVldWUpO1xuXG4gICAgICAgIC8vIFNldCBpbnRlcnZhbFxuICAgICAgICB0aGlzLnJlZnJlc2hJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXdha2VRdWV1ZS5sZW5ndGggPiAwICYmICF0aGlzLmlzUGF1c2UpIHtcbiAgICAgICAgICAgICAgICAvLyBHbyBOZXh0IFJvdW5kXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzbGVlcGVyIG9mIHRoaXMuYXdha2VRdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdBY3RpdmVkU2xlZXBlciA9IHNsZWVwZXIuYWN0aXZlQ2hpbGQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hd2FrZVF1ZXVlID0gWy4uLnRoaXMuYXdha2VRdWV1ZSwgLi4ubmV3QWN0aXZlZFNsZWVwZXJdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF3YWtlUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgcm91bmQgbnVtYmVyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3VuZE51bSArPSAxO1xuXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hd2FrZVF1ZXVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUuZW5kV2FraW5nUHJvY2Vzc1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENsZWFyIGludGVydmFsXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnJlZnJlc2hJbnRlcnZhbElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5mcmFtZVRpbWUpO1xuICAgIH1cblxuICAgIHBhdXNlV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XG4gICAgfVxuXG4gICAgXG59XG5cbmV4cG9ydCB7IFdha2luZ1Byb2Nlc3NDb250cm9sbGVyIH07IiwiZXhwb3J0IGNvbnN0IERlZmF1bHRFZGdlV2VpZ2h0ID0gMC41O1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdFNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbiA9IHtcbiAgICBkcmF3VHlwZTogJ2NpcmNsZScsXG4gICAgeDogNTAwLFxuICAgIHk6IDUwMCxcbiAgICByYWRpdXM6IDMwLFxuICAgIHN0YXJ0QW5nbGU6IDAsXG4gICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuICAgIGlzRmlsbGVkOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyNDQUM5Q0MnLFxuICAgIGlzQm9yZGVyOiB0cnVlLFxuICAgIGJvcmRlcldpdGg6IDIsXG4gICAgYm9yZGVyQ29sb3I6ICcjMDAwMDAwJyxcbiAgICBpc0FuY2hvcjogZmFsc2UsXG4gICAgYWN0aXZlQm9yZGVyQ29sb3I6ICcjMDA2OEZGJyxcbn07XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0QXdha2VDYW52YXNJbmZvcm1hdGlvbiA9IHtcbiAgICBkcmF3VHlwZTogJ2NpcmNsZScsXG4gICAgeDogNTAwLFxuICAgIHk6IDUwMCxcbiAgICByYWRpdXM6IDMwLFxuICAgIHN0YXJ0QW5nbGU6IDAsXG4gICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuICAgIGlzRmlsbGVkOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyNGNTkxMjMnLFxuICAgIGlzQm9yZGVyOiB0cnVlLFxuICAgIGJvcmRlcldpdGg6IDIsXG4gICAgYm9yZGVyQ29sb3I6ICcjMDAwMDAwJyxcbiAgICBpc0FuY2hvcjogZmFsc2UsXG4gICAgYWN0aXZlQm9yZGVyQ29sb3I6ICcjMDA2OEZGJyxcbn07IiwiaW1wb3J0IHsgRWRnZVBvb2xFdmVudE5hbWUgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcblxuY2xhc3MgRWRnZVBvb2wge1xuICAgIC8qKlxuICAgICAqIEdldCBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgU2xlZXBlclBvb2xcbiAgICAgKiBAcmV0dXJucyB7RWRnZVBvb2x9XG4gICAgICovXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBFZGdlUG9vbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghRWRnZVBvb2wuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9vbCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmluaXRFdmVudHNIYW5kbGVyKCk7XG4gICAgICAgICAgICBFZGdlUG9vbC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gRWRnZVBvb2wuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciByZWxhdGVkIHRvIFNsZWVwZXIgUG9vbFxuICAgICAqL1xuICAgIGluaXRFdmVudHNIYW5kbGVyKCkge1xuICAgICAgICAvLyBSZWdpc3RlciBhZGRpbmcgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBFZGdlUG9vbEV2ZW50TmFtZS5hZGRFZGdlLCBcbiAgICAgICAgICAgIHRoaXMuYWRkRWRnZS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgc2xlZXBlciBvYmplY3QgaW50byBlZGdlIHBvb2xcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IHNsZWVwZXIgXG4gICAgICovXG4gICAgYWRkRWRnZShlZGdlKSB7XG4gICAgICAgIHRoaXMucG9vbC5wdXNoKGVkZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbiBlZGdlIGZyb20gZWRnZSBwb29sXG4gICAgICogQHBhcmFtIHsqfSBlZGdlIFxuICAgICAqL1xuICAgIHJlbW92ZUVkZ2UoZWRnZSkge1xuICAgICAgICBjb25zdCBsb2NhdGVkSW5kZXggPSB0aGlzLnBvb2wuZmluZEluZGV4KGVkZ2VJblBvb2wgPT4gZWRnZUluUG9vbCA9PT0gZWRnZSk7XG4gICAgICAgIGlmIChsb2NhdGVkSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2wuc3BsaWNlKGxvY2F0ZWRJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBFZGdlUG9vbGVyID0gRWRnZVBvb2wuZ2V0SW5zdGFuY2UoKTsiLCJpbXBvcnQgeyBEZWZhdWx0RWRnZVdlaWdodCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgXG4gICAgRWRnZVBvb2xFdmVudE5hbWUsIFxuICAgIEVkZ2VFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vc2xlZXBlci9zbGVlcGVyJztcbmltcG9ydCB7IEVkZ2VQb29sZXIgfSBmcm9tICcuL2VkZ2UtcG9vbCc7XG5cbmNsYXNzIEVkZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBEYXRhIGluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbmRTbGVlcGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy53ZWlnaHQgPSBudWxsO1xuXG4gICAgICAgIC8vIENhbnZhcyBwYXRoIGluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMuc3RhcnRMb2NhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZW5kTG9jYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmNhbnZhc1BhdGggPSBudWxsO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gSW5pdCBldmVudFxuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIEV2ZW50XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChFZGdlUG9vbEV2ZW50TmFtZS5hZGRFZGdlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlU29tZUVkZ2UsXG4gICAgICAgIH0gPSBFZGdlRXZlbnROYW1lO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFthY3RpdmVTb21lRWRnZV0gPSB0aGlzLmFjdGl2ZVNvbWVFZGdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgYWN0aXZlIHNvbWUgbm9kZSBoYW5kbGVyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnQgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudE5hbWVzTWFwW2V2ZW50XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHN0YXJ0IHNsZWVwZXIgb2JqZWN0XG4gICAgICogQHJldHVybnMge1NsZWVwZXJ9IFxuICAgICAqL1xuICAgIGdldFN0YXJ0U2xlZXBlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRTbGVlcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZW5kIHNsZWVwZXIgb2JqZWN0XG4gICAgICogQHJldHVybnMge1NsZWVwZXJ9IFxuICAgICAqL1xuICAgIGdldEVuZFNsZWVwZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZFNsZWVwZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB3ZWlnaHQgb24gdGhpcyBlZGdlXG4gICAgICogQHJldHVybnMge2Zsb2F0fVxuICAgICAqL1xuICAgIGdldFdlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2VpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgd2VpZ2h0IHRvIHRoZSBnaXZlbiB2YWx1ZVxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IG5ld1dlaWdodCBcbiAgICAgKi9cbiAgICBjaGFuZ2VXZWlnaHQobmV3V2VpZ2h0KSB7XG4gICAgICAgIHRoaXMud2VpZ2h0ID0gbmV3V2VpZ2h0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIHN0YXJ0IHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IG5ld1NsZWVwZXIgXG4gICAgICovXG4gICAgY2hhbmdlU3RhcnQobmV3U2xlZXBlcikge1xuICAgICAgICB0aGlzLnN0YXJ0U2xlZXBlciA9IG5ld1NsZWVwZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBlbmQgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gbmV3U2xlZXBlciBcbiAgICAgKi9cbiAgICBjaGFuZ2VFbmQobmV3U2xlZXBlcikge1xuICAgICAgICB0aGlzLmVuZFNsZWVwZXIgPSBuZXdTbGVlcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBzdGFydCBhbmQgZW5kIGxvY2F0aW9uXG4gICAgICovXG4gICAgc2V0TG9jYXRpb24odHlwZSwgbG9jYXRpb24pIHtcbiAgICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0TG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjYW52YXMgcGF0aFxuICAgICAqL1xuICAgIHNldENhbnZhc1BhdGgoZWRnZVBhdGgpIHtcbiAgICAgICAgdGhpcy5jYW52YXNQYXRoID0gZWRnZVBhdGg7XG4gICAgfVxuXG4gICAgYWN0aXZlU29tZUVkZ2UoZWRnZSkge1xuICAgICAgICBpZiAoZWRnZSA9PT0gdGhpcyAmJiB0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FjdGl2ZSAmJiBlZGdlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVTZWxmKCkge1xuICAgICAgICBFZGdlUG9vbGVyLnJlbW92ZUVkZ2UodGhpcyk7XG4gICAgICAgIC8vIERlbGV0ZSBpdCBpbiBzdGFydCBzbGVlcGVyXG4gICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyLnJlbW92ZUVkZ2UodGhpcyk7XG5cbiAgICAgICAgLy8gRGVsZXRlIGl0IGluIGVuZCBzbGVlcGVyXG4gICAgICAgIGlmICghIXRoaXMuZW5kU2xlZXBlcikge1xuICAgICAgICAgICAgdGhpcy5lbmRTbGVlcGVyLnJlbW92ZUluY29taW5nRWRnZSh0aGlzKTtcblxuICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSBjaGlsZCBvZiBzdGFydCBzbGVlcGVyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2xlZXBlci5yZW1vdmVDaGlsZCh0aGlzLmVuZFNsZWVwZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjb3ZlclNlbGYoKSB7XG4gICAgICAgIEVkZ2VQb29sZXIuYWRkRWRnZSh0aGlzKTtcbiAgICAgICAgLy8gUmVjb3ZlciBpdCBpbiBzdGFydCBzbGVlcGVyXG4gICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyLmFkZEVkZ2UodGhpcyk7XG5cbiAgICAgICAgLy8gUmVjb3ZlciBpdCBpbiBlbmQgc2xlZXBlclxuICAgICAgICBpZiAoISF0aGlzLmVuZFNsZWVwZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kU2xlZXBlci5hZGRJbmNvbWluZ0VkZ2UodGhpcyk7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgY2hpbGQgb2Ygc3RhcnQgc2xlZXBlclxuICAgICAgICAgICAgdGhpcy5zdGFydFNsZWVwZXIuYWRkQ2hpbGQodGhpcy5lbmRTbGVlcGVyKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBFZGdlIH07IiwiaW1wb3J0IHsgXG4gICAgRGVmYXVsdFNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbixcbiAgICBEZWZhdWx0QXdha2VDYW52YXNJbmZvcm1hdGlvbixcbiAgICBEZWZhdWx0QWN0aXZlSW5mb3JtYXRpb24sXG59IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBcbiAgICBQYWludGVyRXZlbnROYW1lLFxuICAgIFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4vc2xlZXBlcic7XG5pbXBvcnQgeyBTbGVlcGVyUG9vbGVyIH0gZnJvbSAnLi9zbGVlcGVyLXBvb2wnO1xuXG5jbGFzcyBTbGVlcGVyRmFjdG9yeSB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU2xlZXBlckZhY3RvcnkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdW50IGNhbnZhcyB3aGVuIGluaXRpYWxpemUsIG11c3QgbW91bnQgYmVmb3JlIGl0IGNhbiBiZSB1c2VkICEhIVxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmFzT2JqIFxuICAgICAqL1xuICAgIG1vdW50Q2FudmFzKGNhbnZhc09iaikge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc09iajtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFTbGVlcGVyRmFjdG9yeS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgLy8gSW5pdGlhbCBwYXJhbXNcbiAgICAgICAgICAgIHRoaXMuc2xlZXBlckNhbnZhc0luZm9ybWF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdFNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbik7XG4gICAgICAgICAgICB0aGlzLmF3YWtlQ2FudmFzSW5mb3JtYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0QXdha2VDYW52YXNJbmZvcm1hdGlvbik7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZm9ybWF0aW9uID0gRGVmYXVsdEFjdGl2ZUluZm9ybWF0aW9uO1xuICAgICAgICAgICAgdGhpcy5wcm9iID0gMC4wO1xuXG4gICAgICAgICAgICB0aGlzLmluaXRFdmVudHNIYW5kbGVyKCk7XG4gICAgICAgICAgICBTbGVlcGVyRmFjdG9yeS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xlZXBlckZhY3RvcnkuaW5zdGFuY2U7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBTbGVlcGVyIFBvb2xcbiAgICAgKi9cbiAgICBpbml0RXZlbnRzSGFuZGxlcigpIHtcbiAgICAgICAgLy8gUmVnaXN0ZXIgZm9yIG1ha2luZyBuZXcgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lLmNyZWF0ZU5vZGUsXG4gICAgICAgICAgICB0aGlzLm1ha2VOZXdTbGVlcGVyLmJpbmQodGhpcylcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBSZWdpc3RlciBmb3IgY2hhbmdlaW5nIHNsZWVwZXIgYW5kIGF3YWtlIHNsZWVwZXJzJyBzdHlsZVxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lLmNoYW5nZU5vZGVTdHlsZSxcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBzbGVlcGVyIGFuZCBhd2FrZSBzbGVlcGVycycgY2FudmFzIGluZm9ybWF0aW9uXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHR5cGUgMCBmb3Igc2xlZXBlciwgMSBmb3IgYXdha2Ugc2xlZXBlclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wZXJ0eU9iamVjdCBvYmplY3QgZm9yIGNoYW5nZVxuICAgICAqL1xuICAgIGNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHR5cGUsIHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgIGxldCBmb3JDaGFuZ2VkSW5mb3JtYXRpb24gPSAhIXR5cGUgPyB0aGlzLmF3YWtlQ2FudmFzSW5mb3JtYXRpb24gOiB0aGlzLnNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbjtcblxuICAgICAgICAvLyBJdGVyYXRlIHRoZSBhbGVyYXRpb24gYW5kIHVwZGF0ZVxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHByb3BlcnR5T2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgIGlmIChmb3JDaGFuZ2VkSW5mb3JtYXRpb25bcHJvcGVydHldICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGZvckNoYW5nZWRJbmZvcm1hdGlvbltwcm9wZXJ0eV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlIGNhbnZhcyBJbmZvcm1hdGlvblxuICAgICAgICBmb3IgKGxldCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgLy8gT25seSBjaGFuZ2UgY29ycmVzcG9uZGluZyBub2RlcyBcbiAgICAgICAgICAgIGlmICgoISF0eXBlKSBeIHNsZWVwZXIuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHNsZWVwZXIuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IGZvckNoYW5nZWRJbmZvcm1hdGlvbi5maWxsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBmb3JDaGFuZ2VkSW5mb3JtYXRpb24uYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhbnZhcyBpbmZvcm1hdGlvblxuICAgICAqIEBwYXJhbSB7aW50fSB0eXBlIDAgZm9yIHNsZWVwZXIsIDEgZm9yIGF3YWtlIHNsZWVwZXJcbiAgICAgKi9cbiAgICBnZXRDYW52YXNJbmZvcm1hdGlvbih0eXBlKSB7XG4gICAgICAgIHJldHVybiAhIXR5cGUgPyB0aGlzLmF3YWtlQ2FudmFzSW5mb3JtYXRpb24gOiB0aGlzLnNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgY29uZmlnIHByb2JhYmlsaXR5IHRvIGF3YWtlIG90aGVyIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IHR5cGUgXG4gICAgICovXG4gICAgY2hhbmdlUHJvYmFiaWxpdHkocHJvYikge1xuICAgICAgICB0aGlzLnByb2IgPSBwcm9iO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2UgbmV3IHNsZWVwZXIgdG8gc2xlZXBlciBwb29sXG4gICAgICogQHBhcmFtIHtpbnR9IHR5cGUgMCBmb3Igc2xlZXBlciwgMSBmb3IgYXdha2Ugc2xlZXBlclxuICAgICAqL1xuICAgIG1ha2VOZXdTbGVlcGVyKHR5cGUpIHtcbiAgICAgICAgLy8gR2V0IHNsZWVwIHN0YXR1c1xuICAgICAgICBjb25zdCBzdGF0dXMgPSAhdHlwZTtcblxuICAgICAgICAvLyBHZXQgY2FudmFzIGluZm9ybWF0aW9uXG4gICAgICAgIGNvbnN0IGNhbnZhc0luZm9ybWF0aW9uID0gISF0eXBlID8gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hd2FrZUNhbnZhc0luZm9ybWF0aW9uKSA6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2xlZXBlckNhbnZhc0luZm9ybWF0aW9uKTtcblxuICAgICAgICAvLyBNYWtlIG5ldyBzbGVlcGVyXG4gICAgICAgIGNvbnN0IHRlbXBTbGVlcGVyID0gbmV3IFNsZWVwZXIoXG4gICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICBjYW52YXNJbmZvcm1hdGlvbixcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRlbXBTbGVlcGVyLnByb2JhYmlsaXR5ID0gdGhpcy5wcm9iO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFNsZWVwZXJzRmFjdG9yeSA9IFNsZWVwZXJGYWN0b3J5LmdldEluc3RhbmNlKCk7XG5cbiIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBcbiAgICBTbGVlcGVyUG9vbEV2ZW50TmFtZSxcbiAgICBTbGVlcGVyRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuXG5jbGFzcyBTbGVlcGVyUG9vbCB7XG4gICAgLyoqXG4gICAgICogR2V0IHNpbmdsZXRvbiBpbnN0YW5jZSBvZiBTbGVlcGVyUG9vbFxuICAgICAqIEByZXR1cm5zIHtTbGVlcGVyUG9vbH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFNsZWVwZXJQb29sKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFTbGVlcGVyUG9vbC5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5wb29sID0gW107XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaW5pdEV2ZW50c0hhbmRsZXIoKTtcbiAgICAgICAgICAgIFNsZWVwZXJQb29sLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTbGVlcGVyUG9vbC5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBldmVudCBoYW5kbGVyIHJlbGF0ZWQgdG8gU2xlZXBlciBQb29sXG4gICAgICovXG4gICAgaW5pdEV2ZW50c0hhbmRsZXIoKSB7XG4gICAgICAgIC8vIFJlZ2lzdGVyIGFkZGluZyBzbGVlcGVyXG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFNsZWVwZXJQb29sRXZlbnROYW1lLmFkZFNsZWVwZXIsIFxuICAgICAgICAgICAgdGhpcy5hZGRTbGVlcGVyLmJpbmQodGhpcylcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBSZWdpc3RlciBhY3RpdmUgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBTbGVlcGVyRXZlbnROYW1lLmFjdGl2ZVNvbWVTbGVlcGVyLFxuICAgICAgICAgICAgdGhpcy5yZU9yZGVyU2xlZXBlci5iaW5kKHRoaXMpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBzbGVlcGVyIG9iamVjdCBpbnRvIHNsZWVwZXIgcG9vbFxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gc2xlZXBlciBcbiAgICAgKi9cbiAgICBhZGRTbGVlcGVyKHNsZWVwZXIpIHtcbiAgICAgICAgdGhpcy5wb29sLnB1c2goc2xlZXBlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgZ2l2ZW4gc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlciBcbiAgICAgKi9cbiAgICByZW1vdmVTbGVlcGVyKHNsZWVwZXIpIHtcbiAgICAgICAgY29uc3QgbG9jYXRlZEluZGV4ID0gdGhpcy5wb29sLmZpbmRJbmRleChzbGVlcGVySW5Qb29sID0+IHNsZWVwZXJJblBvb2wgPT09IHNsZWVwZXIpO1xuICAgICAgICBpZiAobG9jYXRlZEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wb29sLnNwbGljZShsb2NhdGVkSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVPcmRlclNsZWVwZXIoc2xlZXBlcikge1xuICAgICAgICBjb25zdCBzbGVlcGVySW5kZXggPSB0aGlzLnBvb2wuZmluZEluZGV4KHNsZWVwZXJJblBvb2wgPT4gc2xlZXBlckluUG9vbCAgPT09IHNsZWVwZXIpO1xuICAgICAgICB0aGlzLnBvb2wuc3BsaWNlKHNsZWVwZXJJbmRleCwgMSk7XG4gICAgICAgIHRoaXMucG9vbCA9IFsuLi50aGlzLnBvb2wsIHNsZWVwZXJdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFNsZWVwZXJQb29sZXIgPSBTbGVlcGVyUG9vbC5nZXRJbnN0YW5jZSgpOyIsImltcG9ydCB7IFxuICAgIFBhaW50ZXJFdmVudE5hbWUsXG4gICAgU2xlZXBlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZXZlbnRcIjtcblxuY2xhc3MgVGV4dFNsZWVwZXJUZW1wU3RhY2sge1xuICAgIGNvbnN0cnVjdG9yKG9yaWdpblRleHQpIHtcbiAgICAgICAgdGhpcy5wb2ludGVyID0gMDtcbiAgICAgICAgdGhpcy5zdGFja0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5zdGFja0xpc3QucHVzaChvcmlnaW5UZXh0KTtcbiAgICB9XG5cbiAgICBnZXQgdGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tMaXN0W3RoaXMucG9pbnRlcl07XG4gICAgfVxuXG4gICAgc2V0IHRleHQodmFsKSB7XG4gICAgICAgIHRoaXMucG9pbnRlciArPSAxO1xuICAgICAgICB0aGlzLnN0YWNrTGlzdC5wdXNoKHZhbCk7XG4gICAgfVxuXG4gICAgdW5kbygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9pbnRlciA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnRlciAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVkbygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9pbnRlciA8IHRoaXMuc3RhY2tMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnRlciArPSAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNsYXNzIFRleHRTbGVlcGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc1RleHRNb2RlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2V0IGZvciBkZWZhdWx0IHRleHQgY29uZmlnXG4gICAgICAgIHRoaXMudGV4dEluZm9ybWF0aW9uID0ge1xuICAgICAgICAgICAgc2l6ZTogMTUsXG4gICAgICAgICAgICBzdHlsZTogJ1RpbWVzIE5ldyBSb21hbicsXG4gICAgICAgICAgICBjb250ZW50OiAnYScsXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGV4dGFyZWFJbmZvcm1hdGlvbiA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudGV4dGFyZWFCb3VuZGluZ0JveFBhdGggPSBudWxsO1xuXG4gICAgICAgIC8vIFJlaWdpc3RlciBmb3IgdGV4dCB0ZW1wIHN0YWNrXG4gICAgICAgIHRoaXMudGV4dFRlbXBTdGFjayA9IG51bGw7XG5cbiAgICAgICAgdGhpcy50ZXh0SW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIHRleHRJbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlU29tZVNsZWVwZXJUZXh0TW9kZSxcbiAgICAgICAgfSA9IFNsZWVwZXJFdmVudE5hbWU7XG5cbiAgICAgICAgY29uc3QgZXZlbnROYW1lc01hcCA9IHt9O1xuICAgICAgICBldmVudE5hbWVzTWFwW2FjdGl2ZVNvbWVTbGVlcGVyVGV4dE1vZGVdID0gdGhpcy5zdGFydFRleHRNb2RlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgYWN0aXZlIHNvbWUgbm9kZSBoYW5kbGVyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnQgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudE5hbWVzTWFwW2V2ZW50XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzdGFydCB0aGUgdGV4dCBtb2RlXG4gICAgICovXG4gICAgc3RhcnRUZXh0TW9kZShzbGVlcGVyKSB7XG4gICAgICAgIGlmIChzbGVlcGVyID09IHRoaXMgJiYgdGhpcy5pc1RleHRNb2RlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5pc1RleHRNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGV4dFRlbXBTdGFjayA9IG5ldyBUZXh0U2xlZXBlclRlbXBTdGFjayh0aGlzLnRleHRJbmZvcm1hdGlvbi5jb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzVGV4dE1vZGUgJiYgc2xlZXBlciAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5pc1RleHRNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRleHRUZW1wU3RhY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZW5kIHRoZSB0ZXh0IG1vZGVcbiAgICAgKi9cbiAgICBlbmRUZXh0TW9kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUZXh0TW9kZSkge1xuICAgICAgICAgICAgdGhpcy5pc1RleHRNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRleHRUZW1wU3RhY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgdGV4dCBcbiAgICAgKi9cbiAgICBkcmF3VGV4dCgpIHtcbiAgICAgICAgLy8gR2V0IHNsZWVwZXIgY2VudGVyXG4gICAgICAgIGNvbnN0IHRleHRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzSW5mb3JtYXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzSW5mb3JtYXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBHZXQgbWF4IHdpZHRoXG4gICAgICAgIGNvbnN0IHRleHRNYXhXaWR0aCA9IHRoaXMuY2FudmFzSW5mb3JtYXRpb24ucmFkaXVzICogTWF0aC5zcXJ0KDMpO1xuICAgICAgICBcbiAgICAgICAgLy8gRHJhdyB0aGUgdGV4dFxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnRleHRXcml0ZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGV4dFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiB0ZXh0TWF4V2lkdGgsXG4gICAgICAgICAgICAgICAgaW5mb3JtYXRpb246IHRoaXMudGV4dEluZm9ybWF0aW9uLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dE9yVGV4dGFyZWFJbmZvcm1hdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIHRleHRlcmFcbiAgICAgKi9cbiAgICBkcmF3VGV4dEFyZWEoKSB7XG4gICAgICAgIC8vIE9ubHkgZHJhdyBpdCB3aGVuIHRleHRtb2RlIGlzIG9uXG4gICAgICAgIGlmICghdGhpcy5pc1RleHRNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgU2xlZXBlciBjZW50ZXJcbiAgICAgICAgY29uc3Qgc2xlZXBlclBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jYW52YXNJbmZvcm1hdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXNJbmZvcm1hdGlvbi55LFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIERyYXcgdGhlIHRleHRcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNsZWVwZXJQb3NpdGlvbixcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uOiB0aGlzLnRleHRhcmVhSW5mb3JtYXRpb24sXG4gICAgICAgICAgICAgICAgZHJhd1R5cGU6ICd0ZXh0YXJlYScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5fc2V0VGV4dGFyZWFQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRleHQgLyB0ZXh0YXJlYSBpbmZvcm1hdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gcHJvcGVydHlPYmplY3QgXG4gICAgICogQHBhcmFtIHsqfSB0eXBlIFxuICAgICAqL1xuICAgIHNldFRleHRPclRleHRhcmVhSW5mb3JtYXRpb24ocHJvcGVydHlPYmplY3QsIHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgIT09ICd0ZXh0JyAmJiB0eXBlICE9PSAndGV4dGFyZWEnKSB7XG4gICAgICAgICAgICBFcnJvcignV3JvbmcgdHlwZSB3aGVuIHNldHRpbmcgdGV4dCAvIHRleHRhcmUgaW5mb3JtYXRpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvclNldE9iamVjdCA9ICh0eXBlID09ICd0ZXh0JykgPyB0aGlzLnRleHRJbmZvcm1hdGlvbiA6IHRoaXMudGV4dGFyZWFJbmZvcm1hdGlvbjtcblxuICAgICAgICAvLyBJdGVyYXRlIHRoZSBhbGVyYXRpb24gYW5kIHVwZGF0ZVxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHByb3BlcnR5T2JqZWN0W3Byb3BlcnR5XTtcblxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICYmIGZvclNldE9iamVjdFtwcm9wZXJ0eV0gIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZm9yU2V0T2JqZWN0W3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRHJhdyB0ZXh0IGFyZWEgd2hlbiBcbiAgICAgICAgaWYgKHR5cGUgPT0gJ3RleHRhcmVhJykge1xuICAgICAgICAgICAgdGhpcy5kcmF3VGV4dEFyZWEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBib3VuZGluZyBib3ggcGF0aFxuICAgICAqIEBwYXJhbSB7Kn0gYm91bmRpbmdCb3hQYXRoIFxuICAgICAqL1xuICAgIF9zZXRUZXh0YXJlYVBhdGgoYm91bmRpbmdCb3hQYXRoKSB7XG4gICAgICAgIHRoaXMudGV4dGFyZWFCb3VuZGluZ0JveFBhdGggPSBib3VuZGluZ0JveFBhdGg7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUZXh0U2xlZXBlciB9OyIsImltcG9ydCB7IEVkZ2UgfSBmcm9tICcuLi9lZGdlL2VkZ2UnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IGdldEFjdGl2aXR5QnlXZWlnaHQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9tYXRoLXV0aWxzJztcbmltcG9ydCB7IFxuICAgIERlZmF1bHRTbGVlcGVyQ2FudmFzSW5mb3JtYXRpb24sXG4gICAgRGVmYXVsdEFjdGl2ZUluZm9ybWF0aW9uLFxufSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgXG4gICAgU2xlZXBlckV2ZW50TmFtZSxcbiAgICBTbGVlcGVyUG9vbEV2ZW50TmFtZSxcbiAgICBQYWludGVyRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgVGV4dFNsZWVwZXIgfSBmcm9tICcuL3NsZWVwZXItdGV4dCc7IFxuaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4uL3NsZWVwZXIvc2xlZXBlci1wb29sJztcbmltcG9ydCB7IFNsZWVwZXJzRmFjdG9yeSB9IGZyb20gJy4vc2xlZXBlci1mYWN0b3J5JztcblxuY2xhc3MgU2xlZXBlciBleHRlbmRzIFRleHRTbGVlcGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXMsIGNhbnZhc0luZm9ybWF0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pc1NsZWVwaW5nID0gc3RhdHVzO1xuICAgICAgICB0aGlzLmJlZm9yZVByb2Nlc3NJc1NsZWVwaW5nID0gc3RhdHVzO1xuXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RyYWcgPSBmYWxzZTtcblxuICAgICAgICAvLyBQcm9iYWJpbGl0eSB0byBhY3RpdmUgb3RoZXJzXG4gICAgICAgIHRoaXMucHJvYmFiaWxpdHkgPSAwLjA7XG5cbiAgICAgICAgdGhpcy5lZGdlTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmluY29taW5nRWRnZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jaGlsZEVkZ2VNYXBMaXN0ID0gW107XG5cbiAgICAgICAgdGhpcy5jYW52YXNJbmZvcm1hdGlvbiA9IGNhbnZhc0luZm9ybWF0aW9uIHx8IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRTbGVlcGVyQ2FudmFzSW5mb3JtYXRpb24pO1xuICAgICAgICB0aGlzLmNhbnZhc1BhdGggPSBudWxsO1xuICAgICAgICB0aGlzLmNhbnZhc0FuY2hvcnNQYXRoTGlzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgRXZlbnRcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFNsZWVwZXJQb29sRXZlbnROYW1lLmFkZFNsZWVwZXIsIHRoaXMpO1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLmZpZ3VyZURyYXcsIFxuICAgICAgICAgICAgdGhpcy5jYW52YXNJbmZvcm1hdGlvbiwgXG4gICAgICAgICAgICB0aGlzLnNldENhbnZhc1BhdGguYmluZCh0aGlzKSxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBEcmF3IHRoZSB0ZXh0XG4gICAgICAgIHRoaXMuZHJhd1RleHRBcmVhKCk7XG4gICAgICAgIHRoaXMuZHJhd1RleHQoKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnTmV3IFNsZWVwZXInLCB0aGlzKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlU29tZVNsZWVwZXIsXG4gICAgICAgIH0gPSBTbGVlcGVyRXZlbnROYW1lO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFthY3RpdmVTb21lU2xlZXBlcl0gPSB0aGlzLmNoYW5nZUFjdGl2ZVN0YXR1cy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGFjdGl2ZSBzb21lIG5vZGUgaGFuZGxlclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnROYW1lc01hcFtldmVudF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgY2hpbGQgbm9kZSBmb3IgY3VycmVudCBzbGVlcGVyXG4gICAgICogQHBhcmFtIHtTbGVlcGVyfSBjaGlsZFNsZWVwZXIgXG4gICAgICovXG4gICAgYWRkQ2hpbGQoY2hpbGRTbGVlcGVyKSB7XG4gICAgICAgIGlmICghY2hpbGRTbGVlcGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIEFkZENoaWxkIEVycm9yOiBObyBjaGlsZHJlbiBpcyBnaXZlbiEnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LnB1c2goY2hpbGRTbGVlcGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBnaXZlbiBjaGlsZCBzbGVlcGVyIFxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gY2hpbGRTbGVlcGVyIFxuICAgICAqL1xuICAgIHJlbW92ZUNoaWxkKGNoaWxkU2xlZXBlcikge1xuICAgICAgICBjb25zdCBleHBlY3RDaGlsZEluZGV4ID0gdGhpcy5jaGlsZHJlbkxpc3QuZmluZEluZGV4KFxuICAgICAgICAgICAgY2hpbGRPYmplY3QgPT4gY2hpbGRPYmplY3QgPT09IGNoaWxkU2xlZXBlclxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRocm93IEVycm9yIHdoZW4gbm90IGZpbmQgdGhlIGNoaWxkXG4gICAgICAgIGlmIChleHBlY3RDaGlsZEluZGV4ID09PSAtMSB8fCBleHBlY3RDaGlsZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1NsZWVwZXIgUmVtb3ZlQ2hpbGQgRXJyb3I6IE5vdCBmaW5kIHRoZSBjaGlsZCEnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjaGlsZFxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5zcGxpY2UoZXhwZWN0Q2hpbGRJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgZWRnZSBmb3IgY3VycmVudCBzbGVlcGVyIFxuICAgICAqIEBwYXJhbSB7RWRnZX0gZWRnZSBFZGdlIG9iamVjdCBcbiAgICAgKi9cbiAgICBhZGRFZGdlKGVkZ2UpIHtcbiAgICAgICAgaWYgKCFlZGdlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIGFkZEVkZ2UgRXJyb3I6IE5vIGVkZ2UgaXMgZ2l2ZW4hJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVkZ2VMaXN0LnB1c2goZWRnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgZWRnZSBmb3IgY3VycmVudCBzbGVlcGVyIFxuICAgICAqIEBwYXJhbSB7RWRnZX0gZWRnZSBFZGdlIG9iamVjdFxuICAgICAqL1xuICAgIHJlbW92ZUVkZ2UoZWRnZSkge1xuICAgICAgICBjb25zdCBleHBlY3RFZGdlSW5kZXggPSB0aGlzLmVkZ2VMaXN0LmZpbmRJbmRleChcbiAgICAgICAgICAgIGVkZ2VPYmplY3QgPT4gZWRnZU9iamVjdCA9PT0gZWRnZVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRocm93IEVycm9yIHdoZW4gbm90IGZpbmQgdGhlIGNoaWxkXG4gICAgICAgIGlmIChleHBlY3RFZGdlSW5kZXggPT09IC0xIHx8IGV4cGVjdEVkZ2VJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIFJlbW92ZUVkZ2UgRXJyb3I6IE5vdCBmaW5kIHRoZSBlZGdlIScpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGNoaWxkXG4gICAgICAgIHRoaXMuZWRnZUxpc3Quc3BsaWNlKGV4cGVjdEVkZ2VJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgaW5jb21pbmcgZWRnZSBmb3IgY3VycmVudCBzbGVlcGVyXG4gICAgICovXG4gICAgYWRkSW5jb21pbmdFZGdlKGVkZ2UpIHtcbiAgICAgICAgaWYgKCFlZGdlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIGFkZEluY29taW5nRWRnZSBFcnJvcjogTm8gZWRnZSBpcyBnaXZlbiEnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5jb21pbmdFZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGluY29taW5nIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlciBcbiAgICAgKiBAcGFyYW0geyp9IGVkZ2UgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcmVtb3ZlSW5jb21pbmdFZGdlKGVkZ2UpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0RWRnZUluZGV4ID0gdGhpcy5pbmNvbWluZ0VkZ2VMaXN0LmZpbmRJbmRleChcbiAgICAgICAgICAgIGVkZ2VPYmplY3QgPT4gZWRnZU9iamVjdCA9PT0gZWRnZVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRocm93IEVycm9yIHdoZW4gbm90IGZpbmQgdGhlIGNoaWxkXG4gICAgICAgIGlmIChleHBlY3RFZGdlSW5kZXggPT09IC0xIHx8IGV4cGVjdEVkZ2VJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIFJlbW92ZUluY29taW5nRWRnZSBFcnJvcjogTm90IGZpbmQgdGhlIGVkZ2UhJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGNoaWxkXG4gICAgICAgIHRoaXMuaW5jb21pbmdFZGdlTGlzdC5zcGxpY2UoZXhwZWN0RWRnZUluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGN1cnJlbnQgbm9kZSBzdGF0dXNcbiAgICAgKi9cbiAgICBjaGFuZ2VTbGVlcGluZ1N0YXR1cyhhcmdzKSB7XG4gICAgICAgIC8vIElmIG5vdCBwYXNzIHN0YXR1cyB0aGVuIHJldmVyc2UgY3VycmVudCBzdGF0dXNcbiAgICAgICAgaWYgKGFyZ3MgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2xlZXBpbmcgPSAhdGhpcy5pc1NsZWVwaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1NsZWVwaW5nID0gYXJncztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQ2hhbmdlIGNhbnZhcyBpbmZvcm1hdGlvblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcixcbiAgICAgICAgICAgIGZpbGxDb2xvclxuICAgICAgICB9ID0gU2xlZXBlcnNGYWN0b3J5LmdldENhbnZhc0luZm9ybWF0aW9uKCF0aGlzLmlzU2xlZXBpbmcpO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24oe1xuICAgICAgICAgICAgYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICBmaWxsQ29sb3IsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyeSB0byBhY3RpdmUgdGhlIGNoaWxkcmVuIG5vZGVzXG4gICAgICovXG4gICAgYWN0aXZlQ2hpbGQoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBBY3RpdmVkQ2hpbGRMaXN0ID0gW107XG5cbiAgICAgICAgLy8gQWN0aXZlIHRoZSBjaGlsZHJlbiBpbiBvcmRlclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5mb3JFYWNoKGNoaWxkT2JqZWN0ID0+IHtcbiAgICAgICAgICAgIC8vIE9ubHkgbG9va2luZyBmb3Igc2xlZXBpbmcgbm9kZVxuICAgICAgICAgICAgaWYgKCFjaGlsZE9iamVjdC5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB3ZWlnaHQgPSBjaGlsZE9iamVjdC5wcm9iYWJpbGl0eTtcblxuICAgICAgICAgICAgLy8gQ2hhbmdlIHRoZSBjaGlsZCBzdGF0dXMgaWYgYWN0aXZlXG4gICAgICAgICAgICBpZiAoZ2V0QWN0aXZpdHlCeVdlaWdodCh3ZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRPYmplY3QuY2hhbmdlU2xlZXBpbmdTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICB0ZW1wQWN0aXZlZENoaWxkTGlzdC5wdXNoKGNoaWxkT2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlbXBBY3RpdmVkQ2hpbGRMaXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY2FudmFzIHBhdGhcbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhc1BhdGhPYmplY3QgY2FudmFzIHBhdGggb2JqZWN0XG4gICAgICovXG4gICAgc2V0Q2FudmFzUGF0aChhcmdzKSB7XG4gICAgICAgIGNvbnN0IFtjYW52YXNQYXRoT2JqZWN0LCBhbmNob3JzTGlzdF0gPSBhcmdzO1xuICAgICAgICB0aGlzLmNhbnZhc1BhdGggPSBjYW52YXNQYXRoT2JqZWN0O1xuXG4gICAgICAgIGlmICghIWFuY2hvcnNMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0FuY2hvcnNQYXRoTGlzdCA9IGFuY2hvcnNMaXN0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHNsZWVwZXIgYWN0aXZlIHN0YXR1c1xuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlciB0aGUgZXZlbnQgcmVjaWV2ZWQgc2xlZXByIG9iamVjdCwgbm90ZSB0aGF0IGl0IG1heSBiZSBvdGhlciBzbGVlcGVyc1xuICAgICAqL1xuICAgIGNoYW5nZUFjdGl2ZVN0YXR1cyhzbGVlcGVyKSB7XG4gICAgICAgIGlmIChzbGVlcGVyID09PSB0aGlzICYmIHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBTZWxlY3QgdGhpcyBzbGVlcGVyIGFuZCBhY3RpdmUgaXRzZWxmXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24oe1xuICAgICAgICAgICAgICAgIGlzQW5jaG9yOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FjdGl2ZSAmJiBzbGVlcGVyICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAvLyBTZWxlY3Qgb3RoZXIgc2xlZXBlciB0aGVuIGluYWN0aXZlIGl0c2VsZlxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc1RleHRNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHtcbiAgICAgICAgICAgICAgICBpc0FuY2hvcjogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gU2V0IGRyYWcgZmxhZ1xuICAgICAgICBpZihzbGVlcGVyID09PSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLnN3aXRjaERyYWdTdGF0dXMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpc2RyYWcnLCB0aGlzLmlzRHJhZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgc2xlZXBlciBkcmFnIHN0YXR1c1xuICAgICAqL1xuICAgIHN3aXRjaERyYWdTdGF0dXMoKSB7XG4gICAgICAgIHRoaXMuaXNEcmFnID0gIXRoaXMuaXNEcmFnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBTbGVlcGVyIGNhbnZhcyBpbmZvcm1hdGlvbiBhbmQgdHJpZ2dlciB0aGUgcGFpbnRlciBldmVudFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wZXJ0eU9iamVjdFxuICAgICAqL1xuICAgIGNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgIC8vIEl0ZXJhdGUgdGhlIGFsZXJhdGlvbiBhbmQgdXBkYXRlXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gcHJvcGVydHlPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcHJvcGVydHlPYmplY3RbcHJvcGVydHldO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FudmFzSW5mb3JtYXRpb25bcHJvcGVydHldICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzSW5mb3JtYXRpb25bcHJvcGVydHldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgbm9uLXJlbGF0ZWQgZmFjdG9yIHdpdGhpbiB0aGlzIHNsZWVwZXIgZm9yIHBhc3RlXG4gICAgICovXG4gICAgcHJlcGFyZUZvclBhc3RlKCkge1xuICAgICAgICAvLyBUT0RPOiBNYXkgbmVlZCB0byBjaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIGl0XG5cbiAgICAgICAgLy8gUmVtb3ZlIGl0cyBlZGdlcyBhbmQgaW4tb3V0IHNsZWVwZXJcbiAgICAgICAgdGhpcy5lZGdlTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmluY29taW5nRWRnZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jaGlsZEVkZ2VNYXBMaXN0ID0gW107XG5cbiAgICAgICAgLy8gQ2hhbmdlIHN0YXR1c1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0RyYWcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgaXRzZWxmIFxuICAgICAqL1xuICAgIGRlbGV0ZVNlbGYoKSB7XG4gICAgICAgIFNsZWVwZXJQb29sZXIucmVtb3ZlU2xlZXBlcih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWNvdmVyIGl0c2VsZlxuICAgICAqL1xuICAgIHJlY292ZXJTZWxmKCkge1xuICAgICAgICBTbGVlcGVyUG9vbGVyLmFkZFNsZWVwZXIodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBTbGVlcGVyIH07IiwiaW1wb3J0IHsgTW91c2VBY3Rpb25Db250cm9sbGVyIH0gZnJvbSAnLi4vYWN0aW9uLWxheWVyL21vdXNlL21vdXNlLWFjdGlvbi1jb250cm9sbGVyJztcbmltcG9ydCB7IE1vdXNlQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9uLWxheWVyL21vdXNlL21vdXNlLWFjdGlvbic7XG5pbXBvcnQgeyBLZXlib2FyZEFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9rZXlib2FyZC9rZXlib2FyZC1hY3Rpb24nO1xuaW1wb3J0IHsgS2V5Ym9hcmRBY3Rpb25Db250cm9sbGVyIH0gZnJvbSAnLi4vYWN0aW9uLWxheWVyL2tleWJvYXJkL2tleWJvYXJkLWFjdGlvbi1jb250cm9sbGVyJztcbmltcG9ydCB7IEdsb2JhbENvbmZpZyB9IGZyb20gJy4uLy4uL2dsb2JhbC9nbG9iYWwtY29uZmlnJztcbmltcG9ydCB7IFBhaW50ZXIgfSBmcm9tICcuL3BhaW50ZXIvcGFpbnRlcic7XG5pbXBvcnQgeyBVbmRvUmVkbyB9IGZyb20gJy4uLy4uL3VuZG8tcmVkby91bmRvLXJlZG8nO1xuaW1wb3J0IHsgU2xlZXBlcnNGYWN0b3J5IH0gZnJvbSAnLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBQYW5lbE9wZXJhdGlvbkNvbnRyb2xsZXIgfSBmcm9tICcuLi9hY3Rpb24tbGF5ZXIvcGFuZWwvcGFuZWwtb3BlcmF0aW9uLWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIgfSBmcm9tICcuLi9hY3Rpb24tbGF5ZXIvd2FraW5nLXByb2Nlc3Mvd2FraW5nLXByb2Nlc3MtY29udHJvbGxlcic7XG5cbmNsYXNzIENhbnZhcyB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDYW52YXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIUNhbnZhcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICBDYW52YXMuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gQ2FudmFzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgY2FudmFzIGluc3RhbmNlXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmluaXRQYWludGVyKCk7XG4gICAgICAgIHRoaXMuaW5pdEFjdGlvblJlbGF0ZWQoKTtcbiAgICAgICAgdGhpcy5pbml0VW5kb1JlZG9TdGFjaygpO1xuICAgICAgICB0aGlzLmluaXRTbGVlcGVyRmFjdG9yeSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgY2FudmFzIGNvbnRleHRcbiAgICAgKi9cbiAgICBpbml0Q29udGV4dCgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChHbG9iYWxDb25maWcuY2FudmFzSWQpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gR2xvYmFsQ29uZmlnLnBhbmRlbFdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBHbG9iYWxDb25maWcuaGVhZGVySGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgY2FudmFzIHBhaW50ZXJcbiAgICAgKi9cbiAgICBpbml0UGFpbnRlcigpIHtcbiAgICAgICAgdGhpcy5wYWludGVyID0gbmV3IFBhaW50ZXIodGhpcy5jYW52YXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgY2FudmFzIGFjdGlvbiByZWxhdGVkXG4gICAgICovXG4gICAgaW5pdEFjdGlvblJlbGF0ZWQoKSB7XG4gICAgICAgIHRoaXMubW91c2VBY3Rpb25Db250cm9sbGVyID0gbmV3IE1vdXNlQWN0aW9uQ29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLm1vdXNlQWN0aW9uID0gbmV3IE1vdXNlQWN0aW9uKHRoaXMuY2FudmFzKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZEFjdGlvbkNvbnRyb2xsZXIgPSBuZXcgS2V5Ym9hcmRBY3Rpb25Db250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpb24gPSBuZXcgS2V5Ym9hcmRBY3Rpb24odGhpcy5jYW52YXMsIHRoaXMubW91c2VBY3Rpb24pO1xuICAgICAgICB0aGlzLnBhbmVsT3BlcmF0aW9uQ29udHJvbGxlciA9IG5ldyBQYW5lbE9wZXJhdGlvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy53YWtpbmdQcm9jZXNzQ29udHJvbGxlciA9IG5ldyBXYWtpbmdQcm9jZXNzQ29udHJvbGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgVW5kb1JlZG9TdGFja1xuICAgICAqL1xuICAgIGluaXRVbmRvUmVkb1N0YWNrKCkge1xuICAgICAgICBVbmRvUmVkby5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgc2xlZXBlciBmYWN0b3J5XG4gICAgICovXG4gICAgaW5pdFNsZWVwZXJGYWN0b3J5KCkge1xuICAgICAgICBTbGVlcGVyc0ZhY3RvcnkubW91bnRDYW52YXModGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDYW52YXMgfTsiLCJleHBvcnQgY29uc3QgRGVhZnVsdEFuY2hvclNldHRpbmcgPSB7XG4gICAgbGluZVdpZHRoOiAyLFxuICAgIGxpbmVDb2xvcjogJ2JsYWNrJyxcbiAgICBhbmNob3JSYWRpdXM6IDQsXG59O1xuXG5leHBvcnQgY29uc3QgRGVhZnVsdEFycm93U2V0dGluZyA9IHtcbiAgICBoZWFkTGVuZ3RoOiAxMCxcbiAgICBsaW5lV2lkdGg6IDIsXG4gICAgbGluZUNvbG9yOiAnYmxhY2snLFxufTtcblxuZXhwb3J0IGNvbnN0IEFjdGl2ZUFycm93U2V0dGluZyA9IHtcbiAgICBsaW5lV2lkdGg6IDMsIFxuICAgIGxpbmVDb2xvcjogJyMwMDY4RkYnLFxufTtcblxuZXhwb3J0IGNvbnN0IERlYWZhdWx0Qm91bmRpbmdCb3hTZXR0aW5nID0ge1xuICAgIGxpbmVXaWR0aDogMixcbiAgICBsaW5lQ29sb3I6ICcjMzM2NkZGJyxcbn0gIiwiaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFBhaW50ZXJFdmVudE5hbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgXG4gICAgRGVhZnVsdEFuY2hvclNldHRpbmcsXG4gICAgRGVhZnVsdEFycm93U2V0dGluZyxcbiAgICBEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZyxcbiAgICBBY3RpdmVBcnJvd1NldHRpbmcsXG59IGZyb20gJy4vY29uZmlnJztcblxuY2xhc3MgRmlndXJlUGFpbnRlciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjYW52YXNDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQgPSBjYW52YXNDb250ZXh0O1xuICAgICAgICB0aGlzLmRyYXdNYXAgPSB7XG4gICAgICAgICAgICAnY2lyY2xlJzogdGhpcy5kcmF3Q2lyY2xlLmJpbmQodGhpcyksXG4gICAgICAgICAgICAnYXJyb3cnOiB0aGlzLmRyYXdBcnJvdy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ3RleHRhcmVhJzogdGhpcy5kcmF3VGV4dGFyZWEuYmluZCh0aGlzKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciByZWxhdGVkIHRvIFBhaW50ZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LCB0aGlzLmRyYXcuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgY29ycmVzcG9uZCBpbWFnZXMgZ2l2ZW4gcmVsYXRlZCBpbmZvcm1hdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICAgICAqIEByZXR1cm5zIHsqfSBjYW52YXMgcGF0aFxuICAgICAqL1xuICAgIGRyYXcocGFyYW1zLCBzZXRQYXRoQ2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgeyBkcmF3VHlwZSB9ID0gcGFyYW1zO1xuXG4gICAgICAgIC8vIFJhaXNlIHRoZSBlcnJvciBpZiB0aGUgc2hhcGUgbm90IGluY2x1ZGVkIFxuICAgICAgICBpZiAoIShkcmF3VHlwZSBpbiB0aGlzLmRyYXdNYXApKSB7XG4gICAgICAgICAgICByZXR1cm4gRXJyb3IoJ0ZpZ3VyZSBEcmF3IEVycm9yOiBHaXZlbiB0eXBlIG5vdCBmb3VuZCEnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gRHJhdyB0aGUgY29ycmVzcG9uZCBzaGFwZSBhbmQgc2V0IHRoZSBwYXRoIHRvIHRoZSBzbGVlcGVyXG4gICAgICAgIHNldFBhdGhDYWxsYmFjayh0aGlzLmRyYXdNYXBbZHJhd1R5cGVdKHBhcmFtcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXcgY2lybGUgb24gY2FudmFzXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgZHJhd0NpcmNsZShwYXJhbXMpIHtcbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgZHJhd2luZyBwYXJhbWV0ZXJzXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgcmFkaXVzLFxuICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgaXNGaWxsZWQsXG4gICAgICAgICAgICBpc0JvcmRlcixcbiAgICAgICAgICAgIGJvcmRlcldpdGgsXG4gICAgICAgICAgICBib3JkZXJDb2xvcixcbiAgICAgICAgICAgIGlzQW5jaG9yLFxuICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3IsXG4gICAgICAgIH0gPSBwYXJhbXM7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgY2lyY2xlXG4gICAgICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBQYXRoMkQoKTtcbiAgICAgICAgY2lyY2xlLmFyYyhcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgcmFkaXVzLFxuICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgLy8gRmlsbCB0aGUgY2lyY2xlXG4gICAgICAgIGNvbnN0IGZpbGxDb2xvciA9IHBhcmFtc1snZmlsbENvbG9yJ107XG4gICAgICAgIGlmIChpc0ZpbGxlZCAmJiBmaWxsQ29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsU3R5bGUgPSBmaWxsQ29sb3I7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbChjaXJjbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgYm9yZGVyXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEhKFxuICAgICAgICAgICAgICAgIGlzQm9yZGVyXG4gICAgICAgICAgICAgICAgJiYgYm9yZGVyV2l0aFxuICAgICAgICAgICAgICAgICYmIGJvcmRlckNvbG9yXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmxpbmVXaWR0aCA9IGJvcmRlcldpdGg7XG4gICAgICAgICAgICBpZiAoaXNBbmNob3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBhY3RpdmVCb3JkZXJDb2xvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2UoY2lyY2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERyYXcgdGhlIGFuY2hvclxuICAgICAgICBjb25zdCBhbmNob3JzUGF0aExpc3QgPSBbXTtcbiAgICAgICAgaWYgKGlzQW5jaG9yKSB7XG4gICAgICAgICAgICAvLyBTZXQgc3Ryb2tlIHN0eWxlXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQubGluZVdpZHRoID0gRGVhZnVsdEFuY2hvclNldHRpbmcubGluZVdpZHRoO1xuXG4gICAgICAgICAgICBjb25zdCBhbmNob3JQb3NpdGlvbkxpc3QgPSBbXG4gICAgICAgICAgICAgICAge3g6IHggKyByYWRpdXMsIHk6IHl9LFxuICAgICAgICAgICAgICAgIHt4OiB4IC0gcmFkaXVzLCB5OiB5fSxcbiAgICAgICAgICAgICAgICB7eDogeCwgeTogeSArIHJhZGl1c30sXG4gICAgICAgICAgICAgICAge3g6IHgsIHk6IHkgLSByYWRpdXN9LFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBhbmNob3JQb3NpdGlvbiBvZiBhbmNob3JQb3NpdGlvbkxpc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBEZWFmdWx0QW5jaG9yU2V0dGluZy5saW5lQ29sb3I7XG4gICAgICAgICAgICAgICAgY29uc3Qge3ggLHl9ID0gYW5jaG9yUG9zaXRpb247XG4gICAgICAgICAgICAgICAgY29uc3QgYW5jaG9yUGF0aCA9IG5ldyBQYXRoMkQoKTtcbiAgICAgICAgICAgICAgICBhbmNob3JQYXRoLmFyYyhcbiAgICAgICAgICAgICAgICAgICAgeCwgXG4gICAgICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgICAgIERlYWZ1bHRBbmNob3JTZXR0aW5nLmFuY2hvclJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlKGFuY2hvclBhdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsKGFuY2hvclBhdGgpO1xuICAgICAgICAgICAgICAgIGFuY2hvcnNQYXRoTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbY2lyY2xlLCBhbmNob3JzUGF0aExpc3RdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXcgYXJyb3cgb24gY2FudmFzXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gICAgICovXG4gICAgZHJhd0Fycm93KHBhcmFtcykge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgc3RhcnRMb2NhdGlvbixcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLFxuICAgICAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgIH0gPSBwYXJhbXM7XG5cbiAgICAgICAgLy8gSWYgb25seSBvbmUgbG9jYXRpb24gcHJvdmlkZWQsIHRoZW4gc2V0IHRoZSBvdGhlciB0aGUgc2FtZVxuICAgICAgICBpZighc3RhcnRMb2NhdGlvbikge1xuICAgICAgICAgICAgc3RhcnRMb2NhdGlvbiA9IGVuZExvY2F0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKCFlbmRMb2NhdGlvbikge1xuICAgICAgICAgICAgZW5kTG9jYXRpb24gPSBzdGFydExvY2F0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKFxuICAgICAgICAgICAgZW5kTG9jYXRpb24ueSAtIHN0YXJ0TG9jYXRpb24ueSwgXG4gICAgICAgICAgICBlbmRMb2NhdGlvbi54IC0gc3RhcnRMb2NhdGlvbi54XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gU2V0IHN0cm9rZSBzdHlsZVxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBpc0FjdGl2ZSA/IFxuICAgICAgICAgICAgQWN0aXZlQXJyb3dTZXR0aW5nLmxpbmVDb2xvciA6XG4gICAgICAgICAgICBEZWFmdWx0QXJyb3dTZXR0aW5nLmxpbmVDb2xvcjtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmxpbmVXaWR0aCA9IGlzQWN0aXZlID8gXG4gICAgICAgICAgICBBY3RpdmVBcnJvd1NldHRpbmcubGluZVdpZHRoIDpcbiAgICAgICAgICAgIERlYWZ1bHRBcnJvd1NldHRpbmcubGluZVdpZHRoO1xuXG4gICAgICAgIGNvbnN0IGxpbmUgPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgIGNvbnN0IGhlYWQgPSBuZXcgUGF0aDJEKCk7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgbGluZSBcbiAgICAgICAgbGluZS5tb3ZlVG8oc3RhcnRMb2NhdGlvbi54LCBzdGFydExvY2F0aW9uLnkpO1xuICAgICAgICBsaW5lLmxpbmVUbyhlbmRMb2NhdGlvbi54LCBlbmRMb2NhdGlvbi55KTtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZShsaW5lKTtcblxuICAgICAgICAvLyBEcmF3IHRoZSBoZWFkXG4gICAgICAgIGhlYWQubW92ZVRvKFxuICAgICAgICAgICAgZW5kTG9jYXRpb24ueCAtIERlYWZ1bHRBcnJvd1NldHRpbmcuaGVhZExlbmd0aCAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDYpLFxuICAgICAgICAgICAgZW5kTG9jYXRpb24ueSAtIERlYWZ1bHRBcnJvd1NldHRpbmcuaGVhZExlbmd0aCAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpXG4gICAgICAgICk7XG4gICAgICAgIGhlYWQubGluZVRvKGVuZExvY2F0aW9uLngsIGVuZExvY2F0aW9uLnkpO1xuICAgICAgICBoZWFkLmxpbmVUbyhcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnggLSBEZWFmdWx0QXJyb3dTZXR0aW5nLmhlYWRMZW5ndGggKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA2KSxcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnkgLSBEZWFmdWx0QXJyb3dTZXR0aW5nLmhlYWRMZW5ndGggKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyA2KVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlKGhlYWQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtsaW5lLCBoZWFkfTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgdGV4dGFyZWFcbiAgICAgKiBAcGFyYW0geyp9IHBhcmFtcyBcbiAgICAgKi9cbiAgICBkcmF3VGV4dGFyZWEocGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNsZWVwZXJQb3NpdGlvbixcbiAgICAgICAgICAgIHRleHRhcmVhSW5mb3JtYXRpb24sXG4gICAgICAgIH0gPSBwYXJhbXM7XG5cbiAgICAgICAgY29uc3QgYm91bmRpbmdCb3hQYXRoID0gbmV3IFBhdGgyRCgpO1xuXG4gICAgICAgIGJvdW5kaW5nQm94UGF0aC5yZWN0KFxuICAgICAgICAgICAgc2xlZXBlclBvc2l0aW9uLnggLSB0ZXh0YXJlYUluZm9ybWF0aW9uLndpZHRoIC8gMixcbiAgICAgICAgICAgIHNsZWVwZXJQb3NpdGlvbi55IC0gdGV4dGFyZWFJbmZvcm1hdGlvbi5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgdGV4dGFyZWFJbmZvcm1hdGlvbi53aWR0aCxcbiAgICAgICAgICAgIHRleHRhcmVhSW5mb3JtYXRpb24uaGVpZ2h0LFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5saW5lV2lkdGggPSBEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZy5saW5lV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2VTdHlsZSA9IERlYWZhdWx0Qm91bmRpbmdCb3hTZXR0aW5nLmxpbmVDb2xvcjtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZShib3VuZGluZ0JveFBhdGgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGJvdW5kaW5nQm94UGF0aDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEZpZ3VyZVBhaW50ZXIgfTsiLCJpbXBvcnQgeyBGaWd1cmVQYWludGVyIH0gZnJvbSAnLi9maWd1cmUvcGFpbnRlcic7XG5pbXBvcnQgeyBUZXh0UGFpbnRlciB9IGZyb20gJy4vdGV4dC9wYWludGVyJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBTbGVlcGVyUG9vbGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItcG9vbCc7XG5pbXBvcnQgeyBFZGdlUG9vbGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9lZGdlL2VkZ2UtcG9vbCc7XG5pbXBvcnQgeyBQYWludGVyRXZlbnROYW1lIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcblxuY2xhc3MgUGFpbnRlciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIC8vIEluaXQgZGlmZmVyZW50IHBhaW50ZXJcbiAgICAgICAgdGhpcy5pbml0UGFpbnRlcigpO1xuXG4gICAgICAgIC8vIEluaXQgZXZlbnRlciBoYW5kbGVyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBQYWludGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFBhaW50ZXJFdmVudE5hbWUucmVwYWludCwgdGhpcy5yZXBhaW50LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGluaXRQYWludGVyKCkge1xuICAgICAgICB0aGlzLmZpZ3VyZSA9IG5ldyBGaWd1cmVQYWludGVyKHRoaXMuY2FudmFzLCB0aGlzLmNhbnZhc0NvbnRleHQpO1xuICAgICAgICB0aGlzLnRleHQgPSBuZXcgVGV4dFBhaW50ZXIodGhpcy5jYW52YXMsIHRoaXMuY2FudmFzQ29udGV4dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwYWludCBhbGwgY2FudmFzIG9iamVjdFxuICAgICAqL1xuICAgIHJlcGFpbnQoKSB7XG4gICAgICAgIC8vIENsZWFuIHRoZSBjYW52YXNcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBJdGVyYXRlIHRvIGRyYXcgdGhlIHNsZWVwZXJcbiAgICAgICAgZm9yIChjb25zdCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgLy8gVE9ETzogTWFrZSBpdCBhcyBhIGZ1bmN0aW9uIG9mIHNsZWVwZXJcbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLmZpZ3VyZURyYXcsXG4gICAgICAgICAgICAgICAgc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbixcbiAgICAgICAgICAgICAgICBzbGVlcGVyLnNldENhbnZhc1BhdGguYmluZChzbGVlcGVyKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gUmV3cml0ZSB0aGUgdGV4dFxuICAgICAgICAgICAgc2xlZXBlci5kcmF3VGV4dCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0byBkcmF3IHRoZSBlZGdlXG4gICAgICAgIGZvciAoY29uc3QgZWRnZSBvZiBFZGdlUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLmZpZ3VyZURyYXcsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkcmF3VHlwZTogJ2Fycm93JyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRMb2NhdGlvbjogZWRnZS5zdGFydExvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICBlbmRMb2NhdGlvbjogZWRnZS5lbmRMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IGVkZ2UuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlZGdlLnNldENhbnZhc1BhdGguYmluZChlZGdlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgUGFpbnRlciB9OyIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBQYWludGVyRXZlbnROYW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcblxuY2xhc3MgVGV4dFBhaW50ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY2FudmFzQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gY2FudmFzQ29udGV4dDtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciByZWxhdGVkIHRvIFBhaW50ZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoUGFpbnRlckV2ZW50TmFtZS50ZXh0V3JpdGUsIHRoaXMud3JpdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGUgdGhlIHRleHQgZm9sbG93IHRoZSBwYXJhbXMgZ2l2ZW5cbiAgICAgKiBAcGFyYW0geyp9IHBhcmFtcyBcbiAgICAgKiBAcGFyYW0geyp9IHNldFBhdGhDYWxsYmFjayBcbiAgICAgKi9cbiAgICB3cml0ZShwYXJhbXMsIHNldFRleHRhcmVhQ2FsbGJhY2spIHtcbiAgICAgICAgLy8gUGFyc2UgY29uZmlndXJhdGlvbnNcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICBtYXhXaWR0aCxcbiAgICAgICAgICAgIGluZm9ybWF0aW9uLFxuICAgICAgICB9ID0gcGFyYW1zO1xuXG4gICAgICAgIC8vIEdldCBzaXplXG4gICAgICAgIGxldCBzaXplID0gaW5mb3JtYXRpb24uc2l6ZSB8fCAnMTInO1xuICAgICAgICBzaXplICs9ICdweCdcblxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZm9udCA9IGAke3NpemV9ICR7aW5mb3JtYXRpb24uc3R5bGV9YDtcbiAgICAgICAgXG4gICAgICAgIC8vIFByZXBhcmUgd3JpdGluZyB0ZXh0IHBhcmFtc1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gaW5mb3JtYXRpb24uY29sb3I7XG4gICAgICAgIGNvbnN0IGZpbGxJbmZvID0gdGhpcy5fZ2V0RmlsbExpc3QocG9zaXRpb24sIGluZm9ybWF0aW9uLmNvbnRlbnQsIG1heFdpZHRoKTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsbExpc3QsXG4gICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uLFxuICAgICAgICB9ID0gZmlsbEluZm87XG5cbiAgICAgICAgLy8gU2V0IGNhbGxiYWNrIHRvIGRyYXcgdGhlIHRleHRhcmVhIGZpcnN0XG4gICAgICAgIHNldFRleHRhcmVhQ2FsbGJhY2sodGV4dGFyZWFJbmZvcm1hdGlvbiwgJ3RleHRhcmVhJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBXcml0ZSB0ZXh0XG4gICAgICAgIGZvciAobGV0IHRleHQgb2YgZmlsbExpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsVGV4dCh0ZXh0WzBdLCB0ZXh0WzFdLCB0ZXh0WzJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBmaWxsIGxpc3QgZm9yIHNpbmdsZSAvIG11bHRpcGxlIGxpbmVzXG4gICAgICogQHBhcmFtIHsqfSBwb3NpdGlvbiBzbGVlcGVyIGNlbnRlclxuICAgICAqIEBwYXJhbSB7Kn0gY29udGVudCB0ZXh0IGNvbnRlbnRcbiAgICAgKiBAcGFyYW0geyp9IG1heFdpZHRoIHByZWRlZmluZWQgbWF4aW1hbCB3aWR0aFxuICAgICAqIEByZXR1cm5zIGZpbGxpbmcgbGlzdCBhbmQgdGV4dGFyZWEgaW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBfZ2V0RmlsbExpc3QocG9zaXRpb24sIGNvbnRlbnQsIG1heFdpZHRoKSB7ICAgICBcbiAgICAgICAgbGV0IG1ldHJpY3MgPSB0aGlzLmNhbnZhc0NvbnRleHQubWVhc3VyZVRleHQoY29udGVudCk7XG4gICAgICAgIGxldCBmaWxsTGlzdCA9IFtdXG5cbiAgICAgICAgaWYgKG1ldHJpY3Mud2lkdGggPCBtYXhXaWR0aCkge1xuICAgICAgICAgICAgLy8gR2V0IHRleHQgbG9jYXRpb24gaW5mb3JtYXRpb25cbiAgICAgICAgICAgIGxldCB4ID0gcG9zaXRpb24ueCAtIG1ldHJpY3Mud2lkdGggLyAyO1xuICAgICAgICAgICAgbGV0IHkgPSBwb3NpdGlvbi55ICsgKG1ldHJpY3MuYWN0dWFsQm91bmRpbmdCb3hBc2NlbnQgKyBtZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCkgLyAyO1xuXG4gICAgICAgICAgICAvLyBHZXQgdGV4dGFyZWEgbG9jYXRpb24gaW5mb3JtYXRpb25cbiAgICAgICAgICAgIGxldCB0ZXh0YXJlYUluZm9ybWF0aW9uID0gIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAobWV0cmljcy5mb250Qm91bmRpbmdCb3hBc2NlbnQgKyBtZXRyaWNzLmZvbnRCb3VuZGluZ0JveERlc2NlbnQpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZmlsbExpc3QucHVzaChbY29udGVudCwgeCwgeV0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmaWxsTGlzdCxcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IEZvciBtdWx0aXBsZSBsaW5lc1xuICAgICAgICByZXR1cm4gZmlsbExpc3Q7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUZXh0UGFpbnRlciB9OyIsImV4cG9ydCBjb25zdCBTbGVlcGVyRXZlbnROYW1lID0ge1xuICAgIGFjdGl2ZVNvbWVTbGVlcGVyOiAnYWN0aXZlU29tZVNsZWVwZXInLFxuICAgIGFjdGl2ZVNvbWVTbGVlcGVyVGV4dE1vZGU6ICdhY3RpdmVTb21lU2xlZXBlclRleHRNb2RlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBFZGdlRXZlbnROYW1lID0ge1xuICAgIGFjdGl2ZVNvbWVFZGdlOiAnYWN0aXZlU29tZUVkZ2UnLFxufVxuXG5leHBvcnQgY29uc3QgU2xlZXBlclBvb2xFdmVudE5hbWUgPSB7XG4gICAgYWRkU2xlZXBlcjogJ2FkZFNsZWVwZXInLFxufTtcblxuZXhwb3J0IGNvbnN0IEVkZ2VQb29sRXZlbnROYW1lID0ge1xuICAgIGFkZEVkZ2U6ICdhZGRFZGdlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBQYWludGVyRXZlbnROYW1lID0ge1xuICAgIGZpZ3VyZURyYXc6ICdmaWd1cmVEcmF3JyxcbiAgICB0ZXh0V3JpdGU6ICd0ZXh0V3JpdGUnLFxuICAgIHJlcGFpbnQ6ICdyZXBhaW50Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lID0ge1xuICAgIG1vdXNlRG93blNsZWVwZXI6ICdtb3VzZURvd25TbGVlcGVyJyxcbiAgICBtb3VzZURvd25MaW5lOiAnbW91c2VEb3duTGluZScsXG4gICAgbW91c2VEb3duQmFja2dyb3VuZDogJ21vdXNlRG93bkJhY2tncm91bmQnLFxuICAgIG1vdXNlTW92ZVNsZWVwZXI6ICdtb3VzZU1vdmUnLFxuICAgIG1vdXNlTW92ZUFuY2hvcjogJ21vdXNlTW92ZUFuY2hvcicsXG4gICAgbW91c2VNb3ZlSGVhZDogJ21vdXNlTW92ZUhlYWQnLFxuICAgIG1vdXNlVXBTbGVlcGVyOiAnbW91c2VVcFNsZWVwZXInLFxuICAgIG1vdXNlVXBBbmNob3I6ICdtb3VzZVVwQW5jaG9yJyxcbiAgICBtb3VzZVVwSGVhZDogJ21vdXNlVXBIZWFkJyxcbiAgICBtb3VzZURvdWJsZUNsaWNrOiAnbW91c2VEb3VibGVDbGljaycsXG4gICAgbW91c2VSaWdodENsaWNrOiAnbW91c2VSaWdodENsaWNrJyxcbiAgICBrZXlib2FyZERlbGV0ZTogJ2tleWJvYXJkRGVsZXRlJyxcbiAgICBrZXlib2FyZENvcHk6ICdrZXlib2FyZENvcHknLFxuICAgIGtleWJvYXJkUGFzdGU6ICdrZXlib2FyZFBhc3RlJyxcbiAgICBrZXlib2FyZFRleHREZWxldGU6ICdrZXlib2FyZFRleHREZWxldGUnLFxuICAgIGtleWJvYXJkSW5wdXQ6ICdrZXlib2FyZElucHV0JyxcbiAgICBrZXlib2FyZFRleHRSZWRvOiAna2V5Ym9hcmRUZXh0UmVkbycsXG4gICAga2V5Ym9hcmRUZXh0VW5kbzogJ2tleWJvYXJkVGV4dFVuZG8nLFxufTtcblxuZXhwb3J0IGNvbnN0IFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUgPSB7XG4gICAgY2xvc2VDb2xvclBpY2tlcjogJ2Nsb3NlQ29sb3JQaWNrZXInLFxuICAgIGNyZWF0ZU5vZGU6ICdjcmVhdGVOb2RlJyxcbiAgICBjaGFuZ2VOb2RlU3R5bGU6ICdjaGFuZ2VOb2RlU3R5bGUnLFxuICAgIGNoYW5nZUFsbFByb2JhYmlsaXR5OiAnY2hhbmdlQWxsUHJvYmFiaWxpdHknLFxuICAgIHN0YXJ0V2FraW5nUHJvY2VzczogJ3N0YXJ0V2FraW5nUHJvY2VzcycsXG4gICAgcGF1c2VXYWtpbmdQcm9jZXNzOiAncGF1c2VXYWtpbmdQcm9jZXNzJyxcbiAgICBlbmRXYWtpbmdQcm9jZXNzOiAnZW5kV2FraW5nUHJvY2VzcycsXG4gICAgcmVzZXRTbGVlcGVyczogJ3Jlc2V0U2xlZXBlcnMnLFxufTtcblxuZXhwb3J0IGNvbnN0IFVuZG9SZWRvRXZlbnROYW1lID0ge1xuICAgIGFkZE11dGF0aW9uOiAnYWRkTXV0YXRpb24nLFxuICAgIHVuZG86ICd1bmRvJyxcbiAgICByZWRvOiAncmVkbycsXG59OyIsImV4cG9ydCBjb25zdCBHbG9iYWxDb25maWcgPSB7XG4gICAgY2FudmFzSWQ6ICdteUNhbnZhcycsXG4gICAgaGVhZGVySGVpZ2h0OiA2NixcbiAgICBwYW5kZWxXaWR0aDogMzAwLFxufTsiLCJleHBvcnQgY29uc3QgU2F2ZWRPcGVyYXRpb24gPSB7XG4gICAgbW92ZVNsZWVwZXI6ICdtb3ZlU2xlZXBlcicsXG4gICAgYWRkRWRnZUZyb21BbmNob3I6ICdhZGRFZGdlRnJvbUFuY2hvcicsXG4gICAgbW92ZUhlYWQ6ICdtb3ZlSGVhZCcsXG4gICAgZGVsZXRlOiAnZGVsZXRlJyxcbiAgICBwYXN0ZTogJ3Bhc3RlJyxcbn07IiwiaW1wb3J0IHsgU2F2ZWRPcGVyYXRpb24gfSBmcm9tICcuL29wZXJhdGlvbic7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgUGFpbnRlckV2ZW50TmFtZSB9IGZyb20gJy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vY29yZS9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlcic7XG5cbi8qKlxuICogUmVkbyBjb250cm9sbGVyIHRvIGFjdHVhbGx5IGRlYWwgd2l0aCB0aGUgcmVkb2luZyB0aGUgdGFza3NcbiAqIEBwYXJhbSB7Kn0gdGFzayBcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkb0NvbnRyb2xsZXIodGFzaykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgb2JqZWN0LFxuICAgICAgICBwYXJhbXMsXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICB9ID0gdGFzaztcblxuICAgIHN3aXRjaChvcGVyYXRpb24pIHtcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24ubW92ZVNsZWVwZXIpOlxuICAgICAgICAgICAgcmVkb01vdmVTbGVlcGVyKG9iamVjdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5hZGRFZGdlRnJvbUFuY2hvcik6XG4gICAgICAgICAgICByZWRvTW92ZUFuY2hvcihvYmplY3QsIHBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24ubW92ZUhlYWQpOlxuICAgICAgICAgICAgcmVkb01vdmVIZWFkKG9iamVjdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5kZWxldGUpOlxuICAgICAgICAgICAgcmVkb0RlbGV0ZUl0ZW1zKG9iamVjdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24ucGFzdGUpOlxuICAgICAgICAgICAgcmVkb1Bhc3RlKG9iamVjdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgKTtcbn1cblxuXG4vKipcbiAqIFJlZG8gbW92ZSBzbGVlcGVyIG9wZXJhdGlvblxuICogQHBhcmFtIHsqfSBvYmplY3QgUmVjaWV2ZWQgY3VycmVudCBzbGVlcGVyIG5vZGVcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIG9wZXJhdGlvbiBwYXJhbWV0ZXJzXG4gKi9cbmZ1bmN0aW9uIHJlZG9Nb3ZlU2xlZXBlcihvYmplY3QsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gb2JqZWN0LmNhbnZhc0luZm9ybWF0aW9uXG4gICAgY29uc3QgeyBjaGFuZ2VMb2NhdGlvbiB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IHJlY292ZXJMb2NhdGlvbiA9IHtcbiAgICAgICAgeDogeCArIGNoYW5nZUxvY2F0aW9uLngsXG4gICAgICAgIHk6IHkgKyBjaGFuZ2VMb2NhdGlvbi55LFxuICAgIH1cblxuICAgIC8vIENoYW5nZSBzbGVlcGVyIGNhbnZhcyBsb2NhdGlvblxuICAgIG9iamVjdC5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbihyZWNvdmVyTG9jYXRpb24pO1xuXG4gICAgLy8gQ2hhbmdlIHRoZSBjb25uZWN0ZWQgb3V0Y29taW5nIGVkZ2VzJyBsb2NhdGlvblxuICAgIGZvciAoY29uc3QgZWRnZSBvZiBvYmplY3QuZWRnZUxpc3QpIHtcbiAgICAgICAgY29uc3QgZWRnZVJlY292ZXJMb2NhdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGVkZ2Uuc3RhcnRMb2NhdGlvbi54ICsgY2hhbmdlTG9jYXRpb24ueCxcbiAgICAgICAgICAgIHk6IGVkZ2Uuc3RhcnRMb2NhdGlvbi55ICsgY2hhbmdlTG9jYXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICBlZGdlLnNldExvY2F0aW9uKFxuICAgICAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgICAgIGVkZ2VSZWNvdmVyTG9jYXRpb24sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBpbmNvbWluZyBlZGdlcycgbG9jYXRpb25cbiAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygb2JqZWN0LmluY29taW5nRWRnZUxpc3QpIHtcbiAgICAgICAgY29uc3QgZWRnZVJlY292ZXJMb2NhdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGVkZ2UuZW5kTG9jYXRpb24ueCArIGNoYW5nZUxvY2F0aW9uLngsXG4gICAgICAgICAgICB5OiBlZGdlLmVuZExvY2F0aW9uLnkgKyBjaGFuZ2VMb2NhdGlvbi55LFxuICAgICAgICB9O1xuXG4gICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oXG4gICAgICAgICAgICAnZW5kJyxcbiAgICAgICAgICAgIGVkZ2VSZWNvdmVyTG9jYXRpb24sXG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlZG8gbW92ZSBhbmNob3Igb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBSZWNpZXZlZCBlZGdlIG9iamVjdFxuICogQHBhcmFtIHsqfSBwYXJhbXMgdGhlIHNsZWVwZXIgbm9kZSB3aGVyZSB0aGUgZWRnZSBzdGFydFxuICovXG5mdW5jdGlvbiByZWRvTW92ZUFuY2hvcihvYmplY3QsIHBhcmFtcykge1xuICAgIC8vIFJlbW92ZSB0aGUgZWRnZSBjcmVhdGVkXG4gICAgb2JqZWN0LnJlY292ZXJTZWxmKCk7XG59XG5cbi8qKlxuICogVW5kbyBtb3ZlIGhlYWQgb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICovXG5mdW5jdGlvbiByZWRvTW92ZUhlYWQob2JqZWN0LCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IGNoYW5nZUVuZExvY2F0aW9uIH0gPSBwYXJhbXM7XG5cbiAgICAvLyBSZWNvdmVyIGVnZGUgZW5kIGxvY2F0aW9uXG4gICAgY29uc3QgcmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICB4OiBvYmplY3QuZW5kTG9jYXRpb24ueCArIGNoYW5nZUVuZExvY2F0aW9uLngsXG4gICAgICAgIHk6IG9iamVjdC5lbmRMb2NhdGlvbi55ICsgY2hhbmdlRW5kTG9jYXRpb24ueSxcbiAgICB9O1xuXG4gICAgb2JqZWN0LnNldExvY2F0aW9uKFxuICAgICAgICAnZW5kJyxcbiAgICAgICAgcmVjb3ZlckxvY2F0aW9uLFxuICAgICk7XG5cbiAgICAvLyBSZWNvdmVyIGFkZGVkIGVuZCBzbGVlcGVyIGlmIG5lZWRlZFxuICAgIGlmICghIXBhcmFtc1snYWRkZWRFbmRTbGVlcGVyJ10pIHtcbiAgICAgICAgcGFyYW1zWydhZGRlZEVuZFNsZWVwZXInXS5hZGRJbmNvbWluZ0VkZ2Uob2JqZWN0KTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVkbyBkZWxldGUgdGhlIGNsaWNrZWQgb2JqZWN0XG4gKiBAcGFyYW0geyp9IG9iamVjdCBEZWxldGVkIG9iamVjdFxuICovXG5mdW5jdGlvbiByZWRvRGVsZXRlSXRlbXMob2JqZWN0KSB7XG4gICAgb2JqZWN0LmRlbGV0ZVNlbGYoKTtcbn1cblxuLyoqXG4gKiBSZWRvIHBhc3RlIHRoZSBpdGVtXG4gKi9cbmZ1bmN0aW9uIHJlZG9QYXN0ZShvYmplY3QpIHtcbiAgICBmb3IgKGxldCBpdGVtIG9mIG9iamVjdCkge1xuICAgICAgICAvLyBUT0RPOiBPbmx5IHN1cHBvcnQgc2xlZXBlciBub3dcbiAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBTbGVlcGVyKSB7XG4gICAgICAgICAgICBpdGVtLnJlY292ZXJTZWxmKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiIsImltcG9ydCB7IFNhdmVkT3BlcmF0aW9uIH0gZnJvbSAnLi9vcGVyYXRpb24nO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFBhaW50ZXJFdmVudE5hbWUgfSBmcm9tICcuLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4uL2NvcmUvZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXInO1xuXG4vKipcbiAqIFVuZG8gY29udHJvbGxlciB0byBhY3R1YWxseSBkZWFsIHdpdGggdGhlIHVuZG9pbmcgdGhlIHRhc2tzXG4gKiBAcGFyYW0geyp9IHRhc2sgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmRvQ29udHJvbGxlcih0YXNrKSB7XG4gICAgY29uc3Qge1xuICAgICAgICBvYmplY3QsIFxuICAgICAgICBwYXJhbXMsIFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgfSA9IHRhc2s7XG5cbiAgICBzd2l0Y2gob3BlcmF0aW9uKSB7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLm1vdmVTbGVlcGVyKTpcbiAgICAgICAgICAgIHVuZG9Nb3ZlU2xlZXBlcihvYmplY3QsIHBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24uYWRkRWRnZUZyb21BbmNob3IpOlxuICAgICAgICAgICAgdW5kb01vdmVBbmNob3Iob2JqZWN0LCBwYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLm1vdmVIZWFkKTpcbiAgICAgICAgICAgIHVuZG9Nb3ZlSGVhZChvYmplY3QsIHBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24uZGVsZXRlKTpcbiAgICAgICAgICAgIHVuZG9EZWxldGVJdGVtcyhvYmplY3QpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLnBhc3RlKTpcbiAgICAgICAgICAgIHVuZG9QYXN0ZShvYmplY3QpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICk7XG59XG5cbi8qKlxuICogVW5kbyBtb3ZlIHNsZWVwZXIgb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBSZWNpZXZlZCBjdXJyZW50IHNsZWVwZXIgbm9kZVxuICogQHBhcmFtIHsqfSBwYXJhbXMgb3BlcmF0aW9uIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gdW5kb01vdmVTbGVlcGVyKG9iamVjdCwgcGFyYW1zKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBvYmplY3QuY2FudmFzSW5mb3JtYXRpb25cbiAgICBjb25zdCB7IGNoYW5nZUxvY2F0aW9uIH0gPSBwYXJhbXM7XG4gICAgY29uc3QgcmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICB4OiB4IC0gY2hhbmdlTG9jYXRpb24ueCxcbiAgICAgICAgeTogeSAtIGNoYW5nZUxvY2F0aW9uLnksXG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHNsZWVwZXIgY2FudmFzIGxvY2F0aW9uXG4gICAgb2JqZWN0LmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHJlY292ZXJMb2NhdGlvbik7XG5cbiAgICAvLyBDaGFuZ2UgdGhlIGNvbm5lY3RlZCBvdXRjb21pbmcgZWRnZXMnIGxvY2F0aW9uXG4gICAgZm9yIChjb25zdCBlZGdlIG9mIG9iamVjdC5lZGdlTGlzdCkge1xuICAgICAgICBjb25zdCBlZGdlUmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZWRnZS5zdGFydExvY2F0aW9uLnggLSBjaGFuZ2VMb2NhdGlvbi54LFxuICAgICAgICAgICAgeTogZWRnZS5zdGFydExvY2F0aW9uLnkgLSBjaGFuZ2VMb2NhdGlvbi55LFxuICAgICAgICB9O1xuXG4gICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oXG4gICAgICAgICAgICAnc3RhcnQnLFxuICAgICAgICAgICAgZWRnZVJlY292ZXJMb2NhdGlvbixcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIGluY29taW5nIGVkZ2VzJyBsb2NhdGlvblxuICAgIGZvciAoY29uc3QgZWRnZSBvZiBvYmplY3QuaW5jb21pbmdFZGdlTGlzdCkge1xuICAgICAgICBjb25zdCBlZGdlUmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZWRnZS5lbmRMb2NhdGlvbi54IC0gY2hhbmdlTG9jYXRpb24ueCxcbiAgICAgICAgICAgIHk6IGVkZ2UuZW5kTG9jYXRpb24ueSAtIGNoYW5nZUxvY2F0aW9uLnksXG4gICAgICAgIH07XG5cbiAgICAgICAgZWRnZS5zZXRMb2NhdGlvbihcbiAgICAgICAgICAgICdlbmQnLFxuICAgICAgICAgICAgZWRnZVJlY292ZXJMb2NhdGlvbixcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8qKlxuICogVW5kbyBtb3ZlIGFuY2hvciBvcGVyYXRpb25cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFJlY2lldmVkIGVkZ2Ugb2JqZWN0XG4gKiBAcGFyYW0geyp9IHBhcmFtcyB0aGUgc2xlZXBlciBub2RlIHdoZXJlIHRoZSBlZGdlIHN0YXJ0XG4gKi9cbmZ1bmN0aW9uIHVuZG9Nb3ZlQW5jaG9yKG9iamVjdCwgcGFyYW1zKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBlZGdlIGNyZWF0ZWRcbiAgICBvYmplY3QuZGVsZXRlU2VsZigpO1xufVxuXG4vKipcbiAqIFVuZG8gbW92ZSBoZWFkIG9wZXJhdGlvblxuICogQHBhcmFtIHsqfSBvYmplY3QgXG4gKiBAcGFyYW0geyp9IHBhcmFtcyBcbiAqL1xuZnVuY3Rpb24gdW5kb01vdmVIZWFkKG9iamVjdCwgcGFyYW1zKSB7XG4gICAgY29uc3QgeyBjaGFuZ2VFbmRMb2NhdGlvbiB9ID0gcGFyYW1zO1xuXG4gICAgLy8gUmVjb3ZlciBlZ2RlIGVuZCBsb2NhdGlvblxuICAgIGNvbnN0IHJlY292ZXJMb2NhdGlvbiA9IHtcbiAgICAgICAgeDogb2JqZWN0LmVuZExvY2F0aW9uLnggLSBjaGFuZ2VFbmRMb2NhdGlvbi54LFxuICAgICAgICB5OiBvYmplY3QuZW5kTG9jYXRpb24ueSAtIGNoYW5nZUVuZExvY2F0aW9uLnksXG4gICAgfTtcblxuICAgIG9iamVjdC5zZXRMb2NhdGlvbihcbiAgICAgICAgJ2VuZCcsXG4gICAgICAgIHJlY292ZXJMb2NhdGlvbixcbiAgICApO1xuXG4gICAgLy8gUmVtb3ZlIGFkZGVkIGVuZCBzbGVlcGVyIGlmIG5lZWRlZFxuICAgIGlmICghIXBhcmFtc1snYWRkZWRFbmRTbGVlcGVyJ10pIHtcbiAgICAgICAgcGFyYW1zWydhZGRlZEVuZFNsZWVwZXInXS5yZW1vdmVJbmNvbWluZ0VkZ2Uob2JqZWN0KTtcbiAgICB9XG59XG5cbi8qKlxuICogVW5kbyBkZWxldGUgdGhlIGNsaWNrZWQgb2JqZWN0XG4gKiBAcGFyYW0geyp9IG9iamVjdCBEZWxldGVkIG9iamVjdFxuICovXG5mdW5jdGlvbiB1bmRvRGVsZXRlSXRlbXMob2JqZWN0KSB7XG4gICAgb2JqZWN0LnJlY292ZXJTZWxmKCk7XG59XG5cbi8qKlxuICogVW5kbyBQYXN0ZSB0aGUgaXRlbVxuICovXG5mdW5jdGlvbiB1bmRvUGFzdGUob2JqZWN0KSB7XG4gICAgZm9yKGxldCBpdGVtIG9mIG9iamVjdCkge1xuICAgICAgICAvLyBUT0RPOiBPbmx5IHN1cHBvcnQgc2xlZXBlciBub3dcbiAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBTbGVlcGVyKSB7XG4gICAgICAgICAgICBpdGVtLmRlbGV0ZVNlbGYoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFNhdmVkT3BlcmF0aW9uIH0gZnJvbSAnLi9vcGVyYXRpb24nO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFVuZG9SZWRvRXZlbnROYW1lIH0gZnJvbSAnLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IENvcHlQYXN0ZUhvdXNlIH0gZnJvbSAnLi4vY29weS1wYXN0ZS9jb3B5LXBhc3RlLWhvdXNlJztcblxuZXhwb3J0IGNsYXNzIFVuZG9EZWNvcmF0b3Ige1xuICAgIC8qKlxuICAgICAqIERlY29yYXRvciBmb3IgbW91c2UgdXAgZnJvbSBzbGVlcGVyXG4gICAgICovIFxuICAgIHN0YXRpYyBtb3VzZVVwU2xlZXBlckRlY29yYXRvcihjb250cm9sbGVyRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRyYWdTbGVlcGVyTGlzdCwgb3JpZ2luYWxJbmZvKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBDdXJyZW50IFNsZWVwZXIgKE5vdyBubyBzZWxlY3Rpb24gYm94KVxuICAgICAgICAgICAgY29uc3QgY3VycmVudFNsZWVwZXIgPSBkcmFnU2xlZXBlckxpc3RbMF07XG5cbiAgICAgICAgICAgIC8vIEZpbmQgbG9jYXRpb24gY2hhbmdlXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VMb2NhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB4OiBjdXJyZW50U2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi54IC0gb3JpZ2luYWxJbmZvLngsXG4gICAgICAgICAgICAgICAgeTogY3VycmVudFNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueSAtIG9yaWdpbmFsSW5mby55LFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2hhbmdlTG9jYXRpb24ueCAhPT0gMCAmJiBjaGFuZ2VMb2NhdGlvbi55ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZSB0byB1bmRvIHN0YWNrXG4gICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLmFkZE11dGF0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogY3VycmVudFNsZWVwZXIsXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogU2F2ZWRPcGVyYXRpb24ubW92ZVNsZWVwZXIsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJGdW5jdGlvbihkcmFnU2xlZXBlckxpc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjb3JhdG9yIGZvciBtb3VzZSB1cCBmcm9tIGFuY2hvclxuICAgICAqL1xuICAgIHN0YXRpYyBtb3VzZVVwQW5jaG9yRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oc2xlZXBlckFuZEFuY2hvciwgZWRnZSwgY2xvc2VzdE9iamVjdCkge1xuICAgICAgICAgICAgLy8gU2F2ZSB0byB1bmRvIHN0YWNrXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUuYWRkTXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IGVkZ2UsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5hZGRFZGdlRnJvbUFuY2hvcixcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRTbGVlcGVyOiBzbGVlcGVyQW5kQW5jaG9yWzBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgY29udHJvbGxlciBcbiAgICAgICAgICAgIGNvbnRyb2xsZXJGdW5jdGlvbihzbGVlcGVyQW5kQW5jaG9yLCBlZGdlLCBjbG9zZXN0T2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY29yYXRvciBmb3IgbW91c2UgdXAgZnJvbSBoZWFkXG4gICAgICovXG4gICAgc3RhdGljIG1vdXNlVXBIZWFkRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZWRnZSwgY2xvc2VzdE9iamVjdCwgb3JpZ2luYWxMb2NhdGlvbikge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgIGNsb3Nlc3RMb2NhdGlvbixcbiAgICAgICAgICAgICAgICBjbG9zZXN0U2xlZXBlcixcbiAgICAgICAgICAgIH0gPSBjbG9zZXN0T2JqZWN0O1xuXG4gICAgICAgICAgICAvLyBBZGQgbXV0YXRpb24gXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUuYWRkTXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IGVkZ2UsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5tb3ZlSGVhZCxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRW5kTG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNsb3Nlc3RMb2NhdGlvbi54IC0gb3JpZ2luYWxMb2NhdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY2xvc2VzdExvY2F0aW9uLnkgLSBvcmlnaW5hbExvY2F0aW9uLnksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFkZGVkRW5kU2xlZXBlcjogY2xvc2VzdFNsZWVwZXIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBjb250cm9sbGVyXG4gICAgICAgICAgICBjb250cm9sbGVyRnVuY3Rpb24oZWRnZSwgY2xvc2VzdE9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNvcmF0b3IgZm9yIGRlbGV0ZSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyBkZWxldGVJdGVtc0RlY29yYXRvcihjb250cm9sbGVyRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGNsaWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAvLyBBZGQgbXV0YXRpb25cbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgIG9iamVjdDogY2xpY2tPYmplY3QsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5kZWxldGUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBjb250cm9sbGVyXG4gICAgICAgICAgICBjb250cm9sbGVyRnVuY3Rpb24oY2xpY2tPYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjb3JhdG9yIGZvciBwYXN0ZSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyBwYXN0ZURlY29yYXRvcihjb250cm9sbGVyRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gQWRkIG11dGF0aW9uXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUuYWRkTXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IENvcHlQYXN0ZUhvdXNlLnBhY2thZ2UsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5wYXN0ZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgY29udHJvbGxlclxuICAgICAgICAgICAgY29udHJvbGxlckZ1bmN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgdW5kb0NvbnRyb2xsZXIgfSBmcm9tICcuL3VuZG8tY29udHJvbGxlcic7XG5pbXBvcnQgeyBVbmRvUmVkb0V2ZW50TmFtZSB9IGZyb20gJy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgcmVkb0NvbnRyb2xsZXIgfSBmcm9tICcuL3JlZG8tY29udHJvbGxlcic7XG5cbmNsYXNzIFVuZG9SZWRvIHtcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFVuZG9SZWRvKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZighVW5kb1JlZG8uaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIC8vIERlZmluZSB0aGUgc3RhY2sgYW5kIHRoZSBwb2ludGVyXG4gICAgICAgICAgICB0aGlzLnN0YWNrID0gW107XG4gICAgICAgICAgICB0aGlzLnBvaW50ZXIgPSAtMTtcblxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICAgICAgICAgIFVuZG9SZWRvLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBldmVudCBuYW1lXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdW5kbyxcbiAgICAgICAgICAgIGFkZE11dGF0aW9uLFxuICAgICAgICAgICAgcmVkbyxcbiAgICAgICAgfSA9IFVuZG9SZWRvRXZlbnROYW1lO1xuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoYWRkTXV0YXRpb24sIHRoaXMuYWRkTXV0YXRpb25Ub1N0YWNrLmJpbmQodGhpcykpO1xuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIodW5kbywgdGhpcy51bmRvLmJpbmQodGhpcykpO1xuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIocmVkbywgdGhpcy5yZWRvLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBtdXRhdGlvbiB0byB1bmRvIHN0YWNrXG4gICAgICogQHBhcmFtIHsqfSBtdXRhdGlvbiBcbiAgICAgKi9cbiAgICBhZGRNdXRhdGlvblRvU3RhY2sobXV0YXRpb24pIHtcbiAgICAgICAgdGhpcy5wb2ludGVyICs9IDE7XG5cbiAgICAgICAgLy8gQnJlYWsgdGhlIHN0YWNrIG9yZGVyLCBpZ25vcmUgdGhlIG9wZXJhdGlvbiBhZnRlciBwb2ludGVyXG4gICAgICAgIGlmICh0aGlzLnBvaW50ZXIgIT09IHRoaXMuc3RhY2subGVuZ3RoICYmIHRoaXMucG9pbnRlciA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0YWNrLnNwbGljZSh0aGlzLnBvaW50ZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGFjay5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKG11dGF0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmRvIHRoZSBvcGVyYXRpb25cbiAgICAgKi9cbiAgICB1bmRvKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggIT09IDAgfHwgdGhpcy5wb2ludGVyICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgdW5kb1Rhc2sgPSB0aGlzLnN0YWNrW3RoaXMucG9pbnRlcl07XG4gICAgICAgICAgICB1bmRvQ29udHJvbGxlcih1bmRvVGFzayk7XG5cbiAgICAgICAgICAgIHRoaXMucG9pbnRlciAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVkbyB0aGUgb3BlcmF0aW9uXG4gICAgICovXG4gICAgcmVkbygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoICE9PSAwICYmIHRoaXMucG9pbnRlciAhPT0gdGhpcy5zdGFjay5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLnBvaW50ZXIgKz0gMTtcblxuICAgICAgICAgICAgY29uc3QgcmVkb1Rhc2sgPSB0aGlzLnN0YWNrW3RoaXMucG9pbnRlcl07XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlZG9UYXNrKTtcblxuICAgICAgICAgICAgcmVkb0NvbnRyb2xsZXIocmVkb1Rhc2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBVbmRvUmVkbyB9OyIsImNsYXNzIEV2ZW50IHtcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghRXZlbnQuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnREaWN0aW9uYXJ5ID0ge307XG4gICAgICAgICAgICBFdmVudC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEFkZCB0byB3aG9sZSB3aW5kb3dcbiAgICAgICAgICAgIHdpbmRvdy5FdmVudGVyID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRXZlbnQuaW5zdGFuY2U7IFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2ZW50TGlzdGVuZXIgZm9yIGFkZGluZyBldmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIC8vIEZpbmQgaWYgZXZlbnROYW1lIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGlmICghKGV2ZW50TmFtZSBpbiB0aGlzLmV2ZW50RGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnREaWN0aW9uYXJ5W2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gUHVzaCB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gaW50byBsaXN0XG4gICAgICAgIHRoaXMuZXZlbnREaWN0aW9uYXJ5W2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSBsaXN0ZW5lciBnaXZlbiBhIHNwZWNpZmljIGV2ZW50IGFuZCBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbiB8IHVuZGVmaW5lZH0gY2FsbGJhY2sgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIC8vIFRocm93IEVycm9yIHdoZW4gbm90IGZpbmQgdGhlIGV2ZW50XG4gICAgICAgIGlmICghKGV2ZW50TmFtZSBpbiB0aGlzLmV2ZW50RGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0V2ZW50IE5vdCBSZWdpc3RlcmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBKdXN0IHJlbW92ZSB0aGUgc3BlY2lmaWMgY2FsbGJhY2sgZnVuY3Rpb24gaWYgY2FsbGJhY2sgZ2l2ZW5cbiAgICAgICAgaWYgKCEhY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRFdmVudExpc3QgPSB0aGlzLmV2ZW50RGljdGlvbmFyeVtldmVudE5hbWVdO1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tJbmRleCA9IGN1cnJlbnRFdmVudExpc3QuZmluZEluZGV4KHNhdmVkQ2FsbGJhY2tGdW5jdGlvbiA9PiBcbiAgICAgICAgICAgICAgICBzYXZlZENhbGxiYWNrRnVuY3Rpb24gPT09IGNhbGxiYWNrXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBSYWlzZSBlcnJvciBpZiBjYWxsYmFjayBmdW5jdGlvbiBub3QgZm91bmRcbiAgICAgICAgICAgIGlmIChjYWxsYmFja0luZGV4ID09PSAtMSB8fCBjYWxsYmFja0luZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdDYWxsYmFjayBmdW5jdGlvbiBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICAgICAgY3VycmVudEV2ZW50TGlzdC5zcGxpY2UoY2FsbGJhY2tJbmRleCwgMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGlzIGV2ZW50IGlmIGV2ZW50IGxpc3QgaXMgZW1wdHkgXG4gICAgICAgICAgICBpZiAoY3VycmVudEV2ZW50TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudERpY3Rpb25hcnlbZXZlbnROYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIERpcmVjdGx5IGRlbGV0ZSB0aGlzIGV2ZW50XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudERpY3Rpb25hcnlbZXZlbnROYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGRpc3B0YWNoZXIsIHRyaWdnZXIgdGhlIHJlbGF0ZWQgZXZlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFxuICAgICAqIEBwYXJhbSAgey4uLmFueX0gYXJncyBcbiAgICAgKi9cbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgLi4uYXJncykge1xuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBldmVudFxuICAgICAgICBpZiAoIShldmVudE5hbWUgaW4gdGhpcy5ldmVudERpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdFdmVudCBOb3QgUmVnaXN0ZXJlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXRlcmF0ZSBmb3IgdHJpZ2dlclxuICAgICAgICB0aGlzLmV2ZW50RGljdGlvbmFyeVtldmVudE5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRXZlbnRlciA9IEV2ZW50LmdldEluc3RhbmNlKCk7IiwiLyoqXG4gKiBGaW5kIGlmIGl0IGlzIHBvc3NpYmxlIHRvIGJlIGFjdGl2ZVxuICogQHBhcmFtIHtmbG9hdH0gd2VpZ2h0IFxuICogQHJldHVybnMge2Jvb2x9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3Rpdml0eUJ5V2VpZ2h0KHdlaWdodCkge1xuICAgIGNvbnN0IHN1ZG9SYW5kb21WYXJpYWJsZSA9IE1hdGgucmFuZG9tKCk7XG4gICAgcmV0dXJuIHN1ZG9SYW5kb21WYXJpYWJsZSA8PSB3ZWlnaHQ7XG59XG5cbi8qKlxuICogRmluZCBpZiBnaXZlbiBwb2ludCBuZWFyIHRoZSBsaW5lXG4gKiBAcGFyYW0geyp9IGxpbmVTdGFydExvY2F0aW9uIFxuICogQHBhcmFtIHsqfSBsaW5lRW5kTG9jYXRpb24gXG4gKiBAcGFyYW0geyp9IHggXG4gKiBAcGFyYW0geyp9IHkgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUG9pbnRJbkxpbmUobGluZVN0YXJ0TG9jYXRpb24sIGxpbmVFbmRMb2NhdGlvbiwgeCwgeSkge1xuICAgIGlmKFxuICAgICAgICBsaW5lRW5kTG9jYXRpb24ueCA+IGxpbmVTdGFydExvY2F0aW9uLnggXG4gICAgICAgICYmIChcbiAgICAgICAgICAgIHggPiBsaW5lRW5kTG9jYXRpb24ueCBcbiAgICAgICAgICAgIHx8IHggPCBsaW5lU3RhcnRMb2NhdGlvbi54XG4gICAgICAgIClcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKFxuICAgICAgICBsaW5lRW5kTG9jYXRpb24ueCA8IGxpbmVTdGFydExvY2F0aW9uLnggXG4gICAgICAgICYmIChcbiAgICAgICAgICAgIHggPCBsaW5lRW5kTG9jYXRpb24ueCBcbiAgICAgICAgICAgIHx8IHggPiBsaW5lU3RhcnRMb2NhdGlvbi54XG4gICAgICAgIClcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBsaW5lIFxuICAgIGNvbnN0IHNsb3BlID0gKGxpbmVFbmRMb2NhdGlvbi55IC0gbGluZVN0YXJ0TG9jYXRpb24ueSkgLyBcbiAgICAobGluZUVuZExvY2F0aW9uLnggLSBsaW5lU3RhcnRMb2NhdGlvbi54KTtcblxuICAgIC8vIEZpbmQgdGhlIGFycm93IHJlZ2lvblxuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuKHNsb3BlKTtcbiAgICBjb25zdCB4TGVuZ3RoID0gMTAgKiAwLjUgKiAzKiowLjUgKiBNYXRoLmFicyhNYXRoLmNvcyhhbmdsZSkpO1xuICAgIGlmIChcbiAgICAgICAgbGluZUVuZExvY2F0aW9uLnggPiBsaW5lU3RhcnRMb2NhdGlvbi54IFxuICAgICAgICAmJiB4ID4gbGluZUVuZExvY2F0aW9uLnggLSB4TGVuZ3RoXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgIGxpbmVFbmRMb2NhdGlvbi54IDwgbGluZVN0YXJ0TG9jYXRpb24ueFxuICAgICAgICAmJiB4IDwgbGluZUVuZExvY2F0aW9uLnggKyB4TGVuZ3RoXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGludGVyY2VwdCA9IGxpbmVTdGFydExvY2F0aW9uLnkgLSBzbG9wZSAqIGxpbmVTdGFydExvY2F0aW9uLng7XG5cbiAgICAvLyBGaW5kIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGxpbmUgYW5kIHBvaW50XG4gICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmFicyhpbnRlcmNlcHQgKyBzbG9wZSAqIHggLSB5KSAvIE1hdGguc3FydCgxICsgc2xvcGUqKjIpO1xuXG4gICAgcmV0dXJuIGRpc3RhbmNlIDw9IDU7XG59IiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUZsYWdzID0gL1xcdyokLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIHN1cHBvcnRlZCBieSBgXy5jbG9uZWAuICovXG52YXIgY2xvbmVhYmxlVGFncyA9IHt9O1xuY2xvbmVhYmxlVGFnc1thcmdzVGFnXSA9IGNsb25lYWJsZVRhZ3NbYXJyYXlUYWddID1cbmNsb25lYWJsZVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRhVmlld1RhZ10gPVxuY2xvbmVhYmxlVGFnc1tib29sVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPVxuY2xvbmVhYmxlVGFnc1tmbG9hdDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZmxvYXQ2NFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50MTZUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50MzJUYWddID0gY2xvbmVhYmxlVGFnc1ttYXBUYWddID1cbmNsb25lYWJsZVRhZ3NbbnVtYmVyVGFnXSA9IGNsb25lYWJsZVRhZ3Nbb2JqZWN0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3JlZ2V4cFRhZ10gPSBjbG9uZWFibGVUYWdzW3NldFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tzdHJpbmdUYWddID0gY2xvbmVhYmxlVGFnc1tzeW1ib2xUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDhUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50OENsYW1wZWRUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDE2VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG5jbG9uZWFibGVUYWdzW2Vycm9yVGFnXSA9IGNsb25lYWJsZVRhZ3NbZnVuY1RhZ10gPVxuY2xvbmVhYmxlVGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqXG4gKiBBZGRzIHRoZSBrZXktdmFsdWUgYHBhaXJgIHRvIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gcGFpciBUaGUga2V5LXZhbHVlIHBhaXIgdG8gYWRkLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgbWFwYC5cbiAqL1xuZnVuY3Rpb24gYWRkTWFwRW50cnkobWFwLCBwYWlyKSB7XG4gIC8vIERvbid0IHJldHVybiBgbWFwLnNldGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIG1hcC5zZXQocGFpclswXSwgcGFpclsxXSk7XG4gIHJldHVybiBtYXA7XG59XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYWRkLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgc2V0YC5cbiAqL1xuZnVuY3Rpb24gYWRkU2V0RW50cnkoc2V0LCB2YWx1ZSkge1xuICAvLyBEb24ndCByZXR1cm4gYHNldC5hZGRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBzZXQuYWRkKHZhbHVlKTtcbiAgcmV0dXJuIHNldDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gKiAgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBTeW1ib2wgPSByb290LlN5bWJvbCxcbiAgICBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5LFxuICAgIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpLFxuICAgIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGUsXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICAgIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3JyksXG4gICAgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyksXG4gICAgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKSxcbiAgICBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gZGF0YVtrZXldICE9PSB1bmRlZmluZWQgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICBnZXRNYXBEYXRhKHRoaXMsIGtleSkuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfX1snZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBjYWNoZSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChjYWNoZSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGNhY2hlLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjYWNoZSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGNhY2hlLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgLy8gU2FmYXJpIDkgbWFrZXMgYGFyZ3VtZW50cy5sZW5ndGhgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHZhciByZXN1bHQgPSAoaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKVxuICAgID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKVxuICAgIDogW107XG5cbiAgdmFyIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGgsXG4gICAgICBza2lwSW5kZXhlcyA9ICEhbGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKGtleSA9PSAnbGVuZ3RoJyB8fCBpc0luZGV4KGtleSwgbGVuZ3RoKSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jbG9uZWAgYW5kIGBfLmNsb25lRGVlcGAgd2hpY2ggdHJhY2tzXG4gKiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNGdWxsXSBTcGVjaWZ5IGEgY2xvbmUgaW5jbHVkaW5nIHN5bWJvbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgcGFyZW50IG9iamVjdCBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGFuZCB0aGVpciBjbG9uZSBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xvbmUodmFsdWUsIGlzRGVlcCwgaXNGdWxsLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICByZXN1bHQgPSBvYmplY3QgPyBjdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIDogY3VzdG9taXplcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzQXJyKSB7XG4gICAgcmVzdWx0ID0gaW5pdENsb25lQXJyYXkodmFsdWUpO1xuICAgIGlmICghaXNEZWVwKSB7XG4gICAgICByZXR1cm4gY29weUFycmF5KHZhbHVlLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgICAgaXNGdW5jID0gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcblxuICAgIGlmIChpc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjbG9uZUJ1ZmZlcih2YWx1ZSwgaXNEZWVwKTtcbiAgICB9XG4gICAgaWYgKHRhZyA9PSBvYmplY3RUYWcgfHwgdGFnID09IGFyZ3NUYWcgfHwgKGlzRnVuYyAmJiAhb2JqZWN0KSkge1xuICAgICAgaWYgKGlzSG9zdE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVPYmplY3QoaXNGdW5jID8ge30gOiB2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gY29weVN5bWJvbHModmFsdWUsIGJhc2VBc3NpZ24ocmVzdWx0LCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsb25lYWJsZVRhZ3NbdGFnXSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZUJ5VGFnKHZhbHVlLCB0YWcsIGJhc2VDbG9uZSwgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICBpZiAoIWlzQXJyKSB7XG4gICAgdmFyIHByb3BzID0gaXNGdWxsID8gZ2V0QWxsS2V5cyh2YWx1ZSkgOiBrZXlzKHZhbHVlKTtcbiAgfVxuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGlzRGVlcCwgaXNGdWxsLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFjaykpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvdHlwZSBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDcmVhdGUocHJvdG8pIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHByb3RvKSA/IG9iamVjdENyZWF0ZShwcm90bykgOiB7fTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihidWZmZXIubGVuZ3RoKTtcbiAgYnVmZmVyLmNvcHkocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgZGF0YVZpZXdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVZpZXcgVGhlIGRhdGEgdmlldyB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgZGF0YSB2aWV3LlxuICovXG5mdW5jdGlvbiBjbG9uZURhdGFWaWV3KGRhdGFWaWV3LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIoZGF0YVZpZXcuYnVmZmVyKSA6IGRhdGFWaWV3LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyBkYXRhVmlldy5jb25zdHJ1Y3RvcihidWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIG1hcC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVNYXAobWFwLCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMobWFwVG9BcnJheShtYXApLCB0cnVlKSA6IG1hcFRvQXJyYXkobWFwKTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRNYXBFbnRyeSwgbmV3IG1hcC5jb25zdHJ1Y3Rvcik7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzZXQuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU2V0KHNldCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKHNldFRvQXJyYXkoc2V0KSwgdHJ1ZSkgOiBzZXRUb0FycmF5KHNldCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkU2V0RW50cnksIG5ldyBzZXQuY29uc3RydWN0b3IpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgYHN5bWJvbGAgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sIFRoZSBzeW1ib2wgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU3ltYm9sKHN5bWJvbCkge1xuICByZXR1cm4gc3ltYm9sVmFsdWVPZiA/IE9iamVjdChzeW1ib2xWYWx1ZU9mLmNhbGwoc3ltYm9sKSkgOiB7fTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkID8gc291cmNlW2tleV0gOiBuZXdWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbCBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9scyhzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbCBwcm9wZXJ0aWVzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gbmF0aXZlR2V0U3ltYm9scyA/IG92ZXJBcmcobmF0aXZlR2V0U3ltYm9scywgT2JqZWN0KSA6IHN0dWJBcnJheTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExLFxuLy8gZm9yIGRhdGEgdmlld3MgaW4gRWRnZSA8IDE0LCBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcy5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGNsb25lRnVuYywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVNYXAob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIGNsb25lU2V0KG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmNsb25lYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBjbG9uZXMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVjdXJzaXZlbHkgY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZGVlcCBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAnYSc6IDEgfSwgeyAnYic6IDIgfV07XG4gKlxuICogdmFyIGRlZXAgPSBfLmNsb25lRGVlcChvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKGRlZXBbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlKSB7XG4gIHJldHVybiBiYXNlQ2xvbmUodmFsdWUsIHRydWUsIHRydWUpO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAoIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKSB8fCBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzVGFnKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGVlcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsImltcG9ydCB7IENhbnZhcyB9IGZyb20gJy4uL2NvcmUvdmlldy1sYXllci9jYW52YXMnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4uL2NvcmUvZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXInO1xuXG4vLyBJbml0IENhbnZhc1xudmFyIG15Q2FudmFzID0gQ2FudmFzLmdldEluc3RhbmNlKCk7XG5cbi8vIC8vIEFkZCBhIHNsZWVwZXJcbi8vIG5ldyBTbGVlcGVyKCk7XG4vLyBuZXcgU2xlZXBlcihcbi8vICAgICBmYWxzZSxcbi8vICAgICB7XG4vLyAgICAgICAgIGRyYXdUeXBlOiAnY2lyY2xlJyxcbi8vICAgICAgICAgeDogNjAwLFxuLy8gICAgICAgICB5OiA2MDAsXG4vLyAgICAgICAgIHJhZGl1czogMzAsXG4vLyAgICAgICAgIHN0YXJ0QW5nbGU6IDAsXG4vLyAgICAgICAgIGVuZEFuZ2xlOiAyICogTWF0aC5QSSxcbi8vICAgICAgICAgaXNGaWxsZWQ6IHRydWUsXG4vLyAgICAgICAgIGZpbGxDb2xvcjogJyNGRkNDMzMnLFxuLy8gICAgIH1cbi8vICk7XG5cbi8vIG5ldyBTbGVlcGVyKFxuLy8gICAgIGZhbHNlLFxuLy8gICAgIHtcbi8vICAgICAgICAgZHJhd1R5cGU6ICdjaXJjbGUnLFxuLy8gICAgICAgICB4OiA3MDAsXG4vLyAgICAgICAgIHk6IDcwMCxcbi8vICAgICAgICAgcmFkaXVzOiAzMCxcbi8vICAgICAgICAgc3RhcnRBbmdsZTogMCxcbi8vICAgICAgICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuLy8gICAgICAgICBpc0ZpbGxlZDogdHJ1ZSxcbi8vICAgICAgICAgZmlsbENvbG9yOiAnI0ZGQ0MzMycsXG4vLyAgICAgfVxuLy8gKTtcblxuLy8gbmV3IFNsZWVwZXIoXG4vLyAgICAgZmFsc2UsXG4vLyAgICAge1xuLy8gICAgICAgICBkcmF3VHlwZTogJ2NpcmNsZScsXG4vLyAgICAgICAgIHg6IDUwMCxcbi8vICAgICAgICAgeTogNjAwLFxuLy8gICAgICAgICByYWRpdXM6IDMwLFxuLy8gICAgICAgICBzdGFydEFuZ2xlOiAwLFxuLy8gICAgICAgICBlbmRBbmdsZTogMiAqIE1hdGguUEksXG4vLyAgICAgICAgIGlzRmlsbGVkOiB0cnVlLFxuLy8gICAgICAgICBmaWxsQ29sb3I6ICcjRkZDQzMzJyxcbi8vICAgICB9XG4vLyApO1xuXG5cbi8vIG5ldyBTbGVlcGVyKFxuLy8gICAgIGZhbHNlLFxuLy8gICAgIHtcbi8vICAgICAgICAgZHJhd1R5cGU6ICdjaXJjbGUnLFxuLy8gICAgICAgICB4OiA2MDAsXG4vLyAgICAgICAgIHk6IDcwMCxcbi8vICAgICAgICAgcmFkaXVzOiAzMCxcbi8vICAgICAgICAgc3RhcnRBbmdsZTogMCxcbi8vICAgICAgICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuLy8gICAgICAgICBpc0ZpbGxlZDogdHJ1ZSxcbi8vICAgICAgICAgZmlsbENvbG9yOiAnI0ZGQ0MzMycsXG4vLyAgICAgfVxuLy8gKTtcblxuLy8gbmV3IFNsZWVwZXIoXG4vLyAgICAgZmFsc2UsXG4vLyAgICAge1xuLy8gICAgICAgICBkcmF3VHlwZTogJ2NpcmNsZScsXG4vLyAgICAgICAgIHg6IDcwMCxcbi8vICAgICAgICAgeTogODAwLFxuLy8gICAgICAgICByYWRpdXM6IDMwLFxuLy8gICAgICAgICBzdGFydEFuZ2xlOiAwLFxuLy8gICAgICAgICBlbmRBbmdsZTogMiAqIE1hdGguUEksXG4vLyAgICAgICAgIGlzRmlsbGVkOiB0cnVlLFxuLy8gICAgICAgICBmaWxsQ29sb3I6ICcjRkZDQzMzJyxcbi8vICAgICB9XG4vLyApO1xuXG5cbi8vIC8vIEVuYWJsZSBob3QgdXBkYXRpbmdcbi8vIGlmIChtb2R1bGUuaG90KSB7XG4vLyAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4uL2NvcmUvdmlldy1sYXllci9jYW52YXMnLCBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgcmV0dXJuO1xuLy8gICAgIH0pXG4vLyB9XG4iXSwibmFtZXMiOlsiY2xvbmVEZWVwIiwiQ29weVBhc3RlSG91c2UiLCJob3VzZSIsImluc3RhbmNlIiwib2JqIiwiQXJyYXkiLCJpdGVtIiwicHVzaCIsIlNsZWVwZXJQb29sZXIiLCJFZGdlUG9vbGVyIiwiaXNQb2ludEluTGluZSIsIk1pbmltYWxEaXN0YW5jZUZvckxvY2F0ZSIsIkFjdGlvblV0aWxzIiwiY2FudmFzIiwibG9jYXRpb24iLCJmaW5kRnVuY3Rpb25zTGlzdCIsImZpbmRMb2NhdGVkTGluZU9ySGVhZCIsImZpbmRMb2NhdGVkQW5jaG9yIiwiZmluZExvY2F0ZWRTbGVlcGVyIiwiZmluZEZ1bmN0aW9uIiwiZmluZFJlc3VsdCIsImNhbnZhc0NvbnRleHQiLCJnZXRDb250ZXh0IiwiaXNMb2NhdGVkSW5DaXJjbGUiLCJjaXJjbGVQYXRoIiwieCIsInkiLCJpc1BvaW50SW5QYXRoIiwibG9jYXRpb25IYW5kbGVyTWFwcyIsImJpbmQiLCJpbmRleCIsInBvb2wiLCJsZW5ndGgiLCJzbGVlcGVyIiwic2xlZXBlclN0eWxlIiwiY2FudmFzSW5mb3JtYXRpb24iLCJzbGVlcGVyQ2FudmFzUGF0aCIsImNhbnZhc1BhdGgiLCJkcmF3VHlwZSIsInJlc3VsdCIsInR5cGUiLCJpc0FjdGl2ZSIsImNhbnZhc0FuY2hvcnNQYXRoTGlzdCIsInNsZWVwZXJBbmNob3IiLCJhbmNob3JQYXRoIiwiZWRnZSIsImhlYWQiLCJzdGFydExvY2F0aW9uIiwiZW5kTG9jYXRpb24iLCJkcmFnZ2VkU2xlZXBlckxpc3QiLCJpc0RyYWciLCJmbiIsIndhaXRUaW1lIiwidGltZXIiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsInNldFRpbWVvdXQiLCJhcHBseSIsInNsZWVwZXJYIiwic2xlZXBlclkiLCJkaXN0YW5jZSIsIk1hdGgiLCJzcXJ0IiwicmFkaXVzIiwibG9jYXRlZFNsZWVwZXIiLCJmaW5kQ2xvc2VzdFNsZWVwZXIiLCJjb25zb2xlIiwibG9nIiwibG9jYXRlZFNsZWVwZXJYIiwibG9jYXRlZFNsZWVwZXJZIiwiYW5jaG9yTG9jYXRpb25MaXN0IiwibWluRGlzdGFuY2UiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwibWluTG9jYXRpb24iLCJhbmNob3JMb2NhdGlvbiIsImNsb3Nlc3RMb2NhdGlvbiIsImNsb3Nlc3RTbGVlcGVyIiwibW91c2VBY3Rpb25Nb2RlIiwiZG93bk9uU2xlZXBlciIsImRvd25PbkFuY2hvciIsImRvd25PbkxpbmUiLCJkb3duT25IZWFkIiwiZG93bk9uQmFja2dyb3VuZCIsImRvd25Pbk5vbmUiLCJkb3duT25UZXh0IiwiQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZSIsIlBhaW50ZXJFdmVudE5hbWUiLCJFdmVudGVyIiwiVW5kb0RlY29yYXRvciIsIlNsZWVwZXIiLCJFZGdlIiwiS2V5Ym9hcmRBY3Rpb25Db250cm9sbGVyIiwiaW5pdEV2ZW50SGFuZGxlciIsImtleWJvYXJkRGVsZXRlIiwia2V5Ym9hcmRJbnB1dCIsImtleWJvYXJkVGV4dFVuZG8iLCJrZXlib2FyZFRleHRSZWRvIiwia2V5Ym9hcmRUZXh0RGVsZXRlIiwia2V5Ym9hcmRDb3B5Iiwia2V5Ym9hcmRQYXN0ZSIsImV2ZW50TmFtZXNNYXAiLCJkZWxldGVJdGVtc0RlY29yYXRvciIsImtleWJvYXJkRGVsZXRlQ29udHJvbGxlciIsInBhc3RlRGVjb3JhdG9yIiwia2V5Ym9hcmRQYXN0ZUNvbnRyb2xsZXIiLCJrZXlib2FyZENvcHlDb250cm9sbGVyIiwia2V5Ym9hcmRJbnB1dENvbnRyb2xsZXIiLCJrZXlib2FyZFRleHRVbmRvQ29udHJvbGxlciIsImtleWJvYXJkVGV4dFJlZG9Db250cm9sbGVyIiwia2V5Ym9hcmRUZXh0RGVsZXRlQ29udHJvbGxlciIsImV2ZW50TmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja09iamVjdCIsImRlbGV0ZVNlbGYiLCJkaXNwYXRjaEV2ZW50IiwicmVwYWludCIsImlucHV0S2V5IiwibmV3Q29udGVudCIsInRleHRJbmZvcm1hdGlvbiIsImNvbnRlbnQiLCJ0ZXh0VGVtcFN0YWNrIiwidGV4dCIsInVuZG8iLCJyZWRvIiwic3RyaW5nTGVuZ3RoIiwic3Vic3RyaW5nIiwib2JqZWN0IiwicGFja2FnZSIsImNvcHllZE9iamVjdExpc3QiLCJwcmVwYXJlRm9yUGFzdGUiLCJyZWNvdmVyU2VsZiIsIlVuZG9SZWRvRXZlbnROYW1lIiwiS2V5Ym9hcmRBY3Rpb24iLCJtb3VzZUFjdGlvbiIsImluaXRBY3Rpb24iLCJhY3Rpb25zTWFwIiwia2V5RG93biIsImFjdGlvbiIsIndpbmRvdyIsImV2ZW50IiwiY29kZSIsImtleUNvZGUiLCJpc1RleHRNb2RlT24iLCJtb3VzZURvd25FbGVtZW50IiwiaXNUZXh0TW9kZSIsIl9oYW5kbGVyVGV4dERlbGV0ZSIsIl9oYW5kbGVyRGVsZXRlIiwiY3RybEtleSIsIm1ldGFLZXkiLCJzaGlmdEtleSIsIl9oYW5kbGVOb3JtYWwiLCJrZXkiLCJ0b1N0cmluZyIsIkRlZXBDbG9uZUluZm8iLCJtb2RlIiwidGFyZ2V0IiwiU2xlZXBlckV2ZW50TmFtZSIsIkVkZ2VFdmVudE5hbWUiLCJNb3VzZUFjdGlvbkNvbnRyb2xsZXIiLCJtb3VzZURvd25TbGVlcGVyIiwibW91c2VEb3duTGluZSIsIm1vdXNlRG93bkJhY2tncm91bmQiLCJtb3VzZU1vdmVTbGVlcGVyIiwibW91c2VNb3ZlSGVhZCIsIm1vdXNlVXBTbGVlcGVyIiwibW91c2VVcEFuY2hvciIsIm1vdXNlVXBIZWFkIiwibW91c2VEb3VibGVDbGljayIsIm1vdXNlRG93blNsZWVwZXJDb250cm9sbGVyIiwibW91c2VEb3duTGluZUNvbnRyb2xsZXIiLCJtb3VzZURvd25CYWNrZ3JvdW5kQ29udHJvbGxlciIsIm1vdXNlTW92ZVNsZWVwZXJDb250cm9sbGVyIiwibW91c2VNb3ZlSGVhZENvbnRyb2xsZXIiLCJtb3VzZVVwU2xlZXBlckRlY29yYXRvciIsIm1vdXNlVXBTbGVlcGVyQ29udHJvbGxlciIsIm1vdXNlVXBBbmNob3JEZWNvcmF0b3IiLCJtb3VzZVVwQW5jaG9yQ29udHJvbGxlciIsIm1vdXNlVXBIZWFkRGVjb3JhdG9yIiwibW91c2VVcEhlYWRDb250cm9sbGVyIiwibW91c2VEb3VibGVDbGlja0NvbnRyb2xsZXIiLCJhY3RpdmVTb21lU2xlZXBlciIsImFjdGl2ZVNvbWVFZGdlIiwiY2hhbmdlQWN0aXZlU3RhdHVzIiwiZW5kVGV4dE1vZGUiLCJkcmFnU2xlZXBlckxpc3QiLCJyZWxhdGl2ZU1vdmVEaXN0YW5jZSIsIm9yaWdpblgiLCJvcmlnaW5ZIiwibmV3WCIsIm5ld1kiLCJjaGFuZ2VDYW52YXNJbmZvcm1hdGlvbiIsImVkZ2VMaXN0Iiwic2V0TG9jYXRpb24iLCJpbmNvbWluZ0VkZ2VMaXN0IiwiZHJhZ0VkZ2UiLCJjdXJyZW50UG9zaXRpb24iLCJlbmRTbGVlcGVyIiwicmVtb3ZlSW5jb21pbmdFZGdlIiwiY2hhbmdlRW5kIiwic3dpdGNoRHJhZ1N0YXR1cyIsInNsZWVwZXJBbmRBbmNob3IiLCJjbG9zZXN0T2JqZWN0IiwiYWRkRWRnZSIsImFkZEluY29taW5nRWRnZSIsInN0YXJ0U2xlZXBlciIsImFkZENoaWxkIiwiYWN0aXZlU29tZVNsZWVwZXJUZXh0TW9kZSIsIlNhdmVkT3BlcmF0aW9uIiwiTW91c2VBY3Rpb24iLCJtb3VzZVBvc2l0aW9uWCIsIm1vdXNlUG9zaXRpb25ZIiwiYWN0aW9uTW9kZSIsInRlbXBvcmFyeUVkZ2UiLCJ0ZW1wb3JhcnlDb3B5IiwiaGFuZGxlTW91c2VEb3duIiwidGhyb3R0bGVyTWFrZXIiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVOTW91c2VVcCIsImhhbmRsZU1vdXNlRG91YmxlQ2xpY2siLCJoYW5kbGVNb3VzZVByZXZlbnRSaWdodENsaWNrIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJzZXRNb3VzZVBvc2l0aW9uIiwibG9jYXRlZE9iamVjdCIsImZpbmRMb2NhdGVkT2JqZWN0IiwiYnV0dG9uIiwibW91c2VSaWdodENsaWNrIiwiX2hhbmRsZXJIb3Zlck1vdmUiLCJjYWxsIiwiX2hhbmRsZXJEcmFnU2xlZXBlck1vdmUiLCJfaGFuZGxlckRyYWdBbmNob3JNb3ZlIiwiX2hhbmRsZXJEcmFnQmFja2dyb3VuZE1vdmUiLCJfaGFuZGxlckRyYWdIZWFkTW92ZSIsInN0eWxlIiwiY3Vyc29yIiwiZmluZERyYWdnZWRTbGVlcGVyIiwic3RhcnRMb2FjdGlvbiIsImNoYW5nZVN0YXJ0IiwiY3VycmVudFBvc2lzdGlvbiIsImNsb3Nlc3RPYmplY3RBbmNob3IiLCJmaW5kQ2xvc2VzdEFuY2hvciIsImNsb3Nlc3RPYmplY3RIZWFkIiwiYWRkTXV0YXRpb24iLCJvcGVyYXRpb24iLCJtb3ZlSGVhZCIsInBhcmFtcyIsImNoYW5nZUVuZExvY2F0aW9uIiwiaXNJblRoaXNTbGVlcGVyIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lIiwiU2xlZXBlcnNGYWN0b3J5IiwiUGFuZWxPcGVyYXRpb25Db250cm9sbGVyIiwiY2hhbmdlQWxsUHJvYmFiaWxpdHkiLCJyZXNldFNsZWVwZXJzIiwicHJvYkNoYW5nZUNvbnRyb2xsZXIiLCJyZXNldENvbnRyb2xsZXIiLCJwcm9iIiwiY2hhbmdlUHJvYmFiaWxpdHkiLCJwcm9iYWJpbGl0eSIsImlzU2xlZXBpbmciLCJiZWZvcmVQcm9jZXNzSXNTbGVlcGluZyIsImNoYW5nZVNsZWVwaW5nU3RhdHVzIiwiV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIiLCJyb3VuZE51bSIsImZyYW1lVGltZSIsImlzUGF1c2UiLCJyZWZyZXNoSW50ZXJ2YWxJZCIsImF3YWtlUXVldWUiLCJzdGFydFdha2luZ1Byb2Nlc3MiLCJwYXVzZVdha2luZ1Byb2Nlc3MiLCJzdGFydFdha2luZ1Byb2Nlc3NDb250cm9sbGVyIiwicGF1c2VXYWtpbmdQcm9jZXNzQ29udHJvbGxlciIsInRlbXBRdWV1ZSIsImluaXRBd2FrZVF1ZXVlIiwic2V0SW50ZXJ2YWwiLCJuZXdBY3RpdmVkU2xlZXBlciIsImFjdGl2ZUNoaWxkIiwic2hpZnQiLCJlbmRXYWtpbmdQcm9jZXNzIiwiY2xlYXJJbnRlcnZhbCIsIkRlZmF1bHRFZGdlV2VpZ2h0IiwiRGVmYXVsdFNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbiIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIlBJIiwiaXNGaWxsZWQiLCJmaWxsQ29sb3IiLCJpc0JvcmRlciIsImJvcmRlcldpdGgiLCJib3JkZXJDb2xvciIsImlzQW5jaG9yIiwiYWN0aXZlQm9yZGVyQ29sb3IiLCJEZWZhdWx0QXdha2VDYW52YXNJbmZvcm1hdGlvbiIsIkVkZ2VQb29sRXZlbnROYW1lIiwiRWRnZVBvb2wiLCJpbml0RXZlbnRzSGFuZGxlciIsImxvY2F0ZWRJbmRleCIsImZpbmRJbmRleCIsImVkZ2VJblBvb2wiLCJzcGxpY2UiLCJnZXRJbnN0YW5jZSIsIndlaWdodCIsIm5ld1dlaWdodCIsIm5ld1NsZWVwZXIiLCJlZGdlUGF0aCIsInJlbW92ZUVkZ2UiLCJyZW1vdmVDaGlsZCIsIkRlZmF1bHRBY3RpdmVJbmZvcm1hdGlvbiIsIlNsZWVwZXJGYWN0b3J5Iiwic2xlZXBlckNhbnZhc0luZm9ybWF0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwiYXdha2VDYW52YXNJbmZvcm1hdGlvbiIsImFjdGl2ZUluZm9ybWF0aW9uIiwiY2FudmFzT2JqIiwiY3JlYXRlTm9kZSIsIm1ha2VOZXdTbGVlcGVyIiwiY2hhbmdlTm9kZVN0eWxlIiwicHJvcGVydHlPYmplY3QiLCJmb3JDaGFuZ2VkSW5mb3JtYXRpb24iLCJwcm9wZXJ0eSIsIm5ld1ZhbHVlIiwic3RhdHVzIiwidGVtcFNsZWVwZXIiLCJTbGVlcGVyUG9vbEV2ZW50TmFtZSIsIlNsZWVwZXJQb29sIiwiYWRkU2xlZXBlciIsInJlT3JkZXJTbGVlcGVyIiwic2xlZXBlckluUG9vbCIsInNsZWVwZXJJbmRleCIsIlRleHRTbGVlcGVyVGVtcFN0YWNrIiwib3JpZ2luVGV4dCIsInBvaW50ZXIiLCJzdGFja0xpc3QiLCJ2YWwiLCJUZXh0U2xlZXBlciIsInNpemUiLCJjb2xvciIsInRleHRhcmVhSW5mb3JtYXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRleHRhcmVhQm91bmRpbmdCb3hQYXRoIiwidGV4dEluaXRFdmVudEhhbmRsZXIiLCJzdGFydFRleHRNb2RlIiwidGV4dFBvc2l0aW9uIiwidGV4dE1heFdpZHRoIiwidGV4dFdyaXRlIiwicG9zaXRpb24iLCJtYXhXaWR0aCIsImluZm9ybWF0aW9uIiwic2V0VGV4dE9yVGV4dGFyZWFJbmZvcm1hdGlvbiIsInNsZWVwZXJQb3NpdGlvbiIsImZpZ3VyZURyYXciLCJfc2V0VGV4dGFyZWFQYXRoIiwiRXJyb3IiLCJmb3JTZXRPYmplY3QiLCJkcmF3VGV4dEFyZWEiLCJib3VuZGluZ0JveFBhdGgiLCJnZXRBY3Rpdml0eUJ5V2VpZ2h0IiwiY2hpbGRyZW5MaXN0IiwiY2hpbGRFZGdlTWFwTGlzdCIsInNldENhbnZhc1BhdGgiLCJkcmF3VGV4dCIsImNoaWxkU2xlZXBlciIsImV4cGVjdENoaWxkSW5kZXgiLCJjaGlsZE9iamVjdCIsInVuZGVmaW5lZCIsImV4cGVjdEVkZ2VJbmRleCIsImVkZ2VPYmplY3QiLCJnZXRDYW52YXNJbmZvcm1hdGlvbiIsInRlbXBBY3RpdmVkQ2hpbGRMaXN0IiwiZm9yRWFjaCIsImNhbnZhc1BhdGhPYmplY3QiLCJhbmNob3JzTGlzdCIsInJlbW92ZVNsZWVwZXIiLCJHbG9iYWxDb25maWciLCJQYWludGVyIiwiVW5kb1JlZG8iLCJDYW52YXMiLCJpbml0IiwiaW5pdENvbnRleHQiLCJpbml0UGFpbnRlciIsImluaXRBY3Rpb25SZWxhdGVkIiwiaW5pdFVuZG9SZWRvU3RhY2siLCJpbml0U2xlZXBlckZhY3RvcnkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzSWQiLCJpbm5lcldpZHRoIiwicGFuZGVsV2lkdGgiLCJpbm5lckhlaWdodCIsImhlYWRlckhlaWdodCIsInBhaW50ZXIiLCJtb3VzZUFjdGlvbkNvbnRyb2xsZXIiLCJrZXlib2FyZEFjdGlvbkNvbnRyb2xsZXIiLCJrZXlib2FyZEFjdGlvbiIsInBhbmVsT3BlcmF0aW9uQ29udHJvbGxlciIsIndha2luZ1Byb2Nlc3NDb250cm9sbGVyIiwibW91bnRDYW52YXMiLCJEZWFmdWx0QW5jaG9yU2V0dGluZyIsImxpbmVXaWR0aCIsImxpbmVDb2xvciIsImFuY2hvclJhZGl1cyIsIkRlYWZ1bHRBcnJvd1NldHRpbmciLCJoZWFkTGVuZ3RoIiwiQWN0aXZlQXJyb3dTZXR0aW5nIiwiRGVhZmF1bHRCb3VuZGluZ0JveFNldHRpbmciLCJGaWd1cmVQYWludGVyIiwiZHJhd01hcCIsImRyYXdDaXJjbGUiLCJkcmF3QXJyb3ciLCJkcmF3VGV4dGFyZWEiLCJkcmF3Iiwic2V0UGF0aENhbGxiYWNrIiwiY2lyY2xlIiwiUGF0aDJEIiwiYXJjIiwiZmlsbFN0eWxlIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiYW5jaG9yc1BhdGhMaXN0IiwiYW5jaG9yUG9zaXRpb25MaXN0IiwiYW5jaG9yUG9zaXRpb24iLCJhbmdsZSIsImF0YW4yIiwibGluZSIsIm1vdmVUbyIsImxpbmVUbyIsImNvcyIsInNpbiIsInJlY3QiLCJUZXh0UGFpbnRlciIsImZpZ3VyZSIsImNsZWFyUmVjdCIsIndyaXRlIiwic2V0VGV4dGFyZWFDYWxsYmFjayIsImZvbnQiLCJmaWxsSW5mbyIsIl9nZXRGaWxsTGlzdCIsImZpbGxMaXN0IiwiZmlsbFRleHQiLCJtZXRyaWNzIiwibWVhc3VyZVRleHQiLCJhY3R1YWxCb3VuZGluZ0JveEFzY2VudCIsImFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCIsImZvbnRCb3VuZGluZ0JveEFzY2VudCIsImZvbnRCb3VuZGluZ0JveERlc2NlbnQiLCJtb3VzZU1vdmVBbmNob3IiLCJjbG9zZUNvbG9yUGlja2VyIiwibW92ZVNsZWVwZXIiLCJhZGRFZGdlRnJvbUFuY2hvciIsImRlbGV0ZSIsInBhc3RlIiwicmVkb0NvbnRyb2xsZXIiLCJ0YXNrIiwicmVkb01vdmVTbGVlcGVyIiwicmVkb01vdmVBbmNob3IiLCJyZWRvTW92ZUhlYWQiLCJyZWRvRGVsZXRlSXRlbXMiLCJyZWRvUGFzdGUiLCJjaGFuZ2VMb2NhdGlvbiIsInJlY292ZXJMb2NhdGlvbiIsImVkZ2VSZWNvdmVyTG9jYXRpb24iLCJ1bmRvQ29udHJvbGxlciIsInVuZG9Nb3ZlU2xlZXBlciIsInVuZG9Nb3ZlQW5jaG9yIiwidW5kb01vdmVIZWFkIiwidW5kb0RlbGV0ZUl0ZW1zIiwidW5kb1Bhc3RlIiwiY29udHJvbGxlckZ1bmN0aW9uIiwib3JpZ2luYWxJbmZvIiwiY3VycmVudFNsZWVwZXIiLCJvcmlnaW5hbExvY2F0aW9uIiwiYWRkZWRFbmRTbGVlcGVyIiwic3RhY2siLCJhZGRNdXRhdGlvblRvU3RhY2siLCJtdXRhdGlvbiIsInVuZG9UYXNrIiwicmVkb1Rhc2siLCJFdmVudCIsImV2ZW50RGljdGlvbmFyeSIsImNhbGxiYWNrIiwiY3VycmVudEV2ZW50TGlzdCIsImNhbGxiYWNrSW5kZXgiLCJzYXZlZENhbGxiYWNrRnVuY3Rpb24iLCJzdWRvUmFuZG9tVmFyaWFibGUiLCJyYW5kb20iLCJsaW5lU3RhcnRMb2NhdGlvbiIsImxpbmVFbmRMb2NhdGlvbiIsInNsb3BlIiwiYXRhbiIsInhMZW5ndGgiLCJhYnMiLCJpbnRlcmNlcHQiLCJteUNhbnZhcyJdLCJzb3VyY2VSb290IjoiIn0=