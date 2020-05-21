/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
    // Check if the string length is less than 2 if so return string length
    if (s.length < 3) return s.length;

    let left = 0, right = 0, hash = {};

    let counter = 0, lengthOfSubstring = 0;

    while (right < s.length) {
        if (!hash[s[right]]) {
            hash[s[right]] = 1;
            counter++;
        } else {
            hash[s[right]]++;
        }

        while (counter > 2) {
            hash[s[left]]--;
            if (hash[s[left]] === 0) {
                counter--;
            }
            left++;
        }

        right++;
        lengthOfSubstring = Math.max(lengthOfSubstring, right - left);
    }

    return lengthOfSubstring;
};