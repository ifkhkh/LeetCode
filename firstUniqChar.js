const { log } = require('./utils')

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (s === undefined || s === '') {
        return -1
    }
    let m = {}
    let len = s.length
    for (let i = 0; i < len; i++) {
        let char = s[i]
        if (m[char] === undefined) {
            m[char] = 1
        } else {
            m[char] += 1
        }
    }
    for (let i = 0; i < len; i++) {
        let char = s[i]
        if (m[char] === 1) {
            return i
        }
    }
    return -1
};

log(firstUniqChar('leetcode'))
log(firstUniqChar('loveleetcode'))