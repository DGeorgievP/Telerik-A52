let input = ['hoopa'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const str = gets().split('')
const bigestBlock = ""
const curentBlock = ""

for(Element in str) {
    if(str[i] === str[i+1]) {
        curentBlock += str[i]
    } else {
        curentBlock = ""
    }
}
