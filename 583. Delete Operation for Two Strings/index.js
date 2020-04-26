/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    // Check if two strings are not empty
    let m = word1.length, n = word2.length;

    if (!m || !n) return n || m;

    // Dp Bottom Up approach
    // Use dp array of length (m + 1) & (n + 1)
    let dp = new Array(m + 1).fill(0)
        .map(() => new Array(n + 1).fill(0));


    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            //if(i === 0 || j === 0) dp[i][j] = 0;
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }

    let commonLength = dp[m][n];
    // Condition we are going to calculate min operations required through this formula
    return m + n - 2 * commonLength;

};