/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {


    // Use an object and empty stack to display the result

    // Iterate through the nums2 array
        // Check if stack is not empty and stack.peek() is less than nums2[i]
        // Assign into hash[pop] to nums2[i]
    // Push nums2[i] to stack

    // Now iterate through the nums1 array
        // Ass

    let hash = {};

    let stack = [];

    for (let i = 0; i < nums2.length; i++) {
        console.log("---=", stack[stack.length - 1], nums2[i]);
        while (stack.length != 0 && stack[stack.length - 1] < nums2[i]) {
            let pop = stack.pop();
            hash[pop] = nums2[i];
        }
        stack.push(nums2[i]);
    }
    console.log("S", stack);
    console.log("====", hash);
    return nums1.map((e) => hash[e] || -1);
};