const input = ['5 10', '1000000010', '1111000011', '1000000000', '1100001000', '1000011100'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const proportions = gets().split(' ').map(Number);
const rows = proportions[0];
const columns = proportions[1];

const matrix = [];

for (let i = 0; i < rows; i++) {
  const row = gets();
  matrix.push(row.split('').map(Number));
}

let visited = Array.from({ length: rows }, () => Array(columns).fill(false));

function dfs(i, j, value) {
  if (i < 0 || j < 0 || i >= rows || j >= columns || visited[i][j] || matrix[i][j] !== value) {
    return 0;
  }

  visited[i][j] = true;

  return (
    1 +
    dfs(i - 1, j, value) +
    dfs(i + 1, j, value) +
    dfs(i, j - 1, value) +
    dfs(i, j + 1, value)
  );
}

const conquestSizes = [];

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    if (!visited[i][j] && matrix[i][j] === 1) {
      const conquestSize = dfs(i, j, matrix[i][j]);
      conquestSizes.push(conquestSize);
    }
  }
}

conquestSizes.sort((a, b) => b - a);

for (const size of conquestSizes) {
  console.log(size);
}