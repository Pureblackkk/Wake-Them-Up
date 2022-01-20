/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/action-layer/action-utils.js":
/*!***********************************************!*\
  !*** ./src/core/action-layer/action-utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionUtils": () => (/* binding */ ActionUtils)
/* harmony export */ });
/* harmony import */ var _data_layer_sleeper_sleeper_pool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-layer/sleeper/sleeper-pool */ "./src/core/data-layer/sleeper/sleeper-pool.js");
/* harmony import */ var _data_layer_edge_edge_pool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-layer/edge/edge-pool */ "./src/core/data-layer/edge/edge-pool.js");
/* harmony import */ var _utils_math_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/math-utils */ "./src/utils/math-utils.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/core/action-layer/config.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardActionController": () => (/* binding */ KeyboardActionController)
/* harmony export */ });
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global/event-name-config */ "./src/global/event-name-config.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/event */ "./src/utils/event.js");
/* harmony import */ var _undo_redo_undo_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../undo-redo/undo-decorator */ "./src/undo-redo/undo-decorator.js");
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
          keyboardTextDelete = _global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.ActionControllerEventName.keyboardTextDelete; // Make EventName-Handler Map

      var eventNamesMap = {};
      eventNamesMap[keyboardDelete] = _undo_redo_undo_decorator__WEBPACK_IMPORTED_MODULE_2__.UndoDecorator.deleteItemsDecorator(this.keyboardDeleteController);
      eventNamesMap[keyboardInput] = this.keyboardInputController;
      eventNamesMap[keyboardTextUndo] = this.keyboardTextUndo;
      eventNamesMap[keyboardTextRedo] = this.keyboardTextRedo;
      eventNamesMap[keyboardTextDelete] = this.keyboardTextDelete; // Init event handler

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
  }, {
    key: "keyboardTextUndo",
    value: function keyboardTextUndo(sleeper) {
      sleeper.textTempStack.undo();
      console.log(sleeper.textTempStack.text); // Update

      sleeper.textInformation.content = sleeper.textTempStack.text; // Trigger the painter event to redraw

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
  }, {
    key: "keyboardTextRedo",
    value: function keyboardTextRedo(sleeper) {
      sleeper.textTempStack.redo(); // Update

      sleeper.textInformation.content = sleeper.textTempStack.text; // Trigger the painter event to redraw

      _utils_event__WEBPACK_IMPORTED_MODULE_1__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_0__.PainterEventName.repaint);
    }
  }, {
    key: "keyboardTextDelete",
    value: function keyboardTextDelete(sleeper) {
      var stringLength = sleeper.textInformation.content.length;
      var newContent = sleeper.textInformation.content.substring(0, stringLength - 1); // Update text

      sleeper.textInformation.content = newContent; // Update temp stack

      sleeper.textTempStack.text = newContent;
      console.log(sleeper.textInformation.content); // Trigger the painter event to redraw

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
      // Change active status and drag status
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
          console.log(sleeper, sleeper.isDrag);
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
        'dblclick': this.handleMouseDoubleClick.bind(this)
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

      if (!!locatedObject) {
        var type = locatedObject.type,
            result = locatedObject.result;

        switch (type) {
          case 'line':
            _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.mouseDownLine, result);
            this.actionMode = _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnLine;
            this.mouseDownElement = result;
            break;

          case 'head':
            this.actionMode = _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnHead;
            this.mouseDownElement = result;
            break;

          case 'anchor':
            this.actionMode = _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnAnchor;
            this.mouseDownElement = result;
            break;

          case 'sleeper':
            _utils_event__WEBPACK_IMPORTED_MODULE_0__.Eventer.dispatchEvent(_global_event_name_config__WEBPACK_IMPORTED_MODULE_2__.ActionControllerEventName.mouseDownSleeper, result);
            this.actionMode = _config__WEBPACK_IMPORTED_MODULE_5__.mouseActionMode.downOnSleeper;
            this.mouseDownElement = result;
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
  }]);

  return MouseAction;
}();



/***/ }),

/***/ "./src/core/data-layer/config.js":
/*!***************************************!*\
  !*** ./src/core/data-layer/config.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextPainter": () => (/* binding */ TextPainter)
/* harmony export */ });
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/event */ "./src/utils/event.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global/event-name-config */ "./src/global/event-name-config.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleeperEventName": () => (/* binding */ SleeperEventName),
/* harmony export */   "EdgeEventName": () => (/* binding */ EdgeEventName),
/* harmony export */   "SleeperPoolEventName": () => (/* binding */ SleeperPoolEventName),
/* harmony export */   "EdgePoolEventName": () => (/* binding */ EdgePoolEventName),
/* harmony export */   "PainterEventName": () => (/* binding */ PainterEventName),
/* harmony export */   "ActionControllerEventName": () => (/* binding */ ActionControllerEventName),
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
  keyboardDelete: 'keyboardDelete',
  keyboardTextDelete: 'keyboardTextDelete',
  keyboardInput: 'keyboardInput',
  keyboardTextRedo: 'keyboardTextRedo',
  keyboardTextUndo: 'keyboardTextUndo'
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalConfig": () => (/* binding */ GlobalConfig)
/* harmony export */ });
var GlobalConfig = {
  canvasId: 'myCanvas'
};

/***/ }),

/***/ "./src/undo-redo/operation.js":
/*!************************************!*\
  !*** ./src/undo-redo/operation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedOperation": () => (/* binding */ SavedOperation)
/* harmony export */ });
var SavedOperation = {
  moveSleeper: 'moveSleeper',
  addEdgeFromAnchor: 'addEdgeFromAnchor',
  moveHead: 'moveHead',
  "delete": 'delete'
};

/***/ }),

/***/ "./src/undo-redo/redo-controller.js":
/*!******************************************!*\
  !*** ./src/undo-redo/redo-controller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "redoController": () => (/* binding */ redoController)
/* harmony export */ });
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation */ "./src/undo-redo/operation.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/event-name-config */ "./src/global/event-name-config.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
 * Undo delete the clicked object
 * @param {*} object Deleted object
 */


function redoDeleteItems(object) {
  object.deleteSelf();
}

/***/ }),

/***/ "./src/undo-redo/undo-controller.js":
/*!******************************************!*\
  !*** ./src/undo-redo/undo-controller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "undoController": () => (/* binding */ undoController)
/* harmony export */ });
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation */ "./src/undo-redo/operation.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/event-name-config */ "./src/global/event-name-config.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

/***/ }),

/***/ "./src/undo-redo/undo-decorator.js":
/*!*****************************************!*\
  !*** ./src/undo-redo/undo-decorator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UndoDecorator": () => (/* binding */ UndoDecorator)
/* harmony export */ });
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation */ "./src/undo-redo/operation.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.js");
/* harmony import */ var _global_event_name_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/event-name-config */ "./src/global/event-name-config.js");
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
  }]);

  return UndoDecorator;
}();

/***/ }),

