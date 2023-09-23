/**
 * Count how many coins are special 
 * @param {string} coins Coins to check
 * @param {string} catalogue The catalogue of special coins
 * @returns {number} The count of special coins  
 */
const specialCoins = (coins, catalogue) => {
   const mapSet = new Set(catalogue)
   let result = 0

    for(const elements of coins) {
        if(mapSet.has(elements)) {
            result++
        }
    }

    return result
}

// Tests:
const testCases = [
    { coins: 'abcD', catalogue: 'abd', expected: 2 },
    { coins: 'abcDD', catalogue: 'cDfg', expected: 3 },
    { coins: 'aaaCCcccd', catalogue: 'acCe', expected: 8 },
    { coins: 'aaBBbbbc', catalogue: 'Bc', expected: 3 }
];

testCases.forEach(({ coins, catalogue, expected }, index) => {
    // arrange & act
    const count = specialCoins(coins, catalogue);

    // assert
    const message = expected === count
        ? 'Pass.'
        : `Fail. Expected: ${expected}. Actual: ${count}`

    console.log(`Test ${index + 1}: ${message}`);
});
