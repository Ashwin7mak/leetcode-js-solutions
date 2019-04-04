var findMaxAverage = function (nums, k) {
    // Sliding Window Problem
    let sum = 0;

    for (let i = 0; i < k; i++) sum += nums[i];
    // Assign maximum to the sum
    let maxSum = sum;

    // Loop through the nums array
    // Find the max. sum of contiguous subarray
    for (let j = k; j < nums.length; j++) {
        sum += nums[j] - nums[j - k];
        maxSum = Math.max(sum, maxSum);
    }
    // Calculate the avg
    return maxSum / k;
};