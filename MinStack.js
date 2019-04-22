const {log} = require('./utils')

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    let stack = new Array()
    this.stack = stack
    return this
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let len = this.stack.length
    this.stack = this.stack.slice(0, len - 1)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let len = this.stack.length
    return this.stack[len -1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let list = this.stack
    let stand = list[0]
    for (let i = 1; i < list.length; i++) {
        let num = list[i]
        if (num < stand) {
            stand = num
        }
    }
    return stand
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
log(minStack.getMin(), 'get min');   // 返回 -3.
minStack.pop();
log(minStack.top(), minStack.stack, 'top');      // 返回 0.
log(minStack.getMin(), 'get min');   // 返回 -2.