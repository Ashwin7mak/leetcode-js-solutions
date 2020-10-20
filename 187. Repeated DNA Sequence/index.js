/**
 * @param {string} s
 * @return {string[]}
 */


/*
    Using Set Approach
    - Use a sliding window of length 10 to see sequence of the input string
    - Check if the sequence is in the set,
        If so, push the repeated sequence into an output Set
        If not, save the sequence in the set
    - Return the output array

    TC - O((n - l)l), where n is the no of elements in the input, l is 10
    SC - O((n - l)l)
*/
var findRepeatedDnaSequences = function(s) {
    
    if(!s || s.length < 10) return [];
    
    let output = new Set();
    
    let hash = new Set();
    // str.length - 10 + 1
    for(let i = 0; i < s.length - 9; i++) {
        let slicedStr = s.substring(i, i + 10);
        
        if(hash.has(slicedStr)) {
            output.add(slicedStr);
        } else {
            hash.add(slicedStr);
        }       
    }
    return Array.from(output);
};

