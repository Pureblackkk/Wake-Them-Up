import { Eventer } from '../../../utils/event';
import { SleeperPooler } from '../../data-layer/sleeper/sleeper-pool';
import {
    PainterEventName,
    PanelOpearationControllerEventName,
    SummaryEventName,
} from '../../../global/event-name-config';

class WakingProcessController {
    constructor() {
        this.roundNum = 0;
        this.frameTime = 700;
        this.isPause = true;
        this.refreshIntervalId = null;
        this.awakeQueue = null;
        this.initEventHandler();
    }

    /**
     * Regiser event handler
     */
    initEventHandler() {
        // Extract event name
        const {
            startWakingProcess,
            pauseWakingProcess,
        } = PanelOpearationControllerEventName;

        // Make EventName-Handler Map
        const eventNamesMap = {};
        eventNamesMap[startWakingProcess] = this.startWakingProcessController.bind(this);
        eventNamesMap[pauseWakingProcess] = this.pauseWakingProcessController.bind(this);

        // Init event handler
        for (const eventName in eventNamesMap) {
            Eventer.addEventListener(eventName, eventNamesMap[eventName]);
        }
    }

    initAwakeQueue() {
        this.roundNum = 0;
        const tempQueue = [];

        for (const sleeper of SleeperPooler.pool) {
            if (!sleeper.isSleeping) {
                tempQueue.push(sleeper);
            }
        }

        this.awakeQueue = tempQueue;

        // Trigger Summary
        const sleeperAndAwakeNum = this.countSleeperAndAwake()
        Eventer.dispatchEvent(
            SummaryEventName.drawShare,
            sleeperAndAwakeNum,
        );
        Eventer.dispatchEvent(
            SummaryEventName.updateDetail,
            sleeperAndAwakeNum[0],
            sleeperAndAwakeNum[1],
            this.roundNum
        );
    }
    
    startWakingProcessController() {
        this.isPause = false;
        this.initAwakeQueue();

        // Set interval
        this.refreshIntervalId = setInterval(() => {
            if (this.awakeQueue.length > 0 && !this.isPause) {
                // Go Next Round
                for (const sleeper of this.awakeQueue) {
                    const newActivedSleeper = sleeper.activeChild();
                    this.awakeQueue = [...this.awakeQueue, ...newActivedSleeper];
                    this.awakeQueue.shift();
                }

                // Add round number
                this.roundNum += 1;

                // Trigger Summary
                const sleeperAndAwakeNum = this.countSleeperAndAwake()
                Eventer.dispatchEvent(
                    SummaryEventName.drawShare,
                    sleeperAndAwakeNum,
                );
                Eventer.dispatchEvent(
                    SummaryEventName.updateDetail,
                    sleeperAndAwakeNum[0],
                    sleeperAndAwakeNum[1],
                    this.roundNum
                );

                // Trigger the painter event to redraw
                Eventer.dispatchEvent(
                    PainterEventName.repaint,
                );
            } else {
                if (this.awakeQueue.length == 0) {
                    Eventer.dispatchEvent(
                        PanelOpearationControllerEventName.endWakingProcess
                    );
                }

                // Clear interval
                clearInterval(this.refreshIntervalId);
            }
        }, this.frameTime);
    }

    /**
     * Pause the waking process 
     */
    pauseWakingProcessController() {
        this.isPause = true;
    }

    /**
     * Count the number of sleeper and Awaker
     */
    countSleeperAndAwake() {
        let sleeperNum = 0;
        for (const sleeper of SleeperPooler.pool) {
            if (sleeper.isSleeping) {
                sleeperNum += 1;
            }
        }
        return [sleeperNum, SleeperPooler.pool.length - sleeperNum];
    }
}

export { WakingProcessController };