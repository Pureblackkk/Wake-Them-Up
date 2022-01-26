import { 
    ActionControllerEventName,
    PanelOpearationControllerEventName,
} from "../../../global/event-name-config";

const sleeperConfig = [
    // TODO: fullfill sleeper config
    {
        tip: 'Active or deactive a sleeper before experiment start',
        src: '&#xe6de;',
        content: 'Active / Deactivate',
        callbackName: PanelOpearationControllerEventName.panelActive,
        params: 'null',
    },
    {
        tip: 'Copy Sleeper',
        src: '&#xe706;',
        content: 'Copy',
        callbackName: ActionControllerEventName.keyboardCopy,
        params: 'null',
    },
    {
        tip: 'Paste Sleeper',
        src: '&#xe753;',
        content: 'Paste',
        callbackName: ActionControllerEventName.keyboardPaste,
        params: 'null',
    },
    {
        tip: 'Delete Item',
        src: '&#xe8b6;',
        content: 'Delete',
        callbackName: ActionControllerEventName.keyboardDelete,
        params: 'null',
    }
];

const edgeConfig = [
    {
        tip: 'Delete Item',
        src: '&#xe8b6;',
        content: 'Delete',
        callbackName: ActionControllerEventName.keyboardDelete,
        params: 'null',
    }
]

const backgroundConfig = [
    {
        tip: 'Create new sleeper',
        src: '&#xe601;',
        content: 'Create Sleeper',
        callbackName: PanelOpearationControllerEventName.panelCreateNode,
        params: 'position',
    },
]

export const RightClickDesignerConfig = {
    'sleeper': sleeperConfig,
    'line': edgeConfig,
    'head': edgeConfig,
    'background': backgroundConfig,
}