/**
 * @param {string} s
 * @return {number}
 */

/*
In a palindrome string, only one character is of odd no and the rest is of even nos.

Use a hash map to track the no of characters in the string.
*/
var longestPalindrome = function (s) {
    let count = 0, hash = new Map();

    for (let char of s) {
        if (!hash.has(char)) {
            hash.set(char, true);
        } else {
            count += 2;
            hash.delete(char);
        }
    }
    return hash.size > 0 ? count + 1 : count;
};

