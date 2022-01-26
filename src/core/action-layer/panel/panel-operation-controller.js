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
        } = PanelOpearationControllerEventName;

        // Make EventName-Handler Map
        const eventNamesMap = {};
        eventNamesMap[changeAllProbability] = this.probChangeController;
        eventNamesMap[resetSleepers] = this.resetController;

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

}

export { PanelOperationController };