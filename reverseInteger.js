const { log } = require('./utils')

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    let negative = x < 0
    let abs = negative ? -x : x
    let s = String(abs)
    let len = s.length
    let r = ''
    for (let i = len - 1; i > -1; i--) {
        r += s[i]
    }
    let res = parseInt(r)
    res = negative ? -res : res
    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
        res = 0
    }
    return res
}

log(reverse(123), '-----reverse(123) is here-----')
log(reverse(120), '-----reverse(120) is here-----')
log(reverse(21474836471), '-----reverse(21474836471) is here-----')
log(reverse(-120), '-----reverse(-120) is here-----')