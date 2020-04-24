var longestCommonPrefix = function (strs) {

    if (strs.length == 0) return '';
    // Assign first string in strs as the prefix and use it to compare
    let prefix = strs[0];
    // Iterate through the strs array
        // Keep trimming the prefix until the prefix matches the min words length
    for (let words of strs) {
        while (words.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);

            if (prefix === "") { return ""; }
        }
    }
    return prefix;
};