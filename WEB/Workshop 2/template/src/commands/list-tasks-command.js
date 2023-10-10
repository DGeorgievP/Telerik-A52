import { wait } from '../utils/utils.js';
import { Command } from './command.js';

export class ListTasksCommand extends Command {
    async execute() {
        await wait(500);

        try {
            const tasks = this.taskRegistry.tasks

            if (tasks.length === 0) {
                return 'No tasks matching search criteria'
            } else {
                const taskList = tasks.map(task => `Task: ${task.name} (${task.status}))`.join('\n'))
                return taskList
            }
            
        } catch (e) {
            console.log(`Problem with listing tasks: ${e.message}`)
        }

    }
}
