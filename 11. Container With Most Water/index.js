// Brute Force Approach
function maxArea(height) {
    // Assume initial water area is minimum
    let max = Number.NEGATIVE_INFINITY;

    // Traverse two loops and compare the differences
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let min = Math.min(height[i], height[j]);
            // Assign max to maximum area between min and max
            max = Math.max(max, min * (j - i));
        }
    }
    return max;
}

// Binary Search Approach
var maxArea = function (height) {
    let max = Number.NEGATIVE_INFINITY;
    // Assigning two pointers
    // Left as 0, Right as height size
    let left = 0, right = height.length - 1;

    while (left < right) {
        // Assigning min as the min of the heights
        let min = Math.min(height[left], height[right]);
        // Calculate the area as max
        max = Math.max(max, min * (right - left));

        // Untill both left and right meets at one height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};