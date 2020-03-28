/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
    // Find sum of two arrays 
    let aTotal = A.reduce((a, c) => a + c, 0)
    // Create a map for array B
    let bVals = new Map(),
        bTotal = B.reduce((a, c) => {
            bVals.set(c)
            return a + c
        }, 0);

    let diff = (bTotal - aTotal) / 2;
    // Formula 
    // a - b = SumA - SumB/2;
    console.log("--", bTotal, bVals);
    // Iterate through array A loop
    // Check if keyVal is in array B
        // If so return keyVal and A[a]
    for (let a = 0; a < A.length; a++) {
        let keyVal = A[a] + diff;
        if (bVals.has(keyVal)) {
            return [A[a], keyVal];
        }
    }
};