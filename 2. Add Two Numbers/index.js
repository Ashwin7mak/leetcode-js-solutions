/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    // Create a new Node pointing to the head
    let newNode = new ListNode(0);
    let l3 = newNode;
    let carry = 0;

    // Iterate until l1, l2 and carry is found
    while (l1 !== null || l2 !== null || carry > 0) {
        let totalSum = 0;
        if (l1 !== null) {
            totalSum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            totalSum += l2.val;
            l2 = l2.next;
        }

        totalSum += carry;
        carry = parseInt(totalSum / 10);
        let lastDigit = totalSum % 10;
        // Create newNode for consuming carry
        l3.next = new ListNode(lastDigit);
        l3 = l3.next;

    }

    return newNode.next;

};