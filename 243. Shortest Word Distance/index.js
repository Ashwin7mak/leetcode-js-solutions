/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (words, word1, word2) {
    // Assign to variables to find the indices of the words in the array
    let l1 = -1, l2 = -1;
    // Mindistance is initialized to words array length
    let minDistance = words.length;

    // Iterate through the array
    // If words are found, find the respectives indices
    // Calculate mindistance 
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            l1 = i;
        } else if (words[i] === word2) {
            l2 = i;
        }

        if (l1 !== -1 && l2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(l1 - l2));
        }
    }

    return minDistance;
};