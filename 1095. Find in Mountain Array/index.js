/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */

/* 
    Binary Search Approach

    - Perform binary search to find the peakIndex in the array
    - Perform two binary searches
        - left = 0, right = peak
        - left = peak, right = array.length - 1
    - Return the smallest one else -1


*/
var findInMountainArray = function(target, mountainArr) {
    
    // Function to find the peak element in the array
    function findPeak(target, mountainArr) {
            
        let low = 0, high = mountainArr.length() - 1;

        while(low < high) {
            let mid = Math.floor((low + high)/ 2);
            
            if(mountainArr.get(mid) < mountainArr.get(mid + 1)) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }
    
    let peak = findPeak(target, mountainArr);
    let left = 0, right = peak;
    
    while(left < right) {
        let mid = Math.floor((left + right)/ 2);

        if(mountainArr.get(mid) >= target) {
            right = mid;
        } else {            
            left = mid + 1;
        }     
    }
    
    // Return left since it is the smallest element found
    if(mountainArr.get(left) === target)
        return left;
    
    left = peak, right = mountainArr.length() - 1;
    
    while(left < right) {
        let mid = Math.floor((left + right)/ 2);

        if(mountainArr.get(mid) <= target) {
            right = mid;
        } else {            
            left = mid + 1;
        }     
    }

    // Return left since it is the element found
    if(mountainArr.get(left) === target)
        return left;
        
    return -1;

};