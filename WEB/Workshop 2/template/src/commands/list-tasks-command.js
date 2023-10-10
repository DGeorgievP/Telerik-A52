import { wait } from '../utils/utils.js';
import { Command } from './command.js';

export class ListTasksCommand extends Command {
    async execute(taskName = '') {

        try {
            await wait(500);
            const tasks = this.taskRegistry.tasks
            const filteredTasks = []

            for (const task of tasks) {
                if (task.name.incudes(taskName)) {
                    filteredTasks.push(`Task: ${task.name} (${task.status})`)
                }
            }

            if (filteredTasks.length === 0) {
                console.log('No tasks matching search criteria.');
            } else {
                return console.log(filteredTasks.join('\n'));
            }

        } catch (e) {
            console.log(`Problem with listing tasks: ${e.message}`)
        }

    }
}
