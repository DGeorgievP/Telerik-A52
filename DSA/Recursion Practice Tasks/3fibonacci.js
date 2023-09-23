let input = [7];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const num = +gets()

const fibonacci = (num, a = 0, b = 1) => {

    if(num === 0) return a
    if(num === 1) return b


    return fibonacci(num - 1, b, a + b)

}

print(fibonacci(num))