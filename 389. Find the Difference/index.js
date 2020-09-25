/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
/* 
    - Array Masking Approach
*/
var findTheDifference = function (s, t) {

    let hash1 = new Array(26).fill(0);
    let hash2 = new Array(26).fill(0);

    for (let ch of s) {
        hash1[ch.charCodeAt() - "a".charCodeAt()]++;
    }

    for (let ch of t) {
        hash2[ch.charCodeAt() - "a".charCodeAt()]++;
    }

    for (let i = 0; i < 26; ++i) {
        if (hash1[i] !== hash2[i]) {
            return String.fromCharCode(i + 97);
        }
    }
};