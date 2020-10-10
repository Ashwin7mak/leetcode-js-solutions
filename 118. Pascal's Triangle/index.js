/**
 * @param {number} numRows
 * @return {number[][]}
 */
/*
    - no. of arrays produced is same as the input
    - Create an array result
    - Manually Add 1 as the first element to the result
    - Iterate from i = 1 to numRows
        - Keep track of prevRow which result[i - 1]
        - Create new array, manually add first element as 1 to it
        - Create another for loop from j = 1 to prevRow.length
            - Add elements to the new array which is prevRow[i - 1] + prevRow[i]
            - Manually add 1 as the last element to the new array

    - Push the new array into the result

    TC - O(n ^ 2)
    SC - O(n ^ 2) 

*/
var generate = function (numRows) {

    if (!numRows || numRows.length === 0) return [];
    let result = [];
    result.push([1]);

    for (let i = 1; i < numRows; i++) {
        let prevRow = result[i - 1];
        let newRow = [];
        newRow.push(1);

        for (let j = 1; j < prevRow.length; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }
        newRow.push(1);
        result.push(newRow);
    }
    return result;
};

