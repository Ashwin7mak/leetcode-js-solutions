/**
 * @param {number[]} arr
 * @return {number}
 */

/*
    Hashmap Approach

    TC - O(n)
    SC - O(n)
*/
var findLucky = function(arr) {
    
    let map = new Map();

    for(let i of arr) {
        map.set(i, (map.get(i) || 0) + 1);
    }
    
    let largest = -1;
    
    map.forEach((i, e) => {
        if(i === e && largest < e) {
            largest = e;
        }
    });  
    return largest;
};