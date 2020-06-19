/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {

    if (!citations || citations.length === 0) return 0;

    let n = citations.length;

    let left = 0, right = n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (citations[mid] === n - mid) {
            return n - mid;
        } else if (citations[mid] < n - mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return n - left;
};