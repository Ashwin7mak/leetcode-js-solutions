/**
 * @param {string} s
 * @return {string[][]}
 */
/*
    BackTrack Approach    

    - Check if the given string can be broken down into palidrome susbtrings

    backTrack(start, result, temp, s)
        - Edge case: 
    
        - Iterate over the s from start to N
            - Check if isPalindrome(s, start, i)
                - temp.push(s.substring(start, i + 1));
                - backTrack(i + 1, result, temp, s);
                - temp.pop();
    
    isPalindrome(str, start, end)
        while(start < end)
            if(str[start] !== str[end]) return false;
            start++;
            end--;
        return true;

    TC - O(n 2^n)
    SC - O(n)
*/

var partition = function(s) {
    
    let result = [];
    
    backTrack(0, result, [], s);
    
    return result;
};

function backTrack(start, result, temp, s) {
    
    if(start === s.length) {
        result.push([...temp]);
        return;
    }
    
    for(let i = start; i < s.length; i++) {
        
        if(isPalindrome(s, start, i)) {
            temp.push(s.substring(start, i + 1));
            backTrack(i + 1, result, temp, s);
            temp.pop();
        }   
    }
}

function isPalindrome(str, start, end) {
    
    while(start < end) {
        if(str[start++] !== str[end--])
            return false;
    }
    return true;
}


