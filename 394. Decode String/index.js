/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

    let multiply = [];

    let repeatStr = [];

    let result = '';

    let count = '';
    // Iterate through the characters in the string
    // If the char is a number, calculate the number to be multiplied
    // If the char is a "[", store the characters to be repeated
    // If the char is a "]", start repeating the characters stored
    // If the char is a alphabet character
    for (let char of s) {
        if (!isNaN(char)) {
            count = `${count}${char}`;
        } else if (char === "[") {
            multiply.push(count);
            count = '';

            repeatStr.push(result);
            result = '';
        } else if (char === "]") {
            result = repeatStr.pop() + result.repeat(multiply.pop());
        } else {
            result += char;
        }
    }

    return result;
};