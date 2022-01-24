import { ActionControllerEventName } from "../../../global/event-name-config";

const sleeperConfig = [
    // TODO: fullfill sleeper config
    {
        tip: 'Active or deactive a sleeper before experiment start',
        src: '&#xe6de;',
        content: 'Active / Deactivate',
        callbackName: 'todo',
    },
    {
        tip: 'Copy Sleeper',
        src: '&#xe706;',
        content: 'Copy',
        callbackName: ActionControllerEventName.keyboardCopy,
    },
    {
        tip: 'Paste Sleeper',
        src: '&#xe753;',
        content: 'Paste',
        callbackName: ActionControllerEventName.keyboardPaste,
    },
    {
        tip: 'Delete Item',
        src: '&#xe8b6;',
        content: 'Delete',
        callbackName: ActionControllerEventName.keyboardDelete,
    }
];

const edgeConfig = [
    {
        tip: 'Delete Item',
        src: '&#xe8b6;',
        content: 'Delete',
        callbackName: ActionControllerEventName.keyboardDelete,
    }
]

const backgroundConfig = [
    {
        tip: 'Create new sleeper',
        src: '&#xe753;',
        content: 'Create Sleeper',
        callbackName: 'todo',
    },
]

export const RightClickDesignerConfig = {
    'sleeper': sleeperConfig,
    'line': edgeConfig,
    'head': edgeConfig,
    'background': backgroundConfig,
}