let input = [`xxhixx`];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const str = gets()

const countLetters = (str, count = 0) => {

    if(str.length < 2) {
        return count
    }


    if(str[0] === 'h' && str[1] === 'i') {
    count++
    }

    let rest = str.slice(1)
    return countLetters(rest, count)
}
print(countLetters(str))

