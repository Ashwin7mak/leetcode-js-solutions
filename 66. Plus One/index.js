/**
 * @param {number[]} digits
 * @return {number[]}
 */
/*
    - Iterate from the last digit of the digits
        - If digit is 9, set the digit to 0
        - else add 1 to the digit and return the digit
    
    - If the left most digit is 9, we need to add 1 to it
    - Create an array with 1, add digit to it.
    - return the resulting array
*/
var plusOne = function (digits) {

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i] += 1;
            return digits;
        }
    }

    let result = [1];   // Only if the left most digit is 9, we need to add 1 infront of it
    result.push(...digits);

    return result;
};

/* Another Approach */
var plusOne = function (digits) {
    // Loop through the digits
    let i = digits.length - 1;

    // If any digit element is 9 
    // Add 0 in front of it
    while (digits[i] === 9) {
        digits[i] = 0;
        i--;
    }

    // If the digit is less than 0 add 1 infront of it
    // If not increment the digit value
    if (i < 0) {
        digits.unshift(1);
    } else {
        digits[i]++;
    }
    return digits;
};