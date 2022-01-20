import { Eventer } from '../../../../utils/event';
import { PainterEventName } from '../../../../global/event-name-config';
import { 
    DeafultAnchorSetting,
    DeafultArrowSetting,
    DeafaultBoundingBoxSetting,
    ActiveArrowSetting,
} from './config';

class FigurePainter {
    constructor(canvas, canvasContext) {
        this.canvas = canvas;
        this.canvasContext = canvasContext;
        this.drawMap = {
            'circle': this.drawCircle.bind(this),
            'arrow': this.drawArrow.bind(this),
            'textarea': this.drawTextarea.bind(this),
        };
        this.initEventHandler();
    }

    /**
     * Register event handler related to Painter
     */
    initEventHandler() {
        Eventer.addEventListener(PainterEventName.figureDraw, this.draw.bind(this));
    }

    /**
     * Draw the correspond images given related information
     * @param {*} params 
     * @returns {*} canvas path
     */
    draw(params, setPathCallback) {
        const { drawType } = params;

        // Raise the error if the shape not included 
        if (!(drawType in this.drawMap)) {
            return Error('Figure Draw Error: Given type not found!');
        }
        
        // Draw the correspond shape and set the path to the sleeper
        setPathCallback(this.drawMap[drawType](params));
    }

    /**
     * Draw cirle on canvas
     * @param {*} params 
     * @returns 
     */
    drawCircle(params) {
        // Extract the drawing parameters
        const {
            x,
            y,
            radius,
            startAngle,
            endAngle,
            isFilled,
            isBorder,
            borderWith,
            borderColor,
            isAnchor,
        } = params;

        // Draw the circle
        const circle = new Path2D();
        circle.arc(
            x,
            y,
            radius,
            startAngle,
            endAngle,
        );
        
        // Fill the circle
        const fillColor = params['fillColor'];
        if (isFilled && fillColor) {
            this.canvasContext.fillStyle = fillColor;
            this.canvasContext.fill(circle);
        }

        // Draw the border
        if (
            !!(
                isBorder
                && borderWith
                && borderColor
            )
        ) {
            this.canvasContext.lineWidth = borderWith;
            this.canvasContext.strokeStyle = borderColor;
            this.canvasContext.stroke(circle);
        }   

        // Draw the anchor
        const anchorsPathList = [];
        if (isAnchor) {
            // Set stroke style
            this.canvasContext.lineWidth = DeafultAnchorSetting.lineWidth;

            const anchorPositionList = [
                {x: x + radius, y: y},
                {x: x - radius, y: y},
                {x: x, y: y + radius},
                {x: x, y: y - radius},
            ];

            for (const anchorPosition of anchorPositionList) {
                this.canvasContext.strokeStyle = DeafultAnchorSetting.lineColor;
                const {x ,y} = anchorPosition;
                const anchorPath = new Path2D();
                anchorPath.arc(
                    x, 
                    y,
                    DeafultAnchorSetting.anchorRadius,
                    startAngle,
                    endAngle,
                );
                this.canvasContext.stroke(anchorPath);
                this.canvasContext.fillStyle = 'white';
                this.canvasContext.fill(anchorPath);
                anchorsPathList.push({
                    anchorPath,
                    location: {
                        x,
                        y,
                    },
                });
            }
        }
        return [circle, anchorsPathList];
    }

    /**
     * Draw arrow on canvas
     * @param {*} params 
     */
    drawArrow(params) {
        let {
            startLocation,
            endLocation,
            isActive,
        } = params;

        // If only one location provided, then set the other the same
        if(!startLocation) {
            startLocation = endLocation;
        } else if (!endLocation) {
            endLocation = startLocation;
        }

        const angle = Math.atan2(
            endLocation.y - startLocation.y, 
            endLocation.x - startLocation.x
        );

        // Set stroke style
        this.canvasContext.strokeStyle = isActive ? 
            ActiveArrowSetting.lineColor :
            DeafultArrowSetting.lineColor;
        this.canvasContext.lineWidth = isActive ? 
            ActiveArrowSetting.lineWidth :
            DeafultArrowSetting.lineWidth;

        const line = new Path2D();
        const head = new Path2D();

        // Draw the line 
        line.moveTo(startLocation.x, startLocation.y);
        line.lineTo(endLocation.x, endLocation.y);
        this.canvasContext.stroke(line);

        // Draw the head
        head.moveTo(
            endLocation.x - DeafultArrowSetting.headLength * Math.cos(angle - Math.PI / 6),
            endLocation.y - DeafultArrowSetting.headLength * Math.sin(angle - Math.PI / 6)
        );
        head.lineTo(endLocation.x, endLocation.y);
        head.lineTo(
            endLocation.x - DeafultArrowSetting.headLength * Math.cos(angle + Math.PI / 6),
            endLocation.y - DeafultArrowSetting.headLength * Math.sin(angle + Math.PI / 6)
        );
        this.canvasContext.stroke(head);
        
        return {line, head};
    }
    
    /**
     * Draw the textarea
     * @param {*} params 
     */
    drawTextarea(params) {
        const {
            sleeperPosition,
            textareaInformation,
        } = params;

        const boundingBoxPath = new Path2D();

        boundingBoxPath.rect(
            sleeperPosition.x - textareaInformation.width / 2,
            sleeperPosition.y - textareaInformation.height / 2,
            textareaInformation.width,
            textareaInformation.height,
        );

        this.canvasContext.lineWidth = DeafaultBoundingBoxSetting.lineWidth;
        this.canvasContext.strokeStyle = DeafaultBoundingBoxSetting.lineColor;
        this.canvasContext.stroke(boundingBoxPath);
        
        return boundingBoxPath;
    }
}

export { FigurePainter };