/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    str = str.split(' ');

    if (pattern.length !== str.length) return false;
    // Using object to store the string characters
    // Key - string pattern characters
    // Value - string str characters
    let hash = {};
    // Check if the key is present in hash
        // If so, check if the key has the value assigned corresponding to string str
            // If not return false
    // If the key is not present in the hash
        // Check if the hash has any value associated with the string str
            // If so, return false
            // If not, assign hash[key] to the string str
    for (var i = 0; i < str.length; i++) {
        if (hash[pattern[i]]) {
            if (hash[pattern[i]] !== str[i]) {
                return false;
            }
        } else {
            if (Object.values(hash).indexOf(str[i]) !== -1) {
                return false;
            } else {
                hash[pattern[i]] = str[i];
            }
        }
    }

    return true;
};