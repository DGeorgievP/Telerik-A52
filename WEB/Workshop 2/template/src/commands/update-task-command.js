import { wait } from '../utils/utils.js';
import { Command } from './command.js';

export class UpdateTaskCommand extends Command {
    async execute(name,updatedStatus) {
        await wait(500);

        try {
            const tasks = this.taskRegistry.tasks;
            const tasksToUpdate = tasks.find(task => task.name === name)

            if(!tasksToUpdate) {
                return `Task with name ${name} doesn't exist!`
            }

            tasksToUpdate.status = updatedStatus
            console.log('Task updated successfully')

        } catch (e) {
            return`Problem with updating the task: ${e.message}`
        }
    }

 }
