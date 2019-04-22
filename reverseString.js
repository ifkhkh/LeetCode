const {log} = require('./utils')

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
    let len = s.length
    let count = len % 2 === 0 ? (len / 2) : ((len + 1) / 2)
    for (let i = 0; i < count; i++) {
        let char = s[i]
        s[i] = s[len - 1 - i]
        s[len - 1 - i] = char
    }
    return s
}

log(reverseString(["h","e","l","l","o"]))
log(reverseString(["H","a","n","n","a","h"]))