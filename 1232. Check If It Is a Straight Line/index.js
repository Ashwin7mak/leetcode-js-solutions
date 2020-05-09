/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    // Check if slope between three points are equal, if so they are in the straight line
    // (y - y1) / (x - x1) = (y1 - y0) / (x1 - x0)

    let x0 = coordinates[0][0], x1 = coordinates[1][0],
        y0 = coordinates[0][1], y1 = coordinates[1][1];

    let dx = x1 - x0, dy = y1 - y0;

    for (let point of coordinates) {
        let x = point[0], y = point[1];
        if ((dx * (y - y1)) != (dy * (x - x1))) {
            return false;
        }
    }

    return true;
};