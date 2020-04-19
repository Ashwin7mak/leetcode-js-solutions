/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s.length == 0) return 0;
    // Decode ways of s characters length is decode ways of (s - 1) length;
    let dp = new Array(s.length + 1).fill(0);

    // Base case:
    // Since '' is also one possible way
    dp[0] = 1;
    dp[1] = s[0] == "0" ? 0 : 1;

    for (let i = 2; i <= s.length; i++) {
        let oneDigit = s.slice(i - 1, i);
        let twoDigit = s.slice(i - 2, i);

        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[i] += dp[i - 1];
        }

        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[s.length];

};