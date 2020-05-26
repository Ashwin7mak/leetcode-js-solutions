/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    // Convert n to binary number,split at "0", join then count the length
    return n.toString(2).split("0").join("").length;;
};