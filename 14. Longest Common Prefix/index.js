var longestCommonPrefix = function (strs) {
    // Check if the string is empty if so return empty string
    if (strs == null || strs.length == 0) {
        return "";
    }

    let longestCommonPrefix = strs[0];

    
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        let currentString = strs[i];

        while (j < longestCommonPrefix.length && j < currentString.length && longestCommonPrefix.charAt(j) == currentString.charAt(j)) {
            j++;
        }

        if (j == 0) {
            return "";
        }

        longestCommonPrefix = longestCommonPrefix.substring(0, j);
    }

    return longestCommonPrefix;

};