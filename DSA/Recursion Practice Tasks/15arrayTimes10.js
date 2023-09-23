let input = ['1,2,20,', '0'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(',').map(Number)
const index = +gets();

const arrayTimesTen = (arr, index) => {

    if (index >= arr.length) {
        return false
    }

    if (arr[index] * 10 === arr[index +1]) {
        return true
    }

    return arrayTimesTen(arr, index + 1)

}
print(arrayTimesTen(arr, index))