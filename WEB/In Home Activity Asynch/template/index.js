import fs from 'fs';

fs.readFile('data/ids-to-names.json', { encoding: 'utf-8' }, function (err, data) {
    if (err) {
        console.error(err);
        return;
    };

    const studentNames = JSON.parse(data)

    fs.readFile('data/ids-to-cities.json', { encoding: 'utf-8' }, function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        const studentCities = JSON.parse(data);

        fs.readFile('data/ids-to-grades.json', { encoding: 'utf-8' }, function (err, data) {
            if (err) {
                console.error(err);
                return;
            }

            const studentsGrades = JSON.parse(data);

            const studentRecords = studentNames
                .map(el => ({...el, city: studentCities.find(c => c.id === el.id).city }))
                .map(el => ({...el, grades: studentsGrades.find(g => g.id === el.id).grades}))

            fs.writeFile('data/student-data.json', JSON.stringify(studentRecords), { encoding: 'utf-8' }, function (err) {
                if (err) {
                    console.error(err)
                    return;
                } else {
                    console.log('Students records are live')
                }
            })
        });
    });
});