import { 
    ActionControllerEventName,
    PainterEventName,
} from '../../../global/event-name-config';
import { Eventer } from '../../../utils/event';
import { UndoDecorator } from '../../../undo-redo/undo-decorator';
import { CopyPasteHouse } from '../../../copy-paste/copy-paste-house';
import { Sleeper } from '../../data-layer/sleeper/sleeper';
import { Edge } from '../../data-layer/edge/edge'; 


class KeyboardActionController {
    constructor() {
        this.initEventHandler();
    }

    /**
     * Regiser event handler
     */
    initEventHandler() {
        // Extract event name
        const {
            keyboardDelete,
            keyboardInput,
            keyboardTextUndo,
            keyboardTextRedo,
            keyboardTextDelete,
            keyboardCopy,
            keyboardPaste,
        } = ActionControllerEventName;

        // Make EventName-Handler Map
        const eventNamesMap = {};
        eventNamesMap[keyboardDelete] = UndoDecorator.deleteItemsDecorator(this.keyboardDeleteController);
        eventNamesMap[keyboardPaste] = UndoDecorator.pasteDecorator(this.keyboardPasteController);
        eventNamesMap[keyboardCopy] = this.keyboardCopyController;
        eventNamesMap[keyboardInput] = this.keyboardInputController;
        eventNamesMap[keyboardTextUndo] = this.keyboardTextUndoController;
        eventNamesMap[keyboardTextRedo] = this.keyboardTextRedoController;
        eventNamesMap[keyboardTextDelete] = this.keyboardTextDeleteController;

        // Init event handler
        for (const eventName in eventNamesMap) {
            Eventer.addEventListener(eventName, eventNamesMap[eventName]);
        }
    }

    /**
     * Delete the selected edge or Sleeper
     * @param {Edge | Sleeper} clickObject 
     */
    keyboardDeleteController(clickObject) {
        clickObject.deleteSelf();
        
        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }

    /**
     * Input text to the sleeper
     * @param {*} sleeper 
     * @param {*} inputKey string
     */
    keyboardInputController(sleeper, inputKey) {
        const newContent = `${sleeper.textInformation.content}${inputKey}`;

        // Update text
        sleeper.textInformation.content = newContent;

        // Update temp stack
        sleeper.textTempStack.text = newContent;

        console.log(sleeper.textInformation.content);

        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }

    /**
     * Undo for sleeper in text mode
     * @param {*} sleeper 
     */
    keyboardTextUndoController(sleeper) {
        sleeper.textTempStack.undo();

        console.log(sleeper.textTempStack.text);
        
        // Update
        sleeper.textInformation.content = sleeper.textTempStack.text;

        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }

    /**
     * Redo for sleeper in text mode
     * @param {*} sleeper 
     */
    keyboardTextRedoController(sleeper) {
        sleeper.textTempStack.redo();

        // Update
        sleeper.textInformation.content = sleeper.textTempStack.text;

        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        ); 
    }

    /**
     * Delete for sleeper in text mode
     * @param {*} sleeper 
     */
    keyboardTextDeleteController(sleeper) {
        const stringLength = sleeper.textInformation.content.length;
        const newContent = sleeper.textInformation.content.substring(0, stringLength - 1);

        // Update text
        sleeper.textInformation.content = newContent;

        // Update temp stack
        sleeper.textTempStack.text = newContent;

        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }

    /**
     * Copy a object selected
     * @param {sleeper | Edge} object 
     */
    keyboardCopyController(object) {
        CopyPasteHouse.package = object;
    }
    
    /**
     * Paste the object store in copy-paste house
     */
    keyboardPasteController(copyedObjectList) {        
        for (let item of copyedObjectList) {
            // TODO: Only support for sleeper now
            if (item instanceof Sleeper) {
                // Remove non-related factors within sleeper
                item.prepareForPaste();

                // Register event
                item.initEventHandler();

                // Add Sleeper into sleeper pool
                item.recoverSelf();
            }
        }

        // Trigger the painter event to redraw
        Eventer.dispatchEvent(
            PainterEventName.repaint,
        );
    }
}

export { KeyboardActionController };