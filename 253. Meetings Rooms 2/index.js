/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {

    if (!intervals || intervals.length < 1) return 0;

    let noOfRooms = 0;
    // Creating new array based upon sorted start time
    let startTimes = intervals.map((e) => e[0]).sort((a, b) => a - b);
    // Creating new array based upon sorted end time
    let endTimes = intervals.map((e) => e[1]).sort((a, b) => a - b);

    let j = 0;

    for (let i = 0; i < intervals.length; i++) {
        if (startTimes[i] < endTimes[j]) {
            noOfRooms++;
        } else {
            j++;
        }
    }
    return noOfRooms;
};