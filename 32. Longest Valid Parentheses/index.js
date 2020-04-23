/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    if (!s) return 0;

    // Assign a variable to caculate the count of valid parentheses
    let count = 0;
    // A stack with -1 in it
    let stack = [-1];

    // Iterate through the string
    // If the element is "("
    // If so, add the index to the stack
    // Else pop the index from the stack

    // If the stack is empty
    // If so, add the index to the stack
    // If not, calculate the count by taking max of count and i - stack.peek()
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else {
            stack.pop();

            if (!stack.length) {
                stack.push(i);
            } else {
                count = Math.max(count, (i - stack[stack.length - 1]));
            }
        }
    }

    return count;
};