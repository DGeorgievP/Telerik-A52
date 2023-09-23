let input = [`xxhixx`];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const str = gets().split('')

const countLetters = (str) => {

    if(str.length === 0) {
        return 0
    }

    if(str[0] === 'x') {
        return 1 + countLetters(str.slice(1))
    } else {
        return countLetters(str.slice(1))
    }

}
print(countLetters(str))
