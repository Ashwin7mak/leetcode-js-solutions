/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let result = [];
    // Iterate the n values in a loop
    for (let i = 1; i <= n; i++) {
        // Check if i is multiple of both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            // Push the other none values to the array
            result.push(i);
        }
    }
    // Converts integer array to string array 
    return result.map(String);
};