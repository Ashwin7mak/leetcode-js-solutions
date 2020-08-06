/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    if (!candidates || candidates.length == 0) return [];

    let result = [];

    // Sort the given input for our convenience
    candidates.sort((a, b) => a - b);

    backTrack(0, result, [], candidates, target);

    return result;
}


// Backtrack function
// start - starting position for backtracking
// result - result array carrying final result
// temp - temp array used to chunk the ans during computation
function backTrack(start, result, temp, candidates, target) {
    // End case
    if (target === 0) {
        result.push([...temp]); // Shallow copy since it is array
        return;
    }

    // Edge case
    if (target < 0) return;

    for (let i = start; i < candidates.length; i++) {
        temp.push(candidates[i]);
        // No start = (i + 1), since we are using duplicates too
        backTrack(i, result, temp, candidates, target - candidates[i]);
        temp.pop();
    }
}