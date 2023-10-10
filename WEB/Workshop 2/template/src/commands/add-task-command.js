import { Task } from '../models/task.js';
import { wait } from '../utils/utils.js';
import { Command } from './command.js';

export class AddTaskCommand extends Command {
    async execute(name, status) {
        await wait(500);

        try {
            const newTask = new Task(name, status)
            this.taskRegistry.addTask(newTask)
            return 'Task added successfully'

        } catch (e) {
            return `Problem with adding the task: ${e.message}`
        }

    }
}
