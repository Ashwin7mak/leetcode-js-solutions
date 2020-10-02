/**
 * @param {string[]} A
 * @return {string[]}
 */
/*
    - Use first string as the start in the array as the reference
    - As we iterate through the array,
        - Filter all the common char in each word of the array with respect to start
    - Return start

    TC - O(mn), where m is length of array and n is length of max word in the array
    SC - O(1)

*/
var commonChars = function (A) {
    let start = A[0].split('');

    for (let str of A) {

        let char = str.split('');

        start = start.filter((ch) => {

            let index = char.indexOf(ch);

            return index > -1 ? char[index] = true : false;
        });
    }
    return start;

};