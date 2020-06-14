/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head === null || head.next === null) return true;

    // Find the mid 
    let slow = head, fast = head, mid = null;

    while (fast && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // If there are odd no. of items in the list, then fast will be at the end of the list else fast will be null
    if (fast !== null) {
        mid = slow.next;
    } else {
        mid = slow;
    }

    // Reverse the later part 
    let prev = null, next = null;

    while (mid !== null) {
        next = mid.next;
        mid.next = prev;
        prev = mid;
        mid = next;
    }

    // Compare the two half values
    let p1 = head, p2 = prev;
    while (p1 != null && p2 != null) {
        if (p1.val != p2.val) return false;
        p1 = p1.next;
        p2 = p2.next;
    }

    return true;
};