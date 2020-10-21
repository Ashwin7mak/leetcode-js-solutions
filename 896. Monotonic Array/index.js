/**
 * @param {number[]} A
 * @return {boolean}
 */
/*
    One Pass Approach
    - Check if the input array is either increasing or decreasing, as it can't be both

    TC - O(n)
    SC - O(1)
*/
var isMonotonic = function(A) {

    let increasing = true, decreasing = true;
    
    for(let i = 1; i < A.length; i++) {
        if(A[i] > A[i - 1])
            increasing = false;
        
        if(A[i] < A[i - 1])
            decreasing = false;
    }
    
    return increasing || decreasing;
};
