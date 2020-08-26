var isValid = function(s) {
    if (!s) return true;

    let stack = [];

    let left = ["(", "[", "{"];
    let right = [")", "]", "}"];

    let match = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i in s) {
        // Check if the string has "(", then push it into stack
        if (left.indexOf(s[i]) > -1) {
            stack.push(s[i]);
        }

        // Check if the string has ")", then pop if from stack
        if (right.indexOf(s[i]) > -1) {
            let removed = stack.pop();

            // Check for the match object for the corresponding characters if not return false
            if (match[s[i]] != removed) {
                return false;
            }
        }
    }

    // Check if the stack is empty or not
    return stack.length == 0;
};
