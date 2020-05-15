/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    // Iterate through the board 
    // If word's first character is found and if dfs() return true
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word.charAt(0) && dfs(board, i, j, 0, word)) {
                return true;
            }
        }
    }
    return false;
};

// DFS helper function with board, rows, columns, count(no. of letters found) and word
function dfs(board, i, j, count, word) {

    // Check if the word is found
    if (count === word.length) {
        return true;
    }

    // Check if the words are within the boundary limit
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] !== word.charAt(count)) {
        return false;
    }

    // To keep track of the visited letters in the board
    let visited = board[i][j];

    board[i][j] = " ";

    let hasNeighbors = (dfs(board, i + 1, j, count + 1, word)
        || dfs(board, i - 1, j, count + 1, word)
        || dfs(board, i, j + 1, count + 1, word)
        || dfs(board, i, j - 1, count + 1, word));

    board[i][j] = visited;

    return hasNeighbors;
}