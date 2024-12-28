// https://leetcode.com/problems/rotate-image/


const rotateImage = (matrix: number[][]) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse()
    }


    console.log(matrix)
};



// const rotateImage = (matrix: number[][]) => {
//     const n = matrix.length
//     const layers = Math.floor(n / 2)

//     for(let layer=0;layer<layers;layer++){
//         const start = layer
//         const end = 
//     }
//     console.log(matrix)
// };

rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]])