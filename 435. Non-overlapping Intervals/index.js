/**
 * @param {number[][]} intervals
 * @return {number}
 */

/*
    Similar to merge intervals problem

    Sort the intervals based upon the start positions. Just remove the overlapping intervals

    [currStart, currEnd], [nextStart, nextEnd]

    if (currEnd > nextStart), 
        increment the counter
        Assign currEnd = min(currEnd, nextEnd)
    else 
        currEnd = nextEnd

*/
var eraseOverlapIntervals = function (intervals) {

    if (!intervals || intervals.length === 0) return 0;

    intervals.sort((a, b) => {
        return a[0] - b[0];
    });

    let currEnd = intervals[0][1];

    let count = 0;

    for (let i = 1; i < intervals.length; i++) {

        let nextStart = intervals[i][0];
        let nextEnd = intervals[i][1];

        if (currEnd > nextStart) {
            count += 1;
            currEnd = Math.min(currEnd, nextEnd);
        } else {
            currEnd = nextEnd
        }
    }
    return count;
};