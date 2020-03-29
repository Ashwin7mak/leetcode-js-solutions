var maxSubArray = function (nums) {
    let sum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);

        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
};

/* Greedy Approach */
var maxSubArray = function (nums) {
    // Greedy Approach
    if (nums.length == 0) return nums;

    let maxSum = currSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Compare two values and recalculate the currSum
        currSum = Math.max(nums[i], currSum + nums[i]);
        // Assign maxSum to currSum, if it is greater than maxSum
        if (currSum > maxSum) {
            maxSum = currSum;
        }

    }

    return maxSum;
};