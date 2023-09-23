let input = [126];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n  = +gets()

const sumDigit = (n) => {

    if(n < 10) {
        return n
    }

    return (n % 10) + sumDigit(Math.floor(n/10))

}

print(sumDigit(n))