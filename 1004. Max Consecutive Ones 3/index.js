/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
    // Two pointers approach
    // Iterate using end pointer
        // once 0 is met, decrement K
        // If K < 0, increment using start pointer
            // Check if K === 0, increment K
    // Return the difference betweem two pointers
    let start = 0, end = 0;

    while (end < A.length) {
        if (A[end] === 0) {
            K--;
        }

        if (K < 0) {
            if (A[start] === 0) {
                K++;
            }
            start++;
        }

        end++;
    }
    return end - start;
};