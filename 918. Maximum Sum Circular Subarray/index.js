/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
    // Max sum of Circular Subarray = Total Sum of array - Minimum sum of Subarray

    function kadaneAlgo(nums) {
        let currSum = nums[0], maxSum = nums[0];

        for (let i = 1; i < nums.length; i++) {
            if (currSum < 0) currSum = 0;
            currSum = currSum + nums[i];
            maxSum = Math.max(currSum, maxSum);
        }
        return maxSum;
    }

    let nonCircularSumSubArray = kadaneAlgo(A);

    let n = A.length;

    let totalSum = 0;

    for (let i = 0; i < n; i++) {
        totalSum += A[i];
        A[i] = -A[i];
    }

    let minSumSubArray = kadaneAlgo(A);

    let circularSumSubArray = totalSum + minSumSubArray;

    return circularSumSubArray === 0 ? nonCircularSumSubArray : Math.max(circularSumSubArray, nonCircularSumSubArray);
};