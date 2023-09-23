let input = [717];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets()

const occurrences = (n) => {

    if (n < 1) {
        return n
    }

    if (n % 10 === 7) {
        return 1 + occurrences(Math.floor(n/10))
    } else {
        return occurrences(Math.floor(n/10))
    }

}
print(occurrences(n))