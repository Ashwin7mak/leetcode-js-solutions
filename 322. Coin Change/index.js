/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {  // This cant be true as coins cannot be greater than amount
    let max = amount + 1;
    let dp = new Array(max).fill(max);

    dp[0] = 0;

    for (let i = 1; i < max; i++) {
        for (let j = 0; j < coins.length; j++) {
            // Check if coin is less than current sum and 
            if (coins[j] <= i && (dp[i - coins[j]] + 1 < dp[i])) {
                // Assign the min value to the dp[i] and one denotes the one number of coin usage.
                dp[i] = dp[i - coins[j]] + 1;
            }
        }
    }
    // As dp[amount] cannot be equal to dp[amount + 1]
    return dp[amount] == max ? -1 : dp[amount];
};