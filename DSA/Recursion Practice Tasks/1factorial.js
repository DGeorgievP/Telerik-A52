let input = [5];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets()

const factorial = (n) => {

    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }

}
print(factorial(n))