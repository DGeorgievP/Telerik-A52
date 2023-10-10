import { Task } from '../models/task.js';
import { wait } from '../utils/utils.js';
import { Command } from './command.js';

export class AddTaskCommand extends Command {
    async execute(name, status) {
        
        try {
            await wait(500);
            const taskRegistry = this.taskRegistry
            const newTask = new Task(name, status)
            taskRegistry.addTask(newTask)
            console.log('Task added successfully')
        } catch (e) {
            console.log(`Problem with adding the task: ${e.message}`)
        }

    }
}
