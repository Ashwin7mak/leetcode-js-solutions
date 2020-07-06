/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    // Convert n to binary number,split at "0", join then count the length
    return n.toString(2).split("0").join("").length;;
};

/* Bit Manipulation approach */
// 11 & 1 -> 1     10 & 1 -> 0
// All odd numbers will have 1 bit
// All even numbers will have 0 bit
function hammingWeight = (n) => {
    let count = 0;
    while(n) {
        count += 1;
        n &= n-1;
    }
    return count;
}