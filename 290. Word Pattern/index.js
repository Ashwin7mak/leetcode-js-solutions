/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
/*
    Hashmap Approach
    - Split the string based upon the spaces
        - Check if the str.length === pattern.length
    -  Using object to store the string characters
       Key - string pattern characters
       Value - string str characters
    - Iterate through the str
        - ch = pattern[i], w = str[i]
        - Check if ch is found in the hash
            - If not check if the hash has w as its values, if so return false
            - Add hash[ch] = w
        - Since, ch is found in the hash
            - Check if hash[ch] === w, if not return false
    - return true

    TC - O(n)
    SC - O(n)
*/
var wordPattern = function (pattern, s) {
    
    if(!s && !p)
        return true;
    
    if(!s || !pattern)
        return false;
    
    let str = s.split(' ');
    
    if(pattern.length !== str.length)
        return false;
    
    let hash = {};
    
    for(let i = 0; i < str.length; i++) {
        
        let ch = pattern[i], word = str[i];
        
        if(!hash.hasOwnProperty(ch)) {
            if(Object.values(hash).indexOf(word) !== -1)
                return false;
            hash[ch] = word;
        } else {
            if(hash[ch] !== word)
                return false;
        }   
    }
    return true;  
};