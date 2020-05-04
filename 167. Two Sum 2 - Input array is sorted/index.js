/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {

    let l = numbers.length;
    let i = 0;
    let j = l - 1;

    let sum = numbers[i] + numbers[j];

    while (sum !== target) {
        if (target > sum) {
            i++;
        } else {
            j--;
        }
        sum = numbers[i] + numbers[j];
    }
    return [i + 1, j + 1];
};