var intersect = function (nums1, nums2) {
    let hash = {};
    let res = [];
    // Loop through nums1 array 
    // Create object hash with all the elements in nums1
    for (let i = 0; i < nums1.length; i++) {
        if (!hash[nums1[i]]) {
            hash[nums1[i]] = 1;
        } else {
            hash[nums1[i]]++;
        }
    }

    // Loop through nums2 array
    // Check if the hash object contains nums2 array elements
    // If so push them into the res array
    for (let i = 0; i < nums2.length; i++) {
        if (hash[nums2[i]]) {
            hash[nums2[i]]--;
            res.push(nums2[i]);
        }
    }
    return res;
};