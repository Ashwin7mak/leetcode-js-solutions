var evalRN = function(tokens) {
    const stack = [];

    for (let token of tokens) {
        if (token === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (token === '-') {
            stack.push(-stack.pop() + stack.pop());
        } else if (token === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (token === '/') {
            let b = stack.pop();
            let a = stack.pop();
            stack.push(Math.trunc(1 / b * a));
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack.pop();

}   

console.log(evalRN(["2", "1", "+", "3", "*"]));
console.log(evalRN(["4", "13", "5", "/", "+"]));
console.log(evalRN(["2", "1", "+", "3", "*"]));
