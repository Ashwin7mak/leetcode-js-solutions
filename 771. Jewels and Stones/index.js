/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {

    if (J.length == 0 || S.length == 0) return 0;

    S = S.split('');

    J = J.split('');

    let count = 0;

    for (let i = 0; i < S.length; i++) {
        if (J.indexOf(S[i]) >= 0) {
            count++;
        }
    }
    return count;
};