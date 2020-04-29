/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

    if (s.length == 0 || s == null) return s;

    let result = [];

    s = s.split(" ");
    // Reverse each word in the string
    s.forEach((word) => {
        let newWord = reverseString(word);
        result.push(newWord);
    });

    return result.join(" ");

};
// Helper function to reverse letters in a string
function reverseString(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}