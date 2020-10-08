/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {

    if (!sentence || !searchWord || sentence.length < 0 || searchWord.length < 0) return -1;

    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {

        let str = words[i];

        if (str.indexOf(searchWord) === 0) {
            return i + 1;
        }
    }
    return -1;
};