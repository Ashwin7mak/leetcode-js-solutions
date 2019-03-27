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