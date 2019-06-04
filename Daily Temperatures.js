const {log} = require('./utils')

/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = function (T) {
    // let list = T
    // let r = new Array(0)
    // list.forEach((l, index) => {
    //     let tail = list.slice(index)
    //     let d = 0
    //     for (let i = 0; i < tail.length; i++) {
    //         let t = tail[i]
    //         if (l < t) {
    //             d = i
    //             break
    //         }
    //     }
    //     r.push(d)
    // })
    // return r

    // todo 优势解法  不懂
    let indexstack = [0]
    let res = []
    for (var i = 1; i < T.length; i++) {
        if (indexstack.length === 0) {
            indexstack.push(i);
            continue;
        }
        if (T[i] > T[indexstack[indexstack.length - 1]]) {
            var index = indexstack[indexstack.length - 1];
            res[index] = i - index;
            indexstack.pop();
            i -= 1;
        } else {
            indexstack.push(i);
        }
    }
    for (var i = 0; i < indexstack.length; i++) {
        res[indexstack[i]] = 0;
    }
    return res;

}

log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), '-----dailyTemperatures() is here-----')