/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
/*
    Two Pass Approach
    - Assign new result array of length i.e. S.length
    - There are two passes
        - prev = first index of C in S
        - In left pass, we will be comparing current i and prev, assign result[i] to min of (i - prev)
        - next = last index of C in S
        - In right pass, we will be comparing next and current i, assign result[i] to min of (result[i], (next - i))
    - Return the result array

    TC - O(n)
    SC - O(1)
*/

var shortestToChar = function(S, C) {
    
    let n = S.length;
    
    let result = new Array(n);
    
    let prev = S.indexOf(C);
    // Left Pass
    for(let i = 0; i < n; i++) {
        if(S.charAt(i) === C) {
            prev = i;
            result[i] = 0;
        } else {
            result[i] = Math.abs(i - prev);
        }
    }
    
    next = S.lastIndexOf(C);
    // Right Pass
    for(let i = n - 1; i >= 0; i--) {
        if(S.charAt(i) === C) {
            next = i;
        } else {
            result[i] = Math.min(result[i], Math.abs(next - i));
        }
    }
    
    return result;
};