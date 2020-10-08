/**
 * @param {string} moves
 * @return {boolean}
 */

 /*
    - Every left, is balanced by right
    - Every up, is balanced by down

    TC - O(n)
    SC - O(1)
*/
var judgeCircle = function (moves) {

    if (!moves || moves.length < 1) return false;

    let horizontal = 0, vertical = 0;

    for (let i = 0; i < moves.length; i++) {

        if (moves[i] === "R") {
            horizontal += 1;
        } else if (moves[i] === "L") {
            horizontal -= 1;
        } else if (moves[i] === "U") {
            vertical += 1;
        } else if (moves[i] === "D") {
            vertical -= 1;
        } else {
            continue;
        }
    }

    return (horizontal === 0 && vertical === 0);
};

