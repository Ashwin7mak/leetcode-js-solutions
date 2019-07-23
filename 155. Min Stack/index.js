/**
 * initialize your data structure here.
 */
var MinStack = function () {
    // Take two arrays i.e. one for actual Stack and another for maintaining MinStack
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
    // Check if MinStack is empty or x is less than min element in MinStack
    // If so push into MinStack
    if(this.minStack.length == 0 || this.minStack[this.minStack.length - 1] >= x) {
        this.minStack.push(x);
    }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let x = this.stack.pop();
    // Check if x is the min element in MinStack if so pop it
    if(x == this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    // Top element in the Stack
    return this.stack[this.stack.length - 1];
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    // Top element in the MinStack
    return this.minStack[this.minStack.length - 1];
}


let obj = new MinStack();

obj.push(20);
obj.push(40);
obj.push(50);
obj.push(10);
obj.push(30);

console.log("Stack is", obj.stack);
console.log("MinStack is", obj.minStack);

console.log('Min element is ', obj.getMin());

obj.pop();

console.log("Stack is", obj.stack);
console.log("MinStack is", obj.minStack);
console.log('Min element is ', obj.getMin());

obj.pop();

console.log("Stack is", obj.stack);
console.log("MinStack is", obj.minStack);
console.log('Min element is ', obj.getMin());

obj.push(5);

console.log("Stack is", obj.stack);
console.log("MinStack is", obj.minStack);
console.log('Min element is ', obj.getMin());


