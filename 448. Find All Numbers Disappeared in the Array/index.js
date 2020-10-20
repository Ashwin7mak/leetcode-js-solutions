/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
    Space Inplace Modification Approach
    - Iterate through the array
        - Use the Math difference of the current number - 1 as the index
        - If the nums[index] > 0, store the negative value of nums[index] i.e. -nums[index]
    - In the second iteration from 1 to n including n
        - Check if any value that is positive, push those i values into result array
    - Return result

    TC - O(n)
    SC - O(1)
*/
var findDisappearedNumbers = function(nums) {
    let result = [];
    
    for(let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if(nums[index] > 0)
            nums[index] = -nums[index];
    }
    
    for(let i = 1; i <= nums.length; i++) {
        if(nums[i -  1] > 0) {
            result.push(i);
        }
    }
    
    return result;
};


/*
    Missing Index Approach
*/
var findDisappearedNumbers = function(nums) {
    let result = [];

    //Iterate through the loop
    //From the index 1 to last element + 1 to catch hold the missing numbers
    for(let i = 1; i < nums.length + 1; i++) {
        //If the element(missed index) is not present push into the result
        if(nums.indexOf(i) === -1) {
            result.push(i);
        }
    }
    return result;
}