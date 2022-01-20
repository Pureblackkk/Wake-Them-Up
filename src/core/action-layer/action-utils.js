import { SleeperPooler } from '../data-layer/sleeper/sleeper-pool';
import { EdgePooler } from '../data-layer/edge/edge-pool';
import { isPointInLine } from '../../utils/math-utils';
import { MinimalDistanceForLocate } from './config';

class ActionUtils {
    /**
     * Find mouse located object
     * @param {*} canvas 
     * @param {*} location 
     * @returns 
     */
    static findLocatedObject(canvas, location) {
        const findFunctionsList = [
            ActionUtils.findLocatedLineOrHead,
            ActionUtils.findLocatedAnchor,
            ActionUtils.findLocatedSleeper,
        ];

        for (const findFunction of findFunctionsList) {
            const findResult = findFunction(canvas, location);
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
    static findLocatedSleeper(canvas, location) {
        const canvasContext = canvas.getContext('2d');

        // Inner function to check if location in circle
        const isLocatedInCircle = (circlePath) => {
            const {x, y} = location;
            return canvasContext.isPointInPath(circlePath, x, y)
        };

        // Handler checking functions' maps 
        const locationHandlerMaps = {
            'circle': isLocatedInCircle.bind(this),
        }

        // Iterate pool to find located path
        for (let index = SleeperPooler.pool.length - 1; index >= 0; index--) {
            const sleeper = SleeperPooler.pool[index];
            const sleeperStyle = sleeper.canvasInformation;
            const sleeperCanvasPath = sleeper.canvasPath;
            const { drawType } = sleeperStyle;
            if (locationHandlerMaps[drawType](sleeperCanvasPath)) {
                return {
                    result: sleeper,
                    type: 'sleeper',
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
    static findLocatedAnchor(canvas, location) {
        const canvasContext = canvas.getContext('2d');
        const {x, y} = location;

        for (let index = SleeperPooler.pool.length - 1; index >= 0; index--) {
            const sleeper = SleeperPooler.pool[index];
            if (sleeper.isActive) {
                for (const sleeperAnchor of sleeper.canvasAnchorsPathList) {
                    const { anchorPath } = sleeperAnchor;
                    if (canvasContext.isPointInPath(anchorPath, x, y)) {
                        return {
                            result: [sleeper, sleeperAnchor],
                            type: 'anchor',
                        };
                    }
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
    static findLocatedLineOrHead(canvas, location) {
        const canvasContext = canvas.getContext('2d');
        const {x, y} = location;
        for (let index = EdgePooler.pool.length - 1; index >= 0; index--) {
            const edge = EdgePooler.pool[index];
            const { head } = edge.canvasPath;
            if (isPointInLine(edge.startLocation, edge.endLocation, x, y)) {
                return {
                    result: edge,
                    type: 'line',
                };
            }
            if (canvasContext.isPointInPath(head, x, y)) {
                return {
                    result: edge,
                    type: 'head',
                };
            }
        }
        return null;
    }

    /**
     * Find the sleeper who is in dragging status
     * @returns 
     */
    static findDraggedSleeper() {
        const draggedSleeperList = [];
        for (let sleeper of SleeperPooler.pool) {
            if (sleeper.isDrag) {
                draggedSleeperList.push(sleeper);
            }
        }
        return draggedSleeperList;
    }

    /**
     * Throttler maker for listener callback function
     * @param {Function} fn 
     * @param {Number} waitTime 
     * @returns 
     */
    static throttlerMaker(fn, waitTime) {
        let timer = null;
        return function() {
            const context = this;
            const args = arguments;
            if(!timer) {
                timer = setTimeout(function(){
                    fn.apply(context, args);
                    timer = null;
                }, waitTime)
            }
        }
    }

    /**
     * Find the closest sleeper given location
     * @param {*} location 
     * @returns 
     */
    static findClosestSleeper(location) {
        const {x, y} = location;
        for(const sleeper of SleeperPooler.pool) {
            const sleeperX = sleeper.canvasInformation.x;
            const sleeperY = sleeper.canvasInformation.y;
            const distance = Math.sqrt((sleeperX - x)**2 + (sleeperY -y)**2);
            if (distance < sleeper.canvasInformation.radius + MinimalDistanceForLocate) {
                return sleeper;
            }
        }

        return null;
    }

    /**
     * Find the closest anchor given location
     * @param {*} location 
     * @returns 
     */
    static findClosestAnchor(location) {
        const locatedSleeper = this.findClosestSleeper(location);
        if (!locatedSleeper) {
            return null;
        }

        console.log('cloest Sleeper', locatedSleeper);

        const locatedSleeperX = locatedSleeper.canvasInformation.x;
        const locatedSleeperY = locatedSleeper.canvasInformation.y;
        const radius = locatedSleeper.canvasInformation.radius;
        const anchorLocationList = [
            {
                x: locatedSleeperX - radius,
                y: locatedSleeperY,
            },
            {
                x: locatedSleeperX + radius,
                y: locatedSleeperY,
            },
            {
                x: locatedSleeperX,
                y: locatedSleeperY - radius,
            },
            {
                x: locatedSleeperX,
                y: locatedSleeperY + radius,
            },
        ];

        let minDistance = Number.MAX_SAFE_INTEGER;
        let minLocation = null;
        for (const anchorLocation of anchorLocationList) {
            const {x, y} = anchorLocation;
            const distance = (location.x - x)**2 + (location.y - y)**2;
            if (distance < minDistance) {
                minLocation = anchorLocation;
                minDistance = distance;
            }
        }

        return {
            closestLocation: minLocation,
            closestSleeper: locatedSleeper,
        };
    }
}

export { ActionUtils };