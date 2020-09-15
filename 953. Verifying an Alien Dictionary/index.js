/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
/*
 - Store all the letters in a hash
    { 'h': 1, 'l': 2, 'a': 3}
 - Compare each characters with respect to the hash
*/
var isAlienSorted = function (words, order) {

    let hash = {};

    for (let i = 0; i < order.length; i++) {
        if (hash[order[i]] === undefined) {
            hash[order[i]] = i;
        }
    }
    // console.log("hash", hash);

    for (let i = 1; i < words.length; i++) {
        if (lexicographicalOrder(words[i - 1], words[i]) !== 1) {
            continue;
        }
        return false;
    }

    return true;

    function lexicographicalOrder(s1, s2) {

        let len1 = s1.length, len2 = s2.length;

        let minLength = Math.min(len1, len2);

        for (let i = 0; i < minLength; i++) {
            const order1 = hash[s1.charAt(i)];
            const order2 = hash[s2.charAt(i)];

            if (order1 === order2) continue;

            return order1 < order2 ? -1 : 1;
        }

        if (len1 === len2) return 0;

        return len1 < len2 ? -1 : 1;
    }
};



