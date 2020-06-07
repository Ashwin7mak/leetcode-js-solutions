/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {

    function comparator([h1, k1], [h2, k2]) {
        return h1 !== h2 ? h2 - h1 : k1 - k2;
    }

    people.sort(comparator);

    let result = [];

    for(let item of people) {
        result.splice(item[1], 0, item);
    }
    return result;
};


