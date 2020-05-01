/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {

    if (intervals.length < 2) { return true; }
    // Sort the intervals in ascending order based upon the start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Check if the current end time is lesser than next start time, no overlap
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i - 1][1] > intervals[i][0]) {
            return false;
        }
    }

    return true;
};