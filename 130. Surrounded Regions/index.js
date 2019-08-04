/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    // Check board length is not null
    if (board.length == 0 || board.length == null) {
        return 0;
    }

    // Check in the borders top and bottom
    for (let row = 0; row < board.length; row++) {
        dfsRecursive(board, row, 0);
        dfsRecursive(board, row, board[0].length - 1);
    }

    // Check in the borders left and right
    for (let col = 0; col < board[0].length; col++) {
        dfsRecursive(board, 0, col);
        dfsRecursive(board, board.length - 1, col);
    }

    // Check the entire board including borders
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            // If found 'O', then change it to 'X'
            if (board[row][col] === 'O') board[row][col] = 'X';

            // If found '#', then change it to 'O'
            if (board[row][col] === '#') board[row][col] = 'O';
        }
    }

    return board;
}

var dfsRecursive = function (board, row, col) {
    // Base cases
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== 'O') return;

    // Assign current element to '#'
    board[row][col] = '#';

    dfsRecursive(board, row - 1, col);      // Bottom
    dfsRecursive(board, row + 1, col);      // Top
    dfsRecursive(board, row, col - 1);      // Left
    dfsRecursive(board, row, col + 1);      // Right

}