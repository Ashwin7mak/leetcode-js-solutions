/**
 * @param {number[][]} intervals
 * @return {number}
 */

/*
    Optimized Approach

    - Sort the given intervals based upon the start time, if start time are same then sort them based upon the end time(decreasing order)

    TC - O(n logn)
    SC - O(1)
 */
var removeCoveredIntervals = function (intervals) {

    if (!intervals || intervals.length === 0) return intervals;

    let result = 0;

    intervals = intervals.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        } else {
            return b[1] - a[1];
        }
    });

    let currEnd = 0;

    for (let i = 0; i < intervals.length; i++) {

        let nextEnd = intervals[i][1];
        if (nextEnd > currEnd) {
            result += 1;
            currEnd = nextEnd;
        }
    }

    return result;
};

/*
    Similar to Merge Intervals problem

    - Sort the given intervals based upon the start time, if start time are same then sort them based upon the end time
    - Condition (a, b) is covered by (c, d) only if c <= a && b <= d

    TC - O(nlogn)
    SC - O(n)
*/
var removeCoveredIntervals = function (intervals) {

    if (!intervals || intervals.length === 0) return intervals;

    let result = [];

    intervals = intervals.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        } else {
            return b[1] - a[1];
        }
    });

    let currStart = intervals[0][0], currEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {

        let nextStart = intervals[i][0], nextEnd = intervals[i][1];

        if (currStart <= nextStart && nextEnd <= currEnd) {
            nextStart = currStart;
            nextEnd = currEnd;
        } else {
            result.push([currStart, currEnd]);
            currStart = nextStart;
            currEnd = nextEnd;
        }
    }

    result.push([currStart, currEnd]);

    return result.length;
};