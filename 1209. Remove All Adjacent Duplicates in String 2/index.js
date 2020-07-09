/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    let stack = [];
    // Iterate through each character in the string
        // Push every character and its frequency
        // If duplicate character is met, increment the frequency count
            // If frequency count is equal to the k, pop the character
        
        // Use an empty to extract the left out character in the string and return it
    for (let ch of s) {
        if (stack.length > 0 && stack[stack.length - 1][0] == ch) {
            stack[stack.length - 1][1] += 1;

            if (stack[stack.length - 1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([ch, 1]);
        }
    }

    let result = '';

    for (let [char, count] of stack) {
        result += char.repeat(count);
    }

    return result;
};