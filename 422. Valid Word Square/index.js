/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function (words) {

    const length = Math.max(...words.map(e => e.length));

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < words.length; j++) {
            if ((words[i] && !words[j]) || (words[j] && !words[i])) return false;
            if (words[i][j] !== words[j][i]) {
                return false;
            }
        }
    }
    return true;
};