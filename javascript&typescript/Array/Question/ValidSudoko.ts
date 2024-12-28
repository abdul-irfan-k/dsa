
function isValidSudoku(board: string[][]): boolean {
    let row = board.map(() => new Set())
    let column = board.map(() => new Set())
    let box = board.map(() => new Set())
    let element = ""

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            element = board[i][j]
            if (element == ".") continue
            
            let columnIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3)
            if (row[i].has(element) || column[j].has(element) || box[columnIndex].has(element))
                return false
            row[i].add(element)
            column[j].add(element)
            box[columnIndex].add(element)
        }
    }
    return true
};


const test1 =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

const test2 = 
    [["8", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


console.log(isValidSudoku(test1))
console.log(isValidSudoku(test2))