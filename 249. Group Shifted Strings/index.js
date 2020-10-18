/**
 * @param {string[]} strings
 * @return {string[][]}
 */
/*
    Hashmap Approach (Similar to Group all anagrams problem)
    - Store all the words with similar differences as key 
        acf -> pru  ie. 0-2-3 -> 0-2-3
        if there is negative value like az -> ba ie. 0-25 -> 1-0
        
    - Return the values
    
    TC - O(m * n)
    SC - O(m * n)   where, n =Length of given input string, m = Length of each string
*/
var groupStrings = function(strings) {
    
    if(!strings || strings.length === 0) return [];
    
    let map = new Map();
    
    for(let ch of strings) {
        let key = getKey(ch);
        if(!map.has(key)) {
            map.set(key, []);
        } 
        map.get(key).push(ch);
    }
    
    function getKey(str) {       
        let key = 0;
        for(let i = 1; i < str.length; i++) {
            let diff = str[i].charCodeAt() - str[i - 1].charCodeAt();   // Taking the ASCII value
            key += (diff > 0) ? diff : diff + 26;
            key += ',';
        }
        
        return key;
    }   
    return [...map.values()];
};
