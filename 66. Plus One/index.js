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