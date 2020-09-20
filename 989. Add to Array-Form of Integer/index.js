/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
/* 
    - Similar to add strings problem
*/
var addToArrayForm = function (A, K) {

    K = K + ''; // Convert K numbers to string for computation
    let i = A.length - 1, j = K.length - 1;
    let carry = 0, result = [];

    while (i >= 0 || j >= 0) {

        let input1 = i >= 0 ? A[i--] : 0;
        let input2 = j >= 0 ? K.charAt(j--) - '0' : 0;

        let sum = (input1 + input2 + carry) % 10;

        carry = Math.floor((input1 + input2 + carry) / 10);

        result.push(sum);
    }

    if (carry !== 0)
        result.push(carry);

    return result.reverse();
};

/* 
    Using BigInt method
*/
var addToArrayForm = function (A, K) {
    // convert A to string using join()
    const string = A.join('');
    // Convert A as string to BitInt to work as integers
    const number = BigInt(string) + BigInt(K);
    // Convert back the integers to array;
    return Array.from((number).toString());
};