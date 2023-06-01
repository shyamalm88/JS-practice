const numIsland = (grid) => {
  let row = grid.length;
  let col = grid[0].length;
  let count = 0;
  let visited = new Array(row + 1);
  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(col + 1);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!visited[i][j] && grid[i][j] == 1) {
        count++;
        BFS(row, col, visited, grid);
      }
    }
  }
  console.log(count);
  return count;
};

const BFS = (row, col, visited, grid) => {
  visited[row][col] = 1;
  let q = [];
  q.push([row, col]);
  let n = grid.length;
  let m = grid[0].length;

  while (q.length) {
    row = q[0][0];
    col = q[0][1];
    q.pop();

    for (let deltarow = -1; deltarow <= 1; deltarow++) {
      for (let deltacol = -1; deltacol <= 1; deltacol++) {
        let neighborRow = row + deltarow;
        let neighborCol = col + deltacol;
        if (
          neighborRow >= 0 &&
          neighborRow < n &&
          neighborCol >= 0 &&
          neighborCol < m &&
          grid[neighborRow][neighborCol] == 1 &&
          !visited[neighborRow][neighborCol]
        ) {
          visited[neighborRow][neighborCol] = 1;
          q.push([neighborRow, neighborCol]);
        }
      }
    }
  }
};

numIsland([
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1],
]);
