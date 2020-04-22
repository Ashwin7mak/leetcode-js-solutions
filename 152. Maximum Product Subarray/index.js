/**
 * @param {number[]} nums
 * @return {number}
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


var maxProduct1 = function (nums) {

    if (nums.length == 0 || nums == 0) return 0;

    let currMin = nums[0], currMax = nums[0];

    let maxProd = nums[0];

    for (let i = 1; i < nums.length; i++) {

        currMax = Math.max(nums[i], nums[i] * currMax, nums[i] * currMin);

        currMin = Math.min(nums[i], nums[i] * currMax, nums[i] * currMin);

        maxProd = Math.max(maxProd, currMax);

    }

    return maxProd;
};


console.log(maxProduct1([2, 3, -2, 4]));