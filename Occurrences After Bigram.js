const {log} = require('./utils')

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let r = []
    let s = first + ' ' + second
    let t = text
    while (t.split(' ').length > 0) {
        let index = t.indexOf(s)
        if (index === -1) {
            break
        }
        let start = index + s.length
        let tail = t.slice(start)
        let word = tail.trim(' ').split(' ')[0]
        if (word.length > 0) {
            r.push(word)
        }
        t = tail
    }
    return r
};

log(findOcurrences('alice is a good girl she is a good student', 'a', 'good'), '-----a is here-----')
log(findOcurrences('we will we will rock you', 'we', 'will'), '-----b is here-----')

