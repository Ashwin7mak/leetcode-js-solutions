/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length === 0) return 0;

    let dp = new Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // Crucial conditions if the sequence is increasing and dp[j] is greater than dp[i] since dp[i] is not been altered after initialization
            if (nums[j] < nums[i] && dp[j] > dp[i]) {
                // Assigning dp[i] value to the previous dp[j] value
                dp[i] = dp[j];
            }
        }
        // The element is already a sequence hence adding 1
        dp[i] += 1;
    }
    // Return the max element in the dp array
    return Math.max(...dp);
};