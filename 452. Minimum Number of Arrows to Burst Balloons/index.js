/**
 * @param {number[][]} points
 * @return {number}
 */
/*
    GIST: No of arrows is decided by the x-end positions of the balloons
    - Sort the balloons based on xending
    - Assign no of arrows = 1, set currPosition = ballons[0][1]
    - Iterate through the array
        - If the currPosition is greater than the x-start positions, skip them
        - Else increment the count
        - Set the currPosition to the x-end position of the ith element
    - Return the no of arrows

    TC - O(n logn)
    SC - O(n)
*/

var findMinArrowShots = function (points) {
    if (!points || points.length === 0) return 0;

    points = points.sort((a, b) => a[1] - b[1]);

    let noOfArrows = 1;
    let currPosition = points[0][1];

    for (let i = 1; i < points.length; i++) {

        if (currPosition >= points[i][0])
            continue;

        noOfArrows += 1;
        currPosition = points[i][1];
    }
    return noOfArrows;
};

