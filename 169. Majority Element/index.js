var majorityElement = function (nums) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];
        if (!hash[key]) {
            hash[key] = 1;
        } else {
            hash[key]++;
        }
    }
    // Returns the key with highest value in the object
    return Object.keys(hash).reduce((a, b) => hash[a] > hash[b] ? a : b);
};