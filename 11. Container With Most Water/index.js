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