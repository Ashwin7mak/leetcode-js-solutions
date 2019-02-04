function rob(nums) {
    let evenMax = 0;
    let oddMax = 0;

    for(let i = 0; i < nums.length; i++) {
        //Check if the index is divisible by 2 then add value to evenMax else add value to oddMax
        if (nums[i] % 2 == 0) {
            evenMax = Math.max(evenMax + nums[i], oddMax);
        } else {
            oddMax = Math.max(evenMax, oddMax + nums[i]);
        }
    }
    return Math.max(evenMax, oddMax);
}