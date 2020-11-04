/**
 * @param {number} num
 * @return {number}
 */
/*
    - Convert given number into array to perform computation
    - Max, maxIndex to store max number and its index in the array, two indices left(smallest) and right(largest)
    - Iterate through the num array from backward(one pass) 
        - Record the max digit and its index
        - Check if any number is less than max
            - assign the index to left and right as maxIndex
    - Swap left and right indices
    - Convert the given array into number
        
    TC - O(n)
    SC - O(1)
*/
var maximumSwap = function(num) {
    
    let max = -Infinity, maxIndex = -1;
    
    let left = -1, right = -1;
    
    let res = num.toString().split('');
    
    for(let i = res.length - 1; i >= 0; i--) {
        
        if(res[i] > max) {
            max = res[i];
            maxIndex = i;
            continue;
        }
        
        if(res[i] < max) {
            left = i;
            right = maxIndex;
        }      
    }
    // If given input is the largest number
    if(left === -1) return num;

    [res[left], res[right]] = [res[right], res[left]];

    return parseInt(res.join(''));
};


