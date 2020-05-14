var trap = function (height) {
    let water = 0;

    let left = [], right = [];

    // Traversing from left to right of the container
    // Finding the max level of water including the current index i
    left[0] = height[0];

    for (let i = 1; i < height.length; i++) {
        left[i] = Math.max(left[i - 1], height[i]);
    }

    // Traversing from right to left of the container
    // Finding the max level of water including the current index i
    right[height.length - 1] = height[height.length - 1];

    for (let j = height.length - 2; j >= 0; j--) {
        right[j] = Math.max(right[j + 1], height[j]);
    }

    // Calculate the accumulated water for every element
    for (let k = 0; k < height.length; k++) {
        water += Math.min(left[k], right[k]) - height[k];
    }

    return water;

};

// Two Pointer Approach
var trap = function (height) {

    // Initialize left pointer to 0 and right pointer to size-1
    // While left < right, do:
    // If height[left] is smaller than height[right]
    // If height[left] ≥ left_max, update left_max
    // Else add left_max − height[left] to ans
    // Add 1 to left.
    // Else
    // If height[right] ≥ right_max, update right_max
    // Else add right_max − height[right] to ans
    // Subtract 1 from right.
    // Return ans


    if (height.length === 0 || height === null) return 0;

    let result = 0;

    let left = 0, right = height.length - 1;

    let maxLeft = 0, maxRight = 0;

    while (left <= right) {

        maxLeft = Math.max(maxLeft, height[left]);

        maxRight = Math.max(maxRight, height[right]);

        if (maxLeft < maxRight) {
            result += (maxLeft - height[left]);
            left++;
        } else {
            result += (maxRight - height[right]);
            right--;
        }
    }

    return result;

};