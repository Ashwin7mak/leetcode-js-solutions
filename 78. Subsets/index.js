var subsets = function(nums) {
    // Result array to store the arrays
    let result = [];
    result.push([]);
    // Looping through the nums array
    nums.forEach(e => {
        let len = result.length;
        let i = 0;
        // For every iteration, checking new length of result with iterator i
        while (i < len) {
            // Temp value picks of sliced array element in the result array
            let temp = result[i].slice(0);
            // Pushing remaining element into the sliced array
            temp.push(e);
            // Pushing the temp value into result array
            result.push(temp);
            i++;
        }
    });
    return result;
}