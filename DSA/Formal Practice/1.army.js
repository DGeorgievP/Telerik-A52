const input = ['7','P4 P2 P3 S1 C2 P1 C1']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numberOfSoldiers = +gets();
const soldiersToVisit = gets().split(' ')

const sergeant = []
const corporal = []
const private = []
  
for(const soldier of soldiersToVisit) {
    if(soldier.startsWith('S')) {
        sergeant.push(soldier)
    } else if (soldier.startsWith('C')) {
        corporal.push(soldier)
    } else if (soldier.startsWith('P')) {
        private.push(soldier)
    }
}

const hungrySoldiers = [...sergeant, ...corporal, ...private];
print(hungrySoldiers);