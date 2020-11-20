/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null || head.next === null) {
        return false;
    }
    
    let slowPointer = head;
    let fastPointer = head.next;
    
    while(slowPointer !== fastPointer) {
        if(fastPointer.next === null || fastPointer.next.next === null) return false;
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    return slowPointer === fastPointer;    
};