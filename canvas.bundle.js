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
/* harmony import */ var _global_global_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/global-config */ "./src/global/global-config.js");
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
          // Exclude event from panel
          if (event.target.id in _global_global_config__WEBPACK_IMPORTED_MODULE_3__.ExcludeKeyEventId) {
            return;
          }

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
      // Close color picker
      _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.PanelOpearationControllerEventName.closeColorPicker, null);
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
/* harmony export */   "GlobalConfig": () => (/* binding */ GlobalConfig),
/* harmony export */   "ExcludeKeyEventId": () => (/* binding */ ExcludeKeyEventId),
/* harmony export */   "ExcludeClickClassName": () => (/* binding */ ExcludeClickClassName)
/* harmony export */ });
var GlobalConfig = {
  canvasId: 'myCanvas',
  headerHeight: 66,
  pandelWidth: 300
};
var ExcludeKeyEventId = {
  'panelCascadeProbabilit': 'panelCascadeProbabilit'
};
var ExcludeClickClassName = {
  'saturation-black': 'saturation-black',
  'hue-horizontal': 'hue-horizontal'
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
 // Init Canvas

var myCanvas = _core_view_layer_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.getInstance();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLEdBQUc7QUFDZCxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztVQ250REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0NDRkE7O0FBQ0EsSUFBSWdjLFFBQVEsR0FBR3pILHVFQUFBLEVBQWYsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcHktcGFzdGUvY29weS1wYXN0ZS1ob3VzZS5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9hY3Rpb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvY29uZmlnLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL2tleWJvYXJkL2tleWJvYXJkLWFjdGlvbi1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL2tleWJvYXJkL2tleWJvYXJkLWFjdGlvbi5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9tb3VzZS9kZWVwQ2xvbmUuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvbW91c2UvbW91c2UtYWN0aW9uLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvbW91c2UvbW91c2UtYWN0aW9uLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL3BhbmVsL3BhbmVsLW9wZXJhdGlvbi1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL3dha2luZy1wcm9jZXNzL3dha2luZy1wcm9jZXNzLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9kYXRhLWxheWVyL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLXBvb2wuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9kYXRhLWxheWVyL2VkZ2UvZWRnZS5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci1wb29sLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItdGV4dC5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvdmlldy1sYXllci9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS92aWV3LWxheWVyL3BhaW50ZXIvZmlndXJlL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL3ZpZXctbGF5ZXIvcGFpbnRlci9maWd1cmUvcGFpbnRlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL3ZpZXctbGF5ZXIvcGFpbnRlci9wYWludGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvdmlldy1sYXllci9wYWludGVyL3RleHQvcGFpbnRlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvZ2xvYmFsL2dsb2JhbC1jb25maWcuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdW5kby1yZWRvL29wZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy91bmRvLXJlZG8vcmVkby1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3VuZG8tcmVkby91bmRvLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdW5kby1yZWRvL3VuZG8tZGVjb3JhdG9yLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3VuZG8tcmVkby91bmRvLXJlZG8uanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdXRpbHMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdXRpbHMvbWF0aC11dGlscy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL25vZGVfbW9kdWxlcy9sb2Rhc2guY2xvbmVkZWVwL2luZGV4LmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2VudHJ5L3Rlc3RFbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xvbmVEZWVwIGZyb20gXCJsb2Rhc2guY2xvbmVkZWVwXCI7XG5cbmNsYXNzIENvcHlQYXN0ZUhvdXNlIHtcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IENvcHlQYXN0ZUhvdXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhvdXNlID0gW107XG4gICAgICAgIENvcHlQYXN0ZUhvdXNlLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0IHBhY2thZ2Uob2JqKSB7XG4gICAgICAgIHRoaXMuaG91c2UgPSBbXTtcblxuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygb2JqKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3VzZS5wdXNoKGNsb25lRGVlcChpdGVtKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvdXNlLnB1c2goY2xvbmVEZWVwKG9iaikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBwYWNrYWdlKCkge1xuICAgICAgICByZXR1cm4gY2xvbmVEZWVwKHRoaXMuaG91c2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ29weVBhc3RlSG91c2UgfTsiLCJpbXBvcnQgeyBTbGVlcGVyUG9vbGVyIH0gZnJvbSAnLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItcG9vbCc7XG5pbXBvcnQgeyBFZGdlUG9vbGVyIH0gZnJvbSAnLi4vZGF0YS1sYXllci9lZGdlL2VkZ2UtcG9vbCc7XG5pbXBvcnQgeyBpc1BvaW50SW5MaW5lIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0aC11dGlscyc7XG5pbXBvcnQgeyBNaW5pbWFsRGlzdGFuY2VGb3JMb2NhdGUgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmNsYXNzIEFjdGlvblV0aWxzIHtcbiAgICAvKipcbiAgICAgKiBGaW5kIG1vdXNlIGxvY2F0ZWQgb2JqZWN0XG4gICAgICogQHBhcmFtIHsqfSBjYW52YXMgXG4gICAgICogQHBhcmFtIHsqfSBsb2NhdGlvbiBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZExvY2F0ZWRPYmplY3QoY2FudmFzLCBsb2NhdGlvbikge1xuICAgICAgICBjb25zdCBmaW5kRnVuY3Rpb25zTGlzdCA9IFtcbiAgICAgICAgICAgIEFjdGlvblV0aWxzLmZpbmRMb2NhdGVkTGluZU9ySGVhZCxcbiAgICAgICAgICAgIEFjdGlvblV0aWxzLmZpbmRMb2NhdGVkQW5jaG9yLFxuICAgICAgICAgICAgQWN0aW9uVXRpbHMuZmluZExvY2F0ZWRTbGVlcGVyLFxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAoY29uc3QgZmluZEZ1bmN0aW9uIG9mIGZpbmRGdW5jdGlvbnNMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBmaW5kUmVzdWx0ID0gZmluZEZ1bmN0aW9uKGNhbnZhcywgbG9jYXRpb24pO1xuICAgICAgICAgICAgaWYgKCEhZmluZFJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaW5kUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBzbGVlcGVyIHdoaWNoIGF0IHRoZSBtb3VzZSBsb2NhdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmFzIENhbnZhcyBPYmplY3QgXG4gICAgICogQHBhcmFtIHsqfSBsb2NhdGlvbiBNb3VzZSBsb2NhdGlvblxuICAgICAqIEByZXR1cm5zIHtTbGVlcGVyIHwgbnVsbH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZExvY2F0ZWRTbGVlcGVyKGNhbnZhcywgbG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIC8vIElubmVyIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIGxvY2F0aW9uIGluIGNpcmNsZVxuICAgICAgICBjb25zdCBpc0xvY2F0ZWRJbkNpcmNsZSA9IChjaXJjbGVQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7eCwgeX0gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgIHJldHVybiBjYW52YXNDb250ZXh0LmlzUG9pbnRJblBhdGgoY2lyY2xlUGF0aCwgeCwgeSlcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBIYW5kbGVyIGNoZWNraW5nIGZ1bmN0aW9ucycgbWFwcyBcbiAgICAgICAgY29uc3QgbG9jYXRpb25IYW5kbGVyTWFwcyA9IHtcbiAgICAgICAgICAgICdjaXJjbGUnOiBpc0xvY2F0ZWRJbkNpcmNsZS5iaW5kKHRoaXMpLFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXRlcmF0ZSBwb29sIHRvIGZpbmQgbG9jYXRlZCBwYXRoXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gU2xlZXBlclBvb2xlci5wb29sLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHNsZWVwZXIgPSBTbGVlcGVyUG9vbGVyLnBvb2xbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3Qgc2xlZXBlclN0eWxlID0gc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHNsZWVwZXJDYW52YXNQYXRoID0gc2xlZXBlci5jYW52YXNQYXRoO1xuICAgICAgICAgICAgY29uc3QgeyBkcmF3VHlwZSB9ID0gc2xlZXBlclN0eWxlO1xuICAgICAgICAgICAgaWYgKGxvY2F0aW9uSGFuZGxlck1hcHNbZHJhd1R5cGVdKHNsZWVwZXJDYW52YXNQYXRoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogc2xlZXBlcixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NsZWVwZXInLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBhbmNob3Igd2hpY2ggYXQgdGhlIG1vdXNlIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIHsqfSBjYW52YXMgQ2FudmFzIE9iamVjdCBcbiAgICAgKiBAcGFyYW0geyp9IGxvY2F0aW9uIE1vdXNlIGxvY2F0aW9uXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRMb2NhdGVkQW5jaG9yKGNhbnZhcywgbG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCB7eCwgeX0gPSBsb2NhdGlvbjtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IFNsZWVwZXJQb29sZXIucG9vbC5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICAgICAgICBjb25zdCBzbGVlcGVyID0gU2xlZXBlclBvb2xlci5wb29sW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChzbGVlcGVyLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzbGVlcGVyQW5jaG9yIG9mIHNsZWVwZXIuY2FudmFzQW5jaG9yc1BhdGhMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYW5jaG9yUGF0aCB9ID0gc2xlZXBlckFuY2hvcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhc0NvbnRleHQuaXNQb2ludEluUGF0aChhbmNob3JQYXRoLCB4LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFtzbGVlcGVyLCBzbGVlcGVyQW5jaG9yXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYW5jaG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBlZGdlIHdoaWNoIGF0IHRoZSBtb3VzZSBsb2NhdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmFzIFxuICAgICAqIEBwYXJhbSB7Kn0gbG9jYXRpb24gXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRMb2NhdGVkTGluZU9ySGVhZChjYW52YXMsIGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3Qge3gsIHl9ID0gbG9jYXRpb247XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gRWRnZVBvb2xlci5wb29sLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlUG9vbGVyLnBvb2xbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgeyBoZWFkIH0gPSBlZGdlLmNhbnZhc1BhdGg7XG4gICAgICAgICAgICBpZiAoaXNQb2ludEluTGluZShlZGdlLnN0YXJ0TG9jYXRpb24sIGVkZ2UuZW5kTG9jYXRpb24sIHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBlZGdlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW52YXNDb250ZXh0LmlzUG9pbnRJblBhdGgoaGVhZCwgeCwgeSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGVkZ2UsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoZWFkJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIHNsZWVwZXIgd2hvIGlzIGluIGRyYWdnaW5nIHN0YXR1c1xuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kRHJhZ2dlZFNsZWVwZXIoKSB7XG4gICAgICAgIGNvbnN0IGRyYWdnZWRTbGVlcGVyTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgaWYgKHNsZWVwZXIuaXNEcmFnKSB7XG4gICAgICAgICAgICAgICAgZHJhZ2dlZFNsZWVwZXJMaXN0LnB1c2goc2xlZXBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRyYWdnZWRTbGVlcGVyTGlzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaHJvdHRsZXIgbWFrZXIgZm9yIGxpc3RlbmVyIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHdhaXRUaW1lIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHN0YXRpYyB0aHJvdHRsZXJNYWtlcihmbiwgd2FpdFRpbWUpIHtcbiAgICAgICAgbGV0IHRpbWVyID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgaWYoIXRpbWVyKSB7XG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSwgd2FpdFRpbWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBjbG9zZXN0IHNsZWVwZXIgZ2l2ZW4gbG9jYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IGxvY2F0aW9uIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kQ2xvc2VzdFNsZWVwZXIobG9jYXRpb24pIHtcbiAgICAgICAgY29uc3Qge3gsIHl9ID0gbG9jYXRpb247XG4gICAgICAgIGZvcihjb25zdCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgY29uc3Qgc2xlZXBlclggPSBzbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLng7XG4gICAgICAgICAgICBjb25zdCBzbGVlcGVyWSA9IHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChzbGVlcGVyWCAtIHgpKioyICsgKHNsZWVwZXJZIC15KSoqMik7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBzbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnJhZGl1cyArIE1pbmltYWxEaXN0YW5jZUZvckxvY2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbGVlcGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgY2xvc2VzdCBhbmNob3IgZ2l2ZW4gbG9jYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IGxvY2F0aW9uIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kQ2xvc2VzdEFuY2hvcihsb2NhdGlvbikge1xuICAgICAgICBjb25zdCBsb2NhdGVkU2xlZXBlciA9IHRoaXMuZmluZENsb3Nlc3RTbGVlcGVyKGxvY2F0aW9uKTtcbiAgICAgICAgaWYgKCFsb2NhdGVkU2xlZXBlcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnY2xvZXN0IFNsZWVwZXInLCBsb2NhdGVkU2xlZXBlcik7XG5cbiAgICAgICAgY29uc3QgbG9jYXRlZFNsZWVwZXJYID0gbG9jYXRlZFNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueDtcbiAgICAgICAgY29uc3QgbG9jYXRlZFNsZWVwZXJZID0gbG9jYXRlZFNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueTtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gbG9jYXRlZFNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ucmFkaXVzO1xuICAgICAgICBjb25zdCBhbmNob3JMb2NhdGlvbkxpc3QgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogbG9jYXRlZFNsZWVwZXJYIC0gcmFkaXVzLFxuICAgICAgICAgICAgICAgIHk6IGxvY2F0ZWRTbGVlcGVyWSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogbG9jYXRlZFNsZWVwZXJYICsgcmFkaXVzLFxuICAgICAgICAgICAgICAgIHk6IGxvY2F0ZWRTbGVlcGVyWSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogbG9jYXRlZFNsZWVwZXJYLFxuICAgICAgICAgICAgICAgIHk6IGxvY2F0ZWRTbGVlcGVyWSAtIHJhZGl1cyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogbG9jYXRlZFNsZWVwZXJYLFxuICAgICAgICAgICAgICAgIHk6IGxvY2F0ZWRTbGVlcGVyWSArIHJhZGl1cyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgbGV0IG1pbkRpc3RhbmNlID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgICAgIGxldCBtaW5Mb2NhdGlvbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgYW5jaG9yTG9jYXRpb24gb2YgYW5jaG9yTG9jYXRpb25MaXN0KSB7XG4gICAgICAgICAgICBjb25zdCB7eCwgeX0gPSBhbmNob3JMb2NhdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gKGxvY2F0aW9uLnggLSB4KSoqMiArIChsb2NhdGlvbi55IC0geSkqKjI7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBtaW5EaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIG1pbkxvY2F0aW9uID0gYW5jaG9yTG9jYXRpb247XG4gICAgICAgICAgICAgICAgbWluRGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbG9zZXN0TG9jYXRpb246IG1pbkxvY2F0aW9uLFxuICAgICAgICAgICAgY2xvc2VzdFNsZWVwZXI6IGxvY2F0ZWRTbGVlcGVyLFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQWN0aW9uVXRpbHMgfTsiLCJleHBvcnQgY29uc3QgbW91c2VBY3Rpb25Nb2RlID0ge1xuICAgIGRvd25PblNsZWVwZXI6ICdkb3duT25TbGVlcGVyJyxcbiAgICBkb3duT25BbmNob3I6ICdkb3duT25BbmNob3InLFxuICAgIGRvd25PbkxpbmU6ICdkb3duT25FZ2RlJyxcbiAgICBkb3duT25IZWFkOiAnZG93bk9uSGVhZCcsXG4gICAgZG93bk9uQmFja2dyb3VuZDogJ2Rvd25PbkJhY2tncm91bmQnLFxuICAgIGRvd25Pbk5vbmU6ICdkb3duT25Ob25lJyxcbiAgICBkb3duT25UZXh0OiAnZG93bk9uVGV4dCcsXG59O1xuXG5leHBvcnQgY29uc3QgTWluaW1hbERpc3RhbmNlRm9yTG9jYXRlID0gMTA7IiwiaW1wb3J0IHsgXG4gICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZSxcbiAgICBQYWludGVyRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFVuZG9EZWNvcmF0b3IgfSBmcm9tICcuLi8uLi8uLi91bmRvLXJlZG8vdW5kby1kZWNvcmF0b3InO1xuaW1wb3J0IHsgQ29weVBhc3RlSG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3B5LXBhc3RlL2NvcHktcGFzdGUtaG91c2UnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyJztcbmltcG9ydCB7IEVkZ2UgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL2VkZ2UvZWRnZSc7IFxuXG5cbmNsYXNzIEtleWJvYXJkQWN0aW9uQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzZXIgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIC8vIEV4dHJhY3QgZXZlbnQgbmFtZVxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBrZXlib2FyZERlbGV0ZSxcbiAgICAgICAgICAgIGtleWJvYXJkSW5wdXQsXG4gICAgICAgICAgICBrZXlib2FyZFRleHRVbmRvLFxuICAgICAgICAgICAga2V5Ym9hcmRUZXh0UmVkbyxcbiAgICAgICAgICAgIGtleWJvYXJkVGV4dERlbGV0ZSxcbiAgICAgICAgICAgIGtleWJvYXJkQ29weSxcbiAgICAgICAgICAgIGtleWJvYXJkUGFzdGUsXG4gICAgICAgIH0gPSBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lO1xuXG4gICAgICAgIC8vIE1ha2UgRXZlbnROYW1lLUhhbmRsZXIgTWFwXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFtrZXlib2FyZERlbGV0ZV0gPSBVbmRvRGVjb3JhdG9yLmRlbGV0ZUl0ZW1zRGVjb3JhdG9yKHRoaXMua2V5Ym9hcmREZWxldGVDb250cm9sbGVyKTtcbiAgICAgICAgZXZlbnROYW1lc01hcFtrZXlib2FyZFBhc3RlXSA9IFVuZG9EZWNvcmF0b3IucGFzdGVEZWNvcmF0b3IodGhpcy5rZXlib2FyZFBhc3RlQ29udHJvbGxlcik7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmRDb3B5XSA9IHRoaXMua2V5Ym9hcmRDb3B5Q29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFtrZXlib2FyZElucHV0XSA9IHRoaXMua2V5Ym9hcmRJbnB1dENvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmRUZXh0VW5kb10gPSB0aGlzLmtleWJvYXJkVGV4dFVuZG9Db250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkVGV4dFJlZG9dID0gdGhpcy5rZXlib2FyZFRleHRSZWRvQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFtrZXlib2FyZFRleHREZWxldGVdID0gdGhpcy5rZXlib2FyZFRleHREZWxldGVDb250cm9sbGVyO1xuXG4gICAgICAgIC8vIEluaXQgZXZlbnQgaGFuZGxlclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBpbiBldmVudE5hbWVzTWFwKSB7XG4gICAgICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudE5hbWVzTWFwW2V2ZW50TmFtZV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHRoZSBzZWxlY3RlZCBlZGdlIG9yIFNsZWVwZXJcbiAgICAgKiBAcGFyYW0ge0VkZ2UgfCBTbGVlcGVyfSBjbGlja09iamVjdCBcbiAgICAgKi9cbiAgICBrZXlib2FyZERlbGV0ZUNvbnRyb2xsZXIoY2xpY2tPYmplY3QpIHtcbiAgICAgICAgY2xpY2tPYmplY3QuZGVsZXRlU2VsZigpO1xuICAgICAgICBcbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElucHV0IHRleHQgdG8gdGhlIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXIgXG4gICAgICogQHBhcmFtIHsqfSBpbnB1dEtleSBzdHJpbmdcbiAgICAgKi9cbiAgICBrZXlib2FyZElucHV0Q29udHJvbGxlcihzbGVlcGVyLCBpbnB1dEtleSkge1xuICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gYCR7c2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudH0ke2lucHV0S2V5fWA7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRleHRcbiAgICAgICAgc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudCA9IG5ld0NvbnRlbnQ7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRlbXAgc3RhY2tcbiAgICAgICAgc2xlZXBlci50ZXh0VGVtcFN0YWNrLnRleHQgPSBuZXdDb250ZW50O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmRvIGZvciBzbGVlcGVyIGluIHRleHQgbW9kZVxuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlciBcbiAgICAgKi9cbiAgICBrZXlib2FyZFRleHRVbmRvQ29udHJvbGxlcihzbGVlcGVyKSB7XG4gICAgICAgIHNsZWVwZXIudGV4dFRlbXBTdGFjay51bmRvKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coc2xlZXBlci50ZXh0VGVtcFN0YWNrLnRleHQpO1xuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlXG4gICAgICAgIHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQgPSBzbGVlcGVyLnRleHRUZW1wU3RhY2sudGV4dDtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVkbyBmb3Igc2xlZXBlciBpbiB0ZXh0IG1vZGVcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXIgXG4gICAgICovXG4gICAga2V5Ym9hcmRUZXh0UmVkb0NvbnRyb2xsZXIoc2xlZXBlcikge1xuICAgICAgICBzbGVlcGVyLnRleHRUZW1wU3RhY2sucmVkbygpO1xuXG4gICAgICAgIC8vIFVwZGF0ZVxuICAgICAgICBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50ID0gc2xlZXBlci50ZXh0VGVtcFN0YWNrLnRleHQ7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApOyBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgZm9yIHNsZWVwZXIgaW4gdGV4dCBtb2RlXG4gICAgICogQHBhcmFtIHsqfSBzbGVlcGVyIFxuICAgICAqL1xuICAgIGtleWJvYXJkVGV4dERlbGV0ZUNvbnRyb2xsZXIoc2xlZXBlcikge1xuICAgICAgICBjb25zdCBzdHJpbmdMZW5ndGggPSBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQuc3Vic3RyaW5nKDAsIHN0cmluZ0xlbmd0aCAtIDEpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0ZXh0XG4gICAgICAgIHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0ZW1wIHN0YWNrXG4gICAgICAgIHNsZWVwZXIudGV4dFRlbXBTdGFjay50ZXh0ID0gbmV3Q29udGVudDtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29weSBhIG9iamVjdCBzZWxlY3RlZFxuICAgICAqIEBwYXJhbSB7c2xlZXBlciB8IEVkZ2V9IG9iamVjdCBcbiAgICAgKi9cbiAgICBrZXlib2FyZENvcHlDb250cm9sbGVyKG9iamVjdCkge1xuICAgICAgICBDb3B5UGFzdGVIb3VzZS5wYWNrYWdlID0gb2JqZWN0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQYXN0ZSB0aGUgb2JqZWN0IHN0b3JlIGluIGNvcHktcGFzdGUgaG91c2VcbiAgICAgKi9cbiAgICBrZXlib2FyZFBhc3RlQ29udHJvbGxlcihjb3B5ZWRPYmplY3RMaXN0KSB7ICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBjb3B5ZWRPYmplY3RMaXN0KSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBPbmx5IHN1cHBvcnQgZm9yIHNsZWVwZXIgbm93XG4gICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIFNsZWVwZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgbm9uLXJlbGF0ZWQgZmFjdG9ycyB3aXRoaW4gc2xlZXBlclxuICAgICAgICAgICAgICAgIGl0ZW0ucHJlcGFyZUZvclBhc3RlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZWdpc3RlciBldmVudFxuICAgICAgICAgICAgICAgIGl0ZW0uaW5pdEV2ZW50SGFuZGxlcigpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIFNsZWVwZXIgaW50byBzbGVlcGVyIHBvb2xcbiAgICAgICAgICAgICAgICBpdGVtLnJlY292ZXJTZWxmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBLZXlib2FyZEFjdGlvbkNvbnRyb2xsZXIgfTsiLCJpbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyJztcbmltcG9ydCB7IFxuICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG4gICAgVW5kb1JlZG9FdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBFeGNsdWRlS2V5RXZlbnRJZCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9nbG9iYWwtY29uZmlnJztcblxuY2xhc3MgS2V5Ym9hcmRBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgbW91c2VBY3Rpb24pIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMubW91c2VBY3Rpb24gPSBtb3VzZUFjdGlvbjtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5pbml0QWN0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBhbGwgdGhlIG1vdXNlIGFjdGlvbiBsaXN0ZW5lcnNcbiAgICAgKi9cbiAgICBpbml0QWN0aW9uKCkge1xuICAgICAgICBjb25zdCBhY3Rpb25zTWFwID0ge1xuICAgICAgICAgICAgJ2tleWRvd24nOiB0aGlzLmtleURvd24uYmluZCh0aGlzKSxcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBhY3Rpb24gaW4gYWN0aW9uc01hcCkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYWN0aW9uLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRXhjbHVkZSBldmVudCBmcm9tIHBhbmVsXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5pZCBpbiBFeGNsdWRlS2V5RXZlbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYWN0aW9uc01hcFthY3Rpb25dKGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAga2V5RG93bihldmVudCkge1xuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgICAgICAvLyBDaGVjayBpZiBtb3VzZWRvd24gZWxlbWVudCBpcyBzbGVlcGVyIGFuZCBpbiB0ZXh0IG1vZGVcbiAgICAgICAgY29uc3QgaXNUZXh0TW9kZU9uID0gdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50IGluc3RhbmNlb2YgU2xlZXBlciBcbiAgICAgICAgJiYgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50LmlzVGV4dE1vZGU7XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2goY29kZSkge1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIC8vIFByZXNzIERlbGV0ZVxuICAgICAgICAgICAgICAgIGlzVGV4dE1vZGVPbiA/IHRoaXMuX2hhbmRsZXJUZXh0RGVsZXRlKCkgOiB0aGlzLl9oYW5kbGVyRGVsZXRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgIC8vIFByZXNzIGN0cmwgKyB6XG4gICAgICAgICAgICAgICAgaWYgKChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpICYmICFldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICBpc1RleHRNb2RlT24gPyBcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZFRleHRVbmRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLnVuZG8pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFByZXNzIGN0cmwgKyBzaGZpdCArIHpcbiAgICAgICAgICAgICAgICBpZiAoKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgJiYgZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNUZXh0TW9kZU9uID8gXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUua2V5Ym9hcmRUZXh0UmVkbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5yZWRvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY3OlxuICAgICAgICAgICAgICAgIC8vIFByZXNzIGN0cmwgKyBjXG4gICAgICAgICAgICAgICAgaWYoKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgJiYgIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGV4dE1vZGVPbiA/XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudCgnbnVsbCcpXG4gICAgICAgICAgICAgICAgICAgIDogRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZENvcHksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4NjpcbiAgICAgICAgICAgICAgICAvLyBQcmVzcyBjdHJsICsgdlxuICAgICAgICAgICAgICAgIGlmKChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpICYmICFldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICBpc1RleHRNb2RlT24gP1xuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoJ251bGwnKVxuICAgICAgICAgICAgICAgICAgICA6IEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUua2V5Ym9hcmRQYXN0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3IHx8XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCB8fFxuICAgICAgICAgICAgICAgICAgICBjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGV4dE1vZGVPbiAmJiB0aGlzLl9oYW5kbGVOb3JtYWwoZXZlbnQua2V5LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0ZXh0IGlucHV0IGZvciBzbGVlcGVyXG4gICAgICogQHBhcmFtIHsqfSBrZXkgXG4gICAgICovXG4gICAgX2hhbmRsZU5vcm1hbChrZXkpIHsgIFxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkSW5wdXQsXG4gICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICBrZXlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciBvYmplY3QgZGVsZXRlXG4gICAgICovXG4gICAgX2hhbmRsZXJEZWxldGUoKSB7XG4gICAgICAgIC8vIElmIGNsaWNrIGVsZW1lbnQgZXhpc3RzIGFuZCBpcyBhY3RpdmUsIHRoZW4gZGVsZXRlXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudFxuICAgICAgICAgICAgJiYgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50LmlzQWN0aXZlXG4gICAgICAgICkge1xuICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUua2V5Ym9hcmREZWxldGUsXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgdGV4dCBkZWxldGVcbiAgICAgKi9cbiAgICBfaGFuZGxlclRleHREZWxldGUoKSB7XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUua2V5Ym9hcmRUZXh0RGVsZXRlLFxuICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgS2V5Ym9hcmRBY3Rpb24gfTsiLCJpbXBvcnQgeyBtb3VzZUFjdGlvbk1vZGUgfSBmcm9tICcuLi9jb25maWcnO1xuXG4vLyBDbG9uZSB0aGUgcmVsYXRlZCBpbmZvcm1hdGlvbiBhY2NvcmRpbmcgdG8gdGhlIHR5cGUgb2YgY2xhc3NcbmV4cG9ydCBmdW5jdGlvbiBEZWVwQ2xvbmVJbmZvKG1vZGUsIHRhcmdldCkge1xuICAgIHN3aXRjaChtb2RlKSB7XG4gICAgICAgIGNhc2UobW91c2VBY3Rpb25Nb2RlLmRvd25PblNsZWVwZXIpOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiB0YXJnZXQuY2FudmFzSW5mb3JtYXRpb24ueCxcbiAgICAgICAgICAgICAgICB5OiB0YXJnZXQuY2FudmFzSW5mb3JtYXRpb24ueSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgKG1vdXNlQWN0aW9uTW9kZS5kb3duT25IZWFkKTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogdGFyZ2V0LmVuZExvY2F0aW9uLngsXG4gICAgICAgICAgICAgICAgeTogdGFyZ2V0LmVuZExvY2F0aW9uLnksXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59IiwiaW1wb3J0IHsgXG4gICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZSxcbiAgICBTbGVlcGVyRXZlbnROYW1lLFxuICAgIFBhaW50ZXJFdmVudE5hbWUsXG4gICAgRWRnZUV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBTbGVlcGVyUG9vbGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItcG9vbCc7XG5pbXBvcnQgeyBFZGdlUG9vbGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9lZGdlL2VkZ2UtcG9vbCc7XG5pbXBvcnQgeyBVbmRvRGVjb3JhdG9yIH0gZnJvbSAnLi4vLi4vLi4vdW5kby1yZWRvL3VuZG8tZGVjb3JhdG9yJzsgXG5cbmNsYXNzIE1vdXNlQWN0aW9uQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzZXIgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIC8vIEV4dHJhY3QgZXZlbnQgbmFtZVxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBtb3VzZURvd25TbGVlcGVyLFxuICAgICAgICAgICAgbW91c2VEb3duTGluZSxcbiAgICAgICAgICAgIG1vdXNlRG93bkJhY2tncm91bmQsXG4gICAgICAgICAgICBtb3VzZU1vdmVTbGVlcGVyLFxuICAgICAgICAgICAgbW91c2VNb3ZlSGVhZCxcbiAgICAgICAgICAgIG1vdXNlVXBTbGVlcGVyLFxuICAgICAgICAgICAgbW91c2VVcEFuY2hvcixcbiAgICAgICAgICAgIG1vdXNlVXBIZWFkLFxuICAgICAgICAgICAgbW91c2VEb3VibGVDbGljayxcbiAgICAgICAgfSA9IEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWU7XG5cbiAgICAgICAgLy8gTWFrZSBFdmVudE5hbWUtSGFuZGxlciBNYXBcbiAgICAgICAgY29uc3QgZXZlbnROYW1lc01hcCA9IHt9O1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlRG93blNsZWVwZXJdID0gdGhpcy5tb3VzZURvd25TbGVlcGVyQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZURvd25MaW5lXSA9IHRoaXMubW91c2VEb3duTGluZUNvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VEb3duQmFja2dyb3VuZF0gPSB0aGlzLm1vdXNlRG93bkJhY2tncm91bmRDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlTW92ZVNsZWVwZXJdID0gdGhpcy5tb3VzZU1vdmVTbGVlcGVyQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZU1vdmVIZWFkXSA9IHRoaXMubW91c2VNb3ZlSGVhZENvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VVcFNsZWVwZXJdID0gVW5kb0RlY29yYXRvci5tb3VzZVVwU2xlZXBlckRlY29yYXRvcih0aGlzLm1vdXNlVXBTbGVlcGVyQ29udHJvbGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZVVwQW5jaG9yXSA9IFVuZG9EZWNvcmF0b3IubW91c2VVcEFuY2hvckRlY29yYXRvcih0aGlzLm1vdXNlVXBBbmNob3JDb250cm9sbGVyLmJpbmQodGhpcykpO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlVXBIZWFkXSA9IFVuZG9EZWNvcmF0b3IubW91c2VVcEhlYWREZWNvcmF0b3IodGhpcy5tb3VzZVVwSGVhZENvbnRyb2xsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VEb3VibGVDbGlja10gPSB0aGlzLm1vdXNlRG91YmxlQ2xpY2tDb250cm9sbGVyO1xuXG4gICAgICAgIC8vIEluaXQgZXZlbnQgaGFuZGxlclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBpbiBldmVudE5hbWVzTWFwKSB7XG4gICAgICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudE5hbWVzTWFwW2V2ZW50TmFtZV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWx0ZXIgdGhlIHNsZWVwZXIgcHJvcGVydGllcyBcbiAgICAgKiBAcGFyYW0ge1NsZWVwZXJ9IHNsZWVwZXIgU2xlZXBlciBvYmplY3RcbiAgICAgKi9cbiAgICBtb3VzZURvd25TbGVlcGVyQ29udHJvbGxlcihzbGVlcGVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkb3duJywgc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudCk7XG4gICAgICAgIFxuICAgICAgICAvLyBDaGFuZ2UgYWN0aXZlIHN0YXR1cyBhbmQgZHJhZyBzdGF0dXNcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgU2xlZXBlckV2ZW50TmFtZS5hY3RpdmVTb21lU2xlZXBlcixcbiAgICAgICAgICAgIHNsZWVwZXJcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWx0ZXIgdGhlIGVkZ2UgcHJvcGVydGllc1xuICAgICAqIEBwYXJhbSB7Kn0gZWRnZSBcbiAgICAgKi9cbiAgICBtb3VzZURvd25MaW5lQ29udHJvbGxlcihlZGdlKSB7XG4gICAgICAgIC8vIENoYW5nZSBhY3RpdmUgZWRnZSBzdGF0dXMgXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIEVkZ2VFdmVudE5hbWUuYWN0aXZlU29tZUVkZ2UsXG4gICAgICAgICAgICBlZGdlLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhbiBhbGwgdGhlIGFjdGl2ZSBzdGF0dXNcbiAgICAgKi9cbiAgICBtb3VzZURvd25CYWNrZ3JvdW5kQ29udHJvbGxlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Rvd24gb24gYmFja2dyb3VuZCBjb250cm9sbGVyJyk7XG4gICAgICAgIGZvciAoY29uc3Qgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIC8vIERlYWN0aXZlIGFsbCB0aGUgc2xlZXBlclxuICAgICAgICAgICAgc2xlZXBlci5jaGFuZ2VBY3RpdmVTdGF0dXMobnVsbCk7XG5cbiAgICAgICAgICAgIC8vIEJhY2sgdG8gbm9ybWFsIG1vZGVcbiAgICAgICAgICAgIHNsZWVwZXIuZW5kVGV4dE1vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgZWRnZSBvZiBFZGdlUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIGVkZ2UuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFNsZWVwZXJQb29sZXIucG9vbCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgc2xlZXBlciBjYW52YXMgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0geyp9IGRyYWdTbGVlcGVyTGlzdCBcbiAgICAgKiBAcGFyYW0geyp9IHJlbGF0aXZlTW92ZURpc3RhbmNlIFxuICAgICAqL1xuICAgIG1vdXNlTW92ZVNsZWVwZXJDb250cm9sbGVyKGRyYWdTbGVlcGVyTGlzdCwgcmVsYXRpdmVNb3ZlRGlzdGFuY2UpIHtcbiAgICAgICAgZm9yIChjb25zdCBzbGVlcGVyIG9mIGRyYWdTbGVlcGVyTGlzdCkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luWCA9IHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueDtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpblkgPSBzbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnk7XG4gICAgICAgICAgICBjb25zdCBuZXdYID0gb3JpZ2luWCArIHJlbGF0aXZlTW92ZURpc3RhbmNlLng7XG4gICAgICAgICAgICBjb25zdCBuZXdZID0gb3JpZ2luWSArIHJlbGF0aXZlTW92ZURpc3RhbmNlLnk7XG4gICAgICAgICAgICBzbGVlcGVyLmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHtcbiAgICAgICAgICAgICAgICB4OiBuZXdYLFxuICAgICAgICAgICAgICAgIHk6IG5ld1ksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBlZGdlIG9mIHNsZWVwZXIuZWRnZUxpc3QpIHtcbiAgICAgICAgICAgICAgICBlZGdlLnNldExvY2F0aW9uKCdzdGFydCcsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogZWRnZS5zdGFydExvY2F0aW9uLnggKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBlZGdlLnN0YXJ0TG9jYXRpb24ueSArIHJlbGF0aXZlTW92ZURpc3RhbmNlLnksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZWRnZSBvZiBzbGVlcGVyLmluY29taW5nRWRnZUxpc3QpIHtcbiAgICAgICAgICAgICAgICBlZGdlLnNldExvY2F0aW9uKCdlbmQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGVkZ2UuZW5kTG9jYXRpb24ueCArIHJlbGF0aXZlTW92ZURpc3RhbmNlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGVkZ2UuZW5kTG9jYXRpb24ueSArIHJlbGF0aXZlTW92ZURpc3RhbmNlLnksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBlZGdlIGNhbnZhcyBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7RWRnZX0gZHJhZ0VkZ2UgXG4gICAgICogQHBhcmFtIHsqfSByZWxhdGl2ZU1vdmVEaXN0YW5jZSBcbiAgICAgKi9cbiAgICBtb3VzZU1vdmVIZWFkQ29udHJvbGxlcihkcmFnRWRnZSwgY3VycmVudFBvc2l0aW9uKSB7XG4gICAgICAgIGRyYWdFZGdlLnNldExvY2F0aW9uKCdlbmQnLCBjdXJyZW50UG9zaXRpb24pO1xuXG4gICAgICAgIC8vIERlbGV0ZSB0aGUgZWRnZSBmcm9tIGVuZCBzbGVlcGVyXG4gICAgICAgIGlmICghIWRyYWdFZGdlLmVuZFNsZWVwZXIpIHtcbiAgICAgICAgICAgIGRyYWdFZGdlLmVuZFNsZWVwZXIucmVtb3ZlSW5jb21pbmdFZGdlKGRyYWdFZGdlKTtcbiAgICAgICAgICAgIGRyYWdFZGdlLmNoYW5nZUVuZChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFuIGFsbCB0aGUgZHJhZyBmbGFnIHdoZW4gbW91c2UgdXBcbiAgICAgKiBAcGFyYW0geyp9IGRyYWdTbGVlcGVyTGlzdCBcbiAgICAgKi9cbiAgICBtb3VzZVVwU2xlZXBlckNvbnRyb2xsZXIoZHJhZ1NsZWVwZXJMaXN0KSB7XG4gICAgICAgIGZvcihjb25zdCBzbGVlcGVyIG9mIGRyYWdTbGVlcGVyTGlzdCkge1xuICAgICAgICAgICAgc2xlZXBlci5zd2l0Y2hEcmFnU3RhdHVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSB0ZW1wb3JhcnkgZWRnZSBpbnRvIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXJBbmRBbmNob3IgY2xpY2tlZCBhbmNob3IgYW5kIGl0cyBzbGVlcGVyXG4gICAgICogQHBhcmFtIHtFZGdlfSBlZGdlIGVkZ2Ugb2JqZWN0XG4gICAgICovXG4gICAgbW91c2VVcEFuY2hvckNvbnRyb2xsZXIoc2xlZXBlckFuZEFuY2hvciwgZWRnZSwgY2xvc2VzdE9iamVjdCkge1xuICAgICAgICBjb25zdCBbc2xlZXBlciwgc2xlZXBlckFuY2hvcl0gPSBzbGVlcGVyQW5kQW5jaG9yO1xuICAgICAgICBzbGVlcGVyLmFkZEVkZ2UoZWRnZSk7XG5cbiAgICAgICAgLy8gQWRkIHRoZSBlbmQgc2xlZXBlciBpZiBjbG9lc3RPYmplY3QgZXhpc3RlZFxuICAgICAgICBpZiAoISFjbG9zZXN0T2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlVXBIZWFkQ29udHJvbGxlcihlZGdlLCBjbG9zZXN0T2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpbmsgdG8gdGhlIGNsb2VzdCBhbmNob3IgaWYgbmVlZGVkXG4gICAgICogQHBhcmFtIHsqfSBlZGdlIFxuICAgICAqIEBwYXJhbSB7Kn0gY2xvc2VzdE9iamVjdCBcbiAgICAgKi9cbiAgICBtb3VzZVVwSGVhZENvbnRyb2xsZXIoZWRnZSwgY2xvc2VzdE9iamVjdCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjbG9zZXN0TG9jYXRpb24sXG4gICAgICAgICAgICBjbG9zZXN0U2xlZXBlcixcbiAgICAgICAgfSA9IGNsb3Nlc3RPYmplY3Q7XG5cbiAgICAgICAgLy8gU2V0IGluY29taW5nIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlclxuICAgICAgICBjbG9zZXN0U2xlZXBlci5hZGRJbmNvbWluZ0VkZ2UoZWRnZSk7XG5cbiAgICAgICAgLy8gU2V0IGVkZ2UgbG9jYXRpb25cbiAgICAgICAgZWRnZS5zZXRMb2NhdGlvbignZW5kJywgY2xvc2VzdExvY2F0aW9uKTtcblxuICAgICAgICAvLyBTZXQgZWRnZSBlbmQgc2xlZXBlclxuICAgICAgICBlZGdlLmNoYW5nZUVuZChjbG9zZXN0U2xlZXBlcik7XG5cbiAgICAgICAgLy8gU2V0IGVkZ2Ugc3RhcnQgc2xlZXBlcidzIGNoaWxkXG4gICAgICAgIGVkZ2Uuc3RhcnRTbGVlcGVyLmFkZENoaWxkKGNsb3Nlc3RTbGVlcGVyKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTbGVlcGVyfSBzbGVlcGVyXG4gICAgICogU3RhcnQgdGV4dCBtb2RlIHdoZW4gZG91bGJlIGNsaWNrIG9uIHRoZSBzbGVlcGVyXG4gICAgICovXG4gICAgbW91c2VEb3VibGVDbGlja0NvbnRyb2xsZXIoc2xlZXBlcikge1xuICAgICAgICAvLyBDYWxsIHRoZSBzdGFydGluZyB0ZXh0IG1vZGUgZnVuY3Rpb24gb2YgdGhhdCBzbGVlcGVyXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFNsZWVwZXJFdmVudE5hbWUuYWN0aXZlU29tZVNsZWVwZXJUZXh0TW9kZSxcbiAgICAgICAgICAgIHNsZWVwZXIsXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgTW91c2VBY3Rpb25Db250cm9sbGVyIH07IiwiaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IERlZXBDbG9uZUluZm8gfSBmcm9tICcuL2RlZXBDbG9uZSc7XG5pbXBvcnQgeyBcbiAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLFxuICAgIFBhaW50ZXJFdmVudE5hbWUsXG4gICAgVW5kb1JlZG9FdmVudE5hbWUsXG4gICAgUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IFNhdmVkT3BlcmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vdW5kby1yZWRvL29wZXJhdGlvbic7XG5pbXBvcnQgeyBBY3Rpb25VdGlscyB9IGZyb20gJy4uL2FjdGlvbi11dGlscyc7XG5pbXBvcnQgeyBtb3VzZUFjdGlvbk1vZGUgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyJztcbmltcG9ydCB7IEVkZ2UgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL2VkZ2UvZWRnZSc7XG5cbmNsYXNzIE1vdXNlQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMubW91c2VQb3NpdGlvblggPSBudWxsO1xuICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb25ZID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gbW91c2VBY3Rpb25Nb2RlLmRvd25Pbk5vbmU7XG4gICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IG51bGw7XG5cbiAgICAgICAgLy8gU2F2ZSB0ZW1wb3JhcnkgdmFyaWFibGUgXG4gICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZSA9IG51bGw7XG5cbiAgICAgICAgLy8gQ29weSBmb3IgZGVjb3JhdG9yXG4gICAgICAgIHRoaXMudGVtcG9yYXJ5Q29weSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5pbml0QWN0aW9uKCk7XG4gICAgfVxuICAgIHN3aXRjaFRleHRNb2RlXG4gICAgLyoqXG4gICAgICogSW5pdCBhbGwgdGhlIG1vdXNlIGFjdGlvbiBsaXN0ZW5lcnNcbiAgICAgKi9cbiAgICBpbml0QWN0aW9uKCkge1xuICAgICAgICBjb25zdCBhY3Rpb25zTWFwID0ge1xuICAgICAgICAgICAgJ21vdXNlZG93bic6IHRoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQodGhpcyksXG4gICAgICAgICAgICAnbW91c2Vtb3ZlJzogQWN0aW9uVXRpbHMudGhyb3R0bGVyTWFrZXIodGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKSwgMTAwMCAvIDYwKSxcbiAgICAgICAgICAgICdtb3VzZXVwJzogdGhpcy5oYW5kbGVOTW91c2VVcC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2RibGNsaWNrJzogdGhpcy5oYW5kbGVNb3VzZURvdWJsZUNsaWNrLmJpbmQodGhpcyksXG4gICAgICAgICAgICAnY29udGV4dG1lbnUnOiB0aGlzLmhhbmRsZU1vdXNlUHJldmVudFJpZ2h0Q2xpY2suYmluZCh0aGlzKSxcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBhY3Rpb24gaW4gYWN0aW9uc01hcCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihhY3Rpb24sIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zTWFwW2FjdGlvbl0oZXZlbnQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE1vdXNlUG9zaXRpb24oeCwgeSkge1xuICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb25YID0geDtcbiAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uWSA9IHk7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIC8vIENsb3NlIGNvbG9yIHBpY2tlclxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lLmNsb3NlQ29sb3JQaWNrZXIsXG4gICAgICAgICAgICBudWxsXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBVcGRhdGUgbW91c2UgcG9zaXRpb24gd2hlbiBjbGlja1xuICAgICAgICB0aGlzLnNldE1vdXNlUG9zaXRpb24obG9jYXRpb24ueCwgbG9jYXRpb24ueSk7XG5cbiAgICAgICAgLy8gRmluZCBsb2NhdGVkIG9iamVjdFxuICAgICAgICBjb25zdCBsb2NhdGVkT2JqZWN0ID0gQWN0aW9uVXRpbHMuZmluZExvY2F0ZWRPYmplY3QodGhpcy5jYW52YXMsIGxvY2F0aW9uKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnbG9jYXRlZCBvYmplY3QnLCBsb2NhdGVkT2JqZWN0KTtcblxuICAgICAgICAvLyBJZiByaWdodCBjbGlja1xuICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09IDIpIHtcbiAgICAgICAgICAgIC8vIElmIHJpZ2h0IGNsaWNrXG4gICAgICAgICAgICBsZXQgdHlwZSA9IG51bGw7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKGxvY2F0ZWRPYmplY3QpIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gbG9jYXRlZE9iamVjdC50eXBlO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxvY2F0ZWRPYmplY3QucmVzdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZVJpZ2h0Q2xpY2ssXG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBsZWZ0IGNsaWNrXG4gICAgICAgIGlmKCEhbG9jYXRlZE9iamVjdCkge1xuICAgICAgICAgICAgY29uc3Qge3R5cGUsIHJlc3VsdH0gPSBsb2NhdGVkT2JqZWN0O1xuICAgICAgICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsaW5lJzpcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZURvd25MaW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25MaW5lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uSGVhZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhbmNob3InOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uQW5jaG9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NsZWVwZXInOlxuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlRG93blNsZWVwZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gbW91c2VBY3Rpb25Nb2RlLmRvd25PblNsZWVwZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEEgY2VydGFpbiBjb3B5IG9mIG1vdXNlRG93bkVsZW1lbnQgZm9yIGluZm8gZnJvbSBvcmlnaW5hbCBub2RlXG4gICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUNvcHkgPSBEZWVwQ2xvbmVJbmZvKHRoaXMuYWN0aW9uTW9kZSwgdGhpcy5tb3VzZURvd25FbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvd24gb24gYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uQmFja2dyb3VuZDtcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZURvd25CYWNrZ3JvdW5kLFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICApXG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLmFjdGlvbk1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UobW91c2VBY3Rpb25Nb2RlLmRvd25Pbk5vbmUpOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJIb3Zlck1vdmUuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25TbGVlcGVyKTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVyRHJhZ1NsZWVwZXJNb3ZlLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZShtb3VzZUFjdGlvbk1vZGUuZG93bk9uQW5jaG9yKTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVyRHJhZ0FuY2hvck1vdmUuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25CYWNrZ3JvdW5kKTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVyRHJhZ0JhY2tncm91bmRNb3ZlLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZShtb3VzZUFjdGlvbk1vZGUuZG93bk9uSGVhZCk6XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlckRyYWdIZWFkTW92ZS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVySG92ZXJNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCxcbiAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gRmluZCBsb2NhdGVkIG9iamVjdFxuICAgICAgICBjb25zdCBsb2NhdGVkT2JqZWN0ID0gQWN0aW9uVXRpbHMuZmluZExvY2F0ZWRPYmplY3QodGhpcy5jYW52YXMsIGxvY2F0aW9uKTtcbiAgICAgICAgaWYoISFsb2NhdGVkT2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGxvY2F0ZWRPYmplY3Q7XG4gICAgICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FuY2hvcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdjcm9zc2hhaXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzbGVlcGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsaW5lJzpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0luIGxpbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkJzpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0luIEhlYWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ2FsbC1zY3JvbGwnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgfVxuXG4gICAgX2hhbmRsZXJEcmFnU2xlZXBlck1vdmUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZHJhZ1NsZWVwZXJMaXN0ID0gQWN0aW9uVXRpbHMuZmluZERyYWdnZWRTbGVlcGVyKCk7XG5cbiAgICAgICAgLy8gTm8gbm9kZSBpcyBkcmFnZ2VkXG4gICAgICAgIGlmIChkcmFnU2xlZXBlckxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxjdWxhdGUgcmVsYXRpdmUgbW92ZSBkaXN0YW5jZVxuICAgICAgICBjb25zdCByZWxhdGl2ZU1vdmVEaXN0YW5jZSA9IHtcbiAgICAgICAgICAgIHg6IGV2ZW50Lm9mZnNldFggLSB0aGlzLm1vdXNlUG9zaXRpb25YLCBcbiAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFkgLSB0aGlzLm1vdXNlUG9zaXRpb25ZLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFNhdmUgY3VycmVudCBtb3VzZSBwb3Npc3Rpb25cbiAgICAgICAgdGhpcy5zZXRNb3VzZVBvc2l0aW9uKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIGFjdGlvbiBjb250cm9sbGVyXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VNb3ZlU2xlZXBlcixcbiAgICAgICAgICAgIGRyYWdTbGVlcGVyTGlzdCxcbiAgICAgICAgICAgIHJlbGF0aXZlTW92ZURpc3RhbmNlLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9oYW5kbGVyRHJhZ0FuY2hvck1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRlbXBvcmFyeUVkZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IFtzbGVlcGVyLCBzbGVlcGVyQW5jaG9yXSA9IHRoaXMubW91c2VEb3duRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0TG9hY3Rpb24gPSBzbGVlcGVyQW5jaG9yLmxvY2F0aW9uO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIHRlbXBvcmFyeSBlZ2RlIG9iamVjdFxuICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlID0gbmV3IEVkZ2UoKTtcbiAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZS5jaGFuZ2VTdGFydChzbGVlcGVyKTtcbiAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZS5zZXRMb2NhdGlvbignc3RhcnQnLCBzdGFydExvYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aGUgZW5kIGxvY2F0aW9uXG4gICAgICAgIGNvbnN0IGVuZExvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCwgXG4gICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZS5zZXRMb2NhdGlvbignZW5kJywgZW5kTG9jYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgLy8gU2F2ZSBjdXJyZW50IG1vdXNlIHBvc2lzdGlvblxuICAgICAgICB0aGlzLnNldE1vdXNlUG9zaXRpb24oZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9oYW5kbGVyRHJhZ0hlYWRNb3ZlKGV2ZW50KSB7XG4gICAgICAgIC8vIENhbGN1bGF0ZSByZWxhdGl2ZSBtb3ZlIGRpc3RhbmNlXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQb3Npc3Rpb24gPSB7XG4gICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLCBcbiAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFksXG4gICAgICAgIH07XG5cbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZU1vdmVIZWFkLFxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgY3VycmVudFBvc2lzdGlvbixcbiAgICAgICAgKVxuICAgIH1cblxuICAgIF9oYW5kbGVyRHJhZ0JhY2tncm91bmRNb3ZlKGV2ZW50KSB7XG4gICAgICAgIC8vIFRPRE86IENyZWF0ZSBzZWxlY3Rpb24gYm94XG4gICAgfVxuXG4gICAgaGFuZGxlTk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMuYWN0aW9uTW9kZSkge1xuICAgICAgICAgICAgY2FzZSAobW91c2VBY3Rpb25Nb2RlLmRvd25PblNsZWVwZXIpOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdTbGVlcGVyTGlzdCA9IEFjdGlvblV0aWxzLmZpbmREcmFnZ2VkU2xlZXBlcigpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3VzZSB1cCcsIHRoaXMubW91c2VEb3duRWxlbWVudC5pc0RyYWcpO1xuXG4gICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlVXBTbGVlcGVyLFxuICAgICAgICAgICAgICAgICAgICBkcmFnU2xlZXBlckxpc3QsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5Q29weSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAobW91c2VBY3Rpb25Nb2RlLmRvd25PbkFuY2hvcik6XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdE9iamVjdEFuY2hvciA9IEFjdGlvblV0aWxzLmZpbmRDbG9zZXN0QW5jaG9yKHtcbiAgICAgICAgICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZVVwQW5jaG9yLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZSxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdE9iamVjdEFuY2hvcixcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKG1vdXNlQWN0aW9uTW9kZS5kb3duT25IZWFkKTpcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0T2JqZWN0SGVhZCA9IEFjdGlvblV0aWxzLmZpbmRDbG9zZXN0QW5jaG9yKHtcbiAgICAgICAgICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICghY2xvc2VzdE9iamVjdEhlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VuZCBkaXJlY3RseSB0byBVbmRvUmVkbyBzdGFjayAoTm90ZSBvbmx5IGhlYWQgaXMgc3BlaWNpYWwpXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLm1vdmVIZWFkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRW5kTG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5tb3VzZURvd25FbGVtZW50LmVuZExvY2F0aW9uLnggLSB0aGlzLnRlbXBvcmFyeUNvcHkueCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5tb3VzZURvd25FbGVtZW50LmVuZExvY2F0aW9uLnkgLSB0aGlzLnRlbXBvcmFyeUNvcHkueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZVVwSGVhZCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0T2JqZWN0SGVhZCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlDb3B5LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChtb3VzZUFjdGlvbk1vZGUuZG93bk9uQmFja2dyb3VuZCk6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCYWNrIHRvIGRlZmF1bHQgc3RhdHVzXG4gICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25Ob25lO1xuICAgICAgICB0aGlzLnRlbXBvcmFyeUNvcHkgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBjYWxsYmFjayBmb3IgZG91YmxlIGNsaWNrIG9wZXJhdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gZXZlbnQgXG4gICAgICovXG4gICAgaGFuZGxlTW91c2VEb3VibGVDbGljayhldmVudCkge1xuICAgICAgICAvLyBPbmx5IEFjdGl2ZSB3aGVuIGRvdWJsZSBjbGljayBvbiBzbGVlcGVyXG4gICAgICAgIGlmICghdGhpcy5tb3VzZURvd25FbGVtZW50IGluc3RhbmNlb2YgU2xlZXBlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBpZiB0aGUgbG9jYXRpb24gaXMgb24gdGhlIHRoYXQgc2xlZXBlclxuICAgICAgICBjb25zdCBpc0luVGhpc1NsZWVwZXIgPSB0aGlzLmNhbnZhc0NvbnRleHQuaXNQb2ludEluUGF0aChcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudC5jYW52YXNQYXRoLFxuICAgICAgICAgICAgZXZlbnQub2Zmc2V0WCxcbiAgICAgICAgICAgIGV2ZW50Lm9mZnNldFksXG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIGlmICghaXNJblRoaXNTbGVlcGVyIHx8IHRoaXMubW91c2VEb3duRWxlbWVudC5pc1RleHRNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBtb3VzZSBhY3Rpb24gbW9kZVxuICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uVGV4dDtcblxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlRG91YmxlQ2xpY2ssXG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VQcmV2ZW50UmlnaHRDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9ICAgXG59XG5cbmV4cG9ydCB7IE1vdXNlQWN0aW9uIH07IiwiaW1wb3J0IHsgXG4gICAgUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZSxcbiAgICBQYWludGVyRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFNsZWVwZXJQb29sZXIgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci1wb29sJztcbmltcG9ydCB7IFNsZWVwZXJzRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLWZhY3RvcnknO1xuXG5jbGFzcyBQYW5lbE9wZXJhdGlvbkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc2VyIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY2hhbmdlQWxsUHJvYmFiaWxpdHksXG4gICAgICAgICAgICByZXNldFNsZWVwZXJzLFxuICAgICAgICAgICAgcGFuZWxDcmVhdGVOb2RlLFxuICAgICAgICAgICAgcGFuZWxBY3RpdmUsXG4gICAgICAgIH0gPSBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lO1xuXG4gICAgICAgIC8vIE1ha2UgRXZlbnROYW1lLUhhbmRsZXIgTWFwXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFtjaGFuZ2VBbGxQcm9iYWJpbGl0eV0gPSB0aGlzLnByb2JDaGFuZ2VDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW3BhbmVsQ3JlYXRlTm9kZV0gPSB0aGlzLnBhbmVsQ3JlYXRlTm9kZUNvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbcmVzZXRTbGVlcGVyc10gPSB0aGlzLnJlc2V0Q29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFtwYW5lbEFjdGl2ZV0gPSB0aGlzLnBhbmVsQWN0aXZlQ29udHJvbGxlcjtcblxuICAgICAgICAvLyBJbml0IGV2ZW50IGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnROYW1lc01hcFtldmVudE5hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBhbGwgdGhlIHByb2Igd2l0aGluIGVhY2ggc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gcHJvYiBcbiAgICAgKi9cbiAgICBwcm9iQ2hhbmdlQ29udHJvbGxlcihwcm9iKSB7XG4gICAgICAgIC8vIENoYW5nZSB0aGUgZmFjdG9yeVxuICAgICAgICBTbGVlcGVyc0ZhY3RvcnkuY2hhbmdlUHJvYmFiaWxpdHkocHJvYik7XG5cbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBzbGVlcGVyXG4gICAgICAgIGZvcihjb25zdCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgc2xlZXBlci5wcm9iYWJpbGl0eSA9IHByb2I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBhbGwgdGhlIHNsZWVwZXIgc3RhdHVzXG4gICAgICovXG4gICAgcmVzZXRDb250cm9sbGVyKCkge1xuICAgICAgICBmb3IoY29uc3Qgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIGlmIChzbGVlcGVyLmlzU2xlZXBpbmcgIT09IHNsZWVwZXIuYmVmb3JlUHJvY2Vzc0lzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICBzbGVlcGVyLmNoYW5nZVNsZWVwaW5nU3RhdHVzKHNsZWVwZXIuYmVmb3JlUHJvY2Vzc0lzU2xlZXBpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBzbGVlcGVyIGZyb20gcGFuZWxcbiAgICAgKi9cbiAgICBwYW5lbENyZWF0ZU5vZGVDb250cm9sbGVyKG9iaiwgcG9zaXRpb24pIHtcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5jcmVhdGVOb2RlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjaXR2ZSBzbGVlcGVyIHdpdGggY29udGV4dCBtZWFudVxuICAgICAqL1xuICAgIHBhbmVsQWN0aXZlQ29udHJvbGxlcihzbGVlcGVyKSB7XG4gICAgICAgIC8vIEFjdGl2ZSBzbGVlcGVyXG4gICAgICAgIHNsZWVwZXIuY2hhbmdlU2xlZXBpbmdTdGF0dXMoKTtcbiAgICAgICAgc2xlZXBlci5iZWZvcmVQcm9jZXNzSXNTbGVlcGluZyA9IHNsZWVwZXIuaXNTbGVlcGluZztcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IFBhbmVsT3BlcmF0aW9uQ29udHJvbGxlciB9OyIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBTbGVlcGVyUG9vbGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItcG9vbCc7XG5pbXBvcnQge1xuICAgIFBhaW50ZXJFdmVudE5hbWUsXG4gICAgUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcblxuY2xhc3MgV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJvdW5kTnVtID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZVRpbWUgPSA3MDA7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVmcmVzaEludGVydmFsSWQgPSBudWxsO1xuICAgICAgICB0aGlzLmF3YWtlUXVldWUgPSBudWxsO1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc2VyIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgc3RhcnRXYWtpbmdQcm9jZXNzLFxuICAgICAgICAgICAgcGF1c2VXYWtpbmdQcm9jZXNzLFxuICAgICAgICB9ID0gUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZTtcblxuICAgICAgICAvLyBNYWtlIEV2ZW50TmFtZS1IYW5kbGVyIE1hcFxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbc3RhcnRXYWtpbmdQcm9jZXNzXSA9IHRoaXMuc3RhcnRXYWtpbmdQcm9jZXNzQ29udHJvbGxlci5iaW5kKHRoaXMpO1xuICAgICAgICBldmVudE5hbWVzTWFwW3BhdXNlV2FraW5nUHJvY2Vzc10gPSB0aGlzLnBhdXNlV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIuYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBJbml0IGV2ZW50IGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnROYW1lc01hcFtldmVudE5hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRBd2FrZVF1ZXVlKCkge1xuICAgICAgICBjb25zdCB0ZW1wUXVldWUgPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IHNsZWVwZXIgb2YgU2xlZXBlclBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBpZiAoIXNsZWVwZXIuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHRlbXBRdWV1ZS5wdXNoKHNsZWVwZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hd2FrZVF1ZXVlID0gdGVtcFF1ZXVlO1xuICAgIH1cbiAgICBcbiAgICBzdGFydFdha2luZ1Byb2Nlc3NDb250cm9sbGVyKCkge1xuICAgICAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0QXdha2VRdWV1ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBhd2FrZSBxdWV1ZTEnLCB0aGlzLmF3YWtlUXVldWUpO1xuXG4gICAgICAgIC8vIFNldCBpbnRlcnZhbFxuICAgICAgICB0aGlzLnJlZnJlc2hJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXdha2VRdWV1ZS5sZW5ndGggPiAwICYmICF0aGlzLmlzUGF1c2UpIHtcbiAgICAgICAgICAgICAgICAvLyBHbyBOZXh0IFJvdW5kXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzbGVlcGVyIG9mIHRoaXMuYXdha2VRdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdBY3RpdmVkU2xlZXBlciA9IHNsZWVwZXIuYWN0aXZlQ2hpbGQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hd2FrZVF1ZXVlID0gWy4uLnRoaXMuYXdha2VRdWV1ZSwgLi4ubmV3QWN0aXZlZFNsZWVwZXJdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF3YWtlUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgcm91bmQgbnVtYmVyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3VuZE51bSArPSAxO1xuXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hd2FrZVF1ZXVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUuZW5kV2FraW5nUHJvY2Vzc1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENsZWFyIGludGVydmFsXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnJlZnJlc2hJbnRlcnZhbElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5mcmFtZVRpbWUpO1xuICAgIH1cblxuICAgIHBhdXNlV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XG4gICAgfVxuXG4gICAgXG59XG5cbmV4cG9ydCB7IFdha2luZ1Byb2Nlc3NDb250cm9sbGVyIH07IiwiZXhwb3J0IGNvbnN0IERlZmF1bHRFZGdlV2VpZ2h0ID0gMC41O1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdFNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbiA9IHtcbiAgICBkcmF3VHlwZTogJ2NpcmNsZScsXG4gICAgeDogNTAwLFxuICAgIHk6IDUwMCxcbiAgICByYWRpdXM6IDMwLFxuICAgIHN0YXJ0QW5nbGU6IDAsXG4gICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuICAgIGlzRmlsbGVkOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyNDQUM5Q0MnLFxuICAgIGlzQm9yZGVyOiB0cnVlLFxuICAgIGJvcmRlcldpdGg6IDIsXG4gICAgYm9yZGVyQ29sb3I6ICcjMDAwMDAwJyxcbiAgICBpc0FuY2hvcjogZmFsc2UsXG4gICAgYWN0aXZlQm9yZGVyQ29sb3I6ICcjMDA2OEZGJyxcbn07XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0QXdha2VDYW52YXNJbmZvcm1hdGlvbiA9IHtcbiAgICBkcmF3VHlwZTogJ2NpcmNsZScsXG4gICAgeDogNTAwLFxuICAgIHk6IDUwMCxcbiAgICByYWRpdXM6IDMwLFxuICAgIHN0YXJ0QW5nbGU6IDAsXG4gICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuICAgIGlzRmlsbGVkOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyNGRkIxQjInLFxuICAgIGlzQm9yZGVyOiB0cnVlLFxuICAgIGJvcmRlcldpdGg6IDIsXG4gICAgYm9yZGVyQ29sb3I6ICcjMDAwMDAwJyxcbiAgICBpc0FuY2hvcjogZmFsc2UsXG4gICAgYWN0aXZlQm9yZGVyQ29sb3I6ICcjMDA2OEZGJyxcbn07IiwiaW1wb3J0IHsgRWRnZVBvb2xFdmVudE5hbWUgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcblxuY2xhc3MgRWRnZVBvb2wge1xuICAgIC8qKlxuICAgICAqIEdldCBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgU2xlZXBlclBvb2xcbiAgICAgKiBAcmV0dXJucyB7RWRnZVBvb2x9XG4gICAgICovXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBFZGdlUG9vbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghRWRnZVBvb2wuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9vbCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmluaXRFdmVudHNIYW5kbGVyKCk7XG4gICAgICAgICAgICBFZGdlUG9vbC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gRWRnZVBvb2wuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciByZWxhdGVkIHRvIFNsZWVwZXIgUG9vbFxuICAgICAqL1xuICAgIGluaXRFdmVudHNIYW5kbGVyKCkge1xuICAgICAgICAvLyBSZWdpc3RlciBhZGRpbmcgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBFZGdlUG9vbEV2ZW50TmFtZS5hZGRFZGdlLCBcbiAgICAgICAgICAgIHRoaXMuYWRkRWRnZS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgc2xlZXBlciBvYmplY3QgaW50byBlZGdlIHBvb2xcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IHNsZWVwZXIgXG4gICAgICovXG4gICAgYWRkRWRnZShlZGdlKSB7XG4gICAgICAgIHRoaXMucG9vbC5wdXNoKGVkZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbiBlZGdlIGZyb20gZWRnZSBwb29sXG4gICAgICogQHBhcmFtIHsqfSBlZGdlIFxuICAgICAqL1xuICAgIHJlbW92ZUVkZ2UoZWRnZSkge1xuICAgICAgICBjb25zdCBsb2NhdGVkSW5kZXggPSB0aGlzLnBvb2wuZmluZEluZGV4KGVkZ2VJblBvb2wgPT4gZWRnZUluUG9vbCA9PT0gZWRnZSk7XG4gICAgICAgIGlmIChsb2NhdGVkSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2wuc3BsaWNlKGxvY2F0ZWRJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBFZGdlUG9vbGVyID0gRWRnZVBvb2wuZ2V0SW5zdGFuY2UoKTsiLCJpbXBvcnQgeyBEZWZhdWx0RWRnZVdlaWdodCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgXG4gICAgRWRnZVBvb2xFdmVudE5hbWUsIFxuICAgIEVkZ2VFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vc2xlZXBlci9zbGVlcGVyJztcbmltcG9ydCB7IEVkZ2VQb29sZXIgfSBmcm9tICcuL2VkZ2UtcG9vbCc7XG5cbmNsYXNzIEVkZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBEYXRhIGluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbmRTbGVlcGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy53ZWlnaHQgPSBudWxsO1xuXG4gICAgICAgIC8vIENhbnZhcyBwYXRoIGluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMuc3RhcnRMb2NhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZW5kTG9jYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmNhbnZhc1BhdGggPSBudWxsO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gSW5pdCBldmVudFxuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIEV2ZW50XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChFZGdlUG9vbEV2ZW50TmFtZS5hZGRFZGdlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlU29tZUVkZ2UsXG4gICAgICAgIH0gPSBFZGdlRXZlbnROYW1lO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFthY3RpdmVTb21lRWRnZV0gPSB0aGlzLmFjdGl2ZVNvbWVFZGdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgYWN0aXZlIHNvbWUgbm9kZSBoYW5kbGVyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnQgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudE5hbWVzTWFwW2V2ZW50XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHN0YXJ0IHNsZWVwZXIgb2JqZWN0XG4gICAgICogQHJldHVybnMge1NsZWVwZXJ9IFxuICAgICAqL1xuICAgIGdldFN0YXJ0U2xlZXBlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRTbGVlcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZW5kIHNsZWVwZXIgb2JqZWN0XG4gICAgICogQHJldHVybnMge1NsZWVwZXJ9IFxuICAgICAqL1xuICAgIGdldEVuZFNsZWVwZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZFNsZWVwZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB3ZWlnaHQgb24gdGhpcyBlZGdlXG4gICAgICogQHJldHVybnMge2Zsb2F0fVxuICAgICAqL1xuICAgIGdldFdlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2VpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgd2VpZ2h0IHRvIHRoZSBnaXZlbiB2YWx1ZVxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IG5ld1dlaWdodCBcbiAgICAgKi9cbiAgICBjaGFuZ2VXZWlnaHQobmV3V2VpZ2h0KSB7XG4gICAgICAgIHRoaXMud2VpZ2h0ID0gbmV3V2VpZ2h0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIHN0YXJ0IHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IG5ld1NsZWVwZXIgXG4gICAgICovXG4gICAgY2hhbmdlU3RhcnQobmV3U2xlZXBlcikge1xuICAgICAgICB0aGlzLnN0YXJ0U2xlZXBlciA9IG5ld1NsZWVwZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBlbmQgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gbmV3U2xlZXBlciBcbiAgICAgKi9cbiAgICBjaGFuZ2VFbmQobmV3U2xlZXBlcikge1xuICAgICAgICB0aGlzLmVuZFNsZWVwZXIgPSBuZXdTbGVlcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBzdGFydCBhbmQgZW5kIGxvY2F0aW9uXG4gICAgICovXG4gICAgc2V0TG9jYXRpb24odHlwZSwgbG9jYXRpb24pIHtcbiAgICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0TG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjYW52YXMgcGF0aFxuICAgICAqL1xuICAgIHNldENhbnZhc1BhdGgoZWRnZVBhdGgpIHtcbiAgICAgICAgdGhpcy5jYW52YXNQYXRoID0gZWRnZVBhdGg7XG4gICAgfVxuXG4gICAgYWN0aXZlU29tZUVkZ2UoZWRnZSkge1xuICAgICAgICBpZiAoZWRnZSA9PT0gdGhpcyAmJiB0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FjdGl2ZSAmJiBlZGdlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVTZWxmKCkge1xuICAgICAgICBFZGdlUG9vbGVyLnJlbW92ZUVkZ2UodGhpcyk7XG4gICAgICAgIC8vIERlbGV0ZSBpdCBpbiBzdGFydCBzbGVlcGVyXG4gICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyLnJlbW92ZUVkZ2UodGhpcyk7XG5cbiAgICAgICAgLy8gRGVsZXRlIGl0IGluIGVuZCBzbGVlcGVyXG4gICAgICAgIGlmICghIXRoaXMuZW5kU2xlZXBlcikge1xuICAgICAgICAgICAgdGhpcy5lbmRTbGVlcGVyLnJlbW92ZUluY29taW5nRWRnZSh0aGlzKTtcblxuICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSBjaGlsZCBvZiBzdGFydCBzbGVlcGVyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2xlZXBlci5yZW1vdmVDaGlsZCh0aGlzLmVuZFNsZWVwZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjb3ZlclNlbGYoKSB7XG4gICAgICAgIEVkZ2VQb29sZXIuYWRkRWRnZSh0aGlzKTtcbiAgICAgICAgLy8gUmVjb3ZlciBpdCBpbiBzdGFydCBzbGVlcGVyXG4gICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyLmFkZEVkZ2UodGhpcyk7XG5cbiAgICAgICAgLy8gUmVjb3ZlciBpdCBpbiBlbmQgc2xlZXBlclxuICAgICAgICBpZiAoISF0aGlzLmVuZFNsZWVwZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kU2xlZXBlci5hZGRJbmNvbWluZ0VkZ2UodGhpcyk7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgY2hpbGQgb2Ygc3RhcnQgc2xlZXBlclxuICAgICAgICAgICAgdGhpcy5zdGFydFNsZWVwZXIuYWRkQ2hpbGQodGhpcy5lbmRTbGVlcGVyKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBFZGdlIH07IiwiaW1wb3J0IHsgXG4gICAgRGVmYXVsdFNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbixcbiAgICBEZWZhdWx0QXdha2VDYW52YXNJbmZvcm1hdGlvbixcbn0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFxuICAgIFBhaW50ZXJFdmVudE5hbWUsXG4gICAgUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi9zbGVlcGVyJztcbmltcG9ydCB7IFNsZWVwZXJQb29sZXIgfSBmcm9tICcuL3NsZWVwZXItcG9vbCc7XG5pbXBvcnQgeyBVbmRvRGVjb3JhdG9yIH0gZnJvbSAnLi4vLi4vLi4vdW5kby1yZWRvL3VuZG8tZGVjb3JhdG9yJztcblxuY2xhc3MgU2xlZXBlckZhY3Rvcnkge1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFNsZWVwZXJGYWN0b3J5KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3VudCBjYW52YXMgd2hlbiBpbml0aWFsaXplLCBtdXN0IG1vdW50IGJlZm9yZSBpdCBjYW4gYmUgdXNlZCAhISFcbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhc09iaiBcbiAgICAgKi9cbiAgICBtb3VudENhbnZhcyhjYW52YXNPYmopIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNPYmo7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghU2xlZXBlckZhY3RvcnkuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIC8vIEluaXRpYWwgcGFyYW1zXG4gICAgICAgICAgICB0aGlzLnNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRTbGVlcGVyQ2FudmFzSW5mb3JtYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5hd2FrZUNhbnZhc0luZm9ybWF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdEF3YWtlQ2FudmFzSW5mb3JtYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5wcm9iID0gMC4wO1xuXG4gICAgICAgICAgICB0aGlzLmluaXRFdmVudHNIYW5kbGVyKCk7XG4gICAgICAgICAgICBTbGVlcGVyRmFjdG9yeS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xlZXBlckZhY3RvcnkuaW5zdGFuY2U7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBTbGVlcGVyIFBvb2xcbiAgICAgKi9cbiAgICBpbml0RXZlbnRzSGFuZGxlcigpIHtcbiAgICAgICAgLy8gUmVnaXN0ZXIgZm9yIG1ha2luZyBuZXcgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lLmNyZWF0ZU5vZGUsXG4gICAgICAgICAgICBVbmRvRGVjb3JhdG9yLmNyZWF0ZVNsZWVwZXJEZWNvcmF0b3IodGhpcy5tYWtlTmV3U2xlZXBlci5iaW5kKHRoaXMpKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGZvciBjaGFuZ2Vpbmcgc2xlZXBlciBhbmQgYXdha2Ugc2xlZXBlcnMnIHN0eWxlXG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUuY2hhbmdlTm9kZVN0eWxlLFxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbi5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHNsZWVwZXIgYW5kIGF3YWtlIHNsZWVwZXJzJyBjYW52YXMgaW5mb3JtYXRpb25cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdHlwZSAwIGZvciBzbGVlcGVyLCAxIGZvciBhd2FrZSBzbGVlcGVyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnR5T2JqZWN0IG9iamVjdCBmb3IgY2hhbmdlXG4gICAgICovXG4gICAgY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24odHlwZSwgcHJvcGVydHlPYmplY3QpIHtcbiAgICAgICAgbGV0IGZvckNoYW5nZWRJbmZvcm1hdGlvbiA9ICEhdHlwZSA/IHRoaXMuYXdha2VDYW52YXNJbmZvcm1hdGlvbiA6IHRoaXMuc2xlZXBlckNhbnZhc0luZm9ybWF0aW9uO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdGhlIGFsZXJhdGlvbiBhbmQgdXBkYXRlXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gcHJvcGVydHlPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcHJvcGVydHlPYmplY3RbcHJvcGVydHldO1xuICAgICAgICAgICAgaWYgKGZvckNoYW5nZWRJbmZvcm1hdGlvbltwcm9wZXJ0eV0gIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZm9yQ2hhbmdlZEluZm9ybWF0aW9uW3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGUgY2FudmFzIEluZm9ybWF0aW9uXG4gICAgICAgIGZvciAobGV0IHNsZWVwZXIgb2YgU2xlZXBlclBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICAvLyBPbmx5IGNoYW5nZSBjb3JyZXNwb25kaW5nIG5vZGVzIFxuICAgICAgICAgICAgaWYgKCghIXR5cGUpIF4gc2xlZXBlci5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgc2xlZXBlci5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogZm9yQ2hhbmdlZEluZm9ybWF0aW9uLmZpbGxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZvckNoYW5nZWRJbmZvcm1hdGlvbi5ib3JkZXJDb2xvcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2FudmFzIGluZm9ybWF0aW9uXG4gICAgICogQHBhcmFtIHtpbnR9IHR5cGUgMCBmb3Igc2xlZXBlciwgMSBmb3IgYXdha2Ugc2xlZXBlclxuICAgICAqL1xuICAgIGdldENhbnZhc0luZm9ybWF0aW9uKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuICEhdHlwZSA/IHRoaXMuYXdha2VDYW52YXNJbmZvcm1hdGlvbiA6IHRoaXMuc2xlZXBlckNhbnZhc0luZm9ybWF0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBjb25maWcgcHJvYmFiaWxpdHkgdG8gYXdha2Ugb3RoZXIgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gdHlwZSBcbiAgICAgKi9cbiAgICBjaGFuZ2VQcm9iYWJpbGl0eShwcm9iKSB7XG4gICAgICAgIHRoaXMucHJvYiA9IHByb2I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZSBuZXcgc2xlZXBlciB0byBzbGVlcGVyIHBvb2xcbiAgICAgKiBAcGFyYW0ge2ludH0gdHlwZSAwIGZvciBzbGVlcGVyLCAxIGZvciBhd2FrZSBzbGVlcGVyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBvc2l0aW9uIGxvY2F0aW9uIHRvIG1ha2UgbmV3IHNsZWVwZXJcbiAgICAgKi9cbiAgICBtYWtlTmV3U2xlZXBlcih0eXBlLCBwb3NpdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlJyk7XG4gICAgICAgIC8vIEdldCBzbGVlcCBzdGF0dXNcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gIXR5cGU7XG5cbiAgICAgICAgLy8gR2V0IGNhbnZhcyBpbmZvcm1hdGlvblxuICAgICAgICBjb25zdCBjYW52YXNJbmZvcm1hdGlvbiA9ICEhdHlwZSA/IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYXdha2VDYW52YXNJbmZvcm1hdGlvbikgOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbik7XG5cbiAgICAgICAgLy8gU2V0IHBvc2lpdGlvblxuICAgICAgICBpZiAoISFwb3NpdGlvbikge1xuICAgICAgICAgICAgY2FudmFzSW5mb3JtYXRpb24ueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICBjYW52YXNJbmZvcm1hdGlvbi55ID0gcG9zaXRpb24ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ha2UgbmV3IHNsZWVwZXJcbiAgICAgICAgY29uc3QgdGVtcFNsZWVwZXIgPSBuZXcgU2xlZXBlcihcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIGNhbnZhc0luZm9ybWF0aW9uLFxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGVtcFNsZWVwZXIucHJvYmFiaWxpdHkgPSB0aGlzLnByb2I7XG4gICAgICAgIHJldHVybiB0ZW1wU2xlZXBlcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBTbGVlcGVyc0ZhY3RvcnkgPSBTbGVlcGVyRmFjdG9yeS5nZXRJbnN0YW5jZSgpO1xuXG4iLCJpbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgXG4gICAgU2xlZXBlclBvb2xFdmVudE5hbWUsXG4gICAgU2xlZXBlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcblxuY2xhc3MgU2xlZXBlclBvb2wge1xuICAgIC8qKlxuICAgICAqIEdldCBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgU2xlZXBlclBvb2xcbiAgICAgKiBAcmV0dXJucyB7U2xlZXBlclBvb2x9XG4gICAgICovXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTbGVlcGVyUG9vbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghU2xlZXBlclBvb2wuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9vbCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmluaXRFdmVudHNIYW5kbGVyKCk7XG4gICAgICAgICAgICBTbGVlcGVyUG9vbC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xlZXBlclBvb2wuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciByZWxhdGVkIHRvIFNsZWVwZXIgUG9vbFxuICAgICAqL1xuICAgIGluaXRFdmVudHNIYW5kbGVyKCkge1xuICAgICAgICAvLyBSZWdpc3RlciBhZGRpbmcgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBTbGVlcGVyUG9vbEV2ZW50TmFtZS5hZGRTbGVlcGVyLCBcbiAgICAgICAgICAgIHRoaXMuYWRkU2xlZXBlci5iaW5kKHRoaXMpXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgYWN0aXZlIHNsZWVwZXJcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgU2xlZXBlckV2ZW50TmFtZS5hY3RpdmVTb21lU2xlZXBlcixcbiAgICAgICAgICAgIHRoaXMucmVPcmRlclNsZWVwZXIuYmluZCh0aGlzKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgc2xlZXBlciBvYmplY3QgaW50byBzbGVlcGVyIHBvb2xcbiAgICAgKiBAcGFyYW0ge1NsZWVwZXJ9IHNsZWVwZXIgXG4gICAgICovXG4gICAgYWRkU2xlZXBlcihzbGVlcGVyKSB7XG4gICAgICAgIHRoaXMucG9vbC5wdXNoKHNsZWVwZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGdpdmVuIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXIgXG4gICAgICovXG4gICAgcmVtb3ZlU2xlZXBlcihzbGVlcGVyKSB7XG4gICAgICAgIGNvbnN0IGxvY2F0ZWRJbmRleCA9IHRoaXMucG9vbC5maW5kSW5kZXgoc2xlZXBlckluUG9vbCA9PiBzbGVlcGVySW5Qb29sID09PSBzbGVlcGVyKTtcbiAgICAgICAgaWYgKGxvY2F0ZWRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucG9vbC5zcGxpY2UobG9jYXRlZEluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlT3JkZXJTbGVlcGVyKHNsZWVwZXIpIHtcbiAgICAgICAgY29uc3Qgc2xlZXBlckluZGV4ID0gdGhpcy5wb29sLmZpbmRJbmRleChzbGVlcGVySW5Qb29sID0+IHNsZWVwZXJJblBvb2wgID09PSBzbGVlcGVyKTtcbiAgICAgICAgdGhpcy5wb29sLnNwbGljZShzbGVlcGVySW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnBvb2wgPSBbLi4udGhpcy5wb29sLCBzbGVlcGVyXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBTbGVlcGVyUG9vbGVyID0gU2xlZXBlclBvb2wuZ2V0SW5zdGFuY2UoKTsiLCJpbXBvcnQgeyBcbiAgICBQYWludGVyRXZlbnROYW1lLFxuICAgIFNsZWVwZXJFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2V2ZW50XCI7XG5cbmNsYXNzIFRleHRTbGVlcGVyVGVtcFN0YWNrIHtcbiAgICBjb25zdHJ1Y3RvcihvcmlnaW5UZXh0KSB7XG4gICAgICAgIHRoaXMucG9pbnRlciA9IDA7XG4gICAgICAgIHRoaXMuc3RhY2tMaXN0ID0gW107XG4gICAgICAgIHRoaXMuc3RhY2tMaXN0LnB1c2gob3JpZ2luVGV4dCk7XG4gICAgfVxuXG4gICAgZ2V0IHRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrTGlzdFt0aGlzLnBvaW50ZXJdO1xuICAgIH1cblxuICAgIHNldCB0ZXh0KHZhbCkge1xuICAgICAgICB0aGlzLnBvaW50ZXIgKz0gMTtcbiAgICAgICAgdGhpcy5zdGFja0xpc3QucHVzaCh2YWwpO1xuICAgIH1cblxuICAgIHVuZG8oKSB7XG4gICAgICAgIGlmICh0aGlzLnBvaW50ZXIgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvaW50ZXIgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZG8oKSB7XG4gICAgICAgIGlmICh0aGlzLnBvaW50ZXIgPCB0aGlzLnN0YWNrTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLnBvaW50ZXIgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jbGFzcyBUZXh0U2xlZXBlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNldCBmb3IgZGVmYXVsdCB0ZXh0IGNvbmZpZ1xuICAgICAgICB0aGlzLnRleHRJbmZvcm1hdGlvbiA9IHtcbiAgICAgICAgICAgIHNpemU6IDE1LFxuICAgICAgICAgICAgc3R5bGU6ICdUaW1lcyBOZXcgUm9tYW4nLFxuICAgICAgICAgICAgY29udGVudDogJ2EnLFxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRleHRhcmVhSW5mb3JtYXRpb24gPSB7XG4gICAgICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnRleHRhcmVhQm91bmRpbmdCb3hQYXRoID0gbnVsbDtcblxuICAgICAgICAvLyBSZWlnaXN0ZXIgZm9yIHRleHQgdGVtcCBzdGFja1xuICAgICAgICB0aGlzLnRleHRUZW1wU3RhY2sgPSBudWxsO1xuXG4gICAgICAgIHRoaXMudGV4dEluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICB0ZXh0SW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZVNvbWVTbGVlcGVyVGV4dE1vZGUsXG4gICAgICAgIH0gPSBTbGVlcGVyRXZlbnROYW1lO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFthY3RpdmVTb21lU2xlZXBlclRleHRNb2RlXSA9IHRoaXMuc3RhcnRUZXh0TW9kZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGFjdGl2ZSBzb21lIG5vZGUgaGFuZGxlclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnROYW1lc01hcFtldmVudF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3RhcnQgdGhlIHRleHQgbW9kZVxuICAgICAqL1xuICAgIHN0YXJ0VGV4dE1vZGUoc2xlZXBlcikge1xuICAgICAgICBpZiAoc2xlZXBlciA9PSB0aGlzICYmIHRoaXMuaXNUZXh0TW9kZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRleHRUZW1wU3RhY2sgPSBuZXcgVGV4dFNsZWVwZXJUZW1wU3RhY2sodGhpcy50ZXh0SW5mb3JtYXRpb24uY29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1RleHRNb2RlICYmIHNsZWVwZXIgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50ZXh0VGVtcFN0YWNrID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGVuZCB0aGUgdGV4dCBtb2RlXG4gICAgICovXG4gICAgZW5kVGV4dE1vZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVGV4dE1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50ZXh0VGVtcFN0YWNrID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIHRleHQgXG4gICAgICovXG4gICAgZHJhd1RleHQoKSB7XG4gICAgICAgIC8vIEdldCBzbGVlcGVyIGNlbnRlclxuICAgICAgICBjb25zdCB0ZXh0UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNhbnZhc0luZm9ybWF0aW9uLngsXG4gICAgICAgICAgICB5OiB0aGlzLmNhbnZhc0luZm9ybWF0aW9uLnksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gR2V0IG1heCB3aWR0aFxuICAgICAgICBjb25zdCB0ZXh0TWF4V2lkdGggPSB0aGlzLmNhbnZhc0luZm9ybWF0aW9uLnJhZGl1cyAqIE1hdGguc3FydCgzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIERyYXcgdGhlIHRleHRcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS50ZXh0V3JpdGUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRleHRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogdGV4dE1heFdpZHRoLFxuICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uOiB0aGlzLnRleHRJbmZvcm1hdGlvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLnNldFRleHRPclRleHRhcmVhSW5mb3JtYXRpb24uYmluZCh0aGlzKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSB0ZXh0ZXJhXG4gICAgICovXG4gICAgZHJhd1RleHRBcmVhKCkge1xuICAgICAgICAvLyBPbmx5IGRyYXcgaXQgd2hlbiB0ZXh0bW9kZSBpcyBvblxuICAgICAgICBpZiAoIXRoaXMuaXNUZXh0TW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IFNsZWVwZXIgY2VudGVyXG4gICAgICAgIGNvbnN0IHNsZWVwZXJQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzSW5mb3JtYXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzSW5mb3JtYXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBEcmF3IHRoZSB0ZXh0XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUuZmlndXJlRHJhdyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzbGVlcGVyUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgdGV4dGFyZWFJbmZvcm1hdGlvbjogdGhpcy50ZXh0YXJlYUluZm9ybWF0aW9uLFxuICAgICAgICAgICAgICAgIGRyYXdUeXBlOiAndGV4dGFyZWEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuX3NldFRleHRhcmVhUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0ZXh0IC8gdGV4dGFyZWEgaW5mb3JtYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IHByb3BlcnR5T2JqZWN0IFxuICAgICAqIEBwYXJhbSB7Kn0gdHlwZSBcbiAgICAgKi9cbiAgICBzZXRUZXh0T3JUZXh0YXJlYUluZm9ybWF0aW9uKHByb3BlcnR5T2JqZWN0LCB0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlICE9PSAndGV4dCcgJiYgdHlwZSAhPT0gJ3RleHRhcmVhJykge1xuICAgICAgICAgICAgRXJyb3IoJ1dyb25nIHR5cGUgd2hlbiBzZXR0aW5nIHRleHQgLyB0ZXh0YXJlIGluZm9ybWF0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JTZXRPYmplY3QgPSAodHlwZSA9PSAndGV4dCcpID8gdGhpcy50ZXh0SW5mb3JtYXRpb24gOiB0aGlzLnRleHRhcmVhSW5mb3JtYXRpb247XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0aGUgYWxlcmF0aW9uIGFuZCB1cGRhdGVcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBwcm9wZXJ0eU9iamVjdCkge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBwcm9wZXJ0eU9iamVjdFtwcm9wZXJ0eV07XG5cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAmJiBmb3JTZXRPYmplY3RbcHJvcGVydHldICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGZvclNldE9iamVjdFtwcm9wZXJ0eV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERyYXcgdGV4dCBhcmVhIHdoZW4gXG4gICAgICAgIGlmICh0eXBlID09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RleHRBcmVhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYm91bmRpbmcgYm94IHBhdGhcbiAgICAgKiBAcGFyYW0geyp9IGJvdW5kaW5nQm94UGF0aCBcbiAgICAgKi9cbiAgICBfc2V0VGV4dGFyZWFQYXRoKGJvdW5kaW5nQm94UGF0aCkge1xuICAgICAgICB0aGlzLnRleHRhcmVhQm91bmRpbmdCb3hQYXRoID0gYm91bmRpbmdCb3hQYXRoO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVGV4dFNsZWVwZXIgfTsiLCJpbXBvcnQgeyBFZGdlIH0gZnJvbSAnLi4vZWRnZS9lZGdlJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBnZXRBY3Rpdml0eUJ5V2VpZ2h0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWF0aC11dGlscyc7XG5pbXBvcnQgeyBcbiAgICBEZWZhdWx0U2xlZXBlckNhbnZhc0luZm9ybWF0aW9uLFxuICAgIERlZmF1bHRBY3RpdmVJbmZvcm1hdGlvbixcbn0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFxuICAgIFNsZWVwZXJFdmVudE5hbWUsXG4gICAgU2xlZXBlclBvb2xFdmVudE5hbWUsXG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IFRleHRTbGVlcGVyIH0gZnJvbSAnLi9zbGVlcGVyLXRleHQnOyBcbmltcG9ydCB7IFNsZWVwZXJQb29sZXIgfSBmcm9tICcuLi9zbGVlcGVyL3NsZWVwZXItcG9vbCc7XG5pbXBvcnQgeyBTbGVlcGVyc0ZhY3RvcnkgfSBmcm9tICcuL3NsZWVwZXItZmFjdG9yeSc7XG5cbmNsYXNzIFNsZWVwZXIgZXh0ZW5kcyBUZXh0U2xlZXBlciB7XG4gICAgY29uc3RydWN0b3Ioc3RhdHVzLCBjYW52YXNJbmZvcm1hdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaXNTbGVlcGluZyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5iZWZvcmVQcm9jZXNzSXNTbGVlcGluZyA9IHN0YXR1cztcblxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEcmFnID0gZmFsc2U7XG5cbiAgICAgICAgLy8gUHJvYmFiaWxpdHkgdG8gYWN0aXZlIG90aGVyc1xuICAgICAgICB0aGlzLnByb2JhYmlsaXR5ID0gMC4wO1xuXG4gICAgICAgIHRoaXMuZWRnZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5pbmNvbWluZ0VkZ2VMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRFZGdlTWFwTGlzdCA9IFtdO1xuXG4gICAgICAgIHRoaXMuY2FudmFzSW5mb3JtYXRpb24gPSBjYW52YXNJbmZvcm1hdGlvbiB8fCBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0U2xlZXBlckNhbnZhc0luZm9ybWF0aW9uKTtcbiAgICAgICAgdGhpcy5jYW52YXNQYXRoID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW52YXNBbmNob3JzUGF0aExpc3QgPSBudWxsO1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIEV2ZW50XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChTbGVlcGVyUG9vbEV2ZW50TmFtZS5hZGRTbGVlcGVyLCB0aGlzKTtcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LCBcbiAgICAgICAgICAgIHRoaXMuY2FudmFzSW5mb3JtYXRpb24sIFxuICAgICAgICAgICAgdGhpcy5zZXRDYW52YXNQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgdGV4dFxuICAgICAgICB0aGlzLmRyYXdUZXh0QXJlYSgpO1xuICAgICAgICB0aGlzLmRyYXdUZXh0KCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ05ldyBTbGVlcGVyJywgdGhpcyk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZVNvbWVTbGVlcGVyLFxuICAgICAgICB9ID0gU2xlZXBlckV2ZW50TmFtZTtcblxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbYWN0aXZlU29tZVNsZWVwZXJdID0gdGhpcy5jaGFuZ2VBY3RpdmVTdGF0dXMuYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBSZWdpc3RlciBhY3RpdmUgc29tZSBub2RlIGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudCBpbiBldmVudE5hbWVzTWFwKSB7XG4gICAgICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50TmFtZXNNYXBbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNoaWxkIG5vZGUgZm9yIGN1cnJlbnQgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gY2hpbGRTbGVlcGVyIFxuICAgICAqL1xuICAgIGFkZENoaWxkKGNoaWxkU2xlZXBlcikge1xuICAgICAgICBpZiAoIWNoaWxkU2xlZXBlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBBZGRDaGlsZCBFcnJvcjogTm8gY2hpbGRyZW4gaXMgZ2l2ZW4hJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5wdXNoKGNoaWxkU2xlZXBlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgZ2l2ZW4gY2hpbGQgc2xlZXBlciBcbiAgICAgKiBAcGFyYW0ge1NsZWVwZXJ9IGNoaWxkU2xlZXBlciBcbiAgICAgKi9cbiAgICByZW1vdmVDaGlsZChjaGlsZFNsZWVwZXIpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0Q2hpbGRJbmRleCA9IHRoaXMuY2hpbGRyZW5MaXN0LmZpbmRJbmRleChcbiAgICAgICAgICAgIGNoaWxkT2JqZWN0ID0+IGNoaWxkT2JqZWN0ID09PSBjaGlsZFNsZWVwZXJcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBjaGlsZFxuICAgICAgICBpZiAoZXhwZWN0Q2hpbGRJbmRleCA9PT0gLTEgfHwgZXhwZWN0Q2hpbGRJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIFJlbW92ZUNoaWxkIEVycm9yOiBOb3QgZmluZCB0aGUgY2hpbGQhJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgY2hpbGRcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3Quc3BsaWNlKGV4cGVjdENoaWxkSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlciBcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGVkZ2UgRWRnZSBvYmplY3QgXG4gICAgICovXG4gICAgYWRkRWRnZShlZGdlKSB7XG4gICAgICAgIGlmICghZWRnZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBhZGRFZGdlIEVycm9yOiBObyBlZGdlIGlzIGdpdmVuIScpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlciBcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGVkZ2UgRWRnZSBvYmplY3RcbiAgICAgKi9cbiAgICByZW1vdmVFZGdlKGVkZ2UpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0RWRnZUluZGV4ID0gdGhpcy5lZGdlTGlzdC5maW5kSW5kZXgoXG4gICAgICAgICAgICBlZGdlT2JqZWN0ID0+IGVkZ2VPYmplY3QgPT09IGVkZ2VcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBjaGlsZFxuICAgICAgICBpZiAoZXhwZWN0RWRnZUluZGV4ID09PSAtMSB8fCBleHBlY3RFZGdlSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBSZW1vdmVFZGdlIEVycm9yOiBOb3QgZmluZCB0aGUgZWRnZSEnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjaGlsZFxuICAgICAgICB0aGlzLmVkZ2VMaXN0LnNwbGljZShleHBlY3RFZGdlSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGluY29taW5nIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlclxuICAgICAqL1xuICAgIGFkZEluY29taW5nRWRnZShlZGdlKSB7XG4gICAgICAgIGlmICghZWRnZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBhZGRJbmNvbWluZ0VkZ2UgRXJyb3I6IE5vIGVkZ2UgaXMgZ2l2ZW4hJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluY29taW5nRWRnZUxpc3QucHVzaChlZGdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBpbmNvbWluZyBlZGdlIGZvciBjdXJyZW50IHNsZWVwZXIgXG4gICAgICogQHBhcmFtIHsqfSBlZGdlIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHJlbW92ZUluY29taW5nRWRnZShlZGdlKSB7XG4gICAgICAgIGNvbnN0IGV4cGVjdEVkZ2VJbmRleCA9IHRoaXMuaW5jb21pbmdFZGdlTGlzdC5maW5kSW5kZXgoXG4gICAgICAgICAgICBlZGdlT2JqZWN0ID0+IGVkZ2VPYmplY3QgPT09IGVkZ2VcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBjaGlsZFxuICAgICAgICBpZiAoZXhwZWN0RWRnZUluZGV4ID09PSAtMSB8fCBleHBlY3RFZGdlSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBSZW1vdmVJbmNvbWluZ0VkZ2UgRXJyb3I6IE5vdCBmaW5kIHRoZSBlZGdlIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjaGlsZFxuICAgICAgICB0aGlzLmluY29taW5nRWRnZUxpc3Quc3BsaWNlKGV4cGVjdEVkZ2VJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBjdXJyZW50IG5vZGUgc3RhdHVzXG4gICAgICovXG4gICAgY2hhbmdlU2xlZXBpbmdTdGF0dXMoYXJncykge1xuICAgICAgICAvLyBJZiBub3QgcGFzcyBzdGF0dXMgdGhlbiByZXZlcnNlIGN1cnJlbnQgc3RhdHVzXG4gICAgICAgIGlmIChhcmdzID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5pc1NsZWVwaW5nID0gIXRoaXMuaXNTbGVlcGluZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNTbGVlcGluZyA9IGFyZ3M7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIENoYW5nZSBjYW52YXMgaW5mb3JtYXRpb25cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICBmaWxsQ29sb3JcbiAgICAgICAgfSA9IFNsZWVwZXJzRmFjdG9yeS5nZXRDYW52YXNJbmZvcm1hdGlvbighdGhpcy5pc1NsZWVwaW5nKTtcblxuICAgICAgICB0aGlzLmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgZmlsbENvbG9yLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnkgdG8gYWN0aXZlIHRoZSBjaGlsZHJlbiBub2Rlc1xuICAgICAqL1xuICAgIGFjdGl2ZUNoaWxkKCkge1xuICAgICAgICBjb25zdCB0ZW1wQWN0aXZlZENoaWxkTGlzdCA9IFtdO1xuXG4gICAgICAgIC8vIEFjdGl2ZSB0aGUgY2hpbGRyZW4gaW4gb3JkZXJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChjaGlsZE9iamVjdCA9PiB7XG4gICAgICAgICAgICAvLyBPbmx5IGxvb2tpbmcgZm9yIHNsZWVwaW5nIG5vZGVcbiAgICAgICAgICAgIGlmICghY2hpbGRPYmplY3QuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgd2VpZ2h0ID0gY2hpbGRPYmplY3QucHJvYmFiaWxpdHk7XG5cbiAgICAgICAgICAgIC8vIENoYW5nZSB0aGUgY2hpbGQgc3RhdHVzIGlmIGFjdGl2ZVxuICAgICAgICAgICAgaWYgKGdldEFjdGl2aXR5QnlXZWlnaHQod2VpZ2h0KSkge1xuICAgICAgICAgICAgICAgIGNoaWxkT2JqZWN0LmNoYW5nZVNsZWVwaW5nU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgdGVtcEFjdGl2ZWRDaGlsZExpc3QucHVzaChjaGlsZE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0ZW1wQWN0aXZlZENoaWxkTGlzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNhbnZhcyBwYXRoXG4gICAgICogQHBhcmFtIHsqfSBjYW52YXNQYXRoT2JqZWN0IGNhbnZhcyBwYXRoIG9iamVjdFxuICAgICAqL1xuICAgIHNldENhbnZhc1BhdGgoYXJncykge1xuICAgICAgICBjb25zdCBbY2FudmFzUGF0aE9iamVjdCwgYW5jaG9yc0xpc3RdID0gYXJncztcbiAgICAgICAgdGhpcy5jYW52YXNQYXRoID0gY2FudmFzUGF0aE9iamVjdDtcblxuICAgICAgICBpZiAoISFhbmNob3JzTGlzdCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXNBbmNob3JzUGF0aExpc3QgPSBhbmNob3JzTGlzdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBzbGVlcGVyIGFjdGl2ZSBzdGF0dXNcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXIgdGhlIGV2ZW50IHJlY2lldmVkIHNsZWVwciBvYmplY3QsIG5vdGUgdGhhdCBpdCBtYXkgYmUgb3RoZXIgc2xlZXBlcnNcbiAgICAgKi9cbiAgICBjaGFuZ2VBY3RpdmVTdGF0dXMoc2xlZXBlcikge1xuICAgICAgICBpZiAoc2xlZXBlciA9PT0gdGhpcyAmJiB0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gU2VsZWN0IHRoaXMgc2xlZXBlciBhbmQgYWN0aXZlIGl0c2VsZlxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHtcbiAgICAgICAgICAgICAgICBpc0FuY2hvcjogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBY3RpdmUgJiYgc2xlZXBlciAhPT0gdGhpcykge1xuICAgICAgICAgICAgLy8gU2VsZWN0IG90aGVyIHNsZWVwZXIgdGhlbiBpbmFjdGl2ZSBpdHNlbGZcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbih7XG4gICAgICAgICAgICAgICAgaXNBbmNob3I6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFNldCBkcmFnIGZsYWdcbiAgICAgICAgaWYoc2xlZXBlciA9PT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hEcmFnU3RhdHVzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXNkcmFnJywgdGhpcy5pc0RyYWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHNsZWVwZXIgZHJhZyBzdGF0dXNcbiAgICAgKi9cbiAgICBzd2l0Y2hEcmFnU3RhdHVzKCkge1xuICAgICAgICB0aGlzLmlzRHJhZyA9ICF0aGlzLmlzRHJhZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgU2xlZXBlciBjYW52YXMgaW5mb3JtYXRpb24gYW5kIHRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydHlPYmplY3RcbiAgICAgKi9cbiAgICBjaGFuZ2VDYW52YXNJbmZvcm1hdGlvbihwcm9wZXJ0eU9iamVjdCkge1xuICAgICAgICAvLyBJdGVyYXRlIHRoZSBhbGVyYXRpb24gYW5kIHVwZGF0ZVxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHByb3BlcnR5T2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbnZhc0luZm9ybWF0aW9uW3Byb3BlcnR5XSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0luZm9ybWF0aW9uW3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIG5vbi1yZWxhdGVkIGZhY3RvciB3aXRoaW4gdGhpcyBzbGVlcGVyIGZvciBwYXN0ZVxuICAgICAqL1xuICAgIHByZXBhcmVGb3JQYXN0ZSgpIHtcbiAgICAgICAgLy8gVE9ETzogTWF5IG5lZWQgdG8gY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiBpdFxuXG4gICAgICAgIC8vIFJlbW92ZSBpdHMgZWRnZXMgYW5kIGluLW91dCBzbGVlcGVyXG4gICAgICAgIHRoaXMuZWRnZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5pbmNvbWluZ0VkZ2VMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRFZGdlTWFwTGlzdCA9IFtdO1xuXG4gICAgICAgIC8vIENoYW5nZSBzdGF0dXNcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNEcmFnID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGl0c2VsZiBcbiAgICAgKi9cbiAgICBkZWxldGVTZWxmKCkge1xuICAgICAgICBTbGVlcGVyUG9vbGVyLnJlbW92ZVNsZWVwZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVjb3ZlciBpdHNlbGZcbiAgICAgKi9cbiAgICByZWNvdmVyU2VsZigpIHtcbiAgICAgICAgU2xlZXBlclBvb2xlci5hZGRTbGVlcGVyKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgU2xlZXBlciB9OyIsImltcG9ydCB7IE1vdXNlQWN0aW9uQ29udHJvbGxlciB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9tb3VzZS9tb3VzZS1hY3Rpb24tY29udHJvbGxlcic7XG5pbXBvcnQgeyBNb3VzZUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9tb3VzZS9tb3VzZS1hY3Rpb24nO1xuaW1wb3J0IHsgS2V5Ym9hcmRBY3Rpb24gfSBmcm9tICcuLi9hY3Rpb24tbGF5ZXIva2V5Ym9hcmQva2V5Ym9hcmQtYWN0aW9uJztcbmltcG9ydCB7IEtleWJvYXJkQWN0aW9uQ29udHJvbGxlciB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9rZXlib2FyZC9rZXlib2FyZC1hY3Rpb24tY29udHJvbGxlcic7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9nbG9iYWwvZ2xvYmFsLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSAnLi9wYWludGVyL3BhaW50ZXInO1xuaW1wb3J0IHsgVW5kb1JlZG8gfSBmcm9tICcuLi8uLi91bmRvLXJlZG8vdW5kby1yZWRvJztcbmltcG9ydCB7IFNsZWVwZXJzRmFjdG9yeSB9IGZyb20gJy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLWZhY3RvcnknO1xuaW1wb3J0IHsgUGFuZWxPcGVyYXRpb25Db250cm9sbGVyIH0gZnJvbSAnLi4vYWN0aW9uLWxheWVyL3BhbmVsL3BhbmVsLW9wZXJhdGlvbi1jb250cm9sbGVyJztcbmltcG9ydCB7IFdha2luZ1Byb2Nlc3NDb250cm9sbGVyIH0gZnJvbSAnLi4vYWN0aW9uLWxheWVyL3dha2luZy1wcm9jZXNzL3dha2luZy1wcm9jZXNzLWNvbnRyb2xsZXInO1xuXG5jbGFzcyBDYW52YXMge1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ2FudmFzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFDYW52YXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgQ2FudmFzLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIENhbnZhcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhbnZhcyBpbnN0YW5jZVxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5pbml0UGFpbnRlcigpO1xuICAgICAgICB0aGlzLmluaXRBY3Rpb25SZWxhdGVkKCk7XG4gICAgICAgIHRoaXMuaW5pdFVuZG9SZWRvU3RhY2soKTtcbiAgICAgICAgdGhpcy5pbml0U2xlZXBlckZhY3RvcnkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhbnZhcyBjb250ZXh0XG4gICAgICovXG4gICAgaW5pdENvbnRleHQoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoR2xvYmFsQ29uZmlnLmNhbnZhc0lkKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIEdsb2JhbENvbmZpZy5wYW5kZWxXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gR2xvYmFsQ29uZmlnLmhlYWRlckhlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhbnZhcyBwYWludGVyXG4gICAgICovXG4gICAgaW5pdFBhaW50ZXIoKSB7XG4gICAgICAgIHRoaXMucGFpbnRlciA9IG5ldyBQYWludGVyKHRoaXMuY2FudmFzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhbnZhcyBhY3Rpb24gcmVsYXRlZFxuICAgICAqL1xuICAgIGluaXRBY3Rpb25SZWxhdGVkKCkge1xuICAgICAgICB0aGlzLm1vdXNlQWN0aW9uQ29udHJvbGxlciA9IG5ldyBNb3VzZUFjdGlvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy5tb3VzZUFjdGlvbiA9IG5ldyBNb3VzZUFjdGlvbih0aGlzLmNhbnZhcyk7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpb25Db250cm9sbGVyID0gbmV3IEtleWJvYXJkQWN0aW9uQ29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLmtleWJvYXJkQWN0aW9uID0gbmV3IEtleWJvYXJkQWN0aW9uKHRoaXMuY2FudmFzLCB0aGlzLm1vdXNlQWN0aW9uKTtcbiAgICAgICAgdGhpcy5wYW5lbE9wZXJhdGlvbkNvbnRyb2xsZXIgPSBuZXcgUGFuZWxPcGVyYXRpb25Db250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMud2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIgPSBuZXcgV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IFVuZG9SZWRvU3RhY2tcbiAgICAgKi9cbiAgICBpbml0VW5kb1JlZG9TdGFjaygpIHtcbiAgICAgICAgVW5kb1JlZG8uZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHNsZWVwZXIgZmFjdG9yeVxuICAgICAqL1xuICAgIGluaXRTbGVlcGVyRmFjdG9yeSgpIHtcbiAgICAgICAgU2xlZXBlcnNGYWN0b3J5Lm1vdW50Q2FudmFzKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ2FudmFzIH07IiwiZXhwb3J0IGNvbnN0IERlYWZ1bHRBbmNob3JTZXR0aW5nID0ge1xuICAgIGxpbmVXaWR0aDogMixcbiAgICBsaW5lQ29sb3I6ICdibGFjaycsXG4gICAgYW5jaG9yUmFkaXVzOiA0LFxufTtcblxuZXhwb3J0IGNvbnN0IERlYWZ1bHRBcnJvd1NldHRpbmcgPSB7XG4gICAgaGVhZExlbmd0aDogMTAsXG4gICAgbGluZVdpZHRoOiAyLFxuICAgIGxpbmVDb2xvcjogJ2JsYWNrJyxcbn07XG5cbmV4cG9ydCBjb25zdCBBY3RpdmVBcnJvd1NldHRpbmcgPSB7XG4gICAgbGluZVdpZHRoOiAzLCBcbiAgICBsaW5lQ29sb3I6ICcjMDA2OEZGJyxcbn07XG5cbmV4cG9ydCBjb25zdCBEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZyA9IHtcbiAgICBsaW5lV2lkdGg6IDIsXG4gICAgbGluZUNvbG9yOiAnIzMzNjZGRicsXG59ICIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBQYWludGVyRXZlbnROYW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IFxuICAgIERlYWZ1bHRBbmNob3JTZXR0aW5nLFxuICAgIERlYWZ1bHRBcnJvd1NldHRpbmcsXG4gICAgRGVhZmF1bHRCb3VuZGluZ0JveFNldHRpbmcsXG4gICAgQWN0aXZlQXJyb3dTZXR0aW5nLFxufSBmcm9tICcuL2NvbmZpZyc7XG5cbmNsYXNzIEZpZ3VyZVBhaW50ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY2FudmFzQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gY2FudmFzQ29udGV4dDtcbiAgICAgICAgdGhpcy5kcmF3TWFwID0ge1xuICAgICAgICAgICAgJ2NpcmNsZSc6IHRoaXMuZHJhd0NpcmNsZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2Fycm93JzogdGhpcy5kcmF3QXJyb3cuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICd0ZXh0YXJlYSc6IHRoaXMuZHJhd1RleHRhcmVhLmJpbmQodGhpcyksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBQYWludGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFBhaW50ZXJFdmVudE5hbWUuZmlndXJlRHJhdywgdGhpcy5kcmF3LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIGNvcnJlc3BvbmQgaW1hZ2VzIGdpdmVuIHJlbGF0ZWQgaW5mb3JtYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IHBhcmFtcyBcbiAgICAgKiBAcmV0dXJucyB7Kn0gY2FudmFzIHBhdGhcbiAgICAgKi9cbiAgICBkcmF3KHBhcmFtcywgc2V0UGF0aENhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHsgZHJhd1R5cGUgfSA9IHBhcmFtcztcblxuICAgICAgICAvLyBSYWlzZSB0aGUgZXJyb3IgaWYgdGhlIHNoYXBlIG5vdCBpbmNsdWRlZCBcbiAgICAgICAgaWYgKCEoZHJhd1R5cGUgaW4gdGhpcy5kcmF3TWFwKSkge1xuICAgICAgICAgICAgcmV0dXJuIEVycm9yKCdGaWd1cmUgRHJhdyBFcnJvcjogR2l2ZW4gdHlwZSBub3QgZm91bmQhJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIERyYXcgdGhlIGNvcnJlc3BvbmQgc2hhcGUgYW5kIHNldCB0aGUgcGF0aCB0byB0aGUgc2xlZXBlclxuICAgICAgICBzZXRQYXRoQ2FsbGJhY2sodGhpcy5kcmF3TWFwW2RyYXdUeXBlXShwYXJhbXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3IGNpcmxlIG9uIGNhbnZhc1xuICAgICAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGRyYXdDaXJjbGUocGFyYW1zKSB7XG4gICAgICAgIC8vIEV4dHJhY3QgdGhlIGRyYXdpbmcgcGFyYW1ldGVyc1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgIGlzRmlsbGVkLFxuICAgICAgICAgICAgaXNCb3JkZXIsXG4gICAgICAgICAgICBib3JkZXJXaXRoLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICBpc0FuY2hvcixcbiAgICAgICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yLFxuICAgICAgICB9ID0gcGFyYW1zO1xuXG4gICAgICAgIC8vIERyYXcgdGhlIGNpcmNsZVxuICAgICAgICBjb25zdCBjaXJjbGUgPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgIGNpcmNsZS5hcmMoXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEZpbGwgdGhlIGNpcmNsZVxuICAgICAgICBjb25zdCBmaWxsQ29sb3IgPSBwYXJhbXNbJ2ZpbGxDb2xvciddO1xuICAgICAgICBpZiAoaXNGaWxsZWQgJiYgZmlsbENvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZpbGwoY2lyY2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERyYXcgdGhlIGJvcmRlclxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhIShcbiAgICAgICAgICAgICAgICBpc0JvcmRlclxuICAgICAgICAgICAgICAgICYmIGJvcmRlcldpdGhcbiAgICAgICAgICAgICAgICAmJiBib3JkZXJDb2xvclxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5saW5lV2lkdGggPSBib3JkZXJXaXRoO1xuICAgICAgICAgICAgaWYgKGlzQW5jaG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gYWN0aXZlQm9yZGVyQ29sb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlKGNpcmNsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEcmF3IHRoZSBhbmNob3JcbiAgICAgICAgY29uc3QgYW5jaG9yc1BhdGhMaXN0ID0gW107XG4gICAgICAgIGlmIChpc0FuY2hvcikge1xuICAgICAgICAgICAgLy8gU2V0IHN0cm9rZSBzdHlsZVxuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmxpbmVXaWR0aCA9IERlYWZ1bHRBbmNob3JTZXR0aW5nLmxpbmVXaWR0aDtcblxuICAgICAgICAgICAgY29uc3QgYW5jaG9yUG9zaXRpb25MaXN0ID0gW1xuICAgICAgICAgICAgICAgIHt4OiB4ICsgcmFkaXVzLCB5OiB5fSxcbiAgICAgICAgICAgICAgICB7eDogeCAtIHJhZGl1cywgeTogeX0sXG4gICAgICAgICAgICAgICAge3g6IHgsIHk6IHkgKyByYWRpdXN9LFxuICAgICAgICAgICAgICAgIHt4OiB4LCB5OiB5IC0gcmFkaXVzfSxcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgYW5jaG9yUG9zaXRpb24gb2YgYW5jaG9yUG9zaXRpb25MaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gRGVhZnVsdEFuY2hvclNldHRpbmcubGluZUNvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnN0IHt4ICx5fSA9IGFuY2hvclBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuY2hvclBhdGggPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgICAgICAgICAgYW5jaG9yUGF0aC5hcmMoXG4gICAgICAgICAgICAgICAgICAgIHgsIFxuICAgICAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgICAgICBEZWFmdWx0QW5jaG9yU2V0dGluZy5hbmNob3JSYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZShhbmNob3JQYXRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbChhbmNob3JQYXRoKTtcbiAgICAgICAgICAgICAgICBhbmNob3JzUGF0aExpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvclBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2NpcmNsZSwgYW5jaG9yc1BhdGhMaXN0XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3IGFycm93IG9uIGNhbnZhc1xuICAgICAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICAgICAqL1xuICAgIGRyYXdBcnJvdyhwYXJhbXMpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHN0YXJ0TG9jYXRpb24sXG4gICAgICAgICAgICBlbmRMb2NhdGlvbixcbiAgICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICB9ID0gcGFyYW1zO1xuXG4gICAgICAgIC8vIElmIG9ubHkgb25lIGxvY2F0aW9uIHByb3ZpZGVkLCB0aGVuIHNldCB0aGUgb3RoZXIgdGhlIHNhbWVcbiAgICAgICAgaWYoIXN0YXJ0TG9jYXRpb24pIHtcbiAgICAgICAgICAgIHN0YXJ0TG9jYXRpb24gPSBlbmRMb2NhdGlvbjtcbiAgICAgICAgfSBlbHNlIGlmICghZW5kTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGVuZExvY2F0aW9uID0gc3RhcnRMb2NhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnkgLSBzdGFydExvY2F0aW9uLnksIFxuICAgICAgICAgICAgZW5kTG9jYXRpb24ueCAtIHN0YXJ0TG9jYXRpb24ueFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFNldCBzdHJva2Ugc3R5bGVcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gaXNBY3RpdmUgPyBcbiAgICAgICAgICAgIEFjdGl2ZUFycm93U2V0dGluZy5saW5lQ29sb3IgOlxuICAgICAgICAgICAgRGVhZnVsdEFycm93U2V0dGluZy5saW5lQ29sb3I7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5saW5lV2lkdGggPSBpc0FjdGl2ZSA/IFxuICAgICAgICAgICAgQWN0aXZlQXJyb3dTZXR0aW5nLmxpbmVXaWR0aCA6XG4gICAgICAgICAgICBEZWFmdWx0QXJyb3dTZXR0aW5nLmxpbmVXaWR0aDtcblxuICAgICAgICBjb25zdCBsaW5lID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICBjb25zdCBoZWFkID0gbmV3IFBhdGgyRCgpO1xuXG4gICAgICAgIC8vIERyYXcgdGhlIGxpbmUgXG4gICAgICAgIGxpbmUubW92ZVRvKHN0YXJ0TG9jYXRpb24ueCwgc3RhcnRMb2NhdGlvbi55KTtcbiAgICAgICAgbGluZS5saW5lVG8oZW5kTG9jYXRpb24ueCwgZW5kTG9jYXRpb24ueSk7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2UobGluZSk7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgaGVhZFxuICAgICAgICBoZWFkLm1vdmVUbyhcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnggLSBEZWFmdWx0QXJyb3dTZXR0aW5nLmhlYWRMZW5ndGggKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSxcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnkgLSBEZWFmdWx0QXJyb3dTZXR0aW5nLmhlYWRMZW5ndGggKiBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyA2KVxuICAgICAgICApO1xuICAgICAgICBoZWFkLmxpbmVUbyhlbmRMb2NhdGlvbi54LCBlbmRMb2NhdGlvbi55KTtcbiAgICAgICAgaGVhZC5saW5lVG8oXG4gICAgICAgICAgICBlbmRMb2NhdGlvbi54IC0gRGVhZnVsdEFycm93U2V0dGluZy5oZWFkTGVuZ3RoICogTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJIC8gNiksXG4gICAgICAgICAgICBlbmRMb2NhdGlvbi55IC0gRGVhZnVsdEFycm93U2V0dGluZy5oZWFkTGVuZ3RoICogTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJIC8gNilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZShoZWFkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7bGluZSwgaGVhZH07XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIHRleHRhcmVhXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gICAgICovXG4gICAgZHJhd1RleHRhcmVhKHBhcmFtcykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBzbGVlcGVyUG9zaXRpb24sXG4gICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uLFxuICAgICAgICB9ID0gcGFyYW1zO1xuXG4gICAgICAgIGNvbnN0IGJvdW5kaW5nQm94UGF0aCA9IG5ldyBQYXRoMkQoKTtcblxuICAgICAgICBib3VuZGluZ0JveFBhdGgucmVjdChcbiAgICAgICAgICAgIHNsZWVwZXJQb3NpdGlvbi54IC0gdGV4dGFyZWFJbmZvcm1hdGlvbi53aWR0aCAvIDIsXG4gICAgICAgICAgICBzbGVlcGVyUG9zaXRpb24ueSAtIHRleHRhcmVhSW5mb3JtYXRpb24uaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHRleHRhcmVhSW5mb3JtYXRpb24ud2lkdGgsXG4gICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uLmhlaWdodCxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQubGluZVdpZHRoID0gRGVhZmF1bHRCb3VuZGluZ0JveFNldHRpbmcubGluZVdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZy5saW5lQ29sb3I7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2UoYm91bmRpbmdCb3hQYXRoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBib3VuZGluZ0JveFBhdGg7XG4gICAgfVxufVxuXG5leHBvcnQgeyBGaWd1cmVQYWludGVyIH07IiwiaW1wb3J0IHsgRmlndXJlUGFpbnRlciB9IGZyb20gJy4vZmlndXJlL3BhaW50ZXInO1xuaW1wb3J0IHsgVGV4dFBhaW50ZXIgfSBmcm9tICcuL3RleHQvcGFpbnRlcic7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXBvb2wnO1xuaW1wb3J0IHsgRWRnZVBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLXBvb2wnO1xuaW1wb3J0IHsgUGFpbnRlckV2ZW50TmFtZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbmNsYXNzIFBhaW50ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAvLyBJbml0IGRpZmZlcmVudCBwYWludGVyXG4gICAgICAgIHRoaXMuaW5pdFBhaW50ZXIoKTtcblxuICAgICAgICAvLyBJbml0IGV2ZW50ZXIgaGFuZGxlclxuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBldmVudCBoYW5kbGVyIHJlbGF0ZWQgdG8gUGFpbnRlclxuICAgICAqL1xuICAgIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsIHRoaXMucmVwYWludC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBpbml0UGFpbnRlcigpIHtcbiAgICAgICAgdGhpcy5maWd1cmUgPSBuZXcgRmlndXJlUGFpbnRlcih0aGlzLmNhbnZhcywgdGhpcy5jYW52YXNDb250ZXh0KTtcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IFRleHRQYWludGVyKHRoaXMuY2FudmFzLCB0aGlzLmNhbnZhc0NvbnRleHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGFpbnQgYWxsIGNhbnZhcyBvYmplY3RcbiAgICAgKi9cbiAgICByZXBhaW50KCkge1xuICAgICAgICAvLyBDbGVhbiB0aGUgY2FudmFzXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0byBkcmF3IHRoZSBzbGVlcGVyXG4gICAgICAgIGZvciAoY29uc3Qgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IE1ha2UgaXQgYXMgYSBmdW5jdGlvbiBvZiBzbGVlcGVyXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LFxuICAgICAgICAgICAgICAgIHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24sXG4gICAgICAgICAgICAgICAgc2xlZXBlci5zZXRDYW52YXNQYXRoLmJpbmQoc2xlZXBlcilcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIFJld3JpdGUgdGhlIHRleHRcbiAgICAgICAgICAgIHNsZWVwZXIuZHJhd1RleHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEl0ZXJhdGUgdG8gZHJhdyB0aGUgZWRnZVxuICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgRWRnZVBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZHJhd1R5cGU6ICdhcnJvdycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0TG9jYXRpb246IGVkZ2Uuc3RhcnRMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZW5kTG9jYXRpb246IGVkZ2UuZW5kTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBlZGdlLmlzQWN0aXZlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRnZS5zZXRDYW52YXNQYXRoLmJpbmQoZWRnZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IFBhaW50ZXIgfTsiLCJpbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgUGFpbnRlckV2ZW50TmFtZSB9IGZyb20gJy4uLy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbmNsYXNzIFRleHRQYWludGVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNhbnZhc0NvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dCA9IGNhbnZhc0NvbnRleHQ7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBQYWludGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFBhaW50ZXJFdmVudE5hbWUudGV4dFdyaXRlLCB0aGlzLndyaXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlIHRoZSB0ZXh0IGZvbGxvdyB0aGUgcGFyYW1zIGdpdmVuXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gICAgICogQHBhcmFtIHsqfSBzZXRQYXRoQ2FsbGJhY2sgXG4gICAgICovXG4gICAgd3JpdGUocGFyYW1zLCBzZXRUZXh0YXJlYUNhbGxiYWNrKSB7XG4gICAgICAgIC8vIFBhcnNlIGNvbmZpZ3VyYXRpb25zXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgbWF4V2lkdGgsXG4gICAgICAgICAgICBpbmZvcm1hdGlvbixcbiAgICAgICAgfSA9IHBhcmFtcztcblxuICAgICAgICAvLyBHZXQgc2l6ZVxuICAgICAgICBsZXQgc2l6ZSA9IGluZm9ybWF0aW9uLnNpemUgfHwgJzEyJztcbiAgICAgICAgc2l6ZSArPSAncHgnXG5cbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZvbnQgPSBgJHtzaXplfSAke2luZm9ybWF0aW9uLnN0eWxlfWA7XG4gICAgICAgIFxuICAgICAgICAvLyBQcmVwYXJlIHdyaXRpbmcgdGV4dCBwYXJhbXNcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZpbGxTdHlsZSA9IGluZm9ybWF0aW9uLmNvbG9yO1xuICAgICAgICBjb25zdCBmaWxsSW5mbyA9IHRoaXMuX2dldEZpbGxMaXN0KHBvc2l0aW9uLCBpbmZvcm1hdGlvbi5jb250ZW50LCBtYXhXaWR0aCk7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbGxMaXN0LFxuICAgICAgICAgICAgdGV4dGFyZWFJbmZvcm1hdGlvbixcbiAgICAgICAgfSA9IGZpbGxJbmZvO1xuXG4gICAgICAgIC8vIFNldCBjYWxsYmFjayB0byBkcmF3IHRoZSB0ZXh0YXJlYSBmaXJzdFxuICAgICAgICBzZXRUZXh0YXJlYUNhbGxiYWNrKHRleHRhcmVhSW5mb3JtYXRpb24sICd0ZXh0YXJlYScpO1xuICAgICAgICBcbiAgICAgICAgLy8gV3JpdGUgdGV4dFxuICAgICAgICBmb3IgKGxldCB0ZXh0IG9mIGZpbGxMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFRleHQodGV4dFswXSwgdGV4dFsxXSwgdGV4dFsyXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZmlsbCBsaXN0IGZvciBzaW5nbGUgLyBtdWx0aXBsZSBsaW5lc1xuICAgICAqIEBwYXJhbSB7Kn0gcG9zaXRpb24gc2xlZXBlciBjZW50ZXJcbiAgICAgKiBAcGFyYW0geyp9IGNvbnRlbnQgdGV4dCBjb250ZW50XG4gICAgICogQHBhcmFtIHsqfSBtYXhXaWR0aCBwcmVkZWZpbmVkIG1heGltYWwgd2lkdGhcbiAgICAgKiBAcmV0dXJucyBmaWxsaW5nIGxpc3QgYW5kIHRleHRhcmVhIGluZm9ybWF0aW9uXG4gICAgICovXG4gICAgX2dldEZpbGxMaXN0KHBvc2l0aW9uLCBjb250ZW50LCBtYXhXaWR0aCkgeyAgICAgXG4gICAgICAgIGxldCBtZXRyaWNzID0gdGhpcy5jYW52YXNDb250ZXh0Lm1lYXN1cmVUZXh0KGNvbnRlbnQpO1xuICAgICAgICBsZXQgZmlsbExpc3QgPSBbXVxuXG4gICAgICAgIGlmIChtZXRyaWNzLndpZHRoIDwgbWF4V2lkdGgpIHtcbiAgICAgICAgICAgIC8vIEdldCB0ZXh0IGxvY2F0aW9uIGluZm9ybWF0aW9uXG4gICAgICAgICAgICBsZXQgeCA9IHBvc2l0aW9uLnggLSBtZXRyaWNzLndpZHRoIC8gMjtcbiAgICAgICAgICAgIGxldCB5ID0gcG9zaXRpb24ueSArIChtZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94QXNjZW50ICsgbWV0cmljcy5hY3R1YWxCb3VuZGluZ0JveERlc2NlbnQpIC8gMjtcblxuICAgICAgICAgICAgLy8gR2V0IHRleHRhcmVhIGxvY2F0aW9uIGluZm9ybWF0aW9uXG4gICAgICAgICAgICBsZXQgdGV4dGFyZWFJbmZvcm1hdGlvbiA9ICB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG1heFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogKG1ldHJpY3MuZm9udEJvdW5kaW5nQm94QXNjZW50ICsgbWV0cmljcy5mb250Qm91bmRpbmdCb3hEZXNjZW50KSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZpbGxMaXN0LnB1c2goW2NvbnRlbnQsIHgsIHldKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmlsbExpc3QsXG4gICAgICAgICAgICAgICAgdGV4dGFyZWFJbmZvcm1hdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBGb3IgbXVsdGlwbGUgbGluZXNcbiAgICAgICAgcmV0dXJuIGZpbGxMaXN0O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVGV4dFBhaW50ZXIgfTsiLCJleHBvcnQgY29uc3QgU2xlZXBlckV2ZW50TmFtZSA9IHtcbiAgICBhY3RpdmVTb21lU2xlZXBlcjogJ2FjdGl2ZVNvbWVTbGVlcGVyJyxcbiAgICBhY3RpdmVTb21lU2xlZXBlclRleHRNb2RlOiAnYWN0aXZlU29tZVNsZWVwZXJUZXh0TW9kZScsXG59O1xuXG5leHBvcnQgY29uc3QgRWRnZUV2ZW50TmFtZSA9IHtcbiAgICBhY3RpdmVTb21lRWRnZTogJ2FjdGl2ZVNvbWVFZGdlJyxcbn1cblxuZXhwb3J0IGNvbnN0IFNsZWVwZXJQb29sRXZlbnROYW1lID0ge1xuICAgIGFkZFNsZWVwZXI6ICdhZGRTbGVlcGVyJyxcbn07XG5cbmV4cG9ydCBjb25zdCBFZGdlUG9vbEV2ZW50TmFtZSA9IHtcbiAgICBhZGRFZGdlOiAnYWRkRWRnZScsXG59O1xuXG5leHBvcnQgY29uc3QgUGFpbnRlckV2ZW50TmFtZSA9IHtcbiAgICBmaWd1cmVEcmF3OiAnZmlndXJlRHJhdycsXG4gICAgdGV4dFdyaXRlOiAndGV4dFdyaXRlJyxcbiAgICByZXBhaW50OiAncmVwYWludCcsXG59O1xuXG5leHBvcnQgY29uc3QgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZSA9IHtcbiAgICBtb3VzZURvd25TbGVlcGVyOiAnbW91c2VEb3duU2xlZXBlcicsXG4gICAgbW91c2VEb3duTGluZTogJ21vdXNlRG93bkxpbmUnLFxuICAgIG1vdXNlRG93bkJhY2tncm91bmQ6ICdtb3VzZURvd25CYWNrZ3JvdW5kJyxcbiAgICBtb3VzZU1vdmVTbGVlcGVyOiAnbW91c2VNb3ZlJyxcbiAgICBtb3VzZU1vdmVBbmNob3I6ICdtb3VzZU1vdmVBbmNob3InLFxuICAgIG1vdXNlTW92ZUhlYWQ6ICdtb3VzZU1vdmVIZWFkJyxcbiAgICBtb3VzZVVwU2xlZXBlcjogJ21vdXNlVXBTbGVlcGVyJyxcbiAgICBtb3VzZVVwQW5jaG9yOiAnbW91c2VVcEFuY2hvcicsXG4gICAgbW91c2VVcEhlYWQ6ICdtb3VzZVVwSGVhZCcsXG4gICAgbW91c2VEb3VibGVDbGljazogJ21vdXNlRG91YmxlQ2xpY2snLFxuICAgIG1vdXNlUmlnaHRDbGljazogJ21vdXNlUmlnaHRDbGljaycsXG4gICAga2V5Ym9hcmREZWxldGU6ICdrZXlib2FyZERlbGV0ZScsXG4gICAga2V5Ym9hcmRDb3B5OiAna2V5Ym9hcmRDb3B5JyxcbiAgICBrZXlib2FyZFBhc3RlOiAna2V5Ym9hcmRQYXN0ZScsXG4gICAga2V5Ym9hcmRUZXh0RGVsZXRlOiAna2V5Ym9hcmRUZXh0RGVsZXRlJyxcbiAgICBrZXlib2FyZElucHV0OiAna2V5Ym9hcmRJbnB1dCcsXG4gICAga2V5Ym9hcmRUZXh0UmVkbzogJ2tleWJvYXJkVGV4dFJlZG8nLFxuICAgIGtleWJvYXJkVGV4dFVuZG86ICdrZXlib2FyZFRleHRVbmRvJyxcbn07XG5cbmV4cG9ydCBjb25zdCBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lID0ge1xuICAgIGNsb3NlQ29sb3JQaWNrZXI6ICdjbG9zZUNvbG9yUGlja2VyJyxcbiAgICBjcmVhdGVOb2RlOiAnY3JlYXRlTm9kZScsXG4gICAgcGFuZWxDcmVhdGVOb2RlOiAncGFuZWxDcmVhdGVOb2RlJyxcbiAgICBjaGFuZ2VOb2RlU3R5bGU6ICdjaGFuZ2VOb2RlU3R5bGUnLFxuICAgIGNoYW5nZUFsbFByb2JhYmlsaXR5OiAnY2hhbmdlQWxsUHJvYmFiaWxpdHknLFxuICAgIHN0YXJ0V2FraW5nUHJvY2VzczogJ3N0YXJ0V2FraW5nUHJvY2VzcycsXG4gICAgcGF1c2VXYWtpbmdQcm9jZXNzOiAncGF1c2VXYWtpbmdQcm9jZXNzJyxcbiAgICBlbmRXYWtpbmdQcm9jZXNzOiAnZW5kV2FraW5nUHJvY2VzcycsXG4gICAgcmVzZXRTbGVlcGVyczogJ3Jlc2V0U2xlZXBlcnMnLFxuICAgIHBhbmVsQWN0aXZlOiAncGFuZWxBY3RpdmUnLFxufTtcblxuZXhwb3J0IGNvbnN0IFVuZG9SZWRvRXZlbnROYW1lID0ge1xuICAgIGFkZE11dGF0aW9uOiAnYWRkTXV0YXRpb24nLFxuICAgIHVuZG86ICd1bmRvJyxcbiAgICByZWRvOiAncmVkbycsXG59OyIsImV4cG9ydCBjb25zdCBHbG9iYWxDb25maWcgPSB7XG4gICAgY2FudmFzSWQ6ICdteUNhbnZhcycsXG4gICAgaGVhZGVySGVpZ2h0OiA2NixcbiAgICBwYW5kZWxXaWR0aDogMzAwLFxufTtcblxuZXhwb3J0IGNvbnN0IEV4Y2x1ZGVLZXlFdmVudElkID0ge1xuICAgICdwYW5lbENhc2NhZGVQcm9iYWJpbGl0JzogJ3BhbmVsQ2FzY2FkZVByb2JhYmlsaXQnLFxufTtcblxuZXhwb3J0IGNvbnN0IEV4Y2x1ZGVDbGlja0NsYXNzTmFtZSA9IHtcbiAgICAnc2F0dXJhdGlvbi1ibGFjayc6ICdzYXR1cmF0aW9uLWJsYWNrJyxcbiAgICAnaHVlLWhvcml6b250YWwnOiAnaHVlLWhvcml6b250YWwnLFxufTsiLCJleHBvcnQgY29uc3QgU2F2ZWRPcGVyYXRpb24gPSB7XG4gICAgbW92ZVNsZWVwZXI6ICdtb3ZlU2xlZXBlcicsXG4gICAgYWRkRWRnZUZyb21BbmNob3I6ICdhZGRFZGdlRnJvbUFuY2hvcicsXG4gICAgbW92ZUhlYWQ6ICdtb3ZlSGVhZCcsXG4gICAgZGVsZXRlOiAnZGVsZXRlJyxcbiAgICBwYXN0ZTogJ3Bhc3RlJyxcbiAgICBjcmVhdGVTbGVlcGVyOiAnY3JlYXRlU2xlZXBlcicsXG59OyIsImltcG9ydCB7IFNhdmVkT3BlcmF0aW9uIH0gZnJvbSAnLi9vcGVyYXRpb24nO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFBhaW50ZXJFdmVudE5hbWUgfSBmcm9tICcuLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4uL2NvcmUvZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXInO1xuXG4vKipcbiAqIFJlZG8gY29udHJvbGxlciB0byBhY3R1YWxseSBkZWFsIHdpdGggdGhlIHJlZG9pbmcgdGhlIHRhc2tzXG4gKiBAcGFyYW0geyp9IHRhc2sgXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZG9Db250cm9sbGVyKHRhc2spIHtcbiAgICBjb25zdCB7XG4gICAgICAgIG9iamVjdCxcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgfSA9IHRhc2s7XG5cbiAgICBzd2l0Y2gob3BlcmF0aW9uKSB7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLm1vdmVTbGVlcGVyKTpcbiAgICAgICAgICAgIHJlZG9Nb3ZlU2xlZXBlcihvYmplY3QsIHBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24uYWRkRWRnZUZyb21BbmNob3IpOlxuICAgICAgICAgICAgcmVkb01vdmVBbmNob3Iob2JqZWN0LCBwYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLm1vdmVIZWFkKTpcbiAgICAgICAgICAgIHJlZG9Nb3ZlSGVhZChvYmplY3QsIHBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24uZGVsZXRlKTpcbiAgICAgICAgICAgIHJlZG9EZWxldGVJdGVtcyhvYmplY3QpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLnBhc3RlKTpcbiAgICAgICAgICAgIHJlZG9QYXN0ZShvYmplY3QpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLmNyZWF0ZVNsZWVwZXIpOlxuICAgICAgICAgICAgcmVkb0NyZWF0ZVNsZWVwZXIob2JqZWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICApO1xufVxuXG5cbi8qKlxuICogUmVkbyBtb3ZlIHNsZWVwZXIgb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBSZWNpZXZlZCBjdXJyZW50IHNsZWVwZXIgbm9kZVxuICogQHBhcmFtIHsqfSBwYXJhbXMgb3BlcmF0aW9uIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gcmVkb01vdmVTbGVlcGVyKG9iamVjdCwgcGFyYW1zKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBvYmplY3QuY2FudmFzSW5mb3JtYXRpb25cbiAgICBjb25zdCB7IGNoYW5nZUxvY2F0aW9uIH0gPSBwYXJhbXM7XG4gICAgY29uc3QgcmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICB4OiB4ICsgY2hhbmdlTG9jYXRpb24ueCxcbiAgICAgICAgeTogeSArIGNoYW5nZUxvY2F0aW9uLnksXG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHNsZWVwZXIgY2FudmFzIGxvY2F0aW9uXG4gICAgb2JqZWN0LmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHJlY292ZXJMb2NhdGlvbik7XG5cbiAgICAvLyBDaGFuZ2UgdGhlIGNvbm5lY3RlZCBvdXRjb21pbmcgZWRnZXMnIGxvY2F0aW9uXG4gICAgZm9yIChjb25zdCBlZGdlIG9mIG9iamVjdC5lZGdlTGlzdCkge1xuICAgICAgICBjb25zdCBlZGdlUmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZWRnZS5zdGFydExvY2F0aW9uLnggKyBjaGFuZ2VMb2NhdGlvbi54LFxuICAgICAgICAgICAgeTogZWRnZS5zdGFydExvY2F0aW9uLnkgKyBjaGFuZ2VMb2NhdGlvbi55LFxuICAgICAgICB9O1xuXG4gICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oXG4gICAgICAgICAgICAnc3RhcnQnLFxuICAgICAgICAgICAgZWRnZVJlY292ZXJMb2NhdGlvbixcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIGluY29taW5nIGVkZ2VzJyBsb2NhdGlvblxuICAgIGZvciAoY29uc3QgZWRnZSBvZiBvYmplY3QuaW5jb21pbmdFZGdlTGlzdCkge1xuICAgICAgICBjb25zdCBlZGdlUmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZWRnZS5lbmRMb2NhdGlvbi54ICsgY2hhbmdlTG9jYXRpb24ueCxcbiAgICAgICAgICAgIHk6IGVkZ2UuZW5kTG9jYXRpb24ueSArIGNoYW5nZUxvY2F0aW9uLnksXG4gICAgICAgIH07XG5cbiAgICAgICAgZWRnZS5zZXRMb2NhdGlvbihcbiAgICAgICAgICAgICdlbmQnLFxuICAgICAgICAgICAgZWRnZVJlY292ZXJMb2NhdGlvbixcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVkbyBtb3ZlIGFuY2hvciBvcGVyYXRpb25cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFJlY2lldmVkIGVkZ2Ugb2JqZWN0XG4gKiBAcGFyYW0geyp9IHBhcmFtcyB0aGUgc2xlZXBlciBub2RlIHdoZXJlIHRoZSBlZGdlIHN0YXJ0XG4gKi9cbmZ1bmN0aW9uIHJlZG9Nb3ZlQW5jaG9yKG9iamVjdCwgcGFyYW1zKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBlZGdlIGNyZWF0ZWRcbiAgICBvYmplY3QucmVjb3ZlclNlbGYoKTtcbn1cblxuLyoqXG4gKiBVbmRvIG1vdmUgaGVhZCBvcGVyYXRpb25cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFxuICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gKi9cbmZ1bmN0aW9uIHJlZG9Nb3ZlSGVhZChvYmplY3QsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgY2hhbmdlRW5kTG9jYXRpb24gfSA9IHBhcmFtcztcblxuICAgIC8vIFJlY292ZXIgZWdkZSBlbmQgbG9jYXRpb25cbiAgICBjb25zdCByZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgIHg6IG9iamVjdC5lbmRMb2NhdGlvbi54ICsgY2hhbmdlRW5kTG9jYXRpb24ueCxcbiAgICAgICAgeTogb2JqZWN0LmVuZExvY2F0aW9uLnkgKyBjaGFuZ2VFbmRMb2NhdGlvbi55LFxuICAgIH07XG5cbiAgICBvYmplY3Quc2V0TG9jYXRpb24oXG4gICAgICAgICdlbmQnLFxuICAgICAgICByZWNvdmVyTG9jYXRpb24sXG4gICAgKTtcblxuICAgIC8vIFJlY292ZXIgYWRkZWQgZW5kIHNsZWVwZXIgaWYgbmVlZGVkXG4gICAgaWYgKCEhcGFyYW1zWydhZGRlZEVuZFNsZWVwZXInXSkge1xuICAgICAgICBwYXJhbXNbJ2FkZGVkRW5kU2xlZXBlciddLmFkZEluY29taW5nRWRnZShvYmplY3QpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZWRvIGRlbGV0ZSB0aGUgY2xpY2tlZCBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IERlbGV0ZWQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHJlZG9EZWxldGVJdGVtcyhvYmplY3QpIHtcbiAgICBvYmplY3QuZGVsZXRlU2VsZigpO1xufVxuXG4vKipcbiAqIFJlZG8gcGFzdGUgdGhlIGl0ZW1cbiAqL1xuZnVuY3Rpb24gcmVkb1Bhc3RlKG9iamVjdCkge1xuICAgIGZvciAobGV0IGl0ZW0gb2Ygb2JqZWN0KSB7XG4gICAgICAgIC8vIFRPRE86IE9ubHkgc3VwcG9ydCBzbGVlcGVyIG5vd1xuICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIFNsZWVwZXIpIHtcbiAgICAgICAgICAgIGl0ZW0ucmVjb3ZlclNlbGYoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBSZWRvIGNyZWF0ZSB0aGUgc2xlZXBlclxuICogQHBhcmFtIHsqfSBvYmplY3QgXG4gKi9cbmZ1bmN0aW9uIHJlZG9DcmVhdGVTbGVlcGVyKG9iamVjdCkge1xuICAgIG9iamVjdC5yZWNvdmVyU2VsZigpO1xufVxuXG4iLCJpbXBvcnQgeyBTYXZlZE9wZXJhdGlvbiB9IGZyb20gJy4vb3BlcmF0aW9uJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBQYWludGVyRXZlbnROYW1lIH0gZnJvbSAnLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IFNsZWVwZXIgfSBmcm9tICcuLi9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyJztcblxuLyoqXG4gKiBVbmRvIGNvbnRyb2xsZXIgdG8gYWN0dWFsbHkgZGVhbCB3aXRoIHRoZSB1bmRvaW5nIHRoZSB0YXNrc1xuICogQHBhcmFtIHsqfSB0YXNrIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5kb0NvbnRyb2xsZXIodGFzaykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgb2JqZWN0LCBcbiAgICAgICAgcGFyYW1zLCBcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgIH0gPSB0YXNrO1xuXG4gICAgc3dpdGNoKG9wZXJhdGlvbikge1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5tb3ZlU2xlZXBlcik6XG4gICAgICAgICAgICB1bmRvTW92ZVNsZWVwZXIob2JqZWN0LCBwYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLmFkZEVkZ2VGcm9tQW5jaG9yKTpcbiAgICAgICAgICAgIHVuZG9Nb3ZlQW5jaG9yKG9iamVjdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5tb3ZlSGVhZCk6XG4gICAgICAgICAgICB1bmRvTW92ZUhlYWQob2JqZWN0LCBwYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLmRlbGV0ZSk6XG4gICAgICAgICAgICB1bmRvRGVsZXRlSXRlbXMob2JqZWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5wYXN0ZSk6XG4gICAgICAgICAgICB1bmRvUGFzdGUob2JqZWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5jcmVhdGVTbGVlcGVyKTpcbiAgICAgICAgICAgIHVuZG9DcmVhdGVTbGVlcGVyKG9iamVjdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgKTtcbn1cblxuLyoqXG4gKiBVbmRvIG1vdmUgc2xlZXBlciBvcGVyYXRpb25cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFJlY2lldmVkIGN1cnJlbnQgc2xlZXBlciBub2RlXG4gKiBAcGFyYW0geyp9IHBhcmFtcyBvcGVyYXRpb24gcGFyYW1ldGVyc1xuICovXG5mdW5jdGlvbiB1bmRvTW92ZVNsZWVwZXIob2JqZWN0LCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IG9iamVjdC5jYW52YXNJbmZvcm1hdGlvblxuICAgIGNvbnN0IHsgY2hhbmdlTG9jYXRpb24gfSA9IHBhcmFtcztcbiAgICBjb25zdCByZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgIHg6IHggLSBjaGFuZ2VMb2NhdGlvbi54LFxuICAgICAgICB5OiB5IC0gY2hhbmdlTG9jYXRpb24ueSxcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2Ugc2xlZXBlciBjYW52YXMgbG9jYXRpb25cbiAgICBvYmplY3QuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24ocmVjb3ZlckxvY2F0aW9uKTtcblxuICAgIC8vIENoYW5nZSB0aGUgY29ubmVjdGVkIG91dGNvbWluZyBlZGdlcycgbG9jYXRpb25cbiAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygb2JqZWN0LmVkZ2VMaXN0KSB7XG4gICAgICAgIGNvbnN0IGVkZ2VSZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBlZGdlLnN0YXJ0TG9jYXRpb24ueCAtIGNoYW5nZUxvY2F0aW9uLngsXG4gICAgICAgICAgICB5OiBlZGdlLnN0YXJ0TG9jYXRpb24ueSAtIGNoYW5nZUxvY2F0aW9uLnksXG4gICAgICAgIH07XG5cbiAgICAgICAgZWRnZS5zZXRMb2NhdGlvbihcbiAgICAgICAgICAgICdzdGFydCcsXG4gICAgICAgICAgICBlZGdlUmVjb3ZlckxvY2F0aW9uLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgaW5jb21pbmcgZWRnZXMnIGxvY2F0aW9uXG4gICAgZm9yIChjb25zdCBlZGdlIG9mIG9iamVjdC5pbmNvbWluZ0VkZ2VMaXN0KSB7XG4gICAgICAgIGNvbnN0IGVkZ2VSZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBlZGdlLmVuZExvY2F0aW9uLnggLSBjaGFuZ2VMb2NhdGlvbi54LFxuICAgICAgICAgICAgeTogZWRnZS5lbmRMb2NhdGlvbi55IC0gY2hhbmdlTG9jYXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICBlZGdlLnNldExvY2F0aW9uKFxuICAgICAgICAgICAgJ2VuZCcsXG4gICAgICAgICAgICBlZGdlUmVjb3ZlckxvY2F0aW9uLFxuICAgICAgICApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBVbmRvIG1vdmUgYW5jaG9yIG9wZXJhdGlvblxuICogQHBhcmFtIHsqfSBvYmplY3QgUmVjaWV2ZWQgZWRnZSBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIHRoZSBzbGVlcGVyIG5vZGUgd2hlcmUgdGhlIGVkZ2Ugc3RhcnRcbiAqL1xuZnVuY3Rpb24gdW5kb01vdmVBbmNob3Iob2JqZWN0LCBwYXJhbXMpIHtcbiAgICAvLyBSZW1vdmUgdGhlIGVkZ2UgY3JlYXRlZFxuICAgIG9iamVjdC5kZWxldGVTZWxmKCk7XG59XG5cbi8qKlxuICogVW5kbyBtb3ZlIGhlYWQgb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICovXG5mdW5jdGlvbiB1bmRvTW92ZUhlYWQob2JqZWN0LCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IGNoYW5nZUVuZExvY2F0aW9uIH0gPSBwYXJhbXM7XG5cbiAgICAvLyBSZWNvdmVyIGVnZGUgZW5kIGxvY2F0aW9uXG4gICAgY29uc3QgcmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICB4OiBvYmplY3QuZW5kTG9jYXRpb24ueCAtIGNoYW5nZUVuZExvY2F0aW9uLngsXG4gICAgICAgIHk6IG9iamVjdC5lbmRMb2NhdGlvbi55IC0gY2hhbmdlRW5kTG9jYXRpb24ueSxcbiAgICB9O1xuXG4gICAgb2JqZWN0LnNldExvY2F0aW9uKFxuICAgICAgICAnZW5kJyxcbiAgICAgICAgcmVjb3ZlckxvY2F0aW9uLFxuICAgICk7XG5cbiAgICAvLyBSZW1vdmUgYWRkZWQgZW5kIHNsZWVwZXIgaWYgbmVlZGVkXG4gICAgaWYgKCEhcGFyYW1zWydhZGRlZEVuZFNsZWVwZXInXSkge1xuICAgICAgICBwYXJhbXNbJ2FkZGVkRW5kU2xlZXBlciddLnJlbW92ZUluY29taW5nRWRnZShvYmplY3QpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBVbmRvIGRlbGV0ZSB0aGUgY2xpY2tlZCBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IERlbGV0ZWQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHVuZG9EZWxldGVJdGVtcyhvYmplY3QpIHtcbiAgICBvYmplY3QucmVjb3ZlclNlbGYoKTtcbn1cblxuLyoqXG4gKiBVbmRvIFBhc3RlIHRoZSBpdGVtXG4gKiBAcGFyYW0geyp9IG9iamVjdCBEZWxldGVkIG9iamVjdFxuICovXG5mdW5jdGlvbiB1bmRvUGFzdGUob2JqZWN0KSB7XG4gICAgZm9yKGxldCBpdGVtIG9mIG9iamVjdCkge1xuICAgICAgICAvLyBUT0RPOiBPbmx5IHN1cHBvcnQgc2xlZXBlciBub3dcbiAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBTbGVlcGVyKSB7XG4gICAgICAgICAgICBpdGVtLmRlbGV0ZVNlbGYoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBVbmRvIGNyZWF0ZSBzbGVlcGVyXG4gKiBAcGFyYW0geyp9IG9iamVjdCBEZWxldGVkIG9iamVjdFxuICovXG5mdW5jdGlvbiB1bmRvQ3JlYXRlU2xlZXBlcihvYmplY3QpIHtcbiAgICBvYmplY3QuZGVsZXRlU2VsZigpO1xufVxuIiwiaW1wb3J0IHsgU2F2ZWRPcGVyYXRpb24gfSBmcm9tICcuL29wZXJhdGlvbic7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgVW5kb1JlZG9FdmVudE5hbWUgfSBmcm9tICcuLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29weVBhc3RlSG91c2UgfSBmcm9tICcuLi9jb3B5LXBhc3RlL2NvcHktcGFzdGUtaG91c2UnO1xuXG5leHBvcnQgY2xhc3MgVW5kb0RlY29yYXRvciB7XG4gICAgLyoqXG4gICAgICogRGVjb3JhdG9yIGZvciBtb3VzZSB1cCBmcm9tIHNsZWVwZXJcbiAgICAgKi8gXG4gICAgc3RhdGljIG1vdXNlVXBTbGVlcGVyRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZHJhZ1NsZWVwZXJMaXN0LCBvcmlnaW5hbEluZm8pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IEN1cnJlbnQgU2xlZXBlciAoTm93IG5vIHNlbGVjdGlvbiBib3gpXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U2xlZXBlciA9IGRyYWdTbGVlcGVyTGlzdFswXTtcblxuICAgICAgICAgICAgLy8gRmluZCBsb2NhdGlvbiBjaGFuZ2VcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUxvY2F0aW9uID0ge1xuICAgICAgICAgICAgICAgIHg6IGN1cnJlbnRTbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnggLSBvcmlnaW5hbEluZm8ueCxcbiAgICAgICAgICAgICAgICB5OiBjdXJyZW50U2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi55IC0gb3JpZ2luYWxJbmZvLnksXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaGFuZ2VMb2NhdGlvbi54ICE9PSAwICYmIGNoYW5nZUxvY2F0aW9uLnkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRvIHVuZG8gc3RhY2tcbiAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUuYWRkTXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBjdXJyZW50U2xlZXBlcixcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5tb3ZlU2xlZXBlcixcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgY29udHJvbGxlclxuICAgICAgICAgICAgY29udHJvbGxlckZ1bmN0aW9uKGRyYWdTbGVlcGVyTGlzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNvcmF0b3IgZm9yIG1vdXNlIHVwIGZyb20gYW5jaG9yXG4gICAgICovXG4gICAgc3RhdGljIG1vdXNlVXBBbmNob3JEZWNvcmF0b3IoY29udHJvbGxlckZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihzbGVlcGVyQW5kQW5jaG9yLCBlZGdlLCBjbG9zZXN0T2JqZWN0KSB7XG4gICAgICAgICAgICAvLyBTYXZlIHRvIHVuZG8gc3RhY2tcbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgIG9iamVjdDogZWRnZSxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLmFkZEVkZ2VGcm9tQW5jaG9yLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFNsZWVwZXI6IHNsZWVwZXJBbmRBbmNob3JbMF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBjb250cm9sbGVyIFxuICAgICAgICAgICAgY29udHJvbGxlckZ1bmN0aW9uKHNsZWVwZXJBbmRBbmNob3IsIGVkZ2UsIGNsb3Nlc3RPYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjb3JhdG9yIGZvciBtb3VzZSB1cCBmcm9tIGhlYWRcbiAgICAgKi9cbiAgICBzdGF0aWMgbW91c2VVcEhlYWREZWNvcmF0b3IoY29udHJvbGxlckZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihlZGdlLCBjbG9zZXN0T2JqZWN0LCBvcmlnaW5hbExvY2F0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgY2xvc2VzdExvY2F0aW9uLFxuICAgICAgICAgICAgICAgIGNsb3Nlc3RTbGVlcGVyLFxuICAgICAgICAgICAgfSA9IGNsb3Nlc3RPYmplY3Q7XG5cbiAgICAgICAgICAgIC8vIEFkZCBtdXRhdGlvbiBcbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgIG9iamVjdDogZWRnZSxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLm1vdmVIZWFkLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFbmRMb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogY2xvc2VzdExvY2F0aW9uLnggLSBvcmlnaW5hbExvY2F0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjbG9zZXN0TG9jYXRpb24ueSAtIG9yaWdpbmFsTG9jYXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWRkZWRFbmRTbGVlcGVyOiBjbG9zZXN0U2xlZXBlcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJGdW5jdGlvbihlZGdlLCBjbG9zZXN0T2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY29yYXRvciBmb3IgZGVsZXRlIGl0ZW1zXG4gICAgICovXG4gICAgc3RhdGljIGRlbGV0ZUl0ZW1zRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oY2xpY2tPYmplY3QpIHtcbiAgICAgICAgICAgIC8vIEFkZCBtdXRhdGlvblxuICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLmFkZE11dGF0aW9uLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiBjbGlja09iamVjdCxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLmRlbGV0ZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJGdW5jdGlvbihjbGlja09iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNvcmF0b3IgZm9yIHBhc3RlIGl0ZW1zXG4gICAgICovXG4gICAgc3RhdGljIHBhc3RlRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBGaXJzdGx1IGNvcHlcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZEhvdXNlID0gQ29weVBhc3RlSG91c2UucGFja2FnZTtcblxuICAgICAgICAgICAgLy8gQWRkIG11dGF0aW9uXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUuYWRkTXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IGNsb25lZEhvdXNlLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogU2F2ZWRPcGVyYXRpb24ucGFzdGUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBjb250cm9sbGVyXG4gICAgICAgICAgICBjb250cm9sbGVyRnVuY3Rpb24oY2xvbmVkSG91c2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjb3JhdG9yIGZvciBjcmVhdGUgc2xlZXBlclxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVTbGVlcGVyRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odHlwZSwgcG9zaXRpb24pIHtcbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NsZWVwZXIgPSBjb250cm9sbGVyRnVuY3Rpb24odHlwZSwgcG9zaXRpb24pO1xuXG4gICAgICAgICAgICAvLyBBZGQgbXV0YXRpb25cbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgIG9iamVjdDogbmV3U2xlZXBlcixcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLmNyZWF0ZVNsZWVwZXIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IHVuZG9Db250cm9sbGVyIH0gZnJvbSAnLi91bmRvLWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVW5kb1JlZG9FdmVudE5hbWUgfSBmcm9tICcuLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IHJlZG9Db250cm9sbGVyIH0gZnJvbSAnLi9yZWRvLWNvbnRyb2xsZXInO1xuXG5jbGFzcyBVbmRvUmVkbyB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBVbmRvUmVkbygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYoIVVuZG9SZWRvLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAvLyBEZWZpbmUgdGhlIHN0YWNrIGFuZCB0aGUgcG9pbnRlclxuICAgICAgICAgICAgdGhpcy5zdGFjayA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyID0gLTE7XG5cbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgICAgICAgICBVbmRvUmVkby5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbmFtZVxuICAgICAqL1xuICAgIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHVuZG8sXG4gICAgICAgICAgICBhZGRNdXRhdGlvbixcbiAgICAgICAgICAgIHJlZG8sXG4gICAgICAgIH0gPSBVbmRvUmVkb0V2ZW50TmFtZTtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGFkZE11dGF0aW9uLCB0aGlzLmFkZE11dGF0aW9uVG9TdGFjay5iaW5kKHRoaXMpKTtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKHVuZG8sIHRoaXMudW5kby5iaW5kKHRoaXMpKTtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKHJlZG8sIHRoaXMucmVkby5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgbXV0YXRpb24gdG8gdW5kbyBzdGFja1xuICAgICAqIEBwYXJhbSB7Kn0gbXV0YXRpb24gXG4gICAgICovXG4gICAgYWRkTXV0YXRpb25Ub1N0YWNrKG11dGF0aW9uKSB7XG4gICAgICAgIHRoaXMucG9pbnRlciArPSAxO1xuXG4gICAgICAgIC8vIEJyZWFrIHRoZSBzdGFjayBvcmRlciwgaWdub3JlIHRoZSBvcGVyYXRpb24gYWZ0ZXIgcG9pbnRlclxuICAgICAgICBpZiAodGhpcy5wb2ludGVyICE9PSB0aGlzLnN0YWNrLmxlbmd0aCAmJiB0aGlzLnBvaW50ZXIgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdGFjay5zcGxpY2UodGhpcy5wb2ludGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhY2subGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhY2sucHVzaChtdXRhdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5kbyB0aGUgb3BlcmF0aW9uXG4gICAgICovXG4gICAgdW5kbygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoICE9PSAwIHx8IHRoaXMucG9pbnRlciAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHVuZG9UYXNrID0gdGhpcy5zdGFja1t0aGlzLnBvaW50ZXJdO1xuICAgICAgICAgICAgdW5kb0NvbnRyb2xsZXIodW5kb1Rhc2spO1xuXG4gICAgICAgICAgICB0aGlzLnBvaW50ZXIgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZG8gdGhlIG9wZXJhdGlvblxuICAgICAqL1xuICAgIHJlZG8oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCAhPT0gMCAmJiB0aGlzLnBvaW50ZXIgIT09IHRoaXMuc3RhY2subGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyICs9IDE7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlZG9UYXNrID0gdGhpcy5zdGFja1t0aGlzLnBvaW50ZXJdO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZWRvVGFzayk7XG5cbiAgICAgICAgICAgIHJlZG9Db250cm9sbGVyKHJlZG9UYXNrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgVW5kb1JlZG8gfTsiLCJjbGFzcyBFdmVudCB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBFdmVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIUV2ZW50Lmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RGljdGlvbmFyeSA9IHt9O1xuICAgICAgICAgICAgRXZlbnQuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBZGQgdG8gd2hvbGUgd2luZG93XG4gICAgICAgICAgICB3aW5kb3cuRXZlbnRlciA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEV2ZW50Lmluc3RhbmNlOyBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVudExpc3RlbmVyIGZvciBhZGRpbmcgZXZlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAvLyBGaW5kIGlmIGV2ZW50TmFtZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBpZiAoIShldmVudE5hbWUgaW4gdGhpcy5ldmVudERpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RGljdGlvbmFyeVtldmVudE5hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFB1c2ggdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGludG8gbGlzdFxuICAgICAgICB0aGlzLmV2ZW50RGljdGlvbmFyeVtldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0aGUgbGlzdGVuZXIgZ2l2ZW4gYSBzcGVjaWZpYyBldmVudCBhbmQgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb24gfCB1bmRlZmluZWR9IGNhbGxiYWNrIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBldmVudFxuICAgICAgICBpZiAoIShldmVudE5hbWUgaW4gdGhpcy5ldmVudERpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdFdmVudCBOb3QgUmVnaXN0ZXJlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSnVzdCByZW1vdmUgdGhlIHNwZWNpZmljIGNhbGxiYWNrIGZ1bmN0aW9uIGlmIGNhbGxiYWNrIGdpdmVuXG4gICAgICAgIGlmICghIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RXZlbnRMaXN0ID0gdGhpcy5ldmVudERpY3Rpb25hcnlbZXZlbnROYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrSW5kZXggPSBjdXJyZW50RXZlbnRMaXN0LmZpbmRJbmRleChzYXZlZENhbGxiYWNrRnVuY3Rpb24gPT4gXG4gICAgICAgICAgICAgICAgc2F2ZWRDYWxsYmFja0Z1bmN0aW9uID09PSBjYWxsYmFja1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gUmFpc2UgZXJyb3IgaWYgY2FsbGJhY2sgZnVuY3Rpb24gbm90IGZvdW5kXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tJbmRleCA9PT0gLTEgfHwgY2FsbGJhY2tJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignQ2FsbGJhY2sgZnVuY3Rpb24gbm90IGZvdW5kJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgICAgIGN1cnJlbnRFdmVudExpc3Quc3BsaWNlKGNhbGxiYWNrSW5kZXgsIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhpcyBldmVudCBpZiBldmVudCBsaXN0IGlzIGVtcHR5IFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFdmVudExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnREaWN0aW9uYXJ5W2V2ZW50TmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEaXJlY3RseSBkZWxldGUgdGhpcyBldmVudFxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnREaWN0aW9uYXJ5W2V2ZW50TmFtZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBkaXNwdGFjaGVyLCB0cmlnZ2VyIHRoZSByZWxhdGVkIGV2ZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBcbiAgICAgKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3MgXG4gICAgICovXG4gICAgZGlzcGF0Y2hFdmVudChldmVudE5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gVGhyb3cgRXJyb3Igd2hlbiBub3QgZmluZCB0aGUgZXZlbnRcbiAgICAgICAgaWYgKCEoZXZlbnROYW1lIGluIHRoaXMuZXZlbnREaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignRXZlbnQgTm90IFJlZ2lzdGVyZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEl0ZXJhdGUgZm9yIHRyaWdnZXJcbiAgICAgICAgdGhpcy5ldmVudERpY3Rpb25hcnlbZXZlbnROYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEV2ZW50ZXIgPSBFdmVudC5nZXRJbnN0YW5jZSgpOyIsIi8qKlxuICogRmluZCBpZiBpdCBpcyBwb3NzaWJsZSB0byBiZSBhY3RpdmVcbiAqIEBwYXJhbSB7ZmxvYXR9IHdlaWdodCBcbiAqIEByZXR1cm5zIHtib29sfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZpdHlCeVdlaWdodCh3ZWlnaHQpIHtcbiAgICBjb25zdCBzdWRvUmFuZG9tVmFyaWFibGUgPSBNYXRoLnJhbmRvbSgpO1xuICAgIHJldHVybiBzdWRvUmFuZG9tVmFyaWFibGUgPD0gd2VpZ2h0O1xufVxuXG4vKipcbiAqIEZpbmQgaWYgZ2l2ZW4gcG9pbnQgbmVhciB0aGUgbGluZVxuICogQHBhcmFtIHsqfSBsaW5lU3RhcnRMb2NhdGlvbiBcbiAqIEBwYXJhbSB7Kn0gbGluZUVuZExvY2F0aW9uIFxuICogQHBhcmFtIHsqfSB4IFxuICogQHBhcmFtIHsqfSB5IFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BvaW50SW5MaW5lKGxpbmVTdGFydExvY2F0aW9uLCBsaW5lRW5kTG9jYXRpb24sIHgsIHkpIHtcbiAgICBpZihcbiAgICAgICAgbGluZUVuZExvY2F0aW9uLnggPiBsaW5lU3RhcnRMb2NhdGlvbi54IFxuICAgICAgICAmJiAoXG4gICAgICAgICAgICB4ID4gbGluZUVuZExvY2F0aW9uLnggXG4gICAgICAgICAgICB8fCB4IDwgbGluZVN0YXJ0TG9jYXRpb24ueFxuICAgICAgICApXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihcbiAgICAgICAgbGluZUVuZExvY2F0aW9uLnggPCBsaW5lU3RhcnRMb2NhdGlvbi54IFxuICAgICAgICAmJiAoXG4gICAgICAgICAgICB4IDwgbGluZUVuZExvY2F0aW9uLnggXG4gICAgICAgICAgICB8fCB4ID4gbGluZVN0YXJ0TG9jYXRpb24ueFxuICAgICAgICApXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgbGluZSBcbiAgICBjb25zdCBzbG9wZSA9IChsaW5lRW5kTG9jYXRpb24ueSAtIGxpbmVTdGFydExvY2F0aW9uLnkpIC8gXG4gICAgKGxpbmVFbmRMb2NhdGlvbi54IC0gbGluZVN0YXJ0TG9jYXRpb24ueCk7XG5cbiAgICAvLyBGaW5kIHRoZSBhcnJvdyByZWdpb25cbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbihzbG9wZSk7XG4gICAgY29uc3QgeExlbmd0aCA9IDEwICogMC41ICogMyoqMC41ICogTWF0aC5hYnMoTWF0aC5jb3MoYW5nbGUpKTtcbiAgICBpZiAoXG4gICAgICAgIGxpbmVFbmRMb2NhdGlvbi54ID4gbGluZVN0YXJ0TG9jYXRpb24ueCBcbiAgICAgICAgJiYgeCA+IGxpbmVFbmRMb2NhdGlvbi54IC0geExlbmd0aFxuICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgICBsaW5lRW5kTG9jYXRpb24ueCA8IGxpbmVTdGFydExvY2F0aW9uLnhcbiAgICAgICAgJiYgeCA8IGxpbmVFbmRMb2NhdGlvbi54ICsgeExlbmd0aFxuICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBjb25zdCBpbnRlcmNlcHQgPSBsaW5lU3RhcnRMb2NhdGlvbi55IC0gc2xvcGUgKiBsaW5lU3RhcnRMb2NhdGlvbi54O1xuXG4gICAgLy8gRmluZCB0aGUgZGlzdGFuY2UgYmV0d2VlbiBsaW5lIGFuZCBwb2ludFxuICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnMoaW50ZXJjZXB0ICsgc2xvcGUgKiB4IC0geSkgLyBNYXRoLnNxcnQoMSArIHNsb3BlKioyKTtcblxuICAgIHJldHVybiBkaXN0YW5jZSA8PSA1O1xufSIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKlxuICogQWRkcyB0aGUga2V5LXZhbHVlIGBwYWlyYCB0byBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXIgVGhlIGtleS12YWx1ZSBwYWlyIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG1hcGAuXG4gKi9cbmZ1bmN0aW9uIGFkZE1hcEVudHJ5KG1hcCwgcGFpcikge1xuICAvLyBEb24ndCByZXR1cm4gYG1hcC5zZXRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICByZXR1cm4gbWFwO1xufVxuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYHNldGAuXG4gKi9cbmZ1bmN0aW9uIGFkZFNldEVudHJ5KHNldCwgdmFsdWUpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBzZXQuYWRkYCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgc2V0LmFkZCh2YWx1ZSk7XG4gIHJldHVybiBzZXQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheSxcbiAgICBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KSxcbiAgICBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgICBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpLFxuICAgIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpLFxuICAgIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0JyksXG4gICAgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX19bJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgY2FjaGUgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoY2FjaGUgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBjYWNoZS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2FjaGUgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBjYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICB2YXIgcmVzdWx0ID0gKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSlcbiAgICA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZylcbiAgICA6IFtdO1xuXG4gIHZhciBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgc2tpcEluZGV4ZXMgPSAhIWxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRnVsbF0gU3BlY2lmeSBhIGNsb25lIGluY2x1ZGluZyBzeW1ib2xzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIGlmIChpc0hvc3RPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lT2JqZWN0KGlzRnVuYyA/IHt9IDogdmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBiYXNlQ2xvbmUsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgaWYgKCFpc0Fycikge1xuICAgIHZhciBwcm9wcyA9IGlzRnVsbCA/IGdldEFsbEtleXModmFsdWUpIDoga2V5cyh2YWx1ZSk7XG4gIH1cbiAgYXJyYXlFYWNoKHByb3BzIHx8IHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgIHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b3R5cGUgVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBiYXNlQ3JlYXRlKHByb3RvKSB7XG4gIHJldHVybiBpc09iamVjdChwcm90bykgPyBvYmplY3RDcmVhdGUocHJvdG8pIDoge307XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBidWZmZXIuY29uc3RydWN0b3IoYnVmZmVyLmxlbmd0aCk7XG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBtYXAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTWFwKG1hcCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKG1hcFRvQXJyYXkobWFwKSwgdHJ1ZSkgOiBtYXBUb0FycmF5KG1hcCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkTWFwRW50cnksIG5ldyBtYXAuY29uc3RydWN0b3IpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc2V0LlxuICovXG5mdW5jdGlvbiBjbG9uZVNldChzZXQsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhzZXRUb0FycmF5KHNldCksIHRydWUpIDogc2V0VG9BcnJheShzZXQpO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZFNldEVudHJ5LCBuZXcgc2V0LmNvbnN0cnVjdG9yKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCA/IHNvdXJjZVtrZXldIDogbmV3VmFsdWUpO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2wgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2wgcHJvcGVydGllcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9IG5hdGl2ZUdldFN5bWJvbHMgPyBvdmVyQXJnKG5hdGl2ZUdldFN5bWJvbHMsIE9iamVjdCkgOiBzdHViQXJyYXk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSxcbi8vIGZvciBkYXRhIHZpZXdzIGluIEVkZ2UgPCAxNCwgYW5kIHByb21pc2VzIGluIE5vZGUuanMuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBjbG9uZUZ1bmMsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lTWFwKG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVNldChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCB0cnVlLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJpbXBvcnQgeyBDYW52YXMgfSBmcm9tICcuLi9jb3JlL3ZpZXctbGF5ZXIvY2FudmFzJztcblxuLy8gSW5pdCBDYW52YXNcbnZhciBteUNhbnZhcyA9IENhbnZhcy5nZXRJbnN0YW5jZSgpO1xuIl0sIm5hbWVzIjpbImNsb25lRGVlcCIsIkNvcHlQYXN0ZUhvdXNlIiwiaG91c2UiLCJpbnN0YW5jZSIsIm9iaiIsIkFycmF5IiwiaXRlbSIsInB1c2giLCJTbGVlcGVyUG9vbGVyIiwiRWRnZVBvb2xlciIsImlzUG9pbnRJbkxpbmUiLCJNaW5pbWFsRGlzdGFuY2VGb3JMb2NhdGUiLCJBY3Rpb25VdGlscyIsImNhbnZhcyIsImxvY2F0aW9uIiwiZmluZEZ1bmN0aW9uc0xpc3QiLCJmaW5kTG9jYXRlZExpbmVPckhlYWQiLCJmaW5kTG9jYXRlZEFuY2hvciIsImZpbmRMb2NhdGVkU2xlZXBlciIsImZpbmRGdW5jdGlvbiIsImZpbmRSZXN1bHQiLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImlzTG9jYXRlZEluQ2lyY2xlIiwiY2lyY2xlUGF0aCIsIngiLCJ5IiwiaXNQb2ludEluUGF0aCIsImxvY2F0aW9uSGFuZGxlck1hcHMiLCJiaW5kIiwiaW5kZXgiLCJwb29sIiwibGVuZ3RoIiwic2xlZXBlciIsInNsZWVwZXJTdHlsZSIsImNhbnZhc0luZm9ybWF0aW9uIiwic2xlZXBlckNhbnZhc1BhdGgiLCJjYW52YXNQYXRoIiwiZHJhd1R5cGUiLCJyZXN1bHQiLCJ0eXBlIiwiaXNBY3RpdmUiLCJjYW52YXNBbmNob3JzUGF0aExpc3QiLCJzbGVlcGVyQW5jaG9yIiwiYW5jaG9yUGF0aCIsImVkZ2UiLCJoZWFkIiwic3RhcnRMb2NhdGlvbiIsImVuZExvY2F0aW9uIiwiZHJhZ2dlZFNsZWVwZXJMaXN0IiwiaXNEcmFnIiwiZm4iLCJ3YWl0VGltZSIsInRpbWVyIiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJzbGVlcGVyWCIsInNsZWVwZXJZIiwiZGlzdGFuY2UiLCJNYXRoIiwic3FydCIsInJhZGl1cyIsImxvY2F0ZWRTbGVlcGVyIiwiZmluZENsb3Nlc3RTbGVlcGVyIiwiY29uc29sZSIsImxvZyIsImxvY2F0ZWRTbGVlcGVyWCIsImxvY2F0ZWRTbGVlcGVyWSIsImFuY2hvckxvY2F0aW9uTGlzdCIsIm1pbkRpc3RhbmNlIiwiTnVtYmVyIiwiTUFYX1NBRkVfSU5URUdFUiIsIm1pbkxvY2F0aW9uIiwiYW5jaG9yTG9jYXRpb24iLCJjbG9zZXN0TG9jYXRpb24iLCJjbG9zZXN0U2xlZXBlciIsIm1vdXNlQWN0aW9uTW9kZSIsImRvd25PblNsZWVwZXIiLCJkb3duT25BbmNob3IiLCJkb3duT25MaW5lIiwiZG93bk9uSGVhZCIsImRvd25PbkJhY2tncm91bmQiLCJkb3duT25Ob25lIiwiZG93bk9uVGV4dCIsIkFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUiLCJQYWludGVyRXZlbnROYW1lIiwiRXZlbnRlciIsIlVuZG9EZWNvcmF0b3IiLCJTbGVlcGVyIiwiRWRnZSIsIktleWJvYXJkQWN0aW9uQ29udHJvbGxlciIsImluaXRFdmVudEhhbmRsZXIiLCJrZXlib2FyZERlbGV0ZSIsImtleWJvYXJkSW5wdXQiLCJrZXlib2FyZFRleHRVbmRvIiwia2V5Ym9hcmRUZXh0UmVkbyIsImtleWJvYXJkVGV4dERlbGV0ZSIsImtleWJvYXJkQ29weSIsImtleWJvYXJkUGFzdGUiLCJldmVudE5hbWVzTWFwIiwiZGVsZXRlSXRlbXNEZWNvcmF0b3IiLCJrZXlib2FyZERlbGV0ZUNvbnRyb2xsZXIiLCJwYXN0ZURlY29yYXRvciIsImtleWJvYXJkUGFzdGVDb250cm9sbGVyIiwia2V5Ym9hcmRDb3B5Q29udHJvbGxlciIsImtleWJvYXJkSW5wdXRDb250cm9sbGVyIiwia2V5Ym9hcmRUZXh0VW5kb0NvbnRyb2xsZXIiLCJrZXlib2FyZFRleHRSZWRvQ29udHJvbGxlciIsImtleWJvYXJkVGV4dERlbGV0ZUNvbnRyb2xsZXIiLCJldmVudE5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tPYmplY3QiLCJkZWxldGVTZWxmIiwiZGlzcGF0Y2hFdmVudCIsInJlcGFpbnQiLCJpbnB1dEtleSIsIm5ld0NvbnRlbnQiLCJ0ZXh0SW5mb3JtYXRpb24iLCJjb250ZW50IiwidGV4dFRlbXBTdGFjayIsInRleHQiLCJ1bmRvIiwicmVkbyIsInN0cmluZ0xlbmd0aCIsInN1YnN0cmluZyIsIm9iamVjdCIsInBhY2thZ2UiLCJjb3B5ZWRPYmplY3RMaXN0IiwicHJlcGFyZUZvclBhc3RlIiwicmVjb3ZlclNlbGYiLCJVbmRvUmVkb0V2ZW50TmFtZSIsIkV4Y2x1ZGVLZXlFdmVudElkIiwiS2V5Ym9hcmRBY3Rpb24iLCJtb3VzZUFjdGlvbiIsImluaXRBY3Rpb24iLCJhY3Rpb25zTWFwIiwia2V5RG93biIsImFjdGlvbiIsIndpbmRvdyIsImV2ZW50IiwidGFyZ2V0IiwiaWQiLCJjb2RlIiwia2V5Q29kZSIsImlzVGV4dE1vZGVPbiIsIm1vdXNlRG93bkVsZW1lbnQiLCJpc1RleHRNb2RlIiwiX2hhbmRsZXJUZXh0RGVsZXRlIiwiX2hhbmRsZXJEZWxldGUiLCJjdHJsS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwiX2hhbmRsZU5vcm1hbCIsImtleSIsInRvU3RyaW5nIiwiRGVlcENsb25lSW5mbyIsIm1vZGUiLCJTbGVlcGVyRXZlbnROYW1lIiwiRWRnZUV2ZW50TmFtZSIsIk1vdXNlQWN0aW9uQ29udHJvbGxlciIsIm1vdXNlRG93blNsZWVwZXIiLCJtb3VzZURvd25MaW5lIiwibW91c2VEb3duQmFja2dyb3VuZCIsIm1vdXNlTW92ZVNsZWVwZXIiLCJtb3VzZU1vdmVIZWFkIiwibW91c2VVcFNsZWVwZXIiLCJtb3VzZVVwQW5jaG9yIiwibW91c2VVcEhlYWQiLCJtb3VzZURvdWJsZUNsaWNrIiwibW91c2VEb3duU2xlZXBlckNvbnRyb2xsZXIiLCJtb3VzZURvd25MaW5lQ29udHJvbGxlciIsIm1vdXNlRG93bkJhY2tncm91bmRDb250cm9sbGVyIiwibW91c2VNb3ZlU2xlZXBlckNvbnRyb2xsZXIiLCJtb3VzZU1vdmVIZWFkQ29udHJvbGxlciIsIm1vdXNlVXBTbGVlcGVyRGVjb3JhdG9yIiwibW91c2VVcFNsZWVwZXJDb250cm9sbGVyIiwibW91c2VVcEFuY2hvckRlY29yYXRvciIsIm1vdXNlVXBBbmNob3JDb250cm9sbGVyIiwibW91c2VVcEhlYWREZWNvcmF0b3IiLCJtb3VzZVVwSGVhZENvbnRyb2xsZXIiLCJtb3VzZURvdWJsZUNsaWNrQ29udHJvbGxlciIsImFjdGl2ZVNvbWVTbGVlcGVyIiwiYWN0aXZlU29tZUVkZ2UiLCJjaGFuZ2VBY3RpdmVTdGF0dXMiLCJlbmRUZXh0TW9kZSIsImRyYWdTbGVlcGVyTGlzdCIsInJlbGF0aXZlTW92ZURpc3RhbmNlIiwib3JpZ2luWCIsIm9yaWdpblkiLCJuZXdYIiwibmV3WSIsImNoYW5nZUNhbnZhc0luZm9ybWF0aW9uIiwiZWRnZUxpc3QiLCJzZXRMb2NhdGlvbiIsImluY29taW5nRWRnZUxpc3QiLCJkcmFnRWRnZSIsImN1cnJlbnRQb3NpdGlvbiIsImVuZFNsZWVwZXIiLCJyZW1vdmVJbmNvbWluZ0VkZ2UiLCJjaGFuZ2VFbmQiLCJzd2l0Y2hEcmFnU3RhdHVzIiwic2xlZXBlckFuZEFuY2hvciIsImNsb3Nlc3RPYmplY3QiLCJhZGRFZGdlIiwiYWRkSW5jb21pbmdFZGdlIiwic3RhcnRTbGVlcGVyIiwiYWRkQ2hpbGQiLCJhY3RpdmVTb21lU2xlZXBlclRleHRNb2RlIiwiUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZSIsIlNhdmVkT3BlcmF0aW9uIiwiTW91c2VBY3Rpb24iLCJtb3VzZVBvc2l0aW9uWCIsIm1vdXNlUG9zaXRpb25ZIiwiYWN0aW9uTW9kZSIsInRlbXBvcmFyeUVkZ2UiLCJ0ZW1wb3JhcnlDb3B5IiwiaGFuZGxlTW91c2VEb3duIiwidGhyb3R0bGVyTWFrZXIiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVOTW91c2VVcCIsImhhbmRsZU1vdXNlRG91YmxlQ2xpY2siLCJoYW5kbGVNb3VzZVByZXZlbnRSaWdodENsaWNrIiwiY2xvc2VDb2xvclBpY2tlciIsIm9mZnNldFgiLCJvZmZzZXRZIiwic2V0TW91c2VQb3NpdGlvbiIsImxvY2F0ZWRPYmplY3QiLCJmaW5kTG9jYXRlZE9iamVjdCIsImJ1dHRvbiIsIm1vdXNlUmlnaHRDbGljayIsIl9oYW5kbGVySG92ZXJNb3ZlIiwiY2FsbCIsIl9oYW5kbGVyRHJhZ1NsZWVwZXJNb3ZlIiwiX2hhbmRsZXJEcmFnQW5jaG9yTW92ZSIsIl9oYW5kbGVyRHJhZ0JhY2tncm91bmRNb3ZlIiwiX2hhbmRsZXJEcmFnSGVhZE1vdmUiLCJzdHlsZSIsImN1cnNvciIsImZpbmREcmFnZ2VkU2xlZXBlciIsInN0YXJ0TG9hY3Rpb24iLCJjaGFuZ2VTdGFydCIsImN1cnJlbnRQb3Npc3Rpb24iLCJjbG9zZXN0T2JqZWN0QW5jaG9yIiwiZmluZENsb3Nlc3RBbmNob3IiLCJjbG9zZXN0T2JqZWN0SGVhZCIsImFkZE11dGF0aW9uIiwib3BlcmF0aW9uIiwibW92ZUhlYWQiLCJwYXJhbXMiLCJjaGFuZ2VFbmRMb2NhdGlvbiIsImlzSW5UaGlzU2xlZXBlciIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiU2xlZXBlcnNGYWN0b3J5IiwiUGFuZWxPcGVyYXRpb25Db250cm9sbGVyIiwiY2hhbmdlQWxsUHJvYmFiaWxpdHkiLCJyZXNldFNsZWVwZXJzIiwicGFuZWxDcmVhdGVOb2RlIiwicGFuZWxBY3RpdmUiLCJwcm9iQ2hhbmdlQ29udHJvbGxlciIsInBhbmVsQ3JlYXRlTm9kZUNvbnRyb2xsZXIiLCJyZXNldENvbnRyb2xsZXIiLCJwYW5lbEFjdGl2ZUNvbnRyb2xsZXIiLCJwcm9iIiwiY2hhbmdlUHJvYmFiaWxpdHkiLCJwcm9iYWJpbGl0eSIsImlzU2xlZXBpbmciLCJiZWZvcmVQcm9jZXNzSXNTbGVlcGluZyIsImNoYW5nZVNsZWVwaW5nU3RhdHVzIiwicG9zaXRpb24iLCJjcmVhdGVOb2RlIiwiV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIiLCJyb3VuZE51bSIsImZyYW1lVGltZSIsImlzUGF1c2UiLCJyZWZyZXNoSW50ZXJ2YWxJZCIsImF3YWtlUXVldWUiLCJzdGFydFdha2luZ1Byb2Nlc3MiLCJwYXVzZVdha2luZ1Byb2Nlc3MiLCJzdGFydFdha2luZ1Byb2Nlc3NDb250cm9sbGVyIiwicGF1c2VXYWtpbmdQcm9jZXNzQ29udHJvbGxlciIsInRlbXBRdWV1ZSIsImluaXRBd2FrZVF1ZXVlIiwic2V0SW50ZXJ2YWwiLCJuZXdBY3RpdmVkU2xlZXBlciIsImFjdGl2ZUNoaWxkIiwic2hpZnQiLCJlbmRXYWtpbmdQcm9jZXNzIiwiY2xlYXJJbnRlcnZhbCIsIkRlZmF1bHRFZGdlV2VpZ2h0IiwiRGVmYXVsdFNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbiIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIlBJIiwiaXNGaWxsZWQiLCJmaWxsQ29sb3IiLCJpc0JvcmRlciIsImJvcmRlcldpdGgiLCJib3JkZXJDb2xvciIsImlzQW5jaG9yIiwiYWN0aXZlQm9yZGVyQ29sb3IiLCJEZWZhdWx0QXdha2VDYW52YXNJbmZvcm1hdGlvbiIsIkVkZ2VQb29sRXZlbnROYW1lIiwiRWRnZVBvb2wiLCJpbml0RXZlbnRzSGFuZGxlciIsImxvY2F0ZWRJbmRleCIsImZpbmRJbmRleCIsImVkZ2VJblBvb2wiLCJzcGxpY2UiLCJnZXRJbnN0YW5jZSIsIndlaWdodCIsIm5ld1dlaWdodCIsIm5ld1NsZWVwZXIiLCJlZGdlUGF0aCIsInJlbW92ZUVkZ2UiLCJyZW1vdmVDaGlsZCIsIlNsZWVwZXJGYWN0b3J5Iiwic2xlZXBlckNhbnZhc0luZm9ybWF0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwiYXdha2VDYW52YXNJbmZvcm1hdGlvbiIsImNhbnZhc09iaiIsImNyZWF0ZVNsZWVwZXJEZWNvcmF0b3IiLCJtYWtlTmV3U2xlZXBlciIsImNoYW5nZU5vZGVTdHlsZSIsInByb3BlcnR5T2JqZWN0IiwiZm9yQ2hhbmdlZEluZm9ybWF0aW9uIiwicHJvcGVydHkiLCJuZXdWYWx1ZSIsInN0YXR1cyIsInRlbXBTbGVlcGVyIiwiU2xlZXBlclBvb2xFdmVudE5hbWUiLCJTbGVlcGVyUG9vbCIsImFkZFNsZWVwZXIiLCJyZU9yZGVyU2xlZXBlciIsInNsZWVwZXJJblBvb2wiLCJzbGVlcGVySW5kZXgiLCJUZXh0U2xlZXBlclRlbXBTdGFjayIsIm9yaWdpblRleHQiLCJwb2ludGVyIiwic3RhY2tMaXN0IiwidmFsIiwiVGV4dFNsZWVwZXIiLCJzaXplIiwiY29sb3IiLCJ0ZXh0YXJlYUluZm9ybWF0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0YXJlYUJvdW5kaW5nQm94UGF0aCIsInRleHRJbml0RXZlbnRIYW5kbGVyIiwic3RhcnRUZXh0TW9kZSIsInRleHRQb3NpdGlvbiIsInRleHRNYXhXaWR0aCIsInRleHRXcml0ZSIsIm1heFdpZHRoIiwiaW5mb3JtYXRpb24iLCJzZXRUZXh0T3JUZXh0YXJlYUluZm9ybWF0aW9uIiwic2xlZXBlclBvc2l0aW9uIiwiZmlndXJlRHJhdyIsIl9zZXRUZXh0YXJlYVBhdGgiLCJFcnJvciIsImZvclNldE9iamVjdCIsImRyYXdUZXh0QXJlYSIsImJvdW5kaW5nQm94UGF0aCIsImdldEFjdGl2aXR5QnlXZWlnaHQiLCJEZWZhdWx0QWN0aXZlSW5mb3JtYXRpb24iLCJjaGlsZHJlbkxpc3QiLCJjaGlsZEVkZ2VNYXBMaXN0Iiwic2V0Q2FudmFzUGF0aCIsImRyYXdUZXh0IiwiY2hpbGRTbGVlcGVyIiwiZXhwZWN0Q2hpbGRJbmRleCIsImNoaWxkT2JqZWN0IiwidW5kZWZpbmVkIiwiZXhwZWN0RWRnZUluZGV4IiwiZWRnZU9iamVjdCIsImdldENhbnZhc0luZm9ybWF0aW9uIiwidGVtcEFjdGl2ZWRDaGlsZExpc3QiLCJmb3JFYWNoIiwiY2FudmFzUGF0aE9iamVjdCIsImFuY2hvcnNMaXN0IiwicmVtb3ZlU2xlZXBlciIsIkdsb2JhbENvbmZpZyIsIlBhaW50ZXIiLCJVbmRvUmVkbyIsIkNhbnZhcyIsImluaXQiLCJpbml0Q29udGV4dCIsImluaXRQYWludGVyIiwiaW5pdEFjdGlvblJlbGF0ZWQiLCJpbml0VW5kb1JlZG9TdGFjayIsImluaXRTbGVlcGVyRmFjdG9yeSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW52YXNJZCIsImlubmVyV2lkdGgiLCJwYW5kZWxXaWR0aCIsImlubmVySGVpZ2h0IiwiaGVhZGVySGVpZ2h0IiwicGFpbnRlciIsIm1vdXNlQWN0aW9uQ29udHJvbGxlciIsImtleWJvYXJkQWN0aW9uQ29udHJvbGxlciIsImtleWJvYXJkQWN0aW9uIiwicGFuZWxPcGVyYXRpb25Db250cm9sbGVyIiwid2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIiLCJtb3VudENhbnZhcyIsIkRlYWZ1bHRBbmNob3JTZXR0aW5nIiwibGluZVdpZHRoIiwibGluZUNvbG9yIiwiYW5jaG9yUmFkaXVzIiwiRGVhZnVsdEFycm93U2V0dGluZyIsImhlYWRMZW5ndGgiLCJBY3RpdmVBcnJvd1NldHRpbmciLCJEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZyIsIkZpZ3VyZVBhaW50ZXIiLCJkcmF3TWFwIiwiZHJhd0NpcmNsZSIsImRyYXdBcnJvdyIsImRyYXdUZXh0YXJlYSIsImRyYXciLCJzZXRQYXRoQ2FsbGJhY2siLCJjaXJjbGUiLCJQYXRoMkQiLCJhcmMiLCJmaWxsU3R5bGUiLCJmaWxsIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJhbmNob3JzUGF0aExpc3QiLCJhbmNob3JQb3NpdGlvbkxpc3QiLCJhbmNob3JQb3NpdGlvbiIsImFuZ2xlIiwiYXRhbjIiLCJsaW5lIiwibW92ZVRvIiwibGluZVRvIiwiY29zIiwic2luIiwicmVjdCIsIlRleHRQYWludGVyIiwiZmlndXJlIiwiY2xlYXJSZWN0Iiwid3JpdGUiLCJzZXRUZXh0YXJlYUNhbGxiYWNrIiwiZm9udCIsImZpbGxJbmZvIiwiX2dldEZpbGxMaXN0IiwiZmlsbExpc3QiLCJmaWxsVGV4dCIsIm1ldHJpY3MiLCJtZWFzdXJlVGV4dCIsImFjdHVhbEJvdW5kaW5nQm94QXNjZW50IiwiYWN0dWFsQm91bmRpbmdCb3hEZXNjZW50IiwiZm9udEJvdW5kaW5nQm94QXNjZW50IiwiZm9udEJvdW5kaW5nQm94RGVzY2VudCIsIm1vdXNlTW92ZUFuY2hvciIsIkV4Y2x1ZGVDbGlja0NsYXNzTmFtZSIsIm1vdmVTbGVlcGVyIiwiYWRkRWRnZUZyb21BbmNob3IiLCJkZWxldGUiLCJwYXN0ZSIsImNyZWF0ZVNsZWVwZXIiLCJyZWRvQ29udHJvbGxlciIsInRhc2siLCJyZWRvTW92ZVNsZWVwZXIiLCJyZWRvTW92ZUFuY2hvciIsInJlZG9Nb3ZlSGVhZCIsInJlZG9EZWxldGVJdGVtcyIsInJlZG9QYXN0ZSIsInJlZG9DcmVhdGVTbGVlcGVyIiwiY2hhbmdlTG9jYXRpb24iLCJyZWNvdmVyTG9jYXRpb24iLCJlZGdlUmVjb3ZlckxvY2F0aW9uIiwidW5kb0NvbnRyb2xsZXIiLCJ1bmRvTW92ZVNsZWVwZXIiLCJ1bmRvTW92ZUFuY2hvciIsInVuZG9Nb3ZlSGVhZCIsInVuZG9EZWxldGVJdGVtcyIsInVuZG9QYXN0ZSIsInVuZG9DcmVhdGVTbGVlcGVyIiwiY29udHJvbGxlckZ1bmN0aW9uIiwib3JpZ2luYWxJbmZvIiwiY3VycmVudFNsZWVwZXIiLCJvcmlnaW5hbExvY2F0aW9uIiwiYWRkZWRFbmRTbGVlcGVyIiwiY2xvbmVkSG91c2UiLCJzdGFjayIsImFkZE11dGF0aW9uVG9TdGFjayIsIm11dGF0aW9uIiwidW5kb1Rhc2siLCJyZWRvVGFzayIsIkV2ZW50IiwiZXZlbnREaWN0aW9uYXJ5IiwiY2FsbGJhY2siLCJjdXJyZW50RXZlbnRMaXN0IiwiY2FsbGJhY2tJbmRleCIsInNhdmVkQ2FsbGJhY2tGdW5jdGlvbiIsInN1ZG9SYW5kb21WYXJpYWJsZSIsInJhbmRvbSIsImxpbmVTdGFydExvY2F0aW9uIiwibGluZUVuZExvY2F0aW9uIiwic2xvcGUiLCJhdGFuIiwieExlbmd0aCIsImFicyIsImludGVyY2VwdCIsIm15Q2FudmFzIl0sInNvdXJjZVJvb3QiOiIifQ==