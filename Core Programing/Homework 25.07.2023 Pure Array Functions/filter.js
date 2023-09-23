//Filter

//Task 1
const numbers1 = [1, 15, 2, 8, 31, 5, 9];
const filteredNumbers1 = numbers1.filter((num) => num < 5 || num > 15);
console.log(`\nTask 1`)
console.log(filteredNumbers1);

//Task2
const numbers2 = [1, 15, 2, 8, 31, 5, 9];
const filteredNumbers2 = numbers2.filter((num) => num > 5 && num < 15);
console.log(`\nTask 2`)
console.log(filteredNumbers2);

//Task 3
const numbersPrime = [1, 15, 2, 8, 31, 5, 9];
const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
};

const primeNumbers = numbersPrime.filter(isPrime);
console.log(`\nTask 3`)
console.log(primeNumbers);

//Task 4
const animals = ['cat', 'dog', 'elephant', 'cucumber']
const longerThan5 = animals.filter((char) => char.length > 5)
console.log(`\nTask 4`)
console.log(longerThan5)

//Task 5
const animals2 = ['cat', 'dog', 'duck', 'cucumber']
const substring = 'uc'
const filteredString = animals2.filter((sub) => sub.includes(substring) )
console.log(`\nTask 5`)
console.log(filteredString)

//Task 6
const users = [
  { username: 'Pesho', password: 'password' },
  { username: 'Gosho', password: '123456' },
  { username: 'Penka', password: '!meton@k0tkata' },
  { username: 'Gergana', password: 'geri2002' },
  { username: 'Ivan', password: 'topProgramist1' },
  { username: 'Iordanka', password: 'SHOUTING2108' },
];
const isStrong = (password) => {
  const chars = password.split('');
  const upper = chars.some(ch => 'abcdefghijklmnopqrstuvwxyz'.includes(ch));
  const lower = chars.some(ch => 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().includes(ch));
  const num = chars.some(ch => !isNaN(ch));
 
  return password.length > 8 && upper && lower && num;
}
 
const strongPasswordUsers = users.filter(u => isStrong(u.password));
console.log('\nTask6:');
console.log(strongPasswordUsers); 