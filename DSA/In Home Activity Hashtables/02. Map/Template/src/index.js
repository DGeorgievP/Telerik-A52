//1
const occurrencesCount = (data, keySelector) => {
  const map = new Map();

  for (const elements of data) {
    const count = map.get(elements) || 0;
    map.set(elements, count + 1);
  }

  return map;
};

const occurrences = occurrencesCount(["js", "c#", "js", "c#", "c++"]);

const cities = [
  { country: "BG", city: "Sofia" },
  { country: "UK", city: "London" },
  { country: "UK", city: "Manchester" },
  { country: "BG", city: "Plovdiv" },
  { country: "US", city: "Chicago" },
];

const groupBy = (data, keySelector, valueSelector = (x) => x) => {
  const map = new Map();

  for (const obj of data) {
    const key = keySelector(obj)
    const value = valueSelector(obj)

    if(!map.has(key)) {
        map.set(key, [])
    }

    map.get(key).push(value)
  }

  return map

};

const byCountry = groupBy(cities, c => c.country)
const byCountry2 = groupBy(cities, c => c.country, c => c.city)

console.log(byCountry)
console.log(byCountry2)
console.log(occurrences)
