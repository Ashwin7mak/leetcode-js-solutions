/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
/*
    TC - O(n)
    SC - O(n)
*/
var restoreString = function(s, indices) {
    
    if(!s || !indices) return '';
    
    let n = s.length;
    
    let res = new Array(n).fill(0);
    
    for(let i = 0; i < n; i++) {
        let index = indices[i]; 
        res[index] = s[i];
    }

    return res.join('');    
};