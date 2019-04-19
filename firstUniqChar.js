const {log} = require('./utils')

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (s === undefined || s === '') {
        return -1
    }
    // 方法一
    // let m = {}
    // let len = s.length
    // for (let i = 0; i < len; i++) {
    //     let char = s[i]
    //     if (m[char] === undefined) {
    //         m[char] = 1
    //     } else {
    //         m[char] += 1
    //     }
    // }
    // for (let i = 0; i < len; i++) {
    //     let char = s[i]
    //     if (m[char] === 1) {
    //         return i
    //     }
    // }
    // return -1
    // 方法二
    // let i = 0
    // let has = []
    // while (s.length > 0) {
    //     let char = s[0]
    //     s = s.slice(1)
    //     if ((s.indexOf(char) === -1) && (has.indexOf(char) === -1)) {
    //         return i
    //     } else {
    //         has.push(char)
    //     }
    //     i++
    // }
    // return -1
    // 方法三
    let count = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        let n = s[i].charCodeAt() - 97
        count[n]++
    }
    log(count)
};

log(firstUniqChar('leetcode'))
log(firstUniqChar('loveleetcode'))