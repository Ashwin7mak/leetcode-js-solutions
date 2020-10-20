/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/*
    Two Pointers Inplace Modification Approach
    - while(n > 0),
    - Iterate from the last of the initialized elements in both the arrays simultaneously, 
        assign the greater one to the end of the nums1 array
    
    TC - O(n)
    SC - O(1)

*/
var merge = function(nums1, m, nums2, n) {
    while(n > 0) {
        if(m >= 0 && nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums1[m - 1];
            m--;
        } else {
            nums1[m + n - 1] = nums2[n - 1];
            n--;
        }
    }
    return nums1;
};


/*
    TC - O(n log n);
    SC - O(1)
*/

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