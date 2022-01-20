import { Eventer } from '../../../utils/event';
import { 
    SleeperPoolEventName,
    SleeperEventName,
} from '../../../global/event-name-config';

class SleeperPool {
    /**
     * Get singleton instance of SleeperPool
     * @returns {SleeperPool}
     */
    static getInstance() {
        if(!this.instance) {
            this.instance = new SleeperPool();
        }

        return this.instance;
    }

    constructor() {
        if (!SleeperPool.instance) {
            this.pool = [];
            this.instance = null;
            this.initEventsHandler();
            SleeperPool.instance = this;
        }

        return SleeperPool.instance;
    }

    /**
     * Register event handler related to Sleeper Pool
     */
    initEventsHandler() {
        // Register adding sleeper
        Eventer.addEventListener(
            SleeperPoolEventName.addSleeper, 
            this.addSleeper.bind(this)
        );

        // Register active sleeper
        Eventer.addEventListener(
            SleeperEventName.activeSomeSleeper,
            this.reOrderSleeper.bind(this)
        )
    }

    /**
     * Add a sleeper object into sleeper pool
     * @param {Sleeper} sleeper 
     */
    addSleeper(sleeper) {
        this.pool.push(sleeper);
    }

    /**
     * Remove a given sleeper
     * @param {*} sleeper 
     */
    removeSleeper(sleeper) {
        const locatedIndex = this.pool.findIndex(sleeperInPool => sleeperInPool === sleeper);
        if (locatedIndex !== -1) {
            this.pool.splice(locatedIndex, 1);
        }
    }

    reOrderSleeper(sleeper) {
        const sleeperIndex = this.pool.findIndex(sleeperInPool => sleeperInPool  === sleeper);
        this.pool.splice(sleeperIndex, 1);
        this.pool = [...this.pool, sleeper];
    }
}

export const SleeperPooler = SleeperPool.getInstance();