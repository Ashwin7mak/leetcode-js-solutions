/**
 * @param {string} s
 * @return {string}
 */
/*  
    Stack Approach
    - Result is the smallest lexicographical order of the given input i.e. Hence, given input order is needed
    - Use a hashmap to store the char of string and their frequencies
    - Use a stack to maintain the result and set to track original chars in the stack
    - Check if the char is less than the top element in the stack and also if there is same top element in the hash
        - Pop the top element from the stack
        - Delete the element from the set
    
    TC - O(n)
    SC - O(n) where n is limited to 26 characters only at max hence, O(1)

*/

var removeDuplicateLetters = function (s) {

    let hash = {};

    for (let char of s) {
        if (hash[char] === undefined) {
            hash[char] = 1;
        } else {
            hash[char]++;
        }
    }

    let stack = [];

    let set = new Set();

    for (let char of s) {
        if (!set.has(char)) {

            while (stack.length > 0) {
                let top = stack[stack.length - 1];

                if (top < char || hash[top] === 0) {
                    break;
                }
                stack.pop();
                set.delete(top);
            }

            stack.push(char);
            set.add(char);
        }
        hash[char] -= 1;
    }

    return stack.join('');
};
