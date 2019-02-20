var searchMatrix = function (matrix, target) {
    // Flatten mutlidimensional array into single array
    let res = [].concat(...matrix);

    // Check for the presence of the target element in the array
    return res.some((e) => e == target);
};