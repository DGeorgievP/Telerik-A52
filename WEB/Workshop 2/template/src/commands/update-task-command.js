import { Command } from "./command";

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
            return 'Task updated successfully'
        } catch (e) {
            return`Problem with updating the task: ${e.message}`
        }
    }

 }
