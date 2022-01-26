import { 
    DefaultSleeperCanvasInformation,
    DefaultAwakeCanvasInformation,
    DefaultActiveInformation,
} from '../config';
import { 
    PainterEventName,
    PanelOpearationControllerEventName,
} from '../../../global/event-name-config';
import { Eventer } from '../../../utils/event';
import { Sleeper } from './sleeper';
import { SleeperPooler } from './sleeper-pool';

class SleeperFactory {
    static getInstance() {
        if (!this.instance) {
            this.instance = new SleeperFactory();
        }

        return this.instance;
    }

    /**
     * Mount canvas when initialize, must mount before it can be used !!!
     * @param {*} canvasObj 
     */
    mountCanvas(canvasObj) {
        this.canvas = canvasObj;
    }

    constructor() {
        if (!SleeperFactory.instance) {
            // Initial params
            this.sleeperCanvasInformation = Object.assign({}, DefaultSleeperCanvasInformation);
            this.awakeCanvasInformation = Object.assign({}, DefaultAwakeCanvasInformation);
            this.activeInformation = DefaultActiveInformation;
            this.prob = 0.0;

            this.initEventsHandler();
            SleeperFactory.instance = this;
        }

        return SleeperFactory.instance;
    }
    
    /**
     * Register event handler related to Sleeper Pool
     */
    initEventsHandler() {
        // Register for making new sleeper
        Eventer.addEventListener(
            PanelOpearationControllerEventName.createNode,
            this.makeNewSleeper.bind(this)
        );

        // Register for changeing sleeper and awake sleepers' style
        Eventer.addEventListener(
            PanelOpearationControllerEventName.changeNodeStyle,
            this.changeCanvasInformation.bind(this)
        );
    }

    /**
     * Change sleeper and awake sleepers' canvas information
     * @param {Number} type 0 for sleeper, 1 for awake sleeper
     * @param {object} propertyObject object for change
     */
    changeCanvasInformation(type, propertyObject) {
        let forChangedInformation = !!type ? this.awakeCanvasInformation : this.sleeperCanvasInformation;

        // Iterate the aleration and update
        for (const property in propertyObject) {
            const newValue = propertyObject[property];
            if (forChangedInformation[property] !== newValue) {
                forChangedInformation[property] = newValue;
            }
        }
        
        // Update canvas Information
        for (let sleeper of SleeperPooler.pool) {
            // Only change corresponding nodes 
            if ((!!type) ^ sleeper.isSleeping) {
                sleeper.changeCanvasInformation({
                    fillColor: forChangedInformation.fillColor,
                    borderColor: forChangedInformation.borderColor,
                });
            }
        }

        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }

    /**
     * Get canvas information
     * @param {int} type 0 for sleeper, 1 for awake sleeper
     */
    getCanvasInformation(type) {
        return !!type ? this.awakeCanvasInformation : this.sleeperCanvasInformation;
    }

    /**
     * Change config probability to awake other sleeper
     * @param {*} type 
     */
    changeProbability(prob) {
        this.prob = prob;
    }

    /**
     * Make new sleeper to sleeper pool
     * @param {int} type 0 for sleeper, 1 for awake sleeper
     * @param {object} position location to make new sleeper
     */
    makeNewSleeper(type, position) {
        console.log('create');
        // Get sleep status
        const status = !type;

        // Get canvas information
        const canvasInformation = !!type ? Object.assign({}, this.awakeCanvasInformation) : Object.assign({}, this.sleeperCanvasInformation);

        // Set posiition
        if (!!position) {
            canvasInformation.x = position.x;
            canvasInformation.y = position.y;
        }

        // Make new sleeper
        const tempSleeper = new Sleeper(
            status,
            canvasInformation,
        );
        
        tempSleeper.probability = this.prob;
    }
}

export const SleepersFactory = SleeperFactory.getInstance();

