const log = console.log.bind(console)

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    if (strs.length === 0) {
        return ''
    }
    // 用最短的检测
    strs.sort((a, b) => a.length - b.length)
    let has = true
    let r = ''
    let first = strs[0]
    while (first.length > 0) {
        let i = 0
        let char = first[i]
        strs.forEach((s, index) => {
            if (s.indexOf(char) === i) {
                // 移除已经检测过的
                let n = s.slice(i + 1)
                strs[index] = n
            } else {
                has = false
            }
        })
        if (has) {
            // 拼接已有的
            r += char
        }
        // 移除已经检测过的
        first = first.slice(i + 1)
    }
    for(let i = 0; i < first.length; i++) {
        let char = first[i]
        strs.forEach((s, index) => {
            if (s.indexOf(char) === i) {
                // 移除已经检测过的
                let n = s.slice(i + 1)
                strs[index] = n
            } else {
                has = false
            }
        })
        if (has) {
            // 拼接已有的
            r += char
            // 移除已经检测过的
            first = first.slice(i + 1)
            // 从头开始检测
            i--
        }
    }
    return r
}

log(longestCommonPrefix(["flower","flow","fligh"]))
