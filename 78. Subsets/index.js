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

/* Backtracking Approach */
var subsets = function(nums) {
    if(!nums || nums.length == 0) return [];
    let result = [[]];
    backTrack(0, [], nums, result);
    
    return result;
}

function backTrack(start, curr, nums, result) {
    for(let i = start; i < nums.length; i++) {
        curr.push(nums[i]);
        result.push([...curr]);
        backTrack(i + 1, curr, nums, result);
        curr.pop();
    }
}