/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    // New stack
    let stack = [];

    // Iterate over pushed stack
    for (let i = 0; i < pushed.length; i++) {
        // Push all elements into stack
        stack.push(pushed[i]);
        // Check if top element in stack is equal to first element in popped
        while (stack.length && stack[stack.length - 1] === popped[0]) {
            // Pop stack's top element
            stack.pop();
            // Remove popped's first element
            popped.shift();
        }

    }

    // Return true or false if stack is empty
    return stack.length === 0;
};