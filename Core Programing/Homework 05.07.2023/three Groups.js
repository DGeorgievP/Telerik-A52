let input = ['1 2 3 4 5 6 7'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const group0 = []
const group1 = []
const group2 = []

const inputArr = gets().split(' ')

for (let i = 0; i < inputArr.length; i++) {
    const elements = inputArr[i]
    
    const result = elements % 3

    if (result === 0) {
        group0.push(elements)
    }

    if (result === 1) {
        group1.push(elements)
    }

    if (result === 2) {
        group2.push(elements)
    }
}

print(group0.join(' '))
print(group1.join(' '))
print(group2.join(' '))