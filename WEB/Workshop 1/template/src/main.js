import { FileHandler } from './services/file-handler.js';

const reader = new FileHandler();

function logError(err) {
    const errMessage = `${err.message}\n`;
    const errReader = reader.read('logs/default.log')

    .then((data) => {
        const logFile = errMessage + data
        return reader.write('logs/default.log', logFile)
    })
}

new Promise(function (resolve, reject) {

    reader.read('data/tasks.all.json', 'utf-8')
    .then((data) => JSON.parse(data))
        .then((data) => {
            const pendingTasks = data.tasks.filter((task) => task.status === 'pending')
            const doneTasks = data.tasks.filter((task) => task.status === 'done')

            const writePending = reader.write('data/tasks.pending.json', JSON.stringify({pendingTasks}, null, 2))
            const writeDone = reader.write('data/tasks.done.json', JSON.stringify({doneTasks}, null, 2))

            return Promise.all([writePending, writeDone])
        })
        .then(() => {
            console.log('Data written successfully')
        })
        .catch(logError)
})
