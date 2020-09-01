/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
    //if(s.length === 0 ||k === 0) { return 0; }

    //if(s.length < k) return s.length === 1 ? 1 : s.length;
    let left = 0, right = 0, hash = {};
    let counter = 0;
    let lengthOfSubstring = 0;

    // Iterate through the string using right pointer
    // Check if the char is present in the map or JS object
        // If so increment the frequency and if not add the char in the map and increment the counter to keep track of the characters
    while (right < s.length) {
        if (!hash[s[right]]) {
            hash[s[right]] = 1;
            counter++;
        } else {
            hash[s[right]]++;
        }

        while (counter === k + 1) {
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