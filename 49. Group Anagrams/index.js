// Optimized Solution
var groupAnagrams = function (strs) {
    let res = {};

    for(let str of strs) {
        // Get the sorted word(anagram) of every word
        let key = [...str].sort().join('');
        // Check if the key exists in the map 
        if(!map[key]) {
            map[key] = [];
        }
        // Push the words in to the values array
        map[key].push(str);
    }
    return Object.keys(map);
}


// Basic Solution
var groupAnagrams = function (strs) {

    // Function to create sorted string
    function alphabetize(word) {
        if (!word) {
            return;
        }
        word = word.split('');
        word = word.sort();
        word = word.join('');
        return word;
    }

    let res = [];
    let anagrams = {};
    // Iterate through all the words in the given array
    strs.forEach((word) => {
        // Store the alphabatized word for each words in the array
        const sortedWord = alphabetize(word);
        // Use sortedWord as the key for the Object  
        // Check if the key exists or not 
        // If so push the words in the array based on key
        /* {
            'amp': ['map', 'pam'],
                'art': ['art']
        } */
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        // If not make word as the value for the corresponding key
        anagrams[sortedWord] = [word];
        // Push then into the result array
        res.push(anagrams[sortedWord]);
    });

    return res;
};
