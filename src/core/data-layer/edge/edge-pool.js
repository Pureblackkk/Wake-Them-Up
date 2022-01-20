import { EdgePoolEventName } from '../../../global/event-name-config';
import { Eventer } from '../../../utils/event';

class EdgePool {
    /**
     * Get singleton instance of SleeperPool
     * @returns {EdgePool}
     */
    static getInstance() {
        if(!this.instance) {
            this.instance = new EdgePool();
        }

        return this.instance;
    }

    constructor() {
        if (!EdgePool.instance) {
            this.pool = [];
            this.instance = null;
            this.initEventsHandler();
            EdgePool.instance = this;
        }

        return EdgePool.instance;
    }

    /**
     * Register event handler related to Sleeper Pool
     */
    initEventsHandler() {
        // Register adding sleeper
        Eventer.addEventListener(
            EdgePoolEventName.addEdge, 
            this.addEdge.bind(this)
        );
    }

    /**
     * Add a sleeper object into edge pool
     * @param {Edge} sleeper 
     */
    addEdge(edge) {
        this.pool.push(edge);
    }

    /**
     * Remove an edge from edge pool
     * @param {*} edge 
     */
    removeEdge(edge) {
        const locatedIndex = this.pool.findIndex(edgeInPool => edgeInPool === edge);
        if (locatedIndex !== -1) {
            this.pool.splice(locatedIndex, 1);
        }
    }
}

export const EdgePooler = EdgePool.getInstance();