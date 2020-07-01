var shuffle = function (nums, n) {

    let i = 0, left = 0, right = n;
    let res = [];
    while (left < n && right < nums.length) {
        res[i++] = nums[left++];
        res[i++] = nums[right++];
    }
    return res;
};