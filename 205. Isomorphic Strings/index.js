/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    // Using object to store the string characters
    // Key - string t characters
    // Value - string s characters
    let hash = {};
    // Check if the key is present in hash
    // If so, check if the key has the value assigned corresponding to string s
    // If not return false
    // If the key is not present in the hash
    // Check if the hash has any value associated with the string s
    // If so, return false
    // If not, assign hash[key] to the string s
    for (let i = 0; i < t.length; i++) {
        let key = t[i];

        if (hash[key]) {
            if (hash[key] !== s[i]) {
                return false;
            }
        } else {
            if (Object.values(hash).indexOf(s[i]) !== -1) {
                return false;
            } else {
                hash[key] = s[i];
            }
        }
    }
    return true;
};