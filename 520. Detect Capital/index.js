/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (word.length == 1) return true;

    let count = 0;
    let firstChar = false;

    for (let i = 0; i < word.length; i++) {
        let charCode = word.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            if (i == 0) {
                firstChar = true;
            }
            count++;
        }
    }

    if (count == 0 || (count == word.length) || (firstChar && count == 1)) {
        return true;
    }

    return false;

};