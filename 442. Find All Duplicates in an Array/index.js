/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* Without extra space */
// Basically complement every number in the array once visited
// The nos that are positive are the duplicates
var findDuplicates = function (nums) {
    if (!nums || nums.length == 0) return [];

    let res = [];

    for (let i = 0; i < nums.length; i++) {

        let index = Math.abs(nums[i]) - 1;

        if (nums[index] < 0) res.push(index + 1);

        nums[index] = -nums[index];
    }
    return res;
}


/* Using hash map */
function findDuplicates(nums) {
    let hash = {};
    let result = [];

    //Iterate the array 
    //Add them into the Object hash with no. of occurences as values
    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        if (!hash.hasOwnProperty(key)) {
            hash[key] = 1;
        } else {
            hash[key]++;
        }
    }

    // Finding the keys of object hash
    // Find the keys, whose values is 2 using filter method
    return Object.keys(hash).filter((item) => hash[item] === 2);

}
