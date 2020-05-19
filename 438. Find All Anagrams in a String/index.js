/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (!s || s.length < p.length) return [];

    let start = 0, end = 0, count = 0;

    let hash = {};

    let result = [];

    // Put all the characters of p into the hash or JS Obj, track the count
    for (let ch of p) {
        if (hash[ch] === undefined) {
            hash[ch] = 1;
            count++;
        } else {
            hash[ch]++;
        }
    }
    
    while (end < s.length) {

        if (hash[s[end]] !== undefined) {
            hash[s[end]]--;
            if (hash[s[end]] === 0) {
                count--;
            }
        }
        end++;

        // This happens only if all the characters in p string is found in s string
        while (count === 0) {
            if (hash[s[start]] !== undefined) {
                hash[s[start]]++;
                if (hash[s[start]] > 0) {
                    count++;
                }
            }

            if (end - start === p.length) {
                result.push(start);
            }
            start++;
        }
    }

    return result;
};