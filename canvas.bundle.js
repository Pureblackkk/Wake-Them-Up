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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLEdBQUc7QUFDZCxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7VUNudERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNKQTtDQUdBOztBQUNBLElBQUkwYixRQUFRLEdBQUd0SCx1RUFBQSxFQUFmLEVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcHktcGFzdGUvY29weS1wYXN0ZS1ob3VzZS5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9hY3Rpb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvY29uZmlnLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL2tleWJvYXJkL2tleWJvYXJkLWFjdGlvbi1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL2tleWJvYXJkL2tleWJvYXJkLWFjdGlvbi5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9tb3VzZS9kZWVwQ2xvbmUuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvbW91c2UvbW91c2UtYWN0aW9uLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvbW91c2UvbW91c2UtYWN0aW9uLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL3BhbmVsL3BhbmVsLW9wZXJhdGlvbi1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL3dha2luZy1wcm9jZXNzL3dha2luZy1wcm9jZXNzLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9kYXRhLWxheWVyL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLXBvb2wuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9kYXRhLWxheWVyL2VkZ2UvZWRnZS5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci1wb29sLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItdGV4dC5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvdmlldy1sYXllci9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS92aWV3LWxheWVyL3BhaW50ZXIvZmlndXJlL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL3ZpZXctbGF5ZXIvcGFpbnRlci9maWd1cmUvcGFpbnRlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL3ZpZXctbGF5ZXIvcGFpbnRlci9wYWludGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvdmlldy1sYXllci9wYWludGVyL3RleHQvcGFpbnRlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvZ2xvYmFsL2dsb2JhbC1jb25maWcuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdW5kby1yZWRvL29wZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy91bmRvLXJlZG8vcmVkby1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3VuZG8tcmVkby91bmRvLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdW5kby1yZWRvL3VuZG8tZGVjb3JhdG9yLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3VuZG8tcmVkby91bmRvLXJlZG8uanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdXRpbHMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdXRpbHMvbWF0aC11dGlscy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL25vZGVfbW9kdWxlcy9sb2Rhc2guY2xvbmVkZWVwL2luZGV4LmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2VudHJ5L3Rlc3RFbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xvbmVEZWVwIGZyb20gXCJsb2Rhc2guY2xvbmVkZWVwXCI7XG5cbmNsYXNzIENvcHlQYXN0ZUhvdXNlIHtcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IENvcHlQYXN0ZUhvdXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhvdXNlID0gW107XG4gICAgICAgIENvcHlQYXN0ZUhvdXNlLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0IHBhY2thZ2Uob2JqKSB7XG4gICAgICAgIHRoaXMuaG91c2UgPSBbXTtcblxuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygb2JqKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3VzZS5wdXNoKGNsb25lRGVlcChpdGVtKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvdXNlLnB1c2goY2xvbmVEZWVwKG9iaikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBwYWNrYWdlKCkge1xuICAgICAgICByZXR1cm4gY2xvbmVEZWVwKHRoaXMuaG91c2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ29weVBhc3RlSG91c2UgfTsiLCJpbXBvcnQgeyBTbGVlcGVyUG9vbGVyIH0gZnJvbSAnLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItcG9vbCc7XG5pbXBvcnQgeyBFZGdlUG9vbGVyIH0gZnJvbSAnLi4vZGF0YS1sYXllci9lZGdlL2VkZ2UtcG9vbCc7XG5pbXBvcnQgeyBpc1BvaW50SW5MaW5lIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0aC11dGlscyc7XG5pbXBvcnQgeyBNaW5pbWFsRGlzdGFuY2VGb3JMb2NhdGUgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmNsYXNzIEFjdGlvblV0aWxzIHtcbiAgICAvKipcbiAgICAgKiBGaW5kIG1vdXNlIGxvY2F0ZWQgb2JqZWN0XG4gICAgICogQHBhcmFtIHsqfSBjYW52YXMgXG4gICAgICogQHBhcmFtIHsqfSBsb2NhdGlvbiBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZExvY2F0ZWRPYmplY3QoY2FudmFzLCBsb2NhdGlvbikge1xuICAgICAgICBjb25zdCBmaW5kRnVuY3Rpb25zTGlzdCA9IFtcbiAgICAgICAgICAgIEFjdGlvblV0aWxzLmZpbmRMb2NhdGVkTGluZU9ySGVhZCxcbiAgICAgICAgICAgIEFjdGlvblV0aWxzLmZpbmRMb2NhdGVkQW5jaG9yLFxuICAgICAgICAgICAgQWN0aW9uVXRpbHMuZmluZExvY2F0ZWRTbGVlcGVyLFxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAoY29uc3QgZmluZEZ1bmN0aW9uIG9mIGZpbmRGdW5jdGlvbnNMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBmaW5kUmVzdWx0ID0gZmluZEZ1bmN0aW9uKGNhbnZhcywgbG9jYXRpb24pO1xuICAgICAgICAgICAgaWYgKCEhZmluZFJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaW5kUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBzbGVlcGVyIHdoaWNoIGF0IHRoZSBtb3VzZSBsb2NhdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmFzIENhbnZhcyBPYmplY3QgXG4gICAgICogQHBhcmFtIHsqfSBsb2NhdGlvbiBNb3VzZSBsb2NhdGlvblxuICAgICAqIEByZXR1cm5zIHtTbGVlcGVyIHwgbnVsbH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZExvY2F0ZWRTbGVlcGVyKGNhbnZhcywgbG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIC8vIElubmVyIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIGxvY2F0aW9uIGluIGNpcmNsZVxuICAgICAgICBjb25zdCBpc0xvY2F0ZWRJbkNpcmNsZSA9IChjaXJjbGVQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7eCwgeX0gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgIHJldHVybiBjYW52YXNDb250ZXh0LmlzUG9pbnRJblBhdGgoY2lyY2xlUGF0aCwgeCwgeSlcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBIYW5kbGVyIGNoZWNraW5nIGZ1bmN0aW9ucycgbWFwcyBcbiAgICAgICAgY29uc3QgbG9jYXRpb25IYW5kbGVyTWFwcyA9IHtcbiAgICAgICAgICAgICdjaXJjbGUnOiBpc0xvY2F0ZWRJbkNpcmNsZS5iaW5kKHRoaXMpLFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXRlcmF0ZSBwb29sIHRvIGZpbmQgbG9jYXRlZCBwYXRoXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gU2xlZXBlclBvb2xlci5wb29sLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHNsZWVwZXIgPSBTbGVlcGVyUG9vbGVyLnBvb2xbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3Qgc2xlZXBlclN0eWxlID0gc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHNsZWVwZXJDYW52YXNQYXRoID0gc2xlZXBlci5jYW52YXNQYXRoO1xuICAgICAgICAgICAgY29uc3QgeyBkcmF3VHlwZSB9ID0gc2xlZXBlclN0eWxlO1xuICAgICAgICAgICAgaWYgKGxvY2F0aW9uSGFuZGxlck1hcHNbZHJhd1R5cGVdKHNsZWVwZXJDYW52YXNQYXRoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogc2xlZXBlcixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NsZWVwZXInLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBhbmNob3Igd2hpY2ggYXQgdGhlIG1vdXNlIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIHsqfSBjYW52YXMgQ2FudmFzIE9iamVjdCBcbiAgICAgKiBAcGFyYW0geyp9IGxvY2F0aW9uIE1vdXNlIGxvY2F0aW9uXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRMb2NhdGVkQW5jaG9yKGNhbnZhcywgbG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCB7eCwgeX0gPSBsb2NhdGlvbjtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IFNsZWVwZXJQb29sZXIucG9vbC5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICAgICAgICBjb25zdCBzbGVlcGVyID0gU2xlZXBlclBvb2xlci5wb29sW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChzbGVlcGVyLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzbGVlcGVyQW5jaG9yIG9mIHNsZWVwZXIuY2FudmFzQW5jaG9yc1BhdGhMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYW5jaG9yUGF0aCB9ID0gc2xlZXBlckFuY2hvcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhc0NvbnRleHQuaXNQb2ludEluUGF0aChhbmNob3JQYXRoLCB4LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFtzbGVlcGVyLCBzbGVlcGVyQW5jaG9yXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYW5jaG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBlZGdlIHdoaWNoIGF0IHRoZSBtb3VzZSBsb2NhdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmFzIFxuICAgICAqIEBwYXJhbSB7Kn0gbG9jYXRpb24gXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRMb2NhdGVkTGluZU9ySGVhZChjYW52YXMsIGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3Qge3gsIHl9ID0gbG9jYXRpb247XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gRWRnZVBvb2xlci5wb29sLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlUG9vbGVyLnBvb2xbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgeyBoZWFkIH0gPSBlZGdlLmNhbnZhc1BhdGg7XG4gICAgICAgICAgICBpZiAoaXNQb2ludEluTGluZShlZGdlLnN0YXJ0TG9jYXRpb24sIGVkZ2UuZW5kTG9jYXRpb24sIHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBlZGdlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW52YXNDb250ZXh0LmlzUG9pbnRJblBhdGgoaGVhZCwgeCwgeSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGVkZ2UsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoZWFkJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIHNsZWVwZXIgd2hvIGlzIGluIGRyYWdnaW5nIHN0YXR1c1xuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kRHJhZ2dlZFNsZWVwZXIoKSB7XG4gICAgICAgIGNvbnN0IGRyYWdnZWRTbGVlcGVyTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgaWYgKHNsZWVwZXIuaXNEcmFnKSB7XG4gICAgICAgICAgICAgICAgZHJhZ2dlZFNsZWVwZXJMaXN0LnB1c2goc2xlZXBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRyYWdnZWRTbGVlcGVyTGlzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaHJvdHRsZXIgbWFrZXIgZm9yIGxpc3RlbmVyIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHdhaXRUaW1lIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHN0YXRpYyB0aHJvdHRsZXJNYWtlcihmbiwgd2FpdFRpbWUpIHtcbiAgICAgICAgbGV0IHRpbWVyID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgaWYoIXRpbWVyKSB7XG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSwgd2FpdFRpbWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBjbG9zZXN0IHNsZWVwZXIgZ2l2ZW4gbG9jYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IGxvY2F0aW9uIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kQ2xvc2VzdFNsZWVwZXIobG9jYXRpb24pIHtcbiAgICAgICAgY29uc3Qge3gsIHl9ID0gbG9jYXRpb247XG4gICAgICAgIGZvcihjb25zdCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgY29uc3Qgc2xlZXBlclggPSBzbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLng7XG4gICAgICAgICAgICBjb25zdCBzbGVlcGVyWSA9IHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChzbGVlcGVyWCAtIHgpKioyICsgKHNsZWVwZXJZIC15KSoqMik7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBzbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnJhZGl1cyArIE1pbmltYWxEaXN0YW5jZUZvckxvY2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbGVlcGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgY2xvc2VzdCBhbmNob3IgZ2l2ZW4gbG9jYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IGxvY2F0aW9uIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kQ2xvc2VzdEFuY2hvcihsb2NhdGlvbikge1xuICAgICAgICBjb25zdCBsb2NhdGVkU2xlZXBlciA9IHRoaXMuZmluZENsb3Nlc3RTbGVlcGVyKGxvY2F0aW9uKTtcbiAgICAgICAgaWYgKCFsb2NhdGVkU2xlZXBlcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnY2xvZXN0IFNsZWVwZXInLCBsb2NhdGVkU2xlZXBlcik7XG5cbiAgICAgICAgY29uc3QgbG9jYXRlZFNsZWVwZXJYID0gbG9jYXRlZFNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueDtcbiAgICAgICAgY29uc3QgbG9jYXRlZFNsZWVwZXJZID0gbG9jYXRlZFNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueTtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gbG9jYXRlZFNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ucmFkaXVzO1xuICAgICAgICBjb25zdCBhbmNob3JMb2NhdGlvbkxpc3QgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogbG9jYXRlZFNsZWVwZXJYIC0gcmFkaXVzLFxuICAgICAgICAgICAgICAgIHk6IGxvY2F0ZWRTbGVlcGVyWSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogbG9jYXRlZFNsZWVwZXJYICsgcmFkaXVzLFxuICAgICAgICAgICAgICAgIHk6IGxvY2F0ZWRTbGVlcGVyWSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogbG9jYXRlZFNsZWVwZXJYLFxuICAgICAgICAgICAgICAgIHk6IGxvY2F0ZWRTbGVlcGVyWSAtIHJhZGl1cyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogbG9jYXRlZFNsZWVwZXJYLFxuICAgICAgICAgICAgICAgIHk6IGxvY2F0ZWRTbGVlcGVyWSArIHJhZGl1cyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgbGV0IG1pbkRpc3RhbmNlID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgICAgIGxldCBtaW5Mb2NhdGlvbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgYW5jaG9yTG9jYXRpb24gb2YgYW5jaG9yTG9jYXRpb25MaXN0KSB7XG4gICAgICAgICAgICBjb25zdCB7eCwgeX0gPSBhbmNob3JMb2NhdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gKGxvY2F0aW9uLnggLSB4KSoqMiArIChsb2NhdGlvbi55IC0geSkqKjI7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBtaW5EaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIG1pbkxvY2F0aW9uID0gYW5jaG9yTG9jYXRpb247XG4gICAgICAgICAgICAgICAgbWluRGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbG9zZXN0TG9jYXRpb246IG1pbkxvY2F0aW9uLFxuICAgICAgICAgICAgY2xvc2VzdFNsZWVwZXI6IGxvY2F0ZWRTbGVlcGVyLFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQWN0aW9uVXRpbHMgfTsiLCJleHBvcnQgY29uc3QgbW91c2VBY3Rpb25Nb2RlID0ge1xuICAgIGRvd25PblNsZWVwZXI6ICdkb3duT25TbGVlcGVyJyxcbiAgICBkb3duT25BbmNob3I6ICdkb3duT25BbmNob3InLFxuICAgIGRvd25PbkxpbmU6ICdkb3duT25FZ2RlJyxcbiAgICBkb3duT25IZWFkOiAnZG93bk9uSGVhZCcsXG4gICAgZG93bk9uQmFja2dyb3VuZDogJ2Rvd25PbkJhY2tncm91bmQnLFxuICAgIGRvd25Pbk5vbmU6ICdkb3duT25Ob25lJyxcbiAgICBkb3duT25UZXh0OiAnZG93bk9uVGV4dCcsXG59O1xuXG5leHBvcnQgY29uc3QgTWluaW1hbERpc3RhbmNlRm9yTG9jYXRlID0gMTA7IiwiaW1wb3J0IHsgXG4gICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZSxcbiAgICBQYWludGVyRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFVuZG9EZWNvcmF0b3IgfSBmcm9tICcuLi8uLi8uLi91bmRvLXJlZG8vdW5kby1kZWNvcmF0b3InO1xuaW1wb3J0IHsgQ29weVBhc3RlSG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3B5LXBhc3RlL2NvcHktcGFzdGUtaG91c2UnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyJztcbmltcG9ydCB7IEVkZ2UgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL2VkZ2UvZWRnZSc7IFxuXG5cbmNsYXNzIEtleWJvYXJkQWN0aW9uQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzZXIgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIC8vIEV4dHJhY3QgZXZlbnQgbmFtZVxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBrZXlib2FyZERlbGV0ZSxcbiAgICAgICAgICAgIGtleWJvYXJkSW5wdXQsXG4gICAgICAgICAgICBrZXlib2FyZFRleHRVbmRvLFxuICAgICAgICAgICAga2V5Ym9hcmRUZXh0UmVkbyxcbiAgICAgICAgICAgIGtleWJvYXJkVGV4dERlbGV0ZSxcbiAgICAgICAgICAgIGtleWJvYXJkQ29weSxcbiAgICAgICAgICAgIGtleWJvYXJkUGFzdGUsXG4gICAgICAgIH0gPSBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lO1xuXG4gICAgICAgIC8vIE1ha2UgRXZlbnROYW1lLUhhbmRsZXIgTWFwXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFtrZXlib2FyZERlbGV0ZV0gPSBVbmRvRGVjb3JhdG9yLmRlbGV0ZUl0ZW1zRGVjb3JhdG9yKHRoaXMua2V5Ym9hcmREZWxldGVDb250cm9sbGVyKTtcbiAgICAgICAgZXZlbnROYW1lc01hcFtrZXlib2FyZFBhc3RlXSA9IFVuZG9EZWNvcmF0b3IucGFzdGVEZWNvcmF0b3IodGhpcy5rZXlib2FyZFBhc3RlQ29udHJvbGxlcik7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmRDb3B5XSA9IHRoaXMua2V5Ym9hcmRDb3B5Q29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFtrZXlib2FyZElucHV0XSA9IHRoaXMua2V5Ym9hcmRJbnB1dENvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmRUZXh0VW5kb10gPSB0aGlzLmtleWJvYXJkVGV4dFVuZG9Db250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkVGV4dFJlZG9dID0gdGhpcy5rZXlib2FyZFRleHRSZWRvQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFtrZXlib2FyZFRleHREZWxldGVdID0gdGhpcy5rZXlib2FyZFRleHREZWxldGVDb250cm9sbGVyO1xuXG4gICAgICAgIC8vIEluaXQgZXZlbnQgaGFuZGxlclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBpbiBldmVudE5hbWVzTWFwKSB7XG4gICAgICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudE5hbWVzTWFwW2V2ZW50TmFtZV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHRoZSBzZWxlY3RlZCBlZGdlIG9yIFNsZWVwZXJcbiAgICAgKiBAcGFyYW0ge0VkZ2UgfCBTbGVlcGVyfSBjbGlja09iamVjdCBcbiAgICAgKi9cbiAgICBrZXlib2FyZERlbGV0ZUNvbnRyb2xsZXIoY2xpY2tPYmplY3QpIHtcbiAgICAgICAgY2xpY2tPYmplY3QuZGVsZXRlU2VsZigpO1xuICAgICAgICBcbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElucHV0IHRleHQgdG8gdGhlIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXIgXG4gICAgICogQHBhcmFtIHsqfSBpbnB1dEtleSBzdHJpbmdcbiAgICAgKi9cbiAgICBrZXlib2FyZElucHV0Q29udHJvbGxlcihzbGVlcGVyLCBpbnB1dEtleSkge1xuICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gYCR7c2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudH0ke2lucHV0S2V5fWA7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRleHRcbiAgICAgICAgc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudCA9IG5ld0NvbnRlbnQ7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRlbXAgc3RhY2tcbiAgICAgICAgc2xlZXBlci50ZXh0VGVtcFN0YWNrLnRleHQgPSBuZXdDb250ZW50O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmRvIGZvciBzbGVlcGVyIGluIHRleHQgbW9kZVxuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlciBcbiAgICAgKi9cbiAgICBrZXlib2FyZFRleHRVbmRvQ29udHJvbGxlcihzbGVlcGVyKSB7XG4gICAgICAgIHNsZWVwZXIudGV4dFRlbXBTdGFjay51bmRvKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coc2xlZXBlci50ZXh0VGVtcFN0YWNrLnRleHQpO1xuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlXG4gICAgICAgIHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQgPSBzbGVlcGVyLnRleHRUZW1wU3RhY2sudGV4dDtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVkbyBmb3Igc2xlZXBlciBpbiB0ZXh0IG1vZGVcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXIgXG4gICAgICovXG4gICAga2V5Ym9hcmRUZXh0UmVkb0NvbnRyb2xsZXIoc2xlZXBlcikge1xuICAgICAgICBzbGVlcGVyLnRleHRUZW1wU3RhY2sucmVkbygpO1xuXG4gICAgICAgIC8vIFVwZGF0ZVxuICAgICAgICBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50ID0gc2xlZXBlci50ZXh0VGVtcFN0YWNrLnRleHQ7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApOyBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgZm9yIHNsZWVwZXIgaW4gdGV4dCBtb2RlXG4gICAgICogQHBhcmFtIHsqfSBzbGVlcGVyIFxuICAgICAqL1xuICAgIGtleWJvYXJkVGV4dERlbGV0ZUNvbnRyb2xsZXIoc2xlZXBlcikge1xuICAgICAgICBjb25zdCBzdHJpbmdMZW5ndGggPSBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQuc3Vic3RyaW5nKDAsIHN0cmluZ0xlbmd0aCAtIDEpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0ZXh0XG4gICAgICAgIHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0ZW1wIHN0YWNrXG4gICAgICAgIHNsZWVwZXIudGV4dFRlbXBTdGFjay50ZXh0ID0gbmV3Q29udGVudDtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29weSBhIG9iamVjdCBzZWxlY3RlZFxuICAgICAqIEBwYXJhbSB7c2xlZXBlciB8IEVkZ2V9IG9iamVjdCBcbiAgICAgKi9cbiAgICBrZXlib2FyZENvcHlDb250cm9sbGVyKG9iamVjdCkge1xuICAgICAgICBDb3B5UGFzdGVIb3VzZS5wYWNrYWdlID0gb2JqZWN0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQYXN0ZSB0aGUgb2JqZWN0IHN0b3JlIGluIGNvcHktcGFzdGUgaG91c2VcbiAgICAgKi9cbiAgICBrZXlib2FyZFBhc3RlQ29udHJvbGxlcihjb3B5ZWRPYmplY3RMaXN0KSB7ICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBjb3B5ZWRPYmplY3RMaXN0KSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBPbmx5IHN1cHBvcnQgZm9yIHNsZWVwZXIgbm93XG4gICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIFNsZWVwZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgbm9uLXJlbGF0ZWQgZmFjdG9ycyB3aXRoaW4gc2xlZXBlclxuICAgICAgICAgICAgICAgIGl0ZW0ucHJlcGFyZUZvclBhc3RlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZWdpc3RlciBldmVudFxuICAgICAgICAgICAgICAgIGl0ZW0uaW5pdEV2ZW50SGFuZGxlcigpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIFNsZWVwZXIgaW50byBzbGVlcGVyIHBvb2xcbiAgICAgICAgICAgICAgICBpdGVtLnJlY292ZXJTZWxmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBLZXlib2FyZEFjdGlvbkNvbnRyb2xsZXIgfTsiLCJpbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyJztcbmltcG9ydCB7IFxuICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG4gICAgVW5kb1JlZG9FdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbmNsYXNzIEtleWJvYXJkQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIG1vdXNlQWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLm1vdXNlQWN0aW9uID0gbW91c2VBY3Rpb247XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuaW5pdEFjdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgYWxsIHRoZSBtb3VzZSBhY3Rpb24gbGlzdGVuZXJzXG4gICAgICovXG4gICAgaW5pdEFjdGlvbigpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uc01hcCA9IHtcbiAgICAgICAgICAgICdrZXlkb3duJzogdGhpcy5rZXlEb3duLmJpbmQodGhpcyksXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgYWN0aW9uIGluIGFjdGlvbnNNYXApIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGFjdGlvbiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNNYXBbYWN0aW9uXShldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleURvd24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgbW91c2Vkb3duIGVsZW1lbnQgaXMgc2xlZXBlciBhbmQgaW4gdGV4dCBtb2RlXG4gICAgICAgIGNvbnN0IGlzVGV4dE1vZGVPbiA9IHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCBpbnN0YW5jZW9mIFNsZWVwZXIgXG4gICAgICAgICYmIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudC5pc1RleHRNb2RlO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoKGNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAvLyBQcmVzcyBEZWxldGVcbiAgICAgICAgICAgICAgICBpc1RleHRNb2RlT24gPyB0aGlzLl9oYW5kbGVyVGV4dERlbGV0ZSgpIDogdGhpcy5faGFuZGxlckRlbGV0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5MDpcbiAgICAgICAgICAgICAgICAvLyBQcmVzcyBjdHJsICsgelxuICAgICAgICAgICAgICAgIGlmICgoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNUZXh0TW9kZU9uID8gXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUua2V5Ym9hcmRUZXh0VW5kbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS51bmRvKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBQcmVzcyBjdHJsICsgc2hmaXQgKyB6XG4gICAgICAgICAgICAgICAgaWYgKChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpICYmIGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGV4dE1vZGVPbiA/IFxuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkVGV4dFJlZG8sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUucmVkbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2NzpcbiAgICAgICAgICAgICAgICAvLyBQcmVzcyBjdHJsICsgY1xuICAgICAgICAgICAgICAgIGlmKChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpICYmICFldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICBpc1RleHRNb2RlT24gP1xuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoJ251bGwnKVxuICAgICAgICAgICAgICAgICAgICA6IEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUua2V5Ym9hcmRDb3B5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODY6XG4gICAgICAgICAgICAgICAgLy8gUHJlc3MgY3RybCArIHZcbiAgICAgICAgICAgICAgICBpZigoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNUZXh0TW9kZU9uID9cbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KCdudWxsJylcbiAgICAgICAgICAgICAgICAgICAgOiBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkUGFzdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NyB8fFxuICAgICAgICAgICAgICAgICAgICBjb2RlID49IDY1ICYmIGNvZGUgPD0gOTAgfHxcbiAgICAgICAgICAgICAgICAgICAgY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMlxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpc1RleHRNb2RlT24gJiYgdGhpcy5faGFuZGxlTm9ybWFsKGV2ZW50LmtleS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGV4dCBpbnB1dCBmb3Igc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0ga2V5IFxuICAgICAqL1xuICAgIF9oYW5kbGVOb3JtYWwoa2V5KSB7ICBcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZElucHV0LFxuICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAga2V5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3Igb2JqZWN0IGRlbGV0ZVxuICAgICAqL1xuICAgIF9oYW5kbGVyRGVsZXRlKCkge1xuICAgICAgICAvLyBJZiBjbGljayBlbGVtZW50IGV4aXN0cyBhbmQgaXMgYWN0aXZlLCB0aGVuIGRlbGV0ZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnRcbiAgICAgICAgICAgICYmIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudC5pc0FjdGl2ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkRGVsZXRlLFxuICAgICAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIHRleHQgZGVsZXRlXG4gICAgICovXG4gICAgX2hhbmRsZXJUZXh0RGVsZXRlKCkge1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkVGV4dERlbGV0ZSxcbiAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEtleWJvYXJkQWN0aW9uIH07IiwiaW1wb3J0IHsgbW91c2VBY3Rpb25Nb2RlIH0gZnJvbSAnLi4vY29uZmlnJztcblxuLy8gQ2xvbmUgdGhlIHJlbGF0ZWQgaW5mb3JtYXRpb24gYWNjb3JkaW5nIHRvIHRoZSB0eXBlIG9mIGNsYXNzXG5leHBvcnQgZnVuY3Rpb24gRGVlcENsb25lSW5mbyhtb2RlLCB0YXJnZXQpIHtcbiAgICBzd2l0Y2gobW9kZSkge1xuICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25TbGVlcGVyKTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogdGFyZ2V0LmNhbnZhc0luZm9ybWF0aW9uLngsXG4gICAgICAgICAgICAgICAgeTogdGFyZ2V0LmNhbnZhc0luZm9ybWF0aW9uLnksXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIChtb3VzZUFjdGlvbk1vZGUuZG93bk9uSGVhZCk6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IHRhcmdldC5lbmRMb2NhdGlvbi54LFxuICAgICAgICAgICAgICAgIHk6IHRhcmdldC5lbmRMb2NhdGlvbi55LFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSIsImltcG9ydCB7IFxuICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG4gICAgU2xlZXBlckV2ZW50TmFtZSxcbiAgICBQYWludGVyRXZlbnROYW1lLFxuICAgIEVkZ2VFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXBvb2wnO1xuaW1wb3J0IHsgRWRnZVBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLXBvb2wnO1xuaW1wb3J0IHsgVW5kb0RlY29yYXRvciB9IGZyb20gJy4uLy4uLy4uL3VuZG8tcmVkby91bmRvLWRlY29yYXRvcic7IFxuXG5jbGFzcyBNb3VzZUFjdGlvbkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc2VyIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbW91c2VEb3duU2xlZXBlcixcbiAgICAgICAgICAgIG1vdXNlRG93bkxpbmUsXG4gICAgICAgICAgICBtb3VzZURvd25CYWNrZ3JvdW5kLFxuICAgICAgICAgICAgbW91c2VNb3ZlU2xlZXBlcixcbiAgICAgICAgICAgIG1vdXNlTW92ZUhlYWQsXG4gICAgICAgICAgICBtb3VzZVVwU2xlZXBlcixcbiAgICAgICAgICAgIG1vdXNlVXBBbmNob3IsXG4gICAgICAgICAgICBtb3VzZVVwSGVhZCxcbiAgICAgICAgICAgIG1vdXNlRG91YmxlQ2xpY2ssXG4gICAgICAgIH0gPSBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lO1xuXG4gICAgICAgIC8vIE1ha2UgRXZlbnROYW1lLUhhbmRsZXIgTWFwXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZURvd25TbGVlcGVyXSA9IHRoaXMubW91c2VEb3duU2xlZXBlckNvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VEb3duTGluZV0gPSB0aGlzLm1vdXNlRG93bkxpbmVDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlRG93bkJhY2tncm91bmRdID0gdGhpcy5tb3VzZURvd25CYWNrZ3JvdW5kQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZU1vdmVTbGVlcGVyXSA9IHRoaXMubW91c2VNb3ZlU2xlZXBlckNvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VNb3ZlSGVhZF0gPSB0aGlzLm1vdXNlTW92ZUhlYWRDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlVXBTbGVlcGVyXSA9IFVuZG9EZWNvcmF0b3IubW91c2VVcFNsZWVwZXJEZWNvcmF0b3IodGhpcy5tb3VzZVVwU2xlZXBlckNvbnRyb2xsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VVcEFuY2hvcl0gPSBVbmRvRGVjb3JhdG9yLm1vdXNlVXBBbmNob3JEZWNvcmF0b3IodGhpcy5tb3VzZVVwQW5jaG9yQ29udHJvbGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZVVwSGVhZF0gPSBVbmRvRGVjb3JhdG9yLm1vdXNlVXBIZWFkRGVjb3JhdG9yKHRoaXMubW91c2VVcEhlYWRDb250cm9sbGVyLmJpbmQodGhpcykpO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlRG91YmxlQ2xpY2tdID0gdGhpcy5tb3VzZURvdWJsZUNsaWNrQ29udHJvbGxlcjtcblxuICAgICAgICAvLyBJbml0IGV2ZW50IGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnROYW1lc01hcFtldmVudE5hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsdGVyIHRoZSBzbGVlcGVyIHByb3BlcnRpZXMgXG4gICAgICogQHBhcmFtIHtTbGVlcGVyfSBzbGVlcGVyIFNsZWVwZXIgb2JqZWN0XG4gICAgICovXG4gICAgbW91c2VEb3duU2xlZXBlckNvbnRyb2xsZXIoc2xlZXBlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZG93bicsIHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQpO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hhbmdlIGFjdGl2ZSBzdGF0dXMgYW5kIGRyYWcgc3RhdHVzXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFNsZWVwZXJFdmVudE5hbWUuYWN0aXZlU29tZVNsZWVwZXIsXG4gICAgICAgICAgICBzbGVlcGVyXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsdGVyIHRoZSBlZGdlIHByb3BlcnRpZXNcbiAgICAgKiBAcGFyYW0geyp9IGVkZ2UgXG4gICAgICovXG4gICAgbW91c2VEb3duTGluZUNvbnRyb2xsZXIoZWRnZSkge1xuICAgICAgICAvLyBDaGFuZ2UgYWN0aXZlIGVkZ2Ugc3RhdHVzIFxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBFZGdlRXZlbnROYW1lLmFjdGl2ZVNvbWVFZGdlLFxuICAgICAgICAgICAgZWRnZSxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYW4gYWxsIHRoZSBhY3RpdmUgc3RhdHVzXG4gICAgICovXG4gICAgbW91c2VEb3duQmFja2dyb3VuZENvbnRyb2xsZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEb3duIG9uIGJhY2tncm91bmQgY29udHJvbGxlcicpO1xuICAgICAgICBmb3IgKGNvbnN0IHNsZWVwZXIgb2YgU2xlZXBlclBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICAvLyBEZWFjdGl2ZSBhbGwgdGhlIHNsZWVwZXJcbiAgICAgICAgICAgIHNsZWVwZXIuY2hhbmdlQWN0aXZlU3RhdHVzKG51bGwpO1xuXG4gICAgICAgICAgICAvLyBCYWNrIHRvIG5vcm1hbCBtb2RlXG4gICAgICAgICAgICBzbGVlcGVyLmVuZFRleHRNb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgRWRnZVBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBlZGdlLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhTbGVlcGVyUG9vbGVyLnBvb2wpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIHNsZWVwZXIgY2FudmFzIHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHsqfSBkcmFnU2xlZXBlckxpc3QgXG4gICAgICogQHBhcmFtIHsqfSByZWxhdGl2ZU1vdmVEaXN0YW5jZSBcbiAgICAgKi9cbiAgICBtb3VzZU1vdmVTbGVlcGVyQ29udHJvbGxlcihkcmFnU2xlZXBlckxpc3QsIHJlbGF0aXZlTW92ZURpc3RhbmNlKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc2xlZXBlciBvZiBkcmFnU2xlZXBlckxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpblggPSBzbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLng7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5ZID0gc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi55O1xuICAgICAgICAgICAgY29uc3QgbmV3WCA9IG9yaWdpblggKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS54O1xuICAgICAgICAgICAgY29uc3QgbmV3WSA9IG9yaWdpblkgKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS55O1xuICAgICAgICAgICAgc2xlZXBlci5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbih7XG4gICAgICAgICAgICAgICAgeDogbmV3WCxcbiAgICAgICAgICAgICAgICB5OiBuZXdZLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZWRnZSBvZiBzbGVlcGVyLmVkZ2VMaXN0KSB7XG4gICAgICAgICAgICAgICAgZWRnZS5zZXRMb2NhdGlvbignc3RhcnQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGVkZ2Uuc3RhcnRMb2NhdGlvbi54ICsgcmVsYXRpdmVNb3ZlRGlzdGFuY2UueCxcbiAgICAgICAgICAgICAgICAgICAgeTogZWRnZS5zdGFydExvY2F0aW9uLnkgKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS55LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygc2xlZXBlci5pbmNvbWluZ0VkZ2VMaXN0KSB7XG4gICAgICAgICAgICAgICAgZWRnZS5zZXRMb2NhdGlvbignZW5kJywge1xuICAgICAgICAgICAgICAgICAgICB4OiBlZGdlLmVuZExvY2F0aW9uLnggKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBlZGdlLmVuZExvY2F0aW9uLnkgKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS55LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgZWRnZSBjYW52YXMgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGRyYWdFZGdlIFxuICAgICAqIEBwYXJhbSB7Kn0gcmVsYXRpdmVNb3ZlRGlzdGFuY2UgXG4gICAgICovXG4gICAgbW91c2VNb3ZlSGVhZENvbnRyb2xsZXIoZHJhZ0VkZ2UsIGN1cnJlbnRQb3NpdGlvbikge1xuICAgICAgICBkcmFnRWRnZS5zZXRMb2NhdGlvbignZW5kJywgY3VycmVudFBvc2l0aW9uKTtcblxuICAgICAgICAvLyBEZWxldGUgdGhlIGVkZ2UgZnJvbSBlbmQgc2xlZXBlclxuICAgICAgICBpZiAoISFkcmFnRWRnZS5lbmRTbGVlcGVyKSB7XG4gICAgICAgICAgICBkcmFnRWRnZS5lbmRTbGVlcGVyLnJlbW92ZUluY29taW5nRWRnZShkcmFnRWRnZSk7XG4gICAgICAgICAgICBkcmFnRWRnZS5jaGFuZ2VFbmQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhbiBhbGwgdGhlIGRyYWcgZmxhZyB3aGVuIG1vdXNlIHVwXG4gICAgICogQHBhcmFtIHsqfSBkcmFnU2xlZXBlckxpc3QgXG4gICAgICovXG4gICAgbW91c2VVcFNsZWVwZXJDb250cm9sbGVyKGRyYWdTbGVlcGVyTGlzdCkge1xuICAgICAgICBmb3IoY29uc3Qgc2xlZXBlciBvZiBkcmFnU2xlZXBlckxpc3QpIHtcbiAgICAgICAgICAgIHNsZWVwZXIuc3dpdGNoRHJhZ1N0YXR1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgdGVtcG9yYXJ5IGVkZ2UgaW50byBzbGVlcGVyXG4gICAgICogQHBhcmFtIHsqfSBzbGVlcGVyQW5kQW5jaG9yIGNsaWNrZWQgYW5jaG9yIGFuZCBpdHMgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7RWRnZX0gZWRnZSBlZGdlIG9iamVjdFxuICAgICAqL1xuICAgIG1vdXNlVXBBbmNob3JDb250cm9sbGVyKHNsZWVwZXJBbmRBbmNob3IsIGVkZ2UsIGNsb3Nlc3RPYmplY3QpIHtcbiAgICAgICAgY29uc3QgW3NsZWVwZXIsIHNsZWVwZXJBbmNob3JdID0gc2xlZXBlckFuZEFuY2hvcjtcbiAgICAgICAgc2xlZXBlci5hZGRFZGdlKGVkZ2UpO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgZW5kIHNsZWVwZXIgaWYgY2xvZXN0T2JqZWN0IGV4aXN0ZWRcbiAgICAgICAgaWYgKCEhY2xvc2VzdE9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5tb3VzZVVwSGVhZENvbnRyb2xsZXIoZWRnZSwgY2xvc2VzdE9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaW5rIHRvIHRoZSBjbG9lc3QgYW5jaG9yIGlmIG5lZWRlZFxuICAgICAqIEBwYXJhbSB7Kn0gZWRnZSBcbiAgICAgKiBAcGFyYW0geyp9IGNsb3Nlc3RPYmplY3QgXG4gICAgICovXG4gICAgbW91c2VVcEhlYWRDb250cm9sbGVyKGVkZ2UsIGNsb3Nlc3RPYmplY3QpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY2xvc2VzdExvY2F0aW9uLFxuICAgICAgICAgICAgY2xvc2VzdFNsZWVwZXIsXG4gICAgICAgIH0gPSBjbG9zZXN0T2JqZWN0O1xuXG4gICAgICAgIC8vIFNldCBpbmNvbWluZyBlZGdlIGZvciBjdXJyZW50IHNsZWVwZXJcbiAgICAgICAgY2xvc2VzdFNsZWVwZXIuYWRkSW5jb21pbmdFZGdlKGVkZ2UpO1xuXG4gICAgICAgIC8vIFNldCBlZGdlIGxvY2F0aW9uXG4gICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oJ2VuZCcsIGNsb3Nlc3RMb2NhdGlvbik7XG5cbiAgICAgICAgLy8gU2V0IGVkZ2UgZW5kIHNsZWVwZXJcbiAgICAgICAgZWRnZS5jaGFuZ2VFbmQoY2xvc2VzdFNsZWVwZXIpO1xuXG4gICAgICAgIC8vIFNldCBlZGdlIHN0YXJ0IHNsZWVwZXIncyBjaGlsZFxuICAgICAgICBlZGdlLnN0YXJ0U2xlZXBlci5hZGRDaGlsZChjbG9zZXN0U2xlZXBlcik7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gc2xlZXBlclxuICAgICAqIFN0YXJ0IHRleHQgbW9kZSB3aGVuIGRvdWxiZSBjbGljayBvbiB0aGUgc2xlZXBlclxuICAgICAqL1xuICAgIG1vdXNlRG91YmxlQ2xpY2tDb250cm9sbGVyKHNsZWVwZXIpIHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgc3RhcnRpbmcgdGV4dCBtb2RlIGZ1bmN0aW9uIG9mIHRoYXQgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBTbGVlcGVyRXZlbnROYW1lLmFjdGl2ZVNvbWVTbGVlcGVyVGV4dE1vZGUsXG4gICAgICAgICAgICBzbGVlcGVyLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IE1vdXNlQWN0aW9uQ29udHJvbGxlciB9OyIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBEZWVwQ2xvbmVJbmZvIH0gZnJvbSAnLi9kZWVwQ2xvbmUnO1xuaW1wb3J0IHsgXG4gICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZSxcbiAgICBQYWludGVyRXZlbnROYW1lLFxuICAgIFVuZG9SZWRvRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgU2F2ZWRPcGVyYXRpb24gfSBmcm9tICcuLi8uLi8uLi91bmRvLXJlZG8vb3BlcmF0aW9uJztcbmltcG9ydCB7IEFjdGlvblV0aWxzIH0gZnJvbSAnLi4vYWN0aW9uLXV0aWxzJztcbmltcG9ydCB7IG1vdXNlQWN0aW9uTW9kZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXInO1xuaW1wb3J0IHsgRWRnZSB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlJztcblxuY2xhc3MgTW91c2VBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uWCA9IG51bGw7XG4gICAgICAgIHRoaXMubW91c2VQb3NpdGlvblkgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uTm9uZTtcbiAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAvLyBTYXZlIHRlbXBvcmFyeSB2YXJpYWJsZSBcbiAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlID0gbnVsbDtcblxuICAgICAgICAvLyBDb3B5IGZvciBkZWNvcmF0b3JcbiAgICAgICAgdGhpcy50ZW1wb3JhcnlDb3B5ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmluaXRBY3Rpb24oKTtcbiAgICB9XG4gICAgc3dpdGNoVGV4dE1vZGVcbiAgICAvKipcbiAgICAgKiBJbml0IGFsbCB0aGUgbW91c2UgYWN0aW9uIGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGluaXRBY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbnNNYXAgPSB7XG4gICAgICAgICAgICAnbW91c2Vkb3duJzogdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdtb3VzZW1vdmUnOiBBY3Rpb25VdGlscy50aHJvdHRsZXJNYWtlcih0aGlzLmhhbmRsZU1vdXNlTW92ZS5iaW5kKHRoaXMpLCAxMDAwIC8gNjApLFxuICAgICAgICAgICAgJ21vdXNldXAnOiB0aGlzLmhhbmRsZU5Nb3VzZVVwLmJpbmQodGhpcyksXG4gICAgICAgICAgICAnZGJsY2xpY2snOiB0aGlzLmhhbmRsZU1vdXNlRG91YmxlQ2xpY2suYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdjb250ZXh0bWVudSc6IHRoaXMuaGFuZGxlTW91c2VQcmV2ZW50UmlnaHRDbGljay5iaW5kKHRoaXMpLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGFjdGlvbiBpbiBhY3Rpb25zTWFwKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKGFjdGlvbiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNNYXBbYWN0aW9uXShldmVudClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TW91c2VQb3NpdGlvbih4LCB5KSB7XG4gICAgICAgIHRoaXMubW91c2VQb3NpdGlvblggPSB4O1xuICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb25ZID0geTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBVcGRhdGUgbW91c2UgcG9zaXRpb24gd2hlbiBjbGlja1xuICAgICAgICB0aGlzLnNldE1vdXNlUG9zaXRpb24obG9jYXRpb24ueCwgbG9jYXRpb24ueSk7XG5cbiAgICAgICAgLy8gRmluZCBsb2NhdGVkIG9iamVjdFxuICAgICAgICBjb25zdCBsb2NhdGVkT2JqZWN0ID0gQWN0aW9uVXRpbHMuZmluZExvY2F0ZWRPYmplY3QodGhpcy5jYW52YXMsIGxvY2F0aW9uKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnbG9jYXRlZCBvYmplY3QnLCBsb2NhdGVkT2JqZWN0KTtcblxuICAgICAgICAvLyBJZiByaWdodCBjbGlja1xuICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09IDIpIHtcbiAgICAgICAgICAgIC8vIElmIHJpZ2h0IGNsaWNrXG4gICAgICAgICAgICBsZXQgdHlwZSA9IG51bGw7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKGxvY2F0ZWRPYmplY3QpIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gbG9jYXRlZE9iamVjdC50eXBlO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxvY2F0ZWRPYmplY3QucmVzdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZVJpZ2h0Q2xpY2ssXG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBsZWZ0IGNsaWNrXG4gICAgICAgIGlmKCEhbG9jYXRlZE9iamVjdCkge1xuICAgICAgICAgICAgY29uc3Qge3R5cGUsIHJlc3VsdH0gPSBsb2NhdGVkT2JqZWN0O1xuICAgICAgICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsaW5lJzpcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZURvd25MaW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25MaW5lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uSGVhZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhbmNob3InOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uQW5jaG9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NsZWVwZXInOlxuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlRG93blNsZWVwZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gbW91c2VBY3Rpb25Nb2RlLmRvd25PblNsZWVwZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEEgY2VydGFpbiBjb3B5IG9mIG1vdXNlRG93bkVsZW1lbnQgZm9yIGluZm8gZnJvbSBvcmlnaW5hbCBub2RlXG4gICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUNvcHkgPSBEZWVwQ2xvbmVJbmZvKHRoaXMuYWN0aW9uTW9kZSwgdGhpcy5tb3VzZURvd25FbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvd24gb24gYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uQmFja2dyb3VuZDtcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZURvd25CYWNrZ3JvdW5kLFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICApXG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLmFjdGlvbk1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UobW91c2VBY3Rpb25Nb2RlLmRvd25Pbk5vbmUpOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJIb3Zlck1vdmUuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25TbGVlcGVyKTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVyRHJhZ1NsZWVwZXJNb3ZlLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZShtb3VzZUFjdGlvbk1vZGUuZG93bk9uQW5jaG9yKTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVyRHJhZ0FuY2hvck1vdmUuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25CYWNrZ3JvdW5kKTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVyRHJhZ0JhY2tncm91bmRNb3ZlLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZShtb3VzZUFjdGlvbk1vZGUuZG93bk9uSGVhZCk6XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlckRyYWdIZWFkTW92ZS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVySG92ZXJNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCxcbiAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gRmluZCBsb2NhdGVkIG9iamVjdFxuICAgICAgICBjb25zdCBsb2NhdGVkT2JqZWN0ID0gQWN0aW9uVXRpbHMuZmluZExvY2F0ZWRPYmplY3QodGhpcy5jYW52YXMsIGxvY2F0aW9uKTtcbiAgICAgICAgaWYoISFsb2NhdGVkT2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGxvY2F0ZWRPYmplY3Q7XG4gICAgICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FuY2hvcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdjcm9zc2hhaXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzbGVlcGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsaW5lJzpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0luIGxpbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkJzpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0luIEhlYWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ2FsbC1zY3JvbGwnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgfVxuXG4gICAgX2hhbmRsZXJEcmFnU2xlZXBlck1vdmUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZHJhZ1NsZWVwZXJMaXN0ID0gQWN0aW9uVXRpbHMuZmluZERyYWdnZWRTbGVlcGVyKCk7XG5cbiAgICAgICAgLy8gTm8gbm9kZSBpcyBkcmFnZ2VkXG4gICAgICAgIGlmIChkcmFnU2xlZXBlckxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxjdWxhdGUgcmVsYXRpdmUgbW92ZSBkaXN0YW5jZVxuICAgICAgICBjb25zdCByZWxhdGl2ZU1vdmVEaXN0YW5jZSA9IHtcbiAgICAgICAgICAgIHg6IGV2ZW50Lm9mZnNldFggLSB0aGlzLm1vdXNlUG9zaXRpb25YLCBcbiAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFkgLSB0aGlzLm1vdXNlUG9zaXRpb25ZLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFNhdmUgY3VycmVudCBtb3VzZSBwb3Npc3Rpb25cbiAgICAgICAgdGhpcy5zZXRNb3VzZVBvc2l0aW9uKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIGFjdGlvbiBjb250cm9sbGVyXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VNb3ZlU2xlZXBlcixcbiAgICAgICAgICAgIGRyYWdTbGVlcGVyTGlzdCxcbiAgICAgICAgICAgIHJlbGF0aXZlTW92ZURpc3RhbmNlLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9oYW5kbGVyRHJhZ0FuY2hvck1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRlbXBvcmFyeUVkZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IFtzbGVlcGVyLCBzbGVlcGVyQW5jaG9yXSA9IHRoaXMubW91c2VEb3duRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0TG9hY3Rpb24gPSBzbGVlcGVyQW5jaG9yLmxvY2F0aW9uO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIHRlbXBvcmFyeSBlZ2RlIG9iamVjdFxuICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlID0gbmV3IEVkZ2UoKTtcbiAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZS5jaGFuZ2VTdGFydChzbGVlcGVyKTtcbiAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZS5zZXRMb2NhdGlvbignc3RhcnQnLCBzdGFydExvYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aGUgZW5kIGxvY2F0aW9uXG4gICAgICAgIGNvbnN0IGVuZExvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCwgXG4gICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZS5zZXRMb2NhdGlvbignZW5kJywgZW5kTG9jYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgLy8gU2F2ZSBjdXJyZW50IG1vdXNlIHBvc2lzdGlvblxuICAgICAgICB0aGlzLnNldE1vdXNlUG9zaXRpb24oZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9oYW5kbGVyRHJhZ0hlYWRNb3ZlKGV2ZW50KSB7XG4gICAgICAgIC8vIENhbGN1bGF0ZSByZWxhdGl2ZSBtb3ZlIGRpc3RhbmNlXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQb3Npc3Rpb24gPSB7XG4gICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLCBcbiAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFksXG4gICAgICAgIH07XG5cbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZU1vdmVIZWFkLFxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgY3VycmVudFBvc2lzdGlvbixcbiAgICAgICAgKVxuICAgIH1cblxuICAgIF9oYW5kbGVyRHJhZ0JhY2tncm91bmRNb3ZlKGV2ZW50KSB7XG4gICAgICAgIC8vIFRPRE86IENyZWF0ZSBzZWxlY3Rpb24gYm94XG4gICAgfVxuXG4gICAgaGFuZGxlTk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMuYWN0aW9uTW9kZSkge1xuICAgICAgICAgICAgY2FzZSAobW91c2VBY3Rpb25Nb2RlLmRvd25PblNsZWVwZXIpOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdTbGVlcGVyTGlzdCA9IEFjdGlvblV0aWxzLmZpbmREcmFnZ2VkU2xlZXBlcigpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3VzZSB1cCcsIHRoaXMubW91c2VEb3duRWxlbWVudC5pc0RyYWcpO1xuXG4gICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlVXBTbGVlcGVyLFxuICAgICAgICAgICAgICAgICAgICBkcmFnU2xlZXBlckxpc3QsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5Q29weSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAobW91c2VBY3Rpb25Nb2RlLmRvd25PbkFuY2hvcik6XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdE9iamVjdEFuY2hvciA9IEFjdGlvblV0aWxzLmZpbmRDbG9zZXN0QW5jaG9yKHtcbiAgICAgICAgICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZVVwQW5jaG9yLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5RWRnZSxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdE9iamVjdEFuY2hvcixcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKG1vdXNlQWN0aW9uTW9kZS5kb3duT25IZWFkKTpcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0T2JqZWN0SGVhZCA9IEFjdGlvblV0aWxzLmZpbmRDbG9zZXN0QW5jaG9yKHtcbiAgICAgICAgICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICghY2xvc2VzdE9iamVjdEhlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VuZCBkaXJlY3RseSB0byBVbmRvUmVkbyBzdGFjayAoTm90ZSBvbmx5IGhlYWQgaXMgc3BlaWNpYWwpXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLm1vdmVIZWFkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRW5kTG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5tb3VzZURvd25FbGVtZW50LmVuZExvY2F0aW9uLnggLSB0aGlzLnRlbXBvcmFyeUNvcHkueCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5tb3VzZURvd25FbGVtZW50LmVuZExvY2F0aW9uLnkgLSB0aGlzLnRlbXBvcmFyeUNvcHkueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZVVwSGVhZCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0T2JqZWN0SGVhZCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlDb3B5LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChtb3VzZUFjdGlvbk1vZGUuZG93bk9uQmFja2dyb3VuZCk6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCYWNrIHRvIGRlZmF1bHQgc3RhdHVzXG4gICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25Ob25lO1xuICAgICAgICB0aGlzLnRlbXBvcmFyeUNvcHkgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBjYWxsYmFjayBmb3IgZG91YmxlIGNsaWNrIG9wZXJhdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gZXZlbnQgXG4gICAgICovXG4gICAgaGFuZGxlTW91c2VEb3VibGVDbGljayhldmVudCkge1xuICAgICAgICAvLyBPbmx5IEFjdGl2ZSB3aGVuIGRvdWJsZSBjbGljayBvbiBzbGVlcGVyXG4gICAgICAgIGlmICghdGhpcy5tb3VzZURvd25FbGVtZW50IGluc3RhbmNlb2YgU2xlZXBlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBpZiB0aGUgbG9jYXRpb24gaXMgb24gdGhlIHRoYXQgc2xlZXBlclxuICAgICAgICBjb25zdCBpc0luVGhpc1NsZWVwZXIgPSB0aGlzLmNhbnZhc0NvbnRleHQuaXNQb2ludEluUGF0aChcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudC5jYW52YXNQYXRoLFxuICAgICAgICAgICAgZXZlbnQub2Zmc2V0WCxcbiAgICAgICAgICAgIGV2ZW50Lm9mZnNldFksXG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIGlmICghaXNJblRoaXNTbGVlcGVyIHx8IHRoaXMubW91c2VEb3duRWxlbWVudC5pc1RleHRNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBtb3VzZSBhY3Rpb24gbW9kZVxuICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uVGV4dDtcblxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlRG91YmxlQ2xpY2ssXG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VQcmV2ZW50UmlnaHRDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9ICAgXG59XG5cbmV4cG9ydCB7IE1vdXNlQWN0aW9uIH07IiwiaW1wb3J0IHsgXG4gICAgUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZSxcbiAgICBQYWludGVyRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFNsZWVwZXJQb29sZXIgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci1wb29sJztcbmltcG9ydCB7IFNsZWVwZXJzRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLWZhY3RvcnknO1xuXG5jbGFzcyBQYW5lbE9wZXJhdGlvbkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc2VyIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY2hhbmdlQWxsUHJvYmFiaWxpdHksXG4gICAgICAgICAgICByZXNldFNsZWVwZXJzLFxuICAgICAgICAgICAgcGFuZWxDcmVhdGVOb2RlLFxuICAgICAgICAgICAgcGFuZWxBY3RpdmUsXG4gICAgICAgIH0gPSBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lO1xuXG4gICAgICAgIC8vIE1ha2UgRXZlbnROYW1lLUhhbmRsZXIgTWFwXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFtjaGFuZ2VBbGxQcm9iYWJpbGl0eV0gPSB0aGlzLnByb2JDaGFuZ2VDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW3BhbmVsQ3JlYXRlTm9kZV0gPSB0aGlzLnBhbmVsQ3JlYXRlTm9kZUNvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbcmVzZXRTbGVlcGVyc10gPSB0aGlzLnJlc2V0Q29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFtwYW5lbEFjdGl2ZV0gPSB0aGlzLnBhbmVsQWN0aXZlQ29udHJvbGxlcjtcblxuICAgICAgICAvLyBJbml0IGV2ZW50IGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnROYW1lc01hcFtldmVudE5hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBhbGwgdGhlIHByb2Igd2l0aGluIGVhY2ggc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gcHJvYiBcbiAgICAgKi9cbiAgICBwcm9iQ2hhbmdlQ29udHJvbGxlcihwcm9iKSB7XG4gICAgICAgIC8vIENoYW5nZSB0aGUgZmFjdG9yeVxuICAgICAgICBTbGVlcGVyc0ZhY3RvcnkuY2hhbmdlUHJvYmFiaWxpdHkocHJvYik7XG5cbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBzbGVlcGVyXG4gICAgICAgIGZvcihjb25zdCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgc2xlZXBlci5wcm9iYWJpbGl0eSA9IHByb2I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBhbGwgdGhlIHNsZWVwZXIgc3RhdHVzXG4gICAgICovXG4gICAgcmVzZXRDb250cm9sbGVyKCkge1xuICAgICAgICBmb3IoY29uc3Qgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIGlmIChzbGVlcGVyLmlzU2xlZXBpbmcgIT09IHNsZWVwZXIuYmVmb3JlUHJvY2Vzc0lzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICBzbGVlcGVyLmNoYW5nZVNsZWVwaW5nU3RhdHVzKHNsZWVwZXIuYmVmb3JlUHJvY2Vzc0lzU2xlZXBpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBzbGVlcGVyIGZyb20gcGFuZWxcbiAgICAgKi9cbiAgICBwYW5lbENyZWF0ZU5vZGVDb250cm9sbGVyKG9iaiwgcG9zaXRpb24pIHtcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5jcmVhdGVOb2RlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjaXR2ZSBzbGVlcGVyIHdpdGggY29udGV4dCBtZWFudVxuICAgICAqL1xuICAgIHBhbmVsQWN0aXZlQ29udHJvbGxlcihzbGVlcGVyKSB7XG4gICAgICAgIC8vIEFjdGl2ZSBzbGVlcGVyXG4gICAgICAgIHNsZWVwZXIuY2hhbmdlU2xlZXBpbmdTdGF0dXMoKTtcbiAgICAgICAgc2xlZXBlci5iZWZvcmVQcm9jZXNzSXNTbGVlcGluZyA9IHNsZWVwZXIuaXNTbGVlcGluZztcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IFBhbmVsT3BlcmF0aW9uQ29udHJvbGxlciB9OyIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBTbGVlcGVyUG9vbGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItcG9vbCc7XG5pbXBvcnQge1xuICAgIFBhaW50ZXJFdmVudE5hbWUsXG4gICAgUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcblxuY2xhc3MgV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJvdW5kTnVtID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZVRpbWUgPSA3MDA7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVmcmVzaEludGVydmFsSWQgPSBudWxsO1xuICAgICAgICB0aGlzLmF3YWtlUXVldWUgPSBudWxsO1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc2VyIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgc3RhcnRXYWtpbmdQcm9jZXNzLFxuICAgICAgICAgICAgcGF1c2VXYWtpbmdQcm9jZXNzLFxuICAgICAgICB9ID0gUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZTtcblxuICAgICAgICAvLyBNYWtlIEV2ZW50TmFtZS1IYW5kbGVyIE1hcFxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbc3RhcnRXYWtpbmdQcm9jZXNzXSA9IHRoaXMuc3RhcnRXYWtpbmdQcm9jZXNzQ29udHJvbGxlci5iaW5kKHRoaXMpO1xuICAgICAgICBldmVudE5hbWVzTWFwW3BhdXNlV2FraW5nUHJvY2Vzc10gPSB0aGlzLnBhdXNlV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIuYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBJbml0IGV2ZW50IGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnROYW1lc01hcFtldmVudE5hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRBd2FrZVF1ZXVlKCkge1xuICAgICAgICBjb25zdCB0ZW1wUXVldWUgPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IHNsZWVwZXIgb2YgU2xlZXBlclBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBpZiAoIXNsZWVwZXIuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHRlbXBRdWV1ZS5wdXNoKHNsZWVwZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hd2FrZVF1ZXVlID0gdGVtcFF1ZXVlO1xuICAgIH1cbiAgICBcbiAgICBzdGFydFdha2luZ1Byb2Nlc3NDb250cm9sbGVyKCkge1xuICAgICAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0QXdha2VRdWV1ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBhd2FrZSBxdWV1ZTEnLCB0aGlzLmF3YWtlUXVldWUpO1xuXG4gICAgICAgIC8vIFNldCBpbnRlcnZhbFxuICAgICAgICB0aGlzLnJlZnJlc2hJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXdha2VRdWV1ZS5sZW5ndGggPiAwICYmICF0aGlzLmlzUGF1c2UpIHtcbiAgICAgICAgICAgICAgICAvLyBHbyBOZXh0IFJvdW5kXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzbGVlcGVyIG9mIHRoaXMuYXdha2VRdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdBY3RpdmVkU2xlZXBlciA9IHNsZWVwZXIuYWN0aXZlQ2hpbGQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hd2FrZVF1ZXVlID0gWy4uLnRoaXMuYXdha2VRdWV1ZSwgLi4ubmV3QWN0aXZlZFNsZWVwZXJdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF3YWtlUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgcm91bmQgbnVtYmVyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3VuZE51bSArPSAxO1xuXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hd2FrZVF1ZXVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUuZW5kV2FraW5nUHJvY2Vzc1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENsZWFyIGludGVydmFsXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnJlZnJlc2hJbnRlcnZhbElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5mcmFtZVRpbWUpO1xuICAgIH1cblxuICAgIHBhdXNlV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XG4gICAgfVxuXG4gICAgXG59XG5cbmV4cG9ydCB7IFdha2luZ1Byb2Nlc3NDb250cm9sbGVyIH07IiwiZXhwb3J0IGNvbnN0IERlZmF1bHRFZGdlV2VpZ2h0ID0gMC41O1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdFNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbiA9IHtcbiAgICBkcmF3VHlwZTogJ2NpcmNsZScsXG4gICAgeDogNTAwLFxuICAgIHk6IDUwMCxcbiAgICByYWRpdXM6IDMwLFxuICAgIHN0YXJ0QW5nbGU6IDAsXG4gICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuICAgIGlzRmlsbGVkOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyNDQUM5Q0MnLFxuICAgIGlzQm9yZGVyOiB0cnVlLFxuICAgIGJvcmRlcldpdGg6IDIsXG4gICAgYm9yZGVyQ29sb3I6ICcjMDAwMDAwJyxcbiAgICBpc0FuY2hvcjogZmFsc2UsXG4gICAgYWN0aXZlQm9yZGVyQ29sb3I6ICcjMDA2OEZGJyxcbn07XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0QXdha2VDYW52YXNJbmZvcm1hdGlvbiA9IHtcbiAgICBkcmF3VHlwZTogJ2NpcmNsZScsXG4gICAgeDogNTAwLFxuICAgIHk6IDUwMCxcbiAgICByYWRpdXM6IDMwLFxuICAgIHN0YXJ0QW5nbGU6IDAsXG4gICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuICAgIGlzRmlsbGVkOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyNGNTkxMjMnLFxuICAgIGlzQm9yZGVyOiB0cnVlLFxuICAgIGJvcmRlcldpdGg6IDIsXG4gICAgYm9yZGVyQ29sb3I6ICcjMDAwMDAwJyxcbiAgICBpc0FuY2hvcjogZmFsc2UsXG4gICAgYWN0aXZlQm9yZGVyQ29sb3I6ICcjMDA2OEZGJyxcbn07IiwiaW1wb3J0IHsgRWRnZVBvb2xFdmVudE5hbWUgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcblxuY2xhc3MgRWRnZVBvb2wge1xuICAgIC8qKlxuICAgICAqIEdldCBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgU2xlZXBlclBvb2xcbiAgICAgKiBAcmV0dXJucyB7RWRnZVBvb2x9XG4gICAgICovXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBFZGdlUG9vbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghRWRnZVBvb2wuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9vbCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmluaXRFdmVudHNIYW5kbGVyKCk7XG4gICAgICAgICAgICBFZGdlUG9vbC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gRWRnZVBvb2wuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciByZWxhdGVkIHRvIFNsZWVwZXIgUG9vbFxuICAgICAqL1xuICAgIGluaXRFdmVudHNIYW5kbGVyKCkge1xuICAgICAgICAvLyBSZWdpc3RlciBhZGRpbmcgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBFZGdlUG9vbEV2ZW50TmFtZS5hZGRFZGdlLCBcbiAgICAgICAgICAgIHRoaXMuYWRkRWRnZS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgc2xlZXBlciBvYmplY3QgaW50byBlZGdlIHBvb2xcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IHNsZWVwZXIgXG4gICAgICovXG4gICAgYWRkRWRnZShlZGdlKSB7XG4gICAgICAgIHRoaXMucG9vbC5wdXNoKGVkZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbiBlZGdlIGZyb20gZWRnZSBwb29sXG4gICAgICogQHBhcmFtIHsqfSBlZGdlIFxuICAgICAqL1xuICAgIHJlbW92ZUVkZ2UoZWRnZSkge1xuICAgICAgICBjb25zdCBsb2NhdGVkSW5kZXggPSB0aGlzLnBvb2wuZmluZEluZGV4KGVkZ2VJblBvb2wgPT4gZWRnZUluUG9vbCA9PT0gZWRnZSk7XG4gICAgICAgIGlmIChsb2NhdGVkSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2wuc3BsaWNlKGxvY2F0ZWRJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBFZGdlUG9vbGVyID0gRWRnZVBvb2wuZ2V0SW5zdGFuY2UoKTsiLCJpbXBvcnQgeyBEZWZhdWx0RWRnZVdlaWdodCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgXG4gICAgRWRnZVBvb2xFdmVudE5hbWUsIFxuICAgIEVkZ2VFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vc2xlZXBlci9zbGVlcGVyJztcbmltcG9ydCB7IEVkZ2VQb29sZXIgfSBmcm9tICcuL2VkZ2UtcG9vbCc7XG5cbmNsYXNzIEVkZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBEYXRhIGluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbmRTbGVlcGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy53ZWlnaHQgPSBudWxsO1xuXG4gICAgICAgIC8vIENhbnZhcyBwYXRoIGluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMuc3RhcnRMb2NhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZW5kTG9jYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmNhbnZhc1BhdGggPSBudWxsO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gSW5pdCBldmVudFxuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIEV2ZW50XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChFZGdlUG9vbEV2ZW50TmFtZS5hZGRFZGdlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlU29tZUVkZ2UsXG4gICAgICAgIH0gPSBFZGdlRXZlbnROYW1lO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFthY3RpdmVTb21lRWRnZV0gPSB0aGlzLmFjdGl2ZVNvbWVFZGdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgYWN0aXZlIHNvbWUgbm9kZSBoYW5kbGVyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnQgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudE5hbWVzTWFwW2V2ZW50XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHN0YXJ0IHNsZWVwZXIgb2JqZWN0XG4gICAgICogQHJldHVybnMge1NsZWVwZXJ9IFxuICAgICAqL1xuICAgIGdldFN0YXJ0U2xlZXBlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRTbGVlcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZW5kIHNsZWVwZXIgb2JqZWN0XG4gICAgICogQHJldHVybnMge1NsZWVwZXJ9IFxuICAgICAqL1xuICAgIGdldEVuZFNsZWVwZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZFNsZWVwZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB3ZWlnaHQgb24gdGhpcyBlZGdlXG4gICAgICogQHJldHVybnMge2Zsb2F0fVxuICAgICAqL1xuICAgIGdldFdlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2VpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgd2VpZ2h0IHRvIHRoZSBnaXZlbiB2YWx1ZVxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IG5ld1dlaWdodCBcbiAgICAgKi9cbiAgICBjaGFuZ2VXZWlnaHQobmV3V2VpZ2h0KSB7XG4gICAgICAgIHRoaXMud2VpZ2h0ID0gbmV3V2VpZ2h0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIHN0YXJ0IHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IG5ld1NsZWVwZXIgXG4gICAgICovXG4gICAgY2hhbmdlU3RhcnQobmV3U2xlZXBlcikge1xuICAgICAgICB0aGlzLnN0YXJ0U2xlZXBlciA9IG5ld1NsZWVwZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBlbmQgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gbmV3U2xlZXBlciBcbiAgICAgKi9cbiAgICBjaGFuZ2VFbmQobmV3U2xlZXBlcikge1xuICAgICAgICB0aGlzLmVuZFNsZWVwZXIgPSBuZXdTbGVlcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBzdGFydCBhbmQgZW5kIGxvY2F0aW9uXG4gICAgICovXG4gICAgc2V0TG9jYXRpb24odHlwZSwgbG9jYXRpb24pIHtcbiAgICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0TG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjYW52YXMgcGF0aFxuICAgICAqL1xuICAgIHNldENhbnZhc1BhdGgoZWRnZVBhdGgpIHtcbiAgICAgICAgdGhpcy5jYW52YXNQYXRoID0gZWRnZVBhdGg7XG4gICAgfVxuXG4gICAgYWN0aXZlU29tZUVkZ2UoZWRnZSkge1xuICAgICAgICBpZiAoZWRnZSA9PT0gdGhpcyAmJiB0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FjdGl2ZSAmJiBlZGdlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVTZWxmKCkge1xuICAgICAgICBFZGdlUG9vbGVyLnJlbW92ZUVkZ2UodGhpcyk7XG4gICAgICAgIC8vIERlbGV0ZSBpdCBpbiBzdGFydCBzbGVlcGVyXG4gICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyLnJlbW92ZUVkZ2UodGhpcyk7XG5cbiAgICAgICAgLy8gRGVsZXRlIGl0IGluIGVuZCBzbGVlcGVyXG4gICAgICAgIGlmICghIXRoaXMuZW5kU2xlZXBlcikge1xuICAgICAgICAgICAgdGhpcy5lbmRTbGVlcGVyLnJlbW92ZUluY29taW5nRWRnZSh0aGlzKTtcblxuICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSBjaGlsZCBvZiBzdGFydCBzbGVlcGVyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2xlZXBlci5yZW1vdmVDaGlsZCh0aGlzLmVuZFNsZWVwZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjb3ZlclNlbGYoKSB7XG4gICAgICAgIEVkZ2VQb29sZXIuYWRkRWRnZSh0aGlzKTtcbiAgICAgICAgLy8gUmVjb3ZlciBpdCBpbiBzdGFydCBzbGVlcGVyXG4gICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyLmFkZEVkZ2UodGhpcyk7XG5cbiAgICAgICAgLy8gUmVjb3ZlciBpdCBpbiBlbmQgc2xlZXBlclxuICAgICAgICBpZiAoISF0aGlzLmVuZFNsZWVwZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kU2xlZXBlci5hZGRJbmNvbWluZ0VkZ2UodGhpcyk7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgY2hpbGQgb2Ygc3RhcnQgc2xlZXBlclxuICAgICAgICAgICAgdGhpcy5zdGFydFNsZWVwZXIuYWRkQ2hpbGQodGhpcy5lbmRTbGVlcGVyKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBFZGdlIH07IiwiaW1wb3J0IHsgXG4gICAgRGVmYXVsdFNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbixcbiAgICBEZWZhdWx0QXdha2VDYW52YXNJbmZvcm1hdGlvbixcbiAgICBEZWZhdWx0QWN0aXZlSW5mb3JtYXRpb24sXG59IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBcbiAgICBQYWludGVyRXZlbnROYW1lLFxuICAgIFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4vc2xlZXBlcic7XG5pbXBvcnQgeyBTbGVlcGVyUG9vbGVyIH0gZnJvbSAnLi9zbGVlcGVyLXBvb2wnO1xuXG5jbGFzcyBTbGVlcGVyRmFjdG9yeSB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU2xlZXBlckZhY3RvcnkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdW50IGNhbnZhcyB3aGVuIGluaXRpYWxpemUsIG11c3QgbW91bnQgYmVmb3JlIGl0IGNhbiBiZSB1c2VkICEhIVxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmFzT2JqIFxuICAgICAqL1xuICAgIG1vdW50Q2FudmFzKGNhbnZhc09iaikge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc09iajtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFTbGVlcGVyRmFjdG9yeS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgLy8gSW5pdGlhbCBwYXJhbXNcbiAgICAgICAgICAgIHRoaXMuc2xlZXBlckNhbnZhc0luZm9ybWF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdFNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbik7XG4gICAgICAgICAgICB0aGlzLmF3YWtlQ2FudmFzSW5mb3JtYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0QXdha2VDYW52YXNJbmZvcm1hdGlvbik7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZm9ybWF0aW9uID0gRGVmYXVsdEFjdGl2ZUluZm9ybWF0aW9uO1xuICAgICAgICAgICAgdGhpcy5wcm9iID0gMC4wO1xuXG4gICAgICAgICAgICB0aGlzLmluaXRFdmVudHNIYW5kbGVyKCk7XG4gICAgICAgICAgICBTbGVlcGVyRmFjdG9yeS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xlZXBlckZhY3RvcnkuaW5zdGFuY2U7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBTbGVlcGVyIFBvb2xcbiAgICAgKi9cbiAgICBpbml0RXZlbnRzSGFuZGxlcigpIHtcbiAgICAgICAgLy8gUmVnaXN0ZXIgZm9yIG1ha2luZyBuZXcgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lLmNyZWF0ZU5vZGUsXG4gICAgICAgICAgICB0aGlzLm1ha2VOZXdTbGVlcGVyLmJpbmQodGhpcylcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBSZWdpc3RlciBmb3IgY2hhbmdlaW5nIHNsZWVwZXIgYW5kIGF3YWtlIHNsZWVwZXJzJyBzdHlsZVxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lLmNoYW5nZU5vZGVTdHlsZSxcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBzbGVlcGVyIGFuZCBhd2FrZSBzbGVlcGVycycgY2FudmFzIGluZm9ybWF0aW9uXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHR5cGUgMCBmb3Igc2xlZXBlciwgMSBmb3IgYXdha2Ugc2xlZXBlclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wZXJ0eU9iamVjdCBvYmplY3QgZm9yIGNoYW5nZVxuICAgICAqL1xuICAgIGNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHR5cGUsIHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgIGxldCBmb3JDaGFuZ2VkSW5mb3JtYXRpb24gPSAhIXR5cGUgPyB0aGlzLmF3YWtlQ2FudmFzSW5mb3JtYXRpb24gOiB0aGlzLnNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbjtcblxuICAgICAgICAvLyBJdGVyYXRlIHRoZSBhbGVyYXRpb24gYW5kIHVwZGF0ZVxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHByb3BlcnR5T2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgIGlmIChmb3JDaGFuZ2VkSW5mb3JtYXRpb25bcHJvcGVydHldICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGZvckNoYW5nZWRJbmZvcm1hdGlvbltwcm9wZXJ0eV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlIGNhbnZhcyBJbmZvcm1hdGlvblxuICAgICAgICBmb3IgKGxldCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgLy8gT25seSBjaGFuZ2UgY29ycmVzcG9uZGluZyBub2RlcyBcbiAgICAgICAgICAgIGlmICgoISF0eXBlKSBeIHNsZWVwZXIuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHNsZWVwZXIuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IGZvckNoYW5nZWRJbmZvcm1hdGlvbi5maWxsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBmb3JDaGFuZ2VkSW5mb3JtYXRpb24uYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhbnZhcyBpbmZvcm1hdGlvblxuICAgICAqIEBwYXJhbSB7aW50fSB0eXBlIDAgZm9yIHNsZWVwZXIsIDEgZm9yIGF3YWtlIHNsZWVwZXJcbiAgICAgKi9cbiAgICBnZXRDYW52YXNJbmZvcm1hdGlvbih0eXBlKSB7XG4gICAgICAgIHJldHVybiAhIXR5cGUgPyB0aGlzLmF3YWtlQ2FudmFzSW5mb3JtYXRpb24gOiB0aGlzLnNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgY29uZmlnIHByb2JhYmlsaXR5IHRvIGF3YWtlIG90aGVyIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IHR5cGUgXG4gICAgICovXG4gICAgY2hhbmdlUHJvYmFiaWxpdHkocHJvYikge1xuICAgICAgICB0aGlzLnByb2IgPSBwcm9iO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2UgbmV3IHNsZWVwZXIgdG8gc2xlZXBlciBwb29sXG4gICAgICogQHBhcmFtIHtpbnR9IHR5cGUgMCBmb3Igc2xlZXBlciwgMSBmb3IgYXdha2Ugc2xlZXBlclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwb3NpdGlvbiBsb2NhdGlvbiB0byBtYWtlIG5ldyBzbGVlcGVyXG4gICAgICovXG4gICAgbWFrZU5ld1NsZWVwZXIodHlwZSwgcG9zaXRpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZScpO1xuICAgICAgICAvLyBHZXQgc2xlZXAgc3RhdHVzXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9ICF0eXBlO1xuXG4gICAgICAgIC8vIEdldCBjYW52YXMgaW5mb3JtYXRpb25cbiAgICAgICAgY29uc3QgY2FudmFzSW5mb3JtYXRpb24gPSAhIXR5cGUgPyBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmF3YWtlQ2FudmFzSW5mb3JtYXRpb24pIDogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zbGVlcGVyQ2FudmFzSW5mb3JtYXRpb24pO1xuXG4gICAgICAgIC8vIFNldCBwb3NpaXRpb25cbiAgICAgICAgaWYgKCEhcG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhbnZhc0luZm9ybWF0aW9uLnggPSBwb3NpdGlvbi54O1xuICAgICAgICAgICAgY2FudmFzSW5mb3JtYXRpb24ueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWtlIG5ldyBzbGVlcGVyXG4gICAgICAgIGNvbnN0IHRlbXBTbGVlcGVyID0gbmV3IFNsZWVwZXIoXG4gICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICBjYW52YXNJbmZvcm1hdGlvbixcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRlbXBTbGVlcGVyLnByb2JhYmlsaXR5ID0gdGhpcy5wcm9iO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFNsZWVwZXJzRmFjdG9yeSA9IFNsZWVwZXJGYWN0b3J5LmdldEluc3RhbmNlKCk7XG5cbiIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBcbiAgICBTbGVlcGVyUG9vbEV2ZW50TmFtZSxcbiAgICBTbGVlcGVyRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuXG5jbGFzcyBTbGVlcGVyUG9vbCB7XG4gICAgLyoqXG4gICAgICogR2V0IHNpbmdsZXRvbiBpbnN0YW5jZSBvZiBTbGVlcGVyUG9vbFxuICAgICAqIEByZXR1cm5zIHtTbGVlcGVyUG9vbH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFNsZWVwZXJQb29sKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFTbGVlcGVyUG9vbC5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5wb29sID0gW107XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaW5pdEV2ZW50c0hhbmRsZXIoKTtcbiAgICAgICAgICAgIFNsZWVwZXJQb29sLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTbGVlcGVyUG9vbC5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBldmVudCBoYW5kbGVyIHJlbGF0ZWQgdG8gU2xlZXBlciBQb29sXG4gICAgICovXG4gICAgaW5pdEV2ZW50c0hhbmRsZXIoKSB7XG4gICAgICAgIC8vIFJlZ2lzdGVyIGFkZGluZyBzbGVlcGVyXG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFNsZWVwZXJQb29sRXZlbnROYW1lLmFkZFNsZWVwZXIsIFxuICAgICAgICAgICAgdGhpcy5hZGRTbGVlcGVyLmJpbmQodGhpcylcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBSZWdpc3RlciBhY3RpdmUgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBTbGVlcGVyRXZlbnROYW1lLmFjdGl2ZVNvbWVTbGVlcGVyLFxuICAgICAgICAgICAgdGhpcy5yZU9yZGVyU2xlZXBlci5iaW5kKHRoaXMpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBzbGVlcGVyIG9iamVjdCBpbnRvIHNsZWVwZXIgcG9vbFxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gc2xlZXBlciBcbiAgICAgKi9cbiAgICBhZGRTbGVlcGVyKHNsZWVwZXIpIHtcbiAgICAgICAgdGhpcy5wb29sLnB1c2goc2xlZXBlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgZ2l2ZW4gc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlciBcbiAgICAgKi9cbiAgICByZW1vdmVTbGVlcGVyKHNsZWVwZXIpIHtcbiAgICAgICAgY29uc3QgbG9jYXRlZEluZGV4ID0gdGhpcy5wb29sLmZpbmRJbmRleChzbGVlcGVySW5Qb29sID0+IHNsZWVwZXJJblBvb2wgPT09IHNsZWVwZXIpO1xuICAgICAgICBpZiAobG9jYXRlZEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wb29sLnNwbGljZShsb2NhdGVkSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVPcmRlclNsZWVwZXIoc2xlZXBlcikge1xuICAgICAgICBjb25zdCBzbGVlcGVySW5kZXggPSB0aGlzLnBvb2wuZmluZEluZGV4KHNsZWVwZXJJblBvb2wgPT4gc2xlZXBlckluUG9vbCAgPT09IHNsZWVwZXIpO1xuICAgICAgICB0aGlzLnBvb2wuc3BsaWNlKHNsZWVwZXJJbmRleCwgMSk7XG4gICAgICAgIHRoaXMucG9vbCA9IFsuLi50aGlzLnBvb2wsIHNsZWVwZXJdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFNsZWVwZXJQb29sZXIgPSBTbGVlcGVyUG9vbC5nZXRJbnN0YW5jZSgpOyIsImltcG9ydCB7IFxuICAgIFBhaW50ZXJFdmVudE5hbWUsXG4gICAgU2xlZXBlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZXZlbnRcIjtcblxuY2xhc3MgVGV4dFNsZWVwZXJUZW1wU3RhY2sge1xuICAgIGNvbnN0cnVjdG9yKG9yaWdpblRleHQpIHtcbiAgICAgICAgdGhpcy5wb2ludGVyID0gMDtcbiAgICAgICAgdGhpcy5zdGFja0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5zdGFja0xpc3QucHVzaChvcmlnaW5UZXh0KTtcbiAgICB9XG5cbiAgICBnZXQgdGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tMaXN0W3RoaXMucG9pbnRlcl07XG4gICAgfVxuXG4gICAgc2V0IHRleHQodmFsKSB7XG4gICAgICAgIHRoaXMucG9pbnRlciArPSAxO1xuICAgICAgICB0aGlzLnN0YWNrTGlzdC5wdXNoKHZhbCk7XG4gICAgfVxuXG4gICAgdW5kbygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9pbnRlciA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnRlciAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVkbygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9pbnRlciA8IHRoaXMuc3RhY2tMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnRlciArPSAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNsYXNzIFRleHRTbGVlcGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc1RleHRNb2RlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2V0IGZvciBkZWZhdWx0IHRleHQgY29uZmlnXG4gICAgICAgIHRoaXMudGV4dEluZm9ybWF0aW9uID0ge1xuICAgICAgICAgICAgc2l6ZTogMTUsXG4gICAgICAgICAgICBzdHlsZTogJ1RpbWVzIE5ldyBSb21hbicsXG4gICAgICAgICAgICBjb250ZW50OiAnYScsXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGV4dGFyZWFJbmZvcm1hdGlvbiA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudGV4dGFyZWFCb3VuZGluZ0JveFBhdGggPSBudWxsO1xuXG4gICAgICAgIC8vIFJlaWdpc3RlciBmb3IgdGV4dCB0ZW1wIHN0YWNrXG4gICAgICAgIHRoaXMudGV4dFRlbXBTdGFjayA9IG51bGw7XG5cbiAgICAgICAgdGhpcy50ZXh0SW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIHRleHRJbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlU29tZVNsZWVwZXJUZXh0TW9kZSxcbiAgICAgICAgfSA9IFNsZWVwZXJFdmVudE5hbWU7XG5cbiAgICAgICAgY29uc3QgZXZlbnROYW1lc01hcCA9IHt9O1xuICAgICAgICBldmVudE5hbWVzTWFwW2FjdGl2ZVNvbWVTbGVlcGVyVGV4dE1vZGVdID0gdGhpcy5zdGFydFRleHRNb2RlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgYWN0aXZlIHNvbWUgbm9kZSBoYW5kbGVyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnQgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudE5hbWVzTWFwW2V2ZW50XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzdGFydCB0aGUgdGV4dCBtb2RlXG4gICAgICovXG4gICAgc3RhcnRUZXh0TW9kZShzbGVlcGVyKSB7XG4gICAgICAgIGlmIChzbGVlcGVyID09IHRoaXMgJiYgdGhpcy5pc1RleHRNb2RlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5pc1RleHRNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGV4dFRlbXBTdGFjayA9IG5ldyBUZXh0U2xlZXBlclRlbXBTdGFjayh0aGlzLnRleHRJbmZvcm1hdGlvbi5jb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzVGV4dE1vZGUgJiYgc2xlZXBlciAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5pc1RleHRNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRleHRUZW1wU3RhY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZW5kIHRoZSB0ZXh0IG1vZGVcbiAgICAgKi9cbiAgICBlbmRUZXh0TW9kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUZXh0TW9kZSkge1xuICAgICAgICAgICAgdGhpcy5pc1RleHRNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRleHRUZW1wU3RhY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgdGV4dCBcbiAgICAgKi9cbiAgICBkcmF3VGV4dCgpIHtcbiAgICAgICAgLy8gR2V0IHNsZWVwZXIgY2VudGVyXG4gICAgICAgIGNvbnN0IHRleHRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzSW5mb3JtYXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzSW5mb3JtYXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBHZXQgbWF4IHdpZHRoXG4gICAgICAgIGNvbnN0IHRleHRNYXhXaWR0aCA9IHRoaXMuY2FudmFzSW5mb3JtYXRpb24ucmFkaXVzICogTWF0aC5zcXJ0KDMpO1xuICAgICAgICBcbiAgICAgICAgLy8gRHJhdyB0aGUgdGV4dFxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnRleHRXcml0ZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGV4dFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiB0ZXh0TWF4V2lkdGgsXG4gICAgICAgICAgICAgICAgaW5mb3JtYXRpb246IHRoaXMudGV4dEluZm9ybWF0aW9uLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dE9yVGV4dGFyZWFJbmZvcm1hdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIHRleHRlcmFcbiAgICAgKi9cbiAgICBkcmF3VGV4dEFyZWEoKSB7XG4gICAgICAgIC8vIE9ubHkgZHJhdyBpdCB3aGVuIHRleHRtb2RlIGlzIG9uXG4gICAgICAgIGlmICghdGhpcy5pc1RleHRNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgU2xlZXBlciBjZW50ZXJcbiAgICAgICAgY29uc3Qgc2xlZXBlclBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jYW52YXNJbmZvcm1hdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXNJbmZvcm1hdGlvbi55LFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIERyYXcgdGhlIHRleHRcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNsZWVwZXJQb3NpdGlvbixcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uOiB0aGlzLnRleHRhcmVhSW5mb3JtYXRpb24sXG4gICAgICAgICAgICAgICAgZHJhd1R5cGU6ICd0ZXh0YXJlYScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5fc2V0VGV4dGFyZWFQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRleHQgLyB0ZXh0YXJlYSBpbmZvcm1hdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gcHJvcGVydHlPYmplY3QgXG4gICAgICogQHBhcmFtIHsqfSB0eXBlIFxuICAgICAqL1xuICAgIHNldFRleHRPclRleHRhcmVhSW5mb3JtYXRpb24ocHJvcGVydHlPYmplY3QsIHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgIT09ICd0ZXh0JyAmJiB0eXBlICE9PSAndGV4dGFyZWEnKSB7XG4gICAgICAgICAgICBFcnJvcignV3JvbmcgdHlwZSB3aGVuIHNldHRpbmcgdGV4dCAvIHRleHRhcmUgaW5mb3JtYXRpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvclNldE9iamVjdCA9ICh0eXBlID09ICd0ZXh0JykgPyB0aGlzLnRleHRJbmZvcm1hdGlvbiA6IHRoaXMudGV4dGFyZWFJbmZvcm1hdGlvbjtcblxuICAgICAgICAvLyBJdGVyYXRlIHRoZSBhbGVyYXRpb24gYW5kIHVwZGF0ZVxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHByb3BlcnR5T2JqZWN0W3Byb3BlcnR5XTtcblxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICYmIGZvclNldE9iamVjdFtwcm9wZXJ0eV0gIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZm9yU2V0T2JqZWN0W3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRHJhdyB0ZXh0IGFyZWEgd2hlbiBcbiAgICAgICAgaWYgKHR5cGUgPT0gJ3RleHRhcmVhJykge1xuICAgICAgICAgICAgdGhpcy5kcmF3VGV4dEFyZWEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBib3VuZGluZyBib3ggcGF0aFxuICAgICAqIEBwYXJhbSB7Kn0gYm91bmRpbmdCb3hQYXRoIFxuICAgICAqL1xuICAgIF9zZXRUZXh0YXJlYVBhdGgoYm91bmRpbmdCb3hQYXRoKSB7XG4gICAgICAgIHRoaXMudGV4dGFyZWFCb3VuZGluZ0JveFBhdGggPSBib3VuZGluZ0JveFBhdGg7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUZXh0U2xlZXBlciB9OyIsImltcG9ydCB7IEVkZ2UgfSBmcm9tICcuLi9lZGdlL2VkZ2UnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IGdldEFjdGl2aXR5QnlXZWlnaHQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9tYXRoLXV0aWxzJztcbmltcG9ydCB7IFxuICAgIERlZmF1bHRTbGVlcGVyQ2FudmFzSW5mb3JtYXRpb24sXG4gICAgRGVmYXVsdEFjdGl2ZUluZm9ybWF0aW9uLFxufSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgXG4gICAgU2xlZXBlckV2ZW50TmFtZSxcbiAgICBTbGVlcGVyUG9vbEV2ZW50TmFtZSxcbiAgICBQYWludGVyRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgVGV4dFNsZWVwZXIgfSBmcm9tICcuL3NsZWVwZXItdGV4dCc7IFxuaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4uL3NsZWVwZXIvc2xlZXBlci1wb29sJztcbmltcG9ydCB7IFNsZWVwZXJzRmFjdG9yeSB9IGZyb20gJy4vc2xlZXBlci1mYWN0b3J5JztcblxuY2xhc3MgU2xlZXBlciBleHRlbmRzIFRleHRTbGVlcGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXMsIGNhbnZhc0luZm9ybWF0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pc1NsZWVwaW5nID0gc3RhdHVzO1xuICAgICAgICB0aGlzLmJlZm9yZVByb2Nlc3NJc1NsZWVwaW5nID0gc3RhdHVzO1xuXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RyYWcgPSBmYWxzZTtcblxuICAgICAgICAvLyBQcm9iYWJpbGl0eSB0byBhY3RpdmUgb3RoZXJzXG4gICAgICAgIHRoaXMucHJvYmFiaWxpdHkgPSAwLjA7XG5cbiAgICAgICAgdGhpcy5lZGdlTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmluY29taW5nRWRnZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jaGlsZEVkZ2VNYXBMaXN0ID0gW107XG5cbiAgICAgICAgdGhpcy5jYW52YXNJbmZvcm1hdGlvbiA9IGNhbnZhc0luZm9ybWF0aW9uIHx8IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRTbGVlcGVyQ2FudmFzSW5mb3JtYXRpb24pO1xuICAgICAgICB0aGlzLmNhbnZhc1BhdGggPSBudWxsO1xuICAgICAgICB0aGlzLmNhbnZhc0FuY2hvcnNQYXRoTGlzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgRXZlbnRcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFNsZWVwZXJQb29sRXZlbnROYW1lLmFkZFNsZWVwZXIsIHRoaXMpO1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLmZpZ3VyZURyYXcsIFxuICAgICAgICAgICAgdGhpcy5jYW52YXNJbmZvcm1hdGlvbiwgXG4gICAgICAgICAgICB0aGlzLnNldENhbnZhc1BhdGguYmluZCh0aGlzKSxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBEcmF3IHRoZSB0ZXh0XG4gICAgICAgIHRoaXMuZHJhd1RleHRBcmVhKCk7XG4gICAgICAgIHRoaXMuZHJhd1RleHQoKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnTmV3IFNsZWVwZXInLCB0aGlzKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlU29tZVNsZWVwZXIsXG4gICAgICAgIH0gPSBTbGVlcGVyRXZlbnROYW1lO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFthY3RpdmVTb21lU2xlZXBlcl0gPSB0aGlzLmNoYW5nZUFjdGl2ZVN0YXR1cy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGFjdGl2ZSBzb21lIG5vZGUgaGFuZGxlclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnROYW1lc01hcFtldmVudF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgY2hpbGQgbm9kZSBmb3IgY3VycmVudCBzbGVlcGVyXG4gICAgICogQHBhcmFtIHtTbGVlcGVyfSBjaGlsZFNsZWVwZXIgXG4gICAgICovXG4gICAgYWRkQ2hpbGQoY2hpbGRTbGVlcGVyKSB7XG4gICAgICAgIGlmICghY2hpbGRTbGVlcGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIEFkZENoaWxkIEVycm9yOiBObyBjaGlsZHJlbiBpcyBnaXZlbiEnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LnB1c2goY2hpbGRTbGVlcGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBnaXZlbiBjaGlsZCBzbGVlcGVyIFxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gY2hpbGRTbGVlcGVyIFxuICAgICAqL1xuICAgIHJlbW92ZUNoaWxkKGNoaWxkU2xlZXBlcikge1xuICAgICAgICBjb25zdCBleHBlY3RDaGlsZEluZGV4ID0gdGhpcy5jaGlsZHJlbkxpc3QuZmluZEluZGV4KFxuICAgICAgICAgICAgY2hpbGRPYmplY3QgPT4gY2hpbGRPYmplY3QgPT09IGNoaWxkU2xlZXBlclxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRocm93IEVycm9yIHdoZW4gbm90IGZpbmQgdGhlIGNoaWxkXG4gICAgICAgIGlmIChleHBlY3RDaGlsZEluZGV4ID09PSAtMSB8fCBleHBlY3RDaGlsZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1NsZWVwZXIgUmVtb3ZlQ2hpbGQgRXJyb3I6IE5vdCBmaW5kIHRoZSBjaGlsZCEnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjaGlsZFxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5zcGxpY2UoZXhwZWN0Q2hpbGRJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgZWRnZSBmb3IgY3VycmVudCBzbGVlcGVyIFxuICAgICAqIEBwYXJhbSB7RWRnZX0gZWRnZSBFZGdlIG9iamVjdCBcbiAgICAgKi9cbiAgICBhZGRFZGdlKGVkZ2UpIHtcbiAgICAgICAgaWYgKCFlZGdlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIGFkZEVkZ2UgRXJyb3I6IE5vIGVkZ2UgaXMgZ2l2ZW4hJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVkZ2VMaXN0LnB1c2goZWRnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgZWRnZSBmb3IgY3VycmVudCBzbGVlcGVyIFxuICAgICAqIEBwYXJhbSB7RWRnZX0gZWRnZSBFZGdlIG9iamVjdFxuICAgICAqL1xuICAgIHJlbW92ZUVkZ2UoZWRnZSkge1xuICAgICAgICBjb25zdCBleHBlY3RFZGdlSW5kZXggPSB0aGlzLmVkZ2VMaXN0LmZpbmRJbmRleChcbiAgICAgICAgICAgIGVkZ2VPYmplY3QgPT4gZWRnZU9iamVjdCA9PT0gZWRnZVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRocm93IEVycm9yIHdoZW4gbm90IGZpbmQgdGhlIGNoaWxkXG4gICAgICAgIGlmIChleHBlY3RFZGdlSW5kZXggPT09IC0xIHx8IGV4cGVjdEVkZ2VJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIFJlbW92ZUVkZ2UgRXJyb3I6IE5vdCBmaW5kIHRoZSBlZGdlIScpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGNoaWxkXG4gICAgICAgIHRoaXMuZWRnZUxpc3Quc3BsaWNlKGV4cGVjdEVkZ2VJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgaW5jb21pbmcgZWRnZSBmb3IgY3VycmVudCBzbGVlcGVyXG4gICAgICovXG4gICAgYWRkSW5jb21pbmdFZGdlKGVkZ2UpIHtcbiAgICAgICAgaWYgKCFlZGdlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIGFkZEluY29taW5nRWRnZSBFcnJvcjogTm8gZWRnZSBpcyBnaXZlbiEnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5jb21pbmdFZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGluY29taW5nIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlciBcbiAgICAgKiBAcGFyYW0geyp9IGVkZ2UgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcmVtb3ZlSW5jb21pbmdFZGdlKGVkZ2UpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0RWRnZUluZGV4ID0gdGhpcy5pbmNvbWluZ0VkZ2VMaXN0LmZpbmRJbmRleChcbiAgICAgICAgICAgIGVkZ2VPYmplY3QgPT4gZWRnZU9iamVjdCA9PT0gZWRnZVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRocm93IEVycm9yIHdoZW4gbm90IGZpbmQgdGhlIGNoaWxkXG4gICAgICAgIGlmIChleHBlY3RFZGdlSW5kZXggPT09IC0xIHx8IGV4cGVjdEVkZ2VJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIFJlbW92ZUluY29taW5nRWRnZSBFcnJvcjogTm90IGZpbmQgdGhlIGVkZ2UhJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGNoaWxkXG4gICAgICAgIHRoaXMuaW5jb21pbmdFZGdlTGlzdC5zcGxpY2UoZXhwZWN0RWRnZUluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGN1cnJlbnQgbm9kZSBzdGF0dXNcbiAgICAgKi9cbiAgICBjaGFuZ2VTbGVlcGluZ1N0YXR1cyhhcmdzKSB7XG4gICAgICAgIC8vIElmIG5vdCBwYXNzIHN0YXR1cyB0aGVuIHJldmVyc2UgY3VycmVudCBzdGF0dXNcbiAgICAgICAgaWYgKGFyZ3MgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2xlZXBpbmcgPSAhdGhpcy5pc1NsZWVwaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1NsZWVwaW5nID0gYXJncztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQ2hhbmdlIGNhbnZhcyBpbmZvcm1hdGlvblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcixcbiAgICAgICAgICAgIGZpbGxDb2xvclxuICAgICAgICB9ID0gU2xlZXBlcnNGYWN0b3J5LmdldENhbnZhc0luZm9ybWF0aW9uKCF0aGlzLmlzU2xlZXBpbmcpO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24oe1xuICAgICAgICAgICAgYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICBmaWxsQ29sb3IsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyeSB0byBhY3RpdmUgdGhlIGNoaWxkcmVuIG5vZGVzXG4gICAgICovXG4gICAgYWN0aXZlQ2hpbGQoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBBY3RpdmVkQ2hpbGRMaXN0ID0gW107XG5cbiAgICAgICAgLy8gQWN0aXZlIHRoZSBjaGlsZHJlbiBpbiBvcmRlclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5mb3JFYWNoKGNoaWxkT2JqZWN0ID0+IHtcbiAgICAgICAgICAgIC8vIE9ubHkgbG9va2luZyBmb3Igc2xlZXBpbmcgbm9kZVxuICAgICAgICAgICAgaWYgKCFjaGlsZE9iamVjdC5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB3ZWlnaHQgPSBjaGlsZE9iamVjdC5wcm9iYWJpbGl0eTtcblxuICAgICAgICAgICAgLy8gQ2hhbmdlIHRoZSBjaGlsZCBzdGF0dXMgaWYgYWN0aXZlXG4gICAgICAgICAgICBpZiAoZ2V0QWN0aXZpdHlCeVdlaWdodCh3ZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRPYmplY3QuY2hhbmdlU2xlZXBpbmdTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICB0ZW1wQWN0aXZlZENoaWxkTGlzdC5wdXNoKGNoaWxkT2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlbXBBY3RpdmVkQ2hpbGRMaXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY2FudmFzIHBhdGhcbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhc1BhdGhPYmplY3QgY2FudmFzIHBhdGggb2JqZWN0XG4gICAgICovXG4gICAgc2V0Q2FudmFzUGF0aChhcmdzKSB7XG4gICAgICAgIGNvbnN0IFtjYW52YXNQYXRoT2JqZWN0LCBhbmNob3JzTGlzdF0gPSBhcmdzO1xuICAgICAgICB0aGlzLmNhbnZhc1BhdGggPSBjYW52YXNQYXRoT2JqZWN0O1xuXG4gICAgICAgIGlmICghIWFuY2hvcnNMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0FuY2hvcnNQYXRoTGlzdCA9IGFuY2hvcnNMaXN0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHNsZWVwZXIgYWN0aXZlIHN0YXR1c1xuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlciB0aGUgZXZlbnQgcmVjaWV2ZWQgc2xlZXByIG9iamVjdCwgbm90ZSB0aGF0IGl0IG1heSBiZSBvdGhlciBzbGVlcGVyc1xuICAgICAqL1xuICAgIGNoYW5nZUFjdGl2ZVN0YXR1cyhzbGVlcGVyKSB7XG4gICAgICAgIGlmIChzbGVlcGVyID09PSB0aGlzICYmIHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBTZWxlY3QgdGhpcyBzbGVlcGVyIGFuZCBhY3RpdmUgaXRzZWxmXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24oe1xuICAgICAgICAgICAgICAgIGlzQW5jaG9yOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FjdGl2ZSAmJiBzbGVlcGVyICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAvLyBTZWxlY3Qgb3RoZXIgc2xlZXBlciB0aGVuIGluYWN0aXZlIGl0c2VsZlxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc1RleHRNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHtcbiAgICAgICAgICAgICAgICBpc0FuY2hvcjogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gU2V0IGRyYWcgZmxhZ1xuICAgICAgICBpZihzbGVlcGVyID09PSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLnN3aXRjaERyYWdTdGF0dXMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpc2RyYWcnLCB0aGlzLmlzRHJhZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgc2xlZXBlciBkcmFnIHN0YXR1c1xuICAgICAqL1xuICAgIHN3aXRjaERyYWdTdGF0dXMoKSB7XG4gICAgICAgIHRoaXMuaXNEcmFnID0gIXRoaXMuaXNEcmFnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBTbGVlcGVyIGNhbnZhcyBpbmZvcm1hdGlvbiBhbmQgdHJpZ2dlciB0aGUgcGFpbnRlciBldmVudFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wZXJ0eU9iamVjdFxuICAgICAqL1xuICAgIGNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgIC8vIEl0ZXJhdGUgdGhlIGFsZXJhdGlvbiBhbmQgdXBkYXRlXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gcHJvcGVydHlPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcHJvcGVydHlPYmplY3RbcHJvcGVydHldO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FudmFzSW5mb3JtYXRpb25bcHJvcGVydHldICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzSW5mb3JtYXRpb25bcHJvcGVydHldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgbm9uLXJlbGF0ZWQgZmFjdG9yIHdpdGhpbiB0aGlzIHNsZWVwZXIgZm9yIHBhc3RlXG4gICAgICovXG4gICAgcHJlcGFyZUZvclBhc3RlKCkge1xuICAgICAgICAvLyBUT0RPOiBNYXkgbmVlZCB0byBjaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIGl0XG5cbiAgICAgICAgLy8gUmVtb3ZlIGl0cyBlZGdlcyBhbmQgaW4tb3V0IHNsZWVwZXJcbiAgICAgICAgdGhpcy5lZGdlTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmluY29taW5nRWRnZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jaGlsZEVkZ2VNYXBMaXN0ID0gW107XG5cbiAgICAgICAgLy8gQ2hhbmdlIHN0YXR1c1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0RyYWcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgaXRzZWxmIFxuICAgICAqL1xuICAgIGRlbGV0ZVNlbGYoKSB7XG4gICAgICAgIFNsZWVwZXJQb29sZXIucmVtb3ZlU2xlZXBlcih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWNvdmVyIGl0c2VsZlxuICAgICAqL1xuICAgIHJlY292ZXJTZWxmKCkge1xuICAgICAgICBTbGVlcGVyUG9vbGVyLmFkZFNsZWVwZXIodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBTbGVlcGVyIH07IiwiaW1wb3J0IHsgTW91c2VBY3Rpb25Db250cm9sbGVyIH0gZnJvbSAnLi4vYWN0aW9uLWxheWVyL21vdXNlL21vdXNlLWFjdGlvbi1jb250cm9sbGVyJztcbmltcG9ydCB7IE1vdXNlQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9uLWxheWVyL21vdXNlL21vdXNlLWFjdGlvbic7XG5pbXBvcnQgeyBLZXlib2FyZEFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9rZXlib2FyZC9rZXlib2FyZC1hY3Rpb24nO1xuaW1wb3J0IHsgS2V5Ym9hcmRBY3Rpb25Db250cm9sbGVyIH0gZnJvbSAnLi4vYWN0aW9uLWxheWVyL2tleWJvYXJkL2tleWJvYXJkLWFjdGlvbi1jb250cm9sbGVyJztcbmltcG9ydCB7IEdsb2JhbENvbmZpZyB9IGZyb20gJy4uLy4uL2dsb2JhbC9nbG9iYWwtY29uZmlnJztcbmltcG9ydCB7IFBhaW50ZXIgfSBmcm9tICcuL3BhaW50ZXIvcGFpbnRlcic7XG5pbXBvcnQgeyBVbmRvUmVkbyB9IGZyb20gJy4uLy4uL3VuZG8tcmVkby91bmRvLXJlZG8nO1xuaW1wb3J0IHsgU2xlZXBlcnNGYWN0b3J5IH0gZnJvbSAnLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBQYW5lbE9wZXJhdGlvbkNvbnRyb2xsZXIgfSBmcm9tICcuLi9hY3Rpb24tbGF5ZXIvcGFuZWwvcGFuZWwtb3BlcmF0aW9uLWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIgfSBmcm9tICcuLi9hY3Rpb24tbGF5ZXIvd2FraW5nLXByb2Nlc3Mvd2FraW5nLXByb2Nlc3MtY29udHJvbGxlcic7XG5cbmNsYXNzIENhbnZhcyB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDYW52YXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIUNhbnZhcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICBDYW52YXMuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gQ2FudmFzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgY2FudmFzIGluc3RhbmNlXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmluaXRQYWludGVyKCk7XG4gICAgICAgIHRoaXMuaW5pdEFjdGlvblJlbGF0ZWQoKTtcbiAgICAgICAgdGhpcy5pbml0VW5kb1JlZG9TdGFjaygpO1xuICAgICAgICB0aGlzLmluaXRTbGVlcGVyRmFjdG9yeSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgY2FudmFzIGNvbnRleHRcbiAgICAgKi9cbiAgICBpbml0Q29udGV4dCgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChHbG9iYWxDb25maWcuY2FudmFzSWQpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gR2xvYmFsQ29uZmlnLnBhbmRlbFdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBHbG9iYWxDb25maWcuaGVhZGVySGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgY2FudmFzIHBhaW50ZXJcbiAgICAgKi9cbiAgICBpbml0UGFpbnRlcigpIHtcbiAgICAgICAgdGhpcy5wYWludGVyID0gbmV3IFBhaW50ZXIodGhpcy5jYW52YXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgY2FudmFzIGFjdGlvbiByZWxhdGVkXG4gICAgICovXG4gICAgaW5pdEFjdGlvblJlbGF0ZWQoKSB7XG4gICAgICAgIHRoaXMubW91c2VBY3Rpb25Db250cm9sbGVyID0gbmV3IE1vdXNlQWN0aW9uQ29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLm1vdXNlQWN0aW9uID0gbmV3IE1vdXNlQWN0aW9uKHRoaXMuY2FudmFzKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZEFjdGlvbkNvbnRyb2xsZXIgPSBuZXcgS2V5Ym9hcmRBY3Rpb25Db250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpb24gPSBuZXcgS2V5Ym9hcmRBY3Rpb24odGhpcy5jYW52YXMsIHRoaXMubW91c2VBY3Rpb24pO1xuICAgICAgICB0aGlzLnBhbmVsT3BlcmF0aW9uQ29udHJvbGxlciA9IG5ldyBQYW5lbE9wZXJhdGlvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy53YWtpbmdQcm9jZXNzQ29udHJvbGxlciA9IG5ldyBXYWtpbmdQcm9jZXNzQ29udHJvbGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgVW5kb1JlZG9TdGFja1xuICAgICAqL1xuICAgIGluaXRVbmRvUmVkb1N0YWNrKCkge1xuICAgICAgICBVbmRvUmVkby5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgc2xlZXBlciBmYWN0b3J5XG4gICAgICovXG4gICAgaW5pdFNsZWVwZXJGYWN0b3J5KCkge1xuICAgICAgICBTbGVlcGVyc0ZhY3RvcnkubW91bnRDYW52YXModGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDYW52YXMgfTsiLCJleHBvcnQgY29uc3QgRGVhZnVsdEFuY2hvclNldHRpbmcgPSB7XG4gICAgbGluZVdpZHRoOiAyLFxuICAgIGxpbmVDb2xvcjogJ2JsYWNrJyxcbiAgICBhbmNob3JSYWRpdXM6IDQsXG59O1xuXG5leHBvcnQgY29uc3QgRGVhZnVsdEFycm93U2V0dGluZyA9IHtcbiAgICBoZWFkTGVuZ3RoOiAxMCxcbiAgICBsaW5lV2lkdGg6IDIsXG4gICAgbGluZUNvbG9yOiAnYmxhY2snLFxufTtcblxuZXhwb3J0IGNvbnN0IEFjdGl2ZUFycm93U2V0dGluZyA9IHtcbiAgICBsaW5lV2lkdGg6IDMsIFxuICAgIGxpbmVDb2xvcjogJyMwMDY4RkYnLFxufTtcblxuZXhwb3J0IGNvbnN0IERlYWZhdWx0Qm91bmRpbmdCb3hTZXR0aW5nID0ge1xuICAgIGxpbmVXaWR0aDogMixcbiAgICBsaW5lQ29sb3I6ICcjMzM2NkZGJyxcbn0gIiwiaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFBhaW50ZXJFdmVudE5hbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgXG4gICAgRGVhZnVsdEFuY2hvclNldHRpbmcsXG4gICAgRGVhZnVsdEFycm93U2V0dGluZyxcbiAgICBEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZyxcbiAgICBBY3RpdmVBcnJvd1NldHRpbmcsXG59IGZyb20gJy4vY29uZmlnJztcblxuY2xhc3MgRmlndXJlUGFpbnRlciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjYW52YXNDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQgPSBjYW52YXNDb250ZXh0O1xuICAgICAgICB0aGlzLmRyYXdNYXAgPSB7XG4gICAgICAgICAgICAnY2lyY2xlJzogdGhpcy5kcmF3Q2lyY2xlLmJpbmQodGhpcyksXG4gICAgICAgICAgICAnYXJyb3cnOiB0aGlzLmRyYXdBcnJvdy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ3RleHRhcmVhJzogdGhpcy5kcmF3VGV4dGFyZWEuYmluZCh0aGlzKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciByZWxhdGVkIHRvIFBhaW50ZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LCB0aGlzLmRyYXcuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgY29ycmVzcG9uZCBpbWFnZXMgZ2l2ZW4gcmVsYXRlZCBpbmZvcm1hdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICAgICAqIEByZXR1cm5zIHsqfSBjYW52YXMgcGF0aFxuICAgICAqL1xuICAgIGRyYXcocGFyYW1zLCBzZXRQYXRoQ2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgeyBkcmF3VHlwZSB9ID0gcGFyYW1zO1xuXG4gICAgICAgIC8vIFJhaXNlIHRoZSBlcnJvciBpZiB0aGUgc2hhcGUgbm90IGluY2x1ZGVkIFxuICAgICAgICBpZiAoIShkcmF3VHlwZSBpbiB0aGlzLmRyYXdNYXApKSB7XG4gICAgICAgICAgICByZXR1cm4gRXJyb3IoJ0ZpZ3VyZSBEcmF3IEVycm9yOiBHaXZlbiB0eXBlIG5vdCBmb3VuZCEnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gRHJhdyB0aGUgY29ycmVzcG9uZCBzaGFwZSBhbmQgc2V0IHRoZSBwYXRoIHRvIHRoZSBzbGVlcGVyXG4gICAgICAgIHNldFBhdGhDYWxsYmFjayh0aGlzLmRyYXdNYXBbZHJhd1R5cGVdKHBhcmFtcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXcgY2lybGUgb24gY2FudmFzXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgZHJhd0NpcmNsZShwYXJhbXMpIHtcbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgZHJhd2luZyBwYXJhbWV0ZXJzXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgcmFkaXVzLFxuICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgaXNGaWxsZWQsXG4gICAgICAgICAgICBpc0JvcmRlcixcbiAgICAgICAgICAgIGJvcmRlcldpdGgsXG4gICAgICAgICAgICBib3JkZXJDb2xvcixcbiAgICAgICAgICAgIGlzQW5jaG9yLFxuICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3IsXG4gICAgICAgIH0gPSBwYXJhbXM7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgY2lyY2xlXG4gICAgICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBQYXRoMkQoKTtcbiAgICAgICAgY2lyY2xlLmFyYyhcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgcmFkaXVzLFxuICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgLy8gRmlsbCB0aGUgY2lyY2xlXG4gICAgICAgIGNvbnN0IGZpbGxDb2xvciA9IHBhcmFtc1snZmlsbENvbG9yJ107XG4gICAgICAgIGlmIChpc0ZpbGxlZCAmJiBmaWxsQ29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsU3R5bGUgPSBmaWxsQ29sb3I7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbChjaXJjbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgYm9yZGVyXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEhKFxuICAgICAgICAgICAgICAgIGlzQm9yZGVyXG4gICAgICAgICAgICAgICAgJiYgYm9yZGVyV2l0aFxuICAgICAgICAgICAgICAgICYmIGJvcmRlckNvbG9yXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmxpbmVXaWR0aCA9IGJvcmRlcldpdGg7XG4gICAgICAgICAgICBpZiAoaXNBbmNob3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBhY3RpdmVCb3JkZXJDb2xvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2UoY2lyY2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERyYXcgdGhlIGFuY2hvclxuICAgICAgICBjb25zdCBhbmNob3JzUGF0aExpc3QgPSBbXTtcbiAgICAgICAgaWYgKGlzQW5jaG9yKSB7XG4gICAgICAgICAgICAvLyBTZXQgc3Ryb2tlIHN0eWxlXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQubGluZVdpZHRoID0gRGVhZnVsdEFuY2hvclNldHRpbmcubGluZVdpZHRoO1xuXG4gICAgICAgICAgICBjb25zdCBhbmNob3JQb3NpdGlvbkxpc3QgPSBbXG4gICAgICAgICAgICAgICAge3g6IHggKyByYWRpdXMsIHk6IHl9LFxuICAgICAgICAgICAgICAgIHt4OiB4IC0gcmFkaXVzLCB5OiB5fSxcbiAgICAgICAgICAgICAgICB7eDogeCwgeTogeSArIHJhZGl1c30sXG4gICAgICAgICAgICAgICAge3g6IHgsIHk6IHkgLSByYWRpdXN9LFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBhbmNob3JQb3NpdGlvbiBvZiBhbmNob3JQb3NpdGlvbkxpc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBEZWFmdWx0QW5jaG9yU2V0dGluZy5saW5lQ29sb3I7XG4gICAgICAgICAgICAgICAgY29uc3Qge3ggLHl9ID0gYW5jaG9yUG9zaXRpb247XG4gICAgICAgICAgICAgICAgY29uc3QgYW5jaG9yUGF0aCA9IG5ldyBQYXRoMkQoKTtcbiAgICAgICAgICAgICAgICBhbmNob3JQYXRoLmFyYyhcbiAgICAgICAgICAgICAgICAgICAgeCwgXG4gICAgICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgICAgIERlYWZ1bHRBbmNob3JTZXR0aW5nLmFuY2hvclJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlKGFuY2hvclBhdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsKGFuY2hvclBhdGgpO1xuICAgICAgICAgICAgICAgIGFuY2hvcnNQYXRoTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbY2lyY2xlLCBhbmNob3JzUGF0aExpc3RdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXcgYXJyb3cgb24gY2FudmFzXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gICAgICovXG4gICAgZHJhd0Fycm93KHBhcmFtcykge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgc3RhcnRMb2NhdGlvbixcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLFxuICAgICAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgIH0gPSBwYXJhbXM7XG5cbiAgICAgICAgLy8gSWYgb25seSBvbmUgbG9jYXRpb24gcHJvdmlkZWQsIHRoZW4gc2V0IHRoZSBvdGhlciB0aGUgc2FtZVxuICAgICAgICBpZighc3RhcnRMb2NhdGlvbikge1xuICAgICAgICAgICAgc3RhcnRMb2NhdGlvbiA9IGVuZExvY2F0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKCFlbmRMb2NhdGlvbikge1xuICAgICAgICAgICAgZW5kTG9jYXRpb24gPSBzdGFydExvY2F0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKFxuICAgICAgICAgICAgZW5kTG9jYXRpb24ueSAtIHN0YXJ0TG9jYXRpb24ueSwgXG4gICAgICAgICAgICBlbmRMb2NhdGlvbi54IC0gc3RhcnRMb2NhdGlvbi54XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gU2V0IHN0cm9rZSBzdHlsZVxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBpc0FjdGl2ZSA/IFxuICAgICAgICAgICAgQWN0aXZlQXJyb3dTZXR0aW5nLmxpbmVDb2xvciA6XG4gICAgICAgICAgICBEZWFmdWx0QXJyb3dTZXR0aW5nLmxpbmVDb2xvcjtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmxpbmVXaWR0aCA9IGlzQWN0aXZlID8gXG4gICAgICAgICAgICBBY3RpdmVBcnJvd1NldHRpbmcubGluZVdpZHRoIDpcbiAgICAgICAgICAgIERlYWZ1bHRBcnJvd1NldHRpbmcubGluZVdpZHRoO1xuXG4gICAgICAgIGNvbnN0IGxpbmUgPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgIGNvbnN0IGhlYWQgPSBuZXcgUGF0aDJEKCk7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgbGluZSBcbiAgICAgICAgbGluZS5tb3ZlVG8oc3RhcnRMb2NhdGlvbi54LCBzdGFydExvY2F0aW9uLnkpO1xuICAgICAgICBsaW5lLmxpbmVUbyhlbmRMb2NhdGlvbi54LCBlbmRMb2NhdGlvbi55KTtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZShsaW5lKTtcblxuICAgICAgICAvLyBEcmF3IHRoZSBoZWFkXG4gICAgICAgIGhlYWQubW92ZVRvKFxuICAgICAgICAgICAgZW5kTG9jYXRpb24ueCAtIERlYWZ1bHRBcnJvd1NldHRpbmcuaGVhZExlbmd0aCAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDYpLFxuICAgICAgICAgICAgZW5kTG9jYXRpb24ueSAtIERlYWZ1bHRBcnJvd1NldHRpbmcuaGVhZExlbmd0aCAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpXG4gICAgICAgICk7XG4gICAgICAgIGhlYWQubGluZVRvKGVuZExvY2F0aW9uLngsIGVuZExvY2F0aW9uLnkpO1xuICAgICAgICBoZWFkLmxpbmVUbyhcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnggLSBEZWFmdWx0QXJyb3dTZXR0aW5nLmhlYWRMZW5ndGggKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA2KSxcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnkgLSBEZWFmdWx0QXJyb3dTZXR0aW5nLmhlYWRMZW5ndGggKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyA2KVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlKGhlYWQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtsaW5lLCBoZWFkfTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgdGV4dGFyZWFcbiAgICAgKiBAcGFyYW0geyp9IHBhcmFtcyBcbiAgICAgKi9cbiAgICBkcmF3VGV4dGFyZWEocGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNsZWVwZXJQb3NpdGlvbixcbiAgICAgICAgICAgIHRleHRhcmVhSW5mb3JtYXRpb24sXG4gICAgICAgIH0gPSBwYXJhbXM7XG5cbiAgICAgICAgY29uc3QgYm91bmRpbmdCb3hQYXRoID0gbmV3IFBhdGgyRCgpO1xuXG4gICAgICAgIGJvdW5kaW5nQm94UGF0aC5yZWN0KFxuICAgICAgICAgICAgc2xlZXBlclBvc2l0aW9uLnggLSB0ZXh0YXJlYUluZm9ybWF0aW9uLndpZHRoIC8gMixcbiAgICAgICAgICAgIHNsZWVwZXJQb3NpdGlvbi55IC0gdGV4dGFyZWFJbmZvcm1hdGlvbi5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgdGV4dGFyZWFJbmZvcm1hdGlvbi53aWR0aCxcbiAgICAgICAgICAgIHRleHRhcmVhSW5mb3JtYXRpb24uaGVpZ2h0LFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5saW5lV2lkdGggPSBEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZy5saW5lV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2VTdHlsZSA9IERlYWZhdWx0Qm91bmRpbmdCb3hTZXR0aW5nLmxpbmVDb2xvcjtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZShib3VuZGluZ0JveFBhdGgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGJvdW5kaW5nQm94UGF0aDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEZpZ3VyZVBhaW50ZXIgfTsiLCJpbXBvcnQgeyBGaWd1cmVQYWludGVyIH0gZnJvbSAnLi9maWd1cmUvcGFpbnRlcic7XG5pbXBvcnQgeyBUZXh0UGFpbnRlciB9IGZyb20gJy4vdGV4dC9wYWludGVyJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBTbGVlcGVyUG9vbGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItcG9vbCc7XG5pbXBvcnQgeyBFZGdlUG9vbGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9lZGdlL2VkZ2UtcG9vbCc7XG5pbXBvcnQgeyBQYWludGVyRXZlbnROYW1lIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcblxuY2xhc3MgUGFpbnRlciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIC8vIEluaXQgZGlmZmVyZW50IHBhaW50ZXJcbiAgICAgICAgdGhpcy5pbml0UGFpbnRlcigpO1xuXG4gICAgICAgIC8vIEluaXQgZXZlbnRlciBoYW5kbGVyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBQYWludGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFBhaW50ZXJFdmVudE5hbWUucmVwYWludCwgdGhpcy5yZXBhaW50LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGluaXRQYWludGVyKCkge1xuICAgICAgICB0aGlzLmZpZ3VyZSA9IG5ldyBGaWd1cmVQYWludGVyKHRoaXMuY2FudmFzLCB0aGlzLmNhbnZhc0NvbnRleHQpO1xuICAgICAgICB0aGlzLnRleHQgPSBuZXcgVGV4dFBhaW50ZXIodGhpcy5jYW52YXMsIHRoaXMuY2FudmFzQ29udGV4dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwYWludCBhbGwgY2FudmFzIG9iamVjdFxuICAgICAqL1xuICAgIHJlcGFpbnQoKSB7XG4gICAgICAgIC8vIENsZWFuIHRoZSBjYW52YXNcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBJdGVyYXRlIHRvIGRyYXcgdGhlIHNsZWVwZXJcbiAgICAgICAgZm9yIChjb25zdCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgLy8gVE9ETzogTWFrZSBpdCBhcyBhIGZ1bmN0aW9uIG9mIHNsZWVwZXJcbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLmZpZ3VyZURyYXcsXG4gICAgICAgICAgICAgICAgc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbixcbiAgICAgICAgICAgICAgICBzbGVlcGVyLnNldENhbnZhc1BhdGguYmluZChzbGVlcGVyKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gUmV3cml0ZSB0aGUgdGV4dFxuICAgICAgICAgICAgc2xlZXBlci5kcmF3VGV4dCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0byBkcmF3IHRoZSBlZGdlXG4gICAgICAgIGZvciAoY29uc3QgZWRnZSBvZiBFZGdlUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLmZpZ3VyZURyYXcsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkcmF3VHlwZTogJ2Fycm93JyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRMb2NhdGlvbjogZWRnZS5zdGFydExvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICBlbmRMb2NhdGlvbjogZWRnZS5lbmRMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IGVkZ2UuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlZGdlLnNldENhbnZhc1BhdGguYmluZChlZGdlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgUGFpbnRlciB9OyIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBQYWludGVyRXZlbnROYW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcblxuY2xhc3MgVGV4dFBhaW50ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY2FudmFzQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gY2FudmFzQ29udGV4dDtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciByZWxhdGVkIHRvIFBhaW50ZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoUGFpbnRlckV2ZW50TmFtZS50ZXh0V3JpdGUsIHRoaXMud3JpdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGUgdGhlIHRleHQgZm9sbG93IHRoZSBwYXJhbXMgZ2l2ZW5cbiAgICAgKiBAcGFyYW0geyp9IHBhcmFtcyBcbiAgICAgKiBAcGFyYW0geyp9IHNldFBhdGhDYWxsYmFjayBcbiAgICAgKi9cbiAgICB3cml0ZShwYXJhbXMsIHNldFRleHRhcmVhQ2FsbGJhY2spIHtcbiAgICAgICAgLy8gUGFyc2UgY29uZmlndXJhdGlvbnNcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICBtYXhXaWR0aCxcbiAgICAgICAgICAgIGluZm9ybWF0aW9uLFxuICAgICAgICB9ID0gcGFyYW1zO1xuXG4gICAgICAgIC8vIEdldCBzaXplXG4gICAgICAgIGxldCBzaXplID0gaW5mb3JtYXRpb24uc2l6ZSB8fCAnMTInO1xuICAgICAgICBzaXplICs9ICdweCdcblxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZm9udCA9IGAke3NpemV9ICR7aW5mb3JtYXRpb24uc3R5bGV9YDtcbiAgICAgICAgXG4gICAgICAgIC8vIFByZXBhcmUgd3JpdGluZyB0ZXh0IHBhcmFtc1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gaW5mb3JtYXRpb24uY29sb3I7XG4gICAgICAgIGNvbnN0IGZpbGxJbmZvID0gdGhpcy5fZ2V0RmlsbExpc3QocG9zaXRpb24sIGluZm9ybWF0aW9uLmNvbnRlbnQsIG1heFdpZHRoKTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsbExpc3QsXG4gICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uLFxuICAgICAgICB9ID0gZmlsbEluZm87XG5cbiAgICAgICAgLy8gU2V0IGNhbGxiYWNrIHRvIGRyYXcgdGhlIHRleHRhcmVhIGZpcnN0XG4gICAgICAgIHNldFRleHRhcmVhQ2FsbGJhY2sodGV4dGFyZWFJbmZvcm1hdGlvbiwgJ3RleHRhcmVhJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBXcml0ZSB0ZXh0XG4gICAgICAgIGZvciAobGV0IHRleHQgb2YgZmlsbExpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsVGV4dCh0ZXh0WzBdLCB0ZXh0WzFdLCB0ZXh0WzJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBmaWxsIGxpc3QgZm9yIHNpbmdsZSAvIG11bHRpcGxlIGxpbmVzXG4gICAgICogQHBhcmFtIHsqfSBwb3NpdGlvbiBzbGVlcGVyIGNlbnRlclxuICAgICAqIEBwYXJhbSB7Kn0gY29udGVudCB0ZXh0IGNvbnRlbnRcbiAgICAgKiBAcGFyYW0geyp9IG1heFdpZHRoIHByZWRlZmluZWQgbWF4aW1hbCB3aWR0aFxuICAgICAqIEByZXR1cm5zIGZpbGxpbmcgbGlzdCBhbmQgdGV4dGFyZWEgaW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBfZ2V0RmlsbExpc3QocG9zaXRpb24sIGNvbnRlbnQsIG1heFdpZHRoKSB7ICAgICBcbiAgICAgICAgbGV0IG1ldHJpY3MgPSB0aGlzLmNhbnZhc0NvbnRleHQubWVhc3VyZVRleHQoY29udGVudCk7XG4gICAgICAgIGxldCBmaWxsTGlzdCA9IFtdXG5cbiAgICAgICAgaWYgKG1ldHJpY3Mud2lkdGggPCBtYXhXaWR0aCkge1xuICAgICAgICAgICAgLy8gR2V0IHRleHQgbG9jYXRpb24gaW5mb3JtYXRpb25cbiAgICAgICAgICAgIGxldCB4ID0gcG9zaXRpb24ueCAtIG1ldHJpY3Mud2lkdGggLyAyO1xuICAgICAgICAgICAgbGV0IHkgPSBwb3NpdGlvbi55ICsgKG1ldHJpY3MuYWN0dWFsQm91bmRpbmdCb3hBc2NlbnQgKyBtZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCkgLyAyO1xuXG4gICAgICAgICAgICAvLyBHZXQgdGV4dGFyZWEgbG9jYXRpb24gaW5mb3JtYXRpb25cbiAgICAgICAgICAgIGxldCB0ZXh0YXJlYUluZm9ybWF0aW9uID0gIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAobWV0cmljcy5mb250Qm91bmRpbmdCb3hBc2NlbnQgKyBtZXRyaWNzLmZvbnRCb3VuZGluZ0JveERlc2NlbnQpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZmlsbExpc3QucHVzaChbY29udGVudCwgeCwgeV0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmaWxsTGlzdCxcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IEZvciBtdWx0aXBsZSBsaW5lc1xuICAgICAgICByZXR1cm4gZmlsbExpc3Q7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUZXh0UGFpbnRlciB9OyIsImV4cG9ydCBjb25zdCBTbGVlcGVyRXZlbnROYW1lID0ge1xuICAgIGFjdGl2ZVNvbWVTbGVlcGVyOiAnYWN0aXZlU29tZVNsZWVwZXInLFxuICAgIGFjdGl2ZVNvbWVTbGVlcGVyVGV4dE1vZGU6ICdhY3RpdmVTb21lU2xlZXBlclRleHRNb2RlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBFZGdlRXZlbnROYW1lID0ge1xuICAgIGFjdGl2ZVNvbWVFZGdlOiAnYWN0aXZlU29tZUVkZ2UnLFxufVxuXG5leHBvcnQgY29uc3QgU2xlZXBlclBvb2xFdmVudE5hbWUgPSB7XG4gICAgYWRkU2xlZXBlcjogJ2FkZFNsZWVwZXInLFxufTtcblxuZXhwb3J0IGNvbnN0IEVkZ2VQb29sRXZlbnROYW1lID0ge1xuICAgIGFkZEVkZ2U6ICdhZGRFZGdlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBQYWludGVyRXZlbnROYW1lID0ge1xuICAgIGZpZ3VyZURyYXc6ICdmaWd1cmVEcmF3JyxcbiAgICB0ZXh0V3JpdGU6ICd0ZXh0V3JpdGUnLFxuICAgIHJlcGFpbnQ6ICdyZXBhaW50Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lID0ge1xuICAgIG1vdXNlRG93blNsZWVwZXI6ICdtb3VzZURvd25TbGVlcGVyJyxcbiAgICBtb3VzZURvd25MaW5lOiAnbW91c2VEb3duTGluZScsXG4gICAgbW91c2VEb3duQmFja2dyb3VuZDogJ21vdXNlRG93bkJhY2tncm91bmQnLFxuICAgIG1vdXNlTW92ZVNsZWVwZXI6ICdtb3VzZU1vdmUnLFxuICAgIG1vdXNlTW92ZUFuY2hvcjogJ21vdXNlTW92ZUFuY2hvcicsXG4gICAgbW91c2VNb3ZlSGVhZDogJ21vdXNlTW92ZUhlYWQnLFxuICAgIG1vdXNlVXBTbGVlcGVyOiAnbW91c2VVcFNsZWVwZXInLFxuICAgIG1vdXNlVXBBbmNob3I6ICdtb3VzZVVwQW5jaG9yJyxcbiAgICBtb3VzZVVwSGVhZDogJ21vdXNlVXBIZWFkJyxcbiAgICBtb3VzZURvdWJsZUNsaWNrOiAnbW91c2VEb3VibGVDbGljaycsXG4gICAgbW91c2VSaWdodENsaWNrOiAnbW91c2VSaWdodENsaWNrJyxcbiAgICBrZXlib2FyZERlbGV0ZTogJ2tleWJvYXJkRGVsZXRlJyxcbiAgICBrZXlib2FyZENvcHk6ICdrZXlib2FyZENvcHknLFxuICAgIGtleWJvYXJkUGFzdGU6ICdrZXlib2FyZFBhc3RlJyxcbiAgICBrZXlib2FyZFRleHREZWxldGU6ICdrZXlib2FyZFRleHREZWxldGUnLFxuICAgIGtleWJvYXJkSW5wdXQ6ICdrZXlib2FyZElucHV0JyxcbiAgICBrZXlib2FyZFRleHRSZWRvOiAna2V5Ym9hcmRUZXh0UmVkbycsXG4gICAga2V5Ym9hcmRUZXh0VW5kbzogJ2tleWJvYXJkVGV4dFVuZG8nLFxufTtcblxuZXhwb3J0IGNvbnN0IFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUgPSB7XG4gICAgY2xvc2VDb2xvclBpY2tlcjogJ2Nsb3NlQ29sb3JQaWNrZXInLFxuICAgIGNyZWF0ZU5vZGU6ICdjcmVhdGVOb2RlJyxcbiAgICBwYW5lbENyZWF0ZU5vZGU6ICdwYW5lbENyZWF0ZU5vZGUnLFxuICAgIGNoYW5nZU5vZGVTdHlsZTogJ2NoYW5nZU5vZGVTdHlsZScsXG4gICAgY2hhbmdlQWxsUHJvYmFiaWxpdHk6ICdjaGFuZ2VBbGxQcm9iYWJpbGl0eScsXG4gICAgc3RhcnRXYWtpbmdQcm9jZXNzOiAnc3RhcnRXYWtpbmdQcm9jZXNzJyxcbiAgICBwYXVzZVdha2luZ1Byb2Nlc3M6ICdwYXVzZVdha2luZ1Byb2Nlc3MnLFxuICAgIGVuZFdha2luZ1Byb2Nlc3M6ICdlbmRXYWtpbmdQcm9jZXNzJyxcbiAgICByZXNldFNsZWVwZXJzOiAncmVzZXRTbGVlcGVycycsXG4gICAgcGFuZWxBY3RpdmU6ICdwYW5lbEFjdGl2ZScsXG59O1xuXG5leHBvcnQgY29uc3QgVW5kb1JlZG9FdmVudE5hbWUgPSB7XG4gICAgYWRkTXV0YXRpb246ICdhZGRNdXRhdGlvbicsXG4gICAgdW5kbzogJ3VuZG8nLFxuICAgIHJlZG86ICdyZWRvJyxcbn07IiwiZXhwb3J0IGNvbnN0IEdsb2JhbENvbmZpZyA9IHtcbiAgICBjYW52YXNJZDogJ215Q2FudmFzJyxcbiAgICBoZWFkZXJIZWlnaHQ6IDY2LFxuICAgIHBhbmRlbFdpZHRoOiAzMDAsXG59OyIsImV4cG9ydCBjb25zdCBTYXZlZE9wZXJhdGlvbiA9IHtcbiAgICBtb3ZlU2xlZXBlcjogJ21vdmVTbGVlcGVyJyxcbiAgICBhZGRFZGdlRnJvbUFuY2hvcjogJ2FkZEVkZ2VGcm9tQW5jaG9yJyxcbiAgICBtb3ZlSGVhZDogJ21vdmVIZWFkJyxcbiAgICBkZWxldGU6ICdkZWxldGUnLFxuICAgIHBhc3RlOiAncGFzdGUnLFxufTsiLCJpbXBvcnQgeyBTYXZlZE9wZXJhdGlvbiB9IGZyb20gJy4vb3BlcmF0aW9uJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBQYWludGVyRXZlbnROYW1lIH0gZnJvbSAnLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IFNsZWVwZXIgfSBmcm9tICcuLi9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyJztcblxuLyoqXG4gKiBSZWRvIGNvbnRyb2xsZXIgdG8gYWN0dWFsbHkgZGVhbCB3aXRoIHRoZSByZWRvaW5nIHRoZSB0YXNrc1xuICogQHBhcmFtIHsqfSB0YXNrIFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZWRvQ29udHJvbGxlcih0YXNrKSB7XG4gICAgY29uc3Qge1xuICAgICAgICBvYmplY3QsXG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgIH0gPSB0YXNrO1xuXG4gICAgc3dpdGNoKG9wZXJhdGlvbikge1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5tb3ZlU2xlZXBlcik6XG4gICAgICAgICAgICByZWRvTW92ZVNsZWVwZXIob2JqZWN0LCBwYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLmFkZEVkZ2VGcm9tQW5jaG9yKTpcbiAgICAgICAgICAgIHJlZG9Nb3ZlQW5jaG9yKG9iamVjdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5tb3ZlSGVhZCk6XG4gICAgICAgICAgICByZWRvTW92ZUhlYWQob2JqZWN0LCBwYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLmRlbGV0ZSk6XG4gICAgICAgICAgICByZWRvRGVsZXRlSXRlbXMob2JqZWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5wYXN0ZSk6XG4gICAgICAgICAgICByZWRvUGFzdGUob2JqZWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICApO1xufVxuXG5cbi8qKlxuICogUmVkbyBtb3ZlIHNsZWVwZXIgb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBSZWNpZXZlZCBjdXJyZW50IHNsZWVwZXIgbm9kZVxuICogQHBhcmFtIHsqfSBwYXJhbXMgb3BlcmF0aW9uIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gcmVkb01vdmVTbGVlcGVyKG9iamVjdCwgcGFyYW1zKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBvYmplY3QuY2FudmFzSW5mb3JtYXRpb25cbiAgICBjb25zdCB7IGNoYW5nZUxvY2F0aW9uIH0gPSBwYXJhbXM7XG4gICAgY29uc3QgcmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICB4OiB4ICsgY2hhbmdlTG9jYXRpb24ueCxcbiAgICAgICAgeTogeSArIGNoYW5nZUxvY2F0aW9uLnksXG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHNsZWVwZXIgY2FudmFzIGxvY2F0aW9uXG4gICAgb2JqZWN0LmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHJlY292ZXJMb2NhdGlvbik7XG5cbiAgICAvLyBDaGFuZ2UgdGhlIGNvbm5lY3RlZCBvdXRjb21pbmcgZWRnZXMnIGxvY2F0aW9uXG4gICAgZm9yIChjb25zdCBlZGdlIG9mIG9iamVjdC5lZGdlTGlzdCkge1xuICAgICAgICBjb25zdCBlZGdlUmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZWRnZS5zdGFydExvY2F0aW9uLnggKyBjaGFuZ2VMb2NhdGlvbi54LFxuICAgICAgICAgICAgeTogZWRnZS5zdGFydExvY2F0aW9uLnkgKyBjaGFuZ2VMb2NhdGlvbi55LFxuICAgICAgICB9O1xuXG4gICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oXG4gICAgICAgICAgICAnc3RhcnQnLFxuICAgICAgICAgICAgZWRnZVJlY292ZXJMb2NhdGlvbixcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIGluY29taW5nIGVkZ2VzJyBsb2NhdGlvblxuICAgIGZvciAoY29uc3QgZWRnZSBvZiBvYmplY3QuaW5jb21pbmdFZGdlTGlzdCkge1xuICAgICAgICBjb25zdCBlZGdlUmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZWRnZS5lbmRMb2NhdGlvbi54ICsgY2hhbmdlTG9jYXRpb24ueCxcbiAgICAgICAgICAgIHk6IGVkZ2UuZW5kTG9jYXRpb24ueSArIGNoYW5nZUxvY2F0aW9uLnksXG4gICAgICAgIH07XG5cbiAgICAgICAgZWRnZS5zZXRMb2NhdGlvbihcbiAgICAgICAgICAgICdlbmQnLFxuICAgICAgICAgICAgZWRnZVJlY292ZXJMb2NhdGlvbixcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVkbyBtb3ZlIGFuY2hvciBvcGVyYXRpb25cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFJlY2lldmVkIGVkZ2Ugb2JqZWN0XG4gKiBAcGFyYW0geyp9IHBhcmFtcyB0aGUgc2xlZXBlciBub2RlIHdoZXJlIHRoZSBlZGdlIHN0YXJ0XG4gKi9cbmZ1bmN0aW9uIHJlZG9Nb3ZlQW5jaG9yKG9iamVjdCwgcGFyYW1zKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBlZGdlIGNyZWF0ZWRcbiAgICBvYmplY3QucmVjb3ZlclNlbGYoKTtcbn1cblxuLyoqXG4gKiBVbmRvIG1vdmUgaGVhZCBvcGVyYXRpb25cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFxuICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gKi9cbmZ1bmN0aW9uIHJlZG9Nb3ZlSGVhZChvYmplY3QsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgY2hhbmdlRW5kTG9jYXRpb24gfSA9IHBhcmFtcztcblxuICAgIC8vIFJlY292ZXIgZWdkZSBlbmQgbG9jYXRpb25cbiAgICBjb25zdCByZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgIHg6IG9iamVjdC5lbmRMb2NhdGlvbi54ICsgY2hhbmdlRW5kTG9jYXRpb24ueCxcbiAgICAgICAgeTogb2JqZWN0LmVuZExvY2F0aW9uLnkgKyBjaGFuZ2VFbmRMb2NhdGlvbi55LFxuICAgIH07XG5cbiAgICBvYmplY3Quc2V0TG9jYXRpb24oXG4gICAgICAgICdlbmQnLFxuICAgICAgICByZWNvdmVyTG9jYXRpb24sXG4gICAgKTtcblxuICAgIC8vIFJlY292ZXIgYWRkZWQgZW5kIHNsZWVwZXIgaWYgbmVlZGVkXG4gICAgaWYgKCEhcGFyYW1zWydhZGRlZEVuZFNsZWVwZXInXSkge1xuICAgICAgICBwYXJhbXNbJ2FkZGVkRW5kU2xlZXBlciddLmFkZEluY29taW5nRWRnZShvYmplY3QpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZWRvIGRlbGV0ZSB0aGUgY2xpY2tlZCBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IERlbGV0ZWQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHJlZG9EZWxldGVJdGVtcyhvYmplY3QpIHtcbiAgICBvYmplY3QuZGVsZXRlU2VsZigpO1xufVxuXG4vKipcbiAqIFJlZG8gcGFzdGUgdGhlIGl0ZW1cbiAqL1xuZnVuY3Rpb24gcmVkb1Bhc3RlKG9iamVjdCkge1xuICAgIGZvciAobGV0IGl0ZW0gb2Ygb2JqZWN0KSB7XG4gICAgICAgIC8vIFRPRE86IE9ubHkgc3VwcG9ydCBzbGVlcGVyIG5vd1xuICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIFNsZWVwZXIpIHtcbiAgICAgICAgICAgIGl0ZW0ucmVjb3ZlclNlbGYoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgU2F2ZWRPcGVyYXRpb24gfSBmcm9tICcuL29wZXJhdGlvbic7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgUGFpbnRlckV2ZW50TmFtZSB9IGZyb20gJy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vY29yZS9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlcic7XG5cbi8qKlxuICogVW5kbyBjb250cm9sbGVyIHRvIGFjdHVhbGx5IGRlYWwgd2l0aCB0aGUgdW5kb2luZyB0aGUgdGFza3NcbiAqIEBwYXJhbSB7Kn0gdGFzayBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuZG9Db250cm9sbGVyKHRhc2spIHtcbiAgICBjb25zdCB7XG4gICAgICAgIG9iamVjdCwgXG4gICAgICAgIHBhcmFtcywgXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICB9ID0gdGFzaztcblxuICAgIHN3aXRjaChvcGVyYXRpb24pIHtcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24ubW92ZVNsZWVwZXIpOlxuICAgICAgICAgICAgdW5kb01vdmVTbGVlcGVyKG9iamVjdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5hZGRFZGdlRnJvbUFuY2hvcik6XG4gICAgICAgICAgICB1bmRvTW92ZUFuY2hvcihvYmplY3QsIHBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24ubW92ZUhlYWQpOlxuICAgICAgICAgICAgdW5kb01vdmVIZWFkKG9iamVjdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5kZWxldGUpOlxuICAgICAgICAgICAgdW5kb0RlbGV0ZUl0ZW1zKG9iamVjdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24ucGFzdGUpOlxuICAgICAgICAgICAgdW5kb1Bhc3RlKG9iamVjdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgKTtcbn1cblxuLyoqXG4gKiBVbmRvIG1vdmUgc2xlZXBlciBvcGVyYXRpb25cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFJlY2lldmVkIGN1cnJlbnQgc2xlZXBlciBub2RlXG4gKiBAcGFyYW0geyp9IHBhcmFtcyBvcGVyYXRpb24gcGFyYW1ldGVyc1xuICovXG5mdW5jdGlvbiB1bmRvTW92ZVNsZWVwZXIob2JqZWN0LCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IG9iamVjdC5jYW52YXNJbmZvcm1hdGlvblxuICAgIGNvbnN0IHsgY2hhbmdlTG9jYXRpb24gfSA9IHBhcmFtcztcbiAgICBjb25zdCByZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgIHg6IHggLSBjaGFuZ2VMb2NhdGlvbi54LFxuICAgICAgICB5OiB5IC0gY2hhbmdlTG9jYXRpb24ueSxcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2Ugc2xlZXBlciBjYW52YXMgbG9jYXRpb25cbiAgICBvYmplY3QuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24ocmVjb3ZlckxvY2F0aW9uKTtcblxuICAgIC8vIENoYW5nZSB0aGUgY29ubmVjdGVkIG91dGNvbWluZyBlZGdlcycgbG9jYXRpb25cbiAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygb2JqZWN0LmVkZ2VMaXN0KSB7XG4gICAgICAgIGNvbnN0IGVkZ2VSZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBlZGdlLnN0YXJ0TG9jYXRpb24ueCAtIGNoYW5nZUxvY2F0aW9uLngsXG4gICAgICAgICAgICB5OiBlZGdlLnN0YXJ0TG9jYXRpb24ueSAtIGNoYW5nZUxvY2F0aW9uLnksXG4gICAgICAgIH07XG5cbiAgICAgICAgZWRnZS5zZXRMb2NhdGlvbihcbiAgICAgICAgICAgICdzdGFydCcsXG4gICAgICAgICAgICBlZGdlUmVjb3ZlckxvY2F0aW9uLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgaW5jb21pbmcgZWRnZXMnIGxvY2F0aW9uXG4gICAgZm9yIChjb25zdCBlZGdlIG9mIG9iamVjdC5pbmNvbWluZ0VkZ2VMaXN0KSB7XG4gICAgICAgIGNvbnN0IGVkZ2VSZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBlZGdlLmVuZExvY2F0aW9uLnggLSBjaGFuZ2VMb2NhdGlvbi54LFxuICAgICAgICAgICAgeTogZWRnZS5lbmRMb2NhdGlvbi55IC0gY2hhbmdlTG9jYXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICBlZGdlLnNldExvY2F0aW9uKFxuICAgICAgICAgICAgJ2VuZCcsXG4gICAgICAgICAgICBlZGdlUmVjb3ZlckxvY2F0aW9uLFxuICAgICAgICApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBVbmRvIG1vdmUgYW5jaG9yIG9wZXJhdGlvblxuICogQHBhcmFtIHsqfSBvYmplY3QgUmVjaWV2ZWQgZWRnZSBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIHRoZSBzbGVlcGVyIG5vZGUgd2hlcmUgdGhlIGVkZ2Ugc3RhcnRcbiAqL1xuZnVuY3Rpb24gdW5kb01vdmVBbmNob3Iob2JqZWN0LCBwYXJhbXMpIHtcbiAgICAvLyBSZW1vdmUgdGhlIGVkZ2UgY3JlYXRlZFxuICAgIG9iamVjdC5kZWxldGVTZWxmKCk7XG59XG5cbi8qKlxuICogVW5kbyBtb3ZlIGhlYWQgb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICovXG5mdW5jdGlvbiB1bmRvTW92ZUhlYWQob2JqZWN0LCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IGNoYW5nZUVuZExvY2F0aW9uIH0gPSBwYXJhbXM7XG5cbiAgICAvLyBSZWNvdmVyIGVnZGUgZW5kIGxvY2F0aW9uXG4gICAgY29uc3QgcmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICB4OiBvYmplY3QuZW5kTG9jYXRpb24ueCAtIGNoYW5nZUVuZExvY2F0aW9uLngsXG4gICAgICAgIHk6IG9iamVjdC5lbmRMb2NhdGlvbi55IC0gY2hhbmdlRW5kTG9jYXRpb24ueSxcbiAgICB9O1xuXG4gICAgb2JqZWN0LnNldExvY2F0aW9uKFxuICAgICAgICAnZW5kJyxcbiAgICAgICAgcmVjb3ZlckxvY2F0aW9uLFxuICAgICk7XG5cbiAgICAvLyBSZW1vdmUgYWRkZWQgZW5kIHNsZWVwZXIgaWYgbmVlZGVkXG4gICAgaWYgKCEhcGFyYW1zWydhZGRlZEVuZFNsZWVwZXInXSkge1xuICAgICAgICBwYXJhbXNbJ2FkZGVkRW5kU2xlZXBlciddLnJlbW92ZUluY29taW5nRWRnZShvYmplY3QpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBVbmRvIGRlbGV0ZSB0aGUgY2xpY2tlZCBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IERlbGV0ZWQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHVuZG9EZWxldGVJdGVtcyhvYmplY3QpIHtcbiAgICBvYmplY3QucmVjb3ZlclNlbGYoKTtcbn1cblxuLyoqXG4gKiBVbmRvIFBhc3RlIHRoZSBpdGVtXG4gKi9cbmZ1bmN0aW9uIHVuZG9QYXN0ZShvYmplY3QpIHtcbiAgICBmb3IobGV0IGl0ZW0gb2Ygb2JqZWN0KSB7XG4gICAgICAgIC8vIFRPRE86IE9ubHkgc3VwcG9ydCBzbGVlcGVyIG5vd1xuICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIFNsZWVwZXIpIHtcbiAgICAgICAgICAgIGl0ZW0uZGVsZXRlU2VsZigpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2F2ZWRPcGVyYXRpb24gfSBmcm9tICcuL29wZXJhdGlvbic7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgVW5kb1JlZG9FdmVudE5hbWUgfSBmcm9tICcuLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29weVBhc3RlSG91c2UgfSBmcm9tICcuLi9jb3B5LXBhc3RlL2NvcHktcGFzdGUtaG91c2UnO1xuXG5leHBvcnQgY2xhc3MgVW5kb0RlY29yYXRvciB7XG4gICAgLyoqXG4gICAgICogRGVjb3JhdG9yIGZvciBtb3VzZSB1cCBmcm9tIHNsZWVwZXJcbiAgICAgKi8gXG4gICAgc3RhdGljIG1vdXNlVXBTbGVlcGVyRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZHJhZ1NsZWVwZXJMaXN0LCBvcmlnaW5hbEluZm8pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IEN1cnJlbnQgU2xlZXBlciAoTm93IG5vIHNlbGVjdGlvbiBib3gpXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U2xlZXBlciA9IGRyYWdTbGVlcGVyTGlzdFswXTtcblxuICAgICAgICAgICAgLy8gRmluZCBsb2NhdGlvbiBjaGFuZ2VcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUxvY2F0aW9uID0ge1xuICAgICAgICAgICAgICAgIHg6IGN1cnJlbnRTbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnggLSBvcmlnaW5hbEluZm8ueCxcbiAgICAgICAgICAgICAgICB5OiBjdXJyZW50U2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi55IC0gb3JpZ2luYWxJbmZvLnksXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaGFuZ2VMb2NhdGlvbi54ICE9PSAwICYmIGNoYW5nZUxvY2F0aW9uLnkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRvIHVuZG8gc3RhY2tcbiAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUuYWRkTXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBjdXJyZW50U2xlZXBlcixcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5tb3ZlU2xlZXBlcixcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgY29udHJvbGxlclxuICAgICAgICAgICAgY29udHJvbGxlckZ1bmN0aW9uKGRyYWdTbGVlcGVyTGlzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNvcmF0b3IgZm9yIG1vdXNlIHVwIGZyb20gYW5jaG9yXG4gICAgICovXG4gICAgc3RhdGljIG1vdXNlVXBBbmNob3JEZWNvcmF0b3IoY29udHJvbGxlckZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihzbGVlcGVyQW5kQW5jaG9yLCBlZGdlLCBjbG9zZXN0T2JqZWN0KSB7XG4gICAgICAgICAgICAvLyBTYXZlIHRvIHVuZG8gc3RhY2tcbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgIG9iamVjdDogZWRnZSxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLmFkZEVkZ2VGcm9tQW5jaG9yLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFNsZWVwZXI6IHNsZWVwZXJBbmRBbmNob3JbMF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBjb250cm9sbGVyIFxuICAgICAgICAgICAgY29udHJvbGxlckZ1bmN0aW9uKHNsZWVwZXJBbmRBbmNob3IsIGVkZ2UsIGNsb3Nlc3RPYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjb3JhdG9yIGZvciBtb3VzZSB1cCBmcm9tIGhlYWRcbiAgICAgKi9cbiAgICBzdGF0aWMgbW91c2VVcEhlYWREZWNvcmF0b3IoY29udHJvbGxlckZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihlZGdlLCBjbG9zZXN0T2JqZWN0LCBvcmlnaW5hbExvY2F0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgY2xvc2VzdExvY2F0aW9uLFxuICAgICAgICAgICAgICAgIGNsb3Nlc3RTbGVlcGVyLFxuICAgICAgICAgICAgfSA9IGNsb3Nlc3RPYmplY3Q7XG5cbiAgICAgICAgICAgIC8vIEFkZCBtdXRhdGlvbiBcbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgIG9iamVjdDogZWRnZSxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLm1vdmVIZWFkLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFbmRMb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogY2xvc2VzdExvY2F0aW9uLnggLSBvcmlnaW5hbExvY2F0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjbG9zZXN0TG9jYXRpb24ueSAtIG9yaWdpbmFsTG9jYXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWRkZWRFbmRTbGVlcGVyOiBjbG9zZXN0U2xlZXBlcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJGdW5jdGlvbihlZGdlLCBjbG9zZXN0T2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY29yYXRvciBmb3IgZGVsZXRlIGl0ZW1zXG4gICAgICovXG4gICAgc3RhdGljIGRlbGV0ZUl0ZW1zRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oY2xpY2tPYmplY3QpIHtcbiAgICAgICAgICAgIC8vIEFkZCBtdXRhdGlvblxuICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLmFkZE11dGF0aW9uLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiBjbGlja09iamVjdCxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLmRlbGV0ZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJGdW5jdGlvbihjbGlja09iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNvcmF0b3IgZm9yIHBhc3RlIGl0ZW1zXG4gICAgICovXG4gICAgc3RhdGljIHBhc3RlRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBGaXJzdGx1IGNvcHlcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZEhvdXNlID0gQ29weVBhc3RlSG91c2UucGFja2FnZVxuXG4gICAgICAgICAgICAvLyBBZGQgbXV0YXRpb25cbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgIG9iamVjdDogY2xvbmVkSG91c2UsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5wYXN0ZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgY29udHJvbGxlclxuICAgICAgICAgICAgY29udHJvbGxlckZ1bmN0aW9uKGNsb25lZEhvdXNlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyB1bmRvQ29udHJvbGxlciB9IGZyb20gJy4vdW5kby1jb250cm9sbGVyJztcbmltcG9ydCB7IFVuZG9SZWRvRXZlbnROYW1lIH0gZnJvbSAnLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyByZWRvQ29udHJvbGxlciB9IGZyb20gJy4vcmVkby1jb250cm9sbGVyJztcblxuY2xhc3MgVW5kb1JlZG8ge1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVW5kb1JlZG8oKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmKCFVbmRvUmVkby5pbnN0YW5jZSkge1xuICAgICAgICAgICAgLy8gRGVmaW5lIHRoZSBzdGFjayBhbmQgdGhlIHBvaW50ZXJcbiAgICAgICAgICAgIHRoaXMuc3RhY2sgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucG9pbnRlciA9IC0xO1xuXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgICAgICAgICAgVW5kb1JlZG8uaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50IG5hbWVcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB1bmRvLFxuICAgICAgICAgICAgYWRkTXV0YXRpb24sXG4gICAgICAgICAgICByZWRvLFxuICAgICAgICB9ID0gVW5kb1JlZG9FdmVudE5hbWU7XG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihhZGRNdXRhdGlvbiwgdGhpcy5hZGRNdXRhdGlvblRvU3RhY2suYmluZCh0aGlzKSk7XG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcih1bmRvLCB0aGlzLnVuZG8uYmluZCh0aGlzKSk7XG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihyZWRvLCB0aGlzLnJlZG8uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG11dGF0aW9uIHRvIHVuZG8gc3RhY2tcbiAgICAgKiBAcGFyYW0geyp9IG11dGF0aW9uIFxuICAgICAqL1xuICAgIGFkZE11dGF0aW9uVG9TdGFjayhtdXRhdGlvbikge1xuICAgICAgICB0aGlzLnBvaW50ZXIgKz0gMTtcblxuICAgICAgICAvLyBCcmVhayB0aGUgc3RhY2sgb3JkZXIsIGlnbm9yZSB0aGUgb3BlcmF0aW9uIGFmdGVyIHBvaW50ZXJcbiAgICAgICAgaWYgKHRoaXMucG9pbnRlciAhPT0gdGhpcy5zdGFjay5sZW5ndGggJiYgdGhpcy5wb2ludGVyID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhY2suc3BsaWNlKHRoaXMucG9pbnRlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YWNrLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YWNrLnB1c2gobXV0YXRpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuZG8gdGhlIG9wZXJhdGlvblxuICAgICAqL1xuICAgIHVuZG8oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCAhPT0gMCB8fCB0aGlzLnBvaW50ZXIgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCB1bmRvVGFzayA9IHRoaXMuc3RhY2tbdGhpcy5wb2ludGVyXTtcbiAgICAgICAgICAgIHVuZG9Db250cm9sbGVyKHVuZG9UYXNrKTtcblxuICAgICAgICAgICAgdGhpcy5wb2ludGVyIC09IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWRvIHRoZSBvcGVyYXRpb25cbiAgICAgKi9cbiAgICByZWRvKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggIT09IDAgJiYgdGhpcy5wb2ludGVyICE9PSB0aGlzLnN0YWNrLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnRlciArPSAxO1xuXG4gICAgICAgICAgICBjb25zdCByZWRvVGFzayA9IHRoaXMuc3RhY2tbdGhpcy5wb2ludGVyXTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVkb1Rhc2spO1xuXG4gICAgICAgICAgICByZWRvQ29udHJvbGxlcihyZWRvVGFzayk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IFVuZG9SZWRvIH07IiwiY2xhc3MgRXZlbnQge1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFFdmVudC5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudERpY3Rpb25hcnkgPSB7fTtcbiAgICAgICAgICAgIEV2ZW50Lmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQWRkIHRvIHdob2xlIHdpbmRvd1xuICAgICAgICAgICAgd2luZG93LkV2ZW50ZXIgPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBFdmVudC5pbnN0YW5jZTsgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnRMaXN0ZW5lciBmb3IgYWRkaW5nIGV2ZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBcbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgLy8gRmluZCBpZiBldmVudE5hbWUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgaWYgKCEoZXZlbnROYW1lIGluIHRoaXMuZXZlbnREaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudERpY3Rpb25hcnlbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBQdXNoIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpbnRvIGxpc3RcbiAgICAgICAgdGhpcy5ldmVudERpY3Rpb25hcnlbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIGxpc3RlbmVyIGdpdmVuIGEgc3BlY2lmaWMgZXZlbnQgYW5kIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9uIHwgdW5kZWZpbmVkfSBjYWxsYmFjayBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgLy8gVGhyb3cgRXJyb3Igd2hlbiBub3QgZmluZCB0aGUgZXZlbnRcbiAgICAgICAgaWYgKCEoZXZlbnROYW1lIGluIHRoaXMuZXZlbnREaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignRXZlbnQgTm90IFJlZ2lzdGVyZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEp1c3QgcmVtb3ZlIHRoZSBzcGVjaWZpYyBjYWxsYmFjayBmdW5jdGlvbiBpZiBjYWxsYmFjayBnaXZlblxuICAgICAgICBpZiAoISFjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEV2ZW50TGlzdCA9IHRoaXMuZXZlbnREaWN0aW9uYXJ5W2V2ZW50TmFtZV07XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja0luZGV4ID0gY3VycmVudEV2ZW50TGlzdC5maW5kSW5kZXgoc2F2ZWRDYWxsYmFja0Z1bmN0aW9uID0+IFxuICAgICAgICAgICAgICAgIHNhdmVkQ2FsbGJhY2tGdW5jdGlvbiA9PT0gY2FsbGJhY2tcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIFJhaXNlIGVycm9yIGlmIGNhbGxiYWNrIGZ1bmN0aW9uIG5vdCBmb3VuZFxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrSW5kZXggPT09IC0xIHx8IGNhbGxiYWNrSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0NhbGxiYWNrIGZ1bmN0aW9uIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgICAgICBjdXJyZW50RXZlbnRMaXN0LnNwbGljZShjYWxsYmFja0luZGV4LCAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoaXMgZXZlbnQgaWYgZXZlbnQgbGlzdCBpcyBlbXB0eSBcbiAgICAgICAgICAgIGlmIChjdXJyZW50RXZlbnRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50RGljdGlvbmFyeVtldmVudE5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRGlyZWN0bHkgZGVsZXRlIHRoaXMgZXZlbnRcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50RGljdGlvbmFyeVtldmVudE5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgZGlzcHRhY2hlciwgdHJpZ2dlciB0aGUgcmVsYXRlZCBldmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgXG4gICAgICogQHBhcmFtICB7Li4uYW55fSBhcmdzIFxuICAgICAqL1xuICAgIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIC8vIFRocm93IEVycm9yIHdoZW4gbm90IGZpbmQgdGhlIGV2ZW50XG4gICAgICAgIGlmICghKGV2ZW50TmFtZSBpbiB0aGlzLmV2ZW50RGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0V2ZW50IE5vdCBSZWdpc3RlcmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJdGVyYXRlIGZvciB0cmlnZ2VyXG4gICAgICAgIHRoaXMuZXZlbnREaWN0aW9uYXJ5W2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudGVyID0gRXZlbnQuZ2V0SW5zdGFuY2UoKTsiLCIvKipcbiAqIEZpbmQgaWYgaXQgaXMgcG9zc2libGUgdG8gYmUgYWN0aXZlXG4gKiBAcGFyYW0ge2Zsb2F0fSB3ZWlnaHQgXG4gKiBAcmV0dXJucyB7Ym9vbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2aXR5QnlXZWlnaHQod2VpZ2h0KSB7XG4gICAgY29uc3Qgc3Vkb1JhbmRvbVZhcmlhYmxlID0gTWF0aC5yYW5kb20oKTtcbiAgICByZXR1cm4gc3Vkb1JhbmRvbVZhcmlhYmxlIDw9IHdlaWdodDtcbn1cblxuLyoqXG4gKiBGaW5kIGlmIGdpdmVuIHBvaW50IG5lYXIgdGhlIGxpbmVcbiAqIEBwYXJhbSB7Kn0gbGluZVN0YXJ0TG9jYXRpb24gXG4gKiBAcGFyYW0geyp9IGxpbmVFbmRMb2NhdGlvbiBcbiAqIEBwYXJhbSB7Kn0geCBcbiAqIEBwYXJhbSB7Kn0geSBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQb2ludEluTGluZShsaW5lU3RhcnRMb2NhdGlvbiwgbGluZUVuZExvY2F0aW9uLCB4LCB5KSB7XG4gICAgaWYoXG4gICAgICAgIGxpbmVFbmRMb2NhdGlvbi54ID4gbGluZVN0YXJ0TG9jYXRpb24ueCBcbiAgICAgICAgJiYgKFxuICAgICAgICAgICAgeCA+IGxpbmVFbmRMb2NhdGlvbi54IFxuICAgICAgICAgICAgfHwgeCA8IGxpbmVTdGFydExvY2F0aW9uLnhcbiAgICAgICAgKVxuICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoXG4gICAgICAgIGxpbmVFbmRMb2NhdGlvbi54IDwgbGluZVN0YXJ0TG9jYXRpb24ueCBcbiAgICAgICAgJiYgKFxuICAgICAgICAgICAgeCA8IGxpbmVFbmRMb2NhdGlvbi54IFxuICAgICAgICAgICAgfHwgeCA+IGxpbmVTdGFydExvY2F0aW9uLnhcbiAgICAgICAgKVxuICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGxpbmUgXG4gICAgY29uc3Qgc2xvcGUgPSAobGluZUVuZExvY2F0aW9uLnkgLSBsaW5lU3RhcnRMb2NhdGlvbi55KSAvIFxuICAgIChsaW5lRW5kTG9jYXRpb24ueCAtIGxpbmVTdGFydExvY2F0aW9uLngpO1xuXG4gICAgLy8gRmluZCB0aGUgYXJyb3cgcmVnaW9uXG4gICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4oc2xvcGUpO1xuICAgIGNvbnN0IHhMZW5ndGggPSAxMCAqIDAuNSAqIDMqKjAuNSAqIE1hdGguYWJzKE1hdGguY29zKGFuZ2xlKSk7XG4gICAgaWYgKFxuICAgICAgICBsaW5lRW5kTG9jYXRpb24ueCA+IGxpbmVTdGFydExvY2F0aW9uLnggXG4gICAgICAgICYmIHggPiBsaW5lRW5kTG9jYXRpb24ueCAtIHhMZW5ndGhcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgbGluZUVuZExvY2F0aW9uLnggPCBsaW5lU3RhcnRMb2NhdGlvbi54XG4gICAgICAgICYmIHggPCBsaW5lRW5kTG9jYXRpb24ueCArIHhMZW5ndGhcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgY29uc3QgaW50ZXJjZXB0ID0gbGluZVN0YXJ0TG9jYXRpb24ueSAtIHNsb3BlICogbGluZVN0YXJ0TG9jYXRpb24ueDtcblxuICAgIC8vIEZpbmQgdGhlIGRpc3RhbmNlIGJldHdlZW4gbGluZSBhbmQgcG9pbnRcbiAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguYWJzKGludGVyY2VwdCArIHNsb3BlICogeCAtIHkpIC8gTWF0aC5zcXJ0KDEgKyBzbG9wZSoqMik7XG5cbiAgICByZXR1cm4gZGlzdGFuY2UgPD0gNTtcbn0iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKipcbiAqIEFkZHMgdGhlIGtleS12YWx1ZSBgcGFpcmAgdG8gYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwYWlyIFRoZSBrZXktdmFsdWUgcGFpciB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBtYXBgLlxuICovXG5mdW5jdGlvbiBhZGRNYXBFbnRyeShtYXAsIHBhaXIpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBtYXAuc2V0YCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgbWFwLnNldChwYWlyWzBdLCBwYWlyWzFdKTtcbiAgcmV0dXJuIG1hcDtcbn1cblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBtb2RpZnkuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBzZXRgLlxuICovXG5mdW5jdGlvbiBhZGRTZXRFbnRyeShzZXQsIHZhbHVlKSB7XG4gIC8vIERvbid0IHJldHVybiBgc2V0LmFkZGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIHNldC5hZGQodmFsdWUpO1xuICByZXR1cm4gc2V0O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXksXG4gICAgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCksXG4gICAgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gICAgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKSxcbiAgICBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKSxcbiAgICBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpLFxuICAgIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKSxcbiAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyBkYXRhW2tleV0gIT09IHVuZGVmaW5lZCA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIGdldE1hcERhdGEodGhpcywga2V5KS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fWydkZWxldGUnXShrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGNhY2hlID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGNhY2hlIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gY2FjaGUuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNhY2hlID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgY2FjaGUuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICAvLyBTYWZhcmkgOSBtYWtlcyBgYXJndW1lbnRzLmxlbmd0aGAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgdmFyIHJlc3VsdCA9IChpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpXG4gICAgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpXG4gICAgOiBbXTtcblxuICB2YXIgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aCxcbiAgICAgIHNraXBJbmRleGVzID0gISFsZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoa2V5ID09ICdsZW5ndGgnIHx8IGlzSW5kZXgoa2V5LCBsZW5ndGgpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsb25lYCBhbmQgYF8uY2xvbmVEZWVwYCB3aGljaCB0cmFja3NcbiAqIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0Z1bGxdIFNwZWNpZnkgYSBjbG9uZSBpbmNsdWRpbmcgc3ltYm9scy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIG9iamVjdHMgYW5kIHRoZWlyIGNsb25lIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgaXNEZWVwLCBpc0Z1bGwsIGN1c3RvbWl6ZXIsIGtleSwgb2JqZWN0LCBzdGFjaykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICBpZiAoaXNIb3N0T2JqZWN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZU9iamVjdChpc0Z1bmMgPyB7fSA6IHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgYmFzZUNsb25lLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuXG4gIGlmICghaXNBcnIpIHtcbiAgICB2YXIgcHJvcHMgPSBpc0Z1bGwgPyBnZXRBbGxLZXlzKHZhbHVlKSA6IGtleXModmFsdWUpO1xuICB9XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgaXNEZWVwLCBpc0Z1bGwsIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG90eXBlIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gYmFzZUNyZWF0ZShwcm90bykge1xuICByZXR1cm4gaXNPYmplY3QocHJvdG8pID8gb2JqZWN0Q3JlYXRlKHByb3RvKSA6IHt9O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IChpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgYnVmZmVyLmNvbnN0cnVjdG9yKGJ1ZmZlci5sZW5ndGgpO1xuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgbWFwLlxuICovXG5mdW5jdGlvbiBjbG9uZU1hcChtYXAsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhtYXBUb0FycmF5KG1hcCksIHRydWUpIDogbWFwVG9BcnJheShtYXApO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZE1hcEVudHJ5LCBuZXcgbWFwLmNvbnN0cnVjdG9yKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IHJlZ2V4cC5jb25zdHJ1Y3RvcihyZWdleHAuc291cmNlLCByZUZsYWdzLmV4ZWMocmVnZXhwKSk7XG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHNldC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTZXQoc2V0LCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMoc2V0VG9BcnJheShzZXQpLCB0cnVlKSA6IHNldFRvQXJyYXkoc2V0KTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRTZXRFbnRyeSwgbmV3IHNldC5jb25zdHJ1Y3Rvcik7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlID09PSB1bmRlZmluZWQgPyBzb3VyY2Vba2V5XSA6IG5ld1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9sIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9sIHByb3BlcnRpZXMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSBuYXRpdmVHZXRTeW1ib2xzID8gb3ZlckFyZyhuYXRpdmVHZXRTeW1ib2xzLCBPYmplY3QpIDogc3R1YkFycmF5O1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEsXG4vLyBmb3IgZGF0YSB2aWV3cyBpbiBFZGdlIDwgMTQsIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzLlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUFycmF5KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgY2xvbmVGdW5jLCBpc0RlZXApIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIHJldHVybiBjbG9uZUFycmF5QnVmZmVyKG9iamVjdCk7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIHJldHVybiBjbG9uZURhdGFWaWV3KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzogY2FzZSBpbnQxNlRhZzogY2FzZSBpbnQzMlRhZzpcbiAgICBjYXNlIHVpbnQ4VGFnOiBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzogY2FzZSB1aW50MTZUYWc6IGNhc2UgdWludDMyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lVHlwZWRBcnJheShvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHJldHVybiBjbG9uZU1hcChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKG9iamVjdCk7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVJlZ0V4cChvYmplY3QpO1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTZXQob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVN5bWJvbChvYmplY3QpO1xuICB9XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uY2xvbmVgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGNsb25lcyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZWN1cnNpdmVseSBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBkZWVwIGNsb25lZCB2YWx1ZS5cbiAqIEBzZWUgXy5jbG9uZVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgZGVlcCA9IF8uY2xvbmVEZWVwKG9iamVjdHMpO1xuICogY29uc29sZS5sb2coZGVlcFswXSA9PT0gb2JqZWN0c1swXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgdHJ1ZSwgdHJ1ZSk7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDgtOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEZWVwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnLi4vY29yZS92aWV3LWxheWVyL2NhbnZhcyc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vY29yZS9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlcic7XG5cbi8vIEluaXQgQ2FudmFzXG52YXIgbXlDYW52YXMgPSBDYW52YXMuZ2V0SW5zdGFuY2UoKTtcblxuLy8gLy8gQWRkIGEgc2xlZXBlclxuLy8gbmV3IFNsZWVwZXIoKTtcbi8vIG5ldyBTbGVlcGVyKFxuLy8gICAgIGZhbHNlLFxuLy8gICAgIHtcbi8vICAgICAgICAgZHJhd1R5cGU6ICdjaXJjbGUnLFxuLy8gICAgICAgICB4OiA2MDAsXG4vLyAgICAgICAgIHk6IDYwMCxcbi8vICAgICAgICAgcmFkaXVzOiAzMCxcbi8vICAgICAgICAgc3RhcnRBbmdsZTogMCxcbi8vICAgICAgICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuLy8gICAgICAgICBpc0ZpbGxlZDogdHJ1ZSxcbi8vICAgICAgICAgZmlsbENvbG9yOiAnI0ZGQ0MzMycsXG4vLyAgICAgfVxuLy8gKTtcblxuLy8gbmV3IFNsZWVwZXIoXG4vLyAgICAgZmFsc2UsXG4vLyAgICAge1xuLy8gICAgICAgICBkcmF3VHlwZTogJ2NpcmNsZScsXG4vLyAgICAgICAgIHg6IDcwMCxcbi8vICAgICAgICAgeTogNzAwLFxuLy8gICAgICAgICByYWRpdXM6IDMwLFxuLy8gICAgICAgICBzdGFydEFuZ2xlOiAwLFxuLy8gICAgICAgICBlbmRBbmdsZTogMiAqIE1hdGguUEksXG4vLyAgICAgICAgIGlzRmlsbGVkOiB0cnVlLFxuLy8gICAgICAgICBmaWxsQ29sb3I6ICcjRkZDQzMzJyxcbi8vICAgICB9XG4vLyApO1xuXG4vLyBuZXcgU2xlZXBlcihcbi8vICAgICBmYWxzZSxcbi8vICAgICB7XG4vLyAgICAgICAgIGRyYXdUeXBlOiAnY2lyY2xlJyxcbi8vICAgICAgICAgeDogNTAwLFxuLy8gICAgICAgICB5OiA2MDAsXG4vLyAgICAgICAgIHJhZGl1czogMzAsXG4vLyAgICAgICAgIHN0YXJ0QW5nbGU6IDAsXG4vLyAgICAgICAgIGVuZEFuZ2xlOiAyICogTWF0aC5QSSxcbi8vICAgICAgICAgaXNGaWxsZWQ6IHRydWUsXG4vLyAgICAgICAgIGZpbGxDb2xvcjogJyNGRkNDMzMnLFxuLy8gICAgIH1cbi8vICk7XG5cblxuLy8gbmV3IFNsZWVwZXIoXG4vLyAgICAgZmFsc2UsXG4vLyAgICAge1xuLy8gICAgICAgICBkcmF3VHlwZTogJ2NpcmNsZScsXG4vLyAgICAgICAgIHg6IDYwMCxcbi8vICAgICAgICAgeTogNzAwLFxuLy8gICAgICAgICByYWRpdXM6IDMwLFxuLy8gICAgICAgICBzdGFydEFuZ2xlOiAwLFxuLy8gICAgICAgICBlbmRBbmdsZTogMiAqIE1hdGguUEksXG4vLyAgICAgICAgIGlzRmlsbGVkOiB0cnVlLFxuLy8gICAgICAgICBmaWxsQ29sb3I6ICcjRkZDQzMzJyxcbi8vICAgICB9XG4vLyApO1xuXG4vLyBuZXcgU2xlZXBlcihcbi8vICAgICBmYWxzZSxcbi8vICAgICB7XG4vLyAgICAgICAgIGRyYXdUeXBlOiAnY2lyY2xlJyxcbi8vICAgICAgICAgeDogNzAwLFxuLy8gICAgICAgICB5OiA4MDAsXG4vLyAgICAgICAgIHJhZGl1czogMzAsXG4vLyAgICAgICAgIHN0YXJ0QW5nbGU6IDAsXG4vLyAgICAgICAgIGVuZEFuZ2xlOiAyICogTWF0aC5QSSxcbi8vICAgICAgICAgaXNGaWxsZWQ6IHRydWUsXG4vLyAgICAgICAgIGZpbGxDb2xvcjogJyNGRkNDMzMnLFxuLy8gICAgIH1cbi8vICk7XG5cblxuLy8gLy8gRW5hYmxlIGhvdCB1cGRhdGluZ1xuLy8gaWYgKG1vZHVsZS5ob3QpIHtcbi8vICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vY29yZS92aWV3LWxheWVyL2NhbnZhcycsIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICByZXR1cm47XG4vLyAgICAgfSlcbi8vIH1cbiJdLCJuYW1lcyI6WyJjbG9uZURlZXAiLCJDb3B5UGFzdGVIb3VzZSIsImhvdXNlIiwiaW5zdGFuY2UiLCJvYmoiLCJBcnJheSIsIml0ZW0iLCJwdXNoIiwiU2xlZXBlclBvb2xlciIsIkVkZ2VQb29sZXIiLCJpc1BvaW50SW5MaW5lIiwiTWluaW1hbERpc3RhbmNlRm9yTG9jYXRlIiwiQWN0aW9uVXRpbHMiLCJjYW52YXMiLCJsb2NhdGlvbiIsImZpbmRGdW5jdGlvbnNMaXN0IiwiZmluZExvY2F0ZWRMaW5lT3JIZWFkIiwiZmluZExvY2F0ZWRBbmNob3IiLCJmaW5kTG9jYXRlZFNsZWVwZXIiLCJmaW5kRnVuY3Rpb24iLCJmaW5kUmVzdWx0IiwiY2FudmFzQ29udGV4dCIsImdldENvbnRleHQiLCJpc0xvY2F0ZWRJbkNpcmNsZSIsImNpcmNsZVBhdGgiLCJ4IiwieSIsImlzUG9pbnRJblBhdGgiLCJsb2NhdGlvbkhhbmRsZXJNYXBzIiwiYmluZCIsImluZGV4IiwicG9vbCIsImxlbmd0aCIsInNsZWVwZXIiLCJzbGVlcGVyU3R5bGUiLCJjYW52YXNJbmZvcm1hdGlvbiIsInNsZWVwZXJDYW52YXNQYXRoIiwiY2FudmFzUGF0aCIsImRyYXdUeXBlIiwicmVzdWx0IiwidHlwZSIsImlzQWN0aXZlIiwiY2FudmFzQW5jaG9yc1BhdGhMaXN0Iiwic2xlZXBlckFuY2hvciIsImFuY2hvclBhdGgiLCJlZGdlIiwiaGVhZCIsInN0YXJ0TG9jYXRpb24iLCJlbmRMb2NhdGlvbiIsImRyYWdnZWRTbGVlcGVyTGlzdCIsImlzRHJhZyIsImZuIiwid2FpdFRpbWUiLCJ0aW1lciIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwic2V0VGltZW91dCIsImFwcGx5Iiwic2xlZXBlclgiLCJzbGVlcGVyWSIsImRpc3RhbmNlIiwiTWF0aCIsInNxcnQiLCJyYWRpdXMiLCJsb2NhdGVkU2xlZXBlciIsImZpbmRDbG9zZXN0U2xlZXBlciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGVkU2xlZXBlclgiLCJsb2NhdGVkU2xlZXBlclkiLCJhbmNob3JMb2NhdGlvbkxpc3QiLCJtaW5EaXN0YW5jZSIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJtaW5Mb2NhdGlvbiIsImFuY2hvckxvY2F0aW9uIiwiY2xvc2VzdExvY2F0aW9uIiwiY2xvc2VzdFNsZWVwZXIiLCJtb3VzZUFjdGlvbk1vZGUiLCJkb3duT25TbGVlcGVyIiwiZG93bk9uQW5jaG9yIiwiZG93bk9uTGluZSIsImRvd25PbkhlYWQiLCJkb3duT25CYWNrZ3JvdW5kIiwiZG93bk9uTm9uZSIsImRvd25PblRleHQiLCJBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lIiwiUGFpbnRlckV2ZW50TmFtZSIsIkV2ZW50ZXIiLCJVbmRvRGVjb3JhdG9yIiwiU2xlZXBlciIsIkVkZ2UiLCJLZXlib2FyZEFjdGlvbkNvbnRyb2xsZXIiLCJpbml0RXZlbnRIYW5kbGVyIiwia2V5Ym9hcmREZWxldGUiLCJrZXlib2FyZElucHV0Iiwia2V5Ym9hcmRUZXh0VW5kbyIsImtleWJvYXJkVGV4dFJlZG8iLCJrZXlib2FyZFRleHREZWxldGUiLCJrZXlib2FyZENvcHkiLCJrZXlib2FyZFBhc3RlIiwiZXZlbnROYW1lc01hcCIsImRlbGV0ZUl0ZW1zRGVjb3JhdG9yIiwia2V5Ym9hcmREZWxldGVDb250cm9sbGVyIiwicGFzdGVEZWNvcmF0b3IiLCJrZXlib2FyZFBhc3RlQ29udHJvbGxlciIsImtleWJvYXJkQ29weUNvbnRyb2xsZXIiLCJrZXlib2FyZElucHV0Q29udHJvbGxlciIsImtleWJvYXJkVGV4dFVuZG9Db250cm9sbGVyIiwia2V5Ym9hcmRUZXh0UmVkb0NvbnRyb2xsZXIiLCJrZXlib2FyZFRleHREZWxldGVDb250cm9sbGVyIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrT2JqZWN0IiwiZGVsZXRlU2VsZiIsImRpc3BhdGNoRXZlbnQiLCJyZXBhaW50IiwiaW5wdXRLZXkiLCJuZXdDb250ZW50IiwidGV4dEluZm9ybWF0aW9uIiwiY29udGVudCIsInRleHRUZW1wU3RhY2siLCJ0ZXh0IiwidW5kbyIsInJlZG8iLCJzdHJpbmdMZW5ndGgiLCJzdWJzdHJpbmciLCJvYmplY3QiLCJwYWNrYWdlIiwiY29weWVkT2JqZWN0TGlzdCIsInByZXBhcmVGb3JQYXN0ZSIsInJlY292ZXJTZWxmIiwiVW5kb1JlZG9FdmVudE5hbWUiLCJLZXlib2FyZEFjdGlvbiIsIm1vdXNlQWN0aW9uIiwiaW5pdEFjdGlvbiIsImFjdGlvbnNNYXAiLCJrZXlEb3duIiwiYWN0aW9uIiwid2luZG93IiwiZXZlbnQiLCJjb2RlIiwia2V5Q29kZSIsImlzVGV4dE1vZGVPbiIsIm1vdXNlRG93bkVsZW1lbnQiLCJpc1RleHRNb2RlIiwiX2hhbmRsZXJUZXh0RGVsZXRlIiwiX2hhbmRsZXJEZWxldGUiLCJjdHJsS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwiX2hhbmRsZU5vcm1hbCIsImtleSIsInRvU3RyaW5nIiwiRGVlcENsb25lSW5mbyIsIm1vZGUiLCJ0YXJnZXQiLCJTbGVlcGVyRXZlbnROYW1lIiwiRWRnZUV2ZW50TmFtZSIsIk1vdXNlQWN0aW9uQ29udHJvbGxlciIsIm1vdXNlRG93blNsZWVwZXIiLCJtb3VzZURvd25MaW5lIiwibW91c2VEb3duQmFja2dyb3VuZCIsIm1vdXNlTW92ZVNsZWVwZXIiLCJtb3VzZU1vdmVIZWFkIiwibW91c2VVcFNsZWVwZXIiLCJtb3VzZVVwQW5jaG9yIiwibW91c2VVcEhlYWQiLCJtb3VzZURvdWJsZUNsaWNrIiwibW91c2VEb3duU2xlZXBlckNvbnRyb2xsZXIiLCJtb3VzZURvd25MaW5lQ29udHJvbGxlciIsIm1vdXNlRG93bkJhY2tncm91bmRDb250cm9sbGVyIiwibW91c2VNb3ZlU2xlZXBlckNvbnRyb2xsZXIiLCJtb3VzZU1vdmVIZWFkQ29udHJvbGxlciIsIm1vdXNlVXBTbGVlcGVyRGVjb3JhdG9yIiwibW91c2VVcFNsZWVwZXJDb250cm9sbGVyIiwibW91c2VVcEFuY2hvckRlY29yYXRvciIsIm1vdXNlVXBBbmNob3JDb250cm9sbGVyIiwibW91c2VVcEhlYWREZWNvcmF0b3IiLCJtb3VzZVVwSGVhZENvbnRyb2xsZXIiLCJtb3VzZURvdWJsZUNsaWNrQ29udHJvbGxlciIsImFjdGl2ZVNvbWVTbGVlcGVyIiwiYWN0aXZlU29tZUVkZ2UiLCJjaGFuZ2VBY3RpdmVTdGF0dXMiLCJlbmRUZXh0TW9kZSIsImRyYWdTbGVlcGVyTGlzdCIsInJlbGF0aXZlTW92ZURpc3RhbmNlIiwib3JpZ2luWCIsIm9yaWdpblkiLCJuZXdYIiwibmV3WSIsImNoYW5nZUNhbnZhc0luZm9ybWF0aW9uIiwiZWRnZUxpc3QiLCJzZXRMb2NhdGlvbiIsImluY29taW5nRWRnZUxpc3QiLCJkcmFnRWRnZSIsImN1cnJlbnRQb3NpdGlvbiIsImVuZFNsZWVwZXIiLCJyZW1vdmVJbmNvbWluZ0VkZ2UiLCJjaGFuZ2VFbmQiLCJzd2l0Y2hEcmFnU3RhdHVzIiwic2xlZXBlckFuZEFuY2hvciIsImNsb3Nlc3RPYmplY3QiLCJhZGRFZGdlIiwiYWRkSW5jb21pbmdFZGdlIiwic3RhcnRTbGVlcGVyIiwiYWRkQ2hpbGQiLCJhY3RpdmVTb21lU2xlZXBlclRleHRNb2RlIiwiU2F2ZWRPcGVyYXRpb24iLCJNb3VzZUFjdGlvbiIsIm1vdXNlUG9zaXRpb25YIiwibW91c2VQb3NpdGlvblkiLCJhY3Rpb25Nb2RlIiwidGVtcG9yYXJ5RWRnZSIsInRlbXBvcmFyeUNvcHkiLCJoYW5kbGVNb3VzZURvd24iLCJ0aHJvdHRsZXJNYWtlciIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZU5Nb3VzZVVwIiwiaGFuZGxlTW91c2VEb3VibGVDbGljayIsImhhbmRsZU1vdXNlUHJldmVudFJpZ2h0Q2xpY2siLCJvZmZzZXRYIiwib2Zmc2V0WSIsInNldE1vdXNlUG9zaXRpb24iLCJsb2NhdGVkT2JqZWN0IiwiZmluZExvY2F0ZWRPYmplY3QiLCJidXR0b24iLCJtb3VzZVJpZ2h0Q2xpY2siLCJfaGFuZGxlckhvdmVyTW92ZSIsImNhbGwiLCJfaGFuZGxlckRyYWdTbGVlcGVyTW92ZSIsIl9oYW5kbGVyRHJhZ0FuY2hvck1vdmUiLCJfaGFuZGxlckRyYWdCYWNrZ3JvdW5kTW92ZSIsIl9oYW5kbGVyRHJhZ0hlYWRNb3ZlIiwic3R5bGUiLCJjdXJzb3IiLCJmaW5kRHJhZ2dlZFNsZWVwZXIiLCJzdGFydExvYWN0aW9uIiwiY2hhbmdlU3RhcnQiLCJjdXJyZW50UG9zaXN0aW9uIiwiY2xvc2VzdE9iamVjdEFuY2hvciIsImZpbmRDbG9zZXN0QW5jaG9yIiwiY2xvc2VzdE9iamVjdEhlYWQiLCJhZGRNdXRhdGlvbiIsIm9wZXJhdGlvbiIsIm1vdmVIZWFkIiwicGFyYW1zIiwiY2hhbmdlRW5kTG9jYXRpb24iLCJpc0luVGhpc1NsZWVwZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIlBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUiLCJTbGVlcGVyc0ZhY3RvcnkiLCJQYW5lbE9wZXJhdGlvbkNvbnRyb2xsZXIiLCJjaGFuZ2VBbGxQcm9iYWJpbGl0eSIsInJlc2V0U2xlZXBlcnMiLCJwYW5lbENyZWF0ZU5vZGUiLCJwYW5lbEFjdGl2ZSIsInByb2JDaGFuZ2VDb250cm9sbGVyIiwicGFuZWxDcmVhdGVOb2RlQ29udHJvbGxlciIsInJlc2V0Q29udHJvbGxlciIsInBhbmVsQWN0aXZlQ29udHJvbGxlciIsInByb2IiLCJjaGFuZ2VQcm9iYWJpbGl0eSIsInByb2JhYmlsaXR5IiwiaXNTbGVlcGluZyIsImJlZm9yZVByb2Nlc3NJc1NsZWVwaW5nIiwiY2hhbmdlU2xlZXBpbmdTdGF0dXMiLCJwb3NpdGlvbiIsImNyZWF0ZU5vZGUiLCJXYWtpbmdQcm9jZXNzQ29udHJvbGxlciIsInJvdW5kTnVtIiwiZnJhbWVUaW1lIiwiaXNQYXVzZSIsInJlZnJlc2hJbnRlcnZhbElkIiwiYXdha2VRdWV1ZSIsInN0YXJ0V2FraW5nUHJvY2VzcyIsInBhdXNlV2FraW5nUHJvY2VzcyIsInN0YXJ0V2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIiLCJwYXVzZVdha2luZ1Byb2Nlc3NDb250cm9sbGVyIiwidGVtcFF1ZXVlIiwiaW5pdEF3YWtlUXVldWUiLCJzZXRJbnRlcnZhbCIsIm5ld0FjdGl2ZWRTbGVlcGVyIiwiYWN0aXZlQ2hpbGQiLCJzaGlmdCIsImVuZFdha2luZ1Byb2Nlc3MiLCJjbGVhckludGVydmFsIiwiRGVmYXVsdEVkZ2VXZWlnaHQiLCJEZWZhdWx0U2xlZXBlckNhbnZhc0luZm9ybWF0aW9uIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiUEkiLCJpc0ZpbGxlZCIsImZpbGxDb2xvciIsImlzQm9yZGVyIiwiYm9yZGVyV2l0aCIsImJvcmRlckNvbG9yIiwiaXNBbmNob3IiLCJhY3RpdmVCb3JkZXJDb2xvciIsIkRlZmF1bHRBd2FrZUNhbnZhc0luZm9ybWF0aW9uIiwiRWRnZVBvb2xFdmVudE5hbWUiLCJFZGdlUG9vbCIsImluaXRFdmVudHNIYW5kbGVyIiwibG9jYXRlZEluZGV4IiwiZmluZEluZGV4IiwiZWRnZUluUG9vbCIsInNwbGljZSIsImdldEluc3RhbmNlIiwid2VpZ2h0IiwibmV3V2VpZ2h0IiwibmV3U2xlZXBlciIsImVkZ2VQYXRoIiwicmVtb3ZlRWRnZSIsInJlbW92ZUNoaWxkIiwiRGVmYXVsdEFjdGl2ZUluZm9ybWF0aW9uIiwiU2xlZXBlckZhY3RvcnkiLCJzbGVlcGVyQ2FudmFzSW5mb3JtYXRpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJhd2FrZUNhbnZhc0luZm9ybWF0aW9uIiwiYWN0aXZlSW5mb3JtYXRpb24iLCJjYW52YXNPYmoiLCJtYWtlTmV3U2xlZXBlciIsImNoYW5nZU5vZGVTdHlsZSIsInByb3BlcnR5T2JqZWN0IiwiZm9yQ2hhbmdlZEluZm9ybWF0aW9uIiwicHJvcGVydHkiLCJuZXdWYWx1ZSIsInN0YXR1cyIsInRlbXBTbGVlcGVyIiwiU2xlZXBlclBvb2xFdmVudE5hbWUiLCJTbGVlcGVyUG9vbCIsImFkZFNsZWVwZXIiLCJyZU9yZGVyU2xlZXBlciIsInNsZWVwZXJJblBvb2wiLCJzbGVlcGVySW5kZXgiLCJUZXh0U2xlZXBlclRlbXBTdGFjayIsIm9yaWdpblRleHQiLCJwb2ludGVyIiwic3RhY2tMaXN0IiwidmFsIiwiVGV4dFNsZWVwZXIiLCJzaXplIiwiY29sb3IiLCJ0ZXh0YXJlYUluZm9ybWF0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0YXJlYUJvdW5kaW5nQm94UGF0aCIsInRleHRJbml0RXZlbnRIYW5kbGVyIiwic3RhcnRUZXh0TW9kZSIsInRleHRQb3NpdGlvbiIsInRleHRNYXhXaWR0aCIsInRleHRXcml0ZSIsIm1heFdpZHRoIiwiaW5mb3JtYXRpb24iLCJzZXRUZXh0T3JUZXh0YXJlYUluZm9ybWF0aW9uIiwic2xlZXBlclBvc2l0aW9uIiwiZmlndXJlRHJhdyIsIl9zZXRUZXh0YXJlYVBhdGgiLCJFcnJvciIsImZvclNldE9iamVjdCIsImRyYXdUZXh0QXJlYSIsImJvdW5kaW5nQm94UGF0aCIsImdldEFjdGl2aXR5QnlXZWlnaHQiLCJjaGlsZHJlbkxpc3QiLCJjaGlsZEVkZ2VNYXBMaXN0Iiwic2V0Q2FudmFzUGF0aCIsImRyYXdUZXh0IiwiY2hpbGRTbGVlcGVyIiwiZXhwZWN0Q2hpbGRJbmRleCIsImNoaWxkT2JqZWN0IiwidW5kZWZpbmVkIiwiZXhwZWN0RWRnZUluZGV4IiwiZWRnZU9iamVjdCIsImdldENhbnZhc0luZm9ybWF0aW9uIiwidGVtcEFjdGl2ZWRDaGlsZExpc3QiLCJmb3JFYWNoIiwiY2FudmFzUGF0aE9iamVjdCIsImFuY2hvcnNMaXN0IiwicmVtb3ZlU2xlZXBlciIsIkdsb2JhbENvbmZpZyIsIlBhaW50ZXIiLCJVbmRvUmVkbyIsIkNhbnZhcyIsImluaXQiLCJpbml0Q29udGV4dCIsImluaXRQYWludGVyIiwiaW5pdEFjdGlvblJlbGF0ZWQiLCJpbml0VW5kb1JlZG9TdGFjayIsImluaXRTbGVlcGVyRmFjdG9yeSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW52YXNJZCIsImlubmVyV2lkdGgiLCJwYW5kZWxXaWR0aCIsImlubmVySGVpZ2h0IiwiaGVhZGVySGVpZ2h0IiwicGFpbnRlciIsIm1vdXNlQWN0aW9uQ29udHJvbGxlciIsImtleWJvYXJkQWN0aW9uQ29udHJvbGxlciIsImtleWJvYXJkQWN0aW9uIiwicGFuZWxPcGVyYXRpb25Db250cm9sbGVyIiwid2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIiLCJtb3VudENhbnZhcyIsIkRlYWZ1bHRBbmNob3JTZXR0aW5nIiwibGluZVdpZHRoIiwibGluZUNvbG9yIiwiYW5jaG9yUmFkaXVzIiwiRGVhZnVsdEFycm93U2V0dGluZyIsImhlYWRMZW5ndGgiLCJBY3RpdmVBcnJvd1NldHRpbmciLCJEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZyIsIkZpZ3VyZVBhaW50ZXIiLCJkcmF3TWFwIiwiZHJhd0NpcmNsZSIsImRyYXdBcnJvdyIsImRyYXdUZXh0YXJlYSIsImRyYXciLCJzZXRQYXRoQ2FsbGJhY2siLCJjaXJjbGUiLCJQYXRoMkQiLCJhcmMiLCJmaWxsU3R5bGUiLCJmaWxsIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJhbmNob3JzUGF0aExpc3QiLCJhbmNob3JQb3NpdGlvbkxpc3QiLCJhbmNob3JQb3NpdGlvbiIsImFuZ2xlIiwiYXRhbjIiLCJsaW5lIiwibW92ZVRvIiwibGluZVRvIiwiY29zIiwic2luIiwicmVjdCIsIlRleHRQYWludGVyIiwiZmlndXJlIiwiY2xlYXJSZWN0Iiwid3JpdGUiLCJzZXRUZXh0YXJlYUNhbGxiYWNrIiwiZm9udCIsImZpbGxJbmZvIiwiX2dldEZpbGxMaXN0IiwiZmlsbExpc3QiLCJmaWxsVGV4dCIsIm1ldHJpY3MiLCJtZWFzdXJlVGV4dCIsImFjdHVhbEJvdW5kaW5nQm94QXNjZW50IiwiYWN0dWFsQm91bmRpbmdCb3hEZXNjZW50IiwiZm9udEJvdW5kaW5nQm94QXNjZW50IiwiZm9udEJvdW5kaW5nQm94RGVzY2VudCIsIm1vdXNlTW92ZUFuY2hvciIsImNsb3NlQ29sb3JQaWNrZXIiLCJtb3ZlU2xlZXBlciIsImFkZEVkZ2VGcm9tQW5jaG9yIiwiZGVsZXRlIiwicGFzdGUiLCJyZWRvQ29udHJvbGxlciIsInRhc2siLCJyZWRvTW92ZVNsZWVwZXIiLCJyZWRvTW92ZUFuY2hvciIsInJlZG9Nb3ZlSGVhZCIsInJlZG9EZWxldGVJdGVtcyIsInJlZG9QYXN0ZSIsImNoYW5nZUxvY2F0aW9uIiwicmVjb3ZlckxvY2F0aW9uIiwiZWRnZVJlY292ZXJMb2NhdGlvbiIsInVuZG9Db250cm9sbGVyIiwidW5kb01vdmVTbGVlcGVyIiwidW5kb01vdmVBbmNob3IiLCJ1bmRvTW92ZUhlYWQiLCJ1bmRvRGVsZXRlSXRlbXMiLCJ1bmRvUGFzdGUiLCJjb250cm9sbGVyRnVuY3Rpb24iLCJvcmlnaW5hbEluZm8iLCJjdXJyZW50U2xlZXBlciIsIm9yaWdpbmFsTG9jYXRpb24iLCJhZGRlZEVuZFNsZWVwZXIiLCJjbG9uZWRIb3VzZSIsInN0YWNrIiwiYWRkTXV0YXRpb25Ub1N0YWNrIiwibXV0YXRpb24iLCJ1bmRvVGFzayIsInJlZG9UYXNrIiwiRXZlbnQiLCJldmVudERpY3Rpb25hcnkiLCJjYWxsYmFjayIsImN1cnJlbnRFdmVudExpc3QiLCJjYWxsYmFja0luZGV4Iiwic2F2ZWRDYWxsYmFja0Z1bmN0aW9uIiwic3Vkb1JhbmRvbVZhcmlhYmxlIiwicmFuZG9tIiwibGluZVN0YXJ0TG9jYXRpb24iLCJsaW5lRW5kTG9jYXRpb24iLCJzbG9wZSIsImF0YW4iLCJ4TGVuZ3RoIiwiYWJzIiwiaW50ZXJjZXB0IiwibXlDYW52YXMiXSwic291cmNlUm9vdCI6IiJ9