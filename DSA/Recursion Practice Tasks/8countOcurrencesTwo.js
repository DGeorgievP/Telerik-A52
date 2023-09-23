let input = [818];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets()

const occurrencesTwo = (n) => {

    if (n === 0) {
        return 0
    }

    const lastDigit = n % 10
    const firstDigits = Math.floor(n/10)

    if(lastDigit === 8) {

        if(firstDigits % 10 === 8) {
            return 2 + occurrencesTwo(firstDigits)
        } else {
            return 1 + occurrencesTwo(firstDigits)
        }

    } else {
        return occurrencesTwo(firstDigits)
    }

}

print(occurrencesTwo(n))