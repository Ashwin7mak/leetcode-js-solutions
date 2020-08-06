/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    if (!candidates || candidates.length === 0) return [];

    let result = [];

    // Sort the candidates, as we are dealing with non duplicates
    candidates.sort((a, b) => a - b);

    backTrack(0, result, [], candidates, target);

    return result;
}

// BackTrack function
// start - start of the backtracking position during iteration
// result - result of the final computation
// temp - temp array used in the computation for chunking from the array
function backTrack(start, result, temp, candidates, target) {
    // End case
    if(target === 0) {
        result.push([...temp]);
        return;
    }

    if(target < 0) return;

    for(let i = start; i < candidates.length; i++) {
        if(i === start || candidates[i] !== candidates[i - 1]) {
            temp.push(candidates[i]);
            backTrack(i + 1, result, temp, candidates, target - candidates[i]);
            temp.pop();
        }
    }
}