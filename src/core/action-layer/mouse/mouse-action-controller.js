import { 
    ActionControllerEventName,
    SleeperEventName,
    PainterEventName,
    EdgeEventName,
} from '../../../global/event-name-config';
import { Eventer } from '../../../utils/event';
import { SleeperPooler } from '../../data-layer/sleeper/sleeper-pool';
import { EdgePooler } from '../../data-layer/edge/edge-pool';
import { UndoDecorator } from '../../../undo-redo/undo-decorator'; 

class MouseActionController {
    constructor() {
        this.initEventHandler();
    }

    /**
     * Regiser event handler
     */
    initEventHandler() {
        // Extract event name
        const {
            mouseDownSleeper,
            mouseDownLine,
            mouseDownBackground,
            mouseMoveSleeper,
            mouseMoveHead,
            mouseUpSleeper,
            mouseUpAnchor,
            mouseUpHead,
            mouseDoubleClick,
        } = ActionControllerEventName;

        // Make EventName-Handler Map
        const eventNamesMap = {};
        eventNamesMap[mouseDownSleeper] = this.mouseDownSleeperController;
        eventNamesMap[mouseDownLine] = this.mouseDownLineController;
        eventNamesMap[mouseDownBackground] = this.mouseDownBackgroundController;
        eventNamesMap[mouseMoveSleeper] = this.mouseMoveSleeperController;
        eventNamesMap[mouseMoveHead] = this.mouseMoveHeadController;
        eventNamesMap[mouseUpSleeper] = UndoDecorator.mouseUpSleeperDecorator(this.mouseUpSleeperController.bind(this));
        eventNamesMap[mouseUpAnchor] = UndoDecorator.mouseUpAnchorDecorator(this.mouseUpAnchorController.bind(this));
        eventNamesMap[mouseUpHead] = UndoDecorator.mouseUpHeadDecorator(this.mouseUpHeadController.bind(this));
        eventNamesMap[mouseDoubleClick] = this.mouseDoubleClickController;

        // Init event handler
        for (const eventName in eventNamesMap) {
            Eventer.addEventListener(eventName, eventNamesMap[eventName]);
        }
    }

    /**
     * Alter the sleeper properties 
     * @param {Sleeper} sleeper Sleeper object
     */
    mouseDownSleeperController(sleeper) {
        console.log('down', sleeper.textInformation.content);
        
        // Change active status and drag status
        Eventer.dispatchEvent(
            SleeperEventName.activeSomeSleeper,
            sleeper
        );

        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }

    /**
     * Alter the edge properties
     * @param {*} edge 
     */
    mouseDownLineController(edge) {
        // Change active edge status 
        Eventer.dispatchEvent(
            EdgeEventName.activeSomeEdge,
            edge,
        );

        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }

    /**
     * Clean all the active status
     */
    mouseDownBackgroundController() {
        console.log('Down on background controller');
        for (const sleeper of SleeperPooler.pool) {
            // Deactive all the sleeper
            sleeper.changeActiveStatus(null);

            // Back to normal mode
            sleeper.endTextMode();
        }

        for (const edge of EdgePooler.pool) {
            edge.isActive = false;
        }

        console.log(SleeperPooler.pool);

        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }

    /**
     * Change the sleeper canvas position
     * @param {*} dragSleeperList 
     * @param {*} relativeMoveDistance 
     */
    mouseMoveSleeperController(dragSleeperList, relativeMoveDistance) {
        for (const sleeper of dragSleeperList) {
            const originX = sleeper.canvasInformation.x;
            const originY = sleeper.canvasInformation.y;
            const newX = originX + relativeMoveDistance.x;
            const newY = originY + relativeMoveDistance.y;
            sleeper.changeCanvasInformation({
                x: newX,
                y: newY,
            });

            for (const edge of sleeper.edgeList) {
                edge.setLocation('start', {
                    x: edge.startLocation.x + relativeMoveDistance.x,
                    y: edge.startLocation.y + relativeMoveDistance.y,
                });
            }

            for (const edge of sleeper.incomingEdgeList) {
                edge.setLocation('end', {
                    x: edge.endLocation.x + relativeMoveDistance.x,
                    y: edge.endLocation.y + relativeMoveDistance.y,
                });
            }
        }

        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }

    /**
     * Change the edge canvas position
     * @param {Edge} dragEdge 
     * @param {*} relativeMoveDistance 
     */
    mouseMoveHeadController(dragEdge, currentPosition) {
        dragEdge.setLocation('end', currentPosition);

        // Delete the edge from end sleeper
        if (!!dragEdge.endSleeper) {
            dragEdge.endSleeper.removeIncomingEdge(dragEdge);
            dragEdge.changeEnd(null);
        }
        
        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }

    /**
     * Clean all the drag flag when mouse up
     * @param {*} dragSleeperList 
     */
    mouseUpSleeperController(dragSleeperList) {
        for(const sleeper of dragSleeperList) {
            sleeper.switchDragStatus();
        }
    }

    /**
     * Save the temporary edge into sleeper
     * @param {*} sleeperAndAnchor clicked anchor and its sleeper
     * @param {Edge} edge edge object
     */
    mouseUpAnchorController(sleeperAndAnchor, edge, closestObject) {
        const [sleeper, sleeperAnchor] = sleeperAndAnchor;
        sleeper.addEdge(edge);

        // Add the end sleeper if cloestObject existed
        if (!!closestObject) {
            this.mouseUpHeadController(edge, closestObject);
        }
    }

    /**
     * Link to the cloest anchor if needed
     * @param {*} edge 
     * @param {*} closestObject 
     */
    mouseUpHeadController(edge, closestObject) {
        const {
            closestLocation,
            closestSleeper,
        } = closestObject;

        // Set incoming edge for current sleeper
        closestSleeper.addIncomingEdge(edge);

        // Set edge location
        edge.setLocation('end', closestLocation);

        // Set edge end sleeper
        edge.changeEnd(closestSleeper);

        // Set edge start sleeper's child
        edge.startSleeper.addChild(closestSleeper);

        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }

    /**
     * @param {Sleeper} sleeper
     * Start text mode when doulbe click on the sleeper
     */
    mouseDoubleClickController(sleeper) {
        // Call the starting text mode function of that sleeper
        Eventer.dispatchEvent(
            SleeperEventName.activeSomeSleeperTextMode,
            sleeper,
        );

        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }
}

export { MouseActionController };