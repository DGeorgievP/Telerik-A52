const input = [3, 'o W'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
const symbols = gets().split('').filter(char => char !== ' ').sort(); 

const variations = (symbols, backtrack = []) => {
  if (backtrack.length === n) {
    print(backtrack.join(''));
    return;
  }

  for (const el of symbols) {
    backtrack.push(el);
    variations(symbols, backtrack);
    backtrack.pop();
  }
};

variations(symbols);
