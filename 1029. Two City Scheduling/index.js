/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    // Sort the costs based upon the largest differences to smallest differences
    costs.sort((a, b) => {
        return Math.abs(b[1] - b[0]) - Math.abs(a[1] - a[0]);
    });

    let minSum = 0;

    let n = costs.length / 2;

    let counterA = 0, counterB = 0;

    for (let i = 0; i < costs.length; i++) {
        let costOfCityA = costs[i][0];
        let costOfCityB = costs[i][1];

        // If cost of city A is cheaper than city B
        if (costOfCityA <= costOfCityB) {
            if (counterA < n) {
                minSum += costOfCityA;
                counterA++;
            } else {
                minSum += costOfCityB;
            }
        } else {
            if (counterB < n) {
                minSum += costOfCityB;
                counterB++;
            } else {
                minSum += costOfCityA;
            }
        }
    }

    return minSum;
};