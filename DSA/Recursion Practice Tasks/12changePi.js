let input = [`xpix`];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const str = gets()

const changePi = (str) => {

    if (str.length < 2) {
        return str;
    }

    if (str.slice(0, 2) === "pi") {
        return "3.14" + changePi(str.slice(2));
    } else {
        return str[0] + changePi(str.slice(1));
    }
};
print(changePi(str))