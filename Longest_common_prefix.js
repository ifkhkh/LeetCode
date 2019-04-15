/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ''
    }
    strs.sort((a, b) => a.length - b.length)
    let has = true
    let r = ''
    let first = strs[0]
    for(let i = 0; i < first.length; i++) {
        let char = first[i]
        let index = i
        strs.forEach(s => {
            if (s.indexOf(char) === index) {
                s.slice(index)
            } else {
                has = false
            }
        })
        if (has) {
            r += char
        }
    }
    return r
};
