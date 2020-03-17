/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    
    if (ransomNote.length > magazine.length) return false;

    // Create an empty
    let obj = {};

    // Pass all the elements of magazine into obj
    for (let char of magazine) {
        if (!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char]++;
        }
    }

    console.log("----", obj);
    // Iterate through ransomNote
    // Check if the elements are not already present in obj
    // If so return false;
    // Else decrement the count of key 
    for (let char of ransomNote) {
        if (!obj[char]) {
            return false;
        } else {
            obj[char]--;
        }
    }

    return true;
};