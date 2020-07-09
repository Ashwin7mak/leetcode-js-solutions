/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    let stack = [];
    // Iterate through the string
        // Untill ")" encountered keep pushing char into stack
        // If ")" encountered,
            // Untill "(" is encountered, pop all the characters from stack into another stack(reversedStack)
            // Iterate through the reversedStack, 
                //  push all the elements from the front into the stack
    for (let ch of s) {
        if (ch !== ")") {
            stack.push(ch);
            continue;
        }
        let popped = stack.pop();

        let reverseStack = [];

        while (popped !== "(") {
            reverseStack.push(popped);
            popped = stack.pop();
        }

        while (reverseStack.length) {
            stack.push(reverseStack.shift());
        }

    }
    return stack.join('');
};