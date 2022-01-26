import { 
    PanelOpearationControllerEventName,
    PainterEventName,
} from '../../../global/event-name-config';
import { Eventer } from '../../../utils/event';
import { SleeperPooler } from '../../data-layer/sleeper/sleeper-pool';
import { SleepersFactory } from '../../data-layer/sleeper/sleeper-factory';

class PanelOperationController {
    constructor() {
        this.initEventHandler();
    }

    /**
     * Regiser event handler
     */
    initEventHandler() {
        // Extract event name
        const {
            changeAllProbability,
            resetSleepers,
            panelCreateNode,
            panelActive,
        } = PanelOpearationControllerEventName;

        // Make EventName-Handler Map
        const eventNamesMap = {};
        eventNamesMap[changeAllProbability] = this.probChangeController;
        eventNamesMap[panelCreateNode] = this.panelCreateNodeController;
        eventNamesMap[resetSleepers] = this.resetController;
        eventNamesMap[panelActive] = this.panelActiveController;

        // Init event handler
        for (const eventName in eventNamesMap) {
            Eventer.addEventListener(eventName, eventNamesMap[eventName]);
        }
    }

    /**
     * Change all the prob within each sleeper
     * @param {*} prob 
     */
    probChangeController(prob) {
        // Change the factory
        SleepersFactory.changeProbability(prob);

        // Change the sleeper
        for(const sleeper of SleeperPooler.pool) {
            sleeper.probability = prob;
        }
    }

    /**
     * Reset all the sleeper status
     */
    resetController() {
        for(const sleeper of SleeperPooler.pool) {
            if (sleeper.isSleeping !== sleeper.beforeProcessIsSleeping) {
                sleeper.changeSleepingStatus(sleeper.beforeProcessIsSleeping);
            }
        }

        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }

    /**
     * Create sleeper from panel
     */
    panelCreateNodeController(obj, position) {
        Eventer.dispatchEvent(
            PanelOpearationControllerEventName.createNode,
            0,
            position,
        );
    }

    /**
     * Acitve sleeper with context meanu
     */
    panelActiveController(sleeper) {
        // Active sleeper
        sleeper.changeSleepingStatus();
        sleeper.beforeProcessIsSleeping = sleeper.isSleeping;

        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }

}

export { PanelOperationController };