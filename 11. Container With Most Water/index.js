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

// Two-Pointer Approach

var maxArea = function (height) {
    // MaxArea = Length of shortest line * distance between two lines
    // Using two pointer approach with left = 0, right = size - 1;
    // While left < right, calculate the maxarea between the two lines.
    //     If(A[left] < A[height]), alter the left value(left++) and right value(right--)
    if (height.length === 0 || height === null) return 0;

    let left = 0, right = height.length - 1;

    let maxArea = 0;

    while (left < right) {

        let minHeight = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, minHeight * (right - left));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};
