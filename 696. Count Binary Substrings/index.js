/**
 * @param {string} s
 * @return {number}
 */

/*

    - Count the no of 1s and 0s in the substring

    - We can see that with each two groups of consecutive characters, the number of substrings that can be formed will be minimum of count among the two groups.

    "0000111110001"

    [4, 5, 3, 1] = 4 + 3 + 1 = 8

*/
var countBinarySubstrings = function(s) {

  let count = 1, prevCount = 0, totalSubstring = 0;

  for(let i = 1; i < s.length; i++) {
      if(s[i] === s[i - 1]) {
          count++;
      } else {
          totalSubstring += Math.min(count, prevCount);
          prevCount = count;
          count = 1;
      }

  }
  totalSubstring += Math.min(count, prevCount);

  return totalSubstring;
};
