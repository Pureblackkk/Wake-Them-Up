import { undoController } from './undo-controller';
import { UndoRedoEventName } from '../global/event-name-config';
import { Eventer } from '../utils/event';
import { redoController } from './redo-controller';

class UndoRedo {
    static getInstance() {
        if(!this.instance) {
            this.instance = new UndoRedo();
        }
        
        return this.instance;
    }

    constructor() {
        if(!UndoRedo.instance) {
            // Define the stack and the pointer
            this.stack = [];
            this.pointer = -1;

            this.instance = null;
            this.initEventHandler();
            UndoRedo.instance = this;
        }
    }

    /**
     * Add event name
     */
    initEventHandler() {
        const {
            undo,
            addMutation,
            redo,
        } = UndoRedoEventName;
        Eventer.addEventListener(addMutation, this.addMutationToStack.bind(this));
        Eventer.addEventListener(undo, this.undo.bind(this));
        Eventer.addEventListener(redo, this.redo.bind(this));
    }

    /**
     * Add mutation to undo stack
     * @param {*} mutation 
     */
    addMutationToStack(mutation) {
        this.pointer += 1;

        // Break the stack order, ignore the operation after pointer
        if (this.pointer !== this.stack.length && this.pointer >= 0) {
            this.stack.splice(this.pointer);
            console.log(this.stack.length);
        }

        this.stack.push(mutation);
    }

    /**
     * Undo the operation
     */
    undo() {
        if (this.stack.length !== 0 || this.pointer !== -1) {
            const undoTask = this.stack[this.pointer];
            undoController(undoTask);

            this.pointer -= 1;
        }
    }

    /**
     * Redo the operation
     */
    redo() {
        if (this.stack.length !== 0 && this.pointer !== this.stack.length - 1) {
            this.pointer += 1;

            const redoTask = this.stack[this.pointer];

            console.log(redoTask);

            redoController(redoTask);
        }
    }
}

export { UndoRedo };