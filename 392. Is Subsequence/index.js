/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
    Two Pointers Approach

    - Start two pointers one against s.length and another against t.length
        - Whenever the characters in two strings are equal, increment left pointer
        - Keep incrementing right pointer
    
    - At the end, check if left pointer is equal to the length of s string, if so return true

    TC - O(n) - where n is the length of the target string 
    SC - O(1)
*/

var isSubsequence = function(s, t) {
    let i = 0, j = 0;

    while(i < s.length && j < t.length) {
        if(s.charAt(i) === t.charAt(j))
            i += 1;
        j += 1;
    }
    return i === s.length;
};