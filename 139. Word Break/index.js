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



console.log(wordBreak("leetcode", ["leet", "code"]));