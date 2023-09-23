//1
const areAllElementsUnique = iterable => {
    const asSet = new Set(iterable)
    return asSet.size === iterable.length
} 

console.log(areAllElementsUnique('mitko'));
console.log(areAllElementsUnique('mittko'));

//2
const distinct = iterable => {
    const asSet = new Set(iterable)
    return[...asSet]
}
 
console.log(distinct('Mitkkko'))

//3
const union = (first, second) => new Set([...first, ...second])

const unionOne = union(new Set('mitko'), new Set('mitkoz'))
const unionTwo = union(new Set('mitko'), new Set('pavlef'))
const unionThree = union(new Set([1,9,0,2]), new Set([1,9,9,6])) 

console.log(unionOne)
console.log(unionTwo)
console.log(unionThree)

//4
const intersection = (first, second) => {
    const intersection = new Set()

    for(const elements of second) {
        if(first.has(elements)) {
            intersection.add(elements)
        }
    }

    return intersection
}

const intersectionOne = intersection(new Set('Mitko'), new Set('Timko'))
const intersectionTwo = intersection(new Set('Mitko'), new Set('Pavlef'))
const intersectionThree = intersection(new Set([1,9,0,2]), new Set([1,9,9,6])) 

console.log(intersectionOne)
console.log(intersectionTwo)
console.log(intersectionThree)

//5
const diff = (s1, s2) => [...s1].filter(x => ![...s2].includes(x))

const s1 = new Set('Mitko')
const s2 = new Set('itko')

console.log(diff(s1, s2))