/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists === null || lists.length === 0) return null;

    while (lists.length > 1) {
        let a = lists.shift();
        let b = lists.shift();
        let newList = mergeList(a, b);
        lists.push(newList);
    }
    return lists[0];
};

// Merge two lists in sorted order
function mergeList(a, b) {
    let temp = new ListNode(0);
    let head = temp;

    while (a !== null && b !== null) {
        if (a.val < b.val) {
            head.next = a;
            a = a.next;
        } else {
            head.next = b;
            b = b.next;
        }
        head = head.next;
    }

    head.next = a === null ? b : a;

    return temp.next;
}