let input = [7];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const bunnies = +gets()

const bunnyEarsTwo = (bunnies) => {

    if(bunnies === 0) {
        return bunnies
    }

    if(bunnies % 2 === 0) {
        return 3 + bunnyEarsTwo(bunnies - 1)
    } else {
        return 2 + bunnyEarsTwo(bunnies - 1)
    }

    //or this
    //return bunnyEarsTwo(bunnies - 1) + (bunnies % 2 === 0 ? 3 : 2)
    
}

print(bunnyEarsTwo(bunnies))