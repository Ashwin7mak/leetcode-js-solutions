/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/* 
    Two Pointers Approach

    TC - O(N)
    SC - O(1)
*/
var middleNode = function(head) {
 
    let slow = fast = head;
    
    while(fast && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
