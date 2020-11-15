/**
 * @param {string[]} words
 * @return {number}
 */
/*
    Hashmap Approach
    - Sort the given string based upon their lengths
    - Use hashmap to store the words, result to find the longest word chain
    - Iterate through the string
        - Set word to 1 in the hashmap
        - Iterate through all the characters in the currentWord
            - Find the prev by deleting each characters at the different positions
            - Check if the prev is in map and map.get(prev) + 1 > map.get(current)
                - Set map.get(current) to the previous one
    - Every time assign the largest val to result
    - Return result
    
    TC - O(n ^ m), n is length of input string, m is the length of the longest string in the input
    SC - O(n)
*/

var longestStrChain = function(words) {
    if(!words || words.length === 0) return 0;
    
    words = words.sort((a, b) => a.length - b.length);
    
    let map = new Map();
    
    let maxLength = 0;
    
    for(let word of words) {
        
        map.set(word, 1);
        
        for(let i = 0; i < word.length; i++) {
            
            let prev = word.slice(0, i) + word.slice(i + 1);
            
            if(map.has(prev) && map.get(prev) + 1 > map.get(word))
                map.set(word, map.get(prev) + 1);
        }
        
        maxLength = Math.max(maxLength, map.get(word));
    } 
    return maxLength;
};


