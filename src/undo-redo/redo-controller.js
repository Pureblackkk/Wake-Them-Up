import { SavedOperation } from './operation';
import { Eventer } from '../utils/event';
import { PainterEventName } from '../global/event-name-config';
import { Sleeper } from '../core/data-layer/sleeper/sleeper';

/**
 * Redo controller to actually deal with the redoing the tasks
 * @param {*} task 
 */

export function redoController(task) {
    const {
        object,
        params,
        operation,
    } = task;

    switch(operation) {
        case (SavedOperation.moveSleeper):
            redoMoveSleeper(object, params);
            break;
        case (SavedOperation.addEdgeFromAnchor):
            redoMoveAnchor(object, params);
            break;
        case (SavedOperation.moveHead):
            redoMoveHead(object, params);
            break;
        case (SavedOperation.delete):
            redoDeleteItems(object);
            break;
        case (SavedOperation.paste):
            redoPaste(object);
            break;
        case (SavedOperation.createSleeper):
            redoCreateSleeper(object);
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
 * Redo move sleeper operation
 * @param {*} object Recieved current sleeper node
 * @param {*} params operation parameters
 */
function redoMoveSleeper(object, params) {
    const { x, y } = object.canvasInformation
    const { changeLocation } = params;
    const recoverLocation = {
        x: x + changeLocation.x,
        y: y + changeLocation.y,
    }

    // Change sleeper canvas location
    object.changeCanvasInformation(recoverLocation);

    // Change the connected outcoming edges' location
    for (const edge of object.edgeList) {
        const edgeRecoverLocation = {
            x: edge.startLocation.x + changeLocation.x,
            y: edge.startLocation.y + changeLocation.y,
        };

        edge.setLocation(
            'start',
            edgeRecoverLocation,
        );
    }

    // Change the incoming edges' location
    for (const edge of object.incomingEdgeList) {
        const edgeRecoverLocation = {
            x: edge.endLocation.x + changeLocation.x,
            y: edge.endLocation.y + changeLocation.y,
        };

        edge.setLocation(
            'end',
            edgeRecoverLocation,
        );
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
    const { changeEndLocation } = params;

    // Recover egde end location
    const recoverLocation = {
        x: object.endLocation.x + changeEndLocation.x,
        y: object.endLocation.y + changeEndLocation.y,
    };

    object.setLocation(
        'end',
        recoverLocation,
    );

    // Recover added end sleeper if needed
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
    for (let item of object) {
        // TODO: Only support sleeper now
        if (item instanceof Sleeper) {
            item.recoverSelf();
        }
    }
}

/**
 * Redo create the sleeper
 * @param {*} object 
 */
function redoCreateSleeper(object) {
    object.recoverSelf();
}

