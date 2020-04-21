/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {
    // Create an object and include all the entries of three arrays in it
    let hash = {};

    for (let num of arr1) {
        if (!hash[num]) {
            hash[num] = 1;
        } else {
            hash[num]++;
        }
    }

    for (let num of arr2) {
        if (!hash[num]) {
            hash[num] = 1;
        } else {
            hash[num]++;
        }
    }

    for (let num of arr3) {
        if (!hash[num]) {
            hash[num] = 1;
        } else {
            hash[num]++;
        }
    }
    // Return the keys of those entries whose values are 3 i.e. common in three arrays
    return Object.keys(hash).filter((e) => hash[e] > 2);
};