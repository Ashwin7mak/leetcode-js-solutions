/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

/*
    Recursive BackTracking Approach
    
    - Compare the two strings
    - If p[1] is '*',
        - Recursively call the function from p.substr(2)
        - Check each and every character of both the strings
        - Else return false
    - Else check each and every character of both the strings
        - Else return false

    TC - O(2 ^ n) - n is the Min(s.length, p.length)
    SC - O(1)
*/
var isMatch = function(s, p) {
    
    if(p.length === 0) return s.length === 0;
    
    if(p.length > 0 && p[1] === '*') {
        
        if(isMatch(s, p.substr(2)))
            return true;
        
        if((s[0] === p[0] || p[0] === '.') && s.length > 0)
            return isMatch(s.substr(1), p);
        return false;        
    } else {
        if((s[0] === p[0] || p[0] === '.') && s.length > 0) 
            return isMatch(s.substr(1), p.substr(1));      
        return false;
    }
    
};