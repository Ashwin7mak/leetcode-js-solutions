/**
 * @param {number[]} nums
 * @return {number}
 */
/*
    Single Pass Approach

    - Assign three variables, maxProd, prevMin, prevMax = nums[0]
    - Iterate from 1 to N
        - Calculate currMax and currMin at every nums[i] i.e. (nums[i], prevMin * nums[i], prevMax * nums[i])
        - Reassign prevMin and prevMax
        - Update maxProd if it is lesser than prevMax
    - Return maxProd

    TC - O(n)
    SC - O(1)
*/
var maxProduct = function (nums) {
    // Remember negative * negative is positive
    if (nums.length == 0) return nums;
    // Assign three var i.e. prevMin, prevMax, maxProd
    let prevMin = prevMax = maxProd = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // 1) prevMax * nums[i], 2) nums[i], 3) prevMin * nums[i]
        let localMin = Math.min(prevMax * nums[i], nums[i], prevMin * nums[i]);

        let localMax = Math.max(prevMax * nums[i], nums[i], prevMin * nums[i]);

        // Max and Min could be swapped if two negative numbers are multiplied
        prevMin = Math.min(localMin, localMax);

        prevMax = Math.max(localMin, localMax);

        if (prevMax > maxProd) {
            maxProd = prevMax;
        }

    }

    return maxProd;
};

/* 
    Brute Force Approach

    TC - O(n ^ 2)
    SC - O(1)
*/
var maxProduct = function(nums) {
    
    if(!nums || nums.length === 0) return 0;
    
    if(nums.length === 1) return nums;
    
    let maxProd = nums[0];
    
    for(let i = 0; i < nums.length; i++) {
        
        let currProd = 1;
        
        for(let j = i; j < nums.length; j++) {
            
            currProd *= nums[j];
            
            if(currProd > maxProd) {
                maxProd = currProd
            }
        }  
        
    }
    return maxProd;
};