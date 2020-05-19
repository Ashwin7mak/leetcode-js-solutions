/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (!s2 || s1.length > s2.length) {
        return false;
    }

    let start = 0, end = 0, count = 0;

    let hash = {};

    for (let ch of s1) {
        if (!hash[ch]) {
            hash[ch] = 1;
            count++;
        } else {
            hash[ch]++;
        }
    }

    while (end < s2.length) {
        if (hash[s2[end]] !== undefined) {
            hash[s2[end]]--;
            if (hash[s2[end]] === 0) {
                count--;
            }
        }
        end++;

        while (count === 0) {
            if (hash[s2[start]] !== undefined) {
                hash[s2[start]]++;
                if (hash[s2[start]] > 0) {
                    count++;
                }
            }

            if (end - start === s1.length) {
                return true;
            }
            start++;
        }
    }
    return false;
};