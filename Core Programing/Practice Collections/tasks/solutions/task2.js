// People with cities and population
/**
 * 
 * @param {{cities: Array<{ id: number, name: string }>, people: Array<{ name: string, city: number }>}} data 
 */
export default function transformPeopleData(data) {
  // your code starts here
  const cityPop = data.people.reduce((acc, person) => {
    const cityId = person.city
    acc[cityId] = (cityId || 0) + 1;
    return acc;
  }, {}); 

  const final = data.people.map(person => ({
    name: person.name,
    city: {
      name: data.cities.name,
      population: cityPop,
    }
  })); //final obj with name, pop and city

  return final;
  // your code ends here
}