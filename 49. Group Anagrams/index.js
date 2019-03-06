/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    function alphabetize(word) {
        if (!word) {
            return;
        }
        word = word.split('');
        word = word.sort();
        word = word.join('');
        return word;
    }


    // main function
    let res = [];
    let anagrams = {};
    strs.forEach((word) => {
        const sortedWord = alphabetize(word);
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
        res.push(anagrams[sortedWord]);
    });
    //res.push(anagrams);

    // store the result (anagrams object) in a variable called groupedAnagrams
    //return anagrams;
    //return res.push(Object.keys(anagrams));
    return res;
};