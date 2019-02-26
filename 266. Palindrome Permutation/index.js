function palindromePermutation(s) {
    let obj = {};
    let count = 0;

    s = s.toLowerCase();

    // Iterate through the string and push into Object
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // Removing spaces
        if (char === " ") continue;

        if (!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char]++;
        }
    }
 
    // Palindrome condition: There can be utmost of only one element occuring once
    for (let char in obj) {
        if (obj[char] % 2 != 0) {
            count++;
        }
    }

    return count > 1 ? false : true;
}