let input = [2];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets()

const triangle = (n) => {

    if(n === 0) {
        return n
    }

    return n + triangle(n - 1)
}

print(triangle(n))