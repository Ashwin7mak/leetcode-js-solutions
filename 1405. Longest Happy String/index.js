/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
/*
    a = 1, b = 1, c = 7 -> ccaccbcc

 - Make total count of all the three characters
 - Create three variables to track the count of each characters from exceeding count 3 during iteration
 - While the totalcount > 0
    - Ensure if (a > 0 && ( B == 2 || C == 2)) || A != 2 && (a >= b && a >= c))
    - Increment A, decrement a, set B and C to 0
    - Add a to the result
*/

var longestDiverseString = function (a, b, c) {

    let res = "";

    let totalCount = a + b + c;

    let A = B = C = 0;

    while (totalCount > 0) {
        if ((a > 0 && (B == 2 || C == 2)) || (a >= b && a >= c) && A !== 2) {
            A++;
            a--;
            res += 'a';
            B = C = 0;
        } else if ((b > 0 && (A == 2 || C == 2)) || (b >= a && b >= c) && B !== 2) {
            B++;
            b--;
            res += 'b';
            A = C = 0;
        } else if ((c > 0 && (A == 2 || B == 2)) || (c >= a && c >= b) && C !== 2) {
            C++;
            c--;
            res += 'c';
            A = B = 0;
        }
        totalCount -= 1;
    }

    return res;
};


