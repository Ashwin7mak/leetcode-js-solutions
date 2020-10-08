/**
 * @param {string[]} words
 * @return {string}
 */
/*
    Hashmap approach

    - Sort the given words alphabetically
    - Use a hash or set to store the words and result to carry the final result
    - Iterate through the words
        - Check if the current word's length is 1 or prefix of the word is present in the hash or set
            - If so add the word into the hash or set
            - Assign the word to the result 
    
    - Return the result, which is the longest word which is build using single character from the previous word

    TC - O(n logn)
    SC - O(n)
*/

var longestWord = function (words) {

    words = words.sort();

    let set = {};

    let result = '';

    for (let word of words) {

        let prefix = word.slice(0, -1); // "abcd" -> "abc"

        if (word.length === 1 || set.hasOwnProperty(prefix)) {
            set[word] = true;

            if (word.length > result.length) {
                result = word;
            }
        }
    }
    return result;
};