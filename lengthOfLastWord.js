/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let list = s.split(' ')
    let len = list.length
    if (len === 0) {
        return 0
    }
    let i = 1
    let last = list[len - i]
    while(last === '') {
        if (len === i) {
            break
        }
        i++
        last = list[len - i]
    }
    console.log(last)
    let r = last.length
    return r
}
