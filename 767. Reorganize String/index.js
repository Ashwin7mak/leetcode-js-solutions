/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
    // Find all the characters and its frequence using map or JS Object
    let hash = {};

    let result = [];

    let index = 0;

    for (let char of S) {
        if (!hash[char]) {
            hash[char] = 1;
        } else {
            hash[char]++;
        }
    }

    // Sort them based on the highest frequency 
    let frequency = Object.keys(hash)
                            .sort((a, b) => hash[b] - hash[a]);

    // Iterate through the sorted arrays
    for (let i = 0; i < frequency.length; i++) {
        let current = hash[frequency[i]];
        // Check if contiguous characters are same, then return ""
        if (current > (S.length + 1) / 2) return "";
        
        for (let j = 0; j < current; j++) {
            if (index >= S.length) index = 1;
            result[index] = frequency[i];
            index += 2;
        }
    }

    return result.join("");
};