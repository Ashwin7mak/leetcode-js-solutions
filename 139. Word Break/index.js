/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    // Check if wordDict is empty or not
    if(wordDict.length == 0 || wordDict == null) return true;
    // Use set for wordDict words
    let dict = new Set(wordDict);
    // Use map for computing s computation
    let map = new Map();

    return helperMethod(s, 0);
    
    // Using Helper function takes two values string s and start value
    // Check if map has s if so get the value

    // Iterate through the s with end being start + 1 so we can get the words in wordDict
    // trim the s string with start and end 
    // Recursively ensure if  trim is in dict set 
    // If so set the trimmed value in map and return true
    // Else set the trimmed value is not in map and return false;

    function helperMethod(s, start) {
        if (start === s.length) return true;
        if (map.has(s)) return map.get(s);

        for (let end = start + 1; end <= s.length; end++) {
            let trim = s.slice(start, end);
            if (dict.has(trim) && helperMethod(s, end)) {
                map.set(start, true);
                return true;
            }
        }
        map.set(start, false);
        return false;
    }
}

// Dp Bottom-Up Approach
const wordBreak1 = (s, wordDict) => {

    let n = s.length;

    let dp = new Array(n + 1).fill(false);

    // Sub problem is dp of string s of length n is dp[s.length] who value is true
    dp[0] = true;

    for(let i = 1; i < n + 1; i++) {
        for(let j = 0; j < i; j++) {
            let word = s.slice(j, i);

            if(dp[j] === true && wordDict.includes(word)) {
                dp[i] = true;
                break;
            }
        }
    }
    console.log("Dp", dp);
    return dp[n];
}

//console.log(wordBreak1("leetcode", ["leet", "code"]));
console.log(wordBreak1("catsanddog", ["cat", "cats", "and", "sand", "dog"]));