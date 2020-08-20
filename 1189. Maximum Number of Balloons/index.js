/**
 * @param {string} text
 * @return {number}
 */

 /*
    Push all the characters of text in a hash

    Count all the instances of char b, a, l, o, n in it

    Return the min val of those instances

 */
var maxNumberOfBalloons = function (text) {

    let hash = {};

    for (let char of text) {
        if (hash[char] === undefined) {
            hash[char] = 1;
        } else {
            hash[char]++;
        }
    }

    let charB = hash["b"] ? hash["b"] : 0;
    let charA = hash["a"] ? hash["a"] : 0;
    let charL = hash["l"] ? Math.floor(hash["l"] / 2) : 0;
    let charO = hash["o"] ? Math.floor(hash["o"] / 2) : 0;
    let charN = hash["n"] ? hash["n"] : 0;

    return Math.max(0, Math.min(charB, charA, charL, charO, charN));
};
