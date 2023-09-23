let input = ['1,2,11,','0'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(',').map(Number)
const index = +gets(); 

function containsEleven(arr, index) {

    if(index >= arr.length) {
        return 0
    }
    
    if(arr[index] === 11) {
        return 1 + containsEleven(arr, index + 1)
    } else {
        return containsEleven(arr, index + 1)
    }

}
print(containsEleven(arr, index))