/***/ "./src/undo-redo/undo-redo.js":
/*!************************************!*\
  !*** ./src/undo-redo/undo-redo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      Event.instance = this;
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FGUDtBQUdJQyxFQUFBQSxDQUFDLEVBQUUsR0FIUDtBQUlJdUMsRUFBQUEsTUFBTSxFQUFFLEVBSlo7QUFLSTZLLEVBQUFBLFVBQVUsRUFBRSxDQUxoQjtBQU1JQyxFQUFBQSxRQUFRLEVBQUUsSUFBSWhMLElBQUksQ0FBQ2lMLEVBTnZCO0FBT0lDLEVBQUFBLFFBQVEsRUFBRSxJQVBkO0FBUUlDLEVBQUFBLFNBQVMsRUFBRTtBQVJmLENBRkosR0FlQTs7QUFDQSxJQUFJNEwsS0FBSixFQUFnQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvYWN0aW9uLXV0aWxzLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9rZXlib2FyZC9rZXlib2FyZC1hY3Rpb24tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2FjdGlvbi1sYXllci9rZXlib2FyZC9rZXlib2FyZC1hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9hY3Rpb24tbGF5ZXIvbW91c2UvZGVlcENsb25lLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL21vdXNlL21vdXNlLWFjdGlvbi1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvYWN0aW9uLWxheWVyL21vdXNlL21vdXNlLWFjdGlvbi5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvY29uZmlnLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvZGF0YS1sYXllci9lZGdlL2VkZ2UtcG9vbC5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItcG9vbC5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXRleHQuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS9kYXRhLWxheWVyL3NsZWVwZXIvc2xlZXBlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL3ZpZXctbGF5ZXIvY2FudmFzLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2NvcmUvdmlldy1sYXllci9wYWludGVyL2ZpZ3VyZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS92aWV3LWxheWVyL3BhaW50ZXIvZmlndXJlL3BhaW50ZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvY29yZS92aWV3LWxheWVyL3BhaW50ZXIvcGFpbnRlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9jb3JlL3ZpZXctbGF5ZXIvcGFpbnRlci90ZXh0L3BhaW50ZXIuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL2dsb2JhbC9nbG9iYWwtY29uZmlnLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3VuZG8tcmVkby9vcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vLi9zcmMvdW5kby1yZWRvL3JlZG8tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy91bmRvLXJlZG8vdW5kby1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3VuZG8tcmVkby91bmRvLWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy91bmRvLXJlZG8vdW5kby1yZWRvLmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3V0aWxzL2V2ZW50LmpzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vLy4vc3JjL3V0aWxzL21hdGgtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2luZm9ybWF0aW9uLWRpZmZ1c2lvbi1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW5mb3JtYXRpb24tZGlmZnVzaW9uLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbmZvcm1hdGlvbi1kaWZmdXNpb24tZGVtby8uL3NyYy9lbnRyeS90ZXN0RW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXBvb2wnO1xuaW1wb3J0IHsgRWRnZVBvb2xlciB9IGZyb20gJy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLXBvb2wnO1xuaW1wb3J0IHsgaXNQb2ludEluTGluZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGgtdXRpbHMnO1xuaW1wb3J0IHsgTWluaW1hbERpc3RhbmNlRm9yTG9jYXRlIH0gZnJvbSAnLi9jb25maWcnO1xuXG5jbGFzcyBBY3Rpb25VdGlscyB7XG4gICAgLyoqXG4gICAgICogRmluZCBtb3VzZSBsb2NhdGVkIG9iamVjdFxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmFzIFxuICAgICAqIEBwYXJhbSB7Kn0gbG9jYXRpb24gXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRMb2NhdGVkT2JqZWN0KGNhbnZhcywgbG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmluZEZ1bmN0aW9uc0xpc3QgPSBbXG4gICAgICAgICAgICBBY3Rpb25VdGlscy5maW5kTG9jYXRlZExpbmVPckhlYWQsXG4gICAgICAgICAgICBBY3Rpb25VdGlscy5maW5kTG9jYXRlZEFuY2hvcixcbiAgICAgICAgICAgIEFjdGlvblV0aWxzLmZpbmRMb2NhdGVkU2xlZXBlcixcbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGZpbmRGdW5jdGlvbiBvZiBmaW5kRnVuY3Rpb25zTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgZmluZFJlc3VsdCA9IGZpbmRGdW5jdGlvbihjYW52YXMsIGxvY2F0aW9uKTtcbiAgICAgICAgICAgIGlmICghIWZpbmRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluZFJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgc2xlZXBlciB3aGljaCBhdCB0aGUgbW91c2UgbG9jYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhcyBDYW52YXMgT2JqZWN0IFxuICAgICAqIEBwYXJhbSB7Kn0gbG9jYXRpb24gTW91c2UgbG9jYXRpb25cbiAgICAgKiBAcmV0dXJucyB7U2xlZXBlciB8IG51bGx9XG4gICAgICovXG4gICAgc3RhdGljIGZpbmRMb2NhdGVkU2xlZXBlcihjYW52YXMsIGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAvLyBJbm5lciBmdW5jdGlvbiB0byBjaGVjayBpZiBsb2NhdGlvbiBpbiBjaXJjbGVcbiAgICAgICAgY29uc3QgaXNMb2NhdGVkSW5DaXJjbGUgPSAoY2lyY2xlUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge3gsIHl9ID0gbG9jYXRpb247XG4gICAgICAgICAgICByZXR1cm4gY2FudmFzQ29udGV4dC5pc1BvaW50SW5QYXRoKGNpcmNsZVBhdGgsIHgsIHkpXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSGFuZGxlciBjaGVja2luZyBmdW5jdGlvbnMnIG1hcHMgXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSGFuZGxlck1hcHMgPSB7XG4gICAgICAgICAgICAnY2lyY2xlJzogaXNMb2NhdGVkSW5DaXJjbGUuYmluZCh0aGlzKSxcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEl0ZXJhdGUgcG9vbCB0byBmaW5kIGxvY2F0ZWQgcGF0aFxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IFNsZWVwZXJQb29sZXIucG9vbC5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICAgICAgICBjb25zdCBzbGVlcGVyID0gU2xlZXBlclBvb2xlci5wb29sW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNsZWVwZXJTdHlsZSA9IHNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb247XG4gICAgICAgICAgICBjb25zdCBzbGVlcGVyQ2FudmFzUGF0aCA9IHNsZWVwZXIuY2FudmFzUGF0aDtcbiAgICAgICAgICAgIGNvbnN0IHsgZHJhd1R5cGUgfSA9IHNsZWVwZXJTdHlsZTtcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbkhhbmRsZXJNYXBzW2RyYXdUeXBlXShzbGVlcGVyQ2FudmFzUGF0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHNsZWVwZXIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzbGVlcGVyJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgYW5jaG9yIHdoaWNoIGF0IHRoZSBtb3VzZSBsb2NhdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmFzIENhbnZhcyBPYmplY3QgXG4gICAgICogQHBhcmFtIHsqfSBsb2NhdGlvbiBNb3VzZSBsb2NhdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kTG9jYXRlZEFuY2hvcihjYW52YXMsIGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3Qge3gsIHl9ID0gbG9jYXRpb247XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBTbGVlcGVyUG9vbGVyLnBvb2wubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICAgICAgY29uc3Qgc2xlZXBlciA9IFNsZWVwZXJQb29sZXIucG9vbFtpbmRleF07XG4gICAgICAgICAgICBpZiAoc2xlZXBlci5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2xlZXBlckFuY2hvciBvZiBzbGVlcGVyLmNhbnZhc0FuY2hvcnNQYXRoTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGFuY2hvclBhdGggfSA9IHNsZWVwZXJBbmNob3I7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXNDb250ZXh0LmlzUG9pbnRJblBhdGgoYW5jaG9yUGF0aCwgeCwgeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBbc2xlZXBlciwgc2xlZXBlckFuY2hvcl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FuY2hvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgZWRnZSB3aGljaCBhdCB0aGUgbW91c2UgbG9jYXRpb25cbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhcyBcbiAgICAgKiBAcGFyYW0geyp9IGxvY2F0aW9uIFxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kTG9jYXRlZExpbmVPckhlYWQoY2FudmFzLCBsb2NhdGlvbikge1xuICAgICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IHt4LCB5fSA9IGxvY2F0aW9uO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IEVkZ2VQb29sZXIucG9vbC5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICAgICAgICBjb25zdCBlZGdlID0gRWRnZVBvb2xlci5wb29sW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHsgaGVhZCB9ID0gZWRnZS5jYW52YXNQYXRoO1xuICAgICAgICAgICAgaWYgKGlzUG9pbnRJbkxpbmUoZWRnZS5zdGFydExvY2F0aW9uLCBlZGdlLmVuZExvY2F0aW9uLCB4LCB5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogZWRnZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FudmFzQ29udGV4dC5pc1BvaW50SW5QYXRoKGhlYWQsIHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBlZGdlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGVhZCcsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBzbGVlcGVyIHdobyBpcyBpbiBkcmFnZ2luZyBzdGF0dXNcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZERyYWdnZWRTbGVlcGVyKCkge1xuICAgICAgICBjb25zdCBkcmFnZ2VkU2xlZXBlckxpc3QgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIGlmIChzbGVlcGVyLmlzRHJhZykge1xuICAgICAgICAgICAgICAgIGRyYWdnZWRTbGVlcGVyTGlzdC5wdXNoKHNsZWVwZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkcmFnZ2VkU2xlZXBlckxpc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhyb3R0bGVyIG1ha2VyIGZvciBsaXN0ZW5lciBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB3YWl0VGltZSBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgdGhyb3R0bGVyTWFrZXIoZm4sIHdhaXRUaW1lKSB7XG4gICAgICAgIGxldCB0aW1lciA9IG51bGw7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIGlmKCF0aW1lcikge1xuICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0sIHdhaXRUaW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgY2xvc2VzdCBzbGVlcGVyIGdpdmVuIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIHsqfSBsb2NhdGlvbiBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZENsb3Nlc3RTbGVlcGVyKGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IHt4LCB5fSA9IGxvY2F0aW9uO1xuICAgICAgICBmb3IoY29uc3Qgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsZWVwZXJYID0gc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi54O1xuICAgICAgICAgICAgY29uc3Qgc2xlZXBlclkgPSBzbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoc2xlZXBlclggLSB4KSoqMiArIChzbGVlcGVyWSAteSkqKjIpO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi5yYWRpdXMgKyBNaW5pbWFsRGlzdGFuY2VGb3JMb2NhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2xlZXBlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIGNsb3Nlc3QgYW5jaG9yIGdpdmVuIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIHsqfSBsb2NhdGlvbiBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZENsb3Nlc3RBbmNob3IobG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgbG9jYXRlZFNsZWVwZXIgPSB0aGlzLmZpbmRDbG9zZXN0U2xlZXBlcihsb2NhdGlvbik7XG4gICAgICAgIGlmICghbG9jYXRlZFNsZWVwZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2Nsb2VzdCBTbGVlcGVyJywgbG9jYXRlZFNsZWVwZXIpO1xuXG4gICAgICAgIGNvbnN0IGxvY2F0ZWRTbGVlcGVyWCA9IGxvY2F0ZWRTbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLng7XG4gICAgICAgIGNvbnN0IGxvY2F0ZWRTbGVlcGVyWSA9IGxvY2F0ZWRTbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnk7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IGxvY2F0ZWRTbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLnJhZGl1cztcbiAgICAgICAgY29uc3QgYW5jaG9yTG9jYXRpb25MaXN0ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IGxvY2F0ZWRTbGVlcGVyWCAtIHJhZGl1cyxcbiAgICAgICAgICAgICAgICB5OiBsb2NhdGVkU2xlZXBlclksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IGxvY2F0ZWRTbGVlcGVyWCArIHJhZGl1cyxcbiAgICAgICAgICAgICAgICB5OiBsb2NhdGVkU2xlZXBlclksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IGxvY2F0ZWRTbGVlcGVyWCxcbiAgICAgICAgICAgICAgICB5OiBsb2NhdGVkU2xlZXBlclkgLSByYWRpdXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IGxvY2F0ZWRTbGVlcGVyWCxcbiAgICAgICAgICAgICAgICB5OiBsb2NhdGVkU2xlZXBlclkgKyByYWRpdXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIGxldCBtaW5EaXN0YW5jZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgICAgICBsZXQgbWluTG9jYXRpb24gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGFuY2hvckxvY2F0aW9uIG9mIGFuY2hvckxvY2F0aW9uTGlzdCkge1xuICAgICAgICAgICAgY29uc3Qge3gsIHl9ID0gYW5jaG9yTG9jYXRpb247XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IChsb2NhdGlvbi54IC0geCkqKjIgKyAobG9jYXRpb24ueSAtIHkpKioyO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgbWluRGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBtaW5Mb2NhdGlvbiA9IGFuY2hvckxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIG1pbkRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xvc2VzdExvY2F0aW9uOiBtaW5Mb2NhdGlvbixcbiAgICAgICAgICAgIGNsb3Nlc3RTbGVlcGVyOiBsb2NhdGVkU2xlZXBlcixcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEFjdGlvblV0aWxzIH07IiwiZXhwb3J0IGNvbnN0IG1vdXNlQWN0aW9uTW9kZSA9IHtcbiAgICBkb3duT25TbGVlcGVyOiAnZG93bk9uU2xlZXBlcicsXG4gICAgZG93bk9uQW5jaG9yOiAnZG93bk9uQW5jaG9yJyxcbiAgICBkb3duT25MaW5lOiAnZG93bk9uRWdkZScsXG4gICAgZG93bk9uSGVhZDogJ2Rvd25PbkhlYWQnLFxuICAgIGRvd25PbkJhY2tncm91bmQ6ICdkb3duT25CYWNrZ3JvdW5kJyxcbiAgICBkb3duT25Ob25lOiAnZG93bk9uTm9uZScsXG4gICAgZG93bk9uVGV4dDogJ2Rvd25PblRleHQnLFxufTtcblxuZXhwb3J0IGNvbnN0IE1pbmltYWxEaXN0YW5jZUZvckxvY2F0ZSA9IDEwOyIsImltcG9ydCB7IFxuICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG4gICAgUGFpbnRlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBVbmRvRGVjb3JhdG9yIH0gZnJvbSAnLi4vLi4vLi4vdW5kby1yZWRvL3VuZG8tZGVjb3JhdG9yJzsgXG5cblxuY2xhc3MgS2V5Ym9hcmRBY3Rpb25Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXNlciBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGtleWJvYXJkRGVsZXRlLFxuICAgICAgICAgICAga2V5Ym9hcmRJbnB1dCxcbiAgICAgICAgICAgIGtleWJvYXJkVGV4dFVuZG8sXG4gICAgICAgICAgICBrZXlib2FyZFRleHRSZWRvLFxuICAgICAgICAgICAga2V5Ym9hcmRUZXh0RGVsZXRlLFxuICAgICAgICB9ID0gQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZTtcblxuICAgICAgICAvLyBNYWtlIEV2ZW50TmFtZS1IYW5kbGVyIE1hcFxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmREZWxldGVdID0gVW5kb0RlY29yYXRvci5kZWxldGVJdGVtc0RlY29yYXRvcih0aGlzLmtleWJvYXJkRGVsZXRlQ29udHJvbGxlcik7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBba2V5Ym9hcmRJbnB1dF0gPSB0aGlzLmtleWJvYXJkSW5wdXRDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkVGV4dFVuZG9dID0gdGhpcy5rZXlib2FyZFRleHRVbmRvO1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkVGV4dFJlZG9dID0gdGhpcy5rZXlib2FyZFRleHRSZWRvO1xuICAgICAgICBldmVudE5hbWVzTWFwW2tleWJvYXJkVGV4dERlbGV0ZV0gPSB0aGlzLmtleWJvYXJkVGV4dERlbGV0ZTtcblxuICAgICAgICAvLyBJbml0IGV2ZW50IGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnROYW1lc01hcFtldmVudE5hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSB0aGUgc2VsZWN0ZWQgZWRnZSBvciBTbGVlcGVyXG4gICAgICogQHBhcmFtIHtFZGdlIHwgU2xlZXBlcn0gY2xpY2tPYmplY3QgXG4gICAgICovXG4gICAga2V5Ym9hcmREZWxldGVDb250cm9sbGVyKGNsaWNrT2JqZWN0KSB7XG4gICAgICAgIGNsaWNrT2JqZWN0LmRlbGV0ZVNlbGYoKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5wdXQgdGV4dCB0byB0aGUgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlciBcbiAgICAgKiBAcGFyYW0geyp9IGlucHV0S2V5IHN0cmluZ1xuICAgICAqL1xuICAgIGtleWJvYXJkSW5wdXRDb250cm9sbGVyKHNsZWVwZXIsIGlucHV0S2V5KSB7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBgJHtzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50fSR7aW5wdXRLZXl9YDtcblxuICAgICAgICAvLyBVcGRhdGUgdGV4dFxuICAgICAgICBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50ID0gbmV3Q29udGVudDtcblxuICAgICAgICAvLyBVcGRhdGUgdGVtcCBzdGFja1xuICAgICAgICBzbGVlcGVyLnRleHRUZW1wU3RhY2sudGV4dCA9IG5ld0NvbnRlbnQ7XG5cbiAgICAgICAgY29uc29sZS5sb2coc2xlZXBlci50ZXh0SW5mb3JtYXRpb24uY29udGVudCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGtleWJvYXJkVGV4dFVuZG8oc2xlZXBlcikge1xuICAgICAgICBzbGVlcGVyLnRleHRUZW1wU3RhY2sudW5kbygpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHNsZWVwZXIudGV4dFRlbXBTdGFjay50ZXh0KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFVwZGF0ZVxuICAgICAgICBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50ID0gc2xlZXBlci50ZXh0VGVtcFN0YWNrLnRleHQ7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGtleWJvYXJkVGV4dFJlZG8oc2xlZXBlcikge1xuICAgICAgICBzbGVlcGVyLnRleHRUZW1wU3RhY2sucmVkbygpO1xuXG4gICAgICAgIC8vIFVwZGF0ZVxuICAgICAgICBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50ID0gc2xlZXBlci50ZXh0VGVtcFN0YWNrLnRleHQ7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApOyBcbiAgICB9XG5cbiAgICBrZXlib2FyZFRleHREZWxldGUoc2xlZXBlcikge1xuICAgICAgICBjb25zdCBzdHJpbmdMZW5ndGggPSBzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQuc3Vic3RyaW5nKDAsIHN0cmluZ0xlbmd0aCAtIDEpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0ZXh0XG4gICAgICAgIHNsZWVwZXIudGV4dEluZm9ybWF0aW9uLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0ZW1wIHN0YWNrXG4gICAgICAgIHNsZWVwZXIudGV4dFRlbXBTdGFjay50ZXh0ID0gbmV3Q29udGVudDtcblxuICAgICAgICBjb25zb2xlLmxvZyhzbGVlcGVyLnRleHRJbmZvcm1hdGlvbi5jb250ZW50KTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBLZXlib2FyZEFjdGlvbkNvbnRyb2xsZXIgfTsiLCJpbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyJztcbmltcG9ydCB7IFxuICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG4gICAgVW5kb1JlZG9FdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbmNsYXNzIEtleWJvYXJkQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIG1vdXNlQWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLm1vdXNlQWN0aW9uID0gbW91c2VBY3Rpb247XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuaW5pdEFjdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgYWxsIHRoZSBtb3VzZSBhY3Rpb24gbGlzdGVuZXJzXG4gICAgICovXG4gICAgaW5pdEFjdGlvbigpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uc01hcCA9IHtcbiAgICAgICAgICAgICdrZXlkb3duJzogdGhpcy5rZXlEb3duLmJpbmQodGhpcyksXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgYWN0aW9uIGluIGFjdGlvbnNNYXApIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGFjdGlvbiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNNYXBbYWN0aW9uXShldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleURvd24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgbW91c2Vkb3duIGVsZW1lbnQgaXMgc2xlZXBlciBhbmQgaW4gdGV4dCBtb2RlXG4gICAgICAgIGNvbnN0IGlzVGV4dE1vZGVPbiA9IHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCBpbnN0YW5jZW9mIFNsZWVwZXIgXG4gICAgICAgICYmIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudC5pc1RleHRNb2RlO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoKGNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAvLyBQcmVzcyBEZWxldGVcbiAgICAgICAgICAgICAgICBpc1RleHRNb2RlT24gPyB0aGlzLl9oYW5kbGVyVGV4dERlbGV0ZSgpIDogdGhpcy5faGFuZGxlckRlbGV0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5MDpcbiAgICAgICAgICAgICAgICAvLyBQcmVzcyBjdHJsICsgelxuICAgICAgICAgICAgICAgIGlmICgoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNUZXh0TW9kZU9uID8gXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUua2V5Ym9hcmRUZXh0VW5kbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS51bmRvKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBQcmVzcyBjdHJsICsgc2hmaXQgKyB6XG4gICAgICAgICAgICAgICAgaWYgKChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpICYmIGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGV4dE1vZGVPbiA/IFxuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkVGV4dFJlZG8sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUucmVkbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NyB8fFxuICAgICAgICAgICAgICAgICAgICBjb2RlID49IDY1ICYmIGNvZGUgPD0gOTAgfHxcbiAgICAgICAgICAgICAgICAgICAgY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMlxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpc1RleHRNb2RlT24gJiYgdGhpcy5faGFuZGxlTm9ybWFsKGV2ZW50LmtleS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGV4dCBpbnB1dCBmb3Igc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0ga2V5IFxuICAgICAqL1xuICAgIF9oYW5kbGVOb3JtYWwoa2V5KSB7ICBcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5rZXlib2FyZElucHV0LFxuICAgICAgICAgICAgdGhpcy5tb3VzZUFjdGlvbi5tb3VzZURvd25FbGVtZW50LFxuICAgICAgICAgICAga2V5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3Igb2JqZWN0IGRlbGV0ZVxuICAgICAqL1xuICAgIF9oYW5kbGVyRGVsZXRlKCkge1xuICAgICAgICAvLyBJZiBjbGljayBlbGVtZW50IGV4aXN0cyBhbmQgaXMgYWN0aXZlLCB0aGVuIGRlbGV0ZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLm1vdXNlQWN0aW9uLm1vdXNlRG93bkVsZW1lbnRcbiAgICAgICAgICAgICYmIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudC5pc0FjdGl2ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkRGVsZXRlLFxuICAgICAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIHRleHQgZGVsZXRlXG4gICAgICovXG4gICAgX2hhbmRsZXJUZXh0RGVsZXRlKCkge1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLmtleWJvYXJkVGV4dERlbGV0ZSxcbiAgICAgICAgICAgIHRoaXMubW91c2VBY3Rpb24ubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEtleWJvYXJkQWN0aW9uIH07IiwiaW1wb3J0IHsgbW91c2VBY3Rpb25Nb2RlIH0gZnJvbSAnLi4vY29uZmlnJztcblxuLy8gQ2xvbmUgdGhlIHJlbGF0ZWQgaW5mb3JtYXRpb24gYWNjb3JkaW5nIHRvIHRoZSB0eXBlIG9mIGNsYXNzXG5leHBvcnQgZnVuY3Rpb24gRGVlcENsb25lSW5mbyhtb2RlLCB0YXJnZXQpIHtcbiAgICBzd2l0Y2gobW9kZSkge1xuICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25TbGVlcGVyKTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogdGFyZ2V0LmNhbnZhc0luZm9ybWF0aW9uLngsXG4gICAgICAgICAgICAgICAgeTogdGFyZ2V0LmNhbnZhc0luZm9ybWF0aW9uLnksXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIChtb3VzZUFjdGlvbk1vZGUuZG93bk9uSGVhZCk6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IHRhcmdldC5lbmRMb2NhdGlvbi54LFxuICAgICAgICAgICAgICAgIHk6IHRhcmdldC5lbmRMb2NhdGlvbi55LFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSIsImltcG9ydCB7IFxuICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUsXG4gICAgU2xlZXBlckV2ZW50TmFtZSxcbiAgICBQYWludGVyRXZlbnROYW1lLFxuICAgIEVkZ2VFdmVudE5hbWUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyLXBvb2wnO1xuaW1wb3J0IHsgRWRnZVBvb2xlciB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlLXBvb2wnO1xuaW1wb3J0IHsgVW5kb0RlY29yYXRvciB9IGZyb20gJy4uLy4uLy4uL3VuZG8tcmVkby91bmRvLWRlY29yYXRvcic7IFxuXG5jbGFzcyBNb3VzZUFjdGlvbkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc2VyIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbW91c2VEb3duU2xlZXBlcixcbiAgICAgICAgICAgIG1vdXNlRG93bkxpbmUsXG4gICAgICAgICAgICBtb3VzZURvd25CYWNrZ3JvdW5kLFxuICAgICAgICAgICAgbW91c2VNb3ZlU2xlZXBlcixcbiAgICAgICAgICAgIG1vdXNlTW92ZUhlYWQsXG4gICAgICAgICAgICBtb3VzZVVwU2xlZXBlcixcbiAgICAgICAgICAgIG1vdXNlVXBBbmNob3IsXG4gICAgICAgICAgICBtb3VzZVVwSGVhZCxcbiAgICAgICAgICAgIG1vdXNlRG91YmxlQ2xpY2ssXG4gICAgICAgIH0gPSBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lO1xuXG4gICAgICAgIC8vIE1ha2UgRXZlbnROYW1lLUhhbmRsZXIgTWFwXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZXNNYXAgPSB7fTtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZURvd25TbGVlcGVyXSA9IHRoaXMubW91c2VEb3duU2xlZXBlckNvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VEb3duTGluZV0gPSB0aGlzLm1vdXNlRG93bkxpbmVDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlRG93bkJhY2tncm91bmRdID0gdGhpcy5tb3VzZURvd25CYWNrZ3JvdW5kQ29udHJvbGxlcjtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZU1vdmVTbGVlcGVyXSA9IHRoaXMubW91c2VNb3ZlU2xlZXBlckNvbnRyb2xsZXI7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VNb3ZlSGVhZF0gPSB0aGlzLm1vdXNlTW92ZUhlYWRDb250cm9sbGVyO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlVXBTbGVlcGVyXSA9IFVuZG9EZWNvcmF0b3IubW91c2VVcFNsZWVwZXJEZWNvcmF0b3IodGhpcy5tb3VzZVVwU2xlZXBlckNvbnRyb2xsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbbW91c2VVcEFuY2hvcl0gPSBVbmRvRGVjb3JhdG9yLm1vdXNlVXBBbmNob3JEZWNvcmF0b3IodGhpcy5tb3VzZVVwQW5jaG9yQ29udHJvbGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgZXZlbnROYW1lc01hcFttb3VzZVVwSGVhZF0gPSBVbmRvRGVjb3JhdG9yLm1vdXNlVXBIZWFkRGVjb3JhdG9yKHRoaXMubW91c2VVcEhlYWRDb250cm9sbGVyLmJpbmQodGhpcykpO1xuICAgICAgICBldmVudE5hbWVzTWFwW21vdXNlRG91YmxlQ2xpY2tdID0gdGhpcy5tb3VzZURvdWJsZUNsaWNrQ29udHJvbGxlcjtcblxuICAgICAgICAvLyBJbml0IGV2ZW50IGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnROYW1lc01hcFtldmVudE5hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsdGVyIHRoZSBzbGVlcGVyIHByb3BlcnRpZXMgXG4gICAgICogQHBhcmFtIHtTbGVlcGVyfSBzbGVlcGVyIFNsZWVwZXIgb2JqZWN0XG4gICAgICovXG4gICAgbW91c2VEb3duU2xlZXBlckNvbnRyb2xsZXIoc2xlZXBlcikge1xuICAgICAgICAvLyBDaGFuZ2UgYWN0aXZlIHN0YXR1cyBhbmQgZHJhZyBzdGF0dXNcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgU2xlZXBlckV2ZW50TmFtZS5hY3RpdmVTb21lU2xlZXBlcixcbiAgICAgICAgICAgIHNsZWVwZXJcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWx0ZXIgdGhlIGVkZ2UgcHJvcGVydGllc1xuICAgICAqIEBwYXJhbSB7Kn0gZWRnZSBcbiAgICAgKi9cbiAgICBtb3VzZURvd25MaW5lQ29udHJvbGxlcihlZGdlKSB7XG4gICAgICAgIC8vIENoYW5nZSBhY3RpdmUgZWRnZSBzdGF0dXMgXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIEVkZ2VFdmVudE5hbWUuYWN0aXZlU29tZUVkZ2UsXG4gICAgICAgICAgICBlZGdlLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhbiBhbGwgdGhlIGFjdGl2ZSBzdGF0dXNcbiAgICAgKi9cbiAgICBtb3VzZURvd25CYWNrZ3JvdW5kQ29udHJvbGxlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Rvd24gb24gYmFja2dyb3VuZCBjb250cm9sbGVyJyk7XG4gICAgICAgIGZvciAoY29uc3Qgc2xlZXBlciBvZiBTbGVlcGVyUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIC8vIERlYWN0aXZlIGFsbCB0aGUgc2xlZXBlclxuICAgICAgICAgICAgc2xlZXBlci5jaGFuZ2VBY3RpdmVTdGF0dXMobnVsbCk7XG5cbiAgICAgICAgICAgIC8vIEJhY2sgdG8gbm9ybWFsIG1vZGVcbiAgICAgICAgICAgIHNsZWVwZXIuZW5kVGV4dE1vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgZWRnZSBvZiBFZGdlUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIGVkZ2UuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIHNsZWVwZXIgY2FudmFzIHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHsqfSBkcmFnU2xlZXBlckxpc3QgXG4gICAgICogQHBhcmFtIHsqfSByZWxhdGl2ZU1vdmVEaXN0YW5jZSBcbiAgICAgKi9cbiAgICBtb3VzZU1vdmVTbGVlcGVyQ29udHJvbGxlcihkcmFnU2xlZXBlckxpc3QsIHJlbGF0aXZlTW92ZURpc3RhbmNlKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc2xlZXBlciBvZiBkcmFnU2xlZXBlckxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpblggPSBzbGVlcGVyLmNhbnZhc0luZm9ybWF0aW9uLng7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5ZID0gc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi55O1xuICAgICAgICAgICAgY29uc3QgbmV3WCA9IG9yaWdpblggKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS54O1xuICAgICAgICAgICAgY29uc3QgbmV3WSA9IG9yaWdpblkgKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS55O1xuICAgICAgICAgICAgc2xlZXBlci5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbih7XG4gICAgICAgICAgICAgICAgeDogbmV3WCxcbiAgICAgICAgICAgICAgICB5OiBuZXdZLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZWRnZSBvZiBzbGVlcGVyLmVkZ2VMaXN0KSB7XG4gICAgICAgICAgICAgICAgZWRnZS5zZXRMb2NhdGlvbignc3RhcnQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGVkZ2Uuc3RhcnRMb2NhdGlvbi54ICsgcmVsYXRpdmVNb3ZlRGlzdGFuY2UueCxcbiAgICAgICAgICAgICAgICAgICAgeTogZWRnZS5zdGFydExvY2F0aW9uLnkgKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS55LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygc2xlZXBlci5pbmNvbWluZ0VkZ2VMaXN0KSB7XG4gICAgICAgICAgICAgICAgZWRnZS5zZXRMb2NhdGlvbignZW5kJywge1xuICAgICAgICAgICAgICAgICAgICB4OiBlZGdlLmVuZExvY2F0aW9uLnggKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBlZGdlLmVuZExvY2F0aW9uLnkgKyByZWxhdGl2ZU1vdmVEaXN0YW5jZS55LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgZWRnZSBjYW52YXMgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGRyYWdFZGdlIFxuICAgICAqIEBwYXJhbSB7Kn0gcmVsYXRpdmVNb3ZlRGlzdGFuY2UgXG4gICAgICovXG4gICAgbW91c2VNb3ZlSGVhZENvbnRyb2xsZXIoZHJhZ0VkZ2UsIGN1cnJlbnRQb3NpdGlvbikge1xuICAgICAgICBkcmFnRWRnZS5zZXRMb2NhdGlvbignZW5kJywgY3VycmVudFBvc2l0aW9uKTtcblxuICAgICAgICAvLyBEZWxldGUgdGhlIGVkZ2UgZnJvbSBlbmQgc2xlZXBlclxuICAgICAgICBpZiAoISFkcmFnRWRnZS5lbmRTbGVlcGVyKSB7XG4gICAgICAgICAgICBkcmFnRWRnZS5lbmRTbGVlcGVyLnJlbW92ZUluY29taW5nRWRnZShkcmFnRWRnZSk7XG4gICAgICAgICAgICBkcmFnRWRnZS5jaGFuZ2VFbmQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhbiBhbGwgdGhlIGRyYWcgZmxhZyB3aGVuIG1vdXNlIHVwXG4gICAgICogQHBhcmFtIHsqfSBkcmFnU2xlZXBlckxpc3QgXG4gICAgICovXG4gICAgbW91c2VVcFNsZWVwZXJDb250cm9sbGVyKGRyYWdTbGVlcGVyTGlzdCkge1xuICAgICAgICBmb3IoY29uc3Qgc2xlZXBlciBvZiBkcmFnU2xlZXBlckxpc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNsZWVwZXIsIHNsZWVwZXIuaXNEcmFnKTtcbiAgICAgICAgICAgIHNsZWVwZXIuc3dpdGNoRHJhZ1N0YXR1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgdGVtcG9yYXJ5IGVkZ2UgaW50byBzbGVlcGVyXG4gICAgICogQHBhcmFtIHsqfSBzbGVlcGVyQW5kQW5jaG9yIGNsaWNrZWQgYW5jaG9yIGFuZCBpdHMgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7RWRnZX0gZWRnZSBlZGdlIG9iamVjdFxuICAgICAqL1xuICAgIG1vdXNlVXBBbmNob3JDb250cm9sbGVyKHNsZWVwZXJBbmRBbmNob3IsIGVkZ2UsIGNsb3Nlc3RPYmplY3QpIHtcbiAgICAgICAgY29uc3QgW3NsZWVwZXIsIHNsZWVwZXJBbmNob3JdID0gc2xlZXBlckFuZEFuY2hvcjtcbiAgICAgICAgc2xlZXBlci5hZGRFZGdlKGVkZ2UpO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgZW5kIHNsZWVwZXIgaWYgY2xvZXN0T2JqZWN0IGV4aXN0ZWRcbiAgICAgICAgaWYgKCEhY2xvc2VzdE9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5tb3VzZVVwSGVhZENvbnRyb2xsZXIoZWRnZSwgY2xvc2VzdE9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaW5rIHRvIHRoZSBjbG9lc3QgYW5jaG9yIGlmIG5lZWRlZFxuICAgICAqIEBwYXJhbSB7Kn0gZWRnZSBcbiAgICAgKiBAcGFyYW0geyp9IGNsb3Nlc3RPYmplY3QgXG4gICAgICovXG4gICAgbW91c2VVcEhlYWRDb250cm9sbGVyKGVkZ2UsIGNsb3Nlc3RPYmplY3QpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY2xvc2VzdExvY2F0aW9uLFxuICAgICAgICAgICAgY2xvc2VzdFNsZWVwZXIsXG4gICAgICAgIH0gPSBjbG9zZXN0T2JqZWN0O1xuXG4gICAgICAgIC8vIFNldCBpbmNvbWluZyBlZGdlIGZvciBjdXJyZW50IHNsZWVwZXJcbiAgICAgICAgY2xvc2VzdFNsZWVwZXIuYWRkSW5jb21pbmdFZGdlKGVkZ2UpO1xuXG4gICAgICAgIC8vIFNldCBlZGdlIGxvY2F0aW9uXG4gICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oJ2VuZCcsIGNsb3Nlc3RMb2NhdGlvbik7XG5cbiAgICAgICAgLy8gU2V0IGVkZ2UgZW5kIHNsZWVwZXJcbiAgICAgICAgZWRnZS5jaGFuZ2VFbmQoY2xvc2VzdFNsZWVwZXIpO1xuXG4gICAgICAgIC8vIFNldCBlZGdlIHN0YXJ0IHNsZWVwZXIncyBjaGlsZFxuICAgICAgICBlZGdlLnN0YXJ0U2xlZXBlci5hZGRDaGlsZChjbG9zZXN0U2xlZXBlcik7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGFpbnRlciBldmVudCB0byByZWRyYXdcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5yZXBhaW50LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gc2xlZXBlclxuICAgICAqIFN0YXJ0IHRleHQgbW9kZSB3aGVuIGRvdWxiZSBjbGljayBvbiB0aGUgc2xlZXBlclxuICAgICAqL1xuICAgIG1vdXNlRG91YmxlQ2xpY2tDb250cm9sbGVyKHNsZWVwZXIpIHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgc3RhcnRpbmcgdGV4dCBtb2RlIGZ1bmN0aW9uIG9mIHRoYXQgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBTbGVlcGVyRXZlbnROYW1lLmFjdGl2ZVNvbWVTbGVlcGVyVGV4dE1vZGUsXG4gICAgICAgICAgICBzbGVlcGVyLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIFBhaW50ZXJFdmVudE5hbWUucmVwYWludCxcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IE1vdXNlQWN0aW9uQ29udHJvbGxlciB9OyIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBEZWVwQ2xvbmVJbmZvIH0gZnJvbSAnLi9kZWVwQ2xvbmUnO1xuaW1wb3J0IHsgXG4gICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZSxcbiAgICBQYWludGVyRXZlbnROYW1lLFxuICAgIFVuZG9SZWRvRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgU2F2ZWRPcGVyYXRpb24gfSBmcm9tICcuLi8uLi8uLi91bmRvLXJlZG8vb3BlcmF0aW9uJztcbmltcG9ydCB7IEFjdGlvblV0aWxzIH0gZnJvbSAnLi4vYWN0aW9uLXV0aWxzJztcbmltcG9ydCB7IG1vdXNlQWN0aW9uTW9kZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTbGVlcGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXInO1xuaW1wb3J0IHsgRWRnZSB9IGZyb20gJy4uLy4uL2RhdGEtbGF5ZXIvZWRnZS9lZGdlJztcblxuY2xhc3MgTW91c2VBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uWCA9IG51bGw7XG4gICAgICAgIHRoaXMubW91c2VQb3NpdGlvblkgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uTm9uZTtcbiAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAvLyBTYXZlIHRlbXBvcmFyeSB2YXJpYWJsZSBcbiAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlID0gbnVsbDtcblxuICAgICAgICAvLyBDb3B5IGZvciBkZWNvcmF0b3JcbiAgICAgICAgdGhpcy50ZW1wb3JhcnlDb3B5ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmluaXRBY3Rpb24oKTtcbiAgICB9XG4gICAgc3dpdGNoVGV4dE1vZGVcbiAgICAvKipcbiAgICAgKiBJbml0IGFsbCB0aGUgbW91c2UgYWN0aW9uIGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGluaXRBY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbnNNYXAgPSB7XG4gICAgICAgICAgICAnbW91c2Vkb3duJzogdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdtb3VzZW1vdmUnOiBBY3Rpb25VdGlscy50aHJvdHRsZXJNYWtlcih0aGlzLmhhbmRsZU1vdXNlTW92ZS5iaW5kKHRoaXMpLCAxMDAwIC8gNjApLFxuICAgICAgICAgICAgJ21vdXNldXAnOiB0aGlzLmhhbmRsZU5Nb3VzZVVwLmJpbmQodGhpcyksXG4gICAgICAgICAgICAnZGJsY2xpY2snOiB0aGlzLmhhbmRsZU1vdXNlRG91YmxlQ2xpY2suYmluZCh0aGlzKSxcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBhY3Rpb24gaW4gYWN0aW9uc01hcCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihhY3Rpb24sIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zTWFwW2FjdGlvbl0oZXZlbnQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE1vdXNlUG9zaXRpb24oeCwgeSkge1xuICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb25YID0geDtcbiAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uWSA9IHk7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0ge1xuICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCxcbiAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVXBkYXRlIG1vdXNlIHBvc2l0aW9uIHdoZW4gY2xpY2tcbiAgICAgICAgdGhpcy5zZXRNb3VzZVBvc2l0aW9uKGxvY2F0aW9uLngsIGxvY2F0aW9uLnkpO1xuXG4gICAgICAgIC8vIEZpbmQgbG9jYXRlZCBvYmplY3RcbiAgICAgICAgY29uc3QgbG9jYXRlZE9iamVjdCA9IEFjdGlvblV0aWxzLmZpbmRMb2NhdGVkT2JqZWN0KHRoaXMuY2FudmFzLCBsb2NhdGlvbik7XG5cbiAgICAgICAgaWYoISFsb2NhdGVkT2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCB7dHlwZSwgcmVzdWx0fSA9IGxvY2F0ZWRPYmplY3Q7XG4gICAgICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlRG93bkxpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gbW91c2VBY3Rpb25Nb2RlLmRvd25PbkxpbmU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25IZWFkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FuY2hvcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25BbmNob3I7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2xlZXBlcic6XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VEb3duU2xlZXBlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBtb3VzZUFjdGlvbk1vZGUuZG93bk9uU2xlZXBlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQSBjZXJ0YWluIGNvcHkgb2YgbW91c2VEb3duRWxlbWVudCBmb3IgaW5mbyBmcm9tIG9yaWdpbmFsIG5vZGVcbiAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5Q29weSA9IERlZXBDbG9uZUluZm8odGhpcy5hY3Rpb25Nb2RlLCB0aGlzLm1vdXNlRG93bkVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRG93biBvbiBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25CYWNrZ3JvdW5kO1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlRG93bkJhY2tncm91bmQsXG4gICAgICAgICAgICBudWxsXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMuYWN0aW9uTW9kZSkge1xuICAgICAgICAgICAgY2FzZShtb3VzZUFjdGlvbk1vZGUuZG93bk9uTm9uZSk6XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlckhvdmVyTW92ZS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UobW91c2VBY3Rpb25Nb2RlLmRvd25PblNsZWVwZXIpOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJEcmFnU2xlZXBlck1vdmUuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25BbmNob3IpOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJEcmFnQW5jaG9yTW92ZS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UobW91c2VBY3Rpb25Nb2RlLmRvd25PbkJhY2tncm91bmQpOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJEcmFnQmFja2dyb3VuZE1vdmUuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlKG1vdXNlQWN0aW9uTW9kZS5kb3duT25IZWFkKTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVyRHJhZ0hlYWRNb3ZlLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhbmRsZXJIb3Zlck1vdmUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBGaW5kIGxvY2F0ZWQgb2JqZWN0XG4gICAgICAgIGNvbnN0IGxvY2F0ZWRPYmplY3QgPSBBY3Rpb25VdGlscy5maW5kTG9jYXRlZE9iamVjdCh0aGlzLmNhbnZhcywgbG9jYXRpb24pO1xuICAgICAgICBpZighIWxvY2F0ZWRPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gbG9jYXRlZE9iamVjdDtcbiAgICAgICAgICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnYW5jaG9yJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NsZWVwZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW4gbGluZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWQnOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW4gSGVhZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAnYWxsLXNjcm9sbCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICB9XG5cbiAgICBfaGFuZGxlckRyYWdTbGVlcGVyTW92ZShldmVudCkge1xuICAgICAgICBjb25zdCBkcmFnU2xlZXBlckxpc3QgPSBBY3Rpb25VdGlscy5maW5kRHJhZ2dlZFNsZWVwZXIoKTtcblxuICAgICAgICAvLyBObyBub2RlIGlzIGRyYWdnZWRcbiAgICAgICAgaWYgKGRyYWdTbGVlcGVyTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSByZWxhdGl2ZSBtb3ZlIGRpc3RhbmNlXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlTW92ZURpc3RhbmNlID0ge1xuICAgICAgICAgICAgeDogZXZlbnQub2Zmc2V0WCAtIHRoaXMubW91c2VQb3NpdGlvblgsIFxuICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSAtIHRoaXMubW91c2VQb3NpdGlvblksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU2F2ZSBjdXJyZW50IG1vdXNlIHBvc2lzdGlvblxuICAgICAgICB0aGlzLnNldE1vdXNlUG9zaXRpb24oZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgYWN0aW9uIGNvbnRyb2xsZXJcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgQWN0aW9uQ29udHJvbGxlckV2ZW50TmFtZS5tb3VzZU1vdmVTbGVlcGVyLFxuICAgICAgICAgICAgZHJhZ1NsZWVwZXJMaXN0LFxuICAgICAgICAgICAgcmVsYXRpdmVNb3ZlRGlzdGFuY2UsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2hhbmRsZXJEcmFnQW5jaG9yTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMudGVtcG9yYXJ5RWRnZSkge1xuICAgICAgICAgICAgY29uc3QgW3NsZWVwZXIsIHNsZWVwZXJBbmNob3JdID0gdGhpcy5tb3VzZURvd25FbGVtZW50O1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRMb2FjdGlvbiA9IHNsZWVwZXJBbmNob3IubG9jYXRpb247XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgdGVtcG9yYXJ5IGVnZGUgb2JqZWN0XG4gICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUVkZ2UgPSBuZXcgRWRnZSgpO1xuICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlLmNoYW5nZVN0YXJ0KHNsZWVwZXIpO1xuICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlLnNldExvY2F0aW9uKCdzdGFydCcsIHN0YXJ0TG9hY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBlbmQgbG9jYXRpb25cbiAgICAgICAgY29uc3QgZW5kTG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLCBcbiAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFksXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlLnNldExvY2F0aW9uKCdlbmQnLCBlbmRMb2NhdGlvbik7XG4gICAgICAgIFxuICAgICAgICAvLyBTYXZlIGN1cnJlbnQgbW91c2UgcG9zaXN0aW9uXG4gICAgICAgIHRoaXMuc2V0TW91c2VQb3NpdGlvbihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwYWludGVyIGV2ZW50IHRvIHJlZHJhd1xuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2hhbmRsZXJEcmFnSGVhZE1vdmUoZXZlbnQpIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHJlbGF0aXZlIG1vdmUgZGlzdGFuY2VcbiAgICAgICAgY29uc3QgY3VycmVudFBvc2lzdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGV2ZW50Lm9mZnNldFgsIFxuICAgICAgICAgICAgeTogZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgfTtcblxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlTW92ZUhlYWQsXG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICBjdXJyZW50UG9zaXN0aW9uLFxuICAgICAgICApXG4gICAgfVxuXG4gICAgX2hhbmRsZXJEcmFnQmFja2dyb3VuZE1vdmUoZXZlbnQpIHtcbiAgICAgICAgLy8gVE9ETzogQ3JlYXRlIHNlbGVjdGlvbiBib3hcbiAgICB9XG5cbiAgICBoYW5kbGVOTW91c2VVcChldmVudCkge1xuICAgICAgICBzd2l0Y2godGhpcy5hY3Rpb25Nb2RlKSB7XG4gICAgICAgICAgICBjYXNlIChtb3VzZUFjdGlvbk1vZGUuZG93bk9uU2xlZXBlcik6XG4gICAgICAgICAgICAgICAgY29uc3QgZHJhZ1NsZWVwZXJMaXN0ID0gQWN0aW9uVXRpbHMuZmluZERyYWdnZWRTbGVlcGVyKCk7XG5cbiAgICAgICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VVcFNsZWVwZXIsXG4gICAgICAgICAgICAgICAgICAgIGRyYWdTbGVlcGVyTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlDb3B5LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChtb3VzZUFjdGlvbk1vZGUuZG93bk9uQW5jaG9yKTpcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0T2JqZWN0QW5jaG9yID0gQWN0aW9uVXRpbHMuZmluZENsb3Nlc3RBbmNob3Ioe1xuICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlVXBBbmNob3IsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlFZGdlLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0T2JqZWN0QW5jaG9yLFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUVkZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAobW91c2VBY3Rpb25Nb2RlLmRvd25PbkhlYWQpOlxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RPYmplY3RIZWFkID0gQWN0aW9uVXRpbHMuZmluZENsb3Nlc3RBbmNob3Ioe1xuICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5vZmZzZXRZLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjbG9zZXN0T2JqZWN0SGVhZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZW5kIGRpcmVjdGx5IHRvIFVuZG9SZWRvIHN0YWNrIChOb3RlIG9ubHkgaGVhZCBpcyBzcGVpY2lhbClcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLmFkZE11dGF0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogU2F2ZWRPcGVyYXRpb24ubW92ZUhlYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFbmRMb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLm1vdXNlRG93bkVsZW1lbnQuZW5kTG9jYXRpb24ueCAtIHRoaXMudGVtcG9yYXJ5Q29weS54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLm1vdXNlRG93bkVsZW1lbnQuZW5kTG9jYXRpb24ueSAtIHRoaXMudGVtcG9yYXJ5Q29weS55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lLm1vdXNlVXBIZWFkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3RPYmplY3RIZWFkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUNvcHksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKG1vdXNlQWN0aW9uTW9kZS5kb3duT25CYWNrZ3JvdW5kKTpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJhY2sgdG8gZGVmYXVsdCBzdGF0dXNcbiAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gbW91c2VBY3Rpb25Nb2RlLmRvd25Pbk5vbmU7XG4gICAgICAgIHRoaXMudGVtcG9yYXJ5Q29weSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGNhbGxiYWNrIGZvciBkb3VibGUgY2xpY2sgb3BlcmF0aW9uXG4gICAgICogQHBhcmFtIHsqfSBldmVudCBcbiAgICAgKi9cbiAgICBoYW5kbGVNb3VzZURvdWJsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIC8vIE9ubHkgQWN0aXZlIHdoZW4gZG91YmxlIGNsaWNrIG9uIHNsZWVwZXJcbiAgICAgICAgaWYgKCF0aGlzLm1vdXNlRG93bkVsZW1lbnQgaW5zdGFuY2VvZiBTbGVlcGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIGlmIHRoZSBsb2NhdGlvbiBpcyBvbiB0aGUgdGhhdCBzbGVlcGVyXG4gICAgICAgIGNvbnN0IGlzSW5UaGlzU2xlZXBlciA9IHRoaXMuY2FudmFzQ29udGV4dC5pc1BvaW50SW5QYXRoKFxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50LmNhbnZhc1BhdGgsXG4gICAgICAgICAgICBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgZXZlbnQub2Zmc2V0WSxcbiAgICAgICAgKVxuICAgICAgICBcbiAgICAgICAgaWYgKCFpc0luVGhpc1NsZWVwZXIgfHwgdGhpcy5tb3VzZURvd25FbGVtZW50LmlzVGV4dE1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBDaGFuZ2UgdGhlIG1vdXNlIGFjdGlvbiBtb2RlXG4gICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IG1vdXNlQWN0aW9uTW9kZS5kb3duT25UZXh0O1xuXG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIEFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUubW91c2VEb3VibGVDbGljayxcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCxcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IE1vdXNlQWN0aW9uIH07IiwiZXhwb3J0IGNvbnN0IERlZmF1bHRFZGdlV2VpZ2h0ID0gMC41O1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdFNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbiA9IHtcbiAgICBkcmF3VHlwZTogJ2NpcmNsZScsXG4gICAgeDogNTAwLFxuICAgIHk6IDUwMCxcbiAgICByYWRpdXM6IDMwLFxuICAgIHN0YXJ0QW5nbGU6IDAsXG4gICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuICAgIGlzRmlsbGVkOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJ3JlZCcsXG4gICAgaXNCb3JkZXI6IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRBY3RpdmVJbmZvcm1hdGlvbiA9IHtcbiAgICBpc0JvcmRlcjogdHJ1ZSxcbiAgICBib3JkZXJXaXRoOiAzLFxuICAgIGJvcmRlckNvbG9yOiAnYmx1ZScsXG4gICAgaXNBbmNob3I6IHRydWUsXG59OyIsImltcG9ydCB7IEVkZ2VQb29sRXZlbnROYW1lIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5cbmNsYXNzIEVkZ2VQb29sIHtcbiAgICAvKipcbiAgICAgKiBHZXQgc2luZ2xldG9uIGluc3RhbmNlIG9mIFNsZWVwZXJQb29sXG4gICAgICogQHJldHVybnMge0VkZ2VQb29sfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRWRnZVBvb2woKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIUVkZ2VQb29sLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2wgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pbml0RXZlbnRzSGFuZGxlcigpO1xuICAgICAgICAgICAgRWRnZVBvb2wuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEVkZ2VQb29sLmluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBTbGVlcGVyIFBvb2xcbiAgICAgKi9cbiAgICBpbml0RXZlbnRzSGFuZGxlcigpIHtcbiAgICAgICAgLy8gUmVnaXN0ZXIgYWRkaW5nIHNsZWVwZXJcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgRWRnZVBvb2xFdmVudE5hbWUuYWRkRWRnZSwgXG4gICAgICAgICAgICB0aGlzLmFkZEVkZ2UuYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHNsZWVwZXIgb2JqZWN0IGludG8gZWRnZSBwb29sXG4gICAgICogQHBhcmFtIHtFZGdlfSBzbGVlcGVyIFxuICAgICAqL1xuICAgIGFkZEVkZ2UoZWRnZSkge1xuICAgICAgICB0aGlzLnBvb2wucHVzaChlZGdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYW4gZWRnZSBmcm9tIGVkZ2UgcG9vbFxuICAgICAqIEBwYXJhbSB7Kn0gZWRnZSBcbiAgICAgKi9cbiAgICByZW1vdmVFZGdlKGVkZ2UpIHtcbiAgICAgICAgY29uc3QgbG9jYXRlZEluZGV4ID0gdGhpcy5wb29sLmZpbmRJbmRleChlZGdlSW5Qb29sID0+IGVkZ2VJblBvb2wgPT09IGVkZ2UpO1xuICAgICAgICBpZiAobG9jYXRlZEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wb29sLnNwbGljZShsb2NhdGVkSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRWRnZVBvb2xlciA9IEVkZ2VQb29sLmdldEluc3RhbmNlKCk7IiwiaW1wb3J0IHsgRGVmYXVsdEVkZ2VXZWlnaHQgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFxuICAgIEVkZ2VQb29sRXZlbnROYW1lLCBcbiAgICBFZGdlRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgU2xlZXBlciB9IGZyb20gJy4uL3NsZWVwZXIvc2xlZXBlcic7XG5pbXBvcnQgeyBFZGdlUG9vbGVyIH0gZnJvbSAnLi9lZGdlLXBvb2wnO1xuXG5jbGFzcyBFZGdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gRGF0YSBpbmZvcm1hdGlvblxuICAgICAgICB0aGlzLnN0YXJ0U2xlZXBlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZW5kU2xlZXBlciA9IG51bGw7XG4gICAgICAgIHRoaXMud2VpZ2h0ID0gbnVsbDtcblxuICAgICAgICAvLyBDYW52YXMgcGF0aCBpbmZvcm1hdGlvblxuICAgICAgICB0aGlzLnN0YXJ0TG9jYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmVuZExvY2F0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW52YXNQYXRoID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEluaXQgZXZlbnRcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBFdmVudFxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoRWRnZVBvb2xFdmVudE5hbWUuYWRkRWRnZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZVNvbWVFZGdlLFxuICAgICAgICB9ID0gRWRnZUV2ZW50TmFtZTtcblxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbYWN0aXZlU29tZUVkZ2VdID0gdGhpcy5hY3RpdmVTb21lRWRnZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGFjdGl2ZSBzb21lIG5vZGUgaGFuZGxlclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IGluIGV2ZW50TmFtZXNNYXApIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnROYW1lc01hcFtldmVudF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzdGFydCBzbGVlcGVyIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTbGVlcGVyfSBcbiAgICAgKi9cbiAgICBnZXRTdGFydFNsZWVwZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0U2xlZXBlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGVuZCBzbGVlcGVyIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTbGVlcGVyfSBcbiAgICAgKi9cbiAgICBnZXRFbmRTbGVlcGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmRTbGVlcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgd2VpZ2h0IG9uIHRoaXMgZWRnZVxuICAgICAqIEByZXR1cm5zIHtmbG9hdH1cbiAgICAgKi9cbiAgICBnZXRXZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIHdlaWdodCB0byB0aGUgZ2l2ZW4gdmFsdWVcbiAgICAgKiBAcGFyYW0ge2Zsb2F0fSBuZXdXZWlnaHQgXG4gICAgICovXG4gICAgY2hhbmdlV2VpZ2h0KG5ld1dlaWdodCkge1xuICAgICAgICB0aGlzLndlaWdodCA9IG5ld1dlaWdodDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBzdGFydCBzbGVlcGVyXG4gICAgICogQHBhcmFtIHsqfSBuZXdTbGVlcGVyIFxuICAgICAqL1xuICAgIGNoYW5nZVN0YXJ0KG5ld1NsZWVwZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydFNsZWVwZXIgPSBuZXdTbGVlcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgZW5kIHNsZWVwZXJcbiAgICAgKiBAcGFyYW0geyp9IG5ld1NsZWVwZXIgXG4gICAgICovXG4gICAgY2hhbmdlRW5kKG5ld1NsZWVwZXIpIHtcbiAgICAgICAgdGhpcy5lbmRTbGVlcGVyID0gbmV3U2xlZXBlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgc3RhcnQgYW5kIGVuZCBsb2NhdGlvblxuICAgICAqL1xuICAgIHNldExvY2F0aW9uKHR5cGUsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydExvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZW5kTG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY2FudmFzIHBhdGhcbiAgICAgKi9cbiAgICBzZXRDYW52YXNQYXRoKGVkZ2VQYXRoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzUGF0aCA9IGVkZ2VQYXRoO1xuICAgIH1cblxuICAgIGFjdGl2ZVNvbWVFZGdlKGVkZ2UpIHtcbiAgICAgICAgaWYgKGVkZ2UgPT09IHRoaXMgJiYgdGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBY3RpdmUgJiYgZWRnZSAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlU2VsZigpIHtcbiAgICAgICAgRWRnZVBvb2xlci5yZW1vdmVFZGdlKHRoaXMpO1xuICAgICAgICAvLyBEZWxldGUgaXQgaW4gc3RhcnQgc2xlZXBlclxuICAgICAgICB0aGlzLnN0YXJ0U2xlZXBlci5yZW1vdmVFZGdlKHRoaXMpO1xuXG4gICAgICAgIC8vIERlbGV0ZSBpdCBpbiBlbmQgc2xlZXBlclxuICAgICAgICBpZiAoISF0aGlzLmVuZFNsZWVwZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kU2xlZXBlci5yZW1vdmVJbmNvbWluZ0VkZ2UodGhpcyk7XG5cbiAgICAgICAgICAgIC8vIERlbGV0ZSB0aGUgY2hpbGQgb2Ygc3RhcnQgc2xlZXBlclxuICAgICAgICAgICAgdGhpcy5zdGFydFNsZWVwZXIucmVtb3ZlQ2hpbGQodGhpcy5lbmRTbGVlcGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY292ZXJTZWxmKCkge1xuICAgICAgICBFZGdlUG9vbGVyLmFkZEVkZ2UodGhpcyk7XG4gICAgICAgIC8vIFJlY292ZXIgaXQgaW4gc3RhcnQgc2xlZXBlclxuICAgICAgICB0aGlzLnN0YXJ0U2xlZXBlci5hZGRFZGdlKHRoaXMpO1xuXG4gICAgICAgIC8vIFJlY292ZXIgaXQgaW4gZW5kIHNsZWVwZXJcbiAgICAgICAgaWYgKCEhdGhpcy5lbmRTbGVlcGVyKSB7XG4gICAgICAgICAgICB0aGlzLmVuZFNsZWVwZXIuYWRkSW5jb21pbmdFZGdlKHRoaXMpO1xuXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGNoaWxkIG9mIHN0YXJ0IHNsZWVwZXJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTbGVlcGVyLmFkZENoaWxkKHRoaXMuZW5kU2xlZXBlcilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgRWRnZSB9OyIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBcbiAgICBTbGVlcGVyUG9vbEV2ZW50TmFtZSxcbiAgICBTbGVlcGVyRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuXG5jbGFzcyBTbGVlcGVyUG9vbCB7XG4gICAgLyoqXG4gICAgICogR2V0IHNpbmdsZXRvbiBpbnN0YW5jZSBvZiBTbGVlcGVyUG9vbFxuICAgICAqIEByZXR1cm5zIHtTbGVlcGVyUG9vbH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFNsZWVwZXJQb29sKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFTbGVlcGVyUG9vbC5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5wb29sID0gW107XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaW5pdEV2ZW50c0hhbmRsZXIoKTtcbiAgICAgICAgICAgIFNsZWVwZXJQb29sLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTbGVlcGVyUG9vbC5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBldmVudCBoYW5kbGVyIHJlbGF0ZWQgdG8gU2xlZXBlciBQb29sXG4gICAgICovXG4gICAgaW5pdEV2ZW50c0hhbmRsZXIoKSB7XG4gICAgICAgIC8vIFJlZ2lzdGVyIGFkZGluZyBzbGVlcGVyXG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFNsZWVwZXJQb29sRXZlbnROYW1lLmFkZFNsZWVwZXIsIFxuICAgICAgICAgICAgdGhpcy5hZGRTbGVlcGVyLmJpbmQodGhpcylcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBSZWdpc3RlciBhY3RpdmUgc2xlZXBlclxuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBTbGVlcGVyRXZlbnROYW1lLmFjdGl2ZVNvbWVTbGVlcGVyLFxuICAgICAgICAgICAgdGhpcy5yZU9yZGVyU2xlZXBlci5iaW5kKHRoaXMpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBzbGVlcGVyIG9iamVjdCBpbnRvIHNsZWVwZXIgcG9vbFxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gc2xlZXBlciBcbiAgICAgKi9cbiAgICBhZGRTbGVlcGVyKHNsZWVwZXIpIHtcbiAgICAgICAgdGhpcy5wb29sLnB1c2goc2xlZXBlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgZ2l2ZW4gc2xlZXBlclxuICAgICAqIEBwYXJhbSB7Kn0gc2xlZXBlciBcbiAgICAgKi9cbiAgICByZW1vdmVTbGVlcGVyKHNsZWVwZXIpIHtcbiAgICAgICAgY29uc3QgbG9jYXRlZEluZGV4ID0gdGhpcy5wb29sLmZpbmRJbmRleChzbGVlcGVySW5Qb29sID0+IHNsZWVwZXJJblBvb2wgPT09IHNsZWVwZXIpO1xuICAgICAgICBpZiAobG9jYXRlZEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wb29sLnNwbGljZShsb2NhdGVkSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVPcmRlclNsZWVwZXIoc2xlZXBlcikge1xuICAgICAgICBjb25zdCBzbGVlcGVySW5kZXggPSB0aGlzLnBvb2wuZmluZEluZGV4KHNsZWVwZXJJblBvb2wgPT4gc2xlZXBlckluUG9vbCAgPT09IHNsZWVwZXIpO1xuICAgICAgICB0aGlzLnBvb2wuc3BsaWNlKHNsZWVwZXJJbmRleCwgMSk7XG4gICAgICAgIHRoaXMucG9vbCA9IFsuLi50aGlzLnBvb2wsIHNsZWVwZXJdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFNsZWVwZXJQb29sZXIgPSBTbGVlcGVyUG9vbC5nZXRJbnN0YW5jZSgpOyIsImltcG9ydCB7IFxuICAgIFBhaW50ZXJFdmVudE5hbWUsXG4gICAgU2xlZXBlckV2ZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZXZlbnRcIjtcblxuY2xhc3MgVGV4dFNsZWVwZXJUZW1wU3RhY2sge1xuICAgIGNvbnN0cnVjdG9yKG9yaWdpblRleHQpIHtcbiAgICAgICAgdGhpcy5wb2ludGVyID0gMDtcbiAgICAgICAgdGhpcy5zdGFja0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5zdGFja0xpc3QucHVzaChvcmlnaW5UZXh0KTtcbiAgICB9XG5cbiAgICBnZXQgdGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tMaXN0W3RoaXMucG9pbnRlcl07XG4gICAgfVxuXG4gICAgc2V0IHRleHQodmFsKSB7XG4gICAgICAgIHRoaXMucG9pbnRlciArPSAxO1xuICAgICAgICB0aGlzLnN0YWNrTGlzdC5wdXNoKHZhbCk7XG4gICAgfVxuXG4gICAgdW5kbygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9pbnRlciA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnRlciAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVkbygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9pbnRlciA8IHRoaXMuc3RhY2tMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnRlciArPSAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNsYXNzIFRleHRTbGVlcGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc1RleHRNb2RlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2V0IGZvciBkZWZhdWx0IHRleHQgY29uZmlnXG4gICAgICAgIHRoaXMudGV4dEluZm9ybWF0aW9uID0ge1xuICAgICAgICAgICAgc2l6ZTogMTUsXG4gICAgICAgICAgICBzdHlsZTogJ1RpbWVzIE5ldyBSb21hbicsXG4gICAgICAgICAgICBjb250ZW50OiAnYScsXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGV4dGFyZWFJbmZvcm1hdGlvbiA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudGV4dGFyZWFCb3VuZGluZ0JveFBhdGggPSBudWxsO1xuXG4gICAgICAgIC8vIFJlaWdpc3RlciBmb3IgdGV4dCB0ZW1wIHN0YWNrXG4gICAgICAgIHRoaXMudGV4dFRlbXBTdGFjayA9IG51bGw7XG5cbiAgICAgICAgdGhpcy50ZXh0SW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIHRleHRJbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyBFeHRyYWN0IGV2ZW50IG5hbWVcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlU29tZVNsZWVwZXJUZXh0TW9kZSxcbiAgICAgICAgfSA9IFNsZWVwZXJFdmVudE5hbWU7XG5cbiAgICAgICAgY29uc3QgZXZlbnROYW1lc01hcCA9IHt9O1xuICAgICAgICBldmVudE5hbWVzTWFwW2FjdGl2ZVNvbWVTbGVlcGVyVGV4dE1vZGVdID0gdGhpcy5zdGFydFRleHRNb2RlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgYWN0aXZlIHNvbWUgbm9kZSBoYW5kbGVyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnQgaW4gZXZlbnROYW1lc01hcCkge1xuICAgICAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudE5hbWVzTWFwW2V2ZW50XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzdGFydCB0aGUgdGV4dCBtb2RlXG4gICAgICovXG4gICAgc3RhcnRUZXh0TW9kZShzbGVlcGVyKSB7XG4gICAgICAgIGlmIChzbGVlcGVyID09IHRoaXMgJiYgdGhpcy5pc1RleHRNb2RlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5pc1RleHRNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGV4dFRlbXBTdGFjayA9IG5ldyBUZXh0U2xlZXBlclRlbXBTdGFjayh0aGlzLnRleHRJbmZvcm1hdGlvbi5jb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzVGV4dE1vZGUgJiYgc2xlZXBlciAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5pc1RleHRNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRleHRUZW1wU3RhY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZW5kIHRoZSB0ZXh0IG1vZGVcbiAgICAgKi9cbiAgICBlbmRUZXh0TW9kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUZXh0TW9kZSkge1xuICAgICAgICAgICAgdGhpcy5pc1RleHRNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRleHRUZW1wU3RhY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgdGV4dCBcbiAgICAgKi9cbiAgICBkcmF3VGV4dCgpIHtcbiAgICAgICAgLy8gR2V0IHNsZWVwZXIgY2VudGVyXG4gICAgICAgIGNvbnN0IHRleHRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzSW5mb3JtYXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzSW5mb3JtYXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBHZXQgbWF4IHdpZHRoXG4gICAgICAgIGNvbnN0IHRleHRNYXhXaWR0aCA9IHRoaXMuY2FudmFzSW5mb3JtYXRpb24ucmFkaXVzICogTWF0aC5zcXJ0KDMpO1xuICAgICAgICBcbiAgICAgICAgLy8gRHJhdyB0aGUgdGV4dFxuICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLnRleHRXcml0ZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGV4dFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiB0ZXh0TWF4V2lkdGgsXG4gICAgICAgICAgICAgICAgaW5mb3JtYXRpb246IHRoaXMudGV4dEluZm9ybWF0aW9uLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dE9yVGV4dGFyZWFJbmZvcm1hdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIHRleHRlcmFcbiAgICAgKi9cbiAgICBkcmF3VGV4dEFyZWEoKSB7XG4gICAgICAgIC8vIE9ubHkgZHJhdyBpdCB3aGVuIHRleHRtb2RlIGlzIG9uXG4gICAgICAgIGlmICghdGhpcy5pc1RleHRNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgU2xlZXBlciBjZW50ZXJcbiAgICAgICAgY29uc3Qgc2xlZXBlclBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jYW52YXNJbmZvcm1hdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXNJbmZvcm1hdGlvbi55LFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIERyYXcgdGhlIHRleHRcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNsZWVwZXJQb3NpdGlvbixcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uOiB0aGlzLnRleHRhcmVhSW5mb3JtYXRpb24sXG4gICAgICAgICAgICAgICAgZHJhd1R5cGU6ICd0ZXh0YXJlYScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5fc2V0VGV4dGFyZWFQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRleHQgLyB0ZXh0YXJlYSBpbmZvcm1hdGlvblxuICAgICAqIEBwYXJhbSB7Kn0gcHJvcGVydHlPYmplY3QgXG4gICAgICogQHBhcmFtIHsqfSB0eXBlIFxuICAgICAqL1xuICAgIHNldFRleHRPclRleHRhcmVhSW5mb3JtYXRpb24ocHJvcGVydHlPYmplY3QsIHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgIT09ICd0ZXh0JyAmJiB0eXBlICE9PSAndGV4dGFyZWEnKSB7XG4gICAgICAgICAgICBFcnJvcignV3JvbmcgdHlwZSB3aGVuIHNldHRpbmcgdGV4dCAvIHRleHRhcmUgaW5mb3JtYXRpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvclNldE9iamVjdCA9ICh0eXBlID09ICd0ZXh0JykgPyB0aGlzLnRleHRJbmZvcm1hdGlvbiA6IHRoaXMudGV4dGFyZWFJbmZvcm1hdGlvbjtcblxuICAgICAgICAvLyBJdGVyYXRlIHRoZSBhbGVyYXRpb24gYW5kIHVwZGF0ZVxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHByb3BlcnR5T2JqZWN0W3Byb3BlcnR5XTtcblxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICYmIGZvclNldE9iamVjdFtwcm9wZXJ0eV0gIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZm9yU2V0T2JqZWN0W3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRHJhdyB0ZXh0IGFyZWEgd2hlbiBcbiAgICAgICAgaWYgKHR5cGUgPT0gJ3RleHRhcmVhJykge1xuICAgICAgICAgICAgdGhpcy5kcmF3VGV4dEFyZWEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBib3VuZGluZyBib3ggcGF0aFxuICAgICAqIEBwYXJhbSB7Kn0gYm91bmRpbmdCb3hQYXRoIFxuICAgICAqL1xuICAgIF9zZXRUZXh0YXJlYVBhdGgoYm91bmRpbmdCb3hQYXRoKSB7XG4gICAgICAgIHRoaXMudGV4dGFyZWFCb3VuZGluZ0JveFBhdGggPSBib3VuZGluZ0JveFBhdGg7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUZXh0U2xlZXBlciB9OyIsImltcG9ydCB7IEVkZ2UgfSBmcm9tICcuLi9lZGdlL2VkZ2UnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IGdldEFjdGl2aXR5QnlXZWlnaHQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9tYXRoLXV0aWxzJztcbmltcG9ydCB7IFxuICAgIERlZmF1bHRTbGVlcGVyQ2FudmFzSW5mb3JtYXRpb24sXG4gICAgRGVmYXVsdEFjdGl2ZUluZm9ybWF0aW9uLFxufSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgXG4gICAgU2xlZXBlckV2ZW50TmFtZSxcbiAgICBTbGVlcGVyUG9vbEV2ZW50TmFtZSxcbiAgICBQYWludGVyRXZlbnROYW1lLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgVGV4dFNsZWVwZXIgfSBmcm9tICcuL3NsZWVwZXItdGV4dCc7IFxuaW1wb3J0IHsgU2xlZXBlclBvb2xlciB9IGZyb20gJy4uL3NsZWVwZXIvc2xlZXBlci1wb29sJztcblxuY2xhc3MgU2xlZXBlciBleHRlbmRzIFRleHRTbGVlcGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXMsIGNhbnZhc0luZm9ybWF0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pc1NsZWVwaW5nID0gc3RhdHVzIHx8IHRydWU7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RyYWcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmVkZ2VMaXN0ID0gW107XG4gICAgICAgIHRoaXMuaW5jb21pbmdFZGdlTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmNoaWxkRWRnZU1hcExpc3QgPSBbXTtcblxuICAgICAgICB0aGlzLmNhbnZhc0luZm9ybWF0aW9uID0gY2FudmFzSW5mb3JtYXRpb24gfHwgRGVmYXVsdFNsZWVwZXJDYW52YXNJbmZvcm1hdGlvbjtcbiAgICAgICAgdGhpcy5jYW52YXNQYXRoID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW52YXNBbmNob3JzUGF0aExpc3QgPSBudWxsO1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIEV2ZW50XG4gICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChTbGVlcGVyUG9vbEV2ZW50TmFtZS5hZGRTbGVlcGVyLCB0aGlzKTtcbiAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgUGFpbnRlckV2ZW50TmFtZS5maWd1cmVEcmF3LCBcbiAgICAgICAgICAgIHRoaXMuY2FudmFzSW5mb3JtYXRpb24sIFxuICAgICAgICAgICAgdGhpcy5zZXRDYW52YXNQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgdGV4dFxuICAgICAgICB0aGlzLmRyYXdUZXh0QXJlYSgpO1xuICAgICAgICB0aGlzLmRyYXdUZXh0KCk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBldmVudCBuYW1lXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZVNvbWVTbGVlcGVyLFxuICAgICAgICB9ID0gU2xlZXBlckV2ZW50TmFtZTtcblxuICAgICAgICBjb25zdCBldmVudE5hbWVzTWFwID0ge307XG4gICAgICAgIGV2ZW50TmFtZXNNYXBbYWN0aXZlU29tZVNsZWVwZXJdID0gdGhpcy5jaGFuZ2VBY3RpdmVTdGF0dXMuYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBSZWdpc3RlciBhY3RpdmUgc29tZSBub2RlIGhhbmRsZXJcbiAgICAgICAgZm9yIChjb25zdCBldmVudCBpbiBldmVudE5hbWVzTWFwKSB7XG4gICAgICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50TmFtZXNNYXBbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNoaWxkIG5vZGUgZm9yIGN1cnJlbnQgc2xlZXBlclxuICAgICAqIEBwYXJhbSB7U2xlZXBlcn0gY2hpbGRTbGVlcGVyIFxuICAgICAqL1xuICAgIGFkZENoaWxkKGNoaWxkU2xlZXBlcikge1xuICAgICAgICBpZiAoIWNoaWxkU2xlZXBlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBBZGRDaGlsZCBFcnJvcjogTm8gY2hpbGRyZW4gaXMgZ2l2ZW4hJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5wdXNoKGNoaWxkU2xlZXBlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgZ2l2ZW4gY2hpbGQgc2xlZXBlciBcbiAgICAgKiBAcGFyYW0ge1NsZWVwZXJ9IGNoaWxkU2xlZXBlciBcbiAgICAgKi9cbiAgICByZW1vdmVDaGlsZChjaGlsZFNsZWVwZXIpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0Q2hpbGRJbmRleCA9IHRoaXMuY2hpbGRyZW5MaXN0LmZpbmRJbmRleChcbiAgICAgICAgICAgIGNoaWxkT2JqZWN0ID0+IGNoaWxkT2JqZWN0ID09PSBjaGlsZFNsZWVwZXJcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBjaGlsZFxuICAgICAgICBpZiAoZXhwZWN0Q2hpbGRJbmRleCA9PT0gLTEgfHwgZXhwZWN0Q2hpbGRJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTbGVlcGVyIFJlbW92ZUNoaWxkIEVycm9yOiBOb3QgZmluZCB0aGUgY2hpbGQhJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgY2hpbGRcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3Quc3BsaWNlKGV4cGVjdENoaWxkSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlciBcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGVkZ2UgRWRnZSBvYmplY3QgXG4gICAgICovXG4gICAgYWRkRWRnZShlZGdlKSB7XG4gICAgICAgIGlmICghZWRnZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBhZGRFZGdlIEVycm9yOiBObyBlZGdlIGlzIGdpdmVuIScpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlciBcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGVkZ2UgRWRnZSBvYmplY3RcbiAgICAgKi9cbiAgICByZW1vdmVFZGdlKGVkZ2UpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0RWRnZUluZGV4ID0gdGhpcy5lZGdlTGlzdC5maW5kSW5kZXgoXG4gICAgICAgICAgICBlZGdlT2JqZWN0ID0+IGVkZ2VPYmplY3QgPT09IGVkZ2VcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBjaGlsZFxuICAgICAgICBpZiAoZXhwZWN0RWRnZUluZGV4ID09PSAtMSB8fCBleHBlY3RFZGdlSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBSZW1vdmVFZGdlIEVycm9yOiBOb3QgZmluZCB0aGUgZWRnZSEnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjaGlsZFxuICAgICAgICB0aGlzLmVkZ2VMaXN0LnNwbGljZShleHBlY3RFZGdlSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGluY29taW5nIGVkZ2UgZm9yIGN1cnJlbnQgc2xlZXBlclxuICAgICAqL1xuICAgIGFkZEluY29taW5nRWRnZShlZGdlKSB7XG4gICAgICAgIGlmICghZWRnZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBhZGRJbmNvbWluZ0VkZ2UgRXJyb3I6IE5vIGVkZ2UgaXMgZ2l2ZW4hJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluY29taW5nRWRnZUxpc3QucHVzaChlZGdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBpbmNvbWluZyBlZGdlIGZvciBjdXJyZW50IHNsZWVwZXIgXG4gICAgICogQHBhcmFtIHsqfSBlZGdlIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHJlbW92ZUluY29taW5nRWRnZShlZGdlKSB7XG4gICAgICAgIGNvbnN0IGV4cGVjdEVkZ2VJbmRleCA9IHRoaXMuaW5jb21pbmdFZGdlTGlzdC5maW5kSW5kZXgoXG4gICAgICAgICAgICBlZGdlT2JqZWN0ID0+IGVkZ2VPYmplY3QgPT09IGVkZ2VcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBjaGlsZFxuICAgICAgICBpZiAoZXhwZWN0RWRnZUluZGV4ID09PSAtMSB8fCBleHBlY3RFZGdlSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU2xlZXBlciBSZW1vdmVJbmNvbWluZ0VkZ2UgRXJyb3I6IE5vdCBmaW5kIHRoZSBlZGdlIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjaGlsZFxuICAgICAgICB0aGlzLmluY29taW5nRWRnZUxpc3Quc3BsaWNlKGV4cGVjdEVkZ2VJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBjdXJyZW50IG5vZGUgc3RhdHVzXG4gICAgICovXG4gICAgY2hhbmdlU2xlZXBpbmdTdGF0dXMoKSB7XG4gICAgICAgIHRoaXMuaXNTbGVlcGluZyA9ICF0aGlzLmlzU2xlZXBpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ5IHRvIGFjdGl2ZSB0aGUgY2hpbGRyZW4gbm9kZXNcbiAgICAgKi9cbiAgICBhY3RpdmVDaGlsZCgpIHtcbiAgICAgICAgLy8gQWN0aXZlIHRoZSBjaGlsZHJlbiBpbiBvcmRlclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5mb3JFYWNoKGNoaWxkT2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdlaWdodCA9IGNoaWxkT2JqZWN0LmVkZ2Uud2VpZ2h0O1xuICAgICAgICAgICAgLy8gQ2hhbmdlIHRoZSBjaGlsZCBzdGF0dXMgaWYgYWN0aXZlXG4gICAgICAgICAgICBpZiAoZ2V0QWN0aXZpdHlCeVdlaWdodCh3ZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRPYmplY3QuY2hpbGQuY2hhbmdlU2xlZXBpbmdTdGF0dXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjYW52YXMgcGF0aFxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmFzUGF0aE9iamVjdCBjYW52YXMgcGF0aCBvYmplY3RcbiAgICAgKi9cbiAgICBzZXRDYW52YXNQYXRoKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgW2NhbnZhc1BhdGhPYmplY3QsIGFuY2hvcnNMaXN0XSA9IGFyZ3M7XG4gICAgICAgIHRoaXMuY2FudmFzUGF0aCA9IGNhbnZhc1BhdGhPYmplY3Q7XG5cbiAgICAgICAgaWYgKCEhYW5jaG9yc0xpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQW5jaG9yc1BhdGhMaXN0ID0gYW5jaG9yc0xpc3Q7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgc2xlZXBlciBhY3RpdmUgc3RhdHVzXG4gICAgICogQHBhcmFtIHsqfSBzbGVlcGVyIHRoZSBldmVudCByZWNpZXZlZCBzbGVlcHIgb2JqZWN0LCBub3RlIHRoYXQgaXQgbWF5IGJlIG90aGVyIHNsZWVwZXJzXG4gICAgICovXG4gICAgY2hhbmdlQWN0aXZlU3RhdHVzKHNsZWVwZXIpIHtcbiAgICAgICAgaWYgKHNsZWVwZXIgPT09IHRoaXMgJiYgdGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIFNlbGVjdCB0aGlzIHNsZWVwZXIgYW5kIGFjdGl2ZSBpdHNlbGZcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbihEZWZhdWx0QWN0aXZlSW5mb3JtYXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBY3RpdmUgJiYgc2xlZXBlciAhPT0gdGhpcykge1xuICAgICAgICAgICAgLy8gU2VsZWN0IG90aGVyIHNsZWVwZXIgdGhlbiBpbmFjdGl2ZSBpdHNlbGZcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNUZXh0TW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbih7XG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzQW5jaG9yOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBTZXQgZHJhZyBmbGFnXG4gICAgICAgIGlmKHNsZWVwZXIgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoRHJhZ1N0YXR1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHNsZWVwZXIgZHJhZyBzdGF0dXNcbiAgICAgKi9cbiAgICBzd2l0Y2hEcmFnU3RhdHVzKCkge1xuICAgICAgICB0aGlzLmlzRHJhZyA9ICF0aGlzLmlzRHJhZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgU2xlZXBlciBjYW52YXMgaW5mb3JtYXRpb24gYW5kIHRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydHlPYmplY3RcbiAgICAgKi9cbiAgICBjaGFuZ2VDYW52YXNJbmZvcm1hdGlvbihwcm9wZXJ0eU9iamVjdCkge1xuICAgICAgICAvLyBJdGVyYXRlIHRoZSBhbGVyYXRpb24gYW5kIHVwZGF0ZVxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHByb3BlcnR5T2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHByb3BlcnR5T2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbnZhc0luZm9ybWF0aW9uW3Byb3BlcnR5XSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0luZm9ybWF0aW9uW3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGl0c2VsZiBcbiAgICAgKi9cbiAgICBkZWxldGVTZWxmKCkge1xuICAgICAgICBTbGVlcGVyUG9vbGVyLnJlbW92ZVNsZWVwZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVjb3ZlciBpdHNlbGZcbiAgICAgKi9cbiAgICByZWNvdmVyU2VsZigpIHtcbiAgICAgICAgU2xlZXBlclBvb2xlci5hZGRTbGVlcGVyKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgU2xlZXBlciB9OyIsImltcG9ydCB7IE1vdXNlQWN0aW9uQ29udHJvbGxlciB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9tb3VzZS9tb3VzZS1hY3Rpb24tY29udHJvbGxlcic7XG5pbXBvcnQgeyBNb3VzZUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9tb3VzZS9tb3VzZS1hY3Rpb24nO1xuaW1wb3J0IHsgS2V5Ym9hcmRBY3Rpb24gfSBmcm9tICcuLi9hY3Rpb24tbGF5ZXIva2V5Ym9hcmQva2V5Ym9hcmQtYWN0aW9uJztcbmltcG9ydCB7IEtleWJvYXJkQWN0aW9uQ29udHJvbGxlciB9IGZyb20gJy4uL2FjdGlvbi1sYXllci9rZXlib2FyZC9rZXlib2FyZC1hY3Rpb24tY29udHJvbGxlcic7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9nbG9iYWwvZ2xvYmFsLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSAnLi9wYWludGVyL3BhaW50ZXInO1xuaW1wb3J0IHsgVW5kb1JlZG8gfSBmcm9tICcuLi8uLi91bmRvLXJlZG8vdW5kby1yZWRvJztcblxuY2xhc3MgQ2FudmFzIHtcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IENhbnZhcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghQ2FudmFzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgIENhbnZhcy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBDYW52YXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjYW52YXMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmluaXRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuaW5pdFBhaW50ZXIoKTtcbiAgICAgICAgdGhpcy5pbml0QWN0aW9uUmVsYXRlZCgpO1xuICAgICAgICB0aGlzLmluaXRVbmRvUmVkb1N0YWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjYW52YXMgY29udGV4dFxuICAgICAqL1xuICAgIGluaXRDb250ZXh0KCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEdsb2JhbENvbmZpZy5jYW52YXNJZCk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhbnZhcyBwYWludGVyXG4gICAgICovXG4gICAgaW5pdFBhaW50ZXIoKSB7XG4gICAgICAgIHRoaXMucGFpbnRlciA9IG5ldyBQYWludGVyKHRoaXMuY2FudmFzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhbnZhcyBhY3Rpb24gcmVsYXRlZFxuICAgICAqL1xuICAgIGluaXRBY3Rpb25SZWxhdGVkKCkge1xuICAgICAgICB0aGlzLm1vdXNlQWN0aW9uQ29udHJvbGxlciA9IG5ldyBNb3VzZUFjdGlvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy5tb3VzZUFjdGlvbiA9IG5ldyBNb3VzZUFjdGlvbih0aGlzLmNhbnZhcyk7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpb25Db250cm9sbGVyID0gbmV3IEtleWJvYXJkQWN0aW9uQ29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLmtleWJvYXJkQWN0aW9uID0gbmV3IEtleWJvYXJkQWN0aW9uKHRoaXMuY2FudmFzLCB0aGlzLm1vdXNlQWN0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IFVuZG9SZWRvU3RhY2tcbiAgICAgKi9cbiAgICBpbml0VW5kb1JlZG9TdGFjaygpIHtcbiAgICAgICAgVW5kb1JlZG8uZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IENhbnZhcyB9OyIsImV4cG9ydCBjb25zdCBEZWFmdWx0QW5jaG9yU2V0dGluZyA9IHtcbiAgICBsaW5lV2lkdGg6IDIsXG4gICAgbGluZUNvbG9yOiAnYmxhY2snLFxuICAgIGFuY2hvclJhZGl1czogNCxcbn07XG5cbmV4cG9ydCBjb25zdCBEZWFmdWx0QXJyb3dTZXR0aW5nID0ge1xuICAgIGhlYWRMZW5ndGg6IDEwLFxuICAgIGxpbmVXaWR0aDogMixcbiAgICBsaW5lQ29sb3I6ICdibGFjaycsXG59O1xuXG5leHBvcnQgY29uc3QgQWN0aXZlQXJyb3dTZXR0aW5nID0ge1xuICAgIGxpbmVXaWR0aDogMywgXG4gICAgbGluZUNvbG9yOiAnYmx1ZScsXG59O1xuXG5leHBvcnQgY29uc3QgRGVhZmF1bHRCb3VuZGluZ0JveFNldHRpbmcgPSB7XG4gICAgbGluZVdpZHRoOiAyLFxuICAgIGxpbmVDb2xvcjogJyMzMzY2RkYnLFxufSAiLCJpbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgUGFpbnRlckV2ZW50TmFtZSB9IGZyb20gJy4uLy4uLy4uLy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBcbiAgICBEZWFmdWx0QW5jaG9yU2V0dGluZyxcbiAgICBEZWFmdWx0QXJyb3dTZXR0aW5nLFxuICAgIERlYWZhdWx0Qm91bmRpbmdCb3hTZXR0aW5nLFxuICAgIEFjdGl2ZUFycm93U2V0dGluZyxcbn0gZnJvbSAnLi9jb25maWcnO1xuXG5jbGFzcyBGaWd1cmVQYWludGVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNhbnZhc0NvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dCA9IGNhbnZhc0NvbnRleHQ7XG4gICAgICAgIHRoaXMuZHJhd01hcCA9IHtcbiAgICAgICAgICAgICdjaXJjbGUnOiB0aGlzLmRyYXdDaXJjbGUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdhcnJvdyc6IHRoaXMuZHJhd0Fycm93LmJpbmQodGhpcyksXG4gICAgICAgICAgICAndGV4dGFyZWEnOiB0aGlzLmRyYXdUZXh0YXJlYS5iaW5kKHRoaXMpLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBldmVudCBoYW5kbGVyIHJlbGF0ZWQgdG8gUGFpbnRlclxuICAgICAqL1xuICAgIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIEV2ZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihQYWludGVyRXZlbnROYW1lLmZpZ3VyZURyYXcsIHRoaXMuZHJhdy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSBjb3JyZXNwb25kIGltYWdlcyBnaXZlbiByZWxhdGVkIGluZm9ybWF0aW9uXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gICAgICogQHJldHVybnMgeyp9IGNhbnZhcyBwYXRoXG4gICAgICovXG4gICAgZHJhdyhwYXJhbXMsIHNldFBhdGhDYWxsYmFjaykge1xuICAgICAgICBjb25zdCB7IGRyYXdUeXBlIH0gPSBwYXJhbXM7XG5cbiAgICAgICAgLy8gUmFpc2UgdGhlIGVycm9yIGlmIHRoZSBzaGFwZSBub3QgaW5jbHVkZWQgXG4gICAgICAgIGlmICghKGRyYXdUeXBlIGluIHRoaXMuZHJhd01hcCkpIHtcbiAgICAgICAgICAgIHJldHVybiBFcnJvcignRmlndXJlIERyYXcgRXJyb3I6IEdpdmVuIHR5cGUgbm90IGZvdW5kIScpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBEcmF3IHRoZSBjb3JyZXNwb25kIHNoYXBlIGFuZCBzZXQgdGhlIHBhdGggdG8gdGhlIHNsZWVwZXJcbiAgICAgICAgc2V0UGF0aENhbGxiYWNrKHRoaXMuZHJhd01hcFtkcmF3VHlwZV0ocGFyYW1zKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhdyBjaXJsZSBvbiBjYW52YXNcbiAgICAgKiBAcGFyYW0geyp9IHBhcmFtcyBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBkcmF3Q2lyY2xlKHBhcmFtcykge1xuICAgICAgICAvLyBFeHRyYWN0IHRoZSBkcmF3aW5nIHBhcmFtZXRlcnNcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgICBzdGFydEFuZ2xlLFxuICAgICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgICBpc0ZpbGxlZCxcbiAgICAgICAgICAgIGlzQm9yZGVyLFxuICAgICAgICAgICAgYm9yZGVyV2l0aCxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgaXNBbmNob3IsXG4gICAgICAgIH0gPSBwYXJhbXM7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgY2lyY2xlXG4gICAgICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBQYXRoMkQoKTtcbiAgICAgICAgY2lyY2xlLmFyYyhcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgcmFkaXVzLFxuICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgLy8gRmlsbCB0aGUgY2lyY2xlXG4gICAgICAgIGNvbnN0IGZpbGxDb2xvciA9IHBhcmFtc1snZmlsbENvbG9yJ107XG4gICAgICAgIGlmIChpc0ZpbGxlZCAmJiBmaWxsQ29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsU3R5bGUgPSBmaWxsQ29sb3I7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbChjaXJjbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgYm9yZGVyXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEhKFxuICAgICAgICAgICAgICAgIGlzQm9yZGVyXG4gICAgICAgICAgICAgICAgJiYgYm9yZGVyV2l0aFxuICAgICAgICAgICAgICAgICYmIGJvcmRlckNvbG9yXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmxpbmVXaWR0aCA9IGJvcmRlcldpdGg7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBib3JkZXJDb2xvcjtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2UoY2lyY2xlKTtcbiAgICAgICAgfSAgIFxuXG4gICAgICAgIC8vIERyYXcgdGhlIGFuY2hvclxuICAgICAgICBjb25zdCBhbmNob3JzUGF0aExpc3QgPSBbXTtcbiAgICAgICAgaWYgKGlzQW5jaG9yKSB7XG4gICAgICAgICAgICAvLyBTZXQgc3Ryb2tlIHN0eWxlXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQubGluZVdpZHRoID0gRGVhZnVsdEFuY2hvclNldHRpbmcubGluZVdpZHRoO1xuXG4gICAgICAgICAgICBjb25zdCBhbmNob3JQb3NpdGlvbkxpc3QgPSBbXG4gICAgICAgICAgICAgICAge3g6IHggKyByYWRpdXMsIHk6IHl9LFxuICAgICAgICAgICAgICAgIHt4OiB4IC0gcmFkaXVzLCB5OiB5fSxcbiAgICAgICAgICAgICAgICB7eDogeCwgeTogeSArIHJhZGl1c30sXG4gICAgICAgICAgICAgICAge3g6IHgsIHk6IHkgLSByYWRpdXN9LFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBhbmNob3JQb3NpdGlvbiBvZiBhbmNob3JQb3NpdGlvbkxpc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBEZWFmdWx0QW5jaG9yU2V0dGluZy5saW5lQ29sb3I7XG4gICAgICAgICAgICAgICAgY29uc3Qge3ggLHl9ID0gYW5jaG9yUG9zaXRpb247XG4gICAgICAgICAgICAgICAgY29uc3QgYW5jaG9yUGF0aCA9IG5ldyBQYXRoMkQoKTtcbiAgICAgICAgICAgICAgICBhbmNob3JQYXRoLmFyYyhcbiAgICAgICAgICAgICAgICAgICAgeCwgXG4gICAgICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgICAgIERlYWZ1bHRBbmNob3JTZXR0aW5nLmFuY2hvclJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlKGFuY2hvclBhdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsKGFuY2hvclBhdGgpO1xuICAgICAgICAgICAgICAgIGFuY2hvcnNQYXRoTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbY2lyY2xlLCBhbmNob3JzUGF0aExpc3RdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXcgYXJyb3cgb24gY2FudmFzXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbXMgXG4gICAgICovXG4gICAgZHJhd0Fycm93KHBhcmFtcykge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgc3RhcnRMb2NhdGlvbixcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLFxuICAgICAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgIH0gPSBwYXJhbXM7XG5cbiAgICAgICAgLy8gSWYgb25seSBvbmUgbG9jYXRpb24gcHJvdmlkZWQsIHRoZW4gc2V0IHRoZSBvdGhlciB0aGUgc2FtZVxuICAgICAgICBpZighc3RhcnRMb2NhdGlvbikge1xuICAgICAgICAgICAgc3RhcnRMb2NhdGlvbiA9IGVuZExvY2F0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKCFlbmRMb2NhdGlvbikge1xuICAgICAgICAgICAgZW5kTG9jYXRpb24gPSBzdGFydExvY2F0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKFxuICAgICAgICAgICAgZW5kTG9jYXRpb24ueSAtIHN0YXJ0TG9jYXRpb24ueSwgXG4gICAgICAgICAgICBlbmRMb2NhdGlvbi54IC0gc3RhcnRMb2NhdGlvbi54XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gU2V0IHN0cm9rZSBzdHlsZVxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBpc0FjdGl2ZSA/IFxuICAgICAgICAgICAgQWN0aXZlQXJyb3dTZXR0aW5nLmxpbmVDb2xvciA6XG4gICAgICAgICAgICBEZWFmdWx0QXJyb3dTZXR0aW5nLmxpbmVDb2xvcjtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmxpbmVXaWR0aCA9IGlzQWN0aXZlID8gXG4gICAgICAgICAgICBBY3RpdmVBcnJvd1NldHRpbmcubGluZVdpZHRoIDpcbiAgICAgICAgICAgIERlYWZ1bHRBcnJvd1NldHRpbmcubGluZVdpZHRoO1xuXG4gICAgICAgIGNvbnN0IGxpbmUgPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgIGNvbnN0IGhlYWQgPSBuZXcgUGF0aDJEKCk7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgbGluZSBcbiAgICAgICAgbGluZS5tb3ZlVG8oc3RhcnRMb2NhdGlvbi54LCBzdGFydExvY2F0aW9uLnkpO1xuICAgICAgICBsaW5lLmxpbmVUbyhlbmRMb2NhdGlvbi54LCBlbmRMb2NhdGlvbi55KTtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZShsaW5lKTtcblxuICAgICAgICAvLyBEcmF3IHRoZSBoZWFkXG4gICAgICAgIGhlYWQubW92ZVRvKFxuICAgICAgICAgICAgZW5kTG9jYXRpb24ueCAtIERlYWZ1bHRBcnJvd1NldHRpbmcuaGVhZExlbmd0aCAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDYpLFxuICAgICAgICAgICAgZW5kTG9jYXRpb24ueSAtIERlYWZ1bHRBcnJvd1NldHRpbmcuaGVhZExlbmd0aCAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpXG4gICAgICAgICk7XG4gICAgICAgIGhlYWQubGluZVRvKGVuZExvY2F0aW9uLngsIGVuZExvY2F0aW9uLnkpO1xuICAgICAgICBoZWFkLmxpbmVUbyhcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnggLSBEZWFmdWx0QXJyb3dTZXR0aW5nLmhlYWRMZW5ndGggKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA2KSxcbiAgICAgICAgICAgIGVuZExvY2F0aW9uLnkgLSBEZWFmdWx0QXJyb3dTZXR0aW5nLmhlYWRMZW5ndGggKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyA2KVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlKGhlYWQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtsaW5lLCBoZWFkfTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgdGV4dGFyZWFcbiAgICAgKiBAcGFyYW0geyp9IHBhcmFtcyBcbiAgICAgKi9cbiAgICBkcmF3VGV4dGFyZWEocGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNsZWVwZXJQb3NpdGlvbixcbiAgICAgICAgICAgIHRleHRhcmVhSW5mb3JtYXRpb24sXG4gICAgICAgIH0gPSBwYXJhbXM7XG5cbiAgICAgICAgY29uc3QgYm91bmRpbmdCb3hQYXRoID0gbmV3IFBhdGgyRCgpO1xuXG4gICAgICAgIGJvdW5kaW5nQm94UGF0aC5yZWN0KFxuICAgICAgICAgICAgc2xlZXBlclBvc2l0aW9uLnggLSB0ZXh0YXJlYUluZm9ybWF0aW9uLndpZHRoIC8gMixcbiAgICAgICAgICAgIHNsZWVwZXJQb3NpdGlvbi55IC0gdGV4dGFyZWFJbmZvcm1hdGlvbi5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgdGV4dGFyZWFJbmZvcm1hdGlvbi53aWR0aCxcbiAgICAgICAgICAgIHRleHRhcmVhSW5mb3JtYXRpb24uaGVpZ2h0LFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5saW5lV2lkdGggPSBEZWFmYXVsdEJvdW5kaW5nQm94U2V0dGluZy5saW5lV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5zdHJva2VTdHlsZSA9IERlYWZhdWx0Qm91bmRpbmdCb3hTZXR0aW5nLmxpbmVDb2xvcjtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnN0cm9rZShib3VuZGluZ0JveFBhdGgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGJvdW5kaW5nQm94UGF0aDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEZpZ3VyZVBhaW50ZXIgfTsiLCJpbXBvcnQgeyBGaWd1cmVQYWludGVyIH0gZnJvbSAnLi9maWd1cmUvcGFpbnRlcic7XG5pbXBvcnQgeyBUZXh0UGFpbnRlciB9IGZyb20gJy4vdGV4dC9wYWludGVyJztcbmltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBTbGVlcGVyUG9vbGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9zbGVlcGVyL3NsZWVwZXItcG9vbCc7XG5pbXBvcnQgeyBFZGdlUG9vbGVyIH0gZnJvbSAnLi4vLi4vZGF0YS1sYXllci9lZGdlL2VkZ2UtcG9vbCc7XG5pbXBvcnQgeyBQYWludGVyRXZlbnROYW1lIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcblxuY2xhc3MgUGFpbnRlciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIC8vIEluaXQgZGlmZmVyZW50IHBhaW50ZXJcbiAgICAgICAgdGhpcy5pbml0UGFpbnRlcigpO1xuXG4gICAgICAgIC8vIEluaXQgZXZlbnRlciBoYW5kbGVyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgcmVsYXRlZCB0byBQYWludGVyXG4gICAgICovXG4gICAgaW5pdEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKFBhaW50ZXJFdmVudE5hbWUucmVwYWludCwgdGhpcy5yZXBhaW50LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGluaXRQYWludGVyKCkge1xuICAgICAgICB0aGlzLmZpZ3VyZSA9IG5ldyBGaWd1cmVQYWludGVyKHRoaXMuY2FudmFzLCB0aGlzLmNhbnZhc0NvbnRleHQpO1xuICAgICAgICB0aGlzLnRleHQgPSBuZXcgVGV4dFBhaW50ZXIodGhpcy5jYW52YXMsIHRoaXMuY2FudmFzQ29udGV4dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwYWludCBhbGwgY2FudmFzIG9iamVjdFxuICAgICAqL1xuICAgIHJlcGFpbnQoKSB7XG4gICAgICAgIC8vIENsZWFuIHRoZSBjYW52YXNcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBJdGVyYXRlIHRvIGRyYXcgdGhlIHNsZWVwZXJcbiAgICAgICAgZm9yIChjb25zdCBzbGVlcGVyIG9mIFNsZWVwZXJQb29sZXIucG9vbCkge1xuICAgICAgICAgICAgLy8gVE9ETzogTWFrZSBpdCBhcyBhIGZ1bmN0aW9uIG9mIHNsZWVwZXJcbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLmZpZ3VyZURyYXcsXG4gICAgICAgICAgICAgICAgc2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbixcbiAgICAgICAgICAgICAgICBzbGVlcGVyLnNldENhbnZhc1BhdGguYmluZChzbGVlcGVyKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gUmV3cml0ZSB0aGUgdGV4dFxuICAgICAgICAgICAgc2xlZXBlci5kcmF3VGV4dCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0byBkcmF3IHRoZSBlZGdlXG4gICAgICAgIGZvciAoY29uc3QgZWRnZSBvZiBFZGdlUG9vbGVyLnBvb2wpIHtcbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICBQYWludGVyRXZlbnROYW1lLmZpZ3VyZURyYXcsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkcmF3VHlwZTogJ2Fycm93JyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRMb2NhdGlvbjogZWRnZS5zdGFydExvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICBlbmRMb2NhdGlvbjogZWRnZS5lbmRMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IGVkZ2UuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlZGdlLnNldENhbnZhc1BhdGguYmluZChlZGdlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgUGFpbnRlciB9OyIsImltcG9ydCB7IEV2ZW50ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9ldmVudCc7XG5pbXBvcnQgeyBQYWludGVyRXZlbnROYW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcblxuY2xhc3MgVGV4dFBhaW50ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY2FudmFzQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gY2FudmFzQ29udGV4dDtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciByZWxhdGVkIHRvIFBhaW50ZXJcbiAgICAgKi9cbiAgICBpbml0RXZlbnRIYW5kbGVyKCkge1xuICAgICAgICBFdmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoUGFpbnRlckV2ZW50TmFtZS50ZXh0V3JpdGUsIHRoaXMud3JpdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGUgdGhlIHRleHQgZm9sbG93IHRoZSBwYXJhbXMgZ2l2ZW5cbiAgICAgKiBAcGFyYW0geyp9IHBhcmFtcyBcbiAgICAgKiBAcGFyYW0geyp9IHNldFBhdGhDYWxsYmFjayBcbiAgICAgKi9cbiAgICB3cml0ZShwYXJhbXMsIHNldFRleHRhcmVhQ2FsbGJhY2spIHtcbiAgICAgICAgLy8gUGFyc2UgY29uZmlndXJhdGlvbnNcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICBtYXhXaWR0aCxcbiAgICAgICAgICAgIGluZm9ybWF0aW9uLFxuICAgICAgICB9ID0gcGFyYW1zO1xuXG4gICAgICAgIC8vIEdldCBzaXplXG4gICAgICAgIGxldCBzaXplID0gaW5mb3JtYXRpb24uc2l6ZSB8fCAnMTInO1xuICAgICAgICBzaXplICs9ICdweCdcblxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZm9udCA9IGAke3NpemV9ICR7aW5mb3JtYXRpb24uc3R5bGV9YDtcbiAgICAgICAgXG4gICAgICAgIC8vIFByZXBhcmUgd3JpdGluZyB0ZXh0IHBhcmFtc1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gaW5mb3JtYXRpb24uY29sb3I7XG4gICAgICAgIGNvbnN0IGZpbGxJbmZvID0gdGhpcy5fZ2V0RmlsbExpc3QocG9zaXRpb24sIGluZm9ybWF0aW9uLmNvbnRlbnQsIG1heFdpZHRoKTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZmlsbExpc3QsXG4gICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uLFxuICAgICAgICB9ID0gZmlsbEluZm87XG5cbiAgICAgICAgLy8gU2V0IGNhbGxiYWNrIHRvIGRyYXcgdGhlIHRleHRhcmVhIGZpcnN0XG4gICAgICAgIHNldFRleHRhcmVhQ2FsbGJhY2sodGV4dGFyZWFJbmZvcm1hdGlvbiwgJ3RleHRhcmVhJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBXcml0ZSB0ZXh0XG4gICAgICAgIGZvciAobGV0IHRleHQgb2YgZmlsbExpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsVGV4dCh0ZXh0WzBdLCB0ZXh0WzFdLCB0ZXh0WzJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBmaWxsIGxpc3QgZm9yIHNpbmdsZSAvIG11bHRpcGxlIGxpbmVzXG4gICAgICogQHBhcmFtIHsqfSBwb3NpdGlvbiBzbGVlcGVyIGNlbnRlclxuICAgICAqIEBwYXJhbSB7Kn0gY29udGVudCB0ZXh0IGNvbnRlbnRcbiAgICAgKiBAcGFyYW0geyp9IG1heFdpZHRoIHByZWRlZmluZWQgbWF4aW1hbCB3aWR0aFxuICAgICAqIEByZXR1cm5zIGZpbGxpbmcgbGlzdCBhbmQgdGV4dGFyZWEgaW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBfZ2V0RmlsbExpc3QocG9zaXRpb24sIGNvbnRlbnQsIG1heFdpZHRoKSB7ICAgICBcbiAgICAgICAgbGV0IG1ldHJpY3MgPSB0aGlzLmNhbnZhc0NvbnRleHQubWVhc3VyZVRleHQoY29udGVudCk7XG4gICAgICAgIGxldCBmaWxsTGlzdCA9IFtdXG5cbiAgICAgICAgaWYgKG1ldHJpY3Mud2lkdGggPCBtYXhXaWR0aCkge1xuICAgICAgICAgICAgLy8gR2V0IHRleHQgbG9jYXRpb24gaW5mb3JtYXRpb25cbiAgICAgICAgICAgIGxldCB4ID0gcG9zaXRpb24ueCAtIG1ldHJpY3Mud2lkdGggLyAyO1xuICAgICAgICAgICAgbGV0IHkgPSBwb3NpdGlvbi55ICsgKG1ldHJpY3MuYWN0dWFsQm91bmRpbmdCb3hBc2NlbnQgKyBtZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCkgLyAyO1xuXG4gICAgICAgICAgICAvLyBHZXQgdGV4dGFyZWEgbG9jYXRpb24gaW5mb3JtYXRpb25cbiAgICAgICAgICAgIGxldCB0ZXh0YXJlYUluZm9ybWF0aW9uID0gIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAobWV0cmljcy5mb250Qm91bmRpbmdCb3hBc2NlbnQgKyBtZXRyaWNzLmZvbnRCb3VuZGluZ0JveERlc2NlbnQpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZmlsbExpc3QucHVzaChbY29udGVudCwgeCwgeV0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmaWxsTGlzdCxcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYUluZm9ybWF0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IEZvciBtdWx0aXBsZSBsaW5lc1xuICAgICAgICByZXR1cm4gZmlsbExpc3Q7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUZXh0UGFpbnRlciB9OyIsImV4cG9ydCBjb25zdCBTbGVlcGVyRXZlbnROYW1lID0ge1xuICAgIGFjdGl2ZVNvbWVTbGVlcGVyOiAnYWN0aXZlU29tZVNsZWVwZXInLFxuICAgIGFjdGl2ZVNvbWVTbGVlcGVyVGV4dE1vZGU6ICdhY3RpdmVTb21lU2xlZXBlclRleHRNb2RlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBFZGdlRXZlbnROYW1lID0ge1xuICAgIGFjdGl2ZVNvbWVFZGdlOiAnYWN0aXZlU29tZUVkZ2UnLFxufVxuXG5leHBvcnQgY29uc3QgU2xlZXBlclBvb2xFdmVudE5hbWUgPSB7XG4gICAgYWRkU2xlZXBlcjogJ2FkZFNsZWVwZXInLFxufTtcblxuZXhwb3J0IGNvbnN0IEVkZ2VQb29sRXZlbnROYW1lID0ge1xuICAgIGFkZEVkZ2U6ICdhZGRFZGdlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBQYWludGVyRXZlbnROYW1lID0ge1xuICAgIGZpZ3VyZURyYXc6ICdmaWd1cmVEcmF3JyxcbiAgICB0ZXh0V3JpdGU6ICd0ZXh0V3JpdGUnLFxuICAgIHJlcGFpbnQ6ICdyZXBhaW50Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBBY3Rpb25Db250cm9sbGVyRXZlbnROYW1lID0ge1xuICAgIG1vdXNlRG93blNsZWVwZXI6ICdtb3VzZURvd25TbGVlcGVyJyxcbiAgICBtb3VzZURvd25MaW5lOiAnbW91c2VEb3duTGluZScsXG4gICAgbW91c2VEb3duQmFja2dyb3VuZDogJ21vdXNlRG93bkJhY2tncm91bmQnLFxuICAgIG1vdXNlTW92ZVNsZWVwZXI6ICdtb3VzZU1vdmUnLFxuICAgIG1vdXNlTW92ZUFuY2hvcjogJ21vdXNlTW92ZUFuY2hvcicsXG4gICAgbW91c2VNb3ZlSGVhZDogJ21vdXNlTW92ZUhlYWQnLFxuICAgIG1vdXNlVXBTbGVlcGVyOiAnbW91c2VVcFNsZWVwZXInLFxuICAgIG1vdXNlVXBBbmNob3I6ICdtb3VzZVVwQW5jaG9yJyxcbiAgICBtb3VzZVVwSGVhZDogJ21vdXNlVXBIZWFkJyxcbiAgICBtb3VzZURvdWJsZUNsaWNrOiAnbW91c2VEb3VibGVDbGljaycsXG4gICAga2V5Ym9hcmREZWxldGU6ICdrZXlib2FyZERlbGV0ZScsXG4gICAga2V5Ym9hcmRUZXh0RGVsZXRlOiAna2V5Ym9hcmRUZXh0RGVsZXRlJyxcbiAgICBrZXlib2FyZElucHV0OiAna2V5Ym9hcmRJbnB1dCcsXG4gICAga2V5Ym9hcmRUZXh0UmVkbzogJ2tleWJvYXJkVGV4dFJlZG8nLFxuICAgIGtleWJvYXJkVGV4dFVuZG86ICdrZXlib2FyZFRleHRVbmRvJyxcbn07XG5cbmV4cG9ydCBjb25zdCBVbmRvUmVkb0V2ZW50TmFtZSA9IHtcbiAgICBhZGRNdXRhdGlvbjogJ2FkZE11dGF0aW9uJyxcbiAgICB1bmRvOiAndW5kbycsXG4gICAgcmVkbzogJ3JlZG8nLFxufTsiLCJleHBvcnQgY29uc3QgR2xvYmFsQ29uZmlnID0ge1xuICAgIGNhbnZhc0lkOiAnbXlDYW52YXMnLFxufTsiLCJleHBvcnQgY29uc3QgU2F2ZWRPcGVyYXRpb24gPSB7XG4gICAgbW92ZVNsZWVwZXI6ICdtb3ZlU2xlZXBlcicsXG4gICAgYWRkRWRnZUZyb21BbmNob3I6ICdhZGRFZGdlRnJvbUFuY2hvcicsXG4gICAgbW92ZUhlYWQ6ICdtb3ZlSGVhZCcsXG4gICAgZGVsZXRlOiAnZGVsZXRlJyxcbn07IiwiaW1wb3J0IHsgU2F2ZWRPcGVyYXRpb24gfSBmcm9tICcuL29wZXJhdGlvbic7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgUGFpbnRlckV2ZW50TmFtZSB9IGZyb20gJy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbi8qKlxuICogUmVkbyBjb250cm9sbGVyIHRvIGFjdHVhbGx5IGRlYWwgd2l0aCB0aGUgcmVkb2luZyB0aGUgdGFza3NcbiAqIEBwYXJhbSB7Kn0gdGFzayBcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkb0NvbnRyb2xsZXIodGFzaykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgb2JqZWN0LFxuICAgICAgICBwYXJhbXMsXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICB9ID0gdGFzaztcblxuICAgIHN3aXRjaChvcGVyYXRpb24pIHtcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24ubW92ZVNsZWVwZXIpOlxuICAgICAgICAgICAgcmVkb01vdmVTbGVlcGVyKG9iamVjdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5hZGRFZGdlRnJvbUFuY2hvcik6XG4gICAgICAgICAgICByZWRvTW92ZUFuY2hvcihvYmplY3QsIHBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24ubW92ZUhlYWQpOlxuICAgICAgICAgICAgcmVkb01vdmVIZWFkKG9iamVjdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5kZWxldGUpOlxuICAgICAgICAgICAgcmVkb0RlbGV0ZUl0ZW1zKG9iamVjdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgKTtcbn1cblxuXG4vKipcbiAqIFJlZG8gbW92ZSBzbGVlcGVyIG9wZXJhdGlvblxuICogQHBhcmFtIHsqfSBvYmplY3QgUmVjaWV2ZWQgY3VycmVudCBzbGVlcGVyIG5vZGVcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIG9wZXJhdGlvbiBwYXJhbWV0ZXJzXG4gKi9cbmZ1bmN0aW9uIHJlZG9Nb3ZlU2xlZXBlcihvYmplY3QsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gb2JqZWN0LmNhbnZhc0luZm9ybWF0aW9uXG4gICAgY29uc3QgeyBjaGFuZ2VMb2NhdGlvbiB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IHJlY292ZXJMb2NhdGlvbiA9IHtcbiAgICAgICAgeDogeCArIGNoYW5nZUxvY2F0aW9uLngsXG4gICAgICAgIHk6IHkgKyBjaGFuZ2VMb2NhdGlvbi55LFxuICAgIH1cblxuICAgIC8vIENoYW5nZSBzbGVlcGVyIGNhbnZhcyBsb2NhdGlvblxuICAgIG9iamVjdC5jaGFuZ2VDYW52YXNJbmZvcm1hdGlvbihyZWNvdmVyTG9jYXRpb24pO1xuXG4gICAgLy8gQ2hhbmdlIHRoZSBjb25uZWN0ZWQgb3V0Y29taW5nIGVkZ2VzJyBsb2NhdGlvblxuICAgIGZvciAoY29uc3QgZWRnZSBvZiBvYmplY3QuZWRnZUxpc3QpIHtcbiAgICAgICAgY29uc3QgZWRnZVJlY292ZXJMb2NhdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGVkZ2Uuc3RhcnRMb2NhdGlvbi54ICsgY2hhbmdlTG9jYXRpb24ueCxcbiAgICAgICAgICAgIHk6IGVkZ2Uuc3RhcnRMb2NhdGlvbi55ICsgY2hhbmdlTG9jYXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICBlZGdlLnNldExvY2F0aW9uKFxuICAgICAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgICAgIGVkZ2VSZWNvdmVyTG9jYXRpb24sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBpbmNvbWluZyBlZGdlcycgbG9jYXRpb25cbiAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygb2JqZWN0LmluY29taW5nRWRnZUxpc3QpIHtcbiAgICAgICAgY29uc3QgZWRnZVJlY292ZXJMb2NhdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGVkZ2UuZW5kTG9jYXRpb24ueCArIGNoYW5nZUxvY2F0aW9uLngsXG4gICAgICAgICAgICB5OiBlZGdlLmVuZExvY2F0aW9uLnkgKyBjaGFuZ2VMb2NhdGlvbi55LFxuICAgICAgICB9O1xuXG4gICAgICAgIGVkZ2Uuc2V0TG9jYXRpb24oXG4gICAgICAgICAgICAnZW5kJyxcbiAgICAgICAgICAgIGVkZ2VSZWNvdmVyTG9jYXRpb24sXG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlZG8gbW92ZSBhbmNob3Igb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBSZWNpZXZlZCBlZGdlIG9iamVjdFxuICogQHBhcmFtIHsqfSBwYXJhbXMgdGhlIHNsZWVwZXIgbm9kZSB3aGVyZSB0aGUgZWRnZSBzdGFydFxuICovXG5mdW5jdGlvbiByZWRvTW92ZUFuY2hvcihvYmplY3QsIHBhcmFtcykge1xuICAgIC8vIFJlbW92ZSB0aGUgZWRnZSBjcmVhdGVkXG4gICAgb2JqZWN0LnJlY292ZXJTZWxmKCk7XG59XG5cbi8qKlxuICogVW5kbyBtb3ZlIGhlYWQgb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICovXG5mdW5jdGlvbiByZWRvTW92ZUhlYWQob2JqZWN0LCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IGNoYW5nZUVuZExvY2F0aW9uIH0gPSBwYXJhbXM7XG5cbiAgICAvLyBSZWNvdmVyIGVnZGUgZW5kIGxvY2F0aW9uXG4gICAgY29uc3QgcmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICB4OiBvYmplY3QuZW5kTG9jYXRpb24ueCArIGNoYW5nZUVuZExvY2F0aW9uLngsXG4gICAgICAgIHk6IG9iamVjdC5lbmRMb2NhdGlvbi55ICsgY2hhbmdlRW5kTG9jYXRpb24ueSxcbiAgICB9O1xuXG4gICAgb2JqZWN0LnNldExvY2F0aW9uKFxuICAgICAgICAnZW5kJyxcbiAgICAgICAgcmVjb3ZlckxvY2F0aW9uLFxuICAgICk7XG5cbiAgICAvLyBSZWNvdmVyIGFkZGVkIGVuZCBzbGVlcGVyIGlmIG5lZWRlZFxuICAgIGlmICghIXBhcmFtc1snYWRkZWRFbmRTbGVlcGVyJ10pIHtcbiAgICAgICAgcGFyYW1zWydhZGRlZEVuZFNsZWVwZXInXS5hZGRJbmNvbWluZ0VkZ2Uob2JqZWN0KTtcbiAgICB9XG59XG5cbi8qKlxuICogVW5kbyBkZWxldGUgdGhlIGNsaWNrZWQgb2JqZWN0XG4gKiBAcGFyYW0geyp9IG9iamVjdCBEZWxldGVkIG9iamVjdFxuICovXG5mdW5jdGlvbiByZWRvRGVsZXRlSXRlbXMob2JqZWN0KSB7XG4gICAgb2JqZWN0LmRlbGV0ZVNlbGYoKTtcbn1cblxuIiwiaW1wb3J0IHsgU2F2ZWRPcGVyYXRpb24gfSBmcm9tICcuL29wZXJhdGlvbic7XG5pbXBvcnQgeyBFdmVudGVyIH0gZnJvbSAnLi4vdXRpbHMvZXZlbnQnO1xuaW1wb3J0IHsgUGFpbnRlckV2ZW50TmFtZSB9IGZyb20gJy4uL2dsb2JhbC9ldmVudC1uYW1lLWNvbmZpZyc7XG5cbi8qKlxuICogVW5kbyBjb250cm9sbGVyIHRvIGFjdHVhbGx5IGRlYWwgd2l0aCB0aGUgdW5kb2luZyB0aGUgdGFza3NcbiAqIEBwYXJhbSB7Kn0gdGFzayBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuZG9Db250cm9sbGVyKHRhc2spIHtcbiAgICBjb25zdCB7XG4gICAgICAgIG9iamVjdCwgXG4gICAgICAgIHBhcmFtcywgXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICB9ID0gdGFzaztcblxuICAgIHN3aXRjaChvcGVyYXRpb24pIHtcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24ubW92ZVNsZWVwZXIpOlxuICAgICAgICAgICAgdW5kb01vdmVTbGVlcGVyKG9iamVjdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5hZGRFZGdlRnJvbUFuY2hvcik6XG4gICAgICAgICAgICB1bmRvTW92ZUFuY2hvcihvYmplY3QsIHBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoU2F2ZWRPcGVyYXRpb24ubW92ZUhlYWQpOlxuICAgICAgICAgICAgdW5kb01vdmVIZWFkKG9iamVjdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChTYXZlZE9wZXJhdGlvbi5kZWxldGUpOlxuICAgICAgICAgICAgdW5kb0RlbGV0ZUl0ZW1zKG9iamVjdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXIgdGhlIHBhaW50ZXIgZXZlbnQgdG8gcmVkcmF3XG4gICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBQYWludGVyRXZlbnROYW1lLnJlcGFpbnQsXG4gICAgKTtcbn1cblxuLyoqXG4gKiBVbmRvIG1vdmUgc2xlZXBlciBvcGVyYXRpb25cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFJlY2lldmVkIGN1cnJlbnQgc2xlZXBlciBub2RlXG4gKiBAcGFyYW0geyp9IHBhcmFtcyBvcGVyYXRpb24gcGFyYW1ldGVyc1xuICovXG5mdW5jdGlvbiB1bmRvTW92ZVNsZWVwZXIob2JqZWN0LCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IG9iamVjdC5jYW52YXNJbmZvcm1hdGlvblxuICAgIGNvbnN0IHsgY2hhbmdlTG9jYXRpb24gfSA9IHBhcmFtcztcbiAgICBjb25zdCByZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgIHg6IHggLSBjaGFuZ2VMb2NhdGlvbi54LFxuICAgICAgICB5OiB5IC0gY2hhbmdlTG9jYXRpb24ueSxcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2Ugc2xlZXBlciBjYW52YXMgbG9jYXRpb25cbiAgICBvYmplY3QuY2hhbmdlQ2FudmFzSW5mb3JtYXRpb24ocmVjb3ZlckxvY2F0aW9uKTtcblxuICAgIC8vIENoYW5nZSB0aGUgY29ubmVjdGVkIG91dGNvbWluZyBlZGdlcycgbG9jYXRpb25cbiAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygb2JqZWN0LmVkZ2VMaXN0KSB7XG4gICAgICAgIGNvbnN0IGVkZ2VSZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBlZGdlLnN0YXJ0TG9jYXRpb24ueCAtIGNoYW5nZUxvY2F0aW9uLngsXG4gICAgICAgICAgICB5OiBlZGdlLnN0YXJ0TG9jYXRpb24ueSAtIGNoYW5nZUxvY2F0aW9uLnksXG4gICAgICAgIH07XG5cbiAgICAgICAgZWRnZS5zZXRMb2NhdGlvbihcbiAgICAgICAgICAgICdzdGFydCcsXG4gICAgICAgICAgICBlZGdlUmVjb3ZlckxvY2F0aW9uLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgaW5jb21pbmcgZWRnZXMnIGxvY2F0aW9uXG4gICAgZm9yIChjb25zdCBlZGdlIG9mIG9iamVjdC5pbmNvbWluZ0VkZ2VMaXN0KSB7XG4gICAgICAgIGNvbnN0IGVkZ2VSZWNvdmVyTG9jYXRpb24gPSB7XG4gICAgICAgICAgICB4OiBlZGdlLmVuZExvY2F0aW9uLnggLSBjaGFuZ2VMb2NhdGlvbi54LFxuICAgICAgICAgICAgeTogZWRnZS5lbmRMb2NhdGlvbi55IC0gY2hhbmdlTG9jYXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICBlZGdlLnNldExvY2F0aW9uKFxuICAgICAgICAgICAgJ2VuZCcsXG4gICAgICAgICAgICBlZGdlUmVjb3ZlckxvY2F0aW9uLFxuICAgICAgICApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBVbmRvIG1vdmUgYW5jaG9yIG9wZXJhdGlvblxuICogQHBhcmFtIHsqfSBvYmplY3QgUmVjaWV2ZWQgZWRnZSBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIHRoZSBzbGVlcGVyIG5vZGUgd2hlcmUgdGhlIGVkZ2Ugc3RhcnRcbiAqL1xuZnVuY3Rpb24gdW5kb01vdmVBbmNob3Iob2JqZWN0LCBwYXJhbXMpIHtcbiAgICAvLyBSZW1vdmUgdGhlIGVkZ2UgY3JlYXRlZFxuICAgIG9iamVjdC5kZWxldGVTZWxmKCk7XG59XG5cbi8qKlxuICogVW5kbyBtb3ZlIGhlYWQgb3BlcmF0aW9uXG4gKiBAcGFyYW0geyp9IG9iamVjdCBcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIFxuICovXG5mdW5jdGlvbiB1bmRvTW92ZUhlYWQob2JqZWN0LCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IGNoYW5nZUVuZExvY2F0aW9uIH0gPSBwYXJhbXM7XG5cbiAgICAvLyBSZWNvdmVyIGVnZGUgZW5kIGxvY2F0aW9uXG4gICAgY29uc3QgcmVjb3ZlckxvY2F0aW9uID0ge1xuICAgICAgICB4OiBvYmplY3QuZW5kTG9jYXRpb24ueCAtIGNoYW5nZUVuZExvY2F0aW9uLngsXG4gICAgICAgIHk6IG9iamVjdC5lbmRMb2NhdGlvbi55IC0gY2hhbmdlRW5kTG9jYXRpb24ueSxcbiAgICB9O1xuXG4gICAgb2JqZWN0LnNldExvY2F0aW9uKFxuICAgICAgICAnZW5kJyxcbiAgICAgICAgcmVjb3ZlckxvY2F0aW9uLFxuICAgICk7XG5cbiAgICAvLyBSZW1vdmUgYWRkZWQgZW5kIHNsZWVwZXIgaWYgbmVlZGVkXG4gICAgaWYgKCEhcGFyYW1zWydhZGRlZEVuZFNsZWVwZXInXSkge1xuICAgICAgICBwYXJhbXNbJ2FkZGVkRW5kU2xlZXBlciddLnJlbW92ZUluY29taW5nRWRnZShvYmplY3QpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBVbmRvIGRlbGV0ZSB0aGUgY2xpY2tlZCBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IERlbGV0ZWQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHVuZG9EZWxldGVJdGVtcyhvYmplY3QpIHtcbiAgICBvYmplY3QucmVjb3ZlclNlbGYoKTtcbn1cbiIsImltcG9ydCB7IFNhdmVkT3BlcmF0aW9uIH0gZnJvbSAnLi9vcGVyYXRpb24nO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IFVuZG9SZWRvRXZlbnROYW1lIH0gZnJvbSAnLi4vZ2xvYmFsL2V2ZW50LW5hbWUtY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFVuZG9EZWNvcmF0b3Ige1xuICAgIC8qKlxuICAgICAqIERlY29yYXRvciBmb3IgbW91c2UgdXAgZnJvbSBzbGVlcGVyXG4gICAgICovIFxuICAgIHN0YXRpYyBtb3VzZVVwU2xlZXBlckRlY29yYXRvcihjb250cm9sbGVyRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRyYWdTbGVlcGVyTGlzdCwgb3JpZ2luYWxJbmZvKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBDdXJyZW50IFNsZWVwZXIgKE5vdyBubyBzZWxlY3Rpb24gYm94KVxuICAgICAgICAgICAgY29uc3QgY3VycmVudFNsZWVwZXIgPSBkcmFnU2xlZXBlckxpc3RbMF07XG5cbiAgICAgICAgICAgIC8vIEZpbmQgbG9jYXRpb24gY2hhbmdlXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VMb2NhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB4OiBjdXJyZW50U2xlZXBlci5jYW52YXNJbmZvcm1hdGlvbi54IC0gb3JpZ2luYWxJbmZvLngsXG4gICAgICAgICAgICAgICAgeTogY3VycmVudFNsZWVwZXIuY2FudmFzSW5mb3JtYXRpb24ueSAtIG9yaWdpbmFsSW5mby55LFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2hhbmdlTG9jYXRpb24ueCAhPT0gMCAmJiBjaGFuZ2VMb2NhdGlvbi55ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZSB0byB1bmRvIHN0YWNrXG4gICAgICAgICAgICAgICAgRXZlbnRlci5kaXNwYXRjaEV2ZW50KFVuZG9SZWRvRXZlbnROYW1lLmFkZE11dGF0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogY3VycmVudFNsZWVwZXIsXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogU2F2ZWRPcGVyYXRpb24ubW92ZVNsZWVwZXIsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJGdW5jdGlvbihkcmFnU2xlZXBlckxpc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjb3JhdG9yIGZvciBtb3VzZSB1cCBmcm9tIGFuY2hvclxuICAgICAqL1xuICAgIHN0YXRpYyBtb3VzZVVwQW5jaG9yRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oc2xlZXBlckFuZEFuY2hvciwgZWRnZSwgY2xvc2VzdE9iamVjdCkge1xuICAgICAgICAgICAgLy8gU2F2ZSB0byB1bmRvIHN0YWNrXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUuYWRkTXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IGVkZ2UsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5hZGRFZGdlRnJvbUFuY2hvcixcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRTbGVlcGVyOiBzbGVlcGVyQW5kQW5jaG9yWzBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgY29udHJvbGxlciBcbiAgICAgICAgICAgIGNvbnRyb2xsZXJGdW5jdGlvbihzbGVlcGVyQW5kQW5jaG9yLCBlZGdlLCBjbG9zZXN0T2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY29yYXRvciBmb3IgbW91c2UgdXAgZnJvbSBoZWFkXG4gICAgICovXG4gICAgc3RhdGljIG1vdXNlVXBIZWFkRGVjb3JhdG9yKGNvbnRyb2xsZXJGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZWRnZSwgY2xvc2VzdE9iamVjdCwgb3JpZ2luYWxMb2NhdGlvbikge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgIGNsb3Nlc3RMb2NhdGlvbixcbiAgICAgICAgICAgICAgICBjbG9zZXN0U2xlZXBlcixcbiAgICAgICAgICAgIH0gPSBjbG9zZXN0T2JqZWN0O1xuXG4gICAgICAgICAgICAvLyBBZGQgbXV0YXRpb24gXG4gICAgICAgICAgICBFdmVudGVyLmRpc3BhdGNoRXZlbnQoVW5kb1JlZG9FdmVudE5hbWUuYWRkTXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IGVkZ2UsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5tb3ZlSGVhZCxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRW5kTG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNsb3Nlc3RMb2NhdGlvbi54IC0gb3JpZ2luYWxMb2NhdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY2xvc2VzdExvY2F0aW9uLnkgLSBvcmlnaW5hbExvY2F0aW9uLnksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFkZGVkRW5kU2xlZXBlcjogY2xvc2VzdFNsZWVwZXIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBjb250cm9sbGVyXG4gICAgICAgICAgICBjb250cm9sbGVyRnVuY3Rpb24oZWRnZSwgY2xvc2VzdE9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNvcmF0b3IgZm9yIGRlbGV0ZSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyBkZWxldGVJdGVtc0RlY29yYXRvcihjb250cm9sbGVyRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGNsaWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAvLyBBZGQgbXV0YXRpb25cbiAgICAgICAgICAgIEV2ZW50ZXIuZGlzcGF0Y2hFdmVudChVbmRvUmVkb0V2ZW50TmFtZS5hZGRNdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgIG9iamVjdDogY2xpY2tPYmplY3QsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBTYXZlZE9wZXJhdGlvbi5kZWxldGUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBjb250cm9sbGVyXG4gICAgICAgICAgICBjb250cm9sbGVyRnVuY3Rpb24oY2xpY2tPYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IHVuZG9Db250cm9sbGVyIH0gZnJvbSAnLi91bmRvLWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVW5kb1JlZG9FdmVudE5hbWUgfSBmcm9tICcuLi9nbG9iYWwvZXZlbnQtbmFtZS1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRlciB9IGZyb20gJy4uL3V0aWxzL2V2ZW50JztcbmltcG9ydCB7IHJlZG9Db250cm9sbGVyIH0gZnJvbSAnLi9yZWRvLWNvbnRyb2xsZXInO1xuXG5jbGFzcyBVbmRvUmVkbyB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBVbmRvUmVkbygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYoIVVuZG9SZWRvLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAvLyBEZWZpbmUgdGhlIHN0YWNrIGFuZCB0aGUgcG9pbnRlclxuICAgICAgICAgICAgdGhpcy5zdGFjayA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyID0gLTE7XG5cbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgICAgICAgICBVbmRvUmVkby5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbmFtZVxuICAgICAqL1xuICAgIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHVuZG8sXG4gICAgICAgICAgICBhZGRNdXRhdGlvbixcbiAgICAgICAgICAgIHJlZG8sXG4gICAgICAgIH0gPSBVbmRvUmVkb0V2ZW50TmFtZTtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKGFkZE11dGF0aW9uLCB0aGlzLmFkZE11dGF0aW9uVG9TdGFjay5iaW5kKHRoaXMpKTtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKHVuZG8sIHRoaXMudW5kby5iaW5kKHRoaXMpKTtcbiAgICAgICAgRXZlbnRlci5hZGRFdmVudExpc3RlbmVyKHJlZG8sIHRoaXMucmVkby5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgbXV0YXRpb24gdG8gdW5kbyBzdGFja1xuICAgICAqIEBwYXJhbSB7Kn0gbXV0YXRpb24gXG4gICAgICovXG4gICAgYWRkTXV0YXRpb25Ub1N0YWNrKG11dGF0aW9uKSB7XG4gICAgICAgIHRoaXMucG9pbnRlciArPSAxO1xuXG4gICAgICAgIC8vIEJyZWFrIHRoZSBzdGFjayBvcmRlciwgaWdub3JlIHRoZSBvcGVyYXRpb24gYWZ0ZXIgcG9pbnRlclxuICAgICAgICBpZiAodGhpcy5wb2ludGVyICE9PSB0aGlzLnN0YWNrLmxlbmd0aCAmJiB0aGlzLnBvaW50ZXIgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdGFjay5zcGxpY2UodGhpcy5wb2ludGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhY2subGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhY2sucHVzaChtdXRhdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5kbyB0aGUgb3BlcmF0aW9uXG4gICAgICovXG4gICAgdW5kbygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoICE9PSAwIHx8IHRoaXMucG9pbnRlciAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHVuZG9UYXNrID0gdGhpcy5zdGFja1t0aGlzLnBvaW50ZXJdO1xuICAgICAgICAgICAgdW5kb0NvbnRyb2xsZXIodW5kb1Rhc2spO1xuXG4gICAgICAgICAgICB0aGlzLnBvaW50ZXIgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZG8gdGhlIG9wZXJhdGlvblxuICAgICAqL1xuICAgIHJlZG8oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCAhPT0gMCAmJiB0aGlzLnBvaW50ZXIgIT09IHRoaXMuc3RhY2subGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyICs9IDE7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlZG9UYXNrID0gdGhpcy5zdGFja1t0aGlzLnBvaW50ZXJdO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZWRvVGFzayk7XG5cbiAgICAgICAgICAgIHJlZG9Db250cm9sbGVyKHJlZG9UYXNrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgVW5kb1JlZG8gfTsiLCJjbGFzcyBFdmVudCB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBFdmVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIUV2ZW50Lmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RGljdGlvbmFyeSA9IHt9O1xuICAgICAgICAgICAgRXZlbnQuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBFdmVudC5pbnN0YW5jZTsgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnRMaXN0ZW5lciBmb3IgYWRkaW5nIGV2ZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBcbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgLy8gRmluZCBpZiBldmVudE5hbWUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgaWYgKCEoZXZlbnROYW1lIGluIHRoaXMuZXZlbnREaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudERpY3Rpb25hcnlbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHVzaCB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gaW50byBsaXN0XG4gICAgICAgIHRoaXMuZXZlbnREaWN0aW9uYXJ5W2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSBsaXN0ZW5lciBnaXZlbiBhIHNwZWNpZmljIGV2ZW50IGFuZCBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbiB8IHVuZGVmaW5lZH0gY2FsbGJhY2sgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIC8vIFRocm93IEVycm9yIHdoZW4gbm90IGZpbmQgdGhlIGV2ZW50XG4gICAgICAgIGlmICghKGV2ZW50TmFtZSBpbiB0aGlzLmV2ZW50RGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0V2ZW50IE5vdCBSZWdpc3RlcmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBKdXN0IHJlbW92ZSB0aGUgc3BlY2lmaWMgY2FsbGJhY2sgZnVuY3Rpb24gaWYgY2FsbGJhY2sgZ2l2ZW5cbiAgICAgICAgaWYgKCEhY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRFdmVudExpc3QgPSB0aGlzLmV2ZW50RGljdGlvbmFyeVtldmVudE5hbWVdO1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tJbmRleCA9IGN1cnJlbnRFdmVudExpc3QuZmluZEluZGV4KHNhdmVkQ2FsbGJhY2tGdW5jdGlvbiA9PiBcbiAgICAgICAgICAgICAgICBzYXZlZENhbGxiYWNrRnVuY3Rpb24gPT09IGNhbGxiYWNrXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBSYWlzZSBlcnJvciBpZiBjYWxsYmFjayBmdW5jdGlvbiBub3QgZm91bmRcbiAgICAgICAgICAgIGlmIChjYWxsYmFja0luZGV4ID09PSAtMSB8fCBjYWxsYmFja0luZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdDYWxsYmFjayBmdW5jdGlvbiBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICAgICAgY3VycmVudEV2ZW50TGlzdC5zcGxpY2UoY2FsbGJhY2tJbmRleCwgMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGlzIGV2ZW50IGlmIGV2ZW50IGxpc3QgaXMgZW1wdHkgXG4gICAgICAgICAgICBpZiAoY3VycmVudEV2ZW50TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudERpY3Rpb25hcnlbZXZlbnROYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIERpcmVjdGx5IGRlbGV0ZSB0aGlzIGV2ZW50XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudERpY3Rpb25hcnlbZXZlbnROYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGRpc3B0YWNoZXIsIHRyaWdnZXIgdGhlIHJlbGF0ZWQgZXZlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFxuICAgICAqIEBwYXJhbSAgey4uLmFueX0gYXJncyBcbiAgICAgKi9cbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgLi4uYXJncykge1xuICAgICAgICAvLyBUaHJvdyBFcnJvciB3aGVuIG5vdCBmaW5kIHRoZSBldmVudFxuICAgICAgICBpZiAoIShldmVudE5hbWUgaW4gdGhpcy5ldmVudERpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdFdmVudCBOb3QgUmVnaXN0ZXJlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXRlcmF0ZSBmb3IgdHJpZ2dlclxuICAgICAgICB0aGlzLmV2ZW50RGljdGlvbmFyeVtldmVudE5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRXZlbnRlciA9IEV2ZW50LmdldEluc3RhbmNlKCk7IiwiLyoqXG4gKiBGaW5kIGlmIGl0IGlzIHBvc3NpYmxlIHRvIGJlIGFjdGl2ZVxuICogQHBhcmFtIHtmbG9hdH0gd2VpZ2h0IFxuICogQHJldHVybnMge2Jvb2x9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3Rpdml0eUJ5V2VpZ2h0KHdlaWdodCkge1xuICAgIGNvbnN0IHN1ZG9SYW5kb21WYXJpYWJsZSA9IE1hdGgucmFuZG9tO1xuICAgIHJldHVybiBzdWRvUmFuZG9tVmFyaWFibGUgPCB3ZWlnaHQ7XG59XG5cbi8qKlxuICogRmluZCBpZiBnaXZlbiBwb2ludCBuZWFyIHRoZSBsaW5lXG4gKiBAcGFyYW0geyp9IGxpbmVTdGFydExvY2F0aW9uIFxuICogQHBhcmFtIHsqfSBsaW5lRW5kTG9jYXRpb24gXG4gKiBAcGFyYW0geyp9IHggXG4gKiBAcGFyYW0geyp9IHkgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUG9pbnRJbkxpbmUobGluZVN0YXJ0TG9jYXRpb24sIGxpbmVFbmRMb2NhdGlvbiwgeCwgeSkge1xuICAgIGlmKFxuICAgICAgICBsaW5lRW5kTG9jYXRpb24ueCA+IGxpbmVTdGFydExvY2F0aW9uLnggXG4gICAgICAgICYmIChcbiAgICAgICAgICAgIHggPiBsaW5lRW5kTG9jYXRpb24ueCBcbiAgICAgICAgICAgIHx8IHggPCBsaW5lU3RhcnRMb2NhdGlvbi54XG4gICAgICAgIClcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKFxuICAgICAgICBsaW5lRW5kTG9jYXRpb24ueCA8IGxpbmVTdGFydExvY2F0aW9uLnggXG4gICAgICAgICYmIChcbiAgICAgICAgICAgIHggPCBsaW5lRW5kTG9jYXRpb24ueCBcbiAgICAgICAgICAgIHx8IHggPiBsaW5lU3RhcnRMb2NhdGlvbi54XG4gICAgICAgIClcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBsaW5lIFxuICAgIGNvbnN0IHNsb3BlID0gKGxpbmVFbmRMb2NhdGlvbi55IC0gbGluZVN0YXJ0TG9jYXRpb24ueSkgLyBcbiAgICAobGluZUVuZExvY2F0aW9uLnggLSBsaW5lU3RhcnRMb2NhdGlvbi54KTtcblxuICAgIC8vIEZpbmQgdGhlIGFycm93IHJlZ2lvblxuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuKHNsb3BlKTtcbiAgICBjb25zdCB4TGVuZ3RoID0gMTAgKiAwLjUgKiAzKiowLjUgKiBNYXRoLmFicyhNYXRoLmNvcyhhbmdsZSkpO1xuICAgIGlmIChcbiAgICAgICAgbGluZUVuZExvY2F0aW9uLnggPiBsaW5lU3RhcnRMb2NhdGlvbi54IFxuICAgICAgICAmJiB4ID4gbGluZUVuZExvY2F0aW9uLnggLSB4TGVuZ3RoXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgIGxpbmVFbmRMb2NhdGlvbi54IDwgbGluZVN0YXJ0TG9jYXRpb24ueFxuICAgICAgICAmJiB4IDwgbGluZUVuZExvY2F0aW9uLnggKyB4TGVuZ3RoXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGludGVyY2VwdCA9IGxpbmVTdGFydExvY2F0aW9uLnkgLSBzbG9wZSAqIGxpbmVTdGFydExvY2F0aW9uLng7XG5cbiAgICAvLyBGaW5kIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGxpbmUgYW5kIHBvaW50XG4gICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmFicyhpbnRlcmNlcHQgKyBzbG9wZSAqIHggLSB5KSAvIE1hdGguc3FydCgxICsgc2xvcGUqKjIpO1xuXG4gICAgcmV0dXJuIGRpc3RhbmNlIDw9IDU7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBDYW52YXMgfSBmcm9tICcuLi9jb3JlL3ZpZXctbGF5ZXIvY2FudmFzJztcbmltcG9ydCB7IFNsZWVwZXIgfSBmcm9tICcuLi9jb3JlL2RhdGEtbGF5ZXIvc2xlZXBlci9zbGVlcGVyJztcblxuLy8gSW5pdCBDYW52YXNcbnZhciBteUNhbnZhcyA9IENhbnZhcy5nZXRJbnN0YW5jZSgpO1xuXG4vLyBBZGQgYSBzbGVlcGVyXG5uZXcgU2xlZXBlcigpO1xubmV3IFNsZWVwZXIoXG4gICAgZmFsc2UsXG4gICAge1xuICAgICAgICBkcmF3VHlwZTogJ2NpcmNsZScsXG4gICAgICAgIHg6IDYwMCxcbiAgICAgICAgeTogNjAwLFxuICAgICAgICByYWRpdXM6IDMwLFxuICAgICAgICBzdGFydEFuZ2xlOiAwLFxuICAgICAgICBlbmRBbmdsZTogMiAqIE1hdGguUEksXG4gICAgICAgIGlzRmlsbGVkOiB0cnVlLFxuICAgICAgICBmaWxsQ29sb3I6ICcjRkZDQzMzJyxcbiAgICB9XG4pO1xuXG5uZXcgU2xlZXBlcihcbiAgICBmYWxzZSxcbiAgICB7XG4gICAgICAgIGRyYXdUeXBlOiAnY2lyY2xlJyxcbiAgICAgICAgeDogNzAwLFxuICAgICAgICB5OiA3MDAsXG4gICAgICAgIHJhZGl1czogMzAsXG4gICAgICAgIHN0YXJ0QW5nbGU6IDAsXG4gICAgICAgIGVuZEFuZ2xlOiAyICogTWF0aC5QSSxcbiAgICAgICAgaXNGaWxsZWQ6IHRydWUsXG4gICAgICAgIGZpbGxDb2xvcjogJyNGRkNDMzMnLFxuICAgIH1cbik7XG5cbm5ldyBTbGVlcGVyKFxuICAgIGZhbHNlLFxuICAgIHtcbiAgICAgICAgZHJhd1R5cGU6ICdjaXJjbGUnLFxuICAgICAgICB4OiA1MDAsXG4gICAgICAgIHk6IDYwMCxcbiAgICAgICAgcmFkaXVzOiAzMCxcbiAgICAgICAgc3RhcnRBbmdsZTogMCxcbiAgICAgICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuICAgICAgICBpc0ZpbGxlZDogdHJ1ZSxcbiAgICAgICAgZmlsbENvbG9yOiAnI0ZGQ0MzMycsXG4gICAgfVxuKTtcblxuXG5uZXcgU2xlZXBlcihcbiAgICBmYWxzZSxcbiAgICB7XG4gICAgICAgIGRyYXdUeXBlOiAnY2lyY2xlJyxcbiAgICAgICAgeDogNjAwLFxuICAgICAgICB5OiA3MDAsXG4gICAgICAgIHJhZGl1czogMzAsXG4gICAgICAgIHN0YXJ0QW5nbGU6IDAsXG4gICAgICAgIGVuZEFuZ2xlOiAyICogTWF0aC5QSSxcbiAgICAgICAgaXNGaWxsZWQ6IHRydWUsXG4gICAgICAgIGZpbGxDb2xvcjogJyNGRkNDMzMnLFxuICAgIH1cbik7XG5cbm5ldyBTbGVlcGVyKFxuICAgIGZhbHNlLFxuICAgIHtcbiAgICAgICAgZHJhd1R5cGU6ICdjaXJjbGUnLFxuICAgICAgICB4OiA3MDAsXG4gICAgICAgIHk6IDgwMCxcbiAgICAgICAgcmFkaXVzOiAzMCxcbiAgICAgICAgc3RhcnRBbmdsZTogMCxcbiAgICAgICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuICAgICAgICBpc0ZpbGxlZDogdHJ1ZSxcbiAgICAgICAgZmlsbENvbG9yOiAnI0ZGQ0MzMycsXG4gICAgfVxuKTtcblxuXG4vLyBFbmFibGUgaG90IHVwZGF0aW5nXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuLi9jb3JlL3ZpZXctbGF5ZXIvY2FudmFzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9KVxufVxuIl0sIm5hbWVzIjpbIlNsZWVwZXJQb29sZXIiLCJFZGdlUG9vbGVyIiwiaXNQb2ludEluTGluZSIsIk1pbmltYWxEaXN0YW5jZUZvckxvY2F0ZSIsIkFjdGlvblV0aWxzIiwiY2FudmFzIiwibG9jYXRpb24iLCJmaW5kRnVuY3Rpb25zTGlzdCIsImZpbmRMb2NhdGVkTGluZU9ySGVhZCIsImZpbmRMb2NhdGVkQW5jaG9yIiwiZmluZExvY2F0ZWRTbGVlcGVyIiwiZmluZEZ1bmN0aW9uIiwiZmluZFJlc3VsdCIsImNhbnZhc0NvbnRleHQiLCJnZXRDb250ZXh0IiwiaXNMb2NhdGVkSW5DaXJjbGUiLCJjaXJjbGVQYXRoIiwieCIsInkiLCJpc1BvaW50SW5QYXRoIiwibG9jYXRpb25IYW5kbGVyTWFwcyIsImJpbmQiLCJpbmRleCIsInBvb2wiLCJsZW5ndGgiLCJzbGVlcGVyIiwic2xlZXBlclN0eWxlIiwiY2FudmFzSW5mb3JtYXRpb24iLCJzbGVlcGVyQ2FudmFzUGF0aCIsImNhbnZhc1BhdGgiLCJkcmF3VHlwZSIsInJlc3VsdCIsInR5cGUiLCJpc0FjdGl2ZSIsImNhbnZhc0FuY2hvcnNQYXRoTGlzdCIsInNsZWVwZXJBbmNob3IiLCJhbmNob3JQYXRoIiwiZWRnZSIsImhlYWQiLCJzdGFydExvY2F0aW9uIiwiZW5kTG9jYXRpb24iLCJkcmFnZ2VkU2xlZXBlckxpc3QiLCJpc0RyYWciLCJwdXNoIiwiZm4iLCJ3YWl0VGltZSIsInRpbWVyIiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJzbGVlcGVyWCIsInNsZWVwZXJZIiwiZGlzdGFuY2UiLCJNYXRoIiwic3FydCIsInJhZGl1cyIsImxvY2F0ZWRTbGVlcGVyIiwiZmluZENsb3Nlc3RTbGVlcGVyIiwiY29uc29sZSIsImxvZyIsImxvY2F0ZWRTbGVlcGVyWCIsImxvY2F0ZWRTbGVlcGVyWSIsImFuY2hvckxvY2F0aW9uTGlzdCIsIm1pbkRpc3RhbmNlIiwiTnVtYmVyIiwiTUFYX1NBRkVfSU5URUdFUiIsIm1pbkxvY2F0aW9uIiwiYW5jaG9yTG9jYXRpb24iLCJjbG9zZXN0TG9jYXRpb24iLCJjbG9zZXN0U2xlZXBlciIsIm1vdXNlQWN0aW9uTW9kZSIsImRvd25PblNsZWVwZXIiLCJkb3duT25BbmNob3IiLCJkb3duT25MaW5lIiwiZG93bk9uSGVhZCIsImRvd25PbkJhY2tncm91bmQiLCJkb3duT25Ob25lIiwiZG93bk9uVGV4dCIsIkFjdGlvbkNvbnRyb2xsZXJFdmVudE5hbWUiLCJQYWludGVyRXZlbnROYW1lIiwiRXZlbnRlciIsIlVuZG9EZWNvcmF0b3IiLCJLZXlib2FyZEFjdGlvbkNvbnRyb2xsZXIiLCJpbml0RXZlbnRIYW5kbGVyIiwia2V5Ym9hcmREZWxldGUiLCJrZXlib2FyZElucHV0Iiwia2V5Ym9hcmRUZXh0VW5kbyIsImtleWJvYXJkVGV4dFJlZG8iLCJrZXlib2FyZFRleHREZWxldGUiLCJldmVudE5hbWVzTWFwIiwiZGVsZXRlSXRlbXNEZWNvcmF0b3IiLCJrZXlib2FyZERlbGV0ZUNvbnRyb2xsZXIiLCJrZXlib2FyZElucHV0Q29udHJvbGxlciIsImV2ZW50TmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja09iamVjdCIsImRlbGV0ZVNlbGYiLCJkaXNwYXRjaEV2ZW50IiwicmVwYWludCIsImlucHV0S2V5IiwibmV3Q29udGVudCIsInRleHRJbmZvcm1hdGlvbiIsImNvbnRlbnQiLCJ0ZXh0VGVtcFN0YWNrIiwidGV4dCIsInVuZG8iLCJyZWRvIiwic3RyaW5nTGVuZ3RoIiwic3Vic3RyaW5nIiwiU2xlZXBlciIsIlVuZG9SZWRvRXZlbnROYW1lIiwiS2V5Ym9hcmRBY3Rpb24iLCJtb3VzZUFjdGlvbiIsImluaXRBY3Rpb24iLCJhY3Rpb25zTWFwIiwia2V5RG93biIsImFjdGlvbiIsIndpbmRvdyIsImV2ZW50IiwiY29kZSIsImtleUNvZGUiLCJpc1RleHRNb2RlT24iLCJtb3VzZURvd25FbGVtZW50IiwiaXNUZXh0TW9kZSIsIl9oYW5kbGVyVGV4dERlbGV0ZSIsIl9oYW5kbGVyRGVsZXRlIiwiY3RybEtleSIsIm1ldGFLZXkiLCJzaGlmdEtleSIsIl9oYW5kbGVOb3JtYWwiLCJrZXkiLCJ0b1N0cmluZyIsIkRlZXBDbG9uZUluZm8iLCJtb2RlIiwidGFyZ2V0IiwiU2xlZXBlckV2ZW50TmFtZSIsIkVkZ2VFdmVudE5hbWUiLCJNb3VzZUFjdGlvbkNvbnRyb2xsZXIiLCJtb3VzZURvd25TbGVlcGVyIiwibW91c2VEb3duTGluZSIsIm1vdXNlRG93bkJhY2tncm91bmQiLCJtb3VzZU1vdmVTbGVlcGVyIiwibW91c2VNb3ZlSGVhZCIsIm1vdXNlVXBTbGVlcGVyIiwibW91c2VVcEFuY2hvciIsIm1vdXNlVXBIZWFkIiwibW91c2VEb3VibGVDbGljayIsIm1vdXNlRG93blNsZWVwZXJDb250cm9sbGVyIiwibW91c2VEb3duTGluZUNvbnRyb2xsZXIiLCJtb3VzZURvd25CYWNrZ3JvdW5kQ29udHJvbGxlciIsIm1vdXNlTW92ZVNsZWVwZXJDb250cm9sbGVyIiwibW91c2VNb3ZlSGVhZENvbnRyb2xsZXIiLCJtb3VzZVVwU2xlZXBlckRlY29yYXRvciIsIm1vdXNlVXBTbGVlcGVyQ29udHJvbGxlciIsIm1vdXNlVXBBbmNob3JEZWNvcmF0b3IiLCJtb3VzZVVwQW5jaG9yQ29udHJvbGxlciIsIm1vdXNlVXBIZWFkRGVjb3JhdG9yIiwibW91c2VVcEhlYWRDb250cm9sbGVyIiwibW91c2VEb3VibGVDbGlja0NvbnRyb2xsZXIiLCJhY3RpdmVTb21lU2xlZXBlciIsImFjdGl2ZVNvbWVFZGdlIiwiY2hhbmdlQWN0aXZlU3RhdHVzIiwiZW5kVGV4dE1vZGUiLCJkcmFnU2xlZXBlckxpc3QiLCJyZWxhdGl2ZU1vdmVEaXN0YW5jZSIsIm9yaWdpblgiLCJvcmlnaW5ZIiwibmV3WCIsIm5ld1kiLCJjaGFuZ2VDYW52YXNJbmZvcm1hdGlvbiIsImVkZ2VMaXN0Iiwic2V0TG9jYXRpb24iLCJpbmNvbWluZ0VkZ2VMaXN0IiwiZHJhZ0VkZ2UiLCJjdXJyZW50UG9zaXRpb24iLCJlbmRTbGVlcGVyIiwicmVtb3ZlSW5jb21pbmdFZGdlIiwiY2hhbmdlRW5kIiwic3dpdGNoRHJhZ1N0YXR1cyIsInNsZWVwZXJBbmRBbmNob3IiLCJjbG9zZXN0T2JqZWN0IiwiYWRkRWRnZSIsImFkZEluY29taW5nRWRnZSIsInN0YXJ0U2xlZXBlciIsImFkZENoaWxkIiwiYWN0aXZlU29tZVNsZWVwZXJUZXh0TW9kZSIsIlNhdmVkT3BlcmF0aW9uIiwiRWRnZSIsIk1vdXNlQWN0aW9uIiwibW91c2VQb3NpdGlvblgiLCJtb3VzZVBvc2l0aW9uWSIsImFjdGlvbk1vZGUiLCJ0ZW1wb3JhcnlFZGdlIiwidGVtcG9yYXJ5Q29weSIsImhhbmRsZU1vdXNlRG93biIsInRocm90dGxlck1ha2VyIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTk1vdXNlVXAiLCJoYW5kbGVNb3VzZURvdWJsZUNsaWNrIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJzZXRNb3VzZVBvc2l0aW9uIiwibG9jYXRlZE9iamVjdCIsImZpbmRMb2NhdGVkT2JqZWN0IiwiX2hhbmRsZXJIb3Zlck1vdmUiLCJjYWxsIiwiX2hhbmRsZXJEcmFnU2xlZXBlck1vdmUiLCJfaGFuZGxlckRyYWdBbmNob3JNb3ZlIiwiX2hhbmRsZXJEcmFnQmFja2dyb3VuZE1vdmUiLCJfaGFuZGxlckRyYWdIZWFkTW92ZSIsInN0eWxlIiwiY3Vyc29yIiwiZmluZERyYWdnZWRTbGVlcGVyIiwic3RhcnRMb2FjdGlvbiIsImNoYW5nZVN0YXJ0IiwiY3VycmVudFBvc2lzdGlvbiIsImNsb3Nlc3RPYmplY3RBbmNob3IiLCJmaW5kQ2xvc2VzdEFuY2hvciIsImNsb3Nlc3RPYmplY3RIZWFkIiwiYWRkTXV0YXRpb24iLCJvYmplY3QiLCJvcGVyYXRpb24iLCJtb3ZlSGVhZCIsInBhcmFtcyIsImNoYW5nZUVuZExvY2F0aW9uIiwiaXNJblRoaXNTbGVlcGVyIiwiRGVmYXVsdEVkZ2VXZWlnaHQiLCJEZWZhdWx0U2xlZXBlckNhbnZhc0luZm9ybWF0aW9uIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiUEkiLCJpc0ZpbGxlZCIsImZpbGxDb2xvciIsImlzQm9yZGVyIiwiRGVmYXVsdEFjdGl2ZUluZm9ybWF0aW9uIiwiYm9yZGVyV2l0aCIsImJvcmRlckNvbG9yIiwiaXNBbmNob3IiLCJFZGdlUG9vbEV2ZW50TmFtZSIsIkVkZ2VQb29sIiwiaW5zdGFuY2UiLCJpbml0RXZlbnRzSGFuZGxlciIsImxvY2F0ZWRJbmRleCIsImZpbmRJbmRleCIsImVkZ2VJblBvb2wiLCJzcGxpY2UiLCJnZXRJbnN0YW5jZSIsIndlaWdodCIsIm5ld1dlaWdodCIsIm5ld1NsZWVwZXIiLCJlZGdlUGF0aCIsInJlbW92ZUVkZ2UiLCJyZW1vdmVDaGlsZCIsIlNsZWVwZXJQb29sRXZlbnROYW1lIiwiU2xlZXBlclBvb2wiLCJhZGRTbGVlcGVyIiwicmVPcmRlclNsZWVwZXIiLCJzbGVlcGVySW5Qb29sIiwic2xlZXBlckluZGV4IiwiVGV4dFNsZWVwZXJUZW1wU3RhY2siLCJvcmlnaW5UZXh0IiwicG9pbnRlciIsInN0YWNrTGlzdCIsInZhbCIsIlRleHRTbGVlcGVyIiwic2l6ZSIsImNvbG9yIiwidGV4dGFyZWFJbmZvcm1hdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dGFyZWFCb3VuZGluZ0JveFBhdGgiLCJ0ZXh0SW5pdEV2ZW50SGFuZGxlciIsInN0YXJ0VGV4dE1vZGUiLCJ0ZXh0UG9zaXRpb24iLCJ0ZXh0TWF4V2lkdGgiLCJ0ZXh0V3JpdGUiLCJwb3NpdGlvbiIsIm1heFdpZHRoIiwiaW5mb3JtYXRpb24iLCJzZXRUZXh0T3JUZXh0YXJlYUluZm9ybWF0aW9uIiwic2xlZXBlclBvc2l0aW9uIiwiZmlndXJlRHJhdyIsIl9zZXRUZXh0YXJlYVBhdGgiLCJwcm9wZXJ0eU9iamVjdCIsIkVycm9yIiwiZm9yU2V0T2JqZWN0IiwicHJvcGVydHkiLCJuZXdWYWx1ZSIsImRyYXdUZXh0QXJlYSIsImJvdW5kaW5nQm94UGF0aCIsImdldEFjdGl2aXR5QnlXZWlnaHQiLCJzdGF0dXMiLCJpc1NsZWVwaW5nIiwiY2hpbGRyZW5MaXN0IiwiY2hpbGRFZGdlTWFwTGlzdCIsInNldENhbnZhc1BhdGgiLCJkcmF3VGV4dCIsImNoaWxkU2xlZXBlciIsImV4cGVjdENoaWxkSW5kZXgiLCJjaGlsZE9iamVjdCIsInVuZGVmaW5lZCIsImV4cGVjdEVkZ2VJbmRleCIsImVkZ2VPYmplY3QiLCJmb3JFYWNoIiwiY2hpbGQiLCJjaGFuZ2VTbGVlcGluZ1N0YXR1cyIsImNhbnZhc1BhdGhPYmplY3QiLCJhbmNob3JzTGlzdCIsInJlbW92ZVNsZWVwZXIiLCJHbG9iYWxDb25maWciLCJQYWludGVyIiwiVW5kb1JlZG8iLCJDYW52YXMiLCJpbml0IiwiaW5pdENvbnRleHQiLCJpbml0UGFpbnRlciIsImluaXRBY3Rpb25SZWxhdGVkIiwiaW5pdFVuZG9SZWRvU3RhY2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzSWQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwYWludGVyIiwibW91c2VBY3Rpb25Db250cm9sbGVyIiwia2V5Ym9hcmRBY3Rpb25Db250cm9sbGVyIiwia2V5Ym9hcmRBY3Rpb24iLCJEZWFmdWx0QW5jaG9yU2V0dGluZyIsImxpbmVXaWR0aCIsImxpbmVDb2xvciIsImFuY2hvclJhZGl1cyIsIkRlYWZ1bHRBcnJvd1NldHRpbmciLCJoZWFkTGVuZ3RoIiwiQWN0aXZlQXJyb3dTZXR0aW5nIiwiRGVhZmF1bHRCb3VuZGluZ0JveFNldHRpbmciLCJGaWd1cmVQYWludGVyIiwiZHJhd01hcCIsImRyYXdDaXJjbGUiLCJkcmF3QXJyb3ciLCJkcmF3VGV4dGFyZWEiLCJkcmF3Iiwic2V0UGF0aENhbGxiYWNrIiwiY2lyY2xlIiwiUGF0aDJEIiwiYXJjIiwiZmlsbFN0eWxlIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiYW5jaG9yc1BhdGhMaXN0IiwiYW5jaG9yUG9zaXRpb25MaXN0IiwiYW5jaG9yUG9zaXRpb24iLCJhbmdsZSIsImF0YW4yIiwibGluZSIsIm1vdmVUbyIsImxpbmVUbyIsImNvcyIsInNpbiIsInJlY3QiLCJUZXh0UGFpbnRlciIsImZpZ3VyZSIsImNsZWFyUmVjdCIsIndyaXRlIiwic2V0VGV4dGFyZWFDYWxsYmFjayIsImZvbnQiLCJmaWxsSW5mbyIsIl9nZXRGaWxsTGlzdCIsImZpbGxMaXN0IiwiZmlsbFRleHQiLCJtZXRyaWNzIiwibWVhc3VyZVRleHQiLCJhY3R1YWxCb3VuZGluZ0JveEFzY2VudCIsImFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCIsImZvbnRCb3VuZGluZ0JveEFzY2VudCIsImZvbnRCb3VuZGluZ0JveERlc2NlbnQiLCJtb3VzZU1vdmVBbmNob3IiLCJtb3ZlU2xlZXBlciIsImFkZEVkZ2VGcm9tQW5jaG9yIiwicmVkb0NvbnRyb2xsZXIiLCJ0YXNrIiwicmVkb01vdmVTbGVlcGVyIiwicmVkb01vdmVBbmNob3IiLCJyZWRvTW92ZUhlYWQiLCJyZWRvRGVsZXRlSXRlbXMiLCJjaGFuZ2VMb2NhdGlvbiIsInJlY292ZXJMb2NhdGlvbiIsImVkZ2VSZWNvdmVyTG9jYXRpb24iLCJyZWNvdmVyU2VsZiIsInVuZG9Db250cm9sbGVyIiwidW5kb01vdmVTbGVlcGVyIiwidW5kb01vdmVBbmNob3IiLCJ1bmRvTW92ZUhlYWQiLCJ1bmRvRGVsZXRlSXRlbXMiLCJjb250cm9sbGVyRnVuY3Rpb24iLCJvcmlnaW5hbEluZm8iLCJjdXJyZW50U2xlZXBlciIsIm9yaWdpbmFsTG9jYXRpb24iLCJhZGRlZEVuZFNsZWVwZXIiLCJzdGFjayIsImFkZE11dGF0aW9uVG9TdGFjayIsIm11dGF0aW9uIiwidW5kb1Rhc2siLCJyZWRvVGFzayIsIkV2ZW50IiwiZXZlbnREaWN0aW9uYXJ5IiwiY2FsbGJhY2siLCJjdXJyZW50RXZlbnRMaXN0IiwiY2FsbGJhY2tJbmRleCIsInNhdmVkQ2FsbGJhY2tGdW5jdGlvbiIsInN1ZG9SYW5kb21WYXJpYWJsZSIsInJhbmRvbSIsImxpbmVTdGFydExvY2F0aW9uIiwibGluZUVuZExvY2F0aW9uIiwic2xvcGUiLCJhdGFuIiwieExlbmd0aCIsImFicyIsImludGVyY2VwdCIsIm15Q2FudmFzIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0Il0sInNvdXJjZVJvb3QiOiIifQ==