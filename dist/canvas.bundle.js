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
      this.roundNum = 0;
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

      this.awakeQueue = tempQueue; // Trigger Summary

      var sleeperAndAwakeNum = this.countSleeperAndAwake();
      _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.SummaryEventName.drawShare, sleeperAndAwakeNum);
      _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.SummaryEventName.updateDetail, sleeperAndAwakeNum[0], sleeperAndAwakeNum[1], this.roundNum);
    }
  }, {
    key: "startWakingProcessController",
    value: function startWakingProcessController() {
      var _this = this;

      this.isPause = false;
      this.initAwakeQueue(); // Set interval

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

          _this.roundNum += 1; // Trigger Summary

          var sleeperAndAwakeNum = _this.countSleeperAndAwake();

          _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.SummaryEventName.drawShare, sleeperAndAwakeNum);
          _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.SummaryEventName.updateDetail, sleeperAndAwakeNum[0], sleeperAndAwakeNum[1], _this.roundNum); // Trigger the painter event to redraw

          _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.PainterEventName.repaint);
        } else {
          if (_this.awakeQueue.length == 0) {
            _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.PanelOpearationControllerEventName.endWakingProcess);
          } // Clear interval


          clearInterval(_this.refreshIntervalId);
        }
      }, this.frameTime);
    }
    /**
     * Pause the waking process 
     */

  }, {
    key: "pauseWakingProcessController",
    value: function pauseWakingProcessController() {
      this.isPause = true;
    }
    /**
     * Count the number of sleeper and Awaker
     */

  }, {
    key: "countSleeperAndAwake",
    value: function countSleeperAndAwake() {
      var sleeperNum = 0;

      var _iterator3 = _createForOfIteratorHelper(_data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_1__.SleeperPooler.pool),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var sleeper = _step3.value;

          if (sleeper.isSleeping) {
            sleeperNum += 1;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return [sleeperNum, _data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_1__.SleeperPooler.pool.length - sleeperNum];
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

      _utils_event__WEBPACK_IMPORTED_MODULE_2__.Eventer.addEventListener(_global_event_name_config__WEBPACK_IMPORTED_MODULE_1__.PanelOpearationControllerEventName.changeNodeStyle, this.changeCanvasInformation.bind(this)); // Register for pass the color

      _utils_event__WEBPACK_IMPORTED_MODULE_2__.Eventer.addEventListener(_global_event_name_config__WEBPACK_IMPORTED_MODULE_1__.SummaryEventName.getShareColor, this.passSleeperColor.bind(this));
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
    /**
     * set the color
     */

  }, {
    key: "passSleeperColor",
    value: function passSleeperColor(colorListForSet) {
      if (colorListForSet.length == 0) {
        colorListForSet.push(this.sleeperCanvasInformation.fillColor);
        colorListForSet.push(this.awakeCanvasInformation.fillColor);
      } else {
        colorListForSet[0] = this.sleeperCanvasInformation.fillColor;
        colorListForSet[1] = this.awakeCanvasInformation.fillColor;
      }
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
/* harmony export */   "UndoRedoEventName": () => (/* binding */ UndoRedoEventName),
/* harmony export */   "SummaryEventName": () => (/* binding */ SummaryEventName)
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
var SummaryEventName = {
  drawShare: 'drawShare',
  getShareColor: 'getShareColor',
  updateShareColor: 'updateShareColor',
  updateDetail: 'updateDetail'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1DO0FBU0YsNEJBQWM7QUFBQTs7QUFDVixTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBRCxJQUFBQSxjQUFjLENBQUNFLFFBQWYsR0FBMEIsSUFBMUI7QUFDSDs7OztXQVhELHVCQUFxQjtBQUNqQixVQUFHLENBQUMsS0FBS0EsUUFBVCxFQUFtQjtBQUNmLGFBQUtBLFFBQUwsR0FBZ0IsSUFBSUYsY0FBSixFQUFoQjtBQUNIOztBQUVELGFBQU8sS0FBS0UsUUFBWjtBQUNIOzs7U0FtQkQsZUFBcUI7QUFDakIsYUFBT0gsdURBQVMsQ0FBQyxLQUFLRSxLQUFOLENBQWhCO0FBQ0g7U0FkRCxhQUFtQkUsR0FBbkIsRUFBd0I7QUFDcEIsV0FBS0YsS0FBTCxHQUFhLEVBQWI7O0FBRUEsVUFBSUUsR0FBRyxZQUFZQyxLQUFuQixFQUEwQjtBQUFBLG1EQUNMRCxHQURLO0FBQUE7O0FBQUE7QUFDdEIsOERBQXNCO0FBQUEsZ0JBQWJFLElBQWE7QUFDbEIsaUJBQUtKLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQlAsdURBQVMsQ0FBQ00sSUFBRCxDQUF6QjtBQUNIO0FBSHFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJekIsT0FKRCxNQUlPO0FBQ0gsYUFBS0osS0FBTCxDQUFXSyxJQUFYLENBQWdCUCx1REFBUyxDQUFDSSxHQUFELENBQXpCO0FBQ0g7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCTDtBQUNBO0FBQ0E7QUFDQTs7SUFFTVE7Ozs7Ozs7O0FBQ0Y7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0ksK0JBQXlCQyxNQUF6QixFQUFpQ0MsUUFBakMsRUFBMkM7QUFDdkMsVUFBTUMsaUJBQWlCLEdBQUcsQ0FDdEJILFdBQVcsQ0FBQ0kscUJBRFUsRUFFdEJKLFdBQVcsQ0FBQ0ssaUJBRlUsRUFHdEJMLFdBQVcsQ0FBQ00sa0JBSFUsQ0FBMUI7O0FBTUEsNENBQTJCSCxpQkFBM0Isd0NBQThDO0FBQXpDLFlBQU1JLFlBQVkseUJBQWxCO0FBQ0QsWUFBTUMsVUFBVSxHQUFHRCxZQUFZLENBQUNOLE1BQUQsRUFBU0MsUUFBVCxDQUEvQjs7QUFDQSxZQUFJLENBQUMsQ0FBQ00sVUFBTixFQUFrQjtBQUNkLGlCQUFPQSxVQUFQO0FBQ0g7QUFDSjs7QUFFRCxhQUFPLElBQVA7QUFDSDtBQUdEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLDRCQUEwQlAsTUFBMUIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQ3hDLFVBQU1PLGFBQWEsR0FBR1IsTUFBTSxDQUFDUyxVQUFQLENBQWtCLElBQWxCLENBQXRCLENBRHdDLENBR3hDOztBQUNBLFVBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsVUFBRCxFQUFnQjtBQUN0QyxZQUFPQyxDQUFQLEdBQWVYLFFBQWYsQ0FBT1csQ0FBUDtBQUFBLFlBQVVDLENBQVYsR0FBZVosUUFBZixDQUFVWSxDQUFWO0FBQ0EsZUFBT0wsYUFBYSxDQUFDTSxhQUFkLENBQTRCSCxVQUE1QixFQUF3Q0MsQ0FBeEMsRUFBMkNDLENBQTNDLENBQVA7QUFDSCxPQUhELENBSndDLENBU3hDOzs7QUFDQSxVQUFNRSxtQkFBbUIsR0FBRztBQUN4QixrQkFBVUwsaUJBQWlCLENBQUNNLElBQWxCLENBQXVCLElBQXZCO0FBRGMsT0FBNUIsQ0FWd0MsQ0FjeEM7O0FBQ0EsV0FBSyxJQUFJQyxLQUFLLEdBQUd0Qix1RkFBQSxHQUE0QixDQUE3QyxFQUFnRHNCLEtBQUssSUFBSSxDQUF6RCxFQUE0REEsS0FBSyxFQUFqRSxFQUFxRTtBQUNqRSxZQUFNRyxPQUFPLEdBQUd6QixnRkFBQSxDQUFtQnNCLEtBQW5CLENBQWhCO0FBQ0EsWUFBTUksWUFBWSxHQUFHRCxPQUFPLENBQUNFLGlCQUE3QjtBQUNBLFlBQU1DLGlCQUFpQixHQUFHSCxPQUFPLENBQUNJLFVBQWxDO0FBQ0EsWUFBUUMsUUFBUixHQUFxQkosWUFBckIsQ0FBUUksUUFBUjs7QUFDQSxZQUFJVixtQkFBbUIsQ0FBQ1UsUUFBRCxDQUFuQixDQUE4QkYsaUJBQTlCLENBQUosRUFBc0Q7QUFDbEQsaUJBQU87QUFDSEcsWUFBQUEsTUFBTSxFQUFFTixPQURMO0FBRUhPLFlBQUFBLElBQUksRUFBRTtBQUZILFdBQVA7QUFJSDtBQUNKOztBQUVELGFBQU8sSUFBUDtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLDJCQUF5QjNCLE1BQXpCLEVBQWlDQyxRQUFqQyxFQUEyQztBQUN2QyxVQUFNTyxhQUFhLEdBQUdSLE1BQU0sQ0FBQ1MsVUFBUCxDQUFrQixJQUFsQixDQUF0QjtBQUNBLFVBQU9HLENBQVAsR0FBZVgsUUFBZixDQUFPVyxDQUFQO0FBQUEsVUFBVUMsQ0FBVixHQUFlWixRQUFmLENBQVVZLENBQVY7O0FBRUEsV0FBSyxJQUFJSSxLQUFLLEdBQUd0Qix1RkFBQSxHQUE0QixDQUE3QyxFQUFnRHNCLEtBQUssSUFBSSxDQUF6RCxFQUE0REEsS0FBSyxFQUFqRSxFQUFxRTtBQUNqRSxZQUFNRyxPQUFPLEdBQUd6QixnRkFBQSxDQUFtQnNCLEtBQW5CLENBQWhCOztBQUNBLFlBQUlHLE9BQU8sQ0FBQ1EsUUFBWixFQUFzQjtBQUFBLHFEQUNVUixPQUFPLENBQUNTLHFCQURsQjtBQUFBOztBQUFBO0FBQ2xCLGdFQUEyRDtBQUFBLGtCQUFoREMsYUFBZ0Q7QUFDdkQsa0JBQVFDLFVBQVIsR0FBdUJELGFBQXZCLENBQVFDLFVBQVI7O0FBQ0Esa0JBQUl2QixhQUFhLENBQUNNLGFBQWQsQ0FBNEJpQixVQUE1QixFQUF3Q25CLENBQXhDLEVBQTJDQyxDQUEzQyxDQUFKLEVBQW1EO0FBQy9DLHVCQUFPO0FBQ0hhLGtCQUFBQSxNQUFNLEVBQUUsQ0FBQ04sT0FBRCxFQUFVVSxhQUFWLENBREw7QUFFSEgsa0JBQUFBLElBQUksRUFBRTtBQUZILGlCQUFQO0FBSUg7QUFDSjtBQVRpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVXJCO0FBQ0o7O0FBRUQsYUFBTyxJQUFQO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksK0JBQTZCM0IsTUFBN0IsRUFBcUNDLFFBQXJDLEVBQStDO0FBQzNDLFVBQU1PLGFBQWEsR0FBR1IsTUFBTSxDQUFDUyxVQUFQLENBQWtCLElBQWxCLENBQXRCO0FBQ0EsVUFBT0csQ0FBUCxHQUFlWCxRQUFmLENBQU9XLENBQVA7QUFBQSxVQUFVQyxDQUFWLEdBQWVaLFFBQWYsQ0FBVVksQ0FBVjs7QUFDQSxXQUFLLElBQUlJLEtBQUssR0FBR3JCLDhFQUFBLEdBQXlCLENBQTFDLEVBQTZDcUIsS0FBSyxJQUFJLENBQXRELEVBQXlEQSxLQUFLLEVBQTlELEVBQWtFO0FBQzlELFlBQU1lLElBQUksR0FBR3BDLHVFQUFBLENBQWdCcUIsS0FBaEIsQ0FBYjtBQUNBLFlBQVFnQixJQUFSLEdBQWlCRCxJQUFJLENBQUNSLFVBQXRCLENBQVFTLElBQVI7O0FBQ0EsWUFBSXBDLGdFQUFhLENBQUNtQyxJQUFJLENBQUNFLGFBQU4sRUFBcUJGLElBQUksQ0FBQ0csV0FBMUIsRUFBdUN2QixDQUF2QyxFQUEwQ0MsQ0FBMUMsQ0FBakIsRUFBK0Q7QUFDM0QsaUJBQU87QUFDSGEsWUFBQUEsTUFBTSxFQUFFTSxJQURMO0FBRUhMLFlBQUFBLElBQUksRUFBRTtBQUZILFdBQVA7QUFJSDs7QUFDRCxZQUFJbkIsYUFBYSxDQUFDTSxhQUFkLENBQTRCbUIsSUFBNUIsRUFBa0NyQixDQUFsQyxFQUFxQ0MsQ0FBckMsQ0FBSixFQUE2QztBQUN6QyxpQkFBTztBQUNIYSxZQUFBQSxNQUFNLEVBQUVNLElBREw7QUFFSEwsWUFBQUEsSUFBSSxFQUFFO0FBRkgsV0FBUDtBQUlIO0FBQ0o7O0FBQ0QsYUFBTyxJQUFQO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTs7OztXQUNJLDhCQUE0QjtBQUN4QixVQUFNUyxrQkFBa0IsR0FBRyxFQUEzQjs7QUFEd0Isa0RBRUp6QyxnRkFGSTtBQUFBOztBQUFBO0FBRXhCLCtEQUF3QztBQUFBLGNBQS9CeUIsT0FBK0I7O0FBQ3BDLGNBQUlBLE9BQU8sQ0FBQ2lCLE1BQVosRUFBb0I7QUFDaEJELFlBQUFBLGtCQUFrQixDQUFDMUMsSUFBbkIsQ0FBd0IwQixPQUF4QjtBQUNIO0FBQ0o7QUFOdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPeEIsYUFBT2dCLGtCQUFQO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSx3QkFBc0JFLEVBQXRCLEVBQTBCQyxRQUExQixFQUFvQztBQUNoQyxVQUFJQyxLQUFLLEdBQUcsSUFBWjtBQUNBLGFBQU8sWUFBVztBQUNkLFlBQU1DLE9BQU8sR0FBRyxJQUFoQjtBQUNBLFlBQU1DLElBQUksR0FBR0MsU0FBYjs7QUFDQSxZQUFHLENBQUNILEtBQUosRUFBVztBQUNQQSxVQUFBQSxLQUFLLEdBQUdJLFVBQVUsQ0FBQyxZQUFVO0FBQ3pCTixZQUFBQSxFQUFFLENBQUNPLEtBQUgsQ0FBU0osT0FBVCxFQUFrQkMsSUFBbEI7QUFDQUYsWUFBQUEsS0FBSyxHQUFHLElBQVI7QUFDSCxXQUhpQixFQUdmRCxRQUhlLENBQWxCO0FBSUg7QUFDSixPQVREO0FBVUg7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksNEJBQTBCdEMsUUFBMUIsRUFBb0M7QUFDaEMsVUFBT1csQ0FBUCxHQUFlWCxRQUFmLENBQU9XLENBQVA7QUFBQSxVQUFVQyxDQUFWLEdBQWVaLFFBQWYsQ0FBVVksQ0FBVjs7QUFEZ0Msa0RBRVhsQixnRkFGVztBQUFBOztBQUFBO0FBRWhDLCtEQUF5QztBQUFBLGNBQS9CeUIsT0FBK0I7QUFDckMsY0FBTTBCLFFBQVEsR0FBRzFCLE9BQU8sQ0FBQ0UsaUJBQVIsQ0FBMEJWLENBQTNDO0FBQ0EsY0FBTW1DLFFBQVEsR0FBRzNCLE9BQU8sQ0FBQ0UsaUJBQVIsQ0FBMEJULENBQTNDO0FBQ0EsY0FBTW1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVUsU0FBQ0osUUFBUSxHQUFHbEMsQ0FBWixFQUFnQixDQUFoQixhQUFxQm1DLFFBQVEsR0FBRWxDLENBQS9CLEVBQW1DLENBQW5DLENBQVYsQ0FBakI7O0FBQ0EsY0FBSW1DLFFBQVEsR0FBRzVCLE9BQU8sQ0FBQ0UsaUJBQVIsQ0FBMEI2QixNQUExQixHQUFtQ3JELDZEQUFsRCxFQUE0RTtBQUN4RSxtQkFBT3NCLE9BQVA7QUFDSDtBQUNKO0FBVCtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBV2hDLGFBQU8sSUFBUDtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLDJCQUF5Qm5CLFFBQXpCLEVBQW1DO0FBQy9CLFVBQU1tRCxjQUFjLEdBQUcsS0FBS0Msa0JBQUwsQ0FBd0JwRCxRQUF4QixDQUF2Qjs7QUFDQSxVQUFJLENBQUNtRCxjQUFMLEVBQXFCO0FBQ2pCLGVBQU8sSUFBUDtBQUNIOztBQUVERSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkgsY0FBOUI7QUFFQSxVQUFNSSxlQUFlLEdBQUdKLGNBQWMsQ0FBQzlCLGlCQUFmLENBQWlDVixDQUF6RDtBQUNBLFVBQU02QyxlQUFlLEdBQUdMLGNBQWMsQ0FBQzlCLGlCQUFmLENBQWlDVCxDQUF6RDtBQUNBLFVBQU1zQyxNQUFNLEdBQUdDLGNBQWMsQ0FBQzlCLGlCQUFmLENBQWlDNkIsTUFBaEQ7QUFDQSxVQUFNTyxrQkFBa0IsR0FBRyxDQUN2QjtBQUNJOUMsUUFBQUEsQ0FBQyxFQUFFNEMsZUFBZSxHQUFHTCxNQUR6QjtBQUVJdEMsUUFBQUEsQ0FBQyxFQUFFNEM7QUFGUCxPQUR1QixFQUt2QjtBQUNJN0MsUUFBQUEsQ0FBQyxFQUFFNEMsZUFBZSxHQUFHTCxNQUR6QjtBQUVJdEMsUUFBQUEsQ0FBQyxFQUFFNEM7QUFGUCxPQUx1QixFQVN2QjtBQUNJN0MsUUFBQUEsQ0FBQyxFQUFFNEMsZUFEUDtBQUVJM0MsUUFBQUEsQ0FBQyxFQUFFNEMsZUFBZSxHQUFHTjtBQUZ6QixPQVR1QixFQWF2QjtBQUNJdkMsUUFBQUEsQ0FBQyxFQUFFNEMsZUFEUDtBQUVJM0MsUUFBQUEsQ0FBQyxFQUFFNEMsZUFBZSxHQUFHTjtBQUZ6QixPQWJ1QixDQUEzQjtBQW1CQSxVQUFJUSxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsZ0JBQXpCO0FBQ0EsVUFBSUMsV0FBVyxHQUFHLElBQWxCOztBQUNBLDhDQUE2Qkosa0JBQTdCLDJDQUFpRDtBQUE1QyxZQUFNSyxjQUFjLDJCQUFwQjtBQUNELFlBQU9uRCxDQUFQLEdBQWVtRCxjQUFmLENBQU9uRCxDQUFQO0FBQUEsWUFBVUMsQ0FBVixHQUFla0QsY0FBZixDQUFVbEQsQ0FBVjtBQUNBLFlBQU1tQyxRQUFRLEdBQUcsU0FBQy9DLFFBQVEsQ0FBQ1csQ0FBVCxHQUFhQSxDQUFkLEVBQWtCLENBQWxCLGFBQXVCWCxRQUFRLENBQUNZLENBQVQsR0FBYUEsQ0FBcEMsRUFBd0MsQ0FBeEMsQ0FBakI7O0FBQ0EsWUFBSW1DLFFBQVEsR0FBR1csV0FBZixFQUE0QjtBQUN4QkcsVUFBQUEsV0FBVyxHQUFHQyxjQUFkO0FBQ0FKLFVBQUFBLFdBQVcsR0FBR1gsUUFBZDtBQUNIO0FBQ0o7O0FBRUQsYUFBTztBQUNIZ0IsUUFBQUEsZUFBZSxFQUFFRixXQURkO0FBRUhHLFFBQUFBLGNBQWMsRUFBRWI7QUFGYixPQUFQO0FBSUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoT0UsSUFBTWMsZUFBZSxHQUFHO0FBQzNCQyxFQUFBQSxhQUFhLEVBQUUsZUFEWTtBQUUzQkMsRUFBQUEsWUFBWSxFQUFFLGNBRmE7QUFHM0JDLEVBQUFBLFVBQVUsRUFBRSxZQUhlO0FBSTNCQyxFQUFBQSxVQUFVLEVBQUUsWUFKZTtBQUszQkMsRUFBQUEsZ0JBQWdCLEVBQUUsa0JBTFM7QUFNM0JDLEVBQUFBLFVBQVUsRUFBRSxZQU5lO0FBTzNCQyxFQUFBQSxVQUFVLEVBQUU7QUFQZSxDQUF4QjtBQVVBLElBQU0zRSx3QkFBd0IsR0FBRyxFQUFqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVlA7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUdNa0Y7QUFDRixzQ0FBYztBQUFBOztBQUNWLFNBQUtDLGdCQUFMO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozs7O1dBQ0ksNEJBQW1CO0FBQ2Y7QUFDQSxVQUNJQyxjQURKLEdBUUlSLCtGQVJKO0FBQUEsVUFFSVMsYUFGSixHQVFJVCw4RkFSSjtBQUFBLFVBR0lVLGdCQUhKLEdBUUlWLGlHQVJKO0FBQUEsVUFJSVcsZ0JBSkosR0FRSVgsaUdBUko7QUFBQSxVQUtJWSxrQkFMSixHQVFJWixtR0FSSjtBQUFBLFVBTUlhLFlBTkosR0FRSWIsNkZBUko7QUFBQSxVQU9JYyxhQVBKLEdBUUlkLDhGQVJKLENBRmUsQ0FZZjs7QUFDQSxVQUFNZSxhQUFhLEdBQUcsRUFBdEI7QUFDQUEsTUFBQUEsYUFBYSxDQUFDUCxjQUFELENBQWIsR0FBZ0NMLHlGQUFBLENBQW1DLEtBQUtjLHdCQUF4QyxDQUFoQztBQUNBRixNQUFBQSxhQUFhLENBQUNELGFBQUQsQ0FBYixHQUErQlgsbUZBQUEsQ0FBNkIsS0FBS2dCLHVCQUFsQyxDQUEvQjtBQUNBSixNQUFBQSxhQUFhLENBQUNGLFlBQUQsQ0FBYixHQUE4QixLQUFLTyxzQkFBbkM7QUFDQUwsTUFBQUEsYUFBYSxDQUFDTixhQUFELENBQWIsR0FBK0IsS0FBS1ksdUJBQXBDO0FBQ0FOLE1BQUFBLGFBQWEsQ0FBQ0wsZ0JBQUQsQ0FBYixHQUFrQyxLQUFLWSwwQkFBdkM7QUFDQVAsTUFBQUEsYUFBYSxDQUFDSixnQkFBRCxDQUFiLEdBQWtDLEtBQUtZLDBCQUF2QztBQUNBUixNQUFBQSxhQUFhLENBQUNILGtCQUFELENBQWIsR0FBb0MsS0FBS1ksNEJBQXpDLENBcEJlLENBc0JmOztBQUNBLFdBQUssSUFBTUMsU0FBWCxJQUF3QlYsYUFBeEIsRUFBdUM7QUFDbkNiLFFBQUFBLGtFQUFBLENBQXlCdUIsU0FBekIsRUFBb0NWLGFBQWEsQ0FBQ1UsU0FBRCxDQUFqRDtBQUNIO0FBQ0o7QUFFRDtBQUNKO0FBQ0E7QUFDQTs7OztXQUNJLGtDQUF5QkUsV0FBekIsRUFBc0M7QUFDbENBLE1BQUFBLFdBQVcsQ0FBQ0MsVUFBWixHQURrQyxDQUdsQzs7QUFDQTFCLE1BQUFBLCtEQUFBLENBQ0lELCtFQURKO0FBR0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksaUNBQXdCdkQsT0FBeEIsRUFBaUNxRixRQUFqQyxFQUEyQztBQUN2QyxVQUFNQyxVQUFVLGFBQU10RixPQUFPLENBQUN1RixlQUFSLENBQXdCQyxPQUE5QixTQUF3Q0gsUUFBeEMsQ0FBaEIsQ0FEdUMsQ0FHdkM7O0FBQ0FyRixNQUFBQSxPQUFPLENBQUN1RixlQUFSLENBQXdCQyxPQUF4QixHQUFrQ0YsVUFBbEMsQ0FKdUMsQ0FNdkM7O0FBQ0F0RixNQUFBQSxPQUFPLENBQUN5RixhQUFSLENBQXNCQyxJQUF0QixHQUE2QkosVUFBN0I7QUFFQXBELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbkMsT0FBTyxDQUFDdUYsZUFBUixDQUF3QkMsT0FBcEMsRUFUdUMsQ0FXdkM7O0FBQ0FoQyxNQUFBQSwrREFBQSxDQUNJRCwrRUFESjtBQUdIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSxvQ0FBMkJ2RCxPQUEzQixFQUFvQztBQUNoQ0EsTUFBQUEsT0FBTyxDQUFDeUYsYUFBUixDQUFzQkUsSUFBdEI7QUFFQXpELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbkMsT0FBTyxDQUFDeUYsYUFBUixDQUFzQkMsSUFBbEMsRUFIZ0MsQ0FLaEM7O0FBQ0ExRixNQUFBQSxPQUFPLENBQUN1RixlQUFSLENBQXdCQyxPQUF4QixHQUFrQ3hGLE9BQU8sQ0FBQ3lGLGFBQVIsQ0FBc0JDLElBQXhELENBTmdDLENBUWhDOztBQUNBbEMsTUFBQUEsK0RBQUEsQ0FDSUQsK0VBREo7QUFHSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksb0NBQTJCdkQsT0FBM0IsRUFBb0M7QUFDaENBLE1BQUFBLE9BQU8sQ0FBQ3lGLGFBQVIsQ0FBc0JHLElBQXRCLEdBRGdDLENBR2hDOztBQUNBNUYsTUFBQUEsT0FBTyxDQUFDdUYsZUFBUixDQUF3QkMsT0FBeEIsR0FBa0N4RixPQUFPLENBQUN5RixhQUFSLENBQXNCQyxJQUF4RCxDQUpnQyxDQU1oQzs7QUFDQWxDLE1BQUFBLCtEQUFBLENBQ0lELCtFQURKO0FBR0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTs7OztXQUNJLHNDQUE2QnZELE9BQTdCLEVBQXNDO0FBQ2xDLFVBQU02RixZQUFZLEdBQUc3RixPQUFPLENBQUN1RixlQUFSLENBQXdCQyxPQUF4QixDQUFnQ3pGLE1BQXJEO0FBQ0EsVUFBTXVGLFVBQVUsR0FBR3RGLE9BQU8sQ0FBQ3VGLGVBQVIsQ0FBd0JDLE9BQXhCLENBQWdDTSxTQUFoQyxDQUEwQyxDQUExQyxFQUE2Q0QsWUFBWSxHQUFHLENBQTVELENBQW5CLENBRmtDLENBSWxDOztBQUNBN0YsTUFBQUEsT0FBTyxDQUFDdUYsZUFBUixDQUF3QkMsT0FBeEIsR0FBa0NGLFVBQWxDLENBTGtDLENBT2xDOztBQUNBdEYsTUFBQUEsT0FBTyxDQUFDeUYsYUFBUixDQUFzQkMsSUFBdEIsR0FBNkJKLFVBQTdCLENBUmtDLENBVWxDOztBQUNBOUIsTUFBQUEsK0RBQUEsQ0FDSUQsK0VBREo7QUFHSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksZ0NBQXVCd0MsTUFBdkIsRUFBK0I7QUFDM0IvSCxNQUFBQSxtRkFBQSxHQUF5QitILE1BQXpCO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozs7V0FDSSxpQ0FBd0JFLGdCQUF4QixFQUEwQztBQUFBLGlEQUNyQkEsZ0JBRHFCO0FBQUE7O0FBQUE7QUFDdEMsNERBQW1DO0FBQUEsY0FBMUI1SCxJQUEwQjs7QUFDL0I7QUFDQSxjQUFJQSxJQUFJLFlBQVlxRixnRUFBcEIsRUFBNkI7QUFDekI7QUFDQXJGLFlBQUFBLElBQUksQ0FBQzZILGVBQUwsR0FGeUIsQ0FJekI7O0FBQ0E3SCxZQUFBQSxJQUFJLENBQUN3RixnQkFBTCxHQUx5QixDQU96Qjs7QUFDQXhGLFlBQUFBLElBQUksQ0FBQzhILFdBQUw7QUFDSDtBQUNKLFNBYnFDLENBZXRDOztBQWZzQztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWdCdEMzQyxNQUFBQSwrREFBQSxDQUNJRCwrRUFESjtBQUdIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEtMO0FBQ0E7QUFDQTtBQUlBOztJQUVNK0M7QUFDRiwwQkFBWTFILE1BQVosRUFBb0IySCxXQUFwQixFQUFpQztBQUFBOztBQUM3QixTQUFLM0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBSzJILFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS25ILGFBQUwsR0FBcUIsS0FBS1IsTUFBTCxDQUFZUyxVQUFaLENBQXVCLElBQXZCLENBQXJCO0FBQ0EsU0FBS21ILFVBQUw7QUFDSDtBQUVEO0FBQ0o7QUFDQTs7Ozs7V0FDSSxzQkFBYTtBQUNULFVBQU1DLFVBQVUsR0FBRztBQUNmLG1CQUFXLEtBQUtDLE9BQUwsQ0FBYTlHLElBQWIsQ0FBa0IsSUFBbEI7QUFESSxPQUFuQjs7QUFEUyxpQ0FLQStHLE1BTEE7QUFNTEMsUUFBQUEsTUFBTSxDQUFDNUIsZ0JBQVAsQ0FBd0IyQixNQUF4QixFQUFnQyxVQUFBRSxLQUFLLEVBQUk7QUFDckM7QUFDQSxjQUFJQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsRUFBYixJQUFtQlYsb0VBQXZCLEVBQTBDO0FBQ3RDO0FBQ0g7O0FBRURJLFVBQUFBLFVBQVUsQ0FBQ0UsTUFBRCxDQUFWLENBQW1CRSxLQUFuQjtBQUNILFNBUEQ7QUFOSzs7QUFLVCxXQUFLLElBQUlGLE1BQVQsSUFBbUJGLFVBQW5CLEVBQStCO0FBQUEsY0FBdEJFLE1BQXNCO0FBUzlCO0FBQ0o7OztXQUVELGlCQUFRRSxLQUFSLEVBQWU7QUFDWCxVQUFNRyxJQUFJLEdBQUdILEtBQUssQ0FBQ0ksT0FBbkIsQ0FEVyxDQUdYOztBQUNBLFVBQU1DLFlBQVksR0FBRyxLQUFLWCxXQUFMLENBQWlCWSxnQkFBakIsWUFBNkN6RCxnRUFBN0MsSUFDbEIsS0FBSzZDLFdBQUwsQ0FBaUJZLGdCQUFqQixDQUFrQ0MsVUFEckM7O0FBR0EsY0FBT0osSUFBUDtBQUNJLGFBQUssQ0FBTDtBQUNJO0FBQ0FFLFVBQUFBLFlBQVksR0FBRyxLQUFLRyxrQkFBTCxFQUFILEdBQStCLEtBQUtDLGNBQUwsRUFBM0M7QUFDQTs7QUFDSixhQUFLLEVBQUw7QUFDSTtBQUNBLGNBQUksQ0FBQ1QsS0FBSyxDQUFDVSxPQUFOLElBQWlCVixLQUFLLENBQUNXLE9BQXhCLEtBQW9DLENBQUNYLEtBQUssQ0FBQ1ksUUFBL0MsRUFBeUQ7QUFDckRQLFlBQUFBLFlBQVksR0FDWjFELCtEQUFBLENBQ0lGLGlHQURKLEVBRUksS0FBS2lELFdBQUwsQ0FBaUJZLGdCQUZyQixDQURZLEdBS1YzRCwrREFBQSxDQUFzQjRDLDZFQUF0QixDQUxGO0FBTUgsV0FUTCxDQVdJOzs7QUFDQSxjQUFJLENBQUNTLEtBQUssQ0FBQ1UsT0FBTixJQUFpQlYsS0FBSyxDQUFDVyxPQUF4QixLQUFvQ1gsS0FBSyxDQUFDWSxRQUE5QyxFQUF3RDtBQUNwRFAsWUFBQUEsWUFBWSxHQUNaMUQsK0RBQUEsQ0FDSUYsaUdBREosRUFFSSxLQUFLaUQsV0FBTCxDQUFpQlksZ0JBRnJCLENBRFksR0FLVjNELCtEQUFBLENBQXNCNEMsNkVBQXRCLENBTEY7QUFNSDs7QUFDRDs7QUFDSixhQUFLLEVBQUw7QUFDSTtBQUNBLGNBQUcsQ0FBQ1MsS0FBSyxDQUFDVSxPQUFOLElBQWlCVixLQUFLLENBQUNXLE9BQXhCLEtBQW9DLENBQUNYLEtBQUssQ0FBQ1ksUUFBOUMsRUFBd0Q7QUFDcERQLFlBQUFBLFlBQVksR0FDWjFELCtEQUFBLENBQXNCLE1BQXRCLENBRFksR0FFVkEsK0RBQUEsQ0FDRUYsNkZBREYsRUFFRSxLQUFLaUQsV0FBTCxDQUFpQlksZ0JBRm5CLENBRkY7QUFNSDs7QUFDRDs7QUFDSixhQUFLLEVBQUw7QUFDSTtBQUNBLGNBQUcsQ0FBQ04sS0FBSyxDQUFDVSxPQUFOLElBQWlCVixLQUFLLENBQUNXLE9BQXhCLEtBQW9DLENBQUNYLEtBQUssQ0FBQ1ksUUFBOUMsRUFBd0Q7QUFDcERQLFlBQUFBLFlBQVksR0FDWjFELCtEQUFBLENBQXNCLE1BQXRCLENBRFksR0FFVkEsK0RBQUEsQ0FDRUYsOEZBREYsRUFFRSxLQUFLaUQsV0FBTCxDQUFpQlksZ0JBRm5CLENBRkY7QUFNSDs7QUFDRDs7QUFDSjtBQUNJLGNBQ0lILElBQUksSUFBSSxFQUFSLElBQWNBLElBQUksSUFBSSxFQUF0QixJQUNBQSxJQUFJLElBQUksRUFBUixJQUFjQSxJQUFJLElBQUksRUFEdEIsSUFFQUEsSUFBSSxJQUFJLEVBQVIsSUFBY0EsSUFBSSxJQUFJLEdBSDFCLEVBSUU7QUFDRUUsWUFBQUEsWUFBWSxJQUFJLEtBQUtRLGFBQUwsQ0FBbUJiLEtBQUssQ0FBQ2MsR0FBTixDQUFVQyxRQUFWLEVBQW5CLENBQWhCO0FBQ0g7O0FBQ0Q7QUF4RFI7QUEwREg7QUFFRDtBQUNKO0FBQ0E7QUFDQTs7OztXQUNJLHVCQUFjRCxHQUFkLEVBQW1CO0FBQ2ZuRSxNQUFBQSwrREFBQSxDQUNJRiw4RkFESixFQUVJLEtBQUtpRCxXQUFMLENBQWlCWSxnQkFGckIsRUFHSVEsR0FISjtBQUtIO0FBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksMEJBQWlCO0FBQ2I7QUFDQSxVQUNJLEtBQUtwQixXQUFMLENBQWlCWSxnQkFBakIsSUFDRyxLQUFLWixXQUFMLENBQWlCWSxnQkFBakIsQ0FBa0MzRyxRQUZ6QyxFQUdFO0FBQ0VnRCxRQUFBQSwrREFBQSxDQUNJRiwrRkFESixFQUVJLEtBQUtpRCxXQUFMLENBQWlCWSxnQkFGckI7QUFJSDtBQUNKO0FBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksOEJBQXFCO0FBQ2pCM0QsTUFBQUEsK0RBQUEsQ0FDSUYsbUdBREosRUFFSSxLQUFLaUQsV0FBTCxDQUFpQlksZ0JBRnJCO0FBSUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0N6SUw7O0FBQ08sU0FBU1UsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkJoQixNQUE3QixFQUFxQztBQUN4QyxVQUFPZ0IsSUFBUDtBQUNJLFNBQUtoRixrRUFBTDtBQUNJLGFBQU87QUFDSHRELFFBQUFBLENBQUMsRUFBRXNILE1BQU0sQ0FBQzVHLGlCQUFQLENBQXlCVixDQUR6QjtBQUVIQyxRQUFBQSxDQUFDLEVBQUVxSCxNQUFNLENBQUM1RyxpQkFBUCxDQUF5QlQ7QUFGekIsT0FBUDs7QUFJSixTQUFNcUQsK0RBQU47QUFDSSxhQUFPO0FBQ0h0RCxRQUFBQSxDQUFDLEVBQUVzSCxNQUFNLENBQUMvRixXQUFQLENBQW1CdkIsQ0FEbkI7QUFFSEMsUUFBQUEsQ0FBQyxFQUFFcUgsTUFBTSxDQUFDL0YsV0FBUCxDQUFtQnRCO0FBRm5CLE9BQVA7O0FBSUo7QUFDSTtBQVpSO0FBY0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTXdJO0FBQ0YsbUNBQWM7QUFBQTs7QUFDVixTQUFLcEUsZ0JBQUw7QUFDSDtBQUVEO0FBQ0o7QUFDQTs7Ozs7V0FDSSw0QkFBbUI7QUFDZjtBQUNBLFVBQ0lxRSxnQkFESixHQVVJNUUsaUdBVko7QUFBQSxVQUVJNkUsYUFGSixHQVVJN0UsOEZBVko7QUFBQSxVQUdJOEUsbUJBSEosR0FVSTlFLG9HQVZKO0FBQUEsVUFJSStFLGdCQUpKLEdBVUkvRSxpR0FWSjtBQUFBLFVBS0lnRixhQUxKLEdBVUloRiw4RkFWSjtBQUFBLFVBTUlpRixjQU5KLEdBVUlqRiwrRkFWSjtBQUFBLFVBT0lrRixhQVBKLEdBVUlsRiw4RkFWSjtBQUFBLFVBUUltRixXQVJKLEdBVUluRiw0RkFWSjtBQUFBLFVBU0lvRixnQkFUSixHQVVJcEYsaUdBVkosQ0FGZSxDQWNmOztBQUNBLFVBQU1lLGFBQWEsR0FBRyxFQUF0QjtBQUNBQSxNQUFBQSxhQUFhLENBQUM2RCxnQkFBRCxDQUFiLEdBQWtDLEtBQUtTLDBCQUF2QztBQUNBdEUsTUFBQUEsYUFBYSxDQUFDOEQsYUFBRCxDQUFiLEdBQStCLEtBQUtTLHVCQUFwQztBQUNBdkUsTUFBQUEsYUFBYSxDQUFDK0QsbUJBQUQsQ0FBYixHQUFxQyxLQUFLUyw2QkFBMUM7QUFDQXhFLE1BQUFBLGFBQWEsQ0FBQ2dFLGdCQUFELENBQWIsR0FBa0MsS0FBS1MsMEJBQXZDO0FBQ0F6RSxNQUFBQSxhQUFhLENBQUNpRSxhQUFELENBQWIsR0FBK0IsS0FBS1MsdUJBQXBDO0FBQ0ExRSxNQUFBQSxhQUFhLENBQUNrRSxjQUFELENBQWIsR0FBZ0M5RSw0RkFBQSxDQUFzQyxLQUFLd0Ysd0JBQUwsQ0FBOEJySixJQUE5QixDQUFtQyxJQUFuQyxDQUF0QyxDQUFoQztBQUNBeUUsTUFBQUEsYUFBYSxDQUFDbUUsYUFBRCxDQUFiLEdBQStCL0UsMkZBQUEsQ0FBcUMsS0FBSzBGLHVCQUFMLENBQTZCdkosSUFBN0IsQ0FBa0MsSUFBbEMsQ0FBckMsQ0FBL0I7QUFDQXlFLE1BQUFBLGFBQWEsQ0FBQ29FLFdBQUQsQ0FBYixHQUE2QmhGLHlGQUFBLENBQW1DLEtBQUs0RixxQkFBTCxDQUEyQnpKLElBQTNCLENBQWdDLElBQWhDLENBQW5DLENBQTdCO0FBQ0F5RSxNQUFBQSxhQUFhLENBQUNxRSxnQkFBRCxDQUFiLEdBQWtDLEtBQUtZLDBCQUF2QyxDQXhCZSxDQTBCZjs7QUFDQSxXQUFLLElBQU12RSxTQUFYLElBQXdCVixhQUF4QixFQUF1QztBQUNuQ2IsUUFBQUEsa0VBQUEsQ0FBeUJ1QixTQUF6QixFQUFvQ1YsYUFBYSxDQUFDVSxTQUFELENBQWpEO0FBQ0g7QUFDSjtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksb0NBQTJCL0UsT0FBM0IsRUFBb0M7QUFDaENrQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CbkMsT0FBTyxDQUFDdUYsZUFBUixDQUF3QkMsT0FBNUMsRUFEZ0MsQ0FHaEM7O0FBQ0FoQyxNQUFBQSwrREFBQSxDQUNJdUUseUZBREosRUFFSS9ILE9BRkosRUFKZ0MsQ0FTaEM7O0FBQ0F3RCxNQUFBQSwrREFBQSxDQUNJRCwrRUFESjtBQUdIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSxpQ0FBd0IzQyxJQUF4QixFQUE4QjtBQUMxQjtBQUNBNEMsTUFBQUEsK0RBQUEsQ0FDSXdFLG1GQURKLEVBRUlwSCxJQUZKLEVBRjBCLENBTzFCOztBQUNBNEMsTUFBQUEsK0RBQUEsQ0FDSUQsK0VBREo7QUFHSDtBQUVEO0FBQ0o7QUFDQTs7OztXQUNJLHlDQUFnQztBQUM1QnJCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaOztBQUQ0QixpREFFTjVELGdGQUZNO0FBQUE7O0FBQUE7QUFFNUIsNERBQTBDO0FBQUEsY0FBL0J5QixPQUErQjtBQUN0QztBQUNBQSxVQUFBQSxPQUFPLENBQUN5SixrQkFBUixDQUEyQixJQUEzQixFQUZzQyxDQUl0Qzs7QUFDQXpKLFVBQUFBLE9BQU8sQ0FBQzBKLFdBQVI7QUFDSDtBQVIyQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtEQVVUbEwsdUVBVlM7QUFBQTs7QUFBQTtBQVU1QiwrREFBb0M7QUFBQSxjQUF6Qm9DLElBQXlCO0FBQ2hDQSxVQUFBQSxJQUFJLENBQUNKLFFBQUwsR0FBZ0IsS0FBaEI7QUFDSDtBQVoyQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWM1QjBCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZNUQsZ0ZBQVosRUFkNEIsQ0FnQjVCOztBQUNBaUYsTUFBQUEsK0RBQUEsQ0FDSUQsK0VBREo7QUFHSDtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxvQ0FBMkJvRyxlQUEzQixFQUE0Q0Msb0JBQTVDLEVBQWtFO0FBQUEsa0RBQ3hDRCxlQUR3QztBQUFBOztBQUFBO0FBQzlELCtEQUF1QztBQUFBLGNBQTVCM0osT0FBNEI7QUFDbkMsY0FBTTZKLE9BQU8sR0FBRzdKLE9BQU8sQ0FBQ0UsaUJBQVIsQ0FBMEJWLENBQTFDO0FBQ0EsY0FBTXNLLE9BQU8sR0FBRzlKLE9BQU8sQ0FBQ0UsaUJBQVIsQ0FBMEJULENBQTFDO0FBQ0EsY0FBTXNLLElBQUksR0FBR0YsT0FBTyxHQUFHRCxvQkFBb0IsQ0FBQ3BLLENBQTVDO0FBQ0EsY0FBTXdLLElBQUksR0FBR0YsT0FBTyxHQUFHRixvQkFBb0IsQ0FBQ25LLENBQTVDO0FBQ0FPLFVBQUFBLE9BQU8sQ0FBQ2lLLHVCQUFSLENBQWdDO0FBQzVCekssWUFBQUEsQ0FBQyxFQUFFdUssSUFEeUI7QUFFNUJ0SyxZQUFBQSxDQUFDLEVBQUV1SztBQUZ5QixXQUFoQzs7QUFMbUMsc0RBVWhCaEssT0FBTyxDQUFDa0ssUUFWUTtBQUFBOztBQUFBO0FBVW5DLG1FQUFxQztBQUFBLGtCQUExQnRKLElBQTBCO0FBQ2pDQSxjQUFBQSxJQUFJLENBQUN1SixXQUFMLENBQWlCLE9BQWpCLEVBQTBCO0FBQ3RCM0ssZ0JBQUFBLENBQUMsRUFBRW9CLElBQUksQ0FBQ0UsYUFBTCxDQUFtQnRCLENBQW5CLEdBQXVCb0ssb0JBQW9CLENBQUNwSyxDQUR6QjtBQUV0QkMsZ0JBQUFBLENBQUMsRUFBRW1CLElBQUksQ0FBQ0UsYUFBTCxDQUFtQnJCLENBQW5CLEdBQXVCbUssb0JBQW9CLENBQUNuSztBQUZ6QixlQUExQjtBQUlIO0FBZmtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsc0RBaUJoQk8sT0FBTyxDQUFDb0ssZ0JBakJRO0FBQUE7O0FBQUE7QUFpQm5DLG1FQUE2QztBQUFBLGtCQUFsQ3hKLEtBQWtDOztBQUN6Q0EsY0FBQUEsS0FBSSxDQUFDdUosV0FBTCxDQUFpQixLQUFqQixFQUF3QjtBQUNwQjNLLGdCQUFBQSxDQUFDLEVBQUVvQixLQUFJLENBQUNHLFdBQUwsQ0FBaUJ2QixDQUFqQixHQUFxQm9LLG9CQUFvQixDQUFDcEssQ0FEekI7QUFFcEJDLGdCQUFBQSxDQUFDLEVBQUVtQixLQUFJLENBQUNHLFdBQUwsQ0FBaUJ0QixDQUFqQixHQUFxQm1LLG9CQUFvQixDQUFDbks7QUFGekIsZUFBeEI7QUFJSDtBQXRCa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVCdEMsU0F4QjZELENBMEI5RDs7QUExQjhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBMkI5RCtELE1BQUFBLCtEQUFBLENBQ0lELCtFQURKO0FBR0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksaUNBQXdCOEcsUUFBeEIsRUFBa0NDLGVBQWxDLEVBQW1EO0FBQy9DRCxNQUFBQSxRQUFRLENBQUNGLFdBQVQsQ0FBcUIsS0FBckIsRUFBNEJHLGVBQTVCLEVBRCtDLENBRy9DOztBQUNBLFVBQUksQ0FBQyxDQUFDRCxRQUFRLENBQUNFLFVBQWYsRUFBMkI7QUFDdkJGLFFBQUFBLFFBQVEsQ0FBQ0UsVUFBVCxDQUFvQkMsa0JBQXBCLENBQXVDSCxRQUF2QztBQUNBQSxRQUFBQSxRQUFRLENBQUNJLFNBQVQsQ0FBbUIsSUFBbkI7QUFDSCxPQVA4QyxDQVMvQzs7O0FBQ0FqSCxNQUFBQSwrREFBQSxDQUNJRCwrRUFESjtBQUdIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSxrQ0FBeUJvRyxlQUF6QixFQUEwQztBQUFBLGtEQUNqQkEsZUFEaUI7QUFBQTs7QUFBQTtBQUN0QywrREFBc0M7QUFBQSxjQUE1QjNKLE9BQTRCO0FBQ2xDQSxVQUFBQSxPQUFPLENBQUMwSyxnQkFBUjtBQUNIO0FBSHFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJekM7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksaUNBQXdCQyxnQkFBeEIsRUFBMEMvSixJQUExQyxFQUFnRGdLLGFBQWhELEVBQStEO0FBQzNELDZDQUFpQ0QsZ0JBQWpDO0FBQUEsVUFBTzNLLE9BQVA7QUFBQSxVQUFnQlUsYUFBaEI7O0FBQ0FWLE1BQUFBLE9BQU8sQ0FBQzZLLE9BQVIsQ0FBZ0JqSyxJQUFoQixFQUYyRCxDQUkzRDs7QUFDQSxVQUFJLENBQUMsQ0FBQ2dLLGFBQU4sRUFBcUI7QUFDakIsYUFBS3ZCLHFCQUFMLENBQTJCekksSUFBM0IsRUFBaUNnSyxhQUFqQztBQUNIO0FBQ0o7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksK0JBQXNCaEssSUFBdEIsRUFBNEJnSyxhQUE1QixFQUEyQztBQUN2QyxVQUNJaEksZUFESixHQUdJZ0ksYUFISixDQUNJaEksZUFESjtBQUFBLFVBRUlDLGNBRkosR0FHSStILGFBSEosQ0FFSS9ILGNBRkosQ0FEdUMsQ0FNdkM7O0FBQ0FBLE1BQUFBLGNBQWMsQ0FBQ2lJLGVBQWYsQ0FBK0JsSyxJQUEvQixFQVB1QyxDQVN2Qzs7QUFDQUEsTUFBQUEsSUFBSSxDQUFDdUosV0FBTCxDQUFpQixLQUFqQixFQUF3QnZILGVBQXhCLEVBVnVDLENBWXZDOztBQUNBaEMsTUFBQUEsSUFBSSxDQUFDNkosU0FBTCxDQUFlNUgsY0FBZixFQWJ1QyxDQWV2Qzs7QUFDQWpDLE1BQUFBLElBQUksQ0FBQ21LLFlBQUwsQ0FBa0JDLFFBQWxCLENBQTJCbkksY0FBM0IsRUFoQnVDLENBa0J2Qzs7QUFDQVcsTUFBQUEsK0RBQUEsQ0FDSUQsK0VBREo7QUFHSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksb0NBQTJCdkQsT0FBM0IsRUFBb0M7QUFDaEM7QUFDQXdELE1BQUFBLCtEQUFBLENBQ0l1RSxpR0FESixFQUVJL0gsT0FGSixFQUZnQyxDQU9oQzs7QUFDQXdELE1BQUFBLCtEQUFBLENBQ0lELCtFQURKO0FBR0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5T0w7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTTZIO0FBQ0YsdUJBQVl4TSxNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2hCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtRLGFBQUwsR0FBcUIsS0FBS1IsTUFBTCxDQUFZUyxVQUFaLENBQXVCLElBQXZCLENBQXJCO0FBQ0EsU0FBS2dNLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQnpJLCtEQUFsQjtBQUNBLFNBQUtxRSxnQkFBTCxHQUF3QixJQUF4QixDQU5nQixDQVFoQjs7QUFDQSxTQUFLcUUsYUFBTCxHQUFxQixJQUFyQixDQVRnQixDQVdoQjs7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBRUEsU0FBS2pGLFVBQUw7QUFDSDs7Ozs7QUFFRDtBQUNKO0FBQ0E7QUFDSSwwQkFBYTtBQUFBOztBQUNULFVBQU1DLFVBQVUsR0FBRztBQUNmLHFCQUFhLEtBQUtpRixlQUFMLENBQXFCOUwsSUFBckIsQ0FBMEIsSUFBMUIsQ0FERTtBQUVmLHFCQUFhakIscUVBQUEsQ0FBMkIsS0FBS2lOLGVBQUwsQ0FBcUJoTSxJQUFyQixDQUEwQixJQUExQixDQUEzQixFQUE0RCxPQUFPLEVBQW5FLENBRkU7QUFHZixtQkFBVyxLQUFLaU0sY0FBTCxDQUFvQmpNLElBQXBCLENBQXlCLElBQXpCLENBSEk7QUFJZixvQkFBWSxLQUFLa00sc0JBQUwsQ0FBNEJsTSxJQUE1QixDQUFpQyxJQUFqQyxDQUpHO0FBS2YsdUJBQWUsS0FBS21NLDRCQUFMLENBQWtDbk0sSUFBbEMsQ0FBdUMsSUFBdkM7QUFMQSxPQUFuQjs7QUFEUyxpQ0FTQStHLE1BVEE7QUFVTCxhQUFJLENBQUMvSCxNQUFMLENBQVlvRyxnQkFBWixDQUE2QjJCLE1BQTdCLEVBQXFDLFVBQUFFLEtBQUssRUFBSTtBQUMxQ0osVUFBQUEsVUFBVSxDQUFDRSxNQUFELENBQVYsQ0FBbUJFLEtBQW5CO0FBQ0gsU0FGRDtBQVZLOztBQVNULFdBQUssSUFBSUYsTUFBVCxJQUFtQkYsVUFBbkIsRUFBK0I7QUFBQSxjQUF0QkUsTUFBc0I7QUFJOUI7QUFDSjs7O1dBRUQsMEJBQWlCbkgsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCO0FBQ25CLFdBQUs0TCxjQUFMLEdBQXNCN0wsQ0FBdEI7QUFDQSxXQUFLOEwsY0FBTCxHQUFzQjdMLENBQXRCO0FBQ0g7OztXQUVELHlCQUFnQm9ILEtBQWhCLEVBQXVCO0FBQ25CO0FBQ0FyRCxNQUFBQSwrREFBQSxDQUNJMEgsMEdBREosRUFFSSxJQUZKO0FBS0EsVUFBTXJNLFFBQVEsR0FBRztBQUNiVyxRQUFBQSxDQUFDLEVBQUVxSCxLQUFLLENBQUNvRixPQURJO0FBRWJ4TSxRQUFBQSxDQUFDLEVBQUVvSCxLQUFLLENBQUNxRjtBQUZJLE9BQWpCLENBUG1CLENBWW5COztBQUNBLFdBQUtDLGdCQUFMLENBQXNCdE4sUUFBUSxDQUFDVyxDQUEvQixFQUFrQ1gsUUFBUSxDQUFDWSxDQUEzQyxFQWJtQixDQWVuQjs7QUFDQSxVQUFNMk0sYUFBYSxHQUFHek4sd0VBQUEsQ0FBOEIsS0FBS0MsTUFBbkMsRUFBMkNDLFFBQTNDLENBQXRCO0FBRUFxRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QmlLLGFBQTlCLEVBbEJtQixDQW9CbkI7O0FBQ0EsVUFBSXZGLEtBQUssQ0FBQ3lGLE1BQU4sSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDbkI7QUFDQSxZQUFJL0wsSUFBSSxHQUFHLElBQVg7QUFDQSxZQUFJRCxNQUFNLEdBQUcsSUFBYjs7QUFFQSxZQUFJOEwsYUFBSixFQUFtQjtBQUNmN0wsVUFBQUEsSUFBSSxHQUFHNkwsYUFBYSxDQUFDN0wsSUFBckI7QUFDQUQsVUFBQUEsTUFBTSxHQUFHOEwsYUFBYSxDQUFDOUwsTUFBdkI7QUFDSDs7QUFFRGtELFFBQUFBLCtEQUFBLENBQ0lGLGdHQURKLEVBRUkvQyxJQUZKLEVBR0lELE1BSEosRUFJSTtBQUNJZCxVQUFBQSxDQUFDLEVBQUVxSCxLQUFLLENBQUNvRixPQURiO0FBRUl4TSxVQUFBQSxDQUFDLEVBQUVvSCxLQUFLLENBQUNxRjtBQUZiLFNBSko7QUFVQTtBQUNILE9BMUNrQixDQTRDbkI7OztBQUNBLFVBQUcsQ0FBQyxDQUFDRSxhQUFMLEVBQW9CO0FBQ2hCLFlBQU83TCxLQUFQLEdBQXVCNkwsYUFBdkIsQ0FBTzdMLElBQVA7QUFBQSxZQUFhRCxPQUFiLEdBQXVCOEwsYUFBdkIsQ0FBYTlMLE1BQWI7O0FBQ0EsZ0JBQU9DLEtBQVA7QUFDSSxlQUFLLE1BQUw7QUFDSWlELFlBQUFBLCtEQUFBLENBQ0lGLDhGQURKLEVBRUloRCxPQUZKO0FBSUEsaUJBQUtpTCxVQUFMLEdBQWtCekksK0RBQWxCO0FBQ0EsaUJBQUtxRSxnQkFBTCxHQUF3QjdHLE9BQXhCO0FBQ0E7O0FBQ0osZUFBSyxNQUFMO0FBQ0ksaUJBQUtpTCxVQUFMLEdBQWtCekksK0RBQWxCO0FBQ0EsaUJBQUtxRSxnQkFBTCxHQUF3QjdHLE9BQXhCO0FBQ0E7O0FBQ0osZUFBSyxRQUFMO0FBQ0ksaUJBQUtpTCxVQUFMLEdBQWtCekksaUVBQWxCO0FBQ0EsaUJBQUtxRSxnQkFBTCxHQUF3QjdHLE9BQXhCO0FBQ0E7O0FBQ0osZUFBSyxTQUFMO0FBQ0lrRCxZQUFBQSwrREFBQSxDQUNJRixpR0FESixFQUVJaEQsT0FGSjtBQUlBLGlCQUFLaUwsVUFBTCxHQUFrQnpJLGtFQUFsQjtBQUNBLGlCQUFLcUUsZ0JBQUwsR0FBd0I3RyxPQUF4QjtBQUNBO0FBeEJSLFNBRmdCLENBNkJoQjs7O0FBQ0EsYUFBS21MLGFBQUwsR0FBcUI1RCx5REFBYSxDQUFDLEtBQUswRCxVQUFOLEVBQWtCLEtBQUtwRSxnQkFBdkIsQ0FBbEM7QUFDQTtBQUNILE9BN0VrQixDQStFbkI7OztBQUNBLFdBQUtvRSxVQUFMLEdBQWtCekkscUVBQWxCO0FBQ0FVLE1BQUFBLCtEQUFBLENBQ0lGLG9HQURKLEVBRUksSUFGSjtBQUlIOzs7V0FFRCx5QkFBZ0J1RCxLQUFoQixFQUF1QjtBQUNuQixjQUFPLEtBQUswRSxVQUFaO0FBQ0ksYUFBS3pJLCtEQUFMO0FBQ0ksZUFBSzBKLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixFQUFrQzVGLEtBQWxDOztBQUNBOztBQUNKLGFBQUsvRCxrRUFBTDtBQUNJLGVBQUs0Six1QkFBTCxDQUE2QkQsSUFBN0IsQ0FBa0MsSUFBbEMsRUFBd0M1RixLQUF4Qzs7QUFDQTs7QUFDSixhQUFLL0QsaUVBQUw7QUFDSSxlQUFLNkosc0JBQUwsQ0FBNEJGLElBQTVCLENBQWlDLElBQWpDLEVBQXVDNUYsS0FBdkM7O0FBQ0E7O0FBQ0osYUFBSy9ELHFFQUFMO0FBQ0ksZUFBSzhKLDBCQUFMLENBQWdDSCxJQUFoQyxDQUFxQyxJQUFyQyxFQUEyQzVGLEtBQTNDOztBQUNBOztBQUNKLGFBQUsvRCwrREFBTDtBQUNJLGVBQUsrSixvQkFBTCxDQUEwQkosSUFBMUIsQ0FBK0IsSUFBL0IsRUFBcUM1RixLQUFyQzs7QUFDQTtBQWZSO0FBaUJIOzs7V0FFRCwyQkFBa0JBLEtBQWxCLEVBQXlCO0FBQ3JCLFVBQU1oSSxRQUFRLEdBQUc7QUFDYlcsUUFBQUEsQ0FBQyxFQUFFcUgsS0FBSyxDQUFDb0YsT0FESTtBQUVieE0sUUFBQUEsQ0FBQyxFQUFFb0gsS0FBSyxDQUFDcUY7QUFGSSxPQUFqQixDQURxQixDQU1yQjs7QUFDQSxVQUFNRSxhQUFhLEdBQUd6Tix3RUFBQSxDQUE4QixLQUFLQyxNQUFuQyxFQUEyQ0MsUUFBM0MsQ0FBdEI7O0FBQ0EsVUFBRyxDQUFDLENBQUN1TixhQUFMLEVBQW9CO0FBQ2hCLFlBQVE3TCxJQUFSLEdBQWlCNkwsYUFBakIsQ0FBUTdMLElBQVI7O0FBQ0EsZ0JBQU9BLElBQVA7QUFDSSxlQUFLLFFBQUw7QUFDSSxpQkFBSzNCLE1BQUwsQ0FBWWtPLEtBQVosQ0FBa0JDLE1BQWxCLEdBQTJCLFdBQTNCO0FBQ0E7O0FBQ0osZUFBSyxTQUFMO0FBQ0ksaUJBQUtuTyxNQUFMLENBQVlrTyxLQUFaLENBQWtCQyxNQUFsQixHQUEyQixTQUEzQjtBQUNBOztBQUNKLGVBQUssTUFBTDtBQUNJN0ssWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBLGlCQUFLdkQsTUFBTCxDQUFZa08sS0FBWixDQUFrQkMsTUFBbEIsR0FBMkIsU0FBM0I7QUFDQTs7QUFDSixlQUFLLE1BQUw7QUFDSTdLLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQSxpQkFBS3ZELE1BQUwsQ0FBWWtPLEtBQVosQ0FBa0JDLE1BQWxCLEdBQTJCLFlBQTNCO0FBQ0E7O0FBQ0o7QUFDSTtBQWhCUjs7QUFrQkE7QUFDSDs7QUFDRCxXQUFLbk8sTUFBTCxDQUFZa08sS0FBWixDQUFrQkMsTUFBbEIsR0FBMkIsU0FBM0I7QUFDSDs7O1dBRUQsaUNBQXdCbEcsS0FBeEIsRUFBK0I7QUFDM0IsVUFBTThDLGVBQWUsR0FBR2hMLHlFQUFBLEVBQXhCLENBRDJCLENBRzNCOztBQUNBLFVBQUlnTCxlQUFlLENBQUM1SixNQUFoQixLQUEyQixDQUEvQixFQUFrQztBQUM5QjtBQUNILE9BTjBCLENBUTNCOzs7QUFDQSxVQUFNNkosb0JBQW9CLEdBQUc7QUFDekJwSyxRQUFBQSxDQUFDLEVBQUVxSCxLQUFLLENBQUNvRixPQUFOLEdBQWdCLEtBQUtaLGNBREM7QUFFekI1TCxRQUFBQSxDQUFDLEVBQUVvSCxLQUFLLENBQUNxRixPQUFOLEdBQWdCLEtBQUtaO0FBRkMsT0FBN0IsQ0FUMkIsQ0FjM0I7O0FBQ0EsV0FBS2EsZ0JBQUwsQ0FBc0J0RixLQUFLLENBQUNvRixPQUE1QixFQUFxQ3BGLEtBQUssQ0FBQ3FGLE9BQTNDLEVBZjJCLENBaUIzQjs7QUFDQTFJLE1BQUFBLCtEQUFBLENBQ0lGLGlHQURKLEVBRUlxRyxlQUZKLEVBR0lDLG9CQUhKO0FBS0g7OztXQUVELGdDQUF1Qi9DLEtBQXZCLEVBQThCO0FBQzFCLFVBQUksQ0FBQyxLQUFLMkUsYUFBVixFQUF5QjtBQUNyQixtREFBaUMsS0FBS3JFLGdCQUF0QztBQUFBLFlBQU9uSCxPQUFQO0FBQUEsWUFBZ0JVLGFBQWhCOztBQUNBLFlBQU11TSxhQUFhLEdBQUd2TSxhQUFhLENBQUM3QixRQUFwQyxDQUZxQixDQUlyQjs7QUFDQSxhQUFLMk0sYUFBTCxHQUFxQixJQUFJN0gsdURBQUosRUFBckI7QUFDQSxhQUFLNkgsYUFBTCxDQUFtQjBCLFdBQW5CLENBQStCbE4sT0FBL0I7QUFDQSxhQUFLd0wsYUFBTCxDQUFtQnJCLFdBQW5CLENBQStCLE9BQS9CLEVBQXdDOEMsYUFBeEM7QUFDSCxPQVR5QixDQVcxQjs7O0FBQ0EsVUFBTWxNLFdBQVcsR0FBRztBQUNoQnZCLFFBQUFBLENBQUMsRUFBRXFILEtBQUssQ0FBQ29GLE9BRE87QUFFaEJ4TSxRQUFBQSxDQUFDLEVBQUVvSCxLQUFLLENBQUNxRjtBQUZPLE9BQXBCO0FBSUEsV0FBS1YsYUFBTCxDQUFtQnJCLFdBQW5CLENBQStCLEtBQS9CLEVBQXNDcEosV0FBdEMsRUFoQjBCLENBa0IxQjs7QUFDQSxXQUFLb0wsZ0JBQUwsQ0FBc0J0RixLQUFLLENBQUNvRixPQUE1QixFQUFxQ3BGLEtBQUssQ0FBQ3FGLE9BQTNDLEVBbkIwQixDQXFCMUI7O0FBQ0ExSSxNQUFBQSwrREFBQSxDQUNJRCwrRUFESjtBQUdIOzs7V0FFRCw4QkFBcUJzRCxLQUFyQixFQUE0QjtBQUN4QjtBQUNBLFVBQU1zRyxnQkFBZ0IsR0FBRztBQUNyQjNOLFFBQUFBLENBQUMsRUFBRXFILEtBQUssQ0FBQ29GLE9BRFk7QUFFckJ4TSxRQUFBQSxDQUFDLEVBQUVvSCxLQUFLLENBQUNxRjtBQUZZLE9BQXpCO0FBS0ExSSxNQUFBQSwrREFBQSxDQUNJRiw4RkFESixFQUVJLEtBQUs2RCxnQkFGVCxFQUdJZ0csZ0JBSEo7QUFLSDs7O1dBRUQsb0NBQTJCdEcsS0FBM0IsRUFBa0MsQ0FDOUI7QUFDSDs7O1dBRUQsd0JBQWVBLEtBQWYsRUFBc0I7QUFDbEIsY0FBTyxLQUFLMEUsVUFBWjtBQUNJLGFBQU16SSxrRUFBTjtBQUNJLGNBQU02RyxlQUFlLEdBQUdoTCx5RUFBQSxFQUF4QjtBQUNBdUQsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QixLQUFLZ0YsZ0JBQUwsQ0FBc0JsRyxNQUE5QztBQUVBdUMsVUFBQUEsK0RBQUEsQ0FDSUYsK0ZBREosRUFFSXFHLGVBRkosRUFHSSxLQUFLOEIsYUFIVDtBQUtBOztBQUNKLGFBQU0zSSxpRUFBTjtBQUNJLGNBQU1zSyxtQkFBbUIsR0FBR3pPLHdFQUFBLENBQThCO0FBQ3REYSxZQUFBQSxDQUFDLEVBQUVxSCxLQUFLLENBQUNvRixPQUQ2QztBQUV0RHhNLFlBQUFBLENBQUMsRUFBRW9ILEtBQUssQ0FBQ3FGO0FBRjZDLFdBQTlCLENBQTVCO0FBS0ExSSxVQUFBQSwrREFBQSxDQUNJRiw4RkFESixFQUVJLEtBQUs2RCxnQkFGVCxFQUdJLEtBQUtxRSxhQUhULEVBSUk0QixtQkFKSjtBQU9BLGVBQUs1QixhQUFMLEdBQXFCLElBQXJCO0FBQ0E7O0FBQ0osYUFBTTFJLCtEQUFOO0FBQ0ksY0FBTXdLLGlCQUFpQixHQUFHM08sd0VBQUEsQ0FBOEI7QUFDcERhLFlBQUFBLENBQUMsRUFBRXFILEtBQUssQ0FBQ29GLE9BRDJDO0FBRXBEeE0sWUFBQUEsQ0FBQyxFQUFFb0gsS0FBSyxDQUFDcUY7QUFGMkMsV0FBOUIsQ0FBMUI7O0FBS0EsY0FBSSxDQUFDb0IsaUJBQUwsRUFBd0I7QUFDcEI7QUFDQTlKLFlBQUFBLCtEQUFBLENBQXNCNEMsb0ZBQXRCLEVBQXFEO0FBQ2pETCxjQUFBQSxNQUFNLEVBQUUsS0FBS29CLGdCQURvQztBQUVqRHFHLGNBQUFBLFNBQVMsRUFBRXJDLHlFQUZzQztBQUdqRHVDLGNBQUFBLE1BQU0sRUFBRTtBQUNKQyxnQkFBQUEsaUJBQWlCLEVBQUU7QUFDZm5PLGtCQUFBQSxDQUFDLEVBQUUsS0FBSzJILGdCQUFMLENBQXNCcEcsV0FBdEIsQ0FBa0N2QixDQUFsQyxHQUFzQyxLQUFLaU0sYUFBTCxDQUFtQmpNLENBRDdDO0FBRWZDLGtCQUFBQSxDQUFDLEVBQUUsS0FBSzBILGdCQUFMLENBQXNCcEcsV0FBdEIsQ0FBa0N0QixDQUFsQyxHQUFzQyxLQUFLZ00sYUFBTCxDQUFtQmhNO0FBRjdDO0FBRGY7QUFIeUMsYUFBckQ7QUFVQTtBQUNIOztBQUVEK0QsVUFBQUEsK0RBQUEsQ0FDSUYsNEZBREosRUFFSSxLQUFLNkQsZ0JBRlQsRUFHSW1HLGlCQUhKLEVBSUksS0FBSzdCLGFBSlQ7QUFNQTs7QUFDSixhQUFNM0kscUVBQU47QUFDSTtBQXZEUixPQURrQixDQTJEbEI7OztBQUNBLFdBQUt5SSxVQUFMLEdBQWtCekksK0RBQWxCO0FBQ0EsV0FBSzJJLGFBQUwsR0FBcUIsSUFBckI7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksZ0NBQXVCNUUsS0FBdkIsRUFBOEI7QUFDMUI7QUFDQSxVQUFJLENBQUMsS0FBS00sZ0JBQU4sWUFBa0N6RCxnRUFBdEMsRUFBK0M7QUFDM0M7QUFDSCxPQUp5QixDQU0xQjs7O0FBQ0EsVUFBTWtLLGVBQWUsR0FBRyxLQUFLeE8sYUFBTCxDQUFtQk0sYUFBbkIsQ0FDcEIsS0FBS3lILGdCQUFMLENBQXNCL0csVUFERixFQUVwQnlHLEtBQUssQ0FBQ29GLE9BRmMsRUFHcEJwRixLQUFLLENBQUNxRixPQUhjLENBQXhCOztBQU1BLFVBQUksQ0FBQzBCLGVBQUQsSUFBb0IsS0FBS3pHLGdCQUFMLENBQXNCQyxVQUE5QyxFQUEwRDtBQUN0RDtBQUNILE9BZnlCLENBaUIxQjs7O0FBQ0EsV0FBS21FLFVBQUwsR0FBa0J6SSwrREFBbEI7QUFFQVUsTUFBQUEsK0RBQUEsQ0FDSUYsaUdBREosRUFFSSxLQUFLNkQsZ0JBRlQ7QUFJSDs7O1dBRUQsc0NBQTZCTixLQUE3QixFQUFvQztBQUNoQ0EsTUFBQUEsS0FBSyxDQUFDZ0gsY0FBTjtBQUNBaEgsTUFBQUEsS0FBSyxDQUFDaUgsZUFBTjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1dMO0FBSUE7QUFDQTtBQUNBOztJQUVNRTtBQUNGLHNDQUFjO0FBQUE7O0FBQ1YsU0FBS25LLGdCQUFMO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozs7O1dBQ0ksNEJBQW1CO0FBQ2Y7QUFDQSxVQUNJb0ssb0JBREosR0FLSS9DLDhHQUxKO0FBQUEsVUFFSWdELGFBRkosR0FLSWhELHVHQUxKO0FBQUEsVUFHSWlELGVBSEosR0FLSWpELHlHQUxKO0FBQUEsVUFJSWtELFdBSkosR0FLSWxELHFHQUxKLENBRmUsQ0FTZjs7QUFDQSxVQUFNN0csYUFBYSxHQUFHLEVBQXRCO0FBQ0FBLE1BQUFBLGFBQWEsQ0FBQzRKLG9CQUFELENBQWIsR0FBc0MsS0FBS0ksb0JBQTNDO0FBQ0FoSyxNQUFBQSxhQUFhLENBQUM4SixlQUFELENBQWIsR0FBaUMsS0FBS0cseUJBQXRDO0FBQ0FqSyxNQUFBQSxhQUFhLENBQUM2SixhQUFELENBQWIsR0FBK0IsS0FBS0ssZUFBcEM7QUFDQWxLLE1BQUFBLGFBQWEsQ0FBQytKLFdBQUQsQ0FBYixHQUE2QixLQUFLSSxxQkFBbEMsQ0FkZSxDQWdCZjs7QUFDQSxXQUFLLElBQU16SixTQUFYLElBQXdCVixhQUF4QixFQUF1QztBQUNuQ2IsUUFBQUEsa0VBQUEsQ0FBeUJ1QixTQUF6QixFQUFvQ1YsYUFBYSxDQUFDVSxTQUFELENBQWpEO0FBQ0g7QUFDSjtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksOEJBQXFCMEosSUFBckIsRUFBMkI7QUFDdkI7QUFDQVYsTUFBQUEsa0dBQUEsQ0FBa0NVLElBQWxDLEVBRnVCLENBSXZCOztBQUp1QixpREFLRmxRLGdGQUxFO0FBQUE7O0FBQUE7QUFLdkIsNERBQXlDO0FBQUEsY0FBL0J5QixPQUErQjtBQUNyQ0EsVUFBQUEsT0FBTyxDQUFDMk8sV0FBUixHQUFzQkYsSUFBdEI7QUFDSDtBQVBzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUTFCO0FBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksMkJBQWtCO0FBQUEsa0RBQ09sUSxnRkFEUDtBQUFBOztBQUFBO0FBQ2QsK0RBQXlDO0FBQUEsY0FBL0J5QixPQUErQjs7QUFDckMsY0FBSUEsT0FBTyxDQUFDNE8sVUFBUixLQUF1QjVPLE9BQU8sQ0FBQzZPLHVCQUFuQyxFQUE0RDtBQUN4RDdPLFlBQUFBLE9BQU8sQ0FBQzhPLG9CQUFSLENBQTZCOU8sT0FBTyxDQUFDNk8sdUJBQXJDO0FBQ0g7QUFDSixTQUxhLENBT2Q7O0FBUGM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRZHJMLE1BQUFBLCtEQUFBLENBQ0lELCtFQURKO0FBR0g7QUFFRDtBQUNKO0FBQ0E7Ozs7V0FDSSxtQ0FBMEJwRixHQUExQixFQUErQjRRLFFBQS9CLEVBQXlDO0FBQ3JDdkwsTUFBQUEsK0RBQUEsQ0FDSTBILG9HQURKLEVBRUksQ0FGSixFQUdJNkQsUUFISjtBQUtIO0FBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksK0JBQXNCL08sT0FBdEIsRUFBK0I7QUFDM0I7QUFDQUEsTUFBQUEsT0FBTyxDQUFDOE8sb0JBQVI7QUFDQTlPLE1BQUFBLE9BQU8sQ0FBQzZPLHVCQUFSLEdBQWtDN08sT0FBTyxDQUFDNE8sVUFBMUMsQ0FIMkIsQ0FLM0I7O0FBQ0FwTCxNQUFBQSwrREFBQSxDQUNJRCwrRUFESjtBQUdIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGTDtBQUNBO0FBQ0E7O0lBTU0yTDtBQUNGLHFDQUFjO0FBQUE7O0FBQ1YsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsR0FBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUsxTCxnQkFBTDtBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7OztXQUNJLDRCQUFtQjtBQUNmO0FBQ0EsVUFDSTJMLGtCQURKLEdBR0l0RSw0R0FISjtBQUFBLFVBRUl1RSxrQkFGSixHQUdJdkUsNEdBSEosQ0FGZSxDQU9mOztBQUNBLFVBQU03RyxhQUFhLEdBQUcsRUFBdEI7QUFDQUEsTUFBQUEsYUFBYSxDQUFDbUwsa0JBQUQsQ0FBYixHQUFvQyxLQUFLRSw0QkFBTCxDQUFrQzlQLElBQWxDLENBQXVDLElBQXZDLENBQXBDO0FBQ0F5RSxNQUFBQSxhQUFhLENBQUNvTCxrQkFBRCxDQUFiLEdBQW9DLEtBQUtFLDRCQUFMLENBQWtDL1AsSUFBbEMsQ0FBdUMsSUFBdkMsQ0FBcEMsQ0FWZSxDQVlmOztBQUNBLFdBQUssSUFBTW1GLFNBQVgsSUFBd0JWLGFBQXhCLEVBQXVDO0FBQ25DYixRQUFBQSxrRUFBQSxDQUF5QnVCLFNBQXpCLEVBQW9DVixhQUFhLENBQUNVLFNBQUQsQ0FBakQ7QUFDSDtBQUNKOzs7V0FFRCwwQkFBaUI7QUFDYixXQUFLb0ssUUFBTCxHQUFnQixDQUFoQjtBQUNBLFVBQU1TLFNBQVMsR0FBRyxFQUFsQjs7QUFGYSxpREFJU3JSLGdGQUpUO0FBQUE7O0FBQUE7QUFJYiw0REFBMEM7QUFBQSxjQUEvQnlCLE9BQStCOztBQUN0QyxjQUFJLENBQUNBLE9BQU8sQ0FBQzRPLFVBQWIsRUFBeUI7QUFDckJnQixZQUFBQSxTQUFTLENBQUN0UixJQUFWLENBQWUwQixPQUFmO0FBQ0g7QUFDSjtBQVJZO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWIsV0FBS3VQLFVBQUwsR0FBa0JLLFNBQWxCLENBVmEsQ0FZYjs7QUFDQSxVQUFNQyxrQkFBa0IsR0FBRyxLQUFLQyxvQkFBTCxFQUEzQjtBQUNBdE0sTUFBQUEsK0RBQUEsQ0FDSXlMLGlGQURKLEVBRUlZLGtCQUZKO0FBSUFyTSxNQUFBQSwrREFBQSxDQUNJeUwsb0ZBREosRUFFSVksa0JBQWtCLENBQUMsQ0FBRCxDQUZ0QixFQUdJQSxrQkFBa0IsQ0FBQyxDQUFELENBSHRCLEVBSUksS0FBS1YsUUFKVDtBQU1IOzs7V0FFRCx3Q0FBK0I7QUFBQTs7QUFDM0IsV0FBS0UsT0FBTCxHQUFlLEtBQWY7QUFDQSxXQUFLWSxjQUFMLEdBRjJCLENBSTNCOztBQUNBLFdBQUtYLGlCQUFMLEdBQXlCWSxXQUFXLENBQUMsWUFBTTtBQUN2QyxZQUFJLEtBQUksQ0FBQ1gsVUFBTCxDQUFnQnhQLE1BQWhCLEdBQXlCLENBQXpCLElBQThCLENBQUMsS0FBSSxDQUFDc1AsT0FBeEMsRUFBaUQ7QUFDN0M7QUFENkMsc0RBRXZCLEtBQUksQ0FBQ0UsVUFGa0I7QUFBQTs7QUFBQTtBQUU3QyxtRUFBdUM7QUFBQSxrQkFBNUJ2UCxPQUE0QjtBQUNuQyxrQkFBTW1RLGlCQUFpQixHQUFHblEsT0FBTyxDQUFDb1EsV0FBUixFQUExQjtBQUNBLG1CQUFJLENBQUNiLFVBQUwsZ0NBQXNCLEtBQUksQ0FBQ0EsVUFBM0Isc0JBQTBDWSxpQkFBMUM7O0FBQ0EsbUJBQUksQ0FBQ1osVUFBTCxDQUFnQmMsS0FBaEI7QUFDSCxhQU40QyxDQVE3Qzs7QUFSNkM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTN0MsZUFBSSxDQUFDbEIsUUFBTCxJQUFpQixDQUFqQixDQVQ2QyxDQVc3Qzs7QUFDQSxjQUFNVSxrQkFBa0IsR0FBRyxLQUFJLENBQUNDLG9CQUFMLEVBQTNCOztBQUNBdE0sVUFBQUEsK0RBQUEsQ0FDSXlMLGlGQURKLEVBRUlZLGtCQUZKO0FBSUFyTSxVQUFBQSwrREFBQSxDQUNJeUwsb0ZBREosRUFFSVksa0JBQWtCLENBQUMsQ0FBRCxDQUZ0QixFQUdJQSxrQkFBa0IsQ0FBQyxDQUFELENBSHRCLEVBSUksS0FBSSxDQUFDVixRQUpULEVBakI2QyxDQXdCN0M7O0FBQ0EzTCxVQUFBQSwrREFBQSxDQUNJRCwrRUFESjtBQUdILFNBNUJELE1BNEJPO0FBQ0gsY0FBSSxLQUFJLENBQUNnTSxVQUFMLENBQWdCeFAsTUFBaEIsSUFBMEIsQ0FBOUIsRUFBaUM7QUFDN0J5RCxZQUFBQSwrREFBQSxDQUNJMEgsMEdBREo7QUFHSCxXQUxFLENBT0g7OztBQUNBcUYsVUFBQUEsYUFBYSxDQUFDLEtBQUksQ0FBQ2pCLGlCQUFOLENBQWI7QUFDSDtBQUNKLE9BdkNtQyxFQXVDakMsS0FBS0YsU0F2QzRCLENBQXBDO0FBd0NIO0FBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksd0NBQStCO0FBQzNCLFdBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozs7V0FDSSxnQ0FBdUI7QUFDbkIsVUFBSW1CLFVBQVUsR0FBRyxDQUFqQjs7QUFEbUIsa0RBRUdqUyxnRkFGSDtBQUFBOztBQUFBO0FBRW5CLCtEQUEwQztBQUFBLGNBQS9CeUIsT0FBK0I7O0FBQ3RDLGNBQUlBLE9BQU8sQ0FBQzRPLFVBQVosRUFBd0I7QUFDcEI0QixZQUFBQSxVQUFVLElBQUksQ0FBZDtBQUNIO0FBQ0o7QUFOa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPbkIsYUFBTyxDQUFDQSxVQUFELEVBQWFqUyx1RkFBQSxHQUE0QmlTLFVBQXpDLENBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSUUsSUFBTUMsaUJBQWlCLEdBQUcsR0FBMUI7QUFFQSxJQUFNQywrQkFBK0IsR0FBRztBQUMzQ3JRLEVBQUFBLFFBQVEsRUFBRSxRQURpQztBQUUzQ2IsRUFBQUEsQ0FBQyxFQUFFLEdBRndDO0FBRzNDQyxFQUFBQSxDQUFDLEVBQUUsR0FId0M7QUFJM0NzQyxFQUFBQSxNQUFNLEVBQUUsRUFKbUM7QUFLM0M0TyxFQUFBQSxVQUFVLEVBQUUsQ0FMK0I7QUFNM0NDLEVBQUFBLFFBQVEsRUFBRSxJQUFJL08sSUFBSSxDQUFDZ1AsRUFOd0I7QUFPM0NDLEVBQUFBLFFBQVEsRUFBRSxJQVBpQztBQVEzQ0MsRUFBQUEsU0FBUyxFQUFFLFNBUmdDO0FBUzNDQyxFQUFBQSxRQUFRLEVBQUUsSUFUaUM7QUFVM0NDLEVBQUFBLFVBQVUsRUFBRSxDQVYrQjtBQVczQ0MsRUFBQUEsV0FBVyxFQUFFLFNBWDhCO0FBWTNDQyxFQUFBQSxRQUFRLEVBQUUsS0FaaUM7QUFhM0NDLEVBQUFBLGlCQUFpQixFQUFFO0FBYndCLENBQXhDO0FBZ0JBLElBQU1DLDZCQUE2QixHQUFHO0FBQ3pDaFIsRUFBQUEsUUFBUSxFQUFFLFFBRCtCO0FBRXpDYixFQUFBQSxDQUFDLEVBQUUsR0FGc0M7QUFHekNDLEVBQUFBLENBQUMsRUFBRSxHQUhzQztBQUl6Q3NDLEVBQUFBLE1BQU0sRUFBRSxFQUppQztBQUt6QzRPLEVBQUFBLFVBQVUsRUFBRSxDQUw2QjtBQU16Q0MsRUFBQUEsUUFBUSxFQUFFLElBQUkvTyxJQUFJLENBQUNnUCxFQU5zQjtBQU96Q0MsRUFBQUEsUUFBUSxFQUFFLElBUCtCO0FBUXpDQyxFQUFBQSxTQUFTLEVBQUUsU0FSOEI7QUFTekNDLEVBQUFBLFFBQVEsRUFBRSxJQVQrQjtBQVV6Q0MsRUFBQUEsVUFBVSxFQUFFLENBVjZCO0FBV3pDQyxFQUFBQSxXQUFXLEVBQUUsU0FYNEI7QUFZekNDLEVBQUFBLFFBQVEsRUFBRSxLQVorQjtBQWF6Q0MsRUFBQUEsaUJBQWlCLEVBQUU7QUFic0IsQ0FBdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJQO0FBQ0E7O0lBRU1HO0FBYUYsc0JBQWM7QUFBQTs7QUFDVixRQUFJLENBQUNBLFFBQVEsQ0FBQ3JULFFBQWQsRUFBd0I7QUFDcEIsV0FBSzRCLElBQUwsR0FBWSxFQUFaO0FBQ0EsV0FBSzVCLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxXQUFLc1QsaUJBQUw7QUFDQUQsTUFBQUEsUUFBUSxDQUFDclQsUUFBVCxHQUFvQixJQUFwQjtBQUNIOztBQUVELFdBQU9xVCxRQUFRLENBQUNyVCxRQUFoQjtBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7OztXQUNJLDZCQUFvQjtBQUNoQjtBQUNBc0YsTUFBQUEsa0VBQUEsQ0FDSThOLGdGQURKLEVBRUksS0FBS3pHLE9BQUwsQ0FBYWpMLElBQWIsQ0FBa0IsSUFBbEIsQ0FGSjtBQUlIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSxpQkFBUWdCLElBQVIsRUFBYztBQUNWLFdBQUtkLElBQUwsQ0FBVXhCLElBQVYsQ0FBZXNDLElBQWY7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksb0JBQVdBLElBQVgsRUFBaUI7QUFDYixVQUFNNlEsWUFBWSxHQUFHLEtBQUszUixJQUFMLENBQVU0UixTQUFWLENBQW9CLFVBQUFDLFVBQVU7QUFBQSxlQUFJQSxVQUFVLEtBQUsvUSxJQUFuQjtBQUFBLE9BQTlCLENBQXJCOztBQUNBLFVBQUk2USxZQUFZLEtBQUssQ0FBQyxDQUF0QixFQUF5QjtBQUNyQixhQUFLM1IsSUFBTCxDQUFVOFIsTUFBVixDQUFpQkgsWUFBakIsRUFBK0IsQ0FBL0I7QUFDSDtBQUNKOzs7O0FBbkREO0FBQ0o7QUFDQTtBQUNBO0FBQ0ksMkJBQXFCO0FBQ2pCLFVBQUcsQ0FBQyxLQUFLdlQsUUFBVCxFQUFtQjtBQUNmLGFBQUtBLFFBQUwsR0FBZ0IsSUFBSXFULFFBQUosRUFBaEI7QUFDSDs7QUFFRCxhQUFPLEtBQUtyVCxRQUFaO0FBQ0g7Ozs7OztBQTRDRSxJQUFNTSxVQUFVLEdBQUcrUyxRQUFRLENBQUNNLFdBQVQsRUFBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURQO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0lBRU1sTztBQUNGLGtCQUFjO0FBQUE7O0FBQ1Y7QUFDQSxTQUFLb0gsWUFBTCxHQUFvQixJQUFwQjtBQUNBLFNBQUtSLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxTQUFLdUgsTUFBTCxHQUFjLElBQWQsQ0FKVSxDQU1WOztBQUNBLFNBQUtoUixhQUFMLEdBQXFCLElBQXJCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLFNBQUtYLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxTQUFLSSxRQUFMLEdBQWdCLEtBQWhCLENBVlUsQ0FZVjs7QUFDQSxTQUFLcUQsZ0JBQUwsR0FiVSxDQWVWOztBQUNBTCxJQUFBQSwrREFBQSxDQUFzQjhOLGdGQUF0QixFQUFpRCxJQUFqRDtBQUNIOzs7O1dBRUQsNEJBQW1CO0FBQ2Y7QUFDQSxVQUNJOUgsY0FESixHQUVJeEIsbUZBRko7QUFJQSxVQUFNM0QsYUFBYSxHQUFHLEVBQXRCO0FBQ0FBLE1BQUFBLGFBQWEsQ0FBQ21GLGNBQUQsQ0FBYixHQUFnQyxLQUFLQSxjQUFMLENBQW9CNUosSUFBcEIsQ0FBeUIsSUFBekIsQ0FBaEMsQ0FQZSxDQVNmOztBQUNBLFdBQUssSUFBTWlILEtBQVgsSUFBb0J4QyxhQUFwQixFQUFtQztBQUMvQmIsUUFBQUEsa0VBQUEsQ0FBeUJxRCxLQUF6QixFQUFnQ3hDLGFBQWEsQ0FBQ3dDLEtBQUQsQ0FBN0M7QUFDSDtBQUNKO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSwyQkFBa0I7QUFDZCxhQUFPLEtBQUtrRSxZQUFaO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTs7OztXQUNJLHlCQUFnQjtBQUNaLGFBQU8sS0FBS1IsVUFBWjtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSxxQkFBWTtBQUNSLGFBQU8sS0FBS3VILE1BQVo7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksc0JBQWFDLFNBQWIsRUFBd0I7QUFDcEIsV0FBS0QsTUFBTCxHQUFjQyxTQUFkO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTs7OztXQUNJLHFCQUFZQyxVQUFaLEVBQXdCO0FBQ3BCLFdBQUtqSCxZQUFMLEdBQW9CaUgsVUFBcEI7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksbUJBQVVBLFVBQVYsRUFBc0I7QUFDbEIsV0FBS3pILFVBQUwsR0FBa0J5SCxVQUFsQjtBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7O1dBQ0kscUJBQVl6UixJQUFaLEVBQWtCMUIsUUFBbEIsRUFBNEI7QUFDeEIsY0FBTzBCLElBQVA7QUFDSSxhQUFLLE9BQUw7QUFDSSxlQUFLTyxhQUFMLEdBQXFCakMsUUFBckI7QUFDQTs7QUFDSixhQUFLLEtBQUw7QUFDSSxlQUFLa0MsV0FBTCxHQUFtQmxDLFFBQW5CO0FBQ0E7QUFOUjtBQVFIO0FBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksdUJBQWNvVCxRQUFkLEVBQXdCO0FBQ3BCLFdBQUs3UixVQUFMLEdBQWtCNlIsUUFBbEI7QUFDSDs7O1dBRUQsd0JBQWVyUixJQUFmLEVBQXFCO0FBQ2pCLFVBQUlBLElBQUksS0FBSyxJQUFULElBQWlCLEtBQUtKLFFBQUwsS0FBa0IsS0FBdkMsRUFBOEM7QUFDMUMsYUFBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNILE9BRkQsTUFFTyxJQUFJLEtBQUtBLFFBQUwsSUFBaUJJLElBQUksS0FBSyxJQUE5QixFQUFvQztBQUN2QyxhQUFLSixRQUFMLEdBQWdCLEtBQWhCO0FBQ0g7QUFDSjs7O1dBRUQsc0JBQWE7QUFDVGhDLE1BQUFBLDZEQUFBLENBQXNCLElBQXRCLEVBRFMsQ0FFVDs7QUFDQSxXQUFLdU0sWUFBTCxDQUFrQm1ILFVBQWxCLENBQTZCLElBQTdCLEVBSFMsQ0FLVDs7QUFDQSxVQUFJLENBQUMsQ0FBQyxLQUFLM0gsVUFBWCxFQUF1QjtBQUNuQixhQUFLQSxVQUFMLENBQWdCQyxrQkFBaEIsQ0FBbUMsSUFBbkMsRUFEbUIsQ0FHbkI7O0FBQ0EsYUFBS08sWUFBTCxDQUFrQm9ILFdBQWxCLENBQThCLEtBQUs1SCxVQUFuQztBQUNIO0FBQ0o7OztXQUVELHVCQUFjO0FBQ1YvTCxNQUFBQSwwREFBQSxDQUFtQixJQUFuQixFQURVLENBRVY7O0FBQ0EsV0FBS3VNLFlBQUwsQ0FBa0JGLE9BQWxCLENBQTBCLElBQTFCLEVBSFUsQ0FLVjs7QUFDQSxVQUFJLENBQUMsQ0FBQyxLQUFLTixVQUFYLEVBQXVCO0FBQ25CLGFBQUtBLFVBQUwsQ0FBZ0JPLGVBQWhCLENBQWdDLElBQWhDLEVBRG1CLENBR25COztBQUNBLGFBQUtDLFlBQUwsQ0FBa0JDLFFBQWxCLENBQTJCLEtBQUtULFVBQWhDO0FBQ0g7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkpMO0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTTZIO0FBaUJGLDRCQUFjO0FBQUE7O0FBQ1YsUUFBSSxDQUFDQSxjQUFjLENBQUNsVSxRQUFwQixFQUE4QjtBQUMxQjtBQUNBLFdBQUttVSx3QkFBTCxHQUFnQ0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQjdCLG9FQUFsQixDQUFoQztBQUNBLFdBQUs4QixzQkFBTCxHQUE4QkYsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQmxCLGtFQUFsQixDQUE5QjtBQUNBLFdBQUs1QyxJQUFMLEdBQVksR0FBWjtBQUVBLFdBQUsrQyxpQkFBTDtBQUNBWSxNQUFBQSxjQUFjLENBQUNsVSxRQUFmLEdBQTBCLElBQTFCO0FBQ0g7O0FBRUQsV0FBT2tVLGNBQWMsQ0FBQ2xVLFFBQXRCO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozs7OztBQXhCSTtBQUNKO0FBQ0E7QUFDQTtBQUNJLHlCQUFZdVUsU0FBWixFQUF1QjtBQUNuQixXQUFLN1QsTUFBTCxHQUFjNlQsU0FBZDtBQUNIOzs7V0FtQkQsNkJBQW9CO0FBQ2hCO0FBQ0FqUCxNQUFBQSxrRUFBQSxDQUNJMEgsb0dBREosRUFFSXpILDJGQUFBLENBQXFDLEtBQUtrUCxjQUFMLENBQW9CL1MsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBckMsQ0FGSixFQUZnQixDQU9oQjs7QUFDQTRELE1BQUFBLGtFQUFBLENBQ0kwSCx5R0FESixFQUVJLEtBQUtqQix1QkFBTCxDQUE2QnJLLElBQTdCLENBQWtDLElBQWxDLENBRkosRUFSZ0IsQ0FhaEI7O0FBQ0E0RCxNQUFBQSxrRUFBQSxDQUNJeUwscUZBREosRUFFSSxLQUFLNkQsZ0JBQUwsQ0FBc0JsVCxJQUF0QixDQUEyQixJQUEzQixDQUZKO0FBSUg7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksaUNBQXdCVyxJQUF4QixFQUE4QndTLGNBQTlCLEVBQThDO0FBQzFDLFVBQUlDLHFCQUFxQixHQUFHLENBQUMsQ0FBQ3pTLElBQUYsR0FBUyxLQUFLaVMsc0JBQWQsR0FBdUMsS0FBS0gsd0JBQXhFLENBRDBDLENBRzFDOztBQUNBLFdBQUssSUFBTVksUUFBWCxJQUF1QkYsY0FBdkIsRUFBdUM7QUFDbkMsWUFBTUcsUUFBUSxHQUFHSCxjQUFjLENBQUNFLFFBQUQsQ0FBL0I7O0FBQ0EsWUFBSUQscUJBQXFCLENBQUNDLFFBQUQsQ0FBckIsS0FBb0NDLFFBQXhDLEVBQWtEO0FBQzlDRixVQUFBQSxxQkFBcUIsQ0FBQ0MsUUFBRCxDQUFyQixHQUFrQ0MsUUFBbEM7QUFDSDtBQUNKLE9BVHlDLENBVzFDOzs7QUFYMEMsaURBWXRCM1UsNkRBWnNCO0FBQUE7O0FBQUE7QUFZMUMsNERBQXdDO0FBQUEsY0FBL0J5QixPQUErQjs7QUFDcEM7QUFDQSxjQUFLLENBQUMsQ0FBQ08sSUFBSCxHQUFXUCxPQUFPLENBQUM0TyxVQUF2QixFQUFtQztBQUMvQjVPLFlBQUFBLE9BQU8sQ0FBQ2lLLHVCQUFSLENBQWdDO0FBQzVCOEcsY0FBQUEsU0FBUyxFQUFFaUMscUJBQXFCLENBQUNqQyxTQURMO0FBRTVCRyxjQUFBQSxXQUFXLEVBQUU4QixxQkFBcUIsQ0FBQzlCO0FBRlAsYUFBaEM7QUFJSDtBQUNKLFNBcEJ5QyxDQXNCMUM7O0FBdEIwQztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXVCMUMxTixNQUFBQSwrREFBQSxDQUNJRCwrRUFESjtBQUdIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSw4QkFBcUJoRCxJQUFyQixFQUEyQjtBQUN2QixhQUFPLENBQUMsQ0FBQ0EsSUFBRixHQUFTLEtBQUtpUyxzQkFBZCxHQUF1QyxLQUFLSCx3QkFBbkQ7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksMkJBQWtCNUQsSUFBbEIsRUFBd0I7QUFDcEIsV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksd0JBQWVsTyxJQUFmLEVBQXFCd08sUUFBckIsRUFBK0I7QUFDM0I3TSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBRDJCLENBRTNCOztBQUNBLFVBQU1nUixNQUFNLEdBQUcsQ0FBQzVTLElBQWhCLENBSDJCLENBSzNCOztBQUNBLFVBQU1MLGlCQUFpQixHQUFHLENBQUMsQ0FBQ0ssSUFBRixHQUFTK1IsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLQyxzQkFBdkIsQ0FBVCxHQUEwREYsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLRix3QkFBdkIsQ0FBcEYsQ0FOMkIsQ0FRM0I7O0FBQ0EsVUFBSSxDQUFDLENBQUN0RCxRQUFOLEVBQWdCO0FBQ1o3TyxRQUFBQSxpQkFBaUIsQ0FBQ1YsQ0FBbEIsR0FBc0J1UCxRQUFRLENBQUN2UCxDQUEvQjtBQUNBVSxRQUFBQSxpQkFBaUIsQ0FBQ1QsQ0FBbEIsR0FBc0JzUCxRQUFRLENBQUN0UCxDQUEvQjtBQUNILE9BWjBCLENBYzNCOzs7QUFDQSxVQUFNMlQsV0FBVyxHQUFHLElBQUkxUCw2Q0FBSixDQUNoQnlQLE1BRGdCLEVBRWhCalQsaUJBRmdCLENBQXBCO0FBS0FrVCxNQUFBQSxXQUFXLENBQUN6RSxXQUFaLEdBQTBCLEtBQUtGLElBQS9CO0FBQ0EsYUFBTzJFLFdBQVA7QUFDSDtBQUVEO0FBQ0o7QUFDQTs7OztXQUNJLDBCQUFpQkMsZUFBakIsRUFBa0M7QUFDOUIsVUFBSUEsZUFBZSxDQUFDdFQsTUFBaEIsSUFBMEIsQ0FBOUIsRUFBaUM7QUFDN0JzVCxRQUFBQSxlQUFlLENBQUMvVSxJQUFoQixDQUFxQixLQUFLK1Qsd0JBQUwsQ0FBOEJ0QixTQUFuRDtBQUNBc0MsUUFBQUEsZUFBZSxDQUFDL1UsSUFBaEIsQ0FBcUIsS0FBS2tVLHNCQUFMLENBQTRCekIsU0FBakQ7QUFDSCxPQUhELE1BR087QUFDSHNDLFFBQUFBLGVBQWUsQ0FBQyxDQUFELENBQWYsR0FBcUIsS0FBS2hCLHdCQUFMLENBQThCdEIsU0FBbkQ7QUFDQXNDLFFBQUFBLGVBQWUsQ0FBQyxDQUFELENBQWYsR0FBcUIsS0FBS2Isc0JBQUwsQ0FBNEJ6QixTQUFqRDtBQUNIO0FBQ0o7OztXQTlJRCx1QkFBcUI7QUFDakIsVUFBSSxDQUFDLEtBQUs3UyxRQUFWLEVBQW9CO0FBQ2hCLGFBQUtBLFFBQUwsR0FBZ0IsSUFBSWtVLGNBQUosRUFBaEI7QUFDSDs7QUFFRCxhQUFPLEtBQUtsVSxRQUFaO0FBQ0g7Ozs7OztBQTJJRSxJQUFNNlAsZUFBZSxHQUFHcUUsY0FBYyxDQUFDUCxXQUFmLEVBQXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLUDtBQUNBOztJQUtNMEI7QUFhRix5QkFBYztBQUFBOztBQUNWLFFBQUksQ0FBQ0EsV0FBVyxDQUFDclYsUUFBakIsRUFBMkI7QUFDdkIsV0FBSzRCLElBQUwsR0FBWSxFQUFaO0FBQ0EsV0FBSzVCLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxXQUFLc1QsaUJBQUw7QUFDQStCLE1BQUFBLFdBQVcsQ0FBQ3JWLFFBQVosR0FBdUIsSUFBdkI7QUFDSDs7QUFFRCxXQUFPcVYsV0FBVyxDQUFDclYsUUFBbkI7QUFDSDtBQUVEO0FBQ0o7QUFDQTs7Ozs7V0FDSSw2QkFBb0I7QUFDaEI7QUFDQXNGLE1BQUFBLGtFQUFBLENBQ0k4UCxzRkFESixFQUVJLEtBQUtFLFVBQUwsQ0FBZ0I1VCxJQUFoQixDQUFxQixJQUFyQixDQUZKLEVBRmdCLENBT2hCOztBQUNBNEQsTUFBQUEsa0VBQUEsQ0FDSXVFLHlGQURKLEVBRUksS0FBSzBMLGNBQUwsQ0FBb0I3VCxJQUFwQixDQUF5QixJQUF6QixDQUZKO0FBSUg7QUFFRDtBQUNKO0FBQ0E7QUFDQTs7OztXQUNJLG9CQUFXSSxPQUFYLEVBQW9CO0FBQ2hCLFdBQUtGLElBQUwsQ0FBVXhCLElBQVYsQ0FBZTBCLE9BQWY7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksdUJBQWNBLE9BQWQsRUFBdUI7QUFDbkIsVUFBTXlSLFlBQVksR0FBRyxLQUFLM1IsSUFBTCxDQUFVNFIsU0FBVixDQUFvQixVQUFBZ0MsYUFBYTtBQUFBLGVBQUlBLGFBQWEsS0FBSzFULE9BQXRCO0FBQUEsT0FBakMsQ0FBckI7O0FBQ0EsVUFBSXlSLFlBQVksS0FBSyxDQUFDLENBQXRCLEVBQXlCO0FBQ3JCLGFBQUszUixJQUFMLENBQVU4UixNQUFWLENBQWlCSCxZQUFqQixFQUErQixDQUEvQjtBQUNIO0FBQ0o7OztXQUVELHdCQUFlelIsT0FBZixFQUF3QjtBQUNwQixVQUFNMlQsWUFBWSxHQUFHLEtBQUs3VCxJQUFMLENBQVU0UixTQUFWLENBQW9CLFVBQUFnQyxhQUFhO0FBQUEsZUFBSUEsYUFBYSxLQUFNMVQsT0FBdkI7QUFBQSxPQUFqQyxDQUFyQjtBQUNBLFdBQUtGLElBQUwsQ0FBVThSLE1BQVYsQ0FBaUIrQixZQUFqQixFQUErQixDQUEvQjtBQUNBLFdBQUs3VCxJQUFMLGdDQUFnQixLQUFLQSxJQUFyQixJQUEyQkUsT0FBM0I7QUFDSDs7OztBQS9ERDtBQUNKO0FBQ0E7QUFDQTtBQUNJLDJCQUFxQjtBQUNqQixVQUFHLENBQUMsS0FBSzlCLFFBQVQsRUFBbUI7QUFDZixhQUFLQSxRQUFMLEdBQWdCLElBQUlxVixXQUFKLEVBQWhCO0FBQ0g7O0FBRUQsYUFBTyxLQUFLclYsUUFBWjtBQUNIOzs7Ozs7QUF3REUsSUFBTUssYUFBYSxHQUFHZ1YsV0FBVyxDQUFDMUIsV0FBWixFQUF0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RVA7QUFJQTs7SUFFTStCO0FBQ0YsZ0NBQVlDLFVBQVosRUFBd0I7QUFBQTs7QUFDcEIsU0FBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0EsU0FBTCxDQUFlelYsSUFBZixDQUFvQnVWLFVBQXBCO0FBQ0g7Ozs7U0FFRCxlQUFXO0FBQ1AsYUFBTyxLQUFLRSxTQUFMLENBQWUsS0FBS0QsT0FBcEIsQ0FBUDtBQUNIO1NBRUQsYUFBU0UsR0FBVCxFQUFjO0FBQ1YsV0FBS0YsT0FBTCxJQUFnQixDQUFoQjtBQUNBLFdBQUtDLFNBQUwsQ0FBZXpWLElBQWYsQ0FBb0IwVixHQUFwQjtBQUNIOzs7V0FFRCxnQkFBTztBQUNILFVBQUksS0FBS0YsT0FBTCxHQUFlLENBQW5CLEVBQXNCO0FBQ2xCLGFBQUtBLE9BQUwsSUFBZ0IsQ0FBaEI7QUFDSDtBQUNKOzs7V0FFRCxnQkFBTztBQUNILFVBQUksS0FBS0EsT0FBTCxHQUFlLEtBQUtDLFNBQUwsQ0FBZWhVLE1BQWYsR0FBd0IsQ0FBM0MsRUFBOEM7QUFDMUMsYUFBSytULE9BQUwsSUFBZ0IsQ0FBaEI7QUFDSDtBQUNKOzs7Ozs7SUFJQ0c7QUFDRix5QkFBYztBQUFBOztBQUNWLFNBQUs3TSxVQUFMLEdBQWtCLEtBQWxCLENBRFUsQ0FHVjs7QUFDQSxTQUFLN0IsZUFBTCxHQUF1QjtBQUNuQjJPLE1BQUFBLElBQUksRUFBRSxFQURhO0FBRW5CcEgsTUFBQUEsS0FBSyxFQUFFLGlCQUZZO0FBR25CdEgsTUFBQUEsT0FBTyxFQUFFLEdBSFU7QUFJbkIyTyxNQUFBQSxLQUFLLEVBQUU7QUFKWSxLQUF2QjtBQU9BLFNBQUtDLG1CQUFMLEdBQTJCO0FBQ3ZCQyxNQUFBQSxLQUFLLEVBQUUsSUFEZ0I7QUFFdkJDLE1BQUFBLE1BQU0sRUFBRTtBQUZlLEtBQTNCO0FBS0EsU0FBS0MsdUJBQUwsR0FBK0IsSUFBL0IsQ0FoQlUsQ0FrQlY7O0FBQ0EsU0FBSzlPLGFBQUwsR0FBcUIsSUFBckI7QUFFQSxTQUFLK08sb0JBQUw7QUFDSDs7OztXQUVELGdDQUF1QjtBQUNuQjtBQUNBLFVBQ0l2Six5QkFESixHQUVJbEQsaUdBRko7QUFJQSxVQUFNMUQsYUFBYSxHQUFHLEVBQXRCO0FBQ0FBLE1BQUFBLGFBQWEsQ0FBQzRHLHlCQUFELENBQWIsR0FBMkMsS0FBS3dKLGFBQUwsQ0FBbUI3VSxJQUFuQixDQUF3QixJQUF4QixDQUEzQyxDQVBtQixDQVNuQjs7QUFDQSxXQUFLLElBQU1pSCxLQUFYLElBQW9CeEMsYUFBcEIsRUFBbUM7QUFDL0JiLFFBQUFBLGtFQUFBLENBQXlCcUQsS0FBekIsRUFBZ0N4QyxhQUFhLENBQUN3QyxLQUFELENBQTdDO0FBQ0g7QUFDSjtBQUVEO0FBQ0o7QUFDQTs7OztXQUNJLHVCQUFjN0csT0FBZCxFQUF1QjtBQUNuQixVQUFJQSxPQUFPLElBQUksSUFBWCxJQUFtQixLQUFLb0gsVUFBTCxLQUFvQixLQUEzQyxFQUFrRDtBQUM5QyxhQUFLQSxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsYUFBSzNCLGFBQUwsR0FBcUIsSUFBSW1PLG9CQUFKLENBQXlCLEtBQUtyTyxlQUFMLENBQXFCQyxPQUE5QyxDQUFyQjtBQUNILE9BSEQsTUFHTyxJQUFJLEtBQUs0QixVQUFMLElBQW1CcEgsT0FBTyxLQUFLLElBQW5DLEVBQXlDO0FBQzVDLGFBQUtvSCxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsYUFBSzNCLGFBQUwsR0FBcUIsSUFBckI7QUFDSDtBQUNKO0FBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksdUJBQWM7QUFDVixVQUFJLEtBQUsyQixVQUFULEVBQXFCO0FBQ2pCLGFBQUtBLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxhQUFLM0IsYUFBTCxHQUFxQixJQUFyQjtBQUNIO0FBQ0o7QUFFRDtBQUNKO0FBQ0E7Ozs7V0FDSSxvQkFBVztBQUNQO0FBQ0EsVUFBTWlQLFlBQVksR0FBRztBQUNqQmxWLFFBQUFBLENBQUMsRUFBRSxLQUFLVSxpQkFBTCxDQUF1QlYsQ0FEVDtBQUVqQkMsUUFBQUEsQ0FBQyxFQUFFLEtBQUtTLGlCQUFMLENBQXVCVDtBQUZULE9BQXJCLENBRk8sQ0FPUDs7QUFDQSxVQUFNa1YsWUFBWSxHQUFHLEtBQUt6VSxpQkFBTCxDQUF1QjZCLE1BQXZCLEdBQWdDRixJQUFJLENBQUNDLElBQUwsQ0FBVSxDQUFWLENBQXJELENBUk8sQ0FVUDs7QUFDQTBCLE1BQUFBLCtEQUFBLENBQ0lELGlGQURKLEVBRUk7QUFDSXdMLFFBQUFBLFFBQVEsRUFBRTJGLFlBRGQ7QUFFSUcsUUFBQUEsUUFBUSxFQUFFRixZQUZkO0FBR0lHLFFBQUFBLFdBQVcsRUFBRSxLQUFLdlA7QUFIdEIsT0FGSixFQU9JLEtBQUt3UCw0QkFBTCxDQUFrQ25WLElBQWxDLENBQXVDLElBQXZDLENBUEo7QUFTSDtBQUVEO0FBQ0o7QUFDQTs7OztXQUNJLHdCQUFlO0FBQ1g7QUFDQSxVQUFJLENBQUMsS0FBS3dILFVBQVYsRUFBc0I7QUFDbEI7QUFDSCxPQUpVLENBTVg7OztBQUNBLFVBQU00TixlQUFlLEdBQUc7QUFDcEJ4VixRQUFBQSxDQUFDLEVBQUUsS0FBS1UsaUJBQUwsQ0FBdUJWLENBRE47QUFFcEJDLFFBQUFBLENBQUMsRUFBRSxLQUFLUyxpQkFBTCxDQUF1QlQ7QUFGTixPQUF4QixDQVBXLENBWVg7O0FBQ0ErRCxNQUFBQSwrREFBQSxDQUNJRCxrRkFESixFQUVJO0FBQ0l5UixRQUFBQSxlQUFlLEVBQWZBLGVBREo7QUFFSVosUUFBQUEsbUJBQW1CLEVBQUUsS0FBS0EsbUJBRjlCO0FBR0kvVCxRQUFBQSxRQUFRLEVBQUU7QUFIZCxPQUZKLEVBT0ksS0FBSzZVLGdCQUFMLENBQXNCdFYsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FQSjtBQVNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLHNDQUE2Qm1ULGNBQTdCLEVBQTZDeFMsSUFBN0MsRUFBbUQ7QUFDL0MsVUFBSUEsSUFBSSxLQUFLLE1BQVQsSUFBbUJBLElBQUksS0FBSyxVQUFoQyxFQUE0QztBQUN4QzRVLFFBQUFBLEtBQUssQ0FBQyxvREFBRCxDQUFMO0FBQ0g7O0FBRUQsVUFBTUMsWUFBWSxHQUFJN1UsSUFBSSxJQUFJLE1BQVQsR0FBbUIsS0FBS2dGLGVBQXhCLEdBQTBDLEtBQUs2TyxtQkFBcEUsQ0FMK0MsQ0FPL0M7O0FBQ0EsV0FBSyxJQUFNbkIsUUFBWCxJQUF1QkYsY0FBdkIsRUFBdUM7QUFDbkMsWUFBTUcsUUFBUSxHQUFHSCxjQUFjLENBQUNFLFFBQUQsQ0FBL0I7O0FBRUEsWUFBSUMsUUFBUSxJQUFJa0MsWUFBWSxDQUFDbkMsUUFBRCxDQUFaLEtBQTJCQyxRQUEzQyxFQUFxRDtBQUNqRGtDLFVBQUFBLFlBQVksQ0FBQ25DLFFBQUQsQ0FBWixHQUF5QkMsUUFBekI7QUFDSDtBQUNKLE9BZDhDLENBZ0IvQzs7O0FBQ0EsVUFBSTNTLElBQUksSUFBSSxVQUFaLEVBQXdCO0FBQ3BCLGFBQUs4VSxZQUFMO0FBQ0g7QUFDSjtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksMEJBQWlCQyxlQUFqQixFQUFrQztBQUM5QixXQUFLZix1QkFBTCxHQUErQmUsZUFBL0I7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeExMO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFLQTtBQUNBO0FBQ0E7O0lBRU01Ujs7Ozs7QUFDRixtQkFBWXlQLE1BQVosRUFBb0JqVCxpQkFBcEIsRUFBdUM7QUFBQTs7QUFBQTs7QUFDbkM7QUFFQSxVQUFLME8sVUFBTCxHQUFrQnVFLE1BQWxCO0FBQ0EsVUFBS3RFLHVCQUFMLEdBQStCc0UsTUFBL0I7QUFFQSxVQUFLM1MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFVBQUtTLE1BQUwsR0FBYyxLQUFkLENBUG1DLENBU25DOztBQUNBLFVBQUswTixXQUFMLEdBQW1CLEdBQW5CO0FBRUEsVUFBS3pFLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxVQUFLRSxnQkFBTCxHQUF3QixFQUF4QjtBQUNBLFVBQUtxTCxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0IsRUFBeEI7QUFFQSxVQUFLeFYsaUJBQUwsR0FBeUJBLGlCQUFpQixJQUFJb1MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQjdCLG9FQUFsQixDQUE5QztBQUNBLFVBQUt0USxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBS0sscUJBQUwsR0FBNkIsSUFBN0I7O0FBQ0EsVUFBS29ELGdCQUFMLEdBcEJtQyxDQXNCbkM7OztBQUNBTCxJQUFBQSwrREFBQSxDQUFzQjhQLHNGQUF0QjtBQUNBOVAsSUFBQUEsK0RBQUEsQ0FDSUQsa0ZBREosRUFFSSxNQUFLckQsaUJBRlQsRUFHSSxNQUFLeVYsYUFBTCxDQUFtQi9WLElBQW5CLCtCQUhKLEVBeEJtQyxDQThCbkM7O0FBQ0EsVUFBS3lWLFlBQUw7O0FBQ0EsVUFBS08sUUFBTDs7QUFFQTFULElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFsQ21DO0FBbUN0Qzs7OztXQUVELDRCQUFtQjtBQUNmO0FBQ0EsVUFDSW9ILGlCQURKLEdBRUl4Qix5RkFGSjtBQUlBLFVBQU0xRCxhQUFhLEdBQUcsRUFBdEI7QUFDQUEsTUFBQUEsYUFBYSxDQUFDa0YsaUJBQUQsQ0FBYixHQUFtQyxLQUFLRSxrQkFBTCxDQUF3QjdKLElBQXhCLENBQTZCLElBQTdCLENBQW5DLENBUGUsQ0FTZjs7QUFDQSxXQUFLLElBQU1pSCxLQUFYLElBQW9CeEMsYUFBcEIsRUFBbUM7QUFDL0JiLFFBQUFBLGtFQUFBLENBQXlCcUQsS0FBekIsRUFBZ0N4QyxhQUFhLENBQUN3QyxLQUFELENBQTdDO0FBQ0g7QUFDSjtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksa0JBQVNnUCxZQUFULEVBQXVCO0FBQ25CLFVBQUksQ0FBQ0EsWUFBTCxFQUFtQjtBQUNmLGVBQU8sSUFBSVYsS0FBSixDQUFVLCtDQUFWLENBQVA7QUFDSDs7QUFDRCxXQUFLTSxZQUFMLENBQWtCblgsSUFBbEIsQ0FBdUJ1WCxZQUF2QjtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSxxQkFBWUEsWUFBWixFQUEwQjtBQUN0QixVQUFNQyxnQkFBZ0IsR0FBRyxLQUFLTCxZQUFMLENBQWtCL0QsU0FBbEIsQ0FDckIsVUFBQXFFLFdBQVc7QUFBQSxlQUFJQSxXQUFXLEtBQUtGLFlBQXBCO0FBQUEsT0FEVSxDQUF6QixDQURzQixDQUt0Qjs7QUFDQSxVQUFJQyxnQkFBZ0IsS0FBSyxDQUFDLENBQXRCLElBQTJCQSxnQkFBZ0IsS0FBS0UsU0FBcEQsRUFBK0Q7QUFDM0QsZUFBTyxJQUFJYixLQUFKLENBQVUsZ0RBQVYsQ0FBUDtBQUNILE9BUnFCLENBVXRCOzs7QUFDQSxXQUFLTSxZQUFMLENBQWtCN0QsTUFBbEIsQ0FBeUJrRSxnQkFBekIsRUFBMkMsQ0FBM0M7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksaUJBQVFsVixJQUFSLEVBQWM7QUFDVixVQUFJLENBQUNBLElBQUwsRUFBVztBQUNQLGVBQU8sSUFBSXVVLEtBQUosQ0FBVSwwQ0FBVixDQUFQO0FBQ0g7O0FBQ0QsV0FBS2pMLFFBQUwsQ0FBYzVMLElBQWQsQ0FBbUJzQyxJQUFuQjtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSxvQkFBV0EsSUFBWCxFQUFpQjtBQUNiLFVBQU1xVixlQUFlLEdBQUcsS0FBSy9MLFFBQUwsQ0FBY3dILFNBQWQsQ0FDcEIsVUFBQXdFLFVBQVU7QUFBQSxlQUFJQSxVQUFVLEtBQUt0VixJQUFuQjtBQUFBLE9BRFUsQ0FBeEIsQ0FEYSxDQUtiOztBQUNBLFVBQUlxVixlQUFlLEtBQUssQ0FBQyxDQUFyQixJQUEwQkEsZUFBZSxLQUFLRCxTQUFsRCxFQUE2RDtBQUN6RCxlQUFPLElBQUliLEtBQUosQ0FBVSw4Q0FBVixDQUFQO0FBQ0gsT0FSWSxDQVViOzs7QUFDQSxXQUFLakwsUUFBTCxDQUFjMEgsTUFBZCxDQUFxQnFFLGVBQXJCLEVBQXNDLENBQXRDO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozs7V0FDSSx5QkFBZ0JyVixJQUFoQixFQUFzQjtBQUNsQixVQUFJLENBQUNBLElBQUwsRUFBVztBQUNQLGVBQU8sSUFBSXVVLEtBQUosQ0FBVSxrREFBVixDQUFQO0FBQ0g7O0FBQ0QsV0FBSy9LLGdCQUFMLENBQXNCOUwsSUFBdEIsQ0FBMkJzQyxJQUEzQjtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLDRCQUFtQkEsSUFBbkIsRUFBeUI7QUFDckIsVUFBTXFWLGVBQWUsR0FBRyxLQUFLN0wsZ0JBQUwsQ0FBc0JzSCxTQUF0QixDQUNwQixVQUFBd0UsVUFBVTtBQUFBLGVBQUlBLFVBQVUsS0FBS3RWLElBQW5CO0FBQUEsT0FEVSxDQUF4QixDQURxQixDQUtyQjs7QUFDQSxVQUFJcVYsZUFBZSxLQUFLLENBQUMsQ0FBckIsSUFBMEJBLGVBQWUsS0FBS0QsU0FBbEQsRUFBNkQ7QUFDekQsZUFBTyxJQUFJYixLQUFKLENBQVUsc0RBQVYsQ0FBUDtBQUNILE9BUm9CLENBVXJCOzs7QUFDQSxXQUFLL0ssZ0JBQUwsQ0FBc0J3SCxNQUF0QixDQUE2QnFFLGVBQTdCLEVBQThDLENBQTlDO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozs7V0FDSSw4QkFBcUIzVSxJQUFyQixFQUEyQjtBQUN2QjtBQUNBLFVBQUlBLElBQUksSUFBSTBVLFNBQVosRUFBdUI7QUFDbkIsYUFBS3BILFVBQUwsR0FBa0IsQ0FBQyxLQUFLQSxVQUF4QjtBQUNILE9BRkQsTUFFTztBQUNILGFBQUtBLFVBQUwsR0FBa0J0TixJQUFsQjtBQUNILE9BTnNCLENBUXZCOzs7QUFDQSxrQ0FHSXlNLGtGQUFBLENBQXFDLENBQUMsS0FBS2EsVUFBM0MsQ0FISjtBQUFBLFVBQ0lzQyxXQURKLHlCQUNJQSxXQURKO0FBQUEsVUFFSUgsU0FGSix5QkFFSUEsU0FGSjs7QUFLQSxXQUFLOUcsdUJBQUwsQ0FBNkI7QUFDekJpSCxRQUFBQSxXQUFXLEVBQVhBLFdBRHlCO0FBRXpCSCxRQUFBQSxTQUFTLEVBQVRBO0FBRnlCLE9BQTdCO0FBSUg7QUFFRDtBQUNKO0FBQ0E7Ozs7V0FDSSx1QkFBYztBQUNWLFVBQU1xRixvQkFBb0IsR0FBRyxFQUE3QixDQURVLENBR1Y7O0FBQ0EsV0FBS1gsWUFBTCxDQUFrQlksT0FBbEIsQ0FBMEIsVUFBQU4sV0FBVyxFQUFJO0FBQ3JDO0FBQ0EsWUFBSSxDQUFDQSxXQUFXLENBQUNuSCxVQUFqQixFQUE2QjtBQUN6QjtBQUNIOztBQUVELFlBQU1rRCxNQUFNLEdBQUdpRSxXQUFXLENBQUNwSCxXQUEzQixDQU5xQyxDQVFyQzs7QUFDQSxZQUFJNEcsc0VBQW1CLENBQUN6RCxNQUFELENBQXZCLEVBQWlDO0FBQzdCaUUsVUFBQUEsV0FBVyxDQUFDakgsb0JBQVo7QUFDQXNILFVBQUFBLG9CQUFvQixDQUFDOVgsSUFBckIsQ0FBMEJ5WCxXQUExQjtBQUNIO0FBQ0osT0FiRDtBQWVBLGFBQU9LLG9CQUFQO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTs7OztXQUNJLHVCQUFjOVUsSUFBZCxFQUFvQjtBQUNoQixpQ0FBd0NBLElBQXhDO0FBQUEsVUFBT2dWLGdCQUFQO0FBQUEsVUFBeUJDLFdBQXpCOztBQUNBLFdBQUtuVyxVQUFMLEdBQWtCa1csZ0JBQWxCOztBQUVBLFVBQUksQ0FBQyxDQUFDQyxXQUFOLEVBQW1CO0FBQ2YsYUFBSzlWLHFCQUFMLEdBQTZCOFYsV0FBN0I7QUFDSDtBQUNKO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSw0QkFBbUJ2VyxPQUFuQixFQUE0QjtBQUN4QixVQUFJQSxPQUFPLEtBQUssSUFBWixJQUFvQixLQUFLUSxRQUFMLEtBQWtCLEtBQTFDLEVBQWlEO0FBQzdDO0FBQ0EsYUFBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNBLGFBQUt5Six1QkFBTCxDQUE2QjtBQUN6QmtILFVBQUFBLFFBQVEsRUFBRTtBQURlLFNBQTdCO0FBR0gsT0FORCxNQU1PLElBQUksS0FBSzNRLFFBQUwsSUFBaUJSLE9BQU8sS0FBSyxJQUFqQyxFQUF1QztBQUMxQztBQUNBLGFBQUtRLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxhQUFLNEcsVUFBTCxHQUFrQixLQUFsQjtBQUNBLGFBQUs2Qyx1QkFBTCxDQUE2QjtBQUN6QmtILFVBQUFBLFFBQVEsRUFBRTtBQURlLFNBQTdCO0FBR0gsT0FkdUIsQ0FnQnhCOzs7QUFDQSxVQUFHblIsT0FBTyxLQUFLLElBQWYsRUFBcUI7QUFDakIsYUFBSzBLLGdCQUFMO0FBQ0F4SSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLEtBQUtsQixNQUEzQjtBQUNIO0FBQ0o7QUFFRDtBQUNKO0FBQ0E7Ozs7V0FDSSw0QkFBbUI7QUFDZixXQUFLQSxNQUFMLEdBQWMsQ0FBQyxLQUFLQSxNQUFwQjtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSxpQ0FBd0I4UixjQUF4QixFQUF3QztBQUNwQztBQUNBLFdBQUssSUFBTUUsUUFBWCxJQUF1QkYsY0FBdkIsRUFBdUM7QUFDbkMsWUFBTUcsUUFBUSxHQUFHSCxjQUFjLENBQUNFLFFBQUQsQ0FBL0I7O0FBQ0EsWUFBSSxLQUFLL1MsaUJBQUwsQ0FBdUIrUyxRQUF2QixNQUFxQ0MsUUFBekMsRUFBbUQ7QUFDL0MsZUFBS2hULGlCQUFMLENBQXVCK1MsUUFBdkIsSUFBbUNDLFFBQW5DO0FBQ0g7QUFDSjtBQUNKO0FBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksMkJBQWtCO0FBQ2Q7QUFFQTtBQUNBLFdBQUtoSixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsV0FBS0UsZ0JBQUwsR0FBd0IsRUFBeEI7QUFDQSxXQUFLcUwsWUFBTCxHQUFvQixFQUFwQjtBQUNBLFdBQUtDLGdCQUFMLEdBQXdCLEVBQXhCLENBUGMsQ0FTZDs7QUFDQSxXQUFLbFYsUUFBTCxHQUFnQixJQUFoQjtBQUNBLFdBQUtTLE1BQUwsR0FBYyxLQUFkO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozs7V0FDSSxzQkFBYTtBQUNUMUMsTUFBQUEsOEVBQUEsQ0FBNEIsSUFBNUI7QUFDSDtBQUVEO0FBQ0o7QUFDQTs7OztXQUNJLHVCQUFjO0FBQ1ZBLE1BQUFBLDJFQUFBLENBQXlCLElBQXpCO0FBQ0g7Ozs7RUF0UmlCMFY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU0yQztBQVNGLG9CQUFjO0FBQUE7O0FBQ1YsUUFBSSxDQUFDQSxNQUFNLENBQUMxWSxRQUFaLEVBQXNCO0FBQ2xCLFdBQUsyWSxJQUFMO0FBQ0FELE1BQUFBLE1BQU0sQ0FBQzFZLFFBQVAsR0FBa0IsSUFBbEI7QUFDSDs7QUFFRCxXQUFPMFksTUFBTSxDQUFDMVksUUFBZDtBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7OztXQUNJLGdCQUFPO0FBQ0gsV0FBSzRZLFdBQUw7QUFDQSxXQUFLQyxXQUFMO0FBQ0EsV0FBS0MsaUJBQUw7QUFDQSxXQUFLQyxpQkFBTDtBQUNBLFdBQUtDLGtCQUFMO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozs7V0FDSSx1QkFBYztBQUNWLFdBQUt0WSxNQUFMLEdBQWN1WSxRQUFRLENBQUNDLGNBQVQsQ0FBd0JYLHdFQUF4QixDQUFkO0FBQ0EsV0FBSzdYLE1BQUwsQ0FBWXlWLEtBQVosR0FBb0J6TixNQUFNLENBQUMwUSxVQUFQLEdBQW9CYiwyRUFBeEM7QUFDQSxXQUFLN1gsTUFBTCxDQUFZMFYsTUFBWixHQUFxQjFOLE1BQU0sQ0FBQzRRLFdBQVAsR0FBcUJmLDRFQUExQztBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksdUJBQWM7QUFDVixXQUFLaUIsT0FBTCxHQUFlLElBQUloQixxREFBSixDQUFZLEtBQUs5WCxNQUFqQixDQUFmO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozs7V0FDSSw2QkFBb0I7QUFDaEIsV0FBSytZLHFCQUFMLEdBQTZCLElBQUkxUCw4RkFBSixFQUE3QjtBQUNBLFdBQUsxQixXQUFMLEdBQW1CLElBQUk2RSx5RUFBSixDQUFnQixLQUFLeE0sTUFBckIsQ0FBbkI7QUFDQSxXQUFLZ1osd0JBQUwsR0FBZ0MsSUFBSWhVLHVHQUFKLEVBQWhDO0FBQ0EsV0FBS2lVLGNBQUwsR0FBc0IsSUFBSXZSLGtGQUFKLENBQW1CLEtBQUsxSCxNQUF4QixFQUFnQyxLQUFLMkgsV0FBckMsQ0FBdEI7QUFDQSxXQUFLdVIsd0JBQUwsR0FBZ0MsSUFBSTlKLG9HQUFKLEVBQWhDO0FBQ0EsV0FBSytKLHVCQUFMLEdBQStCLElBQUk3SSwyR0FBSixFQUEvQjtBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksNkJBQW9CO0FBQ2hCeUgsTUFBQUEsc0VBQUE7QUFDSDtBQUVEO0FBQ0o7QUFDQTs7OztXQUNJLDhCQUFxQjtBQUNqQjVJLE1BQUFBLDRGQUFBLENBQTRCLElBQTVCO0FBQ0g7OztXQXBFRCx1QkFBcUI7QUFDakIsVUFBRyxDQUFDLEtBQUs3UCxRQUFULEVBQW1CO0FBQ2YsYUFBS0EsUUFBTCxHQUFnQixJQUFJMFksTUFBSixFQUFoQjtBQUNIOztBQUVELGFBQU8sS0FBSzFZLFFBQVo7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJFLElBQU0rWixvQkFBb0IsR0FBRztBQUNoQ0MsRUFBQUEsU0FBUyxFQUFFLENBRHFCO0FBRWhDQyxFQUFBQSxTQUFTLEVBQUUsT0FGcUI7QUFHaENDLEVBQUFBLFlBQVksRUFBRTtBQUhrQixDQUE3QjtBQU1BLElBQU1DLG1CQUFtQixHQUFHO0FBQy9CQyxFQUFBQSxVQUFVLEVBQUUsRUFEbUI7QUFFL0JKLEVBQUFBLFNBQVMsRUFBRSxDQUZvQjtBQUcvQkMsRUFBQUEsU0FBUyxFQUFFO0FBSG9CLENBQTVCO0FBTUEsSUFBTUksa0JBQWtCLEdBQUc7QUFDOUJMLEVBQUFBLFNBQVMsRUFBRSxDQURtQjtBQUU5QkMsRUFBQUEsU0FBUyxFQUFFO0FBRm1CLENBQTNCO0FBS0EsSUFBTUssMEJBQTBCLEdBQUc7QUFDdENOLEVBQUFBLFNBQVMsRUFBRSxDQUQyQjtBQUV0Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRjJCLENBQW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQlA7QUFDQTtBQUNBOztJQU9NTTtBQUNGLHlCQUFZN1osTUFBWixFQUFvQlEsYUFBcEIsRUFBbUM7QUFBQTs7QUFDL0IsU0FBS1IsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS1EsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLc1osT0FBTCxHQUFlO0FBQ1gsZ0JBQVUsS0FBS0MsVUFBTCxDQUFnQi9ZLElBQWhCLENBQXFCLElBQXJCLENBREM7QUFFWCxlQUFTLEtBQUtnWixTQUFMLENBQWVoWixJQUFmLENBQW9CLElBQXBCLENBRkU7QUFHWCxrQkFBWSxLQUFLaVosWUFBTCxDQUFrQmpaLElBQWxCLENBQXVCLElBQXZCO0FBSEQsS0FBZjtBQUtBLFNBQUtpRSxnQkFBTDtBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7OztXQUNJLDRCQUFtQjtBQUNmTCxNQUFBQSxrRUFBQSxDQUF5QkQsa0ZBQXpCLEVBQXNELEtBQUt1VixJQUFMLENBQVVsWixJQUFWLENBQWUsSUFBZixDQUF0RDtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGNBQUs4TixNQUFMLEVBQWFxTCxlQUFiLEVBQThCO0FBQzFCLFVBQVExWSxRQUFSLEdBQXFCcU4sTUFBckIsQ0FBUXJOLFFBQVIsQ0FEMEIsQ0FHMUI7O0FBQ0EsVUFBSSxFQUFFQSxRQUFRLElBQUksS0FBS3FZLE9BQW5CLENBQUosRUFBaUM7QUFDN0IsZUFBT3ZELEtBQUssQ0FBQywwQ0FBRCxDQUFaO0FBQ0gsT0FOeUIsQ0FRMUI7OztBQUNBNEQsTUFBQUEsZUFBZSxDQUFDLEtBQUtMLE9BQUwsQ0FBYXJZLFFBQWIsRUFBdUJxTixNQUF2QixDQUFELENBQWY7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxvQkFBV0EsTUFBWCxFQUFtQjtBQUNmO0FBQ0EsVUFDSWxPLENBREosR0FZSWtPLE1BWkosQ0FDSWxPLENBREo7QUFBQSxVQUVJQyxDQUZKLEdBWUlpTyxNQVpKLENBRUlqTyxDQUZKO0FBQUEsVUFHSXNDLE1BSEosR0FZSTJMLE1BWkosQ0FHSTNMLE1BSEo7QUFBQSxVQUlJNE8sVUFKSixHQVlJakQsTUFaSixDQUlJaUQsVUFKSjtBQUFBLFVBS0lDLFFBTEosR0FZSWxELE1BWkosQ0FLSWtELFFBTEo7QUFBQSxVQU1JRSxRQU5KLEdBWUlwRCxNQVpKLENBTUlvRCxRQU5KO0FBQUEsVUFPSUUsUUFQSixHQVlJdEQsTUFaSixDQU9Jc0QsUUFQSjtBQUFBLFVBUUlDLFVBUkosR0FZSXZELE1BWkosQ0FRSXVELFVBUko7QUFBQSxVQVNJQyxXQVRKLEdBWUl4RCxNQVpKLENBU0l3RCxXQVRKO0FBQUEsVUFVSUMsUUFWSixHQVlJekQsTUFaSixDQVVJeUQsUUFWSjtBQUFBLFVBV0lDLGlCQVhKLEdBWUkxRCxNQVpKLENBV0kwRCxpQkFYSixDQUZlLENBZ0JmOztBQUNBLFVBQU00SCxNQUFNLEdBQUcsSUFBSUMsTUFBSixFQUFmO0FBQ0FELE1BQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUNJMVosQ0FESixFQUVJQyxDQUZKLEVBR0lzQyxNQUhKLEVBSUk0TyxVQUpKLEVBS0lDLFFBTEosRUFsQmUsQ0EwQmY7O0FBQ0EsVUFBTUcsU0FBUyxHQUFHckQsTUFBTSxDQUFDLFdBQUQsQ0FBeEI7O0FBQ0EsVUFBSW9ELFFBQVEsSUFBSUMsU0FBaEIsRUFBMkI7QUFDdkIsYUFBSzNSLGFBQUwsQ0FBbUIrWixTQUFuQixHQUErQnBJLFNBQS9CO0FBQ0EsYUFBSzNSLGFBQUwsQ0FBbUJnYSxJQUFuQixDQUF3QkosTUFBeEI7QUFDSCxPQS9CYyxDQWlDZjs7O0FBQ0EsVUFDSSxDQUFDLEVBQ0doSSxRQUFRLElBQ0xDLFVBREgsSUFFR0MsV0FITixDQURMLEVBTUU7QUFDRSxhQUFLOVIsYUFBTCxDQUFtQjhZLFNBQW5CLEdBQStCakgsVUFBL0I7O0FBQ0EsWUFBSUUsUUFBSixFQUFjO0FBQ1YsZUFBSy9SLGFBQUwsQ0FBbUJpYSxXQUFuQixHQUFpQ2pJLGlCQUFqQztBQUNILFNBRkQsTUFFTztBQUNILGVBQUtoUyxhQUFMLENBQW1CaWEsV0FBbkIsR0FBaUNuSSxXQUFqQztBQUNIOztBQUVELGFBQUs5UixhQUFMLENBQW1Ca2EsTUFBbkIsQ0FBMEJOLE1BQTFCO0FBQ0gsT0FqRGMsQ0FtRGY7OztBQUNBLFVBQU1PLGVBQWUsR0FBRyxFQUF4Qjs7QUFDQSxVQUFJcEksUUFBSixFQUFjO0FBQ1Y7QUFDQSxhQUFLL1IsYUFBTCxDQUFtQjhZLFNBQW5CLEdBQStCRCxtRUFBL0I7QUFFQSxZQUFNdUIsa0JBQWtCLEdBQUcsQ0FDdkI7QUFBQ2hhLFVBQUFBLENBQUMsRUFBRUEsQ0FBQyxHQUFHdUMsTUFBUjtBQUFnQnRDLFVBQUFBLENBQUMsRUFBRUE7QUFBbkIsU0FEdUIsRUFFdkI7QUFBQ0QsVUFBQUEsQ0FBQyxFQUFFQSxDQUFDLEdBQUd1QyxNQUFSO0FBQWdCdEMsVUFBQUEsQ0FBQyxFQUFFQTtBQUFuQixTQUZ1QixFQUd2QjtBQUFDRCxVQUFBQSxDQUFDLEVBQUVBLENBQUo7QUFBT0MsVUFBQUEsQ0FBQyxFQUFFQSxDQUFDLEdBQUdzQztBQUFkLFNBSHVCLEVBSXZCO0FBQUN2QyxVQUFBQSxDQUFDLEVBQUVBLENBQUo7QUFBT0MsVUFBQUEsQ0FBQyxFQUFFQSxDQUFDLEdBQUdzQztBQUFkLFNBSnVCLENBQTNCOztBQU9BLCtDQUE2QnlYLGtCQUE3Qix5Q0FBaUQ7QUFBNUMsY0FBTUMsY0FBYywwQkFBcEI7QUFDRCxlQUFLcmEsYUFBTCxDQUFtQmlhLFdBQW5CLEdBQWlDcEIsbUVBQWpDO0FBQ0EsY0FBT3pZLEVBQVAsR0FBZWlhLGNBQWYsQ0FBT2phLENBQVA7QUFBQSxjQUFVQyxFQUFWLEdBQWVnYSxjQUFmLENBQVVoYSxDQUFWO0FBQ0EsY0FBTWtCLFVBQVUsR0FBRyxJQUFJc1ksTUFBSixFQUFuQjtBQUNBdFksVUFBQUEsVUFBVSxDQUFDdVksR0FBWCxDQUNJMVosRUFESixFQUVJQyxFQUZKLEVBR0l3WSxzRUFISixFQUlJdEgsVUFKSixFQUtJQyxRQUxKO0FBT0EsZUFBS3hSLGFBQUwsQ0FBbUJrYSxNQUFuQixDQUEwQjNZLFVBQTFCO0FBQ0EsZUFBS3ZCLGFBQUwsQ0FBbUIrWixTQUFuQixHQUErQixPQUEvQjtBQUNBLGVBQUsvWixhQUFMLENBQW1CZ2EsSUFBbkIsQ0FBd0J6WSxVQUF4QjtBQUNBNFksVUFBQUEsZUFBZSxDQUFDamIsSUFBaEIsQ0FBcUI7QUFDakJxQyxZQUFBQSxVQUFVLEVBQVZBLFVBRGlCO0FBRWpCOUIsWUFBQUEsUUFBUSxFQUFFO0FBQ05XLGNBQUFBLENBQUMsRUFBREEsRUFETTtBQUVOQyxjQUFBQSxDQUFDLEVBQURBO0FBRk07QUFGTyxXQUFyQjtBQU9IO0FBQ0o7O0FBQ0QsYUFBTyxDQUFDdVosTUFBRCxFQUFTTyxlQUFULENBQVA7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksbUJBQVU3TCxNQUFWLEVBQWtCO0FBQ2QsVUFDSTVNLGFBREosR0FJSTRNLE1BSkosQ0FDSTVNLGFBREo7QUFBQSxVQUVJQyxXQUZKLEdBSUkyTSxNQUpKLENBRUkzTSxXQUZKO0FBQUEsVUFHSVAsUUFISixHQUlJa04sTUFKSixDQUdJbE4sUUFISixDQURjLENBT2Q7O0FBQ0EsVUFBRyxDQUFDTSxhQUFKLEVBQW1CO0FBQ2ZBLFFBQUFBLGFBQWEsR0FBR0MsV0FBaEI7QUFDSCxPQUZELE1BRU8sSUFBSSxDQUFDQSxXQUFMLEVBQWtCO0FBQ3JCQSxRQUFBQSxXQUFXLEdBQUdELGFBQWQ7QUFDSDs7QUFFRCxVQUFNNFksS0FBSyxHQUFHN1gsSUFBSSxDQUFDOFgsS0FBTCxDQUNWNVksV0FBVyxDQUFDdEIsQ0FBWixHQUFnQnFCLGFBQWEsQ0FBQ3JCLENBRHBCLEVBRVZzQixXQUFXLENBQUN2QixDQUFaLEdBQWdCc0IsYUFBYSxDQUFDdEIsQ0FGcEIsQ0FBZCxDQWRjLENBbUJkOztBQUNBLFdBQUtKLGFBQUwsQ0FBbUJpYSxXQUFuQixHQUFpQzdZLFFBQVEsR0FDckMrWCxpRUFEcUMsR0FFckNGLGtFQUZKO0FBR0EsV0FBS2paLGFBQUwsQ0FBbUI4WSxTQUFuQixHQUErQjFYLFFBQVEsR0FDbkMrWCxpRUFEbUMsR0FFbkNGLGtFQUZKO0FBSUEsVUFBTXVCLElBQUksR0FBRyxJQUFJWCxNQUFKLEVBQWI7QUFDQSxVQUFNcFksSUFBSSxHQUFHLElBQUlvWSxNQUFKLEVBQWIsQ0E1QmMsQ0E4QmQ7O0FBQ0FXLE1BQUFBLElBQUksQ0FBQ0MsTUFBTCxDQUFZL1ksYUFBYSxDQUFDdEIsQ0FBMUIsRUFBNkJzQixhQUFhLENBQUNyQixDQUEzQztBQUNBbWEsTUFBQUEsSUFBSSxDQUFDRSxNQUFMLENBQVkvWSxXQUFXLENBQUN2QixDQUF4QixFQUEyQnVCLFdBQVcsQ0FBQ3RCLENBQXZDO0FBQ0EsV0FBS0wsYUFBTCxDQUFtQmthLE1BQW5CLENBQTBCTSxJQUExQixFQWpDYyxDQW1DZDs7QUFDQS9ZLE1BQUFBLElBQUksQ0FBQ2daLE1BQUwsQ0FDSTlZLFdBQVcsQ0FBQ3ZCLENBQVosR0FBZ0I2WSxtRUFBQSxHQUFpQ3hXLElBQUksQ0FBQ2tZLEdBQUwsQ0FBU0wsS0FBSyxHQUFHN1gsSUFBSSxDQUFDZ1AsRUFBTCxHQUFVLENBQTNCLENBRHJELEVBRUk5UCxXQUFXLENBQUN0QixDQUFaLEdBQWdCNFksbUVBQUEsR0FBaUN4VyxJQUFJLENBQUNtWSxHQUFMLENBQVNOLEtBQUssR0FBRzdYLElBQUksQ0FBQ2dQLEVBQUwsR0FBVSxDQUEzQixDQUZyRDtBQUlBaFEsTUFBQUEsSUFBSSxDQUFDaVosTUFBTCxDQUFZL1ksV0FBVyxDQUFDdkIsQ0FBeEIsRUFBMkJ1QixXQUFXLENBQUN0QixDQUF2QztBQUNBb0IsTUFBQUEsSUFBSSxDQUFDaVosTUFBTCxDQUNJL1ksV0FBVyxDQUFDdkIsQ0FBWixHQUFnQjZZLG1FQUFBLEdBQWlDeFcsSUFBSSxDQUFDa1ksR0FBTCxDQUFTTCxLQUFLLEdBQUc3WCxJQUFJLENBQUNnUCxFQUFMLEdBQVUsQ0FBM0IsQ0FEckQsRUFFSTlQLFdBQVcsQ0FBQ3RCLENBQVosR0FBZ0I0WSxtRUFBQSxHQUFpQ3hXLElBQUksQ0FBQ21ZLEdBQUwsQ0FBU04sS0FBSyxHQUFHN1gsSUFBSSxDQUFDZ1AsRUFBTCxHQUFVLENBQTNCLENBRnJEO0FBSUEsV0FBS3pSLGFBQUwsQ0FBbUJrYSxNQUFuQixDQUEwQnpZLElBQTFCO0FBRUEsYUFBTztBQUFDK1ksUUFBQUEsSUFBSSxFQUFKQSxJQUFEO0FBQU8vWSxRQUFBQSxJQUFJLEVBQUpBO0FBQVAsT0FBUDtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSxzQkFBYTZNLE1BQWIsRUFBcUI7QUFDakIsVUFDSXNILGVBREosR0FHSXRILE1BSEosQ0FDSXNILGVBREo7QUFBQSxVQUVJWixtQkFGSixHQUdJMUcsTUFISixDQUVJMEcsbUJBRko7QUFLQSxVQUFNa0IsZUFBZSxHQUFHLElBQUkyRCxNQUFKLEVBQXhCO0FBRUEzRCxNQUFBQSxlQUFlLENBQUMyRSxJQUFoQixDQUNJakYsZUFBZSxDQUFDeFYsQ0FBaEIsR0FBb0I0VSxtQkFBbUIsQ0FBQ0MsS0FBcEIsR0FBNEIsQ0FEcEQsRUFFSVcsZUFBZSxDQUFDdlYsQ0FBaEIsR0FBb0IyVSxtQkFBbUIsQ0FBQ0UsTUFBcEIsR0FBNkIsQ0FGckQsRUFHSUYsbUJBQW1CLENBQUNDLEtBSHhCLEVBSUlELG1CQUFtQixDQUFDRSxNQUp4QjtBQU9BLFdBQUtsVixhQUFMLENBQW1COFksU0FBbkIsR0FBK0JNLHlFQUEvQjtBQUNBLFdBQUtwWixhQUFMLENBQW1CaWEsV0FBbkIsR0FBaUNiLHlFQUFqQztBQUNBLFdBQUtwWixhQUFMLENBQW1Ca2EsTUFBbkIsQ0FBMEJoRSxlQUExQjtBQUVBLGFBQU9BLGVBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU5MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTW9CO0FBQ0YsbUJBQVk5WCxNQUFaLEVBQW9CO0FBQUE7O0FBQ2hCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtRLGFBQUwsR0FBcUIsS0FBS1IsTUFBTCxDQUFZUyxVQUFaLENBQXVCLElBQXZCLENBQXJCLENBRmdCLENBSWhCOztBQUNBLFNBQUswWCxXQUFMLEdBTGdCLENBT2hCOztBQUNBLFNBQUtsVCxnQkFBTDtBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7OztXQUNJLDRCQUFtQjtBQUNmTCxNQUFBQSxrRUFBQSxDQUF5QkQsK0VBQXpCLEVBQW1ELEtBQUs2QixPQUFMLENBQWF4RixJQUFiLENBQWtCLElBQWxCLENBQW5EO0FBQ0g7OztXQUVELHVCQUFjO0FBQ1YsV0FBS3VhLE1BQUwsR0FBYyxJQUFJMUIsMERBQUosQ0FBa0IsS0FBSzdaLE1BQXZCLEVBQStCLEtBQUtRLGFBQXBDLENBQWQ7QUFDQSxXQUFLc0csSUFBTCxHQUFZLElBQUl3VSxzREFBSixDQUFnQixLQUFLdGIsTUFBckIsRUFBNkIsS0FBS1EsYUFBbEMsQ0FBWjtBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksbUJBQVU7QUFDTjtBQUNBLFdBQUtBLGFBQUwsQ0FBbUJnYixTQUFuQixDQUE2QixDQUE3QixFQUFnQyxDQUFoQyxFQUFtQyxLQUFLeGIsTUFBTCxDQUFZeVYsS0FBL0MsRUFBc0QsS0FBS3pWLE1BQUwsQ0FBWTBWLE1BQWxFLEVBRk0sQ0FJTjs7QUFKTSxpREFLZ0IvVixnRkFMaEI7QUFBQTs7QUFBQTtBQUtOLDREQUEwQztBQUFBLGNBQS9CeUIsT0FBK0I7QUFDdEM7QUFDQXdELFVBQUFBLCtEQUFBLENBQ0lELGtGQURKLEVBRUl2RCxPQUFPLENBQUNFLGlCQUZaLEVBR0lGLE9BQU8sQ0FBQzJWLGFBQVIsQ0FBc0IvVixJQUF0QixDQUEyQkksT0FBM0IsQ0FISixFQUZzQyxDQVF0Qzs7QUFDQUEsVUFBQUEsT0FBTyxDQUFDNFYsUUFBUjtBQUNILFNBZkssQ0FpQk47O0FBakJNO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0RBa0JhcFgsdUVBbEJiO0FBQUE7O0FBQUE7QUFrQk4sK0RBQW9DO0FBQUEsY0FBekJvQyxJQUF5QjtBQUNoQzRDLFVBQUFBLCtEQUFBLENBQ0lELGtGQURKLEVBRUk7QUFDSWxELFlBQUFBLFFBQVEsRUFBRSxPQURkO0FBRUlTLFlBQUFBLGFBQWEsRUFBRUYsSUFBSSxDQUFDRSxhQUZ4QjtBQUdJQyxZQUFBQSxXQUFXLEVBQUVILElBQUksQ0FBQ0csV0FIdEI7QUFJSVAsWUFBQUEsUUFBUSxFQUFFSSxJQUFJLENBQUNKO0FBSm5CLFdBRkosRUFRSUksSUFBSSxDQUFDK1UsYUFBTCxDQUFtQi9WLElBQW5CLENBQXdCZ0IsSUFBeEIsQ0FSSjtBQVVIO0FBN0JLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4QlQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVMO0FBQ0E7O0lBRU1zWjtBQUNGLHVCQUFZdGIsTUFBWixFQUFvQlEsYUFBcEIsRUFBbUM7QUFBQTs7QUFDL0IsU0FBS1IsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS1EsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLeUUsZ0JBQUw7QUFDSDtBQUVEO0FBQ0o7QUFDQTs7Ozs7V0FDSSw0QkFBbUI7QUFDZkwsTUFBQUEsa0VBQUEsQ0FBeUJELGlGQUF6QixFQUFxRCxLQUFLOFcsS0FBTCxDQUFXemEsSUFBWCxDQUFnQixJQUFoQixDQUFyRDtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGVBQU04TixNQUFOLEVBQWM0TSxtQkFBZCxFQUFtQztBQUMvQjtBQUNBLFVBQ0l2TCxRQURKLEdBSUlyQixNQUpKLENBQ0lxQixRQURKO0FBQUEsVUFFSThGLFFBRkosR0FJSW5ILE1BSkosQ0FFSW1ILFFBRko7QUFBQSxVQUdJQyxXQUhKLEdBSUlwSCxNQUpKLENBR0lvSCxXQUhKLENBRitCLENBUS9COztBQUNBLFVBQUlaLElBQUksR0FBR1ksV0FBVyxDQUFDWixJQUFaLElBQW9CLElBQS9CO0FBQ0FBLE1BQUFBLElBQUksSUFBSSxJQUFSO0FBRUEsV0FBSzlVLGFBQUwsQ0FBbUJtYixJQUFuQixhQUE2QnJHLElBQTdCLGNBQXFDWSxXQUFXLENBQUNoSSxLQUFqRCxFQVorQixDQWMvQjs7QUFDQSxXQUFLMU4sYUFBTCxDQUFtQitaLFNBQW5CLEdBQStCckUsV0FBVyxDQUFDWCxLQUEzQzs7QUFDQSxVQUFNcUcsUUFBUSxHQUFHLEtBQUtDLFlBQUwsQ0FBa0IxTCxRQUFsQixFQUE0QitGLFdBQVcsQ0FBQ3RQLE9BQXhDLEVBQWlEcVAsUUFBakQsQ0FBakI7O0FBQ0EsVUFDSTZGLFFBREosR0FHSUYsUUFISixDQUNJRSxRQURKO0FBQUEsVUFFSXRHLG1CQUZKLEdBR0lvRyxRQUhKLENBRUlwRyxtQkFGSixDQWpCK0IsQ0FzQi9COztBQUNBa0csTUFBQUEsbUJBQW1CLENBQUNsRyxtQkFBRCxFQUFzQixVQUF0QixDQUFuQixDQXZCK0IsQ0F5Qi9COztBQXpCK0IsaURBMEJkc0csUUExQmM7QUFBQTs7QUFBQTtBQTBCL0IsNERBQTJCO0FBQUEsY0FBbEJoVixJQUFrQjtBQUN2QixlQUFLdEcsYUFBTCxDQUFtQnViLFFBQW5CLENBQTRCalYsSUFBSSxDQUFDLENBQUQsQ0FBaEMsRUFBcUNBLElBQUksQ0FBQyxDQUFELENBQXpDLEVBQThDQSxJQUFJLENBQUMsQ0FBRCxDQUFsRDtBQUNIO0FBNUI4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNkJsQztBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksc0JBQWFxSixRQUFiLEVBQXVCdkosT0FBdkIsRUFBZ0NxUCxRQUFoQyxFQUEwQztBQUN0QyxVQUFJK0YsT0FBTyxHQUFHLEtBQUt4YixhQUFMLENBQW1CeWIsV0FBbkIsQ0FBK0JyVixPQUEvQixDQUFkO0FBQ0EsVUFBSWtWLFFBQVEsR0FBRyxFQUFmOztBQUVBLFVBQUlFLE9BQU8sQ0FBQ3ZHLEtBQVIsR0FBZ0JRLFFBQXBCLEVBQThCO0FBQzFCO0FBQ0EsWUFBSXJWLENBQUMsR0FBR3VQLFFBQVEsQ0FBQ3ZQLENBQVQsR0FBYW9iLE9BQU8sQ0FBQ3ZHLEtBQVIsR0FBZ0IsQ0FBckM7QUFDQSxZQUFJNVUsQ0FBQyxHQUFHc1AsUUFBUSxDQUFDdFAsQ0FBVCxHQUFhLENBQUNtYixPQUFPLENBQUNFLHVCQUFSLEdBQWtDRixPQUFPLENBQUNHLHdCQUEzQyxJQUF1RSxDQUE1RixDQUgwQixDQUsxQjs7QUFDQSxZQUFJM0csbUJBQW1CLEdBQUk7QUFDdkJDLFVBQUFBLEtBQUssRUFBRVEsUUFEZ0I7QUFFdkJQLFVBQUFBLE1BQU0sRUFBR3NHLE9BQU8sQ0FBQ0kscUJBQVIsR0FBZ0NKLE9BQU8sQ0FBQ0s7QUFGMUIsU0FBM0I7QUFLQVAsUUFBQUEsUUFBUSxDQUFDcGMsSUFBVCxDQUFjLENBQUNrSCxPQUFELEVBQVVoRyxDQUFWLEVBQWFDLENBQWIsQ0FBZDtBQUNBLGVBQU87QUFDSGliLFVBQUFBLFFBQVEsRUFBUkEsUUFERztBQUVIdEcsVUFBQUEsbUJBQW1CLEVBQW5CQTtBQUZHLFNBQVA7QUFJSCxPQXBCcUMsQ0FzQnRDOzs7QUFDQSxhQUFPc0csUUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGRSxJQUFNM1MsZ0JBQWdCLEdBQUc7QUFDNUJ3QixFQUFBQSxpQkFBaUIsRUFBRSxtQkFEUztBQUU1QjBCLEVBQUFBLHlCQUF5QixFQUFFO0FBRkMsQ0FBekI7QUFLQSxJQUFNakQsYUFBYSxHQUFHO0FBQ3pCd0IsRUFBQUEsY0FBYyxFQUFFO0FBRFMsQ0FBdEI7QUFJQSxJQUFNOEosb0JBQW9CLEdBQUc7QUFDaENFLEVBQUFBLFVBQVUsRUFBRTtBQURvQixDQUE3QjtBQUlBLElBQU1sQyxpQkFBaUIsR0FBRztBQUM3QnpHLEVBQUFBLE9BQU8sRUFBRTtBQURvQixDQUExQjtBQUlBLElBQU10SCxnQkFBZ0IsR0FBRztBQUM1QjBSLEVBQUFBLFVBQVUsRUFBRSxZQURnQjtBQUU1QkwsRUFBQUEsU0FBUyxFQUFFLFdBRmlCO0FBRzVCeFAsRUFBQUEsT0FBTyxFQUFFO0FBSG1CLENBQXpCO0FBTUEsSUFBTTlCLHlCQUF5QixHQUFHO0FBQ3JDNEUsRUFBQUEsZ0JBQWdCLEVBQUUsa0JBRG1CO0FBRXJDQyxFQUFBQSxhQUFhLEVBQUUsZUFGc0I7QUFHckNDLEVBQUFBLG1CQUFtQixFQUFFLHFCQUhnQjtBQUlyQ0MsRUFBQUEsZ0JBQWdCLEVBQUUsV0FKbUI7QUFLckM2UyxFQUFBQSxlQUFlLEVBQUUsaUJBTG9CO0FBTXJDNVMsRUFBQUEsYUFBYSxFQUFFLGVBTnNCO0FBT3JDQyxFQUFBQSxjQUFjLEVBQUUsZ0JBUHFCO0FBUXJDQyxFQUFBQSxhQUFhLEVBQUUsZUFSc0I7QUFTckNDLEVBQUFBLFdBQVcsRUFBRSxhQVR3QjtBQVVyQ0MsRUFBQUEsZ0JBQWdCLEVBQUUsa0JBVm1CO0FBV3JDNkQsRUFBQUEsZUFBZSxFQUFFLGlCQVhvQjtBQVlyQ3pJLEVBQUFBLGNBQWMsRUFBRSxnQkFacUI7QUFhckNLLEVBQUFBLFlBQVksRUFBRSxjQWJ1QjtBQWNyQ0MsRUFBQUEsYUFBYSxFQUFFLGVBZHNCO0FBZXJDRixFQUFBQSxrQkFBa0IsRUFBRSxvQkFmaUI7QUFnQnJDSCxFQUFBQSxhQUFhLEVBQUUsZUFoQnNCO0FBaUJyQ0UsRUFBQUEsZ0JBQWdCLEVBQUUsa0JBakJtQjtBQWtCckNELEVBQUFBLGdCQUFnQixFQUFFO0FBbEJtQixDQUFsQztBQXFCQSxJQUFNa0gsa0NBQWtDLEdBQUc7QUFDOUNjLEVBQUFBLGdCQUFnQixFQUFFLGtCQUQ0QjtBQUU5Q2dELEVBQUFBLFVBQVUsRUFBRSxZQUZrQztBQUc5Q2IsRUFBQUEsZUFBZSxFQUFFLGlCQUg2QjtBQUk5Q3lFLEVBQUFBLGVBQWUsRUFBRSxpQkFKNkI7QUFLOUMzRSxFQUFBQSxvQkFBb0IsRUFBRSxzQkFMd0I7QUFNOUN1QixFQUFBQSxrQkFBa0IsRUFBRSxvQkFOMEI7QUFPOUNDLEVBQUFBLGtCQUFrQixFQUFFLG9CQVAwQjtBQVE5Q2EsRUFBQUEsZ0JBQWdCLEVBQUUsa0JBUjRCO0FBUzlDcEMsRUFBQUEsYUFBYSxFQUFFLGVBVCtCO0FBVTlDRSxFQUFBQSxXQUFXLEVBQUU7QUFWaUMsQ0FBM0M7QUFhQSxJQUFNaEksaUJBQWlCLEdBQUc7QUFDN0JtSCxFQUFBQSxXQUFXLEVBQUUsYUFEZ0I7QUFFN0I1SCxFQUFBQSxJQUFJLEVBQUUsTUFGdUI7QUFHN0JDLEVBQUFBLElBQUksRUFBRTtBQUh1QixDQUExQjtBQU1BLElBQU1xSixnQkFBZ0IsR0FBRztBQUM1QmMsRUFBQUEsU0FBUyxFQUFFLFdBRGlCO0FBRTVCOEMsRUFBQUEsYUFBYSxFQUFFLGVBRmE7QUFHNUJzSSxFQUFBQSxnQkFBZ0IsRUFBRSxrQkFIVTtBQUk1Qm5MLEVBQUFBLFlBQVksRUFBRTtBQUpjLENBQXpCOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQSxJQUFNeUcsWUFBWSxHQUFHO0FBQ3hCWSxFQUFBQSxRQUFRLEVBQUUsVUFEYztBQUV4QkksRUFBQUEsWUFBWSxFQUFFLEVBRlU7QUFHeEJGLEVBQUFBLFdBQVcsRUFBRTtBQUhXLENBQXJCO0FBTUEsSUFBTWxSLGlCQUFpQixHQUFHO0FBQzdCLDRCQUEwQjtBQURHLENBQTFCO0FBSUEsSUFBTStVLHFCQUFxQixHQUFHO0FBQ2pDLHNCQUFvQixrQkFEYTtBQUVqQyxvQkFBa0I7QUFGZSxDQUE5Qjs7Ozs7Ozs7Ozs7Ozs7O0FDVkEsSUFBTWpRLGNBQWMsR0FBRztBQUMxQmtRLEVBQUFBLFdBQVcsRUFBRSxhQURhO0FBRTFCQyxFQUFBQSxpQkFBaUIsRUFBRSxtQkFGTztBQUcxQjdOLEVBQUFBLFFBQVEsRUFBRSxVQUhnQjtBQUkxQjhOLEVBQUFBLE1BQU0sRUFBRSxRQUprQjtBQUsxQkMsRUFBQUEsS0FBSyxFQUFFLE9BTG1CO0FBTTFCQyxFQUFBQSxhQUFhLEVBQUU7QUFOVyxDQUF2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sU0FBU0MsY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEI7QUFDakMsTUFDSTVWLE1BREosR0FJSTRWLElBSkosQ0FDSTVWLE1BREo7QUFBQSxNQUVJMkgsTUFGSixHQUlJaU8sSUFKSixDQUVJak8sTUFGSjtBQUFBLE1BR0lGLFNBSEosR0FJSW1PLElBSkosQ0FHSW5PLFNBSEo7O0FBTUEsVUFBT0EsU0FBUDtBQUNJLFNBQU1yQyxrRUFBTjtBQUNJeVEsTUFBQUEsZUFBZSxDQUFDN1YsTUFBRCxFQUFTMkgsTUFBVCxDQUFmO0FBQ0E7O0FBQ0osU0FBTXZDLHdFQUFOO0FBQ0kwUSxNQUFBQSxjQUFjLENBQUM5VixNQUFELEVBQVMySCxNQUFULENBQWQ7QUFDQTs7QUFDSixTQUFNdkMsK0RBQU47QUFDSTJRLE1BQUFBLFlBQVksQ0FBQy9WLE1BQUQsRUFBUzJILE1BQVQsQ0FBWjtBQUNBOztBQUNKLFNBQU12QyxnRUFBTjtBQUNJNFEsTUFBQUEsZUFBZSxDQUFDaFcsTUFBRCxDQUFmO0FBQ0E7O0FBQ0osU0FBTW9GLDREQUFOO0FBQ0k2USxNQUFBQSxTQUFTLENBQUNqVyxNQUFELENBQVQ7QUFDQTs7QUFDSixTQUFNb0Ysb0VBQU47QUFDSThRLE1BQUFBLGlCQUFpQixDQUFDbFcsTUFBRCxDQUFqQjtBQUNBOztBQUNKO0FBQ0k7QUFwQlIsR0FQaUMsQ0E4QmpDOzs7QUFDQXZDLEVBQUFBLCtEQUFBLENBQ0lELCtFQURKO0FBR0g7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNxWSxlQUFULENBQXlCN1YsTUFBekIsRUFBaUMySCxNQUFqQyxFQUF5QztBQUNyQyw4QkFBaUIzSCxNQUFNLENBQUM3RixpQkFBeEI7QUFBQSxNQUFRVixDQUFSLHlCQUFRQSxDQUFSO0FBQUEsTUFBV0MsQ0FBWCx5QkFBV0EsQ0FBWDtBQUNBLE1BQVF5YyxjQUFSLEdBQTJCeE8sTUFBM0IsQ0FBUXdPLGNBQVI7QUFDQSxNQUFNQyxlQUFlLEdBQUc7QUFDcEIzYyxJQUFBQSxDQUFDLEVBQUVBLENBQUMsR0FBRzBjLGNBQWMsQ0FBQzFjLENBREY7QUFFcEJDLElBQUFBLENBQUMsRUFBRUEsQ0FBQyxHQUFHeWMsY0FBYyxDQUFDemM7QUFGRixHQUF4QixDQUhxQyxDQVFyQzs7QUFDQXNHLEVBQUFBLE1BQU0sQ0FBQ2tFLHVCQUFQLENBQStCa1MsZUFBL0IsRUFUcUMsQ0FXckM7O0FBWHFDLDZDQVlsQnBXLE1BQU0sQ0FBQ21FLFFBWlc7QUFBQTs7QUFBQTtBQVlyQyx3REFBb0M7QUFBQSxVQUF6QnRKLElBQXlCO0FBQ2hDLFVBQU13YixtQkFBbUIsR0FBRztBQUN4QjVjLFFBQUFBLENBQUMsRUFBRW9CLElBQUksQ0FBQ0UsYUFBTCxDQUFtQnRCLENBQW5CLEdBQXVCMGMsY0FBYyxDQUFDMWMsQ0FEakI7QUFFeEJDLFFBQUFBLENBQUMsRUFBRW1CLElBQUksQ0FBQ0UsYUFBTCxDQUFtQnJCLENBQW5CLEdBQXVCeWMsY0FBYyxDQUFDemM7QUFGakIsT0FBNUI7QUFLQW1CLE1BQUFBLElBQUksQ0FBQ3VKLFdBQUwsQ0FDSSxPQURKLEVBRUlpUyxtQkFGSjtBQUlILEtBdEJvQyxDQXdCckM7O0FBeEJxQztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQXlCbEJyVyxNQUFNLENBQUNxRSxnQkF6Qlc7QUFBQTs7QUFBQTtBQXlCckMsMkRBQTRDO0FBQUEsVUFBakN4SixLQUFpQztBQUN4QyxVQUFNd2Isb0JBQW1CLEdBQUc7QUFDeEI1YyxRQUFBQSxDQUFDLEVBQUVvQixLQUFJLENBQUNHLFdBQUwsQ0FBaUJ2QixDQUFqQixHQUFxQjBjLGNBQWMsQ0FBQzFjLENBRGY7QUFFeEJDLFFBQUFBLENBQUMsRUFBRW1CLEtBQUksQ0FBQ0csV0FBTCxDQUFpQnRCLENBQWpCLEdBQXFCeWMsY0FBYyxDQUFDemM7QUFGZixPQUE1Qjs7QUFLQW1CLE1BQUFBLEtBQUksQ0FBQ3VKLFdBQUwsQ0FDSSxLQURKLEVBRUlpUyxvQkFGSjtBQUlIO0FBbkNvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0N4QztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNQLGNBQVQsQ0FBd0I5VixNQUF4QixFQUFnQzJILE1BQWhDLEVBQXdDO0FBQ3BDO0FBQ0EzSCxFQUFBQSxNQUFNLENBQUNJLFdBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVMyVixZQUFULENBQXNCL1YsTUFBdEIsRUFBOEIySCxNQUE5QixFQUFzQztBQUNsQyxNQUFRQyxpQkFBUixHQUE4QkQsTUFBOUIsQ0FBUUMsaUJBQVIsQ0FEa0MsQ0FHbEM7O0FBQ0EsTUFBTXdPLGVBQWUsR0FBRztBQUNwQjNjLElBQUFBLENBQUMsRUFBRXVHLE1BQU0sQ0FBQ2hGLFdBQVAsQ0FBbUJ2QixDQUFuQixHQUF1Qm1PLGlCQUFpQixDQUFDbk8sQ0FEeEI7QUFFcEJDLElBQUFBLENBQUMsRUFBRXNHLE1BQU0sQ0FBQ2hGLFdBQVAsQ0FBbUJ0QixDQUFuQixHQUF1QmtPLGlCQUFpQixDQUFDbE87QUFGeEIsR0FBeEI7QUFLQXNHLEVBQUFBLE1BQU0sQ0FBQ29FLFdBQVAsQ0FDSSxLQURKLEVBRUlnUyxlQUZKLEVBVGtDLENBY2xDOztBQUNBLE1BQUksQ0FBQyxDQUFDek8sTUFBTSxDQUFDLGlCQUFELENBQVosRUFBaUM7QUFDN0JBLElBQUFBLE1BQU0sQ0FBQyxpQkFBRCxDQUFOLENBQTBCNUMsZUFBMUIsQ0FBMEMvRSxNQUExQztBQUNIO0FBQ0o7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU2dXLGVBQVQsQ0FBeUJoVyxNQUF6QixFQUFpQztBQUM3QkEsRUFBQUEsTUFBTSxDQUFDYixVQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7OztBQUNBLFNBQVM4VyxTQUFULENBQW1CalcsTUFBbkIsRUFBMkI7QUFBQSw4Q0FDTkEsTUFETTtBQUFBOztBQUFBO0FBQ3ZCLDJEQUF5QjtBQUFBLFVBQWhCMUgsSUFBZ0I7O0FBQ3JCO0FBQ0EsVUFBSUEsSUFBSSxZQUFZcUYscUVBQXBCLEVBQTZCO0FBQ3pCckYsUUFBQUEsSUFBSSxDQUFDOEgsV0FBTDtBQUNIO0FBQ0o7QUFOc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU8xQjtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTOFYsaUJBQVQsQ0FBMkJsVyxNQUEzQixFQUFtQztBQUMvQkEsRUFBQUEsTUFBTSxDQUFDSSxXQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SkQ7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTa1csY0FBVCxDQUF3QlYsSUFBeEIsRUFBOEI7QUFDakMsTUFDSTVWLE1BREosR0FJSTRWLElBSkosQ0FDSTVWLE1BREo7QUFBQSxNQUVJMkgsTUFGSixHQUlJaU8sSUFKSixDQUVJak8sTUFGSjtBQUFBLE1BR0lGLFNBSEosR0FJSW1PLElBSkosQ0FHSW5PLFNBSEo7O0FBTUEsVUFBT0EsU0FBUDtBQUNJLFNBQU1yQyxrRUFBTjtBQUNJbVIsTUFBQUEsZUFBZSxDQUFDdlcsTUFBRCxFQUFTMkgsTUFBVCxDQUFmO0FBQ0E7O0FBQ0osU0FBTXZDLHdFQUFOO0FBQ0lvUixNQUFBQSxjQUFjLENBQUN4VyxNQUFELEVBQVMySCxNQUFULENBQWQ7QUFDQTs7QUFDSixTQUFNdkMsK0RBQU47QUFDSXFSLE1BQUFBLFlBQVksQ0FBQ3pXLE1BQUQsRUFBUzJILE1BQVQsQ0FBWjtBQUNBOztBQUNKLFNBQU12QyxnRUFBTjtBQUNJc1IsTUFBQUEsZUFBZSxDQUFDMVcsTUFBRCxDQUFmO0FBQ0E7O0FBQ0osU0FBTW9GLDREQUFOO0FBQ0l1UixNQUFBQSxTQUFTLENBQUMzVyxNQUFELENBQVQ7QUFDQTs7QUFDSixTQUFNb0Ysb0VBQU47QUFDSXdSLE1BQUFBLGlCQUFpQixDQUFDNVcsTUFBRCxDQUFqQjtBQUNBOztBQUNKO0FBQ0k7QUFwQlIsR0FQaUMsQ0E4QmpDOzs7QUFDQXZDLEVBQUFBLCtEQUFBLENBQ0lELCtFQURKO0FBR0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVMrWSxlQUFULENBQXlCdlcsTUFBekIsRUFBaUMySCxNQUFqQyxFQUF5QztBQUNyQyw4QkFBaUIzSCxNQUFNLENBQUM3RixpQkFBeEI7QUFBQSxNQUFRVixDQUFSLHlCQUFRQSxDQUFSO0FBQUEsTUFBV0MsQ0FBWCx5QkFBV0EsQ0FBWDtBQUNBLE1BQVF5YyxjQUFSLEdBQTJCeE8sTUFBM0IsQ0FBUXdPLGNBQVI7QUFDQSxNQUFNQyxlQUFlLEdBQUc7QUFDcEIzYyxJQUFBQSxDQUFDLEVBQUVBLENBQUMsR0FBRzBjLGNBQWMsQ0FBQzFjLENBREY7QUFFcEJDLElBQUFBLENBQUMsRUFBRUEsQ0FBQyxHQUFHeWMsY0FBYyxDQUFDemM7QUFGRixHQUF4QixDQUhxQyxDQVFyQzs7QUFDQXNHLEVBQUFBLE1BQU0sQ0FBQ2tFLHVCQUFQLENBQStCa1MsZUFBL0IsRUFUcUMsQ0FXckM7O0FBWHFDLDZDQVlsQnBXLE1BQU0sQ0FBQ21FLFFBWlc7QUFBQTs7QUFBQTtBQVlyQyx3REFBb0M7QUFBQSxVQUF6QnRKLElBQXlCO0FBQ2hDLFVBQU13YixtQkFBbUIsR0FBRztBQUN4QjVjLFFBQUFBLENBQUMsRUFBRW9CLElBQUksQ0FBQ0UsYUFBTCxDQUFtQnRCLENBQW5CLEdBQXVCMGMsY0FBYyxDQUFDMWMsQ0FEakI7QUFFeEJDLFFBQUFBLENBQUMsRUFBRW1CLElBQUksQ0FBQ0UsYUFBTCxDQUFtQnJCLENBQW5CLEdBQXVCeWMsY0FBYyxDQUFDemM7QUFGakIsT0FBNUI7QUFLQW1CLE1BQUFBLElBQUksQ0FBQ3VKLFdBQUwsQ0FDSSxPQURKLEVBRUlpUyxtQkFGSjtBQUlILEtBdEJvQyxDQXdCckM7O0FBeEJxQztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQXlCbEJyVyxNQUFNLENBQUNxRSxnQkF6Qlc7QUFBQTs7QUFBQTtBQXlCckMsMkRBQTRDO0FBQUEsVUFBakN4SixLQUFpQztBQUN4QyxVQUFNd2Isb0JBQW1CLEdBQUc7QUFDeEI1YyxRQUFBQSxDQUFDLEVBQUVvQixLQUFJLENBQUNHLFdBQUwsQ0FBaUJ2QixDQUFqQixHQUFxQjBjLGNBQWMsQ0FBQzFjLENBRGY7QUFFeEJDLFFBQUFBLENBQUMsRUFBRW1CLEtBQUksQ0FBQ0csV0FBTCxDQUFpQnRCLENBQWpCLEdBQXFCeWMsY0FBYyxDQUFDemM7QUFGZixPQUE1Qjs7QUFLQW1CLE1BQUFBLEtBQUksQ0FBQ3VKLFdBQUwsQ0FDSSxLQURKLEVBRUlpUyxvQkFGSjtBQUlIO0FBbkNvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0N4QztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNHLGNBQVQsQ0FBd0J4VyxNQUF4QixFQUFnQzJILE1BQWhDLEVBQXdDO0FBQ3BDO0FBQ0EzSCxFQUFBQSxNQUFNLENBQUNiLFVBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNzWCxZQUFULENBQXNCelcsTUFBdEIsRUFBOEIySCxNQUE5QixFQUFzQztBQUNsQyxNQUFRQyxpQkFBUixHQUE4QkQsTUFBOUIsQ0FBUUMsaUJBQVIsQ0FEa0MsQ0FHbEM7O0FBQ0EsTUFBTXdPLGVBQWUsR0FBRztBQUNwQjNjLElBQUFBLENBQUMsRUFBRXVHLE1BQU0sQ0FBQ2hGLFdBQVAsQ0FBbUJ2QixDQUFuQixHQUF1Qm1PLGlCQUFpQixDQUFDbk8sQ0FEeEI7QUFFcEJDLElBQUFBLENBQUMsRUFBRXNHLE1BQU0sQ0FBQ2hGLFdBQVAsQ0FBbUJ0QixDQUFuQixHQUF1QmtPLGlCQUFpQixDQUFDbE87QUFGeEIsR0FBeEI7QUFLQXNHLEVBQUFBLE1BQU0sQ0FBQ29FLFdBQVAsQ0FDSSxLQURKLEVBRUlnUyxlQUZKLEVBVGtDLENBY2xDOztBQUNBLE1BQUksQ0FBQyxDQUFDek8sTUFBTSxDQUFDLGlCQUFELENBQVosRUFBaUM7QUFDN0JBLElBQUFBLE1BQU0sQ0FBQyxpQkFBRCxDQUFOLENBQTBCbEQsa0JBQTFCLENBQTZDekUsTUFBN0M7QUFDSDtBQUNKO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVMwVyxlQUFULENBQXlCMVcsTUFBekIsRUFBaUM7QUFDN0JBLEVBQUFBLE1BQU0sQ0FBQ0ksV0FBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVN1VyxTQUFULENBQW1CM1csTUFBbkIsRUFBMkI7QUFBQSw4Q0FDUEEsTUFETztBQUFBOztBQUFBO0FBQ3ZCLDJEQUF3QjtBQUFBLFVBQWhCMUgsSUFBZ0I7O0FBQ3BCO0FBQ0EsVUFBSUEsSUFBSSxZQUFZcUYscUVBQXBCLEVBQTZCO0FBQ3pCckYsUUFBQUEsSUFBSSxDQUFDNkcsVUFBTDtBQUNIO0FBQ0o7QUFOc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU8xQjtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTeVgsaUJBQVQsQ0FBMkI1VyxNQUEzQixFQUFtQztBQUMvQkEsRUFBQUEsTUFBTSxDQUFDYixVQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SkQ7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNekIsYUFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDSTtBQUNKO0FBQ0E7QUFDSSxxQ0FBK0JtWixrQkFBL0IsRUFBbUQ7QUFDL0MsYUFBTyxVQUFTalQsZUFBVCxFQUEwQmtULFlBQTFCLEVBQXdDO0FBQzNDO0FBQ0EsWUFBTUMsY0FBYyxHQUFHblQsZUFBZSxDQUFDLENBQUQsQ0FBdEMsQ0FGMkMsQ0FJM0M7O0FBQ0EsWUFBTXVTLGNBQWMsR0FBRztBQUNuQjFjLFVBQUFBLENBQUMsRUFBRXNkLGNBQWMsQ0FBQzVjLGlCQUFmLENBQWlDVixDQUFqQyxHQUFxQ3FkLFlBQVksQ0FBQ3JkLENBRGxDO0FBRW5CQyxVQUFBQSxDQUFDLEVBQUVxZCxjQUFjLENBQUM1YyxpQkFBZixDQUFpQ1QsQ0FBakMsR0FBcUNvZCxZQUFZLENBQUNwZDtBQUZsQyxTQUF2Qjs7QUFLQSxZQUFJeWMsY0FBYyxDQUFDMWMsQ0FBZixLQUFxQixDQUFyQixJQUEwQjBjLGNBQWMsQ0FBQ3pjLENBQWYsS0FBcUIsQ0FBbkQsRUFBc0Q7QUFDbEQ7QUFDQStELFVBQUFBLCtEQUFBLENBQXNCNEMsb0ZBQXRCLEVBQXFEO0FBQ2pETCxZQUFBQSxNQUFNLEVBQUUrVyxjQUR5QztBQUVqRHRQLFlBQUFBLFNBQVMsRUFBRXJDLGtFQUZzQztBQUdqRHVDLFlBQUFBLE1BQU0sRUFBRTtBQUNKd08sY0FBQUEsY0FBYyxFQUFkQTtBQURJO0FBSHlDLFdBQXJEO0FBT0gsU0FuQjBDLENBcUIzQzs7O0FBQ0FVLFFBQUFBLGtCQUFrQixDQUFDalQsZUFBRCxDQUFsQjtBQUNILE9BdkJEO0FBd0JIO0FBRUQ7QUFDSjtBQUNBOztBQWpDQTtBQUFBO0FBQUEsV0FrQ0ksZ0NBQThCaVQsa0JBQTlCLEVBQWtEO0FBQzlDLGFBQU8sVUFBU2pTLGdCQUFULEVBQTJCL0osSUFBM0IsRUFBaUNnSyxhQUFqQyxFQUFnRDtBQUNuRDtBQUNBcEgsUUFBQUEsK0RBQUEsQ0FBc0I0QyxvRkFBdEIsRUFBcUQ7QUFDakRMLFVBQUFBLE1BQU0sRUFBRW5GLElBRHlDO0FBRWpENE0sVUFBQUEsU0FBUyxFQUFFckMsd0VBRnNDO0FBR2pEdUMsVUFBQUEsTUFBTSxFQUFFO0FBQ0ozQyxZQUFBQSxZQUFZLEVBQUVKLGdCQUFnQixDQUFDLENBQUQ7QUFEMUI7QUFIeUMsU0FBckQsRUFGbUQsQ0FVbkQ7O0FBQ0FpUyxRQUFBQSxrQkFBa0IsQ0FBQ2pTLGdCQUFELEVBQW1CL0osSUFBbkIsRUFBeUJnSyxhQUF6QixDQUFsQjtBQUNILE9BWkQ7QUFhSDtBQUVEO0FBQ0o7QUFDQTs7QUFwREE7QUFBQTtBQUFBLFdBcURJLDhCQUE0QmdTLGtCQUE1QixFQUFnRDtBQUM1QyxhQUFPLFVBQVNoYyxJQUFULEVBQWVnSyxhQUFmLEVBQThCbVMsZ0JBQTlCLEVBQWdEO0FBQ25ELFlBQ0luYSxlQURKLEdBR0lnSSxhQUhKLENBQ0loSSxlQURKO0FBQUEsWUFFSUMsY0FGSixHQUdJK0gsYUFISixDQUVJL0gsY0FGSixDQURtRCxDQU1uRDs7QUFDQVcsUUFBQUEsK0RBQUEsQ0FBc0I0QyxvRkFBdEIsRUFBcUQ7QUFDakRMLFVBQUFBLE1BQU0sRUFBRW5GLElBRHlDO0FBRWpENE0sVUFBQUEsU0FBUyxFQUFFckMsK0RBRnNDO0FBR2pEdUMsVUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFlBQUFBLGlCQUFpQixFQUFFO0FBQ2ZuTyxjQUFBQSxDQUFDLEVBQUVvRCxlQUFlLENBQUNwRCxDQUFoQixHQUFvQnVkLGdCQUFnQixDQUFDdmQsQ0FEekI7QUFFZkMsY0FBQUEsQ0FBQyxFQUFFbUQsZUFBZSxDQUFDbkQsQ0FBaEIsR0FBb0JzZCxnQkFBZ0IsQ0FBQ3RkO0FBRnpCLGFBRGY7QUFLSnVkLFlBQUFBLGVBQWUsRUFBRW5hO0FBTGI7QUFIeUMsU0FBckQsRUFQbUQsQ0FtQm5EOztBQUNBK1osUUFBQUEsa0JBQWtCLENBQUNoYyxJQUFELEVBQU9nSyxhQUFQLENBQWxCO0FBQ0gsT0FyQkQ7QUFzQkg7QUFFRDtBQUNKO0FBQ0E7O0FBaEZBO0FBQUE7QUFBQSxXQWlGSSw4QkFBNEJnUyxrQkFBNUIsRUFBZ0Q7QUFDNUMsYUFBTyxVQUFTM1gsV0FBVCxFQUFzQjtBQUN6QjtBQUNBekIsUUFBQUEsK0RBQUEsQ0FBc0I0QyxvRkFBdEIsRUFBcUQ7QUFDakRMLFVBQUFBLE1BQU0sRUFBRWQsV0FEeUM7QUFFakR1SSxVQUFBQSxTQUFTLEVBQUVyQyxnRUFGc0M7QUFHakR1QyxVQUFBQSxNQUFNLEVBQUU7QUFIeUMsU0FBckQsRUFGeUIsQ0FRekI7O0FBQ0FrUCxRQUFBQSxrQkFBa0IsQ0FBQzNYLFdBQUQsQ0FBbEI7QUFDSCxPQVZEO0FBV0g7QUFFRDtBQUNKO0FBQ0E7O0FBakdBO0FBQUE7QUFBQSxXQWtHSSx3QkFBc0IyWCxrQkFBdEIsRUFBMEM7QUFDdEMsYUFBTyxZQUFXO0FBQ2Q7QUFDQSxZQUFNSyxXQUFXLEdBQUdqZixtRkFBcEIsQ0FGYyxDQUlkOztBQUNBd0YsUUFBQUEsK0RBQUEsQ0FBc0I0QyxvRkFBdEIsRUFBcUQ7QUFDakRMLFVBQUFBLE1BQU0sRUFBRWtYLFdBRHlDO0FBRWpEelAsVUFBQUEsU0FBUyxFQUFFckMsNERBRnNDO0FBR2pEdUMsVUFBQUEsTUFBTSxFQUFFO0FBSHlDLFNBQXJELEVBTGMsQ0FXZDs7QUFDQWtQLFFBQUFBLGtCQUFrQixDQUFDSyxXQUFELENBQWxCO0FBQ0gsT0FiRDtBQWNIO0FBRUQ7QUFDSjtBQUNBOztBQXJIQTtBQUFBO0FBQUEsV0FzSEksZ0NBQThCTCxrQkFBOUIsRUFBa0Q7QUFDOUMsYUFBTyxVQUFTcmMsSUFBVCxFQUFld08sUUFBZixFQUF5QjtBQUM1QjtBQUNBLFlBQU1pRCxVQUFVLEdBQUc0SyxrQkFBa0IsQ0FBQ3JjLElBQUQsRUFBT3dPLFFBQVAsQ0FBckMsQ0FGNEIsQ0FJNUI7O0FBQ0F2TCxRQUFBQSwrREFBQSxDQUFzQjRDLG9GQUF0QixFQUFxRDtBQUNqREwsVUFBQUEsTUFBTSxFQUFFaU0sVUFEeUM7QUFFakR4RSxVQUFBQSxTQUFTLEVBQUVyQyxvRUFGc0M7QUFHakR1QyxVQUFBQSxNQUFNLEVBQUU7QUFIeUMsU0FBckQ7QUFLSCxPQVZEO0FBV0g7QUFsSUw7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztJQUVNaUo7QUFTRixzQkFBYztBQUFBOztBQUNWLFFBQUcsQ0FBQ0EsUUFBUSxDQUFDelksUUFBYixFQUF1QjtBQUNuQjtBQUNBLFdBQUtnZixLQUFMLEdBQWEsRUFBYjtBQUNBLFdBQUtwSixPQUFMLEdBQWUsQ0FBQyxDQUFoQjtBQUVBLFdBQUs1VixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsV0FBSzJGLGdCQUFMO0FBQ0E4UyxNQUFBQSxRQUFRLENBQUN6WSxRQUFULEdBQW9CLElBQXBCO0FBQ0g7QUFDSjtBQUVEO0FBQ0o7QUFDQTs7Ozs7V0FDSSw0QkFBbUI7QUFDZixVQUNJeUgsSUFESixHQUlJUyw2RUFKSjtBQUFBLFVBRUltSCxXQUZKLEdBSUluSCxvRkFKSjtBQUFBLFVBR0lSLElBSEosR0FJSVEsNkVBSko7QUFLQTVDLE1BQUFBLGtFQUFBLENBQXlCK0osV0FBekIsRUFBc0MsS0FBSzRQLGtCQUFMLENBQXdCdmQsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBdEM7QUFDQTRELE1BQUFBLGtFQUFBLENBQXlCbUMsSUFBekIsRUFBK0IsS0FBS0EsSUFBTCxDQUFVL0YsSUFBVixDQUFlLElBQWYsQ0FBL0I7QUFDQTRELE1BQUFBLGtFQUFBLENBQXlCb0MsSUFBekIsRUFBK0IsS0FBS0EsSUFBTCxDQUFVaEcsSUFBVixDQUFlLElBQWYsQ0FBL0I7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksNEJBQW1Cd2QsUUFBbkIsRUFBNkI7QUFDekIsV0FBS3RKLE9BQUwsSUFBZ0IsQ0FBaEIsQ0FEeUIsQ0FHekI7O0FBQ0EsVUFBSSxLQUFLQSxPQUFMLEtBQWlCLEtBQUtvSixLQUFMLENBQVduZCxNQUE1QixJQUFzQyxLQUFLK1QsT0FBTCxJQUFnQixDQUExRCxFQUE2RDtBQUN6RCxhQUFLb0osS0FBTCxDQUFXdEwsTUFBWCxDQUFrQixLQUFLa0MsT0FBdkI7QUFDQTVSLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUsrYSxLQUFMLENBQVduZCxNQUF2QjtBQUNIOztBQUVELFdBQUttZCxLQUFMLENBQVc1ZSxJQUFYLENBQWdCOGUsUUFBaEI7QUFDSDtBQUVEO0FBQ0o7QUFDQTs7OztXQUNJLGdCQUFPO0FBQ0gsVUFBSSxLQUFLRixLQUFMLENBQVduZCxNQUFYLEtBQXNCLENBQXRCLElBQTJCLEtBQUsrVCxPQUFMLEtBQWlCLENBQUMsQ0FBakQsRUFBb0Q7QUFDaEQsWUFBTXVKLFFBQVEsR0FBRyxLQUFLSCxLQUFMLENBQVcsS0FBS3BKLE9BQWhCLENBQWpCO0FBQ0F1SSxRQUFBQSxnRUFBYyxDQUFDZ0IsUUFBRCxDQUFkO0FBRUEsYUFBS3ZKLE9BQUwsSUFBZ0IsQ0FBaEI7QUFDSDtBQUNKO0FBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksZ0JBQU87QUFDSCxVQUFJLEtBQUtvSixLQUFMLENBQVduZCxNQUFYLEtBQXNCLENBQXRCLElBQTJCLEtBQUsrVCxPQUFMLEtBQWlCLEtBQUtvSixLQUFMLENBQVduZCxNQUFYLEdBQW9CLENBQXBFLEVBQXVFO0FBQ25FLGFBQUsrVCxPQUFMLElBQWdCLENBQWhCO0FBRUEsWUFBTXdKLFFBQVEsR0FBRyxLQUFLSixLQUFMLENBQVcsS0FBS3BKLE9BQWhCLENBQWpCO0FBRUE1UixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWW1iLFFBQVo7QUFFQTVCLFFBQUFBLGdFQUFjLENBQUM0QixRQUFELENBQWQ7QUFDSDtBQUNKOzs7V0EzRUQsdUJBQXFCO0FBQ2pCLFVBQUcsQ0FBQyxLQUFLcGYsUUFBVCxFQUFtQjtBQUNmLGFBQUtBLFFBQUwsR0FBZ0IsSUFBSXlZLFFBQUosRUFBaEI7QUFDSDs7QUFFRCxhQUFPLEtBQUt6WSxRQUFaO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1pDcWY7QUFRRixtQkFBYztBQUFBOztBQUNWLFFBQUksQ0FBQ0EsS0FBSyxDQUFDcmYsUUFBWCxFQUFxQjtBQUNqQixXQUFLc2YsZUFBTCxHQUF1QixFQUF2QjtBQUNBRCxNQUFBQSxLQUFLLENBQUNyZixRQUFOLEdBQWlCLElBQWpCLENBRmlCLENBSWpCOztBQUNBMEksTUFBQUEsTUFBTSxDQUFDcEQsT0FBUCxHQUFpQixJQUFqQjtBQUNIOztBQUNELFdBQU8rWixLQUFLLENBQUNyZixRQUFiO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7OztXQUNJLDBCQUFpQjZHLFNBQWpCLEVBQTRCMFksUUFBNUIsRUFBc0M7QUFDbEM7QUFDQSxVQUFJLEVBQUUxWSxTQUFTLElBQUksS0FBS3lZLGVBQXBCLENBQUosRUFBMEM7QUFDdEMsYUFBS0EsZUFBTCxDQUFxQnpZLFNBQXJCLElBQWtDLEVBQWxDO0FBQ0gsT0FKaUMsQ0FNbEM7OztBQUNBLFdBQUt5WSxlQUFMLENBQXFCelksU0FBckIsRUFBZ0N6RyxJQUFoQyxDQUFxQ21mLFFBQXJDO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSw2QkFBb0IxWSxTQUFwQixFQUErQjBZLFFBQS9CLEVBQXlDO0FBQ3JDO0FBQ0EsVUFBSSxFQUFFMVksU0FBUyxJQUFJLEtBQUt5WSxlQUFwQixDQUFKLEVBQTBDO0FBQ3RDLGVBQU8sSUFBSXJJLEtBQUosQ0FBVSxzQkFBVixDQUFQO0FBQ0gsT0FKb0MsQ0FNckM7OztBQUNBLFVBQUksQ0FBQyxDQUFDc0ksUUFBTixFQUFnQjtBQUNaLFlBQU1DLGdCQUFnQixHQUFHLEtBQUtGLGVBQUwsQ0FBcUJ6WSxTQUFyQixDQUF6QjtBQUNBLFlBQU00WSxhQUFhLEdBQUdELGdCQUFnQixDQUFDaE0sU0FBakIsQ0FBMkIsVUFBQWtNLHFCQUFxQjtBQUFBLGlCQUNsRUEscUJBQXFCLEtBQUtILFFBRHdDO0FBQUEsU0FBaEQsQ0FBdEIsQ0FGWSxDQU1aOztBQUNBLFlBQUlFLGFBQWEsS0FBSyxDQUFDLENBQW5CLElBQXdCQSxhQUFhLEtBQUszSCxTQUE5QyxFQUF5RDtBQUNyRCxpQkFBTyxJQUFJYixLQUFKLENBQVUsNkJBQVYsQ0FBUDtBQUNILFNBVFcsQ0FXWjs7O0FBQ0F1SSxRQUFBQSxnQkFBZ0IsQ0FBQzlMLE1BQWpCLENBQXdCK0wsYUFBeEIsRUFBdUMsQ0FBdkMsRUFaWSxDQWNaOztBQUNBLFlBQUlELGdCQUFnQixDQUFDM2QsTUFBakIsS0FBNEIsQ0FBaEMsRUFBbUM7QUFDL0IsaUJBQU8sS0FBS3lkLGVBQUwsQ0FBcUJ6WSxTQUFyQixDQUFQO0FBQ0g7QUFDSixPQWxCRCxNQWtCTztBQUNIO0FBQ0EsZUFBTyxLQUFLeVksZUFBTCxDQUFxQnpZLFNBQXJCLENBQVA7QUFDSDtBQUNKO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLHVCQUFjQSxTQUFkLEVBQWtDO0FBQUEsd0NBQU56RCxJQUFNO0FBQU5BLFFBQUFBLElBQU07QUFBQTs7QUFDOUI7QUFDQSxVQUFJLEVBQUV5RCxTQUFTLElBQUksS0FBS3lZLGVBQXBCLENBQUosRUFBMEM7QUFDdEMsZUFBTyxJQUFJckksS0FBSixDQUFVLHNCQUFWLENBQVA7QUFDSCxPQUo2QixDQU05Qjs7O0FBQ0EsV0FBS3FJLGVBQUwsQ0FBcUJ6WSxTQUFyQixFQUFnQ3NSLE9BQWhDLENBQXdDLFVBQUFvSCxRQUFRLEVBQUk7QUFDaERBLFFBQUFBLFFBQVEsTUFBUixTQUFZbmMsSUFBWjtBQUNILE9BRkQ7QUFHSDs7O1dBckZELHVCQUFxQjtBQUNqQixVQUFHLENBQUMsS0FBS3BELFFBQVQsRUFBbUI7QUFDZixhQUFLQSxRQUFMLEdBQWdCLElBQUlxZixLQUFKLEVBQWhCO0FBQ0g7O0FBQ0QsYUFBTyxLQUFLcmYsUUFBWjtBQUNIOzs7Ozs7QUFtRkUsSUFBTXNGLE9BQU8sR0FBRytaLEtBQUssQ0FBQzFMLFdBQU4sRUFBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVMwRCxtQkFBVCxDQUE2QnpELE1BQTdCLEVBQXFDO0FBQ3hDLE1BQU0rTCxrQkFBa0IsR0FBR2hjLElBQUksQ0FBQ2ljLE1BQUwsRUFBM0I7QUFDQSxTQUFPRCxrQkFBa0IsSUFBSS9MLE1BQTdCO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNyVCxhQUFULENBQXVCc2YsaUJBQXZCLEVBQTBDQyxlQUExQyxFQUEyRHhlLENBQTNELEVBQThEQyxDQUE5RCxFQUFpRTtBQUNwRSxNQUNJdWUsZUFBZSxDQUFDeGUsQ0FBaEIsR0FBb0J1ZSxpQkFBaUIsQ0FBQ3ZlLENBQXRDLEtBRUlBLENBQUMsR0FBR3dlLGVBQWUsQ0FBQ3hlLENBQXBCLElBQ0dBLENBQUMsR0FBR3VlLGlCQUFpQixDQUFDdmUsQ0FIN0IsQ0FESixFQU1FO0FBQ0UsV0FBTyxLQUFQO0FBQ0g7O0FBRUQsTUFDSXdlLGVBQWUsQ0FBQ3hlLENBQWhCLEdBQW9CdWUsaUJBQWlCLENBQUN2ZSxDQUF0QyxLQUVJQSxDQUFDLEdBQUd3ZSxlQUFlLENBQUN4ZSxDQUFwQixJQUNHQSxDQUFDLEdBQUd1ZSxpQkFBaUIsQ0FBQ3ZlLENBSDdCLENBREosRUFNRTtBQUNFLFdBQU8sS0FBUDtBQUNILEdBbkJtRSxDQXNCcEU7OztBQUNBLE1BQU15ZSxLQUFLLEdBQUcsQ0FBQ0QsZUFBZSxDQUFDdmUsQ0FBaEIsR0FBb0JzZSxpQkFBaUIsQ0FBQ3RlLENBQXZDLEtBQ2J1ZSxlQUFlLENBQUN4ZSxDQUFoQixHQUFvQnVlLGlCQUFpQixDQUFDdmUsQ0FEekIsQ0FBZCxDQXZCb0UsQ0EwQnBFOztBQUNBLE1BQU1rYSxLQUFLLEdBQUc3WCxJQUFJLENBQUNxYyxJQUFMLENBQVVELEtBQVYsQ0FBZDtBQUNBLE1BQU1FLE9BQU8sR0FBRyxLQUFLLEdBQUwsWUFBVyxDQUFYLEVBQWMsR0FBZCxJQUFvQnRjLElBQUksQ0FBQ3VjLEdBQUwsQ0FBU3ZjLElBQUksQ0FBQ2tZLEdBQUwsQ0FBU0wsS0FBVCxDQUFULENBQXBDOztBQUNBLE1BQ0lzRSxlQUFlLENBQUN4ZSxDQUFoQixHQUFvQnVlLGlCQUFpQixDQUFDdmUsQ0FBdEMsSUFDR0EsQ0FBQyxHQUFHd2UsZUFBZSxDQUFDeGUsQ0FBaEIsR0FBb0IyZSxPQUYvQixFQUdFO0FBQ0UsV0FBTyxLQUFQO0FBQ0g7O0FBRUQsTUFDSUgsZUFBZSxDQUFDeGUsQ0FBaEIsR0FBb0J1ZSxpQkFBaUIsQ0FBQ3ZlLENBQXRDLElBQ0dBLENBQUMsR0FBR3dlLGVBQWUsQ0FBQ3hlLENBQWhCLEdBQW9CMmUsT0FGL0IsRUFHRTtBQUNFLFdBQU8sS0FBUDtBQUNIOztBQUdELE1BQU1FLFNBQVMsR0FBR04saUJBQWlCLENBQUN0ZSxDQUFsQixHQUFzQndlLEtBQUssR0FBR0YsaUJBQWlCLENBQUN2ZSxDQUFsRSxDQTVDb0UsQ0E4Q3BFOztBQUNBLE1BQU1vQyxRQUFRLEdBQUdDLElBQUksQ0FBQ3VjLEdBQUwsQ0FBU0MsU0FBUyxHQUFHSixLQUFLLEdBQUd6ZSxDQUFwQixHQUF3QkMsQ0FBakMsSUFBc0NvQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxhQUFJbWMsS0FBSixFQUFXLENBQVgsQ0FBVixDQUF2RDtBQUVBLFNBQU9yYyxRQUFRLElBQUksQ0FBbkI7QUFDSDs7Ozs7Ozs7Ozs7QUNwRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixxQkFBTSxnQkFBZ0IscUJBQU0sSUFBSSxxQkFBTSxzQkFBc0IscUJBQU07O0FBRTFGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixLQUEwQjs7QUFFNUM7QUFDQSxnQ0FBZ0MsUUFBYTs7QUFFN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLEdBQUc7QUFDZCxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxVQUFVO0FBQ3JCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsVUFBVTtBQUNyQixXQUFXLEdBQUc7QUFDZCxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsVUFBVTtBQUNyQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxVQUFVO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxHQUFHO0FBQ2QsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLEdBQUc7QUFDZCxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxHQUFHO0FBQ2QsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsVUFBVTtBQUNyQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsVUFBVTtBQUNyQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFVBQVU7QUFDckIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUSxVQUFVO0FBQzdCLFdBQVcsVUFBVTtBQUNyQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVEsVUFBVTtBQUM3QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsVUFBVTtBQUNyQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRLElBQUksUUFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUJBQW1CO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O1VDbnREQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Q0NGQTs7QUFDQSxJQUFJMGMsUUFBUSxHQUFHMUgsdUVBQUEsRUFBZixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29weS1wYXN0ZS9jb3B5LXBhc3RlLWhvdXNlLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL2FjdGlvbi11dGlscy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9jb25maWcuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIva2V5Ym9hcmQva2V5Ym9hcmQtYWN0aW9uLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIva2V5Ym9hcmQva2V5Ym9hcmQtYWN0aW9uLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL21vdXNlL2RlZXBDbG9uZS5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9tb3VzZS9tb3VzZS1hY3Rpb24tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9tb3VzZS9tb3VzZS1hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvcGFuZWwvcGFuZWwtb3BlcmF0aW9uLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvd2FraW5nLXByb2Nlc3Mvd2FraW5nLXByb2Nlc3MtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvY29uZmlnLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvZGF0YS1sYXllci9lZGdlL2VkZ2UtcG9vbC5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXBvb2wuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci10ZXh0LmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS92aWV3LWxheWVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL3ZpZXctbGF5ZXIvcGFpbnRlci9maWd1cmUvY29uZmlnLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvdmlldy1sYXllci9wYWludGVyL2ZpZ3VyZS9wYWludGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvdmlldy1sYXllci9wYWludGVyL3BhaW50ZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS92aWV3LWxheWVyL3BhaW50ZXIvdGV4dC9wYWludGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9nbG9iYWwvZ2xvYmFsLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy91bmRvLXJlZG8vb3BlcmF0aW9uLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3VuZG8tcmVkby9yZWRvLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdW5kby1yZWRvL3VuZG8tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy91bmRvLXJlZG8vdW5kby1kZWNvcmF0b3IuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdW5kby1yZWRvL3VuZG8tcmVkby5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy91dGlscy9ldmVudC5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy91dGlscy9tYXRoLXV0aWxzLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5jbG9uZWRlZXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvZW50cnkvdGVzdEVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbG9uZURlZXAgZnJvbSBcImxvZGFzaC5jbG9uZWRlZXBcIjtcblxuY2xhc3MgQ29weVBhc3RlSG91c2Uge1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ29weVBhc3RlSG91c2UoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaG91c2UgPSBbXTtcbiAgICAgICAgQ29weVBhc3RlSG91c2UuaW5zdGFuY2UgPSB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXQgcGFja2FnZShvYmopIHtcbiAgICAgICAgdGhpcy5ob3VzZSA9IFtdO1xuXG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBvYmopIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXNlLnB1c2goY2xvbmVEZWVwKGl0ZW0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaG91c2UucHVzaChjbG9uZURlZXAob2JqKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IHBhY2thZ2UoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZURlZXAodGhpcy5ob3VzZSk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDb3B5UGFzdGVIb3VzZSB9OyIsImltcG9ydCB7IFNsZWVwZXJQb29sZXIgfSBmcm9tICcuLi9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci1wb29sJztcbmltcG9ydCB7IEVkZ2VQb29sZXIgfSBmcm9tICcuLi9kYXRhLWxheWVyL2VkZ2UvZWRnZS1wb29sJztcbmltcG9ydCB7IGlzUG9pbnRJbkxpbmUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRoLXV0aWxzJztcbmltcG9ydCB7IE1pbmltYWxEaXN0YW5jZUZvckxvY2F0ZSB9IGZyb20gJy4vY29uZmlnJztcblxuY2xhc3MgQWN0aW9uVXRpbHMge1xuICAgIC8qKlxuICAgICAqIEZpbmQgbW91c2UgbG9jYXRlZCBvYmplY3RcbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhcyBcbiAgICAgKiBAcGFyYW0geyp9IGxvY2F0aW9uIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kTG9jYXRlZE9iamVjdChjYW52YXMsIGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZpbmRGdW5jdGlvbnNMaXN0ID0gW1xuICAgICAgICAgICAgQWN0aW9uVXRpbHMuZmluZExvY2F0ZWRMaW5lT3JIZWFkLFxuICAgICAgICAgICAgQWN0aW9uVXRpbHMuZmluZExvY2F0ZWRBbmNob3IsXG4gICAgICAgICAgICBBY3Rpb25VdGlscy5maW5kTG9jYXRlZFNsZWVwZXIsXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yIChjb25zdCBmaW5kRnVuY3Rpb24gb2YgZmluZEZ1bmN0aW9uc0xpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbmRSZXN1bHQgPSBmaW5kRnVuY3Rpb24oY2FudmFzLCBsb2NhdGlvbik7XG4gICAgICAgICAgICBpZiAoISFmaW5kUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmRSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIHNsZWVwZXIgd2hpY2ggYXQgdGhlIG1vdXNlIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIHsqfSBjYW52YXMgQ2FudmFzIE9iamVjdCBcbiAgICAgKiBAcGFyYW0geyp9IGxvY2F0aW9uIE1vdXNlIGxvY2F0aW9uXG4gICAgICogQHJldHVybnMge1NsZWVwZXIgfCBudWxsfVxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kTG9jYXRlZFNsZWVwZXIoY2FudmFzLCBsb2NhdGlvbikge1xuICAgICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgLy8gSW5uZXIgZnVuY3Rpb24gdG8gY2hlY2sgaWYgbG9jYXRpb24gaW4gY2lyY2xlXG4gICAgICAgIGNvbnN0IGlzTG9jYXRlZEluQ2lyY2xlID0gKGNpcmNsZVBhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHt4LCB5fSA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIGNhbnZhc0NvbnRleHQuaXNQb2ludEluUGF0aChjaXJjbGVQYXRoLCB4LCB5KVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEhhbmRsZXIgY2hlY2tpbmcgZnVuY3Rpb25zJyBtYXBzIFxuICAgICAgICBjb25zdCBsb2NhdGlvbkhhbmRsZXJNYXBzID0ge1xuICAgICAgICAgICAgJ2NpcmNsZSc6IGlzTG9jYXRlZEluQ2lyY2xlLmJpbmQodGhpcyksXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJdGVyYXRlIHBvb2wgdG8gZmluZCBsb2NhdGVkIHBhdGhcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBTbGVlcGVyUG9vbGVyLnBvb2wubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICAgICAgY29uc3Qgc2xlZXBlciA9IFNsZWVwZXJQb29sZXIucG9vbFtpbmRleF07XG4gICAgICAgICAgICBjb25zdCBzbGVlcGVyU3R5bGUgPSBzbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uO1xuICAgICAgICAgICAgY29uc3Qgc2xlZXBlckNhbnZhc1BhdGggPSBzbGVlcGVyLmNhbnZhc1BhdGg7XG4gICAgICAgICAgICBjb25zdCB7IGRyYXdUeXBlIH0gPSBzbGVlcGVyU3R5bGU7XG4gICAgICAgICAgICBpZiAobG9jYXRpb25IYW5kbGVyTWFwc1tkcmF3VHlwZV0oc2xlZXBlckNhbnZhc1BhdGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBzbGVlcGVyLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2xlZXBlcicsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIGFuY2hvciB3aGljaCBhdCB0aGUgbW91c2UgbG9jYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhcyBDYW52YXMgT2JqZWN0IFxuICAgICAqIEBwYXJhbSB7Kn0gbG9jYXRpb24gTW91c2UgbG9jYXRpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZExvY2F0ZWRBbmNob3IoY2FudmFzLCBsb2NhdGlvbikge1xuICAgICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IHt4LCB5fSA9IGxvY2F0aW9uO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gU2xlZXBlclBvb2xlci5wb29sLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHNsZWVwZXIgPSBTbGVlcGVyUG9vbGVyLnBvb2xbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHNsZWVwZXIuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNsZWVwZXJBbmNob3Igb2Ygc2xlZXBlci5jYW52YXNBbmNob3JzUGF0aExpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBhbmNob3JQYXRoIH0gPSBzbGVlcGVyQW5jaG9yO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FudmFzQ29udGV4dC5pc1BvaW50SW5QYXRoKGFuY2hvclBhdGgsIHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogW3NsZWVwZXIsIHNsZWVwZXJBbmNob3JdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhbmNob3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIGVkZ2Ugd2hpY2ggYXQgdGhlIG1vdXNlIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIHsqfSBjYW52YXMgXG4gICAgICogQHBhcmFtIHsqfSBsb2NhdGlvbiBcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZExvY2F0ZWRMaW5lT3JIZWFkKGNhbnZhcywgbG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCB7eCwgeX0gPSBsb2NhdGlvbjtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBFZGdlUG9vbGVyLnBvb2wubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICAgICAgY29uc3QgZWRnZSA9IEVkZ2VQb29sZXIucG9vbFtpbmRleF07XG4gICAgICAgICAgICBjb25zdCB7IGhlYWQgfSA9IGVkZ2UuY2FudmFzUGF0aDtcbiAgICAgICAgICAgIGlmIChpc1BvaW50SW5MaW5lKGVkZ2Uuc3RhcnRMb2NhdGlvbiwgZWRnZS5lbmRMb2NhdGlvbiwgeCwgeSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGVkZ2UsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbnZhc0NvbnRleHQuaXNQb2ludEluUGF0aChoZWFkLCB4LCB5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogZWRnZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hlYWQnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgc2xlZXBlciB3aG8gaXMgaW4gZHJhZ2dpbmcgc3RhdHVzXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIGZpbmREcmFnZ2VkU2xlZXBlcigpIHtcbiAgICAgICAgY29uc3QgZHJhZ2dlZFNsZWVwZXJMaXN0ID0gW107XG4gICAgICAgIGZvciAobGV0IHNsZWVwZXIgb2YgU2xlZXBlclBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBpZiAoc2xlZXBlci5pc0RyYWcpIHtcbiAgICAgICAgICAgICAgICBkcmFnZ2VkU2xlZXBlckxpc3QucHVzaChzbGVlcGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZHJhZ2dlZFNsZWVwZXJMaXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRocm90dGxlciBtYWtlciBmb3IgbGlzdGVuZXIgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gd2FpdFRpbWUgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIHRocm90dGxlck1ha2VyKGZuLCB3YWl0VGltZSkge1xuICAgICAgICBsZXQgdGltZXIgPSBudWxsO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICBpZighdGltZXIpIHtcbiAgICAgICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9LCB3YWl0VGltZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIGNsb3Nlc3Qgc2xlZXBlciBnaXZlbiBsb2NhdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gbG9jYXRpb24gXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRDbG9zZXN0U2xlZXBlcihsb2NhdGlvbikge1xuICAgICAgICBjb25zdCB7eCwgeX0gPSBsb2NhdGlvbjtcbiAgICAgICAgZm9yKGNvbnN0IHNsZWVwZXIgb2YgU2xlZXBlclBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBjb25zdCBzbGVlcGVyWCA9IHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueDtcbiAgICAgICAgICAgIGNvbnN0IHNsZWVwZXJZID0gc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi55O1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHNsZWVwZXJYIC0geCkqKjIgKyAoc2xlZXBlclkgLXkpKioyKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ucmFkaXVzICsgTWluaW1hbERpc3RhbmNlRm9yTG9jYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNsZWVwZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBjbG9zZXN0IGFuY2hvciBnaXZlbiBsb2NhdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gbG9jYXRpb24gXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRDbG9zZXN0QW5jaG9yKGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGxvY2F0ZWRTbGVlcGVyID0gdGhpcy5maW5kQ2xvc2VzdFNsZWVwZXIobG9jYXRpb24pO1xuICAgICAgICBpZiAoIWxvY2F0ZWRTbGVlcGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbG9lc3QgU2xlZXBlcicsIGxvY2F0ZWRTbGVlcGVyKTtcblxuICAgICAgICBjb25zdCBsb2NhdGVkU2xlZXBlclggPSBsb2NhdGVkU2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi54O1xuICAgICAgICBjb25zdCBsb2NhdGVkU2xlZXBlclkgPSBsb2NhdGVkU2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi55O1xuICAgICAgICBjb25zdCByYWRpdXMgPSBsb2NhdGVkU2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi5yYWRpdXM7XG4gICAgICAgIGNvbnN0IGFuY2hvckxvY2F0aW9uTGlzdCA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiBsb2NhdGVkU2xlZXBlclggLSByYWRpdXMsXG4gICAgICAgICAgICAgICAgeTogbG9jYXRlZFNsZWVwZXJZLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiBsb2NhdGVkU2xlZXBlclggKyByYWRpdXMsXG4gICAgICAgICAgICAgICAgeTogbG9jYXRlZFNsZWVwZXJZLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiBsb2NhdGVkU2xlZXBlclgsXG4gICAgICAgICAgICAgICAgeTogbG9jYXRlZFNsZWVwZXJZIC0gcmFkaXVzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiBsb2NhdGVkU2xlZXBlclgsXG4gICAgICAgICAgICAgICAgeTogbG9jYXRlZFNsZWVwZXJZICsgcmFkaXVzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgbWluRGlzdGFuY2UgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICAgICAgbGV0IG1pbkxvY2F0aW9uID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBhbmNob3JMb2NhdGlvbiBvZiBhbmNob3JMb2NhdGlvbkxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHt4LCB5fSA9IGFuY2hvckxvY2F0aW9uO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAobG9jYXRpb24ueCAtIHgpKioyICsgKGxvY2F0aW9uLnkgLSB5KSoqMjtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IG1pbkRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgbWluTG9jYXRpb24gPSBhbmNob3JMb2NhdGlvbjtcbiAgICAgICAgICAgICAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsb3Nlc3RMb2NhdGlvbjogbWluTG9jYXRpb24sXG4gICAgICAgICAgICBjbG9zZXN0U2xlZXBlcjogbG9jYXRlZFNsZWVwZXIsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5leHBvcnQgeyBBY3Rpb25VdGlscyB9OyIsImV4cG9ydCBjb25zdCBtb3VzZUFjdGlvbk1vZGUgPSB7XG4gICAgZG93bk9uU2xlZXBlcjogJ2Rvd25PblNsZWVwZXInLFxuICAgIGRvd25PbkFuY2hvcjogJ2Rvd25PbkFuY2hvcicsXG4gICAgZG93bk9uTGluZTogJ2Rvd25PbkVnZGUnLFxuICAgIGRvd25PbkhlYWQ6ICdkb3duT25IZWFkJyxcbiAgICBkb3duT25CYWNrZ3JvdW5kOiAnZG93bk9uQmFja2dyb3VuZCcsXG4gICAgZG93bk9uTm9uZTogJ2Rvd25Pbk5vbmUnLFxuICAgIGRvd25PblRleHQ6ICdkb3duT25UZXh0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBNaW5pbWFsRGlzdGFuY2VGb3JMb2NhdGUgPSAxMDsiLCJpbXBvcnQgeyBcbiAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLFxuICAgIFBhaW50ZXJFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgVW5kb0RlY29yYXRvciB9IGZyb20gJy4uLy4uLy4uL3VuZG8tcmVkby91bmRvLWRlY29yYXRvcic7XG5pbXBvcnQgeyBDb3B5UGFzdGVIb3VzZSB9IGZyb20gJy4uLy4uLy4uL2NvcHktcGFzdGUvY29weS1wYXN0ZS1ob3VzZSc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXInO1xuaW1wb3J0IHsgRWRnZSB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlJzsgXG5cblxuY2xhc3MgS2V5Ym9hcmRBY3Rpb25Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXNlciBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGtleWJvYXJkRGVsZXRlLFxuICAgICAgICAgICAga2V5Ym9hcmRJbnB1dCxcbiAgICAgICAgICAgIGtleWJvYXJkVGV4dFVuZG8sXG4gICAgICAgICAgICBrZXlib2FyZFRleHRSZWRvLFxuICAgICAgICAgICAga2V5Ym9hcmRUZXh0RGVsZXRlLFxuICAgICAgICAgICAga2V5Ym9hcmRDb3B5LFxuICAgICAgICAgICAga2V5Ym9hcmRQYXN0ZSxcbiAgICAgICAgfSA9IEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWU7XG5cbiAgICAgICAgLy8gTWFrZSBFdmVudE5hbWUtSGFuZGxlciBNYXBcbiAgICAgICAgY29uc3QgZXZlbnROYW1lc01hcCA9IHt9O1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkRGVsZXRlXSA9IFVuZG9EZWNvcmF0b3IuZGVsZXRlSXRlbXNEZWNvcmF0b3IodGhpcy5rZXlib2FyZERlbGV0ZUNvbnRyb2xsZXIpO1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkUGFzdGVdID0gVW5kb0RlY29yYXRvci5wYXN0ZURlY29yYXRvcih0aGlzLmtleWJvYXJkUGFzdGVDb250cm9sbGVyKTtcbiAgICAgICAgZXZlbnROYW1lc01hcFtrZXlib2FyZENvcHldID0gdGhpcy5rZXlib2FyZENvcHlDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkSW5wdXRdID0gdGhpcy5rZXlib2FyZElucHV0Q29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFtrZXlib2FyZFRleHRVbmRvXSA9IHRoaXMua2V5Ym9hcmRUZXh0VW5kb0NvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmRUZXh0UmVkb10gPSB0aGlzLmtleWJvYXJkVGV4dFJlZG9Db250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkVGV4dERlbGV0ZV0gPSB0aGlzLmtleWJvYXJkVGV4dERlbGV0ZUNvbnRyb2xsZXI7XG5cbiAgICAgICAgLy8gSW5pdCBldmVudCBoYW5kbGVyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TmFtZXNNYXBbZXZlbnROYW1lXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgdGhlIHNlbGVjdGVkIGVkZ2Ugb3IgU2xlZXBlclxuICAgICAqIEBwYXJhbSB7RWRnZSB8IFNsZWVwZXJ9IGNsaWNrT2JqZWN0IFxuICAgICAqL1xuICAgIGtleWJvYXJkRGVsZXRlQ29udHJvbGxlcihjbGlja09iamVjdCkge1xuICAgICAgICBjbGlja09iamVjdC5kZWxldGVTZWxmKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5wdXQgdGV4dCB0byB0aGUgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlciBcbiAgICAgKiBAcGFyYW0geyp9IGlucHV0S2V5IHN0cmluZ1xuICAgICAqL1xuICAgIGtleWJvYXJkSW5wdXRDb250cm9sbGVyKHNsZWVwZXIsIGlucHV0S2V5KSB7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBgJHtzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50fSR7aW5wdXRLZXl9YDtcblxuICAgICAgICAvLyBVcGRhdGUgdGV4dFxuICAgICAgICBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50ID0gbmV3Q29udGVudDtcblxuICAgICAgICAvLyBVcGRhdGUgdGVtcCBzdGFja1xuICAgICAgICBzbGVlcGVyLnRleHRUZW1wU3RhY2sudGV4dCA9IG5ld0NvbnRlbnQ7XG5cbiAgICAgICAgY29uc29sZS5sb2coc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuZG8gZm9yIHNsZWVwZXIgaW4gdGV4dCBtb2RlXG4gICAgICogQHBhcmFtIHsqfSBzbGVlcGVyIFxuICAgICAqL1xuICAgIGtleWJvYXJkVGV4dFVuZG9Db250cm9sbGVyKHNsZWVwZXIpIHtcbiAgICAgICAgc2xlZXBlci50ZXh0VGVtcFN0YWNrLnVuZG8oKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhzbGVlcGVyLnRleHRUZW1wU3RhY2sudGV4dCk7XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGVcbiAgICAgICAgc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudCA9IHNsZWVwZXIudGV4dFRlbXBTdGFjay50ZXh0O1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWRvIGZvciBzbGVlcGVyIGluIHRleHQgbW9kZVxuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlciBcbiAgICAgKi9cbiAgICBrZXlib2FyZFRleHRSZWRvQ29udHJvbGxlcihzbGVlcGVyKSB7XG4gICAgICAgIHNsZWVwZXIudGV4dFRlbXBTdGFjay5yZWRvKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlXG4gICAgICAgIHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQgPSBzbGVlcGVyLnRleHRUZW1wU3RhY2sudGV4dDtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7IFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBmb3Igc2xlZXBlciBpbiB0ZXh0IG1vZGVcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXIgXG4gICAgICovXG4gICAga2V5Ym9hcmRUZXh0RGVsZXRlQ29udHJvbGxlcihzbGVlcGVyKSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ0xlbmd0aCA9IHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQubGVuZ3RoO1xuICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudC5zdWJzdHJpbmcoMCwgc3RyaW5nTGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRleHRcbiAgICAgICAgc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudCA9IG5ld0NvbnRlbnQ7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRlbXAgc3RhY2tcbiAgICAgICAgc2xlZXBlci50ZXh0VGVtcFN0YWNrLnRleHQgPSBuZXdDb250ZW50O1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb3B5IGEgb2JqZWN0IHNlbGVjdGVkXG4gICAgICogQHBhcmFtIHtzbGVlcGVyIHwgRWRnZX0gb2JqZWN0IFxuICAgICAqL1xuICAgIGtleWJvYXJkQ29weUNvbnRyb2xsZXIob2JqZWN0KSB7XG4gICAgICAgIENvcHlQYXN0ZUhvdXNlLnBhY2thZ2UgPSBvYmplY3Q7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFBhc3RlIHRoZSBvYmplY3Qgc3RvcmUgaW4gY29weS1wYXN0ZSBob3VzZVxuICAgICAqL1xuICAgIGtleWJvYXJkUGFzdGVDb250cm9sbGVyKGNvcHllZE9iamVjdExpc3QpIHsgICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGNvcHllZE9iamVjdExpc3QpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IE9ubHkgc3VwcG9ydCBmb3Igc2xlZXBlciBub3dcbiAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgU2xlZXBlcikge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBub24tcmVsYXRlZCBmYWN0b3JzIHdpdGhpbiBzbGVlcGVyXG4gICAgICAgICAgICAgICAgaXRlbS5wcmVwYXJlRm9yUGFzdGUoKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGV2ZW50XG4gICAgICAgICAgICAgICAgaXRlbS5pbml0RXZlbnRIYW5kbGVyKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgU2xlZXBlciBpbnRvIHNsZWVwZXIgcG9vbFxuICAgICAgICAgICAgICAgIGl0ZW0ucmVjb3ZlclNlbGYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEtleWJvYXJkQWN0aW9uQ29udHJvbGxlciB9OyIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXInO1xuaW1wb3J0IHsgXG4gICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZSxcbiAgICBVbmRvUmVkb0V2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IEV4Y2x1ZGVLZXlFdmVudElkIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2dsb2JhbC1jb25maWcnO1xuXG5jbGFzcyBLZXlib2FyZEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBtb3VzZUFjdGlvbikge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5tb3VzZUFjdGlvbiA9IG1vdXNlQWN0aW9uO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmluaXRBY3Rpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGFsbCB0aGUgbW91c2UgYWN0aW9uIGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGluaXRBY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbnNNYXAgPSB7XG4gICAgICAgICAgICAna2V5ZG93bic6IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGFjdGlvbiBpbiBhY3Rpb25zTWFwKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihhY3Rpb24sIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBFeGNsdWRlIGV2ZW50IGZyb20gcGFuZWxcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkIGluIEV4Y2x1ZGVLZXlFdmVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhY3Rpb25zTWFwW2FjdGlvbl0oZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIG1vdXNlZG93biBlbGVtZW50IGlzIHNsZWVwZXIgYW5kIGluIHRleHQgbW9kZVxuICAgICAgICBjb25zdCBpc1RleHRNb2RlT24gPSB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQgaW5zdGFuY2VvZiBTbGVlcGVyIFxuICAgICAgICAmJiB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQuaXNUZXh0TW9kZTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaChjb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgLy8gUHJlc3MgRGVsZXRlXG4gICAgICAgICAgICAgICAgaXNUZXh0TW9kZU9uID8gdGhpcy5faGFuZGxlclRleHREZWxldGUoKSA6IHRoaXMuX2hhbmRsZXJEZWxldGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgICAgICAgLy8gUHJlc3MgY3RybCArIHpcbiAgICAgICAgICAgICAgICBpZiAoKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgJiYgIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGV4dE1vZGVPbiA/IFxuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkVGV4dFVuZG8sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUudW5kbyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUHJlc3MgY3RybCArIHNoZml0ICsgelxuICAgICAgICAgICAgICAgIGlmICgoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSAmJiBldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICBpc1RleHRNb2RlT24gPyBcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZFRleHRSZWRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLnJlZG8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjc6XG4gICAgICAgICAgICAgICAgLy8gUHJlc3MgY3RybCArIGNcbiAgICAgICAgICAgICAgICBpZigoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNUZXh0TW9kZU9uID9cbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KCdudWxsJylcbiAgICAgICAgICAgICAgICAgICAgOiBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkQ29weSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg2OlxuICAgICAgICAgICAgICAgIC8vIFByZXNzIGN0cmwgKyB2XG4gICAgICAgICAgICAgICAgaWYoKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgJiYgIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGV4dE1vZGVPbiA/XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudCgnbnVsbCcpXG4gICAgICAgICAgICAgICAgICAgIDogRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZFBhc3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcgfHxcbiAgICAgICAgICAgICAgICAgICAgY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwIHx8XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjJcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaXNUZXh0TW9kZU9uICYmIHRoaXMuX2hhbmRsZU5vcm1hbChldmVudC5rZXkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRleHQgaW5wdXQgZm9yIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IGtleSBcbiAgICAgKi9cbiAgICBfaGFuZGxlTm9ybWFsKGtleSkgeyAgXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUua2V5Ym9hcmRJbnB1dCxcbiAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgIGtleVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIG9iamVjdCBkZWxldGVcbiAgICAgKi9cbiAgICBfaGFuZGxlckRlbGV0ZSgpIHtcbiAgICAgICAgLy8gSWYgY2xpY2sgZWxlbWVudCBleGlzdHMgYW5kIGlzIGFjdGl2ZSwgdGhlbiBkZWxldGVcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50XG4gICAgICAgICAgICAmJiB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQuaXNBY3RpdmVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZERlbGV0ZSxcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciB0ZXh0IGRlbGV0ZVxuICAgICAqL1xuICAgIF9oYW5kbGVyVGV4dERlbGV0ZSgpIHtcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZFRleHREZWxldGUsXG4gICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBLZXlib2FyZEFjdGlvbiB9OyIsImltcG9ydCB7IG1vdXNlQWN0aW9uTW9kZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbi8vIENsb25lIHRoZSByZWxhdGVkIGluZm9ybWF0aW9uIGFjY29yZGluZyB0byB0aGUgdHlwZSBvZiBjbGFzc1xuZXhwb3J0IGZ1bmN0aW9uIERlZXBDbG9uZUluZm8obW9kZSwgdGFyZ2V0KSB7XG4gICAgc3dpdGNoKG1vZGUpIHtcbiAgICAgICAgY2FzZShtb3VzZUFjdGlvbk1vZGUuZG93bk9uU2xlZXBlcik6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IHRhcmdldC5jYW52YXNJbmZvcm1hdGlvbi54LFxuICAgICAgICAgICAgICAgIHk6IHRhcmdldC5jYW52YXNJbmZvcm1hdGlvbi55LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAobW91c2VBY3Rpb25Nb2RlLmRvd25PbkhlYWQpOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiB0YXJnZXQuZW5kTG9jYXRpb24ueCxcbiAgICAgICAgICAgICAgICB5OiB0YXJnZXQuZW5kTG9jYXRpb24ueSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBcbiAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLFxuICAgIFNsZWVwZXJFdmVudE5hbWUsXG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbiAgICBFZGdlRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFNsZWVwZXJQb29sZXIgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci1wb29sJztcbmltcG9ydCB7IEVkZ2VQb29sZXIgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL2VkZ2UvZWRnZS1wb29sJztcbmltcG9ydCB7IFVuZG9EZWNvcmF0b3IgfSBmcm9tICcuLi8uLi8uLi91bmRvLXJlZG8vdW5kby1kZWNvcmF0b3InOyBcblxuY2xhc3MgTW91c2VBY3Rpb25Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXNlciBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG1vdXNlRG93blNsZWVwZXIsXG4gICAgICAgICAgICBtb3VzZURvd25MaW5lLFxuICAgICAgICAgICAgbW91c2VEb3duQmFja2dyb3VuZCxcbiAgICAgICAgICAgIG1vdXNlTW92ZVNsZWVwZXIsXG4gICAgICAgICAgICBtb3VzZU1vdmVIZWFkLFxuICAgICAgICAgICAgbW91c2VVcFNsZWVwZXIsXG4gICAgICAgICAgICBtb3VzZVVwQW5jaG9yLFxuICAgICAgICAgICAgbW91c2VVcEhlYWQsXG4gICAgICAgICAgICBtb3VzZURvdWJsZUNsaWNrLFxuICAgICAgICB9ID0gQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZTtcblxuICAgICAgICAvLyBNYWtlIEV2ZW50TmFtZS1IYW5kbGVyIE1hcFxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VEb3duU2xlZXBlcl0gPSB0aGlzLm1vdXNlRG93blNsZWVwZXJDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlRG93bkxpbmVdID0gdGhpcy5tb3VzZURvd25MaW5lQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZURvd25CYWNrZ3JvdW5kXSA9IHRoaXMubW91c2VEb3duQmFja2dyb3VuZENvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VNb3ZlU2xlZXBlcl0gPSB0aGlzLm1vdXNlTW92ZVNsZWVwZXJDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlTW92ZUhlYWRdID0gdGhpcy5tb3VzZU1vdmVIZWFkQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZVVwU2xlZXBlcl0gPSBVbmRvRGVjb3JhdG9yLm1vdXNlVXBTbGVlcGVyRGVjb3JhdG9yKHRoaXMubW91c2VVcFNsZWVwZXJDb250cm9sbGVyLmJpbmQodGhpcykpO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlVXBBbmNob3JdID0gVW5kb0RlY29yYXRvci5tb3VzZVVwQW5jaG9yRGVjb3JhdG9yKHRoaXMubW91c2VVcEFuY2hvckNvbnRyb2xsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VVcEhlYWRdID0gVW5kb0RlY29yYXRvci5tb3VzZVVwSGVhZERlY29yYXRvcih0aGlzLm1vdXNlVXBIZWFkQ29udHJvbGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZURvdWJsZUNsaWNrXSA9IHRoaXMubW91c2VEb3VibGVDbGlja0NvbnRyb2xsZXI7XG5cbiAgICAgICAgLy8gSW5pdCBldmVudCBoYW5kbGVyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TmFtZXNNYXBbZXZlbnROYW1lXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbHRlciB0aGUgc2xlZXBlciBwcm9wZXJ0aWVzIFxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gc2xlZXBlciBTbGVlcGVyIG9iamVjdFxuICAgICAqL1xuICAgIG1vdXNlRG93blNsZWVwZXJDb250cm9sbGVyKHNsZWVwZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Rvd24nLCBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vIENoYW5nZSBhY3RpdmUgc3RhdHVzIGFuZCBkcmFnIHN0YXR1c1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBTbGVlcGVyRXZlbnROYW1lLmFjdGl2ZVNvbWVTbGVlcGVyLFxuICAgICAgICAgICAgc2xlZXBlclxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbHRlciB0aGUgZWRnZSBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIHsqfSBlZGdlIFxuICAgICAqL1xuICAgIG1vdXNlRG93bkxpbmVDb250cm9sbGVyKGVkZ2UpIHtcbiAgICAgICAgLy8gQ2hhbmdlIGFjdGl2ZSBlZGdlIHN0YXR1cyBcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgRWRnZUV2ZW50TmFtZS5hY3RpdmVTb21lRWRnZSxcbiAgICAgICAgICAgIGVkZ2UsXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFuIGFsbCB0aGUgYWN0aXZlIHN0YXR1c1xuICAgICAqL1xuICAgIG1vdXNlRG93bkJhY2tncm91bmRDb250cm9sbGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnRG93biBvbiBiYWNrZ3JvdW5kIGNvbnRyb2xsZXInKTtcbiAgICAgICAgZm9yIChjb25zdCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgLy8gRGVhY3RpdmUgYWxsIHRoZSBzbGVlcGVyXG4gICAgICAgICAgICBzbGVlcGVyLmNoYW5nZUFjdGl2ZVN0YXR1cyhudWxsKTtcblxuICAgICAgICAgICAgLy8gQmFjayB0byBub3JtYWwgbW9kZVxuICAgICAgICAgICAgc2xlZXBlci5lbmRUZXh0TW9kZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBlZGdlIG9mIEVkZ2VQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgZWRnZS5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coU2xlZXBlclBvb2xlci5wb29sKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBzbGVlcGVyIGNhbnZhcyBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gZHJhZ1NsZWVwZXJMaXN0IFxuICAgICAqIEBwYXJhbSB7Kn0gcmVsYXRpdmVNb3ZlRGlzdGFuY2UgXG4gICAgICovXG4gICAgbW91c2VNb3ZlU2xlZXBlckNvbnRyb2xsZXIoZHJhZ1NsZWVwZXJMaXN0LCByZWxhdGl2ZU1vdmVEaXN0YW5jZSkge1xuICAgICAgICBmb3IgKGNvbnN0IHNsZWVwZXIgb2YgZHJhZ1NsZWVwZXJMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5YID0gc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi54O1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luWSA9IHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ggPSBvcmlnaW5YICsgcmVsYXRpdmVNb3ZlRGlzdGFuY2UueDtcbiAgICAgICAgICAgIGNvbnN0IG5ld1kgPSBvcmlnaW5ZICsgcmVsYXRpdmVNb3ZlRGlzdGFuY2UueTtcbiAgICAgICAgICAgIHNsZWVwZXIuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24oe1xuICAgICAgICAgICAgICAgIHg6IG5ld1gsXG4gICAgICAgICAgICAgICAgeTogbmV3WSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygc2xlZXBlci5lZGdlTGlzdCkge1xuICAgICAgICAgICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oJ3N0YXJ0Jywge1xuICAgICAgICAgICAgICAgICAgICB4OiBlZGdlLnN0YXJ0TG9jYXRpb24ueCArIHJlbGF0aXZlTW92ZURpc3RhbmNlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGVkZ2Uuc3RhcnRMb2NhdGlvbi55ICsgcmVsYXRpdmVNb3ZlRGlzdGFuY2UueSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChjb25zdCBlZGdlIG9mIHNsZWVwZXIuaW5jb21pbmdFZGdlTGlzdCkge1xuICAgICAgICAgICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oJ2VuZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogZWRnZS5lbmRMb2NhdGlvbi54ICsgcmVsYXRpdmVNb3ZlRGlzdGFuY2UueCxcbiAgICAgICAgICAgICAgICAgICAgeTogZWRnZS5lbmRMb2NhdGlvbi55ICsgcmVsYXRpdmVNb3ZlRGlzdGFuY2UueSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGVkZ2UgY2FudmFzIHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtFZGdlfSBkcmFnRWRnZSBcbiAgICAgKiBAcGFyYW0geyp9IHJlbGF0aXZlTW92ZURpc3RhbmNlIFxuICAgICAqL1xuICAgIG1vdXNlTW92ZUhlYWRDb250cm9sbGVyKGRyYWdFZGdlLCBjdXJyZW50UG9zaXRpb24pIHtcbiAgICAgICAgZHJhZ0VkZ2Uuc2V0TG9jYXRpb24oJ2VuZCcsIGN1cnJlbnRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8gRGVsZXRlIHRoZSBlZGdlIGZyb20gZW5kIHNsZWVwZXJcbiAgICAgICAgaWYgKCEhZHJhZ0VkZ2UuZW5kU2xlZXBlcikge1xuICAgICAgICAgICAgZHJhZ0VkZ2UuZW5kU2xlZXBlci5yZW1vdmVJbmNvbWluZ0VkZ2UoZHJhZ0VkZ2UpO1xuICAgICAgICAgICAgZHJhZ0VkZ2UuY2hhbmdlRW5kKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYW4gYWxsIHRoZSBkcmFnIGZsYWcgd2hlbiBtb3VzZSB1cFxuICAgICAqIEBwYXJhbSB7Kn0gZHJhZ1NsZWVwZXJMaXN0IFxuICAgICAqL1xuICAgIG1vdXNlVXBTbGVlcGVyQ29udHJvbGxlcihkcmFnU2xlZXBlckxpc3QpIHtcbiAgICAgICAgZm9yKGNvbnN0IHNsZWVwZXIgb2YgZHJhZ1NsZWVwZXJMaXN0KSB7XG4gICAgICAgICAgICBzbGVlcGVyLnN3aXRjaERyYWdTdGF0dXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHRlbXBvcmFyeSBlZGdlIGludG8gc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlckFuZEFuY2hvciBjbGlja2VkIGFuY2hvciBhbmQgaXRzIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGVkZ2UgZWRnZSBvYmplY3RcbiAgICAgKi9cbiAgICBtb3VzZVVwQW5jaG9yQ29udHJvbGxlcihzbGVlcGVyQW5kQW5jaG9yLCBlZGdlLCBjbG9zZXN0T2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IFtzbGVlcGVyLCBzbGVlcGVyQW5jaG9yXSA9IHNsZWVwZXJBbmRBbmNob3I7XG4gICAgICAgIHNsZWVwZXIuYWRkRWRnZShlZGdlKTtcblxuICAgICAgICAvLyBBZGQgdGhlIGVuZCBzbGVlcGVyIGlmIGNsb2VzdE9iamVjdCBleGlzdGVkXG4gICAgICAgIGlmICghIWNsb3Nlc3RPYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VVcEhlYWRDb250cm9sbGVyKGVkZ2UsIGNsb3Nlc3RPYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGluayB0byB0aGUgY2xvZXN0IGFuY2hvciBpZiBuZWVkZWRcbiAgICAgKiBAcGFyYW0geyp9IGVkZ2UgXG4gICAgICogQHBhcmFtIHsqfSBjbG9zZXN0T2JqZWN0IFxuICAgICAqL1xuICAgIG1vdXNlVXBIZWFkQ29udHJvbGxlcihlZGdlLCBjbG9zZXN0T2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNsb3Nlc3RMb2NhdGlvbixcbiAgICAgICAgICAgIGNsb3Nlc3RTbGVlcGVyLFxuICAgICAgICB9ID0gY2xvc2VzdE9iamVjdDtcblxuICAgICAgICAvLyBTZXQgaW5jb21pbmcgZWRnZSBmb3IgY3VycmVudCBzbGVlcGVyXG4gICAgICAgIGNsb3Nlc3RTbGVlcGVyLmFkZEluY29taW5nRWRnZShlZGdlKTtcblxuICAgICAgICAvLyBTZXQgZWRnZSBsb2NhdGlvblxuICAgICAgICBlZGdlLnNldExvY2F0aW9uKCdlbmQnLCBjbG9zZXN0TG9jYXRpb24pO1xuXG4gICAgICAgIC8vIFNldCBlZGdlIGVuZCBzbGVlcGVyXG4gICAgICAgIGVkZ2UuY2hhbmdlRW5kKGNsb3Nlc3RTbGVlcGVyKTtcblxuICAgICAgICAvLyBTZXQgZWRnZSBzdGFydCBzbGVlcGVyJ3MgY2hpbGRcbiAgICAgICAgZWRnZS5zdGFydFNsZWVwZXIuYWRkQ2hpbGQoY2xvc2VzdFNsZWVwZXIpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NsZWVwZXJ9IHNsZWVwZXJcbiAgICAgKiBTdGFydCB0ZXh0IG1vZGUgd2hlbiBkb3VsYmUgY2xpY2sgb24gdGhlIHNsZWVwZXJcbiAgICAgKi9cbiAgICBtb3VzZURvdWJsZUNsaWNrQ29udHJvbGxlcihzbGVlcGVyKSB7XG4gICAgICAgIC8vIENhbGwgdGhlIHN0YXJ0aW5nIHRleHQgbW9kZSBmdW5jdGlvbiBvZiB0aGF0IHNsZWVwZXJcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgU2xlZXBlckV2ZW50TmFtZS5hY3RpdmVTb21lU2xlZXBlclRleHRNb2RlLFxuICAgICAgICAgICAgc2xlZXBlcixcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBNb3VzZUFjdGlvbkNvbnRyb2xsZXIgfTsiLCJpbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgRGVlcENsb25lSW5mbyB9IGZyb20gJy4vZGVlcENsb25lJztcbmltcG9ydCB7IFxuICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbiAgICBVbmRvUmVkb0V2ZW50TmFtZSxcbiAgICBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgU2F2ZWRPcGVyYXRpb24gfSBmcm9tICcuLi8uLi8uLi91bmRvLXJlZG8vb3BlcmF0aW9uJztcbmltcG9ydCB7IEFjdGlvblV0aWxzIH0gZnJvbSAnLi4vYWN0aW9uLXV0aWxzJztcbmltcG9ydCB7IG1vdXNlQWN0aW9uTW9kZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXInO1xuaW1wb3J0IHsgRWRnZSB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlJztcblxuY2xhc3MgTW91c2VBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uWCA9IG51bGw7XG4gICAgICAgIHRoaXMubW91c2VQb3NpdGlvblkgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uTm9uZTtcbiAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAvLyBTYXZlIHRlbXBvcmFyeSB2YXJpYWJsZSBcbiAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlID0gbnVsbDtcblxuICAgICAgICAvLyBDb3B5IGZvciBkZWNvcmF0b3JcbiAgICAgICAgdGhpcy50ZW1wb3JhcnlDb3B5ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmluaXRBY3Rpb24oKTtcbiAgICB9XG4gICAgc3dpdGNoVGV4dE1vZGVcbiAgICAvKipcbiAgICAgKiBJbml0IGFsbCB0aGUgbW91c2UgYWN0aW9uIGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGluaXRBY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbnNNYXAgPSB7XG4gICAgICAgICAgICAnbW91c2Vkb3duJzogdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdtb3VzZW1vdmUnOiBBY3Rpb25VdGlscy50aHJvdHRsZXJNYWtlcih0aGlzLmhhbmRsZU1vdXNlTW92ZS5iaW5kKHRoaXMpLCAxMDAwIC8gNjApLFxuICAgICAgICAgICAgJ21vdXNldXAnOiB0aGlzLmhhbmRsZU5Nb3VzZVVwLmJpbmQodGhpcyksXG4gICAgICAgICAgICAnZGJsY2xpY2snOiB0aGlzLmhhbmRsZU1vdXNlRG91YmxlQ2xpY2suYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdjb250ZXh0bWVudSc6IHRoaXMuaGFuZGxlTW91c2VQcmV2ZW50UmlnaHRDbGljay5iaW5kKHRoaXMpLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGFjdGlvbiBpbiBhY3Rpb25zTWFwKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKGFjdGlvbiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNNYXBbYWN0aW9uXShldmVudClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TW91c2VQb3NpdGlvbih4LCB5KSB7XG4gICAgICAgIHRoaXMubW91c2VQb3NpdGlvblggPSB4O1xuICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb25ZID0geTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgLy8gQ2xvc2UgY29sb3IgcGlja2VyXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUuY2xvc2VDb2xvclBpY2tlcixcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGV2ZW50Lm9mZnNldFgsXG4gICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFVwZGF0ZSBtb3VzZSBwb3NpdGlvbiB3aGVuIGNsaWNrXG4gICAgICAgIHRoaXMuc2V0TW91c2VQb3NpdGlvbihsb2NhdGlvbi54LCBsb2NhdGlvbi55KTtcblxuICAgICAgICAvLyBGaW5kIGxvY2F0ZWQgb2JqZWN0XG4gICAgICAgIGNvbnN0IGxvY2F0ZWRPYmplY3QgPSBBY3Rpb25VdGlscy5maW5kTG9jYXRlZE9iamVjdCh0aGlzLmNhbnZhcywgbG9jYXRpb24pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2NhdGVkIG9iamVjdCcsIGxvY2F0ZWRPYmplY3QpO1xuXG4gICAgICAgIC8vIElmIHJpZ2h0IGNsaWNrXG4gICAgICAgIGlmIChldmVudC5idXR0b24gPT0gMikge1xuICAgICAgICAgICAgLy8gSWYgcmlnaHQgY2xpY2tcbiAgICAgICAgICAgIGxldCB0eXBlID0gbnVsbDtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAobG9jYXRlZE9iamVjdCkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBsb2NhdGVkT2JqZWN0LnR5cGU7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbG9jYXRlZE9iamVjdC5yZXN1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlUmlnaHRDbGljayxcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50Lm9mZnNldFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIElmIGxlZnQgY2xpY2tcbiAgICAgICAgaWYoISFsb2NhdGVkT2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCB7dHlwZSwgcmVzdWx0fSA9IGxvY2F0ZWRPYmplY3Q7XG4gICAgICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlRG93bkxpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gbW91c2VBY3Rpb25Nb2RlLmRvd25PbkxpbmU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25IZWFkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FuY2hvcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25BbmNob3I7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2xlZXBlcic6XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VEb3duU2xlZXBlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uU2xlZXBlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQSBjZXJ0YWluIGNvcHkgb2YgbW91c2VEb3duRWxlbWVudCBmb3IgaW5mbyBmcm9tIG9yaWdpbmFsIG5vZGVcbiAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5Q29weSA9IERlZXBDbG9uZUluZm8odGhpcy5hY3Rpb25Nb2RlLCB0aGlzLm1vdXNlRG93bkVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRG93biBvbiBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25CYWNrZ3JvdW5kO1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlRG93bkJhY2tncm91bmQsXG4gICAgICAgICAgICBudWxsXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMuYWN0aW9uTW9kZSkge1xuICAgICAgICAgICAgY2FzZShtb3VzZUFjdGlvbk1vZGUuZG93bk9uTm9uZSk6XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlckhvdmVyTW92ZS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UobW91c2VBY3Rpb25Nb2RlLmRvd25PblNsZWVwZXIpOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJEcmFnU2xlZXBlck1vdmUuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25BbmNob3IpOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJEcmFnQW5jaG9yTW92ZS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UobW91c2VBY3Rpb25Nb2RlLmRvd25PbkJhY2tncm91bmQpOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJEcmFnQmFja2dyb3VuZE1vdmUuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25IZWFkKTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVyRHJhZ0hlYWRNb3ZlLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhbmRsZXJIb3Zlck1vdmUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBGaW5kIGxvY2F0ZWQgb2JqZWN0XG4gICAgICAgIGNvbnN0IGxvY2F0ZWRPYmplY3QgPSBBY3Rpb25VdGlscy5maW5kTG9jYXRlZE9iamVjdCh0aGlzLmNhbnZhcywgbG9jYXRpb24pO1xuICAgICAgICBpZighIWxvY2F0ZWRPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gbG9jYXRlZE9iamVjdDtcbiAgICAgICAgICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnYW5jaG9yJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NsZWVwZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW4gbGluZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWQnOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW4gSGVhZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAnYWxsLXNjcm9sbCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICB9XG5cbiAgICBfaGFuZGxlckRyYWdTbGVlcGVyTW92ZShldmVudCkge1xuICAgICAgICBjb25zdCBkcmFnU2xlZXBlckxpc3QgPSBBY3Rpb25VdGlscy5maW5kRHJhZ2dlZFNsZWVwZXIoKTtcblxuICAgICAgICAvLyBObyBub2RlIGlzIGRyYWdnZWRcbiAgICAgICAgaWYgKGRyYWdTbGVlcGVyTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSByZWxhdGl2ZSBtb3ZlIGRpc3RhbmNlXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlTW92ZURpc3RhbmNlID0ge1xuICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCAtIHRoaXMubW91c2VQb3NpdGlvblgsIFxuICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSAtIHRoaXMubW91c2VQb3NpdGlvblksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU2F2ZSBjdXJyZW50IG1vdXNlIHBvc2lzdGlvblxuICAgICAgICB0aGlzLnNldE1vdXNlUG9zaXRpb24oZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgYWN0aW9uIGNvbnRyb2xsZXJcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZU1vdmVTbGVlcGVyLFxuICAgICAgICAgICAgZHJhZ1NsZWVwZXJMaXN0LFxuICAgICAgICAgICAgcmVsYXRpdmVNb3ZlRGlzdGFuY2UsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2hhbmRsZXJEcmFnQW5jaG9yTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMudGVtcG9yYXJ5RWRnZSkge1xuICAgICAgICAgICAgY29uc3QgW3NsZWVwZXIsIHNsZWVwZXJBbmNob3JdID0gdGhpcy5tb3VzZURvd25FbGVtZW50O1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRMb2FjdGlvbiA9IHNsZWVwZXJBbmNob3IubG9jYXRpb247XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgdGVtcG9yYXJ5IGVnZGUgb2JqZWN0XG4gICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUVkZ2UgPSBuZXcgRWRnZSgpO1xuICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlLmNoYW5nZVN0YXJ0KHNsZWVwZXIpO1xuICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlLnNldExvY2F0aW9uKCdzdGFydCcsIHN0YXJ0TG9hY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBlbmQgbG9jYXRpb25cbiAgICAgICAgY29uc3QgZW5kTG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLCBcbiAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFksXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlLnNldExvY2F0aW9uKCdlbmQnLCBlbmRMb2NhdGlvbik7XG4gICAgICAgIFxuICAgICAgICAvLyBTYXZlIGN1cnJlbnQgbW91c2UgcG9zaXN0aW9uXG4gICAgICAgIHRoaXMuc2V0TW91c2VQb3NpdGlvbihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2hhbmRsZXJEcmFnSGVhZE1vdmUoZXZlbnQpIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHJlbGF0aXZlIG1vdmUgZGlzdGFuY2VcbiAgICAgICAgY29uc3QgY3VycmVudFBvc2lzdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGV2ZW50Lm9mZnNldFgsIFxuICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgfTtcblxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlTW92ZUhlYWQsXG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICBjdXJyZW50UG9zaXN0aW9uLFxuICAgICAgICApXG4gICAgfVxuXG4gICAgX2hhbmRsZXJEcmFnQmFja2dyb3VuZE1vdmUoZXZlbnQpIHtcbiAgICAgICAgLy8gVE9ETzogQ3JlYXRlIHNlbGVjdGlvbiBib3hcbiAgICB9XG5cbiAgICBoYW5kbGVOTW91c2VVcChldmVudCkge1xuICAgICAgICBzd2l0Y2godGhpcy5hY3Rpb25Nb2RlKSB7XG4gICAgICAgICAgICBjYXNlIChtb3VzZUFjdGlvbk1vZGUuZG93bk9uU2xlZXBlcik6XG4gICAgICAgICAgICAgICAgY29uc3QgZHJhZ1NsZWVwZXJMaXN0ID0gQWN0aW9uVXRpbHMuZmluZERyYWdnZWRTbGVlcGVyKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdXNlIHVwJywgdGhpcy5tb3VzZURvd25FbGVtZW50LmlzRHJhZyk7XG5cbiAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VVcFNsZWVwZXIsXG4gICAgICAgICAgICAgICAgICAgIGRyYWdTbGVlcGVyTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlDb3B5LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChtb3VzZUFjdGlvbk1vZGUuZG93bk9uQW5jaG9yKTpcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0T2JqZWN0QW5jaG9yID0gQWN0aW9uVXRpbHMuZmluZENsb3Nlc3RBbmNob3Ioe1xuICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlVXBBbmNob3IsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0T2JqZWN0QW5jaG9yLFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUVkZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAobW91c2VBY3Rpb25Nb2RlLmRvd25PbkhlYWQpOlxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RPYmplY3RIZWFkID0gQWN0aW9uVXRpbHMuZmluZENsb3Nlc3RBbmNob3Ioe1xuICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjbG9zZXN0T2JqZWN0SGVhZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZW5kIGRpcmVjdGx5IHRvIFVuZG9SZWRvIHN0YWNrIChOb3RlIG9ubHkgaGVhZCBpcyBzcGVpY2lhbClcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLmFkZE11dGF0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogU2F2ZWRPcGVyYXRpb24ubW92ZUhlYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFbmRMb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLm1vdXNlRG93bkVsZW1lbnQuZW5kTG9jYXRpb24ueCAtIHRoaXMudGVtcG9yYXJ5Q29weS54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLm1vdXNlRG93bkVsZW1lbnQuZW5kTG9jYXRpb24ueSAtIHRoaXMudGVtcG9yYXJ5Q29weS55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlVXBIZWFkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3RPYmplY3RIZWFkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUNvcHksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKG1vdXNlQWN0aW9uTW9kZS5kb3duT25CYWNrZ3JvdW5kKTpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJhY2sgdG8gZGVmYXVsdCBzdGF0dXNcbiAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gbW91c2VBY3Rpb25Nb2RlLmRvd25Pbk5vbmU7XG4gICAgICAgIHRoaXMudGVtcG9yYXJ5Q29weSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGNhbGxiYWNrIGZvciBkb3VibGUgY2xpY2sgb3BlcmF0aW9uXG4gICAgICogQHBhcmFtIHsqfSBldmVudCBcbiAgICAgKi9cbiAgICBoYW5kbGVNb3VzZURvdWJsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIC8vIE9ubHkgQWN0aXZlIHdoZW4gZG91YmxlIGNsaWNrIG9uIHNsZWVwZXJcbiAgICAgICAgaWYgKCF0aGlzLm1vdXNlRG93bkVsZW1lbnQgaW5zdGFuY2VvZiBTbGVlcGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIGlmIHRoZSBsb2NhdGlvbiBpcyBvbiB0aGUgdGhhdCBzbGVlcGVyXG4gICAgICAgIGNvbnN0IGlzSW5UaGlzU2xlZXBlciA9IHRoaXMuY2FudmFzQ29udGV4dC5pc1BvaW50SW5QYXRoKFxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50LmNhbnZhc1BhdGgsXG4gICAgICAgICAgICBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgKVxuICAgICAgICBcbiAgICAgICAgaWYgKCFpc0luVGhpc1NsZWVwZXIgfHwgdGhpcy5tb3VzZURvd25FbGVtZW50LmlzVGV4dE1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBDaGFuZ2UgdGhlIG1vdXNlIGFjdGlvbiBtb2RlXG4gICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25UZXh0O1xuXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VEb3VibGVDbGljayxcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZVByZXZlbnRSaWdodENsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gICBcbn1cblxuZXhwb3J0IHsgTW91c2VBY3Rpb24gfTsiLCJpbXBvcnQgeyBcbiAgICBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lLFxuICAgIFBhaW50ZXJFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXBvb2wnO1xuaW1wb3J0IHsgU2xlZXBlcnNGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItZmFjdG9yeSc7XG5cbmNsYXNzIFBhbmVsT3BlcmF0aW9uQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzZXIgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIC8vIEV4dHJhY3QgZXZlbnQgbmFtZVxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjaGFuZ2VBbGxQcm9iYWJpbGl0eSxcbiAgICAgICAgICAgIHJlc2V0U2xlZXBlcnMsXG4gICAgICAgICAgICBwYW5lbENyZWF0ZU5vZGUsXG4gICAgICAgICAgICBwYW5lbEFjdGl2ZSxcbiAgICAgICAgfSA9IFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWU7XG5cbiAgICAgICAgLy8gTWFrZSBFdmVudE5hbWUtSGFuZGxlciBNYXBcbiAgICAgICAgY29uc3QgZXZlbnROYW1lc01hcCA9IHt9O1xuICAgICAgICBldmVudE5hbWVzTWFwW2NoYW5nZUFsbFByb2JhYmlsaXR5XSA9IHRoaXMucHJvYkNoYW5nZUNvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbcGFuZWxDcmVhdGVOb2RlXSA9IHRoaXMucGFuZWxDcmVhdGVOb2RlQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFtyZXNldFNsZWVwZXJzXSA9IHRoaXMucmVzZXRDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW3BhbmVsQWN0aXZlXSA9IHRoaXMucGFuZWxBY3RpdmVDb250cm9sbGVyO1xuXG4gICAgICAgIC8vIEluaXQgZXZlbnQgaGFuZGxlclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBpbiBldmVudE5hbWVzTWFwKSB7XG4gICAgICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudE5hbWVzTWFwW2V2ZW50TmFtZV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIGFsbCB0aGUgcHJvYiB3aXRoaW4gZWFjaCBzbGVlcGVyXG4gICAgICogQHBhcmFtIHsqfSBwcm9iIFxuICAgICAqL1xuICAgIHByb2JDaGFuZ2VDb250cm9sbGVyKHByb2IpIHtcbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBmYWN0b3J5XG4gICAgICAgIFNsZWVwZXJzRmFjdG9yeS5jaGFuZ2VQcm9iYWJpbGl0eShwcm9iKTtcblxuICAgICAgICAvLyBDaGFuZ2UgdGhlIHNsZWVwZXJcbiAgICAgICAgZm9yKGNvbnN0IHNsZWVwZXIgb2YgU2xlZXBlclBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBzbGVlcGVyLnByb2JhYmlsaXR5ID0gcHJvYjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IGFsbCB0aGUgc2xlZXBlciBzdGF0dXNcbiAgICAgKi9cbiAgICByZXNldENvbnRyb2xsZXIoKSB7XG4gICAgICAgIGZvcihjb25zdCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgaWYgKHNsZWVwZXIuaXNTbGVlcGluZyAhPT0gc2xlZXBlci5iZWZvcmVQcm9jZXNzSXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHNsZWVwZXIuY2hhbmdlU2xlZXBpbmdTdGF0dXMoc2xlZXBlci5iZWZvcmVQcm9jZXNzSXNTbGVlcGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHNsZWVwZXIgZnJvbSBwYW5lbFxuICAgICAqL1xuICAgIHBhbmVsQ3JlYXRlTm9kZUNvbnRyb2xsZXIob2JqLCBwb3NpdGlvbikge1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lLmNyZWF0ZU5vZGUsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNpdHZlIHNsZWVwZXIgd2l0aCBjb250ZXh0IG1lYW51XG4gICAgICovXG4gICAgcGFuZWxBY3RpdmVDb250cm9sbGVyKHNsZWVwZXIpIHtcbiAgICAgICAgLy8gQWN0aXZlIHNsZWVwZXJcbiAgICAgICAgc2xlZXBlci5jaGFuZ2VTbGVlcGluZ1N0YXR1cygpO1xuICAgICAgICBzbGVlcGVyLmJlZm9yZVByb2Nlc3NJc1NsZWVwaW5nID0gc2xlZXBlci5pc1NsZWVwaW5nO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgUGFuZWxPcGVyYXRpb25Db250cm9sbGVyIH07IiwiaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFNsZWVwZXJQb29sZXIgfSBmcm9tICcuLi8uLi9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci1wb29sJztcbmltcG9ydCB7XG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbiAgICBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lLFxuICAgIFN1bW1hcnlFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbmNsYXNzIFdha2luZ1Byb2Nlc3NDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yb3VuZE51bSA9IDA7XG4gICAgICAgIHRoaXMuZnJhbWVUaW1lID0gNzAwO1xuICAgICAgICB0aGlzLmlzUGF1c2UgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZnJlc2hJbnRlcnZhbElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5hd2FrZVF1ZXVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXNlciBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHN0YXJ0V2FraW5nUHJvY2VzcyxcbiAgICAgICAgICAgIHBhdXNlV2FraW5nUHJvY2VzcyxcbiAgICAgICAgfSA9IFBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWU7XG5cbiAgICAgICAgLy8gTWFrZSBFdmVudE5hbWUtSGFuZGxlciBNYXBcbiAgICAgICAgY29uc3QgZXZlbnROYW1lc01hcCA9IHt9O1xuICAgICAgICBldmVudE5hbWVzTWFwW3N0YXJ0V2FraW5nUHJvY2Vzc10gPSB0aGlzLnN0YXJ0V2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgZXZlbnROYW1lc01hcFtwYXVzZVdha2luZ1Byb2Nlc3NdID0gdGhpcy5wYXVzZVdha2luZ1Byb2Nlc3NDb250cm9sbGVyLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gSW5pdCBldmVudCBoYW5kbGVyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TmFtZXNNYXBbZXZlbnROYW1lXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0QXdha2VRdWV1ZSgpIHtcbiAgICAgICAgdGhpcy5yb3VuZE51bSA9IDA7XG4gICAgICAgIGNvbnN0IHRlbXBRdWV1ZSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3Qgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIGlmICghc2xlZXBlci5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgdGVtcFF1ZXVlLnB1c2goc2xlZXBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmF3YWtlUXVldWUgPSB0ZW1wUXVldWU7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBTdW1tYXJ5XG4gICAgICAgIGNvbnN0IHNsZWVwZXJBbmRBd2FrZU51bSA9IHRoaXMuY291bnRTbGVlcGVyQW5kQXdha2UoKVxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBTdW1tYXJ5RXZlbnROYW1lLmRyYXdTaGFyZSxcbiAgICAgICAgICAgIHNsZWVwZXJBbmRBd2FrZU51bSxcbiAgICAgICAgKTtcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgU3VtbWFyeUV2ZW50TmFtZS51cGRhdGVEZXRhaWwsXG4gICAgICAgICAgICBzbGVlcGVyQW5kQXdha2VOdW1bMF0sXG4gICAgICAgICAgICBzbGVlcGVyQW5kQXdha2VOdW1bMV0sXG4gICAgICAgICAgICB0aGlzLnJvdW5kTnVtXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIHN0YXJ0V2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXRBd2FrZVF1ZXVlKCk7XG5cbiAgICAgICAgLy8gU2V0IGludGVydmFsXG4gICAgICAgIHRoaXMucmVmcmVzaEludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5hd2FrZVF1ZXVlLmxlbmd0aCA+IDAgJiYgIXRoaXMuaXNQYXVzZSkge1xuICAgICAgICAgICAgICAgIC8vIEdvIE5leHQgUm91bmRcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNsZWVwZXIgb2YgdGhpcy5hd2FrZVF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FjdGl2ZWRTbGVlcGVyID0gc2xlZXBlci5hY3RpdmVDaGlsZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF3YWtlUXVldWUgPSBbLi4udGhpcy5hd2FrZVF1ZXVlLCAuLi5uZXdBY3RpdmVkU2xlZXBlcl07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXdha2VRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFkZCByb3VuZCBudW1iZXJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdW5kTnVtICs9IDE7XG5cbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIFN1bW1hcnlcbiAgICAgICAgICAgICAgICBjb25zdCBzbGVlcGVyQW5kQXdha2VOdW0gPSB0aGlzLmNvdW50U2xlZXBlckFuZEF3YWtlKClcbiAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgIFN1bW1hcnlFdmVudE5hbWUuZHJhd1NoYXJlLFxuICAgICAgICAgICAgICAgICAgICBzbGVlcGVyQW5kQXdha2VOdW0sXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgIFN1bW1hcnlFdmVudE5hbWUudXBkYXRlRGV0YWlsLFxuICAgICAgICAgICAgICAgICAgICBzbGVlcGVyQW5kQXdha2VOdW1bMF0sXG4gICAgICAgICAgICAgICAgICAgIHNsZWVwZXJBbmRBd2FrZU51bVsxXSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3VuZE51bVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF3YWtlUXVldWUubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5lbmRXYWtpbmdQcm9jZXNzXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgaW50ZXJ2YWxcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucmVmcmVzaEludGVydmFsSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLmZyYW1lVGltZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGF1c2UgdGhlIHdha2luZyBwcm9jZXNzIFxuICAgICAqL1xuICAgIHBhdXNlV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ291bnQgdGhlIG51bWJlciBvZiBzbGVlcGVyIGFuZCBBd2FrZXJcbiAgICAgKi9cbiAgICBjb3VudFNsZWVwZXJBbmRBd2FrZSgpIHtcbiAgICAgICAgbGV0IHNsZWVwZXJOdW0gPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHNsZWVwZXIgb2YgU2xlZXBlclBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBpZiAoc2xlZXBlci5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgc2xlZXBlck51bSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbc2xlZXBlck51bSwgU2xlZXBlclBvb2xlci5wb29sLmxlbmd0aCAtIHNsZWVwZXJOdW1dO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIgfTsiLCJleHBvcnQgY29uc3QgRGVmYXVsdEVkZ2VXZWlnaHQgPSAwLjU7XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0U2xlZXBlckNhbnZhc0luZm9ybWF0aW9uID0ge1xuICAgIGRyYXdUeXBlOiAnY2lyY2xlJyxcbiAgICB4OiA1MDAsXG4gICAgeTogNTAwLFxuICAgIHJhZGl1czogMzAsXG4gICAgc3RhcnRBbmdsZTogMCxcbiAgICBlbmRBbmdsZTogMiAqIE1hdGguUEksXG4gICAgaXNGaWxsZWQ6IHRydWUsXG4gICAgZmlsbENvbG9yOiAnI0NBQzlDQycsXG4gICAgaXNCb3JkZXI6IHRydWUsXG4gICAgYm9yZGVyV2l0aDogMixcbiAgICBib3JkZXJDb2xvcjogJyMwMDAwMDAnLFxuICAgIGlzQW5jaG9yOiBmYWxzZSxcbiAgICBhY3RpdmVCb3JkZXJDb2xvcjogJyMwMDY4RkYnLFxufTtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRBd2FrZUNhbnZhc0luZm9ybWF0aW9uID0ge1xuICAgIGRyYXdUeXBlOiAnY2lyY2xlJyxcbiAgICB4OiA1MDAsXG4gICAgeTogNTAwLFxuICAgIHJhZGl1czogMzAsXG4gICAgc3RhcnRBbmdsZTogMCxcbiAgICBlbmRBbmdsZTogMiAqIE1hdGguUEksXG4gICAgaXNGaWxsZWQ6IHRydWUsXG4gICAgZmlsbENvbG9yOiAnI0ZGQjFCMicsXG4gICAgaXNCb3JkZXI6IHRydWUsXG4gICAgYm9yZGVyV2l0aDogMixcbiAgICBib3JkZXJDb2xvcjogJyMwMDAwMDAnLFxuICAgIGlzQW5jaG9yOiBmYWxzZSxcbiAgICBhY3RpdmVCb3JkZXJDb2xvcjogJyMwMDY4RkYnLFxufTsiLCJpbXBvcnQgeyBFZGdlUG9vbEV2ZW50TmFtZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuXG5jbGFzcyBFZGdlUG9vbCB7XG4gICAgLyoqXG4gICAgICogR2V0IHNpbmdsZXRvbiBpbnN0YW5jZSBvZiBTbGVlcGVyUG9vbFxuICAgICAqIEByZXR1cm5zIHtFZGdlUG9vbH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEVkZ2VQb29sKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFFZGdlUG9vbC5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5wb29sID0gW107XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaW5pdEV2ZW50c0hhbmRsZXIoKTtcbiAgICAgICAgICAgIEVkZ2VQb29sLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBFZGdlUG9vbC5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBldmVudCBoYW5kbGVyIHJlbGF0ZWQgdG8gU2xlZXBlciBQb29sXG4gICAgICovXG4gICAgaW5pdEV2ZW50c0hhbmRsZXIoKSB7XG4gICAgICAgIC8vIFJlZ2lzdGVyIGFkZGluZyBzbGVlcGVyXG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIEVkZ2VQb29sRXZlbnROYW1lLmFkZEVkZ2UsIFxuICAgICAgICAgICAgdGhpcy5hZGRFZGdlLmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBzbGVlcGVyIG9iamVjdCBpbnRvIGVkZ2UgcG9vbFxuICAgICAqIEBwYXJhbSB7RWRnZX0gc2xlZXBlciBcbiAgICAgKi9cbiAgICBhZGRFZGdlKGVkZ2UpIHtcbiAgICAgICAgdGhpcy5wb29sLnB1c2goZWRnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFuIGVkZ2UgZnJvbSBlZGdlIHBvb2xcbiAgICAgKiBAcGFyYW0geyp9IGVkZ2UgXG4gICAgICovXG4gICAgcmVtb3ZlRWRnZShlZGdlKSB7XG4gICAgICAgIGNvbnN0IGxvY2F0ZWRJbmRleCA9IHRoaXMucG9vbC5maW5kSW5kZXgoZWRnZUluUG9vbCA9PiBlZGdlSW5Qb29sID09PSBlZGdlKTtcbiAgICAgICAgaWYgKGxvY2F0ZWRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucG9vbC5zcGxpY2UobG9jYXRlZEluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEVkZ2VQb29sZXIgPSBFZGdlUG9vbC5nZXRJbnN0YW5jZSgpOyIsImltcG9ydCB7IERlZmF1bHRFZGdlV2VpZ2h0IH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBcbiAgICBFZGdlUG9vbEV2ZW50TmFtZSwgXG4gICAgRWRnZUV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IFNsZWVwZXIgfSBmcm9tICcuLi9zbGVlcGVyL3NsZWVwZXInO1xuaW1wb3J0IHsgRWRnZVBvb2xlciB9IGZyb20gJy4vZWRnZS1wb29sJztcblxuY2xhc3MgRWRnZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIERhdGEgaW5mb3JtYXRpb25cbiAgICAgICAgdGhpcy5zdGFydFNsZWVwZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmVuZFNsZWVwZXIgPSBudWxsO1xuICAgICAgICB0aGlzLndlaWdodCA9IG51bGw7XG5cbiAgICAgICAgLy8gQ2FudmFzIHBhdGggaW5mb3JtYXRpb25cbiAgICAgICAgdGhpcy5zdGFydExvY2F0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbmRMb2NhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuY2FudmFzUGF0aCA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyBJbml0IGV2ZW50XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgRXZlbnRcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KEVkZ2VQb29sRXZlbnROYW1lLmFkZEVkZ2UsIHRoaXMpO1xuICAgIH1cblxuICAgIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIC8vIEV4dHJhY3QgZXZlbnQgbmFtZVxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmVTb21lRWRnZSxcbiAgICAgICAgfSA9IEVkZ2VFdmVudE5hbWU7XG5cbiAgICAgICAgY29uc3QgZXZlbnROYW1lc01hcCA9IHt9O1xuICAgICAgICBldmVudE5hbWVzTWFwW2FjdGl2ZVNvbWVFZGdlXSA9IHRoaXMuYWN0aXZlU29tZUVkZ2UuYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBSZWdpc3RlciBhY3RpdmUgc29tZSBub2RlIGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudCBpbiBldmVudE5hbWVzTWFwKSB7XG4gICAgICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50TmFtZXNNYXBbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc3RhcnQgc2xlZXBlciBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7U2xlZXBlcn0gXG4gICAgICovXG4gICAgZ2V0U3RhcnRTbGVlcGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydFNsZWVwZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBlbmQgc2xlZXBlciBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7U2xlZXBlcn0gXG4gICAgICovXG4gICAgZ2V0RW5kU2xlZXBlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kU2xlZXBlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHdlaWdodCBvbiB0aGlzIGVkZ2VcbiAgICAgKiBAcmV0dXJucyB7ZmxvYXR9XG4gICAgICovXG4gICAgZ2V0V2VpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy53ZWlnaHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSB3ZWlnaHQgdG8gdGhlIGdpdmVuIHZhbHVlXG4gICAgICogQHBhcmFtIHtmbG9hdH0gbmV3V2VpZ2h0IFxuICAgICAqL1xuICAgIGNoYW5nZVdlaWdodChuZXdXZWlnaHQpIHtcbiAgICAgICAgdGhpcy53ZWlnaHQgPSBuZXdXZWlnaHQ7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgc3RhcnQgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gbmV3U2xlZXBlciBcbiAgICAgKi9cbiAgICBjaGFuZ2VTdGFydChuZXdTbGVlcGVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyID0gbmV3U2xlZXBlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGVuZCBzbGVlcGVyXG4gICAgICogQHBhcmFtIHsqfSBuZXdTbGVlcGVyIFxuICAgICAqL1xuICAgIGNoYW5nZUVuZChuZXdTbGVlcGVyKSB7XG4gICAgICAgIHRoaXMuZW5kU2xlZXBlciA9IG5ld1NsZWVwZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHN0YXJ0IGFuZCBlbmQgbG9jYXRpb25cbiAgICAgKi9cbiAgICBzZXRMb2NhdGlvbih0eXBlLCBsb2NhdGlvbikge1xuICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICB0aGlzLmVuZExvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNhbnZhcyBwYXRoXG4gICAgICovXG4gICAgc2V0Q2FudmFzUGF0aChlZGdlUGF0aCkge1xuICAgICAgICB0aGlzLmNhbnZhc1BhdGggPSBlZGdlUGF0aDtcbiAgICB9XG5cbiAgICBhY3RpdmVTb21lRWRnZShlZGdlKSB7XG4gICAgICAgIGlmIChlZGdlID09PSB0aGlzICYmIHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQWN0aXZlICYmIGVkZ2UgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZVNlbGYoKSB7XG4gICAgICAgIEVkZ2VQb29sZXIucmVtb3ZlRWRnZSh0aGlzKTtcbiAgICAgICAgLy8gRGVsZXRlIGl0IGluIHN0YXJ0IHNsZWVwZXJcbiAgICAgICAgdGhpcy5zdGFydFNsZWVwZXIucmVtb3ZlRWRnZSh0aGlzKTtcblxuICAgICAgICAvLyBEZWxldGUgaXQgaW4gZW5kIHNsZWVwZXJcbiAgICAgICAgaWYgKCEhdGhpcy5lbmRTbGVlcGVyKSB7XG4gICAgICAgICAgICB0aGlzLmVuZFNsZWVwZXIucmVtb3ZlSW5jb21pbmdFZGdlKHRoaXMpO1xuXG4gICAgICAgICAgICAvLyBEZWxldGUgdGhlIGNoaWxkIG9mIHN0YXJ0IHNsZWVwZXJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyLnJlbW92ZUNoaWxkKHRoaXMuZW5kU2xlZXBlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNvdmVyU2VsZigpIHtcbiAgICAgICAgRWRnZVBvb2xlci5hZGRFZGdlKHRoaXMpO1xuICAgICAgICAvLyBSZWNvdmVyIGl0IGluIHN0YXJ0IHNsZWVwZXJcbiAgICAgICAgdGhpcy5zdGFydFNsZWVwZXIuYWRkRWRnZSh0aGlzKTtcblxuICAgICAgICAvLyBSZWNvdmVyIGl0IGluIGVuZCBzbGVlcGVyXG4gICAgICAgIGlmICghIXRoaXMuZW5kU2xlZXBlcikge1xuICAgICAgICAgICAgdGhpcy5lbmRTbGVlcGVyLmFkZEluY29taW5nRWRnZSh0aGlzKTtcblxuICAgICAgICAgICAgLy8gYWRkIHRoZSBjaGlsZCBvZiBzdGFydCBzbGVlcGVyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2xlZXBlci5hZGRDaGlsZCh0aGlzLmVuZFNsZWVwZXIpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IEVkZ2UgfTsiLCJpbXBvcnQgeyBcbiAgICBEZWZhdWx0U2xlZXBlckNhbnZhc0luZm9ybWF0aW9uLFxuICAgIERlZmF1bHRBd2FrZUNhbnZhc0luZm9ybWF0aW9uLFxufSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgXG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbiAgICBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lLFxuICAgIFN1bW1hcnlFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4vc2xlZXBlcic7XG5pbXBvcnQgeyBTbGVlcGVyUG9vbGVyIH0gZnJvbSAnLi9zbGVlcGVyLXBvb2wnO1xuaW1wb3J0IHsgVW5kb0RlY29yYXRvciB9IGZyb20gJy4uLy4uLy4uL3VuZG8tcmVkby91bmRvLWRlY29yYXRvcic7XG5cbmNsYXNzIFNsZWVwZXJGYWN0b3J5IHtcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTbGVlcGVyRmFjdG9yeSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW91bnQgY2FudmFzIHdoZW4gaW5pdGlhbGl6ZSwgbXVzdCBtb3VudCBiZWZvcmUgaXQgY2FuIGJlIHVzZWQgISEhXG4gICAgICogQHBhcmFtIHsqfSBjYW52YXNPYmogXG4gICAgICovXG4gICAgbW91bnRDYW52YXMoY2FudmFzT2JqKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzT2JqO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIVNsZWVwZXJGYWN0b3J5Lmluc3RhbmNlKSB7XG4gICAgICAgICAgICAvLyBJbml0aWFsIHBhcmFtc1xuICAgICAgICAgICAgdGhpcy5zbGVlcGVyQ2FudmFzSW5mb3JtYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0U2xlZXBlckNhbnZhc0luZm9ybWF0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuYXdha2VDYW52YXNJbmZvcm1hdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRBd2FrZUNhbnZhc0luZm9ybWF0aW9uKTtcbiAgICAgICAgICAgIHRoaXMucHJvYiA9IDAuMDtcblxuICAgICAgICAgICAgdGhpcy5pbml0RXZlbnRzSGFuZGxlcigpO1xuICAgICAgICAgICAgU2xlZXBlckZhY3RvcnkuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFNsZWVwZXJGYWN0b3J5Lmluc3RhbmNlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBldmVudCBoYW5kbGVyIHJlbGF0ZWQgdG8gU2xlZXBlciBQb29sXG4gICAgICovXG4gICAgaW5pdEV2ZW50c0hhbmRsZXIoKSB7XG4gICAgICAgIC8vIFJlZ2lzdGVyIGZvciBtYWtpbmcgbmV3IHNsZWVwZXJcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgUGFuZWxPcGVhcmF0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5jcmVhdGVOb2RlLFxuICAgICAgICAgICAgVW5kb0RlY29yYXRvci5jcmVhdGVTbGVlcGVyRGVjb3JhdG9yKHRoaXMubWFrZU5ld1NsZWVwZXIuYmluZCh0aGlzKSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBSZWdpc3RlciBmb3IgY2hhbmdlaW5nIHNsZWVwZXIgYW5kIGF3YWtlIHNsZWVwZXJzJyBzdHlsZVxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lLmNoYW5nZU5vZGVTdHlsZSxcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24uYmluZCh0aGlzKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGZvciBwYXNzIHRoZSBjb2xvclxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBTdW1tYXJ5RXZlbnROYW1lLmdldFNoYXJlQ29sb3IsXG4gICAgICAgICAgICB0aGlzLnBhc3NTbGVlcGVyQ29sb3IuYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBzbGVlcGVyIGFuZCBhd2FrZSBzbGVlcGVycycgY2FudmFzIGluZm9ybWF0aW9uXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHR5cGUgMCBmb3Igc2xlZXBlciwgMSBmb3IgYXdha2Ugc2xlZXBlclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wZXJ0eU9iamVjdCBvYmplY3QgZm9yIGNoYW5nZVxuICAgICAqL1xuICAgIGNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHR5cGUsIHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgIGxldCBmb3JDaGFuZ2VkSW5mb3JtYXRpb24gPSAhIXR5cGUgPyB0aGlzLmF3YWtlQ2FudmFzSW5mb3JtYXRpb24gOiB0aGlzLnNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbjtcblxuICAgICAgICAvLyBJdGVyYXRlIHRoZSBhbGVyYXRpb24gYW5kIHVwZGF0ZVxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHByb3BlcnR5T2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgIGlmIChmb3JDaGFuZ2VkSW5mb3JtYXRpb25bcHJvcGVydHldICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGZvckNoYW5nZWRJbmZvcm1hdGlvbltwcm9wZXJ0eV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlIGNhbnZhcyBJbmZvcm1hdGlvblxuICAgICAgICBmb3IgKGxldCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgLy8gT25seSBjaGFuZ2UgY29ycmVzcG9uZGluZyBub2RlcyBcbiAgICAgICAgICAgIGlmICgoISF0eXBlKSBeIHNsZWVwZXIuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHNsZWVwZXIuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IGZvckNoYW5nZWRJbmZvcm1hdGlvbi5maWxsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBmb3JDaGFuZ2VkSW5mb3JtYXRpb24uYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhbnZhcyBpbmZvcm1hdGlvblxuICAgICAqIEBwYXJhbSB7aW50fSB0eXBlIDAgZm9yIHNsZWVwZXIsIDEgZm9yIGF3YWtlIHNsZWVwZXJcbiAgICAgKi9cbiAgICBnZXRDYW52YXNJbmZvcm1hdGlvbih0eXBlKSB7XG4gICAgICAgIHJldHVybiAhIXR5cGUgPyB0aGlzLmF3YWtlQ2FudmFzSW5mb3JtYXRpb24gOiB0aGlzLnNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgY29uZmlnIHByb2JhYmlsaXR5IHRvIGF3YWtlIG90aGVyIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IHR5cGUgXG4gICAgICovXG4gICAgY2hhbmdlUHJvYmFiaWxpdHkocHJvYikge1xuICAgICAgICB0aGlzLnByb2IgPSBwcm9iO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2UgbmV3IHNsZWVwZXIgdG8gc2xlZXBlciBwb29sXG4gICAgICogQHBhcmFtIHtpbnR9IHR5cGUgMCBmb3Igc2xlZXBlciwgMSBmb3IgYXdha2Ugc2xlZXBlclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwb3NpdGlvbiBsb2NhdGlvbiB0byBtYWtlIG5ldyBzbGVlcGVyXG4gICAgICovXG4gICAgbWFrZU5ld1NsZWVwZXIodHlwZSwgcG9zaXRpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZScpO1xuICAgICAgICAvLyBHZXQgc2xlZXAgc3RhdHVzXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9ICF0eXBlO1xuXG4gICAgICAgIC8vIEdldCBjYW52YXMgaW5mb3JtYXRpb25cbiAgICAgICAgY29uc3QgY2FudmFzSW5mb3JtYXRpb24gPSAhIXR5cGUgPyBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmF3YWtlQ2FudmFzSW5mb3JtYXRpb24pIDogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zbGVlcGVyQ2FudmFzSW5mb3JtYXRpb24pO1xuXG4gICAgICAgIC8vIFNldCBwb3NpaXRpb25cbiAgICAgICAgaWYgKCEhcG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhbnZhc0luZm9ybWF0aW9uLnggPSBwb3NpdGlvbi54O1xuICAgICAgICAgICAgY2FudmFzSW5mb3JtYXRpb24ueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWtlIG5ldyBzbGVlcGVyXG4gICAgICAgIGNvbnN0IHRlbXBTbGVlcGVyID0gbmV3IFNsZWVwZXIoXG4gICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICBjYW52YXNJbmZvcm1hdGlvbixcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRlbXBTbGVlcGVyLnByb2JhYmlsaXR5ID0gdGhpcy5wcm9iO1xuICAgICAgICByZXR1cm4gdGVtcFNsZWVwZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2V0IHRoZSBjb2xvclxuICAgICAqL1xuICAgIHBhc3NTbGVlcGVyQ29sb3IoY29sb3JMaXN0Rm9yU2V0KSB7XG4gICAgICAgIGlmIChjb2xvckxpc3RGb3JTZXQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGNvbG9yTGlzdEZvclNldC5wdXNoKHRoaXMuc2xlZXBlckNhbnZhc0luZm9ybWF0aW9uLmZpbGxDb2xvcik7XG4gICAgICAgICAgICBjb2xvckxpc3RGb3JTZXQucHVzaCh0aGlzLmF3YWtlQ2FudmFzSW5mb3JtYXRpb24uZmlsbENvbG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9yTGlzdEZvclNldFswXSA9IHRoaXMuc2xlZXBlckNhbnZhc0luZm9ybWF0aW9uLmZpbGxDb2xvcjtcbiAgICAgICAgICAgIGNvbG9yTGlzdEZvclNldFsxXSA9IHRoaXMuYXdha2VDYW52YXNJbmZvcm1hdGlvbi5maWxsQ29sb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBTbGVlcGVyc0ZhY3RvcnkgPSBTbGVlcGVyRmFjdG9yeS5nZXRJbnN0YW5jZSgpO1xuXG4iLCJpbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgXG4gICAgU2xlZXBlclBvb2xFdmVudE5hbWUsXG4gICAgU2xlZXBlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcblxuY2xhc3MgU2xlZXBlclBvb2wge1xuICAgIC8qKlxuICAgICAqIEdldCBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgU2xlZXBlclBvb2xcbiAgICAgKiBAcmV0dXJucyB7U2xlZXBlclBvb2x9XG4gICAgICovXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTbGVlcGVyUG9vbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghU2xlZXBlclBvb2wuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9vbCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmluaXRFdmVudHNIYW5kbGVyKCk7XG4gICAgICAgICAgICBTbGVlcGVyUG9vbC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xlZXBlclBvb2wuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciByZWxhdGVkIHRvIFNsZWVwZXIgUG9vbFxuICAgICAqL1xuICAgIGluaXRFdmVudHNIYW5kbGVyKCkge1xuICAgICAgICAvLyBSZWdpc3RlciBhZGRpbmcgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBTbGVlcGVyUG9vbEV2ZW50TmFtZS5hZGRTbGVlcGVyLCBcbiAgICAgICAgICAgIHRoaXMuYWRkU2xlZXBlci5iaW5kKHRoaXMpXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgYWN0aXZlIHNsZWVwZXJcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgU2xlZXBlckV2ZW50TmFtZS5hY3RpdmVTb21lU2xlZXBlcixcbiAgICAgICAgICAgIHRoaXMucmVPcmRlclNsZWVwZXIuYmluZCh0aGlzKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgc2xlZXBlciBvYmplY3QgaW50byBzbGVlcGVyIHBvb2xcbiAgICAgKiBAcGFyYW0ge1NsZWVwZXJ9IHNsZWVwZXIgXG4gICAgICovXG4gICAgYWRkU2xlZXBlcihzbGVlcGVyKSB7XG4gICAgICAgIHRoaXMucG9vbC5wdXNoKHNsZWVwZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGdpdmVuIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXIgXG4gICAgICovXG4gICAgcmVtb3ZlU2xlZXBlcihzbGVlcGVyKSB7XG4gICAgICAgIGNvbnN0IGxvY2F0ZWRJbmRleCA9IHRoaXMucG9vbC5maW5kSW5kZXgoc2xlZXBlckluUG9vbCA9PiBzbGVlcGVySW5Qb29sID09PSBzbGVlcGVyKTtcbiAgICAgICAgaWYgKGxvY2F0ZWRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucG9vbC5zcGxpY2UobG9jYXRlZEluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlT3JkZXJTbGVlcGVyKHNsZWVwZXIpIHtcbiAgICAgICAgY29uc3Qgc2xlZXBlckluZGV4ID0gdGhpcy5wb29sLmZpbmRJbmRleChzbGVlcGVySW5Qb29sID0+IHNsZWVwZXJJblBvb2wgID09PSBzbGVlcGVyKTtcbiAgICAgICAgdGhpcy5wb29sLnNwbGljZShzbGVlcGVySW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnBvb2wgPSBbLi4udGhpcy5wb29sLCBzbGVlcGVyXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBTbGVlcGVyUG9vbGVyID0gU2xlZXBlclBvb2wuZ2V0SW5zdGFuY2UoKTsiLCJpbXBvcnQgeyBcbiAgICBQYWludGVyRXZlbnROYW1lLFxuICAgIFNsZWVwZXJFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2V2ZW50XCI7XG5cbmNsYXNzIFRleHRTbGVlcGVyVGVtcFN0YWNrIHtcbiAgICBjb25zdHJ1Y3RvcihvcmlnaW5UZXh0KSB7XG4gICAgICAgIHRoaXMucG9pbnRlciA9IDA7XG4gICAgICAgIHRoaXMuc3RhY2tMaXN0ID0gW107XG4gICAgICAgIHRoaXMuc3RhY2tMaXN0LnB1c2gob3JpZ2luVGV4dCk7XG4gICAgfVxuXG4gICAgZ2V0IHRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrTGlzdFt0aGlzLnBvaW50ZXJdO1xuICAgIH1cblxuICAgIHNldCB0ZXh0KHZhbCkge1xuICAgICAgICB0aGlzLnBvaW50ZXIgKz0gMTtcbiAgICAgICAgdGhpcy5zdGFja0xpc3QucHVzaCh2YWwpO1xuICAgIH1cblxuICAgIHVuZG8oKSB7XG4gICAgICAgIGlmICh0aGlzLnBvaW50ZXIgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvaW50ZXIgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZG8oKSB7XG4gICAgICAgIGlmICh0aGlzLnBvaW50ZXIgPCB0aGlzLnN0YWNrTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLnBvaW50ZXIgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jbGFzcyBUZXh0U2xlZXBlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNldCBmb3IgZGVmYXVsdCB0ZXh0IGNvbmZpZ1xuICAgICAgICB0aGlzLnRleHRJbmZvcm1hdGlvbiA9IHtcbiAgICAgICAgICAgIHNpemU6IDE1LFxuICAgICAgICAgICAgc3R5bGU6ICdUaW1lcyBOZXcgUm9tYW4nLFxuICAgICAgICAgICAgY29udGVudDogJ2EnLFxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRleHRhcmVhSW5mb3JtYXRpb24gPSB7XG4gICAgICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnRleHRhcmVhQm91bmRpbmdCb3hQYXRoID0gbnVsbDtcblxuICAgICAgICAvLyBSZWlnaXN0ZXIgZm9yIHRleHQgdGVtcCBzdGFja1xuICAgICAgICB0aGlzLnRleHRUZW1wU3RhY2sgPSBudWxsO1xuXG4gICAgICAgIHRoaXMudGV4dEluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICB0ZXh0SW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZVNvbWVTbGVlcGVyVGV4dE1vZGUsXG4gICAgICAgIH0gPSBTbGVlcGVyRXZlbnROYW1lO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFthY3RpdmVTb21lU2xlZXBlclRleHRNb2RlXSA9IHRoaXMuc3RhcnRUZXh0TW9kZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGFjdGl2ZSBzb21lIG5vZGUgaGFuZGxlclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnROYW1lc01hcFtldmVudF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3RhcnQgdGhlIHRleHQgbW9kZVxuICAgICAqL1xuICAgIHN0YXJ0VGV4dE1vZGUoc2xlZXBlcikge1xuICAgICAgICBpZiAoc2xlZXBlciA9PSB0aGlzICYmIHRoaXMuaXNUZXh0TW9kZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRleHRUZW1wU3RhY2sgPSBuZXcgVGV4dFNsZWVwZXJUZW1wU3RhY2sodGhpcy50ZXh0SW5mb3JtYXRpb24uY29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1RleHRNb2RlICYmIHNsZWVwZXIgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50ZXh0VGVtcFN0YWNrID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGVuZCB0aGUgdGV4dCBtb2RlXG4gICAgICovXG4gICAgZW5kVGV4dE1vZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVGV4dE1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50ZXh0VGVtcFN0YWNrID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIHRleHQgXG4gICAgICovXG4gICAgZHJhd1RleHQoKSB7XG4gICAgICAgIC8vIEdldCBzbGVlcGVyIGNlbnRlclxuICAgICAgICBjb25zdCB0ZXh0UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNhbnZhc0luZm9ybWF0aW9uLngsXG4gICAgICAgICAgICB5OiB0aGlzLmNhbnZhc0luZm9ybWF0aW9uLnksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gR2V0IG1heCB3aWR0aFxuICAgICAgICBjb25zdCB0ZXh0TWF4V2lkdGggPSB0aGlzLmNhbnZhc0luZm9ybWF0aW9uLnJhZGl1cyAqIE1hdGguc3FydCgzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIERyYXcgdGhlIHRleHRcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS50ZXh0V3JpdGUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRleHRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogdGV4dE1heFdpZHRoLFxuICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uOiB0aGlzLnRleHRJbmZvcm1hdGlvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLnNldFRleHRPclRleHRhcmVhSW5mb3JtYXRpb24uYmluZCh0aGlzKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSB0ZXh0ZXJhXG4gICAgICovXG4gICAgZHJhd1RleHRBcmVhKCkge1xuICAgICAgICAvLyBPbmx5IGRyYXcgaXQgd2hlbiB0ZXh0bW9kZSBpcyBvblxuICAgICAgICBpZiAoIXRoaXMuaXNUZXh0TW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IFNsZWVwZXIgY2VudGVyXG4gICAgICAgIGNvbnN0IHNsZWVwZXJQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzSW5mb3JtYXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzSW5mb3JtYXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBEcmF3IHRoZSB0ZXh0XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUuZmlndXJlRHJhdyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzbGVlcGVyUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgdGV4dGFyZWFJbmZvcm1hdGlvbjogdGhpcy50ZXh0YXJlYUluZm9ybWF0aW9uLFxuICAgICAgICAgICAgICAgIGRyYXdUeXBlOiAndGV4dGFyZWEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuX3NldFRleHRhcmVhUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0ZXh0IC8gdGV4dGFyZWEgaW5mb3JtYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IHByb3BlcnR5T2JqZWN0IFxuICAgICAqIEBwYXJhbSB7Kn0gdHlwZSBcbiAgICAgKi9cbiAgICBzZXRUZXh0T3JUZXh0YXJlYUluZm9ybWF0aW9uKHByb3BlcnR5T2JqZWN0LCB0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlICE9PSAndGV4dCcgJiYgdHlwZSAhPT0gJ3RleHRhcmVhJykge1xuICAgICAgICAgICAgRXJyb3IoJ1dyb25nIHR5cGUgd2hlbiBzZXR0aW5nIHRleHQgLyB0ZXh0YXJlIGluZm9ybWF0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JTZXRPYmplY3QgPSAodHlwZSA9PSAndGV4dCcpID8gdGhpcy50ZXh0SW5mb3JtYXRpb24gOiB0aGlzLnRleHRhcmVhSW5mb3JtYXRpb247XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0aGUgYWxlcmF0aW9uIGFuZCB1cGRhdGVcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBwcm9wZXJ0eU9iamVjdCkge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBwcm9wZXJ0eU9iamVjdFtwcm9wZXJ0eV07XG5cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAmJiBmb3JTZXRPYmplY3RbcHJvcGVydHldICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGZvclNldE9iamVjdFtwcm9wZXJ0eV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERyYXcgdGV4dCBhcmVhIHdoZW4gXG4gICAgICAgIGlmICh0eXBlID09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RleHRBcmVhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYm91bmRpbmcgYm94IHBhdGhcbiAgICAgKiBAcGFyYW0geyp9IGJvdW5kaW5nQm94UGF0aCBcbiAgICAgKi9cbiAgICBfc2V0VGV4dGFyZWFQYXRoKGJvdW5kaW5nQm94UGF0aCkge1xuICAgICAgICB0aGlzLnRleHRhcmVhQm91bmRpbmdCb3hQYXRoID0gYm91bmRpbmdCb3hQYXRoO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVGV4dFNsZWVwZXIgfTsiLCJpbXBvcnQgeyBFZGdlIH0gZnJvbSAnLi4vZWRnZS9lZGdlJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBnZXRBY3Rpdml0eUJ5V2VpZ2h0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWF0aC11dGlscyc7XG5pbXBvcnQgeyBcbiAgICBEZWZhdWx0U2xlZXBlckNhbnZhc0luZm9ybWF0aW9uLFxuICAgIERlZmF1bHRBY3RpdmVJbmZvcm1hdGlvbixcbn0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFxuICAgIFNsZWVwZXJFdmVudE5hbWUsXG4gICAgU2xlZXBlclBvb2xFdmVudE5hbWUsXG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IFRleHRTbGVlcGVyIH0gZnJvbSAnLi9zbGVlcGVyLXRleHQnOyBcbmltcG9ydCB7IFNsZWVwZXJQb29sZXIgfSBmcm9tICcuLi9zbGVlcGVyL3NsZWVwZXItcG9vbCc7XG5pbXBvcnQgeyBTbGVlcGVyc0ZhY3RvcnkgfSBmcm9tICcuL3NsZWVwZXItZmFjdG9yeSc7XG5cbmNsYXNzIFNsZWVwZXIgZXh0ZW5kcyBUZXh0U2xlZXBlciB7XG4gICAgY29uc3RydWN0b3Ioc3RhdHVzLCBjYW52YXNJbmZvcm1hdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaXNTbGVlcGluZyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5iZWZvcmVQcm9jZXNzSXNTbGVlcGluZyA9IHN0YXR1cztcblxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEcmFnID0gZmFsc2U7XG5cbiAgICAgICAgLy8gUHJvYmFiaWxpdHkgdG8gYWN0aXZlIG90aGVyc1xuICAgICAgICB0aGlzLnByb2JhYmlsaXR5ID0gMC4wO1xuXG4gICAgICAgIHRoaXMuZWRnZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5pbmNvbWluZ0VkZ2VMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRFZGdlTWFwTGlzdCA9IFtdO1xuXG4gICAgICAgIHRoaXMuY2FudmFzSW5mb3JtYXRpb24gPSBjYW52YXNJbmZvcm1hdGlvbiB8fCBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0U2xlZXBlckNhbnZhc0luZm9ybWF0aW9uKTtcbiAgICAgICAgdGhpcy5jYW52YXNQYXRoID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW52YXNBbmNob3JzUGF0aExpc3QgPSBudWxsO1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIEV2ZW50XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChTbGVlcGVyUG9vbEV2ZW50TmFtZS5hZGRTbGVlcGVyLCB0aGlzKTtcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LCBcbiAgICAgICAgICAgIHRoaXMuY2FudmFzSW5mb3JtYXRpb24sIFxuICAgICAgICAgICAgdGhpcy5zZXRDYW52YXNQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgdGV4dFxuICAgICAgICB0aGlzLmRyYXdUZXh0QXJlYSgpO1xuICAgICAgICB0aGlzLmRyYXdUZXh0KCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ05ldyBTbGVlcGVyJywgdGhpcyk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZVNvbWVTbGVlcGVyLFxuICAgICAgICB9ID0gU2xlZXBlckV2ZW50TmFtZTtcblxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbYWN0aXZlU29tZVNsZWVwZXJdID0gdGhpcy5jaGFuZ2VBY3RpdmVTdGF0dXMuYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBSZWdpc3RlciBhY3RpdmUgc29tZSBub2RlIGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudCBpbiBldmVudE5hbWVzTWFwKSB7XG4gICAgICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50TmFtZXNNYXBbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNoaWxkIG5vZGUgZm9yIGN1cnJlbnQgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gY2hpbGRTbGVlcGVyIFxuICAgICAqL1xuICAgIGFkZENoaWxkKGNoaWxkU2xlZXBlcikge1xuICAgICAgICBpZiAoIWNoaWxkU2xlZXBlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBBZGRDaGlsZCBFcnJvcjogTm8gY2hpbGRyZW4gaXMgZ2l2ZW4hJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5wdXNoKGNoaWxkU2xlZXBlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgZ2l2ZW4gY2hpbGQgc2xlZXBlciBcbiAgICAgKiBAcGFyYW0ge1NsZWVwZXJ9IGNoaWxkU2xlZXBlciBcbiAgICAgKi9cbiAgICByZW1vdmVDaGlsZChjaGlsZFNsZWVwZXIpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0Q2hpbGRJbmRleCA9IHRoaXMuY2hpbGRyZW5MaXN0LmZpbmRJbmRleChcbiAgICAgICAgICAgIGNoaWxkT2JqZWN0ID0+IGNoaWxkT2JqZWN0ID09PSBjaGlsZFNsZWVwZXJcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBjaGlsZFxuICAgICAgICBpZiAoZXhwZWN0Q2hpbGRJbmRleCA9PT0gLTEgfHwgZXhwZWN0Q2hpbGRJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIFJlbW92ZUNoaWxkIEVycm9yOiBOb3QgZmluZCB0aGUgY2hpbGQhJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgY2hpbGRcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3Quc3BsaWNlKGV4cGVjdENoaWxkSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlciBcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGVkZ2UgRWRnZSBvYmplY3QgXG4gICAgICovXG4gICAgYWRkRWRnZShlZGdlKSB7XG4gICAgICAgIGlmICghZWRnZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBhZGRFZGdlIEVycm9yOiBObyBlZGdlIGlzIGdpdmVuIScpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlciBcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGVkZ2UgRWRnZSBvYmplY3RcbiAgICAgKi9cbiAgICByZW1vdmVFZGdlKGVkZ2UpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0RWRnZUluZGV4ID0gdGhpcy5lZGdlTGlzdC5maW5kSW5kZXgoXG4gICAgICAgICAgICBlZGdlT2JqZWN0ID0+IGVkZ2VPYmplY3QgPT09IGVkZ2VcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBjaGlsZFxuICAgICAgICBpZiAoZXhwZWN0RWRnZUluZGV4ID09PSAtMSB8fCBleHBlY3RFZGdlSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBSZW1vdmVFZGdlIEVycm9yOiBOb3QgZmluZCB0aGUgZWRnZSEnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjaGlsZFxuICAgICAgICB0aGlzLmVkZ2VMaXN0LnNwbGljZShleHBlY3RFZGdlSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGluY29taW5nIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlclxuICAgICAqL1xuICAgIGFkZEluY29taW5nRWRnZShlZGdlKSB7XG4gICAgICAgIGlmICghZWRnZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBhZGRJbmNvbWluZ0VkZ2UgRXJyb3I6IE5vIGVkZ2UgaXMgZ2l2ZW4hJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluY29taW5nRWRnZUxpc3QucHVzaChlZGdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBpbmNvbWluZyBlZGdlIGZvciBjdXJyZW50IHNsZWVwZXIgXG4gICAgICogQHBhcmFtIHsqfSBlZGdlIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHJlbW92ZUluY29taW5nRWRnZShlZGdlKSB7XG4gICAgICAgIGNvbnN0IGV4cGVjdEVkZ2VJbmRleCA9IHRoaXMuaW5jb21pbmdFZGdlTGlzdC5maW5kSW5kZXgoXG4gICAgICAgICAgICBlZGdlT2JqZWN0ID0+IGVkZ2VPYmplY3QgPT09IGVkZ2VcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBjaGlsZFxuICAgICAgICBpZiAoZXhwZWN0RWRnZUluZGV4ID09PSAtMSB8fCBleHBlY3RFZGdlSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBSZW1vdmVJbmNvbWluZ0VkZ2UgRXJyb3I6IE5vdCBmaW5kIHRoZSBlZGdlIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjaGlsZFxuICAgICAgICB0aGlzLmluY29taW5nRWRnZUxpc3Quc3BsaWNlKGV4cGVjdEVkZ2VJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBjdXJyZW50IG5vZGUgc3RhdHVzXG4gICAgICovXG4gICAgY2hhbmdlU2xlZXBpbmdTdGF0dXMoYXJncykge1xuICAgICAgICAvLyBJZiBub3QgcGFzcyBzdGF0dXMgdGhlbiByZXZlcnNlIGN1cnJlbnQgc3RhdHVzXG4gICAgICAgIGlmIChhcmdzID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5pc1NsZWVwaW5nID0gIXRoaXMuaXNTbGVlcGluZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNTbGVlcGluZyA9IGFyZ3M7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIENoYW5nZSBjYW52YXMgaW5mb3JtYXRpb25cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICBmaWxsQ29sb3JcbiAgICAgICAgfSA9IFNsZWVwZXJzRmFjdG9yeS5nZXRDYW52YXNJbmZvcm1hdGlvbighdGhpcy5pc1NsZWVwaW5nKTtcblxuICAgICAgICB0aGlzLmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgZmlsbENvbG9yLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnkgdG8gYWN0aXZlIHRoZSBjaGlsZHJlbiBub2Rlc1xuICAgICAqL1xuICAgIGFjdGl2ZUNoaWxkKCkge1xuICAgICAgICBjb25zdCB0ZW1wQWN0aXZlZENoaWxkTGlzdCA9IFtdO1xuXG4gICAgICAgIC8vIEFjdGl2ZSB0aGUgY2hpbGRyZW4gaW4gb3JkZXJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChjaGlsZE9iamVjdCA9PiB7XG4gICAgICAgICAgICAvLyBPbmx5IGxvb2tpbmcgZm9yIHNsZWVwaW5nIG5vZGVcbiAgICAgICAgICAgIGlmICghY2hpbGRPYmplY3QuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgd2VpZ2h0ID0gY2hpbGRPYmplY3QucHJvYmFiaWxpdHk7XG5cbiAgICAgICAgICAgIC8vIENoYW5nZSB0aGUgY2hpbGQgc3RhdHVzIGlmIGFjdGl2ZVxuICAgICAgICAgICAgaWYgKGdldEFjdGl2aXR5QnlXZWlnaHQod2VpZ2h0KSkge1xuICAgICAgICAgICAgICAgIGNoaWxkT2JqZWN0LmNoYW5nZVNsZWVwaW5nU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgdGVtcEFjdGl2ZWRDaGlsZExpc3QucHVzaChjaGlsZE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0ZW1wQWN0aXZlZENoaWxkTGlzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNhbnZhcyBwYXRoXG4gICAgICogQHBhcmFtIHsqfSBjYW52YXNQYXRoT2JqZWN0IGNhbnZhcyBwYXRoIG9iamVjdFxuICAgICAqL1xuICAgIHNldENhbnZhc1BhdGgoYXJncykge1xuICAgICAgICBjb25zdCBbY2FudmFzUGF0aE9iamVjdCwgYW5jaG9yc0xpc3RdID0gYXJncztcbiAgICAgICAgdGhpcy5jYW52YXNQYXRoID0gY2FudmFzUGF0aE9iamVjdDtcblxuICAgICAgICBpZiAoISFhbmNob3JzTGlzdCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXNBbmNob3JzUGF0aExpc3QgPSBhbmNob3JzTGlzdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBzbGVlcGVyIGFjdGl2ZSBzdGF0dXNcbiAgICAgKiBAcGFyYW0geyp9IHNsZWVwZXIgdGhlIGV2ZW50IHJlY2lldmVkIHNsZWVwciBvYmplY3QsIG5vdGUgdGhhdCBpdCBtYXkgYmUgb3RoZXIgc2xlZXBlcnNcbiAgICAgKi9cbiAgICBjaGFuZ2VBY3RpdmVTdGF0dXMoc2xlZXBlcikge1xuICAgICAgICBpZiAoc2xlZXBlciA9PT0gdGhpcyAmJiB0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gU2VsZWN0IHRoaXMgc2xlZXBlciBhbmQgYWN0aXZlIGl0c2VsZlxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHtcbiAgICAgICAgICAgICAgICBpc0FuY2hvcjogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBY3RpdmUgJiYgc2xlZXBlciAhPT0gdGhpcykge1xuICAgICAgICAgICAgLy8gU2VsZWN0IG90aGVyIHNsZWVwZXIgdGhlbiBpbmFjdGl2ZSBpdHNlbGZcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbih7XG4gICAgICAgICAgICAgICAgaXNBbmNob3I6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFNldCBkcmFnIGZsYWdcbiAgICAgICAgaWYoc2xlZXBlciA9PT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hEcmFnU3RhdHVzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXNkcmFnJywgdGhpcy5pc0RyYWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHNsZWVwZXIgZHJhZyBzdGF0dXNcbiAgICAgKi9cbiAgICBzd2l0Y2hEcmFnU3RhdHVzKCkge1xuICAgICAgICB0aGlzLmlzRHJhZyA9ICF0aGlzLmlzRHJhZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgU2xlZXBlciBjYW52YXMgaW5mb3JtYXRpb24gYW5kIHRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydHlPYmplY3RcbiAgICAgKi9cbiAgICBjaGFuZ2VDYW52YXNJbmZvcm1hdGlvbihwcm9wZXJ0eU9iamVjdCkge1xuICAgICAgICAvLyBJdGVyYXRlIHRoZSBhbGVyYXRpb24gYW5kIHVwZGF0ZVxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHByb3BlcnR5T2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbnZhc0luZm9ybWF0aW9uW3Byb3BlcnR5XSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0luZm9ybWF0aW9uW3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIG5vbi1yZWxhdGVkIGZhY3RvciB3aXRoaW4gdGhpcyBzbGVlcGVyIGZvciBwYXN0ZVxuICAgICAqL1xuICAgIHByZXBhcmVGb3JQYXN0ZSgpIHtcbiAgICAgICAgLy8gVE9ETzogTWF5IG5lZWQgdG8gY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiBpdFxuXG4gICAgICAgIC8vIFJlbW92ZSBpdHMgZWRnZXMgYW5kIGluLW91dCBzbGVlcGVyXG4gICAgICAgIHRoaXMuZWRnZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5pbmNvbWluZ0VkZ2VMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRFZGdlTWFwTGlzdCA9IFtdO1xuXG4gICAgICAgIC8vIENoYW5nZSBzdGF0dXNcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNEcmFnID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGl0c2VsZiBcbiAgICAgKi9cbiAgICBkZWxldGVTZWxmKCkge1xuICAgICAgICBTbGVlcGVyUG9vbGVyLnJlbW92ZVNsZWVwZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVjb3ZlciBpdHNlbGZcbiAgICAgKi9cbiAgICByZWNvdmVyU2VsZigpIHtcbiAgICAgICAgU2xlZXBlclBvb2xlci5hZGRTbGVlcGVyKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgU2xlZXBlciB9OyIsImltcG9ydCB7IE1vdXNlQWN0aW9uQ29udHJvbGxlciB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9tb3VzZS9tb3VzZS1hY3Rpb24tY29udHJvbGxlcic7XG5pbXBvcnQgeyBNb3VzZUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9tb3VzZS9tb3VzZS1hY3Rpb24nO1xuaW1wb3J0IHsgS2V5Ym9hcmRBY3Rpb24gfSBmcm9tICcuLi9hY3Rpb24tbGF5ZXIva2V5Ym9hcmQva2V5Ym9hcmQtYWN0aW9uJztcbmltcG9ydCB7IEtleWJvYXJkQWN0aW9uQ29udHJvbGxlciB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9rZXlib2FyZC9rZXlib2FyZC1hY3Rpb24tY29udHJvbGxlcic7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9nbG9iYWwvZ2xvYmFsLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSAnLi9wYWludGVyL3BhaW50ZXInO1xuaW1wb3J0IHsgVW5kb1JlZG8gfSBmcm9tICcuLi8uLi91bmRvLXJlZG8vdW5kby1yZWRvJztcbmltcG9ydCB7IFNsZWVwZXJzRmFjdG9yeSB9IGZyb20gJy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLWZhY3RvcnknO1xuaW1wb3J0IHsgUGFuZWxPcGVyYXRpb25Db250cm9sbGVyIH0gZnJvbSAnLi4vYWN0aW9uLWxheWVyL3BhbmVsL3BhbmVsLW9wZXJhdGlvbi1jb250cm9sbGVyJztcbmltcG9ydCB7IFdha2luZ1Byb2Nlc3NDb250cm9sbGVyIH0gZnJvbSAnLi4vYWN0aW9uLWxheWVyL3dha2luZy1wcm9jZXNzL3dha2luZy1wcm9jZXNzLWNvbnRyb2xsZXInO1xuXG5jbGFzcyBDYW52YXMge1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ2FudmFzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFDYW52YXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgQ2FudmFzLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIENhbnZhcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhbnZhcyBpbnN0YW5jZVxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5pbml0UGFpbnRlcigpO1xuICAgICAgICB0aGlzLmluaXRBY3Rpb25SZWxhdGVkKCk7XG4gICAgICAgIHRoaXMuaW5pdFVuZG9SZWRvU3RhY2soKTtcbiAgICAgICAgdGhpcy5pbml0U2xlZXBlckZhY3RvcnkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhbnZhcyBjb250ZXh0XG4gICAgICovXG4gICAgaW5pdENvbnRleHQoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoR2xvYmFsQ29uZmlnLmNhbnZhc0lkKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIEdsb2JhbENvbmZpZy5wYW5kZWxXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gR2xvYmFsQ29uZmlnLmhlYWRlckhlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhbnZhcyBwYWludGVyXG4gICAgICovXG4gICAgaW5pdFBhaW50ZXIoKSB7XG4gICAgICAgIHRoaXMucGFpbnRlciA9IG5ldyBQYWludGVyKHRoaXMuY2FudmFzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhbnZhcyBhY3Rpb24gcmVsYXRlZFxuICAgICAqL1xuICAgIGluaXRBY3Rpb25SZWxhdGVkKCkge1xuICAgICAgICB0aGlzLm1vdXNlQWN0aW9uQ29udHJvbGxlciA9IG5ldyBNb3VzZUFjdGlvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy5tb3VzZUFjdGlvbiA9IG5ldyBNb3VzZUFjdGlvbih0aGlzLmNhbnZhcyk7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpb25Db250cm9sbGVyID0gbmV3IEtleWJvYXJkQWN0aW9uQ29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLmtleWJvYXJkQWN0aW9uID0gbmV3IEtleWJvYXJkQWN0aW9uKHRoaXMuY2FudmFzLCB0aGlzLm1vdXNlQWN0aW9uKTtcbiAgICAgICAgdGhpcy5wYW5lbE9wZXJhdGlvbkNvbnRyb2xsZXIgPSBuZXcgUGFuZWxPcGVyYXRpb25Db250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMud2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIgPSBuZXcgV2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IFVuZG9SZWRvU3RhY2tcbiAgICAgKi9cbiAgICBpbml0VW5kb1JlZG9TdGFjaygpIHtcbiAgICAgICAgVW5kb1JlZG8uZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHNsZWVwZXIgZmFjdG9yeVxuICAgICAqL1xuICAgIGluaXRTbGVlcGVyRmFjdG9yeSgpIHtcbiAgICAgICAgU2xlZXBlcnNGYWN0b3J5Lm1vdW50Q2FudmFzKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ2FudmFzIH07IiwiZXhwb3J0IGNvbnN0IERlYWZ1bHRBbmNob3JTZXR0aW5nID0ge1xuICAgIGxpbmVXaWR0aDogMixcbiAgICBsaW5lQ29sb3I6ICdibGFjaycsXG4gICAgYW5jaG9yUmFkaXVzOiA0LFxufTtcblxuZXhwb3J0IGNvbnN0IERlYWZ1bHRBcnJvd1NldHRpbmcgPSB7XG4gICAgaGVhZExlbmd0aDogMTAsXG4gICAgbGluZVdpZHRoOiAyLFxuICAgIGxpbmVDb2xvcjogJ2JsYWNrJyxcbn07XG5cbmV4cG9ydCBjb25zdCBBY3RpdmVBcnJvd1NldHRpbmcgPSB7XG4gICAgbGluZVdpZHRoOiAzLCBcbiAgICBsaW5lQ29sb3I6ICcjMDA2OEZGJyxcbn07XG5cbmV4cG9ydCBjb25zdCBEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZyA9IHtcbiAgICBsaW5lV2lkdGg6IDIsXG4gICAgbGluZUNvbG9yOiAnIzMzNjZGRicsXG59ICIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBQYWludGVyRXZlbnROYW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IFxuICAgIERlYWZ1bHRBbmNob3JTZXR0aW5nLFxuICAgIERlYWZ1bHRBcnJvd1NldHRpbmcsXG4gICAgRGVhZmF1bHRCb3VuZGluZ0JveFNldHRpbmcsXG4gICAgQWN0aXZlQXJyb3dTZXR0aW5nLFxufSBmcm9tICcuL2NvbmZpZyc7XG5cbmNsYXNzIEZpZ3VyZVBhaW50ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY2FudmFzQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gY2FudmFzQ29udGV4dDtcbiAgICAgICAgdGhpcy5kcmF3TWFwID0ge1xuICAgICAgICAgICAgJ2NpcmNsZSc6IHRoaXMuZHJhd0NpcmNsZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2Fycm93JzogdGhpcy5kcmF3QXJyb3cuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICd0ZXh0YXJlYSc6IHRoaXMuZHJhd1RleHRhcmVhLmJpbmQodGhpcyksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBQYWludGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFBhaW50ZXJFdmVudE5hbWUuZmlndXJlRHJhdywgdGhpcy5kcmF3LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIGNvcnJlc3BvbmQgaW1hZ2VzIGdpdmVuIHJlbGF0ZWQgaW5mb3JtYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IHBhcmFtcyBcbiAgICAgKiBAcmV0dXJucyB7Kn0gY2FudmFzIHBhdGhcbiAgICAgKi9cbiAgICBkcmF3KHBhcmFtcywgc2V0UGF0aENhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHsgZHJhd1R5cGUgfSA9IHBhcmFtcztcblxuICAgICAgICAvLyBSYWlzZSB0aGUgZXJyb3IgaWYgdGhlIHNoYXBlIG5vdCBpbmNsdWRlZCBcbiAgICAgICAgaWYgKCEoZHJhd1R5cGUgaW4gdGhpcy5kcmF3TWFwKSkge1xuICAgICAgICAgICAgcmV0dXJuIEVycm9yKCdGaWd1cmUgRHJhdyBFcnJvcjogR2l2ZW4gdHlwZSBub3QgZm91bmQhJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIERyYXcgdGhlIGNvcnJlc3BvbmQgc2hhcGUgYW5kIHNldCB0aGUgcGF0aCB0byB0aGUgc2xlZXBlclxuICAgICAgICBzZXRQYXRoQ2FsbGJhY2sodGhpcy5kcmF3TWFwW2RyYXdUeXBlXShwYXJhbXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3IGNpcmxlIG9uIGNhbnZhc1xuICAgICAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGRyYXdDaXJjbGUocGFyYW1zKSB7XG4gICAgICAgIC8vIEV4dHJhY3QgdGhlIGRyYXdpbmcgcGFyYW1ldGVyc1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgIGlzRmlsbGVkLFxuICAgICAgICAgICAgaXNCb3JkZXIsXG4gICAgICAgICAgICBib3JkZXJXaXRoLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICBpc0FuY2hvcixcbiAgICAgICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yLFxuICAgICAgICB9ID0gcGFyYW1zO1xuXG4gICAgICAgIC8vIERyYXcgdGhlIGNpcmNsZVxuICAgICAgICBjb25zdCBjaXJjbGUgPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgIGNpcmNsZS5hcmMoXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEZpbGwgdGhlIGNpcmNsZVxuICAgICAgICBjb25zdCBmaWxsQ29sb3IgPSBwYXJhbXNbJ2ZpbGxDb2xvciddO1xuICAgICAgICBpZiAoaXNGaWxsZWQgJiYgZmlsbENvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZpbGwoY2lyY2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERyYXcgdGhlIGJvcmRlclxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhIShcbiAgICAgICAgICAgICAgICBpc0JvcmRlclxuICAgICAgICAgICAgICAgICYmIGJvcmRlcldpdGhcbiAgICAgICAgICAgICAgICAmJiBib3JkZXJDb2xvclxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5saW5lV2lkdGggPSBib3JkZXJXaXRoO1xuICAgICAgICAgICAgaWYgKGlzQW5jaG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gYWN0aXZlQm9yZGVyQ29sb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlKGNpcmNsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEcmF3IHRoZSBhbmNob3JcbiAgICAgICAgY29uc3QgYW5jaG9yc1BhdGhMaXN0ID0gW107XG4gICAgICAgIGlmIChpc0FuY2hvcikge1xuICAgICAgICAgICAgLy8gU2V0IHN0cm9rZSBzdHlsZVxuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmxpbmVXaWR0aCA9IERlYWZ1bHRBbmNob3JTZXR0aW5nLmxpbmVXaWR0aDtcblxuICAgICAgICAgICAgY29uc3QgYW5jaG9yUG9zaXRpb25MaXN0ID0gW1xuICAgICAgICAgICAgICAgIHt4OiB4ICsgcmFkaXVzLCB5OiB5fSxcbiAgICAgICAgICAgICAgICB7eDogeCAtIHJhZGl1cywgeTogeX0sXG4gICAgICAgICAgICAgICAge3g6IHgsIHk6IHkgKyByYWRpdXN9LFxuICAgICAgICAgICAgICAgIHt4OiB4LCB5OiB5IC0gcmFkaXVzfSxcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgYW5jaG9yUG9zaXRpb24gb2YgYW5jaG9yUG9zaXRpb25MaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gRGVhZnVsdEFuY2hvclNldHRpbmcubGluZUNvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnN0IHt4ICx5fSA9IGFuY2hvclBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuY2hvclBhdGggPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgICAgICAgICAgYW5jaG9yUGF0aC5hcmMoXG4gICAgICAgICAgICAgICAgICAgIHgsIFxuICAgICAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgICAgICBEZWFmdWx0QW5jaG9yU2V0dGluZy5hbmNob3JSYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZShhbmNob3JQYXRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbChhbmNob3JQYXRoKTtcbiAgICAgICAgICAgICAgICBhbmNob3JzUGF0aExpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvclBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2NpcmNsZSwgYW5jaG9yc1BhdGhMaXN0XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3IGFycm93IG9uIGNhbnZhc1xuICAgICAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICAgICAqL1xuICAgIGRyYXdBcnJvdyhwYXJhbXMpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHN0YXJ0TG9jYXRpb24sXG4gICAgICAgICAgICBlbmRMb2NhdGlvbixcbiAgICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICB9ID0gcGFyYW1zO1xuXG4gICAgICAgIC8vIElmIG9ubHkgb25lIGxvY2F0aW9uIHByb3ZpZGVkLCB0aGVuIHNldCB0aGUgb3RoZXIgdGhlIHNhbWVcbiAgICAgICAgaWYoIXN0YXJ0TG9jYXRpb24pIHtcbiAgICAgICAgICAgIHN0YXJ0TG9jYXRpb24gPSBlbmRMb2NhdGlvbjtcbiAgICAgICAgfSBlbHNlIGlmICghZW5kTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGVuZExvY2F0aW9uID0gc3RhcnRMb2NhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnkgLSBzdGFydExvY2F0aW9uLnksIFxuICAgICAgICAgICAgZW5kTG9jYXRpb24ueCAtIHN0YXJ0TG9jYXRpb24ueFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFNldCBzdHJva2Ugc3R5bGVcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gaXNBY3RpdmUgPyBcbiAgICAgICAgICAgIEFjdGl2ZUFycm93U2V0dGluZy5saW5lQ29sb3IgOlxuICAgICAgICAgICAgRGVhZnVsdEFycm93U2V0dGluZy5saW5lQ29sb3I7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5saW5lV2lkdGggPSBpc0FjdGl2ZSA/IFxuICAgICAgICAgICAgQWN0aXZlQXJyb3dTZXR0aW5nLmxpbmVXaWR0aCA6XG4gICAgICAgICAgICBEZWFmdWx0QXJyb3dTZXR0aW5nLmxpbmVXaWR0aDtcblxuICAgICAgICBjb25zdCBsaW5lID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICBjb25zdCBoZWFkID0gbmV3IFBhdGgyRCgpO1xuXG4gICAgICAgIC8vIERyYXcgdGhlIGxpbmUgXG4gICAgICAgIGxpbmUubW92ZVRvKHN0YXJ0TG9jYXRpb24ueCwgc3RhcnRMb2NhdGlvbi55KTtcbiAgICAgICAgbGluZS5saW5lVG8oZW5kTG9jYXRpb24ueCwgZW5kTG9jYXRpb24ueSk7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2UobGluZSk7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgaGVhZFxuICAgICAgICBoZWFkLm1vdmVUbyhcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnggLSBEZWFmdWx0QXJyb3dTZXR0aW5nLmhlYWRMZW5ndGggKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSxcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnkgLSBEZWFmdWx0QXJyb3dTZXR0aW5nLmhlYWRMZW5ndGggKiBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyA2KVxuICAgICAgICApO1xuICAgICAgICBoZWFkLmxpbmVUbyhlbmRMb2NhdGlvbi54LCBlbmRMb2NhdGlvbi55KTtcbiAgICAgICAgaGVhZC5saW5lVG8oXG4gICAgICAgICAgICBlbmRMb2NhdGlvbi54IC0gRGVhZnVsdEFycm93U2V0dGluZy5oZWFkTGVuZ3RoICogTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJIC8gNiksXG4gICAgICAgICAgICBlbmRMb2NhdGlvbi55IC0gRGVhZnVsdEFycm93U2V0dGluZy5oZWFkTGVuZ3RoICogTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJIC8gNilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZShoZWFkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7bGluZSwgaGVhZH07XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIHRleHRhcmVhXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gICAgICovXG4gICAgZHJhd1RleHRhcmVhKHBhcmFtcykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBzbGVlcGVyUG9zaXRpb24sXG4gICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uLFxuICAgICAgICB9ID0gcGFyYW1zO1xuXG4gICAgICAgIGNvbnN0IGJvdW5kaW5nQm94UGF0aCA9IG5ldyBQYXRoMkQoKTtcblxuICAgICAgICBib3VuZGluZ0JveFBhdGgucmVjdChcbiAgICAgICAgICAgIHNsZWVwZXJQb3NpdGlvbi54IC0gdGV4dGFyZWFJbmZvcm1hdGlvbi53aWR0aCAvIDIsXG4gICAgICAgICAgICBzbGVlcGVyUG9zaXRpb24ueSAtIHRleHRhcmVhSW5mb3JtYXRpb24uaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHRleHRhcmVhSW5mb3JtYXRpb24ud2lkdGgsXG4gICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uLmhlaWdodCxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQubGluZVdpZHRoID0gRGVhZmF1bHRCb3VuZGluZ0JveFNldHRpbmcubGluZVdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZy5saW5lQ29sb3I7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2UoYm91bmRpbmdCb3hQYXRoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBib3VuZGluZ0JveFBhdGg7XG4gICAgfVxufVxuXG5leHBvcnQgeyBGaWd1cmVQYWludGVyIH07IiwiaW1wb3J0IHsgRmlndXJlUGFpbnRlciB9IGZyb20gJy4vZmlndXJlL3BhaW50ZXInO1xuaW1wb3J0IHsgVGV4dFBhaW50ZXIgfSBmcm9tICcuL3RleHQvcGFpbnRlcic7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXBvb2wnO1xuaW1wb3J0IHsgRWRnZVBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLXBvb2wnO1xuaW1wb3J0IHsgUGFpbnRlckV2ZW50TmFtZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbmNsYXNzIFBhaW50ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAvLyBJbml0IGRpZmZlcmVudCBwYWludGVyXG4gICAgICAgIHRoaXMuaW5pdFBhaW50ZXIoKTtcblxuICAgICAgICAvLyBJbml0IGV2ZW50ZXIgaGFuZGxlclxuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBldmVudCBoYW5kbGVyIHJlbGF0ZWQgdG8gUGFpbnRlclxuICAgICAqL1xuICAgIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsIHRoaXMucmVwYWludC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBpbml0UGFpbnRlcigpIHtcbiAgICAgICAgdGhpcy5maWd1cmUgPSBuZXcgRmlndXJlUGFpbnRlcih0aGlzLmNhbnZhcywgdGhpcy5jYW52YXNDb250ZXh0KTtcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IFRleHRQYWludGVyKHRoaXMuY2FudmFzLCB0aGlzLmNhbnZhc0NvbnRleHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGFpbnQgYWxsIGNhbnZhcyBvYmplY3RcbiAgICAgKi9cbiAgICByZXBhaW50KCkge1xuICAgICAgICAvLyBDbGVhbiB0aGUgY2FudmFzXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0byBkcmF3IHRoZSBzbGVlcGVyXG4gICAgICAgIGZvciAoY29uc3Qgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IE1ha2UgaXQgYXMgYSBmdW5jdGlvbiBvZiBzbGVlcGVyXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LFxuICAgICAgICAgICAgICAgIHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24sXG4gICAgICAgICAgICAgICAgc2xlZXBlci5zZXRDYW52YXNQYXRoLmJpbmQoc2xlZXBlcilcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIFJld3JpdGUgdGhlIHRleHRcbiAgICAgICAgICAgIHNsZWVwZXIuZHJhd1RleHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEl0ZXJhdGUgdG8gZHJhdyB0aGUgZWRnZVxuICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgRWRnZVBvb2xlci5wb29sKSB7XG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZHJhd1R5cGU6ICdhcnJvdycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0TG9jYXRpb246IGVkZ2Uuc3RhcnRMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZW5kTG9jYXRpb246IGVkZ2UuZW5kTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBlZGdlLmlzQWN0aXZlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRnZS5zZXRDYW52YXNQYXRoLmJpbmQoZWRnZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IFBhaW50ZXIgfTsiLCJpbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgUGFpbnRlckV2ZW50TmFtZSB9IGZyb20gJy4uLy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbmNsYXNzIFRleHRQYWludGVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNhbnZhc0NvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dCA9IGNhbnZhc0NvbnRleHQ7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBQYWludGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFBhaW50ZXJFdmVudE5hbWUudGV4dFdyaXRlLCB0aGlzLndyaXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlIHRoZSB0ZXh0IGZvbGxvdyB0aGUgcGFyYW1zIGdpdmVuXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gICAgICogQHBhcmFtIHsqfSBzZXRQYXRoQ2FsbGJhY2sgXG4gICAgICovXG4gICAgd3JpdGUocGFyYW1zLCBzZXRUZXh0YXJlYUNhbGxiYWNrKSB7XG4gICAgICAgIC8vIFBhcnNlIGNvbmZpZ3VyYXRpb25zXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgbWF4V2lkdGgsXG4gICAgICAgICAgICBpbmZvcm1hdGlvbixcbiAgICAgICAgfSA9IHBhcmFtcztcblxuICAgICAgICAvLyBHZXQgc2l6ZVxuICAgICAgICBsZXQgc2l6ZSA9IGluZm9ybWF0aW9uLnNpemUgfHwgJzEyJztcbiAgICAgICAgc2l6ZSArPSAncHgnXG5cbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZvbnQgPSBgJHtzaXplfSAke2luZm9ybWF0aW9uLnN0eWxlfWA7XG4gICAgICAgIFxuICAgICAgICAvLyBQcmVwYXJlIHdyaXRpbmcgdGV4dCBwYXJhbXNcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZpbGxTdHlsZSA9IGluZm9ybWF0aW9uLmNvbG9yO1xuICAgICAgICBjb25zdCBmaWxsSW5mbyA9IHRoaXMuX2dldEZpbGxMaXN0KHBvc2l0aW9uLCBpbmZvcm1hdGlvbi5jb250ZW50LCBtYXhXaWR0aCk7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbGxMaXN0LFxuICAgICAgICAgICAgdGV4dGFyZWFJbmZvcm1hdGlvbixcbiAgICAgICAgfSA9IGZpbGxJbmZvO1xuXG4gICAgICAgIC8vIFNldCBjYWxsYmFjayB0byBkcmF3IHRoZSB0ZXh0YXJlYSBmaXJzdFxuICAgICAgICBzZXRUZXh0YXJlYUNhbGxiYWNrKHRleHRhcmVhSW5mb3JtYXRpb24sICd0ZXh0YXJlYScpO1xuICAgICAgICBcbiAgICAgICAgLy8gV3JpdGUgdGV4dFxuICAgICAgICBmb3IgKGxldCB0ZXh0IG9mIGZpbGxMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFRleHQodGV4dFswXSwgdGV4dFsxXSwgdGV4dFsyXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZmlsbCBsaXN0IGZvciBzaW5nbGUgLyBtdWx0aXBsZSBsaW5lc1xuICAgICAqIEBwYXJhbSB7Kn0gcG9zaXRpb24gc2xlZXBlciBjZW50ZXJcbiAgICAgKiBAcGFyYW0geyp9IGNvbnRlbnQgdGV4dCBjb250ZW50XG4gICAgICogQHBhcmFtIHsqfSBtYXhXaWR0aCBwcmVkZWZpbmVkIG1heGltYWwgd2lkdGhcbiAgICAgKiBAcmV0dXJucyBmaWxsaW5nIGxpc3QgYW5kIHRleHRhcmVhIGluZm9ybWF0aW9uXG4gICAgICovXG4gICAgX2dldEZpbGxMaXN0KHBvc2l0aW9uLCBjb250ZW50LCBtYXhXaWR0aCkgeyAgICAgXG4gICAgICAgIGxldCBtZXRyaWNzID0gdGhpcy5jYW52YXNDb250ZXh0Lm1lYXN1cmVUZXh0KGNvbnRlbnQpO1xuICAgICAgICBsZXQgZmlsbExpc3QgPSBbXVxuXG4gICAgICAgIGlmIChtZXRyaWNzLndpZHRoIDwgbWF4V2lkdGgpIHtcbiAgICAgICAgICAgIC8vIEdldCB0ZXh0IGxvY2F0aW9uIGluZm9ybWF0aW9uXG4gICAgICAgICAgICBsZXQgeCA9IHBvc2l0aW9uLnggLSBtZXRyaWNzLndpZHRoIC8gMjtcbiAgICAgICAgICAgIGxldCB5ID0gcG9zaXRpb24ueSArIChtZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94QXNjZW50ICsgbWV0cmljcy5hY3R1YWxCb3VuZGluZ0JveERlc2NlbnQpIC8gMjtcblxuICAgICAgICAgICAgLy8gR2V0IHRleHRhcmVhIGxvY2F0aW9uIGluZm9ybWF0aW9uXG4gICAgICAgICAgICBsZXQgdGV4dGFyZWFJbmZvcm1hdGlvbiA9ICB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG1heFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogKG1ldHJpY3MuZm9udEJvdW5kaW5nQm94QXNjZW50ICsgbWV0cmljcy5mb250Qm91bmRpbmdCb3hEZXNjZW50KSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZpbGxMaXN0LnB1c2goW2NvbnRlbnQsIHgsIHldKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmlsbExpc3QsXG4gICAgICAgICAgICAgICAgdGV4dGFyZWFJbmZvcm1hdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBGb3IgbXVsdGlwbGUgbGluZXNcbiAgICAgICAgcmV0dXJuIGZpbGxMaXN0O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVGV4dFBhaW50ZXIgfTsiLCJleHBvcnQgY29uc3QgU2xlZXBlckV2ZW50TmFtZSA9IHtcbiAgICBhY3RpdmVTb21lU2xlZXBlcjogJ2FjdGl2ZVNvbWVTbGVlcGVyJyxcbiAgICBhY3RpdmVTb21lU2xlZXBlclRleHRNb2RlOiAnYWN0aXZlU29tZVNsZWVwZXJUZXh0TW9kZScsXG59O1xuXG5leHBvcnQgY29uc3QgRWRnZUV2ZW50TmFtZSA9IHtcbiAgICBhY3RpdmVTb21lRWRnZTogJ2FjdGl2ZVNvbWVFZGdlJyxcbn1cblxuZXhwb3J0IGNvbnN0IFNsZWVwZXJQb29sRXZlbnROYW1lID0ge1xuICAgIGFkZFNsZWVwZXI6ICdhZGRTbGVlcGVyJyxcbn07XG5cbmV4cG9ydCBjb25zdCBFZGdlUG9vbEV2ZW50TmFtZSA9IHtcbiAgICBhZGRFZGdlOiAnYWRkRWRnZScsXG59O1xuXG5leHBvcnQgY29uc3QgUGFpbnRlckV2ZW50TmFtZSA9IHtcbiAgICBmaWd1cmVEcmF3OiAnZmlndXJlRHJhdycsXG4gICAgdGV4dFdyaXRlOiAndGV4dFdyaXRlJyxcbiAgICByZXBhaW50OiAncmVwYWludCcsXG59O1xuXG5leHBvcnQgY29uc3QgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZSA9IHtcbiAgICBtb3VzZURvd25TbGVlcGVyOiAnbW91c2VEb3duU2xlZXBlcicsXG4gICAgbW91c2VEb3duTGluZTogJ21vdXNlRG93bkxpbmUnLFxuICAgIG1vdXNlRG93bkJhY2tncm91bmQ6ICdtb3VzZURvd25CYWNrZ3JvdW5kJyxcbiAgICBtb3VzZU1vdmVTbGVlcGVyOiAnbW91c2VNb3ZlJyxcbiAgICBtb3VzZU1vdmVBbmNob3I6ICdtb3VzZU1vdmVBbmNob3InLFxuICAgIG1vdXNlTW92ZUhlYWQ6ICdtb3VzZU1vdmVIZWFkJyxcbiAgICBtb3VzZVVwU2xlZXBlcjogJ21vdXNlVXBTbGVlcGVyJyxcbiAgICBtb3VzZVVwQW5jaG9yOiAnbW91c2VVcEFuY2hvcicsXG4gICAgbW91c2VVcEhlYWQ6ICdtb3VzZVVwSGVhZCcsXG4gICAgbW91c2VEb3VibGVDbGljazogJ21vdXNlRG91YmxlQ2xpY2snLFxuICAgIG1vdXNlUmlnaHRDbGljazogJ21vdXNlUmlnaHRDbGljaycsXG4gICAga2V5Ym9hcmREZWxldGU6ICdrZXlib2FyZERlbGV0ZScsXG4gICAga2V5Ym9hcmRDb3B5OiAna2V5Ym9hcmRDb3B5JyxcbiAgICBrZXlib2FyZFBhc3RlOiAna2V5Ym9hcmRQYXN0ZScsXG4gICAga2V5Ym9hcmRUZXh0RGVsZXRlOiAna2V5Ym9hcmRUZXh0RGVsZXRlJyxcbiAgICBrZXlib2FyZElucHV0OiAna2V5Ym9hcmRJbnB1dCcsXG4gICAga2V5Ym9hcmRUZXh0UmVkbzogJ2tleWJvYXJkVGV4dFJlZG8nLFxuICAgIGtleWJvYXJkVGV4dFVuZG86ICdrZXlib2FyZFRleHRVbmRvJyxcbn07XG5cbmV4cG9ydCBjb25zdCBQYW5lbE9wZWFyYXRpb25Db250cm9sbGVyRXZlbnROYW1lID0ge1xuICAgIGNsb3NlQ29sb3JQaWNrZXI6ICdjbG9zZUNvbG9yUGlja2VyJyxcbiAgICBjcmVhdGVOb2RlOiAnY3JlYXRlTm9kZScsXG4gICAgcGFuZWxDcmVhdGVOb2RlOiAncGFuZWxDcmVhdGVOb2RlJyxcbiAgICBjaGFuZ2VOb2RlU3R5bGU6ICdjaGFuZ2VOb2RlU3R5bGUnLFxuICAgIGNoYW5nZUFsbFByb2JhYmlsaXR5OiAnY2hhbmdlQWxsUHJvYmFiaWxpdHknLFxuICAgIHN0YXJ0V2FraW5nUHJvY2VzczogJ3N0YXJ0V2FraW5nUHJvY2VzcycsXG4gICAgcGF1c2VXYWtpbmdQcm9jZXNzOiAncGF1c2VXYWtpbmdQcm9jZXNzJyxcbiAgICBlbmRXYWtpbmdQcm9jZXNzOiAnZW5kV2FraW5nUHJvY2VzcycsXG4gICAgcmVzZXRTbGVlcGVyczogJ3Jlc2V0U2xlZXBlcnMnLFxuICAgIHBhbmVsQWN0aXZlOiAncGFuZWxBY3RpdmUnLFxufTtcblxuZXhwb3J0IGNvbnN0IFVuZG9SZWRvRXZlbnROYW1lID0ge1xuICAgIGFkZE11dGF0aW9uOiAnYWRkTXV0YXRpb24nLFxuICAgIHVuZG86ICd1bmRvJyxcbiAgICByZWRvOiAncmVkbycsXG59O1xuXG5leHBvcnQgY29uc3QgU3VtbWFyeUV2ZW50TmFtZSA9IHtcbiAgICBkcmF3U2hhcmU6ICdkcmF3U2hhcmUnLFxuICAgIGdldFNoYXJlQ29sb3I6ICdnZXRTaGFyZUNvbG9yJyxcbiAgICB1cGRhdGVTaGFyZUNvbG9yOiAndXBkYXRlU2hhcmVDb2xvcicsXG4gICAgdXBkYXRlRGV0YWlsOiAndXBkYXRlRGV0YWlsJyxcbn0iLCJleHBvcnQgY29uc3QgR2xvYmFsQ29uZmlnID0ge1xuICAgIGNhbnZhc0lkOiAnbXlDYW52YXMnLFxuICAgIGhlYWRlckhlaWdodDogNjYsXG4gICAgcGFuZGVsV2lkdGg6IDMwMCxcbn07XG5cbmV4cG9ydCBjb25zdCBFeGNsdWRlS2V5RXZlbnRJZCA9IHtcbiAgICAncGFuZWxDYXNjYWRlUHJvYmFiaWxpdCc6ICdwYW5lbENhc2NhZGVQcm9iYWJpbGl0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBFeGNsdWRlQ2xpY2tDbGFzc05hbWUgPSB7XG4gICAgJ3NhdHVyYXRpb24tYmxhY2snOiAnc2F0dXJhdGlvbi1ibGFjaycsXG4gICAgJ2h1ZS1ob3Jpem9udGFsJzogJ2h1ZS1ob3Jpem9udGFsJyxcbn07IiwiZXhwb3J0IGNvbnN0IFNhdmVkT3BlcmF0aW9uID0ge1xuICAgIG1vdmVTbGVlcGVyOiAnbW92ZVNsZWVwZXInLFxuICAgIGFkZEVkZ2VGcm9tQW5jaG9yOiAnYWRkRWRnZUZyb21BbmNob3InLFxuICAgIG1vdmVIZWFkOiAnbW92ZUhlYWQnLFxuICAgIGRlbGV0ZTogJ2RlbGV0ZScsXG4gICAgcGFzdGU6ICdwYXN0ZScsXG4gICAgY3JlYXRlU2xlZXBlcjogJ2NyZWF0ZVNsZWVwZXInLFxufTsiLCJpbXBvcnQgeyBTYXZlZE9wZXJhdGlvbiB9IGZyb20gJy4vb3BlcmF0aW9uJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBQYWludGVyRXZlbnROYW1lIH0gZnJvbSAnLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IFNsZWVwZXIgfSBmcm9tICcuLi9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyJztcblxuLyoqXG4gKiBSZWRvIGNvbnRyb2xsZXIgdG8gYWN0dWFsbHkgZGVhbCB3aXRoIHRoZSByZWRvaW5nIHRoZSB0YXNrc1xuICogQHBhcmFtIHsqfSB0YXNrIFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZWRvQ29udHJvbGxlcih0YXNrKSB7XG4gICAgY29uc3Qge1xuICAgICAgICBvYmplY3QsXG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgIH0gPSB0YXNrO1xuXG4gICAgc3dpdGNoKG9wZXJhdGlvbikge1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5tb3ZlU2xlZXBlcik6XG4gICAgICAgICAgICByZWRvTW92ZVNsZWVwZXIob2JqZWN0LCBwYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLmFkZEVkZ2VGcm9tQW5jaG9yKTpcbiAgICAgICAgICAgIHJlZG9Nb3ZlQW5jaG9yKG9iamVjdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5tb3ZlSGVhZCk6XG4gICAgICAgICAgICByZWRvTW92ZUhlYWQob2JqZWN0LCBwYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFNhdmVkT3BlcmF0aW9uLmRlbGV0ZSk6XG4gICAgICAgICAgICByZWRvRGVsZXRlSXRlbXMob2JqZWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5wYXN0ZSk6XG4gICAgICAgICAgICByZWRvUGFzdGUob2JqZWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5jcmVhdGVTbGVlcGVyKTpcbiAgICAgICAgICAgIHJlZG9DcmVhdGVTbGVlcGVyKG9iamVjdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgKTtcbn1cblxuXG4vKipcbiAqIFJlZG8gbW92ZSBzbGVlcGVyIG9wZXJhdGlvblxuICogQHBhcmFtIHsqfSBvYmplY3QgUmVjaWV2ZWQgY3VycmVudCBzbGVlcGVyIG5vZGVcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIG9wZXJhdGlvbiBwYXJhbWV0ZXJzXG4gKi9cbmZ1bmN0aW9uIHJlZG9Nb3ZlU2xlZXBlcihvYmplY3QsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gb2JqZWN0LmNhbnZhc0luZm9ybWF0aW9uXG4gICAgY29uc3QgeyBjaGFuZ2VMb2NhdGlvbiB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IHJlY292ZXJMb2NhdGlvbiA9IHtcbiAgICAgICAgeDogeCArIGNoYW5nZUxvY2F0aW9uLngsXG4gICAgICAgIHk6IHkgKyBjaGFuZ2VMb2NhdGlvbi55LFxuICAgIH1cblxuICAgIC8vIENoYW5nZSBzbGVlcGVyIGNhbnZhcyBsb2NhdGlvblxuICAgIG9iamVjdC5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbihyZWNvdmVyTG9jYXRpb24pO1xuXG4gICAgLy8gQ2hhbmdlIHRoZSBjb25uZWN0ZWQgb3V0Y29taW5nIGVkZ2VzJyBsb2NhdGlvblxuICAgIGZvciAoY29uc3QgZWRnZSBvZiBvYmplY3QuZWRnZUxpc3QpIHtcbiAgICAgICAgY29uc3QgZWRnZVJlY292ZXJMb2NhdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGVkZ2Uuc3RhcnRMb2NhdGlvbi54ICsgY2hhbmdlTG9jYXRpb24ueCxcbiAgICAgICAgICAgIHk6IGVkZ2Uuc3RhcnRMb2NhdGlvbi55ICsgY2hhbmdlTG9jYXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICBlZGdlLnNldExvY2F0aW9uKFxuICAgICAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgICAgIGVkZ2VSZWNvdmVyTG9jYXRpb24sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBpbmNvbWluZyBlZGdlcycgbG9jYXRpb25cbiAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygb2JqZWN0LmluY29taW5nRWRnZUxpc3QpIHtcbiAgICAgICAgY29uc3QgZWRnZVJlY292ZXJMb2NhdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGVkZ2UuZW5kTG9jYXRpb24ueCArIGNoYW5nZUxvY2F0aW9uLngsXG4gICAgICAgICAgICB5OiBlZGdlLmVuZExvY2F0aW9uLnkgKyBjaGFuZ2VMb2NhdGlvbi55LFxuICAgICAgICB9O1xuXG4gICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oXG4gICAgICAgICAgICAnZW5kJyxcbiAgICAgICAgICAgIGVkZ2VSZWNvdmVyTG9jYXRpb24sXG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlZG8gbW92ZSBhbmNob3Igb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBSZWNpZXZlZCBlZGdlIG9iamVjdFxuICogQHBhcmFtIHsqfSBwYXJhbXMgdGhlIHNsZWVwZXIgbm9kZSB3aGVyZSB0aGUgZWRnZSBzdGFydFxuICovXG5mdW5jdGlvbiByZWRvTW92ZUFuY2hvcihvYmplY3QsIHBhcmFtcykge1xuICAgIC8vIFJlbW92ZSB0aGUgZWRnZSBjcmVhdGVkXG4gICAgb2JqZWN0LnJlY292ZXJTZWxmKCk7XG59XG5cbi8qKlxuICogVW5kbyBtb3ZlIGhlYWQgb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICovXG5mdW5jdGlvbiByZWRvTW92ZUhlYWQob2JqZWN0LCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IGNoYW5nZUVuZExvY2F0aW9uIH0gPSBwYXJhbXM7XG5cbiAgICAvLyBSZWNvdmVyIGVnZGUgZW5kIGxvY2F0aW9uXG4gICAgY29uc3QgcmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICB4OiBvYmplY3QuZW5kTG9jYXRpb24ueCArIGNoYW5nZUVuZExvY2F0aW9uLngsXG4gICAgICAgIHk6IG9iamVjdC5lbmRMb2NhdGlvbi55ICsgY2hhbmdlRW5kTG9jYXRpb24ueSxcbiAgICB9O1xuXG4gICAgb2JqZWN0LnNldExvY2F0aW9uKFxuICAgICAgICAnZW5kJyxcbiAgICAgICAgcmVjb3ZlckxvY2F0aW9uLFxuICAgICk7XG5cbiAgICAvLyBSZWNvdmVyIGFkZGVkIGVuZCBzbGVlcGVyIGlmIG5lZWRlZFxuICAgIGlmICghIXBhcmFtc1snYWRkZWRFbmRTbGVlcGVyJ10pIHtcbiAgICAgICAgcGFyYW1zWydhZGRlZEVuZFNsZWVwZXInXS5hZGRJbmNvbWluZ0VkZ2Uob2JqZWN0KTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVkbyBkZWxldGUgdGhlIGNsaWNrZWQgb2JqZWN0XG4gKiBAcGFyYW0geyp9IG9iamVjdCBEZWxldGVkIG9iamVjdFxuICovXG5mdW5jdGlvbiByZWRvRGVsZXRlSXRlbXMob2JqZWN0KSB7XG4gICAgb2JqZWN0LmRlbGV0ZVNlbGYoKTtcbn1cblxuLyoqXG4gKiBSZWRvIHBhc3RlIHRoZSBpdGVtXG4gKi9cbmZ1bmN0aW9uIHJlZG9QYXN0ZShvYmplY3QpIHtcbiAgICBmb3IgKGxldCBpdGVtIG9mIG9iamVjdCkge1xuICAgICAgICAvLyBUT0RPOiBPbmx5IHN1cHBvcnQgc2xlZXBlciBub3dcbiAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBTbGVlcGVyKSB7XG4gICAgICAgICAgICBpdGVtLnJlY292ZXJTZWxmKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogUmVkbyBjcmVhdGUgdGhlIHNsZWVwZXJcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFxuICovXG5mdW5jdGlvbiByZWRvQ3JlYXRlU2xlZXBlcihvYmplY3QpIHtcbiAgICBvYmplY3QucmVjb3ZlclNlbGYoKTtcbn1cblxuIiwiaW1wb3J0IHsgU2F2ZWRPcGVyYXRpb24gfSBmcm9tICcuL29wZXJhdGlvbic7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgUGFpbnRlckV2ZW50TmFtZSB9IGZyb20gJy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vY29yZS9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlcic7XG5cbi8qKlxuICogVW5kbyBjb250cm9sbGVyIHRvIGFjdHVhbGx5IGRlYWwgd2l0aCB0aGUgdW5kb2luZyB0aGUgdGFza3NcbiAqIEBwYXJhbSB7Kn0gdGFzayBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuZG9Db250cm9sbGVyKHRhc2spIHtcbiAgICBjb25zdCB7XG4gICAgICAgIG9iamVjdCwgXG4gICAgICAgIHBhcmFtcywgXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICB9ID0gdGFzaztcblxuICAgIHN3aXRjaChvcGVyYXRpb24pIHtcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24ubW92ZVNsZWVwZXIpOlxuICAgICAgICAgICAgdW5kb01vdmVTbGVlcGVyKG9iamVjdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5hZGRFZGdlRnJvbUFuY2hvcik6XG4gICAgICAgICAgICB1bmRvTW92ZUFuY2hvcihvYmplY3QsIHBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24ubW92ZUhlYWQpOlxuICAgICAgICAgICAgdW5kb01vdmVIZWFkKG9iamVjdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5kZWxldGUpOlxuICAgICAgICAgICAgdW5kb0RlbGV0ZUl0ZW1zKG9iamVjdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24ucGFzdGUpOlxuICAgICAgICAgICAgdW5kb1Bhc3RlKG9iamVjdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24uY3JlYXRlU2xlZXBlcik6XG4gICAgICAgICAgICB1bmRvQ3JlYXRlU2xlZXBlcihvYmplY3QpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICk7XG59XG5cbi8qKlxuICogVW5kbyBtb3ZlIHNsZWVwZXIgb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBSZWNpZXZlZCBjdXJyZW50IHNsZWVwZXIgbm9kZVxuICogQHBhcmFtIHsqfSBwYXJhbXMgb3BlcmF0aW9uIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gdW5kb01vdmVTbGVlcGVyKG9iamVjdCwgcGFyYW1zKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBvYmplY3QuY2FudmFzSW5mb3JtYXRpb25cbiAgICBjb25zdCB7IGNoYW5nZUxvY2F0aW9uIH0gPSBwYXJhbXM7XG4gICAgY29uc3QgcmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICB4OiB4IC0gY2hhbmdlTG9jYXRpb24ueCxcbiAgICAgICAgeTogeSAtIGNoYW5nZUxvY2F0aW9uLnksXG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHNsZWVwZXIgY2FudmFzIGxvY2F0aW9uXG4gICAgb2JqZWN0LmNoYW5nZUNhbnZhc0luZm9ybWF0aW9uKHJlY292ZXJMb2NhdGlvbik7XG5cbiAgICAvLyBDaGFuZ2UgdGhlIGNvbm5lY3RlZCBvdXRjb21pbmcgZWRnZXMnIGxvY2F0aW9uXG4gICAgZm9yIChjb25zdCBlZGdlIG9mIG9iamVjdC5lZGdlTGlzdCkge1xuICAgICAgICBjb25zdCBlZGdlUmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZWRnZS5zdGFydExvY2F0aW9uLnggLSBjaGFuZ2VMb2NhdGlvbi54LFxuICAgICAgICAgICAgeTogZWRnZS5zdGFydExvY2F0aW9uLnkgLSBjaGFuZ2VMb2NhdGlvbi55LFxuICAgICAgICB9O1xuXG4gICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oXG4gICAgICAgICAgICAnc3RhcnQnLFxuICAgICAgICAgICAgZWRnZVJlY292ZXJMb2NhdGlvbixcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIGluY29taW5nIGVkZ2VzJyBsb2NhdGlvblxuICAgIGZvciAoY29uc3QgZWRnZSBvZiBvYmplY3QuaW5jb21pbmdFZGdlTGlzdCkge1xuICAgICAgICBjb25zdCBlZGdlUmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZWRnZS5lbmRMb2NhdGlvbi54IC0gY2hhbmdlTG9jYXRpb24ueCxcbiAgICAgICAgICAgIHk6IGVkZ2UuZW5kTG9jYXRpb24ueSAtIGNoYW5nZUxvY2F0aW9uLnksXG4gICAgICAgIH07XG5cbiAgICAgICAgZWRnZS5zZXRMb2NhdGlvbihcbiAgICAgICAgICAgICdlbmQnLFxuICAgICAgICAgICAgZWRnZVJlY292ZXJMb2NhdGlvbixcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8qKlxuICogVW5kbyBtb3ZlIGFuY2hvciBvcGVyYXRpb25cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFJlY2lldmVkIGVkZ2Ugb2JqZWN0XG4gKiBAcGFyYW0geyp9IHBhcmFtcyB0aGUgc2xlZXBlciBub2RlIHdoZXJlIHRoZSBlZGdlIHN0YXJ0XG4gKi9cbmZ1bmN0aW9uIHVuZG9Nb3ZlQW5jaG9yKG9iamVjdCwgcGFyYW1zKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBlZGdlIGNyZWF0ZWRcbiAgICBvYmplY3QuZGVsZXRlU2VsZigpO1xufVxuXG4vKipcbiAqIFVuZG8gbW92ZSBoZWFkIG9wZXJhdGlvblxuICogQHBhcmFtIHsqfSBvYmplY3QgXG4gKiBAcGFyYW0geyp9IHBhcmFtcyBcbiAqL1xuZnVuY3Rpb24gdW5kb01vdmVIZWFkKG9iamVjdCwgcGFyYW1zKSB7XG4gICAgY29uc3QgeyBjaGFuZ2VFbmRMb2NhdGlvbiB9ID0gcGFyYW1zO1xuXG4gICAgLy8gUmVjb3ZlciBlZ2RlIGVuZCBsb2NhdGlvblxuICAgIGNvbnN0IHJlY292ZXJMb2NhdGlvbiA9IHtcbiAgICAgICAgeDogb2JqZWN0LmVuZExvY2F0aW9uLnggLSBjaGFuZ2VFbmRMb2NhdGlvbi54LFxuICAgICAgICB5OiBvYmplY3QuZW5kTG9jYXRpb24ueSAtIGNoYW5nZUVuZExvY2F0aW9uLnksXG4gICAgfTtcblxuICAgIG9iamVjdC5zZXRMb2NhdGlvbihcbiAgICAgICAgJ2VuZCcsXG4gICAgICAgIHJlY292ZXJMb2NhdGlvbixcbiAgICApO1xuXG4gICAgLy8gUmVtb3ZlIGFkZGVkIGVuZCBzbGVlcGVyIGlmIG5lZWRlZFxuICAgIGlmICghIXBhcmFtc1snYWRkZWRFbmRTbGVlcGVyJ10pIHtcbiAgICAgICAgcGFyYW1zWydhZGRlZEVuZFNsZWVwZXInXS5yZW1vdmVJbmNvbWluZ0VkZ2Uob2JqZWN0KTtcbiAgICB9XG59XG5cbi8qKlxuICogVW5kbyBkZWxldGUgdGhlIGNsaWNrZWQgb2JqZWN0XG4gKiBAcGFyYW0geyp9IG9iamVjdCBEZWxldGVkIG9iamVjdFxuICovXG5mdW5jdGlvbiB1bmRvRGVsZXRlSXRlbXMob2JqZWN0KSB7XG4gICAgb2JqZWN0LnJlY292ZXJTZWxmKCk7XG59XG5cbi8qKlxuICogVW5kbyBQYXN0ZSB0aGUgaXRlbVxuICogQHBhcmFtIHsqfSBvYmplY3QgRGVsZXRlZCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gdW5kb1Bhc3RlKG9iamVjdCkge1xuICAgIGZvcihsZXQgaXRlbSBvZiBvYmplY3QpIHtcbiAgICAgICAgLy8gVE9ETzogT25seSBzdXBwb3J0IHNsZWVwZXIgbm93XG4gICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgU2xlZXBlcikge1xuICAgICAgICAgICAgaXRlbS5kZWxldGVTZWxmKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogVW5kbyBjcmVhdGUgc2xlZXBlclxuICogQHBhcmFtIHsqfSBvYmplY3QgRGVsZXRlZCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gdW5kb0NyZWF0ZVNsZWVwZXIob2JqZWN0KSB7XG4gICAgb2JqZWN0LmRlbGV0ZVNlbGYoKTtcbn1cbiIsImltcG9ydCB7IFNhdmVkT3BlcmF0aW9uIH0gZnJvbSAnLi9vcGVyYXRpb24nO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFVuZG9SZWRvRXZlbnROYW1lIH0gZnJvbSAnLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IENvcHlQYXN0ZUhvdXNlIH0gZnJvbSAnLi4vY29weS1wYXN0ZS9jb3B5LXBhc3RlLWhvdXNlJztcblxuZXhwb3J0IGNsYXNzIFVuZG9EZWNvcmF0b3Ige1xuICAgIC8qKlxuICAgICAqIERlY29yYXRvciBmb3IgbW91c2UgdXAgZnJvbSBzbGVlcGVyXG4gICAgICovIFxuICAgIHN0YXRpYyBtb3VzZVVwU2xlZXBlckRlY29yYXRvcihjb250cm9sbGVyRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRyYWdTbGVlcGVyTGlzdCwgb3JpZ2luYWxJbmZvKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBDdXJyZW50IFNsZWVwZXIgKE5vdyBubyBzZWxlY3Rpb24gYm94KVxuICAgICAgICAgICAgY29uc3QgY3VycmVudFNsZWVwZXIgPSBkcmFnU2xlZXBlckxpc3RbMF07XG5cbiAgICAgICAgICAgIC8vIEZpbmQgbG9jYXRpb24gY2hhbmdlXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VMb2NhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB4OiBjdXJyZW50U2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi54IC0gb3JpZ2luYWxJbmZvLngsXG4gICAgICAgICAgICAgICAgeTogY3VycmVudFNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueSAtIG9yaWdpbmFsSW5mby55LFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2hhbmdlTG9jYXRpb24ueCAhPT0gMCAmJiBjaGFuZ2VMb2NhdGlvbi55ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZSB0byB1bmRvIHN0YWNrXG4gICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLmFkZE11dGF0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogY3VycmVudFNsZWVwZXIsXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogU2F2ZWRPcGVyYXRpb24ubW92ZVNsZWVwZXIsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJGdW5jdGlvbihkcmFnU2xlZXBlckxpc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjb3JhdG9yIGZvciBtb3VzZSB1cCBmcm9tIGFuY2hvclxuICAgICAqL1xuICAgIHN0YXRpYyBtb3VzZVVwQW5jaG9yRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oc2xlZXBlckFuZEFuY2hvciwgZWRnZSwgY2xvc2VzdE9iamVjdCkge1xuICAgICAgICAgICAgLy8gU2F2ZSB0byB1bmRvIHN0YWNrXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUuYWRkTXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IGVkZ2UsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5hZGRFZGdlRnJvbUFuY2hvcixcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRTbGVlcGVyOiBzbGVlcGVyQW5kQW5jaG9yWzBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgY29udHJvbGxlciBcbiAgICAgICAgICAgIGNvbnRyb2xsZXJGdW5jdGlvbihzbGVlcGVyQW5kQW5jaG9yLCBlZGdlLCBjbG9zZXN0T2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY29yYXRvciBmb3IgbW91c2UgdXAgZnJvbSBoZWFkXG4gICAgICovXG4gICAgc3RhdGljIG1vdXNlVXBIZWFkRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZWRnZSwgY2xvc2VzdE9iamVjdCwgb3JpZ2luYWxMb2NhdGlvbikge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgIGNsb3Nlc3RMb2NhdGlvbixcbiAgICAgICAgICAgICAgICBjbG9zZXN0U2xlZXBlcixcbiAgICAgICAgICAgIH0gPSBjbG9zZXN0T2JqZWN0O1xuXG4gICAgICAgICAgICAvLyBBZGQgbXV0YXRpb24gXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUuYWRkTXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IGVkZ2UsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5tb3ZlSGVhZCxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRW5kTG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNsb3Nlc3RMb2NhdGlvbi54IC0gb3JpZ2luYWxMb2NhdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY2xvc2VzdExvY2F0aW9uLnkgLSBvcmlnaW5hbExvY2F0aW9uLnksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFkZGVkRW5kU2xlZXBlcjogY2xvc2VzdFNsZWVwZXIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBjb250cm9sbGVyXG4gICAgICAgICAgICBjb250cm9sbGVyRnVuY3Rpb24oZWRnZSwgY2xvc2VzdE9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNvcmF0b3IgZm9yIGRlbGV0ZSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyBkZWxldGVJdGVtc0RlY29yYXRvcihjb250cm9sbGVyRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGNsaWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAvLyBBZGQgbXV0YXRpb25cbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgIG9iamVjdDogY2xpY2tPYmplY3QsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5kZWxldGUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBjb250cm9sbGVyXG4gICAgICAgICAgICBjb250cm9sbGVyRnVuY3Rpb24oY2xpY2tPYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjb3JhdG9yIGZvciBwYXN0ZSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyBwYXN0ZURlY29yYXRvcihjb250cm9sbGVyRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gRmlyc3RsdSBjb3B5XG4gICAgICAgICAgICBjb25zdCBjbG9uZWRIb3VzZSA9IENvcHlQYXN0ZUhvdXNlLnBhY2thZ2U7XG5cbiAgICAgICAgICAgIC8vIEFkZCBtdXRhdGlvblxuICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLmFkZE11dGF0aW9uLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiBjbG9uZWRIb3VzZSxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFNhdmVkT3BlcmF0aW9uLnBhc3RlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgY29udHJvbGxlclxuICAgICAgICAgICAgY29udHJvbGxlckZ1bmN0aW9uKGNsb25lZEhvdXNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY29yYXRvciBmb3IgY3JlYXRlIHNsZWVwZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlU2xlZXBlckRlY29yYXRvcihjb250cm9sbGVyRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHR5cGUsIHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBjb250cm9sbGVyXG4gICAgICAgICAgICBjb25zdCBuZXdTbGVlcGVyID0gY29udHJvbGxlckZ1bmN0aW9uKHR5cGUsIHBvc2l0aW9uKTtcblxuICAgICAgICAgICAgLy8gQWRkIG11dGF0aW9uXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUuYWRkTXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IG5ld1NsZWVwZXIsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5jcmVhdGVTbGVlcGVyLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyB1bmRvQ29udHJvbGxlciB9IGZyb20gJy4vdW5kby1jb250cm9sbGVyJztcbmltcG9ydCB7IFVuZG9SZWRvRXZlbnROYW1lIH0gZnJvbSAnLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyByZWRvQ29udHJvbGxlciB9IGZyb20gJy4vcmVkby1jb250cm9sbGVyJztcblxuY2xhc3MgVW5kb1JlZG8ge1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVW5kb1JlZG8oKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmKCFVbmRvUmVkby5pbnN0YW5jZSkge1xuICAgICAgICAgICAgLy8gRGVmaW5lIHRoZSBzdGFjayBhbmQgdGhlIHBvaW50ZXJcbiAgICAgICAgICAgIHRoaXMuc3RhY2sgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucG9pbnRlciA9IC0xO1xuXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgICAgICAgICAgVW5kb1JlZG8uaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50IG5hbWVcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB1bmRvLFxuICAgICAgICAgICAgYWRkTXV0YXRpb24sXG4gICAgICAgICAgICByZWRvLFxuICAgICAgICB9ID0gVW5kb1JlZG9FdmVudE5hbWU7XG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihhZGRNdXRhdGlvbiwgdGhpcy5hZGRNdXRhdGlvblRvU3RhY2suYmluZCh0aGlzKSk7XG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcih1bmRvLCB0aGlzLnVuZG8uYmluZCh0aGlzKSk7XG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihyZWRvLCB0aGlzLnJlZG8uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG11dGF0aW9uIHRvIHVuZG8gc3RhY2tcbiAgICAgKiBAcGFyYW0geyp9IG11dGF0aW9uIFxuICAgICAqL1xuICAgIGFkZE11dGF0aW9uVG9TdGFjayhtdXRhdGlvbikge1xuICAgICAgICB0aGlzLnBvaW50ZXIgKz0gMTtcblxuICAgICAgICAvLyBCcmVhayB0aGUgc3RhY2sgb3JkZXIsIGlnbm9yZSB0aGUgb3BlcmF0aW9uIGFmdGVyIHBvaW50ZXJcbiAgICAgICAgaWYgKHRoaXMucG9pbnRlciAhPT0gdGhpcy5zdGFjay5sZW5ndGggJiYgdGhpcy5wb2ludGVyID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhY2suc3BsaWNlKHRoaXMucG9pbnRlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YWNrLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YWNrLnB1c2gobXV0YXRpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuZG8gdGhlIG9wZXJhdGlvblxuICAgICAqL1xuICAgIHVuZG8oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCAhPT0gMCB8fCB0aGlzLnBvaW50ZXIgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCB1bmRvVGFzayA9IHRoaXMuc3RhY2tbdGhpcy5wb2ludGVyXTtcbiAgICAgICAgICAgIHVuZG9Db250cm9sbGVyKHVuZG9UYXNrKTtcblxuICAgICAgICAgICAgdGhpcy5wb2ludGVyIC09IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWRvIHRoZSBvcGVyYXRpb25cbiAgICAgKi9cbiAgICByZWRvKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggIT09IDAgJiYgdGhpcy5wb2ludGVyICE9PSB0aGlzLnN0YWNrLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnRlciArPSAxO1xuXG4gICAgICAgICAgICBjb25zdCByZWRvVGFzayA9IHRoaXMuc3RhY2tbdGhpcy5wb2ludGVyXTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVkb1Rhc2spO1xuXG4gICAgICAgICAgICByZWRvQ29udHJvbGxlcihyZWRvVGFzayk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IFVuZG9SZWRvIH07IiwiY2xhc3MgRXZlbnQge1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFFdmVudC5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudERpY3Rpb25hcnkgPSB7fTtcbiAgICAgICAgICAgIEV2ZW50Lmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQWRkIHRvIHdob2xlIHdpbmRvd1xuICAgICAgICAgICAgd2luZG93LkV2ZW50ZXIgPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBFdmVudC5pbnN0YW5jZTsgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnRMaXN0ZW5lciBmb3IgYWRkaW5nIGV2ZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBcbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgLy8gRmluZCBpZiBldmVudE5hbWUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgaWYgKCEoZXZlbnROYW1lIGluIHRoaXMuZXZlbnREaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudERpY3Rpb25hcnlbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBQdXNoIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpbnRvIGxpc3RcbiAgICAgICAgdGhpcy5ldmVudERpY3Rpb25hcnlbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIGxpc3RlbmVyIGdpdmVuIGEgc3BlY2lmaWMgZXZlbnQgYW5kIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9uIHwgdW5kZWZpbmVkfSBjYWxsYmFjayBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgLy8gVGhyb3cgRXJyb3Igd2hlbiBub3QgZmluZCB0aGUgZXZlbnRcbiAgICAgICAgaWYgKCEoZXZlbnROYW1lIGluIHRoaXMuZXZlbnREaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignRXZlbnQgTm90IFJlZ2lzdGVyZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEp1c3QgcmVtb3ZlIHRoZSBzcGVjaWZpYyBjYWxsYmFjayBmdW5jdGlvbiBpZiBjYWxsYmFjayBnaXZlblxuICAgICAgICBpZiAoISFjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEV2ZW50TGlzdCA9IHRoaXMuZXZlbnREaWN0aW9uYXJ5W2V2ZW50TmFtZV07XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja0luZGV4ID0gY3VycmVudEV2ZW50TGlzdC5maW5kSW5kZXgoc2F2ZWRDYWxsYmFja0Z1bmN0aW9uID0+IFxuICAgICAgICAgICAgICAgIHNhdmVkQ2FsbGJhY2tGdW5jdGlvbiA9PT0gY2FsbGJhY2tcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIFJhaXNlIGVycm9yIGlmIGNhbGxiYWNrIGZ1bmN0aW9uIG5vdCBmb3VuZFxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrSW5kZXggPT09IC0xIHx8IGNhbGxiYWNrSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0NhbGxiYWNrIGZ1bmN0aW9uIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgICAgICBjdXJyZW50RXZlbnRMaXN0LnNwbGljZShjYWxsYmFja0luZGV4LCAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoaXMgZXZlbnQgaWYgZXZlbnQgbGlzdCBpcyBlbXB0eSBcbiAgICAgICAgICAgIGlmIChjdXJyZW50RXZlbnRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50RGljdGlvbmFyeVtldmVudE5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRGlyZWN0bHkgZGVsZXRlIHRoaXMgZXZlbnRcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50RGljdGlvbmFyeVtldmVudE5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgZGlzcHRhY2hlciwgdHJpZ2dlciB0aGUgcmVsYXRlZCBldmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgXG4gICAgICogQHBhcmFtICB7Li4uYW55fSBhcmdzIFxuICAgICAqL1xuICAgIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIC8vIFRocm93IEVycm9yIHdoZW4gbm90IGZpbmQgdGhlIGV2ZW50XG4gICAgICAgIGlmICghKGV2ZW50TmFtZSBpbiB0aGlzLmV2ZW50RGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0V2ZW50IE5vdCBSZWdpc3RlcmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJdGVyYXRlIGZvciB0cmlnZ2VyXG4gICAgICAgIHRoaXMuZXZlbnREaWN0aW9uYXJ5W2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudGVyID0gRXZlbnQuZ2V0SW5zdGFuY2UoKTsiLCIvKipcbiAqIEZpbmQgaWYgaXQgaXMgcG9zc2libGUgdG8gYmUgYWN0aXZlXG4gKiBAcGFyYW0ge2Zsb2F0fSB3ZWlnaHQgXG4gKiBAcmV0dXJucyB7Ym9vbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2aXR5QnlXZWlnaHQod2VpZ2h0KSB7XG4gICAgY29uc3Qgc3Vkb1JhbmRvbVZhcmlhYmxlID0gTWF0aC5yYW5kb20oKTtcbiAgICByZXR1cm4gc3Vkb1JhbmRvbVZhcmlhYmxlIDw9IHdlaWdodDtcbn1cblxuLyoqXG4gKiBGaW5kIGlmIGdpdmVuIHBvaW50IG5lYXIgdGhlIGxpbmVcbiAqIEBwYXJhbSB7Kn0gbGluZVN0YXJ0TG9jYXRpb24gXG4gKiBAcGFyYW0geyp9IGxpbmVFbmRMb2NhdGlvbiBcbiAqIEBwYXJhbSB7Kn0geCBcbiAqIEBwYXJhbSB7Kn0geSBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQb2ludEluTGluZShsaW5lU3RhcnRMb2NhdGlvbiwgbGluZUVuZExvY2F0aW9uLCB4LCB5KSB7XG4gICAgaWYoXG4gICAgICAgIGxpbmVFbmRMb2NhdGlvbi54ID4gbGluZVN0YXJ0TG9jYXRpb24ueCBcbiAgICAgICAgJiYgKFxuICAgICAgICAgICAgeCA+IGxpbmVFbmRMb2NhdGlvbi54IFxuICAgICAgICAgICAgfHwgeCA8IGxpbmVTdGFydExvY2F0aW9uLnhcbiAgICAgICAgKVxuICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoXG4gICAgICAgIGxpbmVFbmRMb2NhdGlvbi54IDwgbGluZVN0YXJ0TG9jYXRpb24ueCBcbiAgICAgICAgJiYgKFxuICAgICAgICAgICAgeCA8IGxpbmVFbmRMb2NhdGlvbi54IFxuICAgICAgICAgICAgfHwgeCA+IGxpbmVTdGFydExvY2F0aW9uLnhcbiAgICAgICAgKVxuICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGxpbmUgXG4gICAgY29uc3Qgc2xvcGUgPSAobGluZUVuZExvY2F0aW9uLnkgLSBsaW5lU3RhcnRMb2NhdGlvbi55KSAvIFxuICAgIChsaW5lRW5kTG9jYXRpb24ueCAtIGxpbmVTdGFydExvY2F0aW9uLngpO1xuXG4gICAgLy8gRmluZCB0aGUgYXJyb3cgcmVnaW9uXG4gICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4oc2xvcGUpO1xuICAgIGNvbnN0IHhMZW5ndGggPSAxMCAqIDAuNSAqIDMqKjAuNSAqIE1hdGguYWJzKE1hdGguY29zKGFuZ2xlKSk7XG4gICAgaWYgKFxuICAgICAgICBsaW5lRW5kTG9jYXRpb24ueCA+IGxpbmVTdGFydExvY2F0aW9uLnggXG4gICAgICAgICYmIHggPiBsaW5lRW5kTG9jYXRpb24ueCAtIHhMZW5ndGhcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgbGluZUVuZExvY2F0aW9uLnggPCBsaW5lU3RhcnRMb2NhdGlvbi54XG4gICAgICAgICYmIHggPCBsaW5lRW5kTG9jYXRpb24ueCArIHhMZW5ndGhcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgY29uc3QgaW50ZXJjZXB0ID0gbGluZVN0YXJ0TG9jYXRpb24ueSAtIHNsb3BlICogbGluZVN0YXJ0TG9jYXRpb24ueDtcblxuICAgIC8vIEZpbmQgdGhlIGRpc3RhbmNlIGJldHdlZW4gbGluZSBhbmQgcG9pbnRcbiAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguYWJzKGludGVyY2VwdCArIHNsb3BlICogeCAtIHkpIC8gTWF0aC5zcXJ0KDEgKyBzbG9wZSoqMik7XG5cbiAgICByZXR1cm4gZGlzdGFuY2UgPD0gNTtcbn0iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKipcbiAqIEFkZHMgdGhlIGtleS12YWx1ZSBgcGFpcmAgdG8gYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwYWlyIFRoZSBrZXktdmFsdWUgcGFpciB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBtYXBgLlxuICovXG5mdW5jdGlvbiBhZGRNYXBFbnRyeShtYXAsIHBhaXIpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBtYXAuc2V0YCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgbWFwLnNldChwYWlyWzBdLCBwYWlyWzFdKTtcbiAgcmV0dXJuIG1hcDtcbn1cblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBtb2RpZnkuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBzZXRgLlxuICovXG5mdW5jdGlvbiBhZGRTZXRFbnRyeShzZXQsIHZhbHVlKSB7XG4gIC8vIERvbid0IHJldHVybiBgc2V0LmFkZGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIHNldC5hZGQodmFsdWUpO1xuICByZXR1cm4gc2V0O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXksXG4gICAgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCksXG4gICAgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gICAgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKSxcbiAgICBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKSxcbiAgICBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpLFxuICAgIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKSxcbiAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyBkYXRhW2tleV0gIT09IHVuZGVmaW5lZCA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIGdldE1hcERhdGEodGhpcywga2V5KS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fWydkZWxldGUnXShrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGNhY2hlID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGNhY2hlIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gY2FjaGUuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNhY2hlID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgY2FjaGUuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICAvLyBTYWZhcmkgOSBtYWtlcyBgYXJndW1lbnRzLmxlbmd0aGAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgdmFyIHJlc3VsdCA9IChpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpXG4gICAgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpXG4gICAgOiBbXTtcblxuICB2YXIgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aCxcbiAgICAgIHNraXBJbmRleGVzID0gISFsZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoa2V5ID09ICdsZW5ndGgnIHx8IGlzSW5kZXgoa2V5LCBsZW5ndGgpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsb25lYCBhbmQgYF8uY2xvbmVEZWVwYCB3aGljaCB0cmFja3NcbiAqIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0Z1bGxdIFNwZWNpZnkgYSBjbG9uZSBpbmNsdWRpbmcgc3ltYm9scy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIG9iamVjdHMgYW5kIHRoZWlyIGNsb25lIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgaXNEZWVwLCBpc0Z1bGwsIGN1c3RvbWl6ZXIsIGtleSwgb2JqZWN0LCBzdGFjaykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICBpZiAoaXNIb3N0T2JqZWN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZU9iamVjdChpc0Z1bmMgPyB7fSA6IHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgYmFzZUNsb25lLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuXG4gIGlmICghaXNBcnIpIHtcbiAgICB2YXIgcHJvcHMgPSBpc0Z1bGwgPyBnZXRBbGxLZXlzKHZhbHVlKSA6IGtleXModmFsdWUpO1xuICB9XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgaXNEZWVwLCBpc0Z1bGwsIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG90eXBlIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gYmFzZUNyZWF0ZShwcm90bykge1xuICByZXR1cm4gaXNPYmplY3QocHJvdG8pID8gb2JqZWN0Q3JlYXRlKHByb3RvKSA6IHt9O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IChpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgYnVmZmVyLmNvbnN0cnVjdG9yKGJ1ZmZlci5sZW5ndGgpO1xuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgbWFwLlxuICovXG5mdW5jdGlvbiBjbG9uZU1hcChtYXAsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhtYXBUb0FycmF5KG1hcCksIHRydWUpIDogbWFwVG9BcnJheShtYXApO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZE1hcEVudHJ5LCBuZXcgbWFwLmNvbnN0cnVjdG9yKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IHJlZ2V4cC5jb25zdHJ1Y3RvcihyZWdleHAuc291cmNlLCByZUZsYWdzLmV4ZWMocmVnZXhwKSk7XG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHNldC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTZXQoc2V0LCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMoc2V0VG9BcnJheShzZXQpLCB0cnVlKSA6IHNldFRvQXJyYXkoc2V0KTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRTZXRFbnRyeSwgbmV3IHNldC5jb25zdHJ1Y3Rvcik7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlID09PSB1bmRlZmluZWQgPyBzb3VyY2Vba2V5XSA6IG5ld1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9sIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9sIHByb3BlcnRpZXMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSBuYXRpdmVHZXRTeW1ib2xzID8gb3ZlckFyZyhuYXRpdmVHZXRTeW1ib2xzLCBPYmplY3QpIDogc3R1YkFycmF5O1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEsXG4vLyBmb3IgZGF0YSB2aWV3cyBpbiBFZGdlIDwgMTQsIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzLlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUFycmF5KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgY2xvbmVGdW5jLCBpc0RlZXApIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIHJldHVybiBjbG9uZUFycmF5QnVmZmVyKG9iamVjdCk7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIHJldHVybiBjbG9uZURhdGFWaWV3KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzogY2FzZSBpbnQxNlRhZzogY2FzZSBpbnQzMlRhZzpcbiAgICBjYXNlIHVpbnQ4VGFnOiBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzogY2FzZSB1aW50MTZUYWc6IGNhc2UgdWludDMyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lVHlwZWRBcnJheShvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHJldHVybiBjbG9uZU1hcChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKG9iamVjdCk7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVJlZ0V4cChvYmplY3QpO1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTZXQob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVN5bWJvbChvYmplY3QpO1xuICB9XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uY2xvbmVgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGNsb25lcyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZWN1cnNpdmVseSBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBkZWVwIGNsb25lZCB2YWx1ZS5cbiAqIEBzZWUgXy5jbG9uZVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgZGVlcCA9IF8uY2xvbmVEZWVwKG9iamVjdHMpO1xuICogY29uc29sZS5sb2coZGVlcFswXSA9PT0gb2JqZWN0c1swXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgdHJ1ZSwgdHJ1ZSk7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDgtOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEZWVwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnLi4vY29yZS92aWV3LWxheWVyL2NhbnZhcyc7XG5cbi8vIEluaXQgQ2FudmFzXG52YXIgbXlDYW52YXMgPSBDYW52YXMuZ2V0SW5zdGFuY2UoKTtcbiJdLCJuYW1lcyI6WyJjbG9uZURlZXAiLCJDb3B5UGFzdGVIb3VzZSIsImhvdXNlIiwiaW5zdGFuY2UiLCJvYmoiLCJBcnJheSIsIml0ZW0iLCJwdXNoIiwiU2xlZXBlclBvb2xlciIsIkVkZ2VQb29sZXIiLCJpc1BvaW50SW5MaW5lIiwiTWluaW1hbERpc3RhbmNlRm9yTG9jYXRlIiwiQWN0aW9uVXRpbHMiLCJjYW52YXMiLCJsb2NhdGlvbiIsImZpbmRGdW5jdGlvbnNMaXN0IiwiZmluZExvY2F0ZWRMaW5lT3JIZWFkIiwiZmluZExvY2F0ZWRBbmNob3IiLCJmaW5kTG9jYXRlZFNsZWVwZXIiLCJmaW5kRnVuY3Rpb24iLCJmaW5kUmVzdWx0IiwiY2FudmFzQ29udGV4dCIsImdldENvbnRleHQiLCJpc0xvY2F0ZWRJbkNpcmNsZSIsImNpcmNsZVBhdGgiLCJ4IiwieSIsImlzUG9pbnRJblBhdGgiLCJsb2NhdGlvbkhhbmRsZXJNYXBzIiwiYmluZCIsImluZGV4IiwicG9vbCIsImxlbmd0aCIsInNsZWVwZXIiLCJzbGVlcGVyU3R5bGUiLCJjYW52YXNJbmZvcm1hdGlvbiIsInNsZWVwZXJDYW52YXNQYXRoIiwiY2FudmFzUGF0aCIsImRyYXdUeXBlIiwicmVzdWx0IiwidHlwZSIsImlzQWN0aXZlIiwiY2FudmFzQW5jaG9yc1BhdGhMaXN0Iiwic2xlZXBlckFuY2hvciIsImFuY2hvclBhdGgiLCJlZGdlIiwiaGVhZCIsInN0YXJ0TG9jYXRpb24iLCJlbmRMb2NhdGlvbiIsImRyYWdnZWRTbGVlcGVyTGlzdCIsImlzRHJhZyIsImZuIiwid2FpdFRpbWUiLCJ0aW1lciIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwic2V0VGltZW91dCIsImFwcGx5Iiwic2xlZXBlclgiLCJzbGVlcGVyWSIsImRpc3RhbmNlIiwiTWF0aCIsInNxcnQiLCJyYWRpdXMiLCJsb2NhdGVkU2xlZXBlciIsImZpbmRDbG9zZXN0U2xlZXBlciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGVkU2xlZXBlclgiLCJsb2NhdGVkU2xlZXBlclkiLCJhbmNob3JMb2NhdGlvbkxpc3QiLCJtaW5EaXN0YW5jZSIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJtaW5Mb2NhdGlvbiIsImFuY2hvckxvY2F0aW9uIiwiY2xvc2VzdExvY2F0aW9uIiwiY2xvc2VzdFNsZWVwZXIiLCJtb3VzZUFjdGlvbk1vZGUiLCJkb3duT25TbGVlcGVyIiwiZG93bk9uQW5jaG9yIiwiZG93bk9uTGluZSIsImRvd25PbkhlYWQiLCJkb3duT25CYWNrZ3JvdW5kIiwiZG93bk9uTm9uZSIsImRvd25PblRleHQiLCJBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lIiwiUGFpbnRlckV2ZW50TmFtZSIsIkV2ZW50ZXIiLCJVbmRvRGVjb3JhdG9yIiwiU2xlZXBlciIsIkVkZ2UiLCJLZXlib2FyZEFjdGlvbkNvbnRyb2xsZXIiLCJpbml0RXZlbnRIYW5kbGVyIiwia2V5Ym9hcmREZWxldGUiLCJrZXlib2FyZElucHV0Iiwia2V5Ym9hcmRUZXh0VW5kbyIsImtleWJvYXJkVGV4dFJlZG8iLCJrZXlib2FyZFRleHREZWxldGUiLCJrZXlib2FyZENvcHkiLCJrZXlib2FyZFBhc3RlIiwiZXZlbnROYW1lc01hcCIsImRlbGV0ZUl0ZW1zRGVjb3JhdG9yIiwia2V5Ym9hcmREZWxldGVDb250cm9sbGVyIiwicGFzdGVEZWNvcmF0b3IiLCJrZXlib2FyZFBhc3RlQ29udHJvbGxlciIsImtleWJvYXJkQ29weUNvbnRyb2xsZXIiLCJrZXlib2FyZElucHV0Q29udHJvbGxlciIsImtleWJvYXJkVGV4dFVuZG9Db250cm9sbGVyIiwia2V5Ym9hcmRUZXh0UmVkb0NvbnRyb2xsZXIiLCJrZXlib2FyZFRleHREZWxldGVDb250cm9sbGVyIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrT2JqZWN0IiwiZGVsZXRlU2VsZiIsImRpc3BhdGNoRXZlbnQiLCJyZXBhaW50IiwiaW5wdXRLZXkiLCJuZXdDb250ZW50IiwidGV4dEluZm9ybWF0aW9uIiwiY29udGVudCIsInRleHRUZW1wU3RhY2siLCJ0ZXh0IiwidW5kbyIsInJlZG8iLCJzdHJpbmdMZW5ndGgiLCJzdWJzdHJpbmciLCJvYmplY3QiLCJwYWNrYWdlIiwiY29weWVkT2JqZWN0TGlzdCIsInByZXBhcmVGb3JQYXN0ZSIsInJlY292ZXJTZWxmIiwiVW5kb1JlZG9FdmVudE5hbWUiLCJFeGNsdWRlS2V5RXZlbnRJZCIsIktleWJvYXJkQWN0aW9uIiwibW91c2VBY3Rpb24iLCJpbml0QWN0aW9uIiwiYWN0aW9uc01hcCIsImtleURvd24iLCJhY3Rpb24iLCJ3aW5kb3ciLCJldmVudCIsInRhcmdldCIsImlkIiwiY29kZSIsImtleUNvZGUiLCJpc1RleHRNb2RlT24iLCJtb3VzZURvd25FbGVtZW50IiwiaXNUZXh0TW9kZSIsIl9oYW5kbGVyVGV4dERlbGV0ZSIsIl9oYW5kbGVyRGVsZXRlIiwiY3RybEtleSIsIm1ldGFLZXkiLCJzaGlmdEtleSIsIl9oYW5kbGVOb3JtYWwiLCJrZXkiLCJ0b1N0cmluZyIsIkRlZXBDbG9uZUluZm8iLCJtb2RlIiwiU2xlZXBlckV2ZW50TmFtZSIsIkVkZ2VFdmVudE5hbWUiLCJNb3VzZUFjdGlvbkNvbnRyb2xsZXIiLCJtb3VzZURvd25TbGVlcGVyIiwibW91c2VEb3duTGluZSIsIm1vdXNlRG93bkJhY2tncm91bmQiLCJtb3VzZU1vdmVTbGVlcGVyIiwibW91c2VNb3ZlSGVhZCIsIm1vdXNlVXBTbGVlcGVyIiwibW91c2VVcEFuY2hvciIsIm1vdXNlVXBIZWFkIiwibW91c2VEb3VibGVDbGljayIsIm1vdXNlRG93blNsZWVwZXJDb250cm9sbGVyIiwibW91c2VEb3duTGluZUNvbnRyb2xsZXIiLCJtb3VzZURvd25CYWNrZ3JvdW5kQ29udHJvbGxlciIsIm1vdXNlTW92ZVNsZWVwZXJDb250cm9sbGVyIiwibW91c2VNb3ZlSGVhZENvbnRyb2xsZXIiLCJtb3VzZVVwU2xlZXBlckRlY29yYXRvciIsIm1vdXNlVXBTbGVlcGVyQ29udHJvbGxlciIsIm1vdXNlVXBBbmNob3JEZWNvcmF0b3IiLCJtb3VzZVVwQW5jaG9yQ29udHJvbGxlciIsIm1vdXNlVXBIZWFkRGVjb3JhdG9yIiwibW91c2VVcEhlYWRDb250cm9sbGVyIiwibW91c2VEb3VibGVDbGlja0NvbnRyb2xsZXIiLCJhY3RpdmVTb21lU2xlZXBlciIsImFjdGl2ZVNvbWVFZGdlIiwiY2hhbmdlQWN0aXZlU3RhdHVzIiwiZW5kVGV4dE1vZGUiLCJkcmFnU2xlZXBlckxpc3QiLCJyZWxhdGl2ZU1vdmVEaXN0YW5jZSIsIm9yaWdpblgiLCJvcmlnaW5ZIiwibmV3WCIsIm5ld1kiLCJjaGFuZ2VDYW52YXNJbmZvcm1hdGlvbiIsImVkZ2VMaXN0Iiwic2V0TG9jYXRpb24iLCJpbmNvbWluZ0VkZ2VMaXN0IiwiZHJhZ0VkZ2UiLCJjdXJyZW50UG9zaXRpb24iLCJlbmRTbGVlcGVyIiwicmVtb3ZlSW5jb21pbmdFZGdlIiwiY2hhbmdlRW5kIiwic3dpdGNoRHJhZ1N0YXR1cyIsInNsZWVwZXJBbmRBbmNob3IiLCJjbG9zZXN0T2JqZWN0IiwiYWRkRWRnZSIsImFkZEluY29taW5nRWRnZSIsInN0YXJ0U2xlZXBlciIsImFkZENoaWxkIiwiYWN0aXZlU29tZVNsZWVwZXJUZXh0TW9kZSIsIlBhbmVsT3BlYXJhdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUiLCJTYXZlZE9wZXJhdGlvbiIsIk1vdXNlQWN0aW9uIiwibW91c2VQb3NpdGlvblgiLCJtb3VzZVBvc2l0aW9uWSIsImFjdGlvbk1vZGUiLCJ0ZW1wb3JhcnlFZGdlIiwidGVtcG9yYXJ5Q29weSIsImhhbmRsZU1vdXNlRG93biIsInRocm90dGxlck1ha2VyIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTk1vdXNlVXAiLCJoYW5kbGVNb3VzZURvdWJsZUNsaWNrIiwiaGFuZGxlTW91c2VQcmV2ZW50UmlnaHRDbGljayIsImNsb3NlQ29sb3JQaWNrZXIiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInNldE1vdXNlUG9zaXRpb24iLCJsb2NhdGVkT2JqZWN0IiwiZmluZExvY2F0ZWRPYmplY3QiLCJidXR0b24iLCJtb3VzZVJpZ2h0Q2xpY2siLCJfaGFuZGxlckhvdmVyTW92ZSIsImNhbGwiLCJfaGFuZGxlckRyYWdTbGVlcGVyTW92ZSIsIl9oYW5kbGVyRHJhZ0FuY2hvck1vdmUiLCJfaGFuZGxlckRyYWdCYWNrZ3JvdW5kTW92ZSIsIl9oYW5kbGVyRHJhZ0hlYWRNb3ZlIiwic3R5bGUiLCJjdXJzb3IiLCJmaW5kRHJhZ2dlZFNsZWVwZXIiLCJzdGFydExvYWN0aW9uIiwiY2hhbmdlU3RhcnQiLCJjdXJyZW50UG9zaXN0aW9uIiwiY2xvc2VzdE9iamVjdEFuY2hvciIsImZpbmRDbG9zZXN0QW5jaG9yIiwiY2xvc2VzdE9iamVjdEhlYWQiLCJhZGRNdXRhdGlvbiIsIm9wZXJhdGlvbiIsIm1vdmVIZWFkIiwicGFyYW1zIiwiY2hhbmdlRW5kTG9jYXRpb24iLCJpc0luVGhpc1NsZWVwZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIlNsZWVwZXJzRmFjdG9yeSIsIlBhbmVsT3BlcmF0aW9uQ29udHJvbGxlciIsImNoYW5nZUFsbFByb2JhYmlsaXR5IiwicmVzZXRTbGVlcGVycyIsInBhbmVsQ3JlYXRlTm9kZSIsInBhbmVsQWN0aXZlIiwicHJvYkNoYW5nZUNvbnRyb2xsZXIiLCJwYW5lbENyZWF0ZU5vZGVDb250cm9sbGVyIiwicmVzZXRDb250cm9sbGVyIiwicGFuZWxBY3RpdmVDb250cm9sbGVyIiwicHJvYiIsImNoYW5nZVByb2JhYmlsaXR5IiwicHJvYmFiaWxpdHkiLCJpc1NsZWVwaW5nIiwiYmVmb3JlUHJvY2Vzc0lzU2xlZXBpbmciLCJjaGFuZ2VTbGVlcGluZ1N0YXR1cyIsInBvc2l0aW9uIiwiY3JlYXRlTm9kZSIsIlN1bW1hcnlFdmVudE5hbWUiLCJXYWtpbmdQcm9jZXNzQ29udHJvbGxlciIsInJvdW5kTnVtIiwiZnJhbWVUaW1lIiwiaXNQYXVzZSIsInJlZnJlc2hJbnRlcnZhbElkIiwiYXdha2VRdWV1ZSIsInN0YXJ0V2FraW5nUHJvY2VzcyIsInBhdXNlV2FraW5nUHJvY2VzcyIsInN0YXJ0V2FraW5nUHJvY2Vzc0NvbnRyb2xsZXIiLCJwYXVzZVdha2luZ1Byb2Nlc3NDb250cm9sbGVyIiwidGVtcFF1ZXVlIiwic2xlZXBlckFuZEF3YWtlTnVtIiwiY291bnRTbGVlcGVyQW5kQXdha2UiLCJkcmF3U2hhcmUiLCJ1cGRhdGVEZXRhaWwiLCJpbml0QXdha2VRdWV1ZSIsInNldEludGVydmFsIiwibmV3QWN0aXZlZFNsZWVwZXIiLCJhY3RpdmVDaGlsZCIsInNoaWZ0IiwiZW5kV2FraW5nUHJvY2VzcyIsImNsZWFySW50ZXJ2YWwiLCJzbGVlcGVyTnVtIiwiRGVmYXVsdEVkZ2VXZWlnaHQiLCJEZWZhdWx0U2xlZXBlckNhbnZhc0luZm9ybWF0aW9uIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiUEkiLCJpc0ZpbGxlZCIsImZpbGxDb2xvciIsImlzQm9yZGVyIiwiYm9yZGVyV2l0aCIsImJvcmRlckNvbG9yIiwiaXNBbmNob3IiLCJhY3RpdmVCb3JkZXJDb2xvciIsIkRlZmF1bHRBd2FrZUNhbnZhc0luZm9ybWF0aW9uIiwiRWRnZVBvb2xFdmVudE5hbWUiLCJFZGdlUG9vbCIsImluaXRFdmVudHNIYW5kbGVyIiwibG9jYXRlZEluZGV4IiwiZmluZEluZGV4IiwiZWRnZUluUG9vbCIsInNwbGljZSIsImdldEluc3RhbmNlIiwid2VpZ2h0IiwibmV3V2VpZ2h0IiwibmV3U2xlZXBlciIsImVkZ2VQYXRoIiwicmVtb3ZlRWRnZSIsInJlbW92ZUNoaWxkIiwiU2xlZXBlckZhY3RvcnkiLCJzbGVlcGVyQ2FudmFzSW5mb3JtYXRpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJhd2FrZUNhbnZhc0luZm9ybWF0aW9uIiwiY2FudmFzT2JqIiwiY3JlYXRlU2xlZXBlckRlY29yYXRvciIsIm1ha2VOZXdTbGVlcGVyIiwiY2hhbmdlTm9kZVN0eWxlIiwiZ2V0U2hhcmVDb2xvciIsInBhc3NTbGVlcGVyQ29sb3IiLCJwcm9wZXJ0eU9iamVjdCIsImZvckNoYW5nZWRJbmZvcm1hdGlvbiIsInByb3BlcnR5IiwibmV3VmFsdWUiLCJzdGF0dXMiLCJ0ZW1wU2xlZXBlciIsImNvbG9yTGlzdEZvclNldCIsIlNsZWVwZXJQb29sRXZlbnROYW1lIiwiU2xlZXBlclBvb2wiLCJhZGRTbGVlcGVyIiwicmVPcmRlclNsZWVwZXIiLCJzbGVlcGVySW5Qb29sIiwic2xlZXBlckluZGV4IiwiVGV4dFNsZWVwZXJUZW1wU3RhY2siLCJvcmlnaW5UZXh0IiwicG9pbnRlciIsInN0YWNrTGlzdCIsInZhbCIsIlRleHRTbGVlcGVyIiwic2l6ZSIsImNvbG9yIiwidGV4dGFyZWFJbmZvcm1hdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dGFyZWFCb3VuZGluZ0JveFBhdGgiLCJ0ZXh0SW5pdEV2ZW50SGFuZGxlciIsInN0YXJ0VGV4dE1vZGUiLCJ0ZXh0UG9zaXRpb24iLCJ0ZXh0TWF4V2lkdGgiLCJ0ZXh0V3JpdGUiLCJtYXhXaWR0aCIsImluZm9ybWF0aW9uIiwic2V0VGV4dE9yVGV4dGFyZWFJbmZvcm1hdGlvbiIsInNsZWVwZXJQb3NpdGlvbiIsImZpZ3VyZURyYXciLCJfc2V0VGV4dGFyZWFQYXRoIiwiRXJyb3IiLCJmb3JTZXRPYmplY3QiLCJkcmF3VGV4dEFyZWEiLCJib3VuZGluZ0JveFBhdGgiLCJnZXRBY3Rpdml0eUJ5V2VpZ2h0IiwiRGVmYXVsdEFjdGl2ZUluZm9ybWF0aW9uIiwiY2hpbGRyZW5MaXN0IiwiY2hpbGRFZGdlTWFwTGlzdCIsInNldENhbnZhc1BhdGgiLCJkcmF3VGV4dCIsImNoaWxkU2xlZXBlciIsImV4cGVjdENoaWxkSW5kZXgiLCJjaGlsZE9iamVjdCIsInVuZGVmaW5lZCIsImV4cGVjdEVkZ2VJbmRleCIsImVkZ2VPYmplY3QiLCJnZXRDYW52YXNJbmZvcm1hdGlvbiIsInRlbXBBY3RpdmVkQ2hpbGRMaXN0IiwiZm9yRWFjaCIsImNhbnZhc1BhdGhPYmplY3QiLCJhbmNob3JzTGlzdCIsInJlbW92ZVNsZWVwZXIiLCJHbG9iYWxDb25maWciLCJQYWludGVyIiwiVW5kb1JlZG8iLCJDYW52YXMiLCJpbml0IiwiaW5pdENvbnRleHQiLCJpbml0UGFpbnRlciIsImluaXRBY3Rpb25SZWxhdGVkIiwiaW5pdFVuZG9SZWRvU3RhY2siLCJpbml0U2xlZXBlckZhY3RvcnkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzSWQiLCJpbm5lcldpZHRoIiwicGFuZGVsV2lkdGgiLCJpbm5lckhlaWdodCIsImhlYWRlckhlaWdodCIsInBhaW50ZXIiLCJtb3VzZUFjdGlvbkNvbnRyb2xsZXIiLCJrZXlib2FyZEFjdGlvbkNvbnRyb2xsZXIiLCJrZXlib2FyZEFjdGlvbiIsInBhbmVsT3BlcmF0aW9uQ29udHJvbGxlciIsIndha2luZ1Byb2Nlc3NDb250cm9sbGVyIiwibW91bnRDYW52YXMiLCJEZWFmdWx0QW5jaG9yU2V0dGluZyIsImxpbmVXaWR0aCIsImxpbmVDb2xvciIsImFuY2hvclJhZGl1cyIsIkRlYWZ1bHRBcnJvd1NldHRpbmciLCJoZWFkTGVuZ3RoIiwiQWN0aXZlQXJyb3dTZXR0aW5nIiwiRGVhZmF1bHRCb3VuZGluZ0JveFNldHRpbmciLCJGaWd1cmVQYWludGVyIiwiZHJhd01hcCIsImRyYXdDaXJjbGUiLCJkcmF3QXJyb3ciLCJkcmF3VGV4dGFyZWEiLCJkcmF3Iiwic2V0UGF0aENhbGxiYWNrIiwiY2lyY2xlIiwiUGF0aDJEIiwiYXJjIiwiZmlsbFN0eWxlIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiYW5jaG9yc1BhdGhMaXN0IiwiYW5jaG9yUG9zaXRpb25MaXN0IiwiYW5jaG9yUG9zaXRpb24iLCJhbmdsZSIsImF0YW4yIiwibGluZSIsIm1vdmVUbyIsImxpbmVUbyIsImNvcyIsInNpbiIsInJlY3QiLCJUZXh0UGFpbnRlciIsImZpZ3VyZSIsImNsZWFyUmVjdCIsIndyaXRlIiwic2V0VGV4dGFyZWFDYWxsYmFjayIsImZvbnQiLCJmaWxsSW5mbyIsIl9nZXRGaWxsTGlzdCIsImZpbGxMaXN0IiwiZmlsbFRleHQiLCJtZXRyaWNzIiwibWVhc3VyZVRleHQiLCJhY3R1YWxCb3VuZGluZ0JveEFzY2VudCIsImFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCIsImZvbnRCb3VuZGluZ0JveEFzY2VudCIsImZvbnRCb3VuZGluZ0JveERlc2NlbnQiLCJtb3VzZU1vdmVBbmNob3IiLCJ1cGRhdGVTaGFyZUNvbG9yIiwiRXhjbHVkZUNsaWNrQ2xhc3NOYW1lIiwibW92ZVNsZWVwZXIiLCJhZGRFZGdlRnJvbUFuY2hvciIsImRlbGV0ZSIsInBhc3RlIiwiY3JlYXRlU2xlZXBlciIsInJlZG9Db250cm9sbGVyIiwidGFzayIsInJlZG9Nb3ZlU2xlZXBlciIsInJlZG9Nb3ZlQW5jaG9yIiwicmVkb01vdmVIZWFkIiwicmVkb0RlbGV0ZUl0ZW1zIiwicmVkb1Bhc3RlIiwicmVkb0NyZWF0ZVNsZWVwZXIiLCJjaGFuZ2VMb2NhdGlvbiIsInJlY292ZXJMb2NhdGlvbiIsImVkZ2VSZWNvdmVyTG9jYXRpb24iLCJ1bmRvQ29udHJvbGxlciIsInVuZG9Nb3ZlU2xlZXBlciIsInVuZG9Nb3ZlQW5jaG9yIiwidW5kb01vdmVIZWFkIiwidW5kb0RlbGV0ZUl0ZW1zIiwidW5kb1Bhc3RlIiwidW5kb0NyZWF0ZVNsZWVwZXIiLCJjb250cm9sbGVyRnVuY3Rpb24iLCJvcmlnaW5hbEluZm8iLCJjdXJyZW50U2xlZXBlciIsIm9yaWdpbmFsTG9jYXRpb24iLCJhZGRlZEVuZFNsZWVwZXIiLCJjbG9uZWRIb3VzZSIsInN0YWNrIiwiYWRkTXV0YXRpb25Ub1N0YWNrIiwibXV0YXRpb24iLCJ1bmRvVGFzayIsInJlZG9UYXNrIiwiRXZlbnQiLCJldmVudERpY3Rpb25hcnkiLCJjYWxsYmFjayIsImN1cnJlbnRFdmVudExpc3QiLCJjYWxsYmFja0luZGV4Iiwic2F2ZWRDYWxsYmFja0Z1bmN0aW9uIiwic3Vkb1JhbmRvbVZhcmlhYmxlIiwicmFuZG9tIiwibGluZVN0YXJ0TG9jYXRpb24iLCJsaW5lRW5kTG9jYXRpb24iLCJzbG9wZSIsImF0YW4iLCJ4TGVuZ3RoIiwiYWJzIiwiaW50ZXJjZXB0IiwibXlDYW52YXMiXSwic291cmNlUm9vdCI6IiJ9