function intersection(nums1, nums2) {
    let res = [];
    // Checking the numbers that are common in both arrays 
    // Pushing the common ones into new array
    let a1 = nums1.filter(val => {
        if (nums2.includes(val)) res.push(val);
    });
    let a2 = nums2.filter(val => {
        if (nums1.includes(val)) res.push(val);
    });
    // Converting the array as Set thus removing the duplicates
    return [...new Set(res)];
}