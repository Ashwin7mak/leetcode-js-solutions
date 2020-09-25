/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
    Array Masking Approach
    - Create two arrays of size 26 and fill with 0s
    - As we iterate through the string, we fill the corresponding indices (ASCII values of each character) with incremented value. Eg: 'a' - 0, 'b' - 1, ... etc
    - Finally, compare the characters in two arrays, if they differ return false else true
    TC O(n)
    SC O(1)
*/
var isAnagram = function (s, t) {
    
    if (s.length !== t.length) return false;
    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);

    for (let ch of s) {
        arr1[ch.charCodeAt() - 'a'.charCodeAt()]++;
    }

    for (let ch of t) {
        arr2[ch.charCodeAt() - 'a'.charCodeAt()]++;
    }

    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};

/* 
    Sort Approach 
    TC O(nlogn)
    SC O(1)
*/
var isAnagram = function (s, t) {
    // Check the sorted strings are equal
    return s.split("").sort().join("") === t.split("").sort().join("");
};