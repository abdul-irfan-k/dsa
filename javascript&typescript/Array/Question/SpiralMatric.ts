function spiralOrder(matrix: number[][]): number[] {
  const result = [];
  let rows = matrix.length;
  let row = 0;
  let cols = matrix[0].length;
  let col = -1;
  let direction = 1;

  while (rows > 0 && cols > 0) {
    for (let i = 0; i < cols; i++) {
      col += direction;
      result.push(matrix[row][col]);
    }
    rows--;

    for (let i = 0; i < rows; i++) {
      row += direction;
      result.push(matrix[row][col]);
    }
    cols--;
    direction *= -1;
  }

  return result;
}
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
console.log(
  spiralOrder([
    [1, 2],
    [3, 4],
  ])
);
console.log(spiralOrder([[1], [3]]));
