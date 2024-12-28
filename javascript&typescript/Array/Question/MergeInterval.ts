

function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])
    let result: number[][] = []
    let n = intervals.length, i = 0


    while (i < n) {
        let temp = intervals[i][0], max = intervals[i][1]
        i++

        while (i < n && max >= intervals[i][0]) {
            if (intervals[i][0] < temp) temp = intervals[i][0]
            if (intervals[i][1] > max) max = intervals[i][1]
            i++
        }
        result.push([temp, max])
    }

    return result

}
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
// console.log(merge([[1, 4], [4, 5]]))
// console.log(merge([[1, 10], [2, 3], [4, 8], [9, 12]]))
// console.log(merge([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]))
// console.log(merge([[1, 4], [0, 2], [3, 5]]))



// better space complexity approach
// function merge(intervals: number[][]): number[][] {
//     const result: number[][] = []
//     function mergeAllIntervals(currentPosition: number) {
//         let currentInterval = intervals[currentPosition]
//         for (let i = currentPosition - 1; i >= 0; i--) {
//             const comparingInterval = intervals[i]
//             if (comparingInterval.length < 1) continue

//             if (currentInterval[0] <= comparingInterval[0] && currentInterval[1] >= comparingInterval[1]) {
//                 intervals[i] = []
//             }
//             else if (currentInterval[0] > comparingInterval[0] && currentInterval[1] < comparingInterval[1]) {
//                 intervals[currentPosition] = comparingInterval
//                 currentInterval = comparingInterval
//                 intervals[i] = []
//             }
//             else if (currentInterval[1] < comparingInterval[1] && currentInterval[1] >= comparingInterval[0]) {
//                 currentInterval[1] = comparingInterval[1]
//                 intervals[currentPosition] = currentInterval
//                 intervals[i] = []
//             }
//             else if (currentInterval[0] > comparingInterval[0] && currentInterval[0] <= comparingInterval[1]) {
//                 currentInterval[0] = comparingInterval[0]
//                 intervals[currentPosition] = currentInterval
//                 intervals[i] = []
//             }
//         }
//     }

//     for (let i = 1; i < intervals.length; i++) {
//         mergeAllIntervals(i)
//     }
//     for (let i = 0; i < intervals.length; i++) {
//         if (intervals[i].length > 0) {
//             result.push(intervals[i])
//         }
//     }
//     return result
// };
