/**
 * initialize your data structure here.
 */
var MaxStack = function () {
    this.stack = [];
    this.maxStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
    this.stack.push(x);
    // Check if MaxStack is empty or x is greater than max element in the MaxStack
    if(this.maxStack.length == 0 || this.maxStack[this.maxStack.length - 1] <= x) {
        this.maxStack.push(x);
    }
};

/**
 * @return {void}
 */
MaxStack.prototype.pop = function () {
    let x = this.stack.pop();
    // Check if x is the max element in the MaxStack, if so pop it
    if(x == this.maxStack[this.maxStack.length - 1]) {
        this.maxStack.pop();
    }
};

/**
 * @return {void}
 */
MaxStack.prototype.top = function () {
    // Top element in the Stack
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
    // Top element in the MaxStack
    return this.maxStack[this.maxStack.length - 1];
};


let obj = new MaxStack();

obj.push(5);
obj.push(4);
obj.push(10);
obj.push(20);

console.log("Stack is ", obj.stack);
console.log("MaxStack is ", obj.maxStack);
console.log("Max Element is", obj.peekMax());

obj.pop();

console.log("Stack is ", obj.stack);
console.log("MaxStack is ", obj.maxStack);
console.log("Max Element is", obj.peekMax());



