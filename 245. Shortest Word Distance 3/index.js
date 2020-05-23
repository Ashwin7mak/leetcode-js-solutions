/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function (words, word1, word2) {
    let l1 = -1, l2 = -1;

    let minDistance = words.length;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            // Check if the word1 and word2 are equal, if so assign l1 to l2
            if (word1 === word2) {
                l2 = l1;
            }
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