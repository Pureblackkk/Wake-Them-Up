import { Eventer } from '../../../../utils/event';
import { PainterEventName } from '../../../../global/event-name-config';

class TextPainter {
    constructor(canvas, canvasContext) {
        this.canvas = canvas;
        this.canvasContext = canvasContext;
        this.initEventHandler();
    }

    /**
     * Register event handler related to Painter
     */
    initEventHandler() {
        Eventer.addEventListener(PainterEventName.textWrite, this.write.bind(this));
    }

    /**
     * Write the text follow the params given
     * @param {*} params 
     * @param {*} setPathCallback 
     */
    write(params, setTextareaCallback) {
        // Parse configurations
        const {
            position,
            maxWidth,
            information,
        } = params;

        // Get size
        let size = information.size || '12';
        size += 'px'

        this.canvasContext.font = `${size} ${information.style}`;
        
        // Prepare writing text params
        this.canvasContext.fillStyle = information.color;
        const fillInfo = this._getFillList(position, information.content, maxWidth);
        const {
            fillList,
            textareaInformation,
        } = fillInfo;

        // Set callback to draw the textarea first
        setTextareaCallback(textareaInformation, 'textarea');
        
        // Write text
        for (let text of fillList) {
            this.canvasContext.fillText(text[0], text[1], text[2]);
        }
    }

    /**
     * Get fill list for single / multiple lines
     * @param {*} position sleeper center
     * @param {*} content text content
     * @param {*} maxWidth predefined maximal width
     * @returns filling list and textarea information
     */
    _getFillList(position, content, maxWidth) {     
        let metrics = this.canvasContext.measureText(content);
        let fillList = []

        if (metrics.width < maxWidth) {
            // Get text location information
            let x = position.x - metrics.width / 2;
            let y = position.y + (metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent) / 2;

            // Get textarea location information
            let textareaInformation =  {
                width: maxWidth,
                height: (metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent),
            };

            fillList.push([content, x, y]);
            return {
                fillList,
                textareaInformation,
            };
        }

        // TODO: For multiple lines
        return fillList;
    }
}

export { TextPainter };