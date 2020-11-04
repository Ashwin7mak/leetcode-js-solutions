var maxSubArray = function (nums) {
    let sum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);

        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
};

/* 
    Greedy Approach (Kadane's Algorith)
    - Calculate the maxSum at every number while iterating the array

    TC - O(n)
    SC - O(1)
*/
var maxSubArray = function (nums) {

    if (nums.length == 0) return nums;

    let maxSum = currSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Compare two values and recalculate the currSum
        currSum = Math.max(nums[i], currSum + nums[i]);
        // Update maxSum if it is lesser than currSum
        if (currSum > maxSum) {
            maxSum = currSum;
        }

    }

    return maxSum;
};

/*
    Brute Force's Approach

    TC - O(n ^ 2)
    SC - O(1)
*/
var maxSubArray = function(nums) {
    
    let maxSum = -Infinity;
    
    for(let i = 0; i < nums.length; i++) {
        let currSum = 0;
        
        for(let j = i; j < nums.length; j++) {
            currSum += nums[j];
            
            maxSum = Math.max(currSum, maxSum);
        }
    }
    return maxSum;
};