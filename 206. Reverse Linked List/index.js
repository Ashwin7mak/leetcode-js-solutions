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
    Iterative Approach

    - Two pointers prev = null, curr = head
    - While we iterate through the list
        - Save the curr.next pointer for the future reference i.e. next = curr.next
        - Perform reverse on the list i.e. curr.next = rev
        - Assign back to them
    - Return prev which is pointing to the head

    TC - O(n)
    SC - O(1)
*/
var reverseList = function(head) {
    
    if(head === null) return head;
    
    let prev = null, curr = head;
    
    while(curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};


/* 
    Recursive Approach

    - Base case: check if head or head.next is null 
    - Recursively call on the head.next (go deeper till the last node)
    - Do the reverse on the last node and assign head.next to null
    - Return the reversedlist

    TC - O(n)
    SC - O(n)
*/
var reverseList = function(head) {
    
    if(head === null || head.next === null)
        return head;
    
    let reversedList = reverseList(head.next);
    
    head.next.next = head;
    
    head.next = null;
    
    return reversedList;
    
};