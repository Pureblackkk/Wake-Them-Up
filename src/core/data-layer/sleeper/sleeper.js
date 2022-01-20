import { Edge } from '../edge/edge';
import { Eventer } from '../../../utils/event';
import { getActivityByWeight } from '../../../utils/math-utils';
import { 
    DefaultSleeperCanvasInformation,
    DefaultActiveInformation,
} from '../config';
import { 
    SleeperEventName,
    SleeperPoolEventName,
    PainterEventName,
} from '../../../global/event-name-config';
import { TextSleeper } from './sleeper-text'; 
import { SleeperPooler } from '../sleeper/sleeper-pool';

class Sleeper extends TextSleeper {
    constructor(status, canvasInformation) {
        super();

        this.isSleeping = status || true;
        this.isActive = false;
        this.isDrag = false;

        this.edgeList = [];
        this.incomingEdgeList = [];
        this.childrenList = [];
        this.childEdgeMapList = [];

        this.canvasInformation = canvasInformation || DefaultSleeperCanvasInformation;
        this.canvasPath = null;
        this.canvasAnchorsPathList = null;
        this.initEventHandler();

        // Trigger Event
        Eventer.dispatchEvent(SleeperPoolEventName.addSleeper, this);
        Eventer.dispatchEvent(
            PainterEventName.figureDraw, 
            this.canvasInformation, 
            this.setCanvasPath.bind(this),
        );

        // Draw the text
        this.drawTextArea();
        this.drawText();
    }

    initEventHandler() {
        // Extract event name
        const {
            activeSomeSleeper,
        } = SleeperEventName;

        const eventNamesMap = {};
        eventNamesMap[activeSomeSleeper] = this.changeActiveStatus.bind(this);

        // Register active some node handler
        for (const event in eventNamesMap) {
            Eventer.addEventListener(event, eventNamesMap[event]);
        }
    }

    /**
     * Add a child node for current sleeper
     * @param {Sleeper} childSleeper 
     */
    addChild(childSleeper) {
        if (!childSleeper) {
            return new Error('Sleeper AddChild Error: No children is given!')
        }
        this.childrenList.push(childSleeper);
    }

    /**
     * Remove a given child sleeper 
     * @param {Sleeper} childSleeper 
     */
    removeChild(childSleeper) {
        const expectChildIndex = this.childrenList.findIndex(
            childObject => childObject === childSleeper
        );

        // Throw Error when not find the child
        if (expectChildIndex === -1 || expectChildIndex === undefined) {
            return new Error('Sleeper RemoveChild Error: Not find the child!')
        }

        // Remove the child
        this.childrenList.splice(expectChildIndex, 1);
    }

    /**
     * Add a edge for current sleeper 
     * @param {Edge} edge Edge object 
     */
    addEdge(edge) {
        if (!edge) {
            return new Error('Sleeper addEdge Error: No edge is given!')
        }
        this.edgeList.push(edge);
    }

    /**
     * Remove a edge for current sleeper 
     * @param {Edge} edge Edge object
     */
    removeEdge(edge) {
        const expectEdgeIndex = this.edgeList.findIndex(
            edgeObject => edgeObject === edge
        );

        // Throw Error when not find the child
        if (expectEdgeIndex === -1 || expectEdgeIndex === undefined) {
            return new Error('Sleeper RemoveEdge Error: Not find the edge!')
        }

        // Remove the child
        this.edgeList.splice(expectEdgeIndex, 1);
    }

    /**
     * Add a incoming edge for current sleeper
     */
    addIncomingEdge(edge) {
        if (!edge) {
            return new Error('Sleeper addIncomingEdge Error: No edge is given!')
        }
        this.incomingEdgeList.push(edge);
    }

    /**
     * Remove a incoming edge for current sleeper 
     * @param {*} edge 
     * @returns 
     */
    removeIncomingEdge(edge) {
        const expectEdgeIndex = this.incomingEdgeList.findIndex(
            edgeObject => edgeObject === edge
        );

        // Throw Error when not find the child
        if (expectEdgeIndex === -1 || expectEdgeIndex === undefined) {
            return new Error('Sleeper RemoveIncomingEdge Error: Not find the edge!');
        }

        // Remove the child
        this.incomingEdgeList.splice(expectEdgeIndex, 1);
    }

    /**
     * Change the current node status
     */
    changeSleepingStatus() {
        this.isSleeping = !this.isSleeping;
    }

    /**
     * Try to active the children nodes
     */
    activeChild() {
        // Active the children in order
        this.childrenList.forEach(childObject => {
            const weight = childObject.edge.weight;
            // Change the child status if active
            if (getActivityByWeight(weight)) {
                childObject.child.changeSleepingStatus();
            }
        });
    }

    /**
     * Update the canvas path
     * @param {*} canvasPathObject canvas path object
     */
    setCanvasPath(args) {
        const [canvasPathObject, anchorsList] = args;
        this.canvasPath = canvasPathObject;

        if (!!anchorsList) {
            this.canvasAnchorsPathList = anchorsList;
        }
    }

    /**
     * Update sleeper active status
     * @param {*} sleeper the event recieved sleepr object, note that it may be other sleepers
     */
    changeActiveStatus(sleeper) {
        if (sleeper === this && this.isActive === false) {
            // Select this sleeper and active itself
            this.isActive = true;
            this.changeCanvasInformation(DefaultActiveInformation);
        } else if (this.isActive && sleeper !== this) {
            // Select other sleeper then inactive itself
            this.isActive = false;
            this.isTextMode = false;
            this.changeCanvasInformation({
                isBorder: false,
                isAnchor: false,
            });
        }
        
        // Set drag flag
        if(sleeper === this) {
            this.switchDragStatus();
            console.log('isdrag', this.isDrag);
        }
    }

    /**
     * Update sleeper drag status
     */
    switchDragStatus() {
        this.isDrag = !this.isDrag;
    }

    /**
     * Update Sleeper canvas information and trigger the painter event
     * @param {object} propertyObject
     */
    changeCanvasInformation(propertyObject) {
        // Iterate the aleration and update
        for (const property in propertyObject) {
            const newValue = propertyObject[property];
            if (this.canvasInformation[property] !== newValue) {
                this.canvasInformation[property] = newValue;
            }
        }
    }

    /**
     * Delete non-related factor within this sleeper for paste
     */
    prepareForPaste() {
        // TODO: May need to change the position of it

        // Remove its edges and in-out sleeper
        this.edgeList = [];
        this.incomingEdgeList = [];
        this.childrenList = [];
        this.childEdgeMapList = [];

        // Change status
        this.isActive = true;
        this.isDrag = false;
    }

    /**
     * Delete itself 
     */
    deleteSelf() {
        SleeperPooler.removeSleeper(this);
    }

    /**
     * Recover itself
     */
    recoverSelf() {
        SleeperPooler.addSleeper(this);
    }
}

export { Sleeper };