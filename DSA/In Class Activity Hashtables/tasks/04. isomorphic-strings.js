
/**
 * Determines if s1 an s2 are isomorphic.
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} true if isomorphic 
 */
const areIsomorphic = (s1, s2) => {

    if (s1.length !== s2.length) {
        return false
    }

    const map = new Map()
    const set = new Set()

    for (let i = 0; i < s1.length; i++) {
        
        const char1 = s1.charAt(i)
        const char2 = s2.charAt(i)

        if (map.has(char1) == true) {

            if (map.get(char1) !== char2) {
                return false
            }

        } else {

            if (set.has(char2)) {
                return false
            }

            map.set(char1, char2);
            set.add(char2);
        }
    }

    return true
}

// Tests:
const testCases = [
    { s1: 'egg', s2: 'add', expected: true },
    { s1: 'aab', s2: 'xyz', expected: false },
    { s1: 'paper', s2: 'title', expected: true },
    { s1: 'tidal', s2: 'paper', expected: false },
    { s1: 'JavaScript', s2: 'Java', expected: false },
    { s1: 'listen', s2: 'silent', expected: true },
    { s1: 'theeyes', s2: 'theysee', expected: false },
];

testCases.forEach(({ s1, s2, expected }, index) => {
    // arrange & act
    const result = areIsomorphic(s1, s2);

    // assert
    const message = result === expected
        ? 'Pass.'
        : `Fail. Expected: ${expected}. Actual: ${result}`

    console.log(`Test ${index + 1}: ${message}`);
});
