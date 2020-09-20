/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

/*
    - Without buildin functions and converting into Numbers directly
    - Two pointers approach, 
        i = num1.length - 1, j = num2.length - 1
    - Use carry = 0 to have the carry and the result string 
    - Iterate two strings from the end untill the pointers >= 0
        - If i >= 0, add the numbers
        - Add the sum to the result
        - Update the carry
    - Add the last carry to the result
    - Reverse the result
*/
var addStrings = function (num1, num2) {

    let i = num1.length - 1, j = num2.length - 1;

    let carry = 0, result = '';

    while(i >= 0 || j >= 0) {

        let input1 = i >= 0 ? num1.charAt(i) - '0' : 0;
        let input2 = j >= 0 ? num2.charAt(j) - '0' : 0;

        let sum = (input1 + input2 + carry) % 10;

        carry = Math.floor((input1 + input2 + carry) / 10);

        result += sum;
        i -= 1;
        j -= 1;
    }

    // Add the last carry to the result
    if(carry !== 0)
        result += carry;

    return result.split('').reverse().join('');
}