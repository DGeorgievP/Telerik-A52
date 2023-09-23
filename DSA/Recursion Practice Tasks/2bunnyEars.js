let input = [5];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const ears = +gets()

const bunnyEars = (ears) => {

    if (ears < 2) {
        return ears
    } else {
        return 2 + bunnyEars(ears - 1)
    }
}
print(bunnyEars(ears))