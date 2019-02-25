var isPalindrome = function (s) {
    // Remove spaces and special characters
    s = s.replace(/[^A-Z0-9]+/ig, "").toLowerCase();

    // Check if the reverse of string is same as string
    return s.split('').reverse().join('') === s;
};