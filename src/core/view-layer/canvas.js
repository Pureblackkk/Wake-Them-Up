import { MouseActionController } from '../action-layer/mouse/mouse-action-controller';
import { MouseAction } from '../action-layer/mouse/mouse-action';
import { KeyboardAction } from '../action-layer/keyboard/keyboard-action';
import { KeyboardActionController } from '../action-layer/keyboard/keyboard-action-controller';
import { GlobalConfig } from '../../global/global-config';
import { Painter } from './painter/painter';
import { UndoRedo } from '../../undo-redo/undo-redo';

class Canvas {
    static getInstance() {
        if(!this.instance) {
            this.instance = new Canvas();
        }

        return this.instance;
    }

    constructor() {
        if (!Canvas.instance) {
            this.init();
            Canvas.instance = this;
        }
        
        return Canvas.instance;
    }

    /**
     * Init canvas instance
     */
    init() {
        this.initContext();
        this.initPainter();
        this.initActionRelated();
        this.initUndoRedoStack();
    }

    /**
     * Init canvas context
     */
    initContext() {
        this.canvas = document.getElementById(GlobalConfig.canvasId);
        this.canvas.width = window.innerWidth - GlobalConfig.pandelWidth;
        this.canvas.height = window.innerHeight - GlobalConfig.headerHeight;
    }

    /**
     * Init canvas painter
     */
    initPainter() {
        this.painter = new Painter(this.canvas);
    }

    /**
     * Init canvas action related
     */
    initActionRelated() {
        this.mouseActionController = new MouseActionController();
        this.mouseAction = new MouseAction(this.canvas);
        this.keyboardActionController = new KeyboardActionController();
        this.keyboardAction = new KeyboardAction(this.canvas, this.mouseAction);
    }

    /**
     * Init UndoRedoStack
     */
    initUndoRedoStack() {
        UndoRedo.getInstance();
    }
}

export { Canvas };