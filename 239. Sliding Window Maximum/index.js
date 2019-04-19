var maxSlidingWindow = function (nums, k) {
    // Check if nums is empty
    if (nums.length === 0) return [];
    let max = 0, result = [];
    // Loop through nums.length - k elements in array
    // Assign max to first element
    for (let i = 0; i <= nums.length - k; i++) {
        max = nums[i];
        // Loop through first k elements in array
        // Find max for the first k elements
        for (let j = 1; j < k; j++) {
            if (max < nums[i + j]) {
                max = nums[i + j];
            }
        }
        // Push max into result
        result.push(max);
    }
    return result;
};
