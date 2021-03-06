/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length == 0 || !intervals) return [];
    // Sort the given intervals based upon the first value of each item
    intervals = intervals.sort((a, b) => a[0] - b[0]);

    let result = [];
    // Set curr_begin and curr_end variables for comparing
    let curr_begin = intervals[0][0];
    let curr_end = intervals[0][1];

    // Iterate through the entire array loop
        // If the curr_end >= next_begin, set curr_end = Math.max(curr_end, next_begin)
        // Else push [curr_begin, curr_end] into the result, and then reassign the variables
    for (let i = 1; i < intervals.length; i++) {

        let interval = intervals[i];

        if (curr_end >= interval[0]) {
            curr_end = Math.max(curr_end, interval[1]);
            curr_begin = Math.min(curr_begin, interval[0]);
        } else {
            result.push([curr_begin, curr_end]);
            curr_begin = interval[0];
            curr_end = interval[1];
        }
    }

    result.push([curr_begin, curr_end]);

    return result;
};
