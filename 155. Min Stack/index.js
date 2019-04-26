/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = [];
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let minElement = this.getMin();

    this.stack.push(x);

    if (minElement == undefined || minElement >= x) {
        this.min.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let minElement = this.getMin();

    let removed = this.stack.pop();
    console.log("Element removed is ", removed);
    
    if (minElement == removed) {
        this.min.pop();
    }

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};



let obj = new MinStack();
var param_3 = obj.top()
var param_4 = obj.getMin()
console.log("===", param_4);
obj.push(10);
obj.push(20);
obj.push(30);
obj.push(40);

console.log("|---|", obj);

obj.pop()

console.log("|---|", obj);





