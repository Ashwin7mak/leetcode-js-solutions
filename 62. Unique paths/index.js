/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // Initially assign dp array of size m * n and fill with 1
    let dp = new Array(m).fill().map(() => new Array(n).fill(1));
    // Base Case
    // dp[m][n] is dp[m - 1][n - 1]

    // Iterate through the dp array
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // Iterating only right and bottom directions
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1];
};