let input = ['1,6,4,','0'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(',').map(Number)
const index = +gets(); 

function containsSix(arr, index) {

    if(index >= arr.length) {
        return false
    }
    
    if(arr[index] === 6) {
        return true
    }

    return containsSix(arr, index + 1)
}
print(containsSix(arr, index))
