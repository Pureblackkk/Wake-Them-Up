import { SavedOperation } from './operation';
import { Eventer } from '../utils/event';
import { UndoRedoEventName } from '../global/event-name-config';
import { CopyPasteHouse } from '../copy-paste/copy-paste-house';

export class UndoDecorator {
    /**
     * Decorator for mouse up from sleeper
     */ 
    static mouseUpSleeperDecorator(controllerFunction) {
        return function(dragSleeperList, originalInfo) {
            // TODO: Current Sleeper (Now no selection box)
            const currentSleeper = dragSleeperList[0];

            // Find location change
            const changeLocation = {
                x: currentSleeper.canvasInformation.x - originalInfo.x,
                y: currentSleeper.canvasInformation.y - originalInfo.y,
            }

            if (changeLocation.x !== 0 && changeLocation.y !== 0) {
                // Save to undo stack
                Eventer.dispatchEvent(UndoRedoEventName.addMutation, {
                    object: currentSleeper,
                    operation: SavedOperation.moveSleeper,
                    params: {
                        changeLocation,
                    },
                });
            }

            // Original controller
            controllerFunction(dragSleeperList);
        }
    }

    /**
     * Decorator for mouse up from anchor
     */
    static mouseUpAnchorDecorator(controllerFunction) {
        return function(sleeperAndAnchor, edge, closestObject) {
            // Save to undo stack
            Eventer.dispatchEvent(UndoRedoEventName.addMutation, {
                object: edge,
                operation: SavedOperation.addEdgeFromAnchor,
                params: {
                    startSleeper: sleeperAndAnchor[0],
                },
            });

            // Original controller 
            controllerFunction(sleeperAndAnchor, edge, closestObject);
        }
    }

    /**
     * Decorator for mouse up from head
     */
    static mouseUpHeadDecorator(controllerFunction) {
        return function(edge, closestObject, originalLocation) {
            const {
                closestLocation,
                closestSleeper,
            } = closestObject;

            // Add mutation 
            Eventer.dispatchEvent(UndoRedoEventName.addMutation, {
                object: edge,
                operation: SavedOperation.moveHead,
                params: {
                    changeEndLocation: {
                        x: closestLocation.x - originalLocation.x,
                        y: closestLocation.y - originalLocation.y,
                    },
                    addedEndSleeper: closestSleeper,
                },
            });

            // Original controller
            controllerFunction(edge, closestObject);
        }
    }

    /**
     * Decorator for delete items
     */
    static deleteItemsDecorator(controllerFunction) {
        return function(clickObject) {
            // Add mutation
            Eventer.dispatchEvent(UndoRedoEventName.addMutation, {
                object: clickObject,
                operation: SavedOperation.delete,
                params: {},
            });

            // Original controller
            controllerFunction(clickObject);
        }
    }

    /**
     * Decorator for paste items
     */
    static pasteDecorator(controllerFunction) {
        return function() {
            // Firstlu copy
            const clonedHouse = CopyPasteHouse.package

            // Add mutation
            Eventer.dispatchEvent(UndoRedoEventName.addMutation, {
                object: clonedHouse,
                operation: SavedOperation.paste,
                params: {},
            })

            // Original controller
            controllerFunction(clonedHouse);
        }
    }
}