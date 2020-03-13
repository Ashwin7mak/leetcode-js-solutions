/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    // Create an object
    let obj = {};

    // Store each string as key-values in the object
    for (let i = 0; i < words.length; i++) {
        if (!obj[words[i]]) {
            obj[words[i]] = 1;
        } else {
            obj[words[i]]++;
        }
    }

    // Filter those with k frequency
    let result = Object.keys(obj)
        .sort((a, b) => { 
            let order = obj[b] - obj[a];
            // If two words are the same in frequency check which 
            // Word comes first in alphabetical order
            if (order == 0) {
                return a.localeCompare(b);
            } else {
                return order;
            }
        });

    // Return the no of k words as result
    return result.slice(0, k);
};