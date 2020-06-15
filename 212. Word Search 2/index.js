/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {

    let result = [];


    // Build Trie datastructure with the list of words
    function buildTrie(words) {
        let root = {};

        for (let word of words) {
            let node = root;

            for (let ch of word) {
                if (!node[ch]) {
                    node[ch] = {};
                }
                node = node[ch];
            }
            node.word = word;
        }
        return root;
    }

    // DFS Search function to traverse the board
    function dfs(board, rows, cols, node) {
        if (node.end !== null) {
            result.push(node.end);
            node.end = null;
        }

        if (rows < 0 || cols < 0 || rows >= board.length || cols >= board[0].length) return;
        if (!node[board[rows][cols]]) return;

        let visited = board[rows][cols];

        board[rows][cols] = "#";

        dfs(board, rows + 1, cols, node[visited]);
        dfs(board, rows - 1, cols, node[visited]);
        dfs(board, rows, cols + 1, node[visited]);
        dfs(board, rows, cols - 1, node[visited]);

        board[rows][cols] = visited;
        // console.log("--", finalWords);
    }


    let root = buildTrie(words);
    
    // Traverse through the board to search the words
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(board, i, j, root);
        }
    }

    return result;
};

