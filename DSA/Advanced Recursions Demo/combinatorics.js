//@ts-check

// [1, 2, 3]
// 111
// 112
// 113
// ...
// 332
// 333

// for (const i of [1, 2, 3]) {
//     for (const j of [1, 2, 3]) {
//         for (const k of [1, 2, 3]) {
//             console.log('' + i + j + k);
//         }
//     }
// }


// 1234
// 1243
// ...
// 4321

function combo(arr, backtrack = []) {
    // bottom case
    if (backtrack.length === arr.length) {
        console.log(backtrack.join(''));
        return;
    }

    for (const el of arr) {
        if (!backtrack.includes(el)) {
            backtrack.push(el);
            combo(arr, backtrack);
            backtrack.pop();
        }
    }
}

combo([1, 2, 3, 4]);