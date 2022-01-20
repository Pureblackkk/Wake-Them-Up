import { 
    PainterEventName,
    SleeperEventName,
} from '../../../global/event-name-config';
import { Eventer } from "../../../utils/event";

class TextSleeperTempStack {
    constructor(originText) {
        this.pointer = 0;
        this.stackList = [];
        this.stackList.push(originText);
    }

    get text() {
        return this.stackList[this.pointer];
    }

    set text(val) {
        this.pointer += 1;
        this.stackList.push(val);
    }

    undo() {
        if (this.pointer > 0) {
            this.pointer -= 1;
        }
    }

    redo() {
        if (this.pointer < this.stackList.length - 1) {
            this.pointer += 1;
        }
    }
}


class TextSleeper {
    constructor() {
        this.isTextMode = false;

        // Set for default text config
        this.textInformation = {
            size: 15,
            style: 'Times New Roman',
            content: 'a',
            color: 'black',
        }

        this.textareaInformation = {
            width: null,
            height: null,
        };

        this.textareaBoundingBoxPath = null;

        // Reigister for text temp stack
        this.textTempStack = null;

        this.textInitEventHandler();
    }

    textInitEventHandler() {
        // Extract event name
        const {
            activeSomeSleeperTextMode,
        } = SleeperEventName;

        const eventNamesMap = {};
        eventNamesMap[activeSomeSleeperTextMode] = this.startTextMode.bind(this);

        // Register active some node handler
        for (const event in eventNamesMap) {
            Eventer.addEventListener(event, eventNamesMap[event]);
        }
    }

    /**
     * start the text mode
     */
    startTextMode(sleeper) {
        if (sleeper == this && this.isTextMode === false) {
            this.isTextMode = true;
            this.textTempStack = new TextSleeperTempStack(this.textInformation.content);
        } else if (this.isTextMode && sleeper !== this) {
            this.isTextMode = false;
            this.textTempStack = null;
        }
    }

    /**
     * end the text mode
     */
    endTextMode() {
        if (this.isTextMode) {
            this.isTextMode = false;
            this.textTempStack = null;
        }
    }

    /**
     * Draw the text 
     */
    drawText() {
        // Get sleeper center
        const textPosition = {
            x: this.canvasInformation.x,
            y: this.canvasInformation.y,
        };

        // Get max width
        const textMaxWidth = this.canvasInformation.radius * Math.sqrt(3);
        
        // Draw the text
        Eventer.dispatchEvent(
            PainterEventName.textWrite,
            {
                position: textPosition,
                maxWidth: textMaxWidth,
                information: this.textInformation,
            },
            this.setTextOrTextareaInformation.bind(this),
        );
    }

    /**
     * Draw the textera
     */
    drawTextArea() {
        // Only draw it when textmode is on
        if (!this.isTextMode) {
            return;
        }

        // Get Sleeper center
        const sleeperPosition = {
            x: this.canvasInformation.x,
            y: this.canvasInformation.y,
        };

        // Draw the text
        Eventer.dispatchEvent(
            PainterEventName.figureDraw,
            {
                sleeperPosition,
                textareaInformation: this.textareaInformation,
                drawType: 'textarea',
            },
            this._setTextareaPath.bind(this),
        );
    }

    /**
     * Set text / textarea information
     * @param {*} propertyObject 
     * @param {*} type 
     */
    setTextOrTextareaInformation(propertyObject, type) {
        if (type !== 'text' && type !== 'textarea') {
            Error('Wrong type when setting text / textare information');
        }

        const forSetObject = (type == 'text') ? this.textInformation : this.textareaInformation;

        // Iterate the aleration and update
        for (const property in propertyObject) {
            const newValue = propertyObject[property];

            if (newValue && forSetObject[property] !== newValue) {
                forSetObject[property] = newValue;
            }
        }

        // Draw text area when 
        if (type == 'textarea') {
            this.drawTextArea();
        }
    }

    /**
     * Set bounding box path
     * @param {*} boundingBoxPath 
     */
    _setTextareaPath(boundingBoxPath) {
        this.textareaBoundingBoxPath = boundingBoxPath;
    }
}

export { TextSleeper };