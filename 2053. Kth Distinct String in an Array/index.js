/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {

    let obj = {};

    for(let char of arr) {
        if(obj[char] === undefined) {
            obj[char] = 1;
        } else {
            obj[char]++;
        }
    }

    let distinctStr = Object.keys(obj).filter(u => obj[u] === 1);

    return distinctStr.length >= k ? distinctStr[k - 1] : "";
};
