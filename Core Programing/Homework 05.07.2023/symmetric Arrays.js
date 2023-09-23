let input = [
    4,
    "1 2 3 2 1",
    "2 1",
    "1 2 2 1",
    "4"
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets()
arr = []

for (let i = 1; i <= n; i++) {
    arr = gets().split(" ")

    let isSymetric = 'Yes';
    
    for (let j = 0; j < arr.length / 2; j++) {
        if (arr[j] !== arr[arr.length - 1 - j]) {
            isSymetric = 'No';
        }
    }

    print(isSymetric)
}