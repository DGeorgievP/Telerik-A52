let lineAsString = gets();
let linesAsStringAsArray = lineAsString.split(' ');


let sortedNames = [];
for(let i = 0; i < linesAsStringAsArray.length; i++){
    let currentName = linesAsStringAsArray[i];
    let arrayFromCurrentName = Array.from(currentName).sort().join('');

    sortedNames.push(arrayFromCurrentName);
}
print(sortedNames.sort().join(' '))