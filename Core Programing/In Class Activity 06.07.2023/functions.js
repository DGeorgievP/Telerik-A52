//1
const array = [1,2,3,4,5,6,7,8,9,10]

const forEach = (arr,fn) => {
    for(let i = 0; i < array.length;i++) {
        fn(array[i])
    }
}

const func = function(element) {
    console.log(element *2)
}

forEach(array, func)