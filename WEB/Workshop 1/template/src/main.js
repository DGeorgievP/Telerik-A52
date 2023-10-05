import { FileHandler } from './services/file-handler.js';

const reader = new FileHandler();

new Promise(function (resolve, reject) {

    reader.read('data/tasks.all.json', 'utf-8')
        .then((data) => {
            const pendingTasks = data.tasks.status.filter((task) => !task.done)
            const doneTasks = data.tasks.status.filter((task) => task.done)

            const writePending = reader.write(`data/tasks.pending.json`, JSON.stringify(pendingTasks))
            const writeDone = reader.write(`data/tasks.done.json`, JSON.stringify(doneTasks))

            return Promise.all([writePending, writeDone])
        })
        .then(() => {
            resolve('Data written successfully')
        })
        .catch((error) => {
            console.error(error)
            reject(error)
        })
})
