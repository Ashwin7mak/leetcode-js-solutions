/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    // Check if the string is valid or not
    if (S.length == 0 || S == null) return null;

    let result = [];
    // Use a map to store the last occurences of each character in the string
    let map = {};

    for (let i = 0; i < S.length; i++) {
        map[S[i]] = i;
    }

    let start = 0;
    let end = 0;

    for (let i = 0; i < S.length; i++) {
        let currentCharLastIndex = map[S[i]];
        // Calculate the end for each character
        end = Math.max(end, currentCharLastIndex);
        // If end is same as the current index, then there is a partition
        if (end == i) {
            // Add the length in to the result array '+ 1' since we are calculating the length
            result.push(end - start + 1);
            // Reassign start value for the next partition
            start = end + 1;
        }
    }
    return result;
};