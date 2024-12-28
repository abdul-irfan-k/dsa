function setZeroes(matrix: number[][]): void {
    let rowZero = false;
    let columnZero = false
   
    let rows = matrix.length
    let columns = matrix[0].length
    let row = 0
    let colum = 0

    for ( row = 0; row < rows; row++) {
        for ( colum = 0; colum < columns; colum++) {
            if (row == 0 && matrix[0][colum] == 0) {
                rowZero = true
            }
            if (colum == 0 && matrix[row][0] == 0) {
                columnZero = true
            }
            if (matrix[row][colum] == 0) {
                matrix[row][0] = 0
                matrix[0][colum] = 0
            }
        }
    }

    for ( row = 1; row < rows; row++) {
        for ( colum = 1; colum < columns; colum++) {
            if (matrix[row][0] == 0 || matrix[0][colum] == 0)
                matrix[row][colum] = 0
        }
    }
    if (columnZero) {
        for ( row = 0; row < rows; row++) {
            matrix[row][0] = 0
        }
    }
    if (rowZero) {
        matrix[0].fill(0)
    }
};

let sample = [[-4, -2147483648, 6, -7, 0], [-8, 6, -8, -6, 0], [2147483647, 2, -9, -6, -10]]
setZeroes(sample)
console.log(sample)
sample = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
setZeroes(sample)
console.log(sample)