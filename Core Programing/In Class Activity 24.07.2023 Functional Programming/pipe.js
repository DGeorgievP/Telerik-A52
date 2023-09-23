const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();
const get3Chareacters = (string) => string.substring(0, 3);

const pipe = (fn1, fn2, fn3) => {
  return (person) => {
    const result1 = fn1(person);
    const result2 = fn2(result1);
    const result3 = fn3(result2);
    return result3
  };
};

console.log(pipe(
    getName, 
    uppercase, 
    get3Chareacters
    )({ name: "Pesho" }));
