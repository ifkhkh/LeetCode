const {log} = require('./utils')

const removeDuplicates = function(nums) {
    let pos = 1
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[pos] = nums[i + 1]
            pos ++
        }
    }
    return pos
}


log(removeDuplicates([1, 1, 2, 2, 3]), '----- is here-----')
log(removeDuplicates([1, 1, 2]), '----- is here-----')