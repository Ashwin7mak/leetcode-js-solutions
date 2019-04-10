var rotate = function (nums, k) {
    // Copy of original array nums
    let arr = [...nums];

    // Loop through nums array
    // Rotate the nums array by comparing with arr array
    for (let j = 0; j < nums.length; j++) {
        nums[(j + k) % nums.length] = arr[j];
    }
    return nums;
};