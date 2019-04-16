var merge = function (nums1, m, nums2, n) {
    
    if (!n) return;
    // Loop through n
    // Assign nums2 in nums1 array 
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }
    // Sort the nums1 array
    return nums1.sort((a, b) => a - b);
};