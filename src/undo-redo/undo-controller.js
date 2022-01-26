import { SavedOperation } from './operation';
import { Eventer } from '../utils/event';
import { PainterEventName } from '../global/event-name-config';
import { Sleeper } from '../core/data-layer/sleeper/sleeper';

/**
 * Undo controller to actually deal with the undoing the tasks
 * @param {*} task 
 */
export function undoController(task) {
    const {
        object, 
        params, 
        operation,
    } = task;

    switch(operation) {
        case (SavedOperation.moveSleeper):
            undoMoveSleeper(object, params);
            break;
        case (SavedOperation.addEdgeFromAnchor):
            undoMoveAnchor(object, params);
            break;
        case (SavedOperation.moveHead):
            undoMoveHead(object, params);
            break;
        case (SavedOperation.delete):
            undoDeleteItems(object);
            break;
        case (SavedOperation.paste):
            undoPaste(object);
            break;
        case (SavedOperation.createSleeper):
            undoCreateSleeper(object);
            break;
        default:
            break;
    }

    // Trigger the painter event to redraw
    Eventer.dispatchEvent(
        PainterEventName.repaint,
    );
}

/**
 * Undo move sleeper operation
 * @param {*} object Recieved current sleeper node
 * @param {*} params operation parameters
 */
function undoMoveSleeper(object, params) {
    const { x, y } = object.canvasInformation
    const { changeLocation } = params;
    const recoverLocation = {
        x: x - changeLocation.x,
        y: y - changeLocation.y,
    }

    // Change sleeper canvas location
    object.changeCanvasInformation(recoverLocation);

    // Change the connected outcoming edges' location
    for (const edge of object.edgeList) {
        const edgeRecoverLocation = {
            x: edge.startLocation.x - changeLocation.x,
            y: edge.startLocation.y - changeLocation.y,
        };

        edge.setLocation(
            'start',
            edgeRecoverLocation,
        );
    }

    // Change the incoming edges' location
    for (const edge of object.incomingEdgeList) {
        const edgeRecoverLocation = {
            x: edge.endLocation.x - changeLocation.x,
            y: edge.endLocation.y - changeLocation.y,
        };

        edge.setLocation(
            'end',
            edgeRecoverLocation,
        );
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
    const { changeEndLocation } = params;

    // Recover egde end location
    const recoverLocation = {
        x: object.endLocation.x - changeEndLocation.x,
        y: object.endLocation.y - changeEndLocation.y,
    };

    object.setLocation(
        'end',
        recoverLocation,
    );

    // Remove added end sleeper if needed
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
    for(let item of object) {
        // TODO: Only support sleeper now
        if (item instanceof Sleeper) {
            item.deleteSelf();
        }
    }
}

/**
 * Undo create sleeper
 * @param {*} object Deleted object
 */
function undoCreateSleeper(object) {
    object.deleteSelf();
}
