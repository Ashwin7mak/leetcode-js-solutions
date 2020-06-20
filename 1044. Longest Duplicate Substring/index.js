/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function (S) {
    if (!S || S.length === 0) return "";

    let n = S.length;

    let res = new Array(n);

    for (let i = 0; i < n; i++) {
        res[i] = S.substring(i, n);
    }

    res.sort();

    let lrs = "";

    for (let i = 0; i < n - 1; i++) {
        let str = lcp(res[i], res[i + 1]);
        if (str.length > lrs.length) lrs = str;
    }
    return lrs;
};

function lcp(s1, s2) {
    let prefix = s1;

    let minLength = Math.min(s1.length, s2.length);

    for (let i = 0; i < minLength; i++) {
        if (s1.charAt(i) != s2.charAt(i)) {
            return s1.substring(0, i);
        }
    }
    return s1.substring(0, minLength);
}