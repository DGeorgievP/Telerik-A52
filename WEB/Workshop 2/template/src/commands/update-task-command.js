import { wait } from '../utils/utils.js';
import { Command } from './command.js';

export class UpdateTaskCommand extends Command {
    async execute(name,updatedStatus) {
        
        try {
            await wait(500);
            const tasks = this.taskRegistry.tasks;
            const tasksToUpdate = tasks.find(task => task.name === name)

            if(tasksToUpdate) {
                tasksToUpdate.status = updatedStatus
                console.log('Task updated successfully')
            } else {
                console.log(`Task with name ${name} doesn't exist!`)
            }

        } catch (e) {
           console.log(`Problem with updating the task: ${e.message}`)
        }
    }

 }
