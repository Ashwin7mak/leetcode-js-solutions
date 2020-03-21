/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // Create a dummy node 
    let dummyNode = new ListNode(0);
    dummyNode.next = head;

    let slow_pointer = dummyNode;
    let fast_pointer = dummyNode;

    // Iterate throught the list incrementing n + 1 times
    for (let i = 1; i <= n + 1; i++) {
        fast_pointer = fast_pointer.next;
    }
    // After completion of this cycle, slow pointer is pointed to nth node
    while (fast_pointer !== null) {
        slow_pointer = slow_pointer.next;
        fast_pointer = fast_pointer.next;
    }
    
    slow_pointer.next = slow_pointer.next.next;

    return dummyNode.next;
};