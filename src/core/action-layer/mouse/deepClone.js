import { mouseActionMode } from '../config';

// Clone the related information according to the type of class
export function DeepCloneInfo(mode, target) {
    switch(mode) {
        case(mouseActionMode.downOnSleeper):
            return {
                x: target.canvasInformation.x,
                y: target.canvasInformation.y,
            };
        case (mouseActionMode.downOnHead):
            return {
                x: target.endLocation.x,
                y: target.endLocation.y,
            }
        default:
            break;
    }
}