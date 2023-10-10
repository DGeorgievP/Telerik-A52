import fs from 'fs/promises';

 (async () => {
    const data = await Promise.all([
        fs.readFile('/data/ids-to-names.json', { encoding: 'utf-8' }),
        fs.readFile('/data/ids-to-cities.json', { encoding: 'utf-8' }),
        fs.readFile('/data/ids-to-grades.json', { encoding: 'utf-8' }),
    ])

    const [names, cities, grades] = data.map(x => JSON.parse(x))

    const studentRecords = names
    .map(el => ({...el, city: cities.find(c => c.id === el.id).city }))
    .map(el => ({...el, grades: grades.find(g => g.id === el.id).grades}))

fs.writeFile('data/student-data.json', JSON.stringify(studentRecords), { encoding: 'utf-8' })
})