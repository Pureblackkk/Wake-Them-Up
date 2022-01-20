import { DefaultEdgeWeight } from '../config';
import { Eventer } from '../../../utils/event';
import { 
    EdgePoolEventName, 
    EdgeEventName,
} from '../../../global/event-name-config';
import { Sleeper } from '../sleeper/sleeper';
import { EdgePooler } from './edge-pool';

class Edge {
    constructor() {
        // Data information
        this.startSleeper = null;
        this.endSleeper = null;
        this.weight = null;

        // Canvas path information
        this.startLocation = null;
        this.endLocation = null;
        this.canvasPath = null;
        this.isActive = false;

        // Init event
        this.initEventHandler();

        // Trigger Event
        Eventer.dispatchEvent(EdgePoolEventName.addEdge, this);
    }

    initEventHandler() {
        // Extract event name
        const {
            activeSomeEdge,
        } = EdgeEventName;

        const eventNamesMap = {};
        eventNamesMap[activeSomeEdge] = this.activeSomeEdge.bind(this);

        // Register active some node handler
        for (const event in eventNamesMap) {
            Eventer.addEventListener(event, eventNamesMap[event]);
        }
    }

    /**
     * Get the start sleeper object
     * @returns {Sleeper} 
     */
    getStartSleeper() {
        return this.startSleeper;
    }

    /**
     * Get the end sleeper object
     * @returns {Sleeper} 
     */
    getEndSleeper() {
        return this.endSleeper;
    }

    /**
     * Get the weight on this edge
     * @returns {float}
     */
    getWeight() {
        return this.weight;
    }

    /**
     * Change the weight to the given value
     * @param {float} newWeight 
     */
    changeWeight(newWeight) {
        this.weight = newWeight;
    }
    
    /**
     * Change the start sleeper
     * @param {*} newSleeper 
     */
    changeStart(newSleeper) {
        this.startSleeper = newSleeper;
    }

    /**
     * Change the end sleeper
     * @param {*} newSleeper 
     */
    changeEnd(newSleeper) {
        this.endSleeper = newSleeper;
    }

    /**
     * Set start and end location
     */
    setLocation(type, location) {
        switch(type) {
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
    setCanvasPath(edgePath) {
        this.canvasPath = edgePath;
    }

    activeSomeEdge(edge) {
        if (edge === this && this.isActive === false) {
            this.isActive = true;
        } else if (this.isActive && edge !== this) {
            this.isActive = false;
        }
    }

    deleteSelf() {
        EdgePooler.removeEdge(this);
        // Delete it in start sleeper
        this.startSleeper.removeEdge(this);

        // Delete it in end sleeper
        if (!!this.endSleeper) {
            this.endSleeper.removeIncomingEdge(this);

            // Delete the child of start sleeper
            this.startSleeper.removeChild(this.endSleeper);
        }
    }

    recoverSelf() {
        EdgePooler.addEdge(this);
        // Recover it in start sleeper
        this.startSleeper.addEdge(this);

        // Recover it in end sleeper
        if (!!this.endSleeper) {
            this.endSleeper.addIncomingEdge(this);

            // add the child of start sleeper
            this.startSleeper.addChild(this.endSleeper)
        }
    }
}

export { Edge };