function rob(nums) {
    let evenMax = 0;
    let oddMax = 0;

    for(let i = 0; i < nums.length; i++) {
        //Check if the index is divisible by 2 then add value to evenMax else add value to oddMax
        if (nums[i] % 2 == 0) {
            evenMax = Math.max(evenMax + nums[i], oddMax);
        } else {
            oddMax = Math.max(evenMax, oddMax + nums[i]);
        }
    }
    return Math.max(evenMax, oddMax);
}


/* DP Bottom Up approach */
var rob = function (nums) {
    if (nums.length == 0 || nums == null) return 0;
    // Create dp array of nums.length + 1 as we are returning dp of nums
    let dp = new Array(nums.length + 1);
    // Base case:
    dp[0] = 0;
    dp[1] = nums[0];

    // dp[i] = Math.max(dp[i-1], dp[i-2] + num[i-1])
    for (let i = 1; i < nums.length; i++) {
        dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
    }
    return dp[nums.length];
};