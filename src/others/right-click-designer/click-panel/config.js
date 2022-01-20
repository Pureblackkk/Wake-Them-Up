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
];

const edgeConfig = [
    // TODO: add egde config
    {
        tip: 'Delete'
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
    'edge': edgeConfig,
    'background': backgroundConfig,
}