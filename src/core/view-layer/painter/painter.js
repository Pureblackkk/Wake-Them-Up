import { FigurePainter } from './figure/painter';
import { TextPainter } from './text/painter';
import { Eventer } from '../../../utils/event';
import { SleeperPooler } from '../../data-layer/sleeper/sleeper-pool';
import { EdgePooler } from '../../data-layer/edge/edge-pool';
import { PainterEventName } from '../../../global/event-name-config';

class Painter {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvasContext = this.canvas.getContext('2d');

        // Init different painter
        this.initPainter();

        // Init eventer handler
        this.initEventHandler();
    }

    /**
     * Register event handler related to Painter
     */
    initEventHandler() {
        Eventer.addEventListener(PainterEventName.repaint, this.repaint.bind(this));
    }

    initPainter() {
        this.figure = new FigurePainter(this.canvas, this.canvasContext);
        this.text = new TextPainter(this.canvas, this.canvasContext);
    }

    /**
     * Repaint all canvas object
     */
    repaint() {
        // Clean the canvas
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Iterate to draw the sleeper
        for (const sleeper of SleeperPooler.pool) {
            // TODO: Make it as a function of sleeper
            Eventer.dispatchEvent(
                PainterEventName.figureDraw,
                sleeper.canvasInformation,
                sleeper.setCanvasPath.bind(sleeper)
            );

            // Rewrite the text
            sleeper.drawText();
        }

        // Iterate to draw the edge
        for (const edge of EdgePooler.pool) {
            Eventer.dispatchEvent(
                PainterEventName.figureDraw,
                {
                    drawType: 'arrow',
                    startLocation: edge.startLocation,
                    endLocation: edge.endLocation,
                    isActive: edge.isActive,
                },
                edge.setCanvasPath.bind(edge)
            );
        }
    }
}

export { Painter };