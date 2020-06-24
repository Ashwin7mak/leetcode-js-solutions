/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    // Split the s into individual characters
    s = s.split("");

    let stack = [];

    // Iterate through the s
    // If "(" is found, push the index into stack
    // If ")" is found, check if stack is empty 
                // if not pop it else change into index of string s as empty
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else if (s[i] === ")") {
            if (stack.length > 0) {
                stack.pop();
            } else
                s[i] = "";
        }
    }

    // Iterate through the stack
        // Change all the characters into empty string
    for (let char of stack) s[char] = "";

    // Reverse the string s
    return s.join("");
};
