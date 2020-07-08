/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {

    let stack = [], n = S.length;

    for (let i = 0; i < n; i++) {
        let char = S[i];

        if (stack.length > 0 && stack[stack.length - 1] == char) {
            stack.pop();
        } else {
            stack.push(char);
        }

    }
    return stack.join("");

};