var smallestSubsequence = function (s) {

    let hash = {};

    for (let char of s) {
        if (hash[char] === undefined) {
            hash[char] = 1;
        } else {
            hash[char]++;
        }
    }
    // console.log("hash", hash);

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
        // console.log("RES", stack, set);
        hash[char] -= 1;
    }

    // console.log("RES", stack);

    return stack.join('');
};