const { log } = require('./utils')
const longestCommonPrefix = (strs) => {
    if (strs.length === 0) {
        return ''
    }
    let prefix = strs[0]
    // 用第一个跟后面的比较
    for (let i = 1; i < strs.length; i++) {
        let item = strs[i]
        let has = item.startsWith(prefix)
        // 是否以 prefix 开头
        while (!has) {
            // 不是以 prefix 开头的话就去掉 prefix 的最后一个字符
            prefix = prefix.substring(0, prefix.length - 1)
            // 再判断
            has = item.startsWith(prefix)
            if (prefix.length === 0) {
                return ""
            }
        }
    }
    return prefix
}

log(longestCommonPrefix(["flower", "flow", "fligh"]))
log(longestCommonPrefix(["aaa", "aaaa", "aaa"]))
