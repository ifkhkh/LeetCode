const { log } = require('./utils')
const twoSum = (nums, target) => {
    let o = {}
    for(let i = 0; i< nums.length; i++) {
        let n = nums[i]
        let odd = target - n
        let list = Object.keys(o)
        let k = String(odd)
        let has = list.indexOf(k) > -1
        if (has) {
            return [o[k], i]
        }
        o[n] = i
    }
    console.error('No two sum solution')
}

log(twoSum([2,7,11,15], 9))
log(twoSum([3, 2, 4], 6))
