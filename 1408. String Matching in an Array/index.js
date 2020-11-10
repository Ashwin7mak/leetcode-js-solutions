/**
 * @param {string[]} words
 * @return {string[]}
 */

/*

    - Result to store the substrings
    - Iterate through the string
        - Iterate through the rest of the string
        - Check if the str[i] is a substring of any other string
            - If so push into result
    - Return result

    TC - O(n ^ 2)
    SC - O(n)
*/
var stringMatching = function(words) {
    
    if(!words || words.length === 0) return words;
    
    let result = [];
    
    for(let ch of words) {
        for(let i = 0; i < words.length; i++) {
            if(words[i] === ch)
                continue;
            
            if(words[i].indexOf(ch) > -1 && result.indexOf(ch) === -1) {
                result.push(ch);
            }
        }
    }
    return result;
};

