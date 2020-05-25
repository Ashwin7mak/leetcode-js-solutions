/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function (n) {
    this.rowCounter = new Array(n).fill(0);
    this.colCounter = new Array(n).fill(0);
    this.diagonalLeft = 0;
    this.diagonalRight = 0;
    this.length = n;
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
    let move = player === 1 ? 1 : -1;

    this.rowCounter[row] += move;
    this.colCounter[col] += move;
    //console.log(">", this.rowCounter, "--", this.colCounter);

    if (row == col) {
        this.diagonalLeft += move;
    }

    if (row == this.length - 1 - col) {
        this.diagonalRight += move;
    }

    if (Math.abs(this.rowCounter[row]) == this.length ||
        Math.abs(this.colCounter[col]) == this.length ||
        Math.abs(this.diagonalLeft) == this.length ||
        Math.abs(this.diagonalRight) == this.length) {
        return player;
    }
    return 0;
};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
