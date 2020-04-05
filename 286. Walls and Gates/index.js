/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
    if (rooms.length == 0 || rooms == null) return;
    // Depth First Approach
    // Find the distance of all the empty room starting from a gate

    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms[i].length; j++) {
            if (rooms[i][j] == '0') {
                findDistance(i, j, 0, rooms);
            }
        }
    }
};

function findDistance(i, j, count, rooms) {
    if (i < 0 || i >= rooms.length || j < 0 || j >= rooms[i].length ||
        rooms[i][j] < count) {
        return 0;
    }

    rooms[i][j] = count;

    findDistance(i - 1, j, count + 1, rooms);
    findDistance(i + 1, j, count + 1, rooms);
    findDistance(i, j - 1, count + 1, rooms);
    findDistance(i, j + 1, count + 1, rooms);
}