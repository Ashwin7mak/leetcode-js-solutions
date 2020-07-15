/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
    let i = 0, j = 0;

    let intersections = [];

    while (i < A.length && j < B.length) {
        let maxStart = Math.max(A[i][0], B[j][0]);
        let minEnd = Math.min(A[i][1], B[j][1]);

        if (maxStart <= minEnd) {
            intersections.push([maxStart, minEnd]);
        }

        if (A[i][1] < B[j][1]) {
            i++;
        } else {
            j++;
        }
    }
    return intersections;
};