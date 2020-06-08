/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    // Convert string to array based upon (.)
    function convertToArray(str) {
        return str.split('.').map((e) => Number(e));
    }

    let part1 = convertToArray(version1);
    let part2 = convertToArray(version2);

    // Iterate through the arrays
    for (let i = 0; i < Math.max(version1.length, version2.length); i++) {
        // Check for 0
        let val1 = part1[i] || 0;
        let val2 = part2[i] || 0;

        if (val1 > val2) {
            return 1;
        } else if (val1 < val2) {
            return -1;
        }
    }
    return 0;
};