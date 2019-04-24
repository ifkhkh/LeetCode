const {log} = require('./utils')


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (nums.length === 0) {
        return nums
    }
    // 1
    // let len = nums.length
    // let end = nums.slice(0, len - k)
    // let start = nums.slice(len - k)
    // log(start, end)
    // let r = start.concat(end)
    // return r

    // 2
    let len = nums.length
    let r = []
    for (let i = len - k; i < len; i++) {
        r.push(nums[i])
    }
    for (let i = 0; i < len - k; i++) {
        r.push(nums[i])
    }
    return r

    // leetcode 还是报错
}

log(rotate([1,2,3,4,5,6,7], 0))
log(rotate([1,2,3,4,5,6,7], 1))
log(rotate([1,2,3,4,5,6,7], 2))
log(rotate([1,2,3,4,5,6,7], 3))
log(rotate([1,2,3,4,5,6,7], 4))
log(rotate([1,2,3,4,5,6,7], 5))
log(rotate([1,2,3,4,5,6,7], 6))
log(rotate([1,2,3,4,5,6,7], 7))