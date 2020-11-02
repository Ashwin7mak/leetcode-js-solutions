/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
/*
    - Iterate through the list
    - Add the linkedlist value to a variable called num
        - Left shift by 1 digit (Multiplying by 2)
        - Add the new value to the num
    - Return num

    TC - O(n)
    SC - O(1)
*/

var getDecimalValue = function(head) {
    
    let num = 0;
    
    while(head != null) {         
		num <<= 1;              
		num += head.val;        
		head = head.next;       
	}
	return num;
};