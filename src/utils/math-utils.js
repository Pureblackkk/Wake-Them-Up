/**
 * Find if it is possible to be active
 * @param {float} weight 
 * @returns {bool}
 */
export function getActivityByWeight(weight) {
    const sudoRandomVariable = Math.random;
    return sudoRandomVariable < weight;
}

/**
 * Find if given point near the line
 * @param {*} lineStartLocation 
 * @param {*} lineEndLocation 
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
export function isPointInLine(lineStartLocation, lineEndLocation, x, y) {
    if(
        lineEndLocation.x > lineStartLocation.x 
        && (
            x > lineEndLocation.x 
            || x < lineStartLocation.x
        )
    ) {
        return false;
    }

    if(
        lineEndLocation.x < lineStartLocation.x 
        && (
            x < lineEndLocation.x 
            || x > lineStartLocation.x
        )
    ) {
        return false;
    }


    // Calculate the line 
    const slope = (lineEndLocation.y - lineStartLocation.y) / 
    (lineEndLocation.x - lineStartLocation.x);

    // Find the arrow region
    const angle = Math.atan(slope);
    const xLength = 10 * 0.5 * 3**0.5 * Math.abs(Math.cos(angle));
    if (
        lineEndLocation.x > lineStartLocation.x 
        && x > lineEndLocation.x - xLength
    ) {
        return false;
    }

    if (
        lineEndLocation.x < lineStartLocation.x
        && x < lineEndLocation.x + xLength
    ) {
        return false;
    }


    const intercept = lineStartLocation.y - slope * lineStartLocation.x;

    // Find the distance between line and point
    const distance = Math.abs(intercept + slope * x - y) / Math.sqrt(1 + slope**2);

    return distance <= 5;
}