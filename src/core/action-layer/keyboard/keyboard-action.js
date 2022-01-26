import { Eventer } from '../../../utils/event';
import { Sleeper } from '../../data-layer/sleeper/sleeper';
import { 
    ActionControllerEventName,
    UndoRedoEventName,
} from '../../../global/event-name-config';
import { ExcludeKeyEventId } from '../../../global/global-config';

class KeyboardAction {
    constructor(canvas, mouseAction) {
        this.canvas = canvas;
        this.mouseAction = mouseAction;
        this.canvasContext = this.canvas.getContext('2d');
        this.initAction();
    }

    /**
     * Init all the mouse action listeners
     */
    initAction() {
        const actionsMap = {
            'keydown': this.keyDown.bind(this),
        };

        for (let action in actionsMap) {
            window.addEventListener(action, event => {
                // Exclude event from panel
                if (event.target.id in ExcludeKeyEventId) {
                    return;
                }

                actionsMap[action](event);
            });
        }
    }

    keyDown(event) {
        const code = event.keyCode;

        // Check if mousedown element is sleeper and in text mode
        const isTextModeOn = this.mouseAction.mouseDownElement instanceof Sleeper 
        && this.mouseAction.mouseDownElement.isTextMode;
        
        switch(code) {
            case 8:
                // Press Delete
                isTextModeOn ? this._handlerTextDelete() : this._handlerDelete();
                break;
            case 90:
                // Press ctrl + z
                if ((event.ctrlKey || event.metaKey) && !event.shiftKey) {
                    isTextModeOn ? 
                    Eventer.dispatchEvent(
                        ActionControllerEventName.keyboardTextUndo,
                        this.mouseAction.mouseDownElement,
                    )
                    : Eventer.dispatchEvent(UndoRedoEventName.undo);
                }

                // Press ctrl + shfit + z
                if ((event.ctrlKey || event.metaKey) && event.shiftKey) {
                    isTextModeOn ? 
                    Eventer.dispatchEvent(
                        ActionControllerEventName.keyboardTextRedo,
                        this.mouseAction.mouseDownElement,
                    )
                    : Eventer.dispatchEvent(UndoRedoEventName.redo);
                }
                break;
            case 67:
                // Press ctrl + c
                if((event.ctrlKey || event.metaKey) && !event.shiftKey) {
                    isTextModeOn ?
                    Eventer.dispatchEvent('null')
                    : Eventer.dispatchEvent(
                        ActionControllerEventName.keyboardCopy,
                        this.mouseAction.mouseDownElement,
                    );
                }
                break;
            case 86:
                // Press ctrl + v
                if((event.ctrlKey || event.metaKey) && !event.shiftKey) {
                    isTextModeOn ?
                    Eventer.dispatchEvent('null')
                    : Eventer.dispatchEvent(
                        ActionControllerEventName.keyboardPaste,
                        this.mouseAction.mouseDownElement,
                    );
                }
                break;
            default:
                if (
                    code >= 48 && code <= 57 ||
                    code >= 65 && code <= 90 ||
                    code >= 97 && code <= 122
                ) {
                    isTextModeOn && this._handleNormal(event.key.toString());
                }   
                break;
        }
    }

    /**
     * Handle text input for sleeper
     * @param {*} key 
     */
    _handleNormal(key) {  
        Eventer.dispatchEvent(
            ActionControllerEventName.keyboardInput,
            this.mouseAction.mouseDownElement,
            key
        );
    }

    /**
     * Handler for object delete
     */
    _handlerDelete() {
        // If click element exists and is active, then delete
        if (
            this.mouseAction.mouseDownElement
            && this.mouseAction.mouseDownElement.isActive
        ) {
            Eventer.dispatchEvent(
                ActionControllerEventName.keyboardDelete,
                this.mouseAction.mouseDownElement
            );
        }
    }

    /**
     * Handler for text delete
     */
    _handlerTextDelete() {
        Eventer.dispatchEvent(
            ActionControllerEventName.keyboardTextDelete,
            this.mouseAction.mouseDownElement,
        );
    }
}

export { KeyboardAction };