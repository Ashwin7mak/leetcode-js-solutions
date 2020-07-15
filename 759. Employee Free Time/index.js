/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */

// Remove the brackets to depth 1
// Sort them based upon the start time
// Perform merge interval approach
// Iterate over the result, to get the free time between the intervals
var employeeFreeTime = function (schedule) {
    schedule = [].concat(...schedule);

    schedule.sort((a, b) => a.start - b.start);

    let mergedInterval = [];

    let currStart = schedule[0].start;
    let currEnd = schedule[0].end;

    for (let i = 1; i < schedule.length; i++) {

        let nextStart = schedule[i].start;
        let nextEnd = schedule[i].end;

        if (currEnd >= nextStart) {
            currEnd = Math.max(currEnd, nextEnd);
            currStart = Math.min(currStart, nextStart);

        } else {
            mergedInterval.push(new Interval(currStart, currEnd));
            currStart = nextStart;
            currEnd = nextEnd;
        }
    }
    mergedInterval.push(new Interval(currStart, currEnd));

    let result = [];
    for (let i = 1; i < mergedInterval.length; i++) {
        let curr = mergedInterval[i - 1];
        let next = mergedInterval[i];
        result.push(new Interval(curr.end, next.start));
    }
    return result;

};