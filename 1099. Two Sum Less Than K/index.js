/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = function (A, K) {
    // Sort the given array
    A = A.sort((a, b) => a - b);
    let i = 0;
    let j = A.length - 1;

    let max = -1;

    while (i < j) {

        let sum = A[i] + A[j];

        if (sum < K) {
            if (sum > max) {
                max = sum;
            }
            i++;
        } else {
            j--;
        }
    }
    return max;
};