/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let count = 0
    for (let i = 0; i < S.length; i++) {
        let c = S[i]
        if (J.indexOf(c) !== -1) {
            count += 1
        }
    }
    return count
};