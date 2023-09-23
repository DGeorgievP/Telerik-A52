let input = ['3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = Number(gets())

let columns = number
let rows = number

let counter = 1


const matrix = Array.from({ length: columns})
for (let i = 0; i < columns; i++) {
    matrix[i] = Array.from({ length: rows})
}

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        matrix[j][i] = counter;
        counter++
    }
}
 
for (let x = 0; x < matrix.length; x++){
    let currentMatrix = matrix[x];
    console.table(currentMatrix.join(' '));
}