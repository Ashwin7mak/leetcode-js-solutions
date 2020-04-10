/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {

    // Create helper method using stack
    function helper(arr) {
        let stack1 = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "#") {
                stack1.pop();
            } else {
                stack1.push(arr[i]);
            }
        }

        return stack1.join(" ");
    }

    // Compare the results from two functions are equal
    return helper(S) === helper(T);
};