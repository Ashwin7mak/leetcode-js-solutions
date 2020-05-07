/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // Check if the given string input is valid or not
    if(s.length === 0 || s === "") return "";

    let result = "";

    // Iterate through the string
    // Perform expandString call on odd and even str lengths
    // Return the longest palindrome length
    for(let i = 0; i < s.length; i++) {
        let current1 =  expandString(s, i, i);
        let current2 = expandString(s, i, i + 1);

        let longestStr = current1.length > current2.length ? current1 : current2;

        if(longestStr.length > result.length) {
            result = longestStr;
        }
    }

    return result;
};

// Expand the two pointers from the middle of the string to the left and right directions
// Chop the str that meets the condition which is a palindrome
function expandString(str, start, end) {

    while (start >= 0 && end < str.length && str[start] === str[end]) {
        start--;
        end++;
    }
    return str.slice(start + 1, end);
}
