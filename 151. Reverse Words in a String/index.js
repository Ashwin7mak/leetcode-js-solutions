var reverseWords = function (str) {
    // Trim(remove all the white spaces on the ends)
    // Split based on one to many whitespace characters
    return str.trim().split(/\s+/).reverse().join(' ');
};