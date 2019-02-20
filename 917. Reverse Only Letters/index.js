var reverseOnlyLetters = function (S) {
    
    // Function to check only alphabets
    function isLetter(char) {
        return /[a-zA-Z]/.test(char);
    }

    // Push all the legal alphabets into a new array
    let str = [...S].filter((e) => isLetter(e));

    let res = '';
    let index = str.length - 1;
    // Iterate all the characters from actual string.
    // Compare the actual string and the new array.
    // Push all the characters from string into result array passing the isLetter condition
    for(let letters of S) {
        if(isLetter(letters)) {
            res += str[index];
            index--;
        } else {
            res += letters;
        }
    }

    return res;
};