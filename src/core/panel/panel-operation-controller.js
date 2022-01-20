import { 
    
} from '../../../global/event-name-config';

class MouseActionController {
    constructor() {
        this.initEventHandler();
    }

    /**
     * Regiser event handler
     */
    initEventHandler() {
        // Extract event name
        const {
            mouseDownSleeper,
            mouseDownLine,
            mouseDownBackground,
            mouseMoveSleeper,
            mouseMoveHead,
            mouseUpSleeper,
            mouseUpAnchor,
            mouseUpHead,
            mouseDoubleClick,
        } = ActionControllerEventName;

        // Make EventName-Handler Map
        const eventNamesMap = {};
        eventNamesMap[mouseDownSleeper] = this.mouseDownSleeperController;
        eventNamesMap[mouseDownLine] = this.mouseDownLineController;
        eventNamesMap[mouseDownBackground] = this.mouseDownBackgroundController;
        eventNamesMap[mouseMoveSleeper] = this.mouseMoveSleeperController;
        eventNamesMap[mouseMoveHead] = this.mouseMoveHeadController;
        eventNamesMap[mouseUpSleeper] = UndoDecorator.mouseUpSleeperDecorator(this.mouseUpSleeperController.bind(this));
        eventNamesMap[mouseUpAnchor] = UndoDecorator.mouseUpAnchorDecorator(this.mouseUpAnchorController.bind(this));
        eventNamesMap[mouseUpHead] = UndoDecorator.mouseUpHeadDecorator(this.mouseUpHeadController.bind(this));
        eventNamesMap[mouseDoubleClick] = this.mouseDoubleClickController;

        // Init event handler
        for (const eventName in eventNamesMap) {
            Eventer.addEventListener(eventName, eventNamesMap[eventName]);
        }
    }


}
