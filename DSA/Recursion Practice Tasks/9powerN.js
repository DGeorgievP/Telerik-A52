let input = [3
    , 1];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const base = +gets()
const n = +gets()

const powerN = (base, n) => {

    if(n === 0) {
        return 1
    }

    return base * powerN(base, n-1)

}
print(powerN(base, n))