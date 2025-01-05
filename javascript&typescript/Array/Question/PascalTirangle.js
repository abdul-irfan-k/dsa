// https://leetcode.com/problems/pascals-triangle/solutions/

// function generate(numRows) {
//     const result = []

//     for (let index = 0; index < numRows; index++) {
//         let currentArray = []
//         currentArray[0] = 1
//         currentArray[index] = 1

//         for (let columnIndex = 1; columnIndex < index; columnIndex++) {
//             currentArray[columnIndex] = result[index - 1][columnIndex - 1] + result[index - 1][columnIndex]
//         }
//         result.push(currentArray)
//     }
//     return result
// };


// recursive
function generate(numRows) {
    if (numRows === 0) return []
    if (numRows === 1) return [[1]]

    const previousRows = generate(numRows - 1)
    const newRows = new Array(numRows).fill(1)


    for (let index = 1; index < numRows - 1; index++) {
        newRows[index] = previousRows[numRows - 2][index - 1] + previousRows[numRows - 2][index]
    }
    previousRows.push(newRows)
    return previousRows
}

console.log(generate(5))