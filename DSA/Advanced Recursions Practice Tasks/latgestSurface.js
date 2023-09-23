const input = ['5 6', '1 3 2 2 2 4 3 3 3 2 4 4 4 3 1 2 3 3 4 3 1 3 3 1 4 3 3 3 1 1'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const proportions = gets().split(' ').map(Number)
const matrix = gets().split(' ').map(Number)
const rows = proportions[0]
const columns = proportions[1]
let visited = Array.from({ length: rows }, () => Array(columns).fill(false));
let maxCount = 0


function dfs(i, j,value) {
    if (i < 0 || j < 0 || i >= rows || j >= columns || visited[i][j] || matrix[i][j] !== value) {
        return 0;
    }

    visited[i][j] = true

    return 1 + dfs(i - 1, j, value) + dfs(i + 1, j, value) + dfs(i, j - 1, value) + dfs(i, j + 1, value);
}

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        if (!visited[i][j]) {
            maxCount = Math.max(maxCount, dfs(i, j, matrix[i][j]));
        }
    }
    
}

print(maxCount)

// let input = [
//     '5 6',
//     '1 3 2 2 2 4',
//     '3 3 3 2 4 4',
//     '4 3 1 2 3 3',
//     '4 3 1 3 3 1',
//     '4 3 3 3 1 1'
// ];

// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// let [n, m] = gets().split(' ').map(Number);
// let matrix = Array.from({ length: n }, () => gets().split(' ').map(Number));
// let visited = Array.from({ length: n }, () => Array(m).fill(false));
// let maxCount = 0;

// function dfs(i, j, value) {
//     if (i < 0 || j < 0 || i >= n || j >= m || visited[i][j] || matrix[i][j] !== value) {
//         return 0;
//     }

//     visited[i][j] = true;

//     return 1 + dfs(i - 1, j, value) + dfs(i + 1, j, value) + dfs(i, j - 1, value) + dfs(i, j + 1, value);
// }

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//         if (!visited[i][j]) {
//             maxCount = Math.max(maxCount, dfs(i, j, matrix[i][j]));
//         }
//     }
// }

// print(maxCount);