/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {

    // If X[0,...m - 1], Y[0,...n - 1] are two strings with m and n lengths resp

    // If X[m - 1] === Y[n - 1], 
    //    L(X[m - 1], Y[n - 1]) = 1 + L(X[m - 2], Y[n - 2])

    // If X[m - 1] !== Y[n - 1], 
    //    L(X[m - 1], Y[n - 1]) = Math.max(L(X[m - 2], Y[n - 2]))

    let l1 = text1.length, l2 = text2.length;
    // Base Case: Fill the 2D dp array with 0 for l1 + 1 and l2 + 2 boundary
    let dp = new Array(l1 + 1).fill().map(() => new Array(l2 + 1).fill(0));

    // Iterate over the 2D array and check the conditions
    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[l1][l2];

};