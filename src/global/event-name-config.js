export const SleeperEventName = {
    activeSomeSleeper: 'activeSomeSleeper',
    activeSomeSleeperTextMode: 'activeSomeSleeperTextMode',
};

export const EdgeEventName = {
    activeSomeEdge: 'activeSomeEdge',
}

export const SleeperPoolEventName = {
    addSleeper: 'addSleeper',
};

export const EdgePoolEventName = {
    addEdge: 'addEdge',
};

export const PainterEventName = {
    figureDraw: 'figureDraw',
    textWrite: 'textWrite',
    repaint: 'repaint',
};

export const ActionControllerEventName = {
    mouseDownSleeper: 'mouseDownSleeper',
    mouseDownLine: 'mouseDownLine',
    mouseDownBackground: 'mouseDownBackground',
    mouseMoveSleeper: 'mouseMove',
    mouseMoveAnchor: 'mouseMoveAnchor',
    mouseMoveHead: 'mouseMoveHead',
    mouseUpSleeper: 'mouseUpSleeper',
    mouseUpAnchor: 'mouseUpAnchor',
    mouseUpHead: 'mouseUpHead',
    mouseDoubleClick: 'mouseDoubleClick',
    mouseRightClick: 'mouseRightClick',
    keyboardDelete: 'keyboardDelete',
    keyboardCopy: 'keyboardCopy',
    keyboardPaste: 'keyboardPaste',
    keyboardTextDelete: 'keyboardTextDelete',
    keyboardInput: 'keyboardInput',
    keyboardTextRedo: 'keyboardTextRedo',
    keyboardTextUndo: 'keyboardTextUndo',
};

export const PanelOpearationControllerEventName = {
    closeColorPicker: 'closeColorPicker',
    createNode: 'createNode',
    panelCreateNode: 'panelCreateNode',
    changeNodeStyle: 'changeNodeStyle',
    changeAllProbability: 'changeAllProbability',
    startWakingProcess: 'startWakingProcess',
    pauseWakingProcess: 'pauseWakingProcess',
    endWakingProcess: 'endWakingProcess',
    resetSleepers: 'resetSleepers',
    panelActive: 'panelActive',
};

export const UndoRedoEventName = {
    addMutation: 'addMutation',
    undo: 'undo',
    redo: 'redo',
};

export const SummaryEventName = {
    drawShare: 'drawShare',
    getShareColor: 'getShareColor',
    updateShareColor: 'updateShareColor',
    updateDetail: 'updateDetail',
}