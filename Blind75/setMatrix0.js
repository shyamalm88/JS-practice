const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

const setMatrix0 = (matrix) => {
  let col0 = 1;
  let col = matrix[0].length;
  let row = matrix.length;

  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) col0 = 0;
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 1; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    if (col0 === 0) matrix[i][0] = 0;
  }
  return matrix;
};

console.log(setMatrix0(matrix));
