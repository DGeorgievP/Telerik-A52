// Reduced matrix transposition
export default function (data) {
  // your code starts here 
    const rowSums = data.map(row => row.reduce((acc, val) => acc + val, 0));
    const elementsDivide = data.map((row, i) => row.map((val) => val / rowSums[i]));
    const transposedMatrix = elementsDivide[0].map((_, colIndex) => 
    elementsDivide.map((row) => row[colIndex]));
    //console.log(transposedMatrix)
    return transposedMatrix
  // your code ends here
}