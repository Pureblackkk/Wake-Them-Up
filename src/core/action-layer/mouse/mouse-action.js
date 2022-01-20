import { Eventer } from '../../../utils/event';
import { DeepCloneInfo } from './deepClone';
import { 
    ActionControllerEventName,
    PainterEventName,
    UndoRedoEventName,
} from '../../../global/event-name-config';
import { SavedOperation } from '../../../undo-redo/operation';
import { ActionUtils } from '../action-utils';
import { mouseActionMode } from '../config';
import { Sleeper } from '../../data-layer/sleeper/sleeper';
import { Edge } from '../../data-layer/edge/edge';

class MouseAction {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvasContext = this.canvas.getContext('2d');
        this.mousePositionX = null;
        this.mousePositionY = null;
        this.actionMode = mouseActionMode.downOnNone;
        this.mouseDownElement = null;

        // Save temporary variable 
        this.temporaryEdge = null;

        // Copy for decorator
        this.temporaryCopy = null;

        this.initAction();
    }
    switchTextMode
    /**
     * Init all the mouse action listeners
     */
    initAction() {
        const actionsMap = {
            'mousedown': this.handleMouseDown.bind(this),
            'mousemove': ActionUtils.throttlerMaker(this.handleMouseMove.bind(this), 1000 / 60),
            'mouseup': this.handleNMouseUp.bind(this),
            'dblclick': this.handleMouseDoubleClick.bind(this),
            'contextmenu': this.handleMousePreventRightClick.bind(this),
        };

        for (let action in actionsMap) {
            this.canvas.addEventListener(action, event => {
                actionsMap[action](event)
            });
        }
    }

    setMousePosition(x, y) {
        this.mousePositionX = x;
        this.mousePositionY = y;
    }

    handleMouseDown(event) {
        const location = {
            x: event.offsetX,
            y: event.offsetY,
        };

        // Update mouse position when click
        this.setMousePosition(location.x, location.y);

        // Find located object
        const locatedObject = ActionUtils.findLocatedObject(this.canvas, location);

        console.log('located object', locatedObject);

        // If right click
        if (event.button == 2) {
            // If right click
            let type = null;
            let result = null;

            if (locatedObject) {
                type = locatedObject.type;
                result = locatedObject.result;
            }

            Eventer.dispatchEvent(
                ActionControllerEventName.mouseRightClick,
                type,
                result,
                {
                    x: event.offsetX,
                    y: event.offsetY,
                }
            );
        
            return;
        }
        
        // If left click
        if(!!locatedObject) {
            const {type, result} = locatedObject;
            switch(type) {
                case 'line':
                    Eventer.dispatchEvent(
                        ActionControllerEventName.mouseDownLine,
                        result
                    );
                    this.actionMode = mouseActionMode.downOnLine;
                    this.mouseDownElement = result;
                    break;
                case 'head':
                    this.actionMode = mouseActionMode.downOnHead;
                    this.mouseDownElement = result;
                    break;
                case 'anchor':
                    this.actionMode = mouseActionMode.downOnAnchor;
                    this.mouseDownElement = result;
                    break;
                case 'sleeper':
                    Eventer.dispatchEvent(
                        ActionControllerEventName.mouseDownSleeper,
                        result
                    );
                    this.actionMode = mouseActionMode.downOnSleeper;
                    this.mouseDownElement = result;
                    break;
            }

            // A certain copy of mouseDownElement for info from original node
            this.temporaryCopy = DeepCloneInfo(this.actionMode, this.mouseDownElement);
            return;
        }

        // Down on background
        this.actionMode = mouseActionMode.downOnBackground;
        Eventer.dispatchEvent(
            ActionControllerEventName.mouseDownBackground,
            null
        )
    }

    handleMouseMove(event) {
        switch(this.actionMode) {
            case(mouseActionMode.downOnNone):
                this._handlerHoverMove.call(this, event);
                break;
            case(mouseActionMode.downOnSleeper):
                this._handlerDragSleeperMove.call(this, event);
                break;
            case(mouseActionMode.downOnAnchor):
                this._handlerDragAnchorMove.call(this, event);
                break;
            case(mouseActionMode.downOnBackground):
                this._handlerDragBackgroundMove.call(this, event);
                break;
            case(mouseActionMode.downOnHead):
                this._handlerDragHeadMove.call(this, event);
                break;
        }
    }

    _handlerHoverMove(event) {
        const location = {
            x: event.offsetX,
            y: event.offsetY,
        };

        // Find located object
        const locatedObject = ActionUtils.findLocatedObject(this.canvas, location);
        if(!!locatedObject) {
            const { type } = locatedObject;
            switch(type) {
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

    _handlerDragSleeperMove(event) {
        const dragSleeperList = ActionUtils.findDraggedSleeper();

        // No node is dragged
        if (dragSleeperList.length === 0) {
            return;
        }

        // Calculate relative move distance
        const relativeMoveDistance = {
            x: event.offsetX - this.mousePositionX, 
            y: event.offsetY - this.mousePositionY,
        };

        // Save current mouse posistion
        this.setMousePosition(event.offsetX, event.offsetY);

        // Trigger the action controller
        Eventer.dispatchEvent(
            ActionControllerEventName.mouseMoveSleeper,
            dragSleeperList,
            relativeMoveDistance,
        );
    }

    _handlerDragAnchorMove(event) {
        if (!this.temporaryEdge) {
            const [sleeper, sleeperAnchor] = this.mouseDownElement;
            const startLoaction = sleeperAnchor.location;

            // Create the temporary egde object
            this.temporaryEdge = new Edge();
            this.temporaryEdge.changeStart(sleeper);
            this.temporaryEdge.setLocation('start', startLoaction);
        }

        // Set the end location
        const endLocation = {
            x: event.offsetX, 
            y: event.offsetY,
        }
        this.temporaryEdge.setLocation('end', endLocation);
        
        // Save current mouse posistion
        this.setMousePosition(event.offsetX, event.offsetY);

        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }

    _handlerDragHeadMove(event) {
        // Calculate relative move distance
        const currentPosistion = {
            x: event.offsetX, 
            y: event.offsetY,
        };

        Eventer.dispatchEvent(
            ActionControllerEventName.mouseMoveHead,
            this.mouseDownElement,
            currentPosistion,
        )
    }

    _handlerDragBackgroundMove(event) {
        // TODO: Create selection box
    }

    handleNMouseUp(event) {
        switch(this.actionMode) {
            case (mouseActionMode.downOnSleeper):
                const dragSleeperList = ActionUtils.findDraggedSleeper();
                console.log('mouse up', this.mouseDownElement.isDrag);

                Eventer.dispatchEvent(
                    ActionControllerEventName.mouseUpSleeper,
                    dragSleeperList,
                    this.temporaryCopy,
                );
                break;
            case (mouseActionMode.downOnAnchor):
                const closestObjectAnchor = ActionUtils.findClosestAnchor({
                    x: event.offsetX,
                    y: event.offsetY,
                });

                Eventer.dispatchEvent(
                    ActionControllerEventName.mouseUpAnchor,
                    this.mouseDownElement,
                    this.temporaryEdge,
                    closestObjectAnchor,
                );

                this.temporaryEdge = null;
                break;
            case (mouseActionMode.downOnHead):
                const closestObjectHead = ActionUtils.findClosestAnchor({
                    x: event.offsetX,
                    y: event.offsetY,
                });

                if (!closestObjectHead) {
                    // Send directly to UndoRedo stack (Note only head is speicial)
                    Eventer.dispatchEvent(UndoRedoEventName.addMutation, {
                        object: this.mouseDownElement,
                        operation: SavedOperation.moveHead,
                        params: {
                            changeEndLocation: {
                                x: this.mouseDownElement.endLocation.x - this.temporaryCopy.x,
                                y: this.mouseDownElement.endLocation.y - this.temporaryCopy.y,
                            },
                        },
                    });
                    break;
                }

                Eventer.dispatchEvent(
                    ActionControllerEventName.mouseUpHead,
                    this.mouseDownElement,
                    closestObjectHead,
                    this.temporaryCopy,
                );
                break;
            case (mouseActionMode.downOnBackground):
                break;
        }

        // Back to default status
        this.actionMode = mouseActionMode.downOnNone;
        this.temporaryCopy = null;
    }

    /**
     * Handle callback for double click operation
     * @param {*} event 
     */
    handleMouseDoubleClick(event) {
        // Only Active when double click on sleeper
        if (!this.mouseDownElement instanceof Sleeper) {
            return;
        }

        // Find if the location is on the that sleeper
        const isInThisSleeper = this.canvasContext.isPointInPath(
            this.mouseDownElement.canvasPath,
            event.offsetX,
            event.offsetY,
        )
        
        if (!isInThisSleeper || this.mouseDownElement.isTextMode) {
            return;
        }
    
        // Change the mouse action mode
        this.actionMode = mouseActionMode.downOnText;

        Eventer.dispatchEvent(
            ActionControllerEventName.mouseDoubleClick,
            this.mouseDownElement,
        );
    }

    handleMousePreventRightClick(event) {
        event.preventDefault();
        event.stopPropagation();
    }   
}

export { MouseAction };