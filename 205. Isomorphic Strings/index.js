/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
    Hashmap Approach (Similar to Word Pattern)
    - Check if the two strings are of same length
    - Use a hash map to store the characters, i.e. s = "aba", t = "bab"
        hash = { s[i]: t[i] }
    - Iterate through the s
        - Check if hash contains s[i],
            - If not, check if hash has t[i] as its values, if so return false
            - Save hash[s[i]] = t[i]
        - If so, check if hash[s[i]] = t[i], if not return false
    - return true

    TC - O(n)
    SC - O(n)
*/
var isIsomorphic = function(s, t) {
    
     if(!s && !t)
         return true;
    
    if(s.length !== t.length)
        return false;
    
    let hash = {};
    
    for(let i = 0; i < s.length; i++) {
        if(hash[s[i]] === undefined) {
            if(Object.values(hash).indexOf(t[i]) !== -1)
                return false;
            hash[s[i]] = t[i];
        } else {
            if(hash[s[i]] !== t[i])
                return false;
        }
    }
    return true;
};