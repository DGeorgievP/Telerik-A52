const input = [`2 4`];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numbers = gets().split(' ').map(Number)

let K = numbers[0]
let N = numbers[1]
const backtracking = []


function findNthMember(K, N) {

   if(N === 1) {
    return K
   }

   const E2 = K + 1;
   N--;

   if(N === 1) {
    return E2
   }

   backtracking.push(E2)

   const E3 = 2 * K + 1
   N--

   if(N === 1) {
    return E3
   }

   backtracking.push(E3)

   const E4 = K + 2;
   N--

   if(N === 1) {
    return E4
   }

   backtracking.push(E4)

   const E5 = E2 + 1
   N--

   if(N === 1) {
    return E5
   }

   backtracking.push(E5)

   const E6 = 2 * E2 + 1
   N--

   if(N === 1) {
    return E6
   }

   backtracking.push(E6)

   const E7 = E2 + 2
   N--

   if(N == 1) {
    return E7
   }

   backtracking.push(E7)

   return findNthMember(backtracking[0], N, backtracking.slice(1))
}

const result = findNthMember(K, N, backtracking)
print(result)