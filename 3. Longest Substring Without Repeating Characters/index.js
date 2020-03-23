/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // Two pointers approach i.e. Sliding Window
    let i = 0, j = 0;
    // Use an object to store the values
    let obj = {};
    // Count variable to count the no of characters
    let max = 0;
    // Iterate through until j is less than string's length
    while (j < s.length) {
        // If the obj doesn't contains the character
        //  Add it inrespect to j pointer
        //  Increment j counter
        //  Update count to max of (max, j - i)
        if (!obj[s[j]]) {
            obj[s[j]] = true;
            j++;
            max = Math.max(j - i, max);
        } else {
            //  Else remove the key if duplicate is found
            //  Increment i counter
            obj[s[i]] = null;
            i++;
        }
    }
    //  Return the result
    return max;
};