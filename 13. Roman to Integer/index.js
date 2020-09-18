/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    if (!s || s === null) return;

    const hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let res = 0;

    for (let i = 0; i < s.length; i++) {
        let currChar = hash[s[i]];
        let nextChar = hash[s[i + 1]];

        if (nextChar) {
            if (currChar >= nextChar) {
                res += currChar;
            } else {
                res += (nextChar - currChar);
                i++;
            }
        } else {
            res += currChar;
        }

    }
    return res;
};