/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    // Error check conditions
    if (!image || !image.length || image[sr][sc] === newColor) return image;
    // Using dfs to find the neighbors
    dfs(image, sr, sc, newColor, image[sr][sc]);

    return image;
};
// Using dfs approach
function dfs(image, row, col, newColor, fillColor) {
    if (row < 0 || col < 0 || row >= image.length || col >= image[0].length || image[row][col] !== fillColor) return;

    image[row][col] = newColor;

    dfs(image, row + 1, col, newColor, fillColor);
    dfs(image, row - 1, col, newColor, fillColor);
    dfs(image, row, col + 1, newColor, fillColor);
    dfs(image, row, col - 1, newColor, fillColor);

}