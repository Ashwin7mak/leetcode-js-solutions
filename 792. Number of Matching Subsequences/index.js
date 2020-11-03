/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
/*
    Next Letter Pointers Approach

    - Iterate through the words array
    - Use prevIndex to keep track of the prevIndex of seen letter in the S string
    - Use notFound boolean variable to keep track of the unseen letters in each word
        - Iterate through each word 
            - Find the index of the characters in S string using prevIndex
            - Update prevIndex if it is less than index
                - If not, set notFound to true and break the loop
        - If notFound is true, continue to the next character in the loop
        - Increment the count
    
    TC - O(m * n),  where m is length of S string and n is length of longest string in words array
    SC - O(1)
*/
var numMatchingSubseq = function(S, words) {
    
    if(!S || S.length === 0 || words.length === 0) return 0;
    
    let count = 0;
    
    for(let word of words) {
        let notFound = false;
        let prevIndex = -1;
        
        for(let i = 0; i < word.length; i++) {    
            let index = S.indexOf(word[i], prevIndex + 1);
            if(index > prevIndex) {
                prevIndex = index;
            } else {
                notFound = true;
                break;
            }   
        }
        
        if(notFound)
            continue;
    
        count += 1;
    }
    return count;
};

/*
    Two Pointers Approach

    TC - O(words.length * m + n), where m is length of S string and n is length of longest string in words array
    SC - O(1)
*/
var numMatchingSubseq = function(S, words) {
    
    if(!S || S.length === 0 || words.length === 0) return 0;
    
    let count = 0;
    
    for(let word of words) {
        let i = 0, j = 0;
        while(i < word.length && j < S.length) {
            if(word.charAt(i) === S.charAt(j))
                i += 1;
            j += 1;
        }
        if(i === word.length)
            count += 1; 
    }
    
    return count;
};