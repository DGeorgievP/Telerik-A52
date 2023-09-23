let input = ['4'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets()
let matrix = []
let counter = 1
let sum = 0

for (let i = 0; i < n; i++) {
    matrix[i] = Array.from({ length: n })
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        matrix[i][j] = counter;
        counter *= 2

        if (j > i) {
            sum += (matrix[i][j])
        }
    }

    counter = matrix[i][0] * 2
}

print(sum)