/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    // New stack
    this.stack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    return this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.stack.length != 0) {
        // Remove the first element as it is queue
        return this.stack.shift();
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    // First element is the peek element in queue
    return this.stack[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */