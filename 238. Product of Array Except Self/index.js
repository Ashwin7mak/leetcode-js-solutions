var productExceptSelf = function (nums) {
    let result = [];
    // Calculate product of nums to the left of current index i
    // Assume the first element of result is 1
    result[0] = 1;

    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    // Result array is left side product of nums array element

    
    // Calculate product of nums to the right of current index i
    // Assume the next element of the last element of nums array as 1
    // Last element in the result is the right side product of last element of nums
    let right = 1;

    for (let j = nums.length - 1; j >= 0; j--) {
        result[j] = result[j] * right;
        right = right * nums[j];
    }

    return result;
};