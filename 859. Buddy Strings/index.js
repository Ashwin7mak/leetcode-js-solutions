/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

/*
    Set Approach
    
    - If two strings are different, return false
    - If two strings are equal, use set to keep track of the char of A
        - Check if set.size < A.length as this helps in 'a' and 'a' as well as 'aa' and 'aa'
    - Use an array, iterate through A, check if A[i] is not equal to B[i], push i into array
    - Check if array.length === 2, A[array[0]] == B[array[1]] and A[array[1]] == B[array[0]], return it.

    TC - O(n)
    SC - O(n)
*/

var buddyStrings = function(A, B) {
        
    if(!A || !B || A.length !== B.length) return false;
    
    let set = new Set();
    
    if(A === B) {
        for(let char of A) {
            if(!set.has(char)) {
                set.add(char);
            }
        }
        return set.size < A.length;
    }
    
    let diff = [];
    
    for(let i = 0; i < A.length; i++) {
        if(A[i] !== B[i]) {
            diff.push(i);   
        }
    }
    
    return (diff.length === 2) && A[diff[0]] === B[diff[1]] && A[diff[1]] === B[diff[0]];   
};